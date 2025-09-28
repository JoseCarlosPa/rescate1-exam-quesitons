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
        id: "trauma-geriatrico-01",
        title: "Caída en domicilio de paciente geriátrica",
        description: "Mujer de 82 años sufre una caída desde su propia altura en el baño. Se queja de dolor intenso en la cadera derecha y es incapaz de moverse. Tiene antecedentes de osteoporosis y toma anticoagulantes.",
        initialAssessment: "Paciente consciente y orientada, aunque muy adolorida. Se observa acortamiento y rotación externa de la extremidad inferior derecha. La piel está pálida y fría.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "100/60 mmHg",
            FR: "22 rpm",
            SpO2: "96%",
            "Dolor": "9/10",
        },
        findings: [
            "Alta sospecha de fractura de cadera.",
            "Signos de shock hipovolémico compensado (taquicardia, hipotensión relativa).",
            "El uso de anticoagulantes aumenta el riesgo de hemorragia interna significativa."
        ],
        questions: [
            { question: "¿Cuál es el principal riesgo asociado a una fractura de pelvis o fémur en un paciente geriátrico anticoagulado?" },
            { question: "¿Qué método de inmovilización es el más adecuado para esta lesión en el entorno prehospitalario?" },
            { question: "¿Por qué es crucial el manejo del dolor en este tipo de pacientes?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Geriátrico.",
            "PHTLS 9ª Edición - Capítulo de Trauma Musculoesquelético."
        ],
        correctManage: `- Estabilización manual de la extremidad lesionada.\n- Administración de oxígeno si es necesario para mantener SpO₂ >94%.\n- Establecer acceso IV para posible reposición de líquidos y analgesia.\n- Inmovilización de la extremidad con una férula de tracción si el protocolo lo permite o inmovilización en bloque sobre una camilla cuchara o de vacío, respetando la posición antiálgica.\n- Monitorización continua de signos vitales en busca de descompensación hemodinámica.\n- Traslado gentil a un centro hospitalario con capacidad de trauma ortopédico.`,
        explanation: "La fractura de cadera en pacientes geriátricos es una emergencia grave. Puede provocar una hemorragia interna de hasta 1.5 litros, llevando al shock hipovolémico, especialmente en pacientes que toman anticoagulantes. La inmovilización adecuada reduce el dolor, minimiza el sangrado y previene lesiones adicionales. El manejo del dolor es vital, ya que reduce la respuesta fisiológica al estrés (taquicardia, hipertensión) y mejora el confort del paciente."
    },
    {
        id: "pediatria-crup-02",
        title: "Dificultad respiratoria nocturna en lactante",
        description: "Padres llaman por su hijo de 2 años que despertó con una tos 'perruna' y un ruido agudo al inspirar. Reportan fiebre baja durante el día. Los síntomas empeoraron en las últimas horas.",
        initialAssessment: "Lactante consciente, sentado en el regazo de su madre. Presenta estridor inspiratorio audible, tos traqueal y tiraje subcostal leve. No hay babeo ni apariencia tóxica.",
        vitalSigns: {
            FC: "130 lpm",
            FR: "35 rpm",
            SpO2: "95% (aire ambiente)",
            "Temp": "38.2°C",
        },
        findings: [
            "Laringotraqueítis (Crup) de moderada severidad.",
            "Obstrucción de la vía aérea superior.",
            "Estridor y tos 'perruna' son patognomónicos."
        ],
        questions: [
            { question: "¿Qué hallazgos clínicos ayudan a diferenciar el Crup de la Epiglotitis?" },
            { question: "¿Cuál es el beneficio de administrar aire húmedo o frío a este paciente?" },
            { question: "¿Cuándo está indicada la administración de epinefrina nebulizada en el Crup?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Pediátricas.",
            "Nelson Textbook of Pediatrics, 21st Edition."
        ],
        correctManage: `- Mantener al niño en una posición cómoda, usualmente en brazos de los padres, para minimizar la ansiedad.\n- Administrar oxígeno humidificado si hay hipoxia o dificultad respiratoria marcada.\n- Exponer al paciente al aire frío de la noche puede ayudar a reducir el edema de la vía aérea.\n- Considerar la administración de epinefrina nebulizada si el estridor está presente en reposo o hay dificultad respiratoria severa, según protocolo.\n- Traslado tranquilo al hospital para evaluación y posible administración de corticoides.`,
        explanation: "El Crup es una infección viral común en niños pequeños que causa inflamación en la laringe y la tráquea. El estridor es causado por el paso de aire a través de una vía aérea superior edematizada. Mantener la calma del niño es crucial, ya que el llanto puede empeorar la obstrucción. El aire frío actúa como un vasoconstrictor, reduciendo el edema y mejorando el flujo de aire. La epinefrina nebulizada se reserva para casos severos por su potente efecto vasoconstrictor."
    },
    {
        id: "toxicologia-co-03",
        title: "Cefalea y mareos en múltiples pacientes",
        description: "Se solicita una ambulancia a un domicilio en invierno por múltiples personas con cefalea, náuseas y mareos. La familia estaba usando un generador de gasolina en el sótano por un corte de luz.",
        initialAssessment: "Se encuentran tres pacientes (dos adultos, un adolescente) conscientes pero letárgicos y confusos. Refieren sentirse muy débiles. La casa está cerrada, sin ventilación.",
        vitalSigns: {
            "Paciente 1 (Adulto)": "FC: 110 lpm, TA: 130/80 mmHg, FR: 22 rpm, SpO2: 100%",
            "Paciente 2 (Adulto)": "FC: 115 lpm, TA: 125/75 mmHg, FR: 24 rpm, SpO2: 99%",
            "Paciente 3 (Adolescente)": "FC: 120 lpm, TA: 110/70 mmHg, FR: 26 rpm, SpO2: 100%",
        },
        findings: [
            "Alta sospecha de intoxicación por monóxido de carbono (CO).",
            "Múltiples pacientes con síntomas neurológicos similares.",
            "La lectura del oxímetro de pulso es falsamente normal y no es fiable."
        ],
        questions: [
            { question: "¿Por qué el oxímetro de pulso convencional no es útil para detectar la intoxicación por CO?" },
            { question: "¿Cuál es el tratamiento prehospitalario inmediato y más importante para estos pacientes?" },
            { question: "¿Qué es la carboxihemoglobina y cómo afecta el transporte de oxígeno?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Toxicológicas y Ambientales."
        ],
        correctManage: `- Retirar a todos los pacientes del ambiente contaminado inmediatamente a un área con aire fresco.\n- Administrar oxígeno al 100% a través de una mascarilla no recirculante a todos los pacientes, independientemente de la lectura de SpO₂.\n- Evaluar el estado de conciencia y prepararse para manejar la vía aérea si un paciente se deteriora.\n- Trasladar a todos los pacientes a un hospital con capacidad de medir niveles de carboxihemoglobina y, si es necesario, con acceso a cámara hiperbárica.`,
        explanation: "El monóxido de carbono (CO) es un gas incoloro e inodoro que se une a la hemoglobina con una afinidad 200-300 veces mayor que el oxígeno, formando carboxihemoglobina. Esto impide el transporte de oxígeno a los tejidos, causando hipoxia tisular. El oxímetro de pulso no puede diferenciar entre la oxihemoglobina y la carboxihemoglobina, dando una lectura falsamente alta. El tratamiento consiste en desplazar el CO de la hemoglobina administrando la mayor concentración de oxígeno posible."
    },
    {
        id: "toxicologia-organofosforados-04",
        title: "Trabajador agrícola con salivación y debilidad",
        description: "Hombre de 35 años que trabaja en un campo de cultivo es traído por sus compañeros. Presenta confusión, sudoración excesiva, salivación y debilidad muscular. Estuvo aplicando pesticidas sin equipo de protección.",
        initialAssessment: "Paciente desorientado, con fasciculaciones musculares visibles. Diaforesis profusa. Pupilas puntiformes (miosis). Se auscultan crepitantes en ambos campos pulmonares. Olor a ajo en el aliento.",
        vitalSigns: {
            FC: "45 lpm",
            TA: "90/50 mmHg",
            FR: "28 rpm (superficial)",
            SpO2: "88%",
        },
        findings: [
            "Síndrome colinérgico agudo por intoxicación con organofosforados.",
            "Crisis de broncorrea y broncoespasmo (causa de hipoxia).",
            "Bradicardia e hipotensión severas."
        ],
        questions: [
            { question: "¿Qué significa el acrónimo 'SLUDGEM' y cómo se aplica a este caso?" },
            { question: "¿Cuál es el antídoto específico para la intoxicación por organofosforados y cómo actúa?" },
            { question: "¿Qué precauciones de seguridad debe tomar el personal de emergencias al tratar a este paciente?" }
        ],
        references: [
            "Goldfrank's Toxicologic Emergencies, 11th Edition.",
            "AAOS 11ª Edición - Capítulo de Emergencias Toxicológicas."
        ],
        correctManage: `- Asegurar la protección del personal con equipo de protección personal (guantes, bata) para evitar la contaminación.\n- Descontaminar al paciente: retirar toda la ropa y lavar la piel con abundante agua y jabón.\n- Manejo agresivo de la vía aérea: aspiración frecuente de secreciones y administración de oxígeno al 100%. Estar preparado para la intubación.\n- Administrar Atropina IV en dosis altas para secar las secreciones y revertir la bradicardia.\n- Administrar Pralidoxima (2-PAM) si está disponible, para reactivar la acetilcolinesterasa.\n- Traslado urgente a un centro capaz de manejar una crisis toxicológica severa.`,
        explanation: "Los pesticidas organofosforados inhiben la enzima acetilcolinesterasa, lo que lleva a una acumulación excesiva de acetilcolina en las sinapsis nerviosas. Esto causa una sobreestimulación del sistema nervioso parasimpático, resultando en el síndrome colinérgico (SLUDGEM: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis). La muerte suele ocurrir por insuficiencia respiratoria debido a la broncorrea y broncoespasmo. La atropina es un antagonista competitivo que bloquea los efectos de la acetilcolina, mientras que la pralidoxima reactiva la enzima inhibida."
    },
    {
        id: "neurologia-cefalea-05",
        title: "Cefalea súbita 'la peor de mi vida'",
        description: "Mujer de 45 años sin antecedentes relevantes llama por una cefalea de inicio súbito y de máxima intensidad ('como un trueno') mientras veía la televisión. Ahora presenta fotofobia y rigidez de cuello.",
        initialAssessment: "Paciente consciente, en una habitación oscura. Refiere dolor 10/10. No puede tocar su pecho con el mentón (rigidez nucal). Pupilas isocóricas y reactivas. No hay déficits neurológicos focales.",
        vitalSigns: {
            FC: "70 lpm",
            TA: "170/95 mmHg",
            FR: "16 rpm",
            SpO2: "98%",
        },
        findings: [
            "Cefalea en trueno con signos meníngeos.",
            "Alta sospecha de hemorragia subaracnoidea (HSA).",
            "La hipertensión puede ser una causa o una consecuencia del evento."
        ],
        questions: [
            { question: "¿Qué características de una cefalea son 'banderas rojas' que indican una patología grave?" },
            { question: "¿Por qué la rigidez de nuca es un signo alarmante en este contexto?" },
            { question: "¿Cuál es el objetivo principal del manejo prehospitalario en una sospecha de HSA?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Neurológicas."
        ],
        correctManage: `- Colocar al paciente en una posición cómoda, usualmente semi-sentado.\n- Minimizar estímulos externos (luces, ruido) para reducir la irritación meníngea y la presión intracraneal.\n- Establecer acceso IV para posible administración de antihipertensivos o analgésicos según protocolo.\n- Evitar maniobras que aumenten la presión intracraneal (Valsalva, tos).\n- Monitorización continua del estado neurológico (escala de Glasgow) y signos vitales.\n- Traslado prioritario a un centro con capacidad de neurocirugía y tomografía computarizada (TC).`,
        explanation: "Una cefalea en trueno es una emergencia neurológica hasta que se demuestre lo contrario. La causa más temida es la hemorragia subaracnoidea, generalmente por la ruptura de un aneurisma cerebral. La sangre en el espacio subaracnoideo irrita las meninges, causando fotofobia y rigidez de nuca. El manejo prehospitalario se centra en mantener un ambiente tranquilo, controlar la presión arterial para prevenir un resangrado y asegurar un traslado rápido para el diagnóstico y tratamiento definitivo."
    },
    {
        id: "ambiental-buceo-06",
        title: "Buzo con dolor articular y dificultad para respirar",
        description: "Buzo recreativo de 38 años emerge rápidamente de una inmersión a 30 metros. Treinta minutos después, desarrolla dolor intenso en el hombro y codo, mareos y dificultad para respirar.",
        initialAssessment: "Paciente consciente, con dolor articular severo. Presenta livedo reticularis (una erupción cutánea moteada) en el torso. Taquipnea y tos seca.",
        vitalSigns: {
            FC: "115 lpm",
            TA: "110/70 mmHg",
            FR: "26 rpm",
            SpO2: "93%",
        },
        findings: [
            "Enfermedad por descompresión (EDC) tipo II (afectación neurológica/cardiopulmonar).",
            "Burbujas de nitrógeno en tejidos y torrente sanguíneo.",
            "Requiere oxígeno al 100% y terapia de recompresión hiperbárica."
        ],
        questions: [
            { question: "¿Por qué un ascenso rápido aumenta el riesgo de enfermedad por descompresión?" },
            { question: "¿Cuál es el mecanismo de acción del oxígeno al 100% en el tratamiento de la EDC?" },
            { question: "¿Qué información del perfil de buceo del paciente es crucial para el hospital?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales.",
            "Divers Alert Network (DAN) Guidelines."
        ],
        correctManage: `- Administrar oxígeno al 100% con una mascarilla no recirculante de manera continua.\n- Colocar al paciente en posición supina o lateral de seguridad para maximizar la perfusión.\n- Mantener una buena hidratación si el paciente puede beber líquidos.\n- Proteger del frío o del calor excesivo.\n- Trasladar urgentemente a un centro con cámara de recompresión hiperbárica, notificando al centro receptor con antelación.`,
        explanation: "Durante una inmersión, el cuerpo absorbe nitrógeno de la mezcla de aire respirado. Si el ascenso es demasiado rápido, el nitrógeno no tiene tiempo de ser eliminado gradualmente y forma burbujas en los tejidos y la sangre, causando la EDC. El oxígeno al 100% ayuda a crear un gradiente de presión que acelera la eliminación del nitrógeno ('lavado de nitrógeno') y mejora la oxigenación de los tejidos isquémicos. El tratamiento definitivo es la recompresión en una cámara hiperbárica."
    },
    {
        id: "hematologia-falciforme-07",
        title: "Crisis de dolor agudo en paciente con anemia falciforme",
        description: "Joven de 19 años con antecedentes de anemia de células falciformes acude por dolor agudo (10/10) en la espalda baja y piernas. No hay trauma. Refiere que es similar a sus crisis anteriores.",
        initialAssessment: "Paciente consciente, alerta, en evidente dolor agudo. No hay fiebre ni dificultad respiratoria. Piel y mucosas pálidas.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "130/80 mmHg",
            FR: "20 rpm",
            SpO2: "98% (aire ambiente)",
        },
        findings: [
            "Crisis vaso-oclusiva por anemia de células falciformes.",
            "Dolor severo es la principal manifestación.",
            "Riesgo de deshidratación y síndrome torácico agudo."
        ],
        questions: [
            { question: "¿Qué causa la oclusión vascular y el dolor en una crisis de células falciformes?" },
            { question: "¿Cuáles son los tres pilares del tratamiento prehospitalario para esta condición?" },
            { question: "¿Qué es el síndrome torácico agudo y por qué es una complicación temida?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Hematológicas."
        ],
        correctManage: `- Administración de oxígeno de alto flujo, incluso con SpO₂ normal, para maximizar la saturación de la hemoglobina restante.\n- Manejo agresivo del dolor con analgésicos narcóticos (ej. Fentanilo o Morfina) según protocolo.\n- Establecer acceso IV e iniciar rehidratación con solución salina normal para mejorar el flujo sanguíneo y reducir la viscosidad.\n- Mantener al paciente abrigado, ya que el frío puede precipitar la falciformación.\n- Traslado a un centro con capacidad para manejar crisis hematológicas.`,
        explanation: "En la anemia de células falciformes, los glóbulos rojos adoptan una forma de hoz en condiciones de bajo oxígeno, deshidratación o estrés. Estas células rígidas ocluyen los vasos sanguíneos pequeños, causando isquemia tisular y un dolor intenso (crisis vaso-oclusiva). El tratamiento se centra en romper este ciclo mediante la oxigenación, la hidratación para mejorar el flujo sanguíneo y la analgesia para controlar el dolor severo."
    },
    {
        id: "psiquiatria-agitacion-08",
        title: "Paciente con agitación psicomotriz y paranoia",
        description: "Hombre de 28 años es reportado por su familia por comportamiento errático y agresivo. El paciente cree que 'lo están persiguiendo para hacerle daño' y se ha encerrado en su habitación.",
        initialAssessment: "El paciente está de pie en una esquina, hablando solo, visiblemente asustado y paranoico. Se niega a cooperar y amenaza verbalmente al equipo. La escena no es segura.",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "140/90 mmHg",
            "FR": "24 rpm",
            "SpO2": "99%",
        },
        findings: [
            "Agitación psicomotriz severa secundaria a una posible psicosis aguda.",
            "Riesgo para la seguridad del paciente y del equipo.",
            "Necesidad de desescalada verbal y posible sedación química."
        ],
        questions: [
            { question: "¿Cuáles son las prioridades al llegar a una escena con un paciente potencialmente violento?" },
            { question: "Describe las técnicas de desescalada verbal." },
            { question: "¿Cuándo está indicada la restricción física o química y qué precauciones se deben tomar?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Psiquiátricas."
        ],
        correctManage: `- Asegurar la escena primero. Solicitar apoyo policial si aún no está presente.\n- Mantener una distancia segura y una ruta de salida clara.\n- Intentar la desescalada verbal: hablar con calma, presentarse, validar los sentimientos del paciente sin validar las alucinaciones ('Veo que estás asustado'), y ser honesto.\n- Si la desescalada falla y el paciente sigue siendo un peligro, proceder con la restricción física coordinada y segura con apoyo policial.\n- Administrar sedantes (ej. benzodiacepinas como Midazolam o antipsicóticos como Olanzapina) según protocolo para la sedación química.\n- Una vez controlado, monitorizar continuamente la vía aérea, la respiración y los signos vitales durante el traslado.`,
        explanation: "La seguridad de la escena es la máxima prioridad. El objetivo inicial es calmar al paciente a través de la comunicación. Si esto no es posible y existe un riesgo inminente, la restricción es necesaria para proteger a todos. La sedación química ayuda a reducir la agitación, permitiendo una evaluación y un traslado más seguros. Es crucial monitorizar de cerca a los pacientes sedados por el riesgo de depresión respiratoria o compromiso de la vía aérea."
    },
    {
        id: "trauma-amputacion-09",
        title: "Amputación traumática de miembro superior",
        description: "Trabajador industrial de 42 años sufre la amputación de su mano derecha por debajo de la muñeca en un accidente con maquinaria pesada. Hay sangrado activo en el muñón.",
        initialAssessment: "Paciente consciente, pálido y diaforético, sujetando el brazo lesionado. Se observa una amputación completa con hemorragia pulsátil desde el muñón.",
        vitalSigns: {
            FC: "125 lpm",
            TA: "95/55 mmHg",
            FR: "24 rpm",
            SpO2: "97%",
        },
        findings: [
            "Amputación traumática con hemorragia arterial activa.",
            "Shock hipovolémico en desarrollo.",
            "Necesidad de control inmediato de la hemorragia y manejo adecuado de la parte amputada."
        ],
        questions: [
            { question: "¿Cuál es el método más efectivo y prioritario para controlar una hemorragia arterial en una amputación?" },
            { question: "¿Cómo se debe preservar correctamente una parte del cuerpo amputada para maximizar las posibilidades de reimplante?" },
            { question: "¿Por qué es importante establecer dos accesos IV de gran calibre en este paciente?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Control de Hemorragias.",
            "AAOS 11ª Edición - Capítulo de Trauma de Extremidades."
        ],
        correctManage: `- Aplicar un torniquete comercial lo más alto y apretado posible en la extremidad lesionada para detener la hemorragia inmediatamente. Anotar la hora de aplicación.\n- Administrar oxígeno de alto flujo.\n- Establecer dos accesos intravenosos de gran calibre (16G o 18G) y prepararse para la reposición de volumen.\n- Manejo del dolor con analgésicos IV.\n- Cuidar la parte amputada: envolverla en gasa estéril húmeda, colocarla en una bolsa de plástico sellada y poner esa bolsa en un recipiente con agua y hielo (no directamente sobre el hielo).\n- Traslado rápido a un centro de trauma con capacidad de microcirugía.`,
        explanation: "En una amputación con hemorragia exanguinante, el control del sangrado es la prioridad absoluta para salvar la vida, y el torniquete es la intervención de elección. El manejo adecuado de la parte amputada, manteniéndola fría y limpia sin congelarla, es crucial para su viabilidad y un posible reimplante. El shock hipovolémico debe anticiparse y tratarse agresivamente con reposición de líquidos para mantener la perfusión de los órganos vitales."
    },
    {
        id: "medica-sepsis-10",
        title: "Paciente con herida infectada y estado mental alterado",
        description: "Hombre de 60 años con diabetes es traído por su familia. Tiene una úlcera en el pie que ha empeorado, ahora está roja, caliente y drena pus. En las últimas 12 horas, el paciente se ha vuelto letárgico y confundido.",
        initialAssessment: "Paciente somnoliento, responde a estímulos verbales pero está desorientado. Piel caliente y enrojecida. Taquipnea y taquicardia. La herida en el pie derecho tiene claros signos de infección severa.",
        vitalSigns: {
            FC: "120 lpm",
            TA: "88/50 mmHg",
            FR: "28 rpm",
            SpO2: "93% (aire ambiente)",
            "Temp": "38.9°C",
            "Glucosa": "250 mg/dL",
        },
        findings: [
            "Shock séptico secundario a una infección de tejidos blandos (celulitis/úlcera infectada).",
            "Hipotensión, taquicardia, fiebre y estado mental alterado (criterios de sepsis).",
            "Necesita reconocimiento temprano, fluidoterapia agresiva y antibióticos urgentes."
        ],
        questions: [
            { question: "¿Qué es la sepsis y cómo progresa a shock séptico?" },
            { question: "Utilizando los criterios qSOFA (Quick SOFA), ¿cómo evaluaría a este paciente?" },
            { question: "¿Cuál es la importancia de la 'hora de oro' en el manejo de la sepsis?" }
        ],
        references: [
            "Surviving Sepsis Campaign Guidelines.",
            "AAOS 11ª Edición - Capítulo de Enfermedades Infecciosas y Shock."
        ],
        correctManage: `- Administrar oxígeno de alto flujo para corregir la hipoxia.\n- Establecer acceso IV de gran calibre e iniciar una reanimación agresiva con líquidos (bolo de solución salina de 30 ml/kg, según protocolo) para tratar la hipotensión inducida por la sepsis.\n- Realizar una evaluación completa y monitorizar los signos vitales de cerca.\n- Notificar al hospital receptor con una alerta de 'código sepsis' para que el equipo esté preparado para administrar antibióticos de amplio espectro de inmediato a la llegada.\n- Mantener al paciente abrigado.`,
        explanation: "La sepsis es una respuesta desregulada del cuerpo a una infección, que puede llevar a una disfunción orgánica potencialmente mortal. El shock séptico ocurre cuando hay una hipotensión persistente a pesar de la reanimación con líquidos. El reconocimiento temprano y el manejo agresivo en la primera hora (la 'hora de oro'), incluyendo la administración de líquidos y antibióticos, son cruciales para mejorar la supervivencia del paciente al restaurar la perfusión de los órganos y tratar la infección subyacente."
    },
    {
        id: "ambiental-calor-11",
        title: "Colapso en un evento deportivo al aire libre",
        description: "Un corredor de maratón de 28 años colapsa a pocos metros de la línea de meta en un día particularmente caluroso y húmedo. A tu llegada, lo encuentras inconsciente.",
        initialAssessment: "Paciente masculino inconsciente, no responde a estímulos dolorosos. La piel está extremadamente caliente, enrojecida y seca al tacto. Respiraciones rápidas y superficiales. No hay evidencia de trauma.",
        vitalSigns: {
            FC: "140 lpm (débil)",
            TA: "85/45 mmHg",
            FR: "30 rpm",
            SpO2: "94% (aire ambiente)",
            "Temp (timpánica)": "41.1°C",
        },
        findings: [
            "Golpe de calor por esfuerzo con disfunción del sistema nervioso central.",
            "Fallo del mecanismo de termorregulación del cuerpo (cese de la sudoración).",
            "Shock distributivo con riesgo inminente de fallo multiorgánico."
        ],
        questions: [
            { question: "¿Cuál es la diferencia fisiopatológica clave entre el agotamiento por calor y el golpe de calor?" },
            { question: "¿Por qué el enfriamiento rápido y agresivo es la intervención más crítica en este caso?" },
            { question: "¿Qué métodos de enfriamiento se pueden iniciar eficazmente en el entorno prehospitalario?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales."
        ],
        correctManage: `- Mover al paciente inmediatamente a un ambiente fresco (la sombra o la ambulancia con aire acondicionado).\n- Quitar la mayor cantidad de ropa posible.\n- Iniciar el enfriamiento activo y agresivo: rociar al paciente con agua a temperatura ambiente y ventilarlo para promover la evaporación. Aplicar compresas frías en axilas, ingles, cuello y cabeza.\n- Administrar oxígeno de alto flujo para satisfacer la alta demanda metabólica.\n- Establecer acceso IV para reposición de líquidos, con precaución para no sobrecargar de fluidos.\n- Monitorizar continuamente la temperatura y detener el enfriamiento activo cuando la temperatura central baje a 39°C para evitar la hipotermia iatrogénica.\n- Traslado urgente al hospital.`,
        explanation: "El golpe de calor es una emergencia médica real donde la temperatura corporal central supera los 40°C, causando disfunción del SNC. A diferencia del agotamiento por calor, el cuerpo pierde su capacidad para sudar y enfriarse. El objetivo principal es reducir la temperatura corporal lo más rápido posible, ya que la duración de la hipertermia se correlaciona directamente con la mortalidad. El enfriamiento por evaporación es uno de los métodos más efectivos en el campo."
    },
    {
        id: "pediatria-intoxicacion-12",
        title: "Ingesta accidental de medicamento en preescolar",
        description: "Una madre llama al 911 porque su hijo de 3 años fue encontrado jugando con el frasco de pastillas para la presión de su abuela (un betabloqueador). El niño ahora está somnoliento y pálido.",
        initialAssessment: "Niño letárgico, responde lentamente a la voz de su madre. Piel pálida, fría y ligeramente diaforética. Vía aérea permeable, pero con riesgo por disminución del nivel de conciencia.",
        vitalSigns: {
            FC: "55 lpm",
            TA: "70/40 mmHg",
            FR: "18 rpm",
            SpO2: "96%",
            "Glucosa": "50 mg/dL",
        },
        findings: [
            "Intoxicación por betabloqueadores.",
            "Bradicardia e hipotensión significativas.",
            "Hipoglucemia, un efecto secundario común de los betabloqueadores en niños."
        ],
        questions: [
            { question: "¿Cuáles son los dos efectos cardiovasculares principales de una sobredosis de betabloqueadores?" },
            { question: "¿Por qué los niños son particularmente susceptibles a la hipoglucemia en esta intoxicación?" },
            { question: "¿Cuál es el antídoto de primera línea para la toxicidad severa por betabloqueadores?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Toxicológicas y Pediátricas."
        ],
        correctManage: `- Asegurar y mantener la vía aérea. Administrar oxígeno suplementario.\n- Establecer acceso IV y administrar un bolo de dextrosa (D10 o D25) para corregir la hipoglucemia.\n- Administrar un bolo de solución salina para tratar la hipotensión.\n- Si la bradicardia y la hipotensión persisten, administrar Glucagón IV según protocolo, ya que actúa como un inotrópico y cronotrópico positivo sin depender de los receptores beta.\n- Monitorización cardíaca continua y traslado urgente a un centro pediátrico.`,
        explanation: "Los betabloqueadores antagonizan los receptores beta-adrenérgicos, causando bradicardia (efecto cronotrópico negativo) e hipotensión (efecto inotrópico negativo). En los niños, también inhiben la glucogenólisis, lo que puede llevar a una hipoglucemia severa. Mientras que la atropina puede ser ineficaz, el glucagón es el antídoto de elección porque estimula la producción de AMPc a través de una vía diferente a los receptores beta, aumentando así la frecuencia y contractilidad cardíaca."
    },
    {
        id: "obstetricia-preeclampsia-13",
        title: "Cefalea y trastornos visuales en paciente embarazada",
        description: "Mujer de 32 años con 36 semanas de gestación llama por una cefalea intensa que no mejora con analgésicos, visión de 'luces parpadeantes' y dolor en la parte superior derecha del abdomen.",
        initialAssessment: "Paciente consciente y alerta, pero ansiosa. Se observa edema facial y en manos (los anillos le aprietan). Dolor a la palpación en el hipocondrio derecho. Reflejos osteotendinosos exaltados (hiperreflexia).",
        vitalSigns: {
            FC: "95 lpm",
            TA: "165/110 mmHg",
            FR: "20 rpm",
            SpO2: "98%",
        },
        findings: [
            "Preeclampsia con datos de severidad.",
            "Riesgo inminente de convulsión (eclampsia) y síndrome de HELLP.",
            "La cefalea, los trastornos visuales y el dolor epigástrico son signos de alarma."
        ],
        questions: [
            { question: "¿Qué define a la preeclampsia y qué la diferencia de la hipertensión gestacional?" },
            { question: "¿Cuál es el tratamiento definitivo para la preeclampsia severa?" },
            { question: "En el entorno prehospitalario, ¿cuál es la prioridad en el manejo de esta paciente?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Obstétricas."
        ],
        correctManage: `- Asegurar un ambiente tranquilo y con pocos estímulos para reducir el riesgo de convulsiones.\n- Colocar a la paciente en decúbito lateral izquierdo para mejorar el retorno venoso y la perfusión placentaria.\n- Administrar oxígeno suplementario.\n- Establecer acceso IV para una posible administración de sulfato de magnesio en el hospital (o en campo si el protocolo lo permite para prevenir convulsiones).\n- Monitorización continua de la presión arterial y estar preparado para manejar una convulsión eclámptica.\n- Traslado rápido y gentil a un centro obstétrico.`,
        explanation: "La preeclampsia es un trastorno hipertensivo multisistémico del embarazo. Los datos de severidad indican una disfunción orgánica significativa y un alto riesgo de progresar a eclampsia (convulsiones) o síndrome de HELLP (hemólisis, enzimas hepáticas elevadas, plaquetas bajas). El manejo prehospitalario se centra en la prevención de convulsiones y el control de la hipertensión, siendo el parto del bebé y la placenta el único tratamiento curativo."
    },
    {
        id: "gastro-sangrado-14",
        title: "Vómito con sangre y debilidad en paciente cirrótico",
        description: "Hombre de 58 años con antecedentes de cirrosis hepática por alcoholismo es encontrado por su familia débil y mareado después de vomitar una gran cantidad de sangre roja brillante.",
        initialAssessment: "Paciente pálido, con la piel fría y húmeda. Ictericia (coloración amarilla) en esclerótica. Abdomen distendido (ascitis). Responde a estímulos verbales pero está confundido. Olor a alcohol en el aliento.",
        vitalSigns: {
            FC: "125 lpm (filiforme)",
            TA: "80/40 mmHg",
            FR: "26 rpm",
            SpO2: "92%",
        },
        findings: [
            "Hemorragia digestiva alta masiva, probablemente por várices esofágicas rotas.",
            "Shock hipovolémico descompensado.",
            "Estado mental alterado por hipoperfusión cerebral y/o encefalopatía hepática."
        ],
        questions: [
            { question: "¿Qué son las várices esofágicas y por qué se forman en pacientes con cirrosis?" },
            { question: "¿Por qué una hemorragia por várices esofágicas es tan peligrosa y tiene una alta mortalidad?" },
            { question: "¿Cuál es la prioridad absoluta en el manejo de este paciente?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Gastrointestinales y Urológicas."
        ],
        correctManage: `- Manejo agresivo de la vía aérea: colocar al paciente en posición de recuperación y tener lista la aspiración. Considerar la intubación temprana por el alto riesgo de aspiración masiva de sangre.\n- Administrar oxígeno de alto flujo.\n- Establecer dos accesos IV de gran calibre (16G o mayor) e iniciar una reanimación agresiva con cristaloides para tratar el shock.\n- Notificar al hospital receptor sobre una hemorragia digestiva masiva para que puedan activar el protocolo de transfusión masiva.\n- Traslado emergente a un centro con capacidad de endoscopia y cuidados intensivos.`,
        explanation: "La cirrosis causa hipertensión portal, lo que provoca la dilatación de las venas en el esófago (várices). Estas venas son frágiles y pueden romperse, causando una hemorragia catastrófica. El manejo se centra en proteger la vía aérea del vómito sanguíneo y reponer agresivamente el volumen perdido para tratar el shock hipovolémico. Estos pacientes a menudo tienen coagulopatías, lo que complica aún más el control de la hemorragia."
    },
    {
        id: "psiquiatria-suicidio-15",
        title: "Paciente con ideación suicida activa",
        description: "Adolescente de 17 años llama a una línea de crisis y expresa su deseo de 'terminar con todo'. Menciona que tiene un plan y acceso a medicamentos. El operador de la línea de crisis solicita una unidad de emergencias.",
        initialAssessment: "El paciente está en su habitación, llorando y angustiado. Verbaliza sentimientos de desesperanza. Confirma que ha pensado en tomar una sobredosis de los analgésicos de su padre y los tiene en su poder. La escena es segura.",
        vitalSigns: {
            FC: "100 lpm",
            TA: "120/80 mmHg",
            FR: "18 rpm",
            SpO2: "99%",
        },
        findings: [
            "Ideación suicida con plan y medios.",
            "Alto riesgo de intento de suicidio inminente.",
            "Necesidad de un entorno seguro y una evaluación psiquiátrica urgente."
        ],
        questions: [
            { question: "¿Cuáles son los factores de riesgo más importantes a evaluar en un paciente con ideación suicida?" },
            { question: "¿Cómo se debe abordar la conversación con un paciente que expresa deseos de morir?" },
            { question: "¿Cuál es la responsabilidad legal y ética del paramédico en esta situación?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Psiquiátricas."
        ],
        correctManage: `- Establecer una relación de confianza y empatía. Escuchar activamente sin juzgar.\n- Evaluar directamente el riesgo: preguntar sobre el plan, los medios, la intención y si ha habido intentos previos.\n- Asegurar el entorno: con el permiso del paciente o la familia, retirar los medios letales (en este caso, los medicamentos).\n- Expresar claramente la preocupación por su seguridad y la necesidad de una evaluación adicional.\n- Persuadir al paciente para que acepte el traslado voluntario a un servicio de urgencias para una evaluación de salud mental.\n- Si el paciente se niega y representa un peligro inminente para sí mismo, se debe considerar una retención involuntaria para el transporte según las leyes locales y con apoyo policial si es necesario.`,
        explanation: "Evaluar a un paciente con ideación suicida es una de las tareas más delicadas. La prioridad es garantizar la seguridad del paciente. Esto implica una comunicación empática para establecer una alianza terapéutica y una evaluación directa del riesgo. El objetivo es facilitar el acceso del paciente a la atención de salud mental, ya sea de forma voluntaria o, si es absolutamente necesario para proteger su vida, de forma involuntaria. Nunca se debe dejar solo a un paciente con alto riesgo de suicidio."
    },
    {
        id: "trauma-quemadura-16",
        title: "Quemadura por líquido hirviendo en un niño",
        description: "Un niño de 4 años tira accidentalmente una olla de agua hirviendo sobre su pecho y abdomen. Los padres le quitaron la ropa y lo envolvieron en una toalla.",
        initialAssessment: "Niño llorando desconsoladamente por el dolor. Se observan quemaduras de segundo grado (ampollas y piel enrojecida) en el pecho y la parte superior del abdomen. No hay compromiso de la vía aérea.",
        vitalSigns: {
            FC: "140 lpm",
            FR: "30 rpm",
            TA: "90/50 mmHg",
            SpO2: "99%",
        },
        findings: [
            "Quemadura por escaldadura de segundo grado.",
            "Superficie corporal quemada (SCQ) de aproximadamente 10-12%.",
            "Dolor severo y riesgo de hipotermia e infección."
        ],
        questions: [
            { question: "¿Cuál es el primer paso y el más importante en el manejo de una quemadura térmica?" },
            { question: "Utilizando la 'regla de los nueves' adaptada para niños o la palma de la mano del paciente, ¿cómo se estima la SCQ?" },
            { question: "¿Por qué los niños pequeños tienen un mayor riesgo de hipotermia después de una quemadura?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Lesiones por Quemaduras."
        ],
        correctManage: `- Detener el proceso de la quemadura enfriando la zona con agua corriente a temperatura ambiente durante al menos 10 minutos. No usar hielo.\n- Cubrir la quemadura con apósitos estériles y secos o una sábana limpia y seca para prevenir la infección y la pérdida de calor.\n- Manejar el dolor de forma agresiva con analgésicos intranasales o intravenosos según el protocolo pediátrico.\n- Mantener al paciente abrigado con mantas para prevenir la hipotermia.\n- Iniciar la reposición de líquidos IV si la SCQ es >10%, utilizando la fórmula de Parkland como guía.\n- Trasladar a un centro con capacidad para tratar quemaduras pediátricas.`,
        explanation: "El manejo inicial de las quemaduras se centra en detener el daño tisular, aliviar el dolor, prevenir la infección y evitar la hipotermia. Los niños tienen una mayor superficie corporal en relación con su masa, lo que los hace más susceptibles a la pérdida de calor y a la deshidratación. El cálculo preciso de la SCQ es fundamental para guiar la reanimación con líquidos y determinar la necesidad de un centro especializado en quemaduras."
    },
    {
        id: "trauma-aplastamiento-17",
        title: "Trabajador atrapado bajo un objeto pesado",
        description: "Un trabajador de la construcción de 45 años ha tenido ambas piernas atrapadas bajo una losa de concreto que cayó hace aproximadamente 45 minutos. Los equipos de rescate están a punto de liberarlo.",
        initialAssessment: "Paciente consciente y alerta, con dolor intenso. Las piernas están pálidas y frías al tacto distalmente. El pulso pedio no es palpable. Se anticipa la liberación en los próximos minutos.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "105/70 mmHg",
            FR: "22 rpm",
            SpO2: "98%",
        },
        findings: [
            "Síndrome de aplastamiento con atrapamiento prolongado.",
            "Isquemia en las extremidades inferiores.",
            "Riesgo inminente de síndrome de reperfusión al ser liberado."
        ],
        questions: [
            { question: "¿Qué es el síndrome de reperfusión y por qué es tan peligroso?" },
            { question: "¿Qué intervenciones médicas deben realizarse ANTES de que se libere la presión sobre las extremidades?" },
            { question: "¿Qué arritmia cardíaca es más probable que ocurra inmediatamente después de la liberación?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma de Tejidos Blandos."
        ],
        correctManage: `- ANTES de la liberación: establecer dos accesos IV de gran calibre e iniciar una reanimación agresiva con bolos de solución salina normal para aumentar el volumen intravascular.\n- Administrar Bicarbonato de Sodio IV según protocolo para alcalinizar la sangre y proteger contra la hiperkalemia y la acidosis.\n- Considerar la administración de Albuterol nebulizado, ya que puede ayudar a desplazar el potasio hacia el interior de las células.\n- Colocar al paciente en un monitor cardíaco antes de la liberación.\n- INMEDIATAMENTE después de la liberación: continuar la reanimación con líquidos, monitorizar el ritmo cardíaco en busca de ondas T picudas (hiperkalemia) y arritmias ventriculares. Estar preparado para administrar Cloruro de Calcio si hay signos de toxicidad cardíaca por potasio.`,
        explanation: "Durante el aplastamiento, los músculos isquémicos acumulan productos de desecho tóxicos (potasio, mioglobina, ácido láctico). Al liberar la presión, estas sustancias inundan la circulación sistémica (síndrome de reperfusión), causando acidosis metabólica, hiperkalemia (que puede provocar arritmias fatales como la fibrilación ventricular) y lesión renal aguda por la mioglobina. El tratamiento anticipatorio antes de la liberación es clave para mitigar estos efectos potencialmente letales."
    },
    {
        id: "ambiental-age-18",
        title: "Convulsiones y pérdida de conciencia tras emerger del buceo",
        description: "Buzo de 40 años asciende de emergencia desde 20 metros por un problema con su equipo. Al llegar a la superficie, se queja de mareos y dolor torácico, y a los pocos minutos sufre una convulsión y pierde la conciencia.",
        initialAssessment: "Paciente inconsciente, con respiración agónica. Cianosis central. Se observa enfisema subcutáneo en el cuello y la parte superior del tórax. No responde a estímulos.",
        vitalSigns: {
            FC: "130 lpm (irregular)",
            TA: "80/40 mmHg",
            FR: "6 rpm (agonal)",
            SpO2: "80%",
        },
        findings: [
            "Embolia gaseosa arterial (EGA) por barotrauma pulmonar.",
            "Burbujas de aire en la circulación arterial, causando isquemia cerebral (convulsiones, ACV) y cardíaca (infarto).",
            "Emergencia de buceo más grave y de inicio más rápido."
        ],
        questions: [
            { question: "¿Cuál es el mecanismo fisiopatológico del barotrauma pulmonar y la embolia gaseosa arterial?" },
            { question: "¿Qué diferencia a la EGA de la enfermedad por descompresión en términos de tiempo de inicio y gravedad?" },
            { question: "¿Por qué el traslado inmediato a una cámara hiperbárica es aún más urgente en la EGA que en la EDC?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales.",
            "Divers Alert Network (DAN) Guidelines."
        ],
        correctManage: `- Manejo inmediato y agresivo de la vía aérea y la ventilación (ABC). Iniciar ventilación con BVM y oxígeno al 100%.\n- Colocar al paciente en posición supina. La posición de Trendelenburg ya no se recomienda de forma rutinaria.\n- Establecer acceso IV y administrar líquidos para tratar la hipotensión.\n- Cargar y trasladar de inmediato. Notificar al hospital y a la red de emergencias de buceo (DAN) para coordinar el traslado a la cámara hiperbárica más cercana.\n- La terapia de recompresión es el único tratamiento definitivo y debe iniciarse lo antes posible.`,
        explanation: "La EGA ocurre cuando un buzo asciende conteniendo la respiración, lo que provoca la sobreexpansión y ruptura de los alvéolos (barotrauma). El aire de los pulmones pasa directamente a la circulación arterial, formando émbolos gaseosos que viajan al cerebro, el corazón y otros órganos, causando un daño isquémico masivo. A diferencia de la EDC que tarda minutos u horas en manifestarse, la EGA es inmediata y a menudo fatal si no se trata con recompresión urgente para reducir el tamaño de las burbujas."
    },
    {
        id: "infecciosas-meningitis-19",
        title: "Fiebre, cefalea y rigidez de cuello en estudiante universitario",
        description: "Joven de 19 años que vive en una residencia estudiantil es traído por sus compañeros. Presenta fiebre alta, cefalea intensa, fotofobia y vómitos desde esta mañana. Se siente muy rígido.",
        initialAssessment: "Paciente letárgico, pero responde a la voz. Se queja de dolor de cabeza severo. Presenta rigidez de nuca (no puede tocar el pecho con el mentón). Se observa una erupción petequial/purpúrica que no palidece con la presión en el torso y las piernas.",
        vitalSigns: {
            FC: "120 lpm",
            TA: "90/50 mmHg",
            FR: "24 rpm",
            SpO2: "95%",
            "Temp": "40.0°C",
        },
        findings: [
            "Meningitis bacteriana meningocócica (meningococcemia).",
            "Sepsis meningocócica con shock séptico.",
            "La erupción purpúrica es un signo ominoso de coagulación intravascular diseminada (CID)."
        ],
        questions: [
            { question: "¿Qué son los signos de Kernig y Brudzinski y qué indican?" },
            { question: "¿Por qué la meningitis bacteriana es una emergencia médica de tiempo crítico?" },
            { question: "¿Qué precauciones de bioseguridad debe tomar el equipo de emergencias?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Enfermedades Infecciosas."
        ],
        correctManage: `- Tomar precauciones de gotas: usar una mascarilla quirúrgica en el paciente y en el personal de atención.\n- Administrar oxígeno de alto flujo.\n- Establecer acceso IV e iniciar una reanimación agresiva con líquidos para tratar el shock séptico.\n- Administrar antibióticos IV lo antes posible si el protocolo local lo permite.\n- Monitorización continua del estado neurológico (riesgo de convulsiones y aumento de la PIC) y hemodinámico.\n- Traslado urgente al hospital, notificando una alta sospecha de meningitis meningocócica para que se inicien los protocolos de aislamiento.`,
        explanation: "La meningitis meningocócica es una infección bacteriana grave de las meninges que puede progresar rápidamente a sepsis, shock y muerte en cuestión de horas. La erupción purpúrica indica sangrado debajo de la piel debido al daño vascular y la CID, y es un signo de enfermedad grave. El tratamiento inmediato con antibióticos y el soporte hemodinámico agresivo son cruciales para la supervivencia. Debido a su naturaleza contagiosa, es vital que el personal tome precauciones de gotas."
    },
    {
        id: "necesidades-especiales-20",
        title: "Crisis respiratoria en paciente con distrofia muscular",
        description: "Se recibe una llamada para un paciente de 22 años con distrofia muscular de Duchenne que presenta dificultad respiratoria progresiva. Utiliza un ventilador no invasivo (BiPAP) por la noche, pero ahora se siente 'sin aire' incluso con la máquina.",
        initialAssessment: "Paciente en silla de ruedas, consciente y ansioso. Habla con frases de una o dos palabras. Uso de músculos accesorios del cuello. Respiración abdominal paradójica (el abdomen se hunde durante la inspiración). Secreciones audibles en la vía aérea.",
        vitalSigns: {
            FC: "115 lpm",
            TA: "130/80 mmHg",
            FR: "30 rpm (superficial)",
            SpO2: "88% (con su BiPAP encendido)",
        },
        findings: [
            "Insuficiencia respiratoria aguda en un paciente con enfermedad neuromuscular crónica.",
            "Debilidad de los músculos respiratorios e incapacidad para manejar las secreciones.",
            "Fallo del soporte ventilatorio no invasivo."
        ],
        questions: [
            { question: "¿Por qué los pacientes con distrofia muscular avanzada desarrollan insuficiencia respiratoria?" },
            { question: "¿Qué es la respiración paradójica y qué indica en este paciente?" },
            { question: "¿Cuál es la intervención más importante para ayudar a este paciente a respirar mejor en el campo?" }
        ],
        references: [
            "Manual de Cuidados de Emergencia para Pacientes con Necesidades Especiales."
        ],
        correctManage: `- Sentar al paciente en una posición erguida para maximizar la excursión diafragmática.\n- Ayudar al paciente a manejar las secreciones con aspiración oral o nasofaríngea, o mediante técnicas de tos asistida si el personal está entrenado.\n- Quitar el BiPAP del paciente y comenzar la ventilación con presión positiva asistida usando una bolsa-válvula-mascarilla (BVM) sincronizada con los esfuerzos inspiratorios del paciente. Esto proporciona un mayor volumen corriente y alivia el trabajo respiratorio.\n- Administrar oxígeno suplementario a través del reservorio de la BVM.\n- Traslado a un hospital con capacidad para manejar pacientes con ventilación crónica.`,
        explanation: "En la distrofia muscular de Duchenne, los músculos respiratorios, incluido el diafragma, se debilitan progresivamente. Esto conduce a una hipoventilación crónica y a una tos ineficaz, lo que dificulta la eliminación de secreciones. La insuficiencia respiratoria aguda a menudo es precipitada por una infección respiratoria. La ventilación asistida con BVM es una intervención que salva vidas, ya que toma el control del trabajo respiratorio que los músculos fatigados del paciente ya no pueden realizar."
    },
    {
        id: "trauma-torax-abierto-21",
        title: "Herida penetrante en tórax con burbujeo",
        description: "Hombre de 25 años recibe una herida por arma blanca en el hemitórax izquierdo durante un asalto. A tu llegada, está ansioso, con dificultad respiratoria, y se escucha un sonido de succión en la herida cada vez que respira.",
        initialAssessment: "Paciente consciente, en posición sentada, luchando por respirar. Se observa una herida de aproximadamente 3 cm en la línea axilar anterior izquierda, que burbujea con la inspiración. Ruidos respiratorios disminuidos en el lado izquierdo.",
        vitalSigns: {
            FC: "130 lpm",
            TA: "95/60 mmHg",
            FR: "32 rpm",
            SpO2: "89% (aire ambiente)",
        },
        findings: [
            "Neumotórax abierto (herida torácica succionante).",
            "Compromiso de la ventilación y la oxigenación.",
            "Alto riesgo de progresión a un neumotórax a tensión."
        ],
        questions: [
            { question: "¿Cuál es la fisiopatología de una herida torácica succionante y por qué compromete la respiración?" },
            { question: "¿Cómo se debe aplicar correctamente un sello torácico oclusivo de tres lados y cuál es su propósito?" },
            { question: "¿Qué signos indicarían que el neumotórax abierto ha evolucionado a un neumotórax a tensión después de colocar el sello?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Torácico.",
            "AAOS 11ª Edición - Capítulo de Trauma Torácico."
        ],
        correctManage: `- Administrar oxígeno de alto flujo inmediatamente.\n- Aplicar un sello torácico oclusivo (comercial o improvisado con plástico y cinta adhesiva) sobre la herida, sellando tres de los cuatro lados. El lado no sellado debe permitir que el aire escape durante la espiración.\n- Monitorizar de cerca la función respiratoria y los signos vitales. Si el paciente desarrolla hipotensión, mayor dificultad respiratoria, distensión yugular o desviación traqueal, se debe levantar el sello para liberar la presión acumulada (posible neumotórax a tensión).\n- Establecer acceso IV para reposición de líquidos.\n- Traslado urgente a un centro de trauma.`,
        explanation: "Un neumotórax abierto permite que el aire entre en el espacio pleural a través de la herida en la pared torácica, igualando la presión con la atmosférica y causando el colapso del pulmón. Un sello de tres lados actúa como una válvula unidireccional: previene la entrada de aire durante la inspiración pero permite que el aire atrapado salga durante la espiración, evitando la acumulación de presión y la conversión a un neumotórax a tensión, una condición inmediatamente mortal."
    },
    {
        id: "ambiental-serpiente-22",
        title: "Mordedura de serpiente en una extremidad",
        description: "Una excursionista de 30 años es mordida en el tobillo por una serpiente mientras caminaba por un sendero. La serpiente fue descrita como 'de colores con un cascabel en la cola'. La paciente presenta dolor intenso y edema progresivo.",
        initialAssessment: "Paciente consciente y muy ansiosa. Se observan dos marcas de punción en el maléolo lateral derecho, con edema significativo que se extiende hasta la mitad de la pantorrilla. La zona está equimótica (amoratada).",
        vitalSigns: {
            FC: "115 lpm",
            TA: "100/70 mmHg",
            FR: "20 rpm",
            SpO2: "98%",
        },
        findings: [
            "Envenenamiento por crótalo (víbora de cascabel).",
            "Reacción local severa con edema y daño tisular.",
            "Riesgo de efectos sistémicos como coagulopatía y neurotoxicidad."
        ],
        questions: [
            { question: "¿Qué acciones están absolutamente contraindicadas en el manejo prehospitalario de una mordedura de serpiente?" },
            { question: "¿Cuál es la posición correcta para inmovilizar la extremidad afectada y por qué?" },
            { question: "¿Qué información es crucial obtener y transmitir al hospital receptor?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales: Mordeduras y Picaduras."
        ],
        correctManage: `- Mover a la paciente lejos de la serpiente y asegurar la escena. Mantenerla en calma.\n- Retirar cualquier joya o ropa ajustada de la extremidad afectada.\n- Inmovilizar la extremidad en una posición funcional, a nivel del corazón o ligeramente por debajo. No elevarla.\n- Marcar el borde del edema con un bolígrafo y anotar la hora para monitorear la progresión.\n- NO aplicar hielo, NO hacer incisiones, NO succionar el veneno y NO aplicar un torniquete.\n- Establecer acceso IV en la extremidad no afectada.\n- Trasladar rápidamente a un hospital con disponibilidad de antídoto (suero antiofídico).`,
        explanation: "El veneno de las víboras de foseta, como la serpiente de cascabel, es principalmente hemotóxico y citotóxico, causando destrucción de tejido local y alteraciones de la coagulación. La inmovilización de la extremidad disminuye la propagación linfática del veneno. Las intervenciones como torniquetes o succión pueden empeorar el daño tisular local y son ineficaces. El tratamiento definitivo es la administración de antiveneno, por lo que el traslado rápido es la prioridad."
    },
    {
        id: "obstetricia-distocia-23",
        title: "Parto complicado con cabeza de bebé atorada",
        description: "Atiendes un parto en domicilio. La cabeza del bebé ha salido, pero notas que inmediatamente se retrae contra el perineo ('signo de la tortuga'). Los hombros no salen con la siguiente contracción.",
        initialAssessment: "Primigesta en el segundo período del trabajo de parto. Cabeza del bebé visible pero atorada en el introito vaginal. No hay progreso a pesar del pujo materno. El tiempo es crítico.",
        vitalSigns: {
            "Maternos": "FC: 110 lpm, TA: 130/85 mmHg",
            "Fetales": "Bradicardia fetal visible en monitor si estuviera disponible.",
        },
        findings: [
            "Distocia de hombros, una emergencia obstétrica.",
            "El hombro anterior del bebé está impactado contra la sínfisis del pubis de la madre.",
            "Riesgo extremo de asfixia fetal y lesión del plexo braquial si no se resuelve rápidamente."
        ],
        questions: [
            { question: "¿Qué es el 'signo de la tortuga' y cuál es su significado?" },
            { question: "Describe la secuencia de maniobras (ej. McRoberts, presión suprapúbica) para resolver una distocia de hombros." },
            { question: "¿Por qué está absolutamente contraindicado aplicar presión en el fondo uterino?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Obstétricas.",
            "Protocolo ALSO (Advanced Life Support in Obstetrics)."
        ],
        correctManage: `- Anunciar la emergencia y pedir ayuda adicional. Anotar el tiempo exacto en que salió la cabeza.\n- Realizar la maniobra de McRoberts: pedir a la madre que lleve sus rodillas lo más cerca posible de su pecho (hiperflexión de caderas). Esto aplana el sacro y puede liberar el hombro.\n- Simultáneamente, un segundo rescatador debe aplicar presión suprapúbica firme y continua (no en el fondo) hacia abajo y lateralmente, en un intento de desimpactar el hombro anterior.\n- Si no se resuelve, considerar maniobras internas como la rotación del hombro posterior (maniobra de Woods o Rubin), o la posición de Gaskin (madre en cuatro puntos), si se está entrenado para ello.\n- Estar preparado para una reanimación neonatal agresiva inmediatamente después del nacimiento.`,
        explanation: "La distocia de hombros es una emergencia donde, tras la salida de la cabeza, el hombro anterior del feto queda atrapado. Cada segundo cuenta, ya que el cordón umbilical está comprimido, cortando el suministro de oxígeno al bebé. Las maniobras externas como McRoberts y la presión suprapúbica son efectivas en la mayoría de los casos y pueden ser realizadas en el entorno prehospitalario. La presión fúndica empeora la impactación y puede causar una ruptura uterina."
    },
    {
        id: "toxicologia-estimulantes-24",
        title: "Agitación extrema y dolor torácico en una fiesta",
        description: "Joven de 22 años en una fiesta electrónica presenta agitación severa, paranoia y se queja de un fuerte dolor en el pecho. Sus amigos dicen que consumió 'sales de baño' por primera vez.",
        initialAssessment: "Paciente combativo, diaforético, con movimientos musculares erráticos. Habla incoherentemente. Piel muy caliente al tacto. Pupilas midriáticas (dilatadas).",
        vitalSigns: {
            FC: "150 lpm",
            TA: "190/110 mmHg",
            FR: "28 rpm",
            SpO2: "97%",
            "Temp": "40.5°C",
        },
        findings: [
            "Síndrome simpaticomimético tóxico por sobredosis de catinonas sintéticas ('sales de baño').",
            "Agitación extrema con riesgo de rabdomiólisis.",
            "Emergencia hipertensiva y taquicardia severa con posible isquemia miocárdica."
        ],
        questions: [
            { question: "¿Qué efectos fisiológicos causa una sobredosis de estimulantes del sistema nervioso central?" },
            { question: "¿Por qué el dolor torácico en este contexto es una emergencia que debe tomarse en serio?" },
            { question: "¿Cuál es el tratamiento farmacológico de elección para controlar la agitación y la hipertensión en esta intoxicación?" }
        ],
        references: [
            "Goldfrank's Toxicologic Emergencies, 11th Edition."
        ],
        correctManage: `- La seguridad de la escena es lo primero; solicitar apoyo policial si es necesario.\n- Iniciar enfriamiento agresivo debido a la hipertermia severa.\n- Administrar oxígeno de alto flujo.\n- Establecer acceso IV. El tratamiento de elección es la sedación agresiva con benzodiacepinas (ej. Midazolam o Diazepam IV), que controlan la agitación, reducen la frecuencia cardíaca y la presión arterial, y previenen las convulsiones.\n- Obtener un ECG de 12 derivaciones para evaluar la isquemia cardíaca.\n- Evitar la restricción física prolongada sin sedación, ya que puede empeorar la hipertermia y la rabdomiólisis.\n- Traslado rápido a un centro de emergencias.`,
        explanation: "Las catinonas sintéticas son potentes estimulantes que provocan una liberación masiva de catecolaminas (adrenalina, noradrenalina), llevando a una toxicidad cardiovascular y neurológica extrema. La hipertensión y taquicardia pueden causar un infarto de miocardio, incluso en pacientes jóvenes. Las benzodiacepinas son el pilar del tratamiento, ya que calman al paciente y contrarrestan la sobreestimulación simpática. Los betabloqueadores están relativamente contraindicados, ya que pueden causar una vasoconstricción coronaria paradójica."
    },
    {
        id: "trauma-facial-25",
        title: "Pérdida de un diente con riesgo de vía aérea",
        description: "Niño de 9 años se cae de su patineta, golpeándose la boca contra el pavimento. Está consciente, pero sangra profusamente por la boca y uno de sus dientes frontales superiores ha desaparecido.",
        initialAssessment: "Niño sentado, escupiendo sangre, muy asustado. Se observa un alvéolo dental vacío y sangrante. No se puede localizar el diente avulsionado. El niño tose y carraspea como si tuviera algo en la garganta.",
        vitalSigns: {
            FC: "120 lpm",
            FR: "24 rpm",
            SpO2: "96%",
        },
        findings: [
            "Avulsión dental traumática.",
            "Alto riesgo de aspiración del diente avulsionado a la vía aérea.",
            "Hemorragia oral activa."
        ],
        questions: [
            { question: "¿Qué signos y síntomas sugieren que un cuerpo extraño (como un diente) ha sido aspirado?" },
            { question: "¿Cómo se debe manejar un diente avulsionado si se encuentra, para preservar su viabilidad?" },
            { question: "¿Cuál es la prioridad en el manejo de este paciente?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Facial y de Cuello."
        ],
        correctManage: `- La prioridad es la evaluación y el manejo de la vía aérea. Mantener al paciente en una posición que facilite el drenaje de la sangre (sentado e inclinado hacia adelante).\n- Animar al paciente a toser con fuerza. Si se desarrolla estridor, dificultad respiratoria severa o cianosis, tratar como una obstrucción de la vía aérea por cuerpo extraño.\n- Auscultar los campos pulmonares en busca de sibilancias unilaterales o disminución de los ruidos respiratorios.\n- Controlar la hemorragia local aplicando una gasa estéril sobre el alvéolo y pidiendo al paciente que muerda suavemente.\n- Si se encuentra el diente, enjuagarlo suavemente con solución salina (sin frotar la raíz) y transportarlo en un recipiente con leche, solución salina o en la propia saliva del paciente.\n- Trasladar al hospital para una radiografía de tórax y una evaluación dental urgente.`,
        explanation: "En un trauma facial con avulsión dental, la preocupación inmediata no es solo salvar el diente, sino asegurar que no haya sido aspirado hacia los pulmones. Un cuerpo extraño en la vía aérea puede causar una obstrucción inmediata o complicaciones tardías como neumonía o abscesos pulmonares. Por lo tanto, el manejo del ABC (Vía Aérea, Respiración, Circulación) tiene prioridad sobre la reimplantación del diente. El manejo adecuado del diente recuperado aumenta las posibilidades de que un dentista pueda reimplantarlo con éxito."
    },
    {
        id: "icc-descompensada-26",
        title: "Edema agudo de pulmón en paciente con insuficiencia cardíaca",
        description: "Mujer de 75 años con antecedentes de insuficiencia cardíaca congestiva (ICC) llama porque despertó con una súbita y extrema falta de aire. No puede acostarse y está tosiendo un esputo rosado y espumoso.",
        initialAssessment: "Paciente sentada en el borde de la cama, en posición de trípode, luchando por respirar. Piel pálida, fría y diaforética. Se auscultan estertores crepitantes en ambos pulmones hasta las escápulas. Presenta distensión yugular.",
        vitalSigns: {
            FC: "125 lpm (irregular, FA)",
            TA: "180/110 mmHg",
            FR: "35 rpm",
            SpO2: "84% (con O2 por puntas nasales a 4 lpm)",
        },
        findings: [
            "Edema agudo de pulmón cardiogénico secundario a una descompensación de ICC.",
            "Insuficiencia respiratoria hipoxémica severa.",
            "Emergencia hipertensiva con sobrecarga de volumen."
        ],
        questions: [
            { question: "¿Qué es la ortopnea y por qué ocurre en pacientes con ICC?" },
            { question: "¿Cuál es el beneficio de la ventilación con presión positiva no invasiva (CPAP/BiPAP) en el edema agudo de pulmón?" },
            { question: "¿Qué efecto tiene la nitroglicerina en estos pacientes?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares."
        ],
        correctManage: `- Colocar al paciente en posición sentada con las piernas colgando para reducir el retorno venoso al corazón (precarga).\n- Administrar oxígeno de alto flujo. Si la hipoxemia no se corrige y el paciente cumple los criterios, iniciar CPAP (Presión Positiva Continua en la Vía Aérea) lo antes posible.\n- Establecer acceso IV.\n- Administrar Nitroglicerina sublingual o en spray, si la presión arterial sistólica es >100 mmHg. Esto reduce la precarga y la poscarga, disminuyendo el trabajo del corazón.\n- Obtener un ECG de 12 derivaciones para descartar un infarto como causa de la descompensación.\n- Traslado rápido al hospital.`,
        explanation: "En el edema agudo de pulmón cardiogénico, el ventrículo izquierdo debilitado no puede bombear eficazmente la sangre, lo que provoca una acumulación de presión y líquido en los pulmones. El CPAP ayuda 'empujando' el líquido fuera de los alvéolos, mejora el intercambio de gases y disminuye el trabajo respiratorio. La nitroglicerina es un venodilatador potente que reduce la cantidad de sangre que regresa al corazón, aliviando la congestión pulmonar. La combinación de estas terapias puede estabilizar rápidamente al paciente."
    },
    {
        id: "sepsis-neutropenica-27",
        title: "Fiebre y letargo en paciente oncológico",
        description: "Paciente de 55 años que recibe quimioterapia por cáncer de mama llama por fiebre de 39°C y una sensación de debilidad extrema. Su última sesión de quimioterapia fue hace 7 días.",
        initialAssessment: "Paciente pálida, letárgica, pero responde coherentemente. Piel caliente y seca. No se identifica una fuente obvia de infección en el examen físico inicial (pulmones limpios, sin dolor abdominal).",
        vitalSigns: {
            FC: "120 lpm",
            TA: "90/50 mmHg",
            FR: "24 rpm",
            SpO2: "95% (aire ambiente)",
            "Temp": "39.1°C",
        },
        findings: [
            "Alta sospecha de neutropenia febril, una emergencia oncológica.",
            "Shock séptico incipiente.",
            "El sistema inmunitario del paciente está severamente comprometido, lo que lo hace vulnerable a infecciones masivas."
        ],
        questions: [
            { question: "¿Qué es la neutropenia y por qué la quimioterapia la causa?" },
            { question: "¿Por qué una fiebre en un paciente neutropénico se considera una emergencia potencialmente mortal?" },
            { question: "Además de los signos vitales, ¿qué información sobre el historial del paciente es crucial comunicar al hospital?" }
        ],
        references: [
            "Oncology Nursing Society (ONS) guidelines for febrile neutropenia."
        ],
        correctManage: `- Colocar una mascarilla quirúrgica al paciente para protegerlo de patógenos externos.\n- Administrar oxígeno para mantener una saturación >94%.\n- Establecer acceso IV e iniciar una reanimación con líquidos (bolo de solución salina) para tratar la hipotensión y mejorar la perfusión.\n- Notificar al hospital receptor sobre una sospecha de 'neutropenia febril' para que puedan preparar antibióticos de amplio espectro para su administración inmediata a la llegada.\n- Monitorización continua y traslado urgente a un centro con capacidad oncológica.`,
        explanation: "La quimioterapia destruye las células de división rápida, incluyendo los neutrófilos, que son la principal defensa del cuerpo contra las bacterias. La neutropenia febril es la combinación de un recuento bajo de neutrófilos y fiebre. En estos pacientes, una infección puede propagarse sin control y llevar a un shock séptico fatal en cuestión de horas. El tratamiento se basa en la reanimación hemodinámica y la administración empírica e inmediata de antibióticos potentes. El tiempo es un factor crítico para la supervivencia."
    },
    {
        id: "acv-posterior-28",
        title: "Vértigo súbito, vómitos y dificultad para caminar",
        description: "Hombre de 68 años con antecedentes de hipertensión presenta un inicio súbito de vértigo severo, vómitos incontrolables y ataxia (incapacidad para caminar o coordinar movimientos). Niega debilidad facial o en brazos.",
        initialAssessment: "Paciente consciente, pero muy mareado e incapaz de sentarse o ponerse de pie sin ayuda. Presenta nistagmo (movimientos oculares rítmicos e involuntarios). Habla sin dificultad, pero su coordinación es pobre.",
        vitalSigns: {
            FC: "80 lpm",
            TA: "175/95 mmHg",
            FR: "16 rpm",
            SpO2: "97%",
            "Glucosa": "120 mg/dL",
        },
        findings: [
            "Sospecha de un Accidente Cerebrovascular (ACV) de la circulación posterior (cerebeloso o del tronco encefálico).",
            "Los '5 D's' de la circulación posterior: Dizziness (mareo/vértigo), Diplopia (visión doble), Dysarthria (disartria), Dysphagia (disfagia), Dystaxia (ataxia).",
            "Las escalas de ACV convencionales como FAST/Cincinnati pueden ser negativas."
        ],
        questions: [
            { question: "¿Por qué las escalas de ACV comunes pueden no detectar un ACV de la circulación posterior?" },
            { question: "¿Qué es la ataxia y por qué es un signo neurológico alarmante?" },
            { question: "Además de un ACV, ¿cuál es el principal diagnóstico diferencial para el vértigo agudo?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Neurológicas."
        ],
        correctManage: `- Manejar los síntomas: colocar al paciente en una posición cómoda, administrar un antiemético (ej. Ondansetrón) IV para controlar los vómitos.\n- Proteger de caídas debido a la ataxia severa.\n- Establecer acceso IV y realizar una glucometría capilar.\n- A pesar de que la escala FAST puede ser negativa, tratar como una emergencia de ACV ('Código Ictus') basado en los hallazgos clínicos.\n- Comunicar claramente al hospital receptor la sospecha de un ACV posterior para que preparen los recursos de neuroimagen adecuados (TC/AngioTC o RMN).\n- Traslado rápido y seguro a un centro con capacidad para tratar ACV.`,
        explanation: "Los ACV de la circulación posterior afectan al cerebelo y al tronco encefálico, áreas que controlan el equilibrio, la coordinación y funciones vitales. Los síntomas pueden ser sutiles y no incluir la debilidad unilateral clásica, lo que lleva a un diagnóstico erróneo. Sin embargo, estos ACV son peligrosos porque pueden causar edema e hidrocefalia obstructiva, llevando a un rápido deterioro neurológico. Reconocer los signos y activar el protocolo de ACV es crucial."
    },
    {
        id: "dolor-abdominal-aaa-29",
        title: "Dolor abdominal y de espalda súbito en adulto mayor",
        description: "Hombre de 72 años, fumador y con hipertensión, experimenta un dolor súbito y desgarrador en el abdomen que se irradia a la espalda baja. Se siente mareado y débil.",
        initialAssessment: "Paciente pálido, frío y diaforético. Se queja de dolor severo. A la palpación abdominal, se siente una masa pulsátil y firme en la región periumbilical. Los pulsos pedios son muy débiles bilateralmente.",
        vitalSigns: {
            FC: "130 lpm (filiforme)",
            TA: "85/50 mmHg",
            FR: "28 rpm",
            SpO2: "93%",
        },
        findings: [
            "Alta sospecha de ruptura de un Aneurisma de Aorta Abdominal (AAA).",
            "Shock hipovolémico hemorrágico profundo.",
            "Tríada clásica: dolor, hipotensión y masa abdominal pulsátil."
        ],
        questions: [
            { question: "¿Qué factores de riesgo están fuertemente asociados con el desarrollo de un AAA?" },
            { question: "¿Por qué está contraindicada la palpación abdominal vigorosa en este paciente?" },
            { question: "Explica el concepto de 'hipotensión permisiva' en el manejo de este tipo de hemorragia." }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Gastrointestinales y Urológicas.",
            "PHTLS 9ª Edición - Capítulo de Shock."
        ],
        correctManage: `- Manejar al paciente con extrema gentileza para evitar aumentar la presión y el sangrado. No permitir que se siente o se esfuerce.\n- Administrar oxígeno de alto flujo.\n- Establecer dos accesos IV de gran calibre (16G o mayor), preferiblemente en las extremidades superiores.\n- Iniciar la reanimación con líquidos de forma cautelosa. El objetivo es la 'hipotensión permisiva': administrar bolos pequeños de solución salina para mantener un pulso radial presente o una presión arterial sistólica de 80-90 mmHg, lo suficiente para perfundir los órganos vitales sin desalojar el coágulo formado.\n- NO intentar normalizar la presión arterial.\n- Traslado emergente e inmediato a un centro con capacidad de cirugía vascular urgente.`,
        explanation: "Un AAA es una dilatación de la aorta abdominal. Su ruptura es una catástrofe quirúrgica con una hemorragia masiva en el retroperitoneo. La palpación vigorosa puede romper el coágulo contenido y provocar una exanguinación. La hipotensión permisiva es una estrategia para evitar que una presión arterial alta 'reviente' el coágulo que está limitando la hemorragia. El único tratamiento definitivo es la reparación quirúrgica de emergencia, por lo que el tiempo de traslado es el factor más crítico."
    },
    {
        id: "rabdomiolisis-esfuerzo-30",
        title: "Colapso y orina oscura tras ejercicio intenso",
        description: "Un hombre de 25 años, fuera de forma, colapsa después de completar una sesión de entrenamiento funcional de alta intensidad (CrossFit) por primera vez. Se queja de dolor muscular extremo y náuseas, y nota que su orina es de color 'té' o 'Coca-Cola'.",
        initialAssessment: "Paciente consciente, pero exhausto y con dolor muscular generalizado. Músculos de los muslos y la espalda están tensos y muy sensibles al tacto. Piel caliente y seca.",
        vitalSigns: {
            FC: "125 lpm",
            TA: "100/60 mmHg",
            FR: "24 rpm",
            SpO2: "97%",
        },
        findings: [
            "Rabdomiólisis por esfuerzo.",
            "Deshidratación y posible lesión renal aguda.",
            "La orina oscura (mioglobinuria) es el signo clínico clave."
        ],
        questions: [
            { question: "¿Qué es la rabdomiólisis y qué sustancias se liberan al torrente sanguíneo?" },
            { question: "¿Por qué la mioglobina es tóxica para los riñones?" },
            { question: "¿Cuál es el objetivo principal de la reanimación con líquidos en la rabdomiólisis?" }
        ],
        references: [
            "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9th Edition."
        ],
        correctManage: `- Iniciar la reanimación agresiva con líquidos intravenosos. Administrar un bolo inicial de solución salina normal (ej. 1-2 litros) para promover la diuresis y 'lavar' los riñones.\n- Administrar oxígeno si es necesario.\n- Manejar el dolor y las náuseas con medicación IV.\n- Monitorización cardíaca, ya que la lisis celular puede liberar potasio y causar hiperkalemia.\n- Traslado al hospital para continuar la fluidoterapia, monitorizar la función renal y los niveles de creatina quinasa (CK).`,
        explanation: "La rabdomiólisis es la destrucción masiva del músculo esquelético, que libera su contenido intracelular (mioglobina, potasio, creatina quinasa) a la sangre. La mioglobina es una proteína grande que obstruye los túbulos renales, causando una lesión renal aguda. El pilar del tratamiento es la reanimación agresiva con líquidos intravenosos para forzar la diuresis y eliminar la mioglobina, protegiendo así los riñones de un daño permanente."
    },
    {
        id: "iam-mujer-31",
        title: "Dolor atípico y fatiga en mujer diabética",
        description: "Mujer de 68 años con diabetes tipo 2 llama por una sensación de 'indigestión' severa, fatiga extrema y dificultad para respirar que ha empeorado en las últimas dos horas. Niega tener un dolor torácico clásico.",
        initialAssessment: "Paciente sentada en un sillón, pálida y diaforética. Refiere malestar en el epigastrio y una debilidad abrumadora. No hay dolor a la palpación abdominal. Se auscultan crepitantes leves en las bases pulmonares.",
        vitalSigns: {
            FC: "110 lpm",
            TA: "100/60 mmHg",
            FR: "24 rpm",
            SpO2: "91%",
            "Glucosa": "180 mg/dL",
        },
        findings: [
            "Presentación atípica de Síndrome Coronario Agudo (SCA).",
            "Signos de insuficiencia cardíaca incipiente (crepitantes, hipoxia).",
            "La diabetes y el género femenino aumentan la probabilidad de síntomas atípicos."
        ],
        questions: [
            { question: "¿Cuáles son considerados 'equivalentes anginosos' o síntomas atípicos de un infarto, especialmente en mujeres y diabéticos?" },
            { question: "¿Por qué un ECG de 12 derivaciones es crucial en esta paciente a pesar de la ausencia de dolor torácico clásico?" },
            { question: "¿Qué hallazgo en el ECG buscarías para confirmar un infarto inferior y qué implicaciones tiene para el uso de nitroglicerina?" }
        ],
        references: [
            "AHA Guidelines for Acute Coronary Syndromes in Women.",
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares."
        ],
        correctManage: `- Mantener un alto índice de sospecha de SCA.\n- Administrar oxígeno para mantener SpO₂ >94%.\n- Obtener un ECG de 12 derivaciones lo antes posible. Si muestra elevación del ST, transmitir y activar el código infarto.\n- Administrar 300 mg de aspirina masticable si no hay contraindicaciones.\n- Establecer acceso IV.\n- Ser cauteloso con la nitroglicerina. Si hay un infarto de cara inferior (elevación del ST en II, III, aVF), podría indicar afectación del ventrículo derecho, donde la nitroglicerina está contraindicada por el riesgo de hipotensión severa.\n- Traslado prioritario.`,
        explanation: "Las mujeres, los ancianos y los pacientes diabéticos a menudo no presentan el clásico dolor torácico opresivo durante un infarto. En su lugar, pueden experimentar disnea, fatiga extrema, náuseas o dolor epigástrico. Esta presentación atípica puede retrasar el diagnóstico y el tratamiento. Es vital mantener un alto índice de sospecha y realizar un ECG temprano, ya que es la herramienta diagnóstica clave para identificar la isquemia y guiar la terapia de reperfusión."
    },
    {
        id: "trauma-evisceracion-32",
        title: "Herida penetrante abdominal con evisceración",
        description: "Hombre de 30 años sufre una herida por arma blanca en el cuadrante inferior izquierdo del abdomen durante una pelea. A tu llegada, está acostado en el suelo, sujetándose el abdomen.",
        initialAssessment: "Paciente consciente, pálido y con dolor intenso. Se observa una laceración de aproximadamente 5 cm con una porción de intestino delgado (asas intestinales) protruyendo a través de la herida.",
        vitalSigns: {
            FC: "125 lpm",
            TA: "90/50 mmHg",
            FR: "26 rpm",
            SpO2: "96%",
        },
        findings: [
            "Trauma abdominal penetrante con evisceración.",
            "Shock hipovolémico compensado, probablemente por hemorragia interna.",
            "Alto riesgo de peritonitis e isquemia del tejido eviscerado."
        ],
        questions: [
            { question: "¿Cuál es el procedimiento correcto para manejar el tejido eviscerado en el campo?" },
            { question: "¿Por qué nunca se debe intentar reintroducir los órganos en la cavidad abdominal?" },
            { question: "Además de la herida visible, ¿qué otras lesiones internas deben sospecharse?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Abdominal y Pélvico."
        ],
        correctManage: `- No tocar ni intentar reintroducir el tejido eviscerado.\n- Cubrir los órganos con un apósito estéril grande y húmedo (empapado en solución salina estéril tibia, si es posible).\n- Colocar un apósito oclusivo seco sobre el apósito húmedo para prevenir la pérdida de calor y la contaminación.\n- Colocar al paciente en posición supina con las rodillas flexionadas para reducir la tensión en la pared abdominal.\n- Administrar oxígeno de alto flujo y establecer dos accesos IV de gran calibre para la reanimación con líquidos.\n- Manejo del dolor.\n- Traslado rápido y prioritario a un centro de trauma.`,
        explanation: "Una evisceración es una emergencia quirúrgica. El manejo prehospitalario se centra en proteger los órganos expuestos de la desecación, la pérdida de calor y la contaminación, y en tratar el shock. Intentar reintroducir los órganos podría causar más daño, introducir bacterias en la cavidad peritoneal y enmascarar lesiones subyacentes. El tratamiento definitivo es una laparotomía exploradora en el quirófano."
    },
    {
        id: "pediatria-convulsion-febril-33",
        title: "Primera convulsión en un lactante con fiebre",
        description: "Padres llaman al 911 porque su hija de 18 meses, que ha estado con fiebre y un resfriado, de repente se puso rígida y comenzó a sacudirse. La convulsión duró unos 3 minutos y se detuvo justo a tu llegada.",
        initialAssessment: "Lactante en estado postictal, somnolienta pero se despierta con el estímulo. Piel caliente y enrojecida. Vía aérea permeable, respiración regular. No hay signos de trauma.",
        vitalSigns: {
            FC: "130 lpm",
            FR: "28 rpm",
            SpO2: "98%",
            "Temp (axilar)": "39.4°C",
        },
        findings: [
            "Convulsión febril simple resuelta.",
            "Estado postictal.",
            "Necesidad de descartar una causa infecciosa grave subyacente (ej. meningitis)."
        ],
        questions: [
            { question: "¿Cuáles son las características que definen una convulsión febril 'simple' vs. una 'compleja'?" },
            { question: "En el estado postictal, ¿cuál es la prioridad en la evaluación y manejo del niño?" },
            { question: "¿Por qué, a pesar de ser a menudo benignas, las primeras convulsiones febriles suelen requerir un traslado al hospital?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Pediátricas."
        ],
        correctManage: `- Asegurar la permeabilidad de la vía aérea colocando a la niña en posición de recuperación si está somnolienta.\n- Administrar oxígeno si hay indicación. Evaluar la glucosa en sangre.\n- Iniciar medidas de enfriamiento pasivo: quitar el exceso de ropa y mantas. No se recomienda sumergir en agua fría.\n- Tranquilizar a los padres, que a menudo están muy angustiados, y obtener un historial detallado del evento y la enfermedad.\n- Recomendar y facilitar el traslado al hospital para una evaluación médica completa y descartar causas graves de la fiebre y la convulsión, especialmente al ser el primer episodio.`,
        explanation: "Las convulsiones febriles simples son el tipo más común de convulsión en la infancia (tónico-clónicas generalizadas, duran <15 min, y no se repiten en 24h). Son causadas por un rápido aumento de la temperatura corporal. Aunque la convulsión en sí misma rara vez es dañina, es crucial que un médico evalúe al niño para identificar y tratar la causa de la fiebre y asegurarse de que no se trata de una infección del sistema nervioso central como la meningitis."
    },
    {
        id: "quemadura-quimica-34",
        title: "Salpicadura de químico en los ojos y la cara",
        description: "Un trabajador de laboratorio de 28 años sufre una salpicadura accidental de un líquido alcalino (hidróxido de sodio) en la cara y ambos ojos. Se queja de dolor intenso y visión borrosa.",
        initialAssessment: "Paciente de pie junto a una estación de lavado de ojos, con espasmo palpebral severo (blefaroespasmo) y enrojecimiento facial. Es incapaz de abrir los ojos debido al dolor. La piel de la cara está roja y parece resbaladiza.",
        vitalSigns: {
            FC: "120 lpm",
            TA: "140/90 mmHg",
            FR: "22 rpm",
        },
        findings: [
            "Quemadura química ocular y facial severa por un agente alcalino.",
            "Amenaza inmediata para la visión.",
            "El dolor intenso y el blefaroespasmo dificultan la irrigación."
        ],
        questions: [
            { question: "¿Por qué las quemaduras por álcalis son generalmente más peligrosas para los ojos que las quemaduras por ácidos?" },
            { question: "¿Cuál es la intervención más importante y de tiempo crítico en el manejo de una quemadura química ocular?" },
            { question: "¿Durante cuánto tiempo se debe irrigar el ojo afectado en el campo?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Facial y Ocular."
        ],
        correctManage: `- Iniciar la irrigación ocular INMEDIATAMENTE y de forma continua. No retrasar la irrigación para buscar otros equipos o tomar signos vitales.\n- Usar solución salina normal o Ringer lactato a través de una línea de IV con una cánula de Morgan si está disponible, o simplemente vertiendo el líquido desde la nariz hacia afuera del ojo afectado.\n- La irrigación debe ser copiosa y continua durante al menos 20-30 minutos en el campo y durante todo el transporte.\n- Puede ser necesario ayudar al paciente a mantener los párpados abiertos.\n- Después de la irrigación inicial, retirar cualquier partícula sólida visible con un hisopo húmedo.\n- Cubrir ambos ojos (incluso si solo uno está afectado) para reducir el movimiento ocular y el dolor durante el transporte.`,
        explanation: "Las quemaduras por álcalis causan necrosis por licuefacción, un proceso en el que el químico saponifica las grasas de los tejidos y penetra profundamente en la córnea y la cámara anterior del ojo, causando un daño extenso y a menudo irreversible. A diferencia de los ácidos, que tienden a coagular las proteínas y limitar su propia penetración. La única forma de detener este proceso es la dilución inmediata y prolongada a través de la irrigación. Cada segundo de retraso aumenta el riesgo de ceguera permanente."
    },
    {
        id: "hipotermia-inmersion-35",
        title: "Excursionista encontrado en un arroyo de montaña",
        description: "Un excursionista de 24 años que se perdió es encontrado por los rescatistas parcialmente sumergido en un arroyo de agua fría. Está consciente pero confundido y tiembla violentamente.",
        initialAssessment: "Paciente letárgico, con dificultad para hablar (disartria). Tiembla incontrolablemente. La piel está pálida y fría al tacto. La ropa está empapada.",
        vitalSigns: {
            FC: "50 lpm",
            TA: "95/60 mmHg",
            FR: "12 rpm (lenta, superficial)",
            SpO2: "92%",
            "Temp (central)": "33°C",
        },
        findings: [
            "Hipotermia moderada (Temperatura central entre 32°C y 34°C).",
            "Depresión del sistema nervioso central y cardiovascular.",
            "El temblor es un mecanismo compensatorio que aún está presente."
        ],
        questions: [
            { question: "¿Cuáles son las etapas de la hipotermia y qué hallazgos clínicos las caracterizan?" },
            { question: "¿Por qué se debe manejar a un paciente hipotérmico con extrema gentileza?" },
            { question: "Explica la diferencia entre recalentamiento pasivo y activo." }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales."
        ],
        correctManage: `- Mover al paciente a un ambiente cálido y protegido del viento y la lluvia.\n- Retirar toda la ropa húmeda con cuidado para minimizar el movimiento del paciente.\n- Iniciar el recalentamiento externo pasivo: cubrir al paciente con mantas secas, incluyendo la cabeza, para prevenir una mayor pérdida de calor.\n- Iniciar el recalentamiento externo activo: aplicar compresas calientes o bolsas de agua caliente en las axilas, ingles y torso. No en las extremidades.\n- Administrar oxígeno humidificado y caliente, si está disponible.\n- Establecer acceso IV y administrar líquidos intravenosos tibios.\n- Monitorización cardíaca continua. Evitar movimientos bruscos que puedan precipitar una fibrilación ventricular ('corazón hipotérmico irritable').`,
        explanation: "La hipotermia deprime todas las funciones fisiológicas. El corazón se vuelve extremadamente irritable y susceptible a arritmias fatales con el movimiento brusco. El recalentamiento debe ser gradual. El recalentamiento pasivo simplemente aísla al paciente para que su propio cuerpo genere calor, mientras que el activo introduce calor desde una fuente externa. El recalentamiento del tronco antes que el de las extremidades evita el 'afterdrop', un fenómeno en el que la sangre fría y ácida de las extremidades regresa a la circulación central, pudiendo causar un paro cardíaco."
    },
    {
        id: "cuerpo-extrano-oido-36",
        title: "Insecto vivo en el canal auditivo",
        description: "Un niño de 8 años se despierta gritando por un dolor agudo y una sensación de 'zumbido' en su oído derecho después de acampar. Los padres sospechan que un insecto se metió en su oído.",
        initialAssessment: "Niño angustiado y llorando, protegiéndose el oído derecho. Es incapaz de cooperar para un examen visual. No hay sangrado ni secreción visible desde el exterior.",
        vitalSigns: {
            "FC": "110 lpm",
            "FR": "22 rpm",
            "Dolor": "8/10",
        },
        findings: [
            "Cuerpo extraño en el canal auditivo, probablemente un insecto vivo.",
            "Dolor y angustia significativos debido al movimiento y al ruido del insecto.",
            "Riesgo de lesión del tímpano por el insecto o por intentos de extracción incorrectos."
        ],
        questions: [
            { question: "¿Cuál es el primer paso para manejar un insecto vivo en el canal auditivo y por qué?" },
            { question: "¿Qué líquidos son seguros para instilar en el oído en esta situación?" },
            { question: "¿Por qué está contraindicado irrigar el oído si se sospecha la presencia de materia orgánica vegetal (ej. un frijol)?" }
        ],
        references: [
            "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9th Edition."
        ],
        correctManage: `- Tranquilizar al niño y a los padres. Colocar al paciente en una habitación oscura puede hacer que el insecto salga por sí solo, pero esto rara vez funciona.\n- El tratamiento de elección es matar al insecto antes de intentar extraerlo. Instilar una pequeña cantidad de lidocaína viscosa (preferible) o aceite mineral/de oliva en el canal auditivo. Esto ahogará al insecto y proporcionará algo de analgesia.\n- Una vez que el movimiento y el zumbido cesen, el paciente puede ser transportado en una posición cómoda.\n- No intentar extraer el insecto en el campo con pinzas u otros instrumentos, ya que esto puede empujarlo más adentro y dañar el tímpano.\n- Trasladar al servicio de urgencias donde se puede extraer de forma segura bajo visualización directa.`,
        explanation: "Un insecto vivo en el oído es una experiencia aterradora y dolorosa, especialmente para un niño. El movimiento contra el tímpano sensible causa un dolor y un ruido intensos. Matar al insecto con lidocaína o aceite alivia inmediatamente la mayor parte del sufrimiento y hace que la extracción posterior por un médico sea mucho más fácil y segura. La irrigación está contraindicada para materia orgánica porque el agua puede hacer que se hinche, dificultando aún más su extracción."
    },
    {
        id: "triage-mci-37",
        title: "Accidente de autobús con múltiples víctimas",
        description: "Se te despacha a un accidente de un autobús turístico que ha volcado. A tu llegada, estimas entre 15 y 20 pacientes con diversos grados de lesiones. Eres la primera unidad en la escena.",
        initialAssessment: "Escena caótica con múltiples pacientes. Algunos deambulan (heridos leves), otros están atrapados y otros no se mueven. Los recursos son limitados inicialmente.",
        vitalSigns: {
            "N/A": "Se requiere una evaluación rápida de múltiples pacientes, no la toma de signos vitales individuales en la fase inicial.",
        },
        findings: [
            "Incidente con Múltiples Víctimas (IMV).",
            "Necesidad de establecer el mando, realizar un triage rápido y solicitar recursos adicionales.",
            "La prioridad es hacer 'el mayor bien para el mayor número de personas'."
        ],
        questions: [
            { question: "¿Cuáles son las cuatro categorías de triage del sistema START (Simple Triage and Rapid Treatment)?" },
            { question: "Usando el sistema START, ¿cómo clasificarías a un paciente que no puede caminar, tiene una frecuencia respiratoria de 26, pulso radial presente y obedece órdenes?" },
            { question: "¿Cuál es el papel del primer paramédico en llegar a un IMV?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Triage en Desastres e Incidentes con Múltiples Víctimas."
        ],
        correctManage: `- El primer paramédico en llegar asume el Mando de Incidentes y realiza una rápida evaluación de la escena (360°), comunicando al despacho: tipo de incidente, número aproximado de pacientes, riesgos presentes y solicitud de recursos adicionales (ambulancias, bomberos, etc.).\n- Iniciar el triage utilizando el sistema START o uno similar:\n  - 1. Identificar y dirigir a los 'heridos que caminan' (VERDE) a un área segura.\n  - 2. Evaluar a los pacientes restantes. Triage basado en Respiración, Perfusión y Estado Mental (RPM).\n  - 3. Clasificar a los pacientes como: ROJO (Inmediato), AMARILLO (Retrasado), VERDE (Menor) o NEGRO (Fallecido/Expectante).\n- Solo realizar intervenciones que salvan vidas durante el triage (abrir la vía aérea, controlar hemorragias masivas).\n- No quedarse con un solo paciente; el objetivo es clasificar a todos rápidamente.\n- Dirigir las unidades que llegan a las áreas de tratamiento designadas según la prioridad del triage.`,
        explanation: "En un Incidente con Múltiples Víctimas, el modo de operación cambia de 'tratar al paciente más grave primero' a 'hacer el mayor bien para el mayor número'. El triage es el proceso de clasificar rápidamente a los pacientes para determinar la prioridad del tratamiento y el transporte. El sistema START es una herramienta simple y eficaz que permite a los primeros respondedores clasificar a los pacientes en menos de 60 segundos cada uno, asegurando que los recursos limitados se asignen a aquellos que tienen la mayor probabilidad de sobrevivir con una intervención inmediata."
    },
    {
        id: "tromboembolia-pulmonar-38",
        title: "Disnea y dolor torácico pleurítico de inicio súbito",
        description: "Mujer de 35 años que recientemente realizó un vuelo transatlántico de 12 horas, presenta un inicio súbito de dificultad para respirar y un dolor agudo en el lado derecho del pecho que empeora al inspirar. Está muy ansiosa.",
        initialAssessment: "Paciente consciente, taquipneica y taquicárdica. No puede respirar profundamente debido al dolor pleurítico. Los pulmones están limpios y claros a la auscultación. No hay edema en las piernas.",
        vitalSigns: {
            FC: "125 lpm (taquicardia sinusal)",
            TA: "110/70 mmHg",
            FR: "28 rpm",
            SpO2: "90% (aire ambiente)",
        },
        findings: [
            "Alta sospecha de Tromboembolia Pulmonar (TEP).",
            "Hipoxia inexplicada con campos pulmonares limpios.",
            "Factores de riesgo presentes (inmovilización prolongada)."
        ],
        questions: [
            { question: "¿Qué es una embolia pulmonar y de dónde provienen la mayoría de los coágulos?" },
            { question: "¿Cuál es la tríada de Virchow y cómo se relaciona con el riesgo de TEP?" },
            { question: "Aunque el diagnóstico definitivo se hace en el hospital, ¿qué hallazgos en la evaluación prehospitalaria aumentan la sospecha de TEP?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Respiratorias."
        ],
        correctManage: `- Administrar oxígeno de alto flujo para corregir la hipoxia. Considerar CPAP si la hipoxemia es severa.\n- Colocar al paciente en una posición cómoda, generalmente semi-sentado.\n- Establecer acceso IV.\n- Obtener un ECG de 12 derivaciones. Buscar signos de sobrecarga del ventrículo derecho (ej. taquicardia sinusal, patrón S1Q3T3, desviación del eje a la derecha), aunque a menudo no es diagnóstico.\n- Mantener un alto índice de sospecha y notificar al hospital receptor.\n- Traslado rápido para diagnóstico definitivo (Angio-TC) y tratamiento (anticoagulación o trombólisis).`,
        explanation: "Una TEP ocurre cuando un coágulo de sangre, generalmente formado en las venas profundas de las piernas (TVP), viaja a los pulmones y obstruye una arteria pulmonar. Esto crea un 'espacio muerto' (área ventilada pero no perfundida), lo que lleva a una hipoxia aguda. Los hallazgos clásicos son la disnea de inicio súbito, el dolor torácico pleurítico y la taquicardia. El diagnóstico puede ser difícil, pero un alto índice de sospecha en un paciente con factores de riesgo es clave para un tratamiento oportuno."
    },
    {
        id: "intoxicacion-antidepresivos-39",
        title: "Sobredosis de antidepresivos tricíclicos con cambios en el ECG",
        description: "Joven de 24 años es encontrado por su compañero de cuarto con una nota de suicidio y un frasco vacío de Amitriptilina. Está somnoliento y confundido.",
        initialAssessment: "Paciente letárgico, responde a estímulos verbales con habla arrastrada. Pupilas dilatadas. Mucosas secas y piel enrojecida. Vía aérea permeable pero con riesgo de deterioro.",
        vitalSigns: {
            FC: "130 lpm (taquicardia sinusal)",
            TA: "90/50 mmHg",
            FR: "14 rpm",
        },
        findings: [
            "Sobredosis de Antidepresivos Tricíclicos (ATC).",
            "Efectos anticolinérgicos (taquicardia, pupilas dilatadas, piel seca).",
            "Alto riesgo de toxicidad cardiovascular (hipotensión, arritmias) y neurológica (convulsiones, coma)."
        ],
        questions: [
            { question: "¿Cuál es el hallazgo más ominoso y característico en el ECG de una sobredosis de ATC y qué indica?" },
            { question: "¿Cuál es el tratamiento farmacológico de elección para la cardiotoxicidad inducida por los ATC?" },
            { question: "Además del corazón, ¿qué otro sistema de órganos está en grave riesgo?" }
        ],
        references: [
            "Goldfrank's Toxicologic Emergencies, 11th Edition."
        ],
        correctManage: `- Manejo de la vía aérea y la ventilación. Estar preparado para una intubación temprana si el estado de conciencia disminuye.\n- Administrar oxígeno de alto flujo.\n- Establecer acceso IV e iniciar un bolo de solución salina para la hipotensión.\n- Obtener un ECG de 12 derivaciones inmediatamente. Buscar ensanchamiento del complejo QRS (>100 ms) y una onda R prominente en aVR.\n- Si el QRS está ensanchado, administrar un bolo de Bicarbonato de Sodio IV. Esto ayuda a revertir el bloqueo de los canales de sodio en el corazón.\n- Monitorización cardíaca y neurológica continua. Estar preparado para tratar convulsiones con benzodiacepinas.\n- Traslado urgente al hospital.`,
        explanation: "La sobredosis de ATC es una de las intoxicaciones más letales. Estos fármacos bloquean los canales rápidos de sodio en el miocardio, lo que ralentiza la conducción cardíaca y ensancha el complejo QRS. Un QRS >100 ms predice arritmias ventriculares. El bicarbonato de sodio es el antídoto: aumenta el pH sérico, lo que desplaza al fármaco de los canales de sodio, y proporciona una carga de sodio que compite con el fármaco, revirtiendo la cardiotoxicidad. El manejo agresivo y temprano es vital."
    },
    {
        id: "mononucleosis-trauma-abdominal-40",
        title: "Dolor abdominal en deportista con mononucleosis",
        description: "Un jugador de fútbol americano universitario de 19 años, diagnosticado con mononucleosis infecciosa hace 2 semanas, recibe un golpe en el abdomen durante un entrenamiento y sufre un dolor súbito y agudo en el cuadrante superior izquierdo, irradiado al hombro izquierdo.",
        initialAssessment: "Paciente pálido, diaforético y con signos de dificultad respiratoria. Se encuentra en posición fetal. El abdomen está rígido y sensible a la palpación, especialmente en el cuadrante superior izquierdo.",
        vitalSigns: {
            FC: "140 lpm (filiforme)",
            TA: "85/45 mmHg",
            FR: "30 rpm (superficial)",
            SpO2: "93%",
        },
        findings: [
            "Trauma abdominal cerrado con sospecha de ruptura esplénica.",
            "Shock hipovolémico hemorrágico profundo.",
            "El dolor referido al hombro izquierdo (signo de Kehr) es clásico de la irritación diafragmática por sangre."
        ],
        questions: [
            { question: "¿Por qué la mononucleosis infecciosa aumenta drásticamente el riesgo de ruptura esplénica?" },
            { question: "¿Qué es el signo de Kehr y cuál es su mecanismo fisiológico?" },
            { question: "¿Cuál es la prioridad en el manejo de un paciente con sospecha de hemorragia intraabdominal masiva?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Abdominal y Pélvico."
        ],
        correctManage: `- Manejo agresivo de la vía aérea y administración de oxígeno al 100%.\n- Inmovilización espinal si el mecanismo lo justifica, aunque la prioridad es el manejo del shock.\n- Establecer dos accesos IV de gran calibre y comenzar una reanimación agresiva con cristaloides para tratar el shock. Activar el protocolo de transfusión masiva si está disponible.\n- NO administrar analgésicos narcóticos que puedan enmascarar los hallazgos abdominales o causar hipotensión.\n- Cargar y trasladar de inmediato ('load and go'). El tratamiento definitivo es quirúrgico.\n- Notificar al centro de trauma sobre una alta sospecha de ruptura esplénica para que el equipo de cirugía esté preparado.`,
        explanation: "La mononucleosis infecciosa, causada por el virus de Epstein-Barr, provoca una inflamación y agrandamiento significativos del bazo (esplenomegalia). Un bazo agrandado es extremadamente frágil y susceptible de romperse incluso con un traumatismo abdominal menor. La ruptura esplénica puede provocar una hemorragia interna masiva y un shock hipovolémico rápidamente fatal. La única solución es la intervención quirúrgica (esplenectomía o reparación), por lo que el reconocimiento rápido y el transporte inmediato son las claves para la supervivencia."
    },
    {
        id: "diseccion-aortica-41",
        title: "Dolor torácico desgarrante irradiado a la espalda",
        description: "Hombre de 65 años con historial de hipertensión mal controlada llama por un dolor torácico de inicio súbito y de máxima intensidad, que describe como 'desgarrante' y que se irradia entre los omóplatos.",
        initialAssessment: "Paciente pálido, ansioso y en evidente agonía. A la palpación de pulsos, el pulso radial derecho se siente significativamente más débil que el izquierdo. No puede encontrar una posición cómoda.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA Brazo Derecho": "110/60 mmHg",
            "TA Brazo Izquierdo": "170/95 mmHg",
            "FR": "24 rpm",
            "SpO2": "96%",
        },
        findings: [
            "Alta sospecha de disección aórtica aguda.",
            "Déficit de pulso y diferencia de presión arterial >20 mmHg entre ambos brazos son signos clave.",
            "El dolor 'desgarrante' que migra es clásico de esta patología."
        ],
        questions: [
            { question: "¿Por qué este cuadro clínico es una contraindicación absoluta para la administración de aspirina o anticoagulantes?" },
            { question: "¿Cuál es la importancia de medir la presión arterial en ambos brazos en un paciente con dolor torácico severo?" },
            { question: "En el manejo prehospitalario, ¿cuáles son los dos objetivos principales del control de la presión arterial y la frecuencia cardíaca?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares."
        ],
        correctManage: `- Administrar oxígeno para mantener SpO₂ >94%.\n- Establecer dos accesos IV de gran calibre.\n- El manejo del dolor es una prioridad, usualmente con opiáceos IV (Fentanilo), ya que el dolor aumenta la respuesta simpática y empeora la disección.\n- El objetivo es reducir la 'fuerza de cizallamiento' en la aorta. Esto implica un control cuidadoso de la frecuencia cardíaca (mantenerla ~60 lpm) y la presión arterial (sistólica 100-120 mmHg), generalmente con betabloqueadores y vasodilatadores en el hospital.\n- Evitar grandes bolos de fluidos que puedan aumentar la presión.\n- Traslado emergente a un centro con capacidad de cirugía cardiovascular, notificando la alta sospecha.`,
        explanation: "Una disección aórtica ocurre cuando hay un desgarro en la capa íntima de la aorta, permitiendo que la sangre fluya entre las capas de la pared aórtica, separándolas. Esto puede obstruir las arterias principales (coronarias, carótidas, renales) y llevar a la ruptura aórtica, que es fatal. A diferencia de un infarto, donde el objetivo es disolver un coágulo, aquí los antiplaquetarios o anticoagulantes serían catastróficos. El manejo se centra en reducir la fuerza hemodinámica que propaga la disección."
    },
    {
        id: "torsion-testicular-42",
        title: "Dolor testicular agudo en un adolescente",
        description: "Un adolescente de 16 años se despierta con un dolor testicular izquierdo de inicio súbito y severo, acompañado de náuseas y un vómito. El dolor no está relacionado con ningún trauma.",
        initialAssessment: "Paciente en evidente dolor, caminando con las piernas separadas. El testículo izquierdo se observa elevado y en posición horizontal ('signo de Bell-clapper'). El escroto está edematoso y enrojecido. El reflejo cremastérico está ausente en el lado izquierdo.",
        vitalSigns: {
            "FC": "115 lpm",
            "TA": "130/80 mmHg",
            "FR": "22 rpm",
            "Dolor": "10/10",
        },
        findings: [
            "Alta sospecha de torsión testicular.",
            "Emergencia urológica de tiempo crítico.",
            "La ausencia del reflejo cremastérico es un hallazgo muy sensible."
        ],
        questions: [
            { question: "¿Cuál es el mecanismo fisiopatológico de la torsión testicular y por qué es una emergencia?" },
            { question: "¿Cuál es la ventana de tiempo desde el inicio del dolor para salvar el testículo?" },
            { question: "En el campo, ¿hay alguna maniobra que se pueda intentar si el traslado es prolongado y se tiene la formación adecuada?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Gastrointestinales y Urológicas."
        ],
        correctManage: `- Colocar al paciente en una posición cómoda. Puede ser útil colocar una toalla enrollada debajo del escroto para soporte.\n- Manejo agresivo del dolor con analgésicos IV y antieméticos para las náuseas.\n- Establecer acceso IV.\n- NO aplicar hielo ni calor. NO permitir que el paciente coma o beba nada en anticipación a la cirugía.\n- Notificar al hospital receptor sobre una alta sospecha de 'código torsión' para que el equipo de urología esté preparado.\n- Traslado rápido y prioritario. El tiempo es testículo.`,
        explanation: "La torsión testicular ocurre cuando el cordón espermático, que suministra sangre al testículo, se tuerce sobre sí mismo, cortando el flujo sanguíneo. Si no se resuelve quirúrgicamente, la isquemia lleva a la necrosis y pérdida del testículo en cuestión de horas. La ventana de salvamento es idealmente de 4 a 6 horas desde el inicio de los síntomas. El diagnóstico es clínico y el tratamiento es una cirugía de emergencia para destorcer el cordón y fijar ambos testículos para prevenir la recurrencia."
    },
    {
        id: "tirotoxicosis-43",
        title: "Fiebre, agitación y taquicardia en paciente con hipertiroidismo",
        description: "Mujer de 30 años con antecedentes de enfermedad de Graves (hipertiroidismo) es traída por su familia por presentar agitación extrema, confusión, fiebre alta y palpitaciones. Tuvo una infección respiratoria hace unos días.",
        initialAssessment: "Paciente febril, diaforética, con temblor fino en las manos. Está desorientada y agitada. Piel caliente y húmeda. Se ausculta una taquicardia irregular muy rápida. Exoftalmos (ojos saltones) notable.",
        vitalSigns: {
            "FC": "160 lpm (Fibrilación Auricular)",
            "TA": "150/70 mmHg (presión de pulso amplia)",
            "FR": "28 rpm",
            "SpO2": "95%",
            "Temp": "40.5°C",
        },
        findings: [
            "Tormenta tiroidea (crisis tirotóxica), una emergencia endocrina.",
            "Estado hipermetabólico extremo con fallo multiorgänico inminente.",
            "El factor precipitante es probablemente la infección reciente."
        ],
        questions: [
            { question: "¿Qué es una tormenta tiroidea y qué puede desencadenarla?" },
            { question: "¿Por qué la fibrilación auricular con respuesta ventricular rápida es común en esta condición?" },
            { question: "Además del soporte vital, ¿cuál es el enfoque del tratamiento en el hospital?" }
        ],
        references: [
            "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9th Edition."
        ],
        correctManage: `- Manejo del ABC. Administrar oxígeno de alto flujo.\n- Iniciar enfriamiento activo agresivo para tratar la hipertermia (compresas frías, ventiladores). No usar aspirina, ya que puede aumentar los niveles de hormona tiroidea libre.\n- Establecer acceso IV e iniciar rehidratación con cristaloides para tratar la deshidratación por fiebre y diarrea.\n- Monitorización cardíaca continua. Tratar la taquiarritmia según los protocolos de ACLS, usualmente con betabloqueadores en el hospital.\n- Traslado urgente a una unidad de cuidados intensivos.`,
        explanation: "La tormenta tiroidea es una exacerbación extrema y potencialmente mortal del hipertiroidismo, usualmente desencadenada por un estrés fisiológico como una infección, cirugía o trauma. El exceso masivo de hormona tiroidea acelera el metabolismo a niveles peligrosos, causando hipertermia, taquiarritmias, insuficiencia cardíaca y delirio. El tratamiento hospitalario se enfoca en bloquear la síntesis y liberación de nuevas hormonas tiroideas, bloquear sus efectos periféricos (con betabloqueadores) y tratar el factor precipitante."
    },
    {
        id: "glaucoma-agudo-44",
        title: "Dolor ocular severo, náuseas y visión de halos",
        description: "Mujer de 60 años llama por un inicio súbito de dolor intenso en el ojo derecho, visión borrosa y percepción de 'halos alrededor de las luces'. El dolor se acompaña de náuseas y un vómito.",
        initialAssessment: "Paciente en evidente malestar, protegiéndose el ojo derecho. El ojo está marcadamente enrojecido, la córnea se ve opaca ('edema corneal') y la pupila del lado afectado está fija y medio-dilatada. El globo ocular se siente duro a la palpación suave.",
        vitalSigns: {
            "FC": "100 lpm",
            "TA": "150/90 mmHg",
            "FR": "20 rpm",
        },
        findings: [
            "Glaucoma agudo de ángulo cerrado.",
            "Emergencia oftalmológica que amenaza la visión.",
            "Los síntomas sistémicos (náuseas, vómitos) pueden confundir el diagnóstico."
        ],
        questions: [
            { question: "¿Qué causa el aumento súbito de la presión intraocular en el glaucoma de ángulo cerrado?" },
            { question: "¿Por qué la pupila se encuentra fija y en midriasis?" },
            { question: "¿Cuál es el objetivo del tratamiento prehospitalario y hospitalario?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Facial y Ocular."
        ],
        correctManage: `- Colocar al paciente en una posición supina con la cabeza elevada para ayudar a disminuir la presión intraocular (PIO).\n- Reducir la estimulación lumínica para mayor confort.\n- Administrar antieméticos IV (Ondansetrón) para controlar el vómito, ya que el esfuerzo puede aumentar aún más la PIO.\n- Manejo del dolor con analgésicos IV.\n- Transportar al paciente a un centro de emergencias con acceso a oftalmología urgente.\n- Evitar administrar medicamentos con propiedades anticolinérgicas (como la Atropina), ya que pueden empeorar el cierre del ángulo.`,
        explanation: "El glaucoma agudo de ángulo cerrado ocurre cuando el iris bloquea el drenaje normal del humor acuoso del ojo, causando un aumento rápido y doloroso de la presión intraocular. Esta presión daña el nervio óptico y puede llevar a la ceguera permanente en un corto período si no se trata. El tratamiento definitivo en el hospital implica medicamentos para reducir la presión (colirios, manitol IV) y un procedimiento con láser (iridotomía) para crear una nueva vía de drenaje."
    },
    {
        id: "epoc-descompensado-45",
        title: "Insuficiencia respiratoria en paciente con EPOC",
        description: "Hombre de 70 años con antecedentes de Enfermedad Pulmonar Obstructiva Crónica (EPOC), dependiente de oxígeno domiciliario, presenta un aumento severo de su disnea, tos productiva con esputo verdoso y somnolencia.",
        initialAssessment: "Paciente sentado en posición de trípode, usando músculos accesorios. Cianosis en labios y lechos ungueales. Se auscultan sibilancias y roncus difusos. Está letárgico y responde lentamente, indicando posible hipercapnia.",
        vitalSigns: {
            "FC": "115 lpm",
            "FR": "28 rpm (superficial)",
            "TA": "140/85 mmHg",
            "SpO2": "86% (con su O2 a 2 lpm por puntas nasales)",
        },
        findings: [
            "Exacerbación aguda de EPOC, probablemente por una infección.",
            "Insuficiencia respiratoria hipercápnica aguda sobre crónica.",
            "El estado mental alterado es un signo de retención severa de CO₂ (narcosis por CO₂)."
        ],
        questions: [
            { question: "Explica el concepto de 'impulso hipóxico' y por qué se debe administrar oxígeno con cautela (pero sin negarlo) en estos pacientes." },
            { question: "¿Qué tratamiento farmacológico en nebulización es el pilar del manejo prehospitalario?" },
            { question: "¿Qué herramienta de soporte ventilatorio no invasivo es extremadamente útil si el paciente no mejora?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Respiratorias."
        ],
        correctManage: `- Incrementar el aporte de oxígeno para alcanzar una SpO₂ objetivo de 88-92%. Usar una mascarilla Venturi para una concentración precisa, o una mascarilla simple/puntas nasales con titulación cuidadosa.\n- Administrar un broncodilatador de acción corta nebulizado, idealmente una combinación de un beta-agonista (Salbutamol) y un anticolinérgico (Bromuro de Ipratropio).\n- Si el paciente está muy somnoliento o no puede proteger su vía aérea, o si el trabajo respiratorio es insostenible, asistir las ventilaciones con una BVM.\n- El uso de CPAP o BiPAP en el campo puede prevenir la necesidad de intubación.\n- Traslado en posición sentada al hospital.`,
        explanation: "Una exacerbación de EPOC es un empeoramiento agudo de los síntomas. La hipoxemia debe ser corregida, pero un exceso de oxígeno puede teóricamente disminuir el impulso respiratorio en pacientes crónicamente hipercápnicos (retienen CO₂), aunque la hipoxia siempre es más peligrosa. Los broncodilatadores nebulizados relajan el músculo liso de las vías respiratorias y disminuyen la inflamación. El soporte con presión positiva (CPAP/BiPAP) ayuda a disminuir el trabajo respiratorio y a 'lavar' el CO₂ acumulado."
    },
    {
        id: "rabia-exposicion-46",
        title: "Mordedura de un animal salvaje no provocado",
        description: "Un niño de 10 años es mordido en la mano por un mapache que actuaba de forma extraña a plena luz del día. El animal escapó. La herida es superficial pero sangra.",
        initialAssessment: "Niño consciente, asustado. Presenta varias punciones pequeñas y laceraciones en el dorso de la mano derecha, con sangrado leve. El resto del examen es normal.",
        vitalSigns: {
            "FC": "100 lpm",
            "FR": "20 rpm",
        },
        findings: [
            "Exposición de alto riesgo a la rabia.",
            "La mordedura no provocada por un mamífero salvaje es una indicación para la profilaxis post-exposición.",
            "Necesidad de un cuidado local meticuloso de la herida."
        ],
        questions: [
            { question: "¿Qué es la rabia y por qué es casi 100% fatal una vez que aparecen los síntomas?" },
            { question: "¿Cuál es el paso más importante en el manejo inmediato de la herida para prevenir la rabia?" },
            { question: "¿En qué consiste la profilaxis post-exposición (PEP) para la rabia?" }
        ],
        references: [
            "CDC Guidelines for Rabies Prevention."
        ],
        correctManage: `- La prioridad inmediata es el cuidado de la herida. Irrigar la herida de forma vigorosa y copiosa con agua y jabón durante al menos 15 minutos. Esto es muy efectivo para reducir la carga viral.\n- Después del lavado, aplicar una solución virucida como povidona yodada o alcohol.\n- Cubrir la herida con un apósito estéril y seco.\n- No suturar la herida en el campo, se prefiere que cierre por segunda intención para permitir el drenaje.\n- Asegurar que el estado de vacunación antitetánica del niño esté al día.\n- Trasladar al hospital, comunicando claramente la naturaleza de la exposición para que se inicie la PEP lo antes posible.`,
        explanation: "La rabia es una encefalitis viral transmitida por la saliva de un animal infectado. Una vez que el virus llega al sistema nervioso central y aparecen los síntomas, es uniformemente mortal. Sin embargo, la enfermedad es 100% prevenible si se administra la profilaxis post-exposición (PEP) antes del inicio de los síntomas. La PEP consiste en una limpieza a fondo de la herida, una dosis de inmunoglobulina antirrábica humana (infiltrada alrededor de la herida) y una serie de 4 dosis de la vacuna antirrábica. El lavado inmediato y minucioso es el paso prehospitalario más crítico."
    },
    {
        id: "intoxicacion-hierro-47",
        title: "Ingesta de vitaminas prenatales por un niño",
        description: "Un niño de 2 años es encontrado con un frasco abierto de las vitaminas prenatales de su madre. Los padres creen que pudo haber ingerido varias pastillas hace aproximadamente una hora. Ahora presenta vómitos.",
        initialAssessment: "Niño consciente pero irritable. Ha tenido un episodio de vómito no sanguinolento. No presenta dificultad respiratoria. Abdomen blando pero sensible a la palpación epigástrica.",
        vitalSigns: {
            "FC": "130 lpm",
            "FR": "28 rpm",
            "TA": "95/60 mmHg",
        },
        findings: [
            "Intoxicación aguda por hierro.",
            "Fase 1 (toxicidad gastrointestinal) en progreso.",
            "Riesgo de progresión a fases más graves, incluyendo shock y fallo hepático."
        ],
        questions: [
            { question: "¿Por qué las vitaminas prenatales son particularmente peligrosas para los niños?" },
            { question: "Describe las fases de la toxicidad por hierro." },
            { question: "¿Está indicado el carbón activado en esta intoxicación?" }
        ],
        references: [
            "Goldfrank's Toxicologic Emergencies, 11th Edition."
        ],
        correctManage: `- Soporte de la vía aérea, respiración y circulación. Evaluar la glucosa en sangre.\n- Establecer acceso IV e iniciar rehidratación con cristaloides para reponer las pérdidas por vómitos.\n- Administrar un antiemético si los vómitos son persistentes.\n- El carbón activado NO es efectivo, ya que no se une al hierro.\n- Intentar determinar el número máximo de pastillas ingeridas y la cantidad de hierro elemental por pastilla (esta información es crucial para el hospital).\n- Trasladar urgentemente al hospital. El tratamiento puede incluir irrigación intestinal total y/o la administración del antídoto Deferoxamina.`,
        explanation: "Las vitaminas prenatales contienen grandes cantidades de hierro para la madre y el feto, dosis que son altamente tóxicas para un niño pequeño. La intoxicación por hierro progresa en fases: 1) irritación GI (vómitos, diarrea, dolor), 2) fase latente de aparente mejoría, 3) fase de shock, acidosis metabólica y letargo, y 4) fallo hepático tardío. Debido a este potencial de deterioro súbito después de una fase de mejoría, todos los niños con sospecha de ingesta significativa de hierro requieren evaluación y monitorización hospitalaria."
    },
    {
        id: "endometritis-postparto-48",
        title: "Fiebre y dolor abdominal en una mujer postparto",
        description: "Mujer de 25 años que dio a luz hace 5 días llama por fiebre, escalofríos y un dolor abdominal bajo que ha empeorado. Refiere una secreción vaginal maloliente.",
        initialAssessment: "Paciente pálida y con apariencia de enferma. Presenta taquicardia. El abdomen es blando, pero con una marcada sensibilidad a la palpación en la línea media del hipogastrio (sensibilidad uterina).",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "95/55 mmHg",
            "FR": "22 rpm",
            "SpO2": "97%",
            "Temp": "39.2°C",
        },
        findings: [
            "Alta sospecha de endometritis postparto.",
            "Sepsis de origen pélvico.",
            "Riesgo de shock séptico."
        ],
        questions: [
            { question: "¿Qué es la endometritis postparto y cuáles son sus factores de riesgo?" },
            { question: "¿Por qué esta condición puede progresar rápidamente a sepsis severa?" },
            { question: "¿Cuál es el manejo prehospitalario clave para un paciente con sospecha de sepsis?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ginecológicas."
        ],
        correctManage: `- Administrar oxígeno para mantener una saturación adecuada.\n- Establecer acceso IV de gran calibre.\n- Iniciar una reanimación con líquidos (bolo de solución salina) para tratar la hipotensión y la hipoperfusión tisular, según los protocolos de sepsis.\n- Colocar a la paciente en una posición cómoda (semi-sentado o de lado).\n- Manejo del dolor y la fiebre según protocolo.\n- Notificar al hospital receptor (preferiblemente un centro con servicio de obstetricia) sobre una sospecha de 'sepsis postparto' para asegurar un tratamiento antibiótico rápido a la llegada.`,
        explanation: "La endometritis es una infección del revestimiento del útero después del parto, generalmente causada por bacterias de la flora vaginal que ascienden al útero durante el trabajo de parto y el alumbramiento. El útero postparto es un ambiente ideal para el crecimiento bacteriano y tiene un suministro de sangre muy grande, lo que permite que la infección se disemine rápidamente a la circulación sistémica, causando bacteriemia y sepsis. El tratamiento rápido con antibióticos intravenosos de amplio espectro es esencial."
    },
    {
        id: "trauma-penetrante-ojo-49",
        title: "Lesión ocular con objeto empalado",
        description: "Un carpintero de 40 años sufre un accidente con una pistola de clavos, y un clavo de 5 cm queda empalado en su globo ocular derecho.",
        initialAssessment: "Paciente consciente, en agonía, sentado y cubriéndose el ojo. Un clavo metálico es visible, protruyendo desde el centro de la córnea derecha. Hay una fuga de humor acuoso.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "145/90 mmHg",
        },
        findings: [
            "Lesión de globo ocular abierto (ruptura) con cuerpo extraño empalado.",
            "Emergencia oftalmológica de máxima prioridad.",
            "Cualquier manipulación puede causar la extrusión del contenido intraocular."
        ],
        questions: [
            { question: "¿Cuál es la regla de oro para manejar cualquier objeto empalado en el cuerpo?" },
            { question: "Describe el procedimiento correcto para estabilizar el objeto y proteger el ojo lesionado." },
            { question: "¿Por qué es crucial cubrir también el ojo no lesionado?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Facial y Ocular."
        ],
        correctManage: `- La prioridad es tranquilizar al paciente y indicarle que no toque el ojo ni el objeto.\n- NO retirar el objeto empalado bajo ninguna circunstancia.\n- Estabilizar el objeto en su lugar. Se puede lograr colocando una pila de gasas a cada lado del objeto y luego colocando un vaso de papel o un protector ocular rígido sobre el objeto y asegurándolo con cinta adhesiva a la cara. El objetivo es que nada toque el objeto.\n- Cubrir el ojo NO lesionado con un apósito. Esto previene el 'movimiento ocular simpático', ya que cuando el ojo sano se mueve, el ojo lesionado también lo hace, causando más daño.\n- Colocar al paciente en una posición semi-sentado para reducir la presión ocular.\n- Traslado inmediato y gentil a un centro de trauma con servicio de oftalmología.`,
        explanation: "Un objeto empalado en el ojo está actuando como un tapón, previniendo una hemorragia mayor y la pérdida completa del contenido intraocular. Su extracción en el campo causaría un daño irreparable. El manejo se centra en la estabilización del objeto para prevenir cualquier movimiento y en cubrir ambos ojos para minimizar el movimiento simpático. Este enfoque protege la estructura ocular restante y da al cirujano la mejor oportunidad posible de salvar la visión."
    },
    {
        id: "pericarditis-aguda-50",
        title: "Dolor torácico agudo que mejora al inclinarse hacia adelante",
        description: "Hombre de 30 años, que se recupera de una infección viral, presenta un dolor torácico agudo, punzante y retroesternal que empeora al acostarse o respirar profundamente, y mejora notablemente al sentarse e inclinarse hacia adelante.",
        initialAssessment: "Paciente consciente, ansioso, sentado en la camilla inclinado hacia adelante. El dolor es central y no se irradia. A la auscultación cardíaca, se puede escuchar un 'roce de fricción' pericárdico.",
        vitalSigns: {
            "FC": "105 lpm (taquicardia sinusal)",
            "TA": "120/75 mmHg",
            "FR": "20 rpm",
            "Temp": "37.9°C",
        },
        findings: [
            "Dolor torácico de características pleuropericárdicas, sospechoso de pericarditis aguda.",
            "La mejoría postural es un signo clínico clásico.",
            "El roce por fricción es patognomónico pero no siempre está presente."
        ],
        questions: [
            { question: "¿Cómo se diferencia clínicamente el dolor de la pericarditis del dolor de un infarto de miocardio?" },
            { question: "¿Qué es un roce por fricción pericárdico y qué lo causa?" },
            { question: "Aunque la mayoría de los casos son benignos, ¿cuál es la complicación más temida de la pericarditis?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Cardiovasculares."
        ],
        correctManage: `- Colocar al paciente en la posición de máximo confort, que casi siempre es sentado e inclinado hacia adelante.\n- Administrar oxígeno si hay disnea o hipoxia.\n- Establecer acceso IV.\n- Obtener un ECG de 12 derivaciones. Buscar elevaciones difusas del segmento ST (en la mayoría de las derivaciones, no localizadas en un territorio arterial) y una depresión del segmento PR, que son característicos de la pericarditis.\n- Manejo del dolor, usualmente con antiinflamatorios no esteroideos (AINEs) en el hospital.\n- Trasladar al hospital para confirmar el diagnóstico y descartar otras causas de dolor torácico.`,
        explanation: "La pericarditis es la inflamación del pericardio, el saco que rodea el corazón. El dolor es causado por el roce de las dos capas pericárdicas inflamadas. Este roce es lo que puede auscultarse como un sonido de 'cuero rozándose'. La complicación más grave es el taponamiento cardíaco, donde se acumula una gran cantidad de líquido en el espacio pericárdico, comprimiendo el corazón e impidiendo su llenado, lo que lleva al shock obstructivo. Aunque raro, es la razón por la que todos los pacientes con sospecha de pericarditis necesitan una evaluación hospitalaria."
    },
    {
        id: "trauma-mvc-multisistemico-51",
        title: "Colisión frontal de alta velocidad",
        description: "Paciente masculino de 25 años, conductor de un vehículo que impactó frontalmente contra un árbol a alta velocidad. Fue encontrado inconsciente, atrapado en el vehículo, con deformidad significativa del volante y el tablero.",
        initialAssessment: "Responde solo a estímulos dolorosos (retira extremidades). Vía aérea comprometida por sangre y secreciones. Respiración rápida, superficial y asimétrica. Abdomen distendido y rígido. Deformidad en ambos fémures.",
        vitalSigns: {
            "FC": "140 lpm (filiforme)",
            "TA": "80/40 mmHg",
            "FR": "34 rpm",
            "SpO2": "85% (con O2)",
            "GCS": "6 (O1, V2, M3)",
        },
        findings: [
            "Trauma multisistémico severo.",
            "Shock hipovolémico descompensado por hemorragia interna (abdominal/pélvica) y externa (fracturas femorales).",
            "Traumatismo craneoencefálico (TCE) severo y posible trauma torácico (tórax inestable/contusión pulmonar)."
        ],
        questions: [
            { question: "¿Cuáles son las prioridades inmediatas en el manejo de un paciente con trauma multisistémico y shock?" },
            { question: "¿Qué es la 'tríada letal' del trauma y cómo se previene en el entorno prehospitalario?" },
            { question: "¿Por qué el control de la temperatura es un componente crítico en el manejo de este paciente?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulos de Shock, Trauma Torácico y Trauma Abdominal."
        ],
        correctManage: `- Extracción rápida del vehículo con control de la columna cervical.\n- Manejo agresivo de la vía aérea: aspiración inmediata y considerar la intubación orotraqueal para proteger la vía y asegurar la ventilación.\n- Ventilar con BVM y oxígeno al 100%.\n- Controlar hemorragias externas masivas. Aplicar férulas de tracción a ambos fémures para estabilizar las fracturas y reducir el sangrado.\n- Establecer dos accesos IV de gran calibre e iniciar reanimación con líquidos (hipotensión permisiva, PAS 80-90 mmHg) y/o protocolo de transfusión masiva si está disponible.\n- Cubrir al paciente con mantas para prevenir la hipotermia.\n- Traslado emergente ('load and go') al centro de trauma más cercano.`,
        explanation: "Este paciente presenta un cuadro de shock hemorrágico severo por múltiples fuentes de sangrado. Las prioridades son detener el sangrado visible, reponer el volumen perdido y asegurar la oxigenación. La tríada letal (hipotermia, acidosis y coagulopatía) es un ciclo vicioso que aumenta drásticamente la mortalidad en trauma. Prevenir la pérdida de calor, ventilar adecuadamente para evitar la acidosis respiratoria y la reanimación juiciosa con líquidos ayudan a romper este ciclo, dando al paciente la mejor oportunidad de sobrevivir hasta la cirugía."
    },
    {
        id: "trauma-pelvis-inestable-52",
        title: "Atropellamiento de peatón con sospecha de fractura pélvica",
        description: "Mujer de 30 años es atropellada por un vehículo a moderada velocidad. A tu llegada, está consciente, quejándose de un dolor insoportable en la región de la cadera y la pelvis. Es incapaz de moverse.",
        initialAssessment: "Paciente pálida, ansiosa y con la piel fría. Refiere dolor severo a la palpación de las crestas ilíacas. Se observa inestabilidad pélvica a la compresión suave. No hay hemorragia externa evidente.",
        vitalSigns: {
            "FC": "130 lpm",
            "TA": "90/60 mmHg",
            "FR": "28 rpm",
            "SpO2": "95%",
        },
        findings: [
            "Fractura de pelvis inestable (ej. 'libro abierto').",
            "Shock hipovolémico por hemorragia retroperitoneal masiva.",
            "Alto riesgo de lesiones asociadas en vejiga, uretra y vasos sanguíneos pélvicos."
        ],
        questions: [
            { question: "¿Cuánta sangre puede perderse en el retroperitoneo por una fractura de pelvis inestable?" },
            { question: "¿Cuál es el propósito de aplicar un cinturón pélvico o una sábana para estabilizar la pelvis?" },
            { question: "¿Por qué se deben realizar un mínimo de manipulaciones en una pelvis que se sospecha inestable?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Musculoesquelético."
        ],
        correctManage: `- Inmovilización espinal completa debido al mecanismo de lesión.\n- Administrar oxígeno de alto flujo.\n- Una vez confirmada la inestabilidad, aplicar un cinturón pélvico comercial o una sábana doblada a nivel de los trocánteres mayores para cerrar la pelvis y reducir el volumen pélvico. NO volver a evaluar la pelvis una vez estabilizada.\n- Establecer dos accesos IV de gran calibre e iniciar reanimación agresiva con líquidos.\n- Manejo del dolor.\n- Traslado rápido y gentil a un centro de trauma, minimizando los movimientos.`,
        explanation: "Una fractura de pelvis inestable es una emergencia hemorrágica. El anillo pélvico protege un plexo venoso masivo y grandes arterias. Al romperse, el volumen de la pelvis aumenta, permitiendo una acumulación de varios litros de sangre. Cerrar la pelvis con un cinturón o una sábana (cierre mecánico) reduce este espacio, ayuda a tamponar la hemorragia y estabiliza los fragmentos óseos, siendo una de las intervenciones prehospitalarias más críticas para la supervivencia en este tipo de lesión."
    },
    {
        id: "trauma-quemadura-circunferencial-53",
        title: "Quemadura circunferencial en extremidad superior",
        description: "Hombre de 40 años sufre una quemadura por llama en todo su brazo derecho, desde el hombro hasta la mano, al intentar apagar un incendio en su taller. La piel está carbonizada y dura.",
        initialAssessment: "Paciente consciente, con dolor intenso. El brazo derecho está edematoso, con piel acartonada, dura e insensible al tacto (quemadura de tercer grado). El pulso radial en la extremidad afectada está ausente.",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "130/80 mmHg",
            "FR": "22 rpm",
        },
        findings: [
            "Quemadura circunferencial de tercer grado en una extremidad.",
            "Síndrome compartimental inminente.",
            "Pérdida de la perfusión distal (ausencia de pulso)."
        ],
        questions: [
            { question: "¿Qué es una quemadura circunferencial y por qué representa una emergencia para la extremidad?" },
            { question: "¿Cuáles son las '6 P' del síndrome compartimental?" },
            { question: "Además de la extremidad, ¿qué otra área del cuerpo, si sufre una quemadura circunferencial, puede comprometer la vida?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Lesiones por Quemaduras."
        ],
        correctManage: `- Detener el proceso de la quemadura con agua a temperatura ambiente. No usar hielo.\n- Administrar oxígeno de alto flujo, especialmente si hubo exposición a humo.\n- Retirar cualquier joya o ropa de la extremidad.\n- Elevar la extremidad por encima del nivel del corazón para disminuir el edema.\n- Establecer acceso IV en una zona no quemada e iniciar reanimación con líquidos según la fórmula de Parkland.\n- Manejo agresivo del dolor con analgésicos IV.\n- Notificar al hospital receptor sobre una quemadura circunferencial con pérdida de pulso. Esto es una indicación para una escarotomía de emergencia.\n- Traslado rápido a un centro de quemados o de trauma.`,
        explanation: "Una quemadura de tercer grado forma una escara dura e inelástica. Si esta escara rodea una extremidad (circunferencial), actúa como un torniquete a medida que el tejido subyacente se hincha. Este aumento de presión comprime los vasos sanguíneos y los nervios, causando un síndrome compartimental que puede llevar a la pérdida de la extremidad si no se trata. El tratamiento definitivo es una escarotomía, una incisión quirúrgica a través de la escara para liberar la presión. El tórax es otra área crítica; una quemadura circunferencial aquí puede restringir la ventilación."
    },
    {
        id: "trauma-tce-herniacion-54",
        title: "Traumatismo craneoencefálico con signos de herniación",
        description: "Motociclista sin casco es encontrado inconsciente después de una colisión. Inicialmente, respondía al dolor localizando, pero ahora su postura ha cambiado.",
        initialAssessment: "Paciente inconsciente. Se observa una pupila derecha dilatada y no reactiva (anisocoria). Al aplicar un estímulo doloroso, adopta una postura de decerebración (extensión de brazos y piernas). Presenta un patrón respiratorio irregular.",
        vitalSigns: {
            "FC": "50 lpm (bradicardia)",
            "TA": "180/100 mmHg (hipertensión)",
            "FR": "8 rpm (irregular, Cheyne-Stokes)",
            "GCS": "4 (O1, V1, M2)",
        },
        findings: [
            "Traumatismo craneoencefálico severo.",
            "Signos de herniación cerebral inminente (anisocoria, postura anormal).",
            "Tríada de Cushing presente, indicando una presión intracraneal (PIC) críticamente elevada."
        ],
        questions: [
            { question: "Describe la Tríada de Cushing y explica su fisiopatología." },
            { question: "¿Qué significa una pupila dilatada y no reactiva unilateral en el contexto de un TCE?" },
            { question: "¿Cuál es el objetivo de la hiperventilación controlada en este paciente y cuáles son sus riesgos?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Craneoencefálico y Espinal."
        ],
        correctManage: `- Inmovilización espinal completa.\n- Manejo agresivo de la vía aérea y la ventilación. Intubar al paciente para proteger la vía y controlar la ventilación.\n- Iniciar una hiperventilación controlada y leve: mantener una frecuencia respiratoria de 20 rpm, apuntando a un EtCO₂ (capnografía) de 30-35 mmHg. Esto causa vasoconstricción cerebral y reduce la PIC temporalmente.\n- Elevar la cabecera de la camilla a 30 grados para promover el drenaje venoso cerebral.\n- Asegurarse de mantener una presión arterial sistólica >100 mmHg para garantizar la perfusión cerebral.\n- Traslado emergente al centro de trauma con capacidad neuroquirúrgica.`,
        explanation: "Este paciente muestra signos claros de que el cerebro está siendo comprimido y desplazado (herniación) debido a un hematoma en expansión. La Tríada de Cushing (hipertensión, bradicardia, respiración irregular) es una respuesta tardía y ominosa del tronco encefálico a la PIC elevada. La pupila dilatada se debe a la compresión del nervio oculomotor (III par craneal). La hiperventilación controlada es una medida temporal para 'ganar tiempo' reduciendo la PIC en el camino al quirófano, pero debe usarse con precaución, ya que una vasoconstricción excesiva puede causar isquemia."
    },
    {
        id: "trauma-empalamiento-55",
        title: "Objeto empalado en el abdomen",
        description: "Un trabajador de la construcción cae desde una altura de 2 metros sobre una barra de refuerzo (varilla) que le penetra en el cuadrante superior derecho del abdomen.",
        initialAssessment: "Paciente consciente, alerta, con dolor severo. Una varilla de metal de aproximadamente 2 cm de diámetro protruye unos 30 cm desde su abdomen. Hay un sangrado mínimo alrededor del sitio de entrada.",
        vitalSigns: {
            "FC": "115 lpm",
            "TA": "105/70 mmHg",
            "FR": "22 rpm",
            "SpO2": "98%",
        },
        findings: [
            "Trauma penetrante abdominal con objeto empalado.",
            "El objeto puede estar tamponando una hemorragia masiva.",
            "Alto riesgo de lesión de órganos sólidos (hígado) y estructuras vasculares."
        ],
        questions: [
            { question: "¿Cuál es la regla de oro para manejar cualquier objeto empalado?" },
            { question: "Describe el proceso para estabilizar un objeto empalado largo antes del transporte." },
            { question: "¿Por qué un sangrado mínimo externo no descarta una hemorragia interna grave?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma Abdominal."
        ],
        correctManage: `- La prioridad es estabilizar el objeto y NO retirarlo.\n- Administrar oxígeno de alto flujo.\n- Establecer dos accesos IV de gran calibre en sitios alejados de la lesión.\n- Si el objeto es muy largo, puede ser necesario acortarlo con ayuda de los bomberos, asegurando que no haya vibración ni movimiento del extremo empalado.\n- Construir un 'castillo' o 'dona' de apósitos voluminosos o rollos de gasa alrededor del objeto para estabilizarlo y prevenir su movimiento. Asegurar el vendaje con cinta adhesiva.\n- Manejar el shock y el dolor.\n- Trasladar al paciente de forma muy gentil al centro de trauma más cercano.`,
        explanation: "Un objeto empalado actúa como un tapón. Su retirada en el campo, sin control quirúrgico, puede desencadenar una hemorragia exanguinante e incontrolable. El manejo prehospitalario se centra exclusivamente en estabilizar el objeto para prevenir más daño durante el movimiento y el transporte, y en tratar el shock. La extracción se realizará en un quirófano, donde los cirujanos pueden visualizar y controlar directamente el sangrado y las lesiones internas."
    },
    {
        id: "trauma-pediatrico-caida-56",
        title: "Caída de bicicleta con lesión abdominal",
        description: "Niño de 8 años cae de su bicicleta y el manillar le golpea directamente en el abdomen. Inicialmente, solo se quejaba de un dolor leve, pero una hora después está pálido, letárgico y se queja de dolor abdominal generalizado.",
        initialAssessment: "Niño somnoliento, responde a la voz. Piel pálida y fría. Abdomen distendido con equimosis en la zona del epigastrio. La palpación abdominal le provoca una defensa muscular involuntaria (abdomen en tabla).",
        vitalSigns: {
            "FC": "140 lpm",
            "FR": "30 rpm",
            "TA": "85/50 mmHg",
            "SpO2": "96%",
        },
        findings: [
            "Trauma abdominal cerrado con sospecha de hemorragia interna (laceración hepática o esplénica).",
            "Shock hipovolémico descompensado.",
            "Los niños pueden compensar el shock durante un tiempo y luego deteriorarse rápidamente."
        ],
        questions: [
            { question: "En trauma pediátrico, ¿cuáles son los órganos abdominales más comúnmente lesionados por un golpe del manillar?" },
            { question: "¿Por qué la frecuencia cardíaca y el tiempo de llenado capilar son indicadores más fiables de shock en niños que la presión arterial?" },
            { question: "¿Qué consideraciones especiales se aplican al administrar líquidos a un niño en shock?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Pediátrico."
        ],
        correctManage: `- Administrar oxígeno de alto flujo con una mascarilla no recirculante.\n- Colocar al niño en posición supina. Mantenerlo abrigado para prevenir la hipotermia.\n- Establecer acceso IV o IO (intraóseo) y administrar un bolo de solución salina normal a 20 ml/kg. Reevaluar la respuesta y repetir si es necesario.\n- Manejo del dolor con Fentanilo intranasal o IV en dosis apropiadas para el peso.\n- Traslado rápido y prioritario a un centro pediátrico de trauma.`,
        explanation: "Un golpe de manillar concentra una gran fuerza en un área pequeña, lo que lo hace particularmente peligroso para órganos sólidos como el hígado, el bazo o el páncreas. Los niños tienen una gran reserva fisiológica y pueden mantener una presión arterial normal hasta que han perdido una cantidad significativa de sangre (25-30% de su volumen). Por lo tanto, la taquicardia, la palidez y el estado mental alterado son signos más tempranos y fiables de shock. La reanimación con líquidos debe basarse en el peso y ser reevaluada constantemente."
    },
    {
        id: "trauma-amputacion-dedos-57",
        title: "Amputación traumática de varios dedos con una sierra",
        description: "Un carpintero de 35 años se amputa accidentalmente tres dedos de la mano izquierda (índice, medio y anular) con una sierra de mesa. Sus compañeros aplicaron un paño sobre la herida.",
        initialAssessment: "Paciente consciente, con dolor severo pero controlando el sangrado con presión directa. La mano está envuelta en un trapo empapado en sangre. Los dedos amputados están en el suelo.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "130/85 mmHg",
            "FR": "20 rpm",
        },
        findings: [
            "Amputación traumática de múltiples dígitos.",
            "Hemorragia controlada.",
            "Necesidad de un cuidado meticuloso de las partes amputadas para un posible reimplante."
        ],
        questions: [
            { question: "¿Cuál es el procedimiento paso a paso para preservar correctamente una parte amputada?" },
            { question: "¿Por qué nunca se debe colocar una parte amputada directamente sobre el hielo?" },
            { question: "En este caso, ¿es necesario un torniquete?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Trauma de Extremidades."
        ],
        correctManage: `- Controlar la hemorragia de la mano con presión directa y elevación. Un torniquete no suele ser necesario para amputaciones de dedos y podría dañar tejido viable.\n- Administrar oxígeno y manejar el dolor.\n- Cuidado de las partes amputadas: \n  1. Recoger los dedos.\n  2. Enjuagarlos suavemente con solución salina estéril para quitar la suciedad.\n  3. Envolverlos individualmente en una gasa estéril humedecida con solución salina.\n  4. Colocar las partes envueltas en una bolsa de plástico impermeable y sellarla.\n  5. Colocar esa bolsa en un segundo recipiente (otra bolsa o un contenedor) con agua fría y algo de hielo. NO CONGELAR.\n- Trasladar al paciente y las partes amputadas al centro apropiado con capacidad de microcirugía.`,
        explanation: "El objetivo del cuidado de una parte amputada es mantenerla viable el mayor tiempo posible. Esto se logra manteniéndola limpia, húmeda y fría, pero no congelada. El hielo directo causaría congelación y daño celular irreversible, haciendo imposible el reimplante. La envoltura húmeda previene la desecación del tejido. El transporte adecuado del paciente y de las partes es crucial para el éxito de la cirugía de reimplante."
    },
    {
        id: "trauma-ahorcamiento-58",
        title: "Intento de suicidio por ahorcamiento",
        description: "Paciente de 40 años es encontrado por su familia colgado de una viga. Lo bajaron inmediatamente antes de tu llegada. Está inconsciente pero respira.",
        initialAssessment: "Paciente inconsciente, responde al dolor con gemidos. Presenta marcas de ligadura profundas en el cuello. Respiraciones ruidosas (estridor) y superficiales. Cianosis facial y petequias en la cara y los párpados.",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "140/90 mmHg",
            "FR": "24 rpm",
            "SpO2": "88%",
        },
        findings: [
            "Lesión por ahorcamiento con compromiso de la vía aérea.",
            "Hipoxia cerebral por compresión vascular y de la vía aérea.",
            "Alta probabilidad de lesión de la columna cervical (a menudo pasada por alto)."
        ],
        questions: [
            { question: "¿Cuáles son los dos mecanismos principales de lesión en un ahorcamiento (judicial vs. no judicial)?" },
            { question: "¿Por qué se debe asumir siempre una lesión de la columna cervical en estos pacientes?" },
            { question: "¿Qué complicaciones de la vía aérea se deben anticipar en el manejo de este paciente?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma de Cabeza y Cuello."
        ],
        correctManage: `- Inmovilización manual inmediata y completa de la columna cervical. No quitar el collarín improvisado si lo tuviera, estabilizarlo.\n- Manejo cuidadoso de la vía aérea. Realizar una tracción mandibular para abrir la vía. Estar preparado para una vía aérea difícil debido al edema laríngeo y la lesión traqueal.\n- Administrar oxígeno al 100% con BVM para asistir las ventilaciones y tratar la hipoxia.\n- Establecer acceso IV.\n- Monitorización continua. Estar atento a convulsiones por la lesión cerebral anóxica.\n- Traslado a un centro de trauma.`,
        explanation: "En un intento de suicidio por ahorcamiento, la muerte suele ocurrir por compresión de las venas yugulares y las arterias carótidas, impidiendo el flujo sanguíneo cerebral, más que por la fractura de la columna cervical (típica de los ahorcamientos judiciales con caída). Sin embargo, se debe asumir una lesión cervical hasta que se demuestre lo contrario. La vía aérea es la principal preocupación, ya que el daño a la laringe y la tráquea, junto con el edema post-isquémico, puede causar una obstrucción completa y de difícil manejo."
    },
    {
        id: "trauma-inhalacion-59",
        title: "Quemadura de la vía aérea en un incendio",
        description: "Un bombero sale de un edificio en llamas, se quita la mascarilla y sufre un colapso. Estuvo expuesto a humo denso y altas temperaturas.",
        initialAssessment: "Paciente consciente pero con voz ronca y disnea. Presenta hollín en la boca y las fosas nasales, y quemaduras faciales. Tose esputo carbonáceo (negro). Se escucha estridor inspiratorio.",
        vitalSigns: {
            "FC": "130 lpm",
            "TA": "120/80 mmHg",
            "FR": "28 rpm",
            "SpO2": "95% (lectura puede ser engañosa)",
        },
        findings: [
            "Lesión por inhalación con quemadura de la vía aérea superior.",
            "Edema laríngeo progresivo y obstrucción inminente de la vía aérea.",
            "Posible intoxicación por monóxido de carbono y cianuro."
        ],
        questions: [
            { question: "¿Cuáles son los signos clínicos que predicen una obstrucción inminente de la vía aérea en un paciente quemado?" },
            { question: "¿Por qué la intubación temprana es crucial en estos pacientes, incluso si inicialmente parecen estables?" },
            { question: "Además del daño térmico, ¿qué dos intoxicaciones potencialmente letales se deben sospechar?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Lesiones por Quemaduras."
        ],
        correctManage: `- Administrar oxígeno humidificado al 100% con una mascarilla no recirculante.\n- Prepararse para una intubación orotraqueal difícil y realizarla de forma temprana. El edema de la vía aérea puede progresar rápidamente, haciendo la intubación imposible más tarde.\n- Utilizar un tubo de mayor tamaño posible y asegurar su correcta colocación.\n- Establecer acceso IV para reanimación con líquidos.\n- Evaluar y tratar otras quemaduras o lesiones.\n- Considerar kits de antídotos para cianuro si están disponibles y la sospecha es alta.\n- Traslado rápido a un centro de quemados.`,
        explanation: "La lesión por inhalación es la principal causa de muerte en los incendios. El calor supercaliente quema la vía aérea superior (faringe, laringe), causando un edema masivo que puede obstruirla por completo en minutos u horas. El estridor y la voz ronca son signos ominosos. La intubación profiláctica temprana, antes de que el edema sea severo, es una intervención que salva la vida. Además, los productos de la combustión (CO y cianuro) causan hipoxia celular sistémica, complicando aún más el cuadro."
    },
    {
        id: "trauma-compartimental-60",
        title: "Dolor desproporcionado tras una fractura de tibia",
        description: "Paciente de 20 años sufrió una fractura cerrada de tibia y peroné jugando al fútbol hace 4 horas. Fue inmovilizado con una férula en el campo. Ahora, a pesar de la inmovilización, el dolor ha aumentado exponencialmente y no responde a la analgesia.",
        initialAssessment: "Paciente ansioso, con un dolor que describe como 'una presión intensa que va a estallar'. El compartimento anterior de la pierna está tenso y duro como una roca a la palpación. Presenta parestesias (hormigueo) en el pie. El dolor se exacerba masivamente con la flexión pasiva del dedo gordo.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "135/85 mmHg",
            "FR": "22 rpm",
        },
        findings: [
            "Síndrome compartimental agudo.",
            "El dolor desproporcionado al estímulo es el signo más temprano y sensible.",
            "La pérdida de pulso es un signo muy tardío e indica daño irreversible."
        ],
        questions: [
            { question: "¿Cuál es la fisiopatología del síndrome compartimental?" },
            { question: "Describe las '6 P' del síndrome compartimental y cuál de ellas es la más importante en la evaluación temprana." },
            { question: "¿Qué acciones prehospitalarias se deben tomar para no empeorar la condición?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Musculoesquelético."
        ],
        correctManage: `- Colocar la extremidad a nivel del corazón. NO elevarla, ya que esto puede disminuir aún más la perfusión arterial al compartimento.\n- Aflojar o retirar cualquier vendaje o férula que esté apretado para eliminar la compresión externa.\n- Administrar oxígeno y establecer acceso IV.\n- Manejo agresivo del dolor con analgésicos narcóticos, aunque es probable que no sea muy efectivo.\n- Notificar al hospital receptor sobre una alta sospecha de 'código compartimental'.\n- Traslado urgente para medición de presiones compartimentales y posible fasciotomía de emergencia.`,
        explanation: "El síndrome compartimental ocurre cuando la presión dentro de un compartimento muscular (un espacio cerrado por fascia inelástica) aumenta a un nivel que compromete la perfusión sanguínea de los músculos y nervios dentro de ese espacio. Es una emergencia quirúrgica. El dolor intenso y desproporcionado es la clave del diagnóstico temprano. El tratamiento definitivo es una fasciotomía, una incisión quirúrgica que abre la fascia y libera la presión. Sin un tratamiento rápido, puede resultar en necrosis muscular, daño nervioso permanente y la posible amputación de la extremidad."
    },
    {
        id: "pediatria-aspiracion-61",
        title: "Atragantamiento súbito en un niño pequeño",
        description: "Un niño de 2 años estaba comiendo uvas cuando de repente comenzó a toser, se llevó las manos al cuello y su cara se puso azul. A tu llegada, está flácido en los brazos de su madre.",
        initialAssessment: "Niño inconsciente, flácido y cianótico. No hay movimientos respiratorios visibles. No hay respuesta a estímulos verbales o dolorosos.",
        vitalSigns: {
            "FC": "40 lpm (bradicardia severa)",
            "FR": "0",
            "SpO2": "Inmedible",
        },
        findings: [
            "Obstrucción completa de la vía aérea por cuerpo extraño (OVACE).",
            "Paro respiratorio con paro cardíaco inminente por hipoxia severa.",
            "Emergencia pediátrica de máxima prioridad."
        ],
        questions: [
            { question: "¿Cuál es la secuencia de acciones para un niño inconsciente con sospecha de OVACE?" },
            { question: "¿Qué modificación se hace al iniciar las compresiones torácicas en este escenario en comparación con un paro cardíaco primario?" },
            { question: "Si el cuerpo extraño es visible en la boca, ¿qué debes hacer?" }
        ],
        references: [
            "AHA Guidelines for Pediatric Advanced Life Support (PALS).",
            "AAOS 11ª Edición - Capítulo de Manejo de la Vía Aérea."
        ],
        correctManage: `- Colocar al niño en una superficie dura e iniciar RCP inmediatamente, comenzando con las compresiones torácicas.\n- Antes de intentar ventilar, abrir la boca y buscar el objeto. Si el objeto es visible, intentar retirarlo con una maniobra de barrido digital. NO realizar barridos a ciegas.\n- Intentar dar 2 ventilaciones. Si el pecho no se eleva, reposicionar la cabeza e intentar ventilar de nuevo.\n- Continuar ciclos de compresiones y ventilaciones (con la inspección de la vía aérea antes de cada intento de ventilación).\n- Si la obstrucción persiste, considerar el uso de laringoscopio y pinzas de Magill para la extracción directa del cuerpo extraño, si el protocolo y la formación lo permiten.\n- El objetivo es aliviar la obstrucción lo antes posible para poder oxigenar al paciente.`,
        explanation: "En un niño inconsciente con OVACE, la RCP es la intervención clave. Las compresiones torácicas ayudan a aumentar la presión intratorácica, lo que puede ayudar a desalojar el objeto, funcionando como una 'maniobra de Heimlich' interna. A diferencia de un paro cardíaco estándar, la prioridad es la obstrucción. Cada vez que se abre la vía aérea para ventilar, se debe buscar el objeto. La laringoscopia directa es a menudo la mejor oportunidad para resolver la obstrucción si las maniobras básicas fallan."
    },
    {
        id: "sepsis-anciano-62",
        title: "Alteración del estado mental en residente de asilo",
        description: "Mujer de 85 años, residente de un asilo y con una sonda urinaria permanente, es encontrada por el personal más somnolienta de lo normal. No quiere comer y se siente caliente al tacto.",
        initialAssessment: "Paciente letárgica, responde a la voz pero está desorientada en tiempo y lugar ('no es su estado basal'). Piel caliente, seca y enrojecida. La orina en la bolsa colectora es turbia y maloliente.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "88/50 mmHg",
            "FR": "26 rpm",
            "SpO2": "93% (aire ambiente)",
            "Temp": "38.8°C",
        },
        findings: [
            "Shock séptico, probablemente de origen urinario (urosepsis).",
            "Los signos de infección en los ancianos pueden ser sutiles (cambio en el estado mental) en lugar de específicos.",
            "Cumple con los criterios de qSOFA (estado mental alterado, FR >22, PAS <100)."
        ],
        questions: [
            { question: "¿Por qué la alteración del estado mental es a menudo el primer y único signo de una infección grave en los ancianos?" },
            { question: "¿Qué es el lactato sérico y por qué es un marcador importante en la sepsis?" },
            { question: "En el manejo prehospitalario, ¿cuál es la intervención más importante para mejorar la supervivencia en el shock séptico?" }
        ],
        references: [
            "Surviving Sepsis Campaign Guidelines.",
            "AAOS 11ª Edición - Capítulo de Emergencias Geriátricas."
        ],
        correctManage: `- Administrar oxígeno de alto flujo para corregir la hipoxia y satisfacer la demanda metabólica.\n- Establecer acceso IV de gran calibre (o IO si es necesario) e iniciar una reanimación agresiva con líquidos (bolo de 30 ml/kg de solución salina, según protocolo) para tratar la hipotensión por vasodilatación.\n- Obtener una muestra de glucosa en sangre.\n- Notificar al hospital receptor con una alerta de 'código sepsis' para facilitar la administración rápida de antibióticos.\n- Mantener a la paciente abrigada y monitorizar continuamente su estado hemodinámico y mental.`,
        explanation: "La sepsis es una disfunción orgánica potencialmente mortal causada por una respuesta desregulada a la infección. En los ancianos, la respuesta inmunitaria puede estar atenuada, por lo que los signos clásicos de infección pueden estar ausentes. El shock séptico causa una vasodilatación masiva ('shock distributivo'), lo que lleva a una hipotensión profunda. La administración temprana y agresiva de líquidos intravenosos para restaurar el volumen circulante y la perfusión de los órganos es la piedra angular del manejo prehospitalario y ha demostrado mejorar significativamente los resultados."
    },
    {
        id: "toxicologia-viuda-negra-63",
        title: "Calambres abdominales severos tras picadura de araña",
        description: "Un granjero de 45 años estaba limpiando un granero cuando sintió un piquete agudo en el antebrazo. Vio una pequeña araña negra con una marca roja. Una hora después, desarrolla un dolor muscular intenso que se extiende desde el brazo al pecho y al abdomen.",
        initialAssessment: "Paciente en evidente dolor, diaforético y ansioso. Presenta calambres musculares generalizados. El abdomen está rígido como una tabla, pero no hay sensibilidad a la palpación que sugiera peritonitis.",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "160/100 mmHg",
            "FR": "24 rpm",
            "Dolor": "10/10",
        },
        findings: [
            "Envenenamiento por araña viuda negra (latrodectismo).",
            "El veneno es una neurotoxina que causa una liberación masiva de neurotransmisores.",
            "El 'abdomen en tabla' sin sensibilidad a la palpación es un signo clásico."
        ],
        questions: [
            { question: "¿Cuál es el principal componente del veneno de la viuda negra y cuál es su mecanismo de acción?" },
            { question: "¿Cómo se puede diferenciar clínicamente un abdomen rígido por latrodectismo de un abdomen agudo quirúrgico?" },
            { question: "¿Cuál es el tratamiento principal para los espasmos musculares y el dolor severo?" }
        ],
        references: [
            "Goldfrank's Toxicologic Emergencies, 11th Edition."
        ],
        correctManage: `- Colocar al paciente en una posición cómoda y tranquilizarlo.\n- Administrar oxígeno de alto flujo.\n- Establecer acceso IV. El tratamiento se centra en el control del dolor y los espasmos musculares.\n- Administrar benzodiacepinas (ej. Diazepam o Midazolam IV) para la relajación muscular y la sedación.\n- Administrar analgésicos opiáceos (ej. Fentanilo o Morfina IV) para el dolor severo.\n- Monitorización cardíaca y de la presión arterial continua.\n- Traslado al hospital para un manejo continuo. El antídoto (Antivenina Latrodectus) se reserva para los casos más graves.`,
        explanation: "El veneno de la viuda negra contiene alfa-latrotoxina, que se une a las terminaciones nerviosas presinápticas y provoca una liberación masiva y descontrolada de acetilcolina y norepinefrina. Esto conduce a espasmos musculares generalizados (incluyendo la pared abdominal) e hipertensión/taquicardia. A diferencia de un abdomen quirúrgico, el dolor es en el músculo de la pared, no en el peritoneo, por lo que la palpación profunda no suele empeorar el dolor. El tratamiento es de soporte, enfocado en controlar los síntomas con benzodiacepinas y opiáceos."
    },
    {
        id: "trauma-fractura-abierta-64",
        title: "Fractura abierta de tibia con hemorragia activa",
        description: "Un esquiador de 28 años pierde el control y choca contra un árbol. Presenta una deformidad severa en la pierna derecha, con un fragmento de hueso visible que protruye a través de la piel y un sangrado arterial pulsátil.",
        initialAssessment: "Paciente consciente, con dolor extremo. Se observa una fractura abierta de tibia y peroné con un fragmento óseo expuesto y una herida sangrante. El pie distal está pálido y frío.",
        vitalSigns: {
            "FC": "125 lpm",
            "TA": "100/70 mmHg",
            "FR": "24 rpm",
        },
        findings: [
            "Fractura abierta (expuesta) de tibia y peroné (Grado III).",
            "Hemorragia arterial activa con riesgo de shock hipovolémico.",
            "Compromiso neurovascular distal."
        ],
        questions: [
            { question: "¿Cuál es la primera y más importante prioridad en el manejo de una fractura abierta con sangrado activo?" },
            { question: "Describe el procedimiento para irrigar y cubrir una fractura abierta en el campo." },
            { question: "¿Cómo se debe alinear e inmovilizar una fractura angulada con compromiso vascular?" }
        ],
        references: [
            "PHTLS 9ª Edición - Capítulo de Trauma Musculoesquelético."
        ],
        correctManage: `- ¡Controlar la hemorragia! Aplicar presión directa sobre la herida. Si no es suficiente, aplicar un torniquete proximal a la fractura y apretarlo hasta que cese el sangrado. Anotar la hora.\n- Administrar oxígeno y manejar el shock.\n- Establecer acceso IV.\n- Irrigar la herida con solución salina estéril para eliminar la contaminación visible.\n- Cubrir el hueso expuesto y la herida con un apósito estéril y húmedo, y luego cubrir con un vendaje seco.\n- Evaluar el pulso, la función motora y la sensibilidad distal (PMS). Si el pulso está ausente, aplicar una tracción longitudinal suave para realinear la extremidad a una posición anatómica y reevaluar el pulso.\n- Inmovilizar la extremidad con una férula rígida o de vacío, incluyendo la rodilla y el tobillo.\n- Traslado al centro de trauma.`,
        explanation: "En una fractura abierta, las prioridades son las mismas que en cualquier trauma: controlar la hemorragia masiva es lo primero (X-ABCDE). Un torniquete es la herramienta de elección para el sangrado arterial no controlado en una extremidad. Una vez controlada la hemorragia, los objetivos son prevenir la infección (irrigando y cubriendo la herida) y estabilizar la fractura para prevenir más daño, reducir el dolor y restaurar la perfusión si está comprometida. La alineación de la fractura puede aliviar la presión sobre los vasos sanguíneos y restaurar el flujo sanguíneo distal."
    },
    {
        id: "neuro-reaccion-distonica-65",
        title: "Espasmos faciales y de cuello de inicio súbito",
        description: "Paciente psiquiátrico de 25 años, que recientemente comenzó a tomar un nuevo antipsicótico (Haloperidol), desarrolla espasmos involuntarios y dolorosos de los músculos del cuello (tortícolis), la mandíbula (trismo) y los ojos (crisis oculógira).",
        initialAssessment: "Paciente consciente y aterrorizado, incapaz de controlar sus movimientos. El cuello está torcido hacia un lado, los ojos están desviados hacia arriba y la lengua protruye. Habla con dificultad pero la vía aérea no está comprometida.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "140/90 mmHg",
            "FR": "20 rpm",
            "SpO2": "99%",
        },
        findings: [
            "Reacción distónica aguda, un efecto secundario extrapiramidal de los antipsicóticos.",
            "Aunque no suele ser mortal, es extremadamente angustiante y dolorosa.",
            "Riesgo de compromiso de la vía aérea si se produce un laringoespasmo (raro)."
        ],
        questions: [
            { question: "¿Qué clase de medicamentos son conocidos por causar reacciones distónicas agudas?" },
            { question: "¿Cuál es el mecanismo de acción de esta reacción adversa?" },
            { question: "¿Cuál es el antídoto de primera línea y qué tan rápido funciona?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Psiquiátricas."
        ],
        correctManage: `- Asegurar al paciente que se trata de una reacción a su medicamento y que es reversible. La tranquilidad es clave.\n- Mantener una vía aérea permeable y administrar oxígeno. Estar atento a cualquier signo de laringoespasmo.\n- Establecer acceso IV.\n- Administrar el antídoto: Difenhidramina (un antihistamínico con fuertes propiedades anticolinérgicas), usualmente 25-50 mg IV lento.\n- La mejoría suele ser dramática y ocurre en 2 a 5 minutos.\n- Transportar al paciente para una evaluación médica, ya que puede requerir un cambio en su medicación.`,
        explanation: "Los antipsicóticos (especialmente los de primera generación como el Haloperidol) y algunos antieméticos (Metoclopramida) pueden bloquear los receptores de dopamina en los ganglios basales del cerebro. Este desequilibrio entre la dopamina y la acetilcolina provoca contracciones musculares sostenidas e involuntarias (distonía). La difenhidramina, con su potente efecto anticolinérgico central, restablece rápidamente este equilibrio, aliviando los síntomas de manera espectacular. Es una de las emergencias médicas más gratificantes de tratar en el campo."
    },
    {
        id: "ginecologia-ectopico-roto-66",
        title: "Síncope y dolor abdominal en mujer joven",
        description: "Mujer de 28 años sufre un episodio de síncope en casa. A tu llegada, está consciente pero pálida y mareada. Se queja de un dolor abdominal bajo, agudo y punzante, que irradia al hombro derecho. Refiere un retraso menstrual de 6 semanas.",
        initialAssessment: "Paciente pálida, con la piel fría y húmeda. Taquicárdica y taquipneica. El abdomen está distendido y presenta una marcada sensibilidad a la palpación en el cuadrante inferior derecho, con defensa involuntaria.",
        vitalSigns: {
            "FC": "135 lpm",
            "TA": "85/45 mmHg",
            "FR": "28 rpm",
            "SpO2": "95%",
        },
        findings: [
            "Embarazo ectópico roto con hemorragia intraabdominal masiva.",
            "Shock hipovolémico descompensado.",
            "El dolor referido al hombro (signo de Kehr) se debe a la irritación del diafragma por la sangre."
        ],
        questions: [
            { question: "¿Qué es un embarazo ectópico y por qué su ruptura es una emergencia mortal?" },
            { question: "¿Qué tres hallazgos (la 'tríada clásica') sugieren un embarazo ectópico?" },
            { question: "¿Cuál es la prioridad absoluta en el manejo de esta paciente?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ginecológicas."
        ],
        correctManage: `- Administrar oxígeno de alto flujo.\n- Colocar a la paciente en posición supina. Considerar la posición de Trendelenburg si la hipotensión es severa.\n- Establecer dos accesos IV de gran calibre e iniciar una reanimación agresiva con cristaloides para tratar el shock.\n- NO administrar analgésicos que puedan enmascarar los signos peritoneales.\n- Traslado emergente ('load and go') a un hospital con capacidad de cirugía y obstetricia de emergencia. Notificar al hospital sobre una alta sospecha de 'ectópico roto'.`,
        explanation: "Un embarazo ectópico ocurre cuando un óvulo fertilizado se implanta fuera del útero, comúnmente en la trompa de Falopio. A medida que crece, puede romper la trompa, causando una hemorragia arterial masiva en la cavidad abdominal. La tríada clásica es dolor abdominal, amenorrea (retraso menstrual) y sangrado vaginal (aunque puede estar ausente). Es una de las principales causas de mortalidad materna en el primer trimestre. El tratamiento es una cirugía de emergencia para detener la hemorragia, por lo que la velocidad del diagnóstico y el transporte son esenciales."
    },
    {
        id: "ambiental-rayo-67",
        title: "Múltiples víctimas tras la caída de un rayo",
        description: "Durante una tormenta eléctrica, un rayo cae cerca de un grupo de personas en un campo de golf. Se reportan dos víctimas: una está inconsciente y sin respiración, la otra está consciente pero confundida y no puede mover las piernas.",
        initialAssessment: "Escena segura (la tormenta ha pasado). Víctima 1: Inconsciente, apneica, sin pulso, pupilas fijas y dilatadas. Víctima 2: Consciente, gritando, con paraparesia (debilidad) en las piernas y quemaduras superficiales en forma de helecho (figuras de Lichtenberg) en la espalda.",
        vitalSigns: {
            "Víctima 1": "En paro cardiorrespiratorio.",
            "Víctima 2": "FC: 110 lpm, TA: 130/80 mmHg, FR: 22 rpm",
        },
        findings: [
            "Lesión por rayo con múltiples víctimas.",
            "Paro cardiorrespiratorio en la víctima 1 (causa principal de muerte inmediata).",
            "Lesiones neurológicas y cutáneas en la víctima 2."
        ],
        questions: [
            { question: "Explica el principio de 'triage inverso' y por qué se aplica a las víctimas de un rayo." },
            { question: "¿Cuál es el mecanismo más común de muerte en una víctima de rayo?" },
            { question: "¿Qué son las figuras de Lichtenberg?" }
        ],
        references: [
            "AAOS 11ª Edición - Capítulo de Emergencias Ambientales."
        ],
        correctManage: `- Aplicar el triage inverso: la prioridad es la víctima en paro cardiorrespiratorio (Víctima 1).\n- Iniciar RCP de alta calidad inmediatamente en la Víctima 1. La desfibrilación es a menudo necesaria. La reanimación prolongada puede tener éxito.\n- Una vez que haya suficientes rescatadores, otro equipo debe atender a la Víctima 2.\n- Para la Víctima 2: Inmovilización espinal completa debido al mecanismo de trauma (puede haber sido lanzada por la onda expansiva). Administrar oxígeno, establecer acceso IV y tratar las quemaduras como quemaduras térmicas.\n- Transportar a ambas víctimas al hospital.`,
        explanation: "El triage inverso se aplica en incidentes con rayos porque las víctimas que parecen muertas (en paro cardiorrespiratorio) pueden ser reanimadas con éxito si se inicia la RCP de inmediato. La corriente eléctrica masiva despolariza todo el miocardio a la vez (asistolia) y paraliza el centro respiratorio del cerebro. A menudo, el corazón puede reiniciar su ritmo espontáneamente, pero el paciente no respira, lo que conduce a un segundo paro hipóxico. La ventilación y la RCP tempranas pueden ser salvadoras. Las víctimas que están conscientes y respirando al principio, probablemente sobrevivirán. Las figuras de Lichtenberg son patrones cutáneos patognomónicos causados por la ruptura de capilares."
    },
    {
        id: "trauma-estrangulamiento-68",
        title: "Víctima de violencia doméstica con dificultad para respirar",
        description: "Mujer de 35 años llama al 911 después de que su pareja la estrangulara durante un altercado. Está consciente y respirando, pero se queja de dolor de garganta, voz ronca y dificultad para tragar.",
        initialAssessment: "Paciente sentada, ansiosa. Se observan petequias en la cara y las conjuntivas. Hay marcas de dedos rojas en el cuello. La voz es notablemente ronca. No hay estridor en reposo, pero sí al respirar profundamente.",
        vitalSigns: {
            "FC": "105 lpm",
            "TA": "140/90 mmHg",
            "FR": "22 rpm",
            "SpO2": "96%",
        },
        findings: [
            "Lesión por estrangulamiento.",
            "Alto riesgo de edema de la vía aérea de aparición tardía.",
            "Posibles lesiones ocultas en la arteria carótida, la laringe y la columna cervical."
        ],
        questions: [
            { question: "¿Por qué el estrangulamiento, incluso sin pérdida de conciencia, es una lesión potencialmente letal?" },
            { question: "¿Qué son las petequias y por qué aparecen en la cara y los ojos en estos casos?" },
            { question: "Además del edema de la vía aérea, ¿qué otra complicación vascular grave puede ocurrir días después?" }
        ],
        references: [
            "Journal of Emergency Medicine - Strangulation Injuries."
        ],
        correctManage: `- Inmovilización espinal cervical por el mecanismo de lesión.\n- Administrar oxígeno humidificado de alto flujo para disminuir la irritación de la vía aérea.\n- Colocar a la paciente en una posición cómoda (semi-sentado) y minimizar la agitación.\n- Establecer acceso IV.\n- Monitorización continua y muy cercana de la vía aérea. Estar preparado para una vía aérea difícil si el edema progresa. Tener a mano múltiples opciones de manejo de la vía aérea.\n- Trasladar a todos los pacientes con sospecha de estrangulamiento para observación hospitalaria, incluso si parecen estar bien inicialmente.`,
        explanation: "El estrangulamiento es una forma de violencia extremadamente peligrosa. La presión sobre el cuello puede fracturar la laringe o el hioides, y causar un edema interno que progresa lentamente hasta obstruir por completo la vía aérea horas después del incidente. También puede dañar la capa interna de las arterias carótidas, lo que lleva a la formación de coágulos y a un ACV días después. Las petequias se forman por la ruptura de capilares debido al aumento de la presión venosa por encima del punto de compresión. Todo paciente víctima de estrangulamiento requiere una evaluación médica exhaustiva."
    },
    {
        id: "neuro-crisis-miastenica-69",
        title: "Debilidad muscular y dificultad respiratoria progresiva",
        description: "Paciente de 40 años con diagnóstico de Miastenia Gravis llama por una debilidad generalizada que ha empeorado rápidamente en las últimas horas. Ahora tiene dificultad para mantener la cabeza erguida y siente que no puede respirar profundo.",
        initialAssessment: "Paciente en silla de ruedas, con ptosis palpebral bilateral (párpados caídos). Habla con una voz nasal y débil que se fatiga rápidamente. Respiraciones superficiales. Es incapaz de levantar los brazos por encima de los hombros.",
        vitalSigns: {
            "FC": "110 lpm",
            "TA": "130/80 mmHg",
            "FR": "28 rpm (superficial)",
            "SpO2": "91%",
        },
        findings: [
            "Crisis miasténica, una exacerbación potencialmente mortal de la Miastenia Gravis.",
            "Insuficiencia respiratoria inminente por debilidad de los músculos respiratorios (diafragma e intercostales).",
            "Incapacidad para manejar secreciones por debilidad de los músculos bulbares."
        ],
        questions: [
            { question: "¿Qué es la Miastenia Gravis?" },
            { question: "¿Cómo se puede evaluar rápidamente la gravedad de la debilidad respiratoria en el campo?" },
            { question: "Diferencia entre una crisis miasténica y una crisis colinérgica." }
        ],
        references: [
            "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9th Edition."
        ],
        correctManage: `- Soporte agresivo de la ventilación. La prioridad es asistir la respiración del paciente. Utilizar una BVM con oxígeno al 100% para ayudar en cada respiración del paciente, asegurando una buena elevación del pecho.\n- Colocar al paciente en posición sentada para maximizar la mecánica ventilatoria.\n- Estar preparado para aspirar secreciones.\n- Establecer acceso IV.\n- Notificar al hospital receptor sobre una crisis miasténica para que preparen la unidad de cuidados intensivos y posibles tratamientos como la plasmaféresis o inmunoglobulina IV.\n- El soporte ventilatorio es la clave del manejo prehospitalario; no retrasar el traslado.`,
        explanation: "La Miastenia Gravis es una enfermedad autoinmune donde los anticuerpos bloquean los receptores de acetilcolina en la unión neuromuscular, causando debilidad muscular fluctuante. Una crisis miasténica es una exacerbación tan severa que la debilidad de los músculos respiratorios conduce a la insuficiencia ventilatoria. Es una emergencia de la vía aérea y la respiración. A diferencia de otras causas de dificultad respiratoria, el problema aquí no es la obstrucción, sino la 'falla de la bomba' muscular. El soporte ventilatorio es la intervención que salva la vida hasta que el tratamiento específico pueda iniciarse."
    },
    {
        id: "shock-cardiogenico-70",
        title: "Infarto masivo con hipotensión y signos de shock",
        description: "Hombre de 60 años con dolor torácico severo. A tu llegada, está pálido, con la piel fría, moteada y sudorosa. Está confundido y tiene dificultad para respirar.",
        initialAssessment: "Paciente letárgico, responde a la voz. Piel fría, diaforética y con livedo reticularis (moteado) en las rodillas. Estertores crepitantes en todos los campos pulmonares. Pulsos periféricos muy débiles.",
        vitalSigns: {
            "FC": "120 lpm",
            "TA": "75/50 mmHg",
            "FR": "30 rpm",
            "SpO2": "85% (con mascarilla no recirculante)",
        },
        findings: [
            "Shock cardiogénico, probablemente secundario a un infarto agudo de miocardio (IAM) extenso.",
            "Fallo agudo de la bomba cardíaca, lo que lleva a hipoperfusión tisular y congestión pulmonar (edema pulmonar).",
            "Paciente en estado crítico con alta mortalidad."
        ],
        questions: [
            { question: "¿Cómo se diferencia clínicamente el shock cardiogénico del shock hipovolémico?" },
            { question: "¿Por qué la administración de grandes bolos de líquidos puede ser perjudicial o incluso mortal en el shock cardiogénico?" },
            { question: "¿Qué es un vasopresor y por qué es el tratamiento farmacológico de elección en este tipo de shock?" }
        ],
        references: [
            "AHA Guidelines for ACLS.",
            "AAOS 11ª Edición - Capítulo de Shock."
        ],
        correctManage: `- Manejo de la vía aérea y la ventilación. Considerar el soporte con presión positiva (CPAP/BiPAP) para tratar el edema pulmonar si el paciente puede cooperar, o la intubación si no puede.\n- Obtener un ECG de 12 derivaciones para confirmar el IAM y activar el laboratorio de cateterismo cardíaco.\n- Administrar aspirina si no se ha hecho.\n- La reanimación con líquidos debe ser extremadamente cautelosa. Se puede administrar un pequeño bolo (ej. 250 ml) y reevaluar. Si los estertores empeoran, detener los líquidos.\n- Iniciar una infusión de un vasopresor (como Norepinefrina o Dopamina) según el protocolo de cuidados críticos para aumentar la presión arterial y la perfusión de los órganos coronarios y sistémicos.\n- Traslado inmediato al centro cardíaco más cercano.`,
        explanation: "El shock cardiogénico es un estado de hipoperfusión causado por un fallo cardíaco severo. El corazón no puede bombear suficiente sangre para satisfacer las demandas del cuerpo. A diferencia del shock hipovolémico donde el 'tanque está vacío', aquí el 'tanque está lleno' (incluso sobrecargado, como demuestran los pulmones húmedos), pero la 'bomba' está rota. Dar grandes cantidades de líquido solo empeorará la congestión pulmonar. El tratamiento se centra en mejorar la función cardíaca (reperfusión urgente mediante cateterismo) y dar soporte a la presión arterial con medicamentos vasopresores."
    }


]