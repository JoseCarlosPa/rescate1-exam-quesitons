import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el SVB (Soporte Vital Básico)?",
        answer: "El SVB se refiere a las acciones y maniobras iniciales que se realizan para mantener la vida de una persona en situaciones de emergencia médica, como un paro cardíaco o respiratorio. Se enfoca en la reanimación cardiopulmonar (RCP) y el uso temprano de un desfibrilador externo automático (DEA), sin necesidad de equipos invasivos."
    },
    {
        question: "¿Cuáles son los componentes clave de la Cadena de Supervivencia de la AHA (American Heart Association)?",
        answer: "La Cadena de Supervivencia para adultos fuera del hospital consta de cinco eslabones: 1) Reconocimiento inmediato del paro cardíaco y activación del sistema de respuesta a emergencias, 2) RCP temprana de alta calidad, 3) Desfibrilación rápida, 4) Servicios de emergencias médicas avanzados y transporte, y 5) Cuidados post-paro cardíaco integrados."
    },
    {
        question: "¿Cuál es la profundidad y frecuencia recomendada para las compresiones torácicas en RCP en adultos?",
        answer: "Las compresiones torácicas en adultos deben tener una profundidad de al menos 5 cm (2 pulgadas) y no más de 6 cm (2.4 pulgadas). La frecuencia ideal es de 100 a 120 compresiones por minuto."
    },
    {
        question: "¿Por qué es crucial minimizar las interrupciones durante las compresiones torácicas?",
        answer: "Minimizar las interrupciones en las compresiones torácicas es fundamental para mantener una perfusión adecuada al cerebro y al corazón. Cada interrupción reduce la presión de perfusión coronaria, lo que disminuye la probabilidad de éxito de la reanimación."
    },
    {
        question: "¿Cuándo se debe usar un Desfibrilador Externo Automático (DEA)?",
        answer: "Un DEA debe usarse tan pronto como esté disponible en un paciente que se encuentre en paro cardíaco (inconsciente, sin respiración normal y sin pulso). La desfibrilación temprana es clave para revertir ritmos cardíacos letales como la fibrilación ventricular."
    },
    {
        question: "¿Cuál es la técnica preferida para abrir la vía aérea en un paciente adulto con sospecha de trauma cervical?",
        answer: "En un paciente adulto con sospecha de lesión en la columna cervical, la técnica preferida para abrir la vía aérea es la tracción mandibular (jaw thrust). Esta maniobra permite abrir la vía aérea con un movimiento mínimo del cuello."
    },
    {
        question: "¿Cuál es la relación compresión-ventilación para RCP de un solo reanimador en un adulto?",
        answer: "La relación compresión-ventilación para RCP de un solo reanimador en un adulto es de 30 compresiones por cada 2 ventilaciones."
    },
    {
        question: "¿Qué se debe hacer si el pecho del paciente está mojado antes de aplicar los parches del DEA?",
        answer: "Si el pecho del paciente está mojado, debe secarse rápidamente antes de colocar los parches del DEA para asegurar una buena conductividad eléctrica y la adherencia de los parches."
    },
    {
        question: "¿Qué es la posición de recuperación y cuándo se utiliza?",
        answer: "La posición de recuperación se utiliza para pacientes inconscientes que respiran normalmente y tienen pulso. Ayuda a mantener la vía aérea permeable y previene la aspiración de vómito. Se debe colocar al paciente de lado, con la cabeza apoyada en un brazo y una pierna flexionada para mayor estabilidad."
    },
];

