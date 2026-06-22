import { useCallback, useEffect, useRef, useState } from 'react'
import {
  INTERVENTION_EFFECTS,
  NORMAL_PARAMS,
  PRESSURE_BUFFER_SIZE,
} from './CirculatorySystemSimulator.constants'
import type {
  BloodFlowPoint,
  CompensationReflexes,
  CompensationState,
  HemodynamicDerived,
  HemodynamicParams,
  Intervention,
  ShockType,
} from './CirculatorySystemSimulator.types'
import {
  applyShock,
  computeCompensationState,
  computeDerived,
  computeReflexes,
  generatePressureSample,
} from './CirculatorySystemSimulator.utils'

interface SustainedEffect {
  svrDelta: number
  hrDelta: number
  efDelta: number
  remainingMs: number
}

export function useCirculatorySystemSimulator() {
  const [shockType, setShockTypeState] = useState<ShockType>('none')
  const [params, setParams] = useState<HemodynamicParams>(NORMAL_PARAMS)
  const [derived, setDerived] = useState<HemodynamicDerived>(() => computeDerived(NORMAL_PARAMS))
  const [compensationState, setCompensationState] = useState<CompensationState>('compensated')
  const [reflexes, setReflexes] = useState<CompensationReflexes>({
    tachycardiaActive: false,
    vasoconstrictionActive: false,
    renalRetentionActive: false,
    respiratoryCompensationActive: false,
  })
  const [pressureBuffer, setPressureBuffer] = useState<BloodFlowPoint[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [interventionLog, setInterventionLog] = useState<{ label: string; t: number }[]>([])

  const paramsRef = useRef<HemodynamicParams>(NORMAL_PARAMS)
  const timeRef = useRef<number>(0)
  const sampleIndexRef = useRef<number>(0)
  const sustainedEffectsRef = useRef<SustainedEffect[]>([])

  useEffect(() => { paramsRef.current = params }, [params])

  // Recalcular derivados y reflejos autonómicos cuando cambian los parámetros
  useEffect(() => {
    const d = computeDerived(params)
    setDerived(d)
    setCompensationState(computeCompensationState(d, params.spo2))
    setReflexes(computeReflexes(params, d))
  }, [params])

  // Loop de simulación: genera muestras de presión y aplica reflejos autonómicos
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      const dt = 200  // ms
      timeRef.current += dt

      const p = paramsRef.current
      const d = computeDerived(p)

      // Generar muestra de presión aórtica
      const pressureVal = generatePressureSample(timeRef.current, p, d)
      const newPoint: BloodFlowPoint = {
        t: sampleIndexRef.current++,
        flow: Math.max(0, (pressureVal - d.diastolicBpMmhg) / Math.max(1, d.pulsePressureMmhg)),
        pressure: Math.round(pressureVal),
      }

      setPressureBuffer(prev => {
        const next = [...prev, newPoint]
        return next.length > PRESSURE_BUFFER_SIZE ? next.slice(next.length - PRESSURE_BUFFER_SIZE) : next
      })

      // Aplicar reflejos autonómicos graduales (modelo simplificado)
      const map = d.meanArterialPressureMmhg
      setParams(prev => {
        let { heartRateBpm, svr, spo2 } = prev
        // Taquicardia compensatoria (barorreceptores)
        if (map < 75 && heartRateBpm < 140) heartRateBpm = Math.min(160, heartRateBpm + 1.5)
        else if (map > 90 && heartRateBpm > 72) heartRateBpm = Math.max(60, heartRateBpm - 0.5)
        // Vasoconstricción periférica (simpático)
        if (map < 70 && svr < 1800) svr = Math.min(2000, svr + 15)
        else if (map > 95 && svr > 800) svr = Math.max(800, svr - 8)
        // SpO2 mejora levemente con compensación respiratoria
        if (spo2 < 98 && spo2 > 85) spo2 = Math.min(98, spo2 + 0.1)

        // Procesar efectos sostenidos (vasopresores, inotrópicos)
        sustainedEffectsRef.current = sustainedEffectsRef.current
          .map(e => ({ ...e, remainingMs: e.remainingMs - dt }))
          .filter(e => e.remainingMs > 0)

        let efDelta = 0
        for (const e of sustainedEffectsRef.current) {
          svr = Math.max(200, svr + e.svrDelta * (dt / 1000))
          heartRateBpm = Math.min(200, Math.max(20, heartRateBpm + e.hrDelta * (dt / 1000)))
          efDelta += e.efDelta * (dt / 1000)
        }

        const ef = Math.min(0.85, Math.max(0.08, prev.ejectionFraction + efDelta))

        if (
          Math.abs(heartRateBpm - prev.heartRateBpm) < 0.01 &&
          Math.abs(svr - prev.svr) < 0.01 &&
          Math.abs(ef - prev.ejectionFraction) < 0.0001 &&
          spo2 === prev.spo2
        ) return prev

        const updated = { ...prev, heartRateBpm: Math.round(heartRateBpm), svr: Math.round(svr), ejectionFraction: ef, spo2 }
        paramsRef.current = updated
        return updated
      })
    }, 200)

    return () => clearInterval(interval)
  }, [isRunning])

  const setShockType = useCallback((type: ShockType) => {
    setShockTypeState(type)
    const newParams = applyShock(type)
    setParams(newParams)
    paramsRef.current = newParams
    sustainedEffectsRef.current = []
    setPressureBuffer([])
    sampleIndexRef.current = 0
    timeRef.current = 0
  }, [])

  const applyIntervention = useCallback((intervention: Intervention) => {
    if (intervention === 'none') return
    const fx = INTERVENTION_EFFECTS[intervention]
    setInterventionLog(prev => [{ label: fx.label, t: Date.now() }, ...prev.slice(0, 9)])

    setParams(prev => {
      const updated = {
        ...prev,
        totalBloodVolumeMl: Math.min(6500, prev.totalBloodVolumeMl + fx.volumeDeltaMl),
        ejectionFraction: Math.min(0.85, Math.max(0.08, prev.ejectionFraction + fx.efDelta * 0.3)),
        heartRateBpm: Math.min(200, Math.max(20, prev.heartRateBpm + fx.hrDelta)),
      }
      paramsRef.current = updated
      return updated
    })

    if (fx.duration === 'sustained') {
      sustainedEffectsRef.current.push({
        svrDelta: fx.svrDelta,
        hrDelta: fx.hrDelta,
        efDelta: fx.efDelta * 0.3,
        remainingMs: 120_000,
      })
    } else if (fx.duration === 'transient') {
      sustainedEffectsRef.current.push({
        svrDelta: fx.svrDelta * 0.4,
        hrDelta: fx.hrDelta * 0.5,
        efDelta: fx.efDelta * 0.2,
        remainingMs: 30_000,
      })
    } else {
      // instant: solo el delta de SVR
      setParams(prev => {
        const updated = { ...prev, svr: Math.max(200, Math.min(2500, prev.svr + fx.svrDelta)) }
        paramsRef.current = updated
        return updated
      })
    }
  }, [])

  const updateParam = useCallback((key: keyof HemodynamicParams, value: number) => {
    setParams(prev => {
      const updated = { ...prev, [key]: value }
      paramsRef.current = updated
      return updated
    })
  }, [])

  const reset = useCallback(() => {
    setShockTypeState('none')
    setParams(NORMAL_PARAMS)
    paramsRef.current = NORMAL_PARAMS
    sustainedEffectsRef.current = []
    setPressureBuffer([])
    sampleIndexRef.current = 0
    timeRef.current = 0
    setInterventionLog([])
  }, [])

  return {
    shockType,
    setShockType,
    params,
    updateParam,
    derived,
    compensationState,
    reflexes,
    pressureBuffer,
    isRunning,
    setIsRunning,
    applyIntervention,
    interventionLog,
    reset,
  }
}
