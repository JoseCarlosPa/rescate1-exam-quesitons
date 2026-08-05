import {Question} from "../../../types";

export const faqData = [
  {
    question: "¿Qué es el gasto cardíaco y cómo se calcula?",
    answer: "El gasto cardíaco es el volumen de sangre bombeado por el corazón en un minuto. Se calcula multiplicando la frecuencia cardíaca (FC) por el volumen sistólico (VS). GC = FC × VS."
  },
  {
    question: "¿Cuál es el marcapasos natural del corazón?",
    answer: "El nodo sinoauricular (SA) es el marcapasos natural del corazón, ubicado en la aurícula derecha. Su frecuencia de disparo normal es de 60 a 100 latidos por minuto."
  },
  {
    question: "¿Cuál es la función del surfactante pulmonar?",
    answer: "El surfactante pulmonar es una sustancia que reduce la tensión superficial dentro de los alvéolos, previniendo su colapso (atelectasia) al final de la espiración y facilitando la expansión pulmonar."
  },
  {
    question: "¿Cuál es el estímulo principal para la respiración en personas sanas?",
    answer: "El estímulo principal es el aumento de los niveles de dióxido de carbono (CO2) en la sangre, detectado por los quimiorreceptores centrales en el bulbo raquídeo."
  },
  {
    question: "¿Qué controla el sistema nervioso autónomo simpático?",
    answer: "El sistema simpático controla la respuesta de 'pelea o huida', aumentando la frecuencia cardíaca, dilatando las pupilas (midriasis), dilatando los bronquios e inhibiendo la digestión."
  },
  {
    question: "¿Cuál es la diferencia entre un hematoma epidural y uno subdural?",
    answer: "Un hematoma epidural es un sangrado arterial (usualmente la arteria meníngea media) entre el cráneo y la duramadre, causando deterioro rápido. Un hematoma subdural es un sangrado venoso (venas puente) debajo de la duramadre, de evolución más lenta."
  },
  {
    question: "¿Qué hormonas regulan los niveles de glucosa en sangre?",
    answer: "La insulina, producida por las células beta del páncreas, disminuye la glucosa en sangre al facilitar su entrada a las células. El glucagón, producido por las células alfa, aumenta la glucosa estimulando su liberación desde el hígado."
  },
  {
    question: "¿Qué función tiene la médula espinal y hasta dónde llega?",
    answer: "La médula espinal transmite señales entre el cerebro y el cuerpo, y controla los arcos reflejos. Sale por el foramen magno y desciende normalmente hasta el nivel de las vértebras L1-L2."
  }
];

