import type {
  AnatomicalZone,
  AnatomicalZoneInfo,
  ConductionParams,
  EcgSegmentInfo,
  EcgSegmentLabel,
  HeartRatePreset,
  PhaseDefinition,
} from './CardiacConductionSimulator.types'

export const PHASE_DEFINITIONS: PhaseDefinition[] = [
  {
    phase: 'SA_FIRE',
    baseDurationMs: 100,
    activeZones: ['sa_node'],
    ecgSegment: 'P',
    description: 'El nodo sinoauricular (SA) genera un potencial de acción espontáneo. Es el marcapasos primario del corazón.',
  },
  {
    phase: 'ATRIAL_DEPOL',
    baseDurationMs: 80,
    activeZones: ['right_atrium', 'left_atrium'],
    ecgSegment: 'P',
    description: 'El impulso se propaga por ambas aurículas activando la contracción auricular. Se visualiza como la onda P en el ECG.',
  },
  {
    phase: 'AV_DELAY',
    baseDurationMs: 130,
    activeZones: ['av_node'],
    ecgSegment: 'PR',
    description: 'El nodo auriculoventricular (AV) retrasa el impulso ~120-200 ms para permitir que las aurículas terminen de vaciarse antes de la contracción ventricular.',
  },
  {
    phase: 'HIS_BUNDLE',
    baseDurationMs: 20,
    activeZones: ['his_bundle'],
    ecgSegment: 'QRS',
    description: 'El haz de His conduce rápidamente el impulso hacia los ventrículos a través del septo interventricular.',
  },
  {
    phase: 'BUNDLE_BRANCHES',
    baseDurationMs: 20,
    activeZones: ['right_bundle', 'left_bundle'],
    ecgSegment: 'QRS',
    description: 'Las ramas derecha e izquierda del haz distribuyen el impulso hacia los respectivos ventrículos simultáneamente.',
  },
  {
    phase: 'PURKINJE',
    baseDurationMs: 30,
    activeZones: ['purkinje'],
    ecgSegment: 'QRS',
    description: 'Las fibras de Purkinje distribuyen el impulso por toda la pared ventricular asegurando una contracción coordinada y eficiente.',
  },
  {
    phase: 'VENTRICULAR_DEPOL',
    baseDurationMs: 80,
    activeZones: ['right_ventricle', 'left_ventricle'],
    ecgSegment: 'QRS',
    description: 'Despolarización ventricular masiva: contracción simultánea de ambos ventrículos. Genera el complejo QRS en el ECG.',
  },
  {
    phase: 'PLATEAU',
    baseDurationMs: 200,
    activeZones: ['right_ventricle', 'left_ventricle'],
    ecgSegment: 'ST',
    description: 'Fase de meseta del potencial de acción ventricular. El calcio entra a las células manteniendo la contracción. Corresponde al segmento ST en el ECG.',
  },
  {
    phase: 'VENTRICULAR_REPOL',
    baseDurationMs: 150,
    activeZones: ['right_ventricle', 'left_ventricle'],
    ecgSegment: 'T',
    description: 'Repolarización ventricular: las células recuperan su potencial de membrana negativo. Genera la onda T en el ECG.',
  },
  {
    phase: 'DIASTOLE',
    baseDurationMs: 10,
    activeZones: [],
    ecgSegment: 'TP',
    description: 'Período diastólico: el corazón está en reposo. Los ventrículos se llenan de sangre pasivamente. La duración varía con la frecuencia cardíaca.',
  },
]

export const HEART_RATE_PRESETS: Record<HeartRatePreset, ConductionParams> = {
  bradycardia: {
    heartRateBpm: 40,
    prIntervalMs: 180,
    qrsDurationMs: 80,
    qtIntervalMs: 440,
    rrIntervalMs: 1500,
  },
  normal: {
    heartRateBpm: 75,
    prIntervalMs: 160,
    qrsDurationMs: 80,
    qtIntervalMs: 380,
    rrIntervalMs: 800,
  },
  tachycardia: {
    heartRateBpm: 130,
    prIntervalMs: 140,
    qrsDurationMs: 80,
    qtIntervalMs: 300,
    rrIntervalMs: 462,
  },
}

export const AUTONOMIC_EFFECTS = {
  sympathetic: { hrMultiplier: 1.47, avDelayMultiplier: 0.80, contractilityScale: 1.35 },
  parasympathetic: { hrMultiplier: 0.73, avDelayMultiplier: 1.40, contractilityScale: 0.75 },
} as const

export const ECG_SAMPLE_RATE = 200
export const ECG_DISPLAY_SECONDS = 5
export const ECG_BUFFER_SIZE = ECG_SAMPLE_RATE * ECG_DISPLAY_SECONDS

export const BASE_RR_MS = 800

export const ECG_SEGMENT_INFO: Record<EcgSegmentLabel, EcgSegmentInfo> = {
  P: { label: 'P', color: '#60a5fa', anatomicalEvent: 'Despolarización auricular (SA → Atrios)' },
  PR: { label: 'PR', color: '#a78bfa', anatomicalEvent: 'Retraso en nodo AV (delay fisiológico)' },
  QRS: { label: 'QRS', color: '#34d399', anatomicalEvent: 'Despolarización ventricular (His-Purkinje)' },
  ST: { label: 'ST', color: '#fbbf24', anatomicalEvent: 'Meseta del potencial de acción ventricular' },
  T: { label: 'T', color: '#f87171', anatomicalEvent: 'Repolarización ventricular' },
  TP: { label: 'TP', color: '#94a3b8', anatomicalEvent: 'Diástole — período de reposo' },
}

