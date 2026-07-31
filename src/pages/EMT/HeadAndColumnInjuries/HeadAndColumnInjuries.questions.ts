import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una lesión cerebral primaria y una secundaria?",
        answer: "La lesión primaria es el daño que ocurre en el cerebro en el momento del impacto (p. ej., contusión, laceración). La lesión secundaria es el daño adicional que ocurre después del impacto inicial, debido a factores como la hipoxia (falta de oxígeno), la hipotensión (presión arterial baja) o el aumento de la presión intracraneal. El objetivo del tratamiento prehospitalario es prevenir la lesión secundaria.",
    },
    {
        question: "¿Qué es la tríada de Cushing y qué significa?",
        answer: "La tríada de Cushing es un conjunto de tres signos tardíos y graves del aumento de la presión intracraneal (PIC): \n1. Aumento de la presión arterial sistólica (con una presión de pulso amplia). \n2. Disminución de la frecuencia cardíaca (bradicardia). \n3. Respiraciones irregulares. \nSu presencia indica que el cerebro está a punto de herniarse, lo cual es una emergencia potencialmente mortal.",
    },
    {
        question: "¿Cuáles son los signos de una fractura de la base del cráneo?",
        answer: "Los signos clásicos incluyen el 'signo de Battle' (equimosis o moretones detrás de las orejas), 'ojos de mapache' (equimosis alrededor de los ojos) y la pérdida de líquido cefalorraquídeo (LCR) por la nariz o los oídos, que puede verse como un goteo claro o mezclado con sangre (signo del halo).",
    },
    {
        question: "¿Cuál es la diferencia entre un hematoma epidural y uno subdural?",
        answer: "Un hematoma epidural ocurre por sangrado entre el cráneo y la duramadre, es a menudo arterial y puede presentar un 'intervalo lúcido' antes de un rápido deterioro. Un hematoma subdural ocurre bajo la duramadre, suele ser venoso, de desarrollo más lento y es más común en ancianos y personas con alcoholismo.",
    },
    {
        question: "¿Qué es el shock neurogénico y cómo se diferencia del shock hipovolémico?",
        answer: "El shock neurogénico es causado por una lesión en la médula espinal que interrumpe las señales nerviosas a los vasos sanguíneos, provocando una vasodilatación masiva. A diferencia del shock hipovolémico (causado por pérdida de sangre), el paciente con shock neurogénico presentará hipotensión acompañada de una frecuencia cardíaca normal o lenta (bradicardia) y piel caliente y seca por debajo del nivel de la lesión.",
    },
    {
        question: "¿Cuándo se debe sospechar una lesión en la columna vertebral?",
        answer: "Se debe tener un alto índice de sospecha basado en el mecanismo de lesión (p. ej., caídas, accidentes de tráfico a alta velocidad, zambullidas en aguas poco profundas). También si el paciente se queja de dolor o sensibilidad en el cuello o espalda, tiene déficits neurológicos, un nivel de conciencia alterado o una lesión distractora significativa.",
    },
    {
        question: "¿Por qué se utiliza la maniobra de empuje mandibular (tracción mandibular) en lugar de la de inclinación de cabeza y elevación de mentón en pacientes con sospecha de lesión cervical?",
        answer: "La maniobra de empuje mandibular se utiliza para abrir la vía aérea sin mover o extender el cuello. Esto minimiza el riesgo de agravar una posible lesión inestable en la columna cervical, a diferencia de la maniobra de inclinación de cabeza, que sí mueve la columna.",
    },
    {
        question: "¿Cuál es el objetivo de la inmovilización espinal?",
        answer: "El objetivo principal de la inmovilización espinal (o restricción del movimiento espinal) es prevenir el movimiento de la columna vertebral cuando se sospecha una lesión, para evitar causar o empeorar el daño a la médula espinal.",
    },
];


