import {useState} from "react";
import { terminosData } from "./Glosary.constants";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";


terminosData.sort((a, b) => {
    if (a.tipo !== 'termino' && b.tipo === 'termino') return 1;
    if (a.tipo === 'termino' && b.tipo !== 'termino') return -1;
    return a.termino.localeCompare(b.termino);
});

type Tipo = 'prefijo' | 'sufijo' | 'termino';


export default function Glosary(){

    const [searchTerm, setSearchTerm] = useState('');



    const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredTerminos = terminosData.filter(item =>
        item.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.ejemplo && item.ejemplo.toLowerCase().includes(searchTerm.toLowerCase())) // Opcional: buscar también en ejemplos
    );

    const getCardStyle = (tipo: Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return 'bg-blue-50 border-blue-200';
            case 'sufijo':
                return 'bg-green-50 border-green-200';
            default:
                return 'bg-white border-gray-200';
        }
    };

    const getTypeLabel = (tipo:Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return <span className="text-xs font-semibold uppercase text-blue-600">[Prefijo]</span>;
            case 'sufijo':
                return <span className="text-xs font-semibold uppercase text-green-600">[Sufijo]</span>;
            default:
                return null;
        }
    }


    return (
        <div className="p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
                Glosario de Términos Médicos Prehospitalarios
            </h1>

            <div className="mb-8 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="Buscar término, definición o ejemplo..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                    aria-label="Buscar en el glosario"
                />
            </div>
            <div className="flex justify-center">
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>


            <div className="space-y-6">
                {filteredTerminos.length > 0 ? (
                    filteredTerminos.map((item, index) => (
                        <div
                            key={index}
                            className={`p-5 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 ${getCardStyle(item.tipo)}`}
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                    {item.termino}
                                </h2>
                                {getTypeLabel(item.tipo)} {/* Muestra [Prefijo] o [Sufijo] */}
                            </div>

                            <p className="text-gray-700 mb-2 text-base md:text-lg">
                                <strong className="font-medium text-gray-900">Definición:</strong> {item.definicion}
                            </p>
                            {item.ejemplo && (
                                <p className="text-gray-600 italic text-sm md:text-base">
                                    <strong className="font-medium text-gray-700 not-italic">Ejemplo:</strong> {item.ejemplo}
                                </p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-10">
                        No se encontraron términos que coincidan con "{searchTerm}".
                    </p>
                )}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
                Nota: Este glosario es una guía general. Consulte siempre el material de referencia oficial
                ("Atención Prehospitalaria Básica, 11ª Edición", AAOS) para obtener definiciones precisas y completas.
            </p>
        </div>
    );
}