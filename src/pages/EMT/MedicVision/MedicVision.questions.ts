import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la visión médica general?",
        answer: "Es la evaluación estructurada y rápida del estado general de un paciente con condición médica no traumática.",
    },
    {
        question: "¿Qué herramientas se usan para valorar signos y síntomas médicos?",
        answer: "Se utilizan herramientas como OPQRST y SAMPLE.",
    },
    {
        question: "¿Por qué es importante la evaluación médica general en el prehospitalario?",
        answer: "Porque permite detectar condiciones médicas críticas que pueden comprometer la vida si no se interviene a tiempo.",
    },
    {
        question: "¿Qué datos se deben obtener durante la historia clínica rápida?",
        answer: "Alergias, medicamentos actuales, antecedentes médicos, eventos relacionados y últimos alimentos.",
    },
    {
        question: "¿Qué diferencia hay entre paciente médico y traumático?",
        answer: "El paciente médico presenta condiciones internas (cardíacas, neurológicas, respiratorias), mientras que el traumático tiene lesiones físicas externas.",
    },
];

export const visionMedicGeneralQuestions: Question[] = [
    {
        question: "¿Qué define a un paciente médico?",
        options: [
            {letter: "a", text: "Aquel que ha sufrido un accidente automovilístico"},
            {letter: "b", text: "Aquel que presenta una condición interna no traumática"},
            {letter: "c", text: "Aquel que tiene una fractura expuesta"},
            {letter: "d", text: "Aquel que requiere cirugía de emergencia"},
        ],
        correctAnswer: "b",
        explanation: "Un paciente médico presenta una condición interna no traumática (ej. infarto, EVC, diabetes), a diferencia del paciente traumático (lesiones físicas)."
    },
    {
        question: "¿Cuál es el objetivo principal de la evaluación de la naturaleza de la enfermedad (NE)?",
        options: [
            {letter: "a", text: "Determinar el historial médico familiar del paciente"},
            {letter: "b", text: "Identificar la queja principal y el tipo de emergencia médica"},
            {letter: "c", text: "Evaluar la seguridad de la escena para el personal"},
            {letter: "d", text: "Definir el método de transporte más adecuado"},
        ],
        correctAnswer: "b",
        explanation: "La evaluación de la NE busca identificar la queja principal para entender la emergencia médica y priorizar las intervenciones."
    },
    {
        question: "¿Qué mnemotecnia se utiliza para explorar los signos y síntomas del paciente (especialmente el dolor)?",
        options: [
            {letter: "a", text: "AVPU"},
            {letter: "b", text: "SAMPLE"},
            {letter: "c", text: "OPQRST"},
            {letter: "d", text: "DUMBELS"},
        ],
        correctAnswer: "c",
        explanation: "OPQRST se usa para caracterizar los síntomas: Onset (Inicio), Provocation (Provocación), Quality (Calidad), Region (Región), Severity (Severidad), Time (Tiempo)."
    },
    {
        question: "¿Cuándo se debe tomar la decisión de transporte 'cargar y llevar' (load and go) de un paciente médico?",
        options: [
            {letter: "a", text: "Después de la evaluación secundaria completa"},
            {letter: "b", text: "Basada únicamente en el historial médico pasado"},
            {
                letter: "c",
                text: "Durante la evaluación primaria, si el paciente está inestable o hay una amenaza a la vida"
            },
            {letter: "d", text: "Luego de administrar todos los medicamentos posibles en escena"},
        ],
        correctAnswer: "c",
        explanation: "La decisión de transporte rápido se toma en la evaluación primaria si se detectan amenazas a la vida (ABC comprometidos, EVC, SCA) para acortar el tiempo hasta la atención definitiva."
    },
    {
        question: "¿Cuál de las siguientes es una indicación clara de un paciente de alta prioridad que necesita intervención inmediata?",
        options: [
            {letter: "a", text: "Paciente estable con signos vitales normales"},
            {letter: "b", text: "Paciente inconsciente o con alteración del estado mental"},
            {letter: "c", text: "Paciente con náuseas leves y mareo"},
            {letter: "d", text: "Paciente con diabetes controlada y glucosa normal"},
        ],
        correctAnswer: "b",
        explanation: "La inconsciencia o una alteración aguda del estado mental indica un compromiso vital (hipoxia, hipoperfusión, EVC) y requiere intervención inmediata."
    },
    {
        question: "¿Qué se recomienda hacer con un paciente con signos agudos de EVC (Ictus / Stroke)?",
        options: [
            {letter: "a", text: "Administrar líquidos orales para ver si mejora"},
            {letter: "b", text: "Colocar en decúbito prono para proteger la vía aérea"},
            {letter: "c", text: "Traslado urgente a un centro especializado y soporte de ABC"},
            {letter: "d", text: "Esperar 15 minutos en escena para reevaluar"},
        ],
        correctAnswer: "c",
        explanation: "El tiempo es cerebro. El paciente con signos de EVC requiere soporte de ABC y traslado urgente a un hospital capacitado para tratar EVC (Centro de Ictus)."
    },
    {
        question: "¿Qué indica una piel pálida, fría y pegajosa (diaforética) en un paciente médico?",
        options: [
            {letter: "a", text: "Un golpe de calor"},
            {letter: "b", text: "Una reacción alérgica leve (urticaria)"},
            {letter: "c", text: "Posible respuesta al estrés o shock (hipoperfusión)"},
            {letter: "d", text: "Buena perfusión cutánea y fiebre"},
        ],
        correctAnswer: "c",
        explanation: "La piel pálida, fría y pegajosa es un signo clásico de hipoperfusión (shock) o una descarga adrenérgica masiva (como en un infarto), indicando gravedad."
    },
    {
        question: "¿Qué precauciones estándar mínimas (EPP/BSI) se deben tomar al tratar a un paciente con tos productiva y fiebre?",
        options: [
            {letter: "a", text: "Solamente guantes"},
            {letter: "b", text: "Guantes y mascarilla quirúrgica (o N95 si se sospecha TB)"},
            {letter: "c", text: "Solamente bata"},
            {letter: "d", text: "Solamente protección ocular"},
        ],
        correctAnswer: "b",
        explanation: "Ante el riesgo de transmisión por gotas o aerosoles (tos), se requieren como mínimo guantes y una mascarilla, además de protección ocular si hay riesgo de salpicadura."
    },
    {
        question: "¿Qué acción se debe realizar después de evaluar y asegurar los ABC (vía aérea, respiración, circulación) en un paciente médico estable?",
        options: [
            {letter: "a", text: "Transportarlo inmediatamente sin más evaluación."},
            {letter: "b", text: "Realizar una evaluación secundaria (historial y signos vitales)."},
            {letter: "c", text: "Darle el alta en el lugar."},
            {letter: "d", text: "Esperar a que el paciente mejore por sí mismo."},
        ],
        correctAnswer: "b",
        explanation: "Si el paciente está estable tras la evaluación primaria (ABC asegurados), se procede con la evaluación secundaria (SAMPLE, OPQRST, signos vitales) para obtener más información."
    },
    {
        question: "¿Qué información NO es parte de la historia clínica rápida (SAMPLE)?",
        options: [
            {letter: "a", text: "Medicamentos actuales"},
            {letter: "b", text: "Alergias conocidas"},
            {letter: "c", text: "Los detalles del seguro médico del paciente"},
            {letter: "d", text: "Última ingesta oral"},
        ],
        correctAnswer: "c",
        explanation: "SAMPLE (Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Última ingesta, Eventos) se enfoca en información médica; los datos administrativos como el seguro no son parte de ella."
    },
    {
        question: "¿Por qué es crucial la selección del destino hospitalario apropiado para un paciente médico?",
        options: [
            {letter: "a", text: "Para ahorrar tiempo y combustible a la ambulancia."},
            {
                letter: "b",
                text: "Para asegurar que el paciente reciba la atención especializada necesaria (ej. Centro de Ictus, Sala de Hemodinamia)."
            },
            {letter: "c", text: "Porque todos los hospitales ofrecen el mismo nivel de atención."},
            {letter: "d", text: "Solo es relevante para pacientes con trauma grave."},
        ],
        correctAnswer: "b",
        explanation: "Seleccionar el destino adecuado (ej. un hospital con capacidad de intervención coronaria para un infarto) es vital para el pronóstico del paciente."
    },
    {
        question: "¿Qué mnemotecnia se utiliza para recopilar el historial médico del paciente?",
        options: [
            {letter: "a", text: "AVPU"},
            {letter: "b", text: "SAMPLE"},
            {letter: "c", text: "OPQRST"},
            {letter: "d", text: "TACOS"},
        ],
        correctAnswer: "b",
        explanation: "SAMPLE es la mnemotecnia estándar para obtener el historial médico: Signos/síntomas, Alergias, Medicamentos, Pasado médico, Última ingesta, Eventos."
    }
];