export const ZONE_INFO: Record<AnatomicalZone, AnatomicalZoneInfo> = {
  sa_node: {
    id: 'sa_node',
    label: 'Nodo Sinoauricular (SA)',
    description: 'Ubicado en la pared superior de la aurícula derecha, cerca de la desembocadura de la vena cava superior. Genera impulsos eléctricos espontáneos a una frecuencia de 60-100 lpm en reposo.',
    actionPotentialType: 'slow',
    clinicalRelevance: 'La disfunción del nodo SA causa bradicardia sinusal, paro sinusal y síndrome del seno enfermo. El bloqueo SA produce pausas largas en el ECG.',
  },
  right_atrium: {
    id: 'right_atrium',
    label: 'Aurícula Derecha',
    description: 'Recibe sangre desoxigenada de las venas cavas superior e inferior. Se contrae para impulsar la sangre al ventrículo derecho a través de la válvula tricúspide.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'La fibrilación auricular (FA) es la arritmia sostenida más común; elimina la contracción auricular coordinada y puede causar trombos.',
  },
  left_atrium: {
    id: 'left_atrium',
    label: 'Aurícula Izquierda',
    description: 'Recibe sangre oxigenada de las cuatro venas pulmonares. Se contrae ligeramente después de la aurícula derecha para completar el llenado ventricular izquierdo.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'La dilatación de la aurícula izquierda es un signo de insuficiencia cardíaca izquierda crónica o estenosis mitral.',
  },
  av_node: {
    id: 'av_node',
    label: 'Nodo Auriculoventricular (AV)',
    description: 'Ubicado en la parte inferior del septo interauricular (triángulo de Koch). Retrasa el impulso 120-200 ms para asegurar que las aurículas terminen de contraerse antes que los ventrículos. Frecuencia de escape intrínseca: 40-60 lpm.',
    actionPotentialType: 'slow',
    clinicalRelevance: 'Los bloqueos AV (1°, 2° Mobitz I/II, 3° completo) son causados por disfunción de este nodo. El BAV de 3° requiere marcapasos definitivo.',
  },
  his_bundle: {
    id: 'his_bundle',
    label: 'Haz de His',
    description: 'Única vía eléctrica que conecta aurículas con ventrículos a través del septo fibroso. Conduce el impulso a 1-2 m/s. Frecuencia de escape intrínseca: 40-60 lpm.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'El bloqueo en el haz de His puede manifestarse como bloqueo AV de alto grado o como bloqueo de rama bifascicular.',
  },
  right_bundle: {
    id: 'right_bundle',
    label: 'Rama Derecha del Haz',
    description: 'Conduce el impulso hacia el ventrículo derecho a través del septo interventricular hasta alcanzar el músculo papilar anterior y la pared libre.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'El bloqueo de rama derecha (BRD) produce QRS ≥120 ms con morfología rSR\' en V1 y patrón qRS ancho en V5-V6. Puede ser hallazgo normal o indicar sobrecarga derecha.',
  },
  left_bundle: {
    id: 'left_bundle',
    label: 'Rama Izquierda del Haz',
    description: 'Se divide en dos fascículos (anterior y posterior) para activar el ventrículo izquierdo. Recorre el lado izquierdo del septo interventricular.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'El bloqueo de rama izquierda (BRI) indica cardiopatía estructural en la mayoría de los casos y es criterio para terapia de resincronización cardíaca.',
  },
  purkinje: {
    id: 'purkinje',
    label: 'Fibras de Purkinje',
    description: 'Red de fibras especializadas que distribuyen el impulso por toda la pared ventricular desde el endocardio hacia el epicardio. Velocidad de conducción: 2-4 m/s (la más rápida del corazón).',
    actionPotentialType: 'fast',
    clinicalRelevance: 'Las fibras de Purkinje son el sustrato de muchas taquicardias ventriculares. La taquicardia de Purkinje idiopática es una forma benigna de TV.',
  },
  right_ventricle: {
    id: 'right_ventricle',
    label: 'Ventrículo Derecho',
    description: 'Bombea sangre desoxigenada hacia los pulmones a través de la arteria pulmonar. Genera una presión sistólica de 15-30 mmHg (circulación de baja resistencia).',
    actionPotentialType: 'fast',
    clinicalRelevance: 'El infarto de ventrículo derecho complica el 30-50% de los infartos inferiores. Se presenta con hipotensión, ingurgitación yugular y campos pulmonares limpios.',
  },
  left_ventricle: {
    id: 'left_ventricle',
    label: 'Ventrículo Izquierdo',
    description: 'Cámara de mayor masa muscular del corazón. Bombea sangre oxigenada hacia la aorta y la circulación sistémica. Genera una presión sistólica de 100-140 mmHg.',
    actionPotentialType: 'fast',
    clinicalRelevance: 'La disfunción sistólica del VI (FEVI <40%) es la definición de insuficiencia cardíaca con fracción de eyección reducida (ICFEr) y requiere tratamiento con IECA/ARA2, betabloqueantes y ARM.',
  },
}
