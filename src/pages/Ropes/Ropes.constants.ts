import {
    RopeKnot,
    RopeType,
    RescueEquipment,
    RescueTechnique,
    RopeModule,
    FAQ,
    RopeQuestion
} from './Rope.types';

// ==================== MÓDULOS DEL CURSO ====================
export const ROPE_MODULES: RopeModule[] = [
    {
        id: 'introduction',
        title: 'Introducción al Rescate con Cuerdas',
        description: 'Fundamentos, historia y principios básicos del rescate técnico con cuerdas',
        icon: '📚',
        route: '/rope-rescue/intro',
        topics: ['Historia del rescate', 'Terminología básica', 'Principios de seguridad', 'Normativas'],
        duration: '2 horas',
        difficulty: 'beginner'
    },
    {
        id: 'equipment',
        title: 'Equipamiento y Materiales',
        description: 'Conocimiento detallado de cuerdas, mosquetones, arneses y equipo especializado',
        icon: '🧗',
        route: '/rope-rescue/equipment',
        topics: ['Tipos de cuerdas', 'Mosquetones y conectores', 'Arneses', 'Dispositivos de descenso'],
        duration: '4 horas',
        difficulty: 'beginner'
    },
    {
        id: 'knots',
        title: 'Nudos y Amarres',
        description: 'Dominio de nudos esenciales para operaciones de rescate',
        icon: '🪢',
        route: '/rope-rescue/knots',
        topics: ['Nudos de anclaje', 'Nudos de unión', 'Nudos de fricción', 'Nudos de seguridad'],
        duration: '6 horas',
        difficulty: 'intermediate'
    },
    {
        id: 'anchors',
        title: 'Sistemas de Anclaje',
        description: 'Construcción y evaluación de sistemas de anclaje seguros',
        icon: '⚓',
        route: '/rope-rescue/anchors',
        topics: ['Anclajes naturales', 'Anclajes artificiales', 'Sistemas redundantes', 'Cálculo de fuerzas'],
        duration: '4 horas',
        difficulty: 'intermediate'
    },
    {
        id: 'rappel',
        title: 'Técnicas de Descenso (Rapel)',
        description: 'Procedimientos seguros para descenso controlado',
        icon: '⬇️',
        route: '/rope-rescue/rappel',
        topics: ['Rapel básico', 'Rapel con paciente', 'Rapel de emergencia', 'Autorescate'],
        duration: '4 horas',
        difficulty: 'intermediate'
    },
    {
        id: 'ascent',
        title: 'Técnicas de Ascenso',
        description: 'Métodos de ascenso por cuerda fija',
        icon: '⬆️',
        route: '/rope-rescue/ascent',
        topics: ['Ascenso con bloqueadores', 'Técnica de prusik', 'Cambio de sistema', 'Paso de nudos'],
        duration: '4 horas',
        difficulty: 'intermediate'
    },
    {
        id: 'hauling',
        title: 'Sistemas de Izado',
        description: 'Polipastos y sistemas mecánicos de ventaja',
        icon: '🔄',
        route: '/rope-rescue/hauling',
        topics: ['Ventaja mecánica', 'Polipasto 3:1', 'Polipasto 5:1', 'Sistemas complejos'],
        duration: '6 horas',
        difficulty: 'advanced'
    },
    {
        id: 'patient-care',
        title: 'Empaquetamiento de Paciente',
        description: 'Técnicas para asegurar y transportar víctimas',
        icon: '🏥',
        route: '/rope-rescue/patient',
        topics: ['Camillas de rescate', 'Arnés de rescate', 'Inmovilización', 'Comunicación'],
        duration: '4 horas',
        difficulty: 'intermediate'
    },
    {
        id: 'scenarios',
        title: 'Escenarios de Rescate',
        description: 'Aplicación práctica en diferentes situaciones',
        icon: '🚨',
        route: '/rope-rescue/scenarios',
        topics: ['Rescate en altura', 'Espacios confinados', 'Rescate acuático', 'Rescate en estructuras'],
        duration: '8 horas',
        difficulty: 'advanced'
    }
];

// ==================== TIPOS DE CUERDAS ====================
export const ROPE_TYPES: RopeType[] = [
    {
        id: 'static-rope',
        name: 'Cuerda Estática',
        type: 'static',
        diameter: '10-13 mm',
        breakingStrength: '22-35 kN',
        elongation: '< 5%',
        uses: [
            'Trabajos en altura',
            'Rescate técnico',
            'Espeleología',
            'Descenso de carga',
            'Sistemas de anclaje'
        ],
        characteristics: [
            'Mínimo estiramiento',
            'Alta resistencia a la abrasión',
            'Ideal para sistemas de poleas',
            'No absorbe impactos',
            'Funda de poliéster resistente'
        ]
    },
    {
        id: 'dynamic-rope',
        name: 'Cuerda Dinámica',
        type: 'dynamic',
        diameter: '9-11 mm',
        breakingStrength: '18-25 kN',
        elongation: '25-35%',
        uses: [
            'Escalada deportiva',
            'Alpinismo',
            'Aseguramiento de líder',
            'Situaciones con riesgo de caída'
        ],
        characteristics: [
            'Absorbe energía de impacto',
            'Reduce fuerza de choque',
            'Mayor elasticidad',
            'Protege al escalador en caídas',
            'Factor de caída importante'
        ]
    },
    {
        id: 'semi-static',
        name: 'Cuerda Semi-estática',
        type: 'static',
        diameter: '9-12 mm',
        breakingStrength: '20-30 kN',
        elongation: '3-5%',
        uses: [
            'Rescate en general',
            'Barranquismo',
            'Trabajo industrial',
            'Tirolinas'
        ],
        characteristics: [
            'Combinación de propiedades',
            'Versatilidad',
            'Buena durabilidad',
            'Manejabilidad media'
        ]
    },
    {
        id: 'accessory-cord',
        name: 'Cordino Auxiliar',
        type: 'accessory',
        diameter: '5-8 mm',
        breakingStrength: '5-15 kN',
        elongation: 'Variable',
        uses: [
            'Nudos prusik',
            'Anillos de cinta',
            'Construcción de anclajes',
            'Backup de sistemas'
        ],
        characteristics: [
            'Complemento de cuerdas principales',
            'Diferentes materiales disponibles',
            'Alta resistencia para su diámetro',
            'Esencial en sistemas de seguridad'
        ]
    }
];

