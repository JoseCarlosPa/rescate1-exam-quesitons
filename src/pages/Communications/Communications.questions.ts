import {Question} from "../../question";

export const faqData = [
    {
        question: "¿Qué es el FRAP?",
        answer: "El Formato de Registro de Atención Prehospitalaria (FRAP) es el documento legal donde se registra todo lo relacionado con la atención brindada a un paciente, desde el primer contacto hasta la transferencia o finalización de cuidados.",
    },
    {
        question: "¿Cómo corregir un error en el FRAP?",
        answer: "Debe hacerse una línea simple sobre el error, inicialar y registrar la corrección junto con la hora, nunca usar correctores o borrar información.",
    },
    {
        question: "¿Qué debe incluir un reporte verbal al hospital?",
        answer: "La edad del paciente, sexo, queja principal, mecanismo de lesión o naturaleza de la enfermedad, signos vitales, tratamientos aplicados y respuesta al tratamiento.",
    },
    {
        question: "¿Qué hacer si la comunicación por radio es deficiente?",
        answer: "Hablar despacio, claro, verificar que el canal sea el correcto y repetir el mensaje para confirmación.",
    },
    {
        question: "¿Qué es la evaluación SAMPLE?",
        answer: "Es una herramienta para recopilar información esencial: Signos y síntomas, Alergias, Medicamentos, Pasado médico, Última comida o bebida, y Eventos que precedieron a la emergencia.",
    },
    {
        question: "¿Por qué es importante documentar un rechazo de atención?",
        answer: "Porque protege legalmente al TAMP, mostrando que el paciente fue informado de los riesgos de rechazar la atención y firmó consciente de su decisión.",
    },
    {
        question: "¿Cómo debe ser el tono de voz al comunicarte con un paciente?",
        answer: "Debe ser firme pero calmado, mostrando empatía y seguridad para tranquilizar al paciente.",
    },
];

