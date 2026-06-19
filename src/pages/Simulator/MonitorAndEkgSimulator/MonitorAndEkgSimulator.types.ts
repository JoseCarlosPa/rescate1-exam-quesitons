export type MonitorType = 'zoll' | 'lifepak';

export type SimulationMode = 'practice' | 'evaluation';

export type LeadType = 'I' | 'II' | 'III' | 'aVR' | 'aVL' | 'aVF' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';

export type ProtocolSource = 'AHA' | 'LOCAL';

export interface ProtocolProfile {
    id: string;
    name: string;
    sources: ProtocolSource[];
    syncRequiredForCardioversion: boolean;
    energyToleranceJ: number;
    criticalTimeToFirstShockSec: number;
}

export type RhythmType =
    | 'normal_sinus'
    | 'sinus_tachycardia'
    | 'sinus_bradycardia'
    | 'atrial_fibrillation'
    | 'atrial_flutter'
    | 'svt'
    | 'ventricular_tachycardia'
    | 'vfib_coarse'
    | 'vfib_fine'
    | 'asystole'
    | 'pea'
    | 'av_block_1'
    | 'av_block_2_mobitz1'
    | 'av_block_2_mobitz2'
    | 'av_block_3';

export type ScenarioCategory = 'normal' | 'atrial' | 'ventricular' | 'block' | 'arrest';

export interface VitalSigns {
    hr: number;
    spo2: number;
    systolic: number;
    diastolic: number;
    rr: number;
    etco2: number;
    temp: number;
}

export interface EcgScenario {
    id: string;
    name: string;
    shortName: string;
    description: string;
    clinicalNotes: string;
    aclsManagement: string;
    rhythmType: RhythmType;
    isShockable: boolean;
    recommendedEnergy: number | null;
    defaultVitals: VitalSigns;
    category: ScenarioCategory;
}

export interface PacerSettings {
    rate: number;
    current: number;
    active: boolean;
}

export interface AlarmState {
    hrHigh: boolean;
    hrLow: boolean;
    spo2Low: boolean;
    muted: boolean;
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

export interface NibpState {
    measuring: boolean;
    autoCycle: boolean;
    intervalSec: number;
    lastReadingAt: number | null;
    reading: {
        systolic: number;
        diastolic: number;
    } | null;
}

export interface LeadPrintout {
    lead: LeadType;
    samples: number[];
}

export interface TwelveLeadReport {
    generatedAt: number;
    rhythm: RhythmType;
    heartRate: number;
    monitor: MonitorType;
    strips: LeadPrintout[];
}

