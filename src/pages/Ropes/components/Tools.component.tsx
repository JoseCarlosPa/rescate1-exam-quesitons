import { useState } from 'react';
import { GiRopeBridge } from 'react-icons/gi';
import { TbMathFunction, TbAngle, TbArrowBigDownLines } from 'react-icons/tb';
import { MdOutlineWarningAmber } from 'react-icons/md';
import PolipastoCalculator from './calculators/PolipastoCalculator';
import AnchorLoadCalculator from './calculators/AnchorLoadCalculator';
import DescentCalculator from './calculators/DescentCalculator';
import FallFactorCalculator from './calculators/FallFactorCalculator';

type ToolTab = 'polipasto' | 'anchor' | 'descent' | 'fallfactor';

interface ToolDefinition {
    id: ToolTab;
    label: string;
    shortLabel: string;
    icon: React.ReactNode;
    description: string;
    color: string;
    bgColor: string;
    borderColor: string;
}

const TOOLS: ToolDefinition[] = [
    {
        id: 'polipasto',
        label: 'Calculadora de Polipasto',
        shortLabel: 'Polipasto',
        icon: <GiRopeBridge className="w-5 h-5" />,
        description: 'Ventaja mecánica, fuerza de hale y carga en anclaje para sistemas 2:1 a 6:1',
        color: '#d97706',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-400',
    },
    {
        id: 'anchor',
        label: 'Carga en Anclaje',
        shortLabel: 'Anclaje',
        icon: <TbAngle className="w-5 h-5" />,
        description: 'Tensión en cada rama del anclaje según el ángulo de apertura del sistema en V',
        color: '#2563eb',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-400',
    },
    {
        id: 'descent',
        label: 'Descenso Controlado',
        shortLabel: 'Descenso',
        icon: <TbArrowBigDownLines className="w-5 h-5" />,
        description: 'Fuerza de frenado, tiempo de descenso y longitud de cuerda necesaria',
        color: '#16a34a',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-400',
    },
    {
        id: 'fallfactor',
        label: 'Factor de Caída',
        shortLabel: 'Factor Caída',
        icon: <MdOutlineWarningAmber className="w-5 h-5" />,
        description: 'Evaluador de severidad de caída y estimación de fuerza de impacto',
        color: '#dc2626',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-400',
    },
];

export default function Tools() {
    const [activeTool, setActiveTool] = useState<ToolTab>('polipasto');

    const currentTool = TOOLS.find(t => t.id === activeTool)!;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-500 to-orange-600 shadow">
                    <TbMathFunction className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Herramientas de Cálculo</h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Calculadoras interactivas para toma de decisiones en campo durante rescate técnico con cuerdas.
                    </p>
                </div>
            </div>

            {/* Tool selector cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {TOOLS.map(tool => (
                    <button
                        key={tool.id}
                        onClick={() => setActiveTool(tool.id)}
                        className={`text-left p-3 rounded-xl border-2 transition-all duration-200 group ${
                            activeTool === tool.id
                                ? `${tool.bgColor} ${tool.borderColor} shadow-md`
                                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                    >
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors"
                            style={{
                                backgroundColor: activeTool === tool.id ? tool.color : '#f3f4f6',
                                color: activeTool === tool.id ? 'white' : tool.color,
                            }}
                        >
                            {tool.icon}
                        </div>
                        <p
                            className="text-sm font-semibold transition-colors"
                            style={{ color: activeTool === tool.id ? tool.color : '#374151' }}
                        >
                            {tool.shortLabel}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 leading-tight hidden md:block">
                            {tool.description}
                        </p>
                    </button>
                ))}
            </div>

            {/* Active tool panel */}
            <div className={`rounded-xl border-2 p-5 transition-all duration-300 ${currentTool.bgColor} ${currentTool.borderColor}`}>
                {/* Tool header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/60">
                    <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: currentTool.color }}
                    >
                        {currentTool.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">{currentTool.label}</h3>
                        <p className="text-xs text-gray-500">{currentTool.description}</p>
                    </div>
                </div>

                {/* Calculator content */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    {activeTool === 'polipasto' && <PolipastoCalculator />}
                    {activeTool === 'anchor'    && <AnchorLoadCalculator />}
                    {activeTool === 'descent'   && <DescentCalculator />}
                    {activeTool === 'fallfactor' && <FallFactorCalculator />}
                </div>
            </div>

            {/* Disclaimer */}
            <div className="flex gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-800">
                <span className="text-base flex-shrink-0">⚠️</span>
                <p>
                    <strong>Disclaimer:</strong> Estas calculadoras son herramientas educativas y de apoyo a la decisión.
                    Los valores son teóricos y no reemplazan el criterio del rescatador certificado, capacitación formal,
                    ni las especificaciones del fabricante del equipo. Siempre use factores de seguridad ≥ 10:1 (NFPA 1006).
                </p>
            </div>
        </div>
    );
}