// ==================== NUDOS ====================
export const ESSENTIAL_KNOTS: RopeKnot[] = [
    {
        id: 'figure-eight',
        name: 'Figure Eight',
        spanishName: 'Ocho Simple',
        category: 'stopper',
        difficulty: 'beginner',
        uses: [
            'Nudo de tope básico',
            'Base para otros nudos',
            'Prevenir deslizamiento'
        ],
        steps: [
            'Formar una gaza con la cuerda',
            'Pasar el chicote por detrás del firme',
            'Introducir el chicote por la gaza',
            'Ajustar el nudo dejando un chicote de al menos 15cm'
        ],
        tips: [
            'Mantener el nudo ordenado sin cruces',
            'Verificar que quede simétrico',
            'Dejar suficiente cola'
        ],
        safetyNotes: [
            'Inspeccionar visualmente antes de cargar',
            'Mínimo 15cm de cola',
            'No usar bajo carga dinámica solo'
        ]
    },
    {
        id: 'figure-eight-follow-through',
        name: 'Figure Eight Follow Through',
        spanishName: 'Ocho Doble / Ocho por Chicote',
        category: 'loop',
        difficulty: 'beginner',
        uses: [
            'Encordamiento del arnés',
            'Anclaje a punto fijo',
            'Conexión principal en escalada',
            'Sistemas de rescate'
        ],
        steps: [
            'Hacer un ocho simple dejando suficiente cuerda',
            'Pasar el chicote por el punto de anclaje o arnés',
            'Seguir el camino del ocho en sentido inverso',
            'Verificar que las cuerdas queden paralelas',
            'Ajustar y dejar al menos 15cm de cola',
            'Opcional: hacer nudo de seguridad'
        ],
        tips: [
            'Las líneas deben quedar paralelas sin cruces',
            'Practicar hasta hacerlo con los ojos cerrados',
            'Verificar siempre con compañero'
        ],
        safetyNotes: [
            'Es el nudo más seguro para encordamiento',
            'Fácil de verificar visualmente',
            'Resistencia aproximada del 75-80% de la cuerda',
            'Añadir nudo de seguridad en situaciones críticas'
        ]
    },
    {
        id: 'figure-eight-on-bight',
        name: 'Figure Eight on a Bight',
        spanishName: 'Ocho sobre Seno',
        category: 'loop',
        difficulty: 'beginner',
        uses: [
            'Crear gaza sin acceso al extremo',
            'Punto de anclaje rápido',
            'Conexión a mosquetones',
            'Sistemas de rescate'
        ],
        steps: [
            'Doblar la cuerda formando un seno',
            'Formar un ocho con el seno doblado',
            'Pasar el bucle por la gaza superior',
            'Ajustar el nudo'
        ],
        tips: [
            'Ideal cuando no hay acceso a los extremos',
            'Más rápido que el ocho por chicote',
            'Verificar tamaño de la gaza resultante'
        ],
        safetyNotes: [
            'Asegurar que quede bien vestido',
            'No deben cruzarse las cuerdas',
            'Resistencia similar al ocho doble'
        ]
    },
    {
        id: 'double-fishermans',
        name: "Double Fisherman's Knot",
        spanishName: 'Doble Pescador',
        category: 'bend',
        difficulty: 'intermediate',
        uses: [
            'Unir dos cuerdas del mismo diámetro',
            'Crear anillos de cordino (prusik)',
            'Uniones permanentes',
            'Backup de otros nudos'
        ],
        steps: [
            'Colocar las cuerdas paralelas en sentidos opuestos',
            'Con una cuerda, dar dos vueltas alrededor de la otra',
            'Pasar el extremo por dentro de las vueltas',
            'Repetir con la otra cuerda en sentido contrario',
            'Tensar ambos nudos hasta que se junten',
            'Verificar las "X" en ambos lados'
        ],
        tips: [
            'Debe verse una "X" en cada lado del nudo',
            'Tensar bien antes de usar',
            'Marcar los chicotes para verificar deslizamiento'
        ],
        safetyNotes: [
            'Uno de los nudos más seguros para uniones',
            'Difícil de deshacer después de cargar',
            'Dejar al menos 10cm de cola',
            'Inspeccionar regularmente en uso prolongado'
        ]
    },
    {
        id: 'prusik',
        name: 'Prusik Knot',
        spanishName: 'Nudo Prusik',
        category: 'friction',
        difficulty: 'intermediate',
        uses: [
            'Ascenso por cuerda fija',
            'Sistema autobloqueante',
            'Backup de rapel',
            'Sistemas de rescate'
        ],
        steps: [
            'Usar cordino más delgado que la cuerda principal',
            'Formar una gaza alrededor de la cuerda principal',
            'Pasar el anillo por dentro de sí mismo',
            'Dar 3 vueltas mínimo (más en cuerdas mojadas)',
            'Tensar y ajustar las vueltas'
        ],
        tips: [
            'El cordino debe ser 60-70% del diámetro de la cuerda',
            'Más vueltas = más fricción',
            'Mantener las vueltas ordenadas'
        ],
        safetyNotes: [
            'No funciona bien con cuerdas del mismo diámetro',
            'Puede deslizar en cuerdas mojadas o heladas',
            'Nunca cargar de forma dinámica',
            'Verificar que agarre antes de confiar peso'
        ]
    },
    {
        id: 'bowline',
        name: 'Bowline',
        spanishName: 'As de Guía / Bolina',
        category: 'loop',
        difficulty: 'intermediate',
        uses: [
            'Crear gaza no corrediza',
            'Anclaje rápido',
            'Rescate acuático',
            'Cuando se necesita deshacer fácilmente'
        ],
        steps: [
            'Formar una pequeña gaza ("el pozo")',
            'El chicote "sale del pozo"',
            'Pasa alrededor del firme ("el árbol")',
            'El chicote "vuelve a entrar al pozo"',
            'Ajustar y asegurar con nudo de tope'
        ],
        tips: [
            'Memorizar: "La serpiente sale del pozo, rodea el árbol y vuelve al pozo"',
            'Practicar con una sola mano',
            'Siempre añadir nudo de seguridad'
        ],
        safetyNotes: [
            'SIEMPRE usar con nudo de seguridad',
            'Puede aflojarse sin carga',
            'No recomendado como nudo principal en escalada',
            'Bueno para cargas en una sola dirección'
        ]
    },
    {
        id: 'clove-hitch',
        name: 'Clove Hitch',
        spanishName: 'Ballestrinque',
        category: 'hitch',
        difficulty: 'beginner',
        uses: [
            'Anclaje temporal ajustable',
            'Autoaseguramiento en reunión',
            'Construcción de anclajes',
            'Fijar cuerda a poste/objeto'
        ],
        steps: [
            'Formar dos gazas en la misma dirección',
            'Superponer la segunda sobre la primera',
            'Pasar por el mosquetón o poste',
            'Ajustar tensando ambos cabos'
        ],
        tips: [
            'Fácil de ajustar longitud',
            'Se puede hacer con una mano',
            'Ideal para ajustes rápidos en reuniones'
        ],
        safetyNotes: [
            'Puede deslizar bajo carga intermitente',
            'Requiere tensión constante para ser seguro',
            'No usar como único punto de seguridad',
            'Complementar con otro nudo si es crítico'
        ]
    },
    {
        id: 'munter-hitch',
        name: 'Munter Hitch',
        spanishName: 'Nudo Dinámico / UIAA',
        category: 'friction',
        difficulty: 'intermediate',
        uses: [
            'Aseguramiento de emergencia',
            'Descenso controlado sin dispositivo',
            'Sistema de backup',
            'Cuando no hay dispositivo de freno'
        ],
        steps: [
            'Formar una gaza',
            'Girar la gaza sobre sí misma',
            'Clipar ambas partes de la cuerda',
            'Verificar que el nudo pueda "voltear"'
        ],
        tips: [
            'Funciona en ambas direcciones',
            'Puede rizar la cuerda',
            'Esencial como técnica de emergencia'
        ],
        safetyNotes: [
            'Usar solo con mosquetones HMS (pera)',
            'Genera calor - cuidado con cuerdas finas',
            'Riza la cuerda con el uso',
            'Dominar antes de situaciones reales'
        ]
    },
    {
        id: 'alpine-butterfly',
        name: 'Alpine Butterfly',
        spanishName: 'Mariposa Alpina',
        category: 'loop',
        difficulty: 'intermediate',
        uses: [
            'Gaza en medio de la cuerda',
            'Aislar sección dañada',
            'Punto de anclaje intermedio',
            'Escalada en cordada'
        ],
        steps: [
            'Hacer tres vueltas alrededor de la mano',
            'Pasar la vuelta central sobre las otras',
            'Tirar de esa vuelta por debajo',
            'Ajustar tirando de la gaza y los extremos'
        ],
        tips: [
            'Carga multidireccional',
            'Fácil de deshacer después de cargar',
            'Muy útil para aislar daños en la cuerda'
        ],
        safetyNotes: [
            'Excelente resistencia en todas direcciones',
            'Uno de los nudos más versátiles',
            'Verificar vestido correcto'
        ]
    },
    {
        id: 'girth-hitch',
        name: 'Girth Hitch',
        spanishName: 'Nudo de Alondra',
        category: 'hitch',
        difficulty: 'beginner',
        uses: [
            'Conectar cintas al arnés',
            'Unión rápida a puntos de anclaje',
            'Conexión de equipo'
        ],
        steps: [
            'Pasar el anillo por el punto de anclaje',
            'Pasar un extremo por dentro del otro',
            'Ajustar'
        ],
        tips: [
            'Muy simple y rápido',
            'Reduce resistencia de la cinta significativamente',
            'Solo para aplicaciones específicas'
        ],
        safetyNotes: [
            'Reduce la resistencia de la cinta hasta un 50%',
            'No usar cinta sobre cinta (puede fundir)',
            'Verificar orientación correcta'
        ]
    },
    {
        id: 'water-knot',
        name: 'Water Knot',
        spanishName: 'Nudo de Cinta / Nudo de Agua',
        category: 'bend',
        difficulty: 'beginner',
        uses: [
            'Unir cintas planas',
            'Crear anillos de cinta',
            'Extensiones de anclaje'
        ],
        steps: [
            'Hacer un nudo simple en una cinta',
            'Con la otra cinta, seguir el nudo en reversa',
            'Las cintas deben quedar planas y paralelas',
            'Tensar bien y dejar al menos 8cm de cola'
        ],
        tips: [
            'Las cintas deben quedar perfectamente planas',
            'Revisar periódicamente - tiende a aflojarse',
            'Marcar las colas para detectar deslizamiento'
        ],
        safetyNotes: [
            'Inspeccionar antes de cada uso',
            'Se afloja con el tiempo - verificar colas',
            'Mínimo 8cm de cola',
            'No usar con cuerdas, solo cintas'
        ]
    },
    {
        id: 'overhand-knot',
        name: 'Overhand Knot / Safety Knot',
        spanishName: 'Nudo Simple / Nudo de Seguridad',
        category: 'stopper',
        difficulty: 'beginner',
        uses: [
            'Nudo de seguridad en otros nudos',
            'Nudo de tope en extremos de cuerda',
            'Evitar que la cuerda pase por un dispositivo',
            'Bloquear el extremo del rappel'
        ],
        steps: [
            'Formar una gaza con la cuerda',
            'Pasar el extremo libre por la gaza',
            'Ajustar el nudo apretando'
        ],
        tips: [
            'Es el componente base de muchos nudos complejos',
            'Dejar siempre suficiente cola para verificarlo',
            'Se puede hacer con guantes puestos fácilmente'
        ],
        safetyNotes: [
            'No es un nudo principal de carga por sí solo',
            'Muy difícil de desatar después de cargar',
            'Siempre dejar un mínimo de 10 cm de cola',
            'Verificar que quede bien cerrado antes de cargar'
        ]
    },
    {
        id: 'inline-figure-eight',
        name: 'Inline Figure Eight / Figure Eight on a Bight (directional)',
        spanishName: 'Ocho en Línea (Gaza Direccional)',
        category: 'loop',
        difficulty: 'intermediate',
        uses: [
            'Gaza direccional en medio de la cuerda',
            'Sistemas de anclaje en línea',
            'Reducir longitud de cuerda manteniendo gaza',
            'Punto de conexión intermedio en sistemas de izado'
        ],
        steps: [
            'Trabajar con el seno (parte media) de la cuerda',
            'Doblar el seno formando un bucle largo',
            'Dar una vuelta completa con el bucle',
            'Pasar el extremo del bucle por la primera gaza',
            'Ajustar el tamaño de la gaza resultante',
            'Tensar para que quede compacto'
        ],
        tips: [
            'La carga debe ir siempre en la dirección del nudo',
            'Carga bidireccional reduce significativamente su resistencia',
            'Ideal para puntos de paso en líneas de vida horizontales'
        ],
        safetyNotes: [
            'Solo cargar en la dirección correcta — unidireccional',
            'Verificar orientación antes de cargar',
            'Inspeccionar que el nudo quede bien vestido',
            'No sustituye al Mariposa Alpina en cargas multidireccionales'
        ]
    },
    {
        id: 'tensionless-hitch',
        name: 'Tensionless Hitch',
        spanishName: 'Vuelta Tensionless / Anclaje Tensionless',
        category: 'anchorage',
        difficulty: 'beginner',
        uses: [
            'Anclaje directo a árbol o poste',
            'Conservar máxima resistencia de la cuerda',
            'Sistemas de rescate de alta carga',
            'Cuando se necesita anclar rápido sin perder resistencia'
        ],
        steps: [
            'Pasar la cuerda alrededor de un árbol o anclaje sólido',
            'Dar mínimo 3-4 vueltas completas alrededor del objeto',
            'Asegurar el extremo libre con un mosquetón conectado a la cuerda',
            'El mosquetón va al lado donde viene la carga (no al firme)',
            'No hay nudo — las vueltas hacen la fricción'
        ],
        tips: [
            'El objeto de anclaje debe tener al menos 20 cm de diámetro',
            'Más vueltas = más fricción pero más resistencia conservada',
            'Es el anclaje que más resistencia conserva (~100%)'
        ],
        safetyNotes: [
            'El árbol/poste debe ser completamente sólido',
            'Las vueltas no deben superponerse desigualmente',
            'El mosquetón debe quedar fuera de la línea de carga',
            'Verificar que ninguna vuelta pueda deslizarse sobre otra'
        ]
    },
    {
        id: 'radium-release-hitch',
        name: 'Radium Release Hitch',
        spanishName: 'Hitch de Liberación Rádium',
        category: 'hitch',
        difficulty: 'advanced',
        uses: [
            'Liberar un sistema de anclaje bajo carga',
            'Transición entre sistemas con víctima cargada',
            'Emergencias donde hay que soltar carga controladamente',
            'Sistemas de rescate de alta complejidad'
        ],
        steps: [
            'Pasar la cuerda por un mosquetón en el anclaje',
            'Hacer una vuelta de mula (Mule Hitch) con el extremo libre',
            'Asegurar con varios nudos simples para bloquear',
            'El extremo libre queda bloqueado pero accesible',
            'Para soltar: deshacer los nudos de seguridad uno por uno',
            'Soltar la vuelta de mula de forma controlada'
        ],
        tips: [
            'Practicar MUCHO antes de usar en situación real',
            'Siempre tener control del extremo libre antes de soltar',
            'Comunicar claramente con el equipo antes de liberar'
        ],
        safetyNotes: [
            'Solo personal entrenado debe usar este sistema',
            'NUNCA soltar sin comunicación previa con el equipo',
            'Siempre mantener control de la cuerda durante la liberación',
            'Practicar primero sin carga real hasta dominarlo completamente'
        ]
    },
    {
        id: 'load-releasing-hitch',
        name: 'Load-Releasing Hitch (Münter Mule Overhand)',
        spanishName: 'Hitch de Liberación de Carga (Mula-Münter)',
        category: 'friction',
        difficulty: 'advanced',
        uses: [
            'Liberar carga atrapada bajo tensión',
            'Cambio de sistema en rapel con paciente',
            'Emergencia si el rescatista queda incapacitado',
            'Transición entre sistemas de izado y descenso'
        ],
        steps: [
            'Con el nudo Münter activo en mosquetón HMS',
            'Pasar el extremo libre por encima del Münter',
            'Hacer una vuelta de mula (bight a través del seno)',
            'Asegurar con nudo simple sobre todo el conjunto',
            'Para liberar: quitar el nudo simple y soltar la mula',
            'El Münter vuelve a funcionar como descensor'
        ],
        tips: [
            'Requiere un mosquetón HMS de tamaño adecuado',
            'El nudo de seguridad es crítico para no soltar accidentalmente',
            'Este nudo es fundamental en el currículo NFPA 1006 Nivel 2'
        ],
        safetyNotes: [
            'Solo para personal certificado en rescate técnico',
            'Practicar extensivamente antes de operaciones reales',
            'Verificar que el Münter quede en posición de frenado',
            'La liberación debe ser gradual y controlada'
        ]
    },
    {
        id: 'mariner-hitch',
        name: "Mariner's Hitch",
        spanishName: 'Nudo Marinero / Hitch Marinero',
        category: 'hitch',
        difficulty: 'advanced',
        uses: [
            'Extensión ajustable de sistemas de anclaje',
            'Conectar un sistema a otro con posibilidad de ajuste',
            'Rescate cuando se necesita longitud variable',
            'Alternativa al cordino prusik en algunos sistemas'
        ],
        steps: [
            'Con un anillo de cordino, pasar por el mosquetón de anclaje',
            'Dar vueltas alrededor del mosquetón de trabajo',
            'Asegurar con un nudo de seguridad al final',
            'El número de vueltas determina la longitud',
            'Para ajustar: cambiar el número de vueltas'
        ],
        tips: [
            'Permite ajustar longitud sin quitar la carga',
            'Muy usado en sistemas de altura donde se cambia de nivel',
            'Más seguro con abundantes vueltas al mosquetón'
        ],
        safetyNotes: [
            'Solo para personal entrenado NFPA 1006 Nivel 2+',
            'Verificar que todas las vueltas queden ordenadas',
            'El nudo de seguridad es obligatorio',
            'No cargar hasta verificar que todas las vueltas sean correctas'
        ]
    }
];

