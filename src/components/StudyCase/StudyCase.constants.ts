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
    }


]