import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué se evalúa primero en la escena?",
        answer: "La seguridad de la escena, el mecanismo de la lesión o naturaleza de la enfermedad, y si hay necesidad de recursos adicionales.",
    },
    {
        question: "¿Qué son los ABC en la evaluación primaria?",
        answer: "Vía aérea (Airway), respiración (Breathing) y circulación (Circulation), aspectos críticos para la vida.",
    },
    {
        question: "¿Qué significa SAMPLE?",
        answer: "Signos y síntomas, Alergias, Medicamentos, Pasado médico, Última ingesta y Eventos relacionados.",
    },
    {
        question: "¿Cuándo se debe hacer una reevaluación del paciente?",
        answer: "Durante todo el transporte o cuando el estado del paciente cambie.",
    },
    {
        question: "¿Qué instrumento ayuda a evaluar el estado neurológico?",
        answer: "La Escala de Coma de Glasgow (GCS).",
    },
    {
        question: "¿Cuál es el objetivo de la evaluación secundaria?",
        answer: "Identificar lesiones no detectadas en la evaluación primaria mediante un examen físico más detallado.",
    },
    {
        question: "¿Qué se debe hacer si el paciente empeora durante el traslado?",
        answer: "Reevaluar ABC, actualizar signos vitales y modificar el tratamiento de inmediato.",
    },
];

