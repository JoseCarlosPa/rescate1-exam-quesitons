import {NavLink} from "react-router";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import {IoGameController} from "react-icons/io5";
import {FaQuestionCircle} from "react-icons/fa";
import {GiBrain} from "react-icons/gi";
import logo from "../../assets/logo.png";

export default function Games() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <img src={logo} alt="Logo" className="h-24 w-24 mx-auto mb-6"/>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        🎮 Juegos Educativos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Aprende mientras te diviertes con nuestros juegos interactivos de medicina prehospitalaria
                    </p>
                </div>

                {/* Games Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Jeopardy Card */}
                    <NavLink
                        to={AllRoutes.JEOPARDY}
                        className="group bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition duration-300 border-4 border-yellow-400 hover:border-yellow-300"
                    >
                        <div className="text-center">
                            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                                <IoGameController className="text-purple-700 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-3">
                                Jeopardy Médico
                            </h2>
                            <p className="text-gray-200 mb-4">
                                Compite por equipos respondiendo preguntas de medicina prehospitalaria
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    Multijugador
                                </span>
                                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    30 Preguntas
                                </span>
                                <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    6 Categorías
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Trivia Card */}
                    <NavLink
                        to={AllRoutes.TRIVIA}
                        className="group bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition duration-300 border-4 border-blue-400 hover:border-blue-300"
                    >
                        <div className="text-center">
                            <div className="bg-blue-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                                <FaQuestionCircle className="text-indigo-700 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-3">
                                Trivia Rápida
                            </h2>
                            <p className="text-gray-200 mb-4">
                                Responde preguntas contra el reloj y mejora tu tiempo de respuesta
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                <span className="bg-blue-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    Individual
                                </span>
                                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    Contrarreloj
                                </span>
                                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    4 Niveles
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Memory Match Card */}
                    <NavLink
                        to={AllRoutes.MEMORY_MATCH}
                        className="group bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition duration-300 border-4 border-pink-400 hover:border-pink-300"
                    >
                        <div className="text-center">
                            <div className="bg-pink-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                                <GiBrain className="text-purple-700 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-3">
                                Memory Match
                            </h2>
                            <p className="text-gray-200 mb-4">
                                Encuentra las parejas de términos médicos y sus definiciones
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                <span className="bg-pink-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    Individual
                                </span>
                                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    30 Parejas
                                </span>
                                <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    3 Niveles
                                </span>
                            </div>
                        </div>
                    </NavLink>

                </div>

                {/* Back Button */}
                <div className="text-center mt-12">
                    <NavLink
                        to={AllRoutes.MAIN}
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-gray-200 font-bold py-4 px-8 rounded-lg transition duration-200 text-lg shadow-lg"
                    >
                        ← Volver al Inicio
                    </NavLink>
                </div>

                {/* Info Section */}
                <div className="mt-16 max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-500 mb-4 text-center">
                        ¿Por qué Jugar?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl mb-2">🎯</div>
                            <h4 className="text-gray-500 font-semibold mb-2">Aprendizaje Activo</h4>
                            <p className="text-gray-500 text-sm">
                                Refuerza tus conocimientos de forma divertida
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">🏆</div>
                            <h4 className="text-gray-500 font-semibold mb-2">Competencia Sana</h4>
                            <p className="text-gray-500 text-sm">
                                Compite con tus compañeros y mejora juntos
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">📚</div>
                            <h4 className="text-gray-500 font-semibold mb-2">Contenido AAOS</h4>
                            <p className="text-gray-500 text-sm">
                                Basado en el libro de atención prehospitalaria
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

