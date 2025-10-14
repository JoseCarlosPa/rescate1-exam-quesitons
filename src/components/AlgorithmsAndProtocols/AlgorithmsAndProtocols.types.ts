
// Interfaz base para los nodos
import {MarkerType} from "@xyflow/react";

export interface FlowNode {
    id: string;
    type?: 'input' | 'output' | 'default'; // El tipo es opcional en la definición base pero requerido en la práctica
    data: {
        label: React.ReactNode;
    };
    position: { x: number; y: number };
    style?: React.CSSProperties;
}

// Interfaz base para las conexiones
export interface FlowEdge {
    id: string;
    source: string;
    target: string;
    label?: string;
    type?: string;
    markerEnd?: { type: MarkerType };
    style?: React.CSSProperties;
    animated?: boolean;
}

// Interfaz para definir un protocolo completo
export interface Protocol {
    id: string;
    name: string;
    description: string;
    category: string ;
    nodes: FlowNode[];
    edges: FlowEdge[];
}
