import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un incidente terrorista desde la perspectiva prehospitalaria?",
        answer: "Es un evento intencional que involucra el uso de violencia, sustancias químicas, biológicas, radiológicas o explosivos para causar daño masivo, generar terror y desestabilizar la sociedad, requiriendo una respuesta coordinada de múltiples agencias.",
    },
    {
        question: "¿Cuáles son los tipos principales de armas de destrucción masiva (ADM)?",
        answer: "Los tipos principales son: Químicas (gases tóxicos, agentes nerviosos), Biológicas (bacterias, virus, toxinas), Radiológicas (materiales radioactivos), Nucleares (armas nucleares) y Explosivas (bombas convencionales, IED). Se conocen como agentes CBRNE.",
    },
    {
        question: "¿Qué es el concepto de 'zona caliente, tibia y fría' en un incidente CBRNE?",
        answer: "Zona Caliente: área de mayor contaminación/peligro, acceso solo a personal especializado con EPP completo. Zona Tibia: área de descontaminación y control, personal con EPP. Zona Fría: área segura donde se establece el comando, tratamiento y logística.",
    },
    {
        question: "¿Cuáles son las fases principales de respuesta a un desastre?",
        answer: "Las fases son: Prevención/Mitigación (reducir riesgos), Preparación (planes y entrenamientos), Respuesta (acciones inmediatas durante el evento) y Recuperación (restauración de servicios y comunidad a largo plazo). Cada fase requiere coordinación específica.",
    },
    {
        question: "¿Qué principios de seguridad debe seguir el personal prehospitalario en escenas de terrorismo?",
        answer: "Evaluar la escena antes del ingreso, usar EPP apropiado, mantener comunicación constante, establecer rutas de escape, trabajar en parejas, seguir protocolos de descontaminación y no ingresar hasta que la escena sea declarada segura por autoridades competentes.",
    },
    {
        question: "¿Qué es el triaje en incidentes de múltiples víctimas y cuál es su objetivo?",
        answer: "Es el proceso de clasificación rápida de víctimas según la gravedad de sus lesiones y probabilidad de supervivencia para optimizar el uso de recursos limitados. El objetivo es hacer el mayor bien para el mayor número de personas.",
    },
    {
        question: "¿Cuáles son las categorías del triaje START?",
        answer: "Verde (ambulatorio/leve): pueden caminar. Amarillo (urgente): necesitan atención pero no inmediata. Rojo (inmediato): requieren atención inmediata para sobrevivir. Negro (expectante): lesiones incompatibles con la vida o muerte.",
    },
    {
        question: "¿Qué consideraciones especiales se deben tener con víctimas de ataques químicos?",
        answer: "Descontaminación inmediata antes del tratamiento, uso de EPP adecuado, identificación del agente cuando sea posible, administración de antídotos específicos si están disponibles, y manejo de síntomas según el tipo de agente químico involucrado.",
    },
];

