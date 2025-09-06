import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué son los 5 correctos de la administración de medicamentos?",
        answer: "Paciente correcto, medicamento correcto, dosis correcta, hora correcta y vía correcta.",
    },
    {
        question: "¿Qué vía proporciona absorción más rápida entre las básicas?",
        answer: "La vía sublingual, seguida por la inhalada.",
    },
    {
        question: "¿Qué se debe confirmar antes de administrar un medicamento?",
        answer: "Alergias conocidas del paciente.",
    },
    {
        question: "¿Qué vía es adecuada para administración de epinefrina en un paciente con anafilaxia?",
        answer: "Vía intramuscular (IM), generalmente en el muslo lateral.",
    },
    {
        question: "¿Qué vía usa el oxígeno suplementario?",
        answer: "Vía inhalada.",
    },
    {
        question: "¿Qué registro se debe hacer después de administrar un medicamento?",
        answer: "Medicamento administrado, dosis, vía, hora y la respuesta del paciente.",
    },
    {
        question: "¿Qué medicamento se administra generalmente por vía oral en casos de hipoglucemia consciente?",
        answer: "Glucosa oral.",
    },
];

export const medicationAdministrationQuestions: Question[] = [
    {
        "question": "¿Qué vía de administración permite absorción más rápida sin necesidad de aguja?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Intramuscular" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Subcutánea" }
        ],
        "correctAnswer": "c",
        "explanation": "La vía sublingual (debajo de la lengua) aprovecha la rica red de capilares de la zona para permitir que el medicamento se absorba directamente en el torrente sanguíneo. Esto evita el paso por el sistema digestivo y el hígado, logrando un efecto muy rápido sin necesidad de una inyección."
    },
    {
        "question": "¿Qué información es crítica antes de administrar cualquier medicamento?",
        "options": [
            { "letter": "a", "text": "Presión arterial" },
            { "letter": "b", "text": "Nivel de conciencia" },
            { "letter": "c", "text": "Alergias del paciente" },
            { "letter": "d", "text": "Color de la piel" }
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad del paciente es la máxima prioridad. Antes de administrar cualquier fármaco, es absolutamente crucial confirmar que el paciente no tiene alergias conocidas al mismo, ya que una reacción alérgica puede ser grave y potencialmente mortal (anafilaxia)."
    },
    {
        "question": "¿Qué vía es usada para administrar epinefrina en anafilaxia fuera del hospital?",
        "options": [
            { "letter": "a", "text": "Intravenosa" },
            { "letter": "b", "text": "Intramuscular" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Oral" }
        ],
        "correctAnswer": "b",
        "explanation": "La vía intramuscular (IM) es la ruta estándar y recomendada para la administración de epinefrina en casos de anafilaxia, especialmente mediante autoinyectores. Ofrece una absorción rápida y confiable a través de los músculos grandes."
    },
    {
        "question": "¿Qué vía se emplea al administrar oxígeno suplementario?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Sublingual" },
            { "letter": "c", "text": "Inhalada" },
            { "letter": "d", "text": "Intramuscular" }
        ],
        "correctAnswer": "c",
        "explanation": "El oxígeno es un gas que debe ser administrado por vía inhalada para que llegue a los pulmones, donde se produce el intercambio gaseoso y pasa al torrente sanguíneo. Se utiliza para tratar o prevenir la hipoxia."
    },
    {
        "question": "¿Qué se debe hacer inmediatamente después de administrar un medicamento?",
        "options": [
            { "letter": "a", "text": "Abandonar la escena" },
            { "letter": "b", "text": "Anotar administración y observar respuesta" },
            { "letter": "c", "text": "Tomar presión arterial únicamente" },
            { "letter": "d", "text": "Iniciar ventilación con bolsa-mascarilla" }
        ],
        "correctAnswer": "b",
        "explanation": "Después de la administración, es fundamental documentar la dosis, la hora y la vía. Igualmente importante es reevaluar continuamente al paciente para observar los efectos terapéuticos deseados y vigilar la aparición de cualquier efecto secundario adverso."
    },
    {
        "question": "¿Qué medicamento suele administrarse por vía oral para hipoglucemia?",
        "options": [
            { "letter": "a", "text": "Aspirina" },
            { "letter": "b", "text": "Glucosa oral" },
            { "letter": "c", "text": "Oxígeno" },
            { "letter": "d", "text": "Epinefrina" }
        ],
        "correctAnswer": "b",
        "explanation": "Para un paciente consciente con hipoglucemia (bajo nivel de azúcar en sangre), la glucosa oral (en forma de gel, tabletas o líquido) es el tratamiento de elección. Es un azúcar simple que se absorbe rápidamente para elevar la glucemia."
    },
    {
        "question": "¿Qué medicamento administrado por vía inhalada puede salvar a un paciente hipoxémico?",
        "options": [
            { "letter": "a", "text": "Aspirina" },
            { "letter": "b", "text": "Glucosa" },
            { "letter": "c", "text": "Oxígeno" },
            { "letter": "d", "text": "Carbón activado" }
        ],
        "correctAnswer": "c",
        "explanation": "Un paciente hipoxémico sufre de bajos niveles de oxígeno en la sangre. El tratamiento directo y que salva la vida es la administración de oxígeno suplementario por vía inhalada para aumentar la concentración de oxígeno en los pulmones y, por ende, en la sangre."
    },
    {
        "question": "¿Qué paso es parte de los '5 correctos' en la administración de medicamentos?",
        "options": [
            { "letter": "a", "text": "Correcto proveedor médico" },
            { "letter": "b", "text": "Correcto diagnóstico" },
            { "letter": "c", "text": "Paciente correcto" },
            { "letter": "d", "text": "Correcto lugar de traslado" }
        ],
        "correctAnswer": "c",
        "explanation": "Los '5 correctos' (o más, según la guía) son una regla de seguridad fundamental. Incluyen: Paciente correcto, Medicamento correcto, Dosis correcta, Vía correcta y Hora correcta. Asegurarse de que se está tratando al paciente correcto es el primer paso."
    },
    {
        "question": "¿Qué vía requiere técnica estéril estricta para la administración de medicamentos?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Subcutánea" },
            { "letter": "c", "text": "Intravenosa" },
            { "letter": "d", "text": "Sublingual" }
        ],
        "correctAnswer": "c",
        "explanation": "La vía intravenosa (IV) introduce el medicamento directamente en el torrente sanguíneo, saltándose las barreras protectoras de la piel y las mucosas. Por ello, requiere una técnica aséptica estricta para prevenir infecciones graves en el torrente sanguíneo (sepsis)."
    },
    {
        "question": "¿Qué vía permite una absorción gradual y sostenida del medicamento?",
        "options": [
            { "letter": "a", "text": "Intramuscular" },
            { "letter": "b", "text": "Sublingual" },
            { "letter": "c", "text": "Inhalada" },
            { "letter": "d", "text": "Intravenosa" }
        ],
        "correctAnswer": "a",
        "explanation": "La absorción desde el tejido muscular (vía IM) es más lenta que la intravenosa o sublingual, pero más rápida que la oral. La rica vascularización del músculo permite que el medicamento se libere de forma gradual y sostenida en la circulación."
    },
    {
        "question": "¿Cuál es el sitio anatómico recomendado para la administración de epinefrina intramuscular?",
        "options": [
            { "letter": "a", "text": "Brazo" },
            { "letter": "b", "text": "Muslo lateral" },
            { "letter": "c", "text": "Glúteo" },
            { "letter": "d", "text": "Antebrazo" }
        ],
        "correctAnswer": "b",
        "explanation": "El músculo vasto lateral, en la cara externa del muslo, es el sitio preferido para la administración de epinefrina con autoinyector. Es un músculo grande, con buena irrigación sanguínea y de fácil acceso, lo que asegura una absorción rápida y efectiva."
    },
    {
        "question": "¿Qué paso debe realizarse antes de administrar cualquier medicamento?",
        "options": [
            { "letter": "a", "text": "Tomar presión arterial" },
            { "letter": "b", "text": "Revisar alergias" },
            { "letter": "c", "text": "Medir glucosa" },
            { "letter": "d", "text": "Realizar RCP" }
        ],
        "correctAnswer": "b",
        "explanation": "Repitiendo un punto crucial de seguridad: antes de administrar cualquier fármaco, es imperativo preguntar y confirmar si el paciente tiene alguna alergia conocida para prevenir una reacción adversa grave. '¿Es usted alérgico a algún medicamento?' es una pregunta obligatoria."
    },
    {
        "question": "¿Qué vía NO utiliza aguja para administrar medicamentos?",
        "options": [
            { "letter": "a", "text": "Intramuscular" },
            { "letter": "b", "text": "Intravenosa" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Subcutánea" }
        ],
        "correctAnswer": "c",
        "explanation": "Las vías intramuscular, intravenosa y subcutánea son todas vías parenterales, lo que significa que requieren una inyección (aguja). La vía sublingual, al igual que la oral o la inhalada, es una vía no parenteral que no necesita aguja."
    },
    {
        "question": "¿Qué efecto busca la administración sublingual?",
        "options": [
            { "letter": "a", "text": "Liberación prolongada" },
            { "letter": "b", "text": "Absorción rápida" },
            { "letter": "c", "text": "Protección contra infecciones" },
            { "letter": "d", "text": "Control de temperatura corporal" }
        ],
        "correctAnswer": "b",
        "explanation": "La principal ventaja y el motivo para elegir la vía sublingual es la rapidez de su efecto. Al evitar el sistema digestivo, el medicamento llega rápidamente a la circulación sistémica, siendo ideal para emergencias como un dolor torácico de origen cardíaco (nitroglicerina)."
    }
]

