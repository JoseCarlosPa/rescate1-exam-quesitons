import { MarkerType } from "@xyflow/react";
import React from 'react'; // Necesario para usar JSX

// Interfaz base para los nodos
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
    category: 'basic' | 'advanced' | 'trauma' | 'medical';
    nodes: FlowNode[];
    edges: FlowEdge[];
}

// Protocolos disponibles

// 1. Protocolo de Evaluación del Paciente (Corregido)
export const patientEvaluationProtocol: Protocol = {
    id: "patient-evaluation",
    name: "Evaluación del Paciente",
    description: "Algoritmo de evaluación inicial y secundaria del paciente en el ámbito prehospitalario",
    category: "basic",
    nodes: [
        {
            id: 'escena',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Evaluación y seguridad de la escena</strong>
                        <br />• Aislamiento de sustancias corporales.
                        <br />• Seguridad de la escena.
                        <br />• Considerar el mecanismo/naturaleza lesión.
                        <br />• Determinar el número de pacientes.
                        <br />• Considerar recursos adicionales.
                        <br />• Considerar inmovilización de la columna cervical.
                    </>
                ),
            },
            position: { x: 250, y: 0 },
        },
        {
            id: 'inicial',
            // CORRECCIÓN: Se añadió el 'type' faltante.
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación Inicial</strong>
                        <br />• Acérquese y fórmese una impresión general
                        <br />• Determina la queja principal
                        <br />• Evalúe el estado de conciencia AVDI
                        <br />• Evalúe la vía aérea
                        <br />• Evalúe la respiración
                        <br />• Evalúe la circulación y buscar fuertes hemorragias
                        <br />• Identificar prioridad del paciente (Crítico/No crítico)
                        <br />• Tomar la decisión de transporte
                    </>
                ),
            },
            position: { x: 250, y: 350 },
        },
        {
            id: 'tipoPaciente',
            type: 'default',
            data: { label: 'Tipo de paciente' },
            position: { x: 250, y: 700 },
        },
        {
            id: 'traumatizadoDecision',
            type: 'default',
            data: { label: 'Mecanismo de lesión' },
            position: { x: 0, y: 800 },
        },
        {
            id: 'clinicoDecision',
            type: 'default',
            data: { label: 'Evaluar la respuesta' },
            position: { x: 600, y: 800 },
        },
        {
            id: 'traumaSig',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Evaluación rápida trauma</strong>
                        <br />*Línea basal de signos vitales
                        <br />*Historial SAMPLE
                        <br />*Reevaluar decisión de transporte
                    </>
                )
            },
            position: { x: 50, y: 950 },
        },
        {
            id: 'traumaNoSig',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Evaluación enfocada/Detallada</strong>
                        <br />*Línea basal de signos vitales
                        <br />*Historial SAMPLE
                        <br />*Reevaluar decisión de transporte
                    </>
                )
            },
            position: { x: -250, y: 950 },
        },
        {
            id: 'clinicoResp',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Evaluación enfocada/Detallada</strong>
                        <br />*Historia del padecimiento actual
                        <br />*Historia SAMPLE
                        <br />*Línea basal signos vitales
                        <br />*Reevaluar decisión de transporte
                    </>
                )
            },
            position: { x: 800, y: 950 },
        },
        {
            id: 'clinicoInco',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Evaluación rápida trauma</strong>
                        <br />*Línea basal de signos vitales
                        <br />*Historial SAMPLE
                        <br />*Reevaluar decisión de transporte
                    </>
                )
            },
            position: { x: 500, y: 950 },
        },
        {
            id: 'evalCurso',
             // CORRECCIÓN: Se añadió el 'type' faltante.
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación en curso</strong>
                        <br />*Practicar examen físico detallado
                        <br />*Repetir evaluación inicial
                        <br />*Reevaluar y registrar los signos vitales
                        <br />*Repetir la evaluación enfocada
                        <br />*Verificar las intervenciones
                    </>
                )
            },
            position: { x: 250, y: 1100 },
        },
    ],
    edges: [
        { id: 'eval-e1-2', source: 'escena', target: 'inicial', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e2-3', source: 'inicial', target: 'tipoPaciente', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e3a-4a', source: 'tipoPaciente', target: 'traumatizadoDecision', label: 'Traumatizado', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e3b-4b', source: 'tipoPaciente', target: 'clinicoDecision', label: 'Clínico', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e4a-5a', source: 'traumatizadoDecision', target: 'traumaSig', label: 'Significativo', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e4a-5b', source: 'traumatizadoDecision', target: 'traumaNoSig', label: 'No significativo', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e4b-6a', source: 'clinicoDecision', target: 'clinicoResp', label: 'Responsivo', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e4b-6b', source: 'clinicoDecision', target: 'clinicoInco', label: 'Inconsciente', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e5a-7', source: 'traumaSig', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e5b-7', source: 'traumaNoSig', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e6a-7', source: 'clinicoResp', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'eval-e6b-7', source: 'clinicoInco', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    ]
};

