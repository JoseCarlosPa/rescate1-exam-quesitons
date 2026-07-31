import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuáles son las cuatro rutas por las que un veneno puede entrar al cuerpo?",
        answer: "Las cuatro rutas son: \n1. Inhalación (respirar gases o humos). \n2. Absorción (contacto con la piel o mucosas). \n3. Ingestión (tragar la sustancia). \n4. Inyección (a través de agujas, mordeduras o picaduras).",
    },
    {
        question: "¿Cuál es la primera prioridad al llegar a una escena con un posible envenenamiento por inhalación?",
        answer: "La primera y más importante prioridad es la seguridad de la escena. Antes de atender al paciente, el rescatador debe asegurarse de que no hay peligro para sí mismo, lo que puede implicar esperar a los bomberos o a un equipo de materiales peligrosos (HazMat). El paciente debe ser trasladado a un área con aire fresco lo antes posible.",
    },
    {
        question: "¿Qué es un 'toxidrome' y por qué es útil?",
        answer: "Un toxidrome es un conjunto de signos y síntomas característicos de la exposición a una clase particular de venenos o toxinas. Reconocer un toxidrome (por ejemplo, el síndrome opiáceo o el simpaticomimético) puede ayudar al proveedor a anticipar complicaciones y guiar el tratamiento, incluso si la sustancia exacta es desconocida.",
    },
    {
        question: "¿Para qué se utiliza el carbón activado y cuándo está contraindicado?",
        answer: "El carbón activado se usa para tratar algunos envenenamientos por ingestión. Actúa uniéndose al veneno en el estómago para prevenir su absorción. Está contraindicado si el paciente ha ingerido ácidos, álcalis o productos derivados del petróleo, o si tiene un estado mental alterado y no puede proteger su vía aérea.",
    },
    {
        question: "¿Cuáles son los signos clásicos de una sobredosis de opiáceos?",
        answer: "La tríada clásica de una sobredosis de opiáceos (como heroína o fentanilo) es: \n1. Depresión respiratoria o apnea. \n2. Pupilas puntiformes (miosis). \n3. Coma o nivel de conciencia disminuido.",
    },
    {
        question: "¿Cómo funciona la naloxona (Narcan)?",
        answer: "La naloxona es un antagonista de los receptores opiáceos. Funciona desplazando a los opiáceos de sus receptores en el sistema nervioso central, lo que revierte rápidamente la depresión respiratoria y del nivel de conciencia causada por una sobredosis de estas sustancias.",
    },
    {
        question: "¿Qué es el Delirium Tremens (DTs)?",
        answer: "El Delirium Tremens es la manifestación más grave del síndrome de abstinencia alcohólica. Es una emergencia médica caracterizada por agitación, fiebre, sudoración, temblores, confusión y alucinaciones. Puede ser mortal si no se trata adecuadamente.",
    },
    {
        question: "¿Cuál es el tratamiento inicial para una persona que ha absorbido un químico en polvo por la piel?",
        answer: "Primero, se debe cepillar cuidadosamente todo el polvo seco de la piel del paciente, evitando contaminarse. Después de retirar el polvo, se debe irrigar la zona afectada con grandes cantidades de agua durante al menos 15-20 minutos.",
    },
];


