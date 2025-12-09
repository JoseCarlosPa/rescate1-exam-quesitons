import { useState, ReactNode } from 'react';
import { RescueEquipment } from '../Rope.types';
import { MdCheckCircle, MdWarning, MdClose, MdSearch, MdBuild } from 'react-icons/md';
import { FaExclamationTriangle, FaTools, FaShieldAlt, FaWrench } from 'react-icons/fa';
import { BsGear, BsArrowRight } from 'react-icons/bs';
import { GiMountainClimbing, GiCog } from 'react-icons/gi';

interface EquipmentProps {
    equipment: RescueEquipment[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedEquipment: RescueEquipment | null;
    onSelectEquipment: (equipment: RescueEquipment) => void;
    onCloseEquipment: () => void;
}

const EQUIPMENT_IMAGES: Record<string, ReactNode> = {
    'full-body-harness': <GiMountainClimbing className="w-full h-full" />,
    'sit-harness': <GiMountainClimbing className="w-full h-full" />,
    'locking-carabiner': <BsGear className="w-full h-full" />,
    'descender-8': <GiCog className="w-full h-full" />,
    'descender-id': <GiCog className="w-full h-full" />,
    'ascender-handled': <BsGear className="w-full h-full" />,
    'pulley-rescue': <GiCog className="w-full h-full" />,
    'helmet': <FaShieldAlt className="w-full h-full" />,
};

export default function Equipment({
    equipment,
    searchQuery,
    onSearchChange,
    selectedEquipment,
    onSelectEquipment,
    onCloseEquipment
}: EquipmentProps) {
    const [categoryFilter, setCategoryFilter] = useState<string>('all');

    const filteredEquipment = equipment.filter(item => {
        if (categoryFilter === 'all') return true;
        return item.category === categoryFilter;
    });

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'harness': return 'bg-blue-100 text-blue-700 border-blue-300';
            case 'carabiner': return 'bg-green-100 text-green-700 border-green-300';
            case 'descender': return 'bg-purple-100 text-purple-700 border-purple-300';
            case 'ascender': return 'bg-orange-100 text-orange-700 border-orange-300';
            case 'pulley': return 'bg-teal-100 text-teal-700 border-teal-300';
            case 'anchor': return 'bg-red-100 text-red-700 border-red-300';
            case 'protection': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'communication': return 'bg-pink-100 text-pink-700 border-pink-300';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'harness': return 'Arnés';
            case 'carabiner': return 'Mosquetón';
            case 'descender': return 'Descensor';
            case 'ascender': return 'Bloqueador';
            case 'pulley': return 'Polea';
            case 'anchor': return 'Anclaje';
            case 'protection': return 'Protección';
            case 'communication': return 'Comunicación';
            default: return category;
        }
    };

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'harness', label: 'Arneses' },
        { id: 'carabiner', label: 'Mosquetones' },
        { id: 'descender', label: 'Descensores' },
        { id: 'ascender', label: 'Bloqueadores' },
        { id: 'pulley', label: 'Poleas' },
        { id: 'protection', label: 'Protección' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                    <BsGear className="w-8 h-8 text-green-600 mr-3"/>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Equipamiento de Rescate</h2>
                        <p className="text-gray-600">Conoce el equipo esencial para operaciones de rescate técnico</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Búsqueda */}
                    <div className="relative flex-1">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                        <input
                            type="text"
                            placeholder="Buscar equipo..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Filtro de categoría */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Información importante sobre el equipo */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                    <FaExclamationTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0"/>
                    <div>
                        <h3 className="font-bold text-amber-700">Importante sobre el equipo</h3>
                        <p className="text-amber-800 text-sm mt-1">
                            Todo el equipo de rescate debe ser inspeccionado antes de cada uso, almacenado
                            correctamente y reemplazado según las indicaciones del fabricante. Nunca uses
                            equipo dañado o con historial de carga desconocido.
                        </p>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <p className="text-gray-500 text-sm">
                Mostrando {filteredEquipment.length} elementos
            </p>

            {/* Grid de equipo */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredEquipment.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onSelectEquipment(item)}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
                    >
                        {/* Icono/Imagen */}
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white flex items-center justify-center">
                            <div className="w-16 h-16 text-white/90">
                                {EQUIPMENT_IMAGES[item.id] || <BsGear className="w-full h-full"/>}
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                                    {item.name}
                                </h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                                    {getCategoryLabel(item.category)}
                                </span>
                            </div>

                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center text-xs text-gray-500">
                                    <FaTools className="w-3 h-3 mr-1"/>
                                    <span>{item.uses.length} usos</span>
                                </div>
                                <span className="text-green-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                    Ver detalles <BsArrowRight className="ml-1"/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Guía rápida de inspección */}
            <div className="bg-slate-800 text-white rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaWrench className="w-5 h-5 mr-2 text-amber-400"/>
                    Guía Rápida de Inspección de Equipo
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-400 mb-2">Cuerdas y Cintas</h4>
                        <ul className="text-sm space-y-1 text-slate-300">
                            <li>• Revisar toda la longitud</li>
                            <li>• Buscar daños en la funda</li>
                            <li>• Verificar abrasiones</li>
                            <li>• Sentir el alma (no debe haber bultos)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-400 mb-2">Mosquetones</h4>
                        <ul className="text-sm space-y-1 text-slate-300">
                            <li>• Verificar cierre del gatillo</li>
                            <li>• Revisar sistema de seguro</li>
                            <li>• Buscar muescas o deformaciones</li>
                            <li>• Comprobar suavidad del mecanismo</li>
                        </ul>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-400 mb-2">Arneses</h4>
                        <ul className="text-sm space-y-1 text-slate-300">
                            <li>• Revisar todas las costuras</li>
                            <li>• Verificar hebillas y ajustes</li>
                            <li>• Buscar desgaste en puntos de anclaje</li>
                            <li>• Comprobar etiquetas legibles</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal de detalle del equipo */}
            {selectedEquipment && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header del modal */}
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white sticky top-0">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mr-4">
                                        {EQUIPMENT_IMAGES[selectedEquipment.id] || <BsGear className="w-full h-full"/>}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedEquipment.name}</h2>
                                        <span className={`text-xs px-2 py-1 rounded-full bg-white/20 mt-2 inline-block`}>
                                            {getCategoryLabel(selectedEquipment.category)}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={onCloseEquipment}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <MdClose className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Descripción */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">{selectedEquipment.description}</p>
                            </div>

                            {/* Usos */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2"/>
                                    Usos y Aplicaciones
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-2">
                                    {selectedEquipment.uses.map((use, idx) => (
                                        <li key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                                            <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                                            <span className="text-gray-700">{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Consideraciones de seguridad */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                    Consideraciones de Seguridad
                                </h3>
                                <ul className="space-y-2">
                                    {selectedEquipment.safetyConsiderations.map((note, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <MdWarning className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span className="text-red-800">{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Mantenimiento */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center">
                                    <MdBuild className="w-5 h-5 mr-2"/>
                                    Mantenimiento
                                </h3>
                                <ul className="space-y-2">
                                    {selectedEquipment.maintenance.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <FaWrench className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span className="text-blue-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