// ==================== EQUIPO DE RESCATE ====================
export const RESCUE_EQUIPMENT: RescueEquipment[] = [
    {
        id: 'full-body-harness',
        name: 'Arnés de Cuerpo Completo',
        category: 'harness',
        description: 'Arnés que distribuye la fuerza en todo el cuerpo, ideal para rescate técnico y trabajo en altura',
        uses: [
            'Rescate técnico',
            'Trabajo industrial en altura',
            'Evacuación de víctimas',
            'Acceso por cuerda'
        ],
        safetyConsiderations: [
            'Verificar todas las costuras antes de cada uso',
            'Ajustar correctamente en pecho, piernas y hombros',
            'Inspeccionar hebillas y puntos de conexión',
            'Retirar después de una caída significativa'
        ],
        maintenance: [
            'Almacenar en lugar seco y oscuro',
            'Limpiar con agua y jabón neutro',
            'Inspección visual antes de cada uso',
            'Revisión profesional anual',
            'Vida útil típica: 5-10 años según fabricante'
        ]
    },
    {
        id: 'sit-harness',
        name: 'Arnés de Asiento',
        category: 'harness',
        description: 'Arnés de cintura y piernas para escalada y trabajo en posición sentada',
        uses: [
            'Escalada deportiva',
            'Trabajos de posicionamiento',
            'Descenso en rapel',
            'Acceso con cuerda'
        ],
        safetyConsiderations: [
            'No adecuado si hay riesgo de inversión',
            'Verificar bucle de encordamiento',
            'Comprobar estado de perneras',
            'Ajuste correcto crítico para seguridad'
        ],
        maintenance: [
            'Evitar contacto con químicos',
            'No exponer a luz solar directa prolongada',
            'Inspeccionar costuras y tejido',
            'Seguir indicaciones del fabricante'
        ]
    },
    {
        id: 'locking-carabiner',
        name: 'Mosquetón de Seguridad',
        category: 'carabiner',
        description: 'Mosquetón con sistema de cierre de seguridad para conexiones críticas',
        uses: [
            'Conexiones principales',
            'Anclajes de seguridad',
            'Sistemas de aseguramiento',
            'Conexión de dispositivos'
        ],
        safetyConsiderations: [
            'Verificar que el seguro esté cerrado',
            'Orientar correctamente para la carga',
            'Evitar carga lateral',
            'No usar si tiene muescas o deformaciones'
        ],
        maintenance: [
            'Lubricar el gatillo periódicamente',
            'Limpiar de tierra y arena',
            'Inspeccionar desgaste del gatillo',
            'Retirar si presenta daños visibles'
        ]
    },
    {
        id: 'descender-8',
        name: 'Ocho Descensor',
        category: 'descender',
        description: 'Dispositivo clásico de descenso en forma de 8',
        uses: [
            'Descenso en rapel',
            'Descenso de cargas',
            'Sistemas de rescate simples'
        ],
        safetyConsiderations: [
            'Calienta con uso prolongado',
            'Puede rizar la cuerda',
            'Mantener control de la cuerda libre',
            'No usar con cuerdas muy finas'
        ],
        maintenance: [
            'Inspeccionar bordes por desgaste',
            'Verificar que no haya fisuras',
            'Limpiar después de cada uso'
        ]
    },
    {
        id: 'descender-id',
        name: 'Descensor Autobloqueante (ID/Stop)',
        category: 'descender',
        description: 'Dispositivo de descenso con sistema antipánico incorporado',
        uses: [
            'Trabajos en altura profesional',
            'Rescate técnico',
            'Descenso controlado',
            'Posicionamiento en cuerda'
        ],
        safetyConsiderations: [
            'Familiarizarse con el mecanismo antipánico',
            'Usar cuerda del diámetro recomendado',
            'Mantener siempre una mano en la cuerda',
            'No desactivar sistema de seguridad'
        ],
        maintenance: [
            'Lubricar mecanismo según fabricante',
            'Verificar funcionamiento del antipánico',
            'Inspeccionar leva y rodillos',
            'Servicio profesional periódico'
        ]
    },
    {
        id: 'ascender-handled',
        name: 'Bloqueador/Puño de Ascenso',
        category: 'ascender',
        description: 'Dispositivo para ascenso por cuerda fija con mango ergonómico',
        uses: [
            'Ascenso por cuerda fija',
            'Sistemas de izado',
            'Progresión en pendientes',
            'Rescate en altura'
        ],
        safetyConsiderations: [
            'Usar solo en cuerdas fijas',
            'No cargar de forma dinámica',
            'Verificar que la leva agarre correctamente',
            'Usar par derecho/izquierdo adecuado'
        ],
        maintenance: [
            'Limpiar la leva de suciedad',
            'Verificar resorte de la leva',
            'Inspeccionar dientes de agarre',
            'Lubricar eje según fabricante'
        ]
    },
    {
        id: 'pulley-rescue',
        name: 'Polea de Rescate',
        category: 'pulley',
        description: 'Polea de alta eficiencia para sistemas de izado',
        uses: [
            'Sistemas de polipasto',
            'Tirolinas',
            'Sistemas de izado',
            'Reducción de fricción'
        ],
        safetyConsiderations: [
            'Verificar capacidad de carga',
            'Usar con cuerdas del diámetro adecuado',
            'Inspeccionar placas laterales',
            'Verificar libre rotación'
        ],
        maintenance: [
            'Lubricar rodamientos',
            'Limpiar la ranura de la polea',
            'Verificar que gire libremente',
            'Inspeccionar puntos de conexión'
        ]
    },
    {
        id: 'helmet',
        name: 'Casco de Rescate',
        category: 'protection',
        description: 'Protección craneal para operaciones de rescate',
        uses: [
            'Protección contra impactos',
            'Identificación de equipos',
            'Montaje de iluminación',
            'Protección contra caída de objetos'
        ],
        safetyConsiderations: [
            'Ajuste correcto esencial',
            'Reemplazar después de impacto',
            'Verificar sistema de retención',
            'Usar siempre en zonas de riesgo'
        ],
        maintenance: [
            'Limpiar con agua y jabón',
            'No exponer al sol prolongadamente',
            'Inspeccionar casco y arnés interno',
            'Vida útil típica: 5 años'
        ]
    },
    {
        id: 'rescue-litter',
        name: 'Camilla de Rescate (Stokes/SKED)',
        category: 'anchor',
        description: 'Sistema de transporte de víctimas para operaciones de rescate técnico vertical y horizontal. Las camillas Stokes son rígidas de malla metálica o plástico; las SKED son flexibles y enrollables.',
        uses: [
            'Evacuación vertical de víctimas',
            'Transporte horizontal en terreno difícil',
            'Inmovilización de pacientes con trauma espinal',
            'Rescate en espacios confinados (SKED)',
            'Operaciones en pendiente'
        ],
        safetyConsiderations: [
            'Asegurar la cabeza del paciente con almohadillado o casco',
            'Verificar todas las correas antes del movimiento',
            'Mantener acceso para intervención médica de emergencia',
            'En vertical: usar mínimo 2 puntos de conexión con el sistema de cuerdas',
            'El tillerMan (guía en la cabeza) controla la orientación',
            'Proteger al paciente de los elementos (viento, lluvia)'
        ],
        maintenance: [
            'Inspeccionar soldaduras y estructura metálica por fisuras',
            'Verificar integridad de la malla',
            'Revisar hebillas y anillos de conexión',
            'Limpiar con agua y desinfectante después de cada uso',
            'Lubricar partes metálicas para prevenir corrosión',
            'Almacenar en funda protectora'
        ]
    },
    {
        id: 'tubular-webbing',
        name: 'Cinta Tubular (Webbing)',
        category: 'anchor',
        description: 'Cinta de nylon o Dyneema en forma tubular, esencial en rescate técnico para construir anclajes, extensiones, sistemas de arnés improvisado y conexiones rápidas.',
        uses: [
            'Construcción de anclajes',
            'Extensiones de anclaje (slings)',
            'Arnés improvisado de emergencia',
            'Anclajes tipo tensionless en árboles',
            'Conexión a puntos de anclaje',
            'Protección de cuerda contra aristas'
        ],
        safetyConsiderations: [
            'Nunca usar cinta sobre cinta directamente (girth hitch en cinta)',
            'Verificar que el nudo de cinta (Water Knot) no esté aflojado',
            'Revisar desgaste, cortes y decoloración antes de cada uso',
            'La resistencia se reduce significativamente en nudos',
            'Evitar exposición a químicos, especialmente ácidos',
            'No mezclar materiales diferentes (nylon con Dyneema) en mismo sistema'
        ],
        maintenance: [
            'Lavar con agua fría y jabón neutro',
            'No exponer al calor directo o luz solar prolongada',
            'Almacenar seca en lugar oscuro',
            'Inspeccionar costura periódica (si la tiene)',
            'Revisar marcas permanentes de carga previa (deformaciones)',
            'Vida útil máxima: 10 años sin uso, menos con uso frecuente'
        ]
    },
    {
        id: 'rope-bag-kit',
        name: 'Bolsa de Cuerda y Kit de Rescate',
        category: 'protection',
        description: 'Sistema de transporte y despliegue rápido de cuerdas de rescate. Las bolsas apiladas permiten lanzar la cuerda sin nudos. El kit incluye todo el equipo mínimo para una operación de rescate con cuerdas.',
        uses: [
            'Transporte organizado de cuerdas',
            'Despliegue rápido sin enredos (throw bag)',
            'Almacenamiento sistemático del equipo',
            'Rescate acuático con cuerda de lanzamiento',
            'Organización del equipo en la escena'
        ],
        safetyConsiderations: [
            'Verificar que la cuerda esté correctamente apilada antes de lanzar',
            'Nunca lanzar sin verificar que el extremo esté asegurado al rescatista',
            'Mantener el equipo organizado para acceso rápido en emergencias',
            'Verificar peso máximo de carga del kit',
            'Etiquetar claramente el tipo y longitud de cuerda en cada bolsa'
        ],
        maintenance: [
            'Revisar cuerdas dentro de la bolsa regularmente',
            'Secar completamente antes de guardar',
            'Inspeccionar el cierre y asas de la bolsa',
            'Mantener inventario actualizado del kit',
            'Revisar fechas de fabricación de cada elemento'
        ]
    }
];

