import { Question } from "../../../../question";

export const faqData = [
    {
        question: "¿Existe una certificación nacional oficial para instructores de rescate con cuerdas?",
        answer: "No. No existe una certificación reconocida a nivel nacional para instructores de rescate con cuerdas, por lo que cualquier persona puede presentarse como instructor. Esto pone la responsabilidad de investigar sus calificaciones sobre la organización o el rescatista individual.",
    },
    {
        question: "¿Qué debo preguntar antes de tomar un curso o contratar un instructor?",
        answer: "Se debe preguntar sobre el contenido y alcance del curso, el origen de cualquier certificación, clases anteriores impartidas, la experiencia del instructor como docente, su experiencia en rescates reales, y si cuenta con seguro de responsabilidad civil.",
    },
    {
        question: "¿Por qué es importante que un instructor tenga experiencia en rescates reales?",
        answer: "Porque aporta una conexión con el mundo real que no tiene un instructor cuyo único bagaje es haber asistido a cursos. Esta experiencia práctica enriquece la enseñanza más allá de la teoría.",
    },
    {
        question: "¿Qué ventaja ofrece estandarizar los sistemas de rescate de un equipo?",
        answer: "Reduce la cantidad de conocimiento que un integrante nuevo debe dominar para desempeñarse bien, evita tener que combinar una amplia variedad de técnicas en medio de un rescate real, y permite que tanto miembros nuevos como veteranos sepan qué esperar del equipo.",
    },
    {
        question: "¿Para qué sirve un manual de equipo (procedimientos operativos estándar)?",
        answer: "Ayuda a los miembros del equipo a aprender y repasar los sistemas del equipo, permite el autoestudio del novato, resuelve confusiones sobre los procedimientos preferidos, y documenta los estándares de entrenamiento y respuesta ante cuestionamientos legales o de otras agencias.",
    },
    {
        question: "¿Es la improvisación un sustituto de aprender las habilidades fundamentales?",
        answer: "No. Aunque la capacidad de improvisar es importante, a veces se usa como excusa para no aprender las habilidades fundamentales. Poder adaptar las habilidades a lo inesperado requiere haber aprendido primero esas habilidades de forma estandarizada.",
    },
    {
        question: "¿Por qué es importante la revisión (debriefing) después de un entrenamiento o rescate?",
        answer: "Porque si un equipo no puede analizar honestamente su desempeño, no puede mejorar. La revisión permite encontrar formas de ahorrar tiempo, eliminar confusión o aumentar la seguridad, y reforzar lo que funcionó bien.",
    },
];

