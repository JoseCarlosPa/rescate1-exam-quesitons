import { Question } from "../../../../question";

export const faqData = [
    {
        question: "¿Por qué las cuerdas de nylon pierden resistencia cuando se mojan?",
        answer: "Las fibras de nylon absorben agua, lo que puede causar una pérdida de resistencia de hasta un 23% y un aumento de peso. Las fibras de poliéster, en cambio, tienen absorción de agua mínima y su desempeño mojado es prácticamente idéntico al seco.",
    },
    {
        question: "¿Por qué las fibras HMPE (Spectra®/Dyneema®) no son recomendadas para rapel?",
        answer: "Porque tienen propiedades térmicas muy bajas — se derriten a temperatura relativamente baja — lo que las hace inadecuadas para rapel o sistemas de rescate donde la fricción genera calor. Se usan principalmente en cuerdas de rescate acuático por su flotabilidad.",
    },
    {
        question: "¿Qué diferencia la construcción Kernmantle de una cuerda trenzada (laid)?",
        answer: "En la cuerda 'laid' (tres hebras), las fibras de carga están expuestas en la superficie y se dañan con la abrasión. En la construcción kernmantle, un núcleo (kern) de fibras paralelas lleva la carga (70-90%) y una cubierta (mantle) lo protege, ofreciendo mayor resistencia a la abrasión y mejor manejo.",
    },
    {
        question: "¿Qué especifica NFPA 1983 sobre la construcción de cuerdas de seguridad de vida?",
        answer: "NFPA 1983 especifica construcción 'block-creel', donde las fibras corren a lo largo de toda la cuerda sin empalmes. Esto es más costoso pero produce una cuerda de mayor calidad y consistencia.",
    },
    {
        question: "¿Cuándo se debe retirar una cuerda de seguridad de vida según los estándares?",
        answer: "NFPA 1858 establece retirar una cuerda a los 10 años. ASTM F1740 también recomienda 10 años como vida máxima de almacenamiento. Además, debe retirarse si presenta daños visibles/táctiles, si fue sometida a cargas de impacto, o si existe cualquier duda sobre su integridad.",
    },
    {
        question: "¿Por qué se prefiere una cuerda de color no blanco para inspección?",
        answer: "Si la cuerda tiene una cubierta de color distinto al blanco, es más fácil detectar daños: si las fibras blancas del núcleo quedan visibles, el daño a la cubierta — y posiblemente al núcleo — es inmediatamente evidente.",
    },
    {
        question: "¿Cuál es la diferencia entre webbing tubular y webbing plano para rescate?",
        answer: "El webbing tubular de 1 pulgada (fabricado según Mil-W-5625 / PIA-W-5625F) está generalmente calificado a 4,000-4,500 lb (17.8-20 kN) y es más suave. El webbing plano de 1 pulgada para rescate se califica a 6,000 lb (26.7 kN) pero puede ser muy rígido y debe verificarse su capacidad de mantener nudos.",
    },
];