// ==================== TÉCNICAS DE RESCATE ====================
export const RESCUE_TECHNIQUES: RescueTechnique[] = [
    {
        id: 'rappel-basic',
        name: 'Rapel Básico',
        category: 'rappel',
        difficulty: 'basic',
        description: 'Técnica fundamental de descenso controlado por cuerda fija',
        steps: [
            'Establecer un anclaje seguro y redundante',
            'Conectar el dispositivo de descenso a la cuerda',
            'Realizar chequeo de seguridad (buddy check)',
            'Cargar el sistema gradualmente',
            'Iniciar descenso controlando la velocidad',
            'Mantener posición perpendicular a la pared',
            'Frenar completamente antes del final',
            'Desconectarse solo cuando esté seguro'
        ],
        equipment: [
            'Cuerda estática',
            'Arnés',
            'Dispositivo de descenso',
            'Mosquetones de seguridad',
            'Casco',
            'Guantes'
        ],
        safetyConsiderations: [
            'Verificar anclaje antes de cargar',
            'Siempre usar sistema de backup (prusik/autobloqueo)',
            'Comunicación clara con compañeros',
            'Velocidad controlada - nunca soltar la cuerda de freno'
        ],
        commonMistakes: [
            'Soltar la cuerda de freno',
            'Descender muy rápido',
            'No usar backup',
            'Mal posicionamiento del cuerpo'
        ]
    },
    {
        id: 'ascent-prusik',
        name: 'Ascenso con Prusiks',
        category: 'ascent',
        difficulty: 'intermediate',
        description: 'Técnica de ascenso usando nudos autobloqueantes',
        steps: [
            'Colocar prusik superior conectado al arnés (pecho)',
            'Colocar prusik inferior para el pie',
            'Verificar que ambos agarren correctamente',
            'Ponerse de pie en el prusik del pie',
            'Deslizar hacia arriba el prusik del pecho',
            'Sentarse en el prusik del pecho',
            'Deslizar hacia arriba el prusik del pie',
            'Repetir el ciclo manteniendo ritmo constante'
        ],
        equipment: [
            'Anillo de cordino para prusik (x2)',
            'Arnés',
            'Estribo para pie',
            'Mosquetones',
            'Cuerda fija anclada'
        ],
        safetyConsiderations: [
            'Verificar que los prusiks agarren antes de cargar peso',
            'Mantener prusiks apretados y ordenados',
            'En cuerdas mojadas, dar más vueltas al prusik',
            'Nunca dejar que los prusiks se sobrecarguen dinámicamente'
        ],
        commonMistakes: [
            'Prusiks con pocas vueltas',
            'No mantener tensión en el sistema',
            'Cordino de diámetro inadecuado',
            'Fatiga por mala técnica'
        ]
    },
    {
        id: 'mechanical-advantage-3-1',
        name: 'Polipasto Simple 3:1',
        category: 'hauling',
        difficulty: 'intermediate',
        description: 'Sistema de ventaja mecánica 3:1 para izado de cargas',
        steps: [
            'Establecer anclaje principal sólido',
            'Pasar cuerda por polea en el anclaje',
            'Conectar prusik o bloqueador en la cuerda de carga',
            'Añadir polea al prusik',
            'Pasar la cuerda de tracción por esta polea',
            'Establecer bloqueador de retroceso en el anclaje',
            'Traccionar para izar la carga',
            'El prusik debe deslizarse al acercarse a la polea'
        ],
        equipment: [
            'Poleas (2)',
            'Prusik o bloqueador mecánico',
            'Mosquetones de seguridad',
            'Cuerda estática',
            'Anclaje sólido'
        ],
        safetyConsiderations: [
            'Las fuerzas en el anclaje se multiplican',
            'Asegurar que los bloqueadores funcionen correctamente',
            'Comunicación constante con el equipo',
            'Monitorear estado de la víctima durante el izado'
        ],
        commonMistakes: [
            'Fricción excesiva en el sistema',
            'Bloqueadores mal posicionados',
            'Anclaje subdimensionado',
            'No restablecer el sistema correctamente'
        ]
    },
    {
        id: 'patient-packaging-stretcher',
        name: 'Empaquetamiento en Camilla de Rescate',
        category: 'patient-packaging',
        difficulty: 'intermediate',
        description: 'Técnica para asegurar un paciente en camilla de rescate para operaciones verticales',
        steps: [
            'Evaluar y estabilizar al paciente antes del movimiento',
            'Preparar la camilla con acolchado adecuado',
            'Transferir al paciente manteniendo alineación espinal si es necesario',
            'Asegurar correas de pecho, cadera y piernas',
            'Proteger la cabeza y extremidades',
            'Conectar sistema de izado/descenso',
            'Verificar todas las conexiones',
            'Realizar prueba de carga antes del movimiento'
        ],
        equipment: [
            'Camilla de rescate (Stokes/SKED)',
            'Correas de sujeción',
            'Collarín cervical si es necesario',
            'Mantas/acolchado',
            'Casco para el paciente',
            'Sistema de cuerdas'
        ],
        safetyConsiderations: [
            'Mantener comunicación con el paciente',
            'Monitorear signos vitales',
            'Proteger de los elementos',
            'Asegurar acceso para intervención médica de emergencia'
        ],
        commonMistakes: [
            'Correas demasiado flojas o apretadas',
            'No proteger puntos de presión',
            'Olvido de asegurar la cabeza',
            'No verificar conexiones'
        ]
    },
    {
        id: 'anchor-equalized',
        name: 'Anclaje Ecualizado',
        category: 'anchor-systems',
        difficulty: 'intermediate',
        description: 'Construcción de sistema de anclaje con distribución de carga entre múltiples puntos',
        steps: [
            'Identificar al menos dos puntos de anclaje sólidos',
            'Evaluar la calidad de cada punto',
            'Conectar cinta o cuerda a cada punto',
            'Crear punto central ecualizado',
            'Ajustar para distribuir carga equitativamente',
            'Añadir punto de conexión central (mosquetón master)',
            'Verificar ángulo entre anclajes (<60° ideal)',
            'Probar el sistema antes de cargar completamente'
        ],
        equipment: [
            'Cintas o cordinos',
            'Mosquetones de seguridad',
            'Puntos de anclaje (naturales o artificiales)'
        ],
        safetyConsiderations: [
            'Ángulos >60° aumentan la carga en cada punto',
            'Sistema debe ser redundante (SERENE-A)',
            'Evaluar falla de un punto - el sistema debe aguantar',
            'Considerar la dirección de la carga'
        ],
        commonMistakes: [
            'Ángulos demasiado abiertos',
            'Puntos de anclaje cuestionables',
            'Falta de redundancia',
            'No considerar todas las direcciones de carga posibles'
        ]
    },
    {
        id: 'hauling-5-1-piggyback',
        name: 'Polipasto Compuesto 5:1 (Piggyback)',
        category: 'hauling',
        difficulty: 'advanced',
        description: 'Sistema de ventaja mecánica 5:1 construido "montando" un sistema 2:1 sobre un Z-rig 3:1. Permite mayor izado con el mismo equipo disponible en campo.',
        steps: [
            'Construir primero un sistema Z-rig 3:1 estándar',
            'Conectar un bloqueador mecánico adicional al punto de tracción del 3:1',
            'Pasar una segunda cuerda o el extremo libre por una polea adicional',
            'Conectar esta cuerda al bloqueador del paso anterior',
            'La segunda persona tracciona el segundo sistema (2:1)',
            'El 2:1 tira del 3:1, logrando ventaja combinada de 6:1 real (menos fricción)',
            'Mantener sincronización entre los dos equipos de tracción',
            'Resetear bloqueadores según avanza la carga'
        ],
        equipment: [
            'Poleas de rescate (mínimo 3)',
            'Bloqueadores mecánicos (2)',
            'Mosquetones de seguridad (4+)',
            'Cuerda estática (longitud extra)',
            'Anclaje principal sólido',
            'Personal adicional (mínimo 3-4 personas)'
        ],
        safetyConsiderations: [
            'Las fuerzas sobre el anclaje son muy elevadas — verificar resistencia mínima 3x la carga',
            'Coordinación estricta entre todos los operadores',
            'No exceder la capacidad de la cuerda con las fuerzas generadas',
            'Un sistema de comunicación claro es crítico',
            'Calcular la carga real antes de construir el sistema'
        ],
        commonMistakes: [
            'Anclaje insuficiente para las fuerzas amplificadas',
            'Mala sincronización entre equipo de tracción',
            'Poleas con mucha fricción que anulan la ventaja mecánica',
            'No contar el período de reseteo del sistema',
            'Confundir la ventaja mecánica teórica con la real (pérdida por fricción ~10% por polea)'
        ]
    },
    {
        id: 'lowering-system',
        name: 'Sistema de Descenso de Carga (Lowering)',
        category: 'lowering',
        difficulty: 'basic',
        description: 'Técnica para bajar cargas o víctimas de manera controlada usando fricción como freno. Es la operación más segura y sencilla en rescate vertical cuando la geometría del terreno lo permite.',
        steps: [
            'Establecer anclaje principal sólido en la parte superior',
            'Pasar la cuerda por el dispositivo de descenso conectado al anclaje',
            'Conectar el extremo a la camilla/víctima o a un arnés con mosquetón',
            'Verificar que hay suficiente cuerda para llegar al fondo',
            'Comunicar al equipo y al paciente el inicio del descenso',
            'El operador de freno controla la velocidad mediante la cuerda de freno',
            'Descender lentamente — 30-60 cm por segundo como máximo',
            'El acompañante guía la camilla alejándola de paredes si es necesario',
            'Al llegar abajo, señal "LIBRE" antes de soltar el sistema'
        ],
        equipment: [
            'Cuerda estática de longitud suficiente',
            'Dispositivo de descenso (Munter, 8, ID, Rack)',
            'Mosquetones de seguridad (mínimo 2 en el anclaje)',
            'Anclaje principal redundante',
            'Cuerda de guía (tag line) si es necesario',
            'Comunicación entre operadores'
        ],
        safetyConsiderations: [
            'Siempre tener un backup/antipanico en el sistema',
            'El operador de freno nunca debe soltar la cuerda de freno',
            'Calcular necesidad de cuerda extra para maniobras',
            'El descenso es controlado — velocidad nunca mayor a 1 m/s',
            'Proteger la cuerda de aristas cortantes en el borde'
        ],
        commonMistakes: [
            'Soltar o aflojar demasiado la cuerda de freno',
            'No verificar longitud de cuerda antes de iniciar',
            'Falta de comunicación antes de iniciar el descenso',
            'No proteger la cuerda de aristas en el borde de la estructura',
            'No tener plan alternativo si el sistema se atasca'
        ]
    },
    {
        id: 'changeover-rappel-to-ascent',
        name: 'Cambio de Sistema: Rapel a Ascenso',
        category: 'ascent',
        difficulty: 'advanced',
        description: 'Técnica NFPA 1006 para cambiar de un sistema de descenso (rapel) a un sistema de ascenso (prusiks o bloqueadores) y viceversa. Esencial para autorescate y escenarios de rescate.',
        steps: [
            'En posición segura, colocar prusik superior en la cuerda sobre el dispositivo de descenso',
            'Conectar el prusik superior al arnés mediante mosquetón',
            'Colocar el segundo prusik o estribo para el pie debajo del dispositivo',
            'Cargar el prusik superior transfiriendo el peso desde el dispositivo de descenso',
            'Liberar el dispositivo de descenso de la cuerda',
            'Ahora estás en sistema de ascenso con dos prusiks',
            'Para descenso inverso: con los prusiks cargados, reconectar el dispositivo debajo de los mismos',
            'Transferir el peso al dispositivo y liberar los prusiks'
        ],
        equipment: [
            'Cordinos para prusik (2 — uno para pecho, uno para pie)',
            'Dispositivo de descenso original',
            'Arnés de asiento o cuerpo completo',
            'Mosquetones de seguridad (3+)',
            'Estribo opcional (para el pie)'
        ],
        safetyConsiderations: [
            'Nunca quedar sin conexión a la cuerda durante el cambio',
            'Verificar que los prusiks agarren ANTES de liberar el descensor',
            'Si hay mucho frío, los prusiks pueden deslizar — usar más vueltas',
            'Practicar en tierra a baja altura antes de usar en situación real',
            'No apresurarse — cada paso debe ser deliberado y verificado'
        ],
        commonMistakes: [
            'No poner el prusik antes de liberar el descensor',
            'Prusiks con pocas vueltas que no agarran',
            'Perder contacto mental con los pasos bajo estrés',
            'No tener el estribo preparado antes de empezar',
            'Cordino de diámetro inadecuado para los prusiks'
        ]
    }
];