export const headAndColumnInjuriesQuestions: Question[] = [
    {
        "question": "Un paciente que cayó de una escalera presenta una presión arterial de 180/90 mmHg, una frecuencia cardíaca de 52 latidos/min y respiraciones irregulares. Estos hallazgos son más consistentes con:",
        "options": [
            {"letter": "a", "text": "Shock hipovolémico"},
            {"letter": "b", "text": "Tríada de Cushing debido a aumento de la PIC"},
            {"letter": "c", "text": "Shock neurogénico"},
            {"letter": "d", "text": "Una conmoción cerebral simple"}
        ],
        "correctAnswer": "b",
        "explanation": "La Tríada de Cushing es un conjunto de signos que indican un aumento crítico de la Presión Intracraneal (PIC). Consiste en: 1) Hipertensión (el cuerpo aumenta la presión para intentar perfundir el cerebro), 2) Bradicardia (una respuesta refleja a la hipertensión), y 3) Respiraciones irregulares. Es un signo de herniación cerebral inminente."
    },
    {
        "question": "Usted está evaluando a un paciente que sufrió un accidente de motocicleta. El signo más temprano y confiable de un aumento de la presión intracraneal (PIC) es:",
        "options": [
            {"letter": "a", "text": "La aparición de la tríada de Cushing"},
            {"letter": "b", "text": "Una pupila dilatada y no reactiva"},
            {"letter": "c", "text": "Una alteración en el nivel de conciencia"},
            {"letter": "d", "text": "La presencia de vómito en proyectil"}
        ],
        "correctAnswer": "c",
        "explanation": "El cerebro es extremadamente sensible a los cambios de presión. Por lo tanto, el primer y más sutil signo de un aumento de la PIC es una alteración en el nivel de conciencia del paciente (confusión, letargo, irritabilidad). Los demás signos, como los cambios pupilares o la tríada de Cushing, son hallazgos más tardíos y ominosos."
    },
    {
        "question": "Al atender a un motociclista que no llevaba casco y está inconsciente, ¿cuál es la maniobra correcta para abrir la vía aérea?",
        "options": [
            {"letter": "a", "text": "Inclinación de la cabeza y elevación del mentón"},
            {"letter": "b", "text": "Maniobra de empuje mandibular (tracción mandibular)"},
            {"letter": "c", "text": "Girar la cabeza hacia un lado para permitir el drenaje"},
            {"letter": "d", "text": "Colocar los dedos en la boca para barrer la lengua"}
        ],
        "correctAnswer": "b",
        "explanation": "En cualquier paciente con un mecanismo de lesión que sugiera un posible traumatismo de la columna cervical, se debe evitar mover el cuello. La maniobra de empuje o tracción mandibular permite abrir la vía aérea al levantar la mandíbula (y con ella, la lengua) sin extender ni flexionar la columna cervical."
    },
    {
        "question": "Un paciente presenta una herida por arma de fuego en la espalda media. Está hipotenso (86/54 mmHg) y su piel está caliente y seca. Su frecuencia cardíaca es de 60 latidos/min. Este cuadro clínico sugiere fuertemente:",
        "options": [
            {"letter": "a", "text": "Shock hipovolémico por hemorragia interna"},
            {"letter": "b", "text": "Shock séptico por la herida"},
            {"letter": "c", "text": "Shock neurogénico por lesión medular"},
            {"letter": "d", "text": "Una reacción vasovagal por el dolor"}
        ],
        "correctAnswer": "c",
        "explanation": "Esta es la presentación clásica del shock neurogénico. La lesión medular interrumpe las señales simpáticas, causando una vasodilatación masiva (hipotensión con piel caliente y seca) y una incapacidad para aumentar la frecuencia cardíaca (bradicardia relativa). En el shock hipovolémico, la piel estaría fría y el paciente taquicárdico."
    },
    {
        "question": "El tratamiento prehospitalario de un paciente con una lesión cerebral traumática se enfoca principalmente en:",
        "options": [
            {"letter": "a", "text": "Administrar analgésicos para controlar el dolor de cabeza"},
            {"letter": "b", "text": "Reducir la presión intracraneal retirando líquido cefalorraquídeo"},
            {"letter": "c", "text": "Prevenir la hipoxia y la hipotensión para evitar una lesión secundaria"},
            {"letter": "d", "text": "Inmovilizar la cabeza con cinta adhesiva directamente a la camilla"}
        ],
        "correctAnswer": "c",
        "explanation": "El daño inicial de un traumatismo craneoencefálico (lesión primaria) no se puede revertir. El manejo prehospitalario se centra en prevenir la lesión secundaria, que es el daño adicional causado por la falta de oxígeno (hipoxia) y la mala perfusión (hipotensión). Mantener una vía aérea permeable, una ventilación adecuada y una presión arterial normal es crucial."
    },
    {
        "question": "Un paciente involucrado en una pelea presenta una breve pérdida de conciencia, seguida de un período en el que está alerta y hablando (intervalo lúcido), y luego su estado mental se deteriora rápidamente. Este patrón es clásico de un:",
        "options": [
            {"letter": "a", "text": "Hematoma subdural"},
            {"letter": "b", "text": "Hematoma epidural"},
            {"letter": "c", "text": "Conmoción cerebral severa"},
            {"letter": "d", "text": "Contusión cerebral"}
        ],
        "correctAnswer": "b",
        "explanation": "El hematoma epidural, a menudo causado por la ruptura de la arteria meníngea media, se caracteriza por esta presentación clásica. El sangrado arterial rápido llena el espacio epidural, y tras un 'intervalo lúcido', el hematoma se expande lo suficiente como para comprimir el cerebro y causar un deterioro neurológico rápido."
    },
    {
        "question": "La inmovilización espinal estaría indicada en cuál de los siguientes pacientes:",
        "options": [
            {"letter": "a", "text": "Un paciente con una herida aislada de cuchillo en la pierna"},
            {
                "letter": "b",
                "text": "Un paciente que se tropezó y tiene una abrasión en la rodilla, pero está alerta y sin dolor de cuello"
            },
            {"letter": "c", "text": "Un paciente intoxicado que fue encontrado al pie de unas escaleras"},
            {"letter": "d", "text": "Un paciente con dolor de pecho que niega cualquier trauma"}
        ],
        "correctAnswer": "c",
        "explanation": "La inmovilización espinal se indica cuando hay un mecanismo de lesión significativo (caída de escaleras) y el paciente no es un evaluador confiable de su propio dolor (debido a la intoxicación) o presenta dolor en la línea media de la columna, déficits neurológicos o una lesión distractora dolorosa."
    },
    {
        "question": "La presencia de equimosis detrás de la oreja (signo de Battle) después de un traumatismo craneal es un indicador de:",
        "options": [
            {"letter": "a", "text": "Laceración del cuero cabelludo"},
            {"letter": "b", "text": "Fractura de la base del cráneo"},
            {"letter": "c", "text": "Fractura mandibular"},
            {"letter": "d", "text": "Hematoma subdural"}
        ],
        "correctAnswer": "b",
        "explanation": "El signo de Battle, junto con los 'ojos de mapache' (equimosis periorbitaria), es un signo tardío y clásico de una fractura de la base del cráneo. Es causado por la filtración de sangre desde la fractura hacia los tejidos blandos detrás de la oreja, sobre el hueso mastoides."
    },
    {
        "question": "Durante la ventilación de un paciente con una lesión cerebral grave, es crucial evitar la hiperventilación porque puede:",
        "options": [
            {"letter": "a", "text": "Aumentar la presión arterial de forma peligrosa"},
            {"letter": "b", "text": "Causar vasoconstricción cerebral y empeorar la isquemia"},
            {"letter": "c", "text": "Provocar una herniación cerebral inmediata"},
            {"letter": "d", "text": "Aumentar el edema cerebral"}
        ],
        "correctAnswer": "b",
        "explanation": "La hiperventilación reduce los niveles de CO2 en la sangre (hipocapnia). El CO2 es un potente vasodilatador cerebral, por lo que su disminución provoca vasoconstricción. En un cerebro lesionado, esta reducción del flujo sanguíneo puede empeorar el daño isquémico y el resultado del paciente."
    },
    {
        "question": "Al evaluar la función motora y sensorial en las extremidades de un paciente con sospecha de lesión espinal, el objetivo es:",
        "options": [
            {"letter": "a", "text": "Determinar si el paciente está fingiendo sus síntomas"},
            {"letter": "b", "text": "Evaluar la presencia y el nivel de un posible déficit neurológico"},
            {"letter": "c", "text": "Descartar por completo una lesión en la columna"},
            {"letter": "d", "text": "Calcular la Escala de Coma de Glasgow"}
        ],
        "correctAnswer": "b",
        "explanation": "Este examen neurológico básico busca identificar si hay alguna debilidad o pérdida de sensibilidad y, en caso afirmativo, en qué nivel del cuerpo comienza. Esto ayuda a localizar la posible lesión en la médula espinal y a establecer una línea de base para monitorear si el déficit mejora o empeora."
    }
]

