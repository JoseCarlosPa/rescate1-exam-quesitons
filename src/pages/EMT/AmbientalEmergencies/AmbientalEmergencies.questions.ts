import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuáles son las cinco formas en que el cuerpo pierde calor?",
        answer: "El cuerpo pierde calor a través de conducción (contacto directo), convección (aire circulante), evaporación (sudor), radiación (hacia objetos más fríos) y respiración (exhalar aire caliente). "
    },
    {
        question: "¿Cuál es la diferencia principal entre el agotamiento por calor y el golpe de calor?",
        answer: "El agotamiento por calor es causado por deshidratación y se presenta con piel fría, húmeda y pálida, y debilidad.  El golpe de calor es una emergencia que pone en riesgo la vida, donde los mecanismos de enfriamiento fallan, resultando en una temperatura corporal muy alta, estado mental alterado, y piel que puede estar caliente y seca o húmeda. "
    },
    {
        question: "¿A qué temperatura corporal se diagnostica la hipotermia?",
        answer: "Se diagnostica hipotermia cuando la temperatura central del cuerpo desciende por debajo de 35°C (95°F). "
    },
    {
        question: "¿Qué es la 'clasificación inversa' en un incidente con múltiples víctimas por un rayo?",
        answer: "Es un proceso donde los esfuerzos se centran primero en las víctimas que están en paro respiratorio o cardíaco, ya que tienen mayor probabilidad de sobrevivir si se les atiende de inmediato, a diferencia de los protocolos de clasificación convencionales. "
    },
    {
        question: "¿Cuáles son las dos arañas de importancia médica en Estados Unidos mencionadas en el texto?",
        answer: "La araña viuda negra hembra y la araña reclusa parda. "
    },
    {
        question: "¿Cómo se debe tratar la picadura de una medusa o fragata portuguesa?",
        answer: "Retirar al paciente del agua, raspar los tentáculos restantes con un objeto de borde duro (como una tarjeta de crédito) sin usar las manos descubiertas, y considerar la inmersión en agua caliente o vinagre. "
    },
    {
        question: "¿Cuál es la diferencia clave entre una embolia aérea y la enfermedad por descompresión en el buceo?",
        answer: "La embolia aérea ocurre de manera inmediata al retornar a la superficie tras un ascenso rápido.  Los síntomas de la enfermedad por descompresión (enfermedad del buzo) pueden no aparecer hasta varias horas después del buceo. "
    },
];