/**
 * Preguntas de desafío sobre Visión Médica General (10 preguntas)
 */
export const visionMedicChallengeQuestions: Question[] = [
    {
        question: "¿Qué es el 'índice de sospecha' en la evaluación de un paciente médico?",
        options: [
            {letter: "a", text: "La conciencia de que pueden existir problemas graves, aunque los signos vitales iniciales parezcan estables."},
            {letter: "b", text: "Un número en la escala de coma de Glasgow que indica la severidad."},
            {letter: "c", text: "La lista de alergias del paciente que podrían complicar el tratamiento."},
            {letter: "d", text: "El porcentaje de oxígeno que se está administrando al paciente."}
        ],
        correctAnswer: "a",
        explanation: "El índice de sospecha es la habilidad clínica para anticipar problemas graves basándose en la queja principal, la demografía y el escenario, incluso sin signos vitales alterados."
    },
    {
        question: "Paciente diabético de 65 años se queja de 'indigestión' y leve disnea. Signos vitales estables. ¿Cuál debe ser su principal índice de sospecha?",
        options: [
            {letter: "a", text: "Un problema gastrointestinal simple (gastritis)."},
            {letter: "b", text: "Un Síndrome Coronario Agudo (SCA) con presentación atípica."},
            {letter: "c", text: "Un ataque de pánico debido a la diabetes."},
            {letter: "d", text: "Una reacción alérgica leve a su comida."}
        ],
        correctAnswer: "b",
        explanation: "Los pacientes diabéticos y geriátricos a menudo presentan SCA (infartos) con síntomas atípicos como indigestión, náuseas o disnea, sin dolor torácico clásico."
    },
    {
        question: "Paciente de 80 años con historia de ITU, presenta piel caliente y seca, FC 110 lpm, FR 24 rpm, y confusión aguda. ¿Qué condición debe sospecharse fuertemente?",
        options: [
            {letter: "a", text: "Hipoglucemia severa."},
            {letter: "b", text: "Shock séptico (Sepsis)."},
            {letter: "c", text: "EVC hemorrágico."},
            {letter: "d", text: "Deshidratación simple sin infección."}
        ],
        correctAnswer: "b",
        explanation: "La combinación de taquicardia, taquipnea, fiebre (piel caliente) y alteración mental en un paciente con foco infeccioso (ITU) es altamente sugestiva de Sepsis."
    },
    {
        question: "Encuentra a un paciente inconsciente al pie de una escalera. ¿Cuál es el enfoque de evaluación correcto?",
        options: [
            {letter: "a", text: "Asumir un evento médico (síncope) que causó la caída y tratarlo solo como médico."},
            {letter: "b", text: "Asumir un evento traumático (caída) y tratarlo solo como trauma."},
            {
                letter: "c",
                text: "Tratarlo como trauma (control cervical) pero investigar activamente una causa médica subyacente (SAMPLE, glucosa, etc.)."
            },
            {letter: "d", text: "Enfocarse únicamente en la vía aérea e ignorar la posible caída."}
        ],
        correctAnswer: "c",
        explanation: "En caídas inexplicadas, se debe manejar al paciente como trauma (posible lesión cervical) mientras se investiga una causa médica (síncope, EVC, infarto) que provocara la caída."
    },
    {
        question: "¿Cuál es un signo temprano y común de un problema médico grave (como infección o SCA) en un paciente geriátrico, que a menudo está ausente en pacientes jóvenes?",
        options: [
            {letter: "a", text: "Fiebre alta (superior a 39.5°C)."},
            {letter: "b", text: "Dolor torácico opresivo 10/10."},
            {letter: "c", text: "Confusión aguda, delirio o alteración funcional (ej. no poder caminar)."},
            {letter: "d", text: "Hipertensión severa."}
        ],
        correctAnswer: "c",
        explanation: "Los pacientes geriátricos a menudo no montan respuestas febriles o de dolor típicas. Una alteración aguda del estado mental o funcional es un signo ominoso."
    },
    {
        question: "En un paciente con disnea severa (posible EPOC exacerbado), ¿qué valor de Capnografía (EtCO2) indicaría fatiga respiratoria inminente?",
        options: [
            {letter: "a", text: "Un EtCO2 bajo (ej. 28 mmHg)."},
            {letter: "b", text: "Un EtCO2 normal (ej. 38 mmHg)."},
            {letter: "c", text: "Un EtCO2 alto y en aumento (ej. >55 mmHg)."},
            {letter: "d", text: "El EtCO2 no es útil en estos pacientes."}
        ],
        correctAnswer: "c",
        explanation: "Inicialmente, el paciente hiperventila (EtCO2 bajo). Un EtCO2 alto y creciente indica que el paciente se está fatigando, no puede compensar y está reteniendo CO2 (hipoventilación)."
    },
    {
        question: "Al evaluar a un paciente que minimiza sus síntomas ('Solo es estrés'), pero presenta palidez y diaforesis, ¿cuál es la mejor acción?",
        options: [
            {letter: "a", text: "Aceptar la evaluación del paciente y monitorear pasivamente."},
            {letter: "b", text: "Documentar 'paciente no cooperador' y negarse al traslado."},
            {
                letter: "c",
                text: "Confiar en los signos clínicos objetivos (palidez/diaforesis) sobre la queja subjetiva y recomendar fuertemente el traslado."
            },
            {letter: "d", text: "Administrar oxígeno y transportarlo sin más preguntas."}
        ],
        correctAnswer: "c",
        explanation: "Los signos objetivos (piel pálida, fría, diaforética) superan la minimización subjetiva del paciente. Estos signos indican gravedad (posible SCA) y requieren acción."
    },
    {
        question: "¿Para qué se utiliza la mnemotecnia 'TACOS' durante la evaluación de un paciente con estado mental alterado?",
        options: [
            {letter: "a", text: "Para evaluar el dolor torácico (es OPQRST)."},
            {letter: "b", text: "Para identificar causas reversibles de alteración mental (Tóxicos, Alcohol, Convulsiones, Oxígeno, Azúcar/Sugar)."},
            {letter: "c", text: "Para recordar los pasos de la evaluación primaria (es ABC)."},
            {letter: "d", text: "Para clasificar los tipos de shock (es distributivo, cardiogénico, etc.)."}
        ],
        correctAnswer: "b",
        explanation: "TACOS es una mnemotecnia (similar a AEIOU-TIPS) usada para recordar causas comunes y reversibles de alteración del estado mental, aunque no es universal."
    },
    {
        question: "Atiende a un paciente con queja principal de 'debilidad generalizada'. ¿Cuál de los siguientes hallazgos requiere la intervención más inmediata?",
        options: [
            {letter: "a", text: "Glucosa capilar de 60 mg/dL."},
            {letter: "b", text: "Un electrocardiograma que muestra Fibrilación Auricular (FA) con FC de 80 lpm."},
            {letter: "c", text: "Presión arterial de 150/90 mmHg."},
            {letter: "d", text: "Un electrocardiograma que muestra un ritmo sinusal con 'ondas T picudas'."}
        ],
        correctAnswer: "d",
        explanation: "Las ondas T picudas son un signo clásico de hiperkalemia (potasio alto), una emergencia médica que puede degenerar rápidamente en arritmias letales (FV/Asistolia) y requiere tratamiento inmediato."
    },
    {
        question: "En una escena con múltiples pacientes en un asilo, ¿cuál de los siguientes pacientes es la MÁXIMA prioridad para evaluación y transporte?",
        options: [
            {letter: "a", text: "Paciente con náuseas y vómitos, consciente y orientado."},
            {letter: "b", text: "Paciente con fiebre de 39°C y tos productiva, alerta."},
            {letter: "c", text: "Paciente con alteración AGUDA del estado mental (nuevo inicio)."},
            {letter: "d", text: "Paciente con dolor crónico de espalda que califica 8/10."}
        ],
        correctAnswer: "c",
        explanation: "Una alteración aguda (nueva) del estado mental siempre es de alta prioridad, ya que indica un compromiso sistémico grave (hipoxia, sepsis, EVC, hipoglucemia) que amenaza la vida."
    }
];