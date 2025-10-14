import {RhythmInfo, RhythmType} from "./EkgSimulator.types.ts";

export const rhythmData: Record<RhythmType, RhythmInfo> = {
    normal: {
        name: 'Ritmo Sinusal Normal',
        bpm: 75,
        description: 'Ritmo cardíaco regular con ondas P, complejo QRS y onda T normales.',
        clinical: 'Ritmo cardíaco saludable. Frecuencia entre 60-100 lpm.',
        treatment: 'No requiere tratamiento.',
        color: 'text-green-600',
        explanation: 'El nodo sinusal (SA) genera impulsos eléctricos regulares a 60-100 lpm. El impulso viaja desde las aurículas (onda P), a través del nodo AV (intervalo PR), hacia los ventrículos (QRS), seguido de la repolarización ventricular (onda T). Todo el sistema de conducción funciona normalmente.'
    },
    tachycardia: {
        name: 'Taquicardia Sinusal',
        bpm: 120,
        description: 'Ritmo sinusal regular pero acelerado (>100 lpm).',
        clinical: 'Puede ser causada por ejercicio, estrés, fiebre, hipovolemia o hipoxia.',
        treatment: 'Tratar la causa subyacente. Monitoreo continuo.',
        color: 'text-yellow-600',
        explanation: 'El nodo SA responde a estímulos simpáticos (adrenalina, noradrenalina) aumentando su frecuencia de descarga. Es una respuesta fisiológica al estrés, ejercicio, pérdida de sangre, dolor o hipoxia. El sistema de conducción permanece intacto, solo acelera su ritmo.'
    },
    bradycardia: {
        name: 'Bradicardia Sinusal',
        bpm: 45,
        description: 'Ritmo sinusal regular pero lento (<60 lpm).',
        clinical: 'Puede ser normal en atletas o indicar problemas de conducción.',
        treatment: 'Si es sintomática: Atropina, marcapasos temporal.',
        color: 'text-blue-600',
        explanation: 'El nodo SA genera impulsos más lentamente por tono vagal aumentado (parasimpático). En atletas, es adaptación normal por corazón más eficiente. En otros casos, puede indicar bloqueo SA, isquemia, medicamentos (beta-bloqueadores) o hipotermia.'
    },
    vfib: {
        name: 'Fibrilación Ventricular',
        bpm: 0,
        description: 'Actividad eléctrica caótica y desorganizada sin pulso.',
        clinical: '¡EMERGENCIA! Paro cardíaco. El paciente está clínicamente muerto.',
        treatment: 'RCP inmediata + Desfibrilación + ACLS (Epinefrina, Amiodarona).',
        color: 'text-red-600',
        explanation: 'Múltiples focos ectópicos en los ventrículos disparan de forma descoordinada y caótica. No hay contracción efectiva del miocardio, solo "temblor" ventricular. Causas: IAM, electrocución, hipoxia severa, hipotermia. Sin tratamiento inmediato, lleva a muerte en minutos.'
    },
    afib: {
        name: 'Fibrilación Auricular',
        bpm: 90,
        description: 'Actividad auricular desorganizada, intervalos R-R irregulares.',
        clinical: 'Riesgo de formación de trombos y ACV. Paciente puede estar estable.',
        treatment: 'Control de frecuencia (beta-bloqueadores), anticoagulación.',
        color: 'text-orange-600',
        explanation: 'Múltiples focos ectópicos en las aurículas generan impulsos desorganizados (350-600 lpm). El nodo AV actúa como "filtro", dejando pasar algunos impulsos irregularmente, causando intervalos R-R variables. La sangre se estanca en aurículas, formando trombos (riesgo de ACV).'
    },
    vtach: {
        name: 'Taquicardia Ventricular',
        bpm: 180,
        description: 'Ritmo ventricular rápido y regular con QRS anchos.',
        clinical: 'URGENCIA. Puede degenerar en FV. Verificar si hay pulso.',
        treatment: 'Con pulso: Amiodarona. Sin pulso: Desfibrilación + RCP.',
        color: 'text-red-500',
        explanation: 'Un foco ectópico ventricular toma control como marcapasos, generando impulsos rápidos (>100 lpm). Los impulsos no siguen vías normales de conducción, por eso el QRS es ancho (>0.12s). Causas: IAM, isquemia, alteraciones electrolíticas, toxicidad por drogas.'
    },
    asystole: {
        name: 'Asistolia',
        bpm: 0,
        description: 'Ausencia completa de actividad eléctrica cardíaca.',
        clinical: 'Paro cardíaco. Línea plana. Mal pronóstico.',
        treatment: 'RCP de alta calidad + Epinefrina. NO desfibrilar.',
        color: 'text-gray-600',
        explanation: 'No hay actividad eléctrica en el corazón. El nodo SA y todos los marcapasos de respaldo han fallado. Puede ser el resultado final de FV no tratada, hipoxia prolongada, exanguinación masiva o trauma severo. La desfibrilación NO ayuda porque no hay actividad que "resetear".'
    },
    stemi: {
        name: 'STEMI (Infarto con elevación ST)',
        bpm: 85,
        description: 'Elevación del segmento ST indicando infarto agudo transmural.',
        clinical: 'EMERGENCIA. IAM en curso. Dolor torácico, diaforesis.',
        treatment: 'Aspirina, nitroglicerina, morfina, trombólisis o cateterismo.',
        color: 'text-purple-600',
        explanation: 'Una arteria coronaria está completamente ocluida (trombo), causando isquemia transmural (todo el espesor del miocardio). Las células miocárdicas lesionadas alteran la repolarización ventricular, elevando el segmento ST. Es una emergencia tiempo-dependiente: "Tiempo es músculo".'
    },
    custom: {
        name: 'Ritmo Personalizado',
        bpm: 75,
        description: 'Ritmo configurado manualmente por el estudiante.',
        clinical: 'Permite experimentar con diferentes parámetros del EKG.',
        treatment: 'Modo educativo para aprender los componentes del EKG.',
        color: 'text-indigo-600',
        explanation: 'Este modo permite modificar individualmente cada componente del EKG para comprender cómo diferentes parámetros afectan el trazado. Útil para aprender la fisiopatología de diferentes condiciones cardíacas.'
    }
};

