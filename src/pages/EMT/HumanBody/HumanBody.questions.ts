import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la homeostasis en el cuerpo humano?",
        answer: "La homeostasis es el equilibrio interno del cuerpo que permite su funcionamiento normal. Es el proceso mediante el cual los sistemas del cuerpo mantienen condiciones estables, como la temperatura corporal y el equilibrio de líquidos."
    },
    {
        question: "¿Qué función tiene el sistema circulatorio?",
        answer: "El sistema circulatorio es responsable de transportar sangre, oxígeno, nutrientes y desechos a través del cuerpo mediante el corazón y los vasos sanguíneos."
    },
    {
        question: "¿Qué órganos conforman el sistema respiratorio?",
        answer: "El sistema respiratorio está formado por los pulmones, las vías respiratorias (nariz, faringe, laringe, tráquea, bronquios) y los músculos respiratorios."
    },
    {
        question: "¿Cuál es la principal función del sistema nervioso?",
        answer: "El sistema nervioso controla y coordina las actividades del cuerpo, incluyendo los movimientos, la percepción sensorial y la respuesta a estímulos internos y externos."
    },
    {
        question: "¿Qué es la función del sistema muscular?",
        answer: "El sistema muscular permite el movimiento del cuerpo y las extremidades, así como la estabilización de las articulaciones y el control de funciones involuntarias como la circulación sanguínea y la respiración."
    },
    {
        question: "¿Qué tipos de músculos existen en el cuerpo humano?",
        answer: "Los tres tipos de músculos son el músculo esquelético (voluntario), el músculo cardíaco (en el corazón) y el músculo liso (en los órganos internos)."
    },
    {
        question: "¿Cómo se compone el sistema esquelético?",
        answer: "El sistema esquelético está compuesto por 206 huesos que proporcionan estructura al cuerpo, protegen los órganos internos y permiten el movimiento a través de las articulaciones."
    },
    {
        question: "¿Qué hace el sistema digestivo?",
        answer: "El sistema digestivo descompone los alimentos, absorbe los nutrientes y expulsa los desechos no digeribles del cuerpo."
    },
    {
        question: "¿Qué es el sistema endocrino y cuál es su función?",
        answer: "El sistema endocrino se compone de glándulas que producen hormonas que regulan procesos como el metabolismo, el crecimiento y la función reproductiva."
    },
    {
        question: "¿Cuál es la función del sistema urinario?",
        answer: "El sistema urinario filtra los desechos de la sangre, controla el equilibrio de líquidos y electrolitos en el cuerpo, y excreta la orina."
    }
];

