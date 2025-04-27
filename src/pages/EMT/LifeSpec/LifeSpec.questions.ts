import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué etapa de la vida presenta la mayor frecuencia respiratoria?",
        answer: "El neonato, con una frecuencia respiratoria de 30-60 respiraciones por minuto.",
    },
    {
        question: "¿A qué edad suelen comenzar los cambios puberales?",
        answer: "Generalmente entre los 10 y 14 años en adolescentes.",
    },
    {
        question: "¿Cuál es una característica importante en la atención de lactantes?",
        answer: "Son respiradores nasales obligados, por lo que cualquier obstrucción nasal puede ser crítica.",
    },
    {
        question: "¿Cómo cambia la presión arterial a lo largo de la vida?",
        answer: "Aumenta progresivamente desde la infancia hasta la vejez.",
    },
    {
        question: "¿Qué precaución especial debe tenerse con los adultos mayores en atención prehospitalaria?",
        answer: "Considerar la fragilidad ósea y la polifarmacia (uso de múltiples medicamentos).",
    },
    {
        question: "¿Qué sistema corporal se deteriora progresivamente con la edad?",
        answer: "El sistema cardiovascular y el sistema inmunológico muestran declive funcional.",
    },
    {
        question: "¿Qué importancia tiene la comunicación con los niños escolares durante la atención?",
        answer: "Es fundamental explicar los procedimientos de forma sencilla para reducir su ansiedad.",
    },
    {
        question: "¿Por qué los adolescentes pueden presentar resistencia a recibir ayuda médica?",
        answer: "Por deseo de independencia y preocupaciones sobre la privacidad.",
    },
];

