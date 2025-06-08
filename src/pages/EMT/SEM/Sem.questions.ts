import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Qué es el Sistema SEM?",
        answer: "El Sistema de Servicios de Emergencias Médicas (SEM) es un conjunto de servicios de atención médica prehospitalaria coordinados, que proporciona atención inmediata en el lugar del incidente y transporte adecuado a los centros de salud."
    },
    {
        question: "¿Cómo se activa el Sistema SEM en caso de emergencia?",
        answer: "Para activar el SEM, se debe llamar al número de emergencia (comúnmente 911 en muchas regiones), proporcionando detalles claros sobre la ubicación, el tipo de emergencia y la condición de la(s) víctima(s). El centro de atención coordina el envío de recursos y puede dar instrucciones iniciales para la atención prehospitalaria."
    },
    {
        question: "¿Qué tipos de recursos forman parte del Sistema SEM?",
        answer: "El SEM incluye ambulancias equipadas con personal médico capacitado (paramédicos, Técnicos en Emergencias Médicas), centros de atención telefónica (despacho) y un sistema de coordinación con otras entidades de emergencia como bomberos, seguridad pública y hospitales."
    },
    {
        question: "¿Cuáles son las funciones principales del SEM?",
        answer: "Las funciones principales del SEM incluyen la detección de emergencias, notificación, despacho de recursos, primera respuesta (atención médica prehospitalaria), transporte sanitario a hospitales y coordinación con otras instituciones para una respuesta efectiva a las emergencias, además de la investigación y mejora continua de la calidad."
    },
    {
        question: "¿Cómo está compuesto el personal del SEM?",
        answer: "El personal del SEM puede estar compuesto por respondedores de emergencias médicas (REM), Técnicos en Emergencias Médicas (TEM), paramédicos y médicos de urgencias, cada uno con diferentes niveles de capacitación y responsabilidad."
    },
    {
        question: "¿Qué importancia tiene la mejora continua de la calidad (MCC) en el SEM?",
        answer: "La mejora continua de la calidad es crucial en el SEM para garantizar la seguridad del paciente, identificar áreas de mejora en la atención, evaluar la efectividad de los protocolos y procedimientos, y asegurar que los servicios de emergencia sean lo más eficientes y efectivos posible."
    },
    {
        question: "¿Por qué la investigación en SEM es fundamental para la evolución de la gestión del paciente?",
        answer: "La investigación en SEM es fundamental porque proporciona la base para la toma de decisiones basada en la evidencia. Permite identificar las mejores prácticas, desarrollar nuevos tratamientos y protocolos, evaluar la efectividad de las intervenciones y mejorar continuamente la atención al paciente, lo que lleva a mejores resultados y a la evolución del campo de la atención prehospitalaria."
    },
    {
        question: "¿Cuál es el objetivo principal del Sistema de Servicios de Emergencias Médicas (SEM)?",
        answer: "El objetivo principal del Sistema de Servicios de Emergencias Médicas (SEM) es proporcionar atención médica de emergencia y transporte a los pacientes que lo necesitan, con el fin de reducir la mortalidad y la morbilidad por enfermedades y lesiones agudas."
    },
    {
        question: "¿Qué papel juega la Health Insurance Portability and Accountability Act (HIPAA) en el SEM?",
        answer: "La HIPAA limita la disponibilidad y el uso de la información médica del paciente, garantizando la privacidad y seguridad de sus datos de salud. En el SEM, esto significa que el personal debe proteger la confidencialidad de la información del paciente."
    },
    {
        question: "¿Qué es la mejora continua de la calidad (MCC) y cómo se utiliza para ayudar a garantizar la seguridad de los pacientes?",
        answer: "La mejora continua de la calidad (MCC) es un proceso de evaluación y mejora constante de los servicios y protocolos del SEM. Se utiliza para garantizar la seguridad del paciente mediante la identificación de errores, la implementación de cambios basados en la evidencia, la capacitación del personal y la revisión regular de los resultados, lo que permite corregir deficiencias y optimizar la atención."
    },
    {
        question: "¿Por qué la investigación de SEM es una parte fundamental en la evolución de la gestión del paciente?",
        answer: "La investigación de SEM es fundamental porque genera el conocimiento necesario para la toma de decisiones basada en la evidencia. Permite validar la efectividad de las intervenciones, desarrollar nuevas técnicas y tecnologías, y mejorar los protocolos de atención, lo que conduce a una evolución constante de la gestión del paciente, haciendo que la atención sea más eficaz y segura."
    },
];

