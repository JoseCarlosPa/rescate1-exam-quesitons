// Tipos para el módulo de Rescate con Cuerdas

export interface RopeKnot {
    id: string;
    name: string;
    spanishName: string;
    category: KnotCategory;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    uses: string[];
    steps: string[];
    tips: string[];
    imageUrl?: string;
    videoUrl?: string;
    safetyNotes: string[];
}

export type KnotCategory =
    | 'anchorage'
    | 'loop'
    | 'bend'
    | 'hitch'
    | 'stopper'
    | 'friction';

export interface RopeType {
    id: string;
    name: string;
    type: 'static' | 'dynamic' | 'accessory';
    diameter: string;
    breakingStrength: string;
    elongation: string;
    uses: string[];
    characteristics: string[];
    imageUrl?: string;
}

export interface RescueEquipment {
    id: string;
    name: string;
    category: EquipmentCategory;
    description: string;
    uses: string[];
    safetyConsiderations: string[];
    maintenance: string[];
    imageUrl?: string;
}

export type EquipmentCategory =
    | 'harness'
    | 'carabiner'
    | 'descender'
    | 'ascender'
    | 'pulley'
    | 'anchor'
    | 'protection'
    | 'communication';

export interface RescueTechnique {
    id: string;
    name: string;
    category: TechniqueCategory;
    difficulty: 'basic' | 'intermediate' | 'advanced';
    description: string;
    steps: string[];
    equipment: string[];
    safetyConsiderations: string[];
    commonMistakes: string[];
    imageUrl?: string;
}

export type TechniqueCategory =
    | 'rappel'
    | 'ascent'
    | 'lowering'
    | 'hauling'
    | 'traversing'
    | 'patient-packaging'
    | 'anchor-systems';

export interface RopeModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    route: string;
    topics: string[];
    duration: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface RopeQuestion {
    question: string;
    options: { letter: string; text: string }[];
    correctAnswer: string;
    explanation?: string;
}

export type RopeTab =
    | 'overview'
    | 'knots'
    | 'equipment'
    | 'techniques'
    | 'safety'
    | 'practice';