export const communicationsQuestions: Question[] = [
    {
        question: "¿Cuál de los siguientes es un componente principal de la comunicación efectiva?",
        options: [
            { letter: "a", text: "Solo hablar rápido" },
            { letter: "b", text: "Lenguaje corporal adecuado" },
            { letter: "c", text: "Usar jerga técnica" },
            { letter: "d", text: "Gritar para ser escuchado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo se llama el documento escrito que registra todos los detalles de una llamada de emergencia?",
        options: [
            { letter: "a", text: "Recibo médico" },
            { letter: "b", text: "FRAP (Formulario de Registro de Atención Prehospitalaria)" },
            { letter: "c", text: "Permiso de traslado" },
            { letter: "d", text: "Orden de servicio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En una comunicación de radio, antes de hablar se debe:",
        options: [
            { letter: "a", text: "Empezar a hablar inmediatamente" },
            { letter: "b", text: "Presionar el botón de transmisión y esperar un momento" },
            { letter: "c", text: "Esperar a ser llamado por la central" },
            { letter: "d", text: "Apagar el equipo para ahorrar batería" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una comunicación no verbal efectiva incluye:",
        options: [
            { letter: "a", text: "Gesto de confusión" },
            { letter: "b", text: "Sonrisa y contacto visual adecuado" },
            { letter: "c", text: "Mirar constantemente el reloj" },
            { letter: "d", text: "Brazos cruzados" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la mejor forma de corregir un error en un FRAP escrito a mano?",
        options: [
            { letter: "a", text: "Borrar con corrector líquido" },
            { letter: "b", text: "Tachar con una línea simple, inicialar y corregir" },
            { letter: "c", text: "Arrancar la hoja y comenzar de nuevo" },
            { letter: "d", text: "Taparlo con cinta adhesiva" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué información se debe incluir siempre en un reporte verbal al hospital?",
        options: [
            { letter: "a", text: "La edad del paciente, quejas principales, signos vitales y tratamiento aplicado" },
            { letter: "b", text: "Tus datos personales" },
            { letter: "c", text: "La marca del equipo usado" },
            { letter: "d", text: "Opiniones sobre el paciente" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa 'PCR' en un reporte médico?",
        options: [
            { letter: "a", text: "Paro cardiorrespiratorio" },
            { letter: "b", text: "Paciente con recuperación rápida" },
            { letter: "c", text: "Pulso constante registrado" },
            { letter: "d", text: "Presión corporal residual" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debe hacer un TAMP si recibe información incorrecta por radio?",
        options: [
            { letter: "a", text: "Ignorarla" },
            { letter: "b", text: "Confirmar la información repitiéndola" },
            { letter: "c", text: "Desconectar la radio" },
            { letter: "d", text: "Solicitar otro canal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una buena práctica durante una comunicación verbal con el paciente es:",
        options: [
            { letter: "a", text: "Interrumpirlo para terminar más rápido" },
            { letter: "b", text: "Escuchar activamente sin juzgar" },
            { letter: "c", text: "Mirar al celular mientras habla" },
            { letter: "d", text: "Hablar al mismo tiempo que el paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de comunicación representa el uso de gestos, posturas y expresiones faciales?",
        options: [
            { letter: "a", text: "Comunicación escrita" },
            { letter: "b", text: "Comunicación verbal" },
            { letter: "c", text: "Comunicación no verbal" },
            { letter: "d", text: "Comunicación electrónica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué técnica ayuda a confirmar que un mensaje ha sido correctamente entendido por radio?",
        options: [
            { letter: "a", text: "Hablar más fuerte" },
            { letter: "b", text: "Pedir que repitan el mensaje" },
            { letter: "c", text: "Hablar más rápido" },
            { letter: "d", text: "Cerrar la radio después de transmitir" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe evitar al documentar un reporte de atención médica?",
        options: [
            { letter: "a", text: "Hechos objetivos" },
            { letter: "b", text: "Suposiciones y opiniones personales" },
            { letter: "c", text: "Datos de signos vitales" },
            { letter: "d", text: "Tratamientos realizados" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal de un FRAP?",
        options: [
            { letter: "a", text: "Registrar cada aspecto de la atención prehospitalaria" },
            { letter: "b", text: "Publicar datos del paciente" },
            { letter: "c", text: "Hacer estadísticas de tráfico" },
            { letter: "d", text: "Promocionar servicios médicos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué representa la sigla SAMPLE en la evaluación de un paciente?",
        options: [
            { letter: "a", text: "Signos vitales, alergias, medicamentos, pasado médico, último alimento, eventos" },
            { letter: "b", text: "Sistema de ayuda médica profesional limitada" },
            { letter: "c", text: "Sistema avanzado de pacientes lesionados" },
            { letter: "d", text: "Sangrado, arritmias, movimientos, presión, lesiones, edema" },
        ],
        correctAnswer: "a",
    },
    {
        question: "La comunicación entre el TAMP y la central de despacho se denomina:",
        options: [
            { letter: "a", text: "Comunicación lateral" },
            { letter: "b", text: "Comunicación de comando" },
            { letter: "c", text: "Comunicación directa" },
            { letter: "d", text: "Comunicación inicial" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe incluir siempre la documentación de un rechazo de tratamiento?",
        options: [
            { letter: "a", text: "Sólo la firma del paciente" },
            { letter: "b", text: "Firma del paciente, advertencia de riesgos, testigo y signos vitales" },
            { letter: "c", text: "Firma del personal únicamente" },
            { letter: "d", text: "Descripción breve de la llamada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo debe registrarse una intervención realizada en el FRAP?",
        options: [
            { letter: "a", text: "Como una suposición" },
            { letter: "b", text: "De manera precisa, incluyendo hora y resultados" },
            { letter: "c", text: "De forma resumida y sin tiempos" },
            { letter: "d", text: "Solo si resultó exitosa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tono de voz es más adecuado en la comunicación con un paciente?",
        options: [
            { letter: "a", text: "Agresivo" },
            { letter: "b", text: "Firme pero calmado" },
            { letter: "c", text: "Irónico" },
            { letter: "d", text: "Monótono" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema de comunicación es más utilizado para coordinar atención prehospitalaria en zonas rurales?",
        options: [
            { letter: "a", text: "Telefonía fija" },
            { letter: "b", text: "Sistema de radio bidireccional" },
            { letter: "c", text: "Correo electrónico" },
            { letter: "d", text: "Comunicación escrita" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El objetivo de la comunicación durante una emergencia médica es:",
        options: [
            { letter: "a", text: "Compartir opiniones" },
            { letter: "b", text: "Transmitir información precisa y oportuna" },
            { letter: "c", text: "Impresionar al receptor" },
            { letter: "d", text: "Relatar historias largas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa reportar por 'clave radiofónica'?",
        options: [
            { letter: "a", text: "Utilizar lenguaje común" },
            { letter: "b", text: "Utilizar códigos predefinidos para ahorrar tiempo y claridad" },
            { letter: "c", text: "Usar contraseñas secretas" },
            { letter: "d", text: "Hablar más rápido para dar más información" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué característica NO es deseable en un reporte verbal al hospital?",
        options: [
            { letter: "a", text: "Brevedad" },
            { letter: "b", text: "Claridad" },
            { letter: "c", text: "Precisión" },
            { letter: "d", text: "Lenguaje técnico innecesario" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué representa la 'E' en la evaluación SAMPLE?",
        options: [
            { letter: "a", text: "Evaluación" },
            { letter: "b", text: "Eventos previos" },
            { letter: "c", text: "Examen físico" },
            { letter: "d", text: "Emergencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es más importante al escribir un FRAP?",
        options: [
            { letter: "a", text: "La rapidez" },
            { letter: "b", text: "La precisión y objetividad" },
            { letter: "c", text: "La opinión personal" },
            { letter: "d", text: "El número de palabras usadas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una radio portátil en una ambulancia permite principalmente:",
        options: [
            { letter: "a", text: "Comunicación interna entre tripulación" },
            { letter: "b", text: "Comunicación con hospitales y centrales de despacho" },
            { letter: "c", text: "Hablar entre pacientes" },
            { letter: "d", text: "Solicitar ambulancias adicionales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El uso adecuado de la comunicación no verbal puede ayudar a:",
        options: [
            { letter: "a", text: "Confundir al paciente" },
            { letter: "b", text: "Generar confianza" },
            { letter: "c", text: "Asustar al paciente" },
            { letter: "d", text: "Reducir la comprensión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debe evitarse cuando se documenta un evento prehospitalario?",
        options: [
            { letter: "a", text: "Errores de ortografía" },
            { letter: "b", text: "Hora de atención" },
            { letter: "c", text: "Datos de traslado" },
            { letter: "d", text: "Tratamiento aplicado" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué protocolo debe seguirse si se detecta un error en la documentación ya enviada?",
        options: [
            { letter: "a", text: "Ignorarlo" },
            { letter: "b", text: "Registrar una adenda o nota aclaratoria oficial" },
            { letter: "c", text: "Hacer tachaduras múltiples" },
            { letter: "d", text: "Hacer otro FRAP" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo del reporte oral al personal hospitalario al entregar un paciente?",
        options: [
            { letter: "a", text: "Conocer su experiencia médica" },
            { letter: "b", text: "Transferir adecuadamente el cuidado del paciente" },
            { letter: "c", text: "Obtener opiniones sobre el tratamiento" },
            { letter: "d", text: "Solicitar propinas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Cuando se transmite un reporte de radio, se debe hablar:",
        options: [
            { letter: "a", text: "Rápido y sin pausas" },
            { letter: "b", text: "Con tono firme, claro y pausado" },
            { letter: "c", text: "Usando jerga" },
            { letter: "d", text: "Usando claves secretas" },
        ],
        correctAnswer: "b",
    },
];