import { Question } from "../../../../question";

export const reversingSystemFaqData = [
    {
        question: "¿Qué significa 'Revertir un Sistema' (Reversing a System)?",
        answer: "Significa convertir un sistema de descenso (lowering) en un sistema de izado (raising), o viceversa, mientras la cuerda principal sigue soportando todo el peso de la carga (camilla, paciente y rescatista)."
    },
    {
        question: "¿Por qué podría necesitarse revertir un sistema durante un rescate?",
        answer: "Se puede requerir si la camilla se atora, si cambia el terreno, si llega apoyo como un helicóptero y es más rápido subir que seguir bajando, o si la estrategia inicial dictaba bajar hasta el paciente y luego izarlo (Raise)."
    },
    {
        question: "¿Cuál es la principal ventaja de dispositivos como el CLUTCH o el MPD al hacer conversiones?",
        answer: "Estos dispositivos integran polea, freno y trinquete. Cambiar de izado a descenso (o al revés) solo requiere mover una manivela (handle) y quitar o poner un Prusik con una polea en la cuerda principal, sin necesidad de transferir el peso a un Load Release Hitch."
    },
    {
        question: "¿Qué se debe hacer siempre con la línea de Belay durante cualquier reversión o conversión?",
        answer: "La línea de seguridad (Belay Line) debe mantenerse constantemente atendida, tensa, o asegurada (locked off) durante todo el proceso para prevenir caídas catastróficas si la línea principal fallara durante el cambio."
    },
    {
        question: "¿Qué paso crítico debe hacerse al revertir de Izado a Descenso usando un Brake Bar Rack?",
        answer: "Se debe permitir que la cuerda retroceda levemente para que el Ratchet reciba toda la carga. Luego se monta la cuerda en el Rack, se bloquea (tie-off), se elimina la holgura y finalmente se usa la correa de liberación de carga (Load Release Strap) del Ratchet para transferir el peso SUAVEMENTE hacia el Rack."
    }
];

