import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es el primer paso al evaluar la vía aérea de un paciente?",
        answer: "Verificar si el paciente está alerta y puede hablar, lo que indica que la vía aérea está, por el momento, permeable."
    },
    {
        question: "¿Qué maniobra se utiliza para abrir la vía aérea en pacientes sin sospecha de trauma cervical?",
        answer: "La maniobra de inclinación de cabeza y elevación del mentón (frente-mentón)."
    },
    {
        question: "¿Qué maniobra se usa si se sospecha una lesión en la columna cervical?",
        answer: "La maniobra de tracción mandibular, evitando mover el cuello del paciente."
    },
    {
        question: "¿Cómo se mide correctamente una cánula orofaríngea (OPA)?",
        answer: "Se mide desde la comisura de la boca del paciente hasta el ángulo de la mandíbula o el lóbulo de la oreja."
    },
    {
        question: "¿Cuándo se debe usar una cánula orofaríngea (OPA)?",
        answer: "Solo en pacientes inconscientes que no tengan reflejo nauseoso."
    },
    {
        question: "¿Cuándo se prefiere una cánula nasofaríngea (NPA) sobre una orofaríngea (OPA)?",
        answer: "En pacientes con nivel de conciencia disminuido que aún tienen reflejo nauseoso, o cuando la boca está lesionada."
    },
    {
        question: "¿Cuál es la diferencia clave entre ventilación y oxigenación?",
        answer: "La ventilación es el proceso físico de mover aire hacia y desde los pulmones. La oxigenación es el proceso por el cual el oxígeno se une a la hemoglobina en la sangre."
    },
];

