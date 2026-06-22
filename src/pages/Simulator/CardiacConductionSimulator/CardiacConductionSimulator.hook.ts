import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ECG_BUFFER_SIZE,
  ECG_SAMPLE_RATE,
  HEART_RATE_PRESETS,
  PHASE_DEFINITIONS,
  ZONE_INFO,
} from './CardiacConductionSimulator.constants'
import type {
  AnatomicalZone,
  AnatomicalZoneInfo,
  AutonomicMode,
  ConductionParams,
  ConductionPhase,
  EcgDataPoint,
  EcgSegmentLabel,
  HeartRatePreset,
  PlaybackState,
  SpeedMultiplier,
} from './CardiacConductionSimulator.types'
import {
  applyAutonomicEffect,
  contractilityScale,
  generateConductionEcgSample,
  resolvePhase,
  scaledPhaseDuration,
} from './CardiacConductionSimulator.utils'

export function useCardiacConductionSimulator() {
  const [playback, setPlayback] = useState<PlaybackState>('paused')
  const [speed, setSpeed] = useState<SpeedMultiplier>(1)
  const [heartRatePreset, setHeartRatePresetState] = useState<HeartRatePreset>('normal')
  const [autonomicMode, setAutonomicModeState] = useState<AutonomicMode>('none')
  const [params, setParams] = useState<ConductionParams>(HEART_RATE_PRESETS.normal)
  const [currentPhase, setCurrentPhase] = useState<ConductionPhase>('IDLE')
  const [activeZones, setActiveZones] = useState<AnatomicalZone[]>([])
  const [cycleCount, setCycleCount] = useState(0)
  const [hoveredZone, setHoveredZone] = useState<AnatomicalZone | null>(null)
  const [ecgBuffer, setEcgBuffer] = useState<EcgDataPoint[]>([])

  const animFrameRef = useRef<number>(0)
  const lastTsRef = useRef<number>(0)
  const cycleElapsedRef = useRef<number>(0)
  const ecgSampleIndexRef = useRef<number>(0)
  const currentPhaseRef = useRef<ConductionPhase>('IDLE')
  const paramsRef = useRef<ConductionParams>(HEART_RATE_PRESETS.normal)
  const speedRef = useRef<SpeedMultiplier>(1)
  const playbackRef = useRef<PlaybackState>('paused')

  useEffect(() => { paramsRef.current = params }, [params])
  useEffect(() => { speedRef.current = speed }, [speed])
  useEffect(() => { playbackRef.current = playback }, [playback])

  const generateEcgSamples = useCallback((deltaMs: number): EcgDataPoint[] => {
    const p = paramsRef.current
    const samplesNeeded = Math.round((deltaMs / 1000) * ECG_SAMPLE_RATE)
    const samples: EcgDataPoint[] = []
    for (let i = 0; i < samplesNeeded; i++) {
      const sampleCycleMs = (cycleElapsedRef.current + (i / ECG_SAMPLE_RATE) * 1000) % p.rrIntervalMs
      const cyclePhase = sampleCycleMs / p.rrIntervalMs
      samples.push({
        t: ecgSampleIndexRef.current + i,
        v: generateConductionEcgSample(cyclePhase, p),
      })
    }
    ecgSampleIndexRef.current += samplesNeeded
    return samples
  }, [])

  useEffect(() => {
    if (playback !== 'playing') return

    const loop = (ts: number) => {
      if (lastTsRef.current === 0) lastTsRef.current = ts
      const wallDelta = ts - lastTsRef.current
      lastTsRef.current = ts

      const delta = wallDelta * speedRef.current
      const p = paramsRef.current

      cycleElapsedRef.current += delta
      if (cycleElapsedRef.current >= p.rrIntervalMs) {
        cycleElapsedRef.current -= p.rrIntervalMs
        setCycleCount(n => n + 1)
      }

      const resolved = resolvePhase(cycleElapsedRef.current, p as ConductionParams & { _avDelayOverrideMs?: number })
      if (resolved.phase !== currentPhaseRef.current) {
        currentPhaseRef.current = resolved.phase
        setCurrentPhase(resolved.phase)
        setActiveZones(resolved.activeZones)
      }

      animFrameRef.current = requestAnimationFrame(loop)
    }

    lastTsRef.current = 0
    animFrameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [playback])

  useEffect(() => {
    if (playback !== 'playing') return
    const interval = setInterval(() => {
      const delta = 20 * speedRef.current
      const samples = generateEcgSamples(delta)
      if (samples.length === 0) return
      setEcgBuffer(prev => {
        const combined = [...prev, ...samples]
        return combined.length > ECG_BUFFER_SIZE
          ? combined.slice(combined.length - ECG_BUFFER_SIZE)
          : combined
      })
    }, 20)
    return () => clearInterval(interval)
  }, [playback, generateEcgSamples])

  const play = useCallback(() => setPlayback('playing'), [])

  const pause = useCallback(() => {
    setPlayback('paused')
    lastTsRef.current = 0
  }, [])

  const reset = useCallback(() => {
    setPlayback('paused')
    lastTsRef.current = 0
    cycleElapsedRef.current = 0
    currentPhaseRef.current = 'IDLE'
    setCurrentPhase('IDLE')
    setActiveZones([])
    setCycleCount(0)
    setEcgBuffer([])
    ecgSampleIndexRef.current = 0
  }, [])

  const stepForward = useCallback(() => {
    setPlayback('stepping')
    const p = paramsRef.current
    const currentIdx = PHASE_DEFINITIONS.findIndex(d => d.phase === currentPhaseRef.current)
    const nextIdx = (currentIdx + 1) % PHASE_DEFINITIONS.length
    const nextDef = PHASE_DEFINITIONS[nextIdx]

    // Advance cycleElapsed to the start of the next phase
    let accumulated = 0
    for (let i = 0; i < nextIdx; i++) {
      accumulated += scaledPhaseDuration(PHASE_DEFINITIONS[i].phase, p as ConductionParams & { _avDelayOverrideMs?: number })
    }
    if (nextIdx === 0) {
      cycleElapsedRef.current = 0
      setCycleCount(n => n + 1)
    } else {
      cycleElapsedRef.current = accumulated
    }

    currentPhaseRef.current = nextDef.phase
    setCurrentPhase(nextDef.phase)
    setActiveZones(nextDef.activeZones)

    const samples = generateEcgSamples(scaledPhaseDuration(nextDef.phase, p as ConductionParams & { _avDelayOverrideMs?: number }))
    setEcgBuffer(prev => {
      const combined = [...prev, ...samples]
      return combined.length > ECG_BUFFER_SIZE
        ? combined.slice(combined.length - ECG_BUFFER_SIZE)
        : combined
    })
  }, [generateEcgSamples])

  const setHeartRatePreset = useCallback((preset: HeartRatePreset) => {
    setHeartRatePresetState(preset)
    const base = HEART_RATE_PRESETS[preset]
    const newParams = applyAutonomicEffect(base, autonomicMode)
    setParams(newParams)
    paramsRef.current = newParams
    cycleElapsedRef.current = 0
  }, [autonomicMode])

  const setAutonomicMode = useCallback((mode: AutonomicMode) => {
    setAutonomicModeState(mode)
    const base = HEART_RATE_PRESETS[heartRatePreset]
    const newParams = applyAutonomicEffect(base, mode)
    setParams(newParams)
    paramsRef.current = newParams
    cycleElapsedRef.current = 0
  }, [heartRatePreset])

  const updateParam = useCallback((key: keyof ConductionParams, value: number) => {
    setParams(prev => {
      const updated = { ...prev, [key]: value }
      if (key === 'heartRateBpm') {
        updated.rrIntervalMs = Math.round(60000 / value)
      }
      if (key === 'rrIntervalMs') {
        updated.heartRateBpm = Math.round(60000 / value)
      }
      paramsRef.current = updated
      return updated
    })
  }, [])

  const resolvedForDisplay = playback !== 'playing'
    ? resolvePhase(cycleElapsedRef.current, paramsRef.current as ConductionParams & { _avDelayOverrideMs?: number })
    : null
  void resolvedForDisplay

  const contractility = contractilityScale(
    currentPhase,
    resolvePhase(cycleElapsedRef.current, paramsRef.current as ConductionParams & { _avDelayOverrideMs?: number }).phaseRatio,
    autonomicMode,
  )

  const activeSegment = PHASE_DEFINITIONS.find(d => d.phase === currentPhase)?.ecgSegment ?? null

  const infoZone = hoveredZone ?? (activeZones[0] ?? null)
  const infoZoneData: AnatomicalZoneInfo | null = infoZone ? ZONE_INFO[infoZone] : null

  return {
    playback,
    play,
    pause,
    stepForward,
    reset,
    speed,
    setSpeed,
    heartRatePreset,
    setHeartRatePreset,
    autonomicMode,
    setAutonomicMode,
    params,
    updateParam,
    currentPhase,
    activeZones,
    cycleCount,
    hoveredZone,
    setHoveredZone,
    ecgBuffer,
    contractility,
    activeSegment: activeSegment as EcgSegmentLabel | null,
    infoZone,
    infoZoneData,
  }
}