export const humanBodyQuestions: Question[] = [
    {
        question: "¿Cuál es la unidad estructural básica de todo ser vivo?",
        options: [
            { letter: "a", text: "Tejido" },
            { letter: "b", text: "Célula" },
            { letter: "c", text: "Órgano" },
            { letter: "d", text: "Sistema" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema es responsable del transporte de oxígeno y nutrientes?",
        options: [
            { letter: "a", text: "Sistema respiratorio" },
            { letter: "b", text: "Sistema circulatorio" },
            { letter: "c", text: "Sistema nervioso" },
            { letter: "d", text: "Sistema digestivo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el principal músculo de la respiración?",
        options: [
            { letter: "a", text: "Diafragma" },
            { letter: "b", text: "Trapecio" },
            { letter: "c", text: "Esternocleidomastoideo" },
            { letter: "d", text: "Recto abdominal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué hueso protege principalmente el cerebro?",
        options: [
            { letter: "a", text: "Fémur" },
            { letter: "b", text: "Cráneo" },
            { letter: "c", text: "Costillas" },
            { letter: "d", text: "Cúbito" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del corazón bombea sangre a los pulmones?",
        options: [
            { letter: "a", text: "Aurícula derecha" },
            { letter: "b", text: "Aurícula izquierda" },
            { letter: "c", text: "Ventrículo derecho" },
            { letter: "d", text: "Ventrículo izquierdo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué término describe la posición del cuerpo boca arriba?",
        options: [
            { letter: "a", text: "Decúbito lateral" },
            { letter: "b", text: "Decúbito prono" },
            { letter: "c", text: "Decúbito supino" },
            { letter: "d", text: "Fowler" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué sistema corporal regula las hormonas?",
        options: [
            { letter: "a", text: "Sistema nervioso" },
            { letter: "b", text: "Sistema endocrino" },
            { letter: "c", text: "Sistema respiratorio" },
            { letter: "d", text: "Sistema digestivo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué órgano filtra los desechos de la sangre para formar orina?",
        options: [
            { letter: "a", text: "Hígado" },
            { letter: "b", text: "Intestino" },
            { letter: "c", text: "Riñón" },
            { letter: "d", text: "Vesícula biliar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del sistema nervioso controla las acciones involuntarias como la respiración?",
        options: [
            { letter: "a", text: "Cerebro frontal" },
            { letter: "b", text: "Cerebelo" },
            { letter: "c", text: "Tronco encefálico" },
            { letter: "d", text: "Amígdala" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cómo se llama la estructura que conecta los músculos a los huesos?",
        options: [
            { letter: "a", text: "Ligamento" },
            { letter: "b", text: "Tendón" },
            { letter: "c", text: "Cartílago" },
            { letter: "d", text: "Fascia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de músculo se encuentra en los órganos internos y vasos sanguíneos?",
        options: [
            { letter: "a", text: "Esquelético" },
            { letter: "b", text: "Cardíaco" },
            { letter: "c", text: "Liso" },
            { letter: "d", text: "Voluntario" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué glándula produce insulina?",
        options: [
            { letter: "a", text: "Tiroides" },
            { letter: "b", text: "Glándula suprarrenal" },
            { letter: "c", text: "Páncreas" },
            { letter: "d", text: "Hígado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        options: [
            { letter: "a", text: "Pulmón" },
            { letter: "b", text: "Hígado" },
            { letter: "c", text: "Piel" },
            { letter: "d", text: "Corazón" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué término se refiere a la parte más cercana al punto de unión del cuerpo?",
        options: [
            { letter: "a", text: "Distal" },
            { letter: "b", text: "Proximal" },
            { letter: "c", text: "Superior" },
            { letter: "d", text: "Inferior" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema incluye la médula espinal y los nervios periféricos?",
        options: [
            { letter: "a", text: "Sistema respiratorio" },
            { letter: "b", text: "Sistema digestivo" },
            { letter: "c", text: "Sistema nervioso" },
            { letter: "d", text: "Sistema circulatorio" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la función principal del sistema tegumentario?",
        options: [
            { letter: "a", text: "Producir hormonas" },
            { letter: "b", text: "Proteger el cuerpo contra infecciones" },
            { letter: "c", text: "Regular el movimiento muscular" },
            { letter: "d", text: "Procesar nutrientes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del intestino absorbe principalmente los nutrientes?",
        options: [
            { letter: "a", text: "Intestino grueso" },
            { letter: "b", text: "Duodeno" },
            { letter: "c", text: "Yeyuno e íleon" },
            { letter: "d", text: "Ciego" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la principal función de los glóbulos rojos?",
        options: [
            { letter: "a", text: "Defender contra infecciones" },
            { letter: "b", text: "Transportar oxígeno" },
            { letter: "c", text: "Regular la temperatura" },
            { letter: "d", text: "Secretar hormonas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vena principal regresa sangre desoxigenada al corazón?",
        options: [
            { letter: "a", text: "Vena pulmonar" },
            { letter: "b", text: "Vena cava superior e inferior" },
            { letter: "c", text: "Vena yugular" },
            { letter: "d", text: "Vena hepática" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué articulación permite el movimiento del hombro?",
        options: [
            { letter: "a", text: "Bisagra" },
            { letter: "b", text: "Pivotante" },
            { letter: "c", text: "Esferoidal" },
            { letter: "d", text: "Deslizante" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué estructura evita que los alimentos entren a la tráquea durante la deglución?",
        options: [
            { letter: "a", text: "Epiglotis" },
            { letter: "b", text: "Laringe" },
            { letter: "c", text: "Bronquios" },
            { letter: "d", text: "Esófago" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué glóbulo sanguíneo es responsable de la defensa contra infecciones?",
        options: [
            { letter: "a", text: "Eritrocitos" },
            { letter: "b", text: "Plaquetas" },
            { letter: "c", text: "Leucocitos" },
            { letter: "d", text: "Hemoglobina" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué capa de la piel contiene vasos sanguíneos y terminaciones nerviosas?",
        options: [
            { letter: "a", text: "Epidermis" },
            { letter: "b", text: "Dermis" },
            { letter: "c", text: "Hipodermis" },
            { letter: "d", text: "Estrato córneo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el principal órgano de intercambio gaseoso en el cuerpo?",
        options: [
            { letter: "a", text: "Bronquios" },
            { letter: "b", text: "Alvéolos" },
            { letter: "c", text: "Tráquea" },
            { letter: "d", text: "Diafragma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del sistema digestivo absorbe agua y forma heces?",
        options: [
            { letter: "a", text: "Estómago" },
            { letter: "b", text: "Intestino delgado" },
            { letter: "c", text: "Intestino grueso" },
            { letter: "d", text: "Duodeno" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el nombre de la válvula que separa la aurícula derecha del ventrículo derecho?",
        options: [
            { letter: "a", text: "Válvula mitral" },
            { letter: "b", text: "Válvula tricúspide" },
            { letter: "c", text: "Válvula aórtica" },
            { letter: "d", text: "Válvula pulmonar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué término describe la parte más lejana del punto de unión al tronco?",
        options: [
            { letter: "a", text: "Proximal" },
            { letter: "b", text: "Distal" },
            { letter: "c", text: "Superior" },
            { letter: "d", text: "Medial" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué órgano almacena bilis para ayudar en la digestión de grasas?",
        options: [
            { letter: "a", text: "Páncreas" },
            { letter: "b", text: "Vesícula biliar" },
            { letter: "c", text: "Hígado" },
            { letter: "d", text: "Colon" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función principal de las plaquetas?",
        options: [
            { letter: "a", text: "Transportar oxígeno" },
            { letter: "b", text: "Combatir infecciones" },
            { letter: "c", text: "Formar coágulos sanguíneos" },
            { letter: "d", text: "Regular la presión arterial" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué músculo ayuda principalmente en la inspiración junto con el diafragma?",
        options: [
            { letter: "a", text: "Intercostales externos" },
            { letter: "b", text: "Trapecio" },
            { letter: "c", text: "Oblicuos internos" },
            { letter: "d", text: "Pectorales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué hueso es parte del antebrazo?",
        options: [
            { letter: "a", text: "Fémur" },
            { letter: "b", text: "Radio" },
            { letter: "c", text: "Tibia" },
            { letter: "d", text: "Clavícula" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué estructura permite que la sangre fluya en una sola dirección dentro del corazón?",
        options: [
            { letter: "a", text: "Aurículas" },
            { letter: "b", text: "Válvulas" },
            { letter: "c", text: "Venas" },
            { letter: "d", text: "Arterias" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué órgano es responsable principalmente de desintoxicar sustancias químicas?",
        options: [
            { letter: "a", text: "Estómago" },
            { letter: "b", text: "Hígado" },
            { letter: "c", text: "Páncreas" },
            { letter: "d", text: "Intestino delgado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el hueso más grande del cuerpo humano?",
        options: [
            { letter: "a", text: "Húmero" },
            { letter: "b", text: "Cráneo" },
            { letter: "c", text: "Fémur" },
            { letter: "d", text: "Tibia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del sistema nervioso controla los movimientos voluntarios?",
        options: [
            { letter: "a", text: "Sistema autónomo" },
            { letter: "b", text: "Sistema somático" },
            { letter: "c", text: "Sistema simpático" },
            { letter: "d", text: "Sistema parasimpático" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué cavidad corporal contiene el corazón y los pulmones?",
        options: [
            { letter: "a", text: "Abdominal" },
            { letter: "b", text: "Torácica" },
            { letter: "c", text: "Pélvica" },
            { letter: "d", text: "Cefálica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué válvula separa el ventrículo izquierdo de la aorta?",
        options: [
            { letter: "a", text: "Válvula tricúspide" },
            { letter: "b", text: "Válvula pulmonar" },
            { letter: "c", text: "Válvula aórtica" },
            { letter: "d", text: "Válvula mitral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué función tiene el líquido sinovial?",
        options: [
            { letter: "a", text: "Regular temperatura corporal" },
            { letter: "b", text: "Lubricar las articulaciones" },
            { letter: "c", text: "Transportar nutrientes" },
            { letter: "d", text: "Aumentar la fuerza muscular" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema regula las respuestas de 'lucha o huida'?",
        options: [
            { letter: "a", text: "Sistema simpático" },
            { letter: "b", text: "Sistema somático" },
            { letter: "c", text: "Sistema parasimpático" },
            { letter: "d", text: "Sistema respiratorio" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de articulación es la rodilla?",
        options: [
            { letter: "a", text: "Esferoidal" },
            { letter: "b", text: "Bisagra" },
            { letter: "c", text: "Deslizante" },
            { letter: "d", text: "Pivotante" },
        ],
        correctAnswer: "b",
    },
];
