import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué significa la sigla MEGA?",
        answer: "Mecanismo de lesión, Entorno, Generalidades, ABCDE.",
    },
    {
        question: "¿Para qué sirve el Código MEGA?",
        answer: "Para realizar una evaluación inicial rápida y estructurada en el entorno prehospitalario.",
    },
    {
        question: "¿Qué se evalúa en 'M' del MEGA?",
        answer: "El tipo de mecanismo lesional o naturaleza médica del problema.",
    },
    {
        question: "¿Qué incluye la evaluación del entorno (E)?",
        answer: "Riesgos para el paciente, el personal y factores ambientales.",
    },
    {
        question: "¿Qué se analiza en 'Generalidades'?",
        answer: "Estado general del paciente, posición, conciencia, edad, sexo, signos visibles.",
    },
    {
        question: "¿Qué evalúa el paso ABCDE?",
        answer: "A: Vía aérea, B: Respiración, C: Circulación, D: Estado neurológico, E: Exposición del paciente.",
    },
];

export const megaQuestions: Question[] = [
    {
        question: "¿Qué significa la letra 'M' en el Código MEGA?",
        options: [
            { letter: "a", text: "Manejo avanzado" },
            { letter: "b", text: "Mecanismo de lesión o enfermedad" },
            { letter: "c", text: "Monitorización del paciente" },
            { letter: "d", text: "Manejo de escena" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa la 'E' en el Código MEGA?",
        options: [
            { letter: "a", text: "Estado del paciente" },
            { letter: "b", text: "Entorno seguro" },
            { letter: "c", text: "Evaluación médica" },
            { letter: "d", text: "Exposición de lesiones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal del Código MEGA?",
        options: [
            { letter: "a", text: "Evaluar signos vitales" },
            { letter: "b", text: "Diagnosticar enfermedades" },
            { letter: "c", text: "Estandarizar la evaluación inicial del paciente" },
            { letter: "d", text: "Tomar decisiones hospitalarias" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe evaluarse primero según el Código MEGA?",
        options: [
            { letter: "a", text: "Circulación" },
            { letter: "b", text: "Mecanismo de lesión" },
            { letter: "c", text: "Entorno" },
            { letter: "d", text: "Vía aérea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué paso corresponde a la letra 'G'?",
        options: [
            { letter: "a", text: "Glasgow" },
            { letter: "b", text: "Generalidades del paciente" },
            { letter: "c", text: "Gasometría" },
            { letter: "d", text: "Gravedad del trauma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la A en el paso ABCDE?",
        options: [
            { letter: "a", text: "Arteria" },
            { letter: "b", text: "Airway (vía aérea)" },
            { letter: "c", text: "Ausencia de pulso" },
            { letter: "d", text: "Atención inmediata" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la prioridad en el paso 'C' del ABCDE?",
        options: [
            { letter: "a", text: "Circulación y control de hemorragias" },
            { letter: "b", text: "Cardioversión" },
            { letter: "c", text: "Condición neurológica" },
            { letter: "d", text: "Comprobación de reflejos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué se debe hacer en el paso 'E' de ABCDE?",
        options: [
            { letter: "a", text: "Electrocardiograma" },
            { letter: "b", text: "Exponer y explorar al paciente" },
            { letter: "c", text: "Evaluar edad" },
            { letter: "d", text: "Examinar pupilas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se evalúa en el paso 'D' de ABCDE?",
        options: [
            { letter: "a", text: "Deshidratación" },
            { letter: "b", text: "Déficit neurológico" },
            { letter: "c", text: "Dolor" },
            { letter: "d", text: "Diagnóstico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Por qué es importante la evaluación del entorno?",
        options: [
            { letter: "a", text: "Para medir la temperatura ambiental" },
            { letter: "b", text: "Para proteger al paciente de infecciones" },
            { letter: "c", text: "Para garantizar la seguridad del personal y del paciente" },
            { letter: "d", text: "Para decidir el diagnóstico médico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la función del paso 'M' en MEGA?",
        options: [
            { letter: "a", text: "Determinar edad del paciente" },
            { letter: "b", text: "Identificar el tipo de intervención médica necesaria" },
            { letter: "c", text: "Identificar mecanismo de lesión o enfermedad" },
            { letter: "d", text: "Monitorear signos vitales" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción incluye la evaluación del entorno?",
        options: [
            { letter: "a", text: "Contar a los testigos" },
            { letter: "b", text: "Asegurar que no haya riesgos para el equipo" },
            { letter: "c", text: "Identificar familiares del paciente" },
            { letter: "d", text: "Buscar el diagnóstico médico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica una alteración en el nivel de conciencia en las generalidades del paciente?",
        options: [
            { letter: "a", text: "Dolor leve" },
            { letter: "b", text: "Signo de posible compromiso neurológico o perfusional" },
            { letter: "c", text: "Hiperventilación normal" },
            { letter: "d", text: "Cefalea común" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué momento se inicia la evaluación ABCDE?",
        options: [
            { letter: "a", text: "Después de aplicar oxígeno" },
            { letter: "b", text: "Una vez identificado que no hay peligro en la escena" },
            { letter: "c", text: "Antes de evaluar el entorno" },
            { letter: "d", text: "Después de realizar un diagnóstico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué herramienta se puede usar en el paso 'D' para evaluar estado neurológico?",
        options: [
            { letter: "a", text: "Escala de trauma" },
            { letter: "b", text: "Escala de Glasgow" },
            { letter: "c", text: "Termómetro" },
            { letter: "d", text: "Electrocardiograma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el último paso de la evaluación primaria en MEGA?",
        options: [
            { letter: "a", text: "Mecanismo" },
            { letter: "b", text: "Exposición y control ambiental" },
            { letter: "c", text: "Aplicar vendajes" },
            { letter: "d", text: "Traslado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de las siguientes es una situación de riesgo ambiental?",
        options: [
            { letter: "a", text: "Dolor abdominal en un parque" },
            { letter: "b", text: "Paciente inconsciente en calle con cables caídos" },
            { letter: "c", text: "Hiperglucemia en domicilio" },
            { letter: "d", text: "Fiebre en consultorio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué acción se realiza si se identifica hemorragia externa durante el 'C' del ABCDE?",
        options: [
            { letter: "a", text: "Esperar a estabilizar vía aérea" },
            { letter: "b", text: "Controlar la hemorragia inmediatamente" },
            { letter: "c", text: "Tomar temperatura" },
            { letter: "d", text: "Aplicar oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué aspecto se evalúa en el paso 'A' del ABCDE?",
        options: [
            { letter: "a", text: "Circulación de sangre" },
            { letter: "b", text: "Vía aérea con control cervical si es trauma" },
            { letter: "c", text: "Estado emocional del paciente" },
            { letter: "d", text: "Temperatura del ambiente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué puede indicar respiración rápida y superficial en el paso 'B'?",
        options: [
            { letter: "a", text: "Ansiedad leve" },
            { letter: "b", text: "Hiperventilación por dolor" },
            { letter: "c", text: "Posible hipoxia o lesión torácica" },
            { letter: "d", text: "Normalidad fisiológica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuándo debe repetirse la evaluación MEGA?",
        options: [
            { letter: "a", text: "Solo en el hospital" },
            { letter: "b", text: "Cada 30 minutos" },
            { letter: "c", text: "Después de cada intervención crítica o cambio en el estado del paciente" },
            { letter: "d", text: "Una vez y no más" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué determina el paso 'M' respecto al abordaje del paciente?",
        options: [
            { letter: "a", text: "El tipo de tratamiento farmacológico" },
            { letter: "b", text: "Si el paciente puede caminar" },
            { letter: "c", text: "Si es necesario equipo de trauma" },
            { letter: "d", text: "Si se requiere enfoque de trauma o médico" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué debe considerarse dentro de la 'G' del MEGA?",
        options: [
            { letter: "a", text: "Diagnóstico médico" },
            { letter: "b", text: "Sexo, edad y estado general observable" },
            { letter: "c", text: "Antecedentes familiares" },
            { letter: "d", text: "Patología conocida" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué puede observarse al exponer al paciente (paso E)?",
        options: [
            { letter: "a", text: "Nivel de glucosa" },
            { letter: "b", text: "Lesiones ocultas o sangrados activos" },
            { letter: "c", text: "Presión arterial" },
            { letter: "d", text: "Ritmo cardíaco" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Por qué es importante controlar la temperatura del paciente tras el paso E?",
        options: [
            { letter: "a", text: "Para evitar fiebre" },
            { letter: "b", text: "Para prevenir hipotermia y coagulopatía" },
            { letter: "c", text: "Para tranquilizar al paciente" },
            { letter: "d", text: "Para mejorar el pulso" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es una amenaza inmediata a la vida detectada durante MEGA?",
        options: [
            { letter: "a", text: "Dolor abdominal leve" },
            { letter: "b", text: "Obstrucción de vía aérea" },
            { letter: "c", text: "Esguince de tobillo" },
            { letter: "d", text: "Dolor muscular" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe hacer si se detecta compromiso neurológico en 'D'?",
        options: [
            { letter: "a", text: "Esperar evaluación hospitalaria" },
            { letter: "b", text: "Continuar evaluación sin cambios" },
            { letter: "c", text: "Priorizar traslado y soporte avanzado" },
            { letter: "d", text: "Ofrecer líquidos orales" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la prioridad de un paciente con herida torácica abierta en la evaluación MEGA?",
        options: [
            { letter: "a", text: "Evaluar nivel de glucosa" },
            { letter: "b", text: "Colocar parche torácico de inmediato" },
            { letter: "c", text: "Pedir hoja de antecedentes" },
            { letter: "d", text: "Iniciar RCP" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica la letra 'A' del ABCDE si la vía aérea está comprometida?",
        options: [
            { letter: "a", text: "Realizar RCP inmediatamente" },
            { letter: "b", text: "Abrir vía aérea con técnica adecuada" },
            { letter: "c", text: "Administrar medicamento" },
            { letter: "d", text: "Observar por 10 minutos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el paso final tras aplicar el Código MEGA completo?",
        options: [
            { letter: "a", text: "Registrar signos vitales" },
            { letter: "b", text: "Iniciar revaluación constante y traslado según prioridad" },
            { letter: "c", text: "Realizar historia clínica completa" },
            { letter: "d", text: "Tomar electrocardiograma" },
        ],
        correctAnswer: "b",
    }
];