// ==================== PREGUNTAS FRECUENTES ====================
export const ROPE_RESCUE_FAQ: FAQ[] = [
    {
        question: '¿Cuál es la diferencia entre una cuerda estática y dinámica?',
        answer: 'La cuerda estática tiene estiramiento mínimo (<5%) y se usa para trabajo en altura, rescate y descenso de cargas. La cuerda dinámica tiene alto estiramiento (25-35%) y absorbe la energía de impacto en caídas, ideal para escalada donde hay riesgo de caídas. Según NFPA 1983, las cuerdas para life safety deben ser de tipo estático o semi-estático certificadas.'
    },
    {
        question: '¿Cada cuánto tiempo debo retirar una cuerda de rescate?',
        answer: 'Depende del uso e inspección. Guía general: vida útil máxima de 10 años sin usar, 5 años con uso ocasional, 1-3 años con uso frecuente. Siempre retirar INMEDIATAMENTE después de: caída con factor >1, exposición a químicos, daño visible en funda o alma, historial desconocido de la cuerda, o si la inspección revela cualquier anomalía.'
    },
    {
        question: '¿Qué nudo es el más seguro para encordamiento al arnés?',
        answer: 'El ocho doble (figure eight follow-through) es el estándar en rescate técnico para encordarse al arnés. Conserva aproximadamente 75-80% de la resistencia de la cuerda, es fácil de verificar visualmente por un compañero, y no se afloja bajo carga. Siempre se debe dejar mínimo 15 cm de cola y se puede añadir un nudo de seguridad adicional.'
    },
    {
        question: '¿Por qué es importante el ángulo en un anclaje ecualizado?',
        answer: 'El ángulo entre los brazos del anclaje determina la carga en cada punto. A 0°: 50% cada punto. A 60°: 58% cada punto. A 90°: 71%. A 120°: 100% (cada punto soporta la carga total). Por eso SERENE-A recomienda ángulos menores a 60°. A más de 120° el sistema se vuelve más peligroso que un solo punto.'
    },
    {
        question: '¿Qué es el factor de caída y por qué es importante en rescate?',
        answer: 'El factor de caída = distancia de caída ÷ longitud de cuerda disponible. Factor 0 = carga estática (ideal en rescate). Factor 2 = máximo posible (muy peligroso). En rescate con cuerdas estáticas el objetivo es siempre mantener el factor lo más cercano a 0 porque las cuerdas estáticas no absorben energía de impacto como las dinámicas.'
    },
    {
        question: '¿Cuándo debo usar backup o autoseguro en rapel?',
        answer: 'SIEMPRE, sin excepción. Un prusik o dispositivo autobloqueante bajo el descensor es el estándar NFPA 1006. Si el rescatista pierde el control de la cuerda de freno por cualquier razón (desmayo, impacto, espasmo muscular), el backup detiene automáticamente el descenso. No usar backup es una falta grave de protocolo.'
    },
    {
        question: '¿Qué significa SERENE-A en la evaluación de anclajes?',
        answer: 'SERENE-A: Solid (Sólido — puntos de anclaje confiables), Equalized (Ecualizado — carga distribuida entre puntos), Redundant (Redundante — múltiples puntos independientes), Efficient (Eficiente — fácil de construir y verificar), No Extension (Sin Extensión — no falla catastrófica si un punto cede), Angles (Ángulos menores a 60° entre brazos). Es el criterio de oro para anclajes de rescate.'
    },
    {
        question: '¿Qué diferencia hay entre un bloqueador mecánico y un prusik?',
        answer: 'Bloqueadores mecánicos (puños, bloqueadores de pecho): más eficientes, cómodos y confiables en condiciones adversas (frío, humedad), específicos para una dirección. Prusiks: versátiles, económicos, suaves con la cuerda, omnidireccionales; pero menos eficientes y pueden fallar con cuerdas mojadas, heladas o cordino desgastado. NFPA 1006 acepta ambos como sistemas de progresión.'
    },
    {
        question: '¿Qué es un "lowering" y cuándo se prefiere sobre un "raising"?',
        answer: 'Lowering = bajar la carga usando la gravedad con la cuerda como freno controlado. Raising = subir la carga contra la gravedad usando un polipasto. El lowering es siempre preferido cuando la geometría del terreno lo permite porque: es más simple, requiere menos personal, menos equipo, menos riesgo de error y es más rápido. Solo se usa raising cuando no hay acceso desde arriba o la víctima está en un nivel inferior al rescatista.'
    },
    {
        question: '¿Cómo se construye un sistema Z-rig (polipasto 3:1)?',
        answer: 'Z-rig 3:1: 1) Anclaje sólido en la parte superior. 2) Polea A en el anclaje. 3) Pasar la cuerda de carga por la polea A. 4) Colocar prusik o bloqueador mecánico en la cuerda de carga. 5) Polea B en ese prusik. 6) Pasar la cuerda por la polea B regresando hacia el anclaje. 7) Colocar bloqueador de retroceso en la cuerda entre la carga y la polea A. 8) Traccionar el extremo libre. La cuerda hace una forma de Z, de ahí su nombre.'
    },
    {
        question: '¿Qué es el "edge protection" y por qué es obligatorio en operaciones verticales?',
        answer: 'El edge protection (protección de arista) son dispositivos o materiales (rodillos, mantas, protectores) que se colocan en el borde de la estructura donde la cuerda hace contacto. Es obligatorio porque los bordes afilados pueden abrazar la funda de la cuerda y cortarla bajo la carga, comprometiendo el alma y reduciendo la resistencia a niveles peligrosos. Sin protección, incluso bordes aparentemente suaves pueden generar abrasión severa.'
    },
    {
        question: '¿Cuál es el protocolo correcto para inspeccionar una cuerda antes de usarla?',
        answer: 'Inspección visual y táctil de toda la longitud: 1) Pasar la cuerda completamente entre los dedos sintiendo el alma (sin bultos, sin flujos, resistencia uniforme). 2) Inspeccionar visualmente la funda por cortes, abrasiones, decoloración, aplastamiento. 3) Verificar los extremos (no deshilachados). 4) Revisar la etiqueta (fecha de fabricación, certificaciones). 5) Confirmar el historial del registro de uso. Si hay cualquier duda: NO USAR.'
    }
];

