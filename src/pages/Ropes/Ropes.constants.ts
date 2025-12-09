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
    }
];

// ==================== PREGUNTAS FRECUENTES ====================
export const ROPE_RESCUE_FAQ: FAQ[] = [
    {
        question: '¿Cuál es la diferencia entre una cuerda estática y dinámica?',
        answer: 'La cuerda estática tiene un estiramiento mínimo (<5%) y se usa para trabajo en altura, rescate y descenso de cargas. La cuerda dinámica tiene alto estiramiento (25-35%) y absorbe la energía de impacto en caídas, ideal para escalada donde hay riesgo de caídas con factor de caída alto.'
    },
    {
        question: '¿Cada cuánto tiempo debo retirar una cuerda de rescate?',
        answer: 'Depende del uso e inspección. Guía general: vida útil máxima de 10 años sin usar, 5 años con uso ocasional, 1-3 años con uso frecuente. Siempre retirar después de una caída con factor alto, exposición a químicos, daño visible o falla en inspección.'
    },
    {
        question: '¿Qué nudo es el más seguro para encordamiento?',
        answer: 'El ocho doble (figure eight follow-through) es considerado el más seguro para encordamiento al arnés. Conserva aproximadamente 75-80% de la resistencia de la cuerda, es fácil de verificar visualmente y no se afloja bajo carga.'
    },
    {
        question: '¿Por qué es importante el ángulo en un anclaje ecualizado?',
        answer: 'El ángulo entre los brazos del anclaje afecta la fuerza en cada punto. A 0° cada punto recibe 50% de la carga. A 60° cada punto recibe 58%. A 90° recibe 71%. A 120° recibe 100% (el total de la carga). Por eso se recomienda mantener ángulos menores a 60°.'
    },
    {
        question: '¿Qué es el factor de caída y por qué es importante?',
        answer: 'El factor de caída es la relación entre la distancia de caída y la longitud de cuerda disponible para absorberla (Factor = Caída/Cuerda). Un factor 2 es el máximo posible y muy peligroso. Cuanto mayor el factor, mayor la fuerza de impacto. Por eso en rescate con cuerdas estáticas evitamos cualquier posibilidad de caída.'
    },
    {
        question: '¿Cuándo debo usar un backup o autoseguro en rapel?',
        answer: 'SIEMPRE. Un prusik o dispositivo autobloqueante bajo el dispositivo de descenso es estándar de seguridad. Si pierdes el control de la cuerda de freno (desmayo, impacto con roca, etc.), el backup detendrá la caída.'
    },
    {
        question: '¿Qué significa SERENE-A en anclajes?',
        answer: 'SERENE-A es un acrónimo para evaluar anclajes: Solid (sólido), Equalized (ecualizado), Redundant (redundante), Efficient (eficiente), No Extension (sin extensión en falla), Angles (ángulos apropiados). Todo anclaje de rescate debe cumplir estos criterios.'
    },
    {
        question: '¿Qué diferencia hay entre un bloqueador mecánico y un prusik?',
        answer: 'Los bloqueadores mecánicos (puños, bloqueadores de pecho) son más eficientes, cómodos y confiables en condiciones adversas, pero son específicos para dirección y pueden dañar la cuerda si se cargan dinámicamente. Los prusiks son versátiles, baratos y suaves con la cuerda, pero menos eficientes y pueden fallar en cuerdas mojadas o heladas.'
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
    { signal: '¡BAJANDO!', meaning: 'Iniciando descenso - todos alertas' },
    { signal: '¡ALTO!', meaning: 'Detener todo movimiento inmediatamente' },
    { signal: '¡FIRME!', meaning: 'Asegurar y mantener posición' },
    { signal: '¡LIBRE!', meaning: 'El rescatista se ha desconectado del sistema' },
    { signal: '¡TENSIÓN!', meaning: 'Aplicar tensión al sistema' },
    { signal: '¡FLOJO!', meaning: 'Dar cuerda/reducir tensión' },
    { signal: '¡CUERDA!', meaning: 'Advertencia de cuerda cayendo' },
    { signal: '¡ROCA!', meaning: 'Advertencia de objeto cayendo' }
];

