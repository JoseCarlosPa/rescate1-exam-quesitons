import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué significa TAMP-A?",
        answer: "TAMP-A significa Técnico en Atención Médica Prehospitalaria Avanzado. Es el nivel más alto de formación prehospitalaria en México, equivalente al paramédico en la terminología anglosajona."
    },
    {
        question: "¿Cuál es la diferencia entre un TAMP-B y un TAMP-A?",
        answer: "El TAMP-B (Básico) puede realizar procedimientos básicos como RCP, inmovilización, control de hemorragias y administración de algunos medicamentos. El TAMP-A puede realizar procedimientos avanzados como intubación endotraqueal, acceso intravenoso, administración de una gama más amplia de medicamentos, desfibrilación y monitoreo cardíaco."
    },
    {
        question: "¿Qué normativa regula al TAMP-A en México?",
        answer: "En México, el TAMP-A está regulado por la NOM-034-SSA3-2013 (Regulación de los servicios de salud. Atención médica prehospitalaria), la NOM-237-SSA1-2004 y las normas de la Secretaría de Salud federal y estatales. También aplican los lineamientos del Consejo Nacional de Urgencias Médicas (CNUM)."
    },
    {
        question: "¿Qué es el pensamiento clínico en el contexto prehospitalario?",
        answer: "El pensamiento clínico es la capacidad de recopilar datos de manera sistemática, analizar la situación, formular una impresión diagnóstica y tomar decisiones de tratamiento apropiadas en un entorno dinámico y con recursos limitados. Incluye reconocer patrones de enfermedad, anticipar complicaciones y priorizar intervenciones."
    },
    {
        question: "¿Cuáles son los principios éticos fundamentales que debe seguir un TAMP-A?",
        answer: "Los principios éticos fundamentales son: Autonomía (respetar las decisiones informadas del paciente), Beneficencia (actuar en beneficio del paciente), No maleficencia (evitar causar daño), Justicia (tratar a todos con equidad) y Confidencialidad (proteger la información del paciente)."
    },
    {
        question: "¿Qué es el 'ámbito de práctica' de un TAMP-A?",
        answer: "El ámbito de práctica define los procedimientos, medicamentos e intervenciones que un TAMP-A está legalmente autorizado a realizar. Este ámbito varía según la jurisdicción y el protocolo médico local, pero siempre requiere supervisión médica y protocolos aprobados."
    },
    {
        question: "¿Qué importancia tiene el bienestar del rescatista (wellness)?",
        answer: "El bienestar del rescatista es fundamental porque el estrés acumulado, el trauma secundario y el agotamiento pueden afectar la toma de decisiones y la calidad de la atención. Incluye bienestar físico, mental y emocional. El TAMP-A debe reconocer señales de estrés postraumático y buscar apoyo profesional cuando sea necesario."
    },
    {
        question: "¿Qué son los Protocolos Médicos de Operación (PMO)?",
        answer: "Los PMO son directrices médicas aprobadas por el Director Médico que autorizan al TAMP-A a realizar ciertos procedimientos y administrar medicamentos específicos sin necesidad de contactar al médico en cada caso. Pueden ser en línea (con contacto médico en tiempo real) o fuera de línea (predefinidos para situaciones específicas)."
    },
];