// 2. Protocolo BLS (Soporte Vital Básico) (Corregido)
export const blsProtocol: Protocol = {
    id: "bls",
    name: "BLS - Soporte Vital Básico",
    description: "Protocolo de Soporte Vital Básico para la atención de pacientes en paro cardiorrespiratorio",
    category: "basic",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Valoración de la seguridad</strong>
                        <br />• Asegurar el área
                        <br />• Usar EPP adecuado
                        <br />• Valorar riesgos
                    </>
                ),
            },
            position: { x: 250, y: 0 },
            style: { backgroundColor: '#f8fafc', borderColor: '#60a5fa' }
        },
        {
            id: 'evaluacionInicial',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación inicial</strong>
                        <br />• Verificar si responde
                        <br />• Si no responde: pedir ayuda y DEA
                        <br />• Colocar en posición supina
                    </>
                ),
            },
            position: { x: 250, y: 150 },
        },
        {
            id: 'verificarRespiracion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Verificar respiración y pulso</strong>
                        <br />• Comprobar respiración y pulso simultáneamente
                        <br />• Evaluar en menos de 10 segundos
                    </>
                ),
            },
            position: { x: 250, y: 300 },
        },
        {
            id: 'decisionRCP',
            type: 'default',
            data: { label: '¿Tiene pulso?' },
            position: { x: 250, y: 450 },
        },
        {
            id: 'rcp',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Iniciar RCP</strong>
                        <br />• Compresiones: 30
                        <br />• Ventilaciones: 2
                        <br />• Compresiones profundas: 5-6 cm
                        <br />• Frecuencia: 100-120/min
                        <br />• Permitir reexpansión completa
                        <br />• Minimizar interrupciones
                    </>
                ),
            },
            position: { x: 50, y: 600 },
            style: { backgroundColor: '#fee2e2', borderColor: '#f87171' }
        },
        {
            id: 'ventilacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Solo ventilación</strong>
                        <br />• 1 ventilación cada 6 segundos
                        <br />• Verificar pulso cada 2 minutos
                    </>
                ),
            },
            position: { x: 450, y: 600 },
            style: { backgroundColor: '#eff6ff', borderColor: '#93c5fd' }
        },
        {
            id: 'aplicarDEA',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Llegada del DEA</strong>
                        <br />• Encender el DEA
                        <br />• Colocar parches
                        <br />• Seguir indicaciones del DEA
                    </>
                ),
            },
            position: { x: 50, y: 800 },
        },
        {
            id: 'analisisDEA',
            type: 'default',
            data: { label: 'Análisis del DEA' },
            position: { x: 50, y: 950 },
        },
        {
            id: 'descarga',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Administrar descarga</strong>
                        <br />• Asegurar que nadie toque al paciente
                        <br />• Presionar botón de descarga
                    </>
                ),
            },
            position: { x: -150, y: 1050 },
            style: { backgroundColor: '#fef9c3', borderColor: '#facc15' }
        },
        {
            id: 'continuarRCP',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Reanudar RCP</strong>
                        <br />• Continuar inmediatamente 2 minutos de RCP
                        <br />• Seguir ciclos hasta SVA o recuperación
                    </>
                ),
            },
            position: { x: 250, y: 1050 },
        },
        {
            id: 'sva',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Entrega a SVA</strong>
                        <br />• Informar tiempos y maniobras
                        <br />• Continuar asistiendo al equipo
                    </>
                ),
            },
            position: { x: 250, y: 1200 },
            style: { backgroundColor: '#f0fdf4', borderColor: '#86efac' }
        }
    ],
    // CORRECCIÓN: IDs de 'edges' duplicados. Se han hecho únicos.
    edges: [
        { id: 'bls-e1-2', source: 'inicio', target: 'evaluacionInicial', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e2-3', source: 'evaluacionInicial', target: 'verificarRespiracion', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e3-4', source: 'verificarRespiracion', target: 'decisionRCP', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e4-5', source: 'decisionRCP', target: 'rcp', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e4-6', source: 'decisionRCP', target: 'ventilacion', label: 'Sí, sin respiración', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e5-7', source: 'rcp', target: 'aplicarDEA', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e7-8', source: 'aplicarDEA', target: 'analisisDEA', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e8-9', source: 'analisisDEA', target: 'descarga', label: 'Ritmo desfibrilable', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e8-10', source: 'analisisDEA', target: 'continuarRCP', label: 'No desfibrilable', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e9-10', source: 'descarga', target: 'continuarRCP', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e10-11', source: 'continuarRCP', target: 'sva', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'bls-e10-8', source: 'continuarRCP', target: 'analisisDEA', type: 'smoothstep', label: 'Después de 2 min', markerEnd: { type: MarkerType.ArrowClosed } },
    ]
};

