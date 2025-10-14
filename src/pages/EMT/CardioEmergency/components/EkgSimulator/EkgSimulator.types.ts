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
}
export type RhythmType = 'normal' | 'tachycardia' | 'bradycardia' | 'vfib' | 'afib' | 'vtach' | 'asystole' | 'stemi';