export const introductionQuestions: Question[] = [
    {
        "question": "¿Cuál de las siguientes opciones describe mejor el rol del TAMP-A en el Sistema de Emergencias Médicas (SEM)?",
        "options": [
            {"letter": "a", "text": "Proporcionar únicamente primeros auxilios básicos hasta la llegada del médico"},
            {"letter": "b", "text": "Evaluar, tratar y transportar pacientes aplicando intervenciones avanzadas bajo supervisión médica"},
            {"letter": "c", "text": "Realizar diagnósticos médicos definitivos en el campo"},
            {"letter": "d", "text": "Sustituir completamente la atención hospitalaria en emergencias"}
        ],
        "correctAnswer": "b",
        "explanation": "El TAMP-A evalúa al paciente, aplica intervenciones avanzadas (vía aérea, medicamentos, monitoreo) y lo transporta de manera segura al centro hospitalario adecuado, todo bajo la supervisión de un director médico y protocolos establecidos. No realiza diagnósticos definitivos ni sustituye la atención hospitalaria."
    },
    {
        "question": "Un TAMP-A actúa siguiendo un protocolo preestablecido sin contacto en tiempo real con el médico. Este tipo de protocolo se denomina:",
        "options": [
            {"letter": "a", "text": "Protocolo en línea (online)"},
            {"letter": "b", "text": "Protocolo de intervención directa"},
            {"letter": "c", "text": "Protocolo fuera de línea (offline)"},
            {"letter": "d", "text": "Protocolo de autorización médica inmediata"}
        ],
        "correctAnswer": "c",
        "explanation": "Los protocolos fuera de línea (offline) son instrucciones médicas predefinidas que autorizan al TAMP-A a actuar en situaciones específicas sin necesidad de contactar al médico en cada momento. Los protocolos en línea requieren contacto directo en tiempo real con el director médico."
    },
    {
        "question": "El principio ético que obliga al TAMP-A a actuar siempre en el mejor interés del paciente se denomina:",
        "options": [
            {"letter": "a", "text": "Autonomía"},
            {"letter": "b", "text": "Justicia"},
            {"letter": "c", "text": "Beneficencia"},
            {"letter": "d", "text": "Confidencialidad"}
        ],
        "correctAnswer": "c",
        "explanation": "La beneficencia es el principio que obliga al profesional de salud a actuar para el bien del paciente. Se distingue de la no maleficencia ('primero, no hacer daño'). La autonomía se refiere al respeto por las decisiones del paciente, y la justicia a tratar a todos con equidad."
    },
    {
        "question": "¿Cuál es la principal diferencia entre el nivel TAMP-B y el TAMP-A en cuanto a habilidades?",
        "options": [
            {"letter": "a", "text": "El TAMP-A puede realizar diagnósticos radiológicos en campo"},
            {"letter": "b", "text": "El TAMP-A está autorizado para procedimientos avanzados como intubación, acceso IV y administración de medicamentos de alto riesgo"},
            {"letter": "c", "text": "El TAMP-A solo trabaja en hospitales, no en campo"},
            {"letter": "d", "text": "El TAMP-A y el TAMP-B tienen exactamente las mismas habilidades"}
        ],
        "correctAnswer": "b",
        "explanation": "El TAMP-A tiene un ámbito de práctica más amplio que incluye manejo avanzado de la vía aérea (intubación endotraqueal), acceso vascular (IV/IO), administración de una gama más amplia de medicamentos, interpretación de ECG y otros procedimientos avanzados que no están autorizados para el nivel básico."
    },
    {
        "question": "Un paciente adulto consciente y orientado rechaza el tratamiento que el TAMP-A considera necesario. ¿Cuál es la acción correcta?",
        "options": [
            {"letter": "a", "text": "Administrar el tratamiento de todas formas, ya que el TAMP-A sabe lo que es mejor para el paciente"},
            {"letter": "b", "text": "Respetar la decisión del paciente, verificar que esté informado sobre los riesgos, obtener una negativa firmada y documentar el caso"},
            {"letter": "c", "text": "Llamar a la familia para que convenza al paciente"},
            {"letter": "d", "text": "Inmovilizar al paciente para poder tratarlo"}
        ],
        "correctAnswer": "b",
        "explanation": "Un paciente adulto consciente, orientado y capaz tiene el derecho de rechazar el tratamiento (principio de autonomía). El TAMP-A debe: informarle sobre los riesgos del rechazo, asegurarse de que la decisión sea informada, obtener si es posible una firma de rechazo de atención y documentar completamente la situación. Nunca se debe tratar a un paciente competente en contra de su voluntad."
    },
    {
        "question": "¿Qué normativa mexicana regula principalmente los servicios de atención médica prehospitalaria?",
        "options": [
            {"letter": "a", "text": "NOM-001-SSA1-2013"},
            {"letter": "b", "text": "NOM-034-SSA3-2013"},
            {"letter": "c", "text": "NOM-015-SSA2-2010"},
            {"letter": "d", "text": "NOM-205-SSA1-2002"}
        ],
        "correctAnswer": "b",
        "explanation": "La NOM-034-SSA3-2013 'Regulación de los servicios de salud. Atención médica prehospitalaria' es la norma oficial mexicana que establece los requisitos para la prestación de servicios de atención médica prehospitalaria, incluyendo la formación, equipamiento y protocolos de los técnicos prehospitalarios."
    },
    {
        "question": "El estrés acumulado no resuelto que experimenta el personal de emergencias tras exposición repetida a situaciones traumáticas se conoce como:",
        "options": [
            {"letter": "a", "text": "Fatiga de compasión o trauma vicario"},
            {"letter": "b", "text": "Síndrome de burnout agudo"},
            {"letter": "c", "text": "Trastorno de adaptación temporal"},
            {"letter": "d", "text": "Respuesta adrenal aumentada"}
        ],
        "correctAnswer": "a",
        "explanation": "La fatiga de compasión (también llamada trauma vicario o trauma secundario) es el agotamiento emocional que resulta de ayudar repetidamente a personas en situaciones traumáticas. Es distinta del burnout general, ya que está específicamente relacionada con la exposición al sufrimiento ajeno. El personal de emergencias tiene alta susceptibilidad a este fenómeno."
    },
    {
        "question": "¿Cuál es el propósito principal del Sistema Estrella de la Vida en el SEM?",
        "options": [
            {"letter": "a", "text": "Identificar el nivel de certificación del paramédico"},
            {"letter": "b", "text": "Representar las seis fases de la atención de emergencias médicas"},
            {"letter": "c", "text": "Indicar las especialidades médicas disponibles en el hospital"},
            {"letter": "d", "text": "Señalizar las ambulancias certificadas a nivel internacional"}
        ],
        "correctAnswer": "b",
        "explanation": "La Estrella de la Vida es el símbolo del SEM (Sistema de Emergencias Médicas). Sus seis brazos representan las seis fases del sistema: 1) Detección, 2) Reporte, 3) Respuesta, 4) Atención prehospitalaria, 5) Atención en tránsito, y 6) Transferencia a atención definitiva."
    },
    {
        "question": "Un TAMP-A que documenta incorrectamente o de forma incompleta un caso clínico podría enfrentar consecuencias en cuál de los siguientes ámbitos:",
        "options": [
            {"letter": "a", "text": "Únicamente consecuencias administrativas internas"},
            {"letter": "b", "text": "Solo consecuencias académicas"},
            {"letter": "c", "text": "Consecuencias legales, éticas y profesionales"},
            {"letter": "d", "text": "Ninguna, la documentación es opcional en emergencias"}
        ],
        "correctAnswer": "c",
        "explanation": "La documentación clínica precisa es un requisito legal, ético y profesional. Una documentación incorrecta o incompleta puede resultar en: responsabilidad legal (mal praxis), sanciones éticas por parte de colegios profesionales, pérdida de certificación y comprometer la continuidad del cuidado del paciente."
    },
    {
        "question": "¿Qué término describe la capacidad del TAMP-A para modificar un protocolo establecido basándose en la situación clínica específica del paciente?",
        "options": [
            {"letter": "a", "text": "Autonomía médica completa"},
            {"letter": "b", "text": "Pensamiento crítico y razonamiento clínico"},
            {"letter": "c", "text": "Práctica independiente sin supervisión"},
            {"letter": "d", "text": "Improvisación clínica"}
        ],
        "correctAnswer": "b",
        "explanation": "El pensamiento crítico y el razonamiento clínico permiten al TAMP-A ir más allá de la aplicación mecánica de protocolos para adaptar las intervenciones a la situación específica del paciente. Esto no implica actuar fuera del ámbito de práctica ni sin supervisión médica, sino tomar decisiones informadas dentro del marco establecido."
    },
    {
        "question": "¿Cuál es la correcta descripción de la 'cadena de supervivencia' en emergencias médicas?",
        "options": [
            {"letter": "a", "text": "La jerarquía de mando dentro de una ambulancia"},
            {"letter": "b", "text": "Las etapas secuenciales que maximizan la probabilidad de sobrevivir a una emergencia"},
            {"letter": "c", "text": "El protocolo de comunicación entre paramédicos y hospitales"},
            {"letter": "d", "text": "El equipo mínimo requerido en una unidad de emergencias"}
        ],
        "correctAnswer": "b",
        "explanation": "La cadena de supervivencia es el concepto que representa las etapas críticas e interconectadas que, cuando se ejecutan rápida y correctamente, maximizan la probabilidad de sobrevivir a una emergencia médica. Cada eslabón de la cadena depende del anterior y el tiempo es fundamental para su efectividad."
    },
    {
        "question": "Al recibir un paciente en el hospital, el TAMP-A debe realizar un reporte verbal al personal hospitalario. ¿Cuál es el objetivo principal de este reporte?",
        "options": [
            {"letter": "a", "text": "Justificar el tiempo de traslado ante las autoridades"},
            {"letter": "b", "text": "Garantizar la continuidad del cuidado y comunicar información clínica relevante"},
            {"letter": "c", "text": "Obtener validación de los procedimientos realizados"},
            {"letter": "d", "text": "Documentar el número de km recorridos"}
        ],
        "correctAnswer": "b",
        "explanation": "El reporte verbal de entrega (también llamado 'handoff' o transferencia de cuidado) tiene como objetivo principal garantizar la continuidad del cuidado del paciente. El TAMP-A comunica de forma organizada (usando herramientas como SBAR o SAMPLE) el estado del paciente, los tratamientos administrados, los cambios en su condición y la información relevante para el equipo hospitalario."
    },
    {
        "question": "¿Qué significa el acrónimo SAMPLE en la evaluación prehospitalaria?",
        "options": [
            {"letter": "a", "text": "Signos, Antecedentes, Medicamentos, Procedimientos, Lesiones, Evaluación"},
            {"letter": "b", "text": "Síntomas, Alergias, Medicamentos, Pertinentes antecedentes, Last meal (última comida), Eventos previos"},
            {"letter": "c", "text": "Saturación, Alarma, Monitoreo, Presión arterial, Laboratorio, Electrocardiograma"},
            {"letter": "d", "text": "Sistema, Análisis, Mecanismo, Paciente, Lesión, Evaluación"}
        ],
        "correctAnswer": "b",
        "explanation": "SAMPLE es un acrónimo mnemotécnico para la historia clínica prehospitalaria: S - Síntomas, A - Alergias, M - Medicamentos, P - Pertinentes antecedentes médicos, L - Last meal (última ingesta), E - Eventos que llevaron a la emergencia. Es una herramienta estandarizada para recolectar información clínica relevante."
    },
    {
        "question": "El concepto de 'tiempo oro' (golden hour) en trauma significa:",
        "options": [
            {"letter": "a", "text": "El tiempo máximo permitido para documentar una emergencia"},
            {"letter": "b", "text": "El tiempo ideal para realizar todos los procedimientos en campo"},
            {"letter": "c", "text": "El período crítico durante el cual la atención oportuna puede cambiar significativamente el pronóstico del paciente traumatizado"},
            {"letter": "d", "text": "El tiempo promedio de respuesta de una ambulancia"}
        ],
        "correctAnswer": "c",
        "explanation": "El 'tiempo oro' es el concepto que establece que durante la primera hora después de un trauma grave, la probabilidad de supervivencia es significativamente mayor si el paciente recibe atención definitiva. Esto enfatiza la importancia de tiempos de respuesta rápidos, atención prehospitalaria eficiente y traslado oportuno. El objetivo es minimizar el tiempo en escena y maximizar la velocidad de acceso a cuidado definitivo."
    },
    {
        "question": "¿Cuál de las siguientes acciones NO corresponde al ámbito de práctica del TAMP-A?",
        "options": [
            {"letter": "a", "text": "Intubación endotraqueal"},
            {"letter": "b", "text": "Acceso vascular intravenoso"},
            {"letter": "c", "text": "Realizar diagnósticos por imagen (radiografías) en campo"},
            {"letter": "d", "text": "Administración de medicamentos de emergencia"}
        ],
        "correctAnswer": "c",
        "explanation": "El diagnóstico por imagen como radiografías no forma parte del ámbito de práctica del TAMP-A en campo. El TAMP-A sí puede realizar intubación endotraqueal, acceso IV/IO, administración de medicamentos avanzados y otras intervenciones dentro de su nivel de certificación y protocolos aprobados."
    },
    {
        "question": "En el contexto del SEM, ¿qué es el 'triaje'?",
        "options": [
            {"letter": "a", "text": "Un tipo de técnica de vendaje para heridas"},
            {"letter": "b", "text": "El proceso de clasificar y priorizar pacientes según la gravedad de sus lesiones y las probabilidades de supervivencia"},
            {"letter": "c", "text": "El protocolo de limpieza y desinfección del equipo"},
            {"letter": "d", "text": "El sistema de comunicación entre unidades de emergencia"}
        ],
        "correctAnswer": "b",
        "explanation": "El triaje (del francés 'triage', clasificar) es el proceso sistemático de evaluar y categorizar pacientes para determinar la prioridad de atención y traslado, especialmente cuando los recursos son limitados en relación al número de víctimas. Se basa en la gravedad de las lesiones y las probabilidades de supervivencia con o sin tratamiento."
    },
    {
        "question": "¿Qué implica el 'consentimiento informado implícito' en la atención prehospitalaria?",
        "options": [
            {"letter": "a", "text": "El paciente firmó previamente un documento autorizando cualquier tratamiento"},
            {"letter": "b", "text": "Se presume que un paciente inconsciente o incapaz daría su consentimiento para el tratamiento de emergencia si pudiera"},
            {"letter": "c", "text": "La familia del paciente autorizó verbalmente el tratamiento"},
            {"letter": "d", "text": "El director médico aprobó el tratamiento de antemano"}
        ],
        "correctAnswer": "b",
        "explanation": "El consentimiento informado implícito (o presunto) se aplica cuando un paciente está inconsciente, incapacitado o de otra forma no puede dar su consentimiento explícito. La ley presume que una persona razonable daría su consentimiento para el tratamiento de emergencia si pudiera hacerlo. Esto permite al TAMP-A actuar para preservar la vida sin necesidad de esperar autorización."
    },
    {
        "question": "¿Cuál es la importancia de la revisión post-evento (defusing/debriefing) para el personal de emergencias?",
        "options": [
            {"letter": "a", "text": "Permite evaluar únicamente los errores técnicos cometidos durante la atención"},
            {"letter": "b", "text": "Es un requisito legal obligatorio después de cada llamada"},
            {"letter": "c", "text": "Ayuda a procesar el impacto emocional, identificar áreas de mejora y reforzar el bienestar del equipo"},
            {"letter": "d", "text": "Solo es necesaria después de incidentes con múltiples víctimas"}
        ],
        "correctAnswer": "c",
        "explanation": "El debriefing o revisión post-evento cumple múltiples funciones: permite procesar el impacto emocional de situaciones traumáticas (fundamental para la salud mental del equipo), identificar qué se hizo bien y qué puede mejorarse, reforzar protocolos y fortalecer la cohesión del equipo. Es una práctica recomendada (no solo obligatoria) y beneficiosa tanto después de incidentes mayores como de situaciones rutinarias difíciles."
    },
    {
        "question": "¿Qué elemento de la documentación prehospitalaria tiene mayor importancia médico-legal?",
        "options": [
            {"letter": "a", "text": "El número de unidad de la ambulancia"},
            {"letter": "b", "text": "La hora de llegada al hospital"},
            {"letter": "c", "text": "Los hallazgos clínicos objetivos, tratamientos administrados y respuesta del paciente"},
            {"letter": "d", "text": "El nombre del conductor de la ambulancia"}
        ],
        "correctAnswer": "c",
        "explanation": "Los hallazgos clínicos objetivos (signos vitales, estado neurológico, lesiones), los tratamientos administrados (con dosis, vía y hora) y la respuesta del paciente son los elementos de mayor importancia médico-legal porque: demuestran que la atención fue apropiada y oportuna, sirven como base para el tratamiento hospitalario, son la evidencia principal en casos de litigación y garantizan la continuidad del cuidado."
    },
    {
        "question": "El principio de 'no maleficencia' en el contexto del TAMP-A se refiere a:",
        "options": [
            {"letter": "a", "text": "Actuar siempre con la intención de beneficiar al paciente"},
            {"letter": "b", "text": "Evitar causar daño adicional al paciente durante la atención"},
            {"letter": "c", "text": "Respetar las decisiones autónomas del paciente"},
            {"letter": "d", "text": "Distribuir equitativamente los recursos de emergencia"}
        ],
        "correctAnswer": "b",
        "explanation": "La no maleficencia proviene del principio hipocrático 'Primum non nocere' (primero, no hacer daño). En el contexto prehospitalario, implica evitar intervenciones innecesarias, realizar procedimientos solo cuando los beneficios superan los riesgos, usar la técnica correcta para minimizar complicaciones y reconocer los límites del propio ámbito de práctica."
    },
    {
        "question": "¿Qué componente del sistema SEM es responsable de supervisar médicamente las operaciones del TAMP-A?",
        "options": [
            {"letter": "a", "text": "El coordinador de turno de la ambulancia"},
            {"letter": "b", "text": "El Director Médico del servicio"},
            {"letter": "c", "text": "El Director General de la Cruz Roja o institución"},
            {"letter": "d", "text": "El paramédico de mayor rango en el turno"}
        ],
        "correctAnswer": "b",
        "explanation": "El Director Médico (Medical Director) es el médico responsable de supervisar clínicamente las operaciones del servicio de emergencias. Es quien aprueba los protocolos médicos, define el ámbito de práctica, supervisa la calidad de la atención y proporciona la autoridad médica bajo la cual actúa el TAMP-A. Esta supervisión puede ser en línea (tiempo real) o fuera de línea (mediante protocolos preestablecidos)."
    },
];
