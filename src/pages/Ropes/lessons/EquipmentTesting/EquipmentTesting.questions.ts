import { Question } from "../../../../question";

export const faqData = [
    {
        question: "¿Por qué varía el resultado entre muestras del mismo producto sometidas al mismo método de prueba?",
        answer: "Porque incluso fabricado con el mismo proceso, cada muestra presenta variaciones materiales. En productos metálicos la variación es pequeña; en sistemas ensamblados puede ser amplia. Por eso los estándares usan métodos estadísticos para determinar un valor representativo.",
    },
    {
        question: "¿Qué significa que un resultado de prueba tenga una confiabilidad de 99.87%?",
        answer: "Significa que el cálculo de 3 sigma garantiza que el 99.87% de los productos fabricados igualarán o superarán el valor marcado. Solo 0.13% (aproximadamente 1 en 1,000) podrían quedar por debajo — una base estadística muy sólida para el diseño de seguridad.",
    },
    {
        question: "¿Por qué la mayoría de fabricantes marcan el producto con el valor de 3 sigma en lugar del mínimo de desempeño?",
        answer: "Porque el valor de 3 sigma refleja el desempeño real del lote y permite cierta holgura cuando el producto va a recertificación. Si marcaran el mínimo y el lote de recertificación sale ligeramente más alto, no habría problema; pero si marcaran el máximo y el lote sale menor, fallarían la recertificación.",
    },
    {
        question: "¿Por qué una cuerda de rapel no tiene calificación de resistencia y un arnés tampoco?",
        answer: "Porque no todos los productos tienen un requisito de desempeño que exija prueba hasta la falla. Los arneses, cuerdas de descenso y dispositivos de aseguramiento se prueban con métodos que evalúan la función y la carga estática/dinámica, no necesariamente la resistencia máxima.",
    },
    {
        question: "¿Qué diferencia hay en cómo NFPA y ANSI Z359 determinan el resultado de la prueba de un mosquetón?",
        answer: "ANSI Z359 prueba 5 muestras y todas deben superar el mínimo; el producto se marca con ese mínimo. NFPA 1983 prueba 5 muestras y usa el cálculo de 3 sigma a partir de los resultados para determinar el valor marcado, que puede ser diferente al mínimo de desempeño.",
    },
    {
        question: "¿Qué hace especialmente severo el test dinámico de arneses en NFPA 1983?",
        answer: "Que la caída de 1 metro se hace con cable de acero, sin absorción de energía (a diferencia de cómo se usaría en un sistema real con cuerda elástica). Además se realizan dos caídas: una con la cabeza arriba y otra con la cabeza abajo.",
    },
    {
        question: "¿Por qué se usa cable de acero en lugar de cuerda para probar la resistencia de las poleas?",
        answer: "Para eliminar la variabilidad que añadirían distintas marcas y tipos de cuerda. Con cable de acero el resultado del test es constante e independiente del tipo de cuerda, lo que garantiza la repetibilidad y comparabilidad entre muestras.",
    },
];