export const lifeSpecQuestions: Question[] = [
    {
        question: "¿Qué edad comprende la etapa de lactante?",
        options: [
            { letter: "a", text: "0 a 1 mes" },
            { letter: "b", text: "1 mes a 1 año" },
            { letter: "c", text: "1 año a 3 años" },
            { letter: "d", text: "3 a 6 años" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la frecuencia cardiaca normal de un lactante?",
        options: [
            { letter: "a", text: "60-100 lpm" },
            { letter: "b", text: "80-160 lpm" },
            { letter: "c", text: "100-180 lpm" },
            { letter: "d", text: "30-60 lpm" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué describe mejor a un neonato?",
        options: [
            { letter: "a", text: "Mayor control del tronco" },
            { letter: "b", text: "Presencia de reflejos primitivos" },
            { letter: "c", text: "Coordinación motora fina" },
            { letter: "d", text: "Habla fluida" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿A qué edad se considera que empieza la adolescencia?",
        options: [
            { letter: "a", text: "9 años" },
            { letter: "b", text: "11 años" },
            { letter: "c", text: "12 años" },
            { letter: "d", text: "13 años" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué sistema corporal madura significativamente durante la infancia?",
        options: [
            { letter: "a", text: "Sistema nervioso" },
            { letter: "b", text: "Sistema circulatorio" },
            { letter: "c", text: "Sistema esquelético" },
            { letter: "d", text: "Sistema digestivo" },
        ],
        correctAnswer: "a",
    },
    // Continúa con más preguntas:
    {
        question: "¿Cuál es la principal causa de muerte en adultos jóvenes?",
        options: [
            { letter: "a", text: "Enfermedad cardiovascular" },
            { letter: "b", text: "Accidentes" },
            { letter: "c", text: "Cáncer" },
            { letter: "d", text: "Enfermedades respiratorias" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué característica define al niño en edad preescolar?",
        options: [
            { letter: "a", text: "Inicia la pubertad" },
            { letter: "b", text: "Desarrollo emocional activo" },
            { letter: "c", text: "Razonamiento abstracto" },
            { letter: "d", text: "Interés académico formal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un cambio fisiológico en los adultos de mediana edad?",
        options: [
            { letter: "a", text: "Aumento de la masa muscular" },
            { letter: "b", text: "Pérdida de elasticidad vascular" },
            { letter: "c", text: "Aumento de la frecuencia respiratoria" },
            { letter: "d", text: "Incremento del metabolismo basal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué frecuencia respiratoria es normal en un niño escolar?",
        options: [
            { letter: "a", text: "12-20 rpm" },
            { letter: "b", text: "15-30 rpm" },
            { letter: "c", text: "20-40 rpm" },
            { letter: "d", text: "30-50 rpm" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué describe mejor a un adulto mayor en términos de comunicación?",
        options: [
            { letter: "a", text: "Comunicación impulsiva" },
            { letter: "b", text: "Comunicación agresiva" },
            { letter: "c", text: "Posibles déficits auditivos o visuales" },
            { letter: "d", text: "Fácil distracción" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué grupo etario tiene mayor riesgo de deshidratación debido a pérdida rápida de líquidos?",
        options: [
            { letter: "a", text: "Adultos jóvenes" },
            { letter: "b", text: "Niños pequeños" },
            { letter: "c", text: "Adultos mayores" },
            { letter: "d", text: "Adolescentes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué característica presenta el sistema inmunológico en el adulto mayor?",
        options: [
            { letter: "a", text: "Mayor respuesta ante infecciones" },
            { letter: "b", text: "Mayor producción de anticuerpos" },
            { letter: "c", text: "Disminución de la función inmune" },
            { letter: "d", text: "Incremento de la actividad celular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el reflejo que permite a un neonato voltear la cabeza hacia el estímulo táctil en la mejilla?",
        options: [
            { letter: "a", text: "Reflejo de succión" },
            { letter: "b", text: "Reflejo de Moro" },
            { letter: "c", text: "Reflejo de búsqueda" },
            { letter: "d", text: "Reflejo tónico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué factor influye directamente en la esperanza de vida?",
        options: [
            { letter: "a", text: "Color de ojos" },
            { letter: "b", text: "Acceso a servicios de salud" },
            { letter: "c", text: "Grupo sanguíneo" },
            { letter: "d", text: "Habilidad atlética" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una señal de envejecimiento en el sistema respiratorio?",
        options: [
            { letter: "a", text: "Incremento de la elasticidad pulmonar" },
            { letter: "b", text: "Disminución de la capacidad vital" },
            { letter: "c", text: "Incremento de la tasa metabólica" },
            { letter: "d", text: "Mayor flexibilidad torácica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué evento caracteriza el paso de la infancia a la niñez temprana?",
        options: [
            { letter: "a", text: "Inicio del lenguaje hablado" },
            { letter: "b", text: "Desarrollo de la marcha independiente" },
            { letter: "c", text: "Pubertad" },
            { letter: "d", text: "Capacidad de razonamiento abstracto" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué factor disminuye notablemente en el adulto mayor afectando su movilidad?",
        options: [
            { letter: "a", text: "El volumen sanguíneo" },
            { letter: "b", text: "La masa muscular" },
            { letter: "c", text: "La frecuencia cardiaca" },
            { letter: "d", text: "La función renal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué describe mejor el patrón respiratorio del lactante?",
        options: [
            { letter: "a", text: "Respiración profunda y lenta" },
            { letter: "b", text: "Respiración diafragmática rápida" },
            { letter: "c", text: "Respiración torácica rítmica" },
            { letter: "d", text: "Respiración alterna por nariz y boca" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué etapa del desarrollo humano se da un aumento de la producción de hormonas sexuales?",
        options: [
            { letter: "a", text: "Niñez" },
            { letter: "b", text: "Adolescencia" },
            { letter: "c", text: "Edad adulta temprana" },
            { letter: "d", text: "Edad adulta media" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué cambio cardiovascular ocurre normalmente con la edad?",
        options: [
            { letter: "a", text: "Hipertrofia miocárdica" },
            { letter: "b", text: "Disminución del grosor arterial" },
            { letter: "c", text: "Aumento de elasticidad arterial" },
            { letter: "d", text: "Incremento del gasto cardiaco en reposo" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué habilidad social se desarrolla principalmente en niños escolares?",
        options: [
            { letter: "a", text: "Pensamiento abstracto" },
            { letter: "b", text: "Capacidad de formar amistades profundas" },
            { letter: "c", text: "Desarrollo del razonamiento moral" },
            { letter: "d", text: "Consolidación de la identidad personal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué órgano experimenta disminución del filtrado glomerular en adultos mayores?",
        options: [
            { letter: "a", text: "Hígado" },
            { letter: "b", text: "Pulmones" },
            { letter: "c", text: "Riñones" },
            { letter: "d", text: "Corazón" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el principal riesgo respiratorio en neonatos?",
        options: [
            { letter: "a", text: "Obstrucción nasal" },
            { letter: "b", text: "Edema pulmonar" },
            { letter: "c", text: "Enfisema" },
            { letter: "d", text: "Asma" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué factor psicológico es importante en la atención de adolescentes?",
        options: [
            { letter: "a", text: "Garantizar su independencia y privacidad" },
            { letter: "b", text: "Tratarlo como un adulto mayor" },
            { letter: "c", text: "Evitar toda explicación médica" },
            { letter: "d", text: "Minimizar sus preocupaciones" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué parámetro vital tiende a aumentar con la edad?",
        options: [
            { letter: "a", text: "Frecuencia respiratoria" },
            { letter: "b", text: "Frecuencia cardiaca" },
            { letter: "c", text: "Presión arterial" },
            { letter: "d", text: "Temperatura corporal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué sucede con la elasticidad pulmonar en la vejez?",
        options: [
            { letter: "a", text: "Aumenta" },
            { letter: "b", text: "Se mantiene constante" },
            { letter: "c", text: "Disminuye" },
            { letter: "d", text: "Se vuelve variable" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué refleja una presión arterial elevada en adultos mayores?",
        options: [
            { letter: "a", text: "Incremento de la fuerza miocárdica" },
            { letter: "b", text: "Pérdida de elasticidad arterial" },
            { letter: "c", text: "Disminución de la perfusión cerebral" },
            { letter: "d", text: "Mejor oxigenación celular" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una causa común de muerte súbita en neonatos?",
        options: [
            { letter: "a", text: "Sepsis" },
            { letter: "b", text: "Síndrome de muerte súbita infantil (SMSI)" },
            { letter: "c", text: "Obstrucción por cuerpo extraño" },
            { letter: "d", text: "Deshidratación severa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué etapa está marcada por una rápida expansión del vocabulario y habilidades motoras finas?",
        options: [
            { letter: "a", text: "Niño pequeño" },
            { letter: "b", text: "Niño escolar" },
            { letter: "c", text: "Lactante" },
            { letter: "d", text: "Adolescente" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué sentido disminuye primero en los adultos mayores?",
        options: [
            { letter: "a", text: "Olfato" },
            { letter: "b", text: "Vista" },
            { letter: "c", text: "Gusto" },
            { letter: "d", text: "Tacto" },
        ],
        correctAnswer: "b",
    },
];