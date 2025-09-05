export type Tool =
    | 'shock-index'
    | 'bmi'
    | 'map-calculator'
    | 'drug-calculator'
    | 'glasgow-scale'
    | 'cincinnati-scale'
    | 'parkland-rule'
    | 'apgar-score'
    | 'rts-score'
    | 'oxygen-calculator'
    | 'broselow-tape'
    | 'nihss-scale';

export interface BroslowMedications {
    epinefrina: string;
    atropina: string;
    amiodarona: string;
}

export interface BroslowEquipment {
    tuboET: string;
    aspiracion: string;
    iv: string;
}

export interface NIHSSScore {
    consciousness: string;
    questions: string;
    commands: string;
    eyeMovement: string;
    visualField: string;
    facialPalsy: string;
    leftArmMotor: string;
    rightArmMotor: string;
    leftLegMotor: string;
    rightLegMotor: string;
    limbAtaxia: string;
    sensation: string;
    language: string;
    dysarthria: string;
    neglect: string;
    result: number | null;
    interpretation: string;
}
