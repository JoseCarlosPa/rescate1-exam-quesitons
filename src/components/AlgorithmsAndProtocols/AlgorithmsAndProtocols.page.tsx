import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Panel
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { Connection } from "@xyflow/react";
import { 
    allProtocols, 
    protocolCategories,
    Protocol
} from "./AlgorithmsAndProtocols.constants.tsx";
import { NavLink } from "react-router";
import { AllRoutes } from "../Router/Router.constants";
import { IoReturnDownBack } from "react-icons/io5";
import { LuNetwork } from "react-icons/lu";
import { FaInfoCircle, FaMedkit, FaBriefcaseMedical } from "react-icons/fa";
import { TbEmergencyBed } from "react-icons/tb";
import { GiMedicalPack } from "react-icons/gi";

export default function AlgorithmsAndProtocols() {
    // Estado para el protocolo seleccionado
    const [selectedProtocol, setSelectedProtocol] = useState<Protocol>(allProtocols[0]);
    // Estado para la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    // Estado para mostrar/ocultar información del protocolo
    const [showInfo, setShowInfo] = useState(false);

    // Estados para los nodos y conexiones
    const [nodes, setNodes, onNodesChange] = useNodesState(selectedProtocol.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(selectedProtocol.edges);

    // Callback para conectar nodos
    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    // Obtener el icono de categoría correspondiente
    const getCategoryIcon = (categoryId: string) => {
        switch (categoryId) {
            case 'basic':
                return <FaMedkit className="mr-2" />;
            case 'advanced':
                return <FaBriefcaseMedical className="mr-2" />;
            case 'trauma':
                return <TbEmergencyBed className="mr-2" />;
            case 'medical':
                return <GiMedicalPack className="mr-2" />;
            default:
                return <LuNetwork className="mr-2" />;
        }
    };

    // Filtrar protocolos por categoría
    const filteredProtocols = selectedCategory === 'all'
        ? allProtocols
        : allProtocols.filter((protocol: Protocol) => protocol.category === selectedCategory);

    // Cambiar el protocolo seleccionado
    const handleProtocolChange = (protocolId: string) => {
        const protocol = allProtocols.find((p: Protocol) => p.id === protocolId);
        if (protocol) {
            setSelectedProtocol(protocol);
            setNodes(protocol.nodes);
            setEdges(protocol.edges);
            // Mostrar automáticamente la información al cambiar de protocolo
            setShowInfo(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white py-8 px-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <LuNetwork className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Algoritmos y Protocolos</h1>
                        <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto" />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>

                    {/* Selector de categorías */}
                    <div className="mb-6 flex flex-wrap justify-center gap-2">
                        {protocolCategories.map((category: any) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center ${
                                    selectedCategory === category.id
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {getCategoryIcon(category.id)}
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Selector de protocolos */}
                    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredProtocols.length > 0 ? (
                            filteredProtocols.map((protocol: Protocol) => (
                                <button
                                    key={protocol.id}
                                    onClick={() => handleProtocolChange(protocol.id)}
                                    className={`p-4 rounded-lg shadow transition ${
                                        selectedProtocol.id === protocol.id
                                            ? 'bg-orange-100 border-2 border-orange-500'
                                            : 'bg-white hover:bg-orange-50 border border-gray-200'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        {getCategoryIcon(protocol.category)}
                                        <h3 className="font-bold text-lg">{protocol.name}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{protocol.description}</p>
                                </button>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-8 bg-gray-100 rounded-lg">
                                <p className="text-gray-500">No hay protocolos disponibles en esta categoría.</p>
                            </div>
                        )}
                    </div>

                    {/* Información del protocolo seleccionado */}
                    {showInfo && (
                        <div className="mb-6 bg-white rounded-lg p-4 shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center">
                                    {getCategoryIcon(selectedProtocol.category)}
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">{selectedProtocol.name}</h2>
                                        <p className="text-gray-700">{selectedProtocol.description}</p>
                                        <div className="mt-2 flex items-center">
                                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                                Categoría: {protocolCategories.find((cat: any) => cat.id === selectedProtocol.category)?.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowInfo(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <span className="sr-only">Cerrar</span>
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Diagrama de flujo */}
                    <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md">
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            fitView
                            minZoom={0.1}
                            maxZoom={2}
                            nodesDraggable={false}
                            elementsSelectable={false}
                        >
                            <Panel position="top-right" className="flex gap-2">
                                <button
                                    onClick={() => setShowInfo(!showInfo)}
                                    className="flex items-center gap-2 bg-white rounded-md shadow px-3 py-2 text-sm hover:bg-gray-100 transition"
                                >
                                    <FaInfoCircle className="text-blue-500" />
                                    {showInfo ? 'Ocultar info' : 'Mostrar info'}
                                </button>
                            </Panel>
                            <Controls />
                            <MiniMap 
                                nodeStrokeWidth={3}
                                zoomable
                                pannable
                            />
                            <Background gap={12} size={1} color="#f1f5f9" />
                        </ReactFlow>
                    </div>

                    {/* Notas adicionales */}
                    <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Nota importante</h3>
                        <p className="text-blue-800">
                            Estos algoritmos son representaciones visuales de protocolos estándar con fines educativos. 
                            En situaciones reales, sigue los protocolos actualizados de tu institución y recuerda que el juicio clínico 
                            debe adaptarse a cada paciente.
                        </p>
                    </div>
                    
                    {/* Instrucciones de uso */}
                    <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Instrucciones de uso</h3>
                        <ul className="list-disc pl-5 text-green-800">
                            <li>Selecciona una categoría para filtrar los protocolos</li>
                            <li>Haz clic en un protocolo para visualizarlo</li>
                            <li>Usa los controles de zoom para acercar o alejar el diagrama</li>
                            <li>Arrastra el diagrama para moverte por él</li>
                            <li>Usa el minimapa para orientarte en diagramas grandes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}