// 3. Protocolo XABCDE (Corregido)
export const xabcdeProtocol: Protocol = {
    id: "xabcde",
    name: "XABCDE",
    description: "Evaluación sistemática de pacientes críticos con el método XABCDE",
    category: "basic",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Evaluación inicial y XABCDE</strong>
                        <br />• Aproximación con EPP adecuado
                        <br />• Impresión general
                    </>
                ),
            },
            position: { x: 250, y: 0 },
        },
        {
            id: 'x',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>X - Hemorragia exanguinante</strong>
                        <br />• Identificar hemorragias severas
                        <br />• Control inmediato de hemorragias
                        <br />• Torniquete si es necesario
                    </>
                ),
            },
            position: { x: 250, y: 150 },
            style: { backgroundColor: '#fee2e2', borderColor: '#ef4444' }
        },
        {
            id: 'a',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>A - Vía aérea</strong>
                        <br />• Evaluar permeabilidad
                        <br />• Buscar obstrucciones
                        <br />• Maniobras de apertura
                        <br />• Asegurar vía aérea si es necesario
                    </>
                ),
            },
            position: { x: 250, y: 300 },
            style: { backgroundColor: '#f1f5f9', borderColor: '#94a3b8' }
        },
        {
            id: 'b',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>B - Respiración</strong>
                        <br />• Evaluar calidad respiratoria
                        <br />• Verificar ventilación bilateral
                        <br />• Buscar lesiones: neumotórax, tórax inestable
                        <br />• Oxígeno si es necesario
                    </>
                ),
            },
            position: { x: 250, y: 450 },
            style: { backgroundColor: '#eff6ff', borderColor: '#3b82f6' }
        },
        {
            id: 'c',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>C - Circulación</strong>
                        <br />• Evaluar pulso (calidad, frecuencia)
                        <br />• Valorar perfusión (relleno capilar)
                        <br />• Control de hemorragias menores
                        <br />• Identificar signos de shock
                    </>
                ),
            },
            position: { x: 250, y: 600 },
            style: { backgroundColor: '#fff7ed', borderColor: '#f97316' }
        },
        {
            id: 'd',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>D - Déficit neurológico</strong>
                        <br />• Escala AVDI o Glasgow
                        <br />• Pupilas (tamaño, reactividad)
                        <br />• Valorar signos de focalización
                        <br />• Glucemia si es necesario
                    </>
                ),
            },
            position: { x: 250, y: 750 },
            style: { backgroundColor: '#faf5ff', borderColor: '#a855f7' }
        },
        {
            id: 'e',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>E - Exposición</strong>
                        <br />• Desvestir si es necesario
                        <br />• Buscar lesiones ocultas
                        <br />• Prevenir hipotermia
                        <br />• Evaluar SAMPLE, signos vitales
                    </>
                ),
            },
            position: { x: 250, y: 900 },
            style: { backgroundColor: '#f8fafc', borderColor: '#64748b' }
        },
        {
            id: 'reevaluacion',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Reevaluación continua</strong>
                        <br />• Repetir ABCDE periódicamente
                        <br />• Monitorizar signos vitales
                        <br />• Actualizar tratamiento según evolución
                    </>
                ),
            },
            position: { x: 250, y: 1050 },
        }
    ],
    // CORRECCIÓN: IDs de 'edges' duplicados. Se han hecho únicos.
    edges: [
        { id: 'xabcde-e0-1', source: 'inicio', target: 'x', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e1-2', source: 'x', target: 'a', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e2-3', source: 'a', target: 'b', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e3-4', source: 'b', target: 'c', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e4-5', source: 'c', target: 'd', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e5-6', source: 'd', target: 'e', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e6-7', source: 'e', target: 'reevaluacion', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'xabcde-e7-1', source: 'reevaluacion', target: 'x', type: 'smoothstep', label: 'Si hay deterioro', animated: true, style: { strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed } },
    ]
};