export const anatomyPhysiologyQuestions: Question[] = [
  {
    id: "ap-1",
    text: "Un paciente de 65 años presenta dificultad respiratoria grave y expectoración rosada y espumosa. Ausculta estertores crepitantes bilaterales. Si este cuadro es secundario a una falla cardíaca, ¿qué cámara del corazón es la principal responsable del problema?",
    options: [
      "Ventrículo derecho",
      "Aurícula derecha",
      "Ventrículo izquierdo",
      "Aurícula izquierda"
    ],
    correctAnswer: 2,
    explanation: "El fallo del ventrículo izquierdo causa que la sangre se acumule (retrógradamente) hacia la aurícula izquierda y los pulmones, aumentando la presión hidrostática en los capilares pulmonares y produciendo edema agudo de pulmón (estertores, esputo asalmonado)."
  },
  {
    id: "ap-2",
    text: "¿Qué válvula cardíaca se localiza entre la aurícula izquierda y el ventrículo izquierdo?",
    options: [
      "Válvula tricúspide",
      "Válvula mitral",
      "Válvula aórtica",
      "Válvula pulmonar"
    ],
    correctAnswer: 1,
    explanation: "La válvula mitral (o bicúspide) separa la aurícula izquierda del ventrículo izquierdo. La tricúspide separa las cámaras derechas."
  },
  {
    id: "ap-3",
    text: "En un electrocardiograma normal, la contracción de los ventrículos es coordinada por un sistema de conducción especializado. ¿Cuál es el marcapasos primario del corazón?",
    options: [
      "Nodo auriculoventricular (AV)",
      "Haz de His",
      "Fibras de Purkinje",
      "Nodo sinoauricular (SA)"
    ],
    correctAnswer: 3,
    explanation: "El nodo sinoauricular (SA) es el marcapasos principal del corazón, que genera impulsos a una frecuencia de 60-100 latidos por minuto."
  },
  {
    id: "ap-4",
    text: "¿Cuál es la fórmula correcta para calcular el gasto cardíaco?",
    options: [
      "Volumen sistólico × Resistencia vascular periférica",
      "Frecuencia cardíaca × Volumen sistólico",
      "Presión arterial media × Frecuencia cardíaca",
      "Volumen diastólico final - Volumen sistólico"
    ],
    correctAnswer: 1,
    explanation: "El gasto cardíaco (GC) se define como el volumen de sangre expulsado por el corazón en un minuto, y se calcula multiplicando la Frecuencia Cardíaca (FC) por el Volumen Sistólico (VS)."
  },
  {
    id: "ap-5",
    text: "Usted evalúa a un paciente asmático en crisis. Administra salbutamol, que es un agonista beta-2. ¿Qué efecto anatómico y fisiológico busca en el sistema respiratorio?",
    options: [
      "Estimular el centro respiratorio del bulbo raquídeo",
      "Reducir la inflamación alveolar",
      "Producir broncodilatación relajando el músculo liso bronquial",
      "Aumentar la producción de surfactante"
    ],
    correctAnswer: 2,
    explanation: "El salbutamol actúa sobre los receptores beta-2 adrenérgicos en el músculo liso de los bronquios y bronquiolos, provocando su relajación y, por consiguiente, broncodilatación."
  },
  {
    id: "ap-6",
    text: "¿Aproximadamente cuántos alvéolos se estima que tiene un pulmón adulto sano para llevar a cabo el intercambio gaseoso?",
    options: [
      "3 millones",
      "30 millones",
      "300 millones",
      "3 billones"
    ],
    correctAnswer: 2,
    explanation: "Se estima que los pulmones humanos contienen alrededor de 300 millones de alvéolos, lo que proporciona una enorme superficie para el intercambio gaseoso."
  },
  {
    id: "ap-7",
    text: "Un paciente inconsciente tras un traumatismo craneoencefálico comienza a presentar un patrón respiratorio irregular. ¿Qué parte del tallo cerebral es el principal centro de control de la respiración?",
    options: [
      "Cerebelo",
      "Mesencéfalo",
      "Bulbo raquídeo (médula oblonga)",
      "Hipotálamo"
    ],
    correctAnswer: 2,
    explanation: "El bulbo raquídeo (o médula oblonga) junto con la protuberancia (puente) contienen los centros respiratorios que controlan la frecuencia y el patrón de la respiración."
  },
  {
    id: "ap-8",
    text: "Durante una evaluación de un paciente sano, el estímulo primario que le indica a su cuerpo que debe respirar es:",
    options: [
      "Una disminución de los niveles de oxígeno (O2) en sangre",
      "Un aumento de los niveles de dióxido de carbono (CO2) en sangre",
      "Una disminución del pH intracelular",
      "Un aumento de la presión arterial"
    ],
    correctAnswer: 1,
    explanation: "En personas sanas, el impulso respiratorio primario está mediado por los niveles de CO2 en el líquido cefalorraquídeo. El aumento de CO2 estimula a los quimiorreceptores centrales para aumentar la ventilación."
  },
  {
    id: "ap-9",
    text: "Un joven sufre un golpe en el lóbulo occipital de la cabeza durante un accidente deportivo. ¿Qué función neurológica es más probable que se vea afectada inicialmente?",
    options: [
      "El lenguaje expresivo",
      "El movimiento voluntario de las piernas",
      "La visión",
      "La audición"
    ],
    correctAnswer: 2,
    explanation: "El lóbulo occipital, situado en la parte posterior del cerebro, es el principal centro de procesamiento visual."
  },
  {
    id: "ap-10",
    text: "Tras sufrir un traumatismo, un paciente se presenta con las pupilas dilatadas (midriasis), taquicardia y palidez por vasoconstricción periférica. Estos signos indican la activación del:",
    options: [
      "Sistema nervioso parasimpático",
      "Sistema nervioso somático",
      "Sistema reticular de activación",
      "Sistema nervioso simpático"
    ],
    correctAnswer: 3,
    explanation: "El sistema nervioso autónomo simpático media la respuesta de 'pelea o huida', provocando midriasis, taquicardia, broncodilatación y vasoconstricción cutánea (palidez)."
  },
  {
    id: "ap-11",
    text: "Un paciente sufrió una fractura craneal en el hueso temporal tras un golpe con un bate. Horas más tarde, presenta un rápido deterioro del nivel de conciencia. Usted sospecha de un sangrado arterial de la arteria meníngea media. ¿Qué tipo de hematoma describe esto?",
    options: [
      "Hematoma subdural",
      "Hemorragia subaracnoidea",
      "Hemorragia intraparenquimatosa",
      "Hematoma epidural"
    ],
    correctAnswer: 3,
    explanation: "El hematoma epidural clásicamente ocurre por la ruptura de la arteria meníngea media (a menudo secundaria a una fractura temporal), causando un sangrado rápido entre el cráneo y la duramadre."
  },
  {
    id: "ap-12",
    text: "La estructura responsable de la coordinación de los movimientos finos y el equilibrio es el:",
    options: [
      "Cerebelo",
      "Cerebro (córtex motor)",
      "Bulbo raquídeo",
      "Tálamo"
    ],
    correctAnswer: 0,
    explanation: "El cerebelo, ubicado debajo del cerebro y posterior al tallo cerebral, coordina el movimiento, la postura y el equilibrio."
  },
  {
    id: "ap-13",
    text: "¿Cuál es la capa más externa y resistente de las meninges que cubre el cerebro y la médula espinal?",
    options: [
      "Aracnoides",
      "Piamadre",
      "Duramadre",
      "Periostio"
    ],
    correctAnswer: 2,
    explanation: "La duramadre es la capa más externa, fibrosa y resistente de las meninges. Debajo de ella se encuentra la aracnoides, y la más interna es la piamadre."
  },
  {
    id: "ap-14",
    text: "Al evaluar a un paciente diabético inconsciente, usted obtiene una glucemia capilar de 35 mg/dL. ¿Qué hormona, normalmente producida en el páncreas, está ausente o fue administrada en exceso, causando este cuadro?",
    options: [
      "Glucagón",
      "Cortisol",
      "Adrenalina",
      "Insulina"
    ],
    correctAnswer: 3,
    explanation: "La hipoglucemia severa a menudo es resultado de un exceso de insulina en un paciente diabético. La insulina disminuye los niveles de glucosa en sangre."
  },
  {
    id: "ap-15",
    text: "Las glándulas suprarrenales (adrenales) se localizan por encima de los riñones. ¿Qué hormona importante para el manejo del estrés agudo ('pelea o huida') se produce en la médula de estas glándulas?",
    options: [
      "Aldosterona",
      "Adrenalina (epinefrina)",
      "Cortisol",
      "Insulina"
    ],
    correctAnswer: 1,
    explanation: "La médula suprarrenal secreta catecolaminas, principalmente adrenalina (epinefrina) y noradrenalina, durante la estimulación simpática. La corteza produce cortisol y aldosterona."
  },
  {
    id: "ap-16",
    text: "El hipotálamo es una región vital del cerebro que funciona como puente entre el sistema nervioso y el endocrino. ¿Cuál de las siguientes es una de sus funciones primarias?",
    options: [
      "Producción de líquido cefalorraquídeo",
      "Control de la temperatura corporal",
      "Coordinación motora fina",
      "Mantenimiento de la postura"
    ],
    correctAnswer: 1,
    explanation: "El hipotálamo es el principal centro de control para mantener la homeostasis, regulando la temperatura corporal, el hambre, la sed, y controlando la glándula pituitaria (hipófisis)."
  },
  {
    id: "ap-17",
    text: "Un paciente de 25 años cayó torciéndose gravemente el tobillo. En urgencias, le diagnostican un esguince de tercer grado. ¿Qué estructuras anatómicas son las que se dañan en un esguince?",
    options: [
      "Tendones",
      "Músculos esqueléticos",
      "Ligamentos",
      "Cartílago hialino"
    ],
    correctAnswer: 2,
    explanation: "Un esguince es el estiramiento o desgarro de los ligamentos, que son las bandas de tejido conectivo que unen hueso con hueso. Las lesiones de tendones o músculos se denominan desgarros (o distensiones)."
  },
  {
    id: "ap-18",
    text: "Usted atiende a un paciente con insuficiencia renal crónica severa. El cuerpo intenta compensar un desequilibrio ácido-base. Si los riñones no pueden retener bicarbonato adecuadamente (causando acidosis metabólica), ¿cuál será la respuesta compensatoria principal del sistema respiratorio?",
    options: [
      "Bradipnea para retener CO2",
      "Broncoconstricción masiva",
      "Taquipnea para eliminar CO2",
      "Aumento en la producción de surfactante"
    ],
    correctAnswer: 2,
    explanation: "En una acidosis metabólica, el sistema respiratorio intenta compensar eliminando ácido en forma de dióxido de carbono (CO2), lo cual logra aumentando la frecuencia y profundidad de la ventilación (taquipnea/hiperventilación)."
  },
  {
    id: "ap-19",
    text: "El sistema nervioso periférico se divide funcionalmente en somático y autónomo. ¿Qué tipo de tejido está bajo control del sistema somático?",
    options: [
      "Músculo liso de los vasos sanguíneos",
      "Músculo esquelético",
      "Músculo cardíaco",
      "Glándulas endocrinas"
    ],
    correctAnswer: 1,
    explanation: "El sistema nervioso somático controla las acciones voluntarias, que incluyen exclusivamente a los músculos esqueléticos. El músculo liso, el cardíaco y las glándulas son controlados por el sistema nervioso autónomo."
  },
  {
    id: "ap-20",
    text: "Las plaquetas, los glóbulos rojos y la mayoría de los glóbulos blancos se producen en el tejido óseo. ¿En qué parte específica del hueso tiene lugar la hematopoyesis?",
    options: [
      "Médula ósea amarilla",
      "Periostio",
      "Médula ósea roja",
      "Endostio"
    ],
    correctAnswer: 2,
    explanation: "La hematopoyesis (formación de células sanguíneas) ocurre en la médula ósea roja, que se encuentra típicamente en las epífisis de los huesos largos y en huesos planos como el esternón y la pelvis."
  }
];
