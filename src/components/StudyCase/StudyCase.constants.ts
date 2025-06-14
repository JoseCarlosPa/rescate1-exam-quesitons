export type CaseStudy = {
    id: string;
    title: string;
    description: string;
    initialAssessment: string;
    vitalSigns: Record<string, string>;
    findings: string[];
    questions: { question: string; answer?: string }[];
    references: string[];
};

export const caseStudies: CaseStudy[] = [
    {
        id: "accidente-motocicleta-01",
        title: "Colisión entre automóvil y motocicleta",
        description:
            "Un motociclista de 22 años sufre una colisión de alto impacto. Presenta alteración del estado de conciencia, respiración superficial, fractura expuesta en extremidad inferior y signos claros de shock obstructivo.",
        initialAssessment:
            "Inconsciente (responde a estímulos dolorosos), respiración rápida, superficial y asimétrica. Pulso radial filiforme. Fractura expuesta en fémur izquierdo con deformidad. Se observa distensión de venas yugulares y desviación traqueal. Ausencia de ruidos respiratorios en hemitórax izquierdo.",
        vitalSigns: {
            "Pulso inicial": "138 lpm",
            "TA inicial": "96/54 mmHg",
            "SpO2 inicial": "88% con BVM a O₂ 15 lpm",
            "FR inicial": "34 rpm",
            // Signos vitales post-intervención
            "Pulso final": "118 lpm",
            "TA final": "104/62 mmHg",
            "SpO2 final": "96%",
            "FR final": "24 rpm",
        },
        findings: [
            "Shock obstructivo secundario a neumotórax a tensión izquierdo.",
            "Traumatismo craneoencefálico moderado.",
            "Fractura de fémur izquierdo expuesta.",
            "Requiere descompresión torácica con aguja de forma inmediata.",
        ],
        questions: [
            { question: "¿Qué hallazgo clínico es el más indicativo de un neumotórax a tensión en este paciente?" },
            { question: "¿Por qué mejoran la presión arterial y la frecuencia cardíaca después de la descompresión torácica?" },
            { question: "¿Cuál es el manejo inicial prioritario para la fractura expuesta?" },
        ],
        references: ["Capítulo 12 - Shock.pdf"],
    },
    {
        id: "paciente-inconsciente-03",
        title: "Paciente inconsciente en domicilio",
        description:
            "Se encuentra a un hombre de 25 años inconsciente en su departamento. No hay signos evidentes de trauma. El paciente presenta bradicardia, hipotensión y no responde. Finalmente se diagnostica sobredosis.",
        initialAssessment:
            "Sin lesiones visibles, nivel de glucosa normal, ventilación inicial pobre pero mejora con oxígeno, bradicardia persistente e hipotensión, sin respuesta al estímulo.",
        vitalSigns: {
            "Glucosa": "108 mg/dL",
            "Frecuencia cardíaca": "Baja (bradicardia)",
            "Presión arterial": "Hipotensa (no especificada)",
        },
        findings: [
            "Paciente inconsciente sin historia clara",
            "No hay signos de trauma",
            "Oxigenación mejora tras intervención",
            "Se sospecha sobredosis múltiple",
        ],
        questions: [
            { question: "¿Cuáles son los componentes de la evaluación del paciente?" },
            { question: "¿Cómo varía la evaluación si el paciente está enfermo o lesionado?" },
            { question: "¿Está indicada la inmovilización de columna? ¿Por qué?" },
            { question: "¿Cuál hallazgo requiere atención inmediata?" },
            { question: "¿Requiere tratamiento adicional en la escena? ¿Cuál?" },
            { question: "¿Debe esperar otra unidad o trasladar de inmediato? ¿Por qué?" },
            { question: "¿Cambió la condición del paciente durante la atención? ¿Cómo responder a ello?" },
            { question: "¿Qué elementos de la historia SAMPLE pueden obtenerse sin que el paciente responda?" },
            { question: "¿Por qué es importante reevaluar constantemente?" },
        ],
        references: [
            "AAOS Atención Prehospitalaria Básica, 11ª Edición - Capítulos de evaluación primaria, evaluación médica y emergencias por sobredosis.",
        ],
    },
    {
        id: "diabetico-no-responde-04",
        title: "Paciente diabético inconsciente",
        description:
            "Hombre de 54 años encontrado en su oficina inconsciente. Empleados refieren que se veía confundido antes de desplomarse. Se encuentra pulso débil y piel húmeda.",
        initialAssessment:
            "Paciente inconsciente, piel pálida y diaforética, sin signos de trauma visibles, glucosa capilar de 36 mg/dL.",
        vitalSigns: {
            FC: "112 lpm",
            TA: "100/60 mmHg",
            SpO2: "97%",
            Glucosa: "36 mg/dL",
        },
        findings: [
            "Hipoglucemia severa",
            "Necesita glucosa IV o glucagón IM",
            "Sin antecedentes claros disponibles en el lugar",
        ],
        questions: [
            { question: "¿Cuál es la intervención inmediata indicada para este paciente?" },
            { question: "¿Cómo afecta la hipoglucemia el estado mental del paciente?" },
            { question: "¿Qué protocolo seguir si el paciente no responde a glucosa oral?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias endocrinas.",
        ],
    },
    {
        id: "asma-descompensada-05",
        title: "Crisis asmática severa",
        description:
            "Mujer de 29 años con antecedentes de asma, encontrada en posición de trípode, jadeando por aire, con silbilancias audibles. No responde bien al inhalador.",
        initialAssessment:
            "Consciente, pero con dificultad extrema para hablar. Respiración rápida, uso de músculos accesorios, tórax hiperexpandido.",
        vitalSigns: {
            FC: "124 lpm",
            FR: "30 rpm",
            SpO2: "88%",
            TA: "110/68 mmHg",
        },
        findings: [
            "Broncoespasmo severo",
            "Necesita oxígeno de alto flujo y broncodilatador nebulizado",
            "Riesgo de agotamiento respiratorio",
        ],
        questions: [
            { question: "¿Qué indicaciones hay para administrar salbutamol en nebulización?" },
            { question: "¿Cuándo se debe asistir la ventilación de un paciente asmático?" },
            { question: "¿Qué signos indican inminente fallo respiratorio?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias respiratorias.",
        ],
    },
    {
        id: "trauma-cervical-06",
        title: "Caída desde altura con sospecha de lesión cervical",
        description:
            "Joven de 17 años cayó de una escalera de 3 metros. Está consciente pero refiere adormecimiento en las extremidades y dolor en el cuello.",
        initialAssessment:
            "Consciente, alerta, quejoso de cuello. No puede mover las piernas. Mecanismo de lesión significativo.",
        vitalSigns: {
            FC: "90 lpm",
            TA: "122/84 mmHg",
            SpO2: "96%",
        },
        findings: [
            "Sospecha de lesión medular cervical",
            "Restricción completa de columna espinal indicada",
            "Evaluación neurológica continua es clave",
        ],
        questions: [
            { question: "¿Cuándo está indicada la inmovilización espinal completa?" },
            { question: "¿Qué signos indican lesión medular?" },
            { question: "¿Cómo evalúas función motora y sensitiva en escena?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma músculo-esquelético e inmovilización.",
        ],
    },
    {
        id: "dolor-toracico-infarto-07",
        title: "Dolor torácico sospechoso de infarto",
        description:
            "Hombre de 60 años con antecedentes de hipertensión y tabaquismo refiere dolor opresivo en el pecho irradiado a brazo izquierdo, con náusea y diaforesis.",
        initialAssessment:
            "Consciente, pálido, diaforético, dolor torácico de inicio súbito, refiere malestar desde hace 20 minutos.",
        vitalSigns: {
            FC: "106 lpm",
            TA: "132/86 mmHg",
            SpO2: "95%",
        },
        findings: [
            "Infarto agudo del miocardio (IAM)",
            "Riesgo de paro cardíaco si no se traslada de inmediato",
            "Asistencia con nitroglicerina si no hay contraindicaciones",
        ],
        questions: [
            { question: "¿Qué medicamentos puedes administrar en sospecha de IAM?" },
            { question: "¿Qué datos electrocardiográficos o clínicos deben reportarse al hospital?" },
            { question: "¿Cómo evalúas el dolor torácico de manera sistemática?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias cardiovasculares.",
        ],
    },
    {
        id: "parto-inminente-08",
        title: "Parto inminente en domicilio",
        description:
            "Mujer de 32 años embarazada de 39 semanas. Reporta contracciones intensas y sensación de pujo. El parto ocurre antes de llegar al hospital.",
        initialAssessment:
            "Paciente en decúbito, con contracciones cada 2 minutos. Se observa presentación cefálica. Bolsa rota. Trabajo de parto activo.",
        vitalSigns: {
            FC: "98 lpm",
            TA: "120/74 mmHg",
            SpO2: "99%",
        },
        findings: [
            "Parto inminente en campo",
            "Necesidad de asistir el parto, mantener la vía aérea del neonato, evaluar APGAR",
            "Control de sangrado postparto materno",
        ],
        questions: [
            { question: "¿Cuáles son los pasos clave para un parto asistido en el campo?" },
            { question: "¿Cómo evalúas al recién nacido con APGAR?" },
            { question: "¿Qué hacer en caso de hemorragia postparto?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias obstétricas y neonatales.",
        ],
    },
    {
        id: "quemadura-electrica-09",
        title: "Lesión por quemadura eléctrica",
        description:
            "Hombre de 35 años electrocutado al tocar un cable de alta tensión en una obra. Lo encuentran consciente, pero confuso. Presenta quemaduras en mano y pie.",
        initialAssessment:
            "Confuso, piel pálida, quemadura de entrada en mano derecha y salida en pie izquierdo. Pulso irregular.",
        vitalSigns: {
            FC: "128 lpm",
            TA: "110/70 mmHg",
            SpO2: "97%",
        },
        findings: [
            "Quemaduras eléctricas con posible lesión interna",
            "Riesgo de arritmias cardíacas",
            "Importancia de monitorización continua",
        ],
        questions: [
            { question: "¿Por qué una quemadura eléctrica puede causar daño interno severo sin lesión externa visible?" },
            { question: "¿Cuál es el riesgo cardíaco asociado a este tipo de trauma?" },
            { question: "¿Qué medidas debes tomar si no tienes un monitor cardíaco disponible?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias ambientales y trauma eléctrico.",
        ],
    },
    {
        id: "ahogamiento-nino-10",
        title: "Ahogamiento en piscina",
        description:
            "Niño de 6 años fue sacado de una piscina tras estar sumergido por aproximadamente 1 minuto. No responde, pero presenta esfuerzo respiratorio mínimo.",
        initialAssessment:
            "Inconsciente, respiración lenta y superficial, presencia de cianosis en labios y dedos. Pulso débil.",
        vitalSigns: {
            FC: "60 lpm",
            TA: "90/60 mmHg",
            SpO2: "85%",
        },
        findings: [
            "Hipoxia severa por casi-ahogamiento",
            "Necesita soporte ventilatorio inmediato",
            "Riesgo de edema pulmonar secundario",
        ],
        questions: [
            { question: "¿Cuál es la prioridad en un caso de ahogamiento pediátrico?" },
            { question: "¿Qué signos indican que el paciente podría desarrollar complicaciones como edema pulmonar?" },
            { question: "¿Qué precauciones especiales debes tener en niños después de un rescate acuático?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias pediátricas y ambientales.",
        ],
    },
    {
        id: "abuso-anciano-11",
        title: "Sospecha de abuso en paciente geriátrico",
        description:
            "Paciente masculino de 78 años, reportado por vecino que lo encontró con hematomas faciales y confusión. Vive con su hijo adulto.",
        initialAssessment:
            "Orientación parcial, múltiples equimosis en cara y brazos, dice haberse 'caído de nuevo', evita mirar al hijo.",
        vitalSigns: {
            FC: "82 lpm",
            TA: "136/84 mmHg",
            SpO2: "95%",
        },
        findings: [
            "Signos no consistentes con trauma accidental",
            "Potencial víctima de abuso físico",
            "Necesidad de notificación obligatoria a autoridades",
        ],
        questions: [
            { question: "¿Qué señales deben hacerte sospechar de abuso en adultos mayores?" },
            { question: "¿Cómo debes documentar este tipo de incidentes?" },
            { question: "¿Cuál es tu obligación legal como proveedor prehospitalario?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias geriátricas y consideraciones éticas/legales.",
        ],
    },
    {
        id: "fractura-femur-12",
        title: "Trauma por accidente ciclista",
        description:
            "Adolescente de 15 años fue atropellado por un automóvil al cruzar una avenida en bicicleta. Presenta deformidad evidente en muslo derecho y no puede mover la pierna.",
        initialAssessment:
            "Consciente, refiere dolor intenso. Hematoma extenso en muslo. Extremidad acortada y rotada externamente.",
        vitalSigns: {
            FC: "104 lpm",
            TA: "118/76 mmHg",
            SpO2: "98%",
        },
        findings: [
            "Fractura de fémur con riesgo de hemorragia interna",
            "Posible compromiso circulatorio distal",
            "Requiere inmovilización con férula tracción",
        ],
        questions: [
            { question: "¿Qué peligros tiene una fractura de fémur si no se trata a tiempo?" },
            { question: "¿Cómo se evalúa la circulación distal en una extremidad lesionada?" },
            { question: "¿Cuándo está indicada la férula de tracción?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma músculo-esquelético e inmovilización.",
        ],
    },
    {
        id: "convulsiones-post-trauma-13",
        title: "Convulsiones tras caída de bicicleta",
        description:
            "Niño de 8 años cayó sin casco mientras andaba en bicicleta. Fue encontrado convulsionando brevemente. Actualmente está somnoliento y desorientado.",
        initialAssessment:
            "Pupilas isocóricas, respuesta lenta al estímulo, hematoma en región occipital. Vómito posterior al evento.",
        vitalSigns: {
            FC: "90 lpm",
            TA: "110/72 mmHg",
            SpO2: "96%",
        },
        findings: [
            "Posible lesión cerebral traumática",
            "Convulsión post-traumática",
            "Requiere traslado urgente con vigilancia neurológica",
        ],
        questions: [
            {question: "¿Qué indicios post-evento hacen sospechar una lesión intracraneal?"},
            {question: "¿Por qué es importante monitorizar a niños con traumatismo craneoencefálico incluso si lucen estables?"},
            {question: "¿Qué signos clínicos deben alertarte sobre deterioro neurológico inminente?"},
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma pediátrico y neurológico.",
        ],
    },
    {
        id: "shock-anafilactico-14",
        title: "Reacción alérgica severa por picadura",
        description:
            "Hombre de 24 años presenta dificultad respiratoria progresiva tras ser picado por una abeja. Tiene antecedentes de alergia a insectos.",
        initialAssessment:
            "Paciente consciente pero ansioso, ronquido laríngeo, urticaria en pecho y cuello. Pulso rápido y débil.",
        vitalSigns: {
            FC: "132 lpm",
            TA: "88/50 mmHg",
            SpO2: "89%",
        },
        findings: [
            "Anafilaxia en progreso",
            "Indicación inmediata de adrenalina intramuscular",
            "Oxígeno de alto flujo y monitorización",
        ],
        questions: [
            { question: "¿Cuáles son los signos clave de una anafilaxia?" },
            { question: "¿Qué dosis y vía se recomienda para la adrenalina en adulto?" },
            { question: "¿Qué hacer si no hay mejoría tras la primera dosis?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias alérgicas y anafilaxia.",
        ],
    },
    {
        id: "intoxicacion-monoxido-15",
        title: "Intoxicación por monóxido de carbono",
        description:
            "Familia completa encontrada con cefalea, náuseas y desorientación tras usar calentador de gas en ambiente cerrado. Sospecha de intoxicación por monóxido.",
        initialAssessment:
            "Todos los pacientes están pálidos, somnolientos, sin signos de trauma. Ambiente cerrado con calefactor portátil encendido.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "118/76 mmHg",
            SpO2: "98% (lectura falsamente normal)",
        },
        findings: [
            "Sospecha de intoxicación por CO",
            "SpO2 puede ser engañosa: requiere oxígeno al 100% por mascarilla con reservorio",
            "Necesidad de traslado urgente y posible cámara hiperbárica",
        ],
        questions: [
            { question: "¿Por qué el oxímetro puede dar falsos positivos en estas situaciones?" },
            { question: "¿Qué gas impide la correcta oxigenación en sangre en este caso?" },
            { question: "¿Cuál es el tratamiento inicial en el entorno prehospitalario?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias tóxicas y ambientales.",
        ],
    },
    {
        id: "hipotermia-moderada-16",
        title: "Hipotermia en persona sin hogar",
        description:
            "Hombre en situación de calle es encontrado en la madrugada bajo lluvia. Está lento para responder y tiembla de forma intensa.",
        initialAssessment:
            "Paciente consciente, pero responde lentamente. Piel fría, extremidades entumecidas. Habla incoherente.",
        vitalSigns: {
            FC: "56 lpm",
            TA: "102/58 mmHg",
            SpO2: "93%",
            Temp: "33°C",
        },
        findings: [
            "Hipotermia moderada",
            "Riesgo de arritmias al manipular al paciente bruscamente",
            "Necesita recalentamiento pasivo + oxígeno",
        ],
        questions: [
            { question: "¿Qué precauciones debes tener al movilizar a un paciente con hipotermia?" },
            { question: "¿Cómo clasificas la severidad de la hipotermia según la temperatura?" },
            { question: "¿Qué diferencia hay entre recalentamiento pasivo y activo?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias ambientales.",
        ],
    },
    {
        id: "embarazo-ectopico-17",
        title: "Dolor abdominal en mujer con embarazo ectópico",
        description:
            "Mujer de 30 años con retraso menstrual y dolor abdominal súbito e intenso en fosa iliaca derecha. Presenta mareo y diaforesis.",
        initialAssessment:
            "Consciente, pálida, diaforética. Dolor abdominal severo. Pulso débil. Sospecha de hemorragia interna.",
        vitalSigns: {
            FC: "122 lpm",
            TA: "90/58 mmHg",
            SpO2: "96%",
        },
        findings: [
            "Embarazo ectópico roto",
            "Sospecha de choque hipovolémico",
            "Necesita traslado urgente a centro con cirugía",
        ],
        questions: [
            { question: "¿Qué hallazgos sugieren una hemorragia interna en una paciente en edad fértil?" },
            { question: "¿Por qué es crítica la evaluación obstétrica incluso si no hay sangrado vaginal?" },
            { question: "¿Cuál es el tratamiento inicial prehospitalario ante sospecha de embarazo ectópico?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias ginecológicas.",
        ],
    },
    {
        id: "ictus-accidente-cerebrovascular-18",
        title: "Sospecha de ACV en adulto mayor",
        description:
            "Mujer de 66 años presenta desviación facial, habla arrastrada y debilidad en brazo izquierdo. Última vez vista normal: hace 30 minutos.",
        initialAssessment:
            "Paciente consciente, habla con dificultad, desviación facial derecha, sin trauma evidente. Responde a preguntas simples.",
        vitalSigns: {
            FC: "86 lpm",
            TA: "144/92 mmHg",
            SpO2: "98%",
            Glucosa: "110 mg/dL",
        },
        findings: [
            "Sospecha de accidente cerebrovascular isquémico",
            "Tiempo de inicio <1 hora: candidato a tratamiento trombolítico",
            "Requiere traslado prioritario a centro con TC de cráneo y neurología",
        ],
        questions: [
            {question: "¿Qué herramientas puedes usar para evaluar un ACV en campo?"},
            {question: "¿Por qué es fundamental registrar la 'última vez vista normal'?"},
            {question: "¿Qué diagnóstico diferencial debes descartar antes de confirmar ACV?"},
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias neurológicas.",
        ],
    },
    {
        id: "obstruccion-via-aerea-19",
        title: "Obstrucción de vía aérea por alimento",
        description:
            "Hombre de 50 años estaba comiendo carne cuando repentinamente comenzó a toser y después se llevó las manos al cuello.",
        initialAssessment:
            "Paciente cianótico, sin poder hablar ni respirar, consciente. Maniobra universal de asfixia evidente.",
        vitalSigns: {
            FC: "sin datos (prioridad es liberar vía aérea)",
        },
        findings: [
            "Obstrucción completa de vía aérea",
            "Requiere maniobra de Heimlich inmediata",
            "Riesgo de paro respiratorio si no se resuelve rápidamente",
        ],
        questions: [
            { question: "¿Cómo diferencias una obstrucción parcial de una completa?" },
            { question: "¿Cuál es el procedimiento adecuado para pacientes conscientes con obstrucción completa?" },
            { question: "¿Qué hacer si el paciente pierde la conciencia?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de manejo de la vía aérea.",
        ],
    },
    {
        id: "herida-penetrante-abdomen-20",
        title: "Herida por arma blanca en abdomen",
        description:
            "Joven de 22 años fue agredido con un cuchillo. Tiene una herida abierta en abdomen inferior con evisceración visible.",
        initialAssessment:
            "Consciente, dolor intenso, intestino parcialmente exteriorizado, hemorragia moderada.",
        vitalSigns: {
            FC: "124 lpm",
            TA: "98/60 mmHg",
            SpO2: "94%",
        },
        findings: [
            "Trauma penetrante abdominal",
            "Evisceración requiere cobertura húmeda y no reintroducción",
            "Riesgo de shock hipovolémico",
        ],
        questions: [
            { question: "¿Qué tipo de apósito se usa para cubrir evisceraciones?" },
            { question: "¿Por qué no se deben reintroducir órganos eviscerados?" },
            { question: "¿Cuál es la prioridad en el manejo de esta herida?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma abdominal.",
        ],
    },
    {
        id: "convulsion-febril-nino-21",
        title: "Convulsión febril en niño pequeño",
        description:
            "Niña de 3 años presenta convulsión generalizada tónico-clónica de 2 minutos. Madre reporta fiebre durante el día.",
        initialAssessment:
            "Postictal, somnolienta, responde a estímulos. Piel caliente al tacto. No hay signos de trauma.",
        vitalSigns: {
            FC: "118 lpm",
            TA: "102/62 mmHg",
            SpO2: "96%",
            Temp: "39.1°C",
        },
        findings: [
            "Convulsión febril típica",
            "Evaluar si hay infección activa",
            "Monitorear respiración y nivel de conciencia",
        ],
        questions: [
            { question: "¿Qué características indican convulsión febril simple?" },
            { question: "¿Cuáles son las indicaciones para traslado urgente?" },
            { question: "¿Qué debe hacer el personal prehospitalario tras una convulsión resuelta?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias pediátricas y neurológicas.",
        ],
    },
    {
        id: "fractura-costilla-22",
        title: "Dolor torácico tras caída",
        description:
            "Paciente masculino de 47 años resbala en escalera y cae sobre su costado. Se queja de dolor al respirar profundo.",
        initialAssessment:
            "Consciente, dolor localizado en hemitórax derecho, sin disnea severa. No hay trauma craneal.",
        vitalSigns: {
            FC: "98 lpm",
            TA: "124/78 mmHg",
            SpO2: "97%",
        },
        findings: [
            "Posible fractura costal",
            "Evaluar riesgo de neumotórax oculto",
            "Tratamiento sintomático y monitorización",
        ],
        questions: [
            { question: "¿Qué signos pueden indicar complicaciones asociadas a fractura de costillas?" },
            { question: "¿Cómo diferencias un dolor musculoesquelético de un problema pulmonar?" },
            { question: "¿Qué intervenciones son apropiadas en campo?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma torácico.",
        ],
    },
    {
        id: "intoxicacion-alcohol-etilico-23",
        title: "Intoxicación por alcohol en adolescente",
        description:
            "Joven de 17 años fue encontrado en una fiesta, inconsciente y con olor etílico. Vomitó antes de que llegara el equipo de emergencias.",
        initialAssessment:
            "Inconsciente, vía aérea comprometida con restos de vómito. Respiración lenta. Piel caliente y enrojecida.",
        vitalSigns: {
            FC: "88 lpm",
            TA: "110/70 mmHg",
            SpO2: "90%",
        },
        findings: [
            "Depresión del SNC por etanol",
            "Riesgo de broncoaspiración",
            "Monitorear respiración y nivel de conciencia",
        ],
        questions: [
            { question: "¿Qué intervenciones debes realizar para proteger la vía aérea?" },
            { question: "¿Qué complicaciones puede presentar un paciente intoxicado por alcohol?" },
            { question: "¿Cómo se debe posicionar al paciente si no responde?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias tóxicas.",
        ],
    },
    {
        id: "desmayo-calentamiento-24",
        title: "Síncope por golpe de calor",
        description:
            "Mujer de 28 años colapsa durante una caminata en parque a 36°C. Piel caliente y seca. No responde brevemente, luego despierta desorientada.",
        initialAssessment:
            "Paciente consciente, confusa, piel seca y caliente, taquicardia, no refiere antecedentes médicos.",
        vitalSigns: {
            FC: "122 lpm",
            TA: "102/60 mmHg",
            SpO2: "95%",
            Temp: "40°C",
        },
        findings: [
            "Sospecha de golpe de calor (heatstroke)",
            "Urgencia médica: riesgo de fallo multiorgánico",
            "Requiere enfriamiento activo inmediato",
        ],
        questions: [
            { question: "¿Qué diferencia hay entre agotamiento por calor y golpe de calor?" },
            { question: "¿Cuál es el tratamiento prehospitalario inicial más efectivo?" },
            { question: "¿Qué signos indican deterioro neurológico por hipertermia?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias ambientales.",
        ],
    },
    {
        id: "trauma-columna-lumbar-25",
        title: "Caída de caballo con dolor lumbar",
        description:
            "Hombre de 40 años cayó de espaldas desde un caballo. Se queja de dolor lumbar severo pero puede mover extremidades.",
        initialAssessment:
            "Consciente, dolor en columna lumbar sin déficit motor. No refiere pérdida de conciencia.",
        vitalSigns: {
            FC: "90 lpm",
            TA: "130/80 mmHg",
            SpO2: "98%",
        },
        findings: [
            "Trauma de espalda con posible fractura vertebral",
            "Movilización cuidadosa y restricción espinal",
            "Evaluación neurológica periódica en traslado",
        ],
        questions: [
            { question: "¿Qué criterios indican necesidad de inmovilización espinal completa?" },
            { question: "¿Cómo se moviliza un paciente con dolor lumbar severo?" },
            { question: "¿Por qué se debe reevaluar función neurológica durante el traslado?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de trauma musculoesquelético e inmovilización.",
        ],
    },
    {
        id: "herida-escalpelo-26",
        title: "Herida profunda con hemorragia activa",
        description:
            "Trabajador de restaurante se corta el antebrazo con cuchillo industrial. Sangrado pulsátil visible.",
        initialAssessment:
            "Consciente, pálido, sangrado arterial activo, sin pérdida de conciencia.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "100/70 mmHg",
            SpO2: "98%",
        },
        findings: [
            "Hemorragia arterial activa",
            "Requiere control con presión directa y posible torniquete",
            "Riesgo de shock hipovolémico",
        ],
        questions: [
            { question: "¿Cuándo está indicado el uso de torniquete?" },
            { question: "¿Qué signos indican que el paciente está entrando en shock?" },
            { question: "¿Qué documentación debe realizarse si se aplica torniquete?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de hemorragias y control de sangrado.",
        ],
    },
    {
        id: "picadura-arana-27",
        title: "Reacción local severa por picadura de araña",
        description:
            "Niña de 10 años fue picada en la pierna por una araña negra. Presenta inflamación extensa, dolor local y fiebre leve.",
        initialAssessment:
            "Paciente consciente, dolor localizada, edema progresivo, sin dificultad respiratoria.",
        vitalSigns: {
            FC: "100 lpm",
            TA: "106/62 mmHg",
            SpO2: "99%",
            Temp: "37.8°C",
        },
        findings: [
            "Reacción local severa por veneno",
            "Requiere vigilancia por necrosis tisular o reacción sistémica",
            "Aplicar compresas frías y trasladar",
        ],
        questions: [
            { question: "¿Qué signos indican una progresión sistémica de la picadura?" },
            { question: "¿Qué medidas iniciales deben tomarse en campo?" },
            { question: "¿Cuándo se considera urgente el traslado hospitalario?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de emergencias ambientales y tóxicas.",
        ],
    },
    {
        id: "paro-cardiaco-ahogado-28",
        title: "Paro cardíaco tras ahogamiento",
        description:
            "Adolescente de 15 años fue rescatado de alberca tras inmersión prolongada. Está inconsciente y sin pulso.",
        initialAssessment:
            "Inconsciente, no respira, sin pulso carotídeo. Cianosis marcada en labios y uñas. Pupilas dilatadas.",
        vitalSigns: {
            FC: "0",
            TA: "0",
            SpO2: "0%",
        },
        findings: [
            "Paro cardíaco por hipoxia secundaria a ahogamiento",
            "Iniciar RCP inmediatamente con énfasis en ventilación",
            "Uso de DEA si disponible tras primeros ciclos",
        ],
        questions: [
            { question: "¿Qué modificaciones haces a la RCP en un ahogado?" },
            { question: "¿Cuál es la secuencia ideal de intervención en este caso?" },
            { question: "¿Qué hacer si el paciente presenta vómito durante la RCP?" },
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de paro cardíaco y emergencias respiratorias.",
        ],
    },
    {
        id: "hiperglucemia-29",
        title: "Paciente con hiperglucemia sintomática",
        description:
            "Hombre de 58 años con diabetes tipo 2 refiere visión borrosa, sed intensa y fatiga progresiva desde la mañana.",
        initialAssessment:
            "Consciente, pero letárgico. Aliento afrutado. Mucosas secas. Sin signos de trauma.",
        vitalSigns: {
            FC: "108 lpm",
            TA: "132/84 mmHg",
            SpO2: "97%",
            Glucosa: "396 mg/dL",
        },
        findings: [
            "Hiperglucemia no controlada",
            "Posible cetoacidosis diabética (CAD)",
            "Necesita hidratación y traslado inmediato",
        ],
        questions: [
            { question: "¿Qué síntomas clínicos ayudan a diferenciar hiperglucemia de hipoglucemia?" },
            { question: "¿Qué complicaciones puede generar una hiperglucemia mantenida?" },
            { question: "¿Cuál es tu prioridad en el tratamiento prehospitalario?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias endocrinas."],
    },
    {
        id: "aborto-incompleto-30",
        title: "Sangrado vaginal en primer trimestre",
        description:
            "Mujer de 27 años embarazada de 10 semanas presenta sangrado vaginal con cólico abdominal severo. Dice haber expulsado un tejido.",
        initialAssessment:
            "Consciente, pálida, refiere dolor en hipogastrio y sensación de mareo. Sangrado activo moderado.",
        vitalSigns: {
            FC: "112 lpm",
            TA: "100/64 mmHg",
            SpO2: "98%",
        },
        findings: [
            "Sospecha de aborto incompleto",
            "Riesgo de hemorragia e infección",
            "Requiere traslado inmediato a ginecología",
        ],
        questions: [
            { question: "¿Qué signos hacen sospechar un aborto incompleto?" },
            { question: "¿Qué cuidados emocionales debes ofrecer a esta paciente?" },
            { question: "¿Cómo se debe manejar el tejido expulsado?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias ginecológicas."],
    },
    {
        id: "herida-cuello-31",
        title: "Herida penetrante en el cuello",
        description:
            "Joven de 20 años fue agredido con una botella rota en el cuello. Presenta sangrado pulsátil y dificultad respiratoria.",
        initialAssessment:
            "Consciente, ansioso, sangrado activo en lateral izquierdo del cuello. Voz ronca, salivación abundante.",
        vitalSigns: {
            FC: "128 lpm",
            TA: "92/58 mmHg",
            SpO2: "89%",
        },
        findings: [
            "Sangrado arterial y riesgo de lesión de vía aérea",
            "Requiere control de hemorragia con presión directa",
            "Evitar ocluir ambos lados del cuello",
        ],
        questions: [
            { question: "¿Qué complicaciones pueden surgir al manipular heridas cervicales?" },
            { question: "¿Qué debe evitarse al aplicar presión en el cuello?" },
            { question: "¿Qué signos clínicos indican compromiso de vía aérea?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de trauma de cuello y vía aérea."],
    },
    {
        id: "ataque-panico-32",
        title: "Paciente con crisis de ansiedad severa",
        description:
            "Mujer de 25 años refiere opresión torácica, dificultad para respirar y sensación de muerte inminente. No tiene antecedentes cardíacos.",
        initialAssessment:
            "Consciente, hiperventilando, taquicárdica, sin cianosis. Refiere 'sentirse fuera de control'.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "126/78 mmHg",
            SpO2: "99%",
        },
        findings: [
            "Crisis de ansiedad aguda",
            "Importancia de tranquilizar, controlar la respiración",
            "Descartar causas orgánicas antes de concluir diagnóstico psicológico",
        ],
        questions: [
            { question: "¿Qué diferencia hay entre un ataque de pánico y un IAM?" },
            { question: "¿Qué estrategias puedes usar para tranquilizar a la paciente?" },
            { question: "¿Por qué es importante tomar signos vitales y glucosa aunque parezca 'solo ansiedad'?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias psiquiátricas."],
    },
    {
        id: "paro-cardiaco-pediatrico-33",
        title: "Paro cardíaco en lactante",
        description:
            "Bebé de 10 meses es encontrado sin respiración en su cuna por los padres. No responde a estímulos.",
        initialAssessment:
            "Inconsciente, sin pulso braquial ni movimientos respiratorios. Cianosis generalizada.",
        vitalSigns: {
            FC: "0",
            TA: "indetectable",
            SpO2: "0%",
        },
        findings: [
            "Paro respiratorio y cardíaco en pediátrico",
            "RCP pediátrica inmediata con enfoque en ventilación",
            "Uso de DEA pediátrico si disponible",
        ],
        questions: [
            { question: "¿Cuál es la relación compresiones:ventilaciones en RCP de lactantes con 2 rescatistas?" },
            { question: "¿Qué debes tener en cuenta al usar un DEA en pediátricos?" },
            { question: "¿Qué diferencia hay entre paro primario respiratorio y cardíaco en niños?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias pediátricas y RCP."],
    },
    {
        id: "hombro-luxado-34",
        title: "Luxación de hombro tras caída deportiva",
        description:
            "Varón de 30 años cae con el brazo extendido durante partido de fútbol. Refiere dolor intenso en hombro derecho y no puede mover el brazo.",
        initialAssessment:
            "Consciente, dolor intenso, deformidad visible en hombro, sin parestesias distales.",
        vitalSigns: {
            FC: "94 lpm",
            TA: "122/76 mmHg",
            SpO2: "99%",
        },
        findings: [
            "Luxación glenohumeral anterior",
            "Requiere inmovilización en posición de confort",
            "Evaluar pulso, sensibilidad y movimiento distal",
        ],
        questions: [
            { question: "¿Qué diferencias clínicas hay entre una luxación y una fractura?" },
            { question: "¿Por qué no se recomienda reducir la luxación en el campo?" },
            { question: "¿Qué técnicas de inmovilización son seguras para el hombro?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de trauma músculo-esquelético."],
    },
    {
        id: "epistaxis-masiva-35",
        title: "Hemorragia nasal incontrolable",
        description:
            "Paciente masculino de 68 años presenta sangrado nasal profuso que no cede con compresión. Toma anticoagulantes por fibrilación auricular.",
        initialAssessment:
            "Consciente, alerta, sangrado activo unilateral, refiere mareo y debilidad.",
        vitalSigns: {
            FC: "104 lpm",
            TA: "98/64 mmHg",
            SpO2: "96%",
        },
        findings: [
            "Epistaxis severa por medicación anticoagulante",
            "Compresión continua + posición sentada",
            "Posible necesidad de taponamiento posterior en hospital",
        ],
        questions: [
            { question: "¿Qué técnica es más efectiva para controlar epistaxis anterior?" },
            { question: "¿Qué factores aumentan el riesgo de hemorragia nasal severa?" },
            { question: "¿Por qué es peligrosa la epistaxis en pacientes anticoagulados?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de hemorragias y emergencias médicas."],
    },
    {
        id: "dificultad-respiratoria-rn-36",
        title: "Neonato con dificultad respiratoria postparto",
        description:
            "Recién nacido atendido en domicilio presenta aleteo nasal, quejido espiratorio y tiraje intercostal tras 2 minutos del parto.",
        initialAssessment:
            "Cianosis periférica, respiraciones rápidas e irregulares, respuesta débil al estímulo.",
        vitalSigns: {
            FC: "140 lpm",
            FR: "65 rpm",
            SpO2: "87%",
        },
        findings: [
            "Sospecha de taquipnea transitoria del recién nacido o SDR",
            "Necesita oxígeno con flujo libre y monitoreo",
            "Evaluar con APGAR y trasladar a centro con neonatal",
        ],
        questions: [
            { question: "¿Qué parámetros se evalúan en la escala de APGAR?" },
            { question: "¿Cuándo está indicada la ventilación con BVM en neonatos?" },
            { question: "¿Qué condiciones pueden causar dificultad respiratoria neonatal?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias obstétricas y neonatales."],
    },
    {
        id: "shock-neurogenico-37",
        title: "Sospecha de shock neurogénico tras accidente",
        description:
            "Motociclista de 35 años sufre accidente. Está consciente, con piel seca, caliente, bradicardia y presión baja. Tiene dolor en columna cervical.",
        initialAssessment:
            "Consciente, débil, piel rosada y seca. No puede mover las piernas. Dolor cervical.",
        vitalSigns: {
            FC: "54 lpm",
            TA: "88/50 mmHg",
            SpO2: "95%",
        },
        findings: [
            "Shock neurogénico por lesión medular",
            "No hay taquicardia compensatoria típica",
            "Inmovilización espinal + oxígeno + monitoreo estrecho",
        ],
        questions: [
            { question: "¿Qué diferencia al shock neurogénico de otros tipos de shock?" },
            { question: "¿Por qué puede haber piel caliente en estado de shock?" },
            { question: "¿Qué prioridad tiene el control de la vía aérea en lesiones medulares?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de shock y trauma de columna."],
    },
    {
        id: "hemorragia-rectal-38",
        title: "Sangrado rectal abundante en paciente anciano",
        description:
            "Hombre de 74 años refiere sangrado rectal abundante y mareo. Tiene historia de hemorroides y toma aspirina diaria.",
        initialAssessment:
            "Consciente, pálido, TA baja, sangrado activo por recto. Niega dolor abdominal.",
        vitalSigns: {
            FC: "118 lpm",
            TA: "90/54 mmHg",
            SpO2: "97%",
        },
        findings: [
            "Sangrado digestivo bajo con hipoperfusión",
            "Riesgo de choque hipovolémico",
            "Oxígeno, posición supina y traslado urgente",
        ],
        questions: [
            { question: "¿Cómo identificas la necesidad urgente de traslado en sangrado gastrointestinal?" },
            { question: "¿Qué medicamentos aumentan el riesgo de hemorragia digestiva?" },
            { question: "¿Qué signos clínicos orientan hacia shock hipovolémico en adultos mayores?" },
        ],
        references: ["AAOS 11ª Edición - Capítulo de emergencias gastrointestinales y geriátricas."],
    },
    {
        id: "traumatismo-craneoencefalico-15",
        title: "Caída de altura con lesión espinal",
        description:
            "Hombre de 30 años cae de una escalera de 4 metros. Reporta incapacidad para mover las piernas y sensación de hormigueo en los brazos. Se encuentra alerta pero ansioso.",
        initialAssessment:
            "Alerta y orientado, responde preguntas apropiadamente. Vía aérea permeable, respiración diafragmática. Piel por encima del nivel de la lesión pálida y sudorosa, pero por debajo se siente caliente y seca. Priapismo presente. Sin deformidades obvias aparte de posible lesión en columna cervical.",
        vitalSigns: {
            FC: "58 lpm",
            TA: "88/50 mmHg",
            FR: "20 rpm",
            SpO2: "99%",
        },
        findings: [
            "Shock neurogénico debido a probable lesión medular cervical.",
            "Pérdida de la función motora y sensorial por debajo de la lesión.",
            "Riesgo de hipotermia a pesar de la piel caliente.",
        ],
        questions: [
            { question: "¿Qué diferencia al shock neurogénico de otros tipos de shock en cuanto a los signos vitales?" },
            { question: "¿Por qué puede haber piel caliente y seca en un estado de shock distributivo como este?" },
            { question: "¿Qué prioridad tiene el control de la vía aérea y la ventilación en lesiones medulares altas?" },
        ],
        references: ["Capítulo 12 - Shock.pdf", "Capítulo 17 - Emergencias Neurologicas.pdf"],
    },
    {
        id: "hemorragia-rectal-38",
        title: "Sangrado rectal abundante en paciente anciano",
        description:
            "Hombre de 74 años llama a emergencias por presentar sangrado rectal rojo brillante y abundante, acompañado de mareo y debilidad. Tiene historial de hipertensión y fibrilación auricular, tomando aspirina y un anticoagulante diariamente.",
        initialAssessment:
            "Paciente consciente pero letárgico. Piel pálida, fría y diaforética. Se observa sangre roja brillante en la ropa interior y en el inodoro. Refiere no tener dolor abdominal, solo una sensación de 'presión'.",
        vitalSigns: {
            FC: "118 lpm",
            TA: "90/54 mmHg",
            FR: "22 rpm",
            SpO2: "97% con mascarilla no recirculante",
        },
        findings: [
            "Hemorragia digestiva baja activa con signos de hipoperfusión.",
            "Shock hipovolémico descompensado inminente.",
            "El uso de aspirina y anticoagulantes contribuye a la severidad del sangrado.",
        ],
        questions: [
            { question: "¿Qué signos y síntomas indican la necesidad de un traslado urgente en un sangrado gastrointestinal?" },
            { question: "¿Qué tipo de medicamentos aumentan significativamente el riesgo de hemorragia digestiva?" },
            { question: "¿Por qué los adultos mayores pueden descompensarse más rápido en un shock hipovolémico?" },
        ],
        references: ["Capítulo 12 - Shock.pdf", "Capítulo 18 - Emergencias gastrointestinales y urologicas.pdf"],
    },
    {
        id: "dolor-toracico-45",
        title: "Dolor torácico opresivo en adulto",
        description: "Hombre de 55 años con sobrepeso y fumador presenta dolor torácico súbito y opresivo desde hace 30 minutos. El dolor se irradia a su brazo izquierdo y mandíbula. Reporta náuseas y sudoración profusa.",
        initialAssessment: "Consciente, ansioso, pálido y diaforético. Se sujeta el pecho. Niega traumatismos. Piel fría al tacto. Pulsos radiales presentes, rítmicos y fuertes.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "150/90 mmHg",
            "FR": "24 rpm",
            "SpO2": "95% (aire ambiente)",
        },
        findings: [
            "Presentación clásica de Síndrome Coronario Agudo (SCA).",
            "Alto riesgo de infarto agudo de miocardio (IAM).",
            "Requiere monitorización cardíaca y manejo inmediato del dolor y la isquemia.",
        ],
        questions: [
            { question: "¿Cuáles son las acciones prioritarias de manejo para este paciente según los protocolos de SCA?" },
            { question: "¿Por qué es crucial administrar aspirina en este escenario y cuál es la dosis recomendada?" },
            { question: "¿Qué contraindicaciones se deben verificar antes de administrar nitroglicerina?" },
        ],
        references: ["Capítulo 16 - Emergencias cardiovasculares.pdf"],
    },
    {
        id: "crisis-asmatica-21",
        title: "Dificultad respiratoria severa en joven",
        description: "Joven de 18 años con antecedentes de asma es encontrado en su habitación con dificultad respiratoria severa. Su familia indica que ha usado su inhalador de rescate varias veces sin mejoría.",
        initialAssessment: "Sentado en posición de trípode, incapaz de hablar en frases completas. Se observa uso de músculos accesorios y tiraje intercostal. Piel pálida y cianosis peribucal. Sibilancias audibles a distancia.",
        vitalSigns: {
            "FC": "130 lpm",
            "TA": "140/80 mmHg",
            "FR": "32 rpm",
            "SpO2": "90% (aire ambiente)",
        },
        findings: [
            "Crisis asmática severa con insuficiencia respiratoria inminente.",
            "Fatiga muscular respiratoria.",
            "Hipoxia a pesar de la taquipnea.",
        ],
        questions: [
            { question: "¿Qué hallazgo auscultatorio podría indicar un empeoramiento crítico en este paciente (un 'tórax silencioso')?" },
            { question: "¿Cuál es el tratamiento farmacológico de primera línea en esta situación y cómo se administra?" },
            { question: "Si la SpO2 del paciente no mejora con oxígeno suplementario, ¿qué indica esto sobre la gravedad de la obstrucción?" },
        ],
        references: ["Capítulo 15 - Emergencias respiratorias.pdf"],
    },
    {
        id: "evc-isquemico-68",
        title: "Inicio súbito de debilidad facial y en brazo",
        description: "Mujer de 78 años presenta inicio súbito de dificultad para hablar y debilidad en el lado derecho de su cara y brazo mientras desayunaba hace 45 minutos, según reporta su esposo.",
        initialAssessment: "Alerta pero afásica (no puede formular palabras, parece entender). Se observa caída facial derecha y parálisis del brazo derecho (hemiparesia). Pupilas iguales y reactivas. La paciente parece frustrada.",
        vitalSigns: {
            "FC": "92 lpm (irregular)",
            "TA": "180/100 mmHg",
            "FR": "18 rpm",
            "SpO2": "98% (aire ambiente)",
            "Glucemia capilar": "110 mg/dL",
        },
        findings: [
            "Signos y síntomas consistentes con un Evento Vascular Cerebral (EVC) agudo.",
            "La hipertensión y el pulso irregular (posible fibrilación auricular) son factores de riesgo importantes.",
            "El tiempo de inicio ('última vez vista normal') es crucial para el tratamiento hospitalario (trombólisis).",
        ],
        questions: [
            { question: "¿Por qué es fundamental medir la glucemia capilar en todo paciente con sospecha de EVC?" },
            { question: "Utilizando la escala de Cincinnati (o FAST/BE-FAST), ¿qué componentes evalúa y cómo los aplicaría en esta paciente?" },
            { question: "¿Cuál es la prioridad absoluta en el manejo prehospitalario de un paciente en la ventana terapéutica para trombólisis?" },
        ],
        references: ["Capítulo 17 - Emergencias Neurologicas.pdf"],
    },
    {
        id: "hipoglucemia-severa-52",
        title: "Alteración del estado de conciencia en diabético",
        description: "Se recibe llamada por un hombre de 52 años encontrado inconsciente en su cama. Su esposa informa que es diabético tipo 1 y se administró su insulina esta mañana pero no ha comido.",
        initialAssessment: "No responde a estímulos verbales, solo se queja ante estímulos dolorosos (GCS 7). Piel marcadamente pálida, fría y muy diaforética. Respiración superficial y rápida. No hay olor a alcohol ni signos de trauma.",
        vitalSigns: {
            "FC": "115 lpm",
            "TA": "100/60 mmHg",
            "FR": "24 rpm",
            "SpO2": "96% (aire ambiente)",
            "Glucemia capilar": "35 mg/dL",
        },
        findings: [
            "Estado mental alterado secundario a hipoglucemia severa.",
            "Riesgo de daño cerebral permanente o convulsiones si no se trata.",
            "Vía aérea comprometida debido al bajo nivel de conciencia.",
        ],
        questions: [
            { question: "¿Cuál es la diferencia en la presentación clínica (piel, aliento, inicio) entre la hipoglucemia y la hiperglucemia (cetoacidosis diabética)?" },
            { question: "¿Cuál es el tratamiento indicado para un paciente hipoglucémico inconsciente y cómo se administra de forma segura?" },
            { question: "¿Qué harías si no tuvieras acceso IV inmediato en este paciente?" },
        ],
        references: ["Capítulo 19 - Emergencias endocrinas y hematologicas.pdf"],
    },
    {
        id: "shock-anafilactico-25",
        title: "Reacción alérgica severa por picadura de abeja",
        description: "Mujer de 25 años es picada por una abeja mientras estaba en un día de campo. A los pocos minutos, reporta dificultad para respirar y siente la garganta 'cerrada'. Es su primera reacción de este tipo.",
        initialAssessment: "Paciente ansiosa, con urticaria generalizada y angioedema visible en labios y párpados. Se escuchan sibilancias audibles y estridor inspiratorio. Habla con voz ronca y entrecortada. Piel enrojecida y caliente al tacto.",
        vitalSigns: {
            "FC": "128 lpm",
            "TA": "85/45 mmHg",
            "FR": "28 rpm",
            "SpO2": "89% (aire ambiente)",
        },
        findings: [
            "Shock anafiláctico con compromiso de la vía aérea y colapso cardiovascular.",
            "Obstrucción de la vía aérea superior (estridor) e inferior (sibilancias).",
            "Hipotensión severa secundaria a la vasodilatación masiva.",
        ],
        questions: [
            { question: "¿Cuál es el medicamento de primera línea para la anafilaxia y cuál es su mecanismo de acción principal?" },
            { question: "¿Por qué la hipotensión es un signo tan ominoso en la anafilaxia?" },
            { question: "Además de la epinefrina, ¿qué otras intervenciones son importantes en el manejo prehospitalario de este paciente?" },
        ],
        references: ["Capítulo 12 - Shock.pdf", "Capítulo 15 - Emergencias respiratorias.pdf"],
    },
    {
        id: "icc-descompensada-72",
        title: "Insuficiencia Cardíaca Congestiva con Edema Pulmonar",
        description: "Hombre de 72 años con antecedentes de infarto de miocardio e hipertensión llama porque 'se está ahogando'. Despertó súbitamente con falta de aire extrema y no puede acostarse.",
        initialAssessment: "Sentado en el borde de la cama, sudoroso, pálido y con cianosis en los labios. Usa músculos accesorios para respirar. Tose un esputo rosado y espumoso. Se auscultan estertores crepitantes en ambas bases pulmonares. Presenta edema en tobillos (fóvea ++).",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "190/110 mmHg",
            "FR": "34 rpm",
            "SpO2": "85% con mascarilla no recirculante",
        },
        findings: [
            "Edema agudo de pulmón de origen cardiogénico.",
            "Insuficiencia cardíaca congestiva (ICC) descompensada.",
            "Emergencia hipertensiva.",
            "El esputo rosado y espumoso es patognomónico de edema pulmonar.",
        ],
        questions: [
            { question: "¿Cuál es la fisiopatología del edema agudo de pulmón en un paciente con ICC?" },
            { question: "¿Qué beneficios puede aportar la ventilación con presión positiva (CPAP) en este escenario?" },
            { question: "¿Por qué el paciente no tolera estar acostado (ortopnea)?" },
        ],
        references: ["Capítulo 16 - Emergencias cardiovasculares.pdf", "Capítulo 15 - Emergencias respiratorias.pdf"],
    },
    {
        id: "convulsion-postictal-19",
        title: "Estado postictal tras convulsión",
        description: "Joven de 19 años sin antecedentes médicos conocidos sufre una convulsión tónico-clónica de aproximadamente 2 minutos, presenciada por su familia. A la llegada de la unidad, el paciente ya no está convulsionando.",
        initialAssessment: "Paciente en el suelo, con respiración ruidosa y profunda. No abre los ojos ni sigue órdenes, pero se retira al estímulo doloroso (GCS 9). Piel diaforética. Se observa una pequeña laceración en la lengua y ligera incontinencia urinaria.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "145/90 mmHg",
            "FR": "20 rpm",
            "SpO2": "96% (aire ambiente)",
            "Glucemia capilar": "90 mg/dL",
        },
        findings: [
            "Paciente en estado postictal.",
            "Se deben descartar causas reversibles de la convulsión (trauma, hipoxia, hipoglucemia).",
            "Vía aérea permeable, pero con riesgo de aspiración por el nivel de conciencia.",
        ],
        questions: [
            { question: "¿Cuáles son las prioridades de evaluación y manejo en un paciente en estado postictal?" },
            { question: "¿Qué hallazgos durante la evaluación podrían indicar una causa traumática de la convulsión?" },
            { question: "Si el paciente comenzara a convulsionar nuevamente antes de recuperar la conciencia, ¿cómo se llamaría esta condición y por qué es una emergencia crítica?" },
        ],
        references: ["Capítulo 17 - Emergencias Neurologicas.pdf"],
    },
    {
        id: "cetoacidosis-diabetica-16",
        title: "Cetoacidosis diabética en adolescente",
        description: "Adolescente de 16 años, diagnosticada con diabetes tipo 1, es traída por sus padres por alteración del estado mental, náuseas y vómitos desde hace 2 días. Reportan que ha estado orinando mucho y ha tenido mucha sed. Olvidó ponerse la insulina.",
        initialAssessment: "Paciente somnolienta, responde a la voz pero está desorientada en tiempo y lugar. Piel seca y mucosas orales secas. Se percibe un aliento con olor afrutado (acetona). La respiración es notablemente profunda y rápida.",
        vitalSigns: {
            "FC": "130 lpm",
            "TA": "92/50 mmHg",
            "FR": "28 rpm (patrón de Kussmaul)",
            "SpO2": "97% (aire ambiente)",
            "Glucemia capilar": "450 mg/dL",
        },
        findings: [
            "Estado hiperosmolar hiperglucémico, consistente con Cetoacidosis Diabética (CAD).",
            "Deshidratación severa y shock hipovolémico compensado.",
            "Las respiraciones de Kussmaul son un intento del cuerpo por compensar la acidosis metabólica.",
        ],
        questions: [
            { question: "¿Qué significan las '3 P' (polidipsia, polifagia, poliuria) en el contexto de la diabetes no controlada?" },
            { question: "¿Por qué un paciente con CAD presenta hipotensión y taquicardia?" },
            { question: "Explique el propósito fisiológico de las respiraciones de Kussmaul." },
        ],
        references: ["Capítulo 19 - Emergencias endocrinas y hematologicas.pdf"],
    },
    {
        id: "diseccion-aortica-65",
        title: "Dolor torácico desgarrante irradiado a la espalda",
        description: "Hombre de 65 años con historial de hipertensión mal controlada, experimenta un dolor torácico súbito, de máxima intensidad desde el inicio, que describe como 'desgarrante' y que se irradia hacia la espalda, entre los omóplatos.",
        initialAssessment: "Paciente pálido, ansioso y en evidente dolor. Se toca el pecho y la espalda. A la palpación de pulsos, el pulso radial derecho se siente significativamente más débil que el izquierdo.",
        vitalSigns: {
            "FC": "115 lpm",
            "TA Brazo Derecho": "120/70 mmHg",
            "TA Brazo Izquierdo": "180/100 mmHg",
            "FR": "24 rpm",
            "SpO2": "97% (aire ambiente)",
        },
        findings: [
            "Alta sospecha de Disección Aórtica Aguda.",
            "La descripción del dolor ('desgarrante') es clásica de esta patología.",
            "El déficit de pulso y la diferencia de presión arterial entre ambos brazos (pulso paradójico) son signos clave.",
        ],
        questions: [
            { question: "¿Por qué este cuadro clínico es una contraindicación para la administración de aspirina, a diferencia de un infarto?" },
            { question: "¿Cuál es la importancia de identificar una diferencia de presión arterial mayor a 20 mmHg entre las extremidades?" },
            { question: "En el manejo de una disección aórtica, ¿cuál es el objetivo principal con respecto a la presión arterial y la frecuencia cardíaca y por qué?" },
        ],
        references: ["Capítulo 16 - Emergencias cardiovasculares.pdf"],
    }

]