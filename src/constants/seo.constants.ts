import { AllRoutes } from "../components/Router/Router.constants";

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  type?: string;
  section?: string;
  tags?: string[];
  image?: string;
}

export const seoData: Record<string, SEOData> = {
  // Página principal
  [AllRoutes.MAIN]: {
    title: "Plataforma de Estudio EMT - Alumnos Rescate 1",
    description:
      "Plataforma educativa completa para estudiantes de Técnico en Urgencias Médicas. Estudia atención prehospitalaria con contenido basado en AAOS, exámenes interactivos y recursos didácticos.",
    keywords:
      "EMT, técnico urgencias médicas, atención prehospitalaria, estudios medicina emergencia, AAOS, rescate, primeros auxilios",
    type: "website",
    section: "Educación Médica",
  },

  // Examen general
  [AllRoutes.GENERAL]: {
    title: "Examen General EMT - Evaluación Completa",
    description:
      "Realiza el examen general de Técnico en Urgencias Médicas. Preguntas basadas en estándares AAOS con retroalimentación inmediata para evaluar tus conocimientos.",
    keywords:
      "examen EMT, evaluación urgencias médicas, test atención prehospitalaria, prueba técnico urgencias",
    type: "article",
    section: "Evaluación",
    tags: ["examen", "evaluación", "EMT", "urgencias médicas"],
  },

  // Aspectos legales
  [AllRoutes.LEGAL]: {
    title: "Aspectos Legales y Éticos en Atención Prehospitalaria",
    description:
      "Aprende sobre los aspectos médicos, legales y éticos en la atención prehospitalaria. Consentimiento informado, negligencia médica, protocolos legales y responsabilidades del EMT.",
    keywords:
      "aspectos legales EMT, ética médica prehospitalaria, consentimiento informado, negligencia médica, responsabilidad sanitaria",
    type: "article",
    section: "Fundamentos Legales",
    tags: [
      "legal",
      "ética",
      "consentimiento",
      "responsabilidad",
      "negligencia",
    ],
  },

  // Comunicaciones
  [AllRoutes.COMMUNICATIONS]: {
    title: "Comunicaciones y Documentación en Emergencias Médicas",
    description:
      "Sistemas de comunicación en servicios de emergencia, documentación médica, reportes de incidentes y protocolos de comunicación con control médico.",
    keywords:
      "comunicaciones emergencias médicas, documentación prehospitalaria, reportes médicos, radio comunicación EMT",
    type: "article",
    section: "Comunicaciones",
    tags: [
      "comunicación",
      "documentación",
      "reportes",
      "radio",
      "control médico",
    ],
  },

  // Sistemas SEM
  [AllRoutes.SEM]: {
    title: "Sistemas de Servicios de Emergencias Médicas (SEM)",
    description:
      "Estructura y funcionamiento de los Sistemas de Emergencias Médicas. Niveles de atención, cadena de supervivencia, coordinación hospitalaria y protocolos de activación.",
    keywords:
      "sistemas emergencias médicas, SEM, cadena supervivencia, protocolos emergencia, coordinación hospitalaria",
    type: "article",
    section: "Sistemas SEM",
    tags: ["SEM", "emergencias", "sistemas", "protocolos", "coordinación"],
  },

  // Seguridad del personal
  [AllRoutes.SECURITY_OF_PERSONAL]: {
    title: "Seguridad y Bienestar del Personal de Emergencias",
    description:
      "Protoclos de seguridad para personal de emergencias, prevención de riesgos laborales, uso de EPP, bioseguridad y manejo del estrés en emergencias.",
    keywords:
      "seguridad personal emergencias, EPP paramédicos, bioseguridad EMT, prevención riesgos laborales, estrés emergencias",
    type: "article",
    section: "Seguridad",
    tags: ["seguridad", "EPP", "bioseguridad", "prevención", "bienestar"],
  },

  // Terminología médica
  [AllRoutes.MEDIC_TERMS]: {
    title: "Terminología Médica para Técnicos en Urgencias",
    description:
      "Glosario completo de terminología médica esencial para EMT. Prefijos, sufijos, raíces médicas, anatomía básica y términos de posición y dirección.",
    keywords:
      "terminología médica EMT, glosario médico, prefijos médicos, anatomía básica, términos posición anatómica",
    type: "article",
    section: "Terminología",
    tags: ["terminología", "glosario", "anatomía", "prefijos", "sufijos"],
  },

  // Cuerpo humano
  [AllRoutes.HUMAN_BODY]: {
    title: "Anatomía y Fisiología del Cuerpo Humano",
    description:
      "Estudio de la anatomía y fisiología humana aplicada a la atención prehospitalaria. Sistemas corporales, funciones vitales y bases fisiológicas.",
    keywords:
      "anatomía humana EMT, fisiología básica, sistemas corporales, funciones vitales, anatomía aplicada emergencias",
    type: "article",
    section: "Anatomía y Fisiología",
    tags: [
      "anatomía",
      "fisiología",
      "sistemas corporales",
      "funciones vitales",
    ],
  },

  // Esperanza de vida
  [AllRoutes.LIFE_SPEC]: {
    title: "Desarrollo de la Esperanza de Vida y Etapas Vitales",
    description:
      "Estudio del desarrollo humano a través de las etapas de la vida. Características fisiológicas y psicológicas desde la infancia hasta la vejez en el contexto médico.",
    keywords:
      "desarrollo humano EMT, etapas vitales, pediatría prehospitalaria, geriatría emergencias, desarrollo psicomotor",
    type: "article",
    section: "Desarrollo Humano",
    tags: [
      "desarrollo",
      "etapas vitales",
      "pediatría",
      "geriatría",
      "psicomotor",
    ],
  },

  // Evaluación del paciente
  [AllRoutes.EVALUATION]: {
    title: "Evaluación Primaria y Secundaria del Paciente",
    description:
      "Técnicas de evaluación del paciente en emergencias. Evaluación primaria ABC, evaluación secundaria, toma de signos vitales y valoración neurológica.",
    keywords:
      "evaluación paciente EMT, evaluación primaria ABC, signos vitales, valoración neurológica, examen físico",
    type: "article",
    section: "Evaluación",
    tags: [
      "evaluación",
      "ABC",
      "signos vitales",
      "examen físico",
      "valoración",
    ],
  },

  // Mnemotecnias
  [AllRoutes.MNEMOTECNIAS]: {
    title: "Mnemotecnias en Atención Prehospitalaria",
    description:
      "Técnicas mnemotécnicas esenciales para EMT. SAMPLE, OPQRST, ABC, AVDI y otras herramientas de memoria para la evaluación y tratamiento de pacientes.",
    keywords:
      "mnemotecnias EMT, SAMPLE, OPQRST, ABC, AVDI, técnicas memoria atención prehospitalaria",
    type: "article",
    section: "Herramientas",
    tags: ["mnemotecnias", "SAMPLE", "OPQRST", "ABC", "memoria", "evaluación"],
  },

  // Manejo vía aérea
  [AllRoutes.AIRWAY_MANAGE]: {
    title: "Manejo de la Vía Aérea en Emergencias",
    description:
      "Técnicas de manejo de vía aérea prehospitalaria. Apertura manual, dispositivos supraglóticos, ventilación con bolsa-mascarilla y manejo de obstrucción.",
    keywords:
      "manejo vía aérea EMT, ventilación emergencias, obstrucción vía aérea, dispositivos supraglóticos, intubación",
    type: "article",
    section: "Vía Aérea",
    tags: [
      "vía aérea",
      "ventilación",
      "obstrucción",
      "intubación",
      "dispositivos",
    ],
  },

  // Farmacología
  [AllRoutes.PHARMACOLOGY]: {
    title: "Principios de Farmacología en Atención Prehospitalaria",
    description:
      "Fundamentos de farmacología para EMT. Vías de administración, farmacocinética, medicamentos de emergencia y protocolos de administración.",
    keywords:
      "farmacología EMT, medicamentos emergencia, vías administración, farmacocinética, protocolos medicamentos",
    type: "article",
    section: "Farmacología",
    tags: [
      "farmacología",
      "medicamentos",
      "administración",
      "protocolos",
      "farmacocinética",
    ],
  },

  // Administración medicamentos
  [AllRoutes.MED_ADMIN]: {
    title: "Administración de Medicamentos en Emergencias",
    description:
      "Técnicas y protocolos de administración de medicamentos prehospitalarios. Cálculo de dosis, vías de acceso vascular y medicamentos permitidos para EMT.",
    keywords:
      "administración medicamentos EMT, cálculo dosis, acceso vascular, medicamentos prehospitalarios, inyección",
    type: "article",
    section: "Administración",
    tags: ["administración", "medicamentos", "dosis", "vascular", "inyección"],
  },

  // Shock
  [AllRoutes.SHOCK]: {
    title: "Shock y Estados de Hipoperfusión",
    description:
      "Reconocimiento y manejo del shock en atención prehospitalaria. Tipos de shock, fisiopatología, signos clínicos y tratamiento inicial.",
    keywords:
      "shock EMT, hipoperfusión, shock hipovolémico, shock cardiogénico, shock distributivo, manejo shock",
    type: "article",
    section: "Shock",
    tags: [
      "shock",
      "hipoperfusión",
      "hipovolémico",
      "cardiogénico",
      "distributivo",
    ],
  },

  // Reanimación SVB
  [AllRoutes.REANIMATE_SVB]: {
    title: "Reanimación Cardiopulmonar y Soporte Vital Básico",
    description:
      "Técnicas de RCP y SVB según guías AHA. Compresiones torácicas, ventilación de rescate, uso de DEA y manejo de paro cardiorrespiratorio.",
    keywords:
      "RCP EMT, soporte vital básico, SVB, DEA, paro cardiorrespiratorio, compresiones torácicas, AHA",
    type: "article",
    section: "RCP y SVB",
    tags: ["RCP", "SVB", "DEA", "paro cardíaco", "AHA", "reanimación"],
  },

  // Código MEGA
  [AllRoutes.MEGA]: {
    title: "Código MEGA - Protocolos de Emergencia",
    description:
      "Protocolo MEGA para situaciones de emergencia masiva. Triaje, clasificación de víctimas, recursos limitados y coordinación en desastres.",
    keywords:
      "código MEGA, emergencias masivas, triaje, desastres, víctimas múltiples, protocolo emergencia",
    type: "article",
    section: "Protocolos",
    tags: ["MEGA", "emergencias masivas", "triaje", "desastres", "protocolo"],
  },

  // Visión médica general
  [AllRoutes.MEDIC_VISION]: {
    title: "Visión Médica General en Atención Prehospitalaria",
    description:
      "Perspectiva integral de la medicina de emergencia. Enfoque holístico del paciente, toma de decisiones clínicas y pensamiento crítico en EMT.",
    keywords:
      "visión médica EMT, medicina emergencia integral, pensamiento crítico, decisiones clínicas, enfoque holístico",
    type: "article",
    section: "Medicina General",
    tags: [
      "visión médica",
      "medicina integral",
      "pensamiento crítico",
      "decisiones",
    ],
  },

  // Emergencias respiratorias
  [AllRoutes.AIRWAY_EMERGENCY]: {
    title: "Emergencias Respiratorias - Asma, EPOC y Disnea",
    description:
      "Manejo de emergencias respiratorias en atención prehospitalaria. Asma bronquial, EPOC, edema pulmonar, neumotórax y insuficiencia respiratoria.",
    keywords:
      "emergencias respiratorias EMT, asma prehospitalaria, EPOC, disnea, neumotórax, insuficiencia respiratoria",
    type: "article",
    section: "Emergencias Respiratorias",
    tags: ["respiratorio", "asma", "EPOC", "disnea", "neumotórax"],
  },

  // Emergencias cardiovasculares
  [AllRoutes.CARDIO_EMERGENCY]: {
    title: "Emergencias Cardiovasculares - IAM, Arritmias y Insuficiencia",
    description:
      "Manejo de emergencias cardíacas. Infarto agudo de miocardio, arritmias, insuficiencia cardíaca, angina de pecho y síndrome coronario agudo.",
    keywords:
      "emergencias cardiovasculares EMT, infarto miocardio, IAM, arritmias, insuficiencia cardíaca, síndrome coronario",
    type: "article",
    section: "Emergencias Cardiovasculares",
    tags: ["cardiovascular", "infarto", "IAM", "arritmias", "corazón"],
  },

  // Emergencias neurológicas
  [AllRoutes.NEURO_EMERGENCY]: {
    title: "Emergencias Neurológicas - ACV, Convulsiones y TCE",
    description:
      "Manejo de emergencias neurológicas. Accidente cerebrovascular, convulsiones, traumatismo craneoencefálico, coma y alteraciones de conciencia.",
    keywords:
      "emergencias neurológicas EMT, ACV, ictus, convulsiones, TCE, coma, alteraciones conciencia",
    type: "article",
    section: "Emergencias Neurológicas",
    tags: ["neurológico", "ACV", "convulsiones", "TCE", "coma"],
  },

  // Emergencias gastrointestinales
  [AllRoutes.GASTRO_EMERGENCY]: {
    title: "Emergencias Gastrointestinales y Urológicas",
    description:
      "Manejo de emergencias del sistema digestivo y urológico. Dolor abdominal agudo, hemorragia digestiva, obstrucción intestinal y emergencias urológicas.",
    keywords:
      "emergencias gastrointestinales EMT, dolor abdominal, hemorragia digestiva, obstrucción intestinal, urología",
    type: "article",
    section: "Emergencias GI/Uro",
    tags: [
      "gastrointestinal",
      "urológico",
      "abdominal",
      "hemorragia",
      "obstrucción",
    ],
  },

  // Emergencias endocrinas
  [AllRoutes.ENDOCRINE_EMERGENCY]: {
    title: "Emergencias Endocrinas y Hematológicas",
    description:
      "Manejo de crisis endocrinas y hematológicas. Diabetes mellitus, hipoglucemia, cetoacidosis, crisis tiroidea y alteraciones hematológicas.",
    keywords:
      "emergencias endocrinas EMT, diabetes, hipoglucemia, cetoacidosis, tiroides, hematología",
    type: "article",
    section: "Emergencias Endocrinas",
    tags: ["endocrino", "diabetes", "hipoglucemia", "tiroides", "hematología"],
  },

  // Trauma general
  [AllRoutes.TRAUMA]: {
    title: "Conceptos Generales de Trauma y Lesiones",
    description:
      "Principios generales del manejo de trauma. Cinemática del trauma, evaluación primaria y secundaria, prioridades terapéuticas y estabilización.",
    keywords:
      "trauma EMT, cinemática trauma, evaluación trauma, lesiones, estabilización, manejo inicial trauma",
    type: "article",
    section: "Trauma",
    tags: ["trauma", "lesiones", "cinemática", "evaluación", "estabilización"],
  },

  // Inmovilización
  [AllRoutes.IMMOBILIZATION]: {
    title: "Técnicas de Inmovilización y Estabilización",
    description:
      "Técnicas de inmovilización espinal y de extremidades. Tabla espinal, collarín cervical, férulas, vendajes y técnicas de estabilización.",
    keywords:
      "inmovilización EMT, tabla espinal, collarín cervical, férulas, vendajes, estabilización columna",
    type: "article",
    section: "Inmovilización",
    tags: [
      "inmovilización",
      "tabla espinal",
      "collarín",
      "férulas",
      "vendajes",
    ],
  },

  // Hemorragia
  [AllRoutes.BLEEDING]: {
    title: "Control de Hemorragias y Manejo del Sangrado",
    description:
      "Técnicas de control de hemorragias externas e internas. Presión directa, torniquetes, agentes hemostáticos y manejo del shock hemorrágico.",
    keywords:
      "control hemorragia EMT, sangrado, torniquetes, hemostasia, shock hemorrágico, presión directa",
    type: "article",
    section: "Hemorragia",
    tags: ["hemorragia", "sangrado", "torniquetes", "hemostasia", "shock"],
  },

  // Stop the Bleed
  [AllRoutes.STOP_THE_BLEED]: {
    title: "Stop the Bleed - Control Rápido de Hemorragias",
    description:
      "Programa Stop the Bleed para control inmediato de hemorragias masivas. Técnicas de supervivencia, uso de torniquetes y primeros auxilios hemorrágicos.",
    keywords:
      "stop the bleed, control hemorragia masiva, torniquetes, supervivencia, primeros auxilios hemorragia",
    type: "article",
    section: "Stop the Bleed",
    tags: [
      "stop the bleed",
      "hemorragia masiva",
      "supervivencia",
      "primeros auxilios",
    ],
  },

  // Lesiones cara y cuello
  [AllRoutes.FACE_AND_NECK]: {
    title: "Lesiones de Cara y Cuello - Manejo Especializado",
    description:
      "Manejo de trauma facial y cervical. Fracturas faciales, lesiones de vía aérea, hemorragias faciales y protección de columna cervical.",
    keywords:
      "trauma facial EMT, lesiones cuello, fracturas faciales, vía aérea facial, columna cervical",
    type: "article",
    section: "Trauma Facial",
    tags: ["cara", "cuello", "trauma facial", "fracturas", "cervical"],
  },

  // Tejido blando
  [AllRoutes.SOFT_TISSUE]: {
    title: "Lesiones de Tejido Blando y Heridas",
    description:
      "Manejo de heridas y lesiones de tejido blando. Laceraciones, abrasiones, avulsiones, quemaduras y técnicas de curación de heridas.",
    keywords:
      "lesiones tejido blando EMT, heridas, laceraciones, quemaduras, curación heridas, suturas",
    type: "article",
    section: "Tejido Blando",
    tags: [
      "tejido blando",
      "heridas",
      "laceraciones",
      "quemaduras",
      "curación",
    ],
  },

  // Lesiones cabeza y columna
  [AllRoutes.HEAD_AND_COLUMN_INJURIES]: {
    title: "Lesiones de Cabeza y Columna Vertebral",
    description:
      "Manejo de trauma craneoencefálico y lesiones espinales. TCE, fracturas vertebrales, lesión medular, evaluación neurológica y estabilización espinal.",
    keywords:
      "trauma craneoencefálico EMT, TCE, lesión medular, fracturas vertebrales, columna vertebral, neurología",
    type: "article",
    section: "Trauma Neurológico",
    tags: ["cabeza", "columna", "TCE", "medular", "neurológico"],
  },

  // Lesiones tórax
  [AllRoutes.TORAX_INJURIES]: {
    title: "Lesiones del Tórax y Trauma Torácico",
    description:
      "Manejo de trauma torácico. Neumotórax, hemotórax, fracturas costales, tórax inestable y lesiones cardiopulmonares.",
    keywords:
      "trauma torácico EMT, neumotórax, hemotórax, fracturas costales, tórax inestable, lesiones pulmonares",
    type: "article",
    section: "Trauma Torácico",
    tags: ["tórax", "neumotórax", "hemotórax", "costillas", "pulmonar"],
  },

  // Lesiones ortopédicas
  [AllRoutes.FEET_INJURIES]: {
    title: "Lesiones Ortopédicas y Fracturas de Extremidades",
    description:
      "Manejo de fracturas y lesiones ortopédicas. Fracturas abiertas y cerradas, luxaciones, esguinces y técnicas de inmovilización de extremidades.",
    keywords:
      "lesiones ortopédicas EMT, fracturas, luxaciones, esguinces, inmovilización extremidades, ortopedia",
    type: "article",
    section: "Ortopedia",
    tags: ["ortopédico", "fracturas", "luxaciones", "extremidades", "huesos"],
  },

  // Lesiones abdominales
  [AllRoutes.ABDO_GENI_INJURIES]: {
    title: "Lesiones Abdominales y Genitourinarias",
    description:
      "Manejo de trauma abdominal y genitourinario. Lesiones de órganos internos, hemorragia intraabdominal, trauma renal y lesiones genitales.",
    keywords:
      "trauma abdominal EMT, lesiones genitourinarias, hemorragia intraabdominal, trauma renal, abdomen agudo",
    type: "article",
    section: "Trauma Abdominal",
    tags: ["abdominal", "genitourinario", "órganos internos", "renal"],
  },

  // Emergencias inmunológicas
  [AllRoutes.INMUNO_EMERGENCY]: {
    title: "Emergencias Inmunológicas y Reacciones Alérgicas",
    description:
      "Manejo de emergencias alérgicas e inmunológicas. Anafilaxia, reacciones alérgicas, urticaria, angioedema y uso de epinefrina.",
    keywords:
      "emergencias alérgicas EMT, anafilaxia, reacciones alérgicas, epinefrina, urticaria, angioedema",
    type: "article",
    section: "Inmunología",
    tags: ["alérgico", "anafilaxia", "inmunológico", "epinefrina", "urticaria"],
  },

  // Toxicología
  [AllRoutes.TOXICOLOGY]: {
    title: "Toxicología y Manejo de Intoxicaciones",
    description:
      "Manejo de intoxicaciones y envenenamientos. Sobredosis de drogas, intoxicación alcohólica, envenenamiento y antídotos específicos.",
    keywords:
      "toxicología EMT, intoxicaciones, sobredosis, envenenamiento, antídotos, drogas, alcohol",
    type: "article",
    section: "Toxicología",
    tags: [
      "toxicología",
      "intoxicación",
      "sobredosis",
      "envenenamiento",
      "antídotos",
    ],
  },

  // Emergencias ambientales
  [AllRoutes.AMBIENTAL_EMERGENCIES]: {
    title: "Emergencias Ambientales - Calor, Frío y Altitud",
    description:
      "Manejo de emergencias relacionadas con el ambiente. Golpe de calor, hipotermia, congelación, mal de montaña y lesiones por electricidad.",
    keywords:
      "emergencias ambientales EMT, golpe calor, hipotermia, congelación, mal montaña, electricidad",
    type: "article",
    section: "Emergencias Ambientales",
    tags: ["ambiental", "calor", "hipotermia", "altitud", "electricidad"],
  },

  // Emergencias psiquiátricas
  [AllRoutes.PSIQUIATRIC_EMERGENCY]: {
    title: "Emergencias Psiquiátricas y Crisis de Salud Mental",
    description:
      "Manejo de emergencias psiquiátricas. Crisis de ansiedad, depresión, psicosis, ideación suicida y técnicas de contención verbal.",
    keywords:
      "emergencias psiquiátricas EMT, salud mental, crisis ansiedad, depresión, psicosis, suicidio",
    type: "article",
    section: "Psiquiatría",
    tags: ["psiquiátrico", "salud mental", "ansiedad", "depresión", "crisis"],
  },

  // Emergencias ginecológicas
  [AllRoutes.GINE_EMERGENCY]: {
    title: "Emergencias Ginecológicas y Obstétricas",
    description:
      "Manejo de emergencias en salud femenina. Hemorragia vaginal, embarazo ectópico, complicaciones del embarazo y emergencias ginecológicas.",
    keywords:
      "emergencias ginecológicas EMT, hemorragia vaginal, embarazo ectópico, obstetricia, salud femenina",
    type: "article",
    section: "Ginecología",
    tags: ["ginecológico", "obstétrico", "embarazo", "femenino", "vaginal"],
  },

  // Cuidados obstétricos
  [AllRoutes.OBSTETRIC_CARE]: {
    title: "Cuidados Obstétricos y Neonatales",
    description:
      "Atención del parto de emergencia y cuidados neonatales. Parto extrahospitalario, complicaciones del parto, reanimación neonatal y cuidados del recién nacido.",
    keywords:
      "cuidados obstétricos EMT, parto emergencia, reanimación neonatal, recién nacido, complicaciones parto",
    type: "article",
    section: "Obstetricia",
    tags: ["obstétrico", "parto", "neonatal", "recién nacido", "emergencia"],
  },

  // Emergencias pediátricas
  [AllRoutes.PEDIATRIC_EMERGENCIES]: {
    title: "Emergencias Pediátricas - Niños y Adolescentes",
    description:
      "Manejo de emergencias en población pediátrica. Diferencias anatómicas y fisiológicas, dosificación pediátrica, OVACE infantil y trauma pediátrico.",
    keywords:
      "emergencias pediátricas EMT, niños, pediatría prehospitalaria, dosificación pediátrica, trauma infantil",
    type: "article",
    section: "Pediatría",
    tags: ["pediátrico", "niños", "infantil", "pediatría", "adolescentes"],
  },

  // Emergencias geriátricas
  [AllRoutes.GERIATRIC_EMERGENCIES]: {
    title: "Emergencias Geriátricas - Adultos Mayores",
    description:
      "Manejo de emergencias en adultos mayores. Cambios fisiológicos del envejecimiento, polifarmacia, caídas, fragilidad y síndromes geriátricos.",
    keywords:
      "emergencias geriátricas EMT, adultos mayores, envejecimiento, polifarmacia, caídas, fragilidad",
    type: "article",
    section: "Geriatría",
    tags: [
      "geriátrico",
      "adultos mayores",
      "envejecimiento",
      "caídas",
      "fragilidad",
    ],
  },

  // Pacientes necesidades especiales
  [AllRoutes.SPECIAL_NEEDS_PACIENT]: {
    title: "Pacientes con Necesidades Especiales",
    description:
      "Atención de pacientes con discapacidades y necesidades especiales. Discapacidad física, mental, sensorial, dispositivos médicos y adaptaciones de tratamiento.",
    keywords:
      "pacientes necesidades especiales EMT, discapacidad, dispositivos médicos, adaptaciones, accesibilidad",
    type: "article",
    section: "Necesidades Especiales",
    tags: [
      "necesidades especiales",
      "discapacidad",
      "dispositivos",
      "adaptaciones",
    ],
  },

  // Operaciones de transporte
  [AllRoutes.TRANSPORT_OPERATIONS]: {
    title: "Operaciones de Transporte Sanitario",
    description:
      "Protocolos de transporte de pacientes. Ambulancias terrestres, aéreas, seguridad durante el transporte, equipamiento y comunicación hospitalaria.",
    keywords:
      "transporte sanitario EMT, ambulancias, transporte aéreo, seguridad ambulancia, equipamiento médico",
    type: "article",
    section: "Transporte",
    tags: ["transporte", "ambulancia", "aéreo", "seguridad", "equipamiento"],
  },

  // Manejo de incidentes
  [AllRoutes.INCIDENT_MANAGEMENT]: {
    title: "Manejo de Incidentes y Comando de Emergencias",
    description:
      "Sistema de comando de incidentes (SCI). Organización en emergencias, roles de liderazgo, comunicación de crisis y coordinación interinstitucional.",
    keywords:
      "manejo incidentes EMT, comando emergencias, SCI, organización crisis, coordinación, liderazgo",
    type: "article",
    section: "Manejo de Incidentes",
    tags: ["incidentes", "comando", "SCI", "organización", "liderazgo"],
  },

  // Terrorismo y desastres
  [AllRoutes.TERRORIST_MANAGEMENT]: {
    title: "Respuesta al Terrorismo y Manejo de Desastres",
    description:
      "Preparación y respuesta ante actos terroristas y desastres. Agentes QBRN, triaje en masa, seguridad del personal y protocolos de descontaminación.",
    keywords:
      "terrorismo EMT, desastres, QBRN, triaje masa, descontaminación, seguridad nacional, emergencias masivas",
    type: "article",
    section: "Terrorismo y Desastres",
    tags: ["terrorismo", "desastres", "QBRN", "triaje", "descontaminación"],
  },

  // BLS
  [AllRoutes.BLS]: {
    title: "Soporte Vital Básico (BLS) - Basic Life Support",
    description:
      "Técnicas de soporte vital básico según estándares AHA. RCP de alta calidad, uso de DEA, manejo de vía aérea básica y trabajo en equipo.",
    keywords:
      "soporte vital básico EMT, BLS, RCP alta calidad, DEA, AHA, trabajo equipo, vía aérea básica",
    type: "article",
    section: "BLS",
    tags: ["BLS", "soporte vital", "RCP", "DEA", "AHA", "trabajo en equipo"],
  },

  // LMS
  [AllRoutes.LMS]: {
    title: "Sistema de Gestión de Aprendizaje (LMS)",
    description:
      "Plataforma de aprendizaje en línea para estudiantes EMT. Cursos interactivos, evaluaciones, seguimiento de progreso y recursos educativos.",
    keywords:
      "LMS EMT, aprendizaje línea, cursos interactivos, educación médica, evaluaciones, seguimiento progreso",
    type: "article",
    section: "Educación",
    tags: ["LMS", "aprendizaje", "cursos", "educación", "evaluaciones"],
  },

  // Recursos
  [AllRoutes.RESOURCES]: {
    title: "Recursos Educativos y Bibliografia EMT",
    description:
      "Biblioteca de recursos para estudiantes EMT. Libros de texto, guías clínicas, atlas anatómicos, videos educativos y material de referencia.",
    keywords:
      "recursos EMT, bibliografía, libros texto, atlas anatomía, guías clínicas, material educativo",
    type: "article",
    section: "Recursos",
    tags: ["recursos", "bibliografía", "libros", "atlas", "guías", "educativo"],
  },
};

// Función helper para obtener SEO data por ruta
export const getSEOData = (route: string): SEOData => {
  return seoData[route] || seoData[AllRoutes.MAIN];
};

// Meta tags adicionales comunes
export const commonSEOTags = {
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  language: "es-MX",
  robots: "index, follow",
  googlebot: "index, follow",
  "og:locale": "es_MX",
  "og:site_name": "Alumnos R1  | EMT Exam",
  "twitter:site": "@AlumnosR1",
  "twitter:creator": "@AlumnosR1",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "default",
  "mobile-web-app-capable": "yes",
  "msapplication-TileColor": "#4a90e2",
  "theme-color": "#4a90e2",
};