export const reversingSystemQuestions: Question[] = [
    {
        question: "Según el manual, si el terreno permite simplemente cargar o descender la camilla a pie usando una línea de seguro separada para llegar al paciente rápidamente, ¿es esto preferible a armar un sistema completo de descenso al inicio?",
        options: [
            { letter: "a", text: "Sí, es más rápido y permite ir empaquetando al paciente mientras los equipos instalan y configuran el sistema principal arriba." },
            { letter: "b", text: "No, el manual prohíbe mover camillas sin un sistema de tracción principal atado." },
            { letter: "c", text: "Sí, pero solo si el paciente no tiene lesiones cervicales." },
            { letter: "d", text: "No, porque las cuerdas separadas no tienen la misma resistencia." }
        ],
        correctAnswer: "a",
        explanation: "Si se puede llevar la camilla rápido abajo (ej. con la mano y un seguro simple), ahorra tiempo crítico de atención médica mientras el equipo de cuerdas 'arriba' termina de armar el sistema final."
    },
    {
        question: "Al convertir un Sistema de DESCENSO a un Sistema de IZADO utilizando un CLUTCH o MPD, ¿cuál es el PRIMER paso con respecto al dispositivo antes de conectar las poleas de ventaja mecánica?",
        options: [
            { letter: "a", text: "Soltar toda la cuerda rápidamente." },
            { letter: "b", text: "Rotar la manivela de control a la posición 'Stop' (o activar el Parking Brake del MPD) para bloquear la carga." },
            { letter: "c", text: "Desenganchar el CLUTCH del anclaje." },
            { letter: "d", text: "Amarrar un nudo dinámico detrás del dispositivo." }
        ],
        correctAnswer: "b",
        explanation: "Antes de instalar el equipo de tracción (poleas y Prusiks), el operador debe asegurar la carga girando el CLUTCH a 'Stop', lo que traba físicamente la cuerda."
    },
    {
        question: "Al usar un CLUTCH para pasar de Descenso a Izado (Lower to Raise), una vez que enganchaste el Prusik con la polea móvil a la cuerda principal, ¿qué haces con la manivela para iniciar la tracción?",
        options: [
            { letter: "a", text: "La giras a la posición 'Release'." },
            { letter: "b", text: "La desarmas del dispositivo." },
            { letter: "c", text: "La giras a la posición 'Standby', lo que permite la mayor eficiencia al recuperar cuerda (actúa como polea/trinquete)." },
            { letter: "d", text: "La mantienes en 'Stop' permanentemente." }
        ],
        correctAnswer: "c",
        explanation: "En la posición 'Standby', la leva del CLUTCH permite que la cuerda entre libremente durante el jalón y frene automáticamente cuando se suelta (captura de progreso) con mínima fricción."
    },
    {
        question: "Estás usando un dispositivo convencional como el Brake Bar Rack (Rack de barras) para bajar una carga y el jefe ordena cambiar a Izado (Lower to Raise). ¿Cómo le quitas el peso al Rack de barras para desarmarlo de la cuerda?",
        options: [
            { letter: "a", text: "Sacas las barras a la fuerza una por una." },
            { letter: "b", text: "Instalas un 'Rope grab' (Prusik o Ascendedor) en la línea principal anclado al sistema, desbloqueas el Rack y dejas correr la cuerda con cuidado hasta que la carga se transfiere y descansa sobre ese nuevo Ratchet." },
            { letter: "c", text: "Cortas la cuerda detrás del Rack." },
            { letter: "d", text: "Haces un nudo ocho y lo enganchas al arnés." }
        ],
        correctAnswer: "b",
        explanation: "Como el Rack no atrapa el progreso automáticamente, debes instalar un seguro extra (Ratchet), transferirle la carga bajando un par de centímetros, y entonces el Rack quedará flojo para poder ser desmontado."
    },
    {
        question: "Para realizar una conversión completa de Descenso a Izado usando equipo convencional (Rack), ¿en dónde se ancla la primera polea (fija) una vez retirado el Rack de la cuerda?",
        options: [
            { letter: "a", text: "Al arnés del operador." },
            { letter: "b", text: "A la camilla." },
            { letter: "c", text: "Al Load Release Strap (correa de liberación de carga) conectada al anclaje principal." },
            { letter: "d", text: "A un árbol cercano sin mosquetón." }
        ],
        correctAnswer: "c",
        explanation: "La polea fija que direccionará la cuerda hacia los rescatistas debe anclarse en la estación principal, típicamente conectada a la cinta de liberación de carga donde estaba el Rack o cerca del Ratchet."
    },
    {
        question: "Estás subiendo una camilla (Izado) usando un CLUTCH como trinquete (Ratchet) principal. Te ordenan bajar la camilla unos metros (Raise to Lower). ¿Qué es lo ÚNICO que debes retirar de la cuerda principal antes de girar la manivela a 'Standby/Release'?",
        options: [
            { letter: "a", text: "El mosquetón del anclaje." },
            { letter: "b", text: "La línea de Belay." },
            { letter: "c", text: "El Prusik de tracción ('tractor') y su polea móvil, ya que el CLUTCH sostendrá todo el peso." },
            { letter: "d", text: "La cuerda completa del CLUTCH." }
        ],
        correctAnswer: "c",
        explanation: "Como el CLUTCH ya retiene la carga, simplemente se desarma el Prusik móvil que servía para jalar. Una vez retirado, puedes usar el CLUTCH directamente como descensor."
    },
    {
        question: "Si el sistema está en tracción (Raise) usando un Ratchet clásico (un Prusik atado a un Load Release Strap) y necesitas pasar a descenso (Lower) con un Rack de barras, ¿cuándo debes liberar el Load Release Strap?",
        options: [
            { letter: "a", text: "Antes de instalar el Rack." },
            { letter: "b", text: "Nunca se debe liberar." },
            { letter: "c", text: "DESPUÉS de haber enhebrado la cuerda en el Rack de barras, haberlo asegurado (tie-off) y haber quitado toda la holgura (slack) de la cuerda entre el Rack y el Ratchet." },
            { letter: "d", text: "Al mismo tiempo que los rescatistas sueltan la cuerda." }
        ],
        correctAnswer: "c",
        explanation: "Es crítico que el nuevo dispositivo de descenso (el Rack) esté listo, trabado y sin comba en la cuerda antes de usar la correa de liberación (LRH) para pasarle esos 200kg de tensión suavemente."
    },
    {
        question: "¿Qué ocurre con una línea de Belay configurada con Tandem Prusiks si el sistema de la Línea Principal (Main Line) necesita cambiar de dirección abruptamente (de Izar a Bajar o viceversa)?",
        options: [
            { letter: "a", text: "Se deben cambiar los cordines por unos más delgados." },
            { letter: "b", text: "Debe desarmarse todo el Belay y volverse a atar al revés." },
            { letter: "c", text: "La gran ventaja del Tandem Prusik es que NO requiere cambios en su configuración física; simplemente se empieza a jalar o a entregar cuerda en la nueva dirección (y si había polea de ayuda, se quita o pone)." },
            { letter: "d", text: "Se bloquea y hay que cortar la cuerda." }
        ],
        correctAnswer: "c",
        explanation: "Los Prusiks en tándem son bi-direccionales en este contexto (acompañan la cuerda para bajar, o se jala la cuerda a través de ellos para subir), por lo que un cambio de plan repentino no exige re-configurar el anclaje de la línea de seguridad."
    },
    {
        question: "Un paso REQUERIDO y obligatorio para cualquier operador (ya sea usando CLUTCH o Rack) durante CUALQUIER proceso de reversión del sistema es:",
        options: [
            { letter: "a", text: "Avisarle al Líder del Equipo ('Team Leader') en voz alta cuando el sistema esté listo y convertido, ANTES de mover la carga." },
            { letter: "b", text: "Soltar la línea de seguridad." },
            { letter: "c", text: "Realizar el cambio sin avisar para ahorrar tiempo." },
            { letter: "d", text: "Desatar la camilla." }
        ],
        correctAnswer: "a",
        explanation: "Las comunicaciones son vitales. El operador debe afirmar 'Estoy listo para subir' (Ready to raise) o 'Listo para bajar' (Ready to lower) para que el líder dé la orden de movimiento a todo el equipo."
    },
    {
        question: "Si utilizas dispositivos integrados mecánicos modernos (MPD / CLUTCH), ¿cómo se describe el 'Reseteo' (Reset) del sistema de ventaja mecánica (ej. un Z-Rig)?",
        options: [
            { letter: "a", text: "Manual y requiere la fuerza de 3 personas." },
            { letter: "b", text: "Hands-free (manos libres). La función auto-bloqueante permite simplemente soltar la cuerda de tiro y regresar la polea móvil a la posición de inicio cómodamente." },
            { letter: "c", text: "Requiere amarrar la cuerda a un árbol." },
            { letter: "d", text: "Peligroso porque no se traban automáticamente." }
        ],
        correctAnswer: "b",
        explanation: "El trinquete mecánico captura el progreso inmediatamente. El rescatista simplemente camina hacia el borde arrastrando el Prusik y vuelve a jalar."
    }
];
