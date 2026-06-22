export type VentilatorProfileId = 'zoll-eagle-ii' | 'ltv-1200';

export type VentilationMode = 'vc-ac' | 'pc-ac' | 'simv-vc' | 'cpap-ps';

export type IERatio = '1:1' | '1:1.5' | '1:2' | '1:3' | '1:4';

export type VentStatus = 'off' | 'standby' | 'running' | 'alarming';

export type AlarmSeverity = 'info' | 'warning' | 'critical';

export type SimulationMode = 'practice' | 'evaluation';

export type PatientSex = 'male' | 'female';

export interface VentilatorProfile {
    id: VentilatorProfileId;
    name: string;
    maxPipCmH2O: number;
    maxPeepCmH2O: number;
    maxFio2: number;
    minVtMl: number;
    maxVtMl: number;
}

export interface LungModel {
    id: string;
    label: string;
    complianceMlCmH2O: number;
    resistanceCmH2OLSec: number;
    description: string;
}

export interface PatientProfile {
    heightCm: number;
    weightKg: number;
    sex: PatientSex;
    ibwKg: number;
}

export interface DerivedVentMetrics {
    pipCmH2O: number;
    plateauCmH2O: number;
    minuteVentilationLMin: number;
    vtPerIbwKg: number;
    tiSec: number;
    teSec: number;
    ieRatioNum: number;
    activeVtMl: number;
}

export interface WaveformPoint {
    t: number;
    pressure: number;
    flow: number;
    volume: number;
}

export interface VentAlarmState {
    id: string;
    label: string;
    severity: AlarmSeverity;
    active: boolean;
    acknowledged: boolean;
}

export interface VentSimulatorCase {
    id: string;
    title: string;
    objective: string;
    lungModelId: string;
    suggestedMode: VentilationMode;
    suggestedVtMl: number;
    suggestedRrPerMin: number;
    suggestedPeepCmH2O: number;
    suggestedFio2Percent: number;
    suggestedDrivingPressureCmH2O: number;
    suggestedIeRatio: IERatio;
    patientHeightCm: number;
    patientWeightKg: number;
    patientSex: PatientSex;
    clinicalNotes: string;
}

export interface SafetyChecklistItem {
    id: 'circuit-checked' | 'etco2-connected' | 'cuff-checked' | 'position-confirmed';
    label: string;
    checked: boolean;
}

export interface SimulatorEvent {
    id: string;
    timestamp: number;
    message: string;
}

export interface TrainingScore {
    value: number;
    penalties: number;
    rewards: number;
}

export interface EvaluationEvent {
    id: string;
    timestamp: number;
    action: string;
    detail: string;
    points: number;
    critical: boolean;
}

export interface EvaluationState {
    active: boolean;
    completed: boolean;
    startedAt: number | null;
    finishedAt: number | null;
    score: number;
    criticalErrors: number;
    events: EvaluationEvent[];
}
