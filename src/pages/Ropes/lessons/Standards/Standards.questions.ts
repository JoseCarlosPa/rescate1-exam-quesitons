import { Question } from "../../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia principal entre un estándar y una regulación?",
        answer: "Un estándar es escrito por un comité bajo una organización dedicada a ello (como NFPA, ASTM o ASSP) mediante consenso voluntario. Una regulación es creada por legisladores y funcionarios de gobierno, y no cumplirla puede resultar en multas u otras penalidades legales. A menudo una regulación hace referencia a un estándar existente o lo adopta directamente.",
    },
    {
        question: "¿Por qué debería importarme conocer los estándares si no tienen la emoción de un rescate real?",
        answer: "Porque pueden tener respaldo legal con penalidades, porque quien cita un estándar puede estar equivocado o aplicándolo mal, y porque pueden usarse para determinar el nivel de cuidado o deber hacia terceros en una demanda por negligencia.",
    },
    {
        question: "¿Qué regulaciones de OSHA aplican al rescate?",
        answer: "CFR 1926 Subparte M (Protección contra Caídas), que exige que el empleador provea rescate rápido en caso de caída; CFR 1910.146 (Espacios Confinados con Permiso Requerido), con requisitos específicos para rescatistas; y CFR 1926.650 Subparte P (Excavaciones), el estándar federal para operaciones de zanjas y excavaciones, incluyendo rescate.",
    },
    {
        question: "¿NFPA 1983 es un documento de uso que dice qué equipo usar en un rescate?",
        answer: "No. NFPA 1983 es un estándar para fabricantes sobre diseño, desempeño, etiquetado y pruebas de equipo de seguridad de vida. No indica a un departamento o rescatista qué equipo usar — esa información está en NFPA 1500 y 1858.",
    },
    {
        question: "¿Qué es NFPA 1006 y por qué es tan relevante para este curso?",
        answer: "Es el estándar que establece los requisitos mínimos de desempeño laboral para rescatistas de nivel Conocimiento, Operaciones y Técnico, con 20 disciplinas incluyendo Rescate con Cuerdas. Es precisamente el estándar que estructura los objetivos de aprendizaje de cada lección de este curso.",
    },
    {
        question: "¿Qué diferencia hay entre NFPA 1670 y NFPA 1006?",
        answer: "NFPA 1670 es un documento de uso para organizaciones que planean ofrecer servicios de rescate técnico, definiendo qué capacidades debería tener la organización. NFPA 1006 define los requisitos de desempeño laboral para el rescatista individual. Un programa de entrenamiento puede cumplir las guías de NFPA 1670, pero un individuo no puede certificarse contra ese estándar, ya que fue escrito para la organización, no para la persona.",
    },
    {
        question: "¿Qué es el marcado CE y cuándo se ve en equipo de rescate?",
        answer: "El marcado CE es requerido por el Reglamento Europeo de Equipo de Protección Personal (administrado por CEN) para cierto equipo, particularmente el usado para trabajo en altura. Se ve comúnmente en equipo europeo de escalada recreativa, acceso industrial por cuerda y rescate.",
    },
];

