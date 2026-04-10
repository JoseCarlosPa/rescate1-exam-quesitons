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
        treatment: 'AAS, nitroglicerina (si PA >100), trombólisis o cateterismo urgente. Morfina: uso controversial.',
        color: 'text-purple-600',
        explanation: 'Una arteria coronaria está completamente ocluida (trombo), causando isquemia transmural (todo el espesor del miocardio). Las células miocárdicas lesionadas alteran la repolarización ventricular, elevando el segmento ST. Es una emergencia tiempo-dependiente: "Tiempo es músculo".'
    },
    nstemi: {
        name: 'NSTEMI / Isquemia Subendocárdica',
        bpm: 88,
        description: 'Depresión del segmento ST: isquemia subendocárdica activa o NSTEMI.',
        clinical: 'EMERGENCIA. Dolor torácico, troponinas elevadas. Sin elevación de ST.',
        treatment: 'AAS, anticoagulación, clopidogrel, beta-bloqueadores, cateterismo urgente.',
        color: 'text-orange-700',
        explanation: 'Oclusión coronaria parcial o isquemia subendocárdica. No hay elevación del ST pero sí depresión, que indica isquemia activa sin infarto transmural completo. Las troponinas se elevan confirmando necrosis. No requiere reperfusión tan inmediata como el STEMI pero sí manejo urgente.'
    },
    flutter_auricular: {
        name: 'Flutter Auricular',
        bpm: 150,
        description: 'Actividad auricular regular a ~300 lpm con bloqueo 2:1. Patrón en "dientes de sierra".',
        clinical: 'Palpitaciones, disnea, mareo. Más regular que FA pero igualmente requiere tratamiento.',
        treatment: 'Control de frecuencia (beta-bloqueadores, diltiazem), anticoagulación, cardioversión.',
        color: 'text-orange-500',
        explanation: 'Un circuito de reentrada macroentrante en la aurícula derecha genera impulsos a 250-350 lpm. El nodo AV bloquea la mayoría (conducción 2:1 o 4:1), produciendo respuesta ventricular regular. El patrón en dientes de sierra ("flutter waves" o "ondas F") es la firma electrocardiográfica. Alto riesgo de formación de trombos.'
    },
    tsv: {
        name: 'Taquicardia Supraventricular (TSV)',
        bpm: 165,
        description: 'Taquicardia regular de origen supraventricular, QRS estrecho, inicio y fin súbito.',
        clinical: 'Palpitaciones súbitas, mareo, síncope. Frecuente en adultos jóvenes sin cardiopatía.',
        treatment: 'Maniobras vagales (Valsalva), adenosina 6mg IV rápida, cardioversión si inestable.',
        color: 'text-yellow-600',
        explanation: 'Un circuito de reentrada en o cerca del nodo AV (TRNAV) genera impulsos rápidos y regulares. El ventrículo se despolariza normalmente por las vías His-Purkinje, por eso el QRS es estrecho (<0.12s). Puede terminar súbitamente con maniobras vagales que aumentan el tono parasimpático. Las ondas P suelen estar ocultas dentro o justo detrás del QRS.'
    },
    av_block_3: {
        name: 'Bloqueo AV de 3er Grado (Completo)',
        bpm: 35,
        description: 'Disociación AV completa. Aurículas y ventrículos laten de forma completamente independiente.',
        clinical: 'URGENCIA. Síncope, presíncope, mareo severo, hipotensión, bradicardia extrema.',
        treatment: 'Atropina 0.5mg IV (máx 3mg), marcapasos transcutáneo urgente, traslado inmediato.',
        color: 'text-red-700',
        explanation: 'Ningún impulso auricular atraviesa el nodo AV. El ventrículo escapa con su propio ritmo idioventricular (20-40 lpm) o de la unión (40-60 lpm). Las ondas P y QRS son completamente independientes (disociación AV). El QRS es ancho si el escape es ventricular, estrecho si es nodal. Causas: isquemia, cardiopatía degenerativa, medicamentos.'
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
        abnormalities: 'Invertida: isquemia. Picuda y simétrica: hiperpotasemia. Aplanada: hipopotasemia, isquemia'
    },
    {
        label: 'Intervalo QT',
        description: 'Actividad eléctrica ventricular total (QRS + ST + T)',
        position: 'bottom',
        color: 'bg-purple-500',
        detailedExplanation: 'Mide desde el inicio del QRS hasta el final de la onda T. Representa el tiempo total de activación y recuperación ventricular. Se corrige por frecuencia cardíaca (QTc = QT/√RR, fórmula de Bazett). A mayor FC, el QT se acorta fisiológicamente.',
        normalValues: 'QTc: <440ms (hombres), <460ms (mujeres). A 60 lpm: ~400ms',
        abnormalities: 'Prolongado: amiodarona, macrólidos, fluoroquinolonas, hipocalcemia, hipopotasemia → riesgo de Torsades de Pointes. Corto: hipercalcemia, digoxina'
    },
    {
        label: 'Onda U',
        description: 'Repolarización tardía (músculos papilares / Purkinje)',
        position: 'top',
        color: 'bg-pink-400',
        detailedExplanation: 'Pequeña deflexión positiva que sigue a la onda T. Su origen exacto es debatido; se cree que representa la repolarización tardía de los músculos papilares o fibras de Purkinje. Visible en derivaciones precordiales V2-V3 a frecuencias cardíacas bajas.',
        normalValues: 'Amplitud: <0.1mV, misma dirección que onda T. No siempre visible.',
        abnormalities: 'Prominente (>1mm o mayor que onda T): hipopotasemia (signo clásico), bradicardia. Invertida: isquemia miocárdica activa, hipertensión arterial sistémica'
    }
];

// Explicaciones educativas adicionales
export const ekgExplanations = {
    conductionSystem: {
        title: '⚡ Sistema de Conducción Cardíaco',
        steps: [
            { number: '1', label: 'Nodo Sinusal (SA)', detail: 'Marcapasos natural. Frecuencia intrínseca: 60-100 lpm.' },
            { number: '2', label: 'Vías Internodales', detail: 'Conducen el impulso por ambas aurículas → onda P.' },
            { number: '3', label: 'Nodo AV', detail: 'Retrasa el impulso 0.12-0.20s → permite llenado ventricular → intervalo PR.' },
            { number: '4', label: 'Haz de His', detail: 'Conduce el impulso hacia los ventrículos.' },
            { number: '5', label: 'Ramas D/I del Haz de His', detail: 'Distribuyen el impulso a ventrículos derecho e izquierdo.' },
            { number: '6', label: 'Fibras de Purkinje', detail: 'Despolarización rápida del miocardio ventricular → complejo QRS.' },
        ]
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