export const introductionQuestions: Question[] = [
    {
        question: "¿Por qué no existe garantía de calidad al elegir un instructor de rescate con cuerdas?",
        options: [
            { letter: "a", text: "Porque los instructores siempre trabajan de forma gratuita" },
            { letter: "b", text: "Porque no existe una certificación reconocida a nivel nacional para instructores" },
            { letter: "c", text: "Porque solo los bomberos pueden ser instructores" },
            { letter: "d", text: "Porque la ley prohíbe certificar instructores" },
        ],
        correctAnswer: "b",
        explanation: "No existe una certificación nacional reconocida para instructores de rescate con cuerdas, por lo que cualquier persona que cobre por sus servicios puede presentarse como instructor \"profesional\".",
    },
    {
        question: "Según el manual, ¿qué se debe sospechar de un curso que promete certificar a un principiante como técnico de rescate en solo un fin de semana?",
        options: [
            { letter: "a", text: "Que es una oferta excelente y muy eficiente" },
            { letter: "b", text: "Que probablemente no enseña los fundamentos con suficiente profundidad" },
            { letter: "c", text: "Que está diseñado únicamente para expertos" },
            { letter: "d", text: "Que cumple con la norma NFPA 1006 automáticamente" },
        ],
        correctAnswer: "b",
        explanation: "Un buen curso dedica tiempo a enseñar los fundamentos; si prometen certificar a un principiante en pocas horas o un fin de semana, se debe ser desconfiado de su profundidad y calidad.",
    },
    {
        question: "¿Cuál de las siguientes NO es una pregunta recomendada al evaluar a un posible instructor?",
        options: [
            { letter: "a", text: "¿Cuál es el contenido y alcance del curso?" },
            { letter: "b", text: "¿Tiene el instructor experiencia en rescates reales?" },
            { letter: "c", text: "¿Cuál es el color favorito del instructor?" },
            { letter: "d", text: "¿Cuenta el instructor con seguro de responsabilidad civil?" },
        ],
        correctAnswer: "c",
        explanation: "Las preguntas relevantes incluyen el contenido del curso, certificaciones, experiencia docente y en rescates reales, y el seguro de responsabilidad civil — no aspectos irrelevantes como preferencias personales.",
    },
    {
        question: "¿Por qué se considera especialmente importante que un instructor haya estado involucrado en rescates reales?",
        options: [
            { letter: "a", text: "Porque aporta una conexión con el mundo real que no tiene alguien que solo ha tomado cursos" },
            { letter: "b", text: "Porque es un requisito legal obligatorio" },
            { letter: "c", text: "Porque permite cobrar tarifas más altas" },
            { letter: "d", text: "Porque reduce la necesidad de práctica en clase" },
        ],
        correctAnswer: "a",
        explanation: "Un instructor con experiencia real en rescates aporta una conexión con el mundo real que enriquece la enseñanza más allá de la teoría de los cursos.",
    },
    {
        question: "¿Qué recomienda el manual sobre la condición física antes de tomar una clase de rescate con cuerdas?",
        options: [
            { letter: "a", text: "No es necesario prepararse físicamente" },
            { letter: "b", text: "Verificar la condición física, estirar y prepararse para trabajo físico pesado" },
            { letter: "c", text: "Solo es necesario para instructores, no para estudiantes" },
            { letter: "d", text: "Se recomienda ayunar antes de la clase" },
        ],
        correctAnswer: "b",
        explanation: "El rapel y los sistemas de rescate son trabajo físico pesado; se recomienda verificar la condición física, estirar piernas y tobillos, y estar preparado para levantar camillas y traccionar cuerdas.",
    },
    {
        question: "¿Qué equilibrio se recomienda mantener durante una clase de rescate con cuerdas?",
        options: [
            { letter: "a", text: "Entre dormir y tomar apuntes" },
            { letter: "b", text: "Entre hacer preguntas y dejar que el instructor enseñe al grupo completo" },
            { letter: "c", text: "Entre usar casco y no usarlo" },
            { letter: "d", text: "Entre pagar el curso completo o por sesiones" },
        ],
        correctAnswer: "b",
        explanation: "Se debe buscar un equilibrio entre hacer preguntas y dejar que el instructor enseñe, ya que su responsabilidad principal es con todo el grupo, no con un solo estudiante que busca demostrar lo que sabe.",
    },
    {
        question: "¿Cuál es la principal ventaja de estandarizar los sistemas de rescate de un equipo?",
        options: [
            { letter: "a", text: "Elimina por completo la necesidad de entrenamiento" },
            { letter: "b", text: "Reduce la cantidad de conocimiento que un integrante debe dominar y evita combinar técnicas dispares durante un rescate real" },
            { letter: "c", text: "Permite que cada rescatista use el sistema que prefiera sin coordinación" },
            { letter: "d", text: "Solo es útil para equipos grandes" },
        ],
        correctAnswer: "b",
        explanation: "Estandarizar los sistemas reduce el conocimiento requerido y evita tener que combinar una amplia variedad de habilidades en medio de un rescate — tanto miembros nuevos como veteranos saben qué esperar.",
    },
    {
        question: "¿Cuál de las siguientes NO es una función de un manual de equipo (procedimientos operativos estándar)?",
        options: [
            { letter: "a", text: "Ayudar a los miembros del equipo a aprender y repasar los sistemas del equipo" },
            { letter: "b", text: "Permitir el autoestudio del novato" },
            { letter: "c", text: "Reemplazar por completo la necesidad de práctica física" },
            { letter: "d", text: "Documentar los estándares de entrenamiento y respuesta ante cuestionamientos legales" },
        ],
        correctAnswer: "c",
        explanation: "El manual de equipo es un recurso de aprendizaje y documentación, pero no sustituye la práctica física ni el entrenamiento hands-on necesario para desarrollar habilidades reales.",
    },
    {
        question: "Según el manual, ¿por qué es preferible que un manual de equipo cite textos de rescate publicados en lugar de solo copiar y pegar contenido?",
        options: [
            { letter: "a", text: "Porque es más rápido de escribir" },
            { letter: "b", text: "Porque el manual tendrá más credibilidad al incorporar por referencia procedimientos ya adoptados" },
            { letter: "c", text: "Porque está prohibido escribir contenido original" },
            { letter: "d", text: "Porque los textos publicados no requieren revisión" },
        ],
        correctAnswer: "b",
        explanation: "El manual de equipo tendrá más credibilidad si incorpora por referencia las partes de textos publicados que el equipo ha adoptado como estándar, en lugar de un enfoque de copiar y pegar.",
    },
    {
        question: "¿Cómo describe el manual la relación entre improvisación y habilidades fundamentales?",
        options: [
            { letter: "a", text: "La improvisación siempre debe evitarse por completo" },
            { letter: "b", text: "La capacidad de improvisar requiere haber aprendido primero las habilidades fundamentales de forma estandarizada" },
            { letter: "c", text: "La improvisación sustituye por completo el entrenamiento formal" },
            { letter: "d", text: "Solo los instructores pueden improvisar en un rescate" },
        ],
        correctAnswer: "b",
        explanation: "Aunque improvisar es importante, a veces se usa como excusa para no aprender lo fundamental. Adaptar habilidades a lo inesperado requiere haber aprendido primero esas habilidades de forma estandarizada.",
    },
    {
        question: "¿Cuál es el propósito principal de revisar (hacer debriefing de) un entrenamiento o rescate?",
        options: [
            { letter: "a", text: "Buscar a quién culpar por los errores" },
            { letter: "b", text: "Analizar honestamente el desempeño para poder mejorar como equipo" },
            { letter: "c", text: "Cumplir un requisito administrativo sin mayor utilidad" },
            { letter: "d", text: "Solo se debe hacer cuando ocurre un accidente grave" },
        ],
        correctAnswer: "b",
        explanation: "Si un equipo no puede analizar honestamente su desempeño después de un entrenamiento o rescate, no puede mejorar. Es la búsqueda de la mejora, no solo la felicitación, lo que hace mejor al equipo.",
    },
    {
        question: "¿Qué característica define a los mejores equipos de rescate, según el manual?",
        options: [
            { letter: "a", text: "Nunca cometer errores" },
            { letter: "b", text: "Tener el valor y la disposición para criticar objetivamente su propio desempeño" },
            { letter: "c", text: "Usar siempre el equipo más costoso disponible" },
            { letter: "d", text: "Evitar hablar de accidentes o casi-accidentes" },
        ],
        correctAnswer: "b",
        explanation: "Los mejores equipos de rescate son los que tienen el valor y la disposición para criticar su propio desempeño de manera objetiva, incluso en rescates que parecieron perfectos.",
    },
];
