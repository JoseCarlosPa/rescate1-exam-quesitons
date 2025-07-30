import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Por qué es importante garantizar la seguridad del personal en el ámbito prehospitalario?",
        answer: "La seguridad del personal es esencial para asegurar que los paramédicos puedan brindar atención de calidad sin poner en riesgo su propia salud o bienestar. La protección adecuada permite una respuesta más eficiente ante emergencias y previene la exposición a diversos peligros."
    },
    {
        question: "¿Qué equipo de protección personal (EPP) es necesario durante una intervención?",
        answer: "El equipo de protección personal incluye guantes, mascarillas (N95 para ciertos casos), gafas protectoras, batas y, en algunos casos, protección respiratoria. Estos elementos son cruciales para prevenir la exposición a patógenos transmitidos por sangre y otros peligros en el entorno."
    },
    {
        question: "¿Qué hacer si el entorno de intervención parece peligroso para el personal?",
        answer: "Se debe realizar una evaluación de riesgos antes de intervenir. Si el entorno es peligroso (por ejemplo, por materiales tóxicos, violencia, tráfico vehicular o inestabilidad estructural), se debe solicitar la intervención de las autoridades competentes (policía, bomberos, equipos HAZMAT) antes de proceder con la atención al paciente. La seguridad personal siempre es la prioridad."
    },
    {
        question: "¿Cómo prevenir la fatiga en el personal de emergencias?",
        answer: "La prevención de fatiga incluye la rotación adecuada de turnos, pausas frecuentes para descanso, una dieta adecuada, ejercicio regular y asegurar que el personal tenga acceso a apoyo emocional y psicológico después de incidentes estresantes o traumáticos. El sueño adecuado es fundamental."
    },
    {
        question: "¿Cuáles son las vías de transmisión de enfermedades infecciosas en el ámbito prehospitalario?",
        answer: "Las principales vías de transmisión son el contacto directo (persona a persona), contacto indirecto (a través de objetos contaminados), por gotitas (al toser o estornudar) y por aire (a través de partículas pequeñas suspendidas en el aire, como la tuberculosis)."
    },
    {
        question: "¿Qué medidas se deben tomar después de una exposición potencial a una enfermedad infecciosa?",
        answer: "En caso de una exposición potencial, es fundamental informar inmediatamente al oficial de control de infecciones o al supervisor, quien coordinará las pruebas, el seguimiento y las precauciones necesarias. También se debe desinfectar cualquier equipo que haya estado en contacto con el paciente."
    },
    {
        question: "¿Cómo se maneja el estrés en el personal prehospitalario?",
        answer: "El manejo del estrés incluye identificar los signos y síntomas, buscar apoyo de colegas o profesionales, participar en actividades físicas, mantener una dieta balanceada y asegurar un sueño adecuado. Evitar el alcohol y las drogas como método de afrontamiento es crucial."
    },
    {
        question: "¿Qué es el Trastorno de Estrés Postraumático (TEPT) y cómo se relaciona con el personal de emergencias?",
        answer: "El TEPT es una reacción de estrés retardada que puede manifestarse semanas, meses o incluso años después de un evento traumático. El personal de emergencias está en alto riesgo debido a la exposición frecuente a situaciones traumáticas. Los síntomas pueden incluir flashbacks, pesadillas, evitación y dificultad para concentrarse."
    },
    {
        question: "¿Por qué es importante la limpieza y desinfección del equipo y la ambulancia?",
        answer: "La limpieza y desinfección adecuada del equipo y la ambulancia después de cada uso y de cada paciente es fundamental para prevenir la transmisión de enfermedades infecciosas a otros pacientes y al propio personal. Esto incluye limpiar derrames de sangre o fluidos corporales con desinfectantes apropiados."
    }
];
export const securityQuestions: Question[] = [
    {
        "question": "¿Cuál es el propósito principal de las precauciones estándar de seguridad en el entorno prehospitalario?",
        "options": [
            { "letter": "a", "text": "Proteger exclusivamente al paciente." },
            { "letter": "b", "text": "Asegurar la rapidez en la atención de emergencia." },
            { "letter": "c", "text": "Prevenir la transmisión de enfermedades y proteger al personal y al paciente." },
            { "letter": "d", "text": "Reducir el tiempo de respuesta en situaciones críticas." }
        ],
        "correctAnswer": "c",
        "explanation": "Las precauciones estándar se basan en el principio de que todos los fluidos corporales de cualquier paciente pueden ser infecciosos. Su objetivo es crear una barrera para proteger tanto al proveedor de atención médica como a los pacientes de la exposición a patógenos."
    },
    {
        "question": "¿Qué elemento del Equipo de Protección Personal (EPP) es esencial para proteger los ojos de salpicaduras de fluidos corporales?",
        "options": [
            { "letter": "a", "text": "Guantes de nitrilo." },
            { "letter": "b", "text": "Mascarilla quirúrgica." },
            { "letter": "c", "text": "Gafas de seguridad o careta facial." },
            { "letter": "d", "text": "Bata desechable." }
        ],
        "correctAnswer": "c",
        "explanation": "Las gafas de seguridad o una careta facial crean una barrera física que protege las membranas mucosas de los ojos contra salpicaduras de sangre u otros fluidos corporales, que son una vía potencial de transmisión de enfermedades."
    },
    {
        "question": "¿Cuál de las siguientes es una vía de transmisión de enfermedades por contacto indirecto?",
        "options": [
            { "letter": "a", "text": "Gotitas respiratorias al toser." },
            { "letter": "b", "text": "Tocar una superficie contaminada y luego la boca." },
            { "letter": "c", "text": "Inhalar aerosoles de un paciente con tuberculosis." },
            { "letter": "d", "text": "Un pinchazo de aguja accidental." }
        ],
        "correctAnswer": "b",
        "explanation": "El contacto indirecto ocurre cuando un agente infeccioso se transfiere a través de un objeto o superficie contaminada (un fómite), como un estetoscopio o la manija de una puerta. Las otras opciones describen la transmisión por gotas, por aire y por vía sanguínea."
    },
    {
        "question": "Un paramédico ha tenido una exposición potencial a una enfermedad infecciosa. ¿Cuál es el primer paso que debe tomar?",
        "options": [
            { "letter": "a", "text": "Ignorar la exposición si no presenta síntomas inmediatos." },
            { "letter": "b", "text": "Continuar trabajando y monitorear los síntomas." },
            { "letter": "c", "text": "Informar inmediatamente al oficial de control de infecciones o al supervisor." },
            { "letter": "d", "text": "Desinfectar únicamente el equipo que estuvo en contacto." }
        ],
        "correctAnswer": "c",
        "explanation": "La notificación inmediata es crucial. Permite una evaluación de riesgos adecuada, el inicio de profilaxis post-exposición si es necesario, y la correcta documentación del incidente según las políticas del servicio y las regulaciones de salud ocupacional."
    },
    {
        "question": "¿Cuál de los siguientes signos y síntomas NO se suele asociar con el estrés prolongado en el personal de emergencias?",
        "options": [
            { "letter": "a", "text": "Dolores de cabeza recurrentes." },
            { "letter": "b", "text": "Sudores nocturnos." },
            { "letter": "c", "text": "Mejora del rendimiento cognitivo." },
            { "letter": "d", "text": "Aislamiento social." }
        ],
        "correctAnswer": "c",
        "explanation": "El estrés crónico o acumulado tiene un efecto perjudicial sobre la función cognitiva, pudiendo causar problemas de concentración, memoria y toma de decisiones. Una mejora en el rendimiento sería contraria a los efectos conocidos del estrés prolongado."
    },
    {
        "question": "¿Cuál es una forma recomendada de manejar el estrés para el personal prehospitalario?",
        "options": [
            { "letter": "a", "text": "Consumir alcohol después de los turnos para relajarse." },
            { "letter": "b", "text": "Evitar hablar de los incidentes traumáticos." },
            { "letter": "c", "text": "Participar en actividades físicas fuera del trabajo y mantener una dieta equilibrada." },
            { "letter": "d", "text": "Trabajar horas extra para evitar el tiempo de inactividad." }
        ],
        "correctAnswer": "c",
        "explanation": "Las estrategias de afrontamiento saludables son clave para la resiliencia. El ejercicio regular, una nutrición adecuada, un sueño suficiente y mantener conexiones sociales son formas probadas de mitigar los efectos negativos del estrés laboral."
    },
    {
        "question": "¿Qué tipo de reacción de estrés puede manifestarse semanas o meses después de un evento traumático?",
        "options": [
            { "letter": "a", "text": "Reacción de estrés agudo." },
            { "letter": "b", "text": "Reacción de estrés acumulado." },
            { "letter": "c", "text": "Trastorno de estrés postraumático (TEPT)." },
            { "letter": "d", "text": "Síndrome de Burnout." }
        ],
        "correctAnswer": "c",
        "explanation": "El Trastorno de Estrés Postraumático (TEPT) se caracteriza por la aparición tardía (después de un mes) de síntomas como flashbacks, pesadillas y evitación, tras la exposición a un evento traumático. La reacción de estrés agudo ocurre inmediatamente después del evento."
    },
    {
        "question": "¿Por qué es crucial la evaluación continua del entorno en una escena de emergencia?",
        "options": [
            { "letter": "a", "text": "Para buscar objetos de valor del paciente." },
            { "letter": "b", "text": "Para identificar y mitigar peligros potenciales para el personal y el paciente." },
            { "letter": "c", "text": "Para planificar la ruta de escape más rápida." },
            { "letter": "d", "text": "Para documentar evidencia para fines legales." }
        ],
        "correctAnswer": "b",
        "explanation": "Las escenas de emergencia son dinámicas y pueden cambiar rápidamente. Una evaluación continua del entorno permite a los proveedores identificar nuevos peligros (por ejemplo, un vehículo que empieza a arder, la llegada de una multitud hostil) y adaptar su plan para mantener la seguridad de todos."
    },
    {
        "question": "¿Qué acción es prioritaria al manejar un paciente que se sabe es violento o agresivo?",
        "options": [
            { "letter": "a", "text": "Acercarse al paciente sin dudar para controlarlo." },
            { "letter": "b", "text": "Establecer contacto visual y verbal de inmediato." },
            { "letter": "c", "text": "Esperar a la llegada de la policía o personal de seguridad para asegurar la escena." },
            { "letter": "d", "text": "Administrar sedantes de inmediato." }
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad del personal es primordial. Nunca se debe ingresar a una escena donde haya una amenaza de violencia. La acción correcta es retirarse a un lugar seguro y esperar a que la policía asegure la escena antes de intentar el contacto con el paciente."
    },
    {
        "question": "¿Cuál es el propósito de la señalización adecuada en una escena de emergencia con tráfico vehicular?",
        "options": [
            { "letter": "a", "text": "Asegurar la evacuación rápida de los pacientes." },
            { "letter": "b", "text": "Indicar áreas seguras y peligrosas para los equipos de emergencia y desviar el tráfico." },
            { "letter": "c", "text": "Asegurarse de que todos los paramédicos tengan acceso al paciente." },
            { "letter": "d", "text": "Facilitar el transporte de los pacientes." }
        ],
        "correctAnswer": "b",
        "explanation": "La señalización con conos, bengalas y el posicionamiento de los vehículos de emergencia crea una zona de trabajo segura al advertir a los conductores que se aproximan, reducir la velocidad del tráfico y desviarlo de manera segura alrededor del incidente, protegiendo así a los respondedores."
    },
    {
        "question": "¿Cómo debe un paramédico manejar una escena en condiciones meteorológicas extremas (lluvia, nieve, calor extremo)?",
        "options": [
            { "letter": "a", "text": "Colocar el equipo en una zona segura y esperar a que mejoren las condiciones." },
            { "letter": "b", "text": "Asegurar el transporte del paciente con rapidez, sin importar el clima." },
            { "letter": "c", "text": "Evaluar cuidadosamente el entorno, usar EPP adecuado para el clima y proceder con precaución." },
            { "letter": "d", "text": "Ignorar el clima y continuar con el tratamiento como de costumbre." }
        ],
        "correctAnswer": "c",
        "explanation": "Las condiciones climáticas extremas son un peligro en sí mismas. El paramédico debe adaptar su enfoque, utilizando el equipo de protección personal adecuado (ej. ropa de abrigo, protección solar) y tomando precauciones adicionales para protegerse a sí mismo y al paciente de los elementos."
    },
    {
        "question": "¿Cuál es la medida más efectiva para prevenir la propagación de patógenos transmitidos por la sangre, como el VIH o la Hepatitis B, en el ámbito prehospitalario?",
        "options": [
            { "letter": "a", "text": "Uso de guantes únicamente." },
            { "letter": "b", "text": "Lavado de manos riguroso y uso de EPP universal para todos los pacientes." },
            { "letter": "c", "text": "Evitar el contacto directo con cualquier paciente sospechoso." },
            { "letter": "d", "text": "Desinfección de la ambulancia una vez al día." }
        ],
        "correctAnswer": "b",
        "explanation": "La prevención más efectiva combina múltiples capas de protección. El lavado de manos es la medida individual más importante para prevenir infecciones, y el uso consistente del EPP apropiado (basado en el riesgo de exposición) para todos los pacientes bajo el principio de precauciones universales es el estándar de oro."
    },
    {
        "question": "¿Qué se considera un 'principio de bienestar' fundamental para el personal de emergencias?",
        "options": [
            { "letter": "a", "text": "Priorizar siempre la atención al paciente por encima de la seguridad personal." },
            { "letter": "b", "text": "Minimizar las horas de descanso para maximizar la cobertura de turnos." },
            { "letter": "c", "text": "Mantener un equilibrio entre la vida laboral y personal, incluyendo ejercicio y dieta adecuada." },
            { "letter": "d", "text": "Depender únicamente de la fuerza mental para superar el estrés." }
        ],
        "correctAnswer": "c",
        "explanation": "La carrera en los servicios de emergencia es un maratón, no un sprint. Para mantener la salud física y mental a largo plazo, es esencial cuidar de uno mismo fuera del trabajo a través de un sueño adecuado, nutrición, ejercicio y tiempo para la relajación y las relaciones personales."
    },
    {
        "question": "¿Cuál de las siguientes NO es una forma recomendada de manejar el estrés?",
        "options": [
            { "letter": "a", "text": "Ejercicio regular." },
            { "letter": "b", "text": "Dieta adecuada." },
            { "letter": "c", "text": "Consumo excesivo de alcohol o drogas." },
            { "letter": "d", "text": "Sueño suficiente." }
        ],
        "correctAnswer": "c",
        "explanation": "El uso de alcohol o drogas son mecanismos de afrontamiento negativos y destructivos. Aunque pueden ofrecer un alivio temporal, a largo plazo empeoran la salud mental y física, y pueden llevar a la dependencia y a problemas profesionales."
    },
    {
        "question": "¿Qué acción se debe tomar inmediatamente después de tratar a un paciente con una enfermedad infecciosa conocida para el equipo y la ambulancia?",
        "options": [
            { "letter": "a", "text": "Continuar con la siguiente llamada sin interrupción." },
            { "letter": "b", "text": "Ventilar la ambulancia y esperar 30 minutos." },
            { "letter": "c", "text": "Limpiar y descontaminar exhaustivamente todo el equipo y las superficies de la ambulancia." },
            { "letter": "d", "text": "Reportar solo al supervisor si hay síntomas en el paramédico." }
        ],
        "correctAnswer": "c",
        "explanation": "Después de cualquier llamada, pero especialmente una con un riesgo infeccioso conocido, es obligatorio realizar una limpieza y descontaminación completa de la ambulancia y de todo el equipo utilizado. Esto es fundamental para prevenir la contaminación cruzada y proteger al siguiente paciente y a la tripulación."
    }
]