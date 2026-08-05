import { Question } from "../../../question";

export const faqData = [
    {
        question: "¿Qué es lo primero que se hace al llegar a la escena?",
        answer: "Lo primero es garantizar la seguridad de la escena. Esto incluye usar BSI/EPP, evaluar riesgos (tráfico, químicos, electricidad, agresores) y determinar si la escena es segura para entrar."
    },
    {
        question: "¿Cuál es la diferencia entre el ML y la NE?",
        answer: "El Mecanismo de Lesión (ML) se refiere a las fuerzas físicas que causan trauma (ej. energía cinética en choque). La Naturaleza de la Enfermedad (NE) se refiere al problema médico que llevó al paciente a pedir ayuda (ej. dolor de pecho, dificultad para respirar)."
    },
    {
        question: "¿Qué es el 'Periodo Dorado' (Golden Period)?",
        answer: "Es el concepto que establece que un paciente con trauma grave tiene mayores posibilidades de supervivencia si recibe atención quirúrgica definitiva dentro de la primera hora (60 minutos) desde el momento del accidente."
    },
    {
        question: "¿Qué son los '10 minutos de platino'?",
        answer: "Es el tiempo máximo recomendado (10 minutos o menos) que el TAMP-A debe pasar en la escena con un paciente de trauma grave antes de iniciar el transporte hacia un centro de trauma."
    },
    {
        question: "¿Qué evalúa la escala AVPU?",
        answer: "La escala AVPU es una forma rápida de evaluar el estado mental inicial en la evaluación primaria: Alerta, respuesta Verbal, respuesta al Dolor (Pain) o Inconsciente (Unresponsive)."
    },
    {
        question: "¿Qué significa SAMPLE?",
        answer: "Es una mnemotecnia para recolectar el historial médico: Síntomas, Alergias, Medicamentos, Padecimientos/antecedentes Pertinentes, Last meal (última comida) y Eventos que llevaron a la emergencia."
    },
    {
        question: "¿Qué es la capnografía (ETCO2)?",
        answer: "Es la medición del dióxido de carbono exhalado al final de la respiración. Sus valores normales son de 35 a 45 mmHg. Es el estándar de oro para confirmar la colocación del tubo endotraqueal."
    },
    {
        question: "¿Por qué los signos vitales normales no descartan choque?",
        answer: "Porque en las fases tempranas del choque (choque compensado), el cuerpo puede mantener una presión arterial normal mediante mecanismos compensatorios como la taquicardia y la vasoconstricción periférica, antes de descompensarse rápidamente."
    }
];

