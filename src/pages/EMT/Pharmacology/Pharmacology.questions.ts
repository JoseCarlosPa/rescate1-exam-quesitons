import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un fármaco?",
        answer: "Es cualquier sustancia química que, al interactuar con un sistema biológico, altera sus funciones normales."
    },
    {
        question: "¿Cuál es la diferencia entre un fármaco y un medicamento?",
        answer: "Un fármaco es la sustancia activa, mientras que un medicamento es la preparación farmacéutica que contiene uno o más fármacos, formulada para ser administrada con fines terapéuticos, diagnósticos o preventivos."
    },
    {
        question: "¿Cuáles son los 'cinco correctos' de la administración de medicamentos?",
        answer: "Los 'cinco correctos' son: Paciente correcto, Medicamento correcto, Dosis correcta, Vía correcta y Hora correcta. A menudo se añaden 'documentación correcta' y 'razón correcta'."
    },
    {
        question: "¿Qué medicamento prehospitalario se utiliza comúnmente en reacciones anafilácticas graves?",
        answer: "La Epinefrina es el medicamento de elección en reacciones anafilácticas graves debido a sus efectos broncodilatadores y vasopresores."
    },
    {
        question: "¿Qué vía de administración generalmente permite el efecto más rápido de un medicamento?",
        answer: "La vía intravenosa (IV) es la que generalmente permite el efecto más rápido de un medicamento, ya que introduce el fármaco directamente en el torrente sanguíneo."
    },
    {
        question: "¿Qué medicamento se administra para hipoglucemia en un paciente consciente?",
        answer: "En un paciente consciente con hipoglucemia, se administra Glucosa oral."
    },
    {
        question: "¿Qué medicamento se utiliza para inhibir la agregación plaquetaria en casos de infarto agudo de miocardio?",
        answer: "La Aspirina es el medicamento utilizado para inhibir la agregación plaquetaria en el contexto de un infarto agudo de miocardio."
    },
    {
        question: "¿Qué es la farmacodinamia?",
        answer: "La farmacodinamia es el estudio de cómo los medicamentos actúan en el cuerpo y producen sus efectos, es decir, qué le hace el fármaco al cuerpo."
    },
    {
        question: "¿Qué es una contraindicación de un medicamento?",
        answer: "Una contraindicación es una condición o factor que hace que el uso de un medicamento en particular sea peligroso o desaconsejable para un paciente, ya que podría causar daño."
    }
];

