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
        question: "¿Qué función tiene el sistema circulatorio?",
        options: [
            { letter: "a", text: "Transporta oxígeno y nutrientes a las células" },
            { letter: "b", text: "Elimina los desechos del cuerpo" },
            { letter: "c", text: "Produce hormonas" },
            { letter: "d", text: "Controla los movimientos corporales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el principal órgano del sistema respiratorio?",
        options: [
            { letter: "a", text: "El corazón" },
            { letter: "b", text: "Los pulmones" },
            { letter: "c", text: "El cerebro" },
            { letter: "d", text: "El hígado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función principal del sistema nervioso?",
        options: [
            { letter: "a", text: "Transportar nutrientes a las células" },
            { letter: "b", text: "Controlar y coordinar las funciones corporales" },
            { letter: "c", text: "Producir hormonas" },
            { letter: "d", text: "Filtrar desechos del cuerpo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de músculo es el corazón?",
        options: [
            { letter: "a", text: "Músculo esquelético" },
            { letter: "b", text: "Músculo liso" },
            { letter: "c", text: "Músculo cardíaco" },
            { letter: "d", text: "Músculo estriado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
        options: [
            { letter: "a", text: "206" },
            { letter: "b", text: "212" },
            { letter: "c", text: "198" },
            { letter: "d", text: "250" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué sistema regula las funciones del cuerpo mediante hormonas?",
        options: [
            { letter: "a", text: "Sistema endocrino" },
            { letter: "b", text: "Sistema circulatorio" },
            { letter: "c", text: "Sistema nervioso" },
            { letter: "d", text: "Sistema inmune" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué parte del sistema digestivo se encarga de absorber los nutrientes?",
        options: [
            { letter: "a", text: "Esófago" },
            { letter: "b", text: "Estómago" },
            { letter: "c", text: "Intestino delgado" },
            { letter: "d", text: "Hígado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la función del sistema urinario?",
        options: [
            { letter: "a", text: "Filtrar desechos y regular líquidos" },
            { letter: "b", text: "Controlar los movimientos corporales" },
            { letter: "c", text: "Transportar oxígeno a las células" },
            { letter: "d", text: "Producir glóbulos rojos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué glándula es parte del sistema endocrino y regula el metabolismo?",
        options: [
            { letter: "a", text: "Tiroides" },
            { letter: "b", text: "Páncreas" },
            { letter: "c", text: "Glándulas suprarrenales" },
            { letter: "d", text: "Hipófisis" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué función tiene la piel en el cuerpo humano?",
        options: [
            { letter: "a", text: "Proteger contra patógenos y regular la temperatura" },
            { letter: "b", text: "Producir hormonas" },
            { letter: "c", text: "Transportar oxígeno a las células" },
            { letter: "d", text: "Absorber nutrientes" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué sistema es responsable de la defensa contra infecciones?",
        options: [
            { letter: "a", text: "Sistema inmunológico" },
            { letter: "b", text: "Sistema circulatorio" },
            { letter: "c", text: "Sistema nervioso" },
            { letter: "d", text: "Sistema respiratorio" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué parte del sistema nervioso coordina las funciones involuntarias?",
        options: [
            { letter: "a", text: "Cerebro" },
            { letter: "b", text: "Médula espinal" },
            { letter: "c", text: "Sistema nervioso autónomo" },
            { letter: "d", text: "Cerebelo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué sistema es responsable de la producción de células sanguíneas?",
        options: [
            { letter: "a", text: "Sistema esquelético" },
            { letter: "b", text: "Sistema respiratorio" },
            { letter: "c", text: "Sistema circulatorio" },
            { letter: "d", text: "Sistema endocrino" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué parte del cuerpo es responsable de la circulación de la sangre?",
        options: [
            { letter: "a", text: "Corazón" },
            { letter: "b", text: "Vasos sanguíneos" },
            { letter: "c", text: "Riñones" },
            { letter: "d", text: "Cerebro" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la principal función del sistema respiratorio?",
        options: [
            { letter: "a", text: "Producir glóbulos rojos" },
            { letter: "b", text: "Intercambiar oxígeno y dióxido de carbono" },
            { letter: "c", text: "Regula la temperatura corporal" },
            { letter: "d", text: "Descomponer alimentos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de tejido recubre el interior de los vasos sanguíneos?",
        options: [
            { letter: "a", text: "Tejido epitelial" },
            { letter: "b", text: "Tejido muscular" },
            { letter: "c", text: "Tejido conectivo" },
            { letter: "d", text: "Tejido nervioso" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué glándula se encuentra en la base del cerebro y controla las funciones hormonales?",
        options: [
            { letter: "a", text: "Páncreas" },
            { letter: "b", text: "Hipófisis" },
            { letter: "c", text: "Tiroides" },
            { letter: "d", text: "Adrenal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la principal función del sistema digestivo?",
        options: [
            { letter: "a", text: "Producir hormonas" },
            { letter: "b", text: "Absorber nutrientes y eliminar desechos" },
            { letter: "c", text: "Controlar la temperatura corporal" },
            { letter: "d", text: "Producir glóbulos rojos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es el sistema tegumentario?",
        options: [
            { letter: "a", text: "El sistema de los huesos" },
            { letter: "b", text: "El sistema que incluye la piel, el cabello y las uñas" },
            { letter: "c", text: "El sistema de los vasos sanguíneos" },
            { letter: "d", text: "El sistema que regula las hormonas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función principal de los riñones?",
        options: [
            { letter: "a", text: "Producir hormonas" },
            { letter: "b", text: "Filtrar desechos de la sangre" },
            { letter: "c", text: "Controlar la circulación sanguínea" },
            { letter: "d", text: "Eliminar dióxido de carbono" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del sistema nervioso controla las funciones involuntarias?",
        options: [
            { letter: "a", text: "Cerebro" },
            { letter: "b", text: "Médula espinal" },
            { letter: "c", text: "Sistema nervioso autónomo" },
            { letter: "d", text: "Cerebelo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la función de las plaquetas en la sangre?",
        options: [
            { letter: "a", text: "Transportar oxígeno" },
            { letter: "b", text: "Formar coágulos para detener el sangrado" },
            { letter: "c", text: "Defender al cuerpo de infecciones" },
            { letter: "d", text: "Transportar nutrientes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función del sistema linfático?",
        options: [
            { letter: "a", text: "Transportar oxígeno a las células" },
            { letter: "b", text: "Filtrar desechos de la sangre" },
            { letter: "c", text: "Defender al cuerpo contra infecciones" },
            { letter: "d", text: "Producir glóbulos rojos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de articulación permite el movimiento de rotación?",
        options: [
            { letter: "a", text: "Articulación esférica" },
            { letter: "b", text: "Articulación pivote" },
            { letter: "c", text: "Articulación de bisagra" },
            { letter: "d", text: "Articulación plana" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función de los vasos sanguíneos?",
        options: [
            { letter: "a", text: "Transportar oxígeno y nutrientes a las células" },
            { letter: "b", text: "Defender al cuerpo de infecciones" },
            { letter: "c", text: "Filtrar los desechos del cuerpo" },
            { letter: "d", text: "Regular la temperatura corporal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué función tiene el sistema muscular esquelético?",
        options: [
            { letter: "a", text: "Ayudar en la respiración" },
            { letter: "b", text: "Controlar el movimiento voluntario" },
            { letter: "c", text: "Formar sangre" },
            { letter: "d", text: "Controlar la presión arterial" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del cuerpo se considera la central del sistema nervioso?",
        options: [
            { letter: "a", text: "Cerebro" },
            { letter: "b", text: "Médula espinal" },
            { letter: "c", text: "Corazón" },
            { letter: "d", text: "Riñones" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la función de las venas?",
        options: [
            { letter: "a", text: "Transportar sangre hacia el corazón" },
            { letter: "b", text: "Transportar sangre hacia los pulmones" },
            { letter: "c", text: "Oxigenar la sangre" },
            { letter: "d", text: "Defender al cuerpo de infecciones" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Dónde se encuentran los glóbulos rojos en el cuerpo humano?",
        options: [
            { letter: "a", text: "En los huesos" },
            { letter: "b", text: "En la sangre" },
            { letter: "c", text: "En el sistema linfático" },
            { letter: "d", text: "En los músculos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la fibrilación en el contexto del sistema circulatorio?",
        options: [
            { letter: "a", text: "Un tipo de arritmia cardíaca" },
            { letter: "b", text: "El endurecimiento de las arterias" },
            { letter: "c", text: "La dilatación anormal de las venas" },
            { letter: "d", text: "Un aumento en la producción de glóbulos rojos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué órgano produce la bilis?",
        options: [
            { letter: "a", text: "Estómago" },
            { letter: "b", text: "Hígado" },
            { letter: "c", text: "Páncreas" },
            { letter: "d", text: "Riñones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la peristalsis?",
        options: [
            { letter: "a", text: "El proceso de respiración" },
            { letter: "b", text: "El movimiento involuntario de los músculos del tracto digestivo" },
            { letter: "c", text: "La filtración de los riñones" },
            { letter: "d", text: "La contracción de los músculos esqueléticos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la médula ósea?",
        options: [
            { letter: "a", text: "Parte del cerebro" },
            { letter: "b", text: "Tejido dentro de los huesos donde se producen las células sanguíneas" },
            { letter: "c", text: "Parte del corazón" },
            { letter: "d", text: "Órgano en el sistema linfático" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es un electrocardiograma (ECG)?",
        options: [
            { letter: "a", text: "Una prueba que mide la actividad eléctrica del corazón" },
            { letter: "b", text: "Una prueba de la función pulmonar" },
            { letter: "c", text: "Una técnica de rayos X para observar el corazón" },
            { letter: "d", text: "Una prueba para medir los niveles de glucosa" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué glándula está involucrada en la producción de insulina?",
        options: [
            { letter: "a", text: "Tiroides" },
            { letter: "b", text: "Páncreas" },
            { letter: "c", text: "Suprarrenales" },
            { letter: "d", text: "Hipófisis" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué función tiene el sistema nervioso periférico?",
        options: [
            { letter: "a", text: "Controlar las funciones involuntarias" },
            { letter: "b", text: "Conectar el sistema nervioso central con el resto del cuerpo" },
            { letter: "c", text: "Coordinar los movimientos musculares" },
            { letter: "d", text: "Regular la presión arterial" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función principal del corazón?",
        options: [
            { letter: "a", text: "Bombear sangre a todo el cuerpo" },
            { letter: "b", text: "Filtrar toxinas de la sangre" },
            { letter: "c", text: "Regular el ritmo respiratorio" },
            { letter: "d", text: "Controlar los movimientos musculares" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la principal función de los pulmones?",
        options: [
            { letter: "a", text: "Intercambiar oxígeno y dióxido de carbono" },
            { letter: "b", text: "Producir glóbulos rojos" },
            { letter: "c", text: "Controlar la presión arterial" },
            { letter: "d", text: "Filtrar toxinas de la sangre" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué función tiene el esófago en el sistema digestivo?",
        options: [
            { letter: "a", text: "Realizar la digestión de los alimentos" },
            { letter: "b", text: "Transportar el alimento desde la boca al estómago" },
            { letter: "c", text: "Absorber nutrientes" },
            { letter: "d", text: "Filtrar desechos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el rol del sistema nervioso autónomo?",
        options: [
            { letter: "a", text: "Controlar las acciones voluntarias" },
            { letter: "b", text: "Controlar las funciones involuntarias del cuerpo, como la respiración" },
            { letter: "c", text: "Controlar el sentido del olfato" },
            { letter: "d", text: "Coordinar los movimientos de los músculos esqueléticos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la arteria principal que lleva sangre oxigenada desde el corazón?",
        options: [
            { letter: "a", text: "Cava inferior" },
            { letter: "b", text: "Aorta" },
            { letter: "c", text: "Pulmonar" },
            { letter: "d", text: "Femoral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué órgano produce la insulina?",
        options: [
            { letter: "a", text: "Riñón" },
            { letter: "b", text: "Páncreas" },
            { letter: "c", text: "Estómago" },
            { letter: "d", text: "Hígado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es el sistema linfático?",
        options: [
            { letter: "a", text: "Sistema encargado de la circulación de la sangre" },
            { letter: "b", text: "Sistema encargado de la defensa inmunológica del cuerpo" },
            { letter: "c", text: "Sistema que controla el metabolismo" },
            { letter: "d", text: "Sistema que regula las funciones endocrinas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué estructura conecta los músculos con los huesos?",
        options: [
            { letter: "a", text: "Tendones" },
            { letter: "b", text: "Ligamentos" },
            { letter: "c", text: "Cartílago" },
            { letter: "d", text: "Vasos sanguíneos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué función tienen los riñones?",
        options: [
            { letter: "a", text: "Filtrar la sangre y producir orina" },
            { letter: "b", text: "Regular la temperatura corporal" },
            { letter: "c", text: "Producir glóbulos rojos" },
            { letter: "d", text: "Descomponer nutrientes de los alimentos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es la homeostasis?",
        options: [
            { letter: "a", text: "La capacidad del cuerpo para mantener un equilibrio interno estable" },
            { letter: "b", text: "La producción de nuevas células en el cuerpo" },
            { letter: "c", text: "El proceso de digestión de los alimentos" },
            { letter: "d", text: "La transmisión de señales nerviosas" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de sangre no tiene antígenos A ni B en la superficie de los glóbulos rojos?",
        options: [
            { letter: "a", text: "Tipo O" },
            { letter: "b", text: "Tipo A" },
            { letter: "c", text: "Tipo B" },
            { letter: "d", text: "Tipo AB" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la principal función de los glóbulos blancos?",
        options: [
            { letter: "a", text: "Transportar oxígeno" },
            { letter: "b", text: "Defender al cuerpo de infecciones" },
            { letter: "c", text: "Formar coágulos sanguíneos" },
            { letter: "d", text: "Regular la temperatura corporal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo se llama el proceso de división celular para formar células reproductivas?",
        options: [
            { letter: "a", text: "Mitósis" },
            { letter: "b", text: "Meiosis" },
            { letter: "c", text: "Citosinesis" },
            { letter: "d", text: "Fagocitosis" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del sistema nervioso se encarga del procesamiento de la información?",
        options: [
            { letter: "a", text: "Sistema nervioso central" },
            { letter: "b", text: "Sistema nervioso periférico" },
            { letter: "c", text: "Ganglios" },
            { letter: "d", text: "Células gliales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el principal componente de la sangre?",
        options: [
            { letter: "a", text: "Plaquetas" },
            { letter: "b", text: "Glóbulos rojos" },
            { letter: "c", text: "Plasma" },
            { letter: "d", text: "Glóbulos blancos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la fibrilación ventricular?",
        options: [
            { letter: "a", text: "Un tipo de arritmia cardíaca grave que impide que el corazón bombee sangre" },
            { letter: "b", text: "Una condición en la que los pulmones dejan de funcionar" },
            { letter: "c", text: "Un paro respiratorio" },
            { letter: "d", text: "Una reducción en la presión arterial" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué función cumple la médula espinal?",
        options: [
            { letter: "a", text: "Filtrar la sangre" },
            { letter: "b", text: "Coordinar el movimiento de los músculos esqueléticos" },
            { letter: "c", text: "Transmitir señales entre el cerebro y el resto del cuerpo" },
            { letter: "d", text: "Controlar la respiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué es un hematoma?",
        options: [
            { letter: "a", text: "Un coágulo sanguíneo que obstruye las arterias" },
            { letter: "b", text: "Una acumulación de sangre fuera de los vasos sanguíneos" },
            { letter: "c", text: "Una infección en la piel" },
            { letter: "d", text: "Una fractura ósea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la principal función de los músculos esqueléticos?",
        options: [
            { letter: "a", text: "Ayudar en la circulación sanguínea" },
            { letter: "b", text: "Generar calor para mantener la temperatura corporal" },
            { letter: "c", text: "Facilitar el movimiento del cuerpo" },
            { letter: "d", text: "Controlar la respiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué estructura se encarga de la producción de la hormona adrenalina?",
        options: [
            { letter: "a", text: "Tiroides" },
            { letter: "b", text: "Glándulas suprarrenales" },
            { letter: "c", text: "Hipófisis" },
            { letter: "d", text: "Páncreas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema del cuerpo humano regula la presión arterial?",
        options: [
            { letter: "a", text: "Sistema respiratorio" },
            { letter: "b", text: "Sistema cardiovascular" },
            { letter: "c", text: "Sistema muscular" },
            { letter: "d", text: "Sistema endocrino" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la función principal de las plaquetas sanguíneas?",
        options: [
            { letter: "a", text: "Luchar contra infecciones" },
            { letter: "b", text: "Coagular la sangre para detener hemorragias" },
            { letter: "c", text: "Transportar oxígeno" },
            { letter: "d", text: "Regular la temperatura corporal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la mitosis?",
        options: [
            { letter: "a", text: "División celular para producir células sexuales" },
            { letter: "b", text: "Proceso de replicación del ADN" },
            { letter: "c", text: "División celular para formar células somáticas" },
            { letter: "d", text: "Transformación de las células en células madre" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del cuerpo humano está principalmente encargada de la regulación de la temperatura corporal?",
        options: [
            { letter: "a", text: "Sistema linfático" },
            { letter: "b", text: "Sistema circulatorio" },
            { letter: "c", text: "Sistema nervioso" },
            { letter: "d", text: "Sistema tegumentario" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Dónde se encuentra el cartílago hialino?",
        options: [
            { letter: "a", text: "En la tráquea y las costillas" },
            { letter: "b", text: "En las arterias" },
            { letter: "c", text: "En la piel" },
            { letter: "d", text: "En el estómago" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué estructura ósea protege el cerebro?",
        options: [
            { letter: "a", text: "La clavícula" },
            { letter: "b", text: "El cráneo" },
            { letter: "c", text: "Las costillas" },
            { letter: "d", text: "La pelvis" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué glándula es responsable de la producción de la hormona tiroxina?",
        options: [
            { letter: "a", text: "Páncreas" },
            { letter: "b", text: "Tiroides" },
            { letter: "c", text: "Hipófisis" },
            { letter: "d", text: "Suprarrenales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es el sistema esquelético?",
        options: [
            { letter: "a", text: "Conjunto de órganos encargados de la digestión" },
            { letter: "b", text: "Conjunto de huesos que da soporte al cuerpo" },
            { letter: "c", text: "Conjunto de músculos responsables del movimiento" },
            { letter: "d", text: "Conjunto de glándulas endocrinas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la principal función del sistema excretor?",
        options: [
            { letter: "a", text: "Eliminar desechos del cuerpo" },
            { letter: "b", text: "Transportar oxígeno y nutrientes a las células" },
            { letter: "c", text: "Regular el metabolismo" },
            { letter: "d", text: "Producir hormonas" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es la apoptosis?",
        options: [
            { letter: "a", text: "Muerte celular programada" },
            { letter: "b", text: "División celular" },
            { letter: "c", text: "Formación de nuevas células sanguíneas" },
            { letter: "d", text: "Proceso de digestión celular" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de músculo se encuentra en el corazón?",
        options: [
            { letter: "a", text: "Músculo esquelético" },
            { letter: "b", text: "Músculo liso" },
            { letter: "c", text: "Músculo cardíaco" },
            { letter: "d", text: "Músculo estriado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué hormona es producida por el páncreas para regular los niveles de glucosa en sangre?",
        options: [
            { letter: "a", text: "Insulina" },
            { letter: "b", text: "Adrenalina" },
            { letter: "c", text: "Cortisol" },
            { letter: "d", text: "Progesterona" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de sangre puede recibir cualquier persona?",
        options: [
            { letter: "a", text: "Tipo O" },
            { letter: "b", text: "Tipo A" },
            { letter: "c", text: "Tipo AB" },
            { letter: "d", text: "Tipo B" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué estructura es responsable de la producción de la hormona progesterona durante el embarazo?",
        options: [
            { letter: "a", text: "Ovarios" },
            { letter: "b", text: "Placenta" },
            { letter: "c", text: "Útero" },
            { letter: "d", text: "Pituitaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la deshidratación?",
        options: [
            { letter: "a", text: "Un exceso de agua en el cuerpo" },
            { letter: "b", text: "La pérdida de agua y electrolitos del cuerpo" },
            { letter: "c", text: "Una enfermedad respiratoria" },
            { letter: "d", text: "Un trastorno metabólico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué glándula está encargada de la regulación de las funciones metabólicas del cuerpo?",
        options: [
            { letter: "a", text: "Glándulas suprarrenales" },
            { letter: "b", text: "Glándula tiroides" },
            { letter: "c", text: "Glándula pineal" },
            { letter: "d", text: "Glándula pituitaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de tejido forma la piel?",
        options: [
            { letter: "a", text: "Tejido epitelial" },
            { letter: "b", text: "Tejido muscular" },
            { letter: "c", text: "Tejido conectivo" },
            { letter: "d", text: "Tejido nervioso" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la función principal de los linfocitos T?",
        options: [
            { letter: "a", text: "Combatir infecciones bacterianas" },
            { letter: "b", text: "Regenerar tejidos" },
            { letter: "c", text: "Atacar células infectadas por virus" },
            { letter: "d", text: "Regular la presión sanguínea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del cuerpo humano está encargada de la percepción del dolor?",
        options: [
            { letter: "a", text: "El sistema digestivo" },
            { letter: "b", text: "El sistema nervioso" },
            { letter: "c", text: "El sistema respiratorio" },
            { letter: "d", text: "El sistema endocrino" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el principal componente del sistema nervioso central?",
        options: [
            { letter: "a", text: "Médula espinal" },
            { letter: "b", text: "Cerebro" },
            { letter: "c", text: "Nervios periféricos" },
            { letter: "d", text: "Cerebelo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema del cuerpo humano es responsable del transporte de oxígeno y nutrientes?",
        options: [
            { letter: "a", text: "Sistema respiratorio" },
            { letter: "b", text: "Sistema nervioso" },
            { letter: "c", text: "Sistema circulatorio" },
            { letter: "d", text: "Sistema muscular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué estructura conecta los músculos con los huesos?",
        options: [
            { letter: "a", text: "Tendón" },
            { letter: "b", text: "Ligamento" },
            { letter: "c", text: "Cartílago" },
            { letter: "d", text: "Arteria" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué sistema corporal está involucrado en la defensa contra infecciones?",
        options: [
            { letter: "a", text: "Sistema inmune" },
            { letter: "b", text: "Sistema digestivo" },
            { letter: "c", text: "Sistema respiratorio" },
            { letter: "d", text: "Sistema circulatorio" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es la homeostasis?",
        options: [
            { letter: "a", text: "El proceso de digestión de los alimentos" },
            { letter: "b", text: "La regulación de las funciones corporales para mantener un estado interno estable" },
            { letter: "c", text: "La distribución de oxígeno a los tejidos del cuerpo" },
            { letter: "d", text: "El proceso de formación de células nuevas" },
        ],
        correctAnswer: "b",
    },
];
