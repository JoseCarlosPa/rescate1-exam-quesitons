// Tipos de shock soportados
export type ShockType =
  | 'none'
  | 'hypovolemic'
  | 'cardiogenic'
  | 'distributive_septic'
  | 'distributive_anaphylactic'
  | 'neurogenic'
  | 'obstructive'

// Estado de compensación autonómica
export type CompensationState =
  | 'compensated'
  | 'decompensating'
  | 'decompensated'
  | 'irreversible'

// Intervención del operador
export type Intervention =
  | 'none'
  | 'fluid_bolus'         // 500 mL IV
  | 'vasopressor'         // norepinefrina
  | 'inotrope'            // dobutamina
  | 'oxygen'              // FiO2 al 100%
  | 'epinephrine'         // adrenalina IM para anafilaxia
  | 'tourniquet'          // control hemorragia

export interface HemodynamicParams {
  // Precarga
  totalBloodVolumeMl: number        // VCS total (normal ~5000)
  centralVenousPressureMmhg: number // PVC (normal 5-10)
  // Contractilidad
  strokeVolumeBaseMl: number        // volumen latido base (normal ~70)
  ejectionFraction: number          // fracción eyección 0-1 (normal 0.55-0.65)
  // Poscarga
  svr: number                       // Resistencia Vascular Sistémica (normal 900-1200 dyn·s/cm5)
  // Frecuencia cardíaca
  heartRateBpm: number
  // Gases
  spo2: number                      // saturación O2 (0-100)
}

export interface HemodynamicDerived {
  cardiacOutputLpm: number          // GC = VS × FC / 1000
  meanArterialPressureMmhg: number  // PAM = (PAS + 2×PAD) / 3
  systolicBpMmhg: number
  diastolicBpMmhg: number
  pulsePressureMmhg: number
  strokeVolumeMl: number            // VS ajustado por precarga y poscarga
  shockIndex: number                // FC / PAS
  mapStatus: 'critical' | 'low' | 'normal' | 'high'
}

export interface BloodFlowPoint {
  t: number
  flow: number   // flujo aórtico relativo 0-1.5
  pressure: number // presión aórtica en mmHg
}

export interface CompensationReflexes {
  tachycardiaActive: boolean
  vasoconstrictionActive: boolean
  renalRetentionActive: boolean
  respiratoryCompensationActive: boolean
}
