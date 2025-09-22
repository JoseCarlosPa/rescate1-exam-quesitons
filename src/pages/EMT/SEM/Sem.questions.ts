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
        "question": "¿Cuál de los siguientes es un componente esencial del sistema SEM?",
        "options": [
            {"letter": "a", "text": "Centros comerciales"},
            {"letter": "b", "text": "Centros de información"},
            {"letter": "c", "text": "Educación pública"},
            {"letter": "d", "text": "Investigación en marketing"}
        ],
        "correctAnswer": "c",
        "explanation": "Un sistema SEM integral incluye la educación pública como un pilar fundamental. Enseñar a la comunidad a reconocer emergencias, activar el sistema (llamando al número de emergencia) y realizar intervenciones básicas como RCP, convierte a los ciudadanos en el primer eslabón vital de la cadena de supervivencia."
    },
    {
        "question": "¿Cuál de estos NO es un nivel de capacitación de Proveedor de Atención Prehospitalaria (PAP)?",
        "options": [
            {"letter": "a", "text": "Técnico Básico en Urgencias"},
            {"letter": "b", "text": "Respondiente en Emergencias Médicas (REM)"},
            {"letter": "c", "text": "Técnico en Emergencias Médicas (TEM)"},
            {"letter": "d", "text": "Paramédico"}
        ],
        "correctAnswer": "a",
        "explanation": "Los niveles de certificación estándar comúnmente reconocidos son: Respondiente en Emergencias Médicas (REM o EMR), Técnico en Emergencias Médicas (TEM o EMT), TEM Avanzado (AEMT) y Paramédico. 'Técnico Básico en Urgencias' no corresponde a una de estas denominaciones estandarizadas."
    },
    {
        "question": "¿Cuál es una fuente de estrés común para el personal del SEM?",
        "options": [
            {"letter": "a", "text": "Jornadas cortas"},
            {"letter": "b", "text": "Altos salarios"},
            {"letter": "c", "text": "Turnos prolongados y eventos traumáticos"},
            {"letter": "d", "text": "Exceso de vacaciones"}
        ],
        "correctAnswer": "c",
        "explanation": "El personal del SEM está expuesto regularmente a situaciones de alto estrés, como eventos con múltiples víctimas, lesiones graves y la muerte. Combinado con turnos largos e irregulares, esto contribuye significativamente al estrés físico y emocional."
    },
    {
        "question": "¿Qué debe hacerse si los ojos fueron expuestos a fluidos corporales?",
        "options": [
            {"letter": "a", "text": "Cubrir los ojos con gasas"},
            {"letter": "b", "text": "Lavar con agua limpia por 20 minutos"},
            {"letter": "c", "text": "Aplicar alcohol en gel"},
            {"letter": "d", "text": "Ignorar la exposición"}
        ],
        "correctAnswer": "b",
        "explanation": "En caso de una exposición ocular a fluidos corporales o químicos, el tratamiento de emergencia es la irrigación inmediata y copiosa con agua limpia, solución salina o una estación de lavado de ojos durante al menos 20 minutos para diluir y eliminar el contaminante."
    },
    {
        "question": "¿Cuál de los siguientes es un ejemplo de prevención secundaria?",
        "options": [
            {"letter": "a", "text": "Provisión de inmovilización de la columna cervical"},
            {"letter": "b", "text": "Administración de vacunas"},
            {"letter": "c", "text": "Vigilar las lesiones"},
            {"letter": "d", "text": "Enseñar la seguridad en las escuelas"}
        ],
        "correctAnswer": "a",
        "explanation": "La prevención secundaria se enfoca en reducir el impacto de una enfermedad o lesión que ya ha ocurrido. La inmovilización espinal después de un trauma no previene la lesión inicial, pero sí ayuda a prevenir un daño mayor a la médula espinal."
    },
    {
        "question": "¿Cuál de las siguientes NO es una función o responsabilidad apropiada de un Proveedor de Atención Prehospitalaria (PAP)?",
        "options": [
            {"letter": "a", "text": "Realizar una evaluación del paciente."},
            {"letter": "b", "text": "Mantener los estándares médicos y legales."},
            {"letter": "c", "text": "Prestar asesoramiento jurídico a los pacientes."},
            {"letter": "d", "text": "Garantizar y proteger la privacidad del paciente."}
        ],
        "correctAnswer": "c",
        "explanation": "El rol de un PAP es estrictamente médico. Ofrecer asesoramiento legal está fuera de su ámbito de práctica y conocimientos. Su responsabilidad es proporcionar atención médica de emergencia y transportar al paciente de manera segura."
    },
    {
        "question": "Un ejemplo de trabajo en equipo y diplomacia es:",
        "options": [
            {"letter": "a", "text": "Usar su persona para proyectar un sentido de confianza."},
            {"letter": "b", "text": "Ser capaz de comunicarse mientras respeta al que escucha."},
            {"letter": "c", "text": "Colocar a otros en alta estima o importancia."},
            {"letter": "d", "text": "Delegar múltiples tareas garantizando eficiencia y seguridad."}
        ],
        "correctAnswer": "b",
        "explanation": "La diplomacia en el SEM implica comunicarse de manera clara, tranquila y respetuosa con pacientes, familiares y otros respondedores, incluso en situaciones tensas. Esto fomenta la cooperación y mejora el cuidado del paciente."
    },
    {
        "question": "La Health Insurance Portability and Accountability Act (HIPAA):",
        "options": [
            {"letter": "a", "text": "Permite a los pacientes viajar sin perder el seguro de salud."},
            {
                "letter": "b",
                "text": "Exige que las compañías de seguros justifiquen la negación de la atención médica."
            },
            {
                "letter": "c",
                "text": "Evita que un departamento de emergencias se niegue a atender a un paciente en condición crítica."
            },
            {"letter": "d", "text": "Limita la disponibilidad de la información médica del paciente."}
        ],
        "correctAnswer": "d",
        "explanation": "HIPAA es una ley federal de EE. UU. cuya principal función en el ámbito del cuidado de la salud es proteger la privacidad del paciente. Establece reglas estrictas sobre quién puede acceder y compartir la Información de Salud Protegida (PHI) de un paciente."
    },
    {
        "question": "¿Cuál es el principal enfoque de la prevención primaria en el SEM?",
        "options": [
            {"letter": "a", "text": "Reducir la gravedad de las lesiones existentes."},
            {"letter": "b", "text": "Evitar que los eventos ocurran en primer lugar."},
            {"letter": "c", "text": "Proporcionar tratamiento médico avanzado."},
            {"letter": "d", "text": "Rehabilitación de pacientes."}
        ],
        "correctAnswer": "b",
        "explanation": "La prevención primaria se centra en las estrategias que evitan que una lesión o enfermedad ocurra. Ejemplos incluyen campañas de vacunación, instalación de detectores de humo, clases de seguridad vial y programas de prevención de caídas."
    },
    {
        "question": "¿Qué significa la 'toma de decisiones con base en la evidencia' en el contexto del SEM?",
        "options": [
            {"letter": "a", "text": "Tomar decisiones basadas en la intuición personal."},
            {"letter": "b", "text": "Aplicar tratamientos basándose en las últimas investigaciones científicas."},
            {"letter": "c", "text": "Decidir el tratamiento según la experiencia de un colega."},
            {"letter": "d", "text": "Usar solo el equipo disponible sin considerar otras opciones."}
        ],
        "correctAnswer": "b",
        "explanation": "La práctica basada en la evidencia implica que las decisiones clínicas y los protocolos de tratamiento se basan en datos sólidos provenientes de la investigación científica, en lugar de basarse únicamente en la tradición, la anécdota o la intuición."
    },
    {
        "question": "¿Qué papel juega la 'recopilación de datos' en la investigación del SEM?",
        "options": [
            {"letter": "a", "text": "Permite adivinar los resultados."},
            {"letter": "b", "text": "Proporciona información para fundamentar las decisiones y mejorar los sistemas."},
            {"letter": "c", "text": "Es una tarea opcional que no afecta la calidad."},
            {"letter": "d", "text": "Sirve únicamente para fines administrativos."}
        ],
        "correctAnswer": "b",
        "explanation": "La recopilación precisa de datos en cada llamada (a través del informe de atención al paciente) es fundamental para la investigación. Estos datos agregados permiten identificar tendencias, evaluar la efectividad de los tratamientos y tomar decisiones informadas para mejorar la calidad del sistema SEM."
    },
    {
        "question": "¿Qué establece la Americans with Disabilities Act (ADA) en relación con el empleo como PAP?",
        "options": [
            {"letter": "a", "text": "Exige que todos los PAP sean físicamente capaces de levantar grandes pesos."},
            {"letter": "b", "text": "Prohíbe a las personas con discapacidades trabajar en el SEM."},
            {
                "letter": "c",
                "text": "Requiere que los empleadores hagan ajustes razonables para permitir que personas calificadas con discapacidades trabajen como PAP."
            },
            {"letter": "d", "text": "No tiene ninguna aplicación en el ámbito del SEM."}
        ],
        "correctAnswer": "c",
        "explanation": "La ADA es una ley de derechos civiles que prohíbe la discriminación contra personas con discapacidades. Exige que los empleadores proporcionen 'ajustes razonables' para los empleados calificados con discapacidades, siempre y cuando puedan realizar las funciones esenciales del trabajo."
    }
];