export const equipmentTestingQuestions: Question[] = [
    {
        question: "¿Cuál es el objetivo terminal del capítulo sobre pruebas de equipo?",
        options: [
            { letter: "a", text: "Aprender a fabricar equipo de rescate certificado" },
            { letter: "b", text: "Describir las limitaciones de desempeño del equipo basándose en cómo es probado y certificado" },
            { letter: "c", text: "Identificar todas las regulaciones de OSHA aplicables al equipo" },
            { letter: "d", text: "Calcular manualmente la resistencia de un sistema de rescate completo" },
        ],
        correctAnswer: "b",
        explanation: "El objetivo terminal del capítulo es que el estudiante pueda describir las limitaciones de desempeño del equipo de rescate con cuerdas basándose en cómo ese equipo es probado y certificado.",
    },
    {
        question: "¿Por qué sorprende a algunos la variación entre muestras de prueba del mismo producto?",
        options: [
            { letter: "a", text: "Porque esperan que todos los productos fallen por la misma razón" },
            { letter: "b", text: "Porque la variación demuestra que el equipo es de mala calidad" },
            { letter: "c", text: "Porque incluso el mismo producto sometido al mismo método dará resultados distintos entre muestras" },
            { letter: "d", text: "Porque los laboratorios no usan equipos calibrados" },
        ],
        correctAnswer: "c",
        explanation: "Incluso un producto tan simple como una Placa Ancla sometida al mismo método de prueba en el mismo equipo dará resultados distintos para cada muestra. Algunos resultados son muy cercanos (productos metálicos) y otros muy variables (sistemas ensamblados).",
    },
    {
        question: "¿Cuántas muestras requiere el método de prueba de NFPA 1983 para los productos que se prueban hasta la falla?",
        options: [
            { letter: "a", text: "3 muestras" },
            { letter: "b", text: "10 muestras" },
            { letter: "c", text: "5 muestras" },
            { letter: "d", text: "2 muestras" },
        ],
        correctAnswer: "c",
        explanation: "Los métodos de prueba de NFPA 1983 requieren 5 muestras probadas hasta la falla, y luego aplican una fórmula estadística (3 sigma) para determinar el resultado.",
    },
    {
        question: "¿Qué representa el cálculo de 3 sigma en el contexto de las pruebas de NFPA 1983?",
        options: [
            { letter: "a", text: "La media aritmética de las 5 muestras probadas" },
            { letter: "b", text: "Tres desviaciones estándar restadas de la media, garantizando 99.87% de predictibilidad" },
            { letter: "c", text: "El resultado más alto de las 5 muestras" },
            { letter: "d", text: "El margen de seguridad mínimo requerido de 3:1" },
        ],
        correctAnswer: "b",
        explanation: "El cálculo de 3 sigma toma tres desviaciones estándar por debajo de la media de las 5 muestras. El resultado es que hay un 99.87% de predictibilidad de que el producto en mano igualará o superará ese valor.",
    },
    {
        question: "Si el resultado de 3 sigma supera el mínimo de desempeño requerido, ¿qué puede marcar el fabricante en el producto?",
        options: [
            { letter: "a", text: "Solo el resultado de 3 sigma, nunca el mínimo" },
            { letter: "b", text: "Solo el mínimo de desempeño, nunca el 3 sigma" },
            { letter: "c", text: "El mínimo de desempeño o el valor de 3 sigma, a elección del fabricante" },
            { letter: "d", text: "El promedio de los 5 resultados individuales" },
        ],
        correctAnswer: "c",
        explanation: "NFPA permite al fabricante marcar el producto con el requisito mínimo de desempeño o el valor de 3 sigma. La mayoría de fabricantes marca el valor de 3 sigma (generalmente redondeando hacia abajo) para tener margen en la recertificación.",
    },
    {
        question: "¿Qué método usa NFPA 1983 para probar la resistencia de camillas (litters) y trípodes?",
        options: [
            { letter: "a", text: "El mismo cálculo de 3 sigma con 5 muestras" },
            { letter: "b", text: "Una resistencia mínima al rompimiento (MBS) con 2 muestras, usando el resultado más bajo" },
            { letter: "c", text: "Solo prueba estática de 10 minutos" },
            { letter: "d", text: "Prueba dinámica de caída de 2 metros" },
        ],
        correctAnswer: "b",
        explanation: "Para camillas y trípodes, NFPA usa un método de resistencia mínima al rompimiento (MBS): se prueban dos muestras y el resultado más bajo de las dos se usa para determinar el aprobado o reprobado.",
    },
    {
        question: "¿Por qué un arnés NO tiene una calificación de resistencia marcada?",
        options: [
            { letter: "a", text: "Porque los arneses nunca se prueban" },
            { letter: "b", text: "Porque no todos los productos tienen un requisito de desempeño que exija prueba hasta la falla" },
            { letter: "c", text: "Porque OSHA lo prohíbe" },
            { letter: "d", text: "Porque la resistencia de los arneses es clasificada información" },
        ],
        correctAnswer: "b",
        explanation: "No todos los productos tienen un requisito de desempeño que exija prueba hasta la falla. Los arneses y dispositivos de descenso no se prueban de esa forma, por lo que no tienen una calificación de resistencia marcada.",
    },
    {
        question: "¿Cuántas posiciones de caída se prueban dinámicamente en un arnés bajo NFPA 1983?",
        options: [
            { letter: "a", text: "Solo una: con la cabeza arriba" },
            { letter: "b", text: "Tres: cabeza arriba, abajo y lateral" },
            { letter: "c", text: "Dos: cabeza arriba y cabeza abajo" },
            { letter: "d", text: "Una sola sin importar la posición" },
        ],
        correctAnswer: "c",
        explanation: "La prueba dinámica de arneses requiere dos caídas: una con la cabeza arriba y otra con la cabeza abajo. La caída es de 1 metro relativa al punto de unión, usando cable de acero (sin absorción de energía).",
    },
    {
        question: "¿Por qué el test dinámico de arneses en NFPA 1983 es particularmente severo?",
        options: [
            { letter: "a", text: "Porque la caída se realiza desde 10 metros" },
            { letter: "b", text: "Porque la caída usa cable de acero sin absorción de energía, a diferencia de un sistema real con cuerda" },
            { letter: "c", text: "Porque el maniquí de prueba pesa 300 kg" },
            { letter: "d", text: "Porque se realizan 10 caídas consecutivas sin inspección" },
        ],
        correctAnswer: "b",
        explanation: "El test de caída para arneses usa cable de acero en lugar de cuerda, eliminando la absorción de energía que tendría un sistema real. Una caída de 1 metro con cable de acero es considerablemente más severa que en condiciones reales de uso.",
    },
    {
        question: "¿Para qué sirve la prueba estática de arneses y cinturones?",
        options: [
            { letter: "a", text: "Para medir la eficiencia de las poleas integradas" },
            { letter: "b", text: "Para evaluar la función del dispositivo de descenso" },
            { letter: "c", text: "Para someter cada punto de unión a una fuerza prescrita durante un tiempo especificado" },
            { letter: "d", text: "Para verificar que el color del arnés no se decolora" },
        ],
        correctAnswer: "c",
        explanation: "En el test estático, cada muestra de arnés o cinturón se conecta en cada punto de unión y se le aplica una fuerza prescrita durante un número especificado de minutos. La carga varía según si el punto es de carga o de posicionamiento.",
    },
    {
        question: "¿Cómo se prueban los puntos diseñados para usarse en pares (como argollas D en hombros o caderas)?",
        options: [
            { letter: "a", text: "Se prueban individualmente uno por uno" },
            { letter: "b", text: "Solo se prueba uno de los dos, asumiendo que el otro es idéntico" },
            { letter: "c", text: "Se prueban como pares" },
            { letter: "d", text: "No se requiere prueba para puntos de posicionamiento" },
        ],
        correctAnswer: "c",
        explanation: "Los puntos de unión diseñados para usarse en pares, como las argollas D en los hombros o las caderas, se prueban como pares durante el test estático.",
    },
    {
        question: "¿Cómo se determina la resistencia de una polea en las pruebas de NFPA 1983?",
        options: [
            { letter: "a", text: "Usando la cuerda de rescate del fabricante" },
            { letter: "b", text: "Usando cable de acero alrededor de la roldana, para eliminar la variabilidad de distintos tipos de cuerda" },
            { letter: "c", text: "Midiendo el diámetro de la roldana" },
            { letter: "d", text: "Calculando teóricamente basándose en los materiales" },
        ],
        correctAnswer: "b",
        explanation: "Para probar la resistencia de una polea se usa cable de acero alrededor de la roldana, eliminando así la variabilidad que añadirían distintas marcas y tipos de cuerda. Esto garantiza repetibilidad y comparabilidad entre pruebas.",
    },
    {
        question: "¿Qué estándar, modificado por NFPA 1983, se usa para probar los dispositivos de aseguramiento (belay)?",
        options: [
            { letter: "a", text: "OSHA CFR 1910.146" },
            { letter: "b", text: "ASTM F2436" },
            { letter: "c", text: "CI 1800" },
            { letter: "d", text: "ANSI Z359.12" },
        ],
        correctAnswer: "b",
        explanation: "El estándar ASTM F2436 'Standard Test Method for Measuring the Performance of Synthetic Rope Rescue Belay Systems Using a Drop Test', modificado por NFPA 1983, se usa para probar los dispositivos de aseguramiento.",
    },
    {
        question: "¿Cuál es la masa de prueba para dispositivos de aseguramiento de 'Uso Técnico' según NFPA 1983?",
        options: [
            { letter: "a", text: "280 kg (617 lb)" },
            { letter: "b", text: "100 kg (220 lb)" },
            { letter: "c", text: "136 kg (300 lb)" },
            { letter: "d", text: "200 kg (440 lb)" },
        ],
        correctAnswer: "c",
        explanation: "Para dispositivos de aseguramiento de 'Uso Técnico', la masa de prueba es 136 kg (300 lb). Para 'Uso General' es 280 kg (617 lb). La masa se deja caer 60 cm en 3 m de cuerda de seguridad de vida.",
    },
    {
        question: "¿Cuál es el límite máximo de fuerza de impacto aceptable en la prueba de dispositivos de aseguramiento?",
        options: [
            { letter: "a", text: "5 kN (1,124 lbf)" },
            { letter: "b", text: "40 kN (8,992 lbf)" },
            { letter: "c", text: "15 kN (3,372 lbf)" },
            { letter: "d", text: "25 kN (5,620 lbf)" },
        ],
        correctAnswer: "c",
        explanation: "La fuerza de impacto resultante debe ser menor de 15 kN (3,372 lbf) y el dispositivo debe liberar la masa de prueba de forma controlada. La extensión máxima del sistema no debe superar 1 metro.",
    },
    {
        question: "¿Qué evalúa específicamente la 'Prueba de Manera de Función' aplicable a ascendedores, descensores y dispositivos de aseguramiento?",
        options: [
            { letter: "a", text: "El color del revestimiento y la calidad del acabado" },
            { letter: "b", text: "Si el dispositivo retiene una carga normal y tiene margen de seguridad suficiente cuando se sobrecarga" },
            { letter: "c", text: "La velocidad de descenso en condiciones normales" },
            { letter: "d", text: "El peso y dimensiones del dispositivo" },
        ],
        correctAnswer: "b",
        explanation: "La 'Prueba de Manera de Función' evalúa si el dispositivo retiene la carga bajo condiciones normales y si tiene suficiente margen de seguridad cuando es sobrecargado. Aplica a ascendedores, descensores, tomacuerdas y dispositivos de aseguramiento.",
    },
    {
        question: "¿Por qué los dispositivos de descenso no autobloqueantes (como el ocho o rack) deben ser 'amarrados' para su prueba tensil?",
        options: [
            { letter: "a", text: "Para simular su uso real en un rescate" },
            { letter: "b", text: "Porque están diseñados para deslizar cuando se sobrecarga, por lo que deben bloquearse para aplicar carga suficiente" },
            { letter: "c", text: "Porque de lo contrario la cuerda se daña" },
            { letter: "d", text: "Porque la norma NFPA lo exige solo para dispositivos de acero" },
        ],
        correctAnswer: "b",
        explanation: "Los dispositivos de descenso no autobloqueantes (como el Ocho o el Rack) están diseñados para deslizarse cuando se sobrecarga. Para la prueba tensil deben 'amarrarse' de alguna forma para poder aplicar la carga suficiente hasta crear una falla.",
    },
    {
        question: "¿Qué estándar del Cordage Institute referencia NFPA 1983 para las pruebas de cuerda de seguridad de vida?",
        options: [
            { letter: "a", text: "CI 1801" },
            { letter: "b", text: "CI 1803" },
            { letter: "c", text: "CI 1800" },
            { letter: "d", text: "CI 1750" },
        ],
        correctAnswer: "c",
        explanation: "NFPA 1983 referencia el estándar del Cordage Institute CI 1800 'Test Method for Life Safety Rope and Accessory Cords for Life Safety Applications' para el procedimiento de prueba de la cuerda.",
    },
    {
        question: "¿Qué rango de elongación debe cumplir una cuerda estática o de baja elongación al 10% de su resistencia al rompimiento?",
        options: [
            { letter: "a", text: "Entre 0% y 5%" },
            { letter: "b", text: "Entre 1% y 10%" },
            { letter: "c", text: "Entre 5% y 15%" },
            { letter: "d", text: "Menos del 1%" },
        ],
        correctAnswer: "b",
        explanation: "Para cumplir el requisito de cuerda de baja elongación o estática, la elongación al 10% de la resistencia al rompimiento debe estar entre 1% y 10%.",
    },
    {
        question: "¿Cómo prueba ANSI Z359 los mosquetones en comparación con NFPA 1983?",
        options: [
            { letter: "a", text: "ANSI Z359 usa solo 1 muestra; NFPA 1983 usa 10" },
            { letter: "b", text: "ANSI Z359 prueba 5 muestras y todas deben superar el mínimo, marcando ese mínimo; NFPA 1983 usa 3 sigma" },
            { letter: "c", text: "ANSI Z359 y NFPA 1983 usan exactamente el mismo método" },
            { letter: "d", text: "ANSI Z359 solo prueba la puerta abierta; NFPA 1983 solo el eje principal" },
        ],
        correctAnswer: "b",
        explanation: "ANSI Z359 prueba 5 muestras y todas deben superar el mínimo (5,000 lbf para eje principal); el mosquetón se marca con ese mínimo. NFPA 1983 prueba 5 muestras y usa el cálculo de 3 sigma para determinar el valor a marcar.",
    },
    {
        question: "¿Qué ejes se incluyen en la prueba de mosquetones de NFPA 1983?",
        options: [
            { letter: "a", text: "Solo el eje mayor" },
            { letter: "b", text: "Solo el eje mayor y con puerta abierta" },
            { letter: "c", text: "Eje mayor, eje menor y con puerta abierta" },
            { letter: "d", text: "Solo la resistencia al torque" },
        ],
        correctAnswer: "c",
        explanation: "Porque los mosquetones pueden moverse en un sistema de cuerdas y cargarse de distintas formas, el método de prueba de NFPA incluye eje mayor, eje menor y con puerta abierta.",
    },
];
