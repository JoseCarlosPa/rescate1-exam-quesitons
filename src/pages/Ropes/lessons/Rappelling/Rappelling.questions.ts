import { Question } from "../../../../question";

export const rappellingFaqData = [
    {
        question: "¿Por qué el manual desaconseja aventar (tirar) la cuerda hacia abajo antes de iniciar el rapel?",
        answer: "Aventar la cuerda puede golpear a la víctima, tirar piedras sueltas sobre ella, causar que la víctima agarre la cuerda frenando tu descenso, o generar un enredo masivo en ramas u obstáculos más abajo."
    },
    {
        question: "¿Cuál es el mejor método para llevar la cuerda durante un rapel?",
        answer: "Para la mayoría de situaciones, lo ideal es llevar la bolsa de la cuerda colgando contigo un poco más abajo de tu cintura (o como mochila en pendientes suaves) para que la cuerda vaya saliendo limpia conforme desciendes."
    },
    {
        question: "¿Cuál es la postura correcta del cuerpo al rapelear en una pared vertical?",
        answer: "Las piernas deben estar a 90° respecto a la superficie de la pared, formando el cuerpo una letra 'L'. Los pies deben estar separados a la altura de los hombros y posicionados altos (cerca de la cintura) para evitar resbalones."
    },
    {
        question: "¿Por qué son peligrosos los rápeles estilo 'salto' (bounding) o muy rápidos?",
        answer: "Las velocidades altas sobrecalientan peligrosamente la cuerda y el dispositivo. Además, los saltos generan fuertes cargas de choque (shock loads) dinámicas en todo el sistema, desde tu arnés hasta los anclajes."
    },
    {
        question: "¿Cómo se debe enfrentar un inicio de rapel difícil en un borde de 90° (parapeto/techo)?",
        answer: "Se pueden colocar los arcos de los pies en el borde e ir rotando el peso hacia atrás hasta encontrar el balance antes de dar el paso. Otra técnica segura para techos difíciles es iniciar sentado, rotando el cuerpo con la tensión ya puesta en la cuerda antes de separar los pies."
    }
];