export const standardsQuestions: Question[] = [
    {
        question: "¿Cuál es la diferencia fundamental entre un estándar y una regulación?",
        options: [
            { letter: "a", text: "No hay ninguna diferencia, son términos intercambiables" },
            { letter: "b", text: "El estándar es creado por comités mediante consenso voluntario; la regulación es creada por legisladores y su incumplimiento puede tener penalidades legales" },
            { letter: "c", text: "Los estándares siempre son gratuitos y las regulaciones siempre son de pago" },
            { letter: "d", text: "Solo las regulaciones pueden ser revisadas periódicamente" },
        ],
        correctAnswer: "b",
        explanation: "Los estándares son escritos por comités bajo organizaciones como NFPA, ASTM o ASSP mediante consenso voluntario. Las regulaciones son creadas por legisladores y funcionarios de gobierno, y su incumplimiento puede resultar en multas u otras penalidades.",
    },
    {
        question: "¿Por qué la regulación de espacios confinados de OSHA es especialmente relevante para el rescate?",
        options: [
            { letter: "a", text: "Porque fue la primera regulación de OSHA jamás escrita" },
            { letter: "b", text: "Porque se escribió específicamente porque casi el 60% de las muertes en incidentes de espacios confinados eran rescatistas" },
            { letter: "c", text: "Porque solo aplica a rescates con cuerdas, no a otros tipos" },
            { letter: "d", text: "Porque no tiene relación con la seguridad del rescatista" },
        ],
        correctAnswer: "b",
        explanation: "La regulación CFR 1910.146 para espacios confinados se escribió específicamente porque casi el 60% de las muertes en estos incidentes eran rescatistas, no las víctimas originales.",
    },
    {
        question: "¿Qué comité de ASTM International ha desarrollado más de 40 estándares relacionados con búsqueda y rescate?",
        options: [
            { letter: "a", text: "Comité F32 sobre Búsqueda y Rescate" },
            { letter: "b", text: "Comité E15 sobre Materiales de Construcción" },
            { letter: "c", text: "Comité D02 sobre Petróleo" },
            { letter: "d", text: "Comité A01 sobre Acero" },
        ],
        correctAnswer: "a",
        explanation: "El Comité F32 de ASTM International sobre Búsqueda y Rescate ha desarrollado más de 40 estándares relacionados, incluyendo varios directamente aplicables al rescate con cuerdas como F1740, F1768 y F2436.",
    },
    {
        question: "¿Cuál es el propósito principal de la norma ASTM F1740?",
        options: [
            { letter: "a", text: "Establecer señales de silbato para operaciones de rescate" },
            { letter: "b", text: "Servir como guía estándar para la inspección y retiro de cuerda kernmantle" },
            { letter: "c", text: "Definir las masas estándar para pruebas de sistemas de rescate" },
            { letter: "d", text: "Certificar camillas tipo canasta" },
        ],
        correctAnswer: "b",
        explanation: "ASTM F1740 es la 'Guía Estándar para la Inspección de Cuerda Kernmantle de Nylon, Poliéster o Mezcla', referenciada por la mayoría de los fabricantes de cuerda y organizaciones de entrenamiento como el estándar de inspección y retiro de cuerda de rescate.",
    },
    {
        question: "¿Qué organización publica los estándares CI 1800, CI 1801 y CI 1803 sobre cuerda de seguridad de vida?",
        options: [
            { letter: "a", text: "OSHA" },
            { letter: "b", text: "El Cordage Institute (Instituto de Cordelería)" },
            { letter: "c", text: "ANSI" },
            { letter: "d", text: "ITRA" },
        ],
        correctAnswer: "b",
        explanation: "El Cordage Institute publica estos estándares de fabricante sobre cuerda de seguridad de vida y cordinos accesorios; CI 1800 es referenciado directamente por NFPA 1983.",
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre NFPA 1983 es correcta?",
        options: [
            { letter: "a", text: "Es un documento de uso que indica qué equipo usar en cada rescate" },
            { letter: "b", text: "Exige que todos los departamentos usen mosquetones de acero" },
            { letter: "c", text: "Es un estándar para fabricantes sobre diseño, desempeño, etiquetado y pruebas de equipo de seguridad de vida" },
            { letter: "d", text: "Exige un margen de seguridad de 15:1 para todo el equipo" },
        ],
        correctAnswer: "c",
        explanation: "NFPA 1983 es un estándar dirigido a fabricantes, no un documento de uso. No exige mosquetones de acero ni un margen de seguridad de 15:1 — estos son malentendidos comunes que persisten en la comunidad de rescate.",
    },
    {
        question: "¿En qué documentos se debe buscar información sobre qué equipo usar realmente en una operación de rescate?",
        options: [
            { letter: "a", text: "NFPA 1983 exclusivamente" },
            { letter: "b", text: "NFPA 1500 y NFPA 1858" },
            { letter: "c", text: "Solo en el manual del fabricante" },
            { letter: "d", text: "No existe ningún documento que indique esto" },
        ],
        correctAnswer: "b",
        explanation: "NFPA 1983 no es un documento de uso; la información sobre qué equipo usar en operaciones reales se encuentra en NFPA 1500 (programa de seguridad ocupacional) y NFPA 1858 (selección, cuidado y mantenimiento).",
    },
    {
        question: "¿Qué requiere NFPA 1983 respecto a la certificación de productos?",
        options: [
            { letter: "a", text: "Que el fabricante se autocertifique" },
            { letter: "b", text: "Que una organización de certificación independiente etiquete el producto, y que el nombre NFPA no se use en productos sin certificación completa" },
            { letter: "c", text: "Que solo se certifique en Estados Unidos" },
            { letter: "d", text: "No requiere ninguna certificación" },
        ],
        correctAnswer: "b",
        explanation: "Un fabricante no puede autocertificar que un producto cumple con NFPA 1983 — se requiere una organización de certificación independiente, y el nombre NFPA no puede usarse en productos que no cumplan completamente con el estándar.",
    },
    {
        question: "¿Qué disciplina específica de rescate técnico se incluye dentro de las 20 disciplinas de NFPA 1006?",
        options: [
            { letter: "a", text: "Rescate con Cuerdas (Rope Rescue)" },
            { letter: "b", text: "Solo rescate acuático" },
            { letter: "c", text: "Solo rescate en incendios estructurales" },
            { letter: "d", text: "NFPA 1006 no incluye disciplinas específicas" },
        ],
        correctAnswer: "a",
        explanation: "NFPA 1006 provee los requisitos mínimos de desempeño laboral para rescatistas de nivel Conocimiento, Operaciones y Técnico, e incluye 20 disciplinas, una de las cuales es específicamente Rescate con Cuerdas.",
    },
    {
        question: "¿Por qué un individuo NO puede certificarse formalmente contra NFPA 1670, aunque su entrenamiento cubra sus guías?",
        options: [
            { letter: "a", text: "Porque NFPA 1670 fue escrito para definir los requisitos de capacidad de la organización, no del individuo" },
            { letter: "b", text: "Porque NFPA 1670 ya fue descontinuado" },
            { letter: "c", text: "Porque solo aplica a bomberos voluntarios" },
            { letter: "d", text: "Porque requiere un examen separado de ANSI" },
        ],
        correctAnswer: "a",
        explanation: "NFPA 1670 es un documento de uso escrito para definir las capacidades que debería tener una organización, no un estándar de certificación individual — por eso un programa de entrenamiento puede cubrir sus guías, pero un individuo no se certifica directamente contra él.",
    },
    {
        question: "¿Qué papel juega ANSI (American National Standards Institute) en el proceso de estandarización?",
        options: [
            { letter: "a", text: "Escribe directamente todos los estándares de rescate" },
            { letter: "b", text: "Supervisa y acredita a otras organizaciones que desarrollan estándares, asegurando un proceso abierto a comentarios públicos" },
            { letter: "c", text: "Es una agencia exclusivamente europea" },
            { letter: "d", text: "Solo regula estándares eléctricos" },
        ],
        correctAnswer: "b",
        explanation: "ANSI supervisa y acredita a otras organizaciones (como NFPA y ASSP) que desarrollan estándares, verificando que el proceso permita comentario público y ayudando a garantizar que exista un solo estándar reconocido por tema.",
    },
    {
        question: "¿Qué marcado se busca en equipo de rescate importado de Europa, particularmente para trabajo en altura?",
        options: [
            { letter: "a", text: "El marcado CE, administrado por CEN" },
            { letter: "b", text: "El sello OSHA" },
            { letter: "c", text: "La certificación NFPA exclusivamente" },
            { letter: "d", text: "El sello ASTM" },
        ],
        correctAnswer: "a",
        explanation: "El marcado CE es exigido por el Reglamento Europeo de Equipo de Protección Personal, administrado por el Comité Européen de Normalisation (CEN), particularmente para equipo de trabajo en altura y escalada recreativa.",
    },
    {
        question: "¿Qué tres estándares NFPA se planea combinar en un nuevo estándar unificado llamado NFPA 2500?",
        options: [
            { letter: "a", text: "NFPA 1006, 1500 y 1858" },
            { letter: "b", text: "NFPA 1670, 1983 y 1858" },
            { letter: "c", text: "NFPA 1006, 1670 y 1983" },
            { letter: "d", text: "NFPA 1500, 1670 y 1006" },
        ],
        correctAnswer: "b",
        explanation: "Desde marzo de 2020, NFPA planea combinar los estándares 1670 (operaciones y entrenamiento), 1983 (equipo de seguridad de vida) y 1858 (selección, cuidado y mantenimiento) en un nuevo estándar unificado: NFPA 2500.",
    },
];