// 4. Protocolo ACLS (Soporte Vital Cardiovascular Avanzado) (Corregido)
export const aclsProtocol: Protocol = {
    id: "acls",
    name: "ACLS - Soporte Vital Cardiovascular Avanzado",
    description: "Protocolo avanzado para la atención de emergencias cardiovasculares y paro cardíaco",
    category: "advanced",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Paro cardíaco</strong>
                        <br />• Iniciar RCP de alta calidad
                        <br />• Oxígeno y acceso venoso
                        <br />• Monitor/desfibrilador
                    </>
                ),
            },
            position: { x: 250, y: 0 },
        },
        {
            id: 'ritmo',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Identificar ritmo</strong>
                        <br />• Evaluación de ritmo
                        <br />• Determinar desfibrilable o no
                    </>
                ),
            },
            position: { x: 250, y: 150 },
        },
        {
            id: 'decision',
            type: 'default',
            data: { label: '¿Ritmo desfibrilable?' },
            position: { x: 250, y: 300 },
        },
        {
            id: 'fv_tvsp',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>FV/TVSP</strong>
                        <br />• Desfibrilar 1 vez
                        <br />• Reanudar RCP inmediatamente
                    </>
                ),
            },
            position: { x: 50, y: 450 },
            style: { backgroundColor: '#fee2e2', borderColor: '#ef4444' }
        },
        {
            id: 'asistolia_aesp',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Asistolia/AESP</strong>
                        <br />• Continuar RCP
                        <br />• Identificar causas reversibles (Hs y Ts)
                    </>
                ),
            },
            position: { x: 450, y: 450 },
            style: { backgroundColor: '#eff6ff', borderColor: '#3b82f6' }
        },
        {
            id: 'rcpContinuado1',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>RCP 2 minutos</strong>
                        <br />• Acceso IV/IO
                        <br />• Epinefrina cada 3-5 min
                        <br />• Considerar vía aérea avanzada
                    </>
                ),
            },
            position: { x: 50, y: 600 },
        },
        {
            id: 'rcpContinuado2',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>RCP 2 minutos</strong>
                        <br />• Acceso IV/IO
                        <br />• Epinefrina cada 3-5 min
                        <br />• Considerar vía aérea avanzada
                    </>
                ),
            },
            position: { x: 450, y: 600 },
        },
        {
            id: 'ritmo2_1',
            type: 'default',
            data: { label: 'Verificar ritmo' },
            position: { x: 50, y: 750 },
        },
        {
            id: 'ritmo2_2',
            type: 'default',
            data: { label: 'Verificar ritmo' },
            position: { x: 450, y: 750 },
        },
        {
            id: 'rcp_fv_tv',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Continuar tratamiento</strong>
                        <br />• Amiodarona/Lidocaína
                        <br />• Tratar causas reversibles
                        <br />• Considerar otras terapias
                    </>
                ),
            },
            position: { x: 50, y: 900 },
        },
        {
            id: 'rcp_asistolia',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Continuar tratamiento</strong>
                        <br />• Epinefrina
                        <br />• Tratar causas reversibles
                        <br />• Considerar finalizar RCP
                    </>
                ),
            },
            position: { x: 450, y: 900 },
        },
        {
            id: 'rosc',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Retorno de circulación (ROSC)</strong>
                        <br />• Cuidados post-paro
                        <br />• Valorar temperatura
                        <br />• 12 derivaciones ECG
                        <br />• Optimizar ventilación/oxigenación
                        <br />• Considerar causa precipitante
                    </>
                ),
            },
            position: { x: 250, y: 1050 },
            style: { backgroundColor: '#f0fdf4', borderColor: '#22c55e' }
        }
    ],
    // CORRECCIÓN: IDs de 'edges' duplicados. Se han hecho únicos.
    edges: [
        { id: 'acls-e0-1', source: 'inicio', target: 'ritmo', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e1-2', source: 'ritmo', target: 'decision', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e2-3', source: 'decision', target: 'fv_tvsp', label: 'Sí', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e2-4', source: 'decision', target: 'asistolia_aesp', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e3-5', source: 'fv_tvsp', target: 'rcpContinuado1', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e4-6', source: 'asistolia_aesp', target: 'rcpContinuado2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e5-7', source: 'rcpContinuado1', target: 'ritmo2_1', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e6-8', source: 'rcpContinuado2', target: 'ritmo2_2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e7-9', source: 'ritmo2_1', target: 'rcp_fv_tv', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e8-10', source: 'ritmo2_2', target: 'rcp_asistolia', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e9-11', source: 'rcp_fv_tv', target: 'rosc', label: 'Si ROSC', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e10-11', source: 'rcp_asistolia', target: 'rosc', label: 'Si ROSC', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e9-7', source: 'rcp_fv_tv', target: 'ritmo2_1', type: 'smoothstep', label: 'Continuar ciclos', animated: true, style: { strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'acls-e10-8', source: 'rcp_asistolia', target: 'ritmo2_2', type: 'smoothstep', label: 'Continuar ciclos', animated: true, style: { strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed } },
    ]
};

