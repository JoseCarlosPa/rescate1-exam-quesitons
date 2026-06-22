import type {
  CompensationState,
  HemodynamicParams,
  ShockType,
} from './CirculatorySystemSimulator.types'

// Parámetros hemodinámicos normales (paciente adulto 70 kg)
export const NORMAL_PARAMS: HemodynamicParams = {
  totalBloodVolumeMl: 5000,
  centralVenousPressureMmhg: 7,
  strokeVolumeBaseMl: 70,
  ejectionFraction: 0.60,
  svr: 1050,
  heartRateBpm: 72,
  spo2: 98,
}

// Definición de cada tipo de shock: alteraciones fisiopatológicas
export interface ShockDefinition {
  type: ShockType
  label: string
  description: string
  clinicalNotes: string
  // Deltas aplicados sobre los parámetros normales
  volumeDeficitMl: number         // pérdida de volumen
  svrMultiplier: number           // x SVR normal
  efMultiplier: number            // x fracción de eyección normal
  hrDelta: number                 // FC + delta
  color: string                   // color acento UI
  icon: string                    // emoji representativo
}

export const SHOCK_DEFINITIONS: Record<ShockType, ShockDefinition> = {
  none: {
    type: 'none',
    label: 'Normal',
    description: 'Hemodinámica normal. Paciente en reposo sin patología activa.',
    clinicalNotes: 'PAM 70-100 mmHg. GC 4-8 L/min. SVR 900-1200 dyn·s/cm5.',
    volumeDeficitMl: 0,
    svrMultiplier: 1.0,
    efMultiplier: 1.0,
    hrDelta: 0,
    color: '#34d399',
    icon: '✓',
  },
  hypovolemic: {
    type: 'hypovolemic',
    label: 'Shock Hipovolémico',
    description: 'Pérdida de volumen intravascular (hemorragia, deshidratación). Precarga reducida, gasto cardíaco caído.',
    clinicalNotes: 'Clase III: pérdida >30% volemia. Taquicardia compensatoria, vasoconstricción periférica, oliguria. Tratamiento: reposición volumen agresiva.',
    volumeDeficitMl: 1800,
    svrMultiplier: 1.6,
    efMultiplier: 0.85,
    hrDelta: 40,
    color: '#f87171',
    icon: '🩸',
  },
  cardiogenic: {
    type: 'cardiogenic',
    label: 'Shock Cardiogénico',
    description: 'Falla de bomba cardíaca (IAM extenso, arritmia grave). Contractilidad severamente disminuida.',
    clinicalNotes: 'GC <2.2 L/min/m². PCP >18 mmHg. Extremidades frías y húmedas. Tratamiento: inotrópicos, IABP, revascularización.',
    volumeDeficitMl: 0,
    svrMultiplier: 1.8,
    efMultiplier: 0.28,
    hrDelta: 30,
    color: '#f59e0b',
    icon: '💔',
  },
  distributive_septic: {
    type: 'distributive_septic',
    label: 'Shock Séptico',
    description: 'Vasodilatación masiva por mediadores inflamatorios. SVR muy reducida, GC compensatoriamente elevado.',
    clinicalNotes: 'Lactato >2 mmol/L. Vasodilatación periférica. Hipoperfusión tisular a pesar de GC elevado. Tratamiento: norepinefrina + antibióticos.',
    volumeDeficitMl: 800,
    svrMultiplier: 0.35,
    efMultiplier: 0.75,
    hrDelta: 35,
    color: '#a78bfa',
    icon: '🦠',
  },
  distributive_anaphylactic: {
    type: 'distributive_anaphylactic',
    label: 'Shock Anafiláctico',
    description: 'Liberación masiva de histamina y mediadores vasoactivos. Vasodilatación + broncoespasmo + edema laríngeo.',
    clinicalNotes: 'Urticaria, angioedema, broncoespasmo. Hipotensión súbita. Tratamiento: epinefrina IM 0.5 mg INMEDIATO, antihistamínicos, corticoides.',
    volumeDeficitMl: 1200,
    svrMultiplier: 0.25,
    efMultiplier: 0.80,
    hrDelta: 50,
    color: '#fb7185',
    icon: '⚠️',
  },
  neurogenic: {
    type: 'neurogenic',
    label: 'Shock Neurogénico',
    description: 'Lesión medular alta (≥T6). Pérdida del tono simpático por debajo de la lesión. Bradicardia + vasodilatación.',
    clinicalNotes: 'Hipotensión + bradicardia (sin taquicardia compensatoria). Piel caliente y seca. Tratamiento: vasopresores, atropina, posición Trendelenburg.',
    volumeDeficitMl: 0,
    svrMultiplier: 0.40,
    efMultiplier: 0.90,
    hrDelta: -20,
    color: '#38bdf8',
    icon: '🧠',
  },
  obstructive: {
    type: 'obstructive',
    label: 'Shock Obstructivo',
    description: 'Obstrucción mecánica al flujo (neumotórax a tensión, tamponamiento cardíaco, TEP masivo).',
    clinicalNotes: 'PVC elevada, ruidos cardíacos apagados, venas yugulares ingurgitadas (triada de Beck en tamponamiento). Tratamiento: descompresión inmediata.',
    volumeDeficitMl: 0,
    svrMultiplier: 1.9,
    efMultiplier: 0.40,
    hrDelta: 45,
    color: '#e879f9',
    icon: '🚫',
  },
}

