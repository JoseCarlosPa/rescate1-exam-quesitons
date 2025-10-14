import {RhythmInfo, RhythmType} from "./EkgSimulator.types.ts";

export const rhythmData: Record<RhythmType, RhythmInfo> = {
    normal: {
        name: 'Ritmo Sinusal Normal',
        bpm: 75,
        description: 'Ritmo cardíaco regular con ondas P, complejo QRS y onda T normales.',
        clinical: 'Ritmo cardíaco saludable. Frecuencia entre 60-100 lpm.',
        treatment: 'No requiere tratamiento.',
        color: 'text-green-600'
    },
    tachycardia: {
        name: 'Taquicardia Sinusal',
        bpm: 120,
        description: 'Ritmo sinusal regular pero acelerado (>100 lpm).',
        clinical: 'Puede ser causada por ejercicio, estrés, fiebre, hipovolemia o hipoxia.',
        treatment: 'Tratar la causa subyacente. Monitoreo continuo.',
        color: 'text-yellow-600'
    },
    bradycardia: {
        name: 'Bradicardia Sinusal',
        bpm: 45,
        description: 'Ritmo sinusal regular pero lento (<60 lpm).',
        clinical: 'Puede ser normal en atletas o indicar problemas de conducción.',
        treatment: 'Si es sintomática: Atropina, marcapasos temporal.',
        color: 'text-blue-600'
    },
    vfib: {
        name: 'Fibrilación Ventricular',
        bpm: 0,
        description: 'Actividad eléctrica caótica y desorganizada sin pulso.',
        clinical: '¡EMERGENCIA! Paro cardíaco. El paciente está clínicamente muerto.',
        treatment: 'RCP inmediata + Desfibrilación + ACLS (Epinefrina, Amiodarona).',
        color: 'text-red-600'
    },
    afib: {
        name: 'Fibrilación Auricular',
        bpm: 90,
        description: 'Actividad auricular desorganizada, intervalos R-R irregulares.',
        clinical: 'Riesgo de formación de trombos y ACV. Paciente puede estar estable.',
        treatment: 'Control de frecuencia (beta-bloqueadores), anticoagulación.',
        color: 'text-orange-600'
    },
    vtach: {
        name: 'Taquicardia Ventricular',
        bpm: 180,
        description: 'Ritmo ventricular rápido y regular con QRS anchos.',
        clinical: 'URGENCIA. Puede degenerar en FV. Verificar si hay pulso.',
        treatment: 'Con pulso: Amiodarona. Sin pulso: Desfibrilación + RCP.',
        color: 'text-red-500'
    },
    asystole: {
        name: 'Asistolia',
        bpm: 0,
        description: 'Ausencia completa de actividad eléctrica cardíaca.',
        clinical: 'Paro cardíaco. Línea plana. Mal pronóstico.',
        treatment: 'RCP de alta calidad + Epinefrina. NO desfibrilar.',
        color: 'text-gray-600'
    },
    stemi: {
        name: 'STEMI (Infarto con elevación ST)',
        bpm: 85,
        description: 'Elevación del segmento ST indicando infarto agudo transmural.',
        clinical: 'EMERGENCIA. IAM en curso. Dolor torácico, diaforesis.',
        treatment: 'Aspirina, nitroglicerina, morfina, trombólisis o cateterismo.',
        color: 'text-purple-600'
    }
};

// Componentes PQRST
export const pqrstInfo = [
    { label: 'Onda P', description: 'Despolarización auricular', position: 'top', color: 'bg-blue-500' },
    { label: 'Intervalo PR', description: 'Conducción AV (0.12-0.20s)', position: 'top', color: 'bg-cyan-500' },
    { label: 'Complejo QRS', description: 'Despolarización ventricular (<0.12s)', position: 'bottom', color: 'bg-green-500' },
    { label: 'Segmento ST', description: 'Fase inicial repolarización', position: 'bottom', color: 'bg-yellow-500' },
    { label: 'Onda T', description: 'Repolarización ventricular', position: 'top', color: 'bg-red-500' }
];