// 5. Protocolo Trauma (PHTLS) (Corregido y Completado)
export const phtlsProtocol: Protocol = {
    id: "phtls",
    name: "PHTLS - Soporte Vital en Trauma Prehospitalario",
    description: "Enfoque sistemático para la evaluación y manejo del paciente politraumatizado",
    category: "trauma",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Evaluación de escena</strong>
                        <br />• Seguridad del equipo
                        <br />• Mecanismo de lesión
                        <br />• Número de víctimas
                        <br />• Recursos necesarios
                    </>
                ),
            },
            position: { x: 250, y: 0 },
        },
        {
            id: 'xabcde',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación primaria: XABCDE</strong>
                        <br />• X: Hemorragia exanguinante
                        <br />• A: Vía aérea + control cervical
                        <br />• B: Respiración/ventilación
                        <br />• C: Circulación y control hemorragia
                        <br />• D: Déficit neurológico
                        <br />• E: Exposición/ambiente
                    </>
                ),
            },
            position: { x: 250, y: 150 },
            style: { backgroundColor: '#fee2e2', borderColor: '#ef4444' }
        },
        {
            id: 'prioridad',
            type: 'default',
            data: { label: 'Decisión de prioridad de transporte' },
            position: { x: 250, y: 350 },
        },
        {
            id: 'transporteInmediato',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Transporte inmediato</strong>
                        <br />• Paciente crítico (tiempo oro)
                        <br />• Iniciar traslado rápido
                        <br />• Intervenciones limitadas en escena
                    </>
                ),
            },
            position: { x: 50, y: 500 },
            style: { backgroundColor: '#fee2e2', borderColor: '#ef4444' }
        },
        {
            id: 'evaluacionSecundaria',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación secundaria</strong>
                        <br />• Examen físico detallado
                        <br />• Signos vitales completos
                        <br />• Historia SAMPLE
                        <br />• Evaluación por sistemas
                    </>
                ),
            },
            position: { x: 450, y: 500 },
        },
        {
            id: 'traumaSpecific',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Manejo específico por trauma</strong>
                        <br />• TCE
                        <br />• Trauma torácico
                        <br />• Trauma abdominal
                        <br />• Trauma musculoesquelético
                        <br />• Quemaduras
                    </>
                ),
            },
            position: { x: 450, y: 650 },
        },
        {
            id: 'reevaluacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Reevaluación</strong>
                        <br />• Repetir evaluación primaria
                        <br />• Monitorizar signos vitales
                        <br />• Reevaluar intervenciones
                    </>
                ),
            },
            position: { x: 250, y: 800 },
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte</strong>
                        <br />• Centro adecuado (trauma, quemados)
                        <br />• Comunicación con hospital
                        <br />• Continuar cuidados durante traslado
                    </>
                ),
            },
            position: { x: 250, y: 950 },
        }
    ],
    // CORRECCIÓN: Sección de 'edges' completada y con IDs únicos.
    edges: [
        { id: 'phtls-e0-1', source: 'inicio', target: 'xabcde', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e1-2', source: 'xabcde', target: 'prioridad', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e2-3', source: 'prioridad', target: 'transporteInmediato', label: 'Crítico', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e2-4', source: 'prioridad', target: 'evaluacionSecundaria', label: 'No crítico', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e4-5', source: 'evaluacionSecundaria', target: 'traumaSpecific', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e3-6', source: 'transporteInmediato', target: 'reevaluacion', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e5-6', source: 'traumaSpecific', target: 'reevaluacion', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'phtls-e6-7', source: 'reevaluacion', target: 'transporte', markerEnd: { type: MarkerType.ArrowClosed } },
    ]
};

// Lista de todos los protocolos disponibles
export const allProtocols: Protocol[] = [
    patientEvaluationProtocol,
    blsProtocol,
    xabcdeProtocol,
    aclsProtocol,
    phtlsProtocol
];

// Categorías de protocolos
export const protocolCategories = [
    { id: 'all', name: 'Todos' },
    { id: 'basic', name: 'Básicos' },
    { id: 'advanced', name: 'Avanzados' },
    { id: 'trauma', name: 'Trauma' },
    { id: 'medical', name: 'Médicos' }
];