export const toxicologyQuestions: Question[] = [
    {
        "question": "Usted encuentra a un paciente inconsciente con respiraciones lentas y superficiales, y pupilas puntiformes. En la escena hay jeringas. ¿Qué clase de sustancia es la causa más probable de esta condición?",
        "options": [
            {"letter": "a", "text": "Simpaticomiméticos (estimulantes)"},
            {"letter": "b", "text": "Alucinógenos"},
            {"letter": "c", "text": "Opiáceos (narcóticos)"},
            {"letter": "d", "text": "Sedantes-hipnóticos"}
        ],
        "correctAnswer": "c",
        "explanation": "La tríada clásica de la sobredosis de opiáceos es: depresión del sistema nervioso central (inconsciencia), depresión respiratoria (respiraciones lentas y superficiales) y pupilas puntiformes (miosis). La presencia de parafernalia de drogas inyectables refuerza esta sospecha."
    },
    {
        "question": "Un trabajador de una planta química se derrama un líquido industrial en ambos brazos. Está alerta pero se queja de ardor. Su ropa está empapada. ¿Cuál es su acción prioritaria?",
        "options": [
            {"letter": "a", "text": "Administrar oxígeno inmediatamente"},
            {"letter": "b", "text": "Retirar la ropa contaminada e irrigar la piel con abundante agua"},
            {"letter": "c", "text": "Cubrir las quemaduras con apósitos secos"},
            {"letter": "d", "text": "Administrar carbón activado"}
        ],
        "correctAnswer": "b",
        "explanation": "En una exposición dérmica a un químico, la prioridad es detener el proceso de quemadura y la absorción. Esto se logra quitando toda la ropa contaminada y realizando una irrigación copiosa y prolongada de la piel con agua para diluir y eliminar la sustancia."
    },
    {
        "question": "La naloxona (Narcan) sería un tratamiento efectivo para una sobredosis de:",
        "options": [
            {"letter": "a", "text": "Cocaína"},
            {"letter": "b", "text": "Diazepam (Valium)"},
            {"letter": "c", "text": "Heroína"},
            {"letter": "d", "text": "Alcohol"}
        ],
        "correctAnswer": "c",
        "explanation": "La naloxona es un antagonista opioide puro. Funciona desplazando a los opiáceos (como la heroína, morfina o fentanilo) de sus receptores en el cerebro, revirtiendo rápidamente la depresión respiratoria y del SNC. No tiene efecto sobre otras clases de drogas."
    },
    {
        "question": "Un paciente que ingirió una sustancia desconocida presenta hipertensión, taquicardia, pupilas dilatadas y está extremadamente agitado. Este cuadro clínico corresponde a un toxidrome:",
        "options": [
            {"letter": "a", "text": "Colinérgico"},
            {"letter": "b", "text": "Opiáceo"},
            {"letter": "c", "text": "Simpaticomimético"},
            {"letter": "d", "text": "Sedante"}
        ],
        "correctAnswer": "c",
        "explanation": "Este conjunto de signos y síntomas (aumento de la frecuencia cardíaca y presión arterial, pupilas dilatadas, agitación) es característico de una sobreestimulación del sistema nervioso simpático, causado por drogas estimulantes como la cocaína, las anfetaminas o la metanfetamina."
    },
    {
        "question": "El uso de carbón activado estaría contraindicado en un paciente que ha ingerido:",
        "options": [
            {"letter": "a", "text": "Una sobredosis de aspirina"},
            {"letter": "b", "text": "Limpiador de desagües (un álcali fuerte)"},
            {"letter": "c", "text": "Una sobredosis de paracetamol"},
            {"letter": "d", "text": "Pastillas para dormir"}
        ],
        "correctAnswer": "b",
        "explanation": "El carbón activado está contraindicado en la ingestión de sustancias cáusticas (ácidos o álcalis fuertes) porque no se une eficazmente a ellas, puede inducir el vómito (causando una segunda quemadura en el esófago) y puede oscurecer la visión en una futura endoscopia."
    },
    {
        "question": "La principal preocupación y causa de muerte en pacientes con una sobredosis de sedantes-hipnóticos es:",
        "options": [
            {"letter": "a", "text": "La hipertensión severa"},
            {"letter": "b", "text": "La arritmia cardíaca"},
            {"letter": "c", "text": "La depresión respiratoria"},
            {"letter": "d", "text": "La insuficiencia renal"}
        ],
        "correctAnswer": "c",
        "explanation": "Los sedantes-hipnóticos (como las benzodiacepinas o los barbitúricos) son depresores del sistema nervioso central. En una sobredosis, su principal efecto letal es la supresión del centro respiratorio en el cerebro, lo que conduce a una respiración lenta y superficial, apnea y muerte por hipoxia."
    },
    {
        "question": "Una familia es encontrada en su casa en invierno con dolores de cabeza, náuseas y confusión. La causa más probable de estos síntomas es la intoxicación por:",
        "options": [
            {"letter": "a", "text": "Gas cloro"},
            {"letter": "b", "text": "Monóxido de carbono"},
            {"letter": "c", "text": "Pesticidas"},
            {"letter": "d", "text": "Intoxicación alimentaria"}
        ],
        "correctAnswer": "b",
        "explanation": "La presentación de múltiples pacientes en el mismo lugar con síntomas vagos similares a la gripe (cefalea, náuseas, mareos) durante el invierno es un cuadro clásico de intoxicación por monóxido de carbono (CO), a menudo debido a sistemas de calefacción defectuosos en espacios mal ventilados."
    },
    {
        "question": "Un paciente alcohólico crónico, que dejó de beber hace 48 horas, presenta alucinaciones visuales, temblores severos y taquicardia. Usted debe sospechar:",
        "options": [
            {"letter": "a", "text": "Intoxicación aguda por alcohol"},
            {"letter": "b", "text": "Delirium Tremens"},
            {"letter": "c", "text": "Sobredosis de opiáceos"},
            {"letter": "d", "text": "Hipoglucemia"}
        ],
        "correctAnswer": "b",
        "explanation": "El Delirium Tremens (DT) es la forma más grave de abstinencia alcohólica, que suele aparecer entre 48 y 96 horas después de la última bebida. Es una emergencia médica caracterizada por alucinaciones, agitación, fiebre, taquicardia y temblores."
    },
    {
        "question": "Su principal objetivo al tratar a un paciente que ha inhalado un gas tóxico es:",
        "options": [
            {"letter": "a", "text": "Identificar el gas exacto antes de actuar"},
            {"letter": "b", "text": "Trasladarlo a un área con aire fresco y administrar oxígeno"},
            {"letter": "c", "text": "Forzar al paciente a toser para limpiar sus pulmones"},
            {"letter": "d", "text": "Administrarle carbón activado"}
        ],
        "correctAnswer": "b",
        "explanation": "La prioridad absoluta en una intoxicación por inhalación es detener la exposición. Esto se logra retirando al paciente del ambiente tóxico a un área con aire limpio. La administración de oxígeno a alto flujo es crucial para tratar la hipoxia y ayudar a desplazar el gas tóxico."
    },
    {
        "question": "La ruta más común de envenenamiento es:",
        "options": [
            {"letter": "a", "text": "Inhalación"},
            {"letter": "b", "text": "Absorción"},
            {"letter": "c", "text": "Inyección"},
            {"letter": "d", "text": "Ingestión"}
        ],
        "correctAnswer": "d",
        "explanation": "Estadísticamente, la ingestión (tragar una sustancia) es, con diferencia, la vía de envenenamiento más frecuente, tanto en exposiciones accidentales (especialmente en niños) como en sobredosis intencionales."
    }
]

