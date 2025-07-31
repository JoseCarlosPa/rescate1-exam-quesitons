export type CaseStudy = {
    id: string;
    title: string;
    description: string;
    initialAssessment: string;
    vitalSigns: Record<string, string>;
    findings: string[];
    questions: { question: string; answer?: string }[];
    references: string[];
    correctManage?: string;
    explanation?: string;
};


export const caseStudies: CaseStudy[] = [
    {
        id: "001",
        title: "Dolor torácico súbito en paciente masculino",
        description: "Paciente masculino de 58 años refiere dolor torácico opresivo que inició hace 20 minutos mientras caminaba.",
        initialAssessment: "Paciente alerta, diaforético, refiere dolor 7/10 en región retroesternal, sin irradiación. Antecedentes de hipertensión arterial.",
        vitalSigns: {
            FC: "98 lpm",
            PA: "138/88 mmHg",
            FR: "18 rpm",
            SpO2: "93%",
        },
        findings: [
            "Dolor torácico opresivo no irradiado",
            "Diaforesis",
            "Disminución de saturación de oxígeno",
        ],
        questions: [
            {
                question: "¿Cuál es la sospecha clínica principal?",
                answer: "Síndrome Coronario Agudo (SCA)",
            },
            {
                question: "¿Qué medicamentos deben administrarse si no hay contraindicaciones?",
            },
        ],
        references: [
            "https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000000911",
            "https://www.uptodate.com/contents/initial-evaluation-and-management-of-acute-coronary-syndrome-acs-in-the-emergency-department",
        ],
        correctManage: `- Administrar ASA 300 mg VO masticable si no hay alergias.
- Oxígeno si la SpO2 es < 94%.
- Monitoreo cardíaco continuo (ECG 12 derivaciones).
- Acceso IV periférico.
- Nitroglicerina sublingual si PA sistólica > 100 mmHg.
- Alertar al centro receptor para activación del código infarto.
- Preparar traslado rápido.`,
        explanation: `Este caso indica un probable infarto con elevación del ST (IAMCEST). El tratamiento prehospitalario busca reducir el daño miocárdico. La aspirina reduce la agregación plaquetaria y mejora la sobrevida. La oxigenoterapia debe usarse solo si hay hipoxia. La nitroglicerina puede aliviar el dolor y reducir la demanda de oxígeno. Es esencial un ECG de 12 derivaciones y preparar al paciente para intervención coronaria urgente si aplica.`,
    },
    {
        id: "002",
        title: "Paciente inconsciente en la vía pública",
        description: "Hombre de 35 años encontrado inconsciente en la calle, sin testigos. No responde a estímulos verbales ni dolorosos.",
        initialAssessment: "Paciente inconsciente, con respiración lenta e irregular. Pulso carotídeo presente. Pupilas mióticas.",
        vitalSigns: {
            FC: "54 lpm",
            PA: "90/60 mmHg",
            FR: "8 rpm",
            SpO2: "85%",
        },
        findings: [
            "Disminución del nivel de conciencia (GCS 3-4)",
            "Bradipnea con hipoxia",
            "Pupilas puntiformes (posible sobredosis opioide)",
        ],
        questions: [
            {
                question: "¿Cuál debe ser la prioridad en el manejo inicial?",
                answer: "Asegurar vía aérea y ventilación asistida",
            },
            {
                question: "¿Qué dispositivos puedes considerar para el manejo de la vía aérea?",
            },
        ],
        references: [
            "https://emergency.cdc.gov/han/han00384.asp",
            "https://www.naemsp.org/Pages/Position-Statements.aspx",
        ],
        correctManage: `- Apertura de vía aérea con maniobra frente-mentón o tracción mandibular.
- Insertar cánula orofaríngea si no hay reflejo nauseoso.
- Ventilar con BVM a 10-12 rpm con oxígeno al 100%.
- Administrar naloxona intranasal (2 mg) o IV si se sospecha sobredosis opioide.
- Monitorizar signos vitales y nivel de conciencia.
- Preparar traslado urgente.`,
        explanation: `Un paciente inconsciente con respiración lenta y pupilas mióticas sugiere una posible intoxicación por opioides. La ventilación adecuada es prioritaria antes de la administración de naloxona. La hipoxia debe corregirse rápidamente. El uso de un BVM con O2 suplementario es crítico. Naloxona puede revertir la depresión respiratoria en casos de sobredosis. Siempre se debe considerar otras causas y transportar a un centro que pueda continuar el tratamiento.`,
    },
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
            {question: "¿Qué hallazgo clínico es el más indicativo de un neumotórax a tensión en este paciente?"},
            {question: "¿Por qué mejoran la presión arterial y la frecuencia cardíaca después de la descompresión torácica?"},
            {question: "¿Cuál es el manejo inicial prioritario para la fractura expuesta?"},
        ],
        references: [
            "Capítulo 12 - Shock.pdf",
            "https://www.naemt.org/education/phtls",
            "https://emcrit.org/emcrit/tension-pneumothorax-needle/",
        ],
        correctManage: `- Evaluación rápida y control de la vía aérea (considerar intubación si deteriora).
- Ventilación asistida con BVM y oxígeno al 100%.
- Descompresión torácica inmediata con aguja en 2º espacio intercostal línea medio clavicular o 5º espacio línea axilar anterior.
- Control de hemorragia externa en fractura expuesta (presión directa, apósitos estériles).
- Inmovilización de extremidad con férula adecuada.
- Acceso IV y reposición con líquidos si está indicado.
- Evaluación continua del estado neurológico y signos de perfusión.
- Traslado inmediato a centro de trauma con alerta previa.`,
        explanation: `El paciente presenta un neumotórax a tensión, una emergencia que compromete la ventilación y circulación. La desviación traqueal, la distensión yugular y la ausencia de ruidos respiratorios lo confirman. La descompresión con aguja es la intervención que salva la vida. La fractura de fémur puede causar hemorragia significativa, por lo que debe controlarse e inmovilizarse. El manejo debe priorizar la vía aérea, ventilación efectiva y tratamiento del shock obstructivo. La pronta identificación de estos hallazgos y la intervención rápida son fundamentales para la supervivencia.`,
    },
    {
        id: "paciente-inconsciente-03",
        title: "Paciente inconsciente en domicilio",
        description:
            "Se encuentra a un hombre de 25 años inconsciente en su departamento. No hay signos evidentes de trauma. El paciente presenta bradicardia, hipotensión y no responde. Finalmente se diagnostica sobredosis.",
        initialAssessment:
            "Sin lesiones visibles, nivel de glucosa normal, ventilación inicial pobre pero mejora con oxígeno, bradicardia persistente e hipotensión, sin respuesta al estímulo.",
        vitalSigns: {
            Glucosa: "108 mg/dL",
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
            {question: "¿Cuáles son los componentes de la evaluación del paciente?"},
            {question: "¿Cómo varía la evaluación si el paciente está enfermo o lesionado?"},
            {question: "¿Está indicada la inmovilización de columna? ¿Por qué?"},
            {question: "¿Cuál hallazgo requiere atención inmediata?"},
            {question: "¿Requiere tratamiento adicional en la escena? ¿Cuál?"},
            {question: "¿Debe esperar otra unidad o trasladar de inmediato? ¿Por qué?"},
            {question: "¿Cambió la condición del paciente durante la atención? ¿Cómo responder a ello?"},
            {question: "¿Qué elementos de la historia SAMPLE pueden obtenerse sin que el paciente responda?"},
            {question: "¿Por qué es importante reevaluar constantemente?"},
        ],
        references: [
            "AAOS Atención Prehospitalaria Básica, 11ª Edición - Capítulos de evaluación primaria, evaluación médica y emergencias por sobredosis.",
            "https://www.samhsa.gov/medications-substance-use-disorders/medications-counseling-related-conditions/naloxone",
        ],
        correctManage: `- Evaluación rápida del ABCDE.
- Asegurar vía aérea y ventilar con BVM si FR < 10 o hay hipoxia.
- Administrar oxígeno suplementario a alto flujo.
- Administrar naloxona intranasal (2-4 mg) o IV si se sospecha opioides.
- Colocar en posición lateral de seguridad si no hay indicación de intubación.
- Monitorizar signos vitales y nivel de conciencia.
- No retrasar el traslado si el paciente no responde o recae tras la naloxona.`,
        explanation: `La presentación clínica es compatible con una intoxicación por opioides (bradicardia, hipoventilación, inconsciencia). Aunque la glucosa es normal y no hay trauma, el paciente requiere soporte ventilatorio inmediato y naloxona como antídoto. El monitoreo continuo es clave, ya que puede requerir dosis adicionales. La reevaluación constante permite detectar recaídas. No es necesaria la inmovilización espinal si no hay mecanismo traumático. La prioridad es ventilar, revertir el efecto opioide y trasladar sin demoras.`,
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
            "https://www.uptodate.com/contents/treatment-of-hypoglycemia-in-adults",
        ],
        correctManage: `- Confirmar hipoglucemia con glucometría (menor a 60 mg/dL).
- Administrar dextrosa IV (D10 o D50) en bolo si hay acceso.
- Si no hay vía IV, administrar glucagón IM (1 mg).
- Monitorear signos vitales, nivel de conciencia y glucosa post-intervención.
- Reevaluar cada 5-10 minutos y preparar traslado.
- Obtener información adicional vía SAMPLE si es posible.`,
        explanation: `La hipoglucemia severa puede causar deterioro neurológico agudo y pérdida de conciencia. La prioridad es restaurar rápidamente la glucosa sérica para prevenir daño cerebral. Dextrosa IV es el tratamiento de elección si hay acceso vascular; si no, se administra glucagón IM. La piel pálida, diaforesis y taquicardia son signos clásicos de hipoglucemia. Una vez consciente, se deben buscar causas y asegurar un seguimiento adecuado.`,
    },
    {
        id: "asma-descompensada-05",
        title: "Crisis asmática severa",
        description:
            "Mujer de 29 años con antecedentes de asma, encontrada en posición de trípode, jadeando por aire, con sibilancias audibles. No responde bien al inhalador.",
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
            "https://www.ginasthma.org/",
        ],
        correctManage: `- Administrar oxígeno de alto flujo (NRM o BVM con O₂).
- Nebulización con salbutamol (albuterol) 2.5 mg + ipratropio 0.5 mg si disponible.
- Repetir nebulizaciones cada 10-20 minutos si es necesario.
- Evaluar signos de fatiga (bradipnea, disminución del esfuerzo).
- Preparar para asistencia ventilatoria si hay deterioro.
- Monitorear frecuencia respiratoria, SpO₂ y nivel de conciencia.
- Traslado urgente a centro de atención avanzada.`,
        explanation: `Una crisis asmática severa se identifica por dificultad para hablar, uso de músculos accesorios y saturación baja. El broncoespasmo debe tratarse con broncodilatadores de acción corta. El uso de salbutamol e ipratropio nebulizado mejora rápidamente la mecánica ventilatoria. La fatiga puede llevar al fallo respiratorio, por lo que es esencial vigilar signos de agotamiento como bradipnea, somnolencia o caída de la SpO₂. La ventilación asistida debe iniciarse si la condición empeora.`,
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
            "https://www.naemt.org/education/phtls",
        ],
        correctManage: `- Control manual inmediato de la columna cervical.
- Evaluar función motora y sensitiva en extremidades.
- Aplicar collar cervical rígido y tablero largo o dispositivo de inmovilización espinal.
- Monitorear nivel de conciencia y signos neurológicos.
- Evitar movimientos innecesarios durante el traslado.
- Traslado urgente a hospital con capacidad para neuroimagen y trauma.`,
        explanation: `Una caída desde más de 1.5 m se considera mecanismo de trauma significativo. La presencia de parestesias y déficit motor es indicativa de posible lesión medular. Es fundamental restringir completamente el movimiento de la columna desde la primera evaluación. La inmovilización adecuada previene un posible daño secundario irreversible. La evaluación neurológica en campo permite monitorear cambios durante el traslado.`,
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
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000911",
        ],
        correctManage: `- Monitoreo ECG si está disponible.
- Administrar ASA 300 mg VO (si no hay alergia o contraindicación).
- Nitroglicerina sublingual si PA sistólica > 100 mmHg y no hay uso reciente de inhibidores PDE-5.
- Oxígeno si SpO₂ < 94%.
- Establecer vía IV y preparar para traslado inmediato con activación del código infarto.`,
        explanation: `El paciente presenta signos clásicos de un infarto agudo al miocardio. El manejo incluye oxigenación (si hipoxia), antiagregantes plaquetarios (aspirina), vasodilatadores (nitroglicerina) y ECG para detección de IAM con o sin elevación del ST. El traslado rápido a un centro con capacidad de reperfusión es fundamental para el pronóstico.`,
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
        correctManage: `- Preparar equipo limpio y guantes estériles.
- Asistir el parto controlando el descenso cefálico con presión suave.
- Limpiar vía aérea del neonato si es necesario (sin aspiración rutinaria).
- Estimular al neonato y evaluar APGAR al minuto y a los 5 minutos.
- Pinzar y cortar el cordón tras 1-3 minutos si no hay complicaciones.
- Vigilar sangrado postparto y masajear fondo uterino si hay hemorragia.
- Traslado de madre y neonato para evaluación hospitalaria.`,
        explanation: `El parto inminente en campo debe abordarse con calma y técnica. Lo prioritario es la seguridad del neonato: despejar vía aérea, estimular, mantener temperatura y evaluar con APGAR. El manejo del alumbramiento y prevención de hemorragia postparto mediante masaje uterino también es crucial. Se debe cortar el cordón de manera segura y asegurar el bienestar de ambos pacientes.`,
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
            "https://www.ncbi.nlm.nih.gov/books/NBK448117/",
        ],
        correctManage: `- Asegurar escena segura antes del contacto.
- Evaluar y mantener la vía aérea y respiración.
- Administrar oxígeno suplementario si hay hipoxia.
- Colocar en monitor cardíaco si disponible; observar arritmias.
- Control de quemaduras con apósitos secos estériles.
- Vigilar signos de lesión interna (palidez, confusión, arritmias).
- Acceso IV y traslado urgente a centro con capacidad para trauma eléctrico.`,
        explanation: `Las quemaduras eléctricas pueden causar daño extenso en tejidos profundos, aun cuando las lesiones externas sean mínimas. El paso de corriente puede afectar el corazón, generando arritmias potencialmente letales. El monitoreo cardíaco es esencial, y debe mantenerse durante al menos 24 horas si hay sospecha de corriente de alto voltaje. El manejo incluye soporte vital, control de quemaduras y monitoreo continuo.`,
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
            "https://www.cdc.gov/drowning/index.html",
        ],
        correctManage: `- Evaluar vía aérea, respiración y pulso.
- Iniciar ventilación asistida con BVM a 15 L/min O₂.
- Si no respira y no hay pulso, iniciar RCP pediátrico inmediatamente.
- Monitorizar signos vitales y SpO₂.
- Mantener al niño abrigado para prevenir hipotermia.
- Trasladar urgentemente, aunque mejore, por riesgo de complicaciones tardías (edema pulmonar, aspiración secundaria).`,
        explanation: `Los niños pueden presentar hipoxia severa tras inmersión aunque estén conscientes brevemente. La ventilación asistida es crucial. Aun si el niño mejora, siempre debe ser evaluado en hospital por riesgo de edema pulmonar retardado. La prioridad en el prehospital es ventilación eficaz, prevención de hipotermia y transporte inmediato.`,
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
            {question: "¿Qué señales deben hacerte sospechar de abuso en adultos mayores?"},
            {question: "¿Cómo debes documentar este tipo de incidentes?"},
            {question: "¿Cuál es tu obligación legal como proveedor prehospitalario?"},
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
            {question: "¿Qué peligros tiene una fractura de fémur si no se trata a tiempo?"},
            {question: "¿Cómo se evalúa la circulación distal en una extremidad lesionada?"},
            {question: "¿Cuándo está indicada la férula de tracción?"},
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
            {question: "¿Cuáles son los signos clave de una anafilaxia?"},
            {question: "¿Qué dosis y vía se recomienda para la adrenalina en adulto?"},
            {question: "¿Qué hacer si no hay mejoría tras la primera dosis?"},
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
            {question: "¿Por qué el oxímetro puede dar falsos positivos en estas situaciones?"},
            {question: "¿Qué gas impide la correcta oxigenación en sangre en este caso?"},
            {question: "¿Cuál es el tratamiento inicial en el entorno prehospitalario?"},
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
            {question: "¿Qué precauciones debes tener al movilizar a un paciente con hipotermia?"},
            {question: "¿Cómo clasificas la severidad de la hipotermia según la temperatura?"},
            {question: "¿Qué diferencia hay entre recalentamiento pasivo y activo?"},
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
            {question: "¿Qué hallazgos sugieren una hemorragia interna en una paciente en edad fértil?"},
            {question: "¿Por qué es crítica la evaluación obstétrica incluso si no hay sangrado vaginal?"},
            {question: "¿Cuál es el tratamiento inicial prehospitalario ante sospecha de embarazo ectópico?"},
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
            {question: "¿Cómo diferencias una obstrucción parcial de una completa?"},
            {question: "¿Cuál es el procedimiento adecuado para pacientes conscientes con obstrucción completa?"},
            {question: "¿Qué hacer si el paciente pierde la conciencia?"},
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
            {question: "¿Qué tipo de apósito se usa para cubrir evisceraciones?"},
            {question: "¿Por qué no se deben reintroducir órganos eviscerados?"},
            {question: "¿Cuál es la prioridad en el manejo de esta herida?"},
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
            {question: "¿Qué características indican convulsión febril simple?"},
            {question: "¿Cuáles son las indicaciones para traslado urgente?"},
            {question: "¿Qué debe hacer el personal prehospitalario tras una convulsión resuelta?"},
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
            {question: "¿Qué signos pueden indicar complicaciones asociadas a fractura de costillas?"},
            {question: "¿Cómo diferencias un dolor musculoesquelético de un problema pulmonar?"},
            {question: "¿Qué intervenciones son apropiadas en campo?"},
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
            {question: "¿Qué intervenciones debes realizar para proteger la vía aérea?"},
            {question: "¿Qué complicaciones puede presentar un paciente intoxicado por alcohol?"},
            {question: "¿Cómo se debe posicionar al paciente si no responde?"},
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
            {question: "¿Qué diferencia hay entre agotamiento por calor y golpe de calor?"},
            {question: "¿Cuál es el tratamiento prehospitalario inicial más efectivo?"},
            {question: "¿Qué signos indican deterioro neurológico por hipertermia?"},
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
            {question: "¿Qué criterios indican necesidad de inmovilización espinal completa?"},
            {question: "¿Cómo se moviliza un paciente con dolor lumbar severo?"},
            {question: "¿Por qué se debe reevaluar función neurológica durante el traslado?"},
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
            {question: "¿Cuándo está indicado el uso de torniquete?"},
            {question: "¿Qué signos indican que el paciente está entrando en shock?"},
            {question: "¿Qué documentación debe realizarse si se aplica torniquete?"},
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
            {question: "¿Qué signos indican una progresión sistémica de la picadura?"},
            {question: "¿Qué medidas iniciales deben tomarse en campo?"},
            {question: "¿Cuándo se considera urgente el traslado hospitalario?"},
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
            {question: "¿Qué modificaciones haces a la RCP en un ahogado?"},
            {question: "¿Cuál es la secuencia ideal de intervención en este caso?"},
            {question: "¿Qué hacer si el paciente presenta vómito durante la RCP?"},
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
            {question: "¿Qué síntomas clínicos ayudan a diferenciar hiperglucemia de hipoglucemia?"},
            {question: "¿Qué complicaciones puede generar una hiperglucemia mantenida?"},
            {question: "¿Cuál es tu prioridad en el tratamiento prehospitalario?"},
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
            {question: "¿Qué signos hacen sospechar un aborto incompleto?"},
            {question: "¿Qué cuidados emocionales debes ofrecer a esta paciente?"},
            {question: "¿Cómo se debe manejar el tejido expulsado?"},
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
            {question: "¿Qué complicaciones pueden surgir al manipular heridas cervicales?"},
            {question: "¿Qué debe evitarse al aplicar presión en el cuello?"},
            {question: "¿Qué signos clínicos indican compromiso de vía aérea?"},
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
            {question: "¿Qué diferencia hay entre un ataque de pánico y un IAM?"},
            {question: "¿Qué estrategias puedes usar para tranquilizar a la paciente?"},
            {question: "¿Por qué es importante tomar signos vitales y glucosa aunque parezca 'solo ansiedad'?"},
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
            {question: "¿Cuál es la relación compresiones:ventilaciones en RCP de lactantes con 2 rescatistas?"},
            {question: "¿Qué debes tener en cuenta al usar un DEA en pediátricos?"},
            {question: "¿Qué diferencia hay entre paro primario respiratorio y cardíaco en niños?"},
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
            {question: "¿Qué diferencias clínicas hay entre una luxación y una fractura?"},
            {question: "¿Por qué no se recomienda reducir la luxación en el campo?"},
            {question: "¿Qué técnicas de inmovilización son seguras para el hombro?"},
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
            {question: "¿Qué técnica es más efectiva para controlar epistaxis anterior?"},
            {question: "¿Qué factores aumentan el riesgo de hemorragia nasal severa?"},
            {question: "¿Por qué es peligrosa la epistaxis en pacientes anticoagulados?"},
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
            {question: "¿Qué parámetros se evalúan en la escala de APGAR?"},
            {question: "¿Cuándo está indicada la ventilación con BVM en neonatos?"},
            {question: "¿Qué condiciones pueden causar dificultad respiratoria neonatal?"},
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
            {question: "¿Qué diferencia al shock neurogénico de otros tipos de shock?"},
            {question: "¿Por qué puede haber piel caliente en estado de shock?"},
            {question: "¿Qué prioridad tiene el control de la vía aérea en lesiones medulares?"},
        ],
        references: ["AAOS 11ª Edición - Capítulo de shock y trauma de columna."],
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
            {question: "¿Qué diferencia al shock neurogénico de otros tipos de shock en cuanto a los signos vitales?"},
            {question: "¿Por qué puede haber piel caliente y seca en un estado de shock distributivo como este?"},
            {question: "¿Qué prioridad tiene el control de la vía aérea y la ventilación en lesiones medulares altas?"},
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
            {question: "¿Qué signos y síntomas indican la necesidad de un traslado urgente en un sangrado gastrointestinal?"},
            {question: "¿Qué tipo de medicamentos aumentan significativamente el riesgo de hemorragia digestiva?"},
            {question: "¿Por qué los adultos mayores pueden descompensarse más rápido en un shock hipovolémico?"},
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
            {question: "¿Cuáles son las acciones prioritarias de manejo para este paciente según los protocolos de SCA?"},
            {question: "¿Por qué es crucial administrar aspirina en este escenario y cuál es la dosis recomendada?"},
            {question: "¿Qué contraindicaciones se deben verificar antes de administrar nitroglicerina?"},
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
            {question: "¿Qué hallazgo auscultatorio podría indicar un empeoramiento crítico en este paciente (un 'tórax silencioso')?"},
            {question: "¿Cuál es el tratamiento farmacológico de primera línea en esta situación y cómo se administra?"},
            {question: "Si la SpO2 del paciente no mejora con oxígeno suplementario, ¿qué indica esto sobre la gravedad de la obstrucción?"},
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
            {question: "¿Por qué es fundamental medir la glucemia capilar en todo paciente con sospecha de EVC?"},
            {question: "Utilizando la escala de Cincinnati (o FAST/BE-FAST), ¿qué componentes evalúa y cómo los aplicaría en esta paciente?"},
            {question: "¿Cuál es la prioridad absoluta en el manejo prehospitalario de un paciente en la ventana terapéutica para trombólisis?"},
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
            {question: "¿Cuál es la diferencia en la presentación clínica (piel, aliento, inicio) entre la hipoglucemia y la hiperglucemia (cetoacidosis diabética)?"},
            {question: "¿Cuál es el tratamiento indicado para un paciente hipoglucémico inconsciente y cómo se administra de forma segura?"},
            {question: "¿Qué harías si no tuvieras acceso IV inmediato en este paciente?"},
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
            {question: "¿Cuál es el medicamento de primera línea para la anafilaxia y cuál es su mecanismo de acción principal?"},
            {question: "¿Por qué la hipotensión es un signo tan ominoso en la anafilaxia?"},
            {question: "Además de la epinefrina, ¿qué otras intervenciones son importantes en el manejo prehospitalario de este paciente?"},
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
            {question: "¿Cuál es la fisiopatología del edema agudo de pulmón en un paciente con ICC?"},
            {question: "¿Qué beneficios puede aportar la ventilación con presión positiva (CPAP) en este escenario?"},
            {question: "¿Por qué el paciente no tolera estar acostado (ortopnea)?"},
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
            {question: "¿Cuáles son las prioridades de evaluación y manejo en un paciente en estado postictal?"},
            {question: "¿Qué hallazgos durante la evaluación podrían indicar una causa traumática de la convulsión?"},
            {question: "Si el paciente comenzara a convulsionar nuevamente antes de recuperar la conciencia, ¿cómo se llamaría esta condición y por qué es una emergencia crítica?"},
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
            {question: "¿Qué significan las '3 P' (polidipsia, polifagia, poliuria) en el contexto de la diabetes no controlada?"},
            {question: "¿Por qué un paciente con CAD presenta hipotensión y taquicardia?"},
            {question: "Explique el propósito fisiológico de las respiraciones de Kussmaul."},
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
            {question: "¿Por qué este cuadro clínico es una contraindicación para la administración de aspirina, a diferencia de un infarto?"},
            {question: "¿Cuál es la importancia de identificar una diferencia de presión arterial mayor a 20 mmHg entre las extremidades?"},
            {question: "En el manejo de una disección aórtica, ¿cuál es el objetivo principal con respecto a la presión arterial y la frecuencia cardíaca y por qué?"},
        ],
        references: ["Capítulo 16 - Emergencias cardiovasculares.pdf"],
    },
    {
        "id": "iamcest-01",
        "title": "Dolor torácico opresivo en adulto mayor",
        "description": "Masculino de 65 años, diabético e hipertenso, presenta dolor torácico opresivo de inicio súbito desde hace 1 hora, que irradia a brazo izquierdo y mandíbula. Refiere náuseas y sudoración profusa.",
        "initialAssessment": "Paciente consciente, orientado, con evidente facies de dolor. Piel pálida y fría. Se observa diaforesis marcada. Refiere no tener alergias conocidas.",
        "vitalSigns": {
            "FC": "105 lpm (pulso irregular)",
            "TA": "150/90 mmHg",
            "FR": "22 rpm",
            "SpO2": "92% (aire ambiente)"
        },
        "findings": [
            "Síndrome Coronario Agudo, probable Infarto Agudo de Miocardio con elevación del ST (IAMCEST).",
            "Dolor torácico de origen cardiogénico.",
            "Necesidad de monitorización cardíaca continua y traslado prioritario a un centro con capacidad de intervención coronaria percutánea (ICP)."
        ],
        "questions": [
            {"question": "¿Cuáles son los componentes clave del tratamiento prehospitalario para un paciente con sospecha de IAMCEST?"},
            {"question": "¿Por qué es crucial realizar un electrocardiograma (ECG) de 12 derivaciones de manera temprana en este paciente?"},
            {"question": "¿Qué precauciones se deben tomar al administrar nitroglicerina a un paciente con dolor torácico?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares."
        ]
    },
    {
        "id": "asma-severa-02",
        "title": "Dificultad respiratoria aguda en paciente pediátrico",
        "description": "Niña de 8 años con antecedentes de asma, presenta dificultad respiratoria severa que no mejora con su inhalador de rescate. Los padres refieren que ha estado con tos durante dos días. Presenta sibilancias audibles a distancia.",
        "initialAssessment": "Paciente pediátrica sentada en posición de trípode, ansiosa. Uso visible de músculos accesorios para respirar. Aleteo nasal y retracción intercostal. Incapaz de hablar en oraciones completas.",
        "vitalSigns": {
            "FC": "130 lpm",
            "TA": "100/65 mmHg",
            "FR": "35 rpm",
            "SpO2": "89% (aire ambiente)"
        },
        "findings": [
            "Crisis asmática severa / Estatus asmático.",
            "Insuficiencia respiratoria inminente.",
            "Hipoxia moderada."
        ],
        "questions": [
            {"question": "¿Qué hallazgos clínicos indican una crisis asmática que pone en peligro la vida?"},
            {"question": "¿Cuál es el tratamiento farmacológico de primera línea en el manejo prehospitalario del asma severa?"},
            {"question": "Explique la importancia de la administración de oxígeno y cómo se debe titular en este caso."}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Respiratorias."
        ]
    },
    {
        "id": "evc-isquemico-03",
        "title": "Inicio súbito de debilidad facial y dificultad para hablar",
        "description": "Mujer de 72 años encontrada por su familia con debilidad súbita en el lado derecho de la cara y el brazo. Presenta dificultad para articular palabras (disartria) y parece confundida. Los síntomas iniciaron hace aproximadamente 45 minutos.",
        "initialAssessment": "Paciente consciente, pero desorientada en tiempo y lugar. Se observa asimetría facial con caída de la comisura labial derecha. Incapacidad para levantar el brazo derecho (hemiparesia). Pupilas isocóricas y reactivas.",
        "vitalSigns": {
            "FC": "90 lpm (rítmico)",
            "TA": "180/100 mmHg",
            "FR": "18 rpm",
            "SpO2": "97% (aire ambiente)"
        },
        "findings": [
            "Sospecha de Evento Vascular Cerebral (EVC) agudo.",
            "Déficit neurológico focal (hemiparesia derecha, disartria).",
            "Paciente dentro de la ventana de tiempo para terapia trombolítica."
        ],
        "questions": [
            {"question": "¿Qué herramientas de evaluación prehospitalaria (escalas) se utilizan para identificar un posible EVC?"},
            {"question": "¿Por qué es fundamental determinar la hora de inicio de los síntomas en un paciente con sospecha de EVC?"},
            {"question": "¿Cuál es el manejo prioritario y el destino de traslado para este tipo de paciente?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Neurológicas."
        ]
    },
    {
        "id": "anafilaxia-04",
        "title": "Reacción alérgica severa tras picadura de abeja",
        "description": "Hombre de 40 años sufre picadura de abeja en el cuello mientras trabajaba en su jardín. A los pocos minutos, desarrolla urticaria generalizada, hinchazón de labios y lengua, y siente que se le cierra la garganta.",
        "initialAssessment": "Paciente ansioso, con voz ronca y estridor inspiratorio audible. Presenta edema facial y urticaria en tronco y extremidades. Dificultad para respirar evidente.",
        "vitalSigns": {
            "FC": "125 lpm",
            "TA": "88/50 mmHg",
            "FR": "28 rpm",
            "SpO2": "91% (aire ambiente)"
        },
        "findings": [
            "Anafilaxia con compromiso de la vía aérea y cardiovascular.",
            "Choque anafiláctico.",
            "Necesidad inmediata de administración de epinefrina."
        ],
        "questions": [
            {"question": "¿Cuáles son los criterios para diagnosticar anafilaxia en el entorno prehospitalario?"},
            {"question": "Describa la dosis, vía de administración y mecanismo de acción de la epinefrina en la anafilaxia."},
            {"question": "¿Qué otros tratamientos, además de la epinefrina, son importantes en el manejo de la anafilaxia severa?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Reacciones Alérgicas y Anafilaxia."
        ]
    },
    {
        "id": "hipoglucemia-05",
        "title": "Alteración del estado mental en paciente diabético",
        "description": "Se solicita una ambulancia para un hombre de 55 años, conocido por ser diabético tipo 1, encontrado por su esposa inconsciente en la cama. Refiere que se administró su insulina pero no ha comido.",
        "initialAssessment": "Paciente masculino inconsciente, no responde a estímulos verbales ni dolorosos. Piel pálida, fría y diaforética. Respiración superficial y rápida. No hay evidencia de trauma.",
        "vitalSigns": {
            "FC": "110 lpm",
            "TA": "105/60 mmHg",
            "FR": "24 rpm",
            "SpO2": "98% (aire ambiente)",
            "Glucemia Capilar": "35 mg/dL"
        },
        "findings": [
            "Hipoglucemia severa.",
            "Alteración del estado de conciencia secundario a neuroglucopenia.",
            "Riesgo de daño cerebral si no se revierte rápidamente."
        ],
        "questions": [
            {"question": "¿Por qué un paciente con hipoglucemia severa puede presentar signos neurológicos focales o convulsiones?"},
            {"question": "¿Cuál es el tratamiento de elección para un paciente inconsciente con hipoglucemia severa y cómo se administra?"},
            {"question": "¿Qué se debe hacer después de que el paciente recupere la conciencia tras el tratamiento?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Diabéticas."
        ]
    },
    {
        "id": "sobredosis-opioides-06",
        "title": "Depresión respiratoria en adulto joven",
        "description": "Joven de 24 años encontrado inconsciente en un baño público. Amigos refieren que podría haber consumido heroína. En la escena se observa parafernalia para uso de drogas intravenosas.",
        "initialAssessment": "Paciente cianótico, no responde. Se observa miosis puntiforme bilateral. Respiraciones agónicas, de 4 a 6 por minuto. Pulso radial débil y filiforme.",
        "vitalSigns": {
            "FC": "50 lpm",
            "TA": "80/40 mmHg",
            "FR": "4 rpm",
            "SpO2": "75% (aire ambiente)"
        },
        "findings": [
            "Sobredosis de opioides.",
            "Depresión respiratoria severa y paro respiratorio inminente.",
            "Hipoxia y bradicardia secundarias."
        ],
        "questions": [
            {"question": "¿Cuál es la tríada clásica de una sobredosis de opioides?"},
            {"question": "Describa el manejo inicial de la vía aérea y la ventilación antes de administrar el antídoto."},
            {"question": "¿Cuál es el fármaco revertor, su vía de administración preferida en el ámbito prehospitalario y qué se debe anticipar después de su administración?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Toxicológicas."
        ]
    },
    {
        "id": "tce-severo-07",
        "title": "Caída de altura con alteración de conciencia",
        "description": "Trabajador de la construcción de 35 años cae de un andamio de aproximadamente 6 metros de altura. No llevaba casco. Presenta pérdida de conciencia inicial, seguida de un periodo de lucidez y posterior deterioro neurológico.",
        "initialAssessment": "Paciente masculino con respuesta motora de decorticación al estímulo doloroso. Emite sonidos incomprensibles y no abre los ojos. Se observa una herida en la región temporal derecha y otorragia del mismo lado. Restricción de movimiento espinal en progreso.",
        "vitalSigns": {
            "FC": "55 lpm",
            "TA": "190/110 mmHg",
            "FR": "12 rpm (patrón irregular)",
            "SpO2": "90% (con O2 a 15L/min)"
        },
        "findings": [
            "Traumatismo Craneoencefálico (TCE) severo (Glasgow de 5).",
            "Sospecha de hematoma epidural por el intervalo lúcido.",
            "Signos de hipertensión intracraneal (Tríada de Cushing)."
        ],
        "questions": [
            {"question": "Explique los componentes de la Tríada de Cushing y su significado clínico en el TCE."},
            {"question": "¿Cuál es el manejo prioritario de la vía aérea en un paciente con TCE severo y Glasgow bajo?"},
            {"question": "¿Cómo se debe manejar la presión arterial y la oxigenación para prevenir lesiones secundarias en el cerebro?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Trauma Craneoencefálico."
        ]
    },
    {
        "id": "neumotorax-tension-08",
        "title": "Dolor torácico y disnea tras herida punzante",
        "description": "Hombre de 28 años involucrado en una riña, sufre una herida por arma blanca en el hemitórax derecho, a nivel del 4º espacio intercostal. Presenta dolor agudo y dificultad respiratoria que empeora rápidamente.",
        "initialAssessment": "Paciente ansioso, con dificultad respiratoria severa. Ausencia unilateral de ruidos respiratorios en el hemitórax derecho. Hiperresonancia a la percusión en el mismo lado. Se observa ingurgitación yugular y desviación de la tráquea hacia el lado izquierdo.",
        "vitalSigns": {
            "FC": "140 lpm",
            "TA": "85/55 mmHg",
            "FR": "38 rpm",
            "SpO2": "85% (aire ambiente)"
        },
        "findings": [
            "Neumotórax a tensión derecho.",
            "Choque obstructivo.",
            "Necesidad de descompresión torácica inmediata."
        ],
        "questions": [
            {"question": "¿Cuáles son los signos y síntomas cardinales que diferencian un neumotórax simple de uno a tensión?"},
            {"question": "Describa el procedimiento de descompresión con aguja, incluyendo el punto de inserción anatómico correcto."},
            {"question": "¿Qué cambios en los signos vitales se esperan inmediatamente después de una descompresión exitosa?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Trauma Torácico."
        ]
    },
    {
        "id": "quemadura-electrica-09",
        "title": "Lesión por electrocución en trabajador de línea eléctrica",
        "description": "Masculino de 42 años recibe descarga de una línea de alto voltaje. Fue lanzado varios metros. Se aseguró la escena y se cortó la corriente. El paciente está desorientado.",
        "initialAssessment": "Paciente confuso, responde a órdenes simples. Presenta quemaduras de entrada en mano derecha y de salida en pie izquierdo, ambas carbonizadas y de espesor total. Se sospecha trauma cerrado por la caída. Se inmoviliza la columna cervical.",
        "vitalSigns": {
            "FC": "130 lpm (con extrasístoles ventriculares en monitor)",
            "TA": "100/70 mmHg",
            "FR": "22 rpm",
            "SpO2": "99% (con O2 a 15L/min)"
        },
        "findings": [
            "Quemadura eléctrica de alto voltaje.",
            "Arritmias cardíacas.",
            "Alto riesgo de rabdomiólisis y daño renal agudo.",
            "Traumatismo cerrado asociado por la caída."
        ],
        "questions": [
            {"question": "¿Por qué las quemaduras eléctricas son a menudo más graves de lo que aparentan en la superficie de la piel?"},
            {"question": "¿Cuál es la importancia de la monitorización cardíaca continua en un paciente con electrocución de alto voltaje?"},
            {"question": "Explique el fundamento para iniciar una reposición agresiva de líquidos intravenosos en este tipo de quemadura."}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Lesiones por Quemaduras."
        ]
    },
    {
        "id": "parto-emergencia-10",
        "title": "Atención de parto inminente en domicilio",
        "description": "Llamada por mujer de 28 años, G3 P2, con 39 semanas de gestación. Presenta contracciones cada 2 minutos y siente una fuerte necesidad de pujar. La fuente se rompió hace 10 minutos. El hospital está a 30 minutos de distancia.",
        "initialAssessment": "Paciente en trabajo de parto activo, se observa coronamiento de la cabeza fetal durante una contracción. La atención del parto en el lugar es inevitable. Se prepara el equipo de obstetricia.",
        "vitalSigns": {
            "FC": "100 lpm",
            "TA": "120/75 mmHg",
            "FR": "20 rpm",
            "SpO2": "98% (aire ambiente)"
        },
        "findings": [
            "Parto inminente en el segundo período del trabajo de parto.",
            "Necesidad de asistir el parto fuera del hospital.",
            "Preparación para posible reanimación neonatal."
        ],
        "questions": [
            {"question": "Describa los pasos clave para asistir un parto normal no complicado en el entorno prehospitalario."},
            {"question": "¿Cuáles son las tres preguntas críticas que se deben hacer inmediatamente después del nacimiento para evaluar la necesidad de reanimación neonatal?"},
            {"question": "Si un recién nacido presenta apnea y flacidez, ¿cuáles son los pasos iniciales y más importantes de la reanimación?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Obstetricia y Atención Neonatal."
        ]
    },
    {
        "id": "sepsis-urinaria-11",
        "title": "Fiebre y alteración del estado mental en anciana",
        "description": "Mujer de 82 años residente de un asilo, con sonda urinaria permanente. El personal reporta que desde la mañana está letárgica, no quiere comer y tiene la piel caliente. Refieren que la orina en la bolsa colectora es turbia y de mal olor.",
        "initialAssessment": "Paciente somnolienta, responde a estímulos verbales pero está desorientada en tiempo y lugar. Piel enrojecida, caliente y seca al tacto. No hay signos de trauma. Taquipnea evidente.",
        "vitalSigns": {
            "FC": "115 lpm",
            "TA": "85/45 mmHg",
            "FR": "28 rpm",
            "SpO2": "93% (aire ambiente)",
            "Temp": "39.1 °C"
        },
        "findings": [
            "Sospecha de sepsis severa, probable foco infeccioso urinario (urosepsis).",
            "Choque séptico manifestado por hipotensión y alteración del estado mental.",
            "Necesidad de alerta por sepsis en el hospital receptor y manejo agresivo de líquidos."
        ],
        "questions": [
            {"question": "¿Cuáles son los criterios (como qSOFA) que se pueden usar en el campo para identificar a un paciente con alto riesgo de sepsis?"},
            {"question": "Explique la fisiopatología del choque séptico y por qué causa hipotensión."},
            {"question": "¿Cuál es la importancia de la administración temprana de líquidos intravenosos y oxígeno en el manejo prehospitalario de la sepsis?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Enfermedades Infecciosas."
        ]
    },
    {
        "id": "estatus-epileptico-12",
        "title": "Convulsiones continuas en paciente adulto",
        "description": "Hombre de 30 años con antecedentes de epilepsia mal controlada. Su familia llama porque ha tenido una convulsión tónico-clónica generalizada que ha durado más de 5 minutos sin recuperar la conciencia.",
        "initialAssessment": "Paciente en el suelo con movimientos tónico-clónicos activos en las cuatro extremidades. Cianosis peribucal. Salivación excesiva. No responde a ningún estímulo. La escena es segura.",
        "vitalSigns": {
            "FC": "140 lpm",
            "TA": "160/95 mmHg",
            "FR": "Irregular/Apneica durante la convulsión",
            "SpO2": "84% (durante la actividad convulsiva)"
        },
        "findings": [
            "Estatus epiléptico.",
            "Riesgo elevado de hipoxia cerebral y broncoaspiración.",
            "Necesidad de manejo farmacológico inmediato para detener la convulsión y asegurar la vía aérea."
        ],
        "questions": [
            {"question": "¿Cuál es la definición de estatus epiléptico y por qué es una emergencia médica que amenaza la vida?"},
            {"question": "Describa el manejo inicial de la vía aérea en un paciente con convulsiones activas."},
            {"question": "¿Qué clase de medicamentos se utilizan para tratar el estatus epiléptico en el entorno prehospitalario y cuáles son sus vías de administración?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Neurológicas."
        ]
    },
    {
        "id": "aaa-roto-13",
        "title": "Dolor abdominal y de espalda súbito con síncope",
        "description": "Hombre de 70 años con historial de tabaquismo e hipertensión, se desploma en su casa. Al recuperar la conciencia, se queja de un dolor abdominal y de espalda insoportable, descrito como 'desgarrador'.",
        "initialAssessment": "Paciente pálido, diaforético y ansioso. Pulso periférico apenas palpable. Abdomen distendido y sensible a la palpación. Es posible palpar una masa pulsátil en la región periumbilical.",
        "vitalSigns": {
            "FC": "128 lpm (filiforme)",
            "TA": "80/50 mmHg",
            "FR": "26 rpm (superficial)",
            "SpO2": "92% (con O2 a 15L/min)"
        },
        "findings": [
            "Sospecha de ruptura de Aneurisma de Aorta Abdominal (AAA).",
            "Choque hipovolémico severo de origen hemorrágico.",
            "Paciente en estado crítico que requiere traslado inmediato a un centro con capacidad quirúrgica vascular."
        ],
        "questions": [
            {"question": "¿Cuál es la tríada clásica de síntomas de una ruptura de AAA?"},
            {"question": "¿Por qué es controvertida la reanimación con grandes volúmenes de líquidos (hipotensión permisiva) en este tipo de pacientes?"},
            {"question": "¿Qué acciones deben ser prioritarias y cuáles deben evitarse (ej. palpación abdominal vigorosa) durante el manejo prehospitalario?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares y Capítulo de Trauma Abdominal."
        ]
    },
    {
        "id": "golpe-de-calor-14",
        "title": "Colapso de un atleta durante una maratón",
        "description": "Corredora de 25 años colapsa cerca de la línea de meta durante una maratón en un día caluroso y húmedo. Los organizadores del evento solicitan ayuda al encontrarla inconsciente.",
        "initialAssessment": "Paciente femenina inconsciente, no responde a estímulos dolorosos. Piel extremadamente caliente al tacto, enrojecida y seca (cese de la sudoración). Respiraciones rápidas y superficiales. Se retira del ambiente caluroso de inmediato.",
        "vitalSigns": {
            "FC": "150 lpm",
            "TA": "90/55 mmHg",
            "FR": "32 rpm",
            "SpO2": "95% (aire ambiente)",
            "Temp": "41.5 °C (rectal)"
        },
        "findings": [
            "Golpe de calor por esfuerzo, una emergencia médica verdadera.",
            "Disfunción del sistema nervioso central (inconsciencia).",
            "Falla multiorgánica inminente si no se inicia un enfriamiento rápido y agresivo."
        ],
        "questions": [
            {"question": "¿Cuál es la diferencia fisiopatológica clave entre el agotamiento por calor y el golpe de calor?"},
            {"question": "¿Cuál es el método de enfriamiento más efectivo que se puede iniciar en el campo para un paciente con golpe de calor?"},
            {"question": "¿Por qué los medicamentos antipiréticos (como el paracetamol o el ibuprofeno) no son efectivos para tratar la hipertermia en un golpe de calor?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales."
        ]
    },
    {
        "id": "fractura-pelvis-15",
        "title": "Dolor pélvico severo tras accidente de motocicleta",
        "description": "Motociclista de 22 años impacta a alta velocidad contra un vehículo. Es encontrado en el suelo quejándose de un dolor intenso en la cadera y la pelvis, e incapacidad para mover las piernas.",
        "initialAssessment": "Paciente consciente, orientado, con dolor severo (10/10). Deformidad y crepitación a la compresión suave de la pelvis (inestabilidad pélvica). No hay hemorragia externa evidente, pero se sospecha sangrado interno masivo. Se observan abrasiones en el abdomen y las extremidades inferiores.",
        "vitalSigns": {
            "FC": "135 lpm",
            "TA": "88/60 mmHg",
            "FR": "28 rpm",
            "SpO2": "96% (con O2)"
        },
        "findings": [
            "Traumatismo de alta energía con fractura de pelvis inestable (libro abierto).",
            "Choque hipovolémico secundario a hemorragia pélvica.",
            "Alto riesgo de lesiones asociadas en órganos abdominales y genitourinarios."
        ],
        "questions": [
            {"question": "¿Por qué una fractura de pelvis inestable puede causar una hemorragia potencialmente mortal?"},
            {"question": "Describa la técnica correcta para la estabilización pélvica en el campo utilizando un dispositivo comercial o una sábana."},
            {"question": "¿Cuál es el objetivo principal del manejo prehospitalario en un paciente con este tipo de lesión?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Trauma Musculoesquelético."
        ]
    },
    {
        "id": "eclampsia-39",
        "title": "Convulsión en paciente embarazada",
        "description": "Mujer de 28 años, con 34 semanas de gestación, presenta una convulsión tónico-clónica generalizada presenciada por su pareja. A la llegada de la unidad, la paciente se encuentra en estado postictal.",
        "initialAssessment": "Paciente somnolienta, responde a estímulos verbales pero está desorientada. Piel pálida y diaforética. Se observa edema facial y en extremidades (fóvea ++). No hay evidencia de trauma. Vía aérea permeable.",
        "vitalSigns": {
            "FC": "108 lpm",
            "TA": "170/110 mmHg",
            "FR": "22 rpm",
            "SpO2": "95% (aire ambiente)",
            "Glucemia Capilar": "98 mg/dL"
        },
        "findings": [
            "Eclampsia, una emergencia hipertensiva del embarazo.",
            "Riesgo de convulsiones recurrentes, desprendimiento de placenta y EVC.",
            "Necesidad de manejo cuidadoso de la vía aérea y traslado urgente a un centro obstétrico.",
            "La administración de sulfato de magnesio es el tratamiento de elección en el hospital."
        ],
        "questions": [
            {"question": "¿Cuáles son los signos y síntomas que definen la preeclampsia severa y la eclampsia?"},
            {"question": "¿Por qué es crucial el manejo de la presión arterial en esta paciente, y qué precauciones se deben tomar?"},
            {"question": "En el entorno prehospitalario, ¿cuál es la prioridad principal además de prevenir lesiones durante una convulsión?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Obstétricas y Neonatales."
        ]
    },
    {
        "id": "crisis-celulas-falciformes-40",
        "title": "Dolor severo en paciente con anemia falciforme",
        "description": "Paciente masculino de 24 años con antecedentes conocidos de anemia de células falciformes, llama a emergencias por un dolor severo (10/10) en espalda, pecho y extremidades que comenzó hace varias horas y no cede con sus analgésicos habituales.",
        "initialAssessment": "Paciente consciente y alerta, en posición fetal por el dolor. No presenta disnea ni signos de trauma. Piel seca y caliente al tacto. Se muestra ansioso y pide alivio para el dolor.",
        "vitalSigns": {
            "FC": "115 lpm",
            "TA": "130/80 mmHg",
            "FR": "24 rpm",
            "SpO2": "97% (aire ambiente)",
            "Temp": "38.1 °C"
        },
        "findings": [
            "Crisis vaso-oclusiva por anemia de células falciformes.",
            "Dolor severo como principal manifestación.",
            "Riesgo de síndrome torácico agudo si presenta síntomas respiratorios.",
            "Requiere manejo agresivo del dolor, hidratación y oxígeno."
        ],
        "questions": [
            {"question": "¿Cuál es la fisiopatología de una crisis vaso-oclusiva en la anemia de células falciformes?"},
            {"question": "¿Por qué es importante administrar oxígeno a estos pacientes, incluso si su SpO2 es normal?"},
            {"question": "¿Qué es el síndrome torácico agudo y por qué es una complicación mortal de esta enfermedad?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Hematológicas."
        ]
    },
    {
        "id": "intoxicacion-cianuro-incendio-41",
        "title": "Inconsciencia y hollín tras incendio en casa",
        "description": "Bomberos rescatan a un hombre de 45 años de un incendio estructural. El paciente fue encontrado en una habitación llena de humo denso por quema de plásticos y alfombras. Está inconsciente.",
        "initialAssessment": "Paciente no responde a estímulos. Presenta hollín en la boca y fosas nasales. Piel de color rojo cereza brillante. No hay quemaduras corporales evidentes. Taquipnea marcada.",
        "vitalSigns": {
            "FC": "140 lpm",
            "TA": "80/40 mmHg",
            "FR": "35 rpm",
            "SpO2": "100% (lectura falsamente alta)"
        },
        "findings": [
            "Intoxicación por monóxido de carbono y sospecha alta de intoxicación por cianuro.",
            "Shock profundo y acidosis metabólica severa.",
            "La lectura de SpO2 no es fiable; el paciente sufre de hipoxia tisular extrema.",
            "Requiere antídoto específico (hidroxocobalamina) si está disponible."
        ],
        "questions": [
            {"question": "En un incendio, ¿qué materiales al quemarse liberan gas cianuro?"},
            {"question": "Explique por qué tanto el monóxido de carbono como el cianuro pueden dar una lectura de SpO2 falsamente normal o alta."},
            {"question": "¿Cuál es el mecanismo por el cual el cianuro causa hipoxia celular, y cómo actúa el antídoto como la hidroxocobalamina?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Toxicológicas y Ambientales."
        ]
    },
    {
        "id": "delirium-tremens-42",
        "title": "Agitación y alucinaciones en paciente alcohólico",
        "description": "Hombre de 50 años, con historial de alcoholismo crónico, es reportado por su familia por agitación extrema, temblores y alucinaciones visuales. Su último trago fue hace 3 días, cuando fue hospitalizado por una fractura.",
        "initialAssessment": "Paciente desorientado, extremadamente agitado, diaforético. Intenta quitarse las vías que tiene puestas. Grita sobre 'insectos en las paredes'. No colabora con la evaluación.",
        "vitalSigns": {
            "FC": "135 lpm",
            "TA": "175/95 mmHg",
            "FR": "28 rpm",
            "SpO2": "96% (aire ambiente)",
            "Temp": "38.5 °C"
        },
        "findings": [
            "Delirium Tremens (DT), la manifestación más severa del síndrome de abstinencia alcohólica.",
            "Emergencia médica con alta mortalidad si no se trata.",
            "Riesgo de arritmias, convulsiones y rabdomiólisis.",
            "Requiere sedación (usualmente con benzodiacepinas) y soporte vital."
        ],
        "questions": [
            {"question": "¿Qué diferencia al Delirium Tremens de las fases más leves de la abstinencia alcohólica?"},
            {"question": "¿Por qué es fundamental medir la glucosa en un paciente con estado mental alterado y antecedentes de alcoholismo?"},
            {"question": "Desde el punto de vista de la seguridad, ¿cuál es la prioridad al manejar a un paciente tan agitado?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Psiquiátricas y Abuso de Sustancias."
        ]
    },
    {
        "id": "neumotorax-espontaneo-43",
        "title": "Dolor torácico súbito y disnea en joven alto y delgado",
        "description": "Hombre de 21 años, alto y delgado, sin antecedentes médicos, experimenta un dolor torácico agudo y punzante en el lado derecho, seguido de dificultad para respirar mientras veía televisión.",
        "initialAssessment": "Paciente consciente, ansioso, con disnea moderada. Refiere que el dolor aumenta con la inspiración profunda. A la auscultación, los ruidos respiratorios están marcadamente disminuidos en el hemitórax derecho en comparación con el izquierdo.",
        "vitalSigns": {
            "FC": "110 lpm",
            "TA": "125/80 mmHg",
            "FR": "24 rpm",
            "SpO2": "94% (aire ambiente)"
        },
        "findings": [
            "Alta sospecha de Neumotórax espontáneo primario.",
            "Dolor de tipo pleurítico.",
            "Riesgo de progresión a un neumotórax a tensión, aunque es raro.",
            "El manejo es de soporte (oxígeno) y traslado en posición cómoda."
        ],
        "questions": [
            {"question": "¿Cuál es el perfil de paciente clásico para un neumotórax espontáneo primario?"},
            {"question": "¿Qué signos y síntomas indicarían que este neumotórax simple está evolucionando a un neumotórax a tensión?"},
            {"question": "Si no hay trauma, ¿cuál es la causa subyacente de este tipo de neumotórax?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Respiratorias."
        ]
    },
    {
        "id": "aspiracion-cuerpo-extrano-pediatrico-44",
        "title": "Atragantamiento y tos súbita en lactante",
        "description": "Bebé de 11 meses estaba comiendo trozos de salchicha cuando de repente comenzó a toser vigorosamente, con estridor y dificultad para respirar. Los padres intentaron darle palmadas en la espalda sin éxito.",
        "initialAssessment": "Lactante consciente, con mirada de pánico. Presenta tos ineficaz, estridor inspiratorio y cianosis peribucal que empeora. No vocaliza. A la auscultación se escuchan sibilancias unilaterales en el pulmón derecho.",
        "vitalSigns": {
            "FC": "150 lpm",
            "FR": "40 rpm (con dificultad)",
            "SpO2": "88% y bajando"
        },
        "findings": [
            "Obstrucción de la vía aérea por cuerpo extraño (OVACE) severa.",
            "Signos de obstrucción parcial con progresión a completa.",
            "Riesgo inminente de paro respiratorio.",
            "Requiere intervención inmediata con maniobras para lactantes."
        ],
        "questions": [
            {"question": "Describa la secuencia correcta de maniobras (palmadas en la espalda y compresiones torácicas) para un lactante consciente con OVACE severa."},
            {"question": "¿Qué se debe hacer de manera diferente si el lactante pierde la conciencia?"},
            {"question": "¿Por qué un cuerpo extraño aspirado tiende a alojarse con más frecuencia en el bronquio principal derecho?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Manejo de la Vía Aérea y Emergencias Pediátricas."
        ]
    },
    {
        "id": "epiglotitis-pediatrica-45",
        "title": "Fiebre, babeo y estridor en niño preescolar",
        "description": "Padres llaman al 911 porque su hijo de 4 años, no vacunado, desarrolló fiebre alta y dolor de garganta rápidamente. Ahora está sentado, inclinado hacia adelante, babeando y haciendo un ruido agudo al respirar.",
        "initialAssessment": "Niño con apariencia tóxica, sentado en posición de olfateo. Presenta estridor inspiratorio, voz apagada ('de papa caliente') y babeo profuso, ya que se niega a tragar. No tose. Se ve aterrorizado.",
        "vitalSigns": {
            "FC": "145 lpm",
            "FR": "30 rpm",
            "SpO2": "91% (aire ambiente)",
            "Temp": "40.1 °C"
        },
        "findings": [
            "Alta sospecha de Epiglotitis, una emergencia de la vía aérea potencialmente mortal.",
            "La presentación de las '4 D' (Disfagia, Disfonía, Dificultad respiratoria y Babeo - Drooling) es clásica.",
            "Riesgo de obstrucción completa y súbita de la vía aérea.",
            "El manejo debe minimizar la agitación del niño."
        ],
        "questions": [
            {"question": "¿Por qué está contraindicado intentar visualizar la garganta con un abatelenguas en un caso de sospecha de epiglotitis en el campo?"},
            {"question": "¿Cuál es la prioridad absoluta en el manejo prehospitalario de este paciente?"},
            {"question": "¿Qué patógeno bacteriano es la causa clásica de la epiglotitis y por qué es menos común ahora?"}
        ],
        "references": [
            "AAOS 11ª Edición - Capítulo de Emergencias Pediátricas y Emergencias Respiratorias."
        ]
    }

]