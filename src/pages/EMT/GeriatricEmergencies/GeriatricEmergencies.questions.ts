import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué cambios fisiológicos del envejecimiento afectan más la atención prehospitalaria?",
        answer: "Los cambios más relevantes incluyen: disminución de la reserva cardiovascular y respiratoria, alteración de la termorregulación, reducción de la función renal que afecta el metabolismo de medicamentos, cambios en el sistema nervioso que alteran la respuesta al dolor y la presentación de síntomas, y fragilidad ósea que aumenta el riesgo de fracturas.",
    },
    {
        question: "¿Por qué los adultos mayores pueden presentar síntomas atípicos en emergencias cardíacas?",
        answer: "Los adultos mayores frecuentemente presentan síntomas atípicos debido a: neuropatía diabética que reduce la sensación de dolor, múltiples comorbilidades que enmascaran síntomas, uso de medicamentos que alteran la respuesta del cuerpo, y cambios en el sistema nervioso autónomo. Un infarto puede manifestarse solo como confusión, náuseas o disnea sin dolor torácico clásico.",
    },
    {
        question: "¿Cuál es la diferencia entre delirium, demencia y depresión en el adulto mayor?",
        answer: "Delirium: inicio agudo (horas/días), fluctuante, alteración de conciencia, causas médicas tratables. Demencia: inicio gradual (meses/años), progresivo, conciencia normal inicialmente, deterioro cognitivo irreversible. Depresión: inicio variable, episódico, conciencia normal, alteración del ánimo, tratable. Es crucial identificar el delirium ya que es una emergencia médica.",
    },
    {
        question: "¿Qué es la polifarmacia y por qué es un problema en geriatría?",
        answer: "La polifarmacia es el uso de múltiples medicamentos (generalmente ≥5) por un paciente. En geriatría es problemática porque: aumenta el riesgo de interacciones medicamentosas, los cambios farmacocinéticos del envejecimiento alteran la efectividad y toxicidad, puede causar 'cascadas terapéuticas' donde se prescriben medicamentos para tratar efectos adversos de otros, y aumenta el riesgo de caídas, confusión y hospitalización.",
    },
    {
        question: "¿Cómo se debe ajustar la dosificación de medicamentos de emergencia en adultos mayores?",
        answer: "Se debe seguir el principio 'start low, go slow': comenzar con dosis más bajas (generalmente 25-50% de la dosis estándar), aumentar gradualmente según respuesta, monitorizar más frecuentemente los efectos adversos, considerar la función renal y hepática reducida, y estar especialmente atento a medicamentos como opioides, benzodiacepinas y sedantes.",
    },
    {
        question: "¿Qué signos sugieren maltrato del adulto mayor?",
        answer: "Signos físicos: lesiones en diferentes etapas de curación, lesiones inconsistentes con el mecanismo reportado, hematomas en áreas usualmente cubiertas, desnutrición o deshidratación. Signos conductuales: miedo al cuidador, evitar contacto visual, ansiedad excesiva, retraimiento. Signos ambientales: condiciones insalubres, falta de medicamentos necesarios, aislamiento social.",
    },
    {
        question: "¿Cuáles son las principales causas de caídas en adultos mayores?",
        answer: "Factores intrínsecos: debilidad muscular, alteraciones del equilibrio, problemas visuales, hipotensión ortostática, medicamentos sedantes, deterioro cognitivo. Factores extrínsecos: iluminación inadecuada, superficies resbaladizas, obstáculos en el hogar, calzado inadecuado. Las caídas son la principal causa de lesión traumática en mayores de 65 años.",
    },
    {
        question: "¿Cómo se maneja la hipotermia en adultos mayores?",
        answer: "Los adultos mayores son más susceptibles a hipotermia debido a la termorregulación alterada. Manejo: retirar de ambiente frío, quitar ropa húmeda, recalentamiento gradual con mantas térmicas, monitorización cardíaca (riesgo de arritmias), manejo cuidadoso para evitar vasodilatación periférica rápida, y considerar causas subyacentes como sepsis, hipoglucemia o medicamentos.",
    },
];