export const airwayManagementQuestions: Question[] = [
    {
        question: "En un paciente inconsciente sin sospecha de trauma, ¿cuál es la causa más común de obstrucción de la vía aérea?",
        options: [
            { letter: "a", text: "Un cuerpo extraño" },
            { letter: "b", text: "La lengua" },
            { letter: "c", text: "Edema por reacción alérgica" },
            { letter: "d", "text": "Vómito" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Mientras ventila a un paciente adulto con un dispositivo bolsa-válvula-mascarilla (BVM), ¿cuál es el signo MÁS confiable de que las ventilaciones son efectivas?",
        options: [
            { letter: "a", text: "El oxímetro de pulso muestra una saturación del 99%" },
            { letter: "b", text: "Mejora del color de la piel del paciente" },
            { letter: "c", text: "Se observa una elevación y descenso visible del tórax" },
            { letter: "d", text: "Se escuchan sonidos respiratorios al auscultar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el volumen tidal que se debe administrar al ventilar a un paciente adulto con un BVM?",
        options: [
            { letter: "a", text: "Suficiente para causar una elevación torácica visible y suave" },
            { letter: "b", text: "Apretar la bolsa completamente en cada ventilación" },
            { letter: "c", text: "Aproximadamente 1000 mL para asegurar la oxigenación" },
            { letter: "d", text: "Un volumen que mantenga el ETCO2 por debajo de 20 mmHg" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Atiende a un hombre de 60 años con sospecha de una caída de su propia altura. Está inconsciente y respira de forma ruidosa (ronquidos). ¿Cuál es la maniobra inicial correcta para manejar su vía aérea?",
        options: [
            { letter: "a", text: "Realizar la maniobra de inclinación de cabeza-elevación de mentón" },
            { letter: "b", text: "Insertar inmediatamente una cánula orofaríngea" },
            { letter: "c", text: "Realizar la maniobra de tracción mandibular" },
            { letter: "d", text: "Colocarlo en posición de recuperación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Su compañero aplica un oxímetro de pulso a un paciente en shock hipovolémico con extremidades frías y pálidas. La lectura es del 88%. ¿Qué factor podría estar causando una lectura imprecisa?",
        options: [
            { letter: "a", text: "Hipertensión" },
            { letter: "b", text: "Vasoconstricción periférica" },
            { letter: "c", text: "Fiebre" },
            { letter: "d", text: "Ictericia (coloración amarilla de la piel)" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En cuál de los siguientes pacientes estaría CONTRAINDICADO el uso de una cánula nasofaríngea (NPA)?",
        options: [
            { letter: "a", text: "Un paciente somnoliento con reflejo nauseoso intacto" },
            { letter: "b", text: "Un paciente con lesiones faciales graves y sospecha de fractura de la base del cráneo" },
            { letter: "c", text: "Un paciente que no tolera una cánula orofaríngea" },
            { letter: "d", text: "Un paciente con historial de asma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al aspirar secreciones líquidas (vómito) de la vía aérea de un paciente adulto, ¿cuál es el tiempo máximo recomendado por cada intento de succión?",
        options: [
            { letter: "a", text: "5 segundos" },
            { letter: "b", text: "15 segundos" },
            { letter: "c", text: "30 segundos" },
            { letter: "d", text: "Hasta que la vía aérea esté completamente despejada, sin importar el tiempo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Atiende a un paciente inconsciente post-convulsión. Presenta ronquidos y cianosis central. El oxímetro marca 85%. ¿Cuál es la secuencia de intervención más apropiada?",
        options: [
            { letter: "a", text: "Administrar oxígeno, insertar una OPA y luego abrir la vía aérea" },
            { letter: "b", text: "Realizar tracción mandibular y preparar equipo de intubación" },
            { letter: "c", text: "Colocar al paciente en posición de recuperación y esperar" },
            { letter: "d", text: "Abrir la vía aérea (frente-mentón), insertar una OPA si no hay reflejo nauseoso, y ventilar con BVM" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Usted está ventilando a un paciente adulto en apnea con un BVM. ¿Cuál es la frecuencia correcta para administrar las ventilaciones?",
        options: [
            { letter: "a", text: "Una ventilación cada 3-5 segundos (12-20 por minuto)" },
            { letter: "b", text: "Una ventilación cada 6 segundos (10 por minuto)" },
            { letter: "c", text: "Dos ventilaciones rápidas cada 10 segundos" },
            { letter: "d", text: "Tan rápido como sea posible para elevar la saturación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente de 70 años está alerta, pero con evidente dificultad respiratoria y una saturación de oxígeno del 90%. ¿Cuál es el dispositivo de administración de oxígeno más apropiado para este paciente?",
        options: [
            { letter: "a", text: "Cánula nasal a 4 L/min" },
            { letter: "b", text: "Mascarilla no recirculante a 15 L/min" },
            { letter: "c", text: "Ventilación con BVM sin oxígeno suplementario" },
            { letter: "d", text: "No se requiere oxígeno si el paciente sigue hablando" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes hallazgos es un signo inequívoco de ventilación inadecuada en un adulto?",
        options: [
            { letter: "a", text: "Frecuencia respiratoria de 18 por minuto" },
            { letter: "b", text: "Piel tibia, rosada y seca" },
            { letter: "c", text: "Uso de músculos accesorios en cuello y abdomen para respirar" },
            { letter: "d", text: "Movimiento torácico simétrico durante la inspiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En una persona sana, ¿cuál es el estímulo fisiológico primario que controla la frecuencia y profundidad de la respiración?",
        options: [
            { letter: "a", text: "El nivel de oxígeno (O₂) en la sangre" },
            { letter: "b", text: "El nivel de dióxido de carbono (CO₂) en la sangre" },
            { letter: "c", text: "La presión arterial sistémica" },
            { letter: "d", text: "La frecuencia cardíaca y el pulso" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Mientras ventila con un BVM a un paciente inconsciente, éste vomita. ¿Cuál debe ser su acción inmediata y prioritaria?",
        options: [
            { letter: "a", text: "Continuar ventilando para intentar pasar el vómito a los pulmones" },
            { letter: "b", text: "Detenerse, girar al paciente de lado, y succionar la orofaringe inmediatamente" },
            { letter: "c", text: "Insertar una cánula orofaríngea más grande para contener el vómito" },
            { letter: "d", text: "Ignorar el vómito y comenzar las compresiones torácicas" },
        ],
        correctAnswer: "b",
    }
];

export const airwayManagementChallengingQuestions: Question[] = [
    {
        question: "Un paciente de 45 años con quemadura facial severa presenta estridor inspiratorio progresivo, voz ronca, y dificultad creciente para deglutir saliva. Sus saturaciones han disminuido del 98% al 91% en los últimos 10 minutos a pesar del oxígeno de alta concentración. ¿Cuál es la estrategia más crítica de manejo de vía aérea?",
        options: [
            { letter: "a", text: "Continuar con oxígeno y observar evolución durante el transporte" },
            { letter: "b", text: "Preparación inmediata para intubación temprana antes de que el edema laríngeo cause obstrucción completa, considerando cricotirotomía como respaldo" },
            { letter: "c", text: "Administrar corticosteroides y esperar mejora" },
            { letter: "d", text: "Usar solo ventilación con bolsa-mascarilla hasta llegar al hospital" }
        ],
        correctAnswer: "b",
        explanation: "Las quemaduras por inhalación causan edema laríngeo progresivo que puede llevar a obstrucción completa de vía aérea en minutos. Los signos de alarma incluyen: estridor (obstrucción laríngea), cambios de voz (edema de cuerdas vocales), disfagia (edema supraglótico), y desaturación progresiva. La ventana de intubación se cierra rápidamente conforme progresa el edema. La intubación temprana, mientras aún es técnicamente posible, es crucial. La cricotirotomía debe estar preparada como procedimiento de rescate si la intubación se vuelve imposible por distorsión anatómica."
    },
    {
        question: "Durante la intubación de un paciente en paro cardíaco, visualiza las cuerdas vocales pero no puede pasar el tubo endotraqueal debido a resistencia. Después de tres intentos fallidos, el paciente presenta bradicardia severa y cianosis central. ¿Cuál es la secuencia de manejo más apropiada?",
        options: [
            { letter: "a", text: "Continuar intentos de intubación hasta lograr éxito" },
            { letter: "b", text: "Abandonar intubación inmediatamente, ventilar con BVM, considerar dispositivo supraglótico, y preparar vía aérea quirúrgica si persiste falla ventilatoria" },
            { letter: "c", text: "Cambiar a un tubo de menor calibre y continuar" },
            { letter: "d", text: "Administrar relajantes musculares para facilitar intubación" }
        ],
        correctAnswer: "b",
        explanation: "Esta situación ejemplifica el concepto crítico de 'falla de intubación, no falla de ventilación'. Los tres intentos fallidos indican intubación difícil/imposible. La bradicardia y cianosis reflejan hipoxia severa por apnea prolongada. El algoritmo de vía aérea difícil requiere: 1) Reconocer falla de intubación temprano (máximo 3 intentos), 2) Restaurar oxigenación inmediata con BVM, 3) Dispositivo supraglótico como puente (mascarilla laríngea, King LT), 4) Vía aérea quirúrgica si falla ventilación completamente. La prioridad es OXIGENACIÓN, no intubación."
    },
    {
        question: "Un paciente obeso mórbido (150 kg) con apnea del sueño severa requiere manejo de vía aérea después de parada respiratoria por sobredosis de opioides. La ventilación con BVM es extremadamente difícil debido a resistencia y escape de aire. ¿Qué consideraciones anatómicas y técnicas son más críticas?",
        options: [
            { letter: "a", text: "La obesidad no afecta significativamente el manejo de vía aérea" },
            { letter: "b", text: "Posición de rampa (elevación de cabeza y hombros), sellado hermético con dos personas en BVM, preparación para intubación rápida o dispositivo supraglótico debido a desaturación acelerada" },
            { letter: "c", text: "Solo usar cánulas orofaríngeas más grandes" },
            { letter: "d", text: "La naloxona resolverá todos los problemas de vía aérea" }
        ],
        correctAnswer: "b",
        explanation: "La obesidad mórbida presenta desafíos únicos en vía aérea: 1) Anatomía alterada: cuello corto, lengua grande, faringe colapsable, 2) Reserva funcional disminuida: desaturación rápida (2-3 minutos vs 8-10 en pacientes normales), 3) Mecánica ventilatoria comprometida: compliance pulmonar reducida, resistencia aumentada. La posición de rampa (30°) mejora visualización laríngea y mecánica respiratoria. La BVM de dos personas proporciona mejor sellado y volumen corriente. La naloxona puede revertir la depresión respiratoria pero no corrige inmediatamente los problemas anatómicos. La preparación para intubación o dispositivo supraglótico es crucial."
    },
    {
        question: "Un niño de 8 años presenta cuerpo extraño en vía aérea con estridor severo, tiraje intercostal, y cianosis perioral. Está consciente pero extremadamente angustiado. Los intentos de extracción digital fueron infructuosos. ¿Cuál es el enfoque más apropiado considerando la anatomía pediátrica?",
        options: [
            { letter: "a", text: "Intentar ventilación a presión positiva para empujar el objeto hacia bronquio principal" },
            { letter: "b", text: "Maniobras de desobstrucción (Heimlich modificado para niños), posición de confort, oxígeno humidificado, preparación para manejo avanzado si hay deterioro" },
            { letter: "c", text: "Intubación inmediata para empujar el objeto distalmente" },
            { letter: "d", text: "Sedación para reducir ansiedad y facilitar extracción" }
        ],
        correctAnswer: "b",
        explanation: "El manejo de cuerpo extraño en niños requiere consideraciones especiales: 1) La anatomía pediátrica (vía aérea más pequeña) hace que obstrucciones parciales puedan volverse completas rápidamente, 2) El niño consciente mantiene posición óptima para flujo aéreo, 3) Las maniobras de desobstrucción deben adaptarse a la edad (Heimlich modificado en niños >1 año), 4) La agitación aumenta consumo de oxígeno y puede empeorar obstrucción. Si el niño está ventilando parcialmente, evitar maniobras que puedan convertir obstrucción parcial en completa. La preparación para manejo avanzado (laringoscopía directa, extracción con fórceps, cricotirotomía) debe estar lista si hay deterioro."
    },
    {
        question: "Durante un código de trauma, un paciente politraumatizado requiere intubación de secuencia rápida (ISR). Presenta traumatismo craneoencefálico severo, posible lesión cervical, y está hemodinámicamente inestable con TA 85/45. ¿Cuál es la consideración farmacológica más crítica para la ISR?",
        options: [
            { letter: "a", text: "Usar dosis estándar de todos los medicamentos sin modificación" },
            { letter: "b", text: "Selección cuidadosa de agentes: evitar succinilcolina si hay trauma craneal (riesgo de hiperkalemia), usar etomidato con precaución en shock (supresión adrenal), considerar ketamina para inducción en pacientes inestables" },
            { letter: "c", text: "La farmacología no es relevante en trauma" },
            { letter: "d", text: "Usar solo relajantes musculares sin sedación" }
        ],
        correctAnswer: "b",
        explanation: "La ISR en trauma requiere farmacología especializada: 1) Succinilcolina puede causar hiperkalemia en trauma craneal, quemaduras, o lesiones por aplastamiento (usar rocuronio), 2) Etomidato causa supresión adrenal temporal que puede ser problemática en shock (considerar ketamina), 3) Ketamina mantiene estabilidad hemodinámica y no aumenta presión intracraneal contrario a creencias previas, 4) La dosificación debe ajustarse al estado hemodinámico (dosis reducidas en shock). El objetivo es intubar rápidamente minimizando hipotensión e hipoxia que pueden empeorar lesión cerebral secundaria."
    },
    {
        question: "Un paciente con artritis reumatoide severa y fusión cervical requiere manejo de vía aérea de emergencia. La laringoscopía directa es imposible debido a movilidad cervical limitada y apertura bucal reducida. ¿Cuál es la estrategia más apropiada para esta vía aérea anticipadamente difícil?",
        options: [
            { letter: "a", text: "Forzar la laringoscopía directa con mayor presión" },
            { letter: "b", text: "Usar videolaringoscopio si disponible, considerar dispositivo supraglótico como primera línea, preparar vía aérea quirúrgica, evitar relajantes musculares hasta asegurar ventilación" },
            { letter: "c", text: "Administrar relajantes musculares inmediatamente para mejorar condiciones" },
            { letter: "d", text: "Esperar hasta llegar al hospital sin intervenir" }
        ],
        correctAnswer: "b",
        explanation: "La vía aérea anticipadamente difícil requiere plan escalonado: 1) La artritis reumatoide causa fusión cervical, limitación de apertura bucal, y posible subluxación atlantoaxial, 2) El videolaringoscopio mejora visualización sin requerir alineación de ejes (oral-faríngeo-laríngeo), 3) Los dispositivos supraglóticos (King LT, mascarilla laríngea) pueden ser primera línea en vía aérea difícil, 4) Evitar relajantes musculares hasta confirmar capacidad de ventilación. La vía aérea quirúrgica debe estar preparada como último recurso. El manejo conservador ('awake intubation') puede ser preferible en algunos casos."
    },
    {
        question: "Una paciente embarazada de 36 semanas desarrolla eclampsia con convulsiones activas y requiere manejo de vía aérea. Presenta edema facial significativo y riesgo alto de aspiración por vómito. ¿Cuáles son las consideraciones fisiológicas más importantes durante la intubación?",
        options: [
            { letter: "a", text: "El embarazo no afecta el manejo de vía aérea" },
            { letter: "b", text: "Posición con elevación del flanco derecho para evitar compresión aortocava, preoxigenación acortada por reserva funcional reducida, mayor riesgo de aspiración, edema que puede dificultar visualización" },
            { letter: "c", text: "Solo enfocar en controlar las convulsiones" },
            { letter: "d", text: "Usar únicamente succinilcolina por ser segura en embarazo" }
        ],
        correctAnswer: "b",
        explanation: "El embarazo altera significativamente el manejo de vía aérea: 1) Cambios anatómicos: edema de vía aérea superior, aumento de volumen mamario que dificulta laringoscopía, 2) Cambios fisiológicos: reserva funcional reducida (desaturación rápida), aumento del consumo de oxígeno, 3) Riesgo aumentado de aspiración: relajación del esfínter esofágico, retraso del vaciamiento gástrico, 4) Posicionamiento: desplazamiento uterino izquierdo para evitar síndrome de hipotensión supina. La preoxigenación debe ser más breve pero efectiva. La selección farmacológica debe considerar efectos fetales y placentarios."
    },
    {
        question: "Un paciente con EPOC severo en insuficiencia respiratoria presenta CO2 de 85 mmHg y pH 7.25. Requiere ventilación asistida pero está consciente y cooperativo. Al iniciar VPP, desarrolla hipotensión severa y bradicardia. ¿Cuál es la causa más probable y el manejo inmediato?",
        options: [
            { letter: "a", text: "Reacción alérgica a medicamentos - administrar epinefrina" },
            { letter: "b", text: "Auto-PEEP por atrapamiento aéreo - reducir frecuencia respiratoria, permitir espiración completa, considerar desconexión temporal del ventilador" },
            { letter: "c", text: "Infarto agudo - administrar nitroglicerina" },
            { letter: "d", text: "Neumotórax - descompresión inmediata" }
        ],
        correctAnswer: "b",
        explanation: "Los pacientes con EPOC tienen tiempos espiratorios prolongados debido a obstrucción del flujo aéreo. La VPP puede causar 'breath stacking' (apilamiento respiratorio) y auto-PEEP: 1) El aire queda atrapado porque no hay tiempo suficiente para espiración completa, 2) Esto aumenta la presión intratorácica, compromete el retorno venoso, y causa hipotensión, 3) El manejo incluye: reducir frecuencia respiratoria (6-8/min), permitir espiración completa (I:E 1:3 o mayor), usar volúmenes corrientes menores (6-8 ml/kg), 4) La desconexión temporal del ventilador permite escape del aire atrapado y mejora hemodinámica."
    },
    {
        question: "Durante la ventilación de un paciente en shock séptico, nota que requiere presiones de ventilación cada vez mayores para mantener volúmenes corrientes adecuados. Sus saturaciones permanecen estables pero la presión pico ha aumentado de 20 a 45 cmH2O. ¿Cuál es la evaluación y manejo más apropiado?",
        options: [
            { letter: "a", text: "Continuar ventilación con las presiones altas sin modificar parámetros" },
            { letter: "b", text: "Evaluar compliance pulmonar, descartar neumotórax, broncoespasmo, o progresión de SDRA, ajustar estrategia ventilatoria a 'ventilación protectiva pulmonar'" },
            { letter: "c", text: "Aumentar la FiO2 únicamente" },
            { letter: "d", text: "Administrar más sedación al paciente" }
        ],
        correctAnswer: "b",
        explanation: "El aumento progresivo de presiones ventilatorias indica disminución de compliance pulmonar: 1) Causas mecánicas: neumotórax (evaluar ruidos respiratorios, simetría torácica), obstrucción del tubo (secreciones, acodamiento), 2) Causas pulmonares: broncoespasmo (sibilancias), edema pulmonar, progresión de SDRA, 3) El manejo incluye evaluación sistemática de causa y adaptación ventilatoria: volúmenes corrientes bajos (6 ml/kg peso ideal), presión meseta <30 cmH2O, PEEP optimizado. La 'ventilación protectiva' previene lesión pulmonar inducida por ventilador (VILI) que puede empeorar SDRA."
    },
    {
        question: "Un paciente politoxicómano presenta depresión respiratoria severa con frecuencia respiratoria de 4 por minuto. Después de administrar naloxona, despierta abruptamente, se agita extremadamente, e intenta autoextubarse mientras vomita activamente. ¿Cuál es el manejo más crítico de esta complicación?",
        options: [
            { letter: "a", text: "Administrar más naloxona para mantenerlo despierto" },
            { letter: "b", text: "Posición lateral de seguridad, aspiración agresiva, sedación controlada para prevenir autoextubación, monitoreo por síndrome de abstinencia y re-narcotización" },
            { letter: "c", text: "Restringir físicamente al paciente" },
            { letter: "d", text: "Extubar inmediatamente ya que está consciente" }
        ],
        correctAnswer: "b",
        explanation: "La reversión con naloxona puede precipitar síndrome de abstinencia agudo y agitación extrema: 1) La agitación puede causar autoextubación accidental con riesgo de aspiración y pérdida de vía aérea, 2) El vómito activo requiere protección de vía aérea (posición lateral, aspiración), 3) La sedación controlada (dosis tituladas de benzodiazepinas) controla agitación sin comprometer respiración, 4) Monitoreo continuo es crucial porque: a) la naloxona tiene vida media más corta que muchos opioides (re-narcotización), b) riesgo de síndrome de abstinencia prolongado. La extubación debe evaluarse cuidadosamente considerando nivel de conciencia estable y protección de vía aérea."
    }
];