export const terroristManageQuestions: Question[] = [
    {
        "question": "¿Cuál es la primera prioridad del personal prehospitalario al llegar a la escena de un posible ataque terrorista?",
        "options": [
            {"letter": "a", "text": "Iniciar inmediatamente el triaje de víctimas"},
            {"letter": "b", "text": "Establecer un perímetro de seguridad"},
            {"letter": "c", "text": "Evaluar la seguridad de la escena y esperar autorización para ingresar"},
            {"letter": "d", "text": "Comunicarse con los medios de comunicación"}
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad del personal es la prioridad número uno. En un ataque terrorista, existe un alto riesgo de peligros continuos, como tiradores activos o dispositivos explosivos secundarios. El personal del SEM debe permanecer en un área segura (zona fría) hasta que las fuerzas del orden declaren la escena segura."
    },
    {
        "question": "En el sistema de triaje START, una víctima que puede caminar se clasifica como:",
        "options": [
            {"letter": "a", "text": "Prioridad roja (inmediato)"},
            {"letter": "b", "text": "Prioridad amarilla (urgente)"},
            {"letter": "c", "text": "Prioridad verde (leve/ambulatorio)"},
            {"letter": "d", "text": "Prioridad negra (expectante)"}
        ],
        "correctAnswer": "c",
        "explanation": "El primer paso del triaje START es instruir a todas las víctimas que puedan caminar para que se dirijan a un área designada. A estas víctimas, conocidas como 'heridos caminantes', se les asigna automáticamente la categoría Verde (leve/demorado) para una evaluación posterior."
    },
    {
        "question": "¿Qué significa la sigla CBRNE en el contexto de armas de destrucción masiva?",
        "options": [
            {"letter": "a", "text": "Cardiovascular, Biológico, Radiológico, Nuclear, Explosivo"},
            {"letter": "b", "text": "Químico, Biológico, Radiológico, Nuclear, Explosivo"},
            {"letter": "c", "text": "Civil, Biológico, Respiratorio, Nuclear, Eléctrico"},
            {"letter": "d", "text": "Químico, Bacterial, Radiológico, Natural, Explosivo"}
        ],
        "correctAnswer": "b",
        "explanation": "CBRNE es un acrónimo que clasifica los tipos de agentes de armas de destrucción masiva: Químico (agentes nerviosos, vesicantes), Biológico (bacterias, virus), Radiológico ('bomba sucia'), Nuclear (dispositivo nuclear) y Explosivo (bombas convencionales)."
    },
    {
        "question": "En un incidente CBRNE, ¿cuál es la función principal de la zona tibia?",
        "options": [
            {"letter": "a", "text": "Área donde se realiza la atención médica definitiva"},
            {"letter": "b", "text": "Zona de mayor contaminación donde trabajan los especialistas"},
            {"letter": "c", "text": "Área de descontaminación y control de acceso"},
            {"letter": "d", "text": "Lugar donde se establece el centro de comando"}
        ],
        "correctAnswer": "c",
        "explanation": "La zona tibia es el corredor de reducción de la contaminación, situado entre la zona caliente (contaminada) y la zona fría (segura). Su propósito es la descontaminación de las víctimas y del personal de rescate antes de que puedan pasar a la zona fría para recibir tratamiento médico."
    },
    {
        "question": "Un paciente víctima de un ataque químico presenta miosis, sudoración excesiva, salivación y fasciculaciones musculares. Estos síntomas sugieren exposición a:",
        "options": [
            {"letter": "a", "text": "Agentes vesicantes"},
            {"letter": "b", "text": "Agentes nerviosos (organofosforados)"},
            {"letter": "c", "text": "Agentes asfixiantes"},
            {"letter": "d", "text": "Agentes incapacitantes"}
        ],
        "correctAnswer": "b",
        "explanation": "Estos son signos clásicos de una crisis colinérgica, causada por agentes nerviosos. Estos agentes inhiben la acetilcolinesterasa, lo que lleva a una sobreestimulación del sistema nervioso parasimpático. El acrónimo SLUDGEM (Salivación, Lagrimeo, Urinación, Defecación, Malestar GI, Emesis, Miosis) describe estos efectos."
    },
    {
        "question": "¿Cuál es el antídoto principal para la intoxicación por agentes nerviosos?",
        "options": [
            {"letter": "a", "text": "Naloxona"},
            {"letter": "b", "text": "Flumazenil"},
            {"letter": "c", "text": "Atropina"},
            {"letter": "d", "text": "Epinefrina"}
        ],
        "correctAnswer": "c",
        "explanation": "La atropina es un anticolinérgico que bloquea los receptores muscarínicos, contrarrestando los efectos de la sobrecarga de acetilcolina causada por el agente nervioso. Se administra en grandes dosis para secar las secreciones y aumentar la frecuencia cardíaca. A menudo se usa junto con pralidoxima."
    },
    {
        "question": "En el triaje START, una víctima inconsciente con respiración espontánea a 35/min y pulso radial presente se clasifica como:",
        "options": [
            {"letter": "a", "text": "Verde (leve)"},
            {"letter": "b", "text": "Amarillo (urgente)"},
            {"letter": "c", "text": "Rojo (inmediato)"},
            {"letter": "d", "text": "Negro (expectante)"}
        ],
        "correctAnswer": "c",
        "explanation": "Según el algoritmo START, se evalúa la respiración (R). Una frecuencia respiratoria superior a 30 por minuto indica una condición crítica que requiere atención inmediata. Por lo tanto, el paciente se clasifica como Rojo (inmediato)."
    },
    {
        "question": "¿Cuál de las siguientes acciones NO debe realizar el personal prehospitalario en una escena de atentado con explosivos?",
        "options": [
            {"letter": "a", "text": "Buscar dispositivos secundarios"},
            {"letter": "b", "text": "Ingresar inmediatamente para ayudar a las víctimas"},
            {"letter": "c", "text": "Establecer un perímetro de seguridad"},
            {"letter": "d", "text": "Coordinar con fuerzas del orden"}
        ],
        "correctAnswer": "b",
        "explanation": "Ingresar a una escena de explosión sin que haya sido declarada segura por la policía o los técnicos en explosivos es extremadamente peligroso. Los ataques terroristas a menudo utilizan dispositivos secundarios diseñados específicamente para dañar a los primeros respondientes."
    },
    {
        "question": "En un desastre natural, ¿cuál es la secuencia correcta de las fases de manejo?",
        "options": [
            {"letter": "a", "text": "Respuesta, Prevención, Preparación, Recuperación"},
            {"letter": "b", "text": "Prevención, Preparación, Respuesta, Recuperación"},
            {"letter": "c", "text": "Preparación, Respuesta, Prevención, Recuperación"},
            {"letter": "d", "text": "Recuperación, Prevención, Preparación, Respuesta"}
        ],
        "correctAnswer": "b",
        "explanation": "El ciclo de manejo de emergencias es un proceso continuo: 1) Prevención/Mitigación (reducir el riesgo), 2) Preparación (planificar y entrenar), 3) Respuesta (acciones durante el evento), y 4) Recuperación (regresar a la normalidad)."
    },
    {
        "question": "¿Qué tipo de EPP es esencial para el personal que trabaja en la zona tibia de un incidente químico?",
        "options": [
            {"letter": "a", "text": "Solo guantes y mascarilla quirúrgica"},
            {"letter": "b", "text": "Traje completo de protección química con SCBA"},
            {"letter": "c", "text": "Ropa de trabajo estándar con gafas de seguridad"},
            {"letter": "d", "text": "Bata desechable y guantes de nitrilo"}
        ],
        "correctAnswer": "b",
        "explanation": "La zona tibia es donde se realiza la descontaminación y todavía existe un alto riesgo de exposición al agente químico. El personal en esta zona requiere un alto nivel de protección, que generalmente incluye un traje resistente a químicos y un equipo de respiración autónoma (SCBA)."
    },
    {
        "question": "Un paciente presenta quemaduras químicas en la piel después de exposición a un agente vesicante. El manejo inicial incluye:",
        "options": [
            {"letter": "a", "text": "Aplicar hielo directamente en las quemaduras"},
            {"letter": "b", "text": "Irrigación copiosa con agua durante al menos 20 minutos"},
            {"letter": "c", "text": "Aplicar ungüento antibiótico inmediatamente"},
            {"letter": "d", "text": "Vendar las heridas sin lavar"}
        ],
        "correctAnswer": "b",
        "explanation": "El tratamiento más importante para la mayoría de las exposiciones químicas cutáneas es la descontaminación inmediata. Esto se logra con una irrigación abundante y prolongada con agua para diluir y eliminar físicamente el agente químico de la piel."
    },
    {
        "question": "¿Cuál es el objetivo principal del triaje en incidentes de múltiples víctimas?",
        "options": [
            {"letter": "a", "text": "Tratar primero a los pacientes más graves"},
            {"letter": "b", "text": "Hacer el mayor bien para el mayor número de personas"},
            {"letter": "c", "text": "Evacuar rápidamente a todos los pacientes"},
            {"letter": "d", "text": "Identificar a las víctimas mortales"}
        ],
        "correctAnswer": "b",
        "explanation": "El triaje en desastres cambia el enfoque de la atención individual al bien colectivo. El objetivo es utilizar los recursos limitados de la manera más efectiva para salvar la mayor cantidad de vidas posible, lo que a veces significa priorizar a un paciente gravemente herido pero salvable sobre otro con lesiones mortales."
    },
    {
        "question": "En un incidente con múltiples víctimas, ¿cuándo se debe reevaluar el triaje de un paciente?",
        "options": [
            {"letter": "a", "text": "Solo al final del incidente"},
            {"letter": "b", "text": "Nunca, una vez clasificado permanece igual"},
            {"letter": "c", "text": "Continuamente según cambie su condición"},
            {"letter": "d", "text": "Solo si el paciente lo solicita"}
        ],
        "correctAnswer": "c",
        "explanation": "El triaje no es un evento único, sino un proceso dinámico. La condición de un paciente puede deteriorarse (o mejorar) con el tiempo. Por lo tanto, los pacientes deben ser reevaluados continuamente, especialmente al moverlos entre las diferentes áreas de tratamiento y antes del transporte."
    },
    {
        "question": "¿Qué información es crítica comunicar al hospital receptor durante un incidente terrorista?",
        "options": [
            {"letter": "a", "text": "Solo el número de víctimas"},
            {"letter": "b", "text": "Tipo de agente, número de víctimas, severidad y ETA"},
            {"letter": "c", "text": "Únicamente la hora estimada de llegada"},
            {"letter": "d", "text": "Los nombres de las víctimas"}
        ],
        "correctAnswer": "b",
        "explanation": "Para que un hospital se prepare para recibir múltiples víctimas de un evento CBRNE, necesita saber: qué tipo de agente está involucrado (para preparar antídotos y descontaminación), cuántos pacientes esperar, la gravedad general de sus lesiones, y cuándo comenzarán a llegar (ETA)."
    },
    {
        "question": "Los síntomas de exposición a agentes biológicos generalmente se presentan:",
        "options": [
            {"letter": "a", "text": "Inmediatamente después de la exposición"},
            {"letter": "b", "text": "Dentro de los primeros 5 minutos"},
            {"letter": "c", "text": "Horas a días después de la exposición (período de incubación)"},
            {"letter": "d", "text": "Solo en personas inmunocomprometidas"}
        ],
        "correctAnswer": "c",
        "explanation": "A diferencia de los agentes químicos, que causan efectos inmediatos, los agentes biológicos (como bacterias o virus) requieren un período de incubación. Durante este tiempo, el agente se replica en el cuerpo antes de que aparezcan los síntomas de la enfermedad, lo que puede dificultar la identificación temprana de un ataque."
    }
];

export const terroristManageChallengeQuestions: Question[] = [
    {
        "question": "Una explosión ocurre en una estación de tren y usted es de los primeros en llegar. Al aproximarse, observa decenas de víctimas con dificultad respiratoria, y varias personas convulsionando en el suelo cerca del epicentro. Algunos policías que ingresaron primero también comienzan a mostrar sudoración profusa y visión borrosa. ¿Cuál es la interpretación operacional MÁS correcta de esta escena y la acción inmediata que debe tomar?",
        "options": [
            {"letter": "a", "text": "Se trata únicamente de una explosión convencional con pánico asociado; debe ingresar de inmediato en pareja para iniciar el triaje START, ya que el mecanismo de lesión ya fue identificado"},
            {"letter": "b", "text": "El patrón de convulsiones y colapso en el personal de rescate que ingresó sugiere un agente químico liberado junto con el explosivo (dispersión combinada); debe retroceder a distancia segura, notificar un posible evento CBRNE y esperar a que equipos con EPP de nivel A/B y detección de agentes declaren la zona segura antes de cualquier ingreso"},
            {"letter": "c", "text": "Debe ingresar inmediatamente para retirar a los policías afectados, ya que el riesgo para el personal de rescate siempre es secundario frente a la necesidad de salvar vidas en los primeros minutos"},
            {"letter": "d", "text": "Debe asumir que los policías sufren solo ansiedad situacional y proceder con el triaje estándar de trauma por explosión sin considerar contaminación química"}
        ],
        "correctAnswer": "b",
        "explanation": "El deterioro clínico progresivo de los rescatistas que ingresaron primero (sudoración, visión borrosa, convulsiones) es un signo centinela clásico de exposición a un agente nervioso organofosforado liberado deliberadamente junto con el explosivo, un patrón de ataque combinado documentado en incidentes terroristas reales. El principio fundamental de 'el rescatista antes que la víctima' exige que el personal no se convierta en una víctima adicional, porque un rescatista incapacitado no solo deja de ayudar sino que consume recursos de rescate. Ingresar sin protección adecuada expondría a más personal al mismo agente, replicando la cadena de víctimas. La respuesta correcta es retirarse a distancia segura (upwind/uphill si es posible), activar el protocolo CBRNE, y permitir que unidades especializadas con EPP de alto nivel y capacidad de detección confirmen el agente y establezcan zonificación caliente-tibia-fría antes de cualquier intervención directa."
    },
    {
        "question": "En un incidente con múltiples pacientes que presentan miosis puntiforme, sialorrea, broncorrea y fasciculaciones tras la liberación de un aerosol en un espacio cerrado, el equipo dispone de un número limitado de autoinyectores de atropina/pralidoxima (DuoDote). ¿Cuál es la consideración clínica y de triaje MÁS crítica para decidir la secuencia de administración?",
        "options": [
            {"letter": "a", "text": "Administrar los autoinyectores en orden de llegada de las víctimas a la zona tibia, sin importar la severidad de los síntomas"},
            {"letter": "b", "text": "Priorizar a los pacientes con mayor compromiso respiratorio y neurológico (broncorrea masiva, convulsiones, insuficiencia respiratoria inminente por acumulación de acetilcolina en receptores muscarínicos y nicotínicos), ya que la pralidoxima solo es eficaz si se administra antes de que el organofosforado 'envejezca' y forme un enlace irreversible con la acetilcolinesterasa"},
            {"letter": "c", "text": "Reservar todos los autoinyectores para el personal de rescate expuesto accidentalmente, ya que las víctimas primarias ya recibieron una dosis letal y no se beneficiarán del tratamiento"},
            {"letter": "d", "text": "Administrar la dosis completa solo a los pacientes clasificados como Verde, ya que los pacientes Rojo requieren manejo avanzado de vía aérea antes de cualquier antídoto"}
        ],
        "correctAnswer": "b",
        "explanation": "Los agentes nerviosos inhiben irreversiblemente la acetilcolinesterasa, provocando acumulación de acetilcolina en receptores muscarínicos (SLUDGEM) y nicotínicos (fasciculaciones, debilidad, parálisis respiratoria). La broncorrea masiva y la insuficiencia respiratoria inminente representan la causa de muerte más frecuente y reversible, por lo que estos pacientes deben recibir atropina de forma prioritaria y en dosis repetidas hasta secar las secreciones. La pralidoxima reactiva la acetilcolinesterasa reversiblemente unida, pero pierde eficacia una vez que ocurre el proceso de 'envejecimiento' (aging) del enlace organofosforado-enzima, que para algunos agentes como el somán ocurre en minutos; por ello, la ventana terapéutica y la severidad clínica —no el orden de llegada— deben guiar la secuencia de administración con recursos limitados."
    },
    {
        "question": "Un equipo de rescate responde a un reporte de 'olor a ajo o mostaza' y varias víctimas con eritema cutáneo tardío, formación de ampollas y quemaduras oculares que aparecieron 2 a 24 horas después de la exposición inicial, sin dificultad respiratoria significativa al momento del contacto. ¿Qué agente es más consistente con este cuadro y qué implicación tiene el retraso de síntomas para el manejo prehospitalario?",
        "options": [
            {"letter": "a", "text": "Un agente nervioso como el sarín; el retraso indica una dosis subletal y el manejo debe centrarse únicamente en atropina"},
            {"letter": "b", "text": "Un agente vesicante como el gas mostaza (sulfuro de mostaza); dado que el daño tisular ya comenzó a nivel celular antes de que aparezcan los síntomas visibles, la descontaminación cutánea y ocular debe realizarse de inmediato en todos los expuestos, incluso asintomáticos, sin esperar a que se manifiesten las lesiones"},
            {"letter": "c", "text": "Un agente incapacitante tipo BZ; el retraso es característico y no requiere descontaminación, solo observación"},
            {"letter": "d", "text": "Un agente asfixiante como el fosgeno; la prioridad es únicamente el monitoreo de edema pulmonar tardío sin descontaminación cutánea"}
        ],
        "correctAnswer": "b",
        "explanation": "El olor a ajo/mostaza, el período de latencia de 2 a 24 horas antes de la aparición de eritema, vesículas y quemaduras oculares/corneales son característicos de los agentes vesicantes como el sulfuro de mostaza, que alquila el ADN celular y produce daño tisular progresivo desde el momento del contacto, aunque las manifestaciones clínicas visibles se retrasen. Este mecanismo hace que la ausencia de síntomas inmediatos sea engañosa: el daño ya está en curso a nivel bioquímico. Por ello, la descontaminación cutánea y ocular copiosa debe realizarse tan pronto como sea posible en todos los expuestos, sintomáticos o no, ya que retrasar la descontaminación esperando síntomas permite que el agente continúe penetrando y dañando tejido, empeorando el pronóstico y aumentando el riesgo de contaminación secundaria a otros pacientes y personal."
    },
    {
        "question": "Tras una primera explosión en un evento masivo, el comando de incidente ordena a las unidades de SEM establecer la zona de tratamiento a 300 metros del epicentro, en un punto con buena visibilidad hacia el área afectada. Diez minutos después de que el personal comienza a atender a las víctimas trasladadas a esa zona, ocurre una segunda explosión cerca del área de tratamiento designada. ¿Qué principio de seguridad en incidentes terroristas explica este evento y cómo debe modificarse la planificación futura de zonas de tratamiento?",
        "options": [
            {"letter": "a", "text": "Fue un evento impredecible sin relación con el ataque original; no se requiere cambiar la planificación de zonas futuras"},
            {"letter": "b", "text": "Corresponde al uso de un dispositivo secundario, una táctica terrorista deliberada para atacar a los primeros respondientes y a las víctimas ya congregadas; las zonas de tratamiento y estacionamiento de unidades deben ubicarse fuera de la línea de visión directa del epicentro, considerar rutas de aproximación alternativas y mantener una reevaluación continua de amenazas, en lugar de fijarse únicamente por distancia o visibilidad"},
            {"letter": "c", "text": "Indica que la distancia de 300 metros fue insuficiente y que la única corrección necesaria es aumentar la distancia mínima a 500 metros en todos los incidentes futuros"},
            {"letter": "d", "text": "Refleja una falla del triaje START, ya que la zona de tratamiento nunca debe depender de la ubicación del epicentro"}
        ],
        "correctAnswer": "b",
        "explanation": "Los dispositivos secundarios son una táctica terrorista bien documentada, diseñada específicamente para maximizar las bajas entre los respondientes de emergencia, la policía y los civiles que se congregan tras un primer evento para ayudar u observar. La ubicación de la zona de tratamiento con 'buena visibilidad hacia el área afectada' es precisamente el error crítico: esa misma línea de visión permite que un atacante coloque o detone un segundo dispositivo dirigido a esa concentración de personas. La planificación correcta no depende solo de la distancia numérica, sino de la ausencia de línea de visión directa, el uso de barreras físicas, rutas de entrada/salida múltiples y una reevaluación continua de la amenaza por parte de las fuerzas del orden y explosivos antes y durante el establecimiento de cualquier zona de tratamiento o estacionamiento de recursos."
    },
    {
        "question": "En un incidente radiológico con una 'bomba sucia', un paciente presenta fragmentos de material particulado visibles sobre su ropa y piel, pero no exhibe ningún síntoma agudo. Un colega afirma que, como el paciente 'no está irradiado' porque no tiene quemaduras ni síntomas de síndrome de radiación aguda, no representa ningún riesgo y puede manejarse sin precauciones especiales. ¿Por qué este razonamiento es clínicamente incorrecto y qué distingue la contaminación radiológica de la irradiación?",
        "options": [
            {"letter": "a", "text": "El razonamiento es correcto: sin síntomas agudos no hay riesgo alguno, y el paciente puede tratarse como cualquier otro trauma"},
            {"letter": "b", "text": "El razonamiento es incorrecto porque la irradiación (exposición a energía sin depósito de material) y la contaminación (depósito físico de partículas radioactivas sobre o dentro del cuerpo) son fenómenos distintos; un paciente contaminado sigue emitiendo radiación desde las partículas adheridas, representa un riesgo continuo de exposición para sí mismo y para el personal, y requiere descontaminación (retiro de ropa, lavado) independientemente de la ausencia de síntomas agudos, que de cualquier forma tardarían horas o días en manifestarse"},
            {"letter": "c", "text": "El razonamiento es incorrecto únicamente porque el síndrome de radiación aguda siempre aparece de forma inmediata, por lo que la ausencia de síntomas ya descarta cualquier exposición relevante"},
            {"letter": "d", "text": "El razonamiento es correcto siempre que el paciente no presente fragmentos metálicos incrustados, ya que solo estos representan riesgo radiológico"}
        ],
        "correctAnswer": "b",
        "explanation": "La irradiación es la exposición del cuerpo a energía radioactiva sin que quede material radioactivo depositado sobre o dentro del paciente; una persona irradiada no representa riesgo para terceros. La contaminación, en cambio, ocurre cuando partículas radioactivas físicas (polvo, fragmentos) quedan depositadas sobre la piel, ropa o heridas, y estas partículas continúan emitiendo radiación mientras permanezcan en contacto con el paciente o el entorno, constituyendo una fuente activa de exposición continua para el paciente mismo y para cualquier persona que lo toque sin protección. Además, el síndrome de radiación aguda tiene una fase prodrómica que puede tardar horas y una fase de latencia que puede durar días antes de manifestarse plenamente, por lo que la ausencia de síntomas inmediatos no descarta una dosis significativa. Por ello, todo paciente contaminado debe someterse a remoción de ropa y descontaminación (que elimina la gran mayoría de la contaminación) antes de ingresar a áreas limpias, sin esperar a que aparezcan síntomas."
    },
    {
        "question": "Durante un brote sospechoso tras un posible ataque bioterrorista, múltiples pacientes de distintos barrios comienzan a presentarse en los días siguientes con síntomas respiratorios inespecíficos similares a gripe, y varios fallecen 48-72 horas después con progresión rápida a insuficiencia respiratoria. No hubo explosión, olor ni evento visible que alertara a los servicios de emergencia en el momento de la exposición. ¿Qué característica de los agentes biológicos explica esta presentación y cuál es la implicación más importante para el sistema de respuesta prehospitalaria?",
        "options": [
            {"letter": "a", "text": "Los agentes biológicos actúan siempre de forma instantánea como los químicos; esta presentación descarta un ataque bioterrorista y sugiere una causa natural exclusivamente"},
            {"letter": "b", "text": "El período de incubación de los agentes biológicos retrasa la aparición de síntomas horas a días después de la exposición, dispersando a las víctimas geográfica y temporalmente; esto significa que el reconocimiento de un ataque biológico depende de la vigilancia epidemiológica y de que el personal prehospitalario reporte patrones inusuales de síntomas similares en múltiples pacientes no relacionados, en lugar de la respuesta inmediata de escena usada en incidentes químicos o explosivos"},
            {"letter": "c", "text": "La ausencia de un evento visible descarta por definición cualquier posibilidad de exposición a un agente de guerra biológica, ya que estos siempre requieren un mecanismo de dispersión detectable"},
            {"letter": "d", "text": "El hecho de que los pacientes provengan de distintos barrios descarta un origen común, ya que un ataque biológico solo puede afectar a personas en el mismo lugar y momento exacto de liberación"}
        ],
        "correctAnswer": "b",
        "explanation": "A diferencia de los agentes químicos y explosivos, que producen un evento centinela obvio e inmediato, los agentes biológicos tienen un período de incubación durante el cual el patógeno se replica silenciosamente antes de producir síntomas, lo que puede tomar desde horas hasta varios días según el agente. Esto provoca que las víctimas se dispersen geográfica y temporalmente, presentándose de forma independiente en distintos centros de salud sin un vínculo evidente entre sí, y con síntomas iniciales inespecíficos (similares a un cuadro viral común) que retrasan el diagnóstico. La detección temprana de un ataque bioterrorista, por lo tanto, no depende de la respuesta de escena tradicional, sino de la vigilancia epidemiológica activa y de la capacidad del personal prehospitalario y de salud pública para reconocer patrones anómalos, como un aumento inusual de casos similares, alta letalidad o progresión atípicamente rápida, y reportarlos oportunamente a las autoridades de salud pública para activar protocolos de identificación del agente, profilaxis masiva y contención."
    }
];