export const geriatricQuestions: Question[] = [
    {
        question: "¿Cuál es el cambio fisiológico más significativo del envejecimiento que afecta la respuesta cardiovascular a las emergencias?",
        options: [
            { letter: "a", text: "Aumento de la flexibilidad arterial" },
            { letter: "b", text: "Disminución de la frecuencia cardíaca máxima y rigidez arterial" },
            { letter: "c", text: "Aumento del gasto cardíaco" },
            { letter: "d", text: "Mejora de la contractilidad miocárdica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un adulto mayor de 78 años presenta confusión súbita sin fiebre. ¿Cuál es la causa más probable?",
        options: [
            { letter: "a", text: "Demencia de inicio tardío" },
            { letter: "b", text: "Delirium por causa médica subyacente" },
            { letter: "c", text: "Depresión mayor" },
            { letter: "d", text: "Esquizofrenia de inicio tardío" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la presentación más común de infarto al miocardio en adultos mayores?",
        options: [
            { letter: "a", text: "Dolor torácico típico opresivo" },
            { letter: "b", text: "Disnea, náuseas o confusión sin dolor torácico" },
            { letter: "c", text: "Dolor irradiado al brazo izquierdo" },
            { letter: "d", text: "Sudoración profusa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En el manejo farmacológico geriátrico, ¿qué principio se debe seguir?",
        options: [
            { letter: "a", text: "Usar dosis estándar de adulto" },
            { letter: "b", text: "Aumentar la dosis debido a menor absorción" },
            { letter: "c", text: "'Start low, go slow' - comenzar con dosis bajas" },
            { letter: "d", text: "Evitar todos los medicamentos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el factor de riesgo más importante para caídas en adultos mayores?",
        options: [
            { letter: "a", text: "Edad avanzada solamente" },
            { letter: "b", text: "Polifarmacia y medicamentos sedantes" },
            { letter: "c", text: "Uso de bastón" },
            { letter: "d", text: "Vivir solo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un adulto mayor presenta hipotensión y bradicardia después de una caída. ¿Qué complicación debe considerarse prioritariamente?",
        options: [
            { letter: "a", text: "Deshidratación simple" },
            { letter: "b", text: "Hemorragia interna por uso de anticoagulantes" },
            { letter: "c", text: "Reacción vasovagal" },
            { letter: "d", text: "Hipoglucemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la temperatura corporal que define hipotermia en adultos mayores?",
        options: [
            { letter: "a", text: "< 36°C" },
            { letter: "b", text: "< 35°C" },
            { letter: "c", text: "< 34°C" },
            { letter: "d", text: "< 32°C" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un paciente geriátrico con fractura de cadera, ¿cuál es la complicación más preocupante durante el transporte prolongado?",
        options: [
            { letter: "a", text: "Dolor severo" },
            { letter: "b", text: "Síndrome de aplastamiento y embolia grasa" },
            { letter: "c", text: "Ansiedad" },
            { letter: "d", text: "Pérdida de apetito" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el signo más confiable para distinguir entre delirium y demencia?",
        options: [
            { letter: "a", text: "Nivel de educación del paciente" },
            { letter: "b", text: "Inicio agudo y fluctuación de síntomas en delirium" },
            { letter: "c", text: "Edad del paciente" },
            { letter: "d", text: "Presencia de alucinaciones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un adulto mayor con sospecha de sepsis, ¿cuál puede ser el único signo presente?",
        options: [
            { letter: "a", text: "Fiebre alta (>38.5°C)" },
            { letter: "b", text: "Escalofríos intensos" },
            { letter: "c", text: "Alteración del estado mental sin fiebre" },
            { letter: "d", text: "Dolor localizado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la dosis inicial recomendada de morfina para dolor severo en un adulto mayor?",
        options: [
            { letter: "a", text: "5-10 mg IV" },
            { letter: "b", text: "1-2 mg IV" },
            { letter: "c", text: "15-20 mg IV" },
            { letter: "d", text: "No administrar opioides en geriatría" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un adulto mayor toma warfarina y presenta una caída con traumatismo craneal leve. ¿Cuál es la consideración más importante?",
        options: [
            { letter: "a", text: "El riesgo de hemorragia intracraneal está significativamente aumentado" },
            { letter: "b", text: "La warfarina protege contra coágulos cerebrales" },
            { letter: "c", text: "No hay diferencia en el manejo" },
            { letter: "d", text: "Solo importa si hay pérdida de conciencia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la causa más común de convulsiones de nueva aparición en adultos mayores?",
        options: [
            { letter: "a", text: "Epilepsia idiopática" },
            { letter: "b", text: "Evento cerebrovascular (ACV)" },
            { letter: "c", text: "Tumor cerebral" },
            { letter: "d", text: "Traumatismo craneal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En la evaluación de un adulto mayor con disnea, ¿qué hallazgo sugiere insuficiencia cardíaca?",
        options: [
            { letter: "a", text: "Sibilancias difusas" },
            { letter: "b", text: "Crepitantes en bases pulmonares y edema en extremidades inferiores" },
            { letter: "c", text: "Estridor inspiratorio" },
            { letter: "d", text: "Ausencia de ruidos pulmonares unilateral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el manejo inicial más apropiado para un adulto mayor con hipoglucemia severa?",
        options: [
            { letter: "a", text: "Dextrosa 50% 50 ml IV rápido" },
            { letter: "b", text: "Dextrosa 10% 100-200 ml IV lento" },
            { letter: "c", text: "Glucagón IM solamente" },
            { letter: "d", text: "Esperar hasta llegar al hospital" },
        ],
        correctAnswer: "b",
    },
];