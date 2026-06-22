import {
  AUTONOMIC_EFFECTS,
  BASE_RR_MS,
  PHASE_DEFINITIONS,
} from './CardiacConductionSimulator.constants'
import type {
  AnatomicalZone,
  AutonomicMode,
  ConductionParams,
  ConductionPhase,
} from './CardiacConductionSimulator.types'

export function applyAutonomicEffect(
  base: ConductionParams,
  mode: AutonomicMode,
): ConductionParams {
  if (mode === 'none') return { ...base }
  const fx = AUTONOMIC_EFFECTS[mode]
  const newHr = Math.round(base.heartRateBpm * fx.hrMultiplier)
  const newRr = Math.round(60000 / newHr)
  const avBase = PHASE_DEFINITIONS.find(p => p.phase === 'AV_DELAY')!.baseDurationMs
  const scaledAvBase = Math.round(avBase * fx.avDelayMultiplier)
  const rrRatio = newRr / BASE_RR_MS
  return {
    heartRateBpm: newHr,
    prIntervalMs: Math.round(base.prIntervalMs * fx.avDelayMultiplier),
    qrsDurationMs: base.qrsDurationMs,
    qtIntervalMs: Math.round(base.qtIntervalMs * (rrRatio ** 0.5)),
    rrIntervalMs: newRr,
    // keep scaled AV base in a closure used by scaledPhaseDuration
    _avDelayOverrideMs: scaledAvBase,
  } as ConductionParams & { _avDelayOverrideMs?: number }
}

export function scaledPhaseDuration(
  phase: ConductionPhase,
  params: ConductionParams & { _avDelayOverrideMs?: number },
): number {
  const def = PHASE_DEFINITIONS.find(p => p.phase === phase)
  if (!def) return 0
  if (phase === 'DIASTOLE') {
    const sumOthers = PHASE_DEFINITIONS
      .filter(p => p.phase !== 'DIASTOLE')
      .reduce((acc, p) => acc + scaledPhaseDuration(p.phase, params), 0)
    return Math.max(10, params.rrIntervalMs - sumOthers)
  }
  if (phase === 'AV_DELAY' && (params as { _avDelayOverrideMs?: number })._avDelayOverrideMs != null) {
    return (params as { _avDelayOverrideMs?: number })._avDelayOverrideMs!
  }
  const ratio = params.rrIntervalMs / BASE_RR_MS
  return Math.round(def.baseDurationMs * ratio)
}

export function resolvePhase(
  cycleElapsedMs: number,
  params: ConductionParams & { _avDelayOverrideMs?: number },
): { phase: ConductionPhase; phaseRatio: number; activeZones: AnatomicalZone[] } {
  let accumulated = 0
  for (const def of PHASE_DEFINITIONS) {
    const dur = scaledPhaseDuration(def.phase, params)
    if (cycleElapsedMs < accumulated + dur) {
      const phaseRatio = (cycleElapsedMs - accumulated) / dur
      return { phase: def.phase, phaseRatio: Math.min(1, Math.max(0, phaseRatio)), activeZones: def.activeZones }
    }
    accumulated += dur
  }
  return { phase: 'DIASTOLE', phaseRatio: 1, activeZones: [] }
}

function gauss(x: number, center: number, width: number, amp: number): number {
  return amp * Math.exp(-((x - center) ** 2) / (2 * width ** 2))
}

export function generateConductionEcgSample(cyclePhase: number, _params: ConductionParams): number {
  // cyclePhase: 0..1 normalized through full RR interval
  // P wave around 0.12
  const p = gauss(cyclePhase, 0.12, 0.025, 0.25)
  // Q at 0.22
  const q = gauss(cyclePhase, 0.22, 0.008, -0.15)
  // R peak at 0.25
  const r = gauss(cyclePhase, 0.25, 0.012, 1.0)
  // S at 0.28
  const s = gauss(cyclePhase, 0.28, 0.008, -0.18)
  // T wave at 0.45
  const t = gauss(cyclePhase, 0.45, 0.04, 0.35)
  return p + q + r + s + t
}

export function contractilityScale(
  phase: ConductionPhase,
  phaseRatio: number,
  mode: AutonomicMode,
): { atrial: number; ventricular: number } {
  const contractMod = mode === 'sympathetic' ? 1.35 : mode === 'parasympathetic' ? 0.75 : 1.0
  const atrialPeak = 1.08 * contractMod
  const ventricularPeak = 1.12 * contractMod

  // Bell curve for contraction: peaks at phaseRatio=0.5
  const bell = Math.sin(phaseRatio * Math.PI)

  let atrial = 1.0
  let ventricular = 1.0

  if (phase === 'ATRIAL_DEPOL') {
    atrial = 1.0 + (atrialPeak - 1.0) * bell
  }
  if (phase === 'VENTRICULAR_DEPOL' || phase === 'PLATEAU') {
    ventricular = 1.0 + (ventricularPeak - 1.0) * (phase === 'PLATEAU' ? 1.0 - phaseRatio * 0.3 : bell)
  }
  if (phase === 'VENTRICULAR_REPOL') {
    ventricular = 1.0 + (ventricularPeak - 1.0) * (1.0 - phaseRatio) * 0.4
  }

  return { atrial, ventricular }
}
