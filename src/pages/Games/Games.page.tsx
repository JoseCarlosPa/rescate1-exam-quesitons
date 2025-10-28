import {NavLink} from "react-router";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import {IoGameController} from "react-icons/io5";
import {FaQuestionCircle, FaPuzzlePiece} from "react-icons/fa";
import {GiBrain} from "react-icons/gi";
import logo from "../../assets/logo.png";

export default function Games() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <img src={logo} alt="Logo" className="h-24 w-24 mx-auto mb-6"/>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-500 mb-4">
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

                    {/* Placeholder for Future Game 1 */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-8 opacity-60 border-4 border-gray-600 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-orange-500 text-gray-500 px-4 py-2 rounded-full text-sm font-bold rotate-12">
                            Próximamente
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaQuestionCircle className="text-gray-500 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-300 mb-3">
                                Trivia Rápida
                            </h2>
                            <p className="text-gray-500 mb-4">
                                Responde preguntas contra el reloj y mejora tu tiempo de respuesta
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Individual
                                </span>
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Contrarreloj
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for Future Game 2 */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-8 opacity-60 border-4 border-gray-600 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-orange-500 text-gray-500 px-4 py-2 rounded-full text-sm font-bold rotate-12">
                            Próximamente
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaPuzzlePiece className="text-gray-500 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-300 mb-3">
                                Rompecabezas Anatómico
                            </h2>
                            <p className="text-gray-500 mb-4">
                                Arma el rompecabezas del cuerpo humano mientras aprendes anatomía
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Puzzle
                                </span>
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Educativo
                                </span>
                            </div>
                        </div>
                    </div>

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

                    {/* Placeholder for Future Game 4 */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-8 opacity-60 border-4 border-gray-600 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-orange-500 text-gray-500 px-4 py-2 rounded-full text-sm font-bold rotate-12">
                            Próximamente
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <IoGameController className="text-gray-500 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-300 mb-3">
                                Simulador de Emergencias
                            </h2>
                            <p className="text-gray-500 mb-4">
                                Toma decisiones rápidas en escenarios de emergencia realistas
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Simulación
                                </span>
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Decisiones
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for Future Game 5 */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-8 opacity-60 border-4 border-gray-600 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-orange-500 text-gray-500 px-4 py-2 rounded-full text-sm font-bold rotate-12">
                            Próximamente
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaQuestionCircle className="text-gray-500 w-12 h-12"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-300 mb-3">
                                Batalla de Protocolos
                            </h2>
                            <p className="text-gray-500 mb-4">
                                Compite contra otros jugadores en tiempo real
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Online
                                </span>
                                <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Competitivo
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Back Button */}
                <div className="text-center mt-12">
                    <NavLink
                        to={AllRoutes.MAIN}
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-gray-500 font-bold py-4 px-8 rounded-lg transition duration-200 text-lg shadow-lg"
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
                            <p className="text-gray-300 text-sm">
                                Refuerza tus conocimientos de forma divertida
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">🏆</div>
                            <h4 className="text-gray-500 font-semibold mb-2">Competencia Sana</h4>
                            <p className="text-gray-300 text-sm">
                                Compite con tus compañeros y mejora juntos
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">📚</div>
                            <h4 className="text-gray-500 font-semibold mb-2">Contenido AAOS</h4>
                            <p className="text-gray-300 text-sm">
                                Basado en el libro de atención prehospitalaria
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

