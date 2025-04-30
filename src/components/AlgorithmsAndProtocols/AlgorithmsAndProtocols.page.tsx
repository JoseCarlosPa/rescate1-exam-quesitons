import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge, MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {useCallback} from "react";
import { Connection } from "@xyflow/react";

const initialNodes = [
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
        style: {

        }
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
        position: { x: 250, y: 950 }, // Centrado debajo de las ramas
    },
];

const initialEdges = [
    { id: 'e1-2', source: 'escena', target: 'inicial', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2-3', source: 'inicial', target: 'tipoPaciente', markerEnd: { type: MarkerType.ArrowClosed } },

    { id: 'e3a-4a', source: 'tipoPaciente', target: 'traumatizadoDecision', label: 'Traumatizado', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e3b-4b', source: 'tipoPaciente', target: 'clinicoDecision', label: 'Clínico', markerEnd: { type: MarkerType.ArrowClosed } },

    { id: 'e4a-5a', source: 'traumatizadoDecision', target: 'traumaSig', label: 'Significativo', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4a-5b', source: 'traumatizadoDecision', target: 'traumaNoSig', label: 'No significativo', markerEnd: { type: MarkerType.ArrowClosed } },

    { id: 'e4b-6a', source: 'clinicoDecision', target: 'clinicoResp', label: 'Responsivo', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4b-6b', source: 'clinicoDecision', target: 'clinicoInco', label: 'Inconsciente', markerEnd: { type: MarkerType.ArrowClosed } },

    { id: 'e5a-7', source: 'traumaSig', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e5b-7', source: 'traumaNoSig', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6a-7', source: 'clinicoResp', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6b-7', source: 'clinicoInco', target: 'evalCurso', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
];

export default function AlgorithmsAndProtocols(){

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (

        <div className="w-full h-[800px] border border-gray-300">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}