export const svbQuestions: Question[] = [
    {
        question: "¿Cuál es la principal diferencia entre el Soporte Vital Básico (SVB) y el Soporte Vital Avanzado (SVA)?",
        options: [
            { letter: "a", text: "El SVB utiliza medicamentos inyectables, mientras que el SVA no." },
            { letter: "b", text: "El SVB se enfoca en maniobras no invasivas, mientras que el SVA incluye procedimientos invasivos y farmacología." },
            { letter: "c", text: "El SVB solo es realizado por personal médico, el SVA por paramédicos." },
            { letter: "d", text: "El SVA se realiza siempre antes del SVB." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es el primer paso crítico en la Cadena de Supervivencia de la AHA para un adulto en paro cardíaco fuera del hospital?",
        options: [
            { letter: "a", text: "Activación del sistema de respuesta a emergencias y RCP de alta calidad." },
            { letter: "b", text: "Desfibrilación rápida con un DEA." },
            { letter: "c", text: "Administración de medicamentos avanzados." },
            { letter: "d", text: "Transporte inmediato al hospital." },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la profundidad mínima y máxima recomendada para las compresiones torácicas en un adulto?",
        options: [
            { letter: "a", text: "Mínimo 3 cm, máximo 4 cm." },
            { letter: "b", text: "Mínimo 5 cm, máximo 6 cm." },
            { letter: "c", text: "Mínimo 4 cm, máximo 5 cm." },
            { letter: "d", text: "Mínimo 6 cm, máximo 7 cm." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la frecuencia de compresiones torácicas recomendada para RCP en adultos?",
        options: [
            { letter: "a", text: "60 a 80 compresiones por minuto." },
            { letter: "b", text: "80 a 100 compresiones por minuto." },
            { letter: "c", text: "100 a 120 compresiones por minuto." },
            { letter: "d", "text": "Más de 120 compresiones por minuto." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción se debe evitar durante la RCP para no reducir la efectividad de las compresiones torácicas?",
        options: [
            { letter: "a", text: "Permitir la descompresión completa del tórax después de cada compresión." },
            { letter: "b", text: "Realizar compresiones a una frecuencia constante." },
            { letter: "c", text: "Interrumpir las compresiones por más de 10 segundos para las ventilaciones o el DEA." },
            { letter: "d", text: "Aplicar compresiones en el centro del tórax." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuándo es apropiado activar el sistema de respuesta a emergencias (llamar al 911/número local) en un adulto con sospecha de paro cardíaco?",
        options: [
            { letter: "a", text: "Después de 5 minutos de RCP." },
            { letter: "b", text: "Inmediatamente después de determinar que el paciente no responde y no respira normalmente." },
            { letter: "c", text: "Solo si hay un DEA disponible." },
            { letter: "d", text: "Cuando el paciente presente distensión gástrica." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la relación compresión-ventilación para RCP de dos reanimadores en un niño?",
        options: [
            { letter: "a", text: "30:2" },
            { letter: "b", text: "15:2" },
            { letter: "c", text: "5:1" },
            { letter: "d", text: "10:1" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es lo primero que debe hacer un reanimador al encontrarse con una persona colapsada y aparentemente inconsciente?",
        options: [
            { letter: "a", text: "Iniciar inmediatamente las compresiones torácicas." },
            { letter: "b", text: "Buscar un DEA." },
            { letter: "c", text: "Verificar la seguridad de la escena y evaluar la respuesta del paciente." },
            { letter: "d", text: "Abrir la vía aérea y buscar signos de respiración." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué puede indicar la distensión gástrica durante la RCP y por qué es peligrosa?",
        options: [
            { letter: "a", text: "Indica una ventilación efectiva y es beneficiosa." },
            { letter: "b", text: "Es un signo de que el paciente está recuperando la consciencia." },
            { letter: "c", text: "Puede indicar una ventilación excesiva o inadecuada, aumentando el riesgo de regurgitación y aspiración pulmonar." },
            { letter: "d", text: "Significa que las compresiones torácicas no son lo suficientemente profundas." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuándo se debe reevaluar al paciente en cuanto al regreso de las respiraciones y/o circulación durante la RCP?",
        options: [
            { letter: "a", text: "Cada 5 minutos." },
            { letter: "b", text: "Cada 3 minutos." },
            { letter: "c", text: "Aproximadamente cada 2 minutos o después de 5 ciclos de RCP." },
            { letter: "d", text: "Solo cuando el DEA lo indique." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el pulso que se debe palpar para evaluar la circulación en un infante?",
        options: [
            { letter: "a", text: "Carótida." },
            { letter: "b", text: "Radial." },
            { letter: "c", text: "Braquial." },
            { letter: "d", text: "Femoral." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el método preferido de remoción de un cuerpo extraño en un niño sin capacidad de respuesta y sin pulso?",
        options: [
            { letter: "a", text: "Palmadas en la espalda." },
            { letter: "b", text: "Compresiones abdominales." },
            { letter: "c", text: "Compresiones torácicas." },
            { letter: "d", text: "Remoción manual a ciegas." },
        ],
        correctAnswer: "c",
    }
];
export const svbChallengeQuestions: Question[] = [
    {
        question: "Durante la reanimación de un adulto en paro cardíaco, después de 8 minutos de RCP de alta calidad, el DEA indica 'shock no recomendado' pero el paciente permanece sin pulso. Al evaluar el ritmo en el monitor, observa actividad eléctrica organizada a 45 lpm sin pulso palpable. ¿Cuál es la interpretación más crítica y el manejo subsecuente?",
        options: [
            { letter: "a", text: "Continuar RCP sin modificaciones ya que el DEA no recomienda shock" },
            { letter: "b", text: "Actividad eléctrica sin pulso (AESP) - evaluar y tratar causas reversibles (5H y 5T), continuar RCP de alta calidad, considerar que el pronóstico empeora significativamente después de 10 minutos" },
            { letter: "c", text: "Suspender RCP ya que el paciente tiene actividad cardíaca" },
            { letter: "d", text: "Aumentar la frecuencia de compresiones a 140 por minuto" }
        ],
        correctAnswer: "b",
        explanation: "La AESP es un ritmo no desfibrilable con mal pronóstico que requiere identificación y tratamiento de causas reversibles: 5H (Hipoxia, Hipovolemia, Hidrogeniones-acidosis, Hipo/hiperkalemia, Hipotermia) y 5T (Toxinas, Taponamiento cardíaco, Neumotórax a Tensión, Trombosis coronaria, Trombosis pulmonar). La RCP debe continuar con calidad óptima mientras se buscan causas tratables. El pronóstico se deteriora significativamente después de 10 minutos sin retorno de circulación espontánea."
    },
    {
        question: "Un paciente de 45 años colapsa durante ejercicio intenso. Al llegar, está inconsciente, sin respiración normal, pero con movimientos agonales ocasionales cada 8-10 segundos. Su pulso carotídeo es débil e irregular. Los testigos reportan que 'convulsionó' por 30 segundos antes de colapsar. ¿Cuál es la interpretación más apropiada y el manejo inicial?",
        options: [
            { letter: "a", text: "Manejar como convulsión - posición lateral de seguridad" },
            { letter: "b", text: "Los movimientos agonales y 'convulsión' inicial sugieren paro cardíaco; iniciar RCP inmediatamente y preparar DEA, ya que las convulsiones pueden ser la manifestación inicial de fibrilación ventricular" },
            { letter: "c", text: "Esperar a que cesen los movimientos antes de evaluar" },
            { letter: "d", text: "El pulso presente indica que no necesita RCP" }
        ],
        correctAnswer: "b",
        explanation: "Esta presentación es clásica de paro cardíaco súbito: 1) Las 'convulsiones' al inicio son frecuentemente la manifestación de fibrilación ventricular por hipoxia cerebral aguda, 2) Los movimientos agonales son respiraciones reflejas terminales, NO respiración efectiva, 3) El pulso 'débil e irregular' probablemente representa fibrilación ventricular palpada como actividad mecánica residual, 4) El contexto (ejercicio intenso, colapso súbito) sugiere evento cardíaco primario. La RCP debe iniciarse inmediatamente sin demora."
    },
    {
        question: "Durante RCP en un paciente de 70 kg, está realizando compresiones a 6 cm de profundidad y 110 por minuto con descompresión completa. Después de 6 minutos, la saturación de oxígeno del paciente (medida por oxímetro) muestra 95%, pero no hay retorno de circulación espontánea. ¿Cuál es la interpretación más crítica de estos hallazgos?",
        options: [
            { letter: "a", text: "La RCP es perfecta - continuar sin cambios" },
            { letter: "b", text: "La oximetría durante paro cardíaco puede ser falsamente elevada debido a bajo flujo; la profundidad de 6 cm puede ser excesiva causando lesiones; enfocar en calidad de compresiones óptima (5-6 cm máximo)" },
            { letter: "c", text: "Aumentar profundidad a 7 cm para mejor perfusión" },
            { letter: "d", text: "La saturación alta indica que el paciente no necesita ventilaciones" }
        ],
        correctAnswer: "b",
        explanation: "Varios conceptos críticos: 1) Durante paro cardíaco, la oximetría puede ser falsamente elevada debido a bajo flujo sanguíneo y pooling venoso, 2) Compresiones >6 cm aumentan riesgo de lesiones (fracturas costales, neumotórax, lesión hepática) sin beneficio adicional, 3) La ausencia de retorno de circulación después de 6 minutos requiere evaluación de calidad de RCP y consideración de causas reversibles, 4) El objetivo es optimizar perfusión coronaria (presión de perfusión coronaria) con compresiones de calidad técnica perfecta."
    },
    {
        question: "Un lactante de 8 meses se encuentra inconsciente y cianótico después de que su hermano de 4 años reportó que 'se tragó algo pequeño'. No respira, no hay pulso braquial palpable. Al abrir la boca, no visualiza cuerpo extraño. ¿Cuál es la secuencia de manejo más apropiada?",
        options: [
            { letter: "a", text: "Realizar barrido digital para buscar el objeto" },
            { letter: "b", text: "Iniciar inmediatamente RCP con compresiones torácicas - las compresiones pueden desalojar el objeto y son más efectivas que maniobras específicas en paciente inconsciente" },
            { letter: "c", text: "Realizar solo golpes en la espalda hasta desalojar el objeto" },
            { letter: "d", text: "Intentar ventilaciones de rescate primero" }
        ],
        correctAnswer: "b",
        explanation: "En lactante inconsciente con obstrucción de cuerpo extraño y paro cardíaco: 1) Las compresiones torácicas son más efectivas que golpes en espalda o compresiones abdominales para generar presión intratorácica y desalojar objetos, 2) Nunca realizar barrido digital a ciegas en niños (puede empujar el objeto más profundo), 3) La RCP debe iniciarse inmediatamente ya que el lactante está en paro cardíaco confirmado, 4) Las compresiones pueden simultaneamente intentar desalojar el objeto y proporcionar circulación artificial. Reevaluar vía aérea antes de cada ventilación."
    },
    {
        question: "Un hombre de 55 años en paro cardíaco recibe RCP. Después del tercer shock del DEA, recupera pulso con FC 45 lpm y PA 70/40 mmHg. Está inconsciente pero respira espontáneamente a 10 por minuto con saturación del 88%. ¿Cuál es el manejo post-reanimación más crítico?",
        options: [
            { letter: "a", text: "Suspender toda intervención ya que hay retorno de circulación espontánea" },
            { letter: "b", text: "Síndrome post-paro cardíaco - optimizar oxigenación (objetivo SatO2 94-98%), soporte hemodinámico si es necesario, preparar para hipotermia terapéutica, transporte urgente" },
            { letter: "c", text: "Reiniciar RCP inmediatamente por bradicardia severa" },
            { letter: "d", text: "Administrar ox��geno al 100% para maximizar saturación" }
        ],
        correctAnswer: "b",
        explanation: "El síndrome post-paro cardíaco requiere manejo especializado: 1) Optimización de oxigenación (SatO2 94-98% para evitar hiperoxia que puede empeorar lesión cerebral), 2) Soporte hemodinámico si PA sistólica <90 mmHg, 3) Preparación para hipotermia terapéutica (32-36°C por 12-24 horas) para neuroprotección, 4) Transporte a centro con capacidad de cuidados post-paro, 5) Monitoreo continuo ya que puede haber re-paro. La bradicardia y hipotensión son comunes post-reanimación y no indican necesariamente reinicio de RCP si hay pulso."
    },
    {
        question: "Durante RCP de dos rescatistas en un niño de 6 años, su compañero está realizando ventilaciones que causan elevación torácica visible, pero nota que el estómago se está distendiendo progresivamente. ¿Cuál es la implicación más importante y el manejo correcto?",
        options: [
            { letter: "a", text: "La distensión gástrica es normal y no afecta la RCP" },
            { letter: "b", text: "Indica ventilación excesiva o vía aérea inadecuada; aumenta riesgo de regurgitación y compromete retorno venoso. Ajustar técnica: volúmenes menores, inflación más lenta, verificar posición de cabeza" },
            { letter: "c", text: "Realizar presión abdominal para vaciar el estómago" },
            { letter: "d", text: "Cambiar inmediatamente la relación a 30:2" }
        ],
        correctAnswer: "b",
        explanation: "La distensión gástrica durante RCP pediátrica es problemática: 1) Indica ventilación excesiva (presión alta, volumen excesivo, o inflación muy rápida), 2) El estómago distendido eleva el diafragma, reduce expansión pulmonar, y compromete retorno venoso, 3) Aumenta riesgo de regurgitación y aspiración, 4) Manejo: reducir volumen tidal, inflar más lentamente (1 segundo), verificar posición de vía aérea, 5) NUNCA comprimir abdomen durante RCP activa (riesgo de aspiración). La relación 15:2 es correcta para dos rescatistas en pediatría."
    },
    {
        question: "Un paciente de 65 años con marcapaso implantado presenta paro cardíaco. El DEA detecta ritmo desfibrilable, pero está preocupado por la presencia del dispositivo. ¿Cuál es el manejo más apropiado considerando el marcapaso?",
        options: [
            { letter: "a", text: "No usar DEA por riesgo de dañar el marcapaso" },
            { letter: "b", text: "Colocar parches al menos 8 cm del marcapaso, proceder con desfibrilación ya que los beneficios superan los riesgos. El marcapaso puede evaluarse posteriormente" },
            { letter: "c", text: "Usar solo RCP sin desfibrilación" },
            { letter: "d", text: "Esperar a personal médico especializado" }
        ],
        correctAnswer: "b",
        explanation: "Los dispositivos implantados no contraindican desfibrilación en paro cardíaco: 1) Colocar parches a >8 cm del dispositivo visible (generalmente subclavicular izquierdo), 2) La desfibrilación es crítica para supervivencia - no debe retrasarse, 3) Los marcapasos modernos están protegidos contra interferencia, 4) Posible daño al dispositivo es irrelevante comparado con salvar la vida, 5) El dispositivo puede evaluarse y reprogramarse posteriormente si es necesario. El posicionamiento alternativo de parches (anterior-posterior) puede considerarse si el dispositivo interfiere."
    },
    {
        question: "Un adolescente de 16 años colapsa durante práctica deportiva. Los testigos reportan que 'respiraba raro' por 2 minutos antes de colapsar completamente. Al evaluar: inconsciente, sin respiración, pulso carotídeo ausente. El DEA se está preparando. ¿Qué consideración es más importante sobre la causa probable y el pronóstico?",
        options: [
            { letter: "a", text: "Probable sobredosis - el pronóstico depende del antídoto" },
            { letter: "b", text: "Probable paro cardíaco primario (miocardiopatía hipertrófica, displasia arritmogénica) - el pronóstico es mejor si la desfibrilación se realiza dentro de 3-5 minutos del colapso" },
            { letter: "c", text: "Probable crisis asmática - necesita broncodilatadores" },
            { letter: "d", text: "El 'respirar raro' indica que no está en paro cardíaco" }
        ],
        correctAnswer: "b",
        explanation: "El paro cardíaco súbito en atletas jóvenes tiene características específicas: 1) Causas comunes: miocardiopatía hipertrófica, displasia arritmogénica del ventrículo derecho, síndrome QT largo, 2) La 'respiración rara' inicial representa respiraciones agonales antes del paro completo, 3) El pronóstico neurológico óptimo requiere desfibrilación dentro de 3-5 minutos del colapso, 4) Los atletas jóvenes tienen mejor reserva cardiovascular y potencial de recuperación si se trata rápidamente, 5) La RCP inmediata y desfibrilación temprana son críticas."
    },
    {
        question: "Una mujer embarazada de 34 semanas presenta paro cardíaco tras accidente vehicular. Durante RCP, nota que las compresiones son menos efectivas en posición supina. ¿Cuál es la modificación técnica más importante?",
        options: [
            { letter: "a", text: "Realizar RCP en posición completamente lateral" },
            { letter: "b", text: "Desplazamiento uterino manual hacia la izquierda durante compresiones, o inclinar todo el cuerpo 15-30° hacia la izquierda para aliviar compresión aortocava" },
            { letter: "c", text: "Usar solo ventilaciones sin compresiones" },
            { letter: "d", text: "Realizar cesárea inmediata en el campo" }
        ],
        correctAnswer: "b",
        explanation: "La RCP en embarazadas >20 semanas requiere modificación por compresión aortocava: 1) El útero grávido comprime vena cava inferior y aorta en posición supina, reduciendo retorno venoso y gasto cardíaco, 2) Soluciones: desplazamiento uterino manual izquierdo durante compresiones, o inclinar tabla/camilla 15-30° hacia izquierda, 3) Mantener compresiones de calidad mientras se alivia compresión, 4) Considerar cesárea perimortem si >24 semanas y no hay retorno de circulación en 4 minutos, pero esto requiere personal especializado. El desplazamiento uterino puede mejorar significativamente la efectividad de RCP."
    },
    {
        question: "Un paciente de 80 años con múltiples comorbilidades está en paro cardíaco. Después de 20 minutos de RCP de alta calidad y múltiples shocks, no hay retorno de circulación espontánea. La familia pregunta sobre continuar o suspender los esfuerzos. ¿Cuáles son las consideraciones éticas y clínicas más importantes?",
        options: [
            { letter: "a", text: "Continuar RCP indefinidamente hasta que llegue al hospital" },
            { letter: "b", text: "La decisión debe basarse en: factores pronósticos (tiempo sin reanimación, comorbilidades, calidad de RCP), directivas anticipadas del paciente, y consideraciones de futilidad médica vs autonomía familiar" },
            { letter: "c", text: "Suspender inmediatamente ya que 20 minutos es demasiado tiempo" },
            { letter: "d", text: "Solo el médico del hospital puede tomar esta decisión" }
        ],
        correctAnswer: "b",
        explanation: "La terminación de RCP requiere consideración multifactorial: 1) Factores pronósticos: tiempo de paro sin testigos, tiempo hasta RCP, edad, comorbilidades, ritmo inicial, respuesta a tratamiento, 2) Consideraciones éticas: directivas anticipadas del paciente, deseos expresados previamente, calidad de vida previa, 3) Factores prácticos: calidad de RCP proporcionada, causas reversibles evaluadas, recursos disponibles, 4) En algunos sistemas, existen protocolos de terminación prehospitalaria basados en criterios objetivos, 5) La comunicación empática con la familia sobre pronóstico y futilidad es esencial."
    }
];
