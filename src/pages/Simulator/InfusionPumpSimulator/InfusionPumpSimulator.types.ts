export type PumpProfileId = 'alaris-gw' | 'baxter-spectrum';

export type InfusionMode = 'weight-based' | 'mlh';

export type PumpStatus = 'stopped' | 'running' | 'paused' | 'completed';

export type AlarmSeverity = 'info' | 'warning' | 'critical';

export type SimulationMode = 'practice' | 'evaluation';

export type DosingUnit = 'mcg/kg/min' | 'mg/min' | 'UI/min' | 'mg/kg/h';

export interface PumpProfile {
    id: PumpProfileId;
    name: string;
    maxRateMlHr: number;
    minRateMlHr: number;
    maxVtbiMl: number;
}

export interface DrugLibraryEntry {
    id: string;
    name: string;
    className: string;
    indication: string;
    standardBagMg: number;
    standardVolumeMl: number;
    ahaDoseMinMcgKgMin: number;
    ahaDoseMaxMcgKgMin: number;
    notes: string;
    dosingUnit?: DosingUnit;
    preferredMode?: InfusionMode;
}

export interface AlarmState {
    id: string;
    label: string;
    severity: AlarmSeverity;
    active: boolean;
}

export interface SimulatorCase {
    id: string;
    title: string;
    objective: string;
    drugId: string;
    suggestedWeightKg: number;
    suggestedDoseMcgKgMin: number;
    suggestedVtbiMl: number;
    preferredMode?: InfusionMode;
}

export interface ChartDataPoint {
    timeMin: number;
    infusedMl: number;
    rateMlHr: number;
    doseMcgKgMin: number;
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

export interface SimulatorEvent {
    id: string;
    timestamp: number;
    message: string;
}

export type SafetyChecklistItemId = 'line-primed' | 'correct-drug' | 'iv-patency' | 'pump-locked';

export interface SafetyChecklistItem {
    id: SafetyChecklistItemId;
    label: string;
    checked: boolean;
}

export interface TrainingScore {
    value: number;
    penalties: number;
    rewards: number;
}