// ==================== PREGUNTAS DE EXAMEN ====================
export const ROPE_RESCUE_QUESTIONS: RopeQuestion[] = [
    {
        question: '¿Cuál es la elongación típica de una cuerda estática?',
        options: [
            { letter: 'a', text: '25-35%' },
            { letter: 'b', text: '15-20%' },
            { letter: 'c', text: 'Menos del 5%' },
            { letter: 'd', text: '40-50%' }
        ],
        correctAnswer: 'c',
        explanation: 'Las cuerdas estáticas tienen una elongación menor al 5%, lo que las hace ideales para sistemas de rescate donde no se desea estiramiento.'
    },
    {
        question: '¿Qué nudo se recomienda para unir dos cuerdas del mismo diámetro de forma permanente?',
        options: [
            { letter: 'a', text: 'Nudo ballestrinque' },
            { letter: 'b', text: 'Doble pescador' },
            { letter: 'c', text: 'As de guía' },
            { letter: 'd', text: 'Ocho simple' }
        ],
        correctAnswer: 'b',
        explanation: 'El doble pescador es uno de los nudos más seguros para unir cuerdas del mismo diámetro, conservando alta resistencia y siendo muy difícil de deshacer.'
    },
    {
        question: '¿Cuál es el ángulo máximo recomendado entre los brazos de un anclaje ecualizado?',
        options: [
            { letter: 'a', text: '90 grados' },
            { letter: 'b', text: '120 grados' },
            { letter: 'c', text: '60 grados' },
            { letter: 'd', text: '45 grados' }
        ],
        correctAnswer: 'c',
        explanation: 'Se recomienda mantener el ángulo por debajo de 60°. A ángulos mayores, la fuerza en cada punto de anclaje aumenta significativamente.'
    },
    {
        question: '¿Qué tipo de cuerda se debe usar si existe posibilidad de caída con factor de caída mayor a 0.5?',
        options: [
            { letter: 'a', text: 'Cuerda estática' },
            { letter: 'b', text: 'Cuerda semi-estática' },
            { letter: 'c', text: 'Cuerda dinámica' },
            { letter: 'd', text: 'Cordino auxiliar' }
        ],
        correctAnswer: 'c',
        explanation: 'Las cuerdas dinámicas absorben la energía de impacto en caídas, reduciendo la fuerza transmitida al escalador y al anclaje.'
    },
    {
        question: '¿Qué porcentaje de la resistencia de la cuerda conserva aproximadamente un nudo ocho doble?',
        options: [
            { letter: 'a', text: '50-60%' },
            { letter: 'b', text: '75-80%' },
            { letter: 'c', text: '90-95%' },
            { letter: 'd', text: '40-50%' }
        ],
        correctAnswer: 'b',
        explanation: 'El ocho doble conserva entre 75-80% de la resistencia original de la cuerda, siendo uno de los nudos más eficientes.'
    },
    {
        question: '¿Para qué se utiliza principalmente el nudo prusik?',
        options: [
            { letter: 'a', text: 'Unir dos cuerdas' },
            { letter: 'b', text: 'Como nudo de tope' },
            { letter: 'c', text: 'Como sistema autobloqueante/ascenso' },
            { letter: 'd', text: 'Para hacer una gaza fija' }
        ],
        correctAnswer: 'c',
        explanation: 'El nudo prusik es un nudo de fricción que se bloquea bajo carga y se desliza cuando está descargado, ideal para sistemas de ascenso y backup.'
    },
    {
        question: '¿Qué significa la "S" en el acrónimo SERENE-A para evaluación de anclajes?',
        options: [
            { letter: 'a', text: 'Simple' },
            { letter: 'b', text: 'Seguro' },
            { letter: 'c', text: 'Solid (Sólido)' },
            { letter: 'd', text: 'Sistemático' }
        ],
        correctAnswer: 'c',
        explanation: 'SERENE-A significa: Solid (Sólido), Equalized, Redundant, Efficient, No Extension, Angles.'
    },
    {
        question: '¿Cuál es la ventaja mecánica de un polipasto simple 3:1?',
        options: [
            { letter: 'a', text: 'Se necesita 1/2 de la fuerza para levantar la carga' },
            { letter: 'b', text: 'Se necesita 1/3 de la fuerza para levantar la carga' },
            { letter: 'c', text: 'Se triplica la velocidad de izado' },
            { letter: 'd', text: 'Se reduce la fricción a la mitad' }
        ],
        correctAnswer: 'b',
        explanation: 'Un polipasto 3:1 proporciona una ventaja mecánica de 3, lo que significa que se necesita aproximadamente 1/3 de la fuerza para levantar la carga (sin contar fricción).'
    },
    {
        question: '¿Por qué no se debe usar cinta sobre cinta (girth hitch de cinta en cinta)?',
        options: [
            { letter: 'a', text: 'Porque es difícil de deshacer' },
            { letter: 'b', text: 'Porque reduce mucho la resistencia' },
            { letter: 'c', text: 'Porque la fricción puede fundir el nylon' },
            { letter: 'd', text: 'Todas las anteriores son correctas' }
        ],
        correctAnswer: 'd',
        explanation: 'Usar cinta sobre cinta es peligroso porque reduce significativamente la resistencia, puede causar fusión por fricción bajo carga dinámica, y es difícil de verificar.'
    },
    {
        question: '¿Cuál es el diámetro recomendado del cordino prusik en relación a la cuerda principal?',
        options: [
            { letter: 'a', text: 'El mismo diámetro' },
            { letter: 'b', text: '60-70% del diámetro de la cuerda principal' },
            { letter: 'c', text: 'El doble del diámetro' },
            { letter: 'd', text: 'No importa el diámetro' }
        ],
        correctAnswer: 'b',
        explanation: 'El cordino prusik debe ser aproximadamente 60-70% del diámetro de la cuerda principal para un agarre óptimo. Si es muy grueso no agarra bien; si es muy fino puede dañar la cuerda.'
    },
    {
        question: '¿Cuánto tiempo de cola mínimo se debe dejar en un nudo ocho doble?',
        options: [
            { letter: 'a', text: '5 cm' },
            { letter: 'b', text: '10 cm' },
            { letter: 'c', text: '15 cm' },
            { letter: 'd', text: '20 cm' }
        ],
        correctAnswer: 'c',
        explanation: 'Se recomienda dejar al menos 15 cm de cola en un nudo ocho doble para garantizar seguridad y permitir hacer un nudo de seguridad adicional si es necesario.'
    },
    {
        question: '¿Qué tipo de mosquetón es el más adecuado para usar con un nudo dinámico (Munter)?',
        options: [
            { letter: 'a', text: 'Mosquetón tipo D' },
            { letter: 'b', text: 'Mosquetón ovalado' },
            { letter: 'c', text: 'Mosquetón HMS (forma de pera)' },
            { letter: 'd', text: 'Mosquetón asimétrico' }
        ],
        correctAnswer: 'c',
        explanation: 'El mosquetón HMS (Half Mast Securité) tiene forma de pera específicamente diseñada para permitir que el nudo dinámico funcione correctamente y pueda voltear.'
    },
    {
        question: '¿Cuál es el factor de caída máximo posible?',
        options: [
            { letter: 'a', text: '0.5' },
            { letter: 'b', text: '1' },
            { letter: 'c', text: '2' },
            { letter: 'd', text: '3' }
        ],
        correctAnswer: 'c',
        explanation: 'El factor de caída máximo es 2, que ocurre cuando la caída es el doble de la longitud de cuerda disponible (ej: caer desde encima del anclaje).'
    },
    {
        question: '¿Por qué el As de Guía (Bowline) requiere siempre un nudo de seguridad?',
        options: [
            { letter: 'a', text: 'Porque es difícil de verificar' },
            { letter: 'b', text: 'Porque puede aflojarse sin carga constante' },
            { letter: 'c', text: 'Porque tiene baja resistencia' },
            { letter: 'd', text: 'Porque es un nudo para principiantes' }
        ],
        correctAnswer: 'b',
        explanation: 'El As de Guía puede aflojarse cuando no está bajo carga constante o con cargas cíclicas, por lo que siempre debe asegurarse con un nudo de seguridad.'
    },
    {
        question: '¿Qué característica debe tener un sistema de anclaje según el principio SERENE-A?',
        options: [
            { letter: 'a', text: 'Debe ser redundante' },
            { letter: 'b', text: 'Debe estar ecualizado' },
            { letter: 'c', text: 'No debe extenderse si falla un punto' },
            { letter: 'd', text: 'Todas las anteriores' }
        ],
        correctAnswer: 'd',
        explanation: 'SERENE-A establece que un buen anclaje debe ser: Sólido, Ecualizado, Redundante, Eficiente, sin Extensión en falla, y con Ángulos apropiados.'
    },
    // ===== NUEVAS PREGUNTAS — Manual 6th Edition =====
    {
        question: 'Según NFPA 1006, ¿cuántas veces debe ser la resistencia mínima de un anclaje de rescate respecto a la carga esperada?',
        options: [
            { letter: 'a', text: '3 veces (factor de seguridad 3:1)' },
            { letter: 'b', text: '5 veces (factor de seguridad 5:1)' },
            { letter: 'c', text: '10 veces (factor de seguridad 10:1)' },
            { letter: 'd', text: '15 veces (factor de seguridad 15:1)' },
        ],
        correctAnswer: 'c',
        explanation: 'NFPA 1006 y 1983 establecen un factor de seguridad mínimo de 10:1 para sistemas de vida (life safety). Esto significa que el sistema debe poder sostener 10 veces la carga esperada.'
    },
    {
        question: '¿Cuál es la diferencia principal entre una camilla Stokes y una SKED?',
        options: [
            { letter: 'a', text: 'La SKED es más resistente que la Stokes' },
            { letter: 'b', text: 'La Stokes es rígida de malla; la SKED es flexible y enrollable' },
            { letter: 'c', text: 'La SKED es para espacios abiertos; la Stokes para espacios confinados' },
            { letter: 'd', text: 'No hay diferencia, son el mismo producto' },
        ],
        correctAnswer: 'b',
        explanation: 'La camilla Stokes es de estructura rígida (metal o polímero), ideal para terreno abierto. La SKED es flexible y enrollable, perfecta para espacios confinados y extracciones en ángulos difíciles.'
    },
    {
        question: '¿Qué es el "tensionless hitch" y cuál es su principal ventaja?',
        options: [
            { letter: 'a', text: 'Un nudo de fricción; fácil de desatar' },
            { letter: 'b', text: 'Un anclaje con vueltas a árbol/poste que conserva ~100% de resistencia' },
            { letter: 'c', text: 'Un nudo autobloqueante para sistemas de izado' },
            { letter: 'd', text: 'Un nudo de unión de cuerdas de diferente diámetro' },
        ],
        correctAnswer: 'b',
        explanation: 'El tensionless hitch no tiene nudo propiamente dicho — la fricción de las vueltas alrededor del anclaje absorbe la tensión, conservando prácticamente el 100% de la resistencia de la cuerda.'
    },
    {
        question: '¿Qué señal de voz indica que todos deben detener INMEDIATAMENTE el movimiento?',
        options: [
            { letter: 'a', text: '¡FIRME!' },
            { letter: 'b', text: '¡ALTO!' },
            { letter: 'c', text: '¡LIBRE!' },
            { letter: 'd', text: '¡FLOJO!' },
        ],
        correctAnswer: 'b',
        explanation: '"¡ALTO!" es la señal de parada de emergencia inmediata. "¡FIRME!" significa mantener posición sin movimiento adicional. Son señales diferentes con implicaciones distintas.'
    },
    {
        question: '¿Cuál es la ventaja mecánica real aproximada de un polipasto Z-rig 3:1 con poleas al 85% de eficiencia?',
        options: [
            { letter: 'a', text: '3:1 exacto' },
            { letter: 'b', text: '2.5:1 aproximado' },
            { letter: 'c', text: '2.2:1 aproximado' },
            { letter: 'd', text: '1.8:1 aproximado' },
        ],
        correctAnswer: 'b',
        explanation: 'Cada polea pierde aproximadamente 10-15% de eficiencia por fricción. Un Z-rig 3:1 con dos poleas al 85% tiene una ventaja real de aproximadamente 3 × 0.85 × 0.85 ≈ 2.17, redondeando a ~2.5:1 en campo.'
    },
    {
        question: '¿Cuántas vueltas mínimas debe dar un prusik alrededor de la cuerda principal en condiciones normales?',
        options: [
            { letter: 'a', text: '1 vuelta' },
            { letter: 'b', text: '2 vueltas' },
            { letter: 'c', text: '3 vueltas' },
            { letter: 'd', text: '5 vueltas' },
        ],
        correctAnswer: 'c',
        explanation: 'Se requieren mínimo 3 vueltas para un prusik efectivo en condiciones secas. En cuerdas mojadas, heladas o si el cordino está desgastado, se deben dar 4-5 vueltas para garantizar el agarre.'
    },
    {
        question: '¿Qué componente del acrónimo SERENE-A previene que el sistema se cargue con un tirón brusco si falla uno de los puntos de anclaje?',
        options: [
            { letter: 'a', text: 'Equalized (Ecualizado)' },
            { letter: 'b', text: 'Redundant (Redundante)' },
            { letter: 'c', text: 'No Extension (Sin extensión)' },
            { letter: 'd', text: 'Angles (Ángulos)' },
        ],
        correctAnswer: 'c',
        explanation: '"No Extension" (sin extensión) significa que si un punto de anclaje falla, el sistema no se extiende bruscamente generando una carga de choque sobre los puntos restantes. Se logra con configuraciones tipo cornamusa o equalizadores limted-extension.'
    },
    {
        question: '¿Cuál es la función principal del "tiller man" en una operación de camilla en vertical?',
        options: [
            { letter: 'a', text: 'Operar el sistema de cuerdas superiormente' },
            { letter: 'b', text: 'Guiar y controlar la orientación de la camilla desde la parte inferior/cabeza' },
            { letter: 'c', text: 'Comunicar condiciones del paciente' },
            { letter: 'd', text: 'Asegurar el anclaje principal' },
        ],
        correctAnswer: 'b',
        explanation: 'El tiller man es el rescatista que va en la parte inferior/cabeza de la camilla (puede estar en rapel o desde abajo), guiando y controlando la orientación de la camilla para evitar que gire o choque contra paredes durante el descenso o ascenso.'
    },
    {
        question: '¿Qué norma de la NFPA regula específicamente los requisitos para cuerdas y equipo de vida en rescate técnico?',
        options: [
            { letter: 'a', text: 'NFPA 1001' },
            { letter: 'b', text: 'NFPA 1006' },
            { letter: 'c', text: 'NFPA 1983' },
            { letter: 'd', text: 'NFPA 101' },
        ],
        correctAnswer: 'c',
        explanation: 'NFPA 1983 es el estándar que establece los criterios de desempeño para cuerdas de vida, conectores, arneses y accesorios usados en rescate técnico. NFPA 1006 es el estándar de calificaciones profesionales para rescatistas técnicos.'
    },
    {
        question: 'Durante un cambio de sistema (rapel a ascenso), ¿cuál es el error más peligroso que puede cometer el rescatista?',
        options: [
            { letter: 'a', text: 'Mover el prusik demasiado arriba' },
            { letter: 'b', text: 'Quedar sin conexión a la cuerda durante el cambio' },
            { letter: 'c', text: 'Usar un dispositivo de descenso incorrecto' },
            { letter: 'd', text: 'No tener suficiente cuerda' },
        ],
        correctAnswer: 'b',
        explanation: 'El error fatal en un changeover es perder la conexión a la cuerda en cualquier momento del proceso. La regla fundamental es: siempre mantener al menos un punto de conexión a la cuerda ANTES de remover el otro.'
    },
    {
        question: '¿Qué característica distingue a un mosquetón tipo HMS del resto?',
        options: [
            { letter: 'a', text: 'Es de aluminio ultrarresistente' },
            { letter: 'b', text: 'Tiene forma de pera asimétrica que permite usar el nudo dinámico' },
            { letter: 'c', text: 'Tiene seguro de triple acción' },
            { letter: 'd', text: 'Es el más pequeño y liviano del mercado' },
        ],
        correctAnswer: 'b',
        explanation: 'HMS significa "Half Mast Securité" (en francés). Su forma de pera permite que el nudo Münter/dinámico funcione correctamente y pueda "voltear" para frenar en ambas direcciones, siendo esencial para aseguramiento y rapel de emergencia.'
    },
    {
        question: 'En rescate técnico, ¿qué se entiende por "carga de trabajo segura" (SWL - Safe Working Load)?',
        options: [
            { letter: 'a', text: 'El 100% de la resistencia de rotura del equipo' },
            { letter: 'b', text: 'La resistencia mínima de rotura' },
            { letter: 'c', text: 'La resistencia de rotura dividida entre el factor de seguridad aplicable' },
            { letter: 'd', text: 'El peso máximo de una víctima con equipo' },
        ],
        correctAnswer: 'c',
        explanation: 'La SWL es la carga máxima a la que debe someterse un componente en uso normal. Se calcula dividiendo la resistencia mínima de rotura (MBS) entre el factor de seguridad (generalmente 10:1 para life safety según NFPA). Ejemplo: cuerda 22 kN ÷ 10 = 2.2 kN SWL.'
    },
    {
        question: '¿Por qué se debe proteger la cuerda con "edge protection" en bordes de estructuras?',
        options: [
            { letter: 'a', text: 'Para evitar que la cuerda se ensucie' },
            { letter: 'b', text: 'La abrasión puede cortar la funda y comprometer el alma de la cuerda' },
            { letter: 'c', text: 'Para que la cuerda no se mueva lateralmente' },
            { letter: 'd', text: 'Por requerimiento estético de las operaciones' },
        ],
        correctAnswer: 'b',
        explanation: 'Los bordes afilados pueden abrazar y cortar la funda exterior de la cuerda, comprometiendo el alma y reduciendo drásticamente la resistencia. Un protector de arista (edge roller, pad, etc.) distribuye la presión y elimina este riesgo.'
    },
    {
        question: '¿Cuándo se considera que una cuerda debe ser retirada definitivamente del servicio de vida?',
        options: [
            { letter: 'a', text: 'Después de 5 años sin importar el estado' },
            { letter: 'b', text: 'Solo cuando tiene cortes visibles en el alma' },
            { letter: 'c', text: 'Tras cualquier caída con factor mayor a 1, exposición a químicos, daño visible o si se desconoce su historial' },
            { letter: 'd', text: 'Solo cuando el fabricante lo indica por fecha de caducidad' },
        ],
        correctAnswer: 'c',
        explanation: 'Una cuerda debe retirarse si: sufrió una caída con factor >1, estuvo expuesta a químicos/calor extremo, tiene daño visible (cortes, abrasiones profundas, deformaciones), o su historial es desconocido. La fecha es una guía adicional, no el único criterio.'
    },
    {
        question: '¿Cuál es el propósito del "buddy check" antes de iniciar un rappel?',
        options: [
            { letter: 'a', text: 'Verificar que todos los rescatistas estén listos' },
            { letter: 'b', text: 'Un compañero verifica externamente nudos, conexiones y posición de equipo del rappelista' },
            { letter: 'c', text: 'Checar el estado de salud antes de la operación' },
            { letter: 'd', text: 'Probar la resistencia del anclaje' },
        ],
        correctAnswer: 'b',
        explanation: 'El buddy check (verificación de compañero) consiste en que otra persona con entrenamiento verifica visualmente TODOS los elementos del sistema del rappelista: arnés bien puesto y ajustado, nudos correctos y con cola suficiente, dispositivo de descenso conectado correctamente, seguro cerrado, backup instalado.'
    },
    {
        question: '¿Qué señal de voz indica que se debe dar cuerda o reducir la tensión en el sistema?',
        options: [
            { letter: 'a', text: '¡TENSIÓN!' },
            { letter: 'b', text: '¡FIRME!' },
            { letter: 'c', text: '¡FLOJO!' },
            { letter: 'd', text: '¡LIBRE!' },
        ],
        correctAnswer: 'c',
        explanation: '"¡FLOJO!" es la señal para dar cuerda o reducir la tensión del sistema. "¡TENSIÓN!" es lo opuesto — se usa para pedir que se aplique tensión. Estas señales deben ser confirmadas por el receptor antes de ejecutarse.'
    },
    {
        question: '¿Cuál es la función del bloqueador de retroceso (progress capture device) en un sistema de polipasto?',
        options: [
            { letter: 'a', text: 'Aumentar la ventaja mecánica del sistema' },
            { letter: 'b', text: 'Prevenir que la carga retroceda mientras se resetea el sistema' },
            { letter: 'c', text: 'Controlar la velocidad de descenso' },
            { letter: 'd', text: 'Conectar la polea al anclaje principal' },
        ],
        correctAnswer: 'b',
        explanation: 'El bloqueador de retroceso (progress capture device, PCD — generalmente un prusik o bloqueador mecánico en el anclaje) evita que la carga baje mientras el equipo resetea el sistema de polipasto para hacer otra tracción. Sin él, el sistema no puede operar de forma segura.'
    },
    {
        question: '¿Qué característica hace al nudo "Ocho sobre Seno" diferente del "Ocho Doble"?',
        options: [
            { letter: 'a', text: 'El ocho sobre seno es más resistente' },
            { letter: 'b', text: 'El ocho sobre seno se hace sin acceso a los extremos de la cuerda' },
            { letter: 'c', text: 'El ocho doble no puede usarse para encordamiento' },
            { letter: 'd', text: 'No hay diferencia práctica' },
        ],
        correctAnswer: 'b',
        explanation: 'El Ocho sobre Seno (Figure Eight on a Bight) se construye trabajando con el seno (parte media) de la cuerda sin necesitar los extremos. El Ocho Doble (Follow Through) necesita el extremo libre para seguir el camino del nudo existente. Son equivalentes en resistencia pero se usan en situaciones diferentes.'
    },
    {
        question: '¿Cuál es el comportamiento correcto del operador de freno durante un lowering estándar?',
        options: [
            { letter: 'a', text: 'Soltar la cuerda de freno cuando el descenso es muy lento' },
            { letter: 'b', text: 'Mantener siempre una mano en la cuerda de freno, nunca soltarla' },
            { letter: 'c', text: 'Dar cuerda libremente y solo frenar al llegar abajo' },
            { letter: 'd', text: 'Usar ambas manos para dar más velocidad si se necesita' },
        ],
        correctAnswer: 'b',
        explanation: 'La regla fundamental del operador de freno es NUNCA soltar la cuerda de freno. Si pierde el control (desmayo, impacto, etc.), el sistema sería catastrófico. Por eso también existe el backup/antipánico — para compensar fallos humanos inesperados.'
    },
    {
        question: '¿Cuántas vueltas mínimas se recomienda dar en un tensionless hitch en un árbol?',
        options: [
            { letter: 'a', text: '1 vuelta' },
            { letter: 'b', text: '2 vueltas' },
            { letter: 'c', text: '3-4 vueltas' },
            { letter: 'd', text: '6 o más vueltas siempre' },
        ],
        correctAnswer: 'c',
        explanation: 'Se recomiendan mínimo 3-4 vueltas para que la fricción sea suficiente. El árbol debe tener al menos 20 cm de diámetro para que el ansclaje sea seguro. Más vueltas no es siempre mejor — puede dificultar el paso de la cuerda.'
    },
    {
        question: '¿Cuál es la diferencia entre "rescate tipo 1" (lowering) y "rescate tipo 2" (raising) según clasificación técnica?',
        options: [
            { letter: 'a', text: 'Tipo 1 es sin paciente; tipo 2 es con paciente' },
            { letter: 'b', text: 'Tipo 1 utiliza cuerda simple; tipo 2 utiliza doble cuerda' },
            { letter: 'c', text: 'Tipo 1 baja la carga usando gravedad; tipo 2 sube la carga contra la gravedad usando polipasto' },
            { letter: 'd', text: 'Tipo 1 es operación simple; tipo 2 requiere equipo especializado' },
        ],
        correctAnswer: 'c',
        explanation: 'En terminología de rescate técnico, lowering (bajar) aprovecha la gravedad con la cuerda como freno controlado, y es la operación más sencilla y segura. Raising (subir) requiere vencer la gravedad mediante sistemas de ventaja mecánica (polipastos).'
    },
    {
        question: '¿Qué nivel de NFPA 1006 se requiere para operar sistemas complejos de polipasto y rescate vertical con paciente?',
        options: [
            { letter: 'a', text: 'Awareness Level (Conocimiento)' },
            { letter: 'b', text: 'Operations Level (Nivel Operaciones)' },
            { letter: 'c', text: 'Technician Level (Nivel Técnico)' },
            { letter: 'd', text: 'Instructor Level' },
        ],
        correctAnswer: 'c',
        explanation: 'NFPA 1006 establece tres niveles: Awareness (reconocer la situación y pedir ayuda), Operations (apoyo básico) y Technician (operar sistemas completos de rescate vertical, polipastos, changeovers, empaquetamiento y extracción de víctimas).'
    },
    {
        question: '¿Por qué es recomendable usar guantes de rescate durante operaciones con cuerda?',
        options: [
            { letter: 'a', text: 'Solo por motivos de imagen profesional' },
            { letter: 'b', text: 'Para proteger de abrasión, calor por fricción y mejorar agarre en la cuerda de freno' },
            { letter: 'c', text: 'Son obligatorios solo en temperaturas frías' },
            { letter: 'd', text: 'Para evitar daños a la cuerda por el sudor' },
        ],
        correctAnswer: 'b',
        explanation: 'Los guantes de rescate protegen las manos de la abrasión por la cuerda en movimiento, del calor generado por fricción en el descenso, y mejoran el agarre sobre la cuerda de freno especialmente cuando está mojada o el rescatista está sudando.'
    }
];