export const patientAssessmentQuestions: Question[] = [
    {
        "question": "¿Cuál es la prioridad absoluta al llegar a la escena de una emergencia?",
        "options": [
            { "letter": "a", "text": "Contactar a control médico inmediatamente" },
            { "letter": "b", "text": "Asegurar la vía aérea del paciente (A de ABCDE)" },
            { "letter": "c", "text": "Garantizar la seguridad de la escena y el uso de EPP/BSI" },
            { "letter": "d", "text": "Determinar el número total de pacientes" }
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad de la escena es siempre la prioridad principal. Si la escena no es segura, el TAMP-A no puede ayudar e incluso podría convertirse en una víctima. Solo después de confirmar la seguridad se evalúa la situación y se atiende a los pacientes."
    },
    {
        "question": "En el contexto de trauma, ¿cuál es la fórmula de la energía cinética y por qué es relevante?",
        "options": [
            { "letter": "a", "text": "EC = m * v; la masa y la velocidad importan por igual" },
            { "letter": "b", "text": "EC = ½mv²; la velocidad tiene un impacto mucho mayor que la masa en el daño tisular" },
            { "letter": "c", "text": "EC = F * d; el daño depende de la fuerza sobre la distancia de la herida" },
            { "letter": "d", "text": "EC = v² / m; la masa reduce el daño provocado" }
        ],
        "correctAnswer": "b",
        "explanation": "La energía cinética es EC = ½mv². Como la velocidad (v) está al cuadrado, cualquier aumento en la velocidad del impacto multiplica exponencialmente la energía transferida al paciente, causando daños mucho más graves que un aumento proporcional en la masa."
    },
    {
        "question": "Se define como 'caída significativa' que sugiere un Mecanismo de Lesión grave para un adulto cuando:",
        "options": [
            { "letter": "a", "text": "La caída es mayor a su propia altura" },
            { "letter": "b", "text": "La caída es mayor a 3 veces su propia altura (aprox. 6 metros)" },
            { "letter": "c", "text": "La caída ocurre sobre una superficie dura independientemente de la altura" },
            { "letter": "d", "text": "Cualquier caída que produzca un hematoma visible" }
        ],
        "correctAnswer": "b",
        "explanation": "En adultos, una caída que excede 3 veces la altura del paciente (aproximadamente 6 metros o 20 pies) se considera un ML significativo que justifica transporte a un centro de trauma. En niños, es de 2 a 3 veces su altura."
    },
    {
        "question": "Al realizar la evaluación primaria a un paciente adulto traumatizado, usted encuentra que el paciente balbucea palabras incomprensibles, no abre los ojos al estímulo y retira la extremidad al pellizco. Según la Escala de Coma de Glasgow (GCS), su puntuación es:",
        "options": [
            { "letter": "a", "text": "GCS 5" },
            { "letter": "b", "text": "GCS 7" },
            { "letter": "c", "text": "GCS 9" },
            { "letter": "d", "text": "GCS 11" }
        ],
        "correctAnswer": "b",
        "explanation": "No abre los ojos (Ocular = 1), palabras incomprensibles (Verbal = 2), retira al dolor (Motor = 4). Total: 1 + 2 + 4 = 7. Un GCS ≤ 8 es indicativo de coma y requiere asegurar la vía aérea con intubación."
    },
    {
        "question": "Un paciente con un puntaje de Glasgow de 9:",
        "options": [
            { "letter": "a", "text": "Se clasifica con traumatismo craneoencefálico leve" },
            { "letter": "b", "text": "Se encuentra en estado de coma profundo sin reflejos" },
            { "letter": "c", "text": "Tiene alteración del estado mental, clasificable como TCE moderado" },
            { "letter": "d", "text": "Tiene un puntaje totalmente normal" }
        ],
        "correctAnswer": "c",
        "explanation": "El GCS máximo es 15. Un puntaje de 13-15 indica TCE leve, 9-12 indica TCE moderado, y ≤ 8 indica TCE grave (coma). Un GCS de 9 sugiere una alteración significativa del estado mental, requiriendo monitoreo constante."
    },
    {
        "question": "¿Qué evalúa la letra 'S' de la mnemotecnia OPQRST para historial de dolor?",
        "options": [
            { "letter": "a", "text": "Síntomas asociados al dolor" },
            { "letter": "b", "text": "Severidad, pidiendo al paciente que lo califique del 1 al 10" },
            { "letter": "c", "text": "Sensibilidad al tacto en la zona" },
            { "letter": "d", "text": "Sitio de irradiación" }
        ],
        "correctAnswer": "b",
        "explanation": "En OPQRST, la S es de Severidad. Se le pide al paciente que evalúe la intensidad de su dolor usando una escala subjetiva, siendo 1 el dolor más leve imaginable y 10 el peor dolor de su vida."
    },
    {
        "question": "Una lectura de capnografía (ETCO2) de 8 mmHg con un paciente intubado durante maniobras de RCP probablemente indica:",
        "options": [
            { "letter": "a", "text": "Hiperventilación severa, se debe reducir la frecuencia de ventilación" },
            { "letter": "b", "text": "Circulación espontánea restaurada (ROSC)" },
            { "letter": "c", "text": "Que las compresiones son de baja calidad o que el paciente tiene muerte clínica prolongada" },
            { "letter": "d", "text": "Que el paciente está listo para ser extubado" }
        ],
        "correctAnswer": "c",
        "explanation": "En el contexto de RCP, un ETCO2 < 10 mmHg indica una perfusión celular y pulmonar muy pobre, lo que puede deberse a compresiones torácicas ineficaces o un paro cardíaco prolongado. Si de repente el ETCO2 salta a 35-45 mmHg, indica Retorno de Circulación Espontánea (ROSC)."
    },
    {
        "question": "En el contexto de evaluación rápida, ¿cuál es el objetivo de los '10 minutos de platino'?",
        "options": [
            { "letter": "a", "text": "Llegar a la escena en menos de 10 minutos desde el reporte" },
            { "letter": "b", "text": "Limitar el tiempo de evaluación, tratamiento primario e inmovilización en la escena a máximo 10 minutos en pacientes de trauma grave" },
            { "letter": "c", "text": "El tiempo máximo para intubar a un paciente sin oxigenar" },
            { "letter": "d", "text": "El tiempo que el paciente tiene para sobrevivir antes del tratamiento quirúrgico" }
        ],
        "correctAnswer": "b",
        "explanation": "Los 10 minutos de platino representan el tiempo objetivo que el personal prehospitalario debe permanecer en la escena con un paciente crítico de trauma (empaquetado y traslado rápido), dejando tratamientos menos críticos para hacerlos en ruta hacia el hospital (dentro del Periodo Dorado)."
    },
    {
        "question": "Al realizar un examen físico usando la mnemotecnia DCAP-BTLS, ¿qué significa la 'P'?",
        "options": [
            { "letter": "a", "text": "Pulso ausente" },
            { "letter": "b", "text": "Palpación dolorosa" },
            { "letter": "c", "text": "Penetración / Punción" },
            { "letter": "d", "text": "Piel pálida" }
        ],
        "correctAnswer": "c",
        "explanation": "En DCAP-BTLS (Deformity, Contusion, Abrasion, Puncture/Penetration, Burns, Tenderness, Laceration, Swelling), la P significa Penetración o punción, refiriéndose a heridas abiertas que penetran los tejidos, como disparos o heridas con arma blanca."
    },
    {
        "question": "Durante la evaluación, observa que su paciente con trauma de cráneo presenta un incremento progresivo en la presión arterial, disminución de la frecuencia cardíaca y un patrón respiratorio irregular (Cheyne-Stokes). Este conjunto de signos se conoce como:",
        "options": [
            { "letter": "a", "text": "Triada de Beck" },
            { "letter": "b", "text": "Choque neurogénico" },
            { "letter": "c", "text": "Patrón de Cushing" },
            { "letter": "d", "text": "Síndrome de hiperperfusión craneal" }
        ],
        "correctAnswer": "c",
        "explanation": "El patrón (o tríada) de Cushing (hipertensión arterial con ampliación de presión de pulso, bradicardia, respiración irregular) es un signo tardío de Herniación Cerebral por severa Hipertensión Intracraneal (HIC). Es lo opuesto al shock hipovolémico típico."
    },
    {
        "question": "Está atendiendo a un paciente masculino de 68 años con antecedente de EPOC. Su SpO2 actual es del 94% al aire ambiente. El paciente no refiere dificultad para respirar y está alerta. ¿Cuál es su interpretación?",
        "options": [
            { "letter": "a", "text": "El paciente está hipóxico severo, requiere intubación de inmediato" },
            { "letter": "b", "text": "La saturación es aceptable y a menudo es el nivel basal normal en pacientes con EPOC" },
            { "letter": "c", "text": "Requiere mascarilla con reservorio a 15 L/min inmediatamente" },
            { "letter": "d", "text": "El oxímetro de pulso está fallando" }
        ],
        "correctAnswer": "b",
        "explanation": "En pacientes con EPOC crónico, su nivel basal de oxígeno (SpO2) suele estar entre el 88% y 92% (o ligeramente más). Una saturación de 94% sin dificultad respiratoria activa ni cambios neurológicos es clínicamente aceptable. Aplicar altas concentraciones de oxígeno de forma rutinaria puede deprimir su impulso respiratorio."
    },
    {
        "question": "Al realizar la evaluación de la cabeza de un paciente traumatizado, encuentra equimosis (moretón) en la zona retroauricular. Esto se conoce como:",
        "options": [
            { "letter": "a", "text": "Signo de Ojos de Mapache" },
            { "letter": "b", "text": "Signo de Kernig" },
            { "letter": "c", "text": "Signo de Battle" },
            { "letter": "d", "text": "Hematoma subdural" }
        ],
        "correctAnswer": "c",
        "explanation": "La equimosis sobre el proceso mastoides (retroauricular) se conoce como Signo de Battle. Es un signo tardío que indica fuertemente una fractura de la base del cráneo. (Ojos de mapache es equimosis periorbitaria bilateral, también por fractura de base)."
    },
    {
        "question": "¿Cuál de las siguientes condiciones coloca a un paciente como de prioridad alta para transporte inmediato durante la evaluación primaria?",
        "options": [
            { "letter": "a", "text": "Fractura cerrada aislada de tibia sin sangrado" },
            { "letter": "b", "text": "Alteración aguda del estado mental o dificultad respiratoria severa" },
            { "letter": "c", "text": "Dolor abdominal leve tras haber comido, paciente alerta" },
            { "letter": "d", "text": "Abrasiones extensas en los brazos, paciente ansioso pero orientado" }
        ],
        "correctAnswer": "b",
        "explanation": "Los pacientes prioritarios que requieren transporte inmediato (con base en la evaluación primaria) incluyen aquellos con: estado mental alterado, compromiso de la vía aérea, dificultad respiratoria, shock/hipoperfusión, o ML de alto riesgo."
    },
    {
        "question": "Durante un interrogatorio SAMPLE a un paciente de 45 años, él refiere: dolor torácico opresivo 8/10 irradiado al brazo izquierdo, es alérgico a la penicilina, toma enalapril diario, tiene hipertensión diagnosticada hace 5 años, desayunó huevos hace 2 horas, y el dolor inició mientras cortaba el césped. ¿Cuál es su impresión clínica preliminar más sólida?",
        "options": [
            { "letter": "a", "text": "Crisis de ansiedad secundaria a esfuerzo físico" },
            { "letter": "b", "text": "Posible Síndrome Coronario Agudo (IAM)" },
            { "letter": "c", "text": "Shock anafiláctico por alergia a pasto (no penicilina)" },
            { "letter": "d", "text": "Indigestión por comida grasosa combinada con esfuerzo" }
        ],
        "correctAnswer": "b",
        "explanation": "El cuadro clínico de dolor torácico opresivo de alta intensidad (8/10), irradiado al brazo izquierdo, en un hombre adulto con factores de riesgo (hipertensión), que inició tras el esfuerzo (cortar césped), es una presentación clásica que sugiere un Síndrome Coronario Agudo, muy posiblemente un IAM."
    },
    {
        "question": "¿Cuál es la principal diferencia fisiopatológica entre el trauma contuso y el trauma penetrante?",
        "options": [
            { "letter": "a", "text": "El trauma contuso solo lesiona la piel; el penetrante solo los músculos" },
            { "letter": "b", "text": "El trauma penetrante distribuye la energía en áreas amplias; el contuso la concentra en un punto" },
            { "letter": "c", "text": "El trauma contuso transfiere energía sin romper la piel disipándola a través de tejidos, pudiendo causar lesiones cerradas; el penetrante rompe la piel destruyendo tejido en la trayectoria y puede causar cavitación" },
            { "letter": "d", "text": "No existe diferencia en la evaluación prehospitalaria" }
        ],
        "correctAnswer": "c",
        "explanation": "El trauma contuso resulta en transferencia de energía cinética a través de los tejidos sobre un área más extensa sin lacerar la piel, pudiendo causar graves daños internos ocultos. El trauma penetrante concentra la fuerza en un área pequeña penetrando los tejidos, creando un trayecto directo de destrucción y potencial de cavitación."
    },
    {
        "question": "Según los protocolos estándar, un paciente evaluado y categorizado como 'estable' debería ser revaluado al menos cada:",
        "options": [
            { "letter": "a", "text": "5 minutos" },
            { "letter": "b", "text": "15 minutos" },
            { "letter": "c", "text": "30 minutos" },
            { "letter": "d", "text": "Únicamente al llegar al hospital" }
        ],
        "correctAnswer": "b",
        "explanation": "La regla general para revaluación de pacientes en ruta al hospital es: cada 15 minutos si la condición del paciente es estable, y cada 5 minutos (o continuamente) si el paciente está inestable o crítico."
    },
    {
        "question": "En un dispositivo colorimétrico para medir ETCO2 colocado en un tubo endotraqueal tras la intubación, el papel indicador permanece de color púrpura (morado) tras 6 ventilaciones. Esto significa:",
        "options": [
            { "letter": "a", "text": "Que el tubo endotraqueal está correctamente colocado en la tráquea" },
            { "letter": "b", "text": "Que el paciente tiene un exceso de CO2 acumulado" },
            { "letter": "c", "text": "Que el tubo se encuentra probablemente en el esófago o no hay perfusión (RCP de mala calidad)" },
            { "letter": "d", "text": "Que el oxígeno se ha terminado" }
        ],
        "correctAnswer": "c",
        "explanation": "En detectores colorimétricos, 'Morado = Malo' (sin presencia de CO2, típico de tubo esofágico o paro cardiorrespiratorio prolongado) y 'Amarillo = YES/Bueno' (detecta >2% de CO2 exhalado de los pulmones)."
    },
    {
        "question": "Llega a atender a una paciente diabética de 32 años inconsciente. Toma la glucemia capilar y el resultado es 45 mg/dL. Este valor es indicador de:",
        "options": [
            { "letter": "a", "text": "Hipoglucemia" },
            { "letter": "b", "text": "Hiperglucemia (Cetoacidosis diabética)" },
            { "letter": "c", "text": "Niveles normales de glucosa, busque otra causa" },
            { "letter": "d", "text": "Fallo renal" }
        ],
        "correctAnswer": "a",
        "explanation": "Los valores normales de glucosa capilar son aproximadamente 80 a 120 mg/dL. Un valor inferior a 60 mg/dL (en este caso 45 mg/dL) combinado con alteración del estado mental, es un claro indicador de hipoglucemia severa."
    },
    {
        "question": "¿Por qué es tan importante que los TAMP-A evalúen el mecanismo de lesión durante la evaluación de la escena?",
        "options": [
            { "letter": "a", "text": "Para llenar el informe del seguro del paciente" },
            { "letter": "b", "text": "Para determinar al culpable del accidente" },
            { "letter": "c", "text": "Para predecir el índice de sospecha de lesiones internas ocultas antes de examinar al paciente" },
            { "letter": "d", "text": "Solo para saber si se necesita equipo de rescate vertical" }
        ],
        "correctAnswer": "c",
        "explanation": "Entender el mecanismo de lesión proporciona un alto 'índice de sospecha'. Si el TAMP-A sabe que hubo una gran transferencia de energía (ej. choque alta velocidad, deformidad del volante), anticipará lesiones internas graves (ej. contusión miocárdica o sangrado hepático) incluso antes de encontrar signos clínicos."
    },
    {
        "question": "¿Qué incluye principalmente la letra 'C' (Circulación) en la Evaluación Primaria?",
        "options": [
            { "letter": "a", "text": "Tomar la presión arterial con esfingomanómetro" },
            { "letter": "b", "text": "Evaluar la presencia/calidad del pulso, evaluar color/temp/humedad de la piel y controlar sangrados severos" },
            { "letter": "c", "text": "Canalizar acceso intravenoso e infundir líquidos" },
            { "letter": "d", "text": "Colocar electrodos para el monitor de 12 derivaciones" }
        ],
        "correctAnswer": "b",
        "explanation": "La 'C' inicial consiste en evaluar rápidamente el pulso, revisar el estado de perfusión a través de la piel y tratar hemorragias masivas (si no se aplicó X-ABCDE previo). Acciones como tomar la PA exacta, canalizar o hacer un ECG se dejan para la fase de evaluación secundaria o intervenciones posteriores, a menos que el paciente esté en paro."
    }
];