export const headAndColumnInjuriesChallengeQuestions: Question[] = [
    {
        "question": "Un hombre de 34 años sufrió un traumatismo craneoencefálico severo tras una caída de un andamio. Al llegar el SEM presentaba GCS de 9, pero durante el traslado de 12 minutos usted observa que la pupila derecha se dilata progresivamente y deja de reaccionar a la luz, mientras el paciente desarrolla postura de decorticación y su GCS cae a 5. ¿Qué proceso fisiopatológico explica mejor esta secuencia de deterioro?",
        "options": [
            {"letter": "a", "text": "Un hematoma subdural crónico que finalmente alcanzó un volumen crítico, sin relación con compresión de estructuras del tronco encefálico"},
            {"letter": "b", "text": "Herniación transtentorial (uncal) del lóbulo temporal, que comprime el nervio motor ocular común (III par) ipsilateral y empuja el mesencéfalo, produciendo dilatación pupilar unilateral y deterioro motor progresivo"},
            {"letter": "c", "text": "Una crisis convulsiva postraumática no observada que explica la dilatación pupilar transitoria"},
            {"letter": "d", "text": "Vasoespasmo cerebral difuso secundario a hemorragia subaracnoidea, que no se asocia con cambios pupilares unilaterales"}
        ],
        "correctAnswer": "b",
        "explanation": "La dilatación pupilar unilateral progresiva combinada con deterioro rápido del estado de conciencia y postura de decorticación es el sello distintivo de la herniación transtentorial (uncal): el aumento de la presión intracraneal empuja el lóbulo temporal medial (uncus) a través de la incisura del tentorio, comprimiendo el III par craneal ipsilateral (de ahí la pupila dilatada y no reactiva, conocida como 'pupila de Hutchinson') y desplazando el mesencéfalo. Esta compresión del tronco encefálico también explica el deterioro motor y del nivel de conciencia. Es una emergencia neuroquirúrgica que requiere transporte inmediato, oxigenación óptima y evitar la hipotensión, ya que cada minuto de retraso aumenta el riesgo de daño irreversible del tronco encefálico y muerte."
    },
    {
        "question": "Un paciente con TCE severo presenta inicialmente PA 130/85 mmHg y FC 92/min. Veinte minutos después, sin haber recibido ninguna intervención que lo justifique, usted registra PA 190/100 mmHg, FC 48/min y un patrón respiratorio irregular con pausas apneicas. ¿Cuál es la interpretación clínica correcta de este cambio y la acción prehospitalaria más apropiada?",
        "options": [
            {"letter": "a", "text": "El paciente está compensando una hipovolemia oculta; se debe administrar un bolo agresivo de cristaloides para normalizar la frecuencia cardíaca"},
            {"letter": "b", "text": "Es la tríada de Cushing, un reflejo del sistema nervioso central en el que la hipertensión intenta mantener la presión de perfusión cerebral frente a una PIC en aumento crítico, mientras la bradicardia es una respuesta barorrefleja secundaria; se debe optimizar oxigenación y ventilación, evitar la hipotensión y transportar de inmediato a un centro con capacidad neuroquirúrgica"},
            {"letter": "c", "text": "Es una respuesta vasovagal por dolor que se resolverá espontáneamente sin intervención"},
            {"letter": "d", "text": "Indica que el paciente está entrando en shock neurogénico por una lesión medular concomitante no diagnosticada"}
        ],
        "correctAnswer": "b",
        "explanation": "La tríada de Cushing (hipertensión con presión de pulso ampliada, bradicardia y respiración irregular) es un mecanismo compensatorio del sistema nervioso central: cuando la presión intracraneal (PIC) se eleva críticamente, el cuerpo aumenta la presión arterial sistémica mediante vasoconstricción simpática para intentar preservar la presión de perfusión cerebral (PPC = PAM - PIC). Esta hipertensión abrupta activa los barorreceptores aórticos y carotídeos, generando bradicardia refleja mediada por el vago. El patrón respiratorio irregular refleja la compresión progresiva del tronco encefálico. Es un signo tardío y ominoso de herniación inminente; administrar líquidos para 'corregir' la bradicardia sería contraproducente y peligroso, ya que el problema no es hipovolemia sino una PIC crítica que exige manejo de la vía aérea, ventilación adecuada y transporte urgente."
    },
    {
        "question": "Un motociclista de 28 años sufre una colisión de alta energía. Presenta una fractura pélvica inestable con dolor abdominal, y además refiere no sentir ni mover ambas piernas desde el nivel del ombligo. Sus signos vitales son PA 78/50 mmHg, FC 58/min, piel tibia y seca por debajo del nivel de la lesión, pero fría y pálida en el tórax superior donde probablemente hay hemorragia interna por la fractura pélvica. ¿Cómo debe interpretar y abordar este cuadro mixto?",
        "options": [
            {"letter": "a", "text": "La bradicardia relativa descarta cualquier componente hipovolémico, por lo que el shock es puramente neurogénico y no se necesitan líquidos"},
            {"letter": "b", "text": "Coexisten shock neurogénico (por la lesión medular a nivel toracolumbar, que interrumpe el tono simpático vasomotor causando vasodilatación e incapacidad de generar taquicardia compensatoria) y un probable shock hipovolémico oculto por la fractura pélvica; debe tratar la hipotensión con reposición cuidadosa de líquidos guiada por perfusión, sin asumir que la ausencia de taquicardia excluye hemorragia significativa"},
            {"letter": "c", "text": "Debe asumir que se trata únicamente de shock hipovolémico, ya que toda hipotensión traumática se debe a hemorragia hasta probarse lo contrario, e ignorar la posibilidad de lesión medular"},
            {"letter": "d", "text": "La piel fría en el tórax superior descarta shock neurogénico, ya que este siempre produce piel caliente en todo el cuerpo"},
        ],
        "correctAnswer": "b",
        "explanation": "Este caso ilustra una trampa clásica: en el shock neurogénico, la lesión medular interrumpe las vías simpáticas descendentes, provocando vasodilatación generalizada por debajo del nivel de la lesión (piel caliente y seca) y bloqueando la respuesta refleja de taquicardia ante la hipotensión, por lo que la frecuencia cardíaca puede permanecer normal o incluso baja. Sin embargo, esto no excluye una hemorragia interna concomitante por la fractura pélvica, cuyo signo (piel fría y pálida por encima del nivel de la lesión, donde el tono simpático aún funciona) puede quedar enmascarado por el cuadro neurogénico. El error de asumir 'bradicardia relativa = no hay hemorragia' puede retrasar el reconocimiento de un shock hipovolémico letal. El manejo debe guiarse por la perfusión global y el mecanismo de lesión, con reposición de líquidos cuidadosa para tratar la hipotensión sin sobrecargar, y transporte rápido a un centro de trauma."
    },
    {
        "question": "Tras una herida penetrante lateral en el cuello a nivel de C6, un paciente presenta pérdida completa de la función motora y de la sensibilidad a la propiocepción y vibración en el lado derecho del cuerpo por debajo de la lesión, junto con pérdida de la sensibilidad al dolor y la temperatura en el lado izquierdo del cuerpo. ¿Qué síndrome medular incompleto es más consistente con este hallazgo y qué explica su patrón cruzado?",
        "options": [
            {"letter": "a", "text": "Síndrome de cordón central, causado por edema que afecta preferentemente las fibras que controlan las extremidades superiores de forma bilateral"},
            {"letter": "b", "text": "Síndrome de Brown-Séquard, resultado de una lesión que afecta solo una mitad (hemisección) de la médula espinal: la vía corticoespinal y las columnas dorsales (afectadas ipsilateralmente antes de decusar) producen déficit motor y propioceptivo del mismo lado de la lesión, mientras que la vía espinotalámica (que decusa cerca de su nivel de entrada) produce pérdida de dolor y temperatura del lado contrario"},
            {"letter": "c", "text": "Síndrome de cordón anterior, causado por isquemia de la arteria espinal anterior que afecta ambos lados de forma simétrica"},
            {"letter": "d", "text": "Síndrome de cauda equina, que afecta exclusivamente las raíces nerviosas lumbosacras por debajo del cono medular"}
        ],
        "correctAnswer": "b",
        "explanation": "El síndrome de Brown-Séquard ocurre clásicamente por lesiones penetrantes (arma blanca o de fuego) que seccionan o hemiseccionan un lado de la médula espinal. El tracto corticoespinal lateral y las columnas dorsales (propiocepción, vibración, tacto fino) viajan sin decusar hasta el bulbo raquídeo, por lo que su lesión produce debilidad motora y pérdida propioceptiva del mismo lado de la lesión (ipsilateral). En cambio, las fibras del tracto espinotalámico (dolor y temperatura) decusan pocos segmentos después de entrar a la médula, por lo que su interrupción produce pérdida sensitiva de dolor y temperatura del lado contrario (contralateral), típicamente uno o dos niveles por debajo de la lesión. Reconocer este patrón cruzado es clave para diferenciar Brown-Séquard de otros síndromes medulares incompletos como el de cordón central o cordón anterior, aunque en el entorno prehospitalario el manejo inmediato (restricción de movimiento espinal, soporte de ABC y transporte rápido) es el mismo independientemente del síndrome específico."
    },
    {
        "question": "Debe manejar la vía aérea de un paciente con GCS 6 tras un TCE severo, con signos tempranos de herniación (anisocoria y postura de decorticación intermitente) y saturación de oxígeno de 89% con oxígeno suplementario a alto flujo mediante bolsa-mascarilla. ¿Cuál es la estrategia de manejo de la vía aérea y ventilación más apropiada?",
        "options": [
            {"letter": "a", "text": "Hiperventilar agresivamente de forma sostenida hasta normalizar el estado de conciencia, ya que reducir el CO2 siempre mejora el pronóstico neurológico"},
            {"letter": "b", "text": "Evitar cualquier manejo avanzado de la vía aérea para no aumentar la PIC con la laringoscopia, y transportar solo con cánula orofaríngea"},
            {"letter": "c", "text": "Priorizar el control definitivo de la vía aérea con oxigenación previa adecuada para prevenir la hipoxia, ventilar a una frecuencia normal para mantener normocapnia (evitando tanto la hiperventilación, que causa vasoconstricción cerebral e isquemia, como la hipoventilación, que empeora la vasodilatación y la PIC), y reservar la hiperventilación leve y transitoria únicamente como medida temporizadora si aparecen signos francos de herniación inminente durante el transporte"},
            {"letter": "d", "text": "Retrasar cualquier intervención sobre la vía aérea hasta llegar al hospital, ya que la saturación de 89% no representa un riesgo significativo para un cerebro lesionado"}
        ],
        "correctAnswer": "c",
        "explanation": "En el TCE severo, tanto la hipoxia como la hipotensión constituyen las principales causas de lesión cerebral secundaria y deben prevenirse de forma agresiva; por ello, ante una saturación de 89% que no mejora, está indicado un manejo definitivo de la vía aérea con preoxigenación cuidadosa. Sin embargo, la ventilación debe apuntar a la normocapnia (ETCO2 aproximadamente 35-40 mmHg): la hiperventilación sostenida reduce el CO2 arterial, lo que provoca vasoconstricción cerebral y puede inducir o agravar la isquemia en un cerebro ya comprometido, mientras que la hipoventilación permite que el CO2 se acumule, causando vasodilatación cerebral y empeorando la PIC. La hiperventilación controlada y transitoria (hasta un ETCO2 cercano a 30 mmHg) se reserva como medida de rescate únicamente cuando aparecen signos evidentes de herniación aguda (como la anisocoria y la postura de decorticación de este paciente), como puente temporal mientras se logra tratamiento definitivo, no como estrategia ventilatoria de rutina."
    },
    {
        "question": "Un paciente fue extraído de un vehículo tras una colisión de alta energía. Está intubado por el equipo de rescate previo por trauma facial masivo con obstrucción de la vía aérea, por lo que no se puede evaluar la respuesta verbal; los ojos están cerrados por edema periorbitario bilateral severo que impide la apertura ocular incluso con estímulo; y ante el dolor, el paciente localiza y retira la mano de forma intencionada. ¿Cómo debe documentar y qué representa este hallazgo en la Escala de Coma de Glasgow?",
        "options": [
            {"letter": "a", "text": "Debe asignar automáticamente 1 punto en apertura ocular y 1 punto en respuesta verbal, sumando un GCS total de 8, sin ninguna anotación adicional"},
            {"letter": "b", "text": "Debe documentar los componentes evaluables por separado (por ejemplo, motora = 5 por localización del dolor), anotar explícitamente que la respuesta verbal no es evaluable por intubación (a menudo registrada como 'V = 1T' o 'no evaluable') y que la apertura ocular no es evaluable por edema periorbitario, en lugar de forzar un puntaje numérico único que oculte la causa de la limitación y pueda subestimar erróneamente la función neurológica real del paciente"},
            {"letter": "c", "text": "El GCS no puede calcularse en absoluto en este paciente, por lo que no debe registrarse ningún dato neurológico"},
            {"letter": "d", "text": "Debe asumir el mejor puntaje posible (4 en apertura ocular y 5 en verbal) porque el paciente parece estar reaccionando adecuadamente al entorno"}
        ],
        "correctAnswer": "b",
        "explanation": "La Escala de Coma de Glasgow puede dar resultados engañosos cuando factores externos (intubación, edema facial, parálisis química, alcohol, o lesiones oculares) impiden evaluar uno o más componentes; sumar un número global sin contexto puede llevar a subestimar o sobreestimar gravemente el estado neurológico real. La práctica correcta y ampliamente aceptada es reportar cada componente por separado y marcar explícitamente los que no son evaluables (convención 'T' para tubo endotraqueal en el componente verbal, o anotar 'no evaluable' por edema en el componente ocular), documentando la razón. Esto permite que el equipo receptor interprete correctamente la severidad real, evita decisiones clínicas erróneas basadas en un puntaje numérico artificialmente bajo o alto, y mantiene la trazabilidad de la evaluación neurológica seriada, que es esencial para detectar deterioro."
    }
]