export const patientAssessmentQuestions: Question[] = [
    {
        question: "¿Qué es lo primero que debe evaluar un TAMP al llegar a la escena?",
        options: [
            { letter: "a", text: "El número de testigos" },
            { letter: "b", text: "La seguridad de la escena" },
            { letter: "c", text: "La ropa del paciente" },
            { letter: "d", text: "La edad del paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En la evaluación primaria, la prioridad es:",
        options: [
            { letter: "a", text: "Completar la historia clínica" },
            { letter: "b", text: "Detectar amenazas inmediatas a la vida" },
            { letter: "c", text: "Tomar fotos de la escena" },
            { letter: "d", text: "Contactar al familiar más cercano" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de las siguientes opciones forma parte de la evaluación primaria?",
        options: [
            { letter: "a", text: "Buscar alergias" },
            { letter: "b", text: "Evaluar la circulación" },
            { letter: "c", text: "Determinar antecedentes médicos" },
            { letter: "d", text: "Historial de medicamentos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El examen físico detallado debe realizarse:",
        options: [
            { letter: "a", text: "Sólo en hospitales" },
            { letter: "b", text: "Después de asegurar ABC y control de hemorragias" },
            { letter: "c", text: "Antes de inmovilizar" },
            { letter: "d", text: "Antes de realizar el examen primario" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal de la reevaluación continua?",
        options: [
            { letter: "a", text: "Identificar cambios en el estado del paciente" },
            { letter: "b", text: "Saber su nombre completo" },
            { letter: "c", text: "Interrogar a testigos" },
            { letter: "d", text: "Documentar síntomas ficticios" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué instrumento evalúa la respuesta neurológica del paciente?",
        options: [
            { letter: "a", text: "Frecuencia cardiaca" },
            { letter: "b", text: "Tensiometro" },
            { letter: "c", text: "Escala de Coma de Glasgow" },
            { letter: "d", text: "Electrocardiograma" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa la P en la evaluación OPQRST?",
        options: [
            { letter: "a", text: "Pulso" },
            { letter: "b", text: "Provocación o Palpación" },
            { letter: "c", text: "Presión" },
            { letter: "d", text: "Patrón" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe hacer si un paciente inconsciente no responde al estímulo verbal?",
        options: [
            { letter: "a", text: "Aplicar estímulo doloroso" },
            { letter: "b", text: "Esperar 5 minutos" },
            { letter: "c", text: "Tomarle una muestra de sangre" },
            { letter: "d", text: "Buscar a familiares" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el orden correcto de prioridad en un trauma severo?",
        options: [
            { letter: "a", text: "Airway, Breathing, Circulation" },
            { letter: "b", text: "Circulation, Breathing, Airway" },
            { letter: "c", text: "Airway, Circulation, Breathing" },
            { letter: "d", text: "Respiración, Circulación, Vía aérea" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué se debe obtener durante el historial SAMPLE?",
        options: [
            { letter: "a", text: "El nombre del doctor" },
            { letter: "b", text: "Última comida o bebida" },
            { letter: "c", text: "La dirección de casa" },
            { letter: "d", text: "La escuela a la que asiste" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué letra representa el tiempo de inicio de un dolor en OPQRST?",
        options: [
            { letter: "a", text: "O" },
            { letter: "b", text: "P" },
            { letter: "c", text: "Q" },
            { letter: "d", text: "R" },
        ],
        correctAnswer: "a",
    },
    {
        question: "En la evaluación primaria, ¿qué prioridad tiene el control de hemorragias externas severas?",
        options: [
            { letter: "a", text: "Después de administrar oxígeno" },
            { letter: "b", text: "Antes de abrir vía aérea" },
            { letter: "c", text: "Después de abrir vía aérea" },
            { letter: "d", text: "Después de tomar signos vitales" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe hacer primero al acercarse a un paciente inconsciente?",
        options: [
            { letter: "a", text: "Buscar un pulso" },
            { letter: "b", text: "Verificar si responde a estímulos" },
            { letter: "c", text: "Aplicar oxígeno" },
            { letter: "d", text: "Controlar temperatura" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica una puntuación de 3 en la escala de Glasgow?",
        options: [
            { letter: "a", text: "Paciente alerta" },
            { letter: "b", text: "Paciente en coma profundo" },
            { letter: "c", text: "Paciente responde solo al dolor" },
            { letter: "d", text: "Paciente responde verbalmente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe registrar en cada reevaluación de un paciente crítico?",
        options: [
            { letter: "a", text: "Cada 5 minutos signos vitales y ABC" },
            { letter: "b", text: "Cada 10 minutos la temperatura" },
            { letter: "c", text: "Cada 15 minutos historial familiar" },
            { letter: "d", text: "Cada 20 minutos dirección del paciente" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué aspecto se revisa al evaluar la circulación?",
        options: [
            { letter: "a", text: "Movilidad articular" },
            { letter: "b", text: "Color, temperatura y condición de la piel" },
            { letter: "c", text: "Nivel educativo" },
            { letter: "d", text: "Presión intracraneal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la 'S' en SAMPLE?",
        options: [
            { letter: "a", text: "Signos y síntomas" },
            { letter: "b", text: "Sistema cardiovascular" },
            { letter: "c", text: "Sudoración" },
            { letter: "d", text: "Señales vitales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué herramienta es adecuada para identificar un dolor torácico irradiado?",
        options: [
            { letter: "a", text: "SAMPLE" },
            { letter: "b", text: "Glasgow" },
            { letter: "c", text: "OPQRST" },
            { letter: "d", text: "PHTLS" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si un paciente tiene dificultad respiratoria, la prioridad será:",
        options: [
            { letter: "a", text: "Tomar presión arterial" },
            { letter: "b", text: "Administrar oxígeno" },
            { letter: "c", text: "Moverlo a la ambulancia" },
            { letter: "d", text: "Llamar a un familiar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debe evaluarse antes de mover a un paciente politraumatizado?",
        options: [
            { letter: "a", text: "El nivel de saturación de oxígeno" },
            { letter: "b", text: "La estabilidad de la columna cervical" },
            { letter: "c", text: "El peso del paciente" },
            { letter: "d", text: "La temperatura ambiental" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un pulso radial ausente en un paciente adulto consciente?",
        options: [
            { letter: "a", text: "Presión arterial elevada" },
            { letter: "b", text: "Hipotensión grave" },
            { letter: "c", text: "Hiperglucemia" },
            { letter: "d", text: "Hipertrofia ventricular" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se prioriza en un paciente con hemorragia arterial activa?",
        options: [
            { letter: "a", text: "Administrar líquidos IV" },
            { letter: "b", text: "Controlar la hemorragia" },
            { letter: "c", text: "Tomar electrocardiograma" },
            { letter: "d", text: "Registrar signos vitales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué maniobra es adecuada para abrir vía aérea en paciente inconsciente sin trauma?",
        options: [
            { letter: "a", text: "Tracción mandibular" },
            { letter: "b", text: "Elevación del mentón" },
            { letter: "c", text: "Compresión torácica" },
            { letter: "d", text: "Compresión cricoidea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué instrumento mide la saturación de oxígeno de forma rápida?",
        options: [
            { letter: "a", text: "Glucometro" },
            { letter: "b", text: "Electrocardiograma" },
            { letter: "c", text: "Oxímetro de pulso" },
            { letter: "d", text: "Esfigmomanómetro" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué dato NO forma parte de la evaluación secundaria?",
        options: [
            { letter: "a", text: "Presión arterial" },
            { letter: "b", text: "Nivel de dolor" },
            { letter: "c", text: "Preferencias políticas" },
            { letter: "d", text: "Alergias" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una saturación de oxígeno del 88% en un paciente adulto?",
        options: [
            { letter: "a", text: "Oxigenación adecuada" },
            { letter: "b", text: "Hipoxia severa" },
            { letter: "c", text: "Hipertensión" },
            { letter: "d", text: "Hipotermia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medida inicial se toma en una paciente con alteración del estado mental?",
        options: [
            { letter: "a", text: "Administrar analgésicos" },
            { letter: "b", text: "Evaluar ABC y oxigenación" },
            { letter: "c", text: "Iniciar maniobras de RCP" },
            { letter: "d", text: "Buscar familiares" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Si un paciente presenta hemorragia venosa moderada, ¿qué intervención inmediata se realiza?",
        options: [
            { letter: "a", text: "Compresión directa" },
            { letter: "b", text: "Torniquete arterial" },
            { letter: "c", text: "Inmovilización espinal" },
            { letter: "d", text: "Oxígeno de alto flujo" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el parámetro normal de frecuencia respiratoria en un adulto sano?",
        options: [
            { letter: "a", text: "4-8 rpm" },
            { letter: "b", text: "8-12 rpm" },
            { letter: "c", text: "12-20 rpm" },
            { letter: "d", text: "20-30 rpm" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué área del cuerpo se revisa primero en un trauma de alta energía?",
        options: [
            { letter: "a", text: "Piernas" },
            { letter: "b", text: "Columna cervical" },
            { letter: "c", text: "Abdomen" },
            { letter: "d", text: "Extremidades superiores" },
        ],
        correctAnswer: "b",
    },
];