export const pharmacologyQuestions: Question[] = [
    {
        "question": "¿Cuál de las siguientes describe mejor el estudio de cómo el cuerpo procesa los medicamentos (absorción, distribución, metabolismo y excreción)?",
        "options": [
            {"letter": "a", "text": "Farmacodinamia"},
            {"letter": "b", "text": "Farmacocinética"},
            {"letter": "c", "text": "Toxicología"},
            {"letter": "d", "text": "Farmacognosia"}
        ],
        "correctAnswer": "b",
        "explanation": "La farmacocinética es el estudio de lo que el cuerpo le hace al fármaco: cómo lo absorbe, lo distribuye a los tejidos, lo metaboliza (descompone) y lo elimina. La farmacodinamia, en cambio, es lo que el fármaco le hace al cuerpo."
    },
    {
        "question": "¿Qué término se refiere a los efectos deseados de un medicamento que alivian los síntomas o tratan una condición?",
        "options": [
            {"letter": "a", "text": "Efectos adversos"},
            {"letter": "b", "text": "Efectos secundarios"},
            {"letter": "c", "text": "Efectos terapéuticos"},
            {"letter": "d", "text": "Interacciones farmacológicas"}
        ],
        "correctAnswer": "c",
        "explanation": "El efecto terapéutico es la razón principal por la que se administra un medicamento; es el resultado beneficioso y deseado que se espera del tratamiento."
    },
    {
        "question": "¿Cuál de las siguientes es una ventaja clave de la administración de medicamentos por vía sublingual?",
        "options": [
            {"letter": "a", "text": "Absorción lenta y sostenida"},
            {"letter": "b", "text": "Evita el metabolismo de primer paso hepático"},
            {"letter": "c", "text": "Adecuado para grandes volúmenes de líquido"},
            {"letter": "d", "text": "Requiere la ingesta de alimentos para una mejor absorción"}
        ],
        "correctAnswer": "b",
        "explanation": "Al absorberse directamente en los capilares debajo de la lengua, el medicamento ingresa a la circulación sistémica sin pasar primero por el hígado. Esto evita el 'metabolismo de primer paso', lo que resulta en un inicio de acción más rápido y una mayor biodisponibilidad."
    },
    {
        "question": "Un paciente refiere que está tomando múltiples medicamentos recetados y también algunos suplementos herbales. ¿Por qué es crucial para el paramédico preguntar sobre todos los medicamentos, incluidos los de venta libre y los suplementos?",
        "options": [
            {"letter": "a", "text": "Porque la mayoría de los pacientes olvidan mencionar medicamentos importantes."},
            {"letter": "b", "text": "Para determinar si el paciente es adherente a su tratamiento médico."},
            {
                "letter": "c",
                "text": "Debido a la posibilidad de interacciones farmacológicas que podrían afectar la condición del paciente o el tratamiento de emergencia."
            },
            {"letter": "d", "text": "Es importante solo si el paciente presenta efectos secundarios evidentes."}
        ],
        "correctAnswer": "c",
        "explanation": "Los medicamentos de venta libre, los suplementos herbales y los medicamentos recetados pueden interactuar entre sí de manera peligrosa. Conocer todos los fármacos que toma un paciente es vital para evitar administrar un tratamiento que pueda causar una interacción adversa."
    },
    {
        "question": "¿Qué vía de administración de medicamentos implica la inyección en el tejido muscular?",
        "options": [
            {"letter": "a", "text": "Intravenosa (IV)"},
            {"letter": "b", "text": "Subcutánea (SC)"},
            {"letter": "c", "text": "Intramuscular (IM)"},
            {"letter": "d", "text": "Intraósea (IO)"}
        ],
        "correctAnswer": "c",
        "explanation": "La vía intramuscular (IM) consiste en inyectar el medicamento directamente en un músculo grande, como el deltoides o el vasto lateral del muslo, lo que permite una absorción relativamente rápida."
    },
    {
        "question": "¿Cuál de los siguientes es un ejemplo de un efecto adverso grave de un medicamento?",
        "options": [
            {"letter": "a", "text": "Leve somnolencia después de tomar un antihistamínico."},
            {"letter": "b", "text": "Náuseas leves que desaparecen con el tiempo."},
            {"letter": "c", "text": "Una reacción anafiláctica severa con compromiso de la vía aérea."},
            {"letter": "d", "text": "Sequedad de boca al usar un descongestionante nasal."}
        ],
        "correctAnswer": "c",
        "explanation": "Una reacción anafiláctica es un efecto adverso grave y potencialmente mortal que requiere una intervención inmediata. Los otros ejemplos son efectos secundarios leves y generalmente predecibles."
    },
    {
        "question": "¿Qué ventaja principal tiene la administración de medicamentos por vía oral (VO)?",
        "options": [
            {"letter": "a", "text": "Inicio de acción muy rápido."},
            {"letter": "b", "text": "Es la vía más segura y conveniente para el autotratamiento."},
            {"letter": "c", "text": "Evita completamente el metabolismo de primer paso."},
            {"letter": "d", "text": "Permite la administración de grandes volúmenes de líquido."}
        ],
        "correctAnswer": "b",
        "explanation": "La vía oral es generalmente la más fácil, segura y económica de administrar. No requiere equipo estéril y los pacientes pueden tomarla por sí mismos, lo que la hace muy conveniente para el uso ambulatorio y a largo plazo."
    },
    {
        "question": "¿Cuál de los siguientes medicamentos se utiliza principalmente para aliviar el dolor torácico asociado con la isquemia cardíaca al dilatar los vasos sanguíneos?",
        "options": [
            {"letter": "a", "text": "Aspirina"},
            {"letter": "b", "text": "Nitroglicerina"},
            {"letter": "c", "text": "Epinefrina"},
            {"letter": "d", "text": "Glucosa oral"}
        ],
        "correctAnswer": "b",
        "explanation": "La nitroglicerina es un potente vasodilatador. Relaja las venas y arterias, incluyendo las arterias coronarias, lo que reduce la carga de trabajo del corazón y aumenta el suministro de oxígeno al miocardio, aliviando así el dolor de la angina de pecho."
    },
    {
        "question": "¿Qué vía se usa para administrar medicamentos debajo de la piel, como la insulina o la epinefrina en autoinyectores?",
        "options": [
            {"letter": "a", "text": "Intramuscular"},
            {"letter": "b", "text": "Intravenosa"},
            {"letter": "c", "text": "Subcutánea"},
            {"letter": "d", "text": "Oral"}
        ],
        "correctAnswer": "c",
        "explanation": "La vía subcutánea (SC) implica la inyección de un medicamento en la capa de tejido graso que se encuentra justo debajo de la piel. Es una vía común para la insulina, ya que permite una absorción lenta y constante."
    },
    {
        "question": "¿Qué tipo de medicamento se clasifica como 'controlado' y requiere una regulación estricta debido a su potencial de abuso o dependencia?",
        "options": [
            {"letter": "a", "text": "Antibióticos"},
            {"letter": "b", "text": "Antiinflamatorios no esteroideos (AINEs)"},
            {"letter": "c", "text": "Opioides (ej. Morfina)"},
            {"letter": "d", "text": "Vitaminas"}
        ],
        "correctAnswer": "c",
        "explanation": "Los opioides son analgésicos potentes que actúan sobre el sistema nervioso central. Debido a su alto potencial de abuso y dependencia física y psicológica, están clasificados como sustancias controladas por las agencias gubernamentales."
    },
    {
        "question": "¿Qué parámetro es vital monitorear de cerca después de administrar Epinefrina debido a sus potentes efectos cardiovasculares?",
        "options": [
            {"letter": "a", "text": "Temperatura corporal"},
            {"letter": "b", "text": "Nivel de glucosa en sangre"},
            {"letter": "c", "text": "Frecuencia cardíaca y presión arterial"},
            {"letter": "d", "text": "Nivel de oxígeno por oximetría de pulso"}
        ],
        "correctAnswer": "c",
        "explanation": "La epinefrina es un potente estimulante adrenérgico que causa un aumento significativo de la frecuencia cardíaca, la contractilidad del corazón y la presión arterial. Es crucial monitorear estos parámetros para evaluar la respuesta y detectar posibles efectos adversos como taquiarritmias o hipertensión severa."
    },
    {
        "question": "¿Cuál es el propósito principal de administrar carbón activado en ciertas intoxicaciones orales?",
        "options": [
            {"letter": "a", "text": "Inducir el vómito para eliminar la toxina."},
            {"letter": "b", "text": "Neutralizar el pH gástrico y la toxina."},
            {
                "letter": "c",
                "text": "Absorber la toxina en el tracto gastrointestinal, previniendo su absorción sistémica."
            },
            {"letter": "d", "text": "Aumentar la eliminación renal de la toxina."}
        ],
        "correctAnswer": "c",
        "explanation": "El carbón activado tiene una enorme superficie porosa que le permite unirse (adsorber) a muchas toxinas y medicamentos en el estómago y los intestinos. Al unirse a la toxina, evita que esta sea absorbida por el cuerpo y la transporta a través del tracto digestivo para su eliminación."
    },
    {
        "question": "¿Qué significa el 'nombre genérico' de un medicamento en comparación con su 'nombre comercial'?",
        "options": [
            {
                "letter": "a",
                "text": "El nombre genérico es la marca registrada, mientras que el comercial es la sustancia activa."
            },
            {
                "letter": "b",
                "text": "El nombre genérico es el nombre químico oficial, y el comercial es el nombre de patente de la compañía farmacéutica."
            },
            {
                "letter": "c",
                "text": "El nombre genérico es asignado por la FDA, mientras que el comercial es elegido por los médicos."
            },
            {"letter": "d", "text": "Ambos se refieren a la misma cosa y son intercambiables en todos los contextos."}
        ],
        "correctAnswer": "b",
        "explanation": "El nombre genérico (ej. 'ibuprofeno') es el nombre oficial y no patentado del principio activo. El nombre comercial o de marca (ej. 'Advil', 'Motrin') es el nombre que la compañía farmacéutica le da a su producto para su comercialización."
    },
    {
        "question": "¿Qué forma de medicamento es un dispositivo que entrega una dosis precisa de un fármaco directamente a los pulmones, comúnmente usado para el asma?",
        "options": [
            {"letter": "a", "text": "Tableta sublingual"},
            {"letter": "b", "text": "Inyección intramuscular"},
            {"letter": "c", "text": "Inhalador de dosis medida (IDM)"},
            {"letter": "d", "text": "Supositorio rectal"}
        ],
        "correctAnswer": "c",
        "explanation": "Un inhalador de dosis medida (IDM o MDI en inglés) es un dispositivo presurizado que libera una cantidad específica y uniforme de medicamento en forma de aerosol, diseñado para ser inhalado directamente en las vías respiratorias para un efecto local rápido."
    },
    {
        "question": "¿Cuál de las siguientes NO es una de las vías de administración de medicamentos mencionadas en el capítulo?",
        "options": [
            {"letter": "a", "text": "Intradérmica (ID)"},
            {"letter": "b", "text": "Intravenosa (IV)"},
            {"letter": "c", "text": "Intratecal (IT)"},
            {"letter": "d", "text": "Transcutánea (TC)"}
        ],
        "correctAnswer": "c",
        "explanation": "La vía intratecal, que implica la inyección en el espacio que rodea la médula espinal, es una técnica altamente especializada que no es realizada por los paramédicos en el entorno prehospitalario. Las otras vías sí son relevantes para la práctica del PAP."
    },
    {
        "question": "¿Qué es un 'efecto secundario' de un medicamento?",
        "options": [
            {"letter": "a", "text": "Un efecto deseado y beneficioso del medicamento."},
            {"letter": "b", "text": "Una reacción adversa que siempre es grave y potencialmente mortal."},
            {
                "letter": "c",
                "text": "Un efecto no deseado que ocurre además del efecto terapéutico principal, pero que generalmente es predecible y no siempre grave."
            },
            {"letter": "d", "text": "La interacción entre dos o más medicamentos en el cuerpo."}
        ],
        "correctAnswer": "c",
        "explanation": "Un efecto secundario es cualquier efecto de un fármaco que no es el efecto terapéutico primario. Puede ser leve (somnolencia) o grave, pero es una acción conocida y a menudo predecible del medicamento en el cuerpo."
    },
    {
        "question": "¿Por qué es fundamental que un paramédico entienda las indicaciones de un medicamento?",
        "options": [
            {"letter": "a", "text": "Para saber cuándo el medicamento no debe administrarse."},
            {"letter": "b", "text": "Para conocer los efectos secundarios que podría causar."},
            {
                "letter": "c",
                "text": "Para identificar las condiciones o situaciones específicas en las que el medicamento es apropiado y beneficioso."
            },
            {"letter": "d", "text": "Para comprender cómo el medicamento se elimina del cuerpo."}
        ],
        "correctAnswer": "c",
        "explanation": "La 'indicación' es la razón médica para usar un medicamento. Comprender las indicaciones asegura que el fármaco se administre solo a los pacientes que se beneficiarán de él, para la condición correcta y en la situación adecuada, lo que garantiza un tratamiento seguro y efectivo."
    },
    {
        "question": "¿Qué acción debe tomar un paramédico si un paciente experimenta un efecto adverso grave después de la administración de un medicamento?",
        "options": [
            {"letter": "a", "text": "Interrumpir inmediatamente el medicamento y monitorear al paciente."},
            {"letter": "b", "text": "Administrar una dosis adicional para contrarrestar el efecto."},
            {"letter": "c", "text": "Asumir que es una reacción normal y continuar el tratamiento."},
            {"letter": "d", "text": "Documentarlo y esperar la llegada al hospital sin intervenir."}
        ],
        "correctAnswer": "a",
        "explanation": "Ante cualquier reacción adversa grave, la primera medida es detener la administración del agente causante. Luego, se debe evaluar y manejar las condiciones que amenazan la vida del paciente (ABCs), monitorear de cerca sus signos vitales y prepararse para un tratamiento de soporte."
    },
    {
        "question": "¿Cuál de las siguientes afirmaciones es CORRECTA sobre la administración de oxígeno suplementario por un paramédico?",
        "options": [
            {"letter": "a", "text": "El oxígeno se considera un medicamento y debe administrarse con precaución."},
            {"letter": "b", "text": "El oxígeno siempre debe administrarse a la máxima concentración posible."},
            {"letter": "c", "text": "El oxígeno es una droga autoadministrada por el paciente."},
            {"letter": "d", "text": "El oxígeno no tiene efectos adversos conocidos."}
        ],
        "correctAnswer": "a",
        "explanation": "El oxígeno es un medicamento recetado. Tiene indicaciones específicas (hipoxia), contraindicaciones relativas y dosis (flujo y dispositivo). Su administración debe ser titulada para lograr una saturación de oxígeno adecuada, ya que un exceso puede ser perjudicial en ciertas condiciones."
    },
    {
        "question": "¿Qué tipo de administración de medicamento describe mejor cuando el paramédico asiste a un paciente para tomar su propio medicamento recetado, como nitroglicerina?",
        "options": [
            {"letter": "a", "text": "Autoadministrada"},
            {"letter": "b", "text": "Administrada por PAP"},
            {"letter": "c", "text": "Asistida por el paciente"},
            {"letter": "d", "text": "Asistida por el director médico"}
        ],
        "correctAnswer": "c",
        "explanation": "Este escenario se define como 'administración asistida por el paciente'. El medicamento pertenece al paciente, pero el paramédico le ayuda a tomarlo, asegurándose de que sea el medicamento correcto, la dosis correcta y que no existan contraindicaciones."
    }
]