export const environmentalEmergencyQuestions: Question[] = [
    {
        "question": "Usted atiende a un paciente con sospecha de golpe de calor. ¿Cuál de los siguientes hallazgos es el signo MÁS característico de esta condición?",
        "options": [
            {"letter": "a", "text": "Calambres musculares en las piernas"},
            {"letter": "b", "text": "Piel pálida, fría y húmeda"},
            {"letter": "c", "text": "Alteración del estado mental"},
            {"letter": "d", "text": "Pulso lento y débil"}
        ],
        "correctAnswer": "c",
        "explanation": "El golpe de calor es la emergencia por calor más grave y se define por una disfunción del sistema nervioso central. La alteración del estado mental (confusión, delirio, convulsiones o coma) es el signo distintivo que lo diferencia del agotamiento por calor. La piel suele estar caliente y seca, pero puede estar húmeda."
    },
    {
        "question": "La hipotermia se diagnostica cuando la temperatura corporal central desciende por debajo de:",
        "options": [
            {"letter": "a", "text": "36.7 °C (98 °F)"},
            {"letter": "b", "text": "35 °C (95 °F)"},
            {"letter": "c", "text": "32.2 °C (90 °F)"},
            {"letter": "d", "text": "29.4 °C (85 °F)"}
        ],
        "correctAnswer": "b",
        "explanation": "Clínicamente, la hipotermia se define como una temperatura corporal central inferior a 35 °C (95 °F). Por debajo de este umbral, los mecanismos de compensación del cuerpo (como los escalofríos) comienzan a fallar, llevando a un deterioro progresivo de las funciones fisiológicas."
    },
    {
        "question": "¿Cuál es el tratamiento de emergencia inicial recomendado para una mordedura de serpiente de foseta (crotalina)?",
        "options": [
            {"letter": "a", "text": "Aplicar un torniquete por encima de la mordedura"},
            {
                "letter": "b",
                "text": "Calmar al paciente, limpiar la herida y mantener la extremidad por debajo del nivel del corazón"
            },
            {"letter": "c", "text": "Realizar una incisión sobre la mordedura y succionar el veneno"},
            {"letter": "d", "text": "Aplicar hielo directamente sobre la herida para neutralizar el veneno"}
        ],
        "correctAnswer": "b",
        "explanation": "El manejo prehospitalario correcto se enfoca en retrasar la absorción sistémica del veneno. Calmar al paciente reduce la circulación, y mantener la extremidad en una posición neutra o por debajo del corazón utiliza la gravedad para el mismo fin. Los torniquetes, la incisión/succión y el hielo son medidas contraindicadas que pueden causar más daño tisular."
    },
    {
        "question": "Un paciente es mordido por una araña reclusa parda. ¿Qué manifestación local es característica de esta mordedura?",
        "options": [
            {"letter": "a", "text": "Espasmos musculares intensos y rigidez abdominal"},
            {"letter": "b", "text": "Una lesión que se vuelve entumecida inmediatamente"},
            {"letter": "c", "text": "Una úlcera necrótica que se desarrolla días después de la mordedura"},
            {"letter": "d", "text": "Parálisis del sistema nervioso y dificultad para respirar"}
        ],
        "correctAnswer": "c",
        "explanation": "El veneno de la reclusa parda es citotóxico, lo que significa que destruye el tejido. La mordedura inicialmente puede ser indolora, pero en los días siguientes evoluciona a una lesión con un centro oscuro o violáceo que forma una úlcera necrótica. Los espasmos musculares son característicos de la mordedura de viuda negra."
    },
    {
        "question": "Al tratar a un paciente con congelación profunda en una extremidad, ¿cuál de las siguientes acciones está CONTRAINDICADA en el campo?",
        "options": [
            {"letter": "a", "text": "Retirar la ropa húmeda y las joyas"},
            {"letter": "b", "text": "Cubrir la parte afectada con un apósito estéril y seco"},
            {"letter": "c", "text": "Frotar o masajear la zona congelada para restablecer la circulación"},
            {"letter": "d", "text": "Inmovilizar la extremidad para prevenir más lesiones"}
        ],
        "correctAnswer": "c",
        "explanation": "Frotar o masajear el tejido congelado está absolutamente contraindicado. Los cristales de hielo dentro de las células pueden causar un daño mecánico severo a los tejidos si se manipulan. El tratamiento correcto implica proteger la zona, retirar la ropa restrictiva y evitar el recalentamiento hasta llegar a un centro médico."
    },
    {
        "question": "La emergencia de buceo más peligrosa y frecuente, causada por sostener la respiración durante un ascenso rápido, es:",
        "options": [
            {"letter": "a", "text": "Enfermedad por descompresión"},
            {"letter": "b", "text": "Embolia aérea"},
            {"letter": "c", "text": "Narcosis por nitrógeno"},
            {"letter": "d", "text": "Barotrauma de oído"}
        ],
        "correctAnswer": "b",
        "explanation": "Al ascender, el aire en los pulmones se expande. Si un buzo contiene la respiración, la presión puede romper los alvéolos, forzando burbujas de aire a la circulación arterial (embolia gaseosa arterial). Estas burbujas pueden viajar al cerebro o al corazón, causando un evento similar a un ictus o un infarto, siendo una emergencia inmediata."
    },
    {
        "question": "Atiende a una víctima de ahogamiento que ha sido rescatada del agua. Se sospecha una lesión de columna vertebral. ¿Cuál es el paso prioritario?",
        "options": [
            {"letter": "a", "text": "Retirar toda la ropa mojada inmediatamente"},
            {"letter": "b", "text": "Estabilizar la columna vertebral mientras la víctima todavía está en el agua"},
            {"letter": "c", "text": "Realizar compresiones abdominales para sacar el agua de los pulmones"},
            {"letter": "d", "text": "Esperar a que llegue el equipo especializado para sacarla del agua"}
        ],
        "correctAnswer": "b",
        "explanation": "La máxima prioridad es 'primero no hacer más daño'. Si hay sospecha de lesión espinal (ej. por un clavado en aguas poco profundas), se debe aplicar la estabilización manual en línea de la cabeza y el cuello antes de cualquier movimiento, incluyendo la extracción del agua. Esto previene que una posible fractura vertebral lesione la médula espinal."
    },
    {
        "question": "La regla mnemotécnica 'rojo sobre amarillo matará a un amigo' ayuda a identificar a cuál de las siguientes serpientes venenosas:",
        "options": [
            {"letter": "a", "text": "Serpiente de cascabel"},
            {"letter": "b", "text": "Boca de algodón (mocasín de agua)"},
            {"letter": "c", "text": "Cabeza de cobre"},
            {"letter": "d", "text": "Serpiente de coral"}
        ],
        "correctAnswer": "d",
        "explanation": "Esta rima popular (con sus variantes) se usa para diferenciar a la venenosa serpiente de coral de sus imitadoras no venenosas, como la falsa coral o la serpiente rey. En la serpiente de coral verdadera, las bandas de color rojo y amarillo se tocan. En las no venenosas, las bandas rojas y negras se tocan."
    },
    {
        "question": "La pérdida de calor corporal causada por el movimiento del aire sobre la piel se conoce como:",
        "options": [
            {"letter": "a", "text": "Conducción"},
            {"letter": "b", "text": "Convección"},
            {"letter": "c", "text": "Radiación"},
            {"letter": "d", "text": "Evaporación"}
        ],
        "correctAnswer": "b",
        "explanation": "La convección es la transferencia de calor a un fluido en movimiento (líquido o gas). Cuando el viento sopla, se lleva el calor de la capa de aire cercana a la piel, acelerando la pérdida de calor corporal. Es el principio detrás del 'factor de sensación térmica' o 'wind chill'."
    },
    {
        "question": "Un paciente que presenta una reacción alérgica grave (anafilaxia) a una picadura de abeja debe ser tratado prioritariamente con:",
        "options": [
            {"letter": "a", "text": "Oxígeno y transporte rápido"},
            {"letter": "b", "text": "Aplicación de compresas frías en el sitio de la picadura"},
            {"letter": "c", "text": "Asistencia con la administración de un autoinyector de epinefrina"},
            {"letter": "d", "text": "Administración de líquidos por vía oral"}
        ],
        "correctAnswer": "c",
        "explanation": "En la anafilaxia, la prioridad absoluta es revertir la broncoconstricción y la vasodilatación que amenazan la vida. La epinefrina es el único medicamento que logra esto de manera rápida y efectiva. Si el paciente tiene un autoinyector prescrito, la asistencia para su administración es el tratamiento de primera línea."
    },
    {
        "question": "¿Cuál es el principio fundamental al tratar a un paciente con hipotermia severa que parece no tener pulso?",
        "options": [
            {"letter": "a", "text": "Asumir que está muerto y no iniciar RCP"},
            {"letter": "b", "text": "Realizar solo compresiones torácicas sin ventilaciones"},
            {"letter": "c", "text": "No considerar al paciente muerto hasta que esté 'tibio y muerto'"},
            {"letter": "d", "text": "Enfriar activamente al paciente para preservar el cerebro"}
        ],
        "correctAnswer": "c",
        "explanation": "La hipotermia severa deprime drásticamente las funciones vitales, pudiendo hacer que el pulso y la respiración sean indetectables. Sin embargo, el frío extremo tiene un efecto protector sobre el cerebro. Por ello, se debe iniciar la reanimación y continuarla hasta que el paciente sea recalentado en un hospital. Muchos pacientes que parecían muertos han sido resucitados exitosamente."
    },
    {
        "question": "Un paciente que sufre de calambres por calor después de ejercitarse debe ser tratado inicialmente mediante:",
        "options": [
            {"letter": "a", "text": "Transporte inmediato al hospital"},
            {"letter": "b", "text": "Administración de comprimidos de sal"},
            {
                "letter": "c",
                "text": "Retirarlo del ambiente cálido, poner en reposo los músculos y reponer líquidos por vía oral"
            },
            {"letter": "d", "text": "Sumergirlo en un baño de agua helada"}
        ],
        "correctAnswer": "c",
        "explanation": "Los calambres por calor son la emergencia por calor menos grave, causada por la pérdida de agua y electrolitos. El tratamiento inicial consiste en detener la actividad, mover al paciente a un lugar fresco, realizar estiramientos suaves en los músculos afectados y comenzar la rehidratación oral, preferiblemente con una bebida deportiva que contenga electrolitos."
    }
];

