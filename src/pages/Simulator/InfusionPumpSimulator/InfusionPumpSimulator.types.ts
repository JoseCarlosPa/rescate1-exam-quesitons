export type PumpProfileId = 'alaris-gw' | 'baxter-spectrum';

export type InfusionMode = 'weight-based' | 'mlh';

export type PumpStatus = 'stopped' | 'running' | 'paused' | 'completed';

export type AlarmSeverity = 'info' | 'warning' | 'critical';

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