export const rappellingQuestions: Question[] = [
    {
        question: "Durante una operación de rescate, ¿cuál es el riesgo principal de desplegar aventando el rollo de cuerda hacia abajo por un acantilado o edificio?",
        options: [
            { letter: "a", text: "Que la cuerda se decolore con el sol." },
            { letter: "b", text: "Puede causar desprendimiento de rocas sobre la víctima, golpear a alguien, o enredarse fuertemente en el camino." },
            { letter: "c", text: "Aumenta la estática de la cuerda." },
            { letter: "d", text: "Desgasta la funda de la bolsa de transporte." }
        ],
        correctAnswer: "b",
        explanation: "Además de los enredos, el peligro físico para la víctima abajo (por el impacto directo de la cuerda o caída de rocas/escombros desprendidos por el golpe) es inaceptable."
    },
    {
        question: "Para evitar enredos y peligros al desplegar cuerda en acantilados con vegetación (brush), el manual recomienda:",
        options: [
            { letter: "a", text: "Llevar la bolsa de cuerda contigo colgando apenas por debajo de ti durante el descenso, permitiendo que la cuerda salga suavemente." },
            { letter: "b", text: "Amarrar pesas al final de la cuerda y lanzarla con fuerza." },
            { letter: "c", text: "Bajar dos cuerdas simultáneas y hacer un nudo en las puntas." },
            { letter: "d", text: "Cortar los arbustos a medida que bajas." }
        ],
        correctAnswer: "a",
        explanation: "Mantener el control de la cuerda llevándola contigo (bagging) garantiza un camino limpio y evita que se enganche en lugares donde no puedes alcanzarla para desenredarla."
    },
    {
        question: "En ambientes tácticos o policiales, dejar caer la bolsa de cuerda desde lo alto puede ser contraproducente porque:",
        options: [
            { letter: "a", text: "Altera la escena del crimen." },
            { letter: "b", text: "Una cuerda colgando o cayendo anuncia inmediatamente la posición e intenciones del oficial al adversario abajo." },
            { letter: "c", text: "Rompe las ventanas del edificio." },
            { letter: "d", text: "Hace demasiado ruido al golpear el suelo." }
        ],
        correctAnswer: "b",
        explanation: "El sigilo se pierde instantáneamente si el sospechoso ve caer una cuerda frente a su ventana minutos antes de la entrada. El oficial debe llevar la bolsa consigo."
    },
    {
        question: "Al prepararse para pasar sobre el borde (edge) en un inicio de rápel, el paso de verificación más importante es:",
        options: [
            { letter: "a", text: "Hacer estiramientos de piernas." },
            { letter: "b", text: "Avisar por radio a la base." },
            { letter: "c", text: "Usar el sistema de 'compañero' (buddy check) y el sistema táctil (touch system), tocando físicamente cada mosquetón, nudo y anclaje para confirmar que están seguros y bloqueados." },
            { letter: "d", text: "Asegurarse de llevar la cantimplora de agua." }
        ],
        correctAnswer: "c",
        explanation: "Las comprobaciones visuales pueden engañar al cerebro. Tocar físicamente y apretar ('squeeze') el seguro de cada mosquetón garantiza que realmente está bloqueado."
    },
    {
        question: "Al enfrentarte a un borde de edificio recto a 90° con un anclaje bajo (a la altura de la cintura), la técnica inicial de pie sugerida consiste en:",
        options: [
            { letter: "a", text: "Saltar lejos de la pared para evadir el borde." },
            { letter: "b", text: "Colocar los arcos de los pies justo sobre la esquina, con rodillas ligeramente flexionadas, e ir recostando el peso hacia atrás hasta sentir equilibrio antes de dar el primer paso corto hacia abajo." },
            { letter: "c", text: "Deslizarse boca abajo." },
            { letter: "d", text: "Dejarse caer y que el descensor frene el golpe." }
        ],
        correctAnswer: "b",
        explanation: "Poner los arcos de los pies en el borde y apoyarse en el sistema con tensión permite pivotar hacia atrás (en lugar de dar un paso ciego perdiendo balance) y evita resbalones faciales."
    },
    {
        question: "Si durante el inicio de un rápel resbalas y pierdes pie contra la pared, ¿qué técnica te ayudará a recuperar la postura?",
        options: [
            { letter: "a", text: "Soltar la cuerda de freno para caer más rápido." },
            { letter: "b", text: "Apoyar rápidamente los pies planos contra el muro y soltar LENTAMENTE un poco de cuerda; al bajar el cuerpo el péndulo forzará tus pies a ganar tracción contra la pared." },
            { letter: "c", text: "Soltarte del arnés." },
            { letter: "d", text: "Tratar de escalar de regreso a mano limpia." }
        ],
        correctAnswer: "b",
        explanation: "No entres en pánico. Poner los pies frente a ti y soltar cuerda suavemente hace que tu centro de gravedad baje, presionando instintivamente tus botas contra el muro por gravedad."
    },
    {
        question: "Para un borde de techo con un 'parapeto' alto y difícil, el método de entrada más seguro puede ser:",
        options: [
            { letter: "a", text: "Correr y saltar el parapeto." },
            { letter: "b", text: "Comenzar sentado ('Sitting Start'), con las piernas colgando, asegurar que el descensor y la cuerda ya tienen toda la tensión, y luego rodar/pivotar hacia abajo empujando el muro con los pies." },
            { letter: "c", text: "Desarmar el parapeto." },
            { letter: "d", text: "Usar una escalera de aluminio." }
        ],
        correctAnswer: "b",
        explanation: "Un inicio sentado elimina por completo el riesgo de resbalar al pasar el peso del cuerpo de un lado al otro del muro, asegurando que el sistema ya está cargado antes de moverte."
    },
    {
        question: "¿Cómo se describe la postura ideal y biomecánica en un muro perfectamente vertical?",
        options: [
            { letter: "a", text: "Cuerpo totalmente paralelo a la pared." },
            { letter: "b", text: "Doblado por la cintura haciendo una forma de 'L', con las piernas a 90° de la superficie y los pies bien altos y separados al ancho de los hombros." },
            { letter: "c", text: "El cuerpo estirado formando un ángulo de 45 grados." },
            { letter: "d", text: "De lado, con un solo pie tocando la pared." }
        ],
        correctAnswer: "b",
        explanation: "Mantener los pies altos (cerca de la línea de la cadera) previene que resbalen hacia abajo. La postura en 'L' transfiere tu peso directo a las botas para máxima fricción."
    },
    {
        question: "Un error común de los rápeles de estilo 'comando' o rápeles con saltos amplios en el mundo del rescate es que:",
        options: [
            { letter: "a", text: "Se ven poco profesionales." },
            { letter: "b", text: "Generan fuerzas dinámicas (shock loads) que estresan y pueden dañar o fallar anclajes enteros, y el frenado brusco funde la cuerda por fricción." },
            { letter: "c", text: "Mareos en el rescatista." },
            { letter: "d", text: "Requieren mosquetones de titanio." }
        ],
        correctAnswer: "b",
        explanation: "Las películas muestran saltos espectaculares, pero en la realidad un salto somete al anclaje a multiplicaciones dinámicas de la fuerza de gravedad que pueden colapsar sistemas enteros."
    },
    {
        question: "¿Cuál es una técnica recomendada para entrenamientos de rápel en torres o muros fijos (donde no hay víctimas abajo) para evitar que las cuerdas se tuerzan tras múltiples descensos?",
        options: [
            { letter: "a", text: "Dejar la cuerda en la bolsa." },
            { letter: "b", text: "Usar cuerdas gemelas." },
            { letter: "c", text: "Bajar la punta de la cuerda hasta que quede flotando apenas un poco por encima del suelo ('just off the ground'), permitiendo que las torceduras (twist) giren y se liberen solas en el aire." },
            { letter: "d", text: "Rapelear con dos ochos a la vez." }
        ],
        correctAnswer: "c",
        explanation: "Un cabo libre de fricción con el piso funciona como un péndulo que se desenrolla a sí mismo, librando a la cuerda del 'twist' generado por descensores como el Ocho o el Rack."
    }
];