export const semSystemQuestions: Question[] = [
    {
        question: "¿Cuál de los siguientes es un componente esencial del sistema SEM?",
        options: [
            { letter: "a", text: "Centros comerciales" },
            { letter: "b", text: "Centros de información" },
            { letter: "c", text: "Educación pública" },
            { letter: "d", text: "Investigación en marketing" },
        ],
        correctAnswer: "c", // Educación pública es un componente esencial según el capítulo.
    },
    {
        question: "¿Cuál de estos NO es un nivel de capacitación de Proveedor de Atención Prehospitalaria (PAP)?",
        options: [
            { letter: "a", text: "Técnico Básico en Urgencias" }, // El capítulo menciona "Técnico en emergencias médicas - Básico (TEM-B)"
            { letter: "b", text: "Respondiente en Emergencias Médicas (REM)" },
            { letter: "c", text: "Técnico en Emergencias Médicas (TEM)" },
            { letter: "d", text: "Paramédico" },
        ],
        correctAnswer: "a", // "Técnico Básico en Urgencias" no es una denominación estándar de los 4 niveles presentados en el capítulo, que son REM, TEM, TEM-A (Avanzado) y Paramédico.
    },
    {
        question: "¿Cuál es una fuente de estrés común para el personal del SEM?",
        options: [
            { letter: "a", text: "Jornadas cortas" },
            { letter: "b", text: "Altos salarios" },
            { letter: "c", text: "Turnos prolongados y eventos traumáticos" },
            { letter: "d", text: "Exceso de vacaciones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe hacerse si los ojos fueron expuestos a fluidos corporales?",
        options: [
            { letter: "a", text: "Cubrir los ojos con gasas" },
            { letter: "b", text: "Lavar con agua limpia por 20 minutos" },
            { letter: "c", text: "Aplicar alcohol en gel" },
            { letter: "d", text: "Ignorar la exposición" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de prevención secundaria?",
        options: [
            { letter: "a", text: "Provisión de inmovilización de la columna cervical" },
            { letter: "b", text: "Administración de vacunas" },
            { letter: "c", text: "Vigilar las lesiones" },
            { letter: "d", text: "Enseñar la seguridad en las escuelas" },
        ],
        correctAnswer: "a", // Según el capítulo, la inmovilización cervical es un ejemplo de prevención secundaria.
    },
    {
        question: "¿Cuál de las siguientes NO es una función o responsabilidad apropiada de un Proveedor de Atención Prehospitalaria (PAP)?",
        options: [
            { letter: "a", text: "Realizar una evaluación del paciente." },
            { letter: "b", text: "Mantener los estándares médicos y legales." },
            { letter: "c", text: "Prestar asesoramiento jurídico a los pacientes." },
            { letter: "d", text: "Garantizar y proteger la privacidad del paciente." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un ejemplo de trabajo en equipo y diplomacia es:",
        options: [
            { letter: "a", text: "Usar su persona para proyectar un sentido de confianza." },
            { letter: "b", text: "Ser capaz de comunicarse mientras respeta al que escucha." },
            { letter: "c", text: "Colocar a otros en alta estima o importancia." },
            { letter: "d", text: "Delegar múltiples tareas garantizando eficiencia y seguridad." },
        ],
        correctAnswer: "b",
    },
    {
        question: "La Health Insurance Portability and Accountability Act (HIPAA):",
        options: [
            { letter: "a", text: "Permite a los pacientes viajar sin perder el seguro de salud." },
            { letter: "b", text: "Exige que las compañías de seguros justifiquen la negación de la atención médica." },
            { letter: "c", text: "Evita que un departamento de emergencias se niegue a atender a un paciente en condición crítica." },
            { letter: "d", text: "Limita la disponibilidad de la información médica del paciente." },
        ],
        correctAnswer: "d",
    },

    {
        question: "¿Cuál es el principal enfoque de la prevención primaria en el SEM?",
        options: [
            { letter: "a", text: "Reducir la gravedad de las lesiones existentes." },
            { letter: "b", text: "Evitar que los eventos ocurran en primer lugar." },
            { letter: "c", text: "Proporcionar tratamiento médico avanzado." },
            { letter: "d", text: "Rehabilitación de pacientes." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la 'toma de decisiones con base en la evidencia' en el contexto del SEM?",
        options: [
            { letter: "a", text: "Tomar decisiones basadas en la intuición personal." },
            { letter: "b", text: "Aplicar tratamientos basándose en las últimas investigaciones científicas." },
            { letter: "c", "text": "Decidir el tratamiento según la experiencia de un colega." },
            { letter: "d", "text": "Usar solo el equipo disponible sin considerar otras opciones." }
        ],
        correctAnswer: "b"
    },
    {
        question: "¿Qué papel juega la 'recopilación de datos' en la investigación del SEM?",
        options: [
            { letter: "a", text: "Permite adivinar los resultados." },
            { letter: "b", text: "Proporciona información para fundamentar las decisiones y mejorar los sistemas." },
            { letter: "c", text: "Es una tarea opcional que no afecta la calidad." },
            { letter: "d", text: "Sirve únicamente para fines administrativos." }
        ],
        correctAnswer: "b"
    },
    {
        question: "¿Qué establece la Americans with Disabilities Act (ADA) en relación con el empleo como PAP?",
        options: [
            { letter: "a", text: "Exige que todos los PAP sean físicamente capaces de levantar grandes pesos." },
            { letter: "b", text: "Prohíbe a las personas con discapacidades trabajar en el SEM." },
            { letter: "c", text: "Requiere que los empleadores hagan ajustes razonables para permitir que personas calificadas con discapacidades trabajen como PAP." },
            { letter: "d", text: "No tiene ninguna aplicación en el ámbito del SEM." }
        ],
        correctAnswer: "c"
    }
];
