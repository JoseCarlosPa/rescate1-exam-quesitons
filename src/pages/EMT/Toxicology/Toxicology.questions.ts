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
            { "letter": "a", "text": "Simpaticomiméticos (estimulantes)" },
            { "letter": "b", "text": "Alucinógenos" },
            { "letter": "c", "text": "Opiáceos (narcóticos)" },
            { "letter": "d", "text": "Sedantes-hipnóticos" }
        ],
        "correctAnswer": "c",
        "explanation": "La tríada clásica de la sobredosis de opiáceos es: depresión del sistema nervioso central (inconsciencia), depresión respiratoria (respiraciones lentas y superficiales) y pupilas puntiformes (miosis). La presencia de parafernalia de drogas inyectables refuerza esta sospecha."
    },
    {
        "question": "Un trabajador de una planta química se derrama un líquido industrial en ambos brazos. Está alerta pero se queja de ardor. Su ropa está empapada. ¿Cuál es su acción prioritaria?",
        "options": [
            { "letter": "a", "text": "Administrar oxígeno inmediatamente" },
            { "letter": "b", "text": "Retirar la ropa contaminada e irrigar la piel con abundante agua" },
            { "letter": "c", "text": "Cubrir las quemaduras con apósitos secos" },
            { "letter": "d", "text": "Administrar carbón activado" }
        ],
        "correctAnswer": "b",
        "explanation": "En una exposición dérmica a un químico, la prioridad es detener el proceso de quemadura y la absorción. Esto se logra quitando toda la ropa contaminada y realizando una irrigación copiosa y prolongada de la piel con agua para diluir y eliminar la sustancia."
    },
    {
        "question": "La naloxona (Narcan) sería un tratamiento efectivo para una sobredosis de:",
        "options": [
            { "letter": "a", "text": "Cocaína" },
            { "letter": "b", "text": "Diazepam (Valium)" },
            { "letter": "c", "text": "Heroína" },
            { "letter": "d", "text": "Alcohol" }
        ],
        "correctAnswer": "c",
        "explanation": "La naloxona es un antagonista opioide puro. Funciona desplazando a los opiáceos (como la heroína, morfina o fentanilo) de sus receptores en el cerebro, revirtiendo rápidamente la depresión respiratoria y del SNC. No tiene efecto sobre otras clases de drogas."
    },
    {
        "question": "Un paciente que ingirió una sustancia desconocida presenta hipertensión, taquicardia, pupilas dilatadas y está extremadamente agitado. Este cuadro clínico corresponde a un toxidrome:",
        "options": [
            { "letter": "a", "text": "Colinérgico" },
            { "letter": "b", "text": "Opiáceo" },
            { "letter": "c", "text": "Simpaticomimético" },
            { "letter": "d", "text": "Sedante" }
        ],
        "correctAnswer": "c",
        "explanation": "Este conjunto de signos y síntomas (aumento de la frecuencia cardíaca y presión arterial, pupilas dilatadas, agitación) es característico de una sobreestimulación del sistema nervioso simpático, causado por drogas estimulantes como la cocaína, las anfetaminas o la metanfetamina."
    },
    {
        "question": "El uso de carbón activado estaría contraindicado en un paciente que ha ingerido:",
        "options": [
            { "letter": "a", "text": "Una sobredosis de aspirina" },
            { "letter": "b", "text": "Limpiador de desagües (un álcali fuerte)" },
            { "letter": "c", "text": "Una sobredosis de paracetamol" },
            { "letter": "d", "text": "Pastillas para dormir" }
        ],
        "correctAnswer": "b",
        "explanation": "El carbón activado está contraindicado en la ingestión de sustancias cáusticas (ácidos o álcalis fuertes) porque no se une eficazmente a ellas, puede inducir el vómito (causando una segunda quemadura en el esófago) y puede oscurecer la visión en una futura endoscopia."
    },
    {
        "question": "La principal preocupación y causa de muerte en pacientes con una sobredosis de sedantes-hipnóticos es:",
        "options": [
            { "letter": "a", "text": "La hipertensión severa" },
            { "letter": "b", "text": "La arritmia cardíaca" },
            { "letter": "c", "text": "La depresión respiratoria" },
            { "letter": "d", "text": "La insuficiencia renal" }
        ],
        "correctAnswer": "c",
        "explanation": "Los sedantes-hipnóticos (como las benzodiacepinas o los barbitúricos) son depresores del sistema nervioso central. En una sobredosis, su principal efecto letal es la supresión del centro respiratorio en el cerebro, lo que conduce a una respiración lenta y superficial, apnea y muerte por hipoxia."
    },
    {
        "question": "Una familia es encontrada en su casa en invierno con dolores de cabeza, náuseas y confusión. La causa más probable de estos síntomas es la intoxicación por:",
        "options": [
            { "letter": "a", "text": "Gas cloro" },
            { "letter": "b", "text": "Monóxido de carbono" },
            { "letter": "c", "text": "Pesticidas" },
            { "letter": "d", "text": "Intoxicación alimentaria" }
        ],
        "correctAnswer": "b",
        "explanation": "La presentación de múltiples pacientes en el mismo lugar con síntomas vagos similares a la gripe (cefalea, náuseas, mareos) durante el invierno es un cuadro clásico de intoxicación por monóxido de carbono (CO), a menudo debido a sistemas de calefacción defectuosos en espacios mal ventilados."
    },
    {
        "question": "Un paciente alcohólico crónico, que dejó de beber hace 48 horas, presenta alucinaciones visuales, temblores severos y taquicardia. Usted debe sospechar:",
        "options": [
            { "letter": "a", "text": "Intoxicación aguda por alcohol" },
            { "letter": "b", "text": "Delirium Tremens" },
            { "letter": "c", "text": "Sobredosis de opiáceos" },
            { "letter": "d", "text": "Hipoglucemia" }
        ],
        "correctAnswer": "b",
        "explanation": "El Delirium Tremens (DT) es la forma más grave de abstinencia alcohólica, que suele aparecer entre 48 y 96 horas después de la última bebida. Es una emergencia médica caracterizada por alucinaciones, agitación, fiebre, taquicardia y temblores."
    },
    {
        "question": "Su principal objetivo al tratar a un paciente que ha inhalado un gas tóxico es:",
        "options": [
            { "letter": "a", "text": "Identificar el gas exacto antes de actuar" },
            { "letter": "b", "text": "Trasladarlo a un área con aire fresco y administrar oxígeno" },
            { "letter": "c", "text": "Forzar al paciente a toser para limpiar sus pulmones" },
            { "letter": "d", "text": "Administrarle carbón activado" }
        ],
        "correctAnswer": "b",
        "explanation": "La prioridad absoluta en una intoxicación por inhalación es detener la exposición. Esto se logra retirando al paciente del ambiente tóxico a un área con aire limpio. La administración de oxígeno a alto flujo es crucial para tratar la hipoxia y ayudar a desplazar el gas tóxico."
    },
    {
        "question": "La ruta más común de envenenamiento es:",
        "options": [
            { "letter": "a", "text": "Inhalación" },
            { "letter": "b", "text": "Absorción" },
            { "letter": "c", "text": "Inyección" },
            { "letter": "d", "text": "Ingestión" }
        ],
        "correctAnswer": "d",
        "explanation": "Estadísticamente, la ingestión (tragar una sustancia) es, con diferencia, la vía de envenenamiento más frecuente, tanto en exposiciones accidentales (especialmente en niños) como en sobredosis intencionales."
    }
]