export const environmentalEmergencyChallengeQuestions: Question[] = [
    {
        "question": "Encuentra a un paciente de 58 años inmóvil en la nieve, con temperatura central estimada de 26 °C (79 °F). No detecta pulso carotídeo tras 45 segundos de palpación, no hay movimientos respiratorios visibles y el monitor cardíaco muestra ondas de Osborn con un ritmo muy lento e irregular. El paciente tiene rigidez articular por el frío pero no hay livor mortis ni rigor mortis evidentes. Un compañero sugiere recalentarlo de inmediato frotando vigorosamente sus extremidades y aplicando paquetes de calor en brazos y piernas antes de decidir si se inicia RCP. ¿Cuál es la conducta MÁS apropiada y por qué la sugerencia del compañero es peligrosa?",
        "options": [
            {"letter": "a", "text": "Declarar la muerte, ya que la ausencia de pulso y respiración por más de 30 segundos confirma un paro cardíaco irreversible; el recalentamiento periférico sugerido por el compañero no cambiaría el desenlace"},
            {
                "letter": "b",
                "text": "Iniciar RCP y ventilaciones de inmediato, manejar al paciente con el mayor cuidado posible evitando movimientos bruscos, y transportarlo a un centro con capacidad de recalentamiento extracorpóreo, sin recalentar las extremidades en el campo; la hipotermia profunda puede simular la muerte clínica y el miocardio frío es extremadamente irritable, por lo que recalentar primero la periferia provocaría un 'afterdrop' con retorno de sangre fría, ácida y rica en potasio hacia el corazón, precipitando fibrilación ventricular"
            },
            {"letter": "c", "text": "Aplicar desfibrilación inmediata hasta tres veces y luego frotar las extremidades para acelerar la circulación, ya que la asistolia en hipotermia responde mejor a la descarga temprana combinada con recalentamiento periférico"},
            {"letter": "d", "text": "Seguir la sugerencia del compañero y recalentar agresivamente las extremidades en el campo con paquetes de calor antes de decidir si se inicia RCP, ya que restablecer la temperatura corporal es la prioridad inicial"}
        ],
        "correctAnswer": "b",
        "explanation": "En hipotermia profunda, el metabolismo cerebral y cardíaco se enlentece drásticamente, permitiendo que un paciente sobreviva sin daño neurológico pese a periodos prolongados sin pulso detectable; por ello el principio es que el paciente no está muerto hasta que esté 'tibio y muerto' y se debe verificar el pulso durante 30 a 45 segundos antes de asumir un paro. El miocardio hipotérmico es hiperexcitable y propenso a fibrilación ventricular ante manipulación brusca o movimientos innecesarios, por lo que todo el manejo (extracción, traslado, vía aérea) debe realizarse con extremo cuidado y suavidad. Frotar o calentar primero las extremidades es especialmente peligroso porque la vasoconstricción periférica atrapa sangre fría, ácida y rica en potasio en los brazos y piernas; al vasodilatar esa zona antes que el tronco, esa sangre regresa súbitamente a la circulación central (fenómeno de 'afterdrop' o 'shock por recalentamiento'), alterando el equilibrio ácido-base y electrolítico de un corazón ya hiperexcitable y desencadenando fibrilación ventricular, la principal causa de muerte súbita durante el recalentamiento. Por ello, las guías recomiendan iniciar reanimación con manejo delicado, recalentamiento pasivo o activo únicamente en el tronco, y traslado a un centro con capacidad de recalentamiento controlado, idealmente extracorpóreo, evitando la desfibrilación repetida y el recalentamiento periférico en el campo."
    },
    {
        "question": "Un trabajador de la construcción de 45 años es encontrado confundido, con lenguaje incoherente y marcha inestable después de trabajar varias horas bajo el sol en un día caluroso y húmedo. Su piel está caliente y seca al tacto, su frecuencia cardíaca es de 130/min y su presión arterial es de 88/50 mmHg. Un compañero afirma que 'solo necesita agua y sombra, como los calambres de la semana pasada'. ¿Cuál es la valoración correcta y la razón fisiopatológica que la sustenta?",
        "options": [
            {"letter": "a", "text": "Es agotamiento por calor típico; basta con hidratación oral y reposo en la sombra, ya que la piel caliente y seca es normal en esta condición"},
            {"letter": "b", "text": "Es un golpe de calor; la alteración del estado mental indica que los mecanismos termorregulatorios centrales han fallado, y requiere enfriamiento activo agresivo, oxígeno y transporte inmediato, ya que puede progresar a daño multiorgánico e hipertermia refractaria"},
            {"letter": "c", "text": "Es un cuadro psiquiátrico agudo no relacionado con el calor, por lo que la prioridad es la restricción física y la evaluación neurológica antes de cualquier enfriamiento"},
            {"letter": "d", "text": "Es hipoglucemia inducida por el esfuerzo; se debe administrar glucosa oral antes de considerar cualquier otra intervención"}
        ],
        "correctAnswer": "b",
        "explanation": "La alteración del estado mental (confusión, lenguaje incoherente, marcha inestable) en el contexto de exposición prolongada al calor es el signo cardinal que distingue el golpe de calor del agotamiento por calor, porque indica que el sistema nervioso central está siendo dañado por la hipertermia y que los mecanismos compensatorios de disipación de calor han colapsado. La combinación de taquicardia marcada e hipotensión refleja una descompensación circulatoria significativa, consistente con un estado de shock distributivo por vasodilatación extrema y posible depleción de volumen, no simplemente deshidratación leve. Aunque la piel caliente y seca es un hallazgo clásico descrito para el golpe de calor, su ausencia (piel húmeda) no descarta el diagnóstico si hay alteración mental, por lo que el estado mental es el criterio más confiable, no el estado de la piel. El manejo prehospitalario correcto exige enfriamiento activo inmediato (por ejemplo, compresas frías en cuello, axilas e ingles, o inmersión si es posible), oxígeno suplementario y transporte urgente, ya que la hipertermia sostenida puede causar desnaturalización de proteínas celulares, coagulopatía, rabdomiólisis y falla multiorgánica si no se revierte rápidamente."
    },
    {
        "question": "Rescata a un adolescente que estuvo sumergido en una piscina fría durante varios minutos antes de ser sacado del agua sin pulso ni respiración. Otro socorrista argumenta que 'no vale la pena reanimar porque el ahogamiento en agua fría siempre resulta en daño cerebral irreversible en pocos minutos'. ¿Cómo debe usted responder ante esta afirmación y qué justifica su decisión de reanimación?",
        "options": [
            {"letter": "a", "text": "El socorrista tiene razón; se debe suspender la reanimación porque el tiempo de sumersión ya excede el límite de viabilidad cerebral"},
            {"letter": "b", "text": "Se debe iniciar RCP de inmediato y continuarla de forma agresiva y prolongada, ya que la inmersión en agua fría puede inducir un reflejo de inmersión que redistribuye el flujo sanguíneo hacia el corazón y el cerebro y disminuye el metabolismo, ofreciendo cierta protección neurológica incluso tras sumersiones prolongadas"},
            {"letter": "c", "text": "Se debe retrasar la RCP hasta confirmar con un ECG de 12 derivaciones que existe actividad eléctrica cardíaca"},
            {"letter": "d", "text": "Se debe priorizar la maniobra de Heimlich repetidamente para expulsar el agua de los pulmones antes de iniciar compresiones"},
        ],
        "correctAnswer": "b",
        "explanation": "El reflejo de inmersión (más pronunciado en niños y en agua fría) provoca bradicardia, vasoconstricción periférica y redistribución preferencial del flujo sanguíneo hacia el corazón y el cerebro, junto con una disminución de la tasa metabólica y del consumo de oxígeno cerebral, lo que puede ofrecer un efecto protector similar al de la hipotermia terapéutica. Por esta razón, existen casos documentados de recuperación neurológica favorable en víctimas de ahogamiento en agua fría reanimadas después de sumersiones prolongadas, mucho más allá de los límites de tiempo aceptados para el paro cardíaco normotérmico. La conducta correcta es iniciar RCP inmediatamente, incluyendo ventilaciones (ya que la causa primaria suele ser hipóxica, a diferencia del paro cardíaco primario), y continuar los esfuerzos de reanimación hasta la valoración hospitalaria, sin asumir prematuramente que el pronóstico es fatal. Intentar extraer agua de los pulmones mediante maniobras como Heimlich retrasa la ventilación y compresiones eficaces y no está indicado, ya que la mayoría del agua aspirada se absorbe rápidamente hacia la circulación pulmonar."
    },
    {
        "question": "Una persona es golpeada por un rayo mientras camina en un campo abierto. Al llegar, encuentra a la víctima en paro cardiorrespiratorio, con quemaduras superficiales en patrón arboriforme y ambos tímpanos perforados. Hay una segunda víctima cercana, consciente y quejándose de dolor en las piernas. ¿Cuál es la aplicación correcta del principio de 'clasificación inversa' en este escenario y por qué el paro cardíaco por rayo tiene un pronóstico distinto al paro cardíaco por otras causas?",
        "options": [
            {"letter": "a", "text": "Se debe atender primero a la víctima consciente porque tiene mayor probabilidad de sobrevivir; la víctima en paro se considera de baja prioridad como en la clasificación convencional"},
            {"letter": "b", "text": "Se debe priorizar a la víctima en paro cardiorrespiratorio, iniciando RCP y desfibrilación de inmediato, porque el paro por rayo suele ser causado por una asistolia transitoria por 'aturdimiento' cardíaco y respiratorio que responde bien a la reanimación temprana, a diferencia del paro convencional donde las víctimas aparentemente estables se atienden primero"},
            {"letter": "c", "text": "Ambas víctimas deben esperar a que llegue soporte avanzado, ya que ningún socorrista básico puede intervenir en lesiones por rayo"},
            {"letter": "d", "text": "Se debe declarar la muerte de la víctima en paro de inmediato debido a la alta letalidad de las lesiones por rayo, y concentrar todos los recursos en la víctima consciente"}
        ],
        "correctAnswer": "b",
        "explanation": "La clasificación inversa invierte la lógica convencional de triage en incidentes con múltiples víctimas por rayo: las víctimas en paro cardiorrespiratorio se atienden primero, no después, porque el mecanismo del paro suele ser un 'aturdimiento' (knockout) simultáneo de los centros cardíaco y respiratorio del tronco encefálico causado por la corriente masiva, en lugar de un daño miocárdico estructural irreversible como ocurre en la mayoría de los paros cardíacos médicos. El corazón, tras el choque eléctrico masivo, con frecuencia recupera su ritmo intrínseco espontáneamente si se sostiene la oxigenación y circulación con RCP temprana, lo que hace que estas víctimas tengan un pronóstico de recuperación sorprendentemente bueno comparado con otros paros cardíacos. Las víctimas conscientes que se quejan de síntomas menores, aunque parezcan más urgentes por su presentación llamativa, tienen mayor probabilidad de sobrevivir sin intervención inmediata, por lo que pueden esperar breve tiempo. Los tímpanos perforados y las quemaduras arboriformes (patrón de Lichtenberg) son hallazgos característicos de lesión por rayo, pero no cambian la prioridad de tratamiento, que se rige por el estado cardiorrespiratorio."
    },
    {
        "question": "Un buzo recreativo completa una inmersión a 30 metros de profundidad y realiza un ascenso más rápido de lo recomendado, omitiendo las paradas de descompresión. Dos horas después de salir del agua, en un vuelo comercial, comienza con dolor articular intenso en el hombro, erupción cutánea moteada y confusión progresiva. ¿Cuál es el mecanismo fisiopatológico de este cuadro y por qué el vuelo comercial poco después del buceo agrava significativamente el riesgo?",
        "options": [
            {"letter": "a", "text": "Es una reacción alérgica al equipo de buceo; la altitud no tiene relación con el cuadro y el tratamiento es solo antihistamínico"},
            {"letter": "b", "text": "Es enfermedad por descompresión: el nitrógeno disuelto en los tejidos durante la inmersión, al no eliminarse gradualmente por un ascenso controlado, forma burbujas que obstruyen articulaciones, piel y sistema nervioso; la menor presión atmosférica en cabina durante el vuelo permite que esas burbujas se expandan aún más, empeorando los síntomas"},
            {"letter": "c", "text": "Es una embolia aérea pura causada exclusivamente por retener la respiración durante el ascenso, sin relación con el tiempo transcurrido ni con la altitud del vuelo"},
            {"letter": "d", "text": "Es narcosis por nitrógeno persistente, un efecto narcótico temporal que se resuelve espontáneamente sin necesidad de tratamiento ni de evitar la altitud"}
        ],
        "correctAnswer": "b",
        "explanation": "Durante una inmersión profunda, el nitrógeno del aire respirado se disuelve en los tejidos en proporción a la presión ambiental; si el ascenso es demasiado rápido y se omiten las paradas de descompresión programadas, ese nitrógeno no tiene tiempo de eliminarse gradualmente a través de los pulmones y forma burbujas dentro de los tejidos y el torrente sanguíneo, un cuadro que puede manifestarse horas después del buceo (a diferencia de la embolia aérea, que es inmediata). Estas burbujas pueden alojarse en articulaciones (causando el dolor característico conocido como 'the bends'), en la piel (produciendo un moteado característico) o en el sistema nervioso central, generando síntomas neurológicos como confusión. Viajar en avión poco después de bucear es peligroso porque, aunque las cabinas están presurizadas, la presión interna es menor que la del nivel del mar, lo que reduce aún más la presión ambiental sobre los tejidos y provoca que las burbujas de nitrógeno ya formadas se expandan según la ley de Boyle, agravando la obstrucción vascular y tisular. El tratamiento definitivo requiere oxígeno al 100% y recompresión en una cámara hiperbárica lo antes posible."
    },
    {
        "question": "Un excursionista es mordido por una serpiente de cascabel en la pantorrilla. Treinta minutos después presenta edema progresivo en toda la extremidad, equimosis, y comienza a mostrar sangrado gingival espontáneo junto con hipotensión. Su compañero quiere aplicar un torniquete arterial ajustado y succionar la herida con la boca antes de continuar la caminata hacia el vehículo. ¿Cuál es el manejo correcto y qué justifica evitar las acciones propuestas por el compañero?",
        "options": [
            {"letter": "a", "text": "Aplicar el torniquete y succionar como sugiere el compañero, ya que retrasar estas medidas permite que el veneno se disemine más rápido por el sistema linfático"},
            {"letter": "b", "text": "Inmovilizar la extremidad en posición neutra o ligeramente por debajo del corazón, mantener al paciente calmado y en reposo absoluto (idealmente cargado, no caminando), retirar anillos u objetos constrictivos, y transportar de urgencia, porque el veneno crotálico es una mezcla compleja de toxinas que puede causar coagulopatía sistémica y shock, y el torniquete o la succión concentran el daño tisular local sin detener los efectos sistémicos"},
            {"letter": "c", "text": "Indicar al paciente que continúe caminando rápidamente hacia el vehículo para acortar el tiempo total hasta el hospital, ya que el movimiento activo no influye en la absorción del veneno"},
            {"letter": "d", "text": "Aplicar hielo directamente sobre la mordedura para vasoconstringir el área y retrasar la absorción del veneno antes del transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "El veneno de la serpiente de cascabel contiene enzimas proteolíticas y hemotóxicas que causan destrucción tisular local progresiva (edema, equimosis) y, en envenenamientos significativos, alteraciones sistémicas de la coagulación que pueden manifestarse como sangrado espontáneo de mucosas (gingival), junto con hipotensión por fuga capilar y posible sangrado interno, indicando un envenenamiento moderado a severo que requiere atención hospitalaria urgente con antiveneno específico. El torniquete arterial concentra el veneno en el tejido local, aumentando drásticamente el riesgo de necrosis extensa y posible pérdida de la extremidad, sin detener los efectos sistémicos ya en marcha, mientras que la succión con la boca no extrae una cantidad significativa de veneno una vez inyectado en el tejido profundo y expone al rescatista a riesgo de infección. Permitir que el paciente camine o se mueva activamente aumenta el flujo linfático y sanguíneo hacia la circulación central, acelerando la absorción sistémica del veneno, por lo que se debe transportar al paciente cargado o en camilla, manteniendo la extremidad inmóvil y en una posición neutra. El hielo y el frío directo tampoco están indicados porque no inactivan el veneno y pueden agravar el daño tisular local por vasoconstricción extrema sumada a la toxicidad ya presente."
    }
];