// Preguntas desafiantes para el examen
export const ROPE_RESCUE_CHALLENGE_QUESTIONS: RopeQuestion[] = [
    {
        question: 'En un sistema de polipasto 5:1 con poleas con 90% de eficiencia, ¿cuál es la ventaja mecánica real?',
        options: [
            { letter: 'a', text: '5:1' },
            { letter: 'b', text: '4.5:1' },
            { letter: 'c', text: '3.6:1' },
            { letter: 'd', text: '4.1:1' }
        ],
        correctAnswer: 'd',
        explanation: 'Con pérdida por fricción del 10% en cada polea, la ventaja mecánica real se reduce. En un 5:1 con múltiples poleas, la eficiencia combinada resulta en aproximadamente 4.1:1.'
    },
    {
        question: 'Si un anclaje ecualizado tiene brazos a 120°, ¿qué porcentaje de la carga total recibe CADA punto de anclaje?',
        options: [
            { letter: 'a', text: '50%' },
            { letter: 'b', text: '75%' },
            { letter: 'c', text: '100%' },
            { letter: 'd', text: '60%' }
        ],
        correctAnswer: 'c',
        explanation: 'A 120° cada punto de anclaje recibe el 100% de la carga total. Esta es la razón por la que ángulos mayores a 60° son peligrosos.'
    },
    {
        question: 'Una cuerda tiene resistencia de 28 kN. Con un ocho doble (eficiencia 75%) y factor de seguridad 10:1, ¿cuál es la carga de trabajo segura?',
        options: [
            { letter: 'a', text: '2.8 kN' },
            { letter: 'b', text: '2.1 kN' },
            { letter: 'c', text: '21 kN' },
            { letter: 'd', text: '1.5 kN' }
        ],
        correctAnswer: 'b',
        explanation: '28 kN × 75% = 21 kN (resistencia con nudo). 21 kN ÷ 10 = 2.1 kN como carga de trabajo segura.'
    }
];

