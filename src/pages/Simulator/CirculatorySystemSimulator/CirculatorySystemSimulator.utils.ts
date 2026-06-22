import { MAP_THRESHOLDS, NORMAL_PARAMS, SHOCK_DEFINITIONS } from './CirculatorySystemSimulator.constants'
import type {
  CompensationReflexes,
  CompensationState,
  HemodynamicDerived,
  HemodynamicParams,
  ShockType,
} from './CirculatorySystemSimulator.types'

// Calcula el volumen latido real considerando precarga (Frank-Starling) y poscarga
export function computeStrokeVolume(params: HemodynamicParams): number {
  const volumeRatio = Math.min(1, params.totalBloodVolumeMl / NORMAL_PARAMS.totalBloodVolumeMl)
  // Ley de Frank-Starling: VS sube con la precarga hasta cierto límite
  const frankStarlingFactor = Math.min(1.15, Math.sqrt(volumeRatio) * 1.1)
  // La poscarga elevada reduce el VS
  const postloadPenalty = NORMAL_PARAMS.svr / Math.max(200, params.svr)
  const rawSv = params.strokeVolumeBaseMl * params.ejectionFraction * frankStarlingFactor * postloadPenalty
  return Math.max(5, rawSv)
}

// Calcula gasto cardíaco en L/min
export function computeCardiacOutput(params: HemodynamicParams): number {
  const sv = computeStrokeVolume(params)
  return (sv * params.heartRateBpm) / 1000
}

// Calcula PAM usando la fórmula de Ohm: PAM = GC × SVR / 80 (conversión unidades)
// PAS y PAD se estiman a partir del índice de presión de pulso
export function computeBloodPressure(params: HemodynamicParams): { map: number; systolic: number; diastolic: number } {
  const co = computeCardiacOutput(params)
  // PAM en mmHg (SVR en dyn·s/cm5, GC en L/min: factor /80)
  const map = (co * params.svr) / 80
  // Presión de pulso proporcional al volumen latido y compliance arterial
  const sv = computeStrokeVolume(params)
  const pulsePressure = (sv / 70) * 40 * (1000 / Math.max(400, params.svr))
  const systolic = map + (pulsePressure * 2) / 3
  const diastolic = map - pulsePressure / 3
  return {
    map: Math.round(map),
    systolic: Math.round(systolic),
    diastolic: Math.round(diastolic),
  }
}

export function computeDerived(params: HemodynamicParams): HemodynamicDerived {
  const co = computeCardiacOutput(params)
  const { map, systolic, diastolic } = computeBloodPressure(params)
  const sv = computeStrokeVolume(params)
  const shockIndex = params.heartRateBpm / Math.max(1, systolic)
  const mapStatus: HemodynamicDerived['mapStatus'] =
    map < MAP_THRESHOLDS.critical ? 'critical'
    : map < MAP_THRESHOLDS.low ? 'low'
    : map > MAP_THRESHOLDS.high ? 'high'
    : 'normal'
  return {
    cardiacOutputLpm: Math.round(co * 10) / 10,
    meanArterialPressureMmhg: map,
    systolicBpMmhg: systolic,
    diastolicBpMmhg: diastolic,
    pulsePressureMmhg: systolic - diastolic,
    strokeVolumeMl: Math.round(sv),
    shockIndex: Math.round(shockIndex * 100) / 100,
    mapStatus,
  }
}

// Determina el estado de compensación basado en la PAM y la saturación
export function computeCompensationState(derived: HemodynamicDerived, spo2: number): CompensationState {
  const { meanArterialPressureMmhg: map } = derived
  if (map < MAP_THRESHOLDS.critical || spo2 < 80) return 'irreversible'
  if (map < MAP_THRESHOLDS.low || spo2 < 88) return 'decompensated'
  if (map < 75 || spo2 < 94) return 'decompensating'
  return 'compensated'
}

// Calcula reflejos compensatorios autonómicos
export function computeReflexes(params: HemodynamicParams, derived: HemodynamicDerived): CompensationReflexes {
  const map = derived.meanArterialPressureMmhg
  return {
    tachycardiaActive: map < 80 && params.heartRateBpm > 90,
    vasoconstrictionActive: params.svr > NORMAL_PARAMS.svr * 1.2,
    renalRetentionActive: map < 70,
    respiratoryCompensationActive: params.spo2 < 92,
  }
}

// Aplica el tipo de shock sobre los parámetros normales
export function applyShock(shockType: ShockType): HemodynamicParams {
  const def = SHOCK_DEFINITIONS[shockType]
  const base = { ...NORMAL_PARAMS }
  return {
    ...base,
    totalBloodVolumeMl: Math.max(500, base.totalBloodVolumeMl - def.volumeDeficitMl),
    svr: Math.round(base.svr * def.svrMultiplier),
    ejectionFraction: Math.min(0.85, Math.max(0.08, base.ejectionFraction * def.efMultiplier)),
    heartRateBpm: Math.min(200, Math.max(20, base.heartRateBpm + def.hrDelta)),
    spo2: shockType === 'distributive_anaphylactic' ? 88 : shockType === 'obstructive' ? 82 : 95,
    centralVenousPressureMmhg: shockType === 'obstructive' ? 18
      : shockType === 'cardiogenic' ? 16
      : shockType === 'hypovolemic' ? 2
      : base.centralVenousPressureMmhg,
    strokeVolumeBaseMl: base.strokeVolumeBaseMl,
  }
}

// Genera un punto de presión aórtica para el gráfico (onda de pulso simplificada)
export function generatePressureSample(
  t: number,
  params: HemodynamicParams,
  derived: HemodynamicDerived,
): number {
  const cycleDuration = 60000 / params.heartRateBpm  // ms
  const phase = (t % cycleDuration) / cycleDuration  // 0→1
  // Onda de presión: systole rápida, diastole lenta con notch dicroto
  const systolicRise = Math.exp(-((phase - 0.12) ** 2) / (2 * 0.015 ** 2)) * 0.9
  const dicroticNotch = Math.exp(-((phase - 0.32) ** 2) / (2 * 0.02 ** 2)) * 0.15
  const diastolicDecay = phase > 0.15 ? Math.exp(-(phase - 0.15) / 0.35) * 0.4 : 0
  const waveform = systolicRise + dicroticNotch + diastolicDecay
  return derived.diastolicBpMmhg + (derived.pulsePressureMmhg * waveform)
}
