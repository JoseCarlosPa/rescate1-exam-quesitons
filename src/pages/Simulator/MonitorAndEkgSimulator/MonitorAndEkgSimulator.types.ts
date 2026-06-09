export type MonitorType = 'zoll' | 'lifepak';

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