// ==================== SEGURIDAD ====================
export const SAFETY_PROTOCOLS = {
    preOperation: [
        'Briefing completo del equipo sobre el plan de rescate',
        'Verificación del estado de todo el equipo',
        'Evaluación de condiciones ambientales',
        'Establecimiento de comunicación clara',
        'Identificación de peligros potenciales',
        'Plan de contingencia establecido'
    ],
    duringOperation: [
        'Comunicación constante con señales claras',
        'Monitoreo continuo de anclajes y sistemas',
        'Verificación de backup antes de cargar',
        'Atención al estado del paciente',
        'Observación de cambios ambientales',
        'Respeto de límites de carga'
    ],
    postOperation: [
        'Inspección de todo el equipo usado',
        'Documentación de cualquier incidente',
        'Debriefing del equipo',
        'Limpieza y almacenamiento apropiado',
        'Reporte de equipo dañado',
        'Evaluación para mejora continua'
    ]
};

export const VOICE_SIGNALS = [
    { signal: '¡EN CUERDA!', meaning: 'El rescatista está conectado y listo para cargar el sistema' },
    { signal: '¡CUERDA LISTA!', meaning: 'El sistema está preparado para soportar carga' },
    { signal: '¡BAJANDO!', meaning: 'Iniciando descenso — todos alertas y atentos' },
    { signal: '¡ALTO!', meaning: 'Detener todo movimiento inmediatamente — emergencia' },
    { signal: '¡FIRME!', meaning: 'Asegurar y mantener posición — no dar ni quitar cuerda' },
    { signal: '¡LIBRE!', meaning: 'El rescatista se ha desconectado del sistema — zona segura' },
    { signal: '¡TENSIÓN!', meaning: 'Aplicar tensión al sistema — prepararse para carga' },
    { signal: '¡FLOJO!', meaning: 'Dar cuerda / reducir tensión en el sistema' },
    { signal: '¡CUERDA!', meaning: 'Advertencia: cuerda cayendo — cubrir la cabeza' },
    { signal: '¡ROCA!', meaning: 'Advertencia: objeto cayendo — evacuarse del área' },
    { signal: '¡SUBIENDO!', meaning: 'Iniciando ascenso — sistema activado hacia arriba' },
    { signal: '¡IZANDO!', meaning: 'El sistema de polipasto está en operación — todos a traccionar' },
    { signal: '¡RESETEAR!', meaning: 'Resetear el bloqueador del polipasto para nueva tracción' },
    { signal: '¡MEDICAL!', meaning: 'Situación médica en el rescatista o víctima — prioridad máxima' },
    { signal: '¡EVACUACIÓN!', meaning: 'Señal de evacuación inmediata de la zona de trabajo' }
];

