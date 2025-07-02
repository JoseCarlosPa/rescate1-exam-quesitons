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
            { letter: "a", text: "Administrar medicamentos al paciente" },
            { letter: "b", text: "Conducir de manera segura y llegar al hospital lo más rápido posible" },
            { letter: "c", text: "Monitorizar los signos vitales del paciente" },
            { letter: "d", text: "Comunicarse constantemente con el hospital" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante la verificación diaria de la ambulancia, ¿cuál de los siguientes NO es un elemento crítico a revisar?",
        options: [
            { letter: "a", text: "Nivel de combustible" },
            { letter: "b", text: "Funcionamiento de luces y sirenas" },
            { letter: "c", text: "Inventario de medicamentos y fechas de vencimiento" },
            { letter: "d", text: "Preferencias musicales del equipo" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente con infarto agudo de miocardio debe ser transportado en cual posición:",
        options: [
            { letter: "a", text: "Completamente supino" },
            { letter: "b", text: "Posición de Fowler (semisentado)" },
            { letter: "c", text: "Decúbito lateral izquierdo" },
            { letter: "d", text: "Trendelenburg" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Con qué frecuencia se deben tomar los signos vitales en un paciente crítico durante el transporte?",
        options: [
            { letter: "a", text: "Cada 15 minutos" },
            { letter: "b", text: "Cada 10 minutos" },
            { letter: "c", text: "Cada 5 minutos" },
            { letter: "d", text: "Solo al inicio y final del transporte" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la diferencia principal entre una ambulancia Tipo I y Tipo III?",
        options: [
            { letter: "a", text: "El Tipo I es más pequeña que el Tipo III" },
            { letter: "b", text: "El Tipo I está construida sobre chasis de camión, el Tipo III sobre van modificada" },
            { letter: "c", text: "El Tipo I es para transporte urbano, el Tipo III para rural" },
            { letter: "d", text: "No hay diferencias significativas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte de un paciente en shock, la comunicación con el hospital debe incluir:",
        options: [
            { letter: "a", text: "Solo la edad y sexo del paciente" },
            { letter: "b", text: "Signos vitales iniciales únicamente" },
            { letter: "c", text: "Reporte completo: edad, mecanismo, signos vitales, tratamientos y ETA" },
            { letter: "d", text: "Solo el tiempo estimado de llegada" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes posiciones está contraindicada para un paciente con posible lesión espinal?",
        options: [
            { letter: "a", text: "Supina con inmovilización" },
            { letter: "b", text: "Decúbito lateral con log roll" },
            { letter: "c", text: "Posición de Fowler sin inmovilización" },
            { letter: "d", text: "Supina con tabla espinal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En caso de parto precipitado durante el transporte, la primera acción debe ser:",
        options: [
            { letter: "a", text: "Acelerar hacia el hospital más cercano" },
            { letter: "b", text: "Detener la ambulancia en lugar seguro" },
            { letter: "c", text: "Llamar a bomberos para asistencia" },
            { letter: "d", text: "Continuar el transporte sin detenerse" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el equipamiento mínimo requerido para el manejo de vía aérea en una ambulancia básica?",
        options: [
            { letter: "a", text: "Solo mascarillas de oxígeno" },
            { letter: "b", text: "Cánulas orofaríngeas, BVM, aspirador y oxígeno" },
            { letter: "c", text: "Únicamente tubos endotraqueales" },
            { letter: "d", text: "Solo cánulas nasales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte de un paciente con trauma múltiple, se observa deterioro de los signos vitales. ¿Cuál es la acción más apropiada?",
        options: [
            { letter: "a", text: "Ignorar los cambios y continuar" },
            { letter: "b", text: "Detener el vehículo para evaluar" },
            { letter: "c", text: "Notificar inmediatamente al hospital y considerar cambio de destino" },
            { letter: "d", text: "Reducir la velocidad del transporte" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes factores NO debe considerarse al seleccionar el hospital de destino?",
        options: [
            { letter: "a", text: "Capacidades especializadas requeridas" },
            { letter: "b", text: "Distancia y tiempo de transporte" },
            { letter: "c", text: "Disponibilidad de camas" },
            { letter: "d", text: "Preferencias del personal de ambulancia" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La posición de Trendelenburg está indicada principalmente para:",
        options: [
            { letter: "a", text: "Pacientes con dificultad respiratoria" },
            { letter: "b", text: "Shock hipovolémico (como medida temporal)" },
            { letter: "c", text: "Pacientes inconscientes" },
            { letter: "d", text: "Todas las emergencias cardíacas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al cargar un paciente en la ambulancia, ¿cuál es la consideración de seguridad más importante?",
        options: [
            { letter: "a", text: "Velocidad de carga" },
            { letter: "b", text: "Verificar que la camilla esté asegurada y todos los dispositivos protegidos" },
            { letter: "c", text: "Posición del conductor" },
            { letter: "d", text: "Activar inmediatamente las luces de emergencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la ventaja principal de una ambulancia Tipo II en área urbana?",
        options: [
            { letter: "a", text: "Mayor espacio para procedimientos" },
            { letter: "b", text: "Mejor maniobrabilidad y menor costo operativo" },
            { letter: "c", text: "Mayor velocidad máxima" },
            { letter: "d", text: "Mejor aislamiento acústico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante el transporte, la monitorización continua debe incluir prioritariamente:",
        options: [
            { letter: "a", text: "Solo la presión arterial" },
            { letter: "b", text: "Solo la saturación de oxígeno" },
            { letter: "c", text: "Saturación de oxígeno, ritmo cardíaco y nivel de conciencia" },
            { letter: "d", text: "Solo la temperatura corporal" },
        ],
        correctAnswer: "c",
    },
];