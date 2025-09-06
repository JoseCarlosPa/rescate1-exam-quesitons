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

export const securityChallengingQuestions: Question[] = [
    {
        question: "Responde a una llamada de violencia doméstica donde una mujer de 32 años presenta múltiples contusiones y una fractura aparente de muñeca. Su esposo está presente, muy agresivo, y no permite que se acerquen a la paciente. Dice que ella 'se cayó por las escaleras' y amenaza con 'problemas' si llaman a la policía. La paciente parece aterrorizada y niega necesitar ayuda. ¿Cuál es su estrategia de seguridad más apropiada?",
        options: [
            { letter: "a", text: "Intentar separar físicamente al esposo para acceder a la paciente" },
            { letter: "b", text: "Retirarse inmediatamente y solicitar respaldo policial, manteniendo observación desde distancia segura" },
            { letter: "c", text: "Aceptar la explicación del esposo y marcharse" },
            { letter: "d", text: "Confrontar al esposo sobre las evidencias de violencia" }
        ],
        correctAnswer: "b",
        explanation: "En situaciones de violencia doméstica activa con agresor presente, la seguridad del personal es primordial. La presencia de amenazas y comportamiento agresivo indica un ambiente inseguro. El protocolo correcto es retirarse a una distancia segura, solicitar inmediatamente respaldo policial, y mantener observación visual de la escena para reportar cualquier escalada. Nunca se debe confrontar directamente a un agresor violento sin apoyo adecuado."
    },
    {
        question: "Durante un turno nocturno de 24 horas, usted y su compañero han atendido 8 llamadas críticas consecutivas, incluyendo un accidente fatal pediátrico y un suicidio. Son las 3 AM y reciben otra llamada de alto estrés. Su compañero comenta que 'se siente desconectado' y ha tenido microsueños durante la última hora. Usted también siente fatiga significativa. ¿Cuál es la decisión más segura?",
        options: [
            { letter: "a", text: "Continuar ya que solo queda una hora más de turno" },
            { letter: "b", text: "Solicitar al despachador cobertura de otra unidad y reportar fatiga crítica que compromete la seguridad" },
            { letter: "c", text: "Tomar turnos para dormir 15 minutos cada uno" },
            { letter: "d", text: "Usar cafeína y continuar el turno" }
        ],
        correctAnswer: "b",
        explanation: "La fatiga crítica con microsueños es una emergencia de seguridad que compromete tanto la seguridad del personal como de los pacientes. Los microsueños indican deprivación severa del sueño y alto riesgo de errores médicos y accidentes vehiculares. Es imperativo reconocer cuando la fatiga compromete la capacidad para proporcionar atención segura y solicitar relevo inmediato. La seguridad nunca debe comprometerse por presiones operativas."
    },
    {
        question: "Está atendiendo a un paciente en un edificio industrial donde se reportó exposición a químicos desconocidos. Al llegar, nota un olor químico fuerte y ve que varios trabajadores están tosiendo y con ojos llorosos. Su medidor de gases detecta niveles elevados de vapores tóxicos, pero el paciente está inconsciente en el área contaminada y requiere atención inmediata. ¿Cuál es su protocolo de seguridad?",
        options: [
            { letter: "a", text: "Ingresar inmediatamente con equipo de protección básico (mascarilla N95) para rescatar al paciente" },
            { letter: "b", text: "Establecer perímetro de seguridad, solicitar equipo HAZMAT especializado, y comenzar descontaminación de víctimas que puedan caminar" },
            { letter: "c", text: "Enviar solo a un miembro del equipo para un rescate rápido" },
            { letter: "d", text: "Intentar ventilar el área primero y luego ingresar" }
        ],
        correctAnswer: "b",
        explanation: "En incidentes con materiales peligrosos (HAZMAT), el personal SEM básico no debe ingresar a zonas calientes sin equipo especializado. La prioridad es establecer zonas de seguridad, evitar convertirse en víctima adicional, y activar recursos especializados. Se debe ayudar a las víctimas ambulatorias a salir de la zona contaminada y comenzar descontaminación, mientras se espera al equipo HAZMAT para rescate de víctimas no ambulatorias."
    },
    {
        question: "Durante una emergencia en un complejo de apartamentos, usted sospecha que el paciente de 25 años tiene tuberculosis activa debido a tos persistente con sangre, pérdida de peso severa, y fiebre. Vive en condiciones de hacinamiento con múltiples personas presentes. No tienen mascarillas N95 disponibles, solo mascarillas quirúrgicas básicas. El paciente está en dificultad respiratoria moderada. ¿Cuál es su estrategia de protección?",
        options: [
            { letter: "a", text: "Proceder con mascarilla quirúrgica ya que el paciente necesita atención inmediata" },
            { letter: "b", text: "Colocar mascarilla quirúrgica al paciente, usar doble mascarilla quirúrgica, ventilar el área, y limitar el personal en contacto directo" },
            { letter: "c", text: "Negarse a atender hasta conseguir equipo adecuado" },
            { letter: "d", text: "Atender sin protección especial ya que la tuberculosis no es tan contagiosa" }
        ],
        correctAnswer: "b",
        explanation: "Ante sospecha de tuberculosis sin EPP ideal, se deben implementar medidas de reducción de riesgo: colocar mascarilla quirúrgica al paciente (control en la fuente), usar doble mascarilla quirúrgica, maximizar ventilación, limitar personal expuesto al mínimo necesario, y documentar la exposición. Aunque no es protección óptima, estas medidas reducen significativamente el riesgo mientras se proporciona atención necesaria."
    },
    {
        question: "Está transportando a un paciente psiquiátrico agitado que súbitamente rompe las restricciones suaves y se vuelve violento, golpeando a su compañero en la cabeza. Usted está conduciendo la ambulancia a 80 km/h en una autopista. El paciente intenta abrir las puertas traseras mientras continúa siendo agresivo. Su compañero está aturdido pero consciente. ¿Cuál es su secuencia de acciones más segura?",
        options: [
            { letter: "a", text: "Detenerse inmediatamente en el acotamiento y intentar controlar físicamente al paciente" },
            { letter: "b", text: "Conducir más rápido al hospital más cercano mientras su compañero maneja la situación" },
            { letter: "c", text: "Detenerse de forma segura, activar emergencia, solicitar respaldo policial, y evacuar el compartimento del conductor si es necesario" },
            { letter: "d", text: "Continuar al hospital original mientras comunica la situación por radio" }
        ],
        correctAnswer: "c",
        explanation: "La violencia en el compartimiento del paciente durante el transporte es una emergencia de seguridad crítica. La prioridad es detener el vehículo de forma segura (no abruptamente para evitar más lesiones), activar todas las luces de emergencia, solicitar respaldo policial inmediato, y estar preparado para evacuar si la violencia escala. La seguridad del personal y otros conductores es primordial - un accidente vehicular podría ser fatal para todos."
    },
    {
        question: "Después de seis meses atendiendo múltiples traumas severos pediátricos, suicidios, y muertes, comienza a experimentar pesadillas recurrentes, evitación de ciertas situaciones, hipervigilancia, y pensamientos intrusivos sobre las llamadas. Sus relaciones personales se están deteriorando y ha aumentado su consumo de alcohol. Su supervisor nota cambios en su rendimiento. ¿Cuál es la acción más importante para su bienestar?",
        options: [
            { letter: "a", text: "Tomar vacaciones y esperar que los síntomas mejoren" },
            { letter: "b", text: "Reconocer los signos de estrés traumático secundario y buscar ayuda profesional inmediata" },
            { letter: "c", text: "Cambiar de turno para evitar llamadas traumáticas" },
            { letter: "d", text: "Usar más alcohol o medicamentos para manejar los síntomas" }
        ],
        correctAnswer: "b",
        explanation: "Estos síntomas indican estrés postraumático secundario o trastorno por estrés postraumático, comunes en personal de primeros auxilios. El reconocimiento temprano y la intervención profesional son cruciales para prevenir deterioro adicional y potenciales consecuencias graves. Es esencial buscar ayuda de profesionales especializados en trauma en primeros respondedores, utilizar recursos de apoyo del empleador, y desarrollar estrategias de afrontamiento saludables."
    },
    {
        question: "Durante una llamada nocturna en una zona conocida por actividad de pandillas, llegan a una escena donde múltiples personas están gritando y hay un paciente con herida de bala en el pecho. Al llegar, notan que hay grupos de personas agitadas en ambos extremos de la calle, algunos portando objetos que podrían ser armas. La policía aún no ha llegado y el paciente está en paro cardíaco. ¿Cuál es su protocolo de seguridad?",
        options: [
            { letter: "a", text: "Correr inmediatamente hacia el paciente para comenzar RCP" },
            { letter: "b", text: "Establecer un punto de encuentro seguro fuera de la línea de fuego, solicitar respaldo policial urgente, y esperar aseguración de la escena" },
            { letter: "c", text: "Aproximarse lentamente al paciente mientras evalúan la situación" },
            { letter: "d", text: "Enviar solo a un miembro del equipo mientras el otro permanece en la ambulancia" }
        ],
        correctAnswer: "b",
        explanation: "En escenas de violencia activa con potencial de violencia continuada, la regla fundamental es que el personal médico no puede ayudar si se convierte en víctima. Debe establecerse un punto de encuentro seguro, solicitar respaldo policial inmediato, y esperar que la escena sea asegurada. Aunque es difícil ver a un paciente sin atender, ingresar a una zona de fuego activo pone en riesgo tanto al personal como potencialmente a más víctimas."
    },
    {
        question: "Su compañero ha estado llegando tarde frecuentemente, su aliento a veces huele a alcohol, y recientemente cometió un error en la dosificación de medicamentos que afortunadamente no causó daño. Cuando lo confronta privadamente, él niega tener problemas y se vuelve hostil. Ustedes son buenos amigos fuera del trabajo. ¿Cuál es su responsabilidad profesional y ética?",
        options: [
            { letter: "a", text: "Mantener la lealtad como amigo y manejar la situación discretamente" },
            { letter: "b", text: "Reportar inmediatamente las preocupaciones al supervisor para proteger la seguridad del paciente" },
            { letter: "c", text: "Darle una última oportunidad y monitorearlo de cerca" },
            { letter: "d", text: "Confrontarlo nuevamente con amenaza de reportarlo" }
        ],
        correctAnswer: "b",
        explanation: "La seguridad del paciente es la prioridad absoluta y supera las relaciones personales. Los signos de deterioro por abuso de sustancias en un compañero representan un riesgo grave para los pacientes. Existe una obligación ética y profesional de reportar estas preocupaciones al supervisor inmediatamente. Retrasar el reporte podría resultar en daño a pacientes y responsabilidad legal personal."
    },
    {
        question: "Está respondiendo a un accidente vehicular en una autopista durante una tormenta severa. Al llegar, encuentra múltiples vehículos involucrados, pacientes atrapados, y condiciones meteorológicas empeorando con vientos fuertes y lluvia intensa. Los cables eléctricos están caídos cerca de uno de los vehículos, pero no está claro si están energizados. El tráfico continúa pasando a alta velocidad cerca de la escena. ¿Cuál es su secuencia de prioridades de seguridad?",
        options: [
            { letter: "a", text: "Comenzar inmediatamente el triage de pacientes ya que el tiempo es crítico" },
            { letter: "b", text: "Establecer perímetro de seguridad amplio, controlar tráfico, confirmar estado de cables eléctricos, y evaluar estabilidad de vehículos antes de acceder a pacientes" },
            { letter: "c", text: "Enviar a un miembro del equipo a verificar los cables mientras el otro comienza atención" },
            { letter: "d", text: "Asumir que los cables no están energizados ya que está lloviendo" }
        ],
        correctAnswer: "b",
        explanation: "En escenas complejas de múltiples riesgos, se debe realizar una evaluación sistemática de todos los peligros antes de acceder a pacientes. La secuencia correcta es: establecer perímetro amplio de seguridad, controlar o solicitar control de tráfico, confirmar con la compañía eléctrica el estado de los cables, evaluar estabilidad vehicular, y solo entonces proceder con triage. Los rescatistas no pueden ayudar si se electrocutan o son atropellados."
    },
    {
        question: "Durante una llamada en un edificio de apartamentos, usted y su compañero notan un fuerte olor a gas natural. El paciente está en el tercer piso con dificultad respiratoria severa y requiere atención inmediata. Otros residentes están evacuando y mencionan que 'huele a gas desde hace horas'. No han llegado los bomberos. Su equipo electrónico podría generar chispas. ¿Cuál es su protocolo de seguridad más apropiado?",
        options: [
            { letter: "a", text: "Subir rápidamente, apagar todos los equipos electrónicos, y evacuar al paciente inmediatamente" },
            { letter: "b", text: "Establecer zona de seguridad, solicitar departamento de bomberos para evaluación de gases, y preparar para recibir al paciente si otros pueden evacuarlo" },
            { letter: "c", text: "Usar solo equipo manual y proceder con cautela extrema" },
            { letter: "d", text: "Enviar solo a un miembro del equipo sin equipos electrónicos" }
        ],
        correctAnswer: "b",
        explanation: "En situaciones de fuga de gas natural, cualquier fuente de ignición puede causar explosión catastrófica. El protocolo seguro es establecer zona de exclusión, solicitar evaluación especializada de bomberos, y coordinar evacuación del paciente por personal no médico si es posible. Una explosión no solo mataría al personal médico, sino que crearía múltiples víctimas adicionales. La paciencia y coordinación con servicios especializados es esencial."
    }
];
