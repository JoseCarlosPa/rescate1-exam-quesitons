export type ConductionPhase =
  | 'IDLE'
  | 'SA_FIRE'
  | 'ATRIAL_DEPOL'
  | 'AV_DELAY'
  | 'HIS_BUNDLE'
  | 'BUNDLE_BRANCHES'
  | 'PURKINJE'
  | 'VENTRICULAR_DEPOL'
  | 'PLATEAU'
  | 'VENTRICULAR_REPOL'
  | 'DIASTOLE'

export type PlaybackState = 'playing' | 'paused' | 'stepping'

export type SpeedMultiplier = 0.25 | 0.5 | 1 | 2

export type HeartRatePreset = 'bradycardia' | 'normal' | 'tachycardia'

export type AutonomicMode = 'none' | 'sympathetic' | 'parasympathetic'

export type AnatomicalZone =
  | 'sa_node'
  | 'right_atrium'
  | 'left_atrium'
  | 'av_node'
  | 'his_bundle'
  | 'right_bundle'
  | 'left_bundle'
  | 'purkinje'
  | 'right_ventricle'
  | 'left_ventricle'

export type EcgSegmentLabel = 'P' | 'PR' | 'QRS' | 'ST' | 'T' | 'TP'

export interface ConductionParams {
  heartRateBpm: number
  prIntervalMs: number
  qrsDurationMs: number
  qtIntervalMs: number
  rrIntervalMs: number
}

export interface PhaseDefinition {
  phase: ConductionPhase
  baseDurationMs: number
  activeZones: AnatomicalZone[]
  ecgSegment: EcgSegmentLabel | null
  description: string
}

export interface AnatomicalZoneInfo {
  id: AnatomicalZone
  label: string
  description: string
  actionPotentialType: 'fast' | 'slow' | 'none'
  clinicalRelevance: string
}

export interface EcgSegmentInfo {
  label: EcgSegmentLabel
  color: string
  anatomicalEvent: string
}

export interface EcgDataPoint {
  t: number
  v: number
}
