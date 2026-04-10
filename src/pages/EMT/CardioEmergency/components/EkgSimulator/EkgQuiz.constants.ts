export interface PqrstQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    category: 'pqrst' | 'clinical';
}

export const pqrstQuizQuestions: PqrstQuestion[] = [
    {
        id: 'pq01',
        question: '¿Cuál es el rango normal del intervalo PR?',
        options: ['0.04 – 0.08 s', '0.12 – 0.20 s', '0.25 – 0.35 s', '> 0.40 s'],
        correctIndex: 1,
        explanation:
            'El PR normal es 0.12-0.20 s (3-5 cuadros pequeños). Representa el retraso fisiológico en el nodo AV que permite el llenado ventricular. PR > 0.20 s indica bloqueo AV de 1er grado.',
        category: 'pqrst',
    },
    {
        id: 'pq02',
        question: '¿Qué evento cardíaco representa la onda P?',
        options: [
            'Despolarización ventricular',
            'Repolarización auricular',
            'Despolarización auricular',
            'Repolarización ventricular',
        ],
        correctIndex: 2,
        explanation:
            'La onda P = despolarización auricular. El impulso nace en el nodo SA y se propaga por ambas aurículas. Duración normal: 0.08-0.10 s, amplitud < 0.25 mV.',
        category: 'pqrst',
    },
    {
        id: 'pq03',
        question: '¿Qué indica una elevación del segmento ST ≥ 1 mm en ≥ 2 derivaciones contiguas?',
        options: [
            'Repolarización ventricular normal (variante)',
            'Bloqueo de rama derecha',
            'Lesión miocárdica transmural (posible STEMI)',
            'Hipertrofia auricular izquierda',
        ],
        correctIndex: 2,
        explanation:
            'La elevación del ST ≥ 1 mm en ≥ 2 derivaciones contiguas es criterio diagnóstico de STEMI hasta demostrar lo contrario. Indica isquemia transmural activa por oclusión coronaria completa.',
        category: 'pqrst',
    },
    {
        id: 'pq04',
        question: '¿Qué duración del complejo QRS indica bloqueo de rama completo?',
        options: ['< 0.08 s', '0.08 – 0.10 s', '0.10 – 0.12 s', '> 0.12 s'],
        correctIndex: 3,
        explanation:
            'Un QRS > 0.12 s (> 3 cuadros pequeños) indica bloqueo de rama completo. El impulso se conduce lentamente de célula en célula en vez de por las vías rápidas de Purkinje.',
        category: 'pqrst',
    },
    {
        id: 'pq05',
        question: '¿Qué anormalidad de la onda T es clásica de la hiperpotasemia?',
        options: [
            'Onda T invertida (negativa)',
            'Onda T aplanada',
            'Onda T picuda, alta y simétrica',
            'Ausencia de onda T',
        ],
        correctIndex: 2,
        explanation:
            'La hiperpotasemia produce ondas T picudas, simétricas y altas ("peaked T waves") por la alteración del gradiente K⁺ que acelera la repolarización. Es una de las primeras manifestaciones de K⁺ elevado.',
        category: 'pqrst',
    },
    {
        id: 'pq06',
        question: '¿Cuál es la consecuencia clínica más grave de un QTc prolongado?',
        options: [
            'Mayor riesgo de bloqueo AV',
            'Torsades de Pointes (TV polimórfica)',
            'Bradicardia sinusal',
            'Hipertrofia ventricular izquierda',
        ],
        correctIndex: 1,
        explanation:
            'QTc > 440 ms (♂) / > 460 ms (♀) predispone a Torsades de Pointes, una TV polimórfica potencialmente mortal. Causas: hipocalcemia, hipopotasemia, amiodarona, macrólidos, fluoroquinolonas.',
        category: 'pqrst',
    },
    {
        id: 'pq07',
        question: '¿Qué período del ciclo cardíaco representa el segmento ST?',
        options: [
            'Despolarización auricular',
            'Conducción nodo AV',
            'Contracción ventricular isométrica (período refractario absoluto)',
            'Repolarización auricular',
        ],
        correctIndex: 2,
        explanation:
            'El segmento ST = fase 2 del potencial de acción ventricular (meseta). Todas las células ventriculares están simultáneamente despolarizadas → período refractario absoluto. Normalmente isoeléctrico (± 0.5 mm de la línea de base).',
        category: 'pqrst',
    },
    {
        id: 'pq08',
        question: '¿La onda U prominente (> 1 mm) es signo clásico de qué alteración electrolítica?',
        options: ['Hipercalcemia', 'Hipopotasemia', 'Hiperpotasemia', 'Hipomagnesemia'],
        correctIndex: 1,
        explanation:
            'La onda U prominente es el signo electrocardiográfico clásico de hipopotasemia (K⁺ bajo). El bajo potasio prolonga la repolarización tardía de los músculos papilares y fibras de Purkinje, haciéndola más visible.',
        category: 'pqrst',
    },
    {
        id: 'pq09',
        question: '¿Cuál es la duración máxima normal del complejo QRS en adultos?',
        options: ['0.06 s', '0.08 s', '0.10 s', '0.12 s'],
        correctIndex: 3,
        explanation:
            'El QRS normal dura < 0.12 s (< 3 cuadros pequeños). Refleja la conducción rápida por el sistema His-Purkinje. Un QRS de 0.10-0.12 s sugiere bloqueo de rama incompleto; > 0.12 s = bloqueo completo.',
        category: 'pqrst',
    },
    {
        id: 'pq10',
        question: '¿Qué síndrome produce PR corto (< 0.12 s) + onda Delta + QRS ancho?',
        options: [
            'Bloqueo AV de 1er grado',
            'Síndrome de Wolff-Parkinson-White (WPW)',
            'Bloqueo de rama derecha',
            'Fibrilación auricular',
        ],
        correctIndex: 1,
        explanation:
            'El WPW tiene una vía accesoria (haz de Kent) que preexcita los ventrículos antes que el nodo AV → PR corto + onda Delta (empastamiento inicial del QRS) + QRS ancho. Predispone a taquicardias por reentrada graves.',
        category: 'pqrst',
    },
    {
        id: 'pq11',
        question: '¿Qué representa la onda T invertida en contexto de dolor torácico?',
        options: [
            'Variante normal en adultos mayores',
            'Posible isquemia miocárdica (NSTEMI / angina inestable)',
            'Hipertrofia ventricular derecha',
            'Arritmia benigna',
        ],
        correctIndex: 1,
        explanation:
            'La inversión de la onda T en contexto de dolor torácico es sugestiva de isquemia subendocárdica. Con troponinas elevadas → NSTEMI. Sin elevación de troponinas con cambios dinámicos → angina inestable.',
        category: 'clinical',
    },
    {
        id: 'pq12',
        question: '¿Qué combinación de hallazgos en el ECG es DIAGNÓSTICA de fibrilación auricular?',
        options: [
            'QRS anchos y regularmente irregulares',
            'Ausencia de ondas P definidas + intervalos R-R irregulares',
            'Bloqueo AV completo con disociación P-QRS',
            'Ondas P invertidas con QRS estrecho',
        ],
        correctIndex: 1,
        explanation:
            'FA: (1) ondas P ausentes → sustituidas por ondas f irregulares, (2) intervalos R-R irregulares, (3) QRS generalmente estrecho. La irregularidad absoluta + ausencia de ondas P definidas es diagnóstica.',
        category: 'clinical',
    },
    {
        id: 'pq13',
        question: '¿Cuándo está indicada la desfibrilación vs. el marcapasos transcutáneo?',
        options: [
            'Desfibrilación para bradicardia; marcapasos para FV',
            'Desfibrilación para FV / TVSP; marcapasos para bradicardia refractaria a atropina',
            'Ambos están indicados para cualquier arritmia',
            'Ninguno es efectivo en el ámbito prehospitalario',
        ],
        correctIndex: 1,
        explanation:
            'Desfibrilación → ritmos caóticos con actividad eléctrica (FV, TVSP). Marcapasos transcutáneo → bradicardia sintomática que no responde a atropina (0.5 mg IV, máx. 3 mg), especialmente bloqueo AV completo.',
        category: 'clinical',
    },
    {
        id: 'pq14',
        question: '¿En qué ritmo la desfibrilación está CONTRAINDICADA?',
        options: [
            'Fibrilación ventricular',
            'Taquicardia ventricular sin pulso',
            'Asistolia (línea plana)',
            'Flutter ventricular',
        ],
        correctIndex: 2,
        explanation:
            'En la asistolia no hay actividad eléctrica que "resetear". La desfibrilación podría suprimir focos de escape residuales. Tratamiento correcto: RCP de alta calidad + epinefrina 1 mg IV/IO cada 3-5 min. No desfibrilar.',
        category: 'clinical',
    },
    {
        id: 'pq15',
        question: '¿Qué hallazgo en el ECG de un paciente con dolor torácico inferior OBLIGA a descartar infarto de ventrículo derecho?',
        options: [
            'Bloqueo de rama izquierda nuevo',
            'Elevación ST en V4R (derivación derecha)',
            'Depresión ST en V1-V2',
            'Ondas Q en DI y aVL',
        ],
        correctIndex: 1,
        explanation:
            'La elevación del ST en V4R indica infarto de ventrículo derecho. Esto contraindica la nitroglicerina (el VD depende de precarga). Si hay STEMI inferior (DII, DIII, aVF), siempre obtener V4R antes de administrar nitratos.',
        category: 'clinical',
    },
];

