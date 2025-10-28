import { MemoryPair } from './MemoryMatch.types';

export const MEMORY_PAIRS: MemoryPair[] = [
    // Anatomía Básica
    {
        id: "pair-1",
        term: "Diafragma",
        definition: "Músculo principal de la respiración que separa tórax y abdomen",
        category: "Anatomía"
    },
    {
        id: "pair-2",
        term: "Carina",
        definition: "Punto donde la tráquea se bifurca en bronquios principales",
        category: "Anatomía"
    },
    {
        id: "pair-3",
        term: "Fémur",
        definition: "Hueso más largo y fuerte del cuerpo humano",
        category: "Anatomía"
    },
    {
        id: "pair-4",
        term: "Nervio Vago",
        definition: "Par craneal X que controla respuesta parasimpática",
        category: "Anatomía"
    },
    {
        id: "pair-5",
        term: "Apéndice",
        definition: "Órgano ubicado en cuadrante inferior derecho del abdomen",
        category: "Anatomía"
    },
    {
        id: "pair-6",
        term: "Arterias Carótidas",
        definition: "Principales arterias que irrigan sangre al cerebro",
        category: "Anatomía"
    },

    // Fisiología
    {
        id: "pair-7",
        term: "Hemoglobina",
        definition: "Proteína que transporta oxígeno en los glóbulos rojos",
        category: "Fisiología"
    },
    {
        id: "pair-8",
        term: "Taquicardia",
        definition: "Frecuencia cardíaca mayor a 100 latidos por minuto",
        category: "Fisiología"
    },
    {
        id: "pair-9",
        term: "Hipoxia",
        definition: "Disminución del nivel de oxígeno en tejidos",
        category: "Fisiología"
    },
    {
        id: "pair-10",
        term: "Bradicardia",
        definition: "Frecuencia cardíaca menor a 60 latidos por minuto",
        category: "Fisiología"
    },
    {
        id: "pair-11",
        term: "Hipertensión",
        definition: "Presión arterial sistólica mayor a 140 mmHg",
        category: "Fisiología"
    },
    {
        id: "pair-12",
        term: "Taquipnea",
        definition: "Frecuencia respiratoria mayor a 20 respiraciones/min",
        category: "Fisiología"
    },

    // Terminología Médica
    {
        id: "pair-13",
        term: "Cianosis",
        definition: "Coloración azulada de piel por falta de oxígeno",
        category: "Signos"
    },
    {
        id: "pair-14",
        term: "Disnea",
        definition: "Dificultad respiratoria o sensación de falta de aire",
        category: "Signos"
    },
    {
        id: "pair-15",
        term: "Shock",
        definition: "Perfusión inadecuada de órganos y tejidos",
        category: "Condiciones"
    },
    {
        id: "pair-16",
        term: "Apnea",
        definition: "Ausencia o cese de la respiración",
        category: "Signos"
    },
    {
        id: "pair-17",
        term: "Hemoptisis",
        definition: "Expectoración de sangre proveniente de vías respiratorias",
        category: "Signos"
    },
    {
        id: "pair-18",
        term: "Epistaxis",
        definition: "Sangrado nasal",
        category: "Signos"
    },

    // Técnicas y Procedimientos
    {
        id: "pair-19",
        term: "RCP",
        definition: "Reanimación Cardiopulmonar: compresiones y ventilaciones",
        category: "Técnicas"
    },
    {
        id: "pair-20",
        term: "DEA",
        definition: "Desfibrilador Externo Automático para arritmias letales",
        category: "Equipamiento"
    },
    {
        id: "pair-21",
        term: "Intubación",
        definition: "Colocación de tubo endotraqueal en vía aérea",
        category: "Técnicas"
    },
    {
        id: "pair-22",
        term: "Cricotirotomía",
        definition: "Incisión en membrana cricotiroidea para vía aérea urgente",
        category: "Técnicas"
    },
    {
        id: "pair-23",
        term: "Collar Cervical",
        definition: "Dispositivo de inmovilización para proteger columna cervical",
        category: "Equipamiento"
    },
    {
        id: "pair-24",
        term: "SAMPLE",
        definition: "Signos, Alergias, Medicamentos, Pasado, Última ingesta, Eventos",
        category: "Evaluación"
    },

    // Farmacología
    {
        id: "pair-25",
        term: "Epinefrina",
        definition: "Vasopresador usado en paro cardíaco y anafilaxia",
        category: "Farmacología"
    },
    {
        id: "pair-26",
        term: "Aspirina",
        definition: "Antiagregante plaquetario usado en síndrome coronario agudo",
        category: "Farmacología"
    },
    {
        id: "pair-27",
        term: "Glucosa",
        definition: "Azúcar simple para tratar hipoglucemia",
        category: "Farmacología"
    },
    {
        id: "pair-28",
        term: "Nitroglicerina",
        definition: "Vasodilatador para dolor torácico de origen cardíaco",
        category: "Farmacología"
    },
    {
        id: "pair-29",
        term: "Naloxona",
        definition: "Antagonista de opioides para revertir sobredosis",
        category: "Farmacología"
    },
    {
        id: "pair-30",
        term: "Oxígeno",
        definition: "Gas terapéutico para hipoxia e insuficiencia respiratoria",
        category: "Farmacología"
    }
];

export const DIFFICULTY_CONFIG = {
    easy: { pairs: 6, timeBonus: 120 },
    medium: { pairs: 12, timeBonus: 180 },
    hard: { pairs: 18, timeBonus: 240 }
};

export const CATEGORIES = [
    "Todas las Categorías",
    "Anatomía",
    "Fisiología",
    "Signos",
    "Condiciones",
    "Técnicas",
    "Equipamiento",
    "Evaluación",
    "Farmacología"
];

