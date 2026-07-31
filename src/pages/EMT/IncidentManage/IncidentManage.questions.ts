import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el Sistema de Comando de Incidentes (SCI)?",
        answer: "Es un sistema de manejo estandarizado que permite la coordinación efectiva de recursos, personal y operaciones durante emergencias. Utiliza una estructura organizacional modular que puede expandirse según la complejidad del incidente.",
    },
    {
        question: "¿Cuáles son los principios fundamentales del SCI?",
        answer: "Los principios incluyen: unidad de comando, cadena de comando clara, alcance de control manejable, terminología común, recursos consolidados, comunicaciones integradas, plan de acción definido, perímetros de seguridad y flexibilidad.",
    },
    {
        question: "¿Qué diferencia hay entre un incidente simple y uno complejo?",
        answer: "Un incidente simple requiere una sola unidad de respuesta con recursos limitados y tiempo de resolución corto. Un incidente complejo involucra múltiples víctimas, requiere múltiples agencias, recursos especializados y operaciones prolongadas.",
    },
    {
        question: "¿Cuáles son las principales secciones del SCI?",
        answer: "Las secciones principales son: Comando (responsabilidad general), Operaciones (actividades tácticas), Planificación (recopilación de información), Logística (recursos y apoyo), y Administración/Finanzas (documentación y costos).",
    },
    {
        question: "¿Qué es el triaje START y cuándo se utiliza?",
        answer: "START (Simple Triage And Rapid Treatment) es un método de triaje para incidentes con múltiples víctimas. Evalúa movilidad, respiración, circulación y función neurológica para clasificar víctimas en categorías de prioridad (verde, amarillo, rojo, negro).",
    },
    {
        question: "¿Cómo se establecen las zonas operacionales en un incidente?",
        answer: "Se establecen tres zonas: Zona Caliente (área de mayor peligro, solo personal especializado), Zona Tibia (descontaminación y triaje inicial), y Zona Fría (área segura con comando, tratamiento y logística).",
    },
    {
        question: "¿Qué debe incluir la transferencia de comando?",
        answer: "Debe incluir briefing de la situación actual, estado de objetivos, prioridades y estrategias, recursos disponibles, organización del SCI, problemas de seguridad, instalaciones establecidas y anuncio formal de la transferencia.",
    },
    {
        question: "¿Cuáles son las responsabilidades del Comandante de Incidente?",
        answer: "Sus responsabilidades incluyen: responsabilidad general del incidente, establecer objetivos y prioridades, desarrollar estrategia general, asegurar seguridad del personal, coordinar con otras agencias y autorizar liberación de recursos.",
    },
];

