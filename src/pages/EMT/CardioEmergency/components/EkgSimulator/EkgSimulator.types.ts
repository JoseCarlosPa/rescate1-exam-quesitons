export interface EKGPoint {
    time: number;
    voltage: number;
}

export interface RhythmInfo {
    name: string;
    bpm: number;
    description: string;
    clinical: string;
    treatment: string;
    color: string;
    explanation: string; // Nueva: explicación del por qué
}

export interface CustomParameters {
    bpm: number;
    pWaveAmplitude: number;
    qrsAmplitude: number;
    tWaveAmplitude: number;
    prInterval: number;
    qrsWidth: number;
    stElevation: number;
}

export type RhythmType = 'normal' | 'tachycardia' | 'bradycardia' | 'vfib' | 'afib' | 'vtach' | 'asystole' | 'stemi' | 'custom';
