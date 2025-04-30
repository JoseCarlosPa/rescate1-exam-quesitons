import {useMemo, useState} from "react";
import {terminosData} from "./Glosary.constants";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";


const typeOrder = {
    'mnemotecnia': 1,
    'termino': 2,
    'prefijo': 3,
    'sufijo': 4
};

type Tipo = 'mnemotecnia' | 'termino' | 'prefijo' | 'sufijo';

const sortedData = [...terminosData].sort((a, b) => {
    const orderA = typeOrder[a.tipo] ?? 99;
    const orderB = typeOrder[b.tipo] ?? 99;
    if (orderA !== orderB) {
        return orderA - orderB;
    }
    return a.termino.localeCompare(b.termino);
});


export default function Glosary() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('todos');

    const filteredTerminos = useMemo(() => {
        const result = sortedData.filter(item => {
            const searchMatch = (
                item.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.ejemplo && item.ejemplo.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            const typeMatch = filterType === 'todos' || item.tipo === filterType;

            return searchMatch && typeMatch;
        });

        console.log('Filtered Data:', result); // Verifica si hay duplicados aquí
        return result;
    }, [searchTerm, filterType]);

    const filterOptions = [
        {label: 'Todos', value: 'todos'},
        {label: 'Mnemotecnias', value: 'mnemotecnia'},
        {label: 'Términos', value: 'termino'},
        {label: 'Prefijos', value: 'prefijo'},
        {label: 'Sufijos', value: 'sufijo'},
    ];

    const getCardStyle = (tipo: Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return 'bg-blue-50 border-blue-200 hover:border-blue-300';
            case 'sufijo':
                return 'bg-green-50 border-green-200 hover:border-green-300';
            case 'mnemotecnia':
                return 'bg-purple-50 border-purple-200 hover:border-purple-300';
            default:
                return 'bg-white border-gray-200 hover:border-gray-300';
        }
    };

    const getTypeLabel = (tipo: Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return <span className="text-xs font-semibold uppercase text-blue-600">[Prefijo]</span>;
            case 'sufijo':
                return <span className="text-xs font-semibold uppercase text-green-600">[Sufijo]</span>;
            case 'mnemotecnia':
                return <span className="text-xs font-semibold uppercase text-purple-600">[Mnemotecnia]</span>;
            default:
                return null;
        }
    }

    return (
        <div className="p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
                Glosario de Términos Médicos Prehospitalarios
            </h1>

            <div className="mb-6 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="Buscar término, definición o ejemplo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                    aria-label="Buscar en el glosario"
                />
            </div>

            <div className="flex justify-center">
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {filterOptions.map(option => (
                    <button
                        key={option.value}
                        onClick={() => setFilterType(option.value)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out
              ${filterType === option.value
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>


            <div className="space-y-6">
                {filteredTerminos.length > 0 ? (
                    filteredTerminos.map((item, index) => (
                        <div
                            key={`${item.termino}-${index}`} // Combina el término con el índice para garantizar unicidad
                            className={`p-5 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 ${getCardStyle(item.tipo)}`}
                        >
                            <div className="flex justify-between items-baseline mb-2 flex-wrap gap-x-2">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                    {item.termino}
                                </h2>
                                {getTypeLabel(item.tipo)}
                            </div>

                            <p className="text-gray-700 mb-2 text-base md:text-lg whitespace-pre-line">
                                <strong className="font-medium text-gray-900">Definición:</strong> {item.definicion}
                            </p>
                            {item.ejemplo && (
                                <p className="text-gray-600 italic text-sm md:text-base whitespace-pre-line">
                                    <strong
                                        className="font-medium text-gray-700 not-italic">Ejemplo/Desglose:</strong> {item.ejemplo}
                                </p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-10">
                        No se encontraron resultados para
                        "{searchTerm}" {filterType !== 'todos' ? `en la categoría "${filterType}"` : ''}.
                    </p>
                )}
            </div>

            {/* Nota al final */}
            <p className="mt-10 text-center text-sm text-gray-500">
                Nota: Este glosario es una guía general y no sustituye la formación profesional. Siempre consulta a un experto o profesional de la salud para obtener información precisa y actualizada.
            </p>
        </div>
    );
}