export const toxicologyChallengeQuestions: Question[] = [
    {
        "question": "Es llamado a un domicilio donde un hombre de 40 años, trabajador agrícola, es encontrado tirado junto a un tanque de pesticida organofosforado derramado. Presenta salivación profusa, lagrimeo, incontinencia urinaria, broncorrea intensa, sibilancias difusas y bradicardia de 42/min. Sus pupilas están mióticas. Además de la descontaminación y protección respiratoria del equipo (EPP con máscara y guantes), ¿cuál es la intervención farmacológica prehospitalaria más crítica para este paciente y por qué?",
        "options": [
            {"letter": "a", "text": "Administrar naloxona, ya que la bradicardia y la miosis sugieren una sobredosis opiácea concomitante"},
            {"letter": "b", "text": "Administrar atropina en dosis repetidas, ya que bloquea los receptores muscarínicos y revierte la broncorrea, la bradicardia y las secreciones que amenazan la vía aérea"},
            {"letter": "c", "text": "Administrar epinefrina IM para revertir la bradicardia mediante estimulación beta-adrenérgica"},
            {"letter": "d", "text": "Administrar carbón activado por sonda nasogástrica para limitar la absorción sistémica del organofosforado"}
        ],
        "correctAnswer": "b",
        "explanation": "Este es un toxidrome colinérgico clásico por inhibición de la acetilcolinesterasa: el exceso de acetilcolina sobreestimula los receptores muscarínicos (SLUDGE: salivación, lagrimeo, incontinencia urinaria, diarrea, malestar gastrointestinal, emesis) y también los receptores nicotínicos, causando broncorrea y broncoespasmo que pueden ahogar al paciente en sus propias secreciones. La atropina es un antagonista muscarínico competitivo que revierte específicamente la broncorrea, el broncoespasmo, la bradicardia y las secreciones, y a menudo se requieren dosis repetidas y agresivas hasta que las secreciones se sequen. La naloxona no tiene ningún efecto sobre receptores colinérgicos. El carbón activado no está indicado en exposición dérmica/inhalatoria y el riesgo de aspiración en un paciente con secreciones masivas y posible alteración del estado mental contraindica cualquier maniobra que no proteja primero la vía aérea."
    },
    {
        "question": "Un paciente de 22 años es encontrado agitado, con la piel roja, seca y caliente, pupilas dilatadas, taquicardia de 130/min, temperatura de 39.5°C, y verbaliza frases incoherentes mientras intenta quitarse la ropa. Un amigo menciona que tomó 'algo para la ansiedad' junto con un antihistamínico de venta libre en dosis altas. ¿Qué toxidrome explica mejor este cuadro y cuál es la diferencia clave que lo distingue del toxidrome simpaticomimético?",
        "options": [
            {"letter": "a", "text": "Toxidrome anticolinérgico; a diferencia del simpaticomimético, la piel está seca y caliente en lugar de diaforética, debido al bloqueo de los receptores muscarínicos en las glándulas sudoríparas"},
            {"letter": "b", "text": "Toxidrome colinérgico; la taquicardia y la fiebre son indistinguibles del simpaticomimético, por lo que no existe diferencia clínica relevante"},
            {"letter": "c", "text": "Toxidrome sedante-hipnótico; la agitación se debe a un efecto paradójico y las pupilas dilatadas confirman el diagnóstico"},
            {"letter": "d", "text": "Toxidrome opiáceo atípico; los antihistamínicos potencian el efecto miótico de los opiáceos y producen hipertermia por interacción farmacológica"}
        ],
        "correctAnswer": "a",
        "explanation": "El antihistamínico en dosis altas (y muchos ansiolíticos con propiedades anticolinérgicas) bloquea los receptores muscarínicos periféricos y centrales, produciendo el clásico cuadro 'rojo como remolacha, seco como hueso, ciego como murciélago, caliente como liebre y loco como sombrerero': rubefacción cutánea, piel seca (anhidrosis por bloqueo de glándulas sudoríparas), midriasis, hipertermia y delirio agitado. Esto contrasta con el toxidrome simpaticomimético (cocaína, anfetaminas), que también produce taquicardia, hipertermia y agitación, pero con piel diaforética (húmeda) porque la estimulación adrenérgica activa, en lugar de bloquear, las glándulas sudoríparas. Esta distinción táctil de la piel (seca vs. diaforética) es la clave clínica más confiable para diferenciar ambos toxidromes en el campo cuando la historia es incierta."
    },
    {
        "question": "Usted atiende a un paciente de 30 años encontrado inconsciente en un baño público, con frecuencia respiratoria de 4/min, pupilas puntiformes y cianosis peribucal. Su compañero refiere que también consumió alcohol y posiblemente 'unas pastillas para dormir' de su abuela. Antes de administrar naloxona, ¿cuál es la prioridad de manejo y qué riesgo debe anticipar al revertir la sobredosis en este contexto de politoxicomanía?",
        "options": [
            {"letter": "a", "text": "Administrar naloxona en dosis alta de inmediato para maximizar la reversión, ya que no existe riesgo al combinarla con benzodiacepinas o alcohol"},
            {"letter": "b", "text": "Asegurar primero la ventilación con dispositivo de balón-mascarilla y oxígeno suplementario, y anticipar que la naloxona revertirá solo el componente opiáceo, dejando al paciente aún deprimido por el alcohol y posibles sedantes-hipnóticos, con riesgo de agitación y vómito al despertar parcialmente"},
            {"letter": "c", "text": "Evitar cualquier soporte ventilatorio hasta confirmar el tipo exacto de sustancia ingerida mediante análisis toxicológico"},
            {"letter": "d", "text": "Administrar naloxona únicamente por vía intravenosa en bolo rápido, ya que la vía intranasal no es efectiva en depresión respiratoria severa"}
        ],
        "correctAnswer": "b",
        "explanation": "En cualquier sobredosis con depresión respiratoria severa, la prioridad inmediata es el manejo básico de la vía aérea y la ventilación asistida (BVM con oxígeno a alto flujo), ya que la oxigenación no puede esperar a la administración de un antídoto. La naloxona es un antagonista específico de receptores opiáceos y no tendrá ningún efecto sobre la depresión del SNC causada por alcohol o benzodiacepinas ('pastillas para dormir'), por lo que revertir parcialmente el componente opiáceo puede dejar al paciente con un nivel de conciencia fluctuante, todavía hipoventilando por los otros depresores, y con riesgo de agitación, vómito y aspiración al despertar abruptamente pero de forma incompleta. Por ello la ventilación asistida continua es indispensable independientemente de la respuesta a la naloxona."
    },
    {
        "question": "Un paciente de 50 años con antecedente de depresión es encontrado con un frasco vacío de amitriptilina junto a él. Está somnoliento, con piel seca, pupilas dilatadas, taquicardia de 140/min y el ECG de 12 derivaciones muestra un complejo QRS ensanchado de 130 ms. Su compañero sugiere administrar naloxona 'por si acaso hay opiáceos también'. ¿Cuál es la preocupación clínica más importante respecto a esta sugerencia y cuál es la intervención prioritaria basada en el ECG?",
        "options": [
            {"letter": "a", "text": "La naloxona está indicada y no representa ningún riesgo; la prioridad del ECG es preparar cardioversión eléctrica sincronizada"},
            {"letter": "b", "text": "La naloxona no tiene indicación en ausencia de evidencia clara de coingesta opiácea y puede consumir tiempo crítico; el QRS ensanchado por toxicidad de antidepresivos tricíclicos (bloqueo de canales de sodio) requiere alerta para bicarbonato de sodio en el hospital y monitoreo continuo por riesgo de arritmias ventriculares y convulsiones"},
            {"letter": "c", "text": "El QRS ensanchado indica hiperkalemia por insuficiencia renal aguda y debe tratarse con gluconato de calcio prehospitalario"},
            {"letter": "d", "text": "La combinación de naloxona con antidepresivos tricíclicos es sinérgica y mejora la reversión del estado mental alterado"}
        ],
        "correctAnswer": "b",
        "explanation": "Los antidepresivos tricíclicos (ATC) como la amitriptilina bloquean los canales rápidos de sodio cardíacos, lo que se traduce en un ensanchamiento progresivo del complejo QRS y predispone a arritmias ventriculares potencialmente letales y a convulsiones; un QRS mayor a 100 ms es un marcador de toxicidad significativa. Administrar naloxona sin evidencia clara de coingesta opiácea no aporta beneficio y retrasa el reconocimiento y manejo de la toxicidad cardíaca, que en el ámbito hospitalario se trata con bicarbonato de sodio para alcalinizar la sangre y reducir la fracción libre del fármaco unida a los canales de sodio. Además, se ha descrito que la naloxona puede, en algunos casos de sobredosis mixta, precipitar agitación o convulsiones al revertir abruptamente la sedación en un paciente con umbral convulsivo ya reducido por los ATC, por lo que su uso debe reservarse a evidencia razonable de opiáceos coingeridos y no administrarse de forma reflexiva."
    },
    {
        "question": "Llega a la escena de un incendio estructural y encuentra a un bombero retirado del lugar, consciente pero confundido, con cefalea intensa, náuseas y una saturación de oxígeno por pulsioximetría (SpO2) de 98%. ¿Por qué la lectura de SpO2 en este paciente es potencialmente peligrosa y qué acción debe tomar en consecuencia?",
        "options": [
            {"letter": "a", "text": "La SpO2 de 98% confirma oxigenación adecuada, por lo que no se requiere oxígeno suplementario"},
            {"letter": "b", "text": "La pulsioximetría estándar no puede distinguir entre oxihemoglobina y carboxihemoglobina, por lo que puede mostrar una lectura falsamente normal o elevada en presencia de intoxicación por monóxido de carbono; debe administrar oxígeno de alto flujo al 100% independientemente de la lectura y trasladar considerando la posibilidad de oxígeno hiperbárico"},
            {"letter": "c", "text": "La SpO2 elevada indica que el paciente está hiperventilando y debe ser tratado con una bolsa de reinhalación para elevar el CO2"},
            {"letter": "d", "text": "El pulsioxímetro está mal calibrado por el humo ambiental y debe ser reemplazado antes de confiar en cualquier signo vital"}
        ],
        "correctAnswer": "b",
        "explanation": "El monóxido de carbono (CO) tiene una afinidad por la hemoglobina aproximadamente 200 a 250 veces mayor que el oxígeno, formando carboxihemoglobina (COHb). Los pulsioxímetros convencionales de dos longitudes de onda no pueden diferenciar la carboxihemoglobina de la oxihemoglobina y frecuentemente interpretan la COHb como si fuera oxígeno unido, arrojando una SpO2 falsamente normal o incluso elevada mientras el paciente cursa una hipoxia tisular real y significativa. Por esta razón, ante sospecha clínica de intoxicación por CO (cefalea, náuseas, confusión, exposición a combustión), el tratamiento se basa en la presentación clínica y el contexto, no en la pulsioximetría: se debe administrar oxígeno al 100% con mascarilla no reinhalante (o considerar intubación si hay compromiso severo) para acelerar la disociación del CO de la hemoglobina, y evaluar traslado a un centro con cámara hiperbárica en casos graves."
    },
    {
        "question": "Un paciente de 35 años con antecedente de uso de heroína es encontrado apneico, con SpO2 de 78%, pupilas puntiformes y vómito visible en la vía aérea. Antes de que pueda colocar una cánula orofaríngea, comienza a vomitar activamente. ¿Cuál es la secuencia de manejo de vía aérea más apropiada, priorizando tanto la oxigenación como la protección contra aspiración?",
        "options": [
            {"letter": "a", "text": "Administrar naloxona intranasal inmediatamente antes de cualquier manejo de vía aérea, ya que revertirá el vómito activo"},
            {"letter": "b", "text": "Colocar al paciente en posición supina, insertar una vía aérea orofaríngea de inmediato y comenzar ventilación con BVM a pesar del vómito activo"},
            {"letter": "c", "text": "Colocar al paciente en posición de recuperación o lateral, succionar activamente la vía aérea para retirar el vómito, y una vez despejada, reevaluar la necesidad de dispositivo adjunto de vía aérea y ventilación asistida con oxígeno de alto flujo, reservando la naloxona como paso posterior una vez controlada la vía aérea"},
            {"letter": "d", "text": "Intubar endotraquealmente de inmediato sin succión previa, ya que el tubo endotraqueal protegerá la vía aérea del contenido gástrico"}
        ],
        "correctAnswer": "c",
        "explanation": "En un paciente con depresión respiratoria por opiáceos y vómito activo, el manejo de la vía aérea siempre precede a la administración de antídotos: la naloxona no actúa instantáneamente y no debe usarse como sustituto del manejo básico de la vía aérea. La secuencia correcta es proteger contra la aspiración colocando al paciente en posición lateral o de recuperación mientras se succiona el contenido gástrico, ya que insertar una cánula orofaríngea o ventilar con BVM durante el vómito activo empujaría el contenido gástrico hacia las vías respiratorias inferiores, causando neumonitis por aspiración. Solo después de despejar y controlar la vía aérea se debe reevaluar la necesidad de dispositivos adjuntos, ventilación asistida con oxígeno a alto flujo, y considerar la naloxona como parte del tratamiento continuo, idealmente titulada para revertir la depresión respiratoria sin precipitar un despertar violento con más vómito."
    }
]