export const incidentManageQuestions: Question[] = [
    {
        "question": "¿Cuál es el primer paso al llegar a un incidente con múltiples víctimas?",
        "options": [
            {"letter": "a", "text": "Comenzar inmediatamente la atención médica"},
            {"letter": "b", "text": "Establecer el comando de incidente"},
            {"letter": "c", "text": "Evaluar la escena y establecer la seguridad"},
            {"letter": "d", "text": "Realizar triaje de todas las víctimas"}
        ],
        "correctAnswer": "c",
        "explanation": "La prioridad número uno al llegar a cualquier escena es la seguridad del personal de respuesta y de los pacientes. Antes de iniciar cualquier otra acción, se debe realizar una evaluación 360° para identificar peligros (tráfico, fuego, materiales peligrosos) y establecer un perímetro seguro."
    },
    {
        "question": "En el Sistema de Comando de Incidentes, ¿cuál es la función principal del Comandante de Incidente?",
        "options": [
            {"letter": "a", "text": "Proporcionar atención médica directa"},
            {"letter": "b", "text": "Responsabilidad general del incidente y establecer objetivos"},
            {"letter": "c", "text": "Manejar únicamente las comunicaciones"},
            {"letter": "d", "text": "Supervisar solo las operaciones de rescate"}
        ],
        "correctAnswer": "b",
        "explanation": "El Comandante de Incidente (CI) es la persona con la máxima autoridad y responsabilidad sobre la escena. Su función es la gestión estratégica general: evaluar la situación, establecer los objetivos, desarrollar el plan de acción y asignar los recursos necesarios."
    },
    {
        "question": "¿Cuál de las siguientes NO es una de las secciones principales del SCI?",
        "options": [
            {"letter": "a", "text": "Operaciones"},
            {"letter": "b", "text": "Planificación"},
            {"letter": "c", "text": "Investigación"},
            {"letter": "d", "text": "Logística"}
        ],
        "correctAnswer": "c",
        "explanation": "Las cuatro secciones principales del Sistema de Comando de Incidentes (SCI) bajo el mando del Comandante son: Operaciones, Planificación, Logística y Finanzas/Administración. La investigación del incidente es una función que se realiza generalmente después de que el incidente ha concluido."
    },
    {
        "question": "En el triaje START, una víctima que puede caminar se clasifica como:",
        "options": [
            {"letter": "a", "text": "Prioridad inmediata (rojo)"},
            {"letter": "b", "text": "Prioridad urgente (amarillo)"},
            {"letter": "c", "text": "Prioridad demorada (verde)"},
            {"letter": "d", "text": "Sin prioridad (negro)"}
        ],
        "correctAnswer": "c",
        "explanation": "El primer paso del triaje START es pedir a todas las víctimas que puedan caminar que se dirijan a un área designada. A estas víctimas ('walking wounded') se les asigna automáticamente la categoría de prioridad demorada (Verde), ya que se asume que sus lesiones no amenazan la vida de forma inmediata."
    },
    {
        "question": "¿Qué color de triaje se asigna a víctimas con lesiones críticas pero salvables con atención inmediata?",
        "options": [
            {"letter": "a", "text": "Verde"},
            {"letter": "b", "text": "Amarillo"},
            {"letter": "c", "text": "Rojo"},
            {"letter": "d", "text": "Negro"}
        ],
        "correctAnswer": "c",
        "explanation": "La categoría Rojo (Prioridad Inmediata) se reserva para pacientes con lesiones que amenazan la vida y que tienen una alta probabilidad de sobrevivir si reciben tratamiento médico inmediato. Estos pacientes son la máxima prioridad para el tratamiento y el transporte."
    },
    {
        "question": "La Zona Caliente en un incidente se caracteriza por:",
        "options": [
            {"letter": "a", "text": "Ser el área de tratamiento médico"},
            {"letter": "b", "text": "Ser el área de mayor peligro inmediato"},
            {"letter": "c", "text": "Ser donde se ubica el puesto de comando"},
            {"letter": "d", "text": "Ser el área de reunión familiar"}
        ],
        "correctAnswer": "b",
        "explanation": "La Zona Caliente (o Zona de Exclusión) es el área inmediatamente alrededor del peligro (fuego, derrame químico, etc.). El acceso está restringido únicamente al personal con el equipo de protección adecuado para realizar tareas de rescate o mitigación del peligro. No se realiza tratamiento médico en esta zona."
    },
    {
        "question": "¿Cuál es el alcance de control recomendado para un supervisor en el SCI?",
        "options": [
            {"letter": "a", "text": "3-7 subordinados"},
            {"letter": "b", "text": "5-10 subordinados"},
            {"letter": "c", "text": "10-15 subordinados"},
            {"letter": "d", "text": "No hay límite específico"}
        ],
        "correctAnswer": "a",
        "explanation": "El principio de 'alcance de control' establece que un supervisor puede manejar eficazmente entre 3 y 7 subordinados. El número óptimo es 5. Esto asegura que el supervisor no se sobrecargue y pueda mantener una comunicación y supervisión efectivas."
    },
    {
        "question": "En un incidente HAZMAT, ¿desde qué dirección debe aproximarse la primera unidad?",
        "options": [
            {"letter": "a", "text": "Desde cualquier dirección disponible"},
            {"letter": "b", "text": "Desde la dirección del viento"},
            {"letter": "c", "text": "Desde una dirección favorable al viento (viento a sus espaldas)"},
            {"letter": "d", "text": "Siempre desde el norte"}
        ],
        "correctAnswer": "c",
        "explanation": "La regla de seguridad en incidentes con materiales peligrosos (HAZMAT) es aproximarse desde una posición 'cuesta arriba y con el viento a favor'. Esto significa que el viento debe soplar desde su espalda hacia el incidente, alejando de usted cualquier vapor, humo o partícula peligrosa."
    },
    {
        "question": "¿Qué significa el principio de 'unidad de comando' en el SCI?",
        "options": [
            {"letter": "a", "text": "Todos los recursos deben ser similares"},
            {"letter": "b", "text": "Una sola persona tiene la responsabilidad general del incidente"},
            {"letter": "c", "text": "Solo una agencia puede responder al incidente"},
            {"letter": "d", "text": "Todos deben usar el mismo equipo"}
        ],
        "correctAnswer": "b",
        "explanation": "El principio de 'Unidad de Comando' establece que hay un solo Comandante de Incidente con la responsabilidad general del manejo del evento. Esto asegura un liderazgo claro y evita la confusión que surgiría con múltiples personas dando órdenes contradictorias. Nota: No confundir con 'Cadena de Mando', donde cada persona reporta a un solo supervisor."
    },
    {
        "question": "Durante la transferencia de comando, ¿qué información NO es esencial incluir?",
        "options": [
            {"letter": "a", "text": "Situación actual del incidente"},
            {"letter": "b", "text": "Recursos disponibles y asignados"},
            {"letter": "c", "text": "Información personal del comandante saliente"},
            {"letter": "d", "text": "Problemas de seguridad identificados"}
        ],
        "correctAnswer": "c",
        "explanation": "La transferencia de comando debe ser un informe breve y conciso centrado en el estado operativo del incidente. La información personal del comandante que se retira (como su número de teléfono o dirección) no es relevante para la gestión táctica y estratégica del evento."
    },
    {
        "question": "¿Cuál es la función principal de la Sección de Operaciones en el SCI?",
        "options": [
            {"letter": "a", "text": "Manejar las finanzas del incidente"},
            {"letter": "b", "text": "Realizar todas las actividades tácticas del incidente"},
            {"letter": "c", "text": "Recopilar y evaluar información"},
            {"letter": "d", "text": "Proporcionar recursos y servicios de apoyo"}
        ],
        "correctAnswer": "b",
        "explanation": "La Sección de Operaciones es el 'brazo ejecutor' del plan. Es responsable de llevar a cabo todas las acciones tácticas directamente relacionadas con el control del incidente, como el rescate, la extinción de incendios y la atención médica a las víctimas."
    },
    {
        "question": "En el triaje START, si una víctima tiene una frecuencia respiratoria de 35/min, se clasifica como:",
        "options": [
            {"letter": "a", "text": "Verde"},
            {"letter": "b", "text": "Amarillo"},
            {"letter": "c", "text": "Rojo"},
            {"letter": "d", "text": "Negro"}
        ],
        "correctAnswer": "c",
        "explanation": "Según el algoritmo START, después de abrir la vía aérea de una víctima que no respira, se evalúa la frecuencia respiratoria. Si es superior a 30 respiraciones por minuto, se considera un signo de shock o dificultad respiratoria grave y se clasifica inmediatamente como Rojo (Prioridad Inmediata)."
    },
    {
        "question": "¿Qué instalación es responsable de la clasificación inicial de víctimas en un MCI?",
        "options": [
            {"letter": "a", "text": "Puesto de comando"},
            {"letter": "b", "text": "Área de triaje"},
            {"letter": "c", "text": "Área de tratamiento"},
            {"letter": "d", "text": "Área de transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "El Área de Triaje es el lugar designado donde las víctimas son evaluadas y clasificadas por primera vez según la gravedad de sus lesiones utilizando un sistema como START. Desde aquí, son dirigidas a las áreas de tratamiento correspondientes."
    },
    {
        "question": "El Oficial de Seguridad tiene la autoridad para:",
        "options": [
            {"letter": "a", "text": "Solo hacer recomendaciones de seguridad"},
            {"letter": "b", "text": "Detener operaciones que considere inseguras"},
            {"letter": "c", "text": "Únicamente documentar problemas de seguridad"},
            {"letter": "d", "text": "Solo reportar al comandante"}
        ],
        "correctAnswer": "b",
        "explanation": "El Oficial de Seguridad es una de las posiciones más importantes del personal de comando. Tiene la autoridad total para detener o modificar cualquier operación o acción en la escena que represente un peligro inminente para la vida o la salud del personal, incluso pasando por alto la cadena de mando si es necesario."
    },
    {
        "question": "¿Cuál es la principal ventaja del Sistema de Comando de Incidentes?",
        "options": [
            {"letter": "a", "text": "Reduce el número de personal necesario"},
            {"letter": "b", "text": "Elimina la necesidad de entrenamiento"},
            {"letter": "c", "text": "Proporciona un enfoque estandarizado y escalable para el manejo de incidentes"},
            {"letter": "d", "text": "Garantiza que solo una agencia responda"}
        ],
        "correctAnswer": "c",
        "explanation": "La mayor fortaleza del SCI es su flexibilidad. Proporciona una estructura de gestión común y estandarizada que puede ser utilizada para cualquier tipo de incidente, desde una pequeña colisión de tráfico hasta un gran desastre natural, expandiéndose o contrayéndose según las necesidades del evento."
    }
]

export const incidentManageChallengeQuestions: Question[] = [
    {
        "question": "Un autobús escolar choca contra un poste eléctrico caído y queda parcialmente energizado. Usted es el primer paramédico en llegar y hay 22 niños a bordo, algunos gritando y otros inmóviles. La compañía eléctrica reporta 12 minutos de tiempo de respuesta para desenergizar la línea. Aplicando el triaje START junto con los principios de zonificación del SCI, ¿cuál es la acción MÁS apropiada?",
        "options": [
            {"letter": "a", "text": "Ingresar de inmediato al autobús para comenzar el triaje START, ya que los niños inmóviles son prioridad Rojo y no pueden esperar 12 minutos"},
            {"letter": "b", "text": "Declarar el área alrededor del autobús como Zona Caliente hasta la desenergización confirmada, iniciar el triaje verbal a distancia pidiendo a los 'heridos ambulatorios' que se alejen del vehículo hacia un punto de reunión en Zona Fría, y comenzar a solicitar recursos adicionales de MCI mientras se espera acceso seguro"},
            {"letter": "c", "text": "Esperar sin realizar ninguna acción hasta que la compañía eléctrica confirme la desenergización, sin establecer zonas ni solicitar recursos"},
            {"letter": "d", "text": "Enviar a un solo rescatista sin equipo de protección dielétrica a retirar a los niños inmóviles primero, dejando el triaje formal para después"},
        ],
        "correctAnswer": "b",
        "explanation": "El principio de seguridad de la escena precede a cualquier intervención médica: un vehículo parcialmente energizado constituye un peligro activo que exige delimitar una Zona Caliente de exclusión hasta que una fuente confiable confirme el control del peligro. El triaje START permite realizar la primera fase ('¿pueden caminar?') de forma verbal y a distancia, identificando y removiendo a los pacientes Verdes sin exponer a los rescatistas. Simultáneamente, el tamaño del evento (22 víctimas pediátricas potenciales) obliga a activar protocolos de MCI y solicitar recursos adicionales de forma temprana, ya que la escalada de recursos debe anticiparse al número real de víctimas confirmadas, no reaccionar después. Ingresar sin control del peligro eléctrico convertiría al rescatista en una víctima adicional y comprometería la capacidad de respuesta general."
    },
    {
        "question": "En un colapso de un mercado techado con aproximadamente 40 víctimas atrapadas, un rescatista aplicando SALT (Sort-Assess-Lifesaving interventions-Treatment/Transport) encuentra a una mujer que no camina, no obedece órdenes verbales, pero sí responde a un estímulo de agitación con movimiento intencionado de la mano hacia el rescatista (obedece un gesto). No presenta hemorragia externa mayor ni compromiso de vía aérea visible. Según el algoritmo SALT, ¿cómo debe clasificarse esta víctima?",
        "options": [
            {"letter": "a", "text": "Inmediata (Rojo), porque cualquier alteración del estado mental en un colapso estructural se clasifica automáticamente como la máxima prioridad sin evaluación adicional"},
            {"letter": "b", "text": "Expectante (Gris/Negro), porque no obedece órdenes verbales, lo que en SALT equivale a estar 'obnubilada' sin posibilidad de sobrevivir"},
            {"letter": "c", "text": "Se requiere continuar la evaluación de signos vitales (respiración, perfusión/pulso, estado mental) antes de asignar categoría definitiva; el hecho de que 'obedezca' un movimiento intencionado (aunque no una orden verbal) y no tenga hemorragia mayor ni obstrucción de vía aérea sugiere que probablemente NO sea Inmediata solo por ese hallazgo, por lo que debe evaluarse el resto de parámetros SALT (respiración, pulso radial, relleno capilar) para decidir entre Inmediata y Demorada"},
            {"letter": "d", "text": "Mínima (Verde), porque cualquier víctima que mueva una extremidad de forma intencionada se considera ambulatoria por definición"},
        ],
        "correctAnswer": "c",
        "explanation": "SALT es un algoritmo de dos fases: primero la clasificación global (caminan, se mueven/saludan con propósito, o no se mueven) y luego una evaluación individual dirigida de signos vitales críticos (control de hemorragia mayor, vía aérea, respiración, pulso/perfusión, estado mental y riesgo obstétrico) para asignar la categoría final. Un movimiento intencionado con propósito hacia un estímulo, aunque no sea obediencia verbal completa, no equivale automáticamente a 'expectante'; esa categoría en SALT está reservada para lesiones incompatibles con la vida dado el contexto de recursos, no simplemente por alteración parcial del estado mental. La ausencia de hemorragia mayor visible y de obstrucción de vía aérea son datos relevantes pero no concluyentes; se necesita completar la evaluación de frecuencia respiratoria y perfusión antes de decidir entre Inmediata y Demorada. Este caso ilustra por qué SALT, a diferencia de START, incorpora explícitamente intervenciones de salvamento antes del triaje definitivo, evitando clasificaciones prematuras basadas en un solo criterio ambiguo."
    },
    {
        "question": "Un incidente inicia como una colisión de dos vehículos con 3 víctimas (clasificado como MCI menor, manejado con recursos locales). A los 8 minutos, se reporta que uno de los vehículos transportaba un contenedor con material corrosivo que se está derramando, y llegan reportes de 6 personas adicionales con síntomas respiratorios en un radio de 100 metros por exposición a vapores. El Comandante de Incidente inicial es un paramédico de una unidad de soporte básico. ¿Cuál es la secuencia de decisiones MÁS correcta según los principios de escalamiento del SCI?",
        "options": [
            {"letter": "a", "text": "El CI original debe continuar manejando todo el incidente sin cambios, ya que transferir el comando en medio de un evento en evolución genera confusión y viola el principio de unidad de comando"},
            {"letter": "b", "text": "El CI debe reclasificar el incidente de MCI menor a mayor, establecer inmediatamente zonas Caliente/Tibia/Fría alrededor del derrame, solicitar una unidad HAZMAT y recursos de MCI adicionales, y prepararse para transferir el comando a un oficial con mayor calificación (p. ej. jefe de bomberos o comandante HAZMAT) mediante un briefing formal de transferencia, manteniendo el alcance de control dentro de rango manejable expandiendo la estructura del SCI según sea necesario"},
            {"letter": "c", "text": "Debe declararse el incidente como resuelto en su componente médico y dejar todo el manejo del derrame químico a la agencia ambiental, sin coordinación con el CI médico"},
            {"letter": "d", "text": "El CI debe ingresar personalmente a menos de 100 metros del derrame para evaluar el material sin equipo de protección, ya que la evaluación visual rápida tiene prioridad sobre la activación de HAZMAT"},
        ],
        "correctAnswer": "b",
        "explanation": "El SCI está diseñado para ser modular y escalable: cuando la naturaleza o magnitud de un incidente cambia (de un choque simple a un evento con material peligroso y víctimas por exposición), el CI debe reevaluar y expandir la organización, no simplemente absorber la nueva complejidad con la estructura original. La aparición de un peligro por materiales peligrosos exige establecer de inmediato las tres zonas operacionales (Caliente, Tibia, Fría) para proteger a rescatistas y víctimas adicionales de la exposición continua. El principio de 'calificación apropiada del comando' indica que cuando la complejidad supera la capacidad o entrenamiento del CI inicial, debe realizarse una transferencia formal de comando a un oficial con las calificaciones y recursos adecuados (p. ej., especialista HAZMAT), documentando explícitamente el cambio para mantener la unidad de comando en todo momento. Además, con 9 víctimas potenciales y un peligro activo, el alcance de control del CI original probablemente se vería superado, por lo que expandir secciones (Operaciones, Logística) es consistente con los principios de manejo de incidentes complejos del SCI."
    },
    {
        "question": "En un incidente de colapso de una tribuna en un evento deportivo con 65 víctimas confirmadas, el hospital de trauma nivel I más cercano solo tiene capacidad para recibir 4 pacientes críticos de forma inmediata, y el siguiente hospital de nivel II está a 40 minutos. El triaje START/SALT ha identificado 18 pacientes Rojos, 25 Amarillos y 22 Verdes. Solo hay 3 ambulancias de soporte avanzado disponibles en los primeros 15 minutos. ¿Cuál es el enfoque de gestión de recursos MÁS consistente con los principios de manejo de MCI cuando la demanda excede ampliamente la capacidad?",
        "options": [
            {"letter": "a", "text": "Transportar a los 18 pacientes Rojos en el orden en que fueron encontrados, usando las 3 ambulancias disponibles de forma secuencial sin reevaluación, y esperar a que lleguen más unidades antes de mover a los Amarillos"},
            {"letter": "b", "text": "El Oficial de Triaje/Transporte debe realizar una reevaluación continua (triaje secundario) de los Rojos para identificar cuáles tienen mayor probabilidad de supervivencia con los recursos inmediatamente disponibles, distribuir a los pacientes críticos entre MÚLTIPLES centros receptores (no solo el más cercano) para no saturar un solo hospital, coordinar con el Centro de Coordinación Médica de Desastres la apertura de capacidad adicional, y utilizar transporte alternativo (vehículos de bomberos, transporte grupal para Verdes/Amarillos estables) mientras llegan más unidades de soporte avanzado"},
            {"letter": "c", "text": "Enviar a todos los pacientes, sin distinción de color, al hospital de trauma nivel I porque es el de mayor capacidad técnica, independientemente de su capacidad de recepción reportada"},
            {"letter": "d", "text": "Suspender el triaje formal y transportar a quien lo solicite primero, dado que con solo 3 ambulancias no hay tiempo para un proceso estructurado"},
        ],
        "correctAnswer": "b",
        "explanation": "Cuando el número de víctimas supera drásticamente los recursos de transporte y receptores disponibles, el manejo de MCI exige una estrategia de distribución de carga entre múltiples instalaciones y modos de transporte, evitando saturar un solo hospital que colapsaría su capacidad y perjudicaría a todos los pacientes, incluidos los ya hospitalizados. El principio de triaje continuo (re-triaje) reconoce que la condición de los pacientes cambia con el tiempo y que los recursos deben dirigirse hacia quienes tienen mayor probabilidad de beneficiarse, un concepto central tanto en START como en SALT bajo situaciones de recursos extremadamente limitados. La coordinación con un centro de comando médico de desastres (a través de la Sección de Planificación/Logística del SCI) permite identificar capacidad adicional en la red hospitalaria regional y activar transporte no tradicional. Transportar de forma secuencial sin reevaluar ni distribuir la carga, o abandonar el triaje estructurado, contradice los principios fundamentales de manejo de MCI y probablemente resulte en más muertes evitables por retrasos y sobrecarga hospitalaria."
    },
    {
        "question": "Durante un incidente de fuga de gas industrial con posible atmósfera tóxica, se han establecido las Zonas Caliente, Tibia y Fría. Un paciente Amarillo con exposición leve ha sido descontaminado en la Zona Tibia y necesita ser trasladado al área de tratamiento. Un familiar angustiado, que no tiene equipo de protección, intenta ingresar a la Zona Tibia para acompañar al paciente. Además, el Oficial de Seguridad nota que el viento ha cambiado de dirección y ahora sopla desde la zona de fuga hacia el puesto de comando actual. ¿Cuál es la secuencia de acciones MÁS apropiada?",
        "options": [
            {"letter": "a", "text": "Permitir el ingreso del familiar a la Zona Tibia porque el apoyo emocional del paciente tiene prioridad sobre el control de acceso, y evaluar el cambio de viento solo si se reportan síntomas en el puesto de comando"},
            {"letter": "b", "text": "El control de acceso a la Zona Tibia debe mantenerse estricto, impidiendo el ingreso del familiar sin equipo de protección y dirigiéndolo a la Zona Fría o al área de reunión familiar; simultáneamente, el Oficial de Seguridad debe alertar de inmediato al Comandante de Incidente sobre el cambio de viento para evaluar el reubicar el puesto de comando y otras instalaciones de la Zona Fría a una posición nuevamente segura y con el viento a favor, ya que un cambio de condiciones ambientales puede convertir una Zona Fría en insegura"},
            {"letter": "c", "text": "Ignorar el cambio de viento porque las zonas ya fueron establecidas al inicio del incidente y se consideran fijas durante todo el evento"},
            {"letter": "d", "text": "Trasladar el puesto de comando solo después de que el Oficial de Seguridad confirme mediante monitoreo atmosférico que ya hay síntomas en el personal, para evitar movimientos innecesarios"},
        ],
        "correctAnswer": "b",
        "explanation": "El control de acceso entre zonas es uno de los pilares del manejo de escenas con materiales peligrosos: solo personal con el equipo de protección adecuado y una función definida puede ingresar a la Zona Tibia, y los civiles sin entrenamiento ni protección deben ser dirigidos a áreas seguras designadas, como un punto de reunión familiar en la Zona Fría, para evitar contaminación cruzada o exposición adicional. Las zonas operacionales no son estáticas: dependen de condiciones ambientales como la dirección del viento, la topografía y la evolución del peligro, por lo que el Oficial de Seguridad tiene la responsabilidad y la autoridad de monitorear continuamente estas condiciones y recomendar o exigir la reubicación de instalaciones cuando cambian. Un cambio de viento que ahora dirige contaminantes hacia el puesto de comando puede convertir retroactivamente una Zona Fría en insegura, por lo que esperar a que aparezcan síntomas en el personal antes de actuar contradice el principio de anticipación y gestión proactiva del peligro que sustenta la zonificación caliente-tibia-fría."
    },
    {
        "question": "Un incendio en un edificio de apartamentos comienza como un MCI menor con 5 víctimas por inhalación de humo, manejado bajo el mando de un Capitán de Bomberos como Comandante de Incidente único. A los 20 minutos, el fuego se propaga a un edificio adyacente, elevando el número de víctimas a 35, e ingresan al lugar tanto la Policía (por control de multitudes y una posible causa criminal) como una agencia estatal de manejo de emergencias. ¿Qué estructura de comando es MÁS apropiada para esta fase expandida del incidente, y por qué?",
        "options": [
            {"letter": "a", "text": "El Capitán de Bomberos debe mantener el comando único absoluto sobre policía y la agencia estatal, ya que el principio de unidad de comando prohíbe que más de una agencia tenga autoridad de decisión"},
            {"letter": "b", "text": "Debe establecerse un Comando Unificado, donde los representantes de bomberos, policía y la agencia estatal toman decisiones conjuntas sobre objetivos y prioridades comunes bajo una sola estructura de planificación, cada uno manteniendo autoridad sobre los recursos y el personal de su propia agencia; esto preserva la coordinación centralizada sin violar la autoridad legal de cada agencia sobre su propio personal"},
            {"letter": "c", "text": "Cada agencia debe establecer su propio puesto de comando independiente y comunicarse informalmente por radio cuando sea necesario, sin una estructura organizativa compartida"},
            {"letter": "d", "text": "El comando debe transferirse por completo a la agencia estatal de manejo de emergencias, dejando a bomberos y policía en un rol puramente operativo sin participación en la planificación"},
        ],
        "correctAnswer": "b",
        "explanation": "Cuando un incidente involucra a múltiples agencias con jurisdicción legal separada (bomberos, policía, una agencia estatal), el SCI prevé la estructura de Comando Unificado precisamente para estas situaciones, permitiendo que los representantes de cada agencia colaboren en un único plan de acción del incidente y en objetivos compartidos, sin que ninguna agencia pierda su autoridad legal independiente sobre sus propios recursos y personal. Esto difiere del comando único, que es apropiado cuando una sola agencia tiene jurisdicción y responsabilidad exclusivas, pero se vuelve insuficiente cuando el alcance del incidente cruza líneas jurisdiccionales o disciplinarias, como ocurre aquí con la propagación del fuego, la escena potencialmente criminal y la magnitud que activa la respuesta estatal. Puestos de comando independientes sin coordinación (opción c) violarían los principios de comunicaciones integradas y plan de acción único, generando duplicación de esfuerzos y riesgo de órdenes contradictorias. El Comando Unificado mantiene la eficiencia y la unidad de esfuerzo del SCI mientras respeta la autoridad legal distribuida entre las agencias que responden."
    },
]