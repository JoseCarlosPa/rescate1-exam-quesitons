import { JeopardyQuestion } from './Jeopardy.types';

export const CATEGORIES = [
    "Anatomía",
    "Fisiología",
    "Técnicas",
    "Casos Clínicos",
    "Farmacología",
    "Protocólos"
];

export const POINT_VALUES = [100, 200, 300, 400, 500, 800, 1000];

export const JEOPARDY_QUESTIONS: JeopardyQuestion[] = [
    // --- ANATOMÍA ---
    {
        id: "anat-100",
        category: "Anatomía",
        points: 100,
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        answer: "El fémur",
        options: ["El fémur", "El húmero", "La tibia", "El radio"],
        explanation: "El fémur es el hueso más largo y fuerte del cuerpo humano, ubicado en el muslo."
    },
    {
        id: "anat-200",
        category: "Anatomía",
        points: 200,
        question: "¿Cuántas vértebras cervicales (C1-C7) tiene la columna vertebral?",
        answer: "7 vértebras",
        options: ["5 vértebras", "7 vértebras", "12 vértebras", "3 (fusionadas)"],
        explanation: "La columna cervical está compuesta por 7 vértebras (C1-C7)."
    },
    {
        id: "anat-300",
        category: "Anatomía",
        points: 300,
        question: "¿Qué arterias principales ascienden por el cuello para irrigar el cerebro?",
        answer: "Arterias carótidas y vertebrales",
        options: ["Arterias femorales y poplíteas", "Arterias carótidas y vertebrales", "Arterias braquiales y radiales", "Arterias subclavias y axilares"],
        explanation: "Las arterias carótidas internas y las arterias vertebrales (que forman la basilar) son las principales proveedoras de sangre al cerebro."
    },
    {
        id: "anat-400",
        category: "Anatomía",
        points: 400,
        question: "¿En qué cuadrante abdominal se encuentra el apéndice (comúnmente)?",
        answer: "Cuadrante inferior derecho",
        options: ["Cuadrante superior derecho", "Cuadrante inferior derecho", "Cuadrante inferior izquierdo", "Cuadrante superior izquierdo"],
        explanation: "El apéndice se localiza típicamente en el cuadrante inferior derecho del abdomen, en el punto de McBurney."
    },
    {
        id: "anat-500",
        category: "Anatomía",
        points: 500,
        question: "¿Qué estructura muscular grande separa la cavidad torácica de la cavidad abdominal?",
        answer: "El diafragma",
        options: ["El peritoneo", "El diafragma", "El mediastino", "El pericardio"],
        explanation: "El diafragma es el músculo principal de la respiración que separa la cavidad torácica de la abdominal."
    },
    {
        id: "anat-800",
        category: "Anatomía",
        points: 800,
        question: "¿Cuál es el nombre del X (décimo) par craneal que, al ser estimulado, provoca una respuesta vagal y bradicardia?",
        answer: "Nervio Vago",
        options: ["Nervio Trigémino", "Nervio Vago", "Nervio Óptico", "Nervio Frénico"],
        explanation: "El Nervio Vago (Par Craneal X) es un componente clave del sistema nervioso parasimpático y su estimulación ralentiza la frecuencia cardíaca."
    },
    {
        id: "anat-1000",
        category: "Anatomía",
        points: 1000,
        question: "¿Cómo se llama el punto anatómico donde la tráquea se bifurca en los bronquios principales derecho e izquierdo?",
        answer: "Carina",
        options: ["Hiato", "Cricoides", "Carina", "Epiglotis"],
        explanation: "La carina es la cresta de cartílago en la base de la tráquea que la separa en los dos bronquios principales."
    },

    // --- FISIOLOGÍA ---
    {
        id: "fisio-100",
        category: "Fisiología",
        points: 100,
        question: "¿Cuál es el rango normal de frecuencia cardíaca en reposo para un adulto?",
        answer: "60-100 latidos por minuto",
        options: ["40-60 lpm", "60-100 lpm", "100-120 lpm", "120-140 lpm"],
        explanation: "La frecuencia cardíaca normal en reposo para adultos es de 60-100 latidos por minuto (lpm)."
    },
    {
        id: "fisio-200",
        category: "Fisiología",
        points: 200,
        question: "¿Qué gas transporta la hemoglobina desde los pulmones a los tejidos?",
        answer: "Oxígeno (O2)",
        options: ["Nitrógeno (N2)", "Oxígeno (O2)", "Dióxido de carbono (CO2)", "Hidrógeno (H2)"],
        explanation: "Los glóbulos rojos contienen hemoglobina, una proteína que se une al oxígeno para transportarlo a los tejidos."
    },
    {
        id: "fisio-300",
        category: "Fisiología",
        points: 300,
        question: "¿Qué valor se considera una presión arterial 'normal' en un adulto promedio?",
        answer: "120/80 mmHg",
        options: ["100/60 mmHg", "120/80 mmHg", "140/90 mmHg", "90/50 mmHg"],
        explanation: "La presión arterial normal es aproximadamente 120/80 mmHg (sistólica/diastólica)."
    },
    {
        id: "fisio-400",
        category: "Fisiología",
        points: 400,
        question: "¿Qué hormona, producida por el páncreas, disminuye los niveles de glucosa en sangre?",
        answer: "Insulina",
        options: ["Adrenalina", "Insulina", "Cortisol", "Glucagón"],
        explanation: "La insulina permite que la glucosa entre a las células, bajando así su concentración en la sangre."
    },
    {
        id: "fisio-500",
        category: "Fisiología",
        points: 500,
        question: "¿Cuál es el volumen tidal (volumen de aire corriente) aproximado de un adulto en reposo?",
        answer: "500 ml",
        options: ["150 ml", "500 ml", "1000 ml", "2000 ml"],
        explanation: "El volumen tidal normal (cantidad de aire en cada respiración tranquila) es aproximadamente 500 ml (o 6-8 ml/kg)."
    },
    {
        id: "fisio-800",
        category: "Fisiología",
        points: 800,
        question: "¿Cómo se llama la ley que establece que 'la fuerza de contracción del corazón es proporcional a su estiramiento inicial' (a más llenado, más fuerte bombea)?",
        answer: "Ley de Frank-Starling",
        options: ["Ley de Ohm", "Ley de Frank-Starling", "Efecto Bohr", "Principio de Fick"],
        explanation: "La Ley de Frank-Starling describe cómo el corazón se ajusta automáticamente al volumen de sangre que recibe."
    },
    {
        id: "fisio-1000",
        category: "Fisiología",
        points: 1000,
        question: "¿Qué tríada de signos (hipertensión, bradicardia y respiración irregular) indica un aumento de la presión intracraneal (PIC)?",
        answer: "Tríada de Cushing",
        options: ["Tríada de Beck (Shock)", "Tríada de Cushing", "Tríada de Virchow (Trombosis)", "Tríada de Charcot (Colangitis)"],
        explanation: "La Tríada de Cushing es una respuesta fisiológica tardía y grave al aumento de la presión intracraneal, indicando herniación cerebral inminente."
    },

    // --- TÉCNICAS ---
    {
        id: "tec-100",
        category: "Técnicas",
        points: 100,
        question: "¿Cuál es la relación compresiones-ventilaciones en RCP para un solo reanimador en adultos?",
        answer: "30:2",
        options: ["15:2", "30:2", "5:1", "Compresiones continuas"],
        explanation: "La relación recomendada es 30 compresiones por cada 2 ventilaciones en adultos."
    },
    {
        id: "tec-200",
        category: "Técnicas",
        points: 200,
        question: "¿A qué profundidad deben realizarse las compresiones torácicas en un adulto promedio?",
        answer: "5 a 6 cm (2 a 2.4 pulgadas)",
        options: ["2 a 3 cm", "3 a 4 cm", "5 a 6 cm", "7 a 8 cm"],
        explanation: "Las compresiones deben tener una profundidad de al menos 5 cm (2 pulgadas) pero no más de 6 cm (2.4 pulgadas)."
    },
    {
        id: "tec-300",
        category: "Técnicas",
        points: 300,
        question: "¿Cuál es la posición de manejo inicial para un paciente en shock (hipovolémico) sin trauma?",
        answer: "Supina con elevación pasiva de piernas",
        options: ["Fowler alta (sentado)", "Trendelenburg (cabeza abajo)", "Supina con elevación pasiva de piernas", "Decúbito lateral izquierdo"],
        explanation: "La posición supina con elevación pasiva de piernas puede mejorar el retorno venoso. El Trendelenburg completo (inclinación de la camilla) ya no se recomienda."
    },
    {
        id: "tec-400",
        category: "Técnicas",
        points: 400,
        question: "¿Qué técnica manual se usa para abrir la vía aérea en un paciente con sospecha de trauma cervical?",
        answer: "Tracción mandibular (Subluxación mandibular)",
        options: ["Inclinación de cabeza-elevación de mentón", "Tracción mandibular", "Hiperextensión cervical", "Maniobra de Sellick"],
        explanation: "La tracción mandibular permite abrir la vía aérea minimizando el movimiento de la columna cervical."
    },
    {
        id: "tec-500",
        category: "Técnicas",
        points: 500,
        question: "¿Cuál es la presión correcta para inflar el manguito (globo) de un tubo endotraqueal?",
        answer: "20-30 cmH2O",
        options: ["10-15 cmH2O", "20-30 cmH2O", "40-50 cmH2O", "Más de 50 cmH2O"],
        explanation: "La presión del manguito debe mantenerse entre 20-30 cmH2O para sellar la vía aérea sin causar necrosis traqueal."
    },
    {
        id: "tec-800",
        category: "Técnicas",
        points: 800,
        question: "¿Cuál es el método 'Gold Standard' (estándar de oro) para confirmar la colocación correcta de un tubo endotraqueal?",
        answer: "Capnografía (EtCO2)",
        options: ["Auscultación de 5 puntos", "Visualización del tubo pasando las cuerdas", "Capnografía (EtCO2)", "Vapor en el tubo"],
        explanation: "La capnografía (medición del CO2 exhalado) es el método más fiable para confirmar la colocación traqueal y monitorear la ventilación."
    },
    {
        id: "tec-1000",
        category: "Técnicas",
        points: 1000,
        question: "¿Cuáles son los dos sitios anatómicos preferidos para la descompresión con aguja de un neumotórax a tensión?",
        answer: "2º EIC LMC o 5º EIC LAA/LMA",
        options: ["Debajo de la clavícula y en el apéndice xifoides", "2º EIC LMC o 5º EIC LAA/LMA", "Directamente sobre el esternón", "En la espalda, junto a la escápula"],
        explanation: "Segundo Espacio Intercostal (EIC) en la Línea Media Clavicular (LMC) o el 5º EIC en la Línea Axilar Anterior (LAA) o Media (LMA)."
    },

    // --- CASOS CLÍNICOS ---
    {
        id: "caso-100",
        category: "Casos Clínicos",
        points: 100,
        question: "Paciente masculino de 65 años con dolor torácico opresivo que irradia al brazo izquierdo y diaforesis (sudoración fría). ¿Diagnóstico más probable?",
        answer: "Infarto agudo de miocardio (SCA)",
        options: ["Ataque de ansiedad", "Infarto agudo de miocardio (SCA)", "Neumonía", "Reflujo gastroesofágico"],
        explanation: "El dolor torácico opresivo, irradiado y con diaforesis es la presentación clásica de un Síndrome Coronario Agudo (SCA)."
    },
    {
        id: "caso-200",
        category: "Casos Clínicos",
        points: 200,
        question: "Paciente con dificultad respiratoria, sibilancias y urticaria (ronchas) tras una picadura de abeja. ¿Qué debe administrarse INMEDIATAMENTE?",
        answer: "Epinefrina (Adrenalina)",
        options: ["Aspirina", "Epinefrina (Adrenalina)", "Naloxona", "Glucosa"],
        explanation: "Es una reacción anafiláctica. La epinefrina es el único medicamento que salva la vida revirtiendo la broncoconstricción y la vasodilatación."
    },
    {
        id: "caso-300",
        category: "Casos Clínicos",
        points: 300,
        question: "Paciente inconsciente con piel pálida y fría, respiración normal y un glucómetro que marca 35 mg/dl. ¿Cuál es la intervención prioritaria?",
        answer: "Administrar glucosa IV o glucagón IM",
        options: ["Administrar insulina", "Administrar glucosa IV o glucagón IM", "Administrar oxígeno al 100%", "Dar líquidos orales azucarados"],
        explanation: "La hipoglucemia severa (inconsciencia) requiere glucosa IV. Si no hay acceso IV, se usa glucagón IM. No se da nada oral a un paciente inconsciente."
    },
    {
        id: "caso-400",
        category: "Casos Clínicos",
        points: 400,
        question: "Paciente de trauma (accidente de auto) con TA 80/40, FC 130 lpm, pálido y abdomen rígido. ¿Qué tipo de shock sospecha?",
        answer: "Shock hipovolémico (hemorrágico)",
        options: ["Shock neurogénico", "Shock hipovolémico (hemorrágico)", "Shock cardiogénico", "Shock séptico"],
        explanation: "El trauma, la hipotensión, la taquicardia y el abdomen rígido sugieren una hemorragia interna (shock hemorrágico)."
    },
    {
        id: "caso-500",
        category: "Casos Clínicos",
        points: 500,
        question: "Paciente con cefalea súbita descrita como 'el peor dolor de cabeza de mi vida', rigidez de nuca y fotofobia. ¿Diagnóstico más probable?",
        answer: "Hemorragia subaracnoidea",
        options: ["Migraña severa", "Meningitis", "Hemorragia subaracnoidea", "Sinusitis"],
        explanation: "La 'cefalea en trueno' súbita y máxima es el signo clásico de una hemorragia subaracnoidea (HSA)."
    },
    {
        id: "caso-800",
        category: "Casos Clínicos",
        points: 800,
        question: "Paciente masculino de 60 años con dolor torácico 'desgarrador' que irradia a la espalda (entre las escápulas) y TA diferente en ambos brazos. ¿Qué sospecha?",
        answer: "Disección aórtica",
        options: ["Infarto agudo de miocardio", "Disección aórtica", "Embolia pulmonar", "Pericarditis"],
        explanation: "El dolor desgarrador que migra a la espalda y un déficit de pulso o TA entre brazos son signos clásicos de una disección de la aorta."
    },
    {
        id: "caso-1000",
        category: "Casos Clínicos",
        points: 1000,
        question: "Paciente diabético con respiraciones de Kussmaul (rápidas y profundas), aliento afrutado y glucemia de 450 mg/dL. ¿Cuál es el diagnóstico?",
        answer: "Cetoacidosis diabética (CAD)",
        options: ["Estado hiperosmolar (EHH)", "Hipoglucemia severa", "Cetoacidosis diabética (CAD)", "Shock séptico"],
        explanation: "La hiperglucemia, la respiración acidótica (Kussmaul) y el aliento afrutado (cetonas) son la tríada de la Cetoacidosis Diabética."
    },

    // --- FARMACOLOGÍA ---
    {
        id: "farm-100",
        category: "Farmacología",
        points: 100,
        question: "¿Cuál es el medicamento antiagregante plaquetario que se administra (masticado) en sospecha de infarto?",
        answer: "Aspirina (Ácido acetilsalicílico)",
        options: ["Ibuprofeno", "Aspirina (Ácido acetilsalicílico)", "Paracetamol", "Morfina"],
        explanation: "La aspirina inhibe la agregación plaquetaria y se da masticada para una absorción más rápida en Síndrome Coronario Agudo."
    },
    {
        id: "farm-200",
        category: "Farmacología",
        points: 200,
        question: "¿Qué medicamento (antídoto) se administra para revertir una sobredosis de opioides (heroína, fentanilo)?",
        answer: "Naloxona",
        options: ["Flumazenil", "Naloxona", "Atropina", "Glucagón"],
        explanation: "La naloxona (Narcan) es el antídoto antagonista específico para la depresión respiratoria por opioides."
    },
    {
        id: "farm-300",
        category: "Farmacología",
        points: 300,
        question: "¿Cuál es la dosis estándar de Adrenalina (Epinefrina) en un paro cardíaco (ACLS)?",
        answer: "1 mg IV/IO cada 3-5 minutos",
        options: ["0.5 mg IV única dosis", "1 mg IV/IO cada 3-5 minutos", "0.3 mg IM", "300 mg IV bolo"],
        explanation: "En paro cardíaco de adulto (FV, TVsp, AESP, Asistolia) se administra 1 mg de adrenalina 1:10,000 IV o IO cada 3-5 minutos."
    },
    {
        id: "farm-400",
        category: "Farmacología",
        points: 400,
        question: "¿Qué medicamento es el broncodilatador de acción rápida de primera línea para un ataque de asma (broncoespasmo)?",
        answer: "Albuterol (Salbutamol)",
        options: ["Morfina", "Albuterol (Salbutamol)", "Bromuro de Ipratropio", "Furosemida"],
        explanation: "El albuterol (Salbutamol) es un agonista Beta-2 de acción corta, es la primera línea para relajar el músculo liso bronquial."
    },
    {
        id: "farm-500",
        category: "Farmacología",
        points: 500,
        question: "¿Para qué arritmia se utiliza el medicamento Adenosina (en dosis rápida de 6 mg IV)?",
        answer: "Taquicardia Supraventricular (TSV) estable",
        options: ["Fibrilación Ventricular (FV)", "Taquicardia Supraventricular (TSV) estable", "Bradicardia sinusal", "Asistolia"],
        explanation: "La adenosina bloquea temporalmente el nodo AV y se usa para 'resetear' taquicardias estables de complejo estrecho (TSV)."
    },
    {
        id: "farm-800",
        category: "Farmacología",
        points: 800,
        question: "¿Cuál es el medicamento de primera línea para detener una convulsión activa (status epilepticus) en el ámbito prehospitalario?",
        answer: "Una Benzodiazepina (ej. Midazolam, Diazepam)",
        options: ["Naloxona", "Una Benzodiazepina (ej. Midazolam, Diazepam)", "Amiodarona", "Epinefrina"],
        explanation: "Las benzodiazepinas (como Midazolam IM o Diazepam/Lorazepam IV) son anticonvulsivos de primera línea para el status epilepticus."
    },
    {
        id: "farm-1000",
        category: "Farmacología",
        points: 1000,
        question: "¿Cuál es la dosis inicial de Amiodarona en un paro cardíaco por Fibrilación Ventricular (FV) refractaria a la desfibrilación?",
        answer: "300 mg en bolo IV/IO",
        options: ["150 mg en infusión", "300 mg en bolo IV/IO", "1 mg cada 3 minutos", "50 mg en bolo lento"],
        explanation: "En ACLS, si la FV/TVsp no responde a la desfibrilación y epinefrina, la primera dosis del antiarrítmico Amiodarona es un bolo rápido de 300 mg IV/IO."
    },

    // --- PROTOCOLOS ---
    {
        id: "prot-100",
        category: "Protocólos",
        points: 100,
        question: "¿Cuál es el primer eslabón en la Cadena de Supervivencia de paro cardíaco extrahospitalario?",
        answer: "Activación del sistema de respuesta a emergencias",
        options: ["RCP de alta calidad", "Activación del sistema de respuesta a emergencias", "Desfibrilación rápida", "Soporte Vital Avanzado"],
        explanation: "El reconocimiento precoz del paro y la activación (llamar al número de emergencias) es el primer paso crucial."
    },
    {
        id: "prot-200",
        category: "Protocólos",
        points: 200,
        question: "¿Qué significa la 'A' en la mnemotecnia SAMPLE?",
        answer: "Alergias",
        options: ["Amigos y familia", "Alergias", "Antecedentes", "Ayuno"],
        explanation: "SAMPLE: S(Signos/Síntomas), A(Alergias), M(Medicamentos), P(Pasado médico), L(Última ingesta/Last oral), E(Eventos previos)."
    },
    {
        id: "prot-300",
        category: "Protocólos",
        points: 300,
        question: "¿Cuál es el sistema de triaje más utilizado en incidentes con múltiples víctimas (desastres)?",
        answer: "START (Simple Triage and Rapid Treatment)",
        options: ["ABCDE", "START (Simple Triage and Rapid Treatment)", "SAMPLE", "APGAR"],
        explanation: "START es el sistema de triaje estándar para clasificar rápidamente a los pacientes en categorías de prioridad (Rojo, Amarillo, Verde, Negro)."
    },
    {
        id: "prot-400",
        category: "Protocólos",
        points: 400,
        question: "¿Qué significa el color ROJO en el sistema de triaje START?",
        answer: "Prioridad 1 (Inmediata)",
        options: ["Prioridad 0 (Fallecido)", "Prioridad 1 (Inmediata)", "Prioridad 2 (Retrasada)", "Prioridad 3 (Menor)"],
        explanation: "El Rojo (Inmediato) se asigna a pacientes críticos que tienen amenaza vital pero son salvables (ej. shock, vía aérea comprometida)."
    },
    {
        id: "prot-500",
        category: "Protocólos",
        points: 500,
        question: "¿Qué significa el color NEGRO en el sistema de triaje START?",
        answer: "Fallecido o Expectante (Prioridad 0)",
        options: ["Fallecido o Expectante (Prioridad 0)", "Inmediato (Prioridad 1)", "Retrasado (Prioridad 2)", "Menor (Prioridad 3)"],
        explanation: "El Negro se asigna a pacientes que no respiran tras abrir la vía aérea (fallecidos) o cuyas lesiones son tan graves que no sobrevivirán (expectantes)."
    },
    {
        id: "prot-800",
        category: "Protocólos",
        points: 800,
        question: "¿Cuál es el objetivo de saturación de oxígeno (SpO2) recomendado para un paciente con exacerbación de EPOC (Enfermedad Pulmonar Obstructiva Crónica)?",
        answer: "88-92%",
        options: ["100% siempre", "88-92%", "80-85%", "94-98%"],
        explanation: "En pacientes con EPOC, una sobresaturación (hiperoxia) puede deprimir el impulso respiratorio. Se titula el oxígeno para mantener un SpO2 de 88-92%."
    },
    {
        id: "prot-1000",
        category: "Protocólos",
        points: 1000,
        question: "¿Qué herramienta de evaluación se utiliza para estimar el porcentaje de Superficie Corporal Total (SCT) quemada en un paciente?",
        answer: "La Regla de los 9 de Wallace",
        options: ["La Escala de Coma de Glasgow", "La Regla de los 9 de Wallace", "La Escala de Cincinnati", "El puntaje APGAR"],
        explanation: "La Regla de los 9 (o la regla de la palma de la mano) es el método prehospitalario estándar para estimar el porcentaje de SCT quemada y guiar la reanimación con líquidos."
    }
];
