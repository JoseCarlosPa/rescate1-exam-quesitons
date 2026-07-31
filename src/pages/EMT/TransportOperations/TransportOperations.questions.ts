import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuáles son las fases principales del transporte médico?",
        answer: "Las fases son: 1) Preparación (inspección diaria, verificación de equipo), 2) Respuesta (traslado al lugar, evaluación de escena), 3) Atención en escena (evaluación y estabilización del paciente), y 4) Transporte (carga, monitorización y traslado al hospital).",
    },
    {
        question: "¿Qué diferencias principales existen entre los tipos de ambulancia?",
        answer: "Tipo I: construida sobre chasis de camión, mayor espacio pero menos maniobrable. Tipo II: basada en van, más económica y maniobrable pero espacio limitado. Tipo III: van modificada con compartimento ampliado, equilibrio entre espacio y maniobrabilidad.",
    },
    {
        question: "¿Cuáles son las responsabilidades del conductor durante el transporte?",
        answer: "Conducción segura y defensiva, conocimiento de rutas y hospitales, comunicación por radio, mantenimiento básico del vehículo, y asistencia en carga/descarga del paciente.",
    },
    {
        question: "¿Qué posición es más apropiada para transportar pacientes con dificultad respiratoria?",
        answer: "La posición de Fowler (semisentado) es la más apropiada, ya que facilita la ventilación al permitir que el diafragma se expanda completamente y reduce el trabajo respiratorio.",
    },
    {
        question: "¿Con qué frecuencia se deben tomar los signos vitales durante el transporte?",
        answer: "En pacientes críticos, cada 5 minutos como mínimo. En pacientes estables, cada 15 minutos. La saturación de oxígeno y el ritmo cardíaco deben monitorizarse continuamente cuando sea posible.",
    },
    {
        question: "¿Qué información esencial debe comunicarse al hospital receptor?",
        answer: "Reporte inicial con edad, sexo, mecanismo de lesión, signos vitales, tratamientos administrados, tiempo estimado de llegada, y cualquier cambio significativo en el estado del paciente durante el transporte.",
    },
    {
        question: "¿Cuáles son los elementos críticos de la verificación diaria de la ambulancia?",
        answer: "Verificación del vehículo (fluidos, neumáticos, luces, combustible) y del equipo médico (inventario de medicamentos, funcionamiento del monitor, suministros descartables, sistema de oxígeno, comunicaciones).",
    },
    {
        question: "¿Cuándo está indicado cambiar de hospital durante el transporte?",
        answer: "Cuando el paciente presenta deterioro que requiere capacidades especializadas no disponibles en el hospital de destino original, como: infarto con indicación de cateterismo, trauma severo que requiere centro de trauma, o complicaciones obstétricas que requieren cirugía inmediata.",
    },
];

