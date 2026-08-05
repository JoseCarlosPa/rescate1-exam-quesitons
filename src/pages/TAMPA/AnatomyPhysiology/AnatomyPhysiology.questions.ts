import {Question} from "../../../question";

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
    question: "Un paciente de 65 años presenta dificultad respiratoria grave y expectoración rosada y espumosa. Ausculta estertores crepitantes bilaterales. Si este cuadro es secundario a una falla cardíaca, ¿qué cámara del corazón es la principal responsable del problema?",
    options: [
      { letter: "a", text: "Ventrículo derecho" },
      { letter: "b", text: "Aurícula derecha" },
      { letter: "c", text: "Ventrículo izquierdo" },
      { letter: "d", text: "Aurícula izquierda" }
    ],
    correctAnswer: "c",
    explanation: "El fallo del ventrículo izquierdo causa que la sangre se acumule (retrógradamente) hacia la aurícula izquierda y los pulmones, aumentando la presión hidrostática en los capilares pulmonares y produciendo edema agudo de pulmón (estertores, esputo asalmonado)."
  },
  {
    question: "¿Qué válvula cardíaca se localiza entre la aurícula izquierda y el ventrículo izquierdo?",
    options: [
      { letter: "a", text: "Válvula tricúspide" },
      { letter: "b", text: "Válvula mitral" },
      { letter: "c", text: "Válvula aórtica" },
      { letter: "d", text: "Válvula pulmonar" }
    ],
    correctAnswer: "b",
    explanation: "La válvula mitral (o bicúspide) separa la aurícula izquierda del ventrículo izquierdo. La tricúspide separa las cámaras derechas."
  },
  {
    question: "En un electrocardiograma normal, la contracción de los ventrículos es coordinada por un sistema de conducción especializado. ¿Cuál es el marcapasos primario del corazón?",
    options: [
      { letter: "a", text: "Nodo auriculoventricular (AV)" },
      { letter: "b", text: "Haz de His" },
      { letter: "c", text: "Fibras de Purkinje" },
      { letter: "d", text: "Nodo sinoauricular (SA)" }
    ],
    correctAnswer: "d",
    explanation: "El nodo sinoauricular (SA) es el marcapasos principal del corazón, que genera impulsos a una frecuencia de 60-100 latidos por minuto."
  },
  {
    question: "¿Cuál es la fórmula correcta para calcular el gasto cardíaco?",
    options: [
      { letter: "a", text: "Volumen sistólico × Resistencia vascular periférica" },
      { letter: "b", text: "Frecuencia cardíaca × Volumen sistólico" },
      { letter: "c", text: "Presión arterial media × Frecuencia cardíaca" },
      { letter: "d", text: "Volumen diastólico final - Volumen sistólico" }
    ],
    correctAnswer: "b",
    explanation: "El gasto cardíaco (GC) se define como el volumen de sangre expulsado por el corazón en un minuto, y se calcula multiplicando la Frecuencia Cardíaca (FC) por el Volumen Sistólico (VS)."
  },
  {
    question: "Usted evalúa a un paciente asmático en crisis. Administra salbutamol, que es un agonista beta-2. ¿Qué efecto anatómico y fisiológico busca en el sistema respiratorio?",
    options: [
      { letter: "a", text: "Estimular el centro respiratorio del bulbo raquídeo" },
      { letter: "b", text: "Reducir la inflamación alveolar" },
      { letter: "c", text: "Producir broncodilatación relajando el músculo liso bronquial" },
      { letter: "d", text: "Aumentar la producción de surfactante" }
    ],
    correctAnswer: "c",
    explanation: "El salbutamol actúa sobre los receptores beta-2 adrenérgicos en el músculo liso de los bronquios y bronquiolos, provocando su relajación y, por consiguiente, broncodilatación."
  },
  {
    question: "¿Aproximadamente cuántos alvéolos se estima que tiene un pulmón adulto sano para llevar a cabo el intercambio gaseoso?",
    options: [
      { letter: "a", text: "3 millones" },
      { letter: "b", text: "30 millones" },
      { letter: "c", text: "300 millones" },
      { letter: "d", text: "3 billones" }
    ],
    correctAnswer: "c",
    explanation: "Se estima que los pulmones humanos contienen alrededor de 300 millones de alvéolos, lo que proporciona una enorme superficie para el intercambio gaseoso."
  },
  {
    question: "Un paciente inconsciente tras un traumatismo craneoencefálico comienza a presentar un patrón respiratorio irregular. ¿Qué parte del tallo cerebral es el principal centro de control de la respiración?",
    options: [
      { letter: "a", text: "Cerebelo" },
      { letter: "b", text: "Mesencéfalo" },
      { letter: "c", text: "Bulbo raquídeo (médula oblonga)" },
      { letter: "d", text: "Hipotálamo" }
    ],
    correctAnswer: "c",
    explanation: "El bulbo raquídeo (o médula oblonga) junto con la protuberancia (puente) contienen los centros respiratorios que controlan la frecuencia y el patrón de la respiración."
  },
  {
    question: "Durante una evaluación de un paciente sano, el estímulo primario que le indica a su cuerpo que debe respirar es:",
    options: [
      { letter: "a", text: "Una disminución de los niveles de oxígeno (O2) en sangre" },
      { letter: "b", text: "Un aumento de los niveles de dióxido de carbono (CO2) en sangre" },
      { letter: "c", text: "Una disminución del pH intracelular" },
      { letter: "d", text: "Un aumento de la presión arterial" }
    ],
    correctAnswer: "b",
    explanation: "En personas sanas, el impulso respiratorio primario está mediado por los niveles de CO2 en el líquido cefalorraquídeo. El aumento de CO2 estimula a los quimiorreceptores centrales para aumentar la ventilación."
  },
  {
    question: "Un joven sufre un golpe en el lóbulo occipital de la cabeza durante un accidente deportivo. ¿Qué función neurológica es más probable que se vea afectada inicialmente?",
    options: [
      { letter: "a", text: "El lenguaje expresivo" },
      { letter: "b", text: "El movimiento voluntario de las piernas" },
      { letter: "c", text: "La visión" },
      { letter: "d", text: "La audición" }
    ],
    correctAnswer: "c",
    explanation: "El lóbulo occipital, situado en la parte posterior del cerebro, es el principal centro de procesamiento visual."
  },
  {
    question: "Tras sufrir un traumatismo, un paciente se presenta con las pupilas dilatadas (midriasis), taquicardia y palidez por vasoconstricción periférica. Estos signos indican la activación del:",
    options: [
      { letter: "a", text: "Sistema nervioso parasimpático" },
      { letter: "b", text: "Sistema nervioso somático" },
      { letter: "c", text: "Sistema reticular de activación" },
      { letter: "d", text: "Sistema nervioso simpático" }
    ],
    correctAnswer: "d",
    explanation: "El sistema nervioso autónomo simpático media la respuesta de 'pelea o huida', provocando midriasis, taquicardia, broncodilatación y vasoconstricción cutánea (palidez)."
  },
  {
    question: "Un paciente sufrió una fractura craneal en el hueso temporal tras un golpe con un bate. Horas más tarde, presenta un rápido deterioro del nivel de conciencia. Usted sospecha de un sangrado arterial de la arteria meníngea media. ¿Qué tipo de hematoma describe esto?",
    options: [
      { letter: "a", text: "Hematoma subdural" },
      { letter: "b", text: "Hemorragia subaracnoidea" },
      { letter: "c", text: "Hemorragia intraparenquimatosa" },
      { letter: "d", text: "Hematoma epidural" }
    ],
    correctAnswer: "d",
    explanation: "El hematoma epidural clásicamente ocurre por la ruptura de la arteria meníngea media (a menudo secundaria a una fractura temporal), causando un sangrado rápido entre el cráneo y la duramadre."
  },
  {
    question: "La estructura responsable de la coordinación de los movimientos finos y el equilibrio es el:",
    options: [
      { letter: "a", text: "Cerebelo" },
      { letter: "b", text: "Cerebro (córtex motor)" },
      { letter: "c", text: "Bulbo raquídeo" },
      { letter: "d", text: "Tálamo" }
    ],
    correctAnswer: "a",
    explanation: "El cerebelo, ubicado debajo del cerebro y posterior al tallo cerebral, coordina el movimiento, la postura y el equilibrio."
  },
  {
    question: "¿Cuál es la capa más externa y resistente de las meninges que cubre el cerebro y la médula espinal?",
    options: [
      { letter: "a", text: "Aracnoides" },
      { letter: "b", text: "Piamadre" },
      { letter: "c", text: "Duramadre" },
      { letter: "d", text: "Periostio" }
    ],
    correctAnswer: "c",
    explanation: "La duramadre es la capa más externa, fibrosa y resistente de las meninges. Debajo de ella se encuentra la aracnoides, y la más interna es la piamadre."
  },
  {
    question: "Al evaluar a un paciente diabético inconsciente, usted obtiene una glucemia capilar de 35 mg/dL. ¿Qué hormona, normalmente producida en el páncreas, está ausente o fue administrada en exceso, causando este cuadro?",
    options: [
      { letter: "a", text: "Glucagón" },
      { letter: "b", text: "Cortisol" },
      { letter: "c", text: "Adrenalina" },
      { letter: "d", text: "Insulina" }
    ],
    correctAnswer: "d",
    explanation: "La hipoglucemia severa a menudo es resultado de un exceso de insulina en un paciente diabético. La insulina disminuye los niveles de glucosa en sangre."
  },
  {
    question: "Las glándulas suprarrenales (adrenales) se localizan por encima de los riñones. ¿Qué hormona importante para el manejo del estrés agudo ('pelea o huida') se produce en la médula de estas glándulas?",
    options: [
      { letter: "a", text: "Aldosterona" },
      { letter: "b", text: "Adrenalina (epinefrina)" },
      { letter: "c", text: "Cortisol" },
      { letter: "d", text: "Insulina" }
    ],
    correctAnswer: "b",
    explanation: "La médula suprarrenal secreta catecolaminas, principalmente adrenalina (epinefrina) y noradrenalina, durante la estimulación simpática. La corteza produce cortisol y aldosterona."
  },
  {
    question: "El hipotálamo es una región vital del cerebro que funciona como puente entre el sistema nervioso y el endocrino. ¿Cuál de las siguientes es una de sus funciones primarias?",
    options: [
      { letter: "a", text: "Producción de líquido cefalorraquídeo" },
      { letter: "b", text: "Control de la temperatura corporal" },
      { letter: "c", text: "Coordinación motora fina" },
      { letter: "d", text: "Mantenimiento de la postura" }
    ],
    correctAnswer: "b",
    explanation: "El hipotálamo es el principal centro de control para mantener la homeostasis, regulando la temperatura corporal, el hambre, la sed, y controlando la glándula pituitaria (hipófisis)."
  },
  {
    question: "Un paciente de 25 años cayó torciéndose gravemente el tobillo. En urgencias, le diagnostican un esguince de tercer grado. ¿Qué estructuras anatómicas son las que se dañan en un esguince?",
    options: [
      { letter: "a", text: "Tendones" },
      { letter: "b", text: "Músculos esqueléticos" },
      { letter: "c", text: "Ligamentos" },
      { letter: "d", text: "Cartílago hialino" }
    ],
    correctAnswer: "c",
    explanation: "Un esguince es el estiramiento o desgarro de los ligamentos, que son las bandas de tejido conectivo que unen hueso con hueso. Las lesiones de tendones o músculos se denominan desgarros (o distensiones)."
  },
  {
    question: "Usted atiende a un paciente con insuficiencia renal crónica severa. El cuerpo intenta compensar un desequilibrio ácido-base. Si los riñones no pueden retener bicarbonato adecuadamente (causando acidosis metabólica), ¿cuál será la respuesta compensatoria principal del sistema respiratorio?",
    options: [
      { letter: "a", text: "Bradipnea para retener CO2" },
      { letter: "b", text: "Broncoconstricción masiva" },
      { letter: "c", text: "Taquipnea para eliminar CO2" },
      { letter: "d", text: "Aumento en la producción de surfactante" }
    ],
    correctAnswer: "c",
    explanation: "En una acidosis metabólica, el sistema respiratorio intenta compensar eliminando ácido en forma de dióxido de carbono (CO2), lo cual logra aumentando la frecuencia y profundidad de la ventilación (taquipnea/hiperventilación)."
  },
  {
    question: "El sistema nervioso periférico se divide funcionalmente en somático y autónomo. ¿Qué tipo de tejido está bajo control del sistema somático?",
    options: [
      { letter: "a", text: "Músculo liso de los vasos sanguíneos" },
      { letter: "b", text: "Músculo esquelético" },
      { letter: "c", text: "Músculo cardíaco" },
      { letter: "d", text: "Glándulas endocrinas" }
    ],
    correctAnswer: "b",
    explanation: "El sistema nervioso somático controla las acciones voluntarias, que incluyen exclusivamente a los músculos esqueléticos. El músculo liso, el cardíaco y las glándulas son controlados por el sistema nervioso autónomo."
  },
  {
    question: "Las plaquetas, los glóbulos rojos y la mayoría de los glóbulos blancos se producen en el tejido óseo. ¿En qué parte específica del hueso tiene lugar la hematopoyesis?",
    options: [
      { letter: "a", text: "Médula ósea amarilla" },
      { letter: "b", text: "Periostio" },
      { letter: "c", text: "Médula ósea roja" },
      { letter: "d", text: "Endostio" }
    ],
    correctAnswer: "c",
    explanation: "La hematopoyesis (formación de células sanguíneas) ocurre en la médula ósea roja, que se encuentra típicamente en las epífisis de los huesos largos y en huesos planos como el esternón y la pelvis."
  }
];