// Etiquetas de estado de compensación
export const COMPENSATION_LABELS: Record<CompensationState, { label: string; color: string }> = {
  compensated: { label: 'Compensado', color: '#34d399' },
  decompensating: { label: 'Descompensando', color: '#fbbf24' },
  decompensated: { label: 'Descompensado', color: '#f87171' },
  irreversible: { label: 'Crítico', color: '#dc2626' },
}

// Umbrales para PAM
export const MAP_THRESHOLDS = {
  critical: 50,  // <50 mmHg → perfusión cerebral comprometida
  low: 65,       // <65 mmHg → criterio sepsis/shock
  high: 105,     // >105 mmHg → hipertensiva
}

// Buffer de tendencia de presión
export const PRESSURE_BUFFER_SIZE = 200
export const PRESSURE_SAMPLE_INTERVAL_MS = 200  // 5 Hz

// Intervenciones: efecto sobre parámetros
export const INTERVENTION_EFFECTS = {
  fluid_bolus: {
    label: '500 mL IV',
    description: 'Bolus de cristaloide. Aumenta precarga y volemia.',
    volumeDeltaMl: 500,
    svrDelta: -30,
    hrDelta: -8,
    efDelta: 0.02,
    duration: 'instant',
  },
  vasopressor: {
    label: 'Norepinefrina',
    description: 'Vasopresores α1. Aumenta SVR y PAM.',
    volumeDeltaMl: 0,
    svrDelta: 250,
    hrDelta: -5,
    efDelta: 0.03,
    duration: 'sustained',
  },
  inotrope: {
    label: 'Dobutamina',
    description: 'Inotrópico β1. Aumenta contractilidad (fracción de eyección).',
    volumeDeltaMl: 0,
    svrDelta: -80,
    hrDelta: 15,
    efDelta: 0.12,
    duration: 'sustained',
  },
  oxygen: {
    label: 'O₂ 100%',
    description: 'Oxígeno suplementario. Mejora SpO2 y aporte de O2.',
    volumeDeltaMl: 0,
    svrDelta: 0,
    hrDelta: -4,
    efDelta: 0.01,
    duration: 'sustained',
  },
  epinephrine: {
    label: 'Adrenalina IM',
    description: 'Adrenalina 0.5 mg IM. Primera línea en anafilaxia.',
    volumeDeltaMl: 300,
    svrDelta: 500,
    hrDelta: 20,
    efDelta: 0.08,
    duration: 'transient',
  },
  tourniquet: {
    label: 'Torniquete',
    description: 'Control de hemorragia externa. Detiene pérdida de volumen.',
    volumeDeltaMl: 0,
    svrDelta: 40,
    hrDelta: -10,
    efDelta: 0.04,
    duration: 'instant',
  },
} as const