export const transportOperationsQuestions: Question[] = [
    {
        question: "¿Cuál es la responsabilidad PRIMARY del conductor de ambulancia durante el transporte de un paciente crítico?",
        options: [
            {letter: "a", text: "Administrar medicamentos al paciente"},
            {letter: "b", text: "Conducir de manera segura y llegar al hospital lo más rápido posible"},
            {letter: "c", text: "Monitorizar los signos vitales del paciente"},
            {letter: "d", text: "Comunicarse constantemente con el hospital"},
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante la verificación diaria de la ambulancia, ¿cuál de los siguientes NO es un elemento crítico a revisar?",
        options: [
            {letter: "a", text: "Nivel de combustible"},
            {letter: "b", text: "Funcionamiento de luces y sirenas"},
            {letter: "c", text: "Inventario de medicamentos y fechas de vencimiento"},
            {letter: "d", text: "Preferencias musicales del equipo"},
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente con infarto agudo de miocardio debe ser transportado en cual posición:",
        options: [
            {letter: "a", text: "Completamente supino"},
            {letter: "b", text: "Posición de Fowler (semisentado)"},
            {letter: "c", text: "Decúbito lateral izquierdo"},
            {letter: "d", text: "Trendelenburg"},
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Con qué frecuencia se deben tomar los signos vitales en un paciente crítico durante el transporte?",
        options: [
            {letter: "a", text: "Cada 15 minutos"},
            {letter: "b", text: "Cada 10 minutos"},
            {letter: "c", text: "Cada 5 minutos"},
            {letter: "d", text: "Solo al inicio y final del transporte"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la diferencia principal entre una ambulancia Tipo I y Tipo III?",
        options: [
            {letter: "a", text: "El Tipo I es más pequeña que el Tipo III"},
            {letter: "b", text: "El Tipo I está construida sobre chasis de camión, el Tipo III sobre van modificada"},
            {letter: "c", text: "El Tipo I es para transporte urbano, el Tipo III para rural"},
            {letter: "d", text: "No hay diferencias significativas"},
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte de un paciente en shock, la comunicación con el hospital debe incluir:",
        options: [
            {letter: "a", text: "Solo la edad y sexo del paciente"},
            {letter: "b", text: "Signos vitales iniciales únicamente"},
            {letter: "c", text: "Reporte completo: edad, mecanismo, signos vitales, tratamientos y ETA"},
            {letter: "d", text: "Solo el tiempo estimado de llegada"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes posiciones está contraindicada para un paciente con posible lesión espinal?",
        options: [
            {letter: "a", text: "Supina con inmovilización"},
            {letter: "b", text: "Decúbito lateral con log roll"},
            {letter: "c", text: "Posición de Fowler sin inmovilización"},
            {letter: "d", text: "Supina con tabla espinal"},
        ],
        correctAnswer: "c",
    },
    {
        question: "En caso de parto precipitado durante el transporte, la primera acción debe ser:",
        options: [
            {letter: "a", text: "Acelerar hacia el hospital más cercano"},
            {letter: "b", text: "Detener la ambulancia en lugar seguro"},
            {letter: "c", text: "Llamar a bomberos para asistencia"},
            {letter: "d", text: "Continuar el transporte sin detenerse"},
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el equipamiento mínimo requerido para el manejo de vía aérea en una ambulancia básica?",
        options: [
            {letter: "a", text: "Solo mascarillas de oxígeno"},
            {letter: "b", text: "Cánulas orofaríngeas, BVM, aspirador y oxígeno"},
            {letter: "c", text: "Únicamente tubos endotraqueales"},
            {letter: "d", text: "Solo cánulas nasales"},
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte de un paciente con trauma múltiple, se observa deterioro de los signos vitales. ¿Cuál es la acción más apropiada?",
        options: [
            {letter: "a", text: "Ignorar los cambios y continuar"},
            {letter: "b", text: "Detener el vehículo para evaluar"},
            {letter: "c", text: "Notificar inmediatamente al hospital y considerar cambio de destino"},
            {letter: "d", text: "Reducir la velocidad del transporte"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes factores NO debe considerarse al seleccionar el hospital de destino?",
        options: [
            {letter: "a", text: "Capacidades especializadas requeridas"},
            {letter: "b", text: "Distancia y tiempo de transporte"},
            {letter: "c", text: "Disponibilidad de camas"},
            {letter: "d", text: "Preferencias del personal de ambulancia"},
        ],
        correctAnswer: "d",
    },
    {
        question: "La posición de Trendelenburg está indicada principalmente para:",
        options: [
            {letter: "a", text: "Pacientes con dificultad respiratoria"},
            {letter: "b", text: "Shock hipovolémico (como medida temporal)"},
            {letter: "c", text: "Pacientes inconscientes"},
            {letter: "d", text: "Todas las emergencias cardíacas"},
        ],
        correctAnswer: "b",
    },
    {
        question: "Al cargar un paciente en la ambulancia, ¿cuál es la consideración de seguridad más importante?",
        options: [
            {letter: "a", text: "Velocidad de carga"},
            {letter: "b", text: "Verificar que la camilla esté asegurada y todos los dispositivos protegidos"},
            {letter: "c", text: "Posición del conductor"},
            {letter: "d", text: "Activar inmediatamente las luces de emergencia"},
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la ventaja principal de una ambulancia Tipo II en área urbana?",
        options: [
            {letter: "a", text: "Mayor espacio para procedimientos"},
            {letter: "b", text: "Mejor maniobrabilidad y menor costo operativo"},
            {letter: "c", text: "Mayor velocidad máxima"},
            {letter: "d", text: "Mejor aislamiento acústico"},
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte, la monitorización continua debe incluir prioritariamente:",
        options: [
            {letter: "a", text: "Solo la presión arterial"},
            {letter: "b", text: "Solo la saturación de oxígeno"},
            {letter: "c", text: "Saturación de oxígeno, ritmo cardíaco y nivel de conciencia"},
            {letter: "d", text: "Solo la temperatura corporal"},
        ],
        correctAnswer: "c",
    },
];

export const transportOperationsChallengeQuestions: Question[] = [
    {
        question: "Un paciente masculino de 34 años sufre una caída de altura en una zona rural. Presenta GCS 13, fractura abierta de fémur con hemorragia controlada y dolor abdominal difuso con signos de irritación peritoneal. El tiempo estimado de transporte terrestre hasta el centro de trauma nivel I es de 55 minutos por carretera secundaria. Un helicóptero medicalizado puede llegar a la escena en 15 minutos y trasladar al paciente al mismo centro en 12 minutos de vuelo, pero las condiciones climáticas son marginales con posibilidad de deterioro en los próximos 20 minutos. ¿Cuál es la decisión más apropiada?",
        options: [
            {letter: "a", text: "Esperar al helicóptero sin importar el clima, ya que el tiempo total de transporte aéreo siempre es superior al terrestre"},
            {letter: "b", text: "Iniciar transporte terrestre inmediato hacia el centro de trauma mientras se solicita el helicóptero para un posible punto de encuentro (rendezvous) en ruta, dado que el paciente tiene un mecanismo y hallazgos que sugieren hemorragia interna con riesgo de deterioro rápido y el clima puede impedir el vuelo"},
            {letter: "c", text: "Transportar al hospital comunitario más cercano para estabilización antes de considerar cualquier traslado adicional"},
            {letter: "d", text: "Permanecer en la escena hasta confirmar el diagnóstico exacto de la lesión abdominal antes de decidir el modo de transporte"},
        ],
        correctAnswer: "b",
        explanation: "En pacientes con sospecha de hemorragia interna (abdomen agudo postraumático) y trauma penetrante o cerrado con mecanismo significativo, el principio de la 'hora dorada' exige minimizar el tiempo hasta control quirúrgico definitivo, no solo el tiempo hasta el hospital más cercano. Cuando el clima es marginal, existe riesgo real de que el helicóptero no pueda despegar, aterrizar o deba abortar la misión, por lo que retrasar el transporte terrestre a la espera de un recurso aéreo incierto puede ser fatal. La estrategia de iniciar el transporte terrestre y coordinar un punto de encuentro en ruta ('rendezvous') combina lo mejor de ambos mundos: el paciente se mueve de inmediato hacia el nivel de atención definitivo mientras se mantiene abierta la opción de acortar el tiempo total si el helicóptero puede interceptar la ambulancia en un punto seguro. Detenerse en un hospital comunitario sin capacidad quirúrgica de trauma añade un paso innecesario (transporte secundario) que consume el tiempo crítico, y esperar un diagnóstico exacto en el campo contradice el principio de 'load and go' para trauma inestable.",
    },
    {
        question: "En la escena de una colisión vehicular, un paciente de 45 años presenta un mecanismo de lesión significativo (deformidad mayor del vehículo con intrusión >30 cm, expulsión parcial del compartimento) pero al examen físico secundario tiene signos vitales estables, GCS 15 y solo refiere dolor leve en el hombro. El hospital comunitario está a 8 minutos y el centro de trauma nivel I está a 35 minutos. ¿Cuál es el enfoque de triage correcto según los criterios de decisión de campo del CDC/ACS-COT?",
        options: [
            {letter: "a", text: "Transportar al hospital comunitario porque los signos vitales normales descartan lesiones graves"},
            {letter: "b", text: "Transportar al centro de trauma nivel I, ya que el criterio de mecanismo de lesión por sí solo (intrusión significativa, expulsión) justifica el nivel de destino más alto independientemente de signos vitales normales, dado que las lesiones internas pueden no manifestarse clínicamente de inmediato"},
            {letter: "c", text: "Dejar la decisión completamente a discreción del paciente, ya que se encuentra alerta y orientado"},
            {letter: "d", text: "Transportar al hospital comunitario y solicitar traslado interinstitucional solo si el paciente empeora durante la observación"},
        ],
        correctAnswer: "b",
        explanation: "Los criterios de decisión de campo de triage (Field Triage Decision Scheme del CDC/ACS-COT) están estructurados en niveles jerárquicos: fisiología (signos vitales/GCS), anatomía de la lesión, mecanismo de lesión, y factores especiales/comorbilidades. Un paciente puede tener fisiología completamente normal en el paso 1 pero cumplir criterios de mecanismo en el paso 3 (intrusión significativa del compartimento, expulsión, muerte de otro ocupante, caída de altura, etc.), lo cual por sí solo justifica el transporte a un centro de trauma de mayor nivel. Esto se debe a que los signos vitales normales en la escena pueden enmascarar transitoriamente hemorragias internas o lesiones de órganos sólidos que se descompensan minutos u horas después (compensación fisiológica temprana, especialmente en pacientes jóvenes). Delegar la decisión al paciente ignora que su capacidad de autoevaluación de riesgo no sustituye el juicio clínico basado en mecanismo, y transportar primero al hospital comunitario introduce un retraso de transporte secundario que anula la ventaja de la 'hora dorada' si efectivamente existe una lesión oculta.",
    },
    {
        question: "Durante el transporte de un paciente con dolor torácico estable y signos vitales normales hacia el hospital, el conductor considera usar luces y sirenas ('código') para reducir el tiempo de viaje de 12 a 9 minutos por una vía urbana congestionada. ¿Cuál es el análisis de riesgo-beneficio más correcto para esta decisión?",
        options: [
            {letter: "a", text: "Siempre se debe usar código en cualquier paciente cardíaco, ya que cualquier reducción de tiempo mejora el pronóstico"},
            {letter: "b", text: "El uso de código está contraindicado en todos los pacientes conscientes"},
            {letter: "c", text: "No usar código, ya que el beneficio marginal de ahorrar 3 minutos no justifica el riesgo estadísticamente elevado de colisión durante la conducción de emergencia, especialmente cuando el paciente está estable y no existe una intervención tiempo-dependiente inmediata que dependa de esos minutos"},
            {letter: "d", text: "La decisión debe basarse únicamente en la preferencia personal del conductor"},
        ],
        correctAnswer: "c",
        explanation: "La evidencia operacional muestra que la conducción con luces y sirenas incrementa significativamente el riesgo de colisión (varias veces mayor que la conducción normal) debido a la falsa percepción de derecho de paso por parte de otros conductores, la reducción del tiempo de reacción en intersecciones y la tentación de exceder límites de velocidad seguros. El ahorro de tiempo real que produce el código en trayectos urbanos suele ser modesto (frecuentemente 1-3 minutos), lo cual rara vez altera el desenlace clínico en un paciente estable sin una intervención tiempo-dependiente confirmada (por ejemplo, IAMCEST activo con laboratorio de hemodinamia esperando). El principio operacional correcto es reservar el código para situaciones donde existe una ventana terapéutica crítica y el paciente está inestable o en franco deterioro, sopesando siempre el riesgo para la tripulación, el paciente y el público contra un beneficio de tiempo marginal. Basar la decisión en preferencia personal ignora el deber de aplicar un juicio clínico-operacional objetivo.",
    },
    {
        question: "Se transporta a una paciente embarazada de 32 semanas con preeclampsia severa (PA 170/115, cefalea, hiperreflexia) que además presenta antecedente de asma. Comienza a presentar dificultad respiratoria leve durante el traslado. ¿Cuál es la consideración de posicionamiento y manejo MÁS crítica a integrar durante el transporte?",
        options: [
            {letter: "a", text: "Colocarla en posición supina estricta para facilitar la monitorización fetal continua"},
            {letter: "b", text: "Colocarla en decúbito lateral izquierdo (para evitar compresión aortocava por el útero grávido y mejorar el retorno venoso/gasto cardíaco) mientras se maneja la dificultad respiratoria con oxígeno suplementario, evitando broncodilatadores que puedan exacerbar la hipertensión, y preparándose para convulsiones (eclampsia) durante el transporte"},
            {letter: "c", text: "Priorizar exclusivamente el manejo del asma con beta-agonistas en dosis altas sin considerar la preeclampsia"},
            {letter: "d", text: "Transportar en posición de Trendelenburg para mejorar la perfusión cerebral"},
        ],
        correctAnswer: "b",
        explanation: "En pacientes embarazadas a partir del segundo/tercer trimestre, la posición supina provoca compresión aortocava por el peso del útero grávido, reduciendo el retorno venoso y el gasto cardíaco, lo que puede empeorar la hipotensión relativa y la perfusión placentaria; por ello el decúbito lateral izquierdo es el estándar de transporte. La preeclampsia severa con cefalea e hiperreflexia indica riesgo inminente de eclampsia (convulsiones), por lo que el equipo debe estar preparado para proteger la vía aérea y manejar convulsiones durante el traslado. El componente respiratorio agrega complejidad farmacológica: los beta-agonistas usados para el asma tienen efecto simpaticomimético que puede elevar aún más la presión arterial y la frecuencia cardíaca, complicando el cuadro hipertensivo, por lo que su uso debe sopesarse cuidadosamente y coordinarse con control médico. Trendelenburg no está indicado aquí y puede empeorar la disnea al aumentar la presión sobre el diafragma, mientras que ignorar la preeclampsia para tratar solo el asma desatiende una condición con riesgo de vida materno-fetal inmediato.",
    },
    {
        question: "En un incidente con múltiples víctimas (colisión de autobús con 22 pacientes triados: 4 rojos/inmediatos, 8 amarillos/demorados, 10 verdes/menores), solo hay 3 ambulancias disponibles en el lugar y el hospital de trauma más cercano tiene capacidad limitada de recepción simultánea. ¿Cuál es la estrategia de coordinación de recursos más apropiada según el sistema de comando de incidentes (ICS)?",
        options: [
            {letter: "a", text: "Enviar las 3 ambulancias disponibles a transportar simultáneamente a los 4 pacientes rojos sin coordinar con el hospital receptor"},
            {letter: "b", text: "Establecer un Oficial de Transporte que coordine con el Director Médico de Incidente y el centro de comunicaciones para distribuir a los pacientes críticos entre múltiples hospitales receptores (no solo el más cercano), evitando saturar un único centro, mientras se solicitan recursos adicionales (mutual aid) para los pacientes amarillos y verdes"},
            {letter: "c", text: "Transportar a todos los pacientes, sin importar su categoría de triage, en el orden en que llegaron las ambulancias a la escena"},
            {letter: "d", text: "Esperar a que lleguen todas las ambulancias solicitadas antes de iniciar cualquier transporte, para evitar transportes desorganizados"},
        ],
        correctAnswer: "b",
        explanation: "En un MCI (incidente con múltiples víctimas), la estructura de Comando de Incidentes designa roles específicos —incluyendo un Oficial de Transporte— cuya función es coordinar el flujo de pacientes hacia los hospitales receptores en función de la capacidad real de cada centro, no solo la proximidad geográfica; esto se conoce como distribución de carga hospitalaria (load balancing) y previene que un solo hospital colapse mientras otros con capacidad disponible quedan subutilizados. Los recursos limitados (3 ambulancias para 22 pacientes) exigen solicitar mutual aid (ayuda mutua) de inmediato en lugar de esperar, ya que los pacientes amarillos también requieren transporte oportuno para evitar su deterioro a rojo. Transportar por orden de llegada de las ambulancias en lugar de por categoría de triage anula el propósito mismo del triage, y esperar a que lleguen todos los recursos antes de transportar retrasa innecesariamente la atención de los pacientes más críticos, contradiciendo el principio de manejar primero a quienes tienen mayor probabilidad de sobrevivir con intervención oportuna.",
    },
    {
        question: "Se responde a una colisión vehicular donde el paciente está atrapado en el vehículo, con el motor aún en marcha, olor a combustible en el área y cables eléctricos caídos cerca del vehículo tras impactar un poste. Los bomberos aún no han llegado a la escena. ¿Cuál es la acción MÁS apropiada antes de iniciar cualquier evaluación o extracción del paciente?",
        options: [
            {letter: "a", text: "Acercarse de inmediato al vehículo para iniciar la evaluación primaria, ya que el tiempo hasta el paciente es la prioridad absoluta"},
            {letter: "b", text: "Establecer una zona de seguridad manteniendo distancia segura del vehículo y de los cables eléctricos caídos, no ingresar ni tocar el vehículo hasta confirmar que la fuente eléctrica está desenergizada y el riesgo de incendio/explosión ha sido mitigado por personal capacitado (bomberos/compañía eléctrica), y solo entonces proceder con la evaluación del paciente"},
            {letter: "c", text: "Apagar el motor del vehículo personalmente para eliminar el riesgo de incendio, ya que cualquier EMT puede hacerlo de forma segura"},
            {letter: "d", text: "Retirar los cables eléctricos del área con las manos protegidas por guantes de examen antes de acercarse al paciente"},
        ],
        correctAnswer: "b",
        explanation: "El principio fundamental de la seguridad en la escena es que la seguridad de la escena precede siempre a la atención del paciente ('scene safety first'): un rescatador lesionado o muerto no solo deja de ayudar a la víctima original, sino que crea una segunda víctima y complica aún más la respuesta. La combinación de motor en marcha con olor a combustible representa riesgo de incendio o explosión, y los cables eléctricos caídos representan un peligro de electrocución que solo debe ser mitigado por personal con equipo y entrenamiento específico (bomberos o la compañía eléctrica), nunca por un EMT sin ese equipo. Los guantes de examen médico no ofrecen ninguna protección contra la electricidad de líneas caídas, por lo que intentar retirarlas es una acción de altísimo riesgo y está fuera del alcance de práctica del EMT. La conducta correcta es acordonar una zona de seguridad, esperar a que el personal especializado desenergice y estabilice los peligros ambientales, y solo después iniciar la evaluación y extracción del paciente.",
    },
];