export const pharmacologyChallengeQuestions: Question[] = [
    {
        question: "Un paciente de 75 años con insuficiencia renal crónica presenta dolor torácico y recibe nitroglicerina sublingual. Después de la segunda dosis, desarrolla hipotensión severa (PA 70/40) que no responde a fluidos. Su creatinina sérica basal es 3.2 mg/dL. ¿Cuál es la consideración farmacocinética más crítica que explica esta respuesta exagerada?",
        options: [
            {letter: "a", text: "La insuficiencia renal no afecta el metabolismo de la nitroglicerina"},
            {
                letter: "b",
                text: "La eliminación reducida de nitroglicerina y metabolitos activos, combinada con posible hipovolemia crónica y disminución de respuesta barorreceptora en adultos mayores"
            },
            {letter: "c", text: "La absorción sublingual está aumentada en pacientes con insuficiencia renal"},
            {letter: "d", text: "Los pacientes renales siempre tienen contraindicación absoluta para nitroglicerina"}
        ],
        correctAnswer: "b",
        explanation: "La insuficiencia renal altera múltiples aspectos farmacocinéticos: 1) Eliminación renal reducida de nitroglicerina y sus metabolitos activos, 2) Posible estado de hipovolemia crónica por diuresis o restricción hídrica, aumentando sensibilidad a vasodilatadores, 3) Los adultos mayores tienen respuesta barorreceptora disminuida (menor compensación por taquicardia ante hipotensión), 4) Posible hipoproteinemia que aumenta fracción libre del fármaco. El manejo requiere dosis reducidas, monitoreo estrecho, y preparación para soporte hemodinámico."
    },
    {
        question: "Durante una emergencia de anafilaxia severa, administra epinefrina 1:1000 IM a un paciente que toma propranolol diario para hipertensión. La epinefrina inicialmente mejora el broncoespasmo, pero la hipotensión persiste y empeora. ¿Cuál es el mecanismo de esta interacción farmacológica y el manejo más apropiado?",
        options: [
            {letter: "a", text: "El propranolol no interactúa con la epinefrina"},
            {
                letter: "b",
                text: "El bloqueo beta-adrenérgico impide los efectos cronotrópicos e inotrópicos de la epinefrina, permitiendo vasodilatación alfa-2 no opuesta, requiriendo glucagón como antídoto específico"
            },
            {letter: "c", text: "Se debe aumentar la dosis de epinefrina al doble"},
            {letter: "d", text: "La interacción solo afecta el sistema respiratorio"}
        ],
        correctAnswer: "b",
        explanation: "Esta interacción farmacológica compleja involucra: 1) El propranolol bloquea receptores β1 y β2, impidiendo efectos cronotrópicos (aumento FC) e inotrópicos (aumento contractilidad) de la epinefrina, 2) Los efectos α2 de la epinefrina (vasodilatación) quedan sin oposición de los efectos β2 (vasoconstricción), causando 'reversión de la epinefrina', 3) El glucagón actúa independiente de receptores beta, aumentando AMPc y mejorando contractilidad cardíaca, 4) Dosis típica: glucagón 1-5mg IV, seguido de infusión si es necesario. También considerar vasopresina como vasopresor alternativo."
    },
    {
        question: "Un paciente diabético en coma presenta glucemia capilar de 35 mg/dL. Al administrar dextrosa 50% IV, se produce extravasación significativa en el sitio de punción. ¿Cuáles son las consideraciones farmacológicas más críticas de esta complicación?",
        options: [
            {letter: "a", text: "La dextrosa 50% es isotónica y no causa daño tisular"},
            {
                letter: "b",
                text: "La dextrosa 50% es extremadamente hipertónica (2500 mOsm/L), puede causar necrosis tisular severa, requiriendo dilución inmediata, elevación, y consideración de hialuronidasa para mejorar dispersión"
            },
            {letter: "c", text: "Solo se debe aplicar hielo en el área de extravasación"},
            {letter: "d", text: "La extravasación de dextrosa no requiere tratamiento espec��fico"}
        ],
        correctAnswer: "b",
        explanation: "La dextrosa 50% es una solución extremadamente hipertónica: 1) Osmolaridad ~2500 mOsm/L (vs plasma ~290 mOsm/L), 2) La extravasación puede causar lesión endotelial, trombosis, necrosis tisular, y síndrome compartimental, 3) El manejo incluye: dilución inmediata con salina, elevación del miembro, compresas tibias para vasodilatación, hialuronidasa 150U en 5 sitios alrededor de extravasación para mejorar dispersión, 4) Prevención: usar venas grandes, diluir dextrosa (D25% o D10%), o usar glucagón 1mg IM si no hay acceso IV confiable."
    },
    {
        question: "Un paciente con EPOC severo presenta exacerbación aguda. Su saturación de oxígeno es 85% y está recibiendo oxígeno al 28% por mascarilla Venturi. El médico de control médico ordena aumentar a 100%. ¿Cuál es la consideración fisiopatológica más importante antes de seguir esta orden?",
        options: [
            {letter: "a", text: "Los pacientes con EPOC no pueden recibir oxígeno de alta concentración"},
            {
                letter: "b",
                text: "Los pacientes con EPOC pueden tener 'drive hipóxico' donde el estímulo respiratorio depende de hipoxemia; el oxígeno de alta concentración puede suprimir el drive respiratorio, pero la hipoxia severa es más peligrosa inmediatamente"
            },
            {letter: "c", text: "Siempre se debe dar oxígeno al 100% sin consideraciones especiales"},
            {letter: "d", text: "La teoría del drive hipóxico siempre contraindica el oxígeno suplementario"}
        ],
        correctAnswer: "b",
        explanation: "La oxigenoterapia en EPOC requiere balance riesgo-beneficio: 1) Algunos pacientes con EPOC crónico desarrollan 'drive hipóxico' donde el centro respiratorio responde a hipoxemia más que a hipercapnia, 2) El oxígeno de alta concentración puede suprimir este drive, causando hipoventilación y retención de CO2, 3) Sin embargo, la hipoxia severa (SatO2 <85%) causa daño orgánico inmediato más peligroso que la hipercapnia, 4) El enfoque correcto es oxigenoterapia titulada: objetivo SatO2 88-92%, monitoreo estrecho de estado mental y ventilación, preparación para ventilación asistida si es necesario."
    },
    {
        question: "Un paciente toma warfarina y presenta sangrado gastrointestinal severo. Requiere cardioversión eléctrica urgente por fibrilación auricular con respuesta ventricular rápida e hipotensión. Su INR es 4.5. ¿Cuál es el manejo farmacológico más apropiado para el riesgo tromboembólico vs hemorrágico?",
        options: [
            {letter: "a", text: "Proceder con cardioversión sin modificar anticoagulación"},
            {
                letter: "b",
                text: "El manejo debe balancear riesgo embólico vs hemorrágico: considerar vitamina K para reducir INR, pero la cardioversión urgente puede requerir proceder con anticoagulación subóptima, monitoreo neurológico estrecho"
            },
            {letter: "c", text: "Administrar heparina adicional antes de cardioversión"},
            {letter: "d", text: "Suspender toda anticoagulación inmediatamente"}
        ],
        correctAnswer: "b",
        explanation: "Esta situación representa un dilema farmacológico complejo: 1) La fibrilación auricular aumenta riesgo de embolia cerebral, especialmente con cardioversión, 2) El INR elevado (4.5) con sangrado activo contraindicaria anticoagulación normalmente, 3) La cardioversión urgente puede requerir proceder a pesar de anticoagulación subóptima si hay inestabilidad hemodinámica, 4) Considerar: vitamina K 2.5-5mg IV para reducción parcial de INR, factor VII recombinante o complejo protrombínico si disponible, monitoreo neurológico estrecho post-cardioversión. La decisión final depende de la severidad relativa de ambas condiciones."
    },
    {
        question: "Una paciente embarazada de 32 semanas presenta eclampsia con convulsiones tónicoclónicas generalizadas. El sulfato de magnesio IV detiene las convulsiones, pero desarrolla depresión respiratoria severa (FR 6/min) y arreflexia. ¿Cuál es el antídoto específico y su mecanismo de acción?",
        options: [
            {letter: "a", text: "Naloxona - bloquea receptores opioides"},
            {
                letter: "b",
                text: "Gluconato de calcio - antagoniza competitivamente los efectos del magnesio en receptores de calcio"
            },
            {letter: "c", text: "Flumazenil - revierte sedación"},
            {letter: "d", text: "No existe antídoto específico para magnesio"}
        ],
        correctAnswer: "b",
        explanation: "La intoxicación por magnesio requiere antídoto específico: 1) El magnesio compite con calcio en canales de calcio, causando depresión del SNC, depresión respiratoria, y bloqueo neuromuscular, 2) El gluconato de calcio (1-2g IV lento) antagoniza competitivamente estos efectos restaurando función neuromuscular y respiratoria, 3) Los signos de toxicidad por magnesio incluyen: pérdida de reflejos tendinosos profundos (primero), depresión respiratoria, hipotensión, bloqueo cardíaco, 4) Niveles séricos: terapéutico 4-7 mg/dL, tóxico >10 mg/dL. El calcio debe administrarse lentamente para evitar arritmias."
    },
    {
        question: "Un paciente presenta sobredosis mixta de benzodiazepinas y etanol con coma profundo (GCS 3) y depresión respiratoria. Después de administrar flumazenil, despierta abruptamente pero desarrolla convulsiones tónicoclónicas y agitación extrema. ¿Cuál es la explicación farmacológica más probable de esta complicación?",
        options: [
            {letter: "a", text: "El flumazenil causó una reacción alérgica"},
            {
                letter: "b",
                text: "El flumazenil precipitó síndrome de abstinencia en un paciente con dependencia crónica a benzodiazepinas, desenmascarando convulsiones subyacentes o causando abstinencia severa"
            },
            {letter: "c", text: "La dosis de flumazenil fue insuficiente"},
            {letter: "d", text: "El etanol interactúa adversamente con flumazenil"}
        ],
        correctAnswer: "b",
        explanation: "Esta complicación ilustra los riesgos del flumazenil: 1) En pacientes con dependencia crónica a benzodiazepinas, el flumazenil puede precipitar síndrome de abstinencia severo con convulsiones, 2) Puede desenmascarar convulsiones que estaban siendo suprimidas por benzodiazepinas (ej. en intoxicación con antidepresivos tricíclicos), 3) La reversión abrupta en politoxicómanos es especialmente peligrosa, 4) El manejo incluye: benzodiacepinas IV para controlar convulsiones/agitación, evitar flumazenil adicional, soporte ventilatorio si es necesario. En sobredosis mixtas, a menudo es preferible manejar con soporte ventilatorio sin reversor específico."
    },
    {
        question: "Un paciente hipertenso toma un IECA (enalapril) diario y presenta angioedema severo con compromiso de vía aérea tras iniciar tratamiento dental. La epinefrina mejora parcialmente el edema, pero el compromiso de vía aérea persiste. ¿Cuál es la diferencia patofisiológica clave entre este angioedema y la anafilaxia típica?",
        options: [
            {letter: "a", text: "No hay diferencia patofisiológica significativa"},
            {
                letter: "b",
                text: "El angioedema por IECA es mediado por acumulación de bradiquinina (no histamina), por lo que responde menos a epinefrina y antihistamínicos; puede requerir inhibidor de C1 esterasa o icatibant"
            },
            {letter: "c", text: "El angioedema por IECA es más leve que la anafilaxia"},
            {letter: "d", text: "Solo se debe administrar corticosteroides"}
        ],
        correctAnswer: "b",
        explanation: "El angioedema por IECA tiene patofisiología distinta: 1) Los IECA inhiben enzima convertidora de angiotensina que también degrada bradiquinina, 2) La acumulación de bradiquinina causa vasodilatación y aumento de permeabilidad vascular independiente de histamina, 3) Por tanto, responde menos a epinefrina, antihistamínicos y corticosteroides tradicionales, 4) Tratamientos específicos incluyen: inhibidor de C1 esterasa (si disponible), icatibant (antagonista de receptor de bradiquinina), o ácido tranexámico, 5) El manejo de vía aérea puede requerir intubación temprana ya que el edema puede progresar a pesar del tratamiento convencional."
    },
    {
        question: "Un paciente con fibrilación auricular toma dabigatrán (inhibidor directo de trombina) y presenta hemorragia intracraneal masiva tras trauma. Su tiempo de tromboplastina parcial está significativamente prolongado. ¿Cuál es la estrategia de reversión más específica disponible?",
        options: [
            {letter: "a", text: "Vitamina K y plasma fresco congelado"},
            {
                letter: "b",
                text: "Idarucizumab - anticuerpo monoclonal específico que liga dabigatrán, neutralizando instantáneamente su efecto anticoagulante"
            },
            {letter: "c", text: "Protamina sulfato"},
            {letter: "d", text: "Solo medidas de soporte sin reversión específica"}
        ],
        correctAnswer: "b",
        explanation: "Los nuevos anticoagulantes orales directos (DOAC) tienen antídotos específicos: 1) Idarucizumab (Praxbind) es un anticuerpo monoclonal humanizado que liga específicamente dabigatrán con alta afinidad, 2) Neutraliza instantánea y completamente el efecto anticoagulante, 3) Dosis: 5g IV en dos bolos de 2.5g separados por 15 minutos, 4) Otros DOAC (rivaroxabán, apixabán) pueden revertirse con andexanet alfa, 5) La vitamina K no afecta DOAC ya que no interfieren con síntesis de factores de coagulación dependientes de vitamina K. El reconocimiento del anticoagulante específico es crucial para seleccionar el antídoto correcto."
    },
    {
        question: "Un paciente de 45 años con depresión toma sertralina (ISRS) y presenta síndrome serotoninérgico después de recibir meperidina en el departamento de emergencias. Desarrolla hipertermia (40°C), rigidez muscular, mioclonías, y alteración mental. ¿Cuál es el antagonista farmacológico más específico y el manejo integral?",
        options: [
            {letter: "a", text: "Naloxona como antídoto específico"},
            {
                letter: "b",
                text: "Ciproheptadina como antagonista serotoninérgico, combinado con enfriamiento agresivo, sedación con benzodiazepinas, y relajantes musculares si es necesario"
            },
            {letter: "c", text: "Solo medidas de soporte sin tratamiento farmacológico específico"},
            {letter: "d", text: "Flumazenil como antídoto"}
        ],
        correctAnswer: "b",
        explanation: "El síndrome serotoninérgico requiere manejo farmacológico específico: 1) La ciproheptadina es un antagonista no selectivo de receptores de serotonina, particularmente 5-HT2A, 2) Dosis inicial: 8mg VO/SNG, seguido de 4mg cada 6 horas hasta resolución de síntomas, 3) El manejo integral incluye: descontinuación de agentes serotoninérgicos, enfriamiento agresivo (hipertermia puede ser fatal), benzodiazepinas para agitación y convulsiones, relajantes musculares (dantroleno) si hay rigidez severa, 4) Evitar antipsicóticos que pueden empeorar hipertermia. El reconocimiento temprano es crucial ya que puede progresar rápidamente a falla multiorgánica."
    }
];
