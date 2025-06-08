import { temasLSM } from "./Lms.constants.ts";
import { NavLink } from "react-router";
import { FaHandScissors, FaSearch, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function Lms() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extraer categorías únicas de los temas
    const categories = Array.from(new Set(temasLSM.map(tema => tema.titulo.split(':')[0])));

    // Filtrar los temas basados en búsqueda y categoría
    const filteredTemas = temasLSM.filter(tema => {
        const matchesSearch = tema.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tema.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? tema.titulo.includes(selectedCategory) : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pb-12">
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white py-8 px-4 md:px-8 shadow-lg">
                <div className="container mx-auto">
                    <div className="flex justify-center mb-4">
                        <FaHandScissors className="text-yellow-400 w-16 h-16" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Aprende Lengua de Señas Mexicana (LSM)
                    </h2>
                    <p className="text-center text-gray-200 max-w-2xl mx-auto mb-6">
                        Explora nuestros recursos para aprender LSM, una herramienta fundamental para comunicarte con la comunidad sorda en México.
                    </p>
                    <NavLink to="/"
                        className="flex items-center gap-2 mx-auto mb-4 w-32 bg-white text-blue-800 shadow rounded-full p-2 hover:bg-yellow-100 transition duration-300 ease-in-out">
                        <FaArrowLeft />
                        <p className="text-lg">Regresar</p>
                    </NavLink>
                </div>
            </div>

            <section className="container mx-auto px-4 md:px-8 py-8">
                {/* Búsqueda y filtros */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="w-full md:w-1/2 relative">
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar temas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-end">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-3 py-1 rounded-full text-sm ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                Todos
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resultados */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemas.length > 0 ? (
                        filteredTemas.map((tema) => (
                            <div
                                key={tema.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col hover:shadow-xl"
                            >
                                <div className="bg-blue-50 p-4 border-l-4 border-blue-500">
                                    <h3 className="text-xl font-semibold text-blue-700">
                                        {tema.titulo}
                                    </h3>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        {tema.descripcion}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                                            Recursos para aprender más:
                                        </h4>
                                        <ul className="list-none space-y-2">
                                            {tema.referencias.map((ref, index) => (
                                                <li key={index} className="flex items-center hover:bg-gray-50 p-1 rounded">
                                                    <span className="text-blue-500 mr-2">&#10148;</span>
                                                    <a
                                                        href={ref.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors duration-200"
                                                    >
                                                        {ref.nombre}
                                                        <span className="ml-1 text-xs text-gray-500">({ref.tipo})</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        {tema.referencias.some(ref => ref.url === '#') && (
                                            <p className="text-xs text-red-500 mt-3 italic">
                                                *Nota: Algunos enlaces son ejemplos y necesitan ser actualizados.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500 text-lg">No se encontraron resultados para tu búsqueda.</p>
                            <button
                                onClick={() => {setSearchTerm(""); setSelectedCategory(null);}}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Mostrar todos los temas
                            </button>
                        </div>
                    )}
                </div>
                <div className="text-center mt-12 bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">¿Sabías que?</h3>
                    <p className="text-gray-600 mb-4">
                        La Lengua de Señas Mexicana (LSM) es una lengua natural de expresión gesto-espacial y percepción visual, gracias a la cual, las personas sordas pueden establecer un canal de comunicación con su entorno.
                    </p>
                    <p className="text-gray-600 font-medium">
                        Recuerda que la mejor forma de aprender LSM es practicando con hablantes nativos y tomando cursos formales.
                    </p>
                </div>
            </section>
        </div>
    );
}