export const medicationAdministrationChallengeQuestions: Question[] = [
    {
        question: "Un paciente de 68 años con insuficiencia cardíaca congestiva presenta dolor torácico severo. Al administrar la tercera dosis de nitroglicerina sublingual (0.4 mg), su presión arterial desciende de 140/90 a 70/40 mmHg. Desarrolla diaforesis, náuseas, y alteración del estado mental. ¿Cuál es la consideración más crítica sobre la administración repetida de nitroglicerina y el manejo inmediato?",
        options: [
            { letter: "a", text: "Continuar administrando nitroglicerina cada 5 minutos hasta resolver el dolor" },
            { letter: "b", text: "La nitroglicerina puede causar vasodilatación venosa y arterial progresiva; suspender administración, posición Trendelenburg, acceso IV, y considerar que la hipotensión severa puede comprometer perfusión coronaria" },
            { letter: "c", text: "Administrar aspirina inmediatamente para contrarrestar los efectos" },
            { letter: "d", text: "La hipotensión es normal y esperada con nitroglicerina" }
        ],
        correctAnswer: "b",
        explanation: "La nitroglicerina causa vasodilatación venosa (reduciendo precarga) y en dosis altas, vasodilatación arterial (reduciendo postcarga). En pacientes con ICC, la precarga reducida puede ser crítica para mantener gasto cardíaco. La administración repetida puede causar hipotensión severa que paradójicamente empeora la isquemia coronaria por reducir presión de perfusión. El manejo incluye: suspender nitroglicerina, posición Trendelenburg modificada, acceso IV para fluidos si es necesario (con precaución por ICC), y monitoreo estrecho de perfusión cerebral y coronaria."
    },
    {
        question: "Durante la administración de epinefrina 1:1000 IM en anafilaxia, accidentalmente se administra la concentración 1:1000 por vía intravenosa en lugar de la concentración 1:10000 correspondiente a IV. El paciente desarrolla inmediatamente taquicardia extrema (180 lpm), hipertensión severa (220/120), y dolor torácico. ¿Cuál es la fisiopatología de esta sobredosis y el manejo más apropiado?",
        options: [
            { letter: "a", text: "Administrar más epinefrina para estabilizar el ritmo cardíaco" },
            { letter: "b", text: "La epinefrina 1:1000 IV causa estimulación masiva alfa y beta adrenérgica; manejo incluye monitoreo cardíaco continuo, beta-bloqueadores de acción corta si disponibles, nitroglicerina para hipertensión, y preparación para arritmias malignas" },
            { letter: "c", text: "No hay diferencia significativa entre las concentraciones" },
            { letter: "d", text: "Solo observar ya que los efectos son temporales" }
        ],
        correctAnswer: "b",
        explanation: "La administración IV accidental de epinefrina 1:1000 (10 veces más concentrada que la dosis IV correcta) causa crisis hipertensiva y arritmias potencialmente fatales: 1) Estimulación alpha masiva causa vasoconstricción severa e hipertensión, 2) Estimulación beta-1 causa taquicardia extrema y aumento de contractilidad, 3) Riesgo de hemorragia cerebral, infarto, y arritmias ventriculares malignas. El manejo incluye: ECG continuo, beta-bloqueadores de acción corta (metoprolol, esmolol) para controlar FC y PA, nitroglicerina para reducir postcarga, preparación para cardioversión/desfibrilación, y soporte ventilatorio si es necesario."
    },
    {
        question: "Un diabético consciente con glucemia de 38 mg/dL recibe glucosa oral (15g). Después de 15 minutos, su glucemia es 65 mg/dL pero desarrolla náuseas severas y vómitos. Necesita una segunda dosis de carbohidratos pero no puede retener nada vía oral. No hay acceso IV disponible y está en área rural remota. ¿Cuál es la alternativa de administración más apropiada?",
        options: [
            { letter: "a", text: "Forzar más glucosa oral a pesar de los vómitos" },
            { letter: "b", text: "Glucagón 1 mg intramuscular - moviliza glucógeno hepático independientemente de la vía oral, efectivo en 10-20 minutos" },
            { letter: "c", text: "Esperar hasta que cesen los vómitos sin intervención adicional" },
            { letter: "d", text: "Administrar insulina para estabilizar la glucosa" }
        ],
        correctAnswer: "b",
        explanation: "El glucagón IM es la alternativa ideal cuando la vía oral está comprometida y no hay acceso IV: 1) Mecanismo: estimula glucogenólisis hepática, liberando glucosa almacenada, 2) Vía IM permite administración sin cooperación del paciente, 3) Efectivo en 10-20 minutos, 4) No depende de absorción gastrointestinal. Consideraciones importantes: requiere reservas de glucógeno hepático (menos efectivo en desnutridos crónicos, alcohólicos), puede causar náuseas adicionales, el efecto es temporal (1-2 horas), necesita seguimiento con carbohidratos orales cuando mejoren las náuseas."
    },
    {
        question: "Un paciente asmático severo recibe albuterol por nebulizador. Después de la administración, presenta mejoría del broncoespasmo pero desarrolla taquicardia sinusal de 160 lpm, temblor fino, ansiedad, y dolor torácico atípico. Su saturación mejora de 88% a 96%. ¿Cómo debe interpretar estos efectos y modificar el tratamiento?",
        options: [
            { letter: "a", text: "Suspender inmediatamente todo el albuterol" },
            { letter: "b", text: "Los efectos beta-2 selectivos del albuterol pueden causar estimulación beta-1 cardíaca; continuar tratamiento con monitoreo cardíaco estrecho, considerar dosis menores o intervalos más largos" },
            { letter: "c", text: "Administrar beta-bloqueadores para controlar la taquicardia" },
            { letter: "d", text: "Cambiar inmediatamente a epinefrina" }
        ],
        correctAnswer: "b",
        explanation: "El albuterol es un beta-2 agonista 'selectivo', pero esta selectividad es relativa: 1) En dosis altas o pacientes sensibles puede estimular receptores beta-1 cardíacos, 2) Los efectos adversos (taquicardia, temblor, ansiedad) son comunes pero generalmente tolerables si hay beneficio respiratorio, 3) El dolor torácico puede ser por aumento de demanda de oxígeno miocárdico. La evaluación riesgo-beneficio es clave: mejoría significativa de oxigenación (88→96%) justifica continuar con precaución. Modificaciones incluyen: monitoreo cardíaco continuo, espaciar dosis, usar cámara espaciadora para reducir absorción sistémica, considerar ipratropio como adyuvante."
    },
    {
        question: "Durante la administración de morfina IV para dolor severo por fractura femoral, un paciente desarrolla depresión respiratoria progresiva (FR 6/min), pero se mantiene consciente y orientado. Refiere que el dolor persiste en 8/10. Su saturación desciende a 89%. ¿Cuál es el dilema farmacológico y el manejo más apropiado?",
        options: [
            { letter: "a", text: "Administrar naloxona completa inmediatamente" },
            { letter: "b", text: "Balance entre analgesia necesaria y depresión respiratoria: naloxona titulada en dosis pequeñas (0.04-0.08 mg) para revertir depresión respiratoria manteniendo algo de analgesia, ventilación asistida si es necesario" },
            { letter: "c", text: "Suspender opioides y usar solo medios no farmacológicos" },
            { letter: "d", text: "Administrar más morfina ya que el dolor persiste" }
        ],
        correctAnswer: "b",
        explanation: "Este escenario ilustra el dilema terapéutico de los opioides: analgesia necesaria vs depresión respiratoria: 1) La naloxona en dosis completa (0.4-2 mg) puede revertir toda la analgesia, causando dolor extremo y posible síndrome de abstinencia, 2) La titulación cuidadosa con micro-dosis (0.04-0.08 mg IV cada 2-3 minutos) puede revertir selectivamente la depresión respiratoria manteniendo analgesia parcial, 3) Alternativas incluyen: ventilación asistida con BVM, re-dosificación con opioides de menor potencia, técnicas no farmacológicas de analgesia. El monitoreo continuo es esencial ya que la naloxona tiene vida media más corta que la morfina."
    },
    {
        question: "Un paciente con IAM recibe aspirina 324 mg masticable. Cinco minutos después desarrolla edema facial, estridor leve, y urticaria generalizada. Su presión arterial permanece estable (130/80) y no hay compromiso respiratorio severo. ¿Cuál es la estrategia de manejo más apropiada considerando el contexto cardiovascular?",
        options: [
            { letter: "a", text: "Ignorar la reacción ya que la aspirina es crítica para el IAM" },
            { letter: "b", text: "Manejo de reacción alérgica leve-moderada: difenhidramina, corticosteroides, monitoreo estrecho de vía aérea, pero continuar con otros antiagregantes (clopidogrel) si están indicados" },
            { letter: "c", text: "Epinefrina inmediata aunque no hay compromiso severo" },
            { letter: "d", text: "Suspender todos los medicamentos cardiovasculares" }
        ],
        correctAnswer: "b",
        explanation: "Esta situación requiere balance entre manejo de alergia y necesidades cardiovasculares: 1) La reacción es leve-moderada (no hay hipotensión ni compromiso respiratorio severo), 2) El manejo incluye: difenhidramina 25-50 mg IV/IM, metilprednisolona 125 mg IV, monitoreo continuo de vía aérea, 3) Cardiovascularmente: la aspirina debe suspenderse, pero otros antiagregantes (clopidogrel) pueden ser necesarios si están indicados, 4) La epinefrina se reserva para anafilaxia severa. El seguimiento debe incluir educación sobre alergia a salicilatos y alternativas antiagregantes futuras."
    },
    {
        question: "Un paciente recibe carbón activado para sobredosis de acetaminofén pero inmediatamente vomita todo el contenido. Han pasado 3 horas desde la ingesta tóxica. El paciente está consciente y cooperativo. ¿Cuál es la consideración temporal más crítica y el manejo subsecuente?",
        options: [
            { letter: "a", text: "Repetir carbón activado inmediatamente sin modificaciones" },
            { letter: "b", text: "La ventana de efectividad del carbón activado se cierra rápidamente; considerar anti-eméticos (ondansetrón), administrar carbón en dosis menores y más frecuentes, o considerar otras intervenciones como N-acetilcisteína temprana" },
            { letter: "c", text: "Esperar 2 horas antes de cualquier intervención adicional" },
            { letter: "d", text: "El carbón activado ya no es útil después de 1 hora" }
        ],
        correctAnswer: "b",
        explanation: "El tiempo es crítico en intoxicaciones: 1) El carbón activado es más efectivo en las primeras 1-2 horas, pero puede tener beneficio hasta 4-6 horas, 2) El vómito elimina todo el beneficio potencial, 3) Estrategias incluyen: ondansetrón 4-8 mg IV para controlar náuseas, carbón activado en dosis menores (25g vs 50g) administrado más lentamente, considerar sonda nasogástrica si el paciente no coopera, 4) Para acetaminofén específicamente: N-acetilcisteína es el antídoto específico y es más efectiva cuando se inicia tempranamente, 5) La decisión debe basarse en tiempo transcurrido, cantidad ingerida, y nivel sérico si está disponible."
    },
    {
        question: "Durante la administración de dextrosa 50% IV para hipoglucemia severa, se infiltra 15 mL en el tejido subcutáneo antes de detectar la extravasación. El área se ve edematizada y el paciente refiere dolor intenso en el sitio. Su glucemia ha mejorado a 95 mg/dL. ¿Cuál es el manejo más crítico de esta complicación?",
        options: [
            { letter: "a", text: "Aplicar hielo directo para reducir inflamación" },
            { letter: "b", text: "La dextrosa 50% es altamente hipertónica; tratamiento incluye elevación del miembro, compresas tibias, hialuronidasa subcutánea para dispersar la solución, y monitoreo de síndrome compartimental" },
            { letter: "c", text: "No requiere tratamiento específico" },
            { letter: "d", text: "Administrar analgésicos únicamente" }
        ],
        correctAnswer: "b",
        explanation: "La extravasación de dextrosa 50% es una emergencia tisular: 1) Osmolaridad ~2500 mOsm/L causa daño osmótico inmediato, 2) El manejo inmediato incluye: elevación del miembro, compresas tibias (no frías) para vasodilatación, hialuronidasa 150U SC en múltiples sitios alrededor de la extravasación para dispersar la solución, 3) Monitoreo de síndrome compartimental (presión, pulsos, sensibilidad), 4) Documentación fotográfica si es posible, 5) Analgesia apropiada. La prevención futura incluye usar venas más grandes, diluir dextrosa (D25% o D10%), o usar glucagón IM como alternativa en casos de acceso IV difícil."
    },
    {
        question: "Un paciente con fibrilación auricular crónica toma warfarina diaria. Presenta sangrado gastrointestinal y requiere cardioversión eléctrica urgente por respuesta ventricular rápida incontrolable con compromiso hemodinámico. Su INR reportado es 3.8. ¿Cuál es la consideración farmacológica más compleja?",
        options: [
            { letter: "a", text: "Proceder con cardioversión sin consideraciones especiales" },
            { letter: "b", text: "La cardioversión con anticoagulación supra-terapéutica aumenta riesgo embólico paradójico; considerar reversión parcial con vitamina K, plasma fresco congelado, o complejo protrombínico, balanceando riesgo hemorrágico vs embólico" },
            { letter: "c", text: "Suspender warfarina y esperar normalización de INR" },
            { letter: "d", text: "Administrar heparina adicional antes de cardioversión" }
        ],
        correctAnswer: "b",
        explanation: "Este escenario presenta un dilema farmacológico complejo: 1) La cardioversión puede causar embolia cerebral si no hay anticoagulación adecuada, 2) El INR 3.8 con sangrado activo presenta riesgo hemorrágico continuo, 3) Opciones incluyen: vitamina K 2.5-5 mg IV para reducción parcial de INR, plasma fresco congelado o complejo protrombínico para reversión más rápida, 4) La decisión depende de: severidad del sangrado vs inestabilidad hemodinámica, disponibilidad de productos sanguíneos, capacidad de monitoreo post-cardioversión. El objetivo es minimizar tanto riesgo embólico como hemorrágico."
    },
    {
        question: "Un paciente presenta sobredosis de beta-bloqueadores (metoprolol) con bradicardia severa (35 lpm), hipotensión (70/40), y alteración del estado mental. Después de administrar atropina 1 mg IV sin respuesta, ¿cuál es el antídoto específico más efectivo y su mecanismo de acción?",
        options: [
            { letter: "a", text: "Epinefrina en altas dosis" },
            { letter: "b", text: "Glucagón 5-10 mg IV - bypasa el bloqueo beta-adrenérgico activando adenilciclasa por vía independiente, mejorando cronotropismo e inotropismo" },
            { letter: "c", text: "Dopamina en infusión continua" },
            { letter: "d", text: "Marcapaso transcutáneo inmediato" }
        ],
        correctAnswer: "b",
        explanation: "El glucagón es el antídoto específico para sobredosis de beta-bloqueadores: 1) Mecanismo: activa adenilciclasa por receptores de glucagón (independientes de receptores beta), aumentando AMPc intracelular, 2) Efectos: mejora contractilidad cardíaca (inotropismo) y frecuencia cardíaca (cronotropismo), 3) Dosis: bolo inicial 5-10 mg IV, seguido de infusión 1-10 mg/hr si hay respuesta, 4) Efectos adversos: náuseas, vómitos (casi universales), hiperglucemia. Otros tratamientos adyuvantes incluyen: calcio IV, insulina de alta dosis con dextrosa, lípidos IV en casos severos. El marcapaso puede ser necesario como medida temporal."
    }
];