export const ropeWebbingQuestions: Question[] = [
    // ── FIBRAS ──
    {
        question: "¿Cuál es la principal desventaja de las fibras de nylon para cuerdas de rescate?",
        options: [
            { letter: "a", text: "Su muy alto costo de fabricación" },
            { letter: "b", text: "La pérdida de resistencia de hasta 23% y el aumento de peso al absorber agua" },
            { letter: "c", text: "Su incapacidad para absorber cargas de impacto" },
            { letter: "d", text: "Su color siempre blanco que dificulta la inspección" },
        ],
        correctAnswer: "b",
        explanation: "Las fibras de nylon tienen alta resistencia, resistencia a la abrasión y capacidad de absorber cargas de impacto, pero su principal desventaja es que absorben agua, causando una pérdida de resistencia de hasta 23% y un aumento de peso.",
    },
    {
        question: "¿Cuál de las siguientes es una ventaja clave del poliéster sobre el nylon en cuerdas de rescate?",
        options: [
            { letter: "a", text: "Mayor capacidad de absorber cargas de impacto" },
            { letter: "b", text: "Menor costo de producción" },
            { letter: "c", text: "Mínima absorción de agua y alto desempeño mojado" },
            { letter: "d", text: "Mayor coeficiente de fricción" },
        ],
        correctAnswer: "c",
        explanation: "El poliéster tiene las ventajas de resistencia y abrasión del nylon, pero su absorción de agua es mínima — su desempeño mojado es prácticamente igual al seco. También tiene alta resistencia a la degradación ultravioleta.",
    },
    {
        question: "¿Para qué tipo de rescate son adecuadas las cuerdas de polipropileno y polietileno?",
        options: [
            { letter: "a", text: "Rescate en altura con sistema de polipastos" },
            { letter: "b", text: "Líneas de vida en trabajo industrial en altura" },
            { letter: "c", text: "Cuerdas de lanzamiento (throwlines) para rescate acuático, por su flotabilidad" },
            { letter: "d", text: "Cuerdas principales de rapel" },
        ],
        correctAnswer: "c",
        explanation: "Las cuerdas de polipropileno y polietileno flotan en el agua y se usan para cuerdas de lanzamiento en rescate acuático. Sus fabricantes advierten que no deben usarse para rapel, izar cargas pesadas o en sistemas de rescate, por su baja resistencia y durabilidad.",
    },
    {
        question: "¿Qué fibra de la familia aramida ha reemplazado al Kevlar® en cuerdas de seguridad de vida por su mejor resistencia a flexiones repetidas?",
        options: [
            { letter: "a", text: "HMPE (Spectra®)" },
            { letter: "b", text: "Vectran®" },
            { letter: "c", text: "Technora® y Twaron®" },
            { letter: "d", text: "Polipropileno de alta tenacidad" },
        ],
        correctAnswer: "c",
        explanation: "Kevlar® no sobrevivía bien situaciones que requerían flexiones repetidas. Technora® y Twaron® se convirtieron en las fibras aromidas preferidas para cuerdas de seguridad de vida. Technora® es la fibra elegida para líneas de escape resistentes al fuego.",
    },
    {
        question: "¿A qué temperatura descompone la fibra aramida (Technora®) en lugar de derretirse?",
        options: [
            { letter: "a", text: "170°C" },
            { letter: "b", text: "256°C" },
            { letter: "c", text: "500°C" },
            { letter: "d", text: "135°C" },
        ],
        correctAnswer: "c",
        explanation: "Una característica única de las fibras aramidas es su resistencia a la llama y al derretimiento — en lugar de derretirse, se descomponen a aproximadamente 500°C, lo que las hace ideales para aplicaciones de seguridad contra incendios.",
    },
    {
        question: "¿Por qué las fibras HMPE (Spectra®/Dyneema®) NO se recomiendan para rapel o sistemas de rescate?",
        options: [
            { letter: "a", text: "Porque son demasiado rígidas para usarse en mosquetones" },
            { letter: "b", text: "Por sus bajas propiedades térmicas — se derriten con el calor generado por la fricción" },
            { letter: "c", text: "Porque son demasiado pesadas para el rescate vertical" },
            { letter: "d", text: "Porque no cumplen con NFPA 1983" },
        ],
        correctAnswer: "b",
        explanation: "Las fibras HMPE tienen alta resistencia y bajo peso, pero sus bajas propiedades térmicas las hacen inadecuadas para rapel o sistemas de rescate donde la fricción genera calor. Se añaden frecuentemente a cuerdas de rescate acuático por la flotabilidad que aportan.",
    },
    // ── CONSTRUCCIÓN ──
    {
        question: "¿Por qué las cuerdas 'laid' (tres hebras) ya no son la construcción estándar en rescate con cuerdas?",
        options: [
            { letter: "a", text: "Porque son excesivamente caras de fabricar" },
            { letter: "b", text: "Porque las fibras de carga quedan expuestas en la superficie, se cortan con la abrasión, y tienden a enredarse y girar en rapel" },
            { letter: "c", text: "Porque no cumplen con los estándares de elongación de NFPA 1983" },
            { letter: "d", text: "Porque no pueden fabricarse en diámetros mayores a 9 mm" },
        ],
        correctAnswer: "b",
        explanation: "En la construcción laid, las hebras se tuercen exponiendo las fibras de carga en la superficie. La abrasión corta esas fibras, reduciendo la resistencia. Además, estas cuerdas tienden a enredarse y a girar durante los rapeles libres.",
    },
    {
        question: "En una cuerda kernmantle, ¿qué porcentaje de la carga lleva típicamente el núcleo (kern)?",
        options: [
            { letter: "a", text: "Del 30% al 50%" },
            { letter: "b", text: "Del 70% al 90%" },
            { letter: "c", text: "El 100% — la cubierta es solo decorativa" },
            { letter: "d", text: "Del 50% al 60%" },
        ],
        correctAnswer: "b",
        explanation: "El porcentaje de carga que lleva el núcleo de una cuerda kernmantle varía del 70% al 90%, dependiendo de la marca y el diámetro. La cubierta (mantle) protege el núcleo y mantiene los haces juntos, pero el núcleo es el componente principal de carga.",
    },
    {
        question: "¿Qué tipo de construcción especifica NFPA 1983 para cuerdas de seguridad de vida?",
        options: [
            { letter: "a", text: "Trenzado doble (braid on braid)" },
            { letter: "b", text: "Tres hebras (laid)" },
            { letter: "c", text: "Block-creel, donde las fibras corren toda la longitud sin empalmes" },
            { letter: "d", text: "Trenzado simple de 8 hebras" },
        ],
        correctAnswer: "c",
        explanation: "NFPA 1983 especifica construcción block-creel, donde las fibras corren a lo largo de toda la cuerda sin ningún empalme. Es un método más caro pero produce una cuerda de mayor calidad.",
    },
    {
        question: "¿Cuál es la principal diferencia entre una cuerda kernmantle de rapel y una de escalada deportiva en términos de construcción del núcleo?",
        options: [
            { letter: "a", text: "Las cuerdas de rapel tienen núcleo de HMPE y las de escalada de nylon" },
            { letter: "b", text: "Las cuerdas de rapel/rescate tienen poca torsión en el núcleo (baja elongación); las de escalada tienen núcleo torsionado/trenzado para absorber energía (alta elongación)" },
            { letter: "c", text: "Las cuerdas de escalada tienen construcción block-creel y las de rescate no" },
            { letter: "d", text: "No hay diferencia estructural, solo en el diámetro" },
        ],
        correctAnswer: "b",
        explanation: "El fabricante torsiona o trenza los haces del núcleo para dar la elongación deseada. Una cuerda de baja elongación para rescate/rapel tendrá muy poca torsión. Una cuerda de escalada deportiva tendrá núcleo más torsionado para absorber la energía de una caída.",
    },
    {
        question: "¿Cuál es el porcentaje mínimo de carga que puede llevar el núcleo en una cuerda de doble trenzado (braid on braid)?",
        options: [
            { letter: "a", text: "70%" },
            { letter: "b", text: "85%" },
            { letter: "c", text: "50%" },
            { letter: "d", text: "60%" },
        ],
        correctAnswer: "c",
        explanation: "En las cuerdas braid-on-braid (doble trenzado), el núcleo (trenzado interior) puede llevar tan solo el 50% de la carga, con el resto en la cubierta. Esta construcción es común en cuerdas náuticas y algunas cuerdas especiales, pero rara en sistemas de rescate.",
    },
    // ── ESPECIFICACIONES ──
    {
        question: "Según CI 1801, ¿cuál es la definición de una cuerda 'estática'?",
        options: [
            { letter: "a", text: "Elongación de 0% al 10% de la MBS" },
            { letter: "b", text: "Elongación máxima de 6% al aplicar el 10% de la MBS" },
            { letter: "c", text: "Elongación entre 6% y 10% al 10% de la MBS" },
            { letter: "d", text: "Cualquier cuerda que no sea dinámica" },
        ],
        correctAnswer: "b",
        explanation: "CI 1801 define una cuerda estática como aquella con elongación máxima de 6% cuando se aplica el 10% de su resistencia mínima al rompimiento (MBS). La definición de cuerda de baja elongación es entre 6% y 10% bajo las mismas condiciones.",
    },
    {
        question: "¿Por qué se prefieren cuerdas de baja elongación para sistemas de izado en rescate?",
        options: [
            { letter: "a", text: "Porque son más baratas" },
            { letter: "b", text: "Porque cuanta mayor elongación tiene la cuerda, menos eficiente es el sistema de izado — primero hay que eliminar la elongación antes de que la camilla se mueva" },
            { letter: "c", text: "Porque soportan mayor carga máxima" },
            { letter: "d", text: "Porque no requieren protección de arista" },
        ],
        correctAnswer: "b",
        explanation: "Con sistemas de izado, la elongación debe eliminarse de la cuerda antes de que la camilla se mueva. A mayor elongación, mayor ineficiencia del sistema. Las cuerdas de baja elongación minimizan esta pérdida de movimiento.",
    },
    {
        question: "¿Por qué una cuerda estática NO debe usarse para asegurar a un escalador de punta (lead climbing)?",
        options: [
            { letter: "a", text: "Porque es demasiado gruesa para pasar por los seguros" },
            { letter: "b", text: "Porque su baja elongación transmite fuerzas de impacto muy altas al escalador y los puntos de anclaje durante una caída" },
            { letter: "c", text: "Porque no cumple con la norma UIAA para escalada" },
            { letter: "d", text: "Porque se desgasta más rápido con los dispositivos de aseguramiento" },
        ],
        correctAnswer: "b",
        explanation: "Las cuerdas dinámicas absorben la energía de la caída estirándose. Las cuerdas estáticas y de baja elongación tienen baja capacidad de absorción de energía; usarlas en escalada de punta transmitiría fuerzas peligrosamente altas al escalador y los anclajes.",
    },
    {
        question: "¿Cómo afecta hacer nudos a la resistencia de trabajo de una cuerda de rescate?",
        options: [
            { letter: "a", text: "No afecta su resistencia" },
            { letter: "b", text: "Aumenta la resistencia al distribuir la carga" },
            { letter: "c", text: "Reduce su resistencia de trabajo — los nudos son uno de los factores de degradación de resistencia" },
            { letter: "d", text: "Solo afecta si la cuerda está mojada" },
        ],
        correctAnswer: "c",
        explanation: "Los nudos reducen la resistencia de trabajo de la cuerda. Junto con doblar la cuerda sobre aristas, mojar ciertas cuerdas, sobrecargarlas y otros factores, los nudos son uno de los principales medios por los que el usuario degrada la resistencia inicial de la cuerda.",
    },
    {
        question: "¿Qué ventaja ofrecen las cuerdas de mayor diámetro?",
        options: [
            { letter: "a", text: "Son más baratas y más livianas" },
            { letter: "b", text: "Son más fáciles de almacenar en bolsas pequeñas" },
            { letter: "c", text: "Mayor resistencia, mayor fricción para rapel más lento y mayor factor de seguridad por mayor abrasión" },
            { letter: "d", text: "Se adaptan a más accesorios de menor tamaño" },
        ],
        correctAnswer: "c",
        explanation: "Las cuerdas de mayor diámetro son más fuertes, más fáciles de agarrar y generan más fricción para un rapel más lento. También pueden tener mayor factor de seguridad por su mayor resistencia y resistencia a la abrasión. La contrapartida es mayor peso y volumen.",
    },
    // ── WEBBING ──
    {
        question: "¿Cuál es la calificación de resistencia típica del webbing tubular de 1 pulgada estándar militar?",
        options: [
            { letter: "a", text: "8,000 lb (35.6 kN)" },
            { letter: "b", text: "6,000 lb (26.7 kN)" },
            { letter: "c", text: "4,000 a 4,500 lb (17.8 a 20 kN)" },
            { letter: "d", text: "2,500 lb (11.1 kN)" },
        ],
        correctAnswer: "c",
        explanation: "El webbing tubular de 1 pulgada fabricado según el estándar militar (Mil-W-5625) generalmente se califica a 4,000-4,500 lb (17.8-20 kN). El webbing plano de 1 pulgada para rescate tiene mayor resistencia: 6,000 lb (26.7 kN).",
    },
    {
        question: "¿Qué estándar reemplazó a la especificación militar Mil-W-5625 para webbing tubular de nylon?",
        options: [
            { letter: "a", text: "NFPA 1983 Sección 7" },
            { letter: "b", text: "ASTM F1740" },
            { letter: "c", text: "PIA-W-5625F de la Parachute Industry Association" },
            { letter: "d", text: "CI 1803 del Cordage Institute" },
        ],
        correctAnswer: "c",
        explanation: "Con el movimiento del gobierno hacia estándares comerciales, la especificación militar para webbing tubular de nylon (Mil-W-5625) fue reemplazada por PIA-W-5625F de la Parachute Industry Association.",
    },
    // ── USO Y CUIDADO ──
    {
        question: "¿Cuándo debe inspeccionarse una cuerda de seguridad de vida nueva antes de usarse?",
        options: [
            { letter: "a", text: "Solo después de la primera sesión de entrenamiento" },
            { letter: "b", text: "Antes de ser puesta en servicio, incluso si nunca ha sido usada" },
            { letter: "c", text: "Solo cuando el fabricante lo indica en la etiqueta" },
            { letter: "d", text: "Únicamente si presenta marcas visibles de daño" },
        ],
        correctAnswer: "b",
        explanation: "Cada cuerda debe inspeccionarse antes de ser puesta en servicio, incluso si nunca ha sido usada. Una cuerda nueva debe ser inspeccionada cuidadosamente antes de entrar en servicio.",
    },
    {
        question: "¿Qué tipo de daño debe reportarse inmediatamente para retirar una cuerda de servicio?",
        options: [
            { letter: "a", text: "Cambio de color por exposición a la luz solar" },
            { letter: "b", text: "Marca de fecha de fabricación que supere 5 años" },
            { letter: "c", text: "Carga de impacto (shock load) — caída del sistema, impacto de roca, etc." },
            { letter: "d", text: "Uso en más de 3 operaciones de rescate" },
        ],
        correctAnswer: "c",
        explanation: "Si una cuerda fue sometida a una carga de impacto (shock load), caída libre, impacto de roca o cualquier abuso fuera del rapel o entrenamiento normal, debe retirarse de servicio. Esto debe reportarse para que la cuerda sea retirada inmediatamente.",
    },
    {
        question: "¿Cuántos años es la vida máxima de almacenamiento de una cuerda de seguridad de vida según NFPA 1858 y ASTM F1740?",
        options: [
            { letter: "a", text: "5 años" },
            { letter: "b", text: "15 años" },
            { letter: "c", text: "10 años" },
            { letter: "d", text: "20 años" },
        ],
        correctAnswer: "c",
        explanation: "Tanto NFPA 1858 como ASTM F1740 establecen 10 años como la vida máxima de una cuerda de seguridad de vida. Esto aplica incluso si la cuerda no ha sido usada — después de 10 años de almacenamiento, puede valer la pena considerar su reemplazo.",
    },
    {
        question: "Según el estudio de Bruce Smith sobre cuerdas de espeleología usadas, ¿qué factor tiene mayor impacto en la vida de una cuerda?",
        options: [
            { letter: "a", text: "La marca del fabricante" },
            { letter: "b", text: "El diámetro de la cuerda" },
            { letter: "c", text: "El cuidado de la cuerda, más que la antigüedad" },
            { letter: "d", text: "El número de nudos realizados" },
        ],
        correctAnswer: "c",
        explanation: "Bruce Smith observó en más de 100 muestras de cuerdas usadas que 'el cuidado de la cuerda tiene un impacto mucho mayor en la vida de una cuerda que la antigüedad'. Las cuerdas como nuevas perdían 1.5-2% de resistencia por año; las usadas, 3-4% por año.",
    },
    {
        question: "¿Qué significa marcar un extremo de la cuerda como 'A' y el otro como 'B'?",
        options: [
            { letter: "a", text: "Indica el extremo principal y el de seguridad del sistema" },
            { letter: "b", text: "Permite rastrear el uso y saber desde qué extremo buscar posibles daños" },
            { letter: "c", text: "Es requerido por NFPA 1983 para la certificación de la cuerda" },
            { letter: "d", text: "Indica la dirección de trenzado del núcleo" },
        ],
        correctAnswer: "b",
        explanation: "Marcar un extremo como A y el otro como B ayuda a rastrear el uso y puede identificar desde qué extremo comenzar a buscar un posible daño reportado en una operación específica.",
    },
    {
        question: "¿Cuál es la mejor forma de almacenar una cuerda de rescate según el manual CMC?",
        options: [
            { letter: "a", text: "Enrollada en espiral y colgada de un gancho en la pared" },
            { letter: "b", text: "En una bolsa para cuerdas (rope bag), en lugar fresco, seco y fuera de la luz solar directa" },
            { letter: "c", text: "En un carrete metálico cerrado bajo llave" },
            { letter: "d", text: "Doblada en zig-zag en un cajón del vehículo de rescate" },
        ],
        correctAnswer: "b",
        explanation: "La mejor forma de almacenar una cuerda de rescate es en una bolsa para cuerdas (rope bag), que la protege mientras la mantiene lista para uso inmediato. Las cuerdas deben almacenarse en un lugar fresco, seco y fuera de la luz solar directa, lejos de atmósferas químicas.",
    },
    {
        question: "¿Cuál es la Regla #2 de las 'Rescue Rope Rules' y por qué es importante?",
        options: [
            { letter: "a", text: "No pisar la cuerda — porque puede dañar las fibras contra superficies rugosas" },
            { letter: "b", text: "No pasar a horcajadas sobre la cuerda — porque si la cuerda cargada falla, el efecto látigo puede causar lesiones graves" },
            { letter: "c", text: "Proteger la cuerda de aristas — porque los cortes son la principal causa de falla" },
            { letter: "d", text: "Evitar exposición a químicos — porque disuelven el nylon y el poliéster" },
        ],
        correctAnswer: "b",
        explanation: "La Regla #2 es 'No pasar a horcajadas sobre la cuerda'. Estar encima o muy cerca de una cuerda cargada te expone a posibles lesiones si el sistema falla y la cuerda azota. Nunca se debe permitir que nadie esté en línea con o a los lados de una cuerda bajo tensión.",
    },
];