// Componentes PQRST con explicaciones detalladas
export const pqrstInfo = [
    {
        label: 'Onda P',
        description: 'Despolarización auricular',
        position: 'top',
        color: 'bg-blue-500',
        detailedExplanation: 'Representa la despolarización de las aurículas derecha e izquierda. El impulso eléctrico se origina en el nodo sinusal (SA) y se propaga por ambas aurículas. Duración normal: 0.08-0.10 segundos. Amplitud: 0.25 mV.',
        normalValues: 'Duración: 0.08-0.10s, Amplitud: <0.25mV',
        abnormalities: 'Ausente en FA, picuda en hipertrofia auricular, invertida en ritmos ectópicos'
    },
    {
        label: 'Intervalo PR',
        description: 'Conducción AV (0.12-0.20s)',
        position: 'top',
        color: 'bg-cyan-500',
        detailedExplanation: 'Tiempo desde el inicio de la despolarización auricular hasta el inicio de la despolarización ventricular. Incluye el retraso fisiológico en el nodo AV que permite el llenado ventricular completo.',
        normalValues: 'Duración: 0.12-0.20s (3-5 cuadros pequeños)',
        abnormalities: 'Corto: síndrome de WPW, Largo: bloqueo AV de 1er grado, Variable: bloqueo AV de 2do grado'
    },
    {
        label: 'Complejo QRS',
        description: 'Despolarización ventricular (<0.12s)',
        position: 'bottom',
        color: 'bg-green-500',
        detailedExplanation: 'Despolarización de los ventrículos a través del sistema His-Purkinje. Q: primera deflexión negativa, R: primera deflexión positiva, S: segunda deflexión negativa. La conducción rápida produce un QRS estrecho.',
        normalValues: 'Duración: <0.12s (<3 cuadros pequeños), Amplitud: varía según derivación',
        abnormalities: 'Ancho (>0.12s): bloqueo de rama, ritmos ventriculares, marcapasos. Ondas Q profundas: infarto antiguo'
    },
    {
        label: 'Segmento ST',
        description: 'Fase inicial repolarización',
        position: 'bottom',
        color: 'bg-yellow-500',
        detailedExplanation: 'Periodo entre el final de la despolarización ventricular y el inicio de la repolarización. Normalmente isoeléctrico (al nivel de la línea base). Indica el periodo de contracción ventricular total.',
        normalValues: 'Isoeléctrico (±0.5mm de la línea base)',
        abnormalities: 'Elevación: STEMI, pericarditis, aneurisma. Depresión: isquemia subendocárdica, inversión de onda T'
    },
    {
        label: 'Onda T',
        description: 'Repolarización ventricular',
        position: 'top',
        color: 'bg-red-500',
        detailedExplanation: 'Repolarización de los ventrículos (retorno al estado de reposo). Normalmente en la misma dirección que el QRS. Representa la fase de relajación ventricular y llenado de las coronarias.',
        normalValues: 'Amplitud: 0.1-0.5mV, misma dirección que QRS',
        abnormalities: 'Invertida: isquemia. Picuda: hiperpotasemia. Aplanada: hipopotasemia, isquemia'
    }
];

// Explicaciones educativas adicionales
export const ekgExplanations = {
    conductionSystem: {
        title: '⚡ Sistema de Conducción Cardíaco',
        content: `
            1. **Nodo Sinusal (SA)**: Marcapasos natural (60-100 lpm)
            2. **Vías Internodales**: Conducen impulso por aurículas
            3. **Nodo Auriculoventricular (AV)**: Retrasa impulso (permite llenado ventricular)
            4. **Haz de His**: Conduce a ventrículos
            5. **Ramas Derecha e Izquierda**: Distribuyen impulso
            6. **Fibras de Purkinje**: Despolarización rápida ventricular
        `
    },
    rhythmCategories: {
        title: '📊 Categorías de Ritmos',
        content: `
            **Ritmos Fibrilantes**: Actividad eléctrica caótica sin contracción efectiva (FV, FA)
            **Ritmos Rápidos**: Taquicardias >100 lpm (Taquicardia Sinusal, TV)
            **Ritmos Lentos**: Bradicardias <60 lpm
            **Ritmos Isquémicos**: Alteraciones por falta de oxígeno (STEMI, inversión T)
        `
    }
};