export const semSystemChallengingQuestions: Question[] = [
    {
        question: "Un sistema SEM rural experimenta un aumento del 40% en los tiempos de respuesta debido a la centralización de servicios hospitalarios. Los pacientes con infarto agudo deben ser transportados 90 minutos al centro de cardiología más cercano, excediendo significativamente la ventana terapéutica óptima. Como coordinador del sistema, ¿cuál es la estrategia más efectiva para mejorar los resultados de estos pacientes?",
        options: [
            {letter: "a", text: "Aumentar la velocidad de las ambulancias durante el transporte"},
            {
                letter: "b",
                text: "Implementar protocolos de fibrinólisis prehospitalaria con telemedicina y capacitación avanzada"
            },
            {letter: "c", text: "Solicitar que todos los pacientes cardíacos sean transportados por helicóptero"},
            {letter: "d", text: "Recomendar que los pacientes conduzcan directamente al hospital"}
        ],
        correctAnswer: "b",
        explanation: "En sistemas rurales con tiempos de transporte prolongados, la fibrinólisis prehospitalaria guiada por telemedicina puede ser crucial. Esta estrategia permite administrar tratamiento trombolítico dentro de la ventana terapéutica mientras se transporta al paciente, mejorando significativamente los resultados. Requiere protocolos específicos, capacitación avanzada, y supervisión médica remota."
    },
    {
        question: "Durante un desastre natural, el centro de comando del SEM debe coordinar 15 ambulancias, 3 hospitales con diferentes capacidades, y recursos de múltiples jurisdicciones. El hospital principal reporta que su departamento de emergencias está saturado, pero mantiene capacidad en UCI. El hospital secundario tiene capacidad de emergencias pero no UCI. Dos pacientes críticos requieren cuidados intensivos inmediatos. ¿Cuál es la estrategia de distribución más apropiada?",
        options: [
            {
                letter: "a",
                text: "Enviar ambos pacientes al hospital principal y esperar que liberen espacio en emergencias"
            },
            {
                letter: "b",
                text: "Estabilizar ambos pacientes en el hospital secundario y luego transferirlos al principal"
            },
            {
                letter: "c",
                text: "Enviar un paciente directamente a UCI del hospital principal y coordinar estabilización del segundo en el hospital secundario para transferencia posterior"
            },
            {
                letter: "d",
                text: "Transportar ambos pacientes al hospital más cercano independientemente de su capacidad"
            }
        ],
        correctAnswer: "c",
        explanation: "En situaciones de capacidad limitada, la estrategia óptima es maximizar el uso de recursos disponibles. Un paciente crítico puede ir directamente a UCI del hospital principal (evitando la saturación de emergencias), mientras el segundo se estabiliza en el hospital secundario para transferencia posterior una vez que haya capacidad. Esto optimiza el uso de recursos y mejora los tiempos de atención."
    },
    {
        question: "Un análisis de datos del sistema SEM revela que los paramédicos de una región específica tienen una tasa de ��xito de intubación del 65%, significativamente menor que el estándar nacional del 85%. Las complicaciones post-intubación también son más altas. Los supervisores argumentan que es debido a llamadas más difíciles en su área. ¿Cuál es el enfoque de mejora continua de calidad más apropiado?",
        options: [
            {letter: "a", text: "Aceptar las explicaciones de los supervisores sin investigación adicional"},
            {
                letter: "b",
                text: "Implementar un programa integral que incluya análisis de casos, simulación práctica, y mentoría con revisión prospectiva"
            },
            {letter: "c", text: "Prohibir la intubación prehospitalaria en esa región"},
            {letter: "d", text: "Reemplazar a todos los paramédicos de la región"}
        ],
        correctAnswer: "b",
        explanation: "La mejora continua de calidad requiere un enfoque sistemático y basado en evidencia. El programa debe incluir: análisis retrospectivo de casos fallidos, identificación de factores contribuyentes, entrenamiento dirigido con simulación, mentoría individualizada, y seguimiento prospectivo para medir mejora. Este enfoque multifacético aborda las causas fundamentales y proporciona apoyo educativo continuo."
    },
    {
        question: "El sistema de despacho recibe una llamada de un paciente de 45 años con dolor torácico severo. El despachador identifica signos de infarto agudo y debe coordinar la respuesta. La unidad BLS más cercana está a 4 minutos, la unidad ALS está a 12 minutos, y el hospital con capacidad de cateterismo está a 25 minutos. El protocolo regional permite encuentro de unidades. ¿Cuál es la estrategia de despacho más eficiente?",
        options: [
            {letter: "a", text: "Despachar solo la unidad ALS ya que puede manejar completamente el caso"},
            {
                letter: "b",
                text: "Despachar la unidad BLS para contacto inicial, con encuentro planificado con ALS en ruta al hospital"
            },
            {letter: "c", text: "Esperar hasta que la unidad ALS esté disponible para despachar"},
            {letter: "d", text: "Instruir al paciente para que conduzca al hospital más cercano"}
        ],
        correctAnswer: "b",
        explanation: "En casos de infarto agudo, el tiempo es músculo cardíaco. La estrategia óptima es contacto temprano (BLS a 4 min) para evaluación inicial, ECG y soporte básico, con encuentro coordinado con ALS para intervenciones avanzadas durante el transporte. Esto minimiza el tiempo total hasta el tratamiento definitivo y optimiza el uso de recursos del sistema."
    },
    {
        question: "Un programa de mejora de calidad identifica que los paramédicos están administrando naloxona correctamente, pero las tasas de re-narcotización durante el transporte son del 30%, significativamente altas. Los análisis revelan que los pacientes frecuentemente rechazan el transporte después de la reversión inicial. ¿Cuál es la modificación del protocolo más efectiva para mejorar los resultados?",
        options: [
            {letter: "a", text: "Aumentar la dosis inicial de naloxona para prevenir re-narcotización"},
            {
                letter: "b",
                text: "Implementar protocolos de evaluación de capacidad de decisión post-naloxona y educación del paciente sobre riesgos de rechazo"
            },
            {letter: "c", text: "Prohibir que los pacientes rechacen el transporte después de recibir naloxona"},
            {letter: "d", text: "Administrar múltiples dosis de naloxona preventivamente"}
        ],
        correctAnswer: "b",
        explanation: "La re-narcotización es común porque la naloxona tiene una vida media más corta que muchos opioides. El problema no es técnico sino de toma de decisiones del paciente. La solución integral incluye: evaluación cuidadosa de la capacidad de decisión post-reversión (ya que puede estar comprometida), educación sobre riesgos de re-narcotización, y protocolos claros para documentar estas conversaciones, balanceando la autonomía del paciente con la seguridad."
    },
    {
        question: "Durante la implementación de un nuevo protocolo de sepsis prehospitalaria, los datos iniciales muestran que solo el 40% de los casos identificados correctamente en el campo son confirmados como sepsis en el hospital. Sin embargo, los pacientes que recibieron el protocolo de sepsis tuvieron mejores resultados generales. ¿Cómo debe interpretar el sistema SEM estos resultados para la mejora continua?",
        options: [
            {letter: "a", text: "Discontinuar el protocolo debido a la baja especificidad diagnóstica"},
            {
                letter: "b",
                text: "Analizar si el protocolo está identificando efectivamente pacientes críticamente enfermos que se benefician de cuidados agresivos tempranos"
            },
            {letter: "c", text: "Aumentar los criterios diagnósticos para mejorar la especificidad"},
            {letter: "d", text: "Mantener el protocolo sin modificaciones ya que los resultados mejoraron"}
        ],
        correctAnswer: "b",
        explanation: "Esta situación ilustra la complejidad del diagnóstico prehospitalario. Una baja especificidad (muchos falsos positivos) no necesariamente indica falla del protocolo si los resultados mejoran. El protocolo puede estar identificando efectivamente pacientes con disfunción orgánica temprana que se benefician de reanimación agresiva, incluso si no todos tienen sepsis confirmada. La clave es analizar si los 'falsos positivos' realmente se beneficiaron del tratamiento."
    },
    {
        question: "Un sistema SEM urbano nota que las unidades están experimentando fatiga severa con turnos de 24 horas y un promedio de 12 llamadas por turno. Los análisis muestran aumento en errores médicos menores y tiempos de respuesta más largos durante las últimas 6 horas del turno. Los sindicatos se oponen a cambios en la estructura de turnos. ¿Cuál es la estrategia más efectiva para mejorar la seguridad del sistema?",
        options: [
            {letter: "a", text: "Ignorar el problema ya que los errores son menores"},
            {
                letter: "b",
                text: "Implementar un enfoque multifacético: períodos de descanso obligatorios, estaciones de relevos para llamadas no críticas, y monitoreo de fatiga"
            },
            {letter: "c", text: "Forzar cambios en los turnos sin negociación sindical"},
            {letter: "d", text: "Reducir el personal para que trabajen menos horas"}
        ],
        correctAnswer: "b",
        explanation: "La fatiga del personal es un problema de seguridad sistémico que requiere soluciones creativas cuando los cambios estructurales no son posibles. Las estrategias incluyen: períodos de descanso obligatorios durante turnos largos, estaciones de relevo donde personal descansado toma llamadas no críticas, monitoreo activo de signos de fatiga, y posiblemente unidades de supervisión que puedan asumir llamadas cuando las tripulaciones principales muestren fatiga crítica."
    },
    {
        question: "Los datos del sistema muestran que los tiempos de respuesta promedio han mejorado del 12 minutos a 8 minutos en el último año, pero las quejas de pacientes sobre la comunicación y trato han aumentado un 60%. Las encuestas revelan que las tripulaciones se sienten presionadas a 'correr' y tienen menos tiempo para interacciones de calidad con pacientes. ¿Cómo debe abordar el sistema este dilema de calidad?",
        options: [
            {letter: "a", text: "Priorizar los tiempos de respuesta ya que salvan más vidas"},
            {
                letter: "b",
                text: "Implementar métricas equilibradas que valoren tanto la eficiencia como la satisfacción del paciente, con entrenamiento en comunicación eficiente"
            },
            {letter: "c", text: "Volver a los tiempos de respuesta anteriores para mejorar la satisfacción"},
            {letter: "d", text: "Ignorar las quejas de los pacientes como secundarias"}
        ],
        correctAnswer: "b",
        explanation: "Este dilema ilustra la importancia de métricas equilibradas en el SEM. La solución requiere: 1) Reconocer que tanto la eficiencia como la experiencia del paciente son importantes, 2) Entrenar al personal en técnicas de comunicación eficiente que mantengan la calidad en menos tiempo, 3) Desarrollar métricas que capturen ambos aspectos, y 4) Identificar qué llamadas realmente requieren respuesta urgente vs. aquellas donde se puede invertir más tiempo en la interacción."
    },
    {
        question: "Un análisis de costo-efectividad revela que el 15% de las llamadas de emergencia son por problemas de salud mental que no requieren transporte médico, pero consumen el 35% de los recursos del sistema debido a tiempos prolongados en escena. Los hospitales locales no tienen recursos de psiquiatría de emergencia. ¿Cuál es la innovación del sistema más prometedora?",
        options: [
            {letter: "a", text: "Negarse a responder a llamadas de salud mental"},
            {
                letter: "b",
                text: "Desarrollar equipos especializados en crisis de salud mental con telemedicina psiquiátrica y conexiones a recursos comunitarios"
            },
            {letter: "c", text: "Transportar todos los pacientes psiquiátricos al hospital más cercano"},
            {letter: "d", text: "Instruir a los despachadores para que rechacen este tipo de llamadas"}
        ],
        correctAnswer: "b",
        explanation: "Esta situación requiere innovación en el modelo de atención. Los equipos especializados en crisis de salud mental pueden incluir: paramédicos con entrenamiento psiquiátrico adicional, trabajadores sociales, acceso a telemedicina psiquiátrica para evaluación remota, y conexiones directas a centros de crisis comunitarios. Esto proporciona atención más apropiada, reduce transportes innecesarios, y libera recursos tradicionales para emergencias médicas."
    },
    {
        question: "Un sistema SEM implementa un programa de 'paramedicina comunitaria' donde los paramédicos realizan visitas domiciliarias de seguimiento a pacientes de alto uso del sistema de emergencias. Después de un año, las visitas al departamento de emergencias de estos pacientes disminuyeron 45%, pero los costos operativos del programa son altos y algunos críticos argumentan que esto no es el rol tradicional del SEM. ¿Cómo debe evaluar el sistema el valor de este programa?",
        options: [
            {letter: "a", text: "Discontinuar el programa porque no es paramedicina tradicional"},
            {
                letter: "b",
                text: "Evaluar integralmente los resultados: reducción de costos del sistema de salud, mejoras en resultados de salud del paciente, y liberación de recursos de emergencia"
            },
            {letter: "c", text: "Continuar el programa solo si es rentable inmediatamente"},
            {letter: "d", text: "Expandir el programa sin evaluación adicional"}
        ],
        correctAnswer: "b",
        explanation: "Los programas de paramedicina comunitaria representan una evolución del rol tradicional del SEM hacia un modelo de atención más integral. La evaluación debe ser holística: impacto en resultados de salud del paciente, reducción de uso inapropiado de servicios de emergencia, costo-efectividad desde la perspectiva del sistema de salud completo, y satisfacción del paciente. Los ahorros pueden no ser inmediatos para el SEM pero pueden ser significativos para el sistema de salud general."
    }
];
