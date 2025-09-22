import {temasLSM} from "./Lms.constants.ts";
import {NavLink} from "react-router";
import {FaArrowLeft, FaBook, FaGraduationCap, FaHandScissors, FaPlay, FaSearch, FaUsers} from "react-icons/fa";
import {useState} from "react";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component.tsx";

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

    // Función para obtener el icono según el tipo de referencia
    const getTypeIcon = (tipo: string) => {
        switch (tipo) {
            case 'video':
                return <FaPlay className="text-red-500"/>;
            case 'artículo':
                return <FaBook className="text-blue-500"/>;
            case 'curso':
                return <FaGraduationCap className="text-green-500"/>;
            default:
                return <FaBook className="text-gray-500"/>;
        }
    };

    return (
        <SEOWrapper
            title="Lengua de Señas Mexicana (LSM) - Aprende LSM | EMT EXAM"
            description="Curso básico de Lengua de Señas Mexicana (LSM) para personal de emergencias médicas. Aprende comunicación básica con pacientes sordos."
            keywords="lengua de señas mexicana, lsm, comunicación sorda, emergencias médicas, atención pacientes sordos"
            section="lms"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pb-12">
                {/* Hero Section mejorado */}
                <div
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-4 md:px-8 shadow-2xl relative overflow-hidden">
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div
                            className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                        <div
                            className="absolute top-32 right-20 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl"></div>
                        <div
                            className="absolute bottom-10 left-1/3 w-24 h-24 bg-white bg-opacity-5 rounded-full blur-lg"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-60"></div>
                                <FaHandScissors className="relative text-yellow-400 w-20 h-20 drop-shadow-lg"/>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                            Aprende Lengua de Señas Mexicana
                        </h1>
                        <p className="text-center text-blue-100 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                            Descubre el fascinante mundo de la LSM y conecta con la comunidad sorda de México.
                            Una herramienta esencial para profesionales de la salud y emergencias médicas.
                        </p>
                        <div className="flex justify-center">
                            <NavLink to="/"
                                     className="flex items-center gap-3 bg-white text-blue-700 shadow-lg rounded-full px-6 py-3 hover:bg-yellow-50 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold">
                                <FaArrowLeft className="text-lg"/>
                                <span>Regresar al inicio</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <section className="container mx-auto px-4 md:px-8 py-12">
                    {/* Búsqueda y filtros mejorados */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                            <div className="w-full md:w-1/2 relative">
                                <div className="absolute left-4 top-4 text-gray-400">
                                    <FaSearch className="w-5 h-5"/>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar temas de LSM..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-12 w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-wrap gap-3 justify-end">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedCategory === null
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                    }`}
                                >
                                    Todos
                                </button>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resultados mejorados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemas.length > 0 ? (
                            filteredTemas.map((tema, index) => (
                                <div
                                    key={tema.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col group border border-gray-100"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: 'fadeInUp 0.6s ease-out forwards'
                                    }}
                                >
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white relative overflow-hidden">
                                        <div
                                            className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -mr-12 -mt-12"></div>
                                        <h3 className="text-xl font-bold mb-2 relative z-10">
                                            {tema.titulo}
                                        </h3>
                                        <div className="flex items-center text-blue-100 text-sm">
                                            <FaUsers className="mr-2"/>
                                            <span>{tema.referencias.length} recursos disponibles</span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                            {tema.descripcion}
                                        </p>

                                        <div className="border-t pt-4">
                                            <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                                                <span
                                                    className="inline-block w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                                                Recursos de aprendizaje
                                            </h4>
                                            <div className="space-y-3">
                                                {tema.referencias.map((ref, index) => (
                                                    <div key={index}
                                                         className="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors duration-300 group">
                                                        <div className="mr-3">
                                                            {getTypeIcon(ref.tipo)}
                                                        </div>
                                                        <a
                                                            href={ref.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex-grow group-hover:underline"
                                                        >
                                                            {ref.nombre}
                                                        </a>
                                                        <span
                                                            className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                                                            {ref.tipo}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            {tema.referencias.some(ref => ref.url === '#') && (
                                                <div
                                                    className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                                    <p className="text-xs text-yellow-700 italic flex items-center">
                                                        <span className="mr-2">⚠️</span>
                                                        Algunos enlaces son ejemplos y necesitan ser actualizados.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <div className="max-w-md mx-auto">
                                    <div className="mb-6">
                                        <FaSearch className="mx-auto text-gray-400 w-16 h-16 mb-4"/>
                                    </div>
                                    <p className="text-gray-500 text-xl mb-2">No se encontraron resultados</p>
                                    <p className="text-gray-400 mb-6">Intenta con otros términos de búsqueda</p>
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedCategory(null);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                                    >
                                        Mostrar todos los temas
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sección informativa mejorada */}
                    <div
                        className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-4">
                                    <FaHandScissors className="text-white w-8 h-8"/>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Sabías que?</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                La Lengua de Señas Mexicana (LSM) es una lengua natural de expresión gesto-espacial
                                y percepción visual, gracias a la cual, las personas sordas pueden establecer un
                                canal de comunicación con su entorno.
                            </p>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <p className="text-gray-600 font-medium text-lg">
                                    💡 <strong>Consejo:</strong> La mejor forma de aprender LSM es practicando con
                                    hablantes nativos y tomando cursos formales.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SEOWrapper>
    );
}

// Agregar estilos CSS para la animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
