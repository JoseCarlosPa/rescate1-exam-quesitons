import {NavLink} from "react-router";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import {IoGameController} from "react-icons/io5";
import {FaQuestionCircle, FaBell, FaClipboardList, FaLayerGroup, FaUserMd, FaSyringe, FaStethoscope, FaAmbulance} from "react-icons/fa";
import {GiBrain} from "react-icons/gi";
import logo from "../../assets/logo.png";

export default function Games() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4 py-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <img src={logo} alt="Logo" className="h-16 w-16 mx-auto mb-3"/>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        🎮 Juegos Educativos
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
                        Aprende mientras te diviertes con nuestros juegos interactivos de medicina prehospitalaria
                    </p>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">

                    {/* Medical Quiz Arena Card
                    <NavLink
                        to={AllRoutes.MEDICAL_QUIZ_ARENA}
                        className="group bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-cyan-400 hover:border-cyan-300"
                    >
                        <div className="text-center">
                            <div className="bg-cyan-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <span className="text-3xl">🌐</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Medical Quiz Arena
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                ¡Multijugador online en tiempo real! Crea salas y compite con amigos
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-cyan-400 text-cyan-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Online
                                </span>
                                <span className="bg-purple-400 text-purple-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    2-8 Jugadores
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    30+ Preguntas
                                </span>

                            </div>
                        </div>
                    </NavLink>
                    - MULTIPLAYER ONLINE */}
                    {/* Rapid Response Card - NEW */}
                    <NavLink
                        to={AllRoutes.RAPID_RESPONSE}
                        className="group bg-gradient-to-br from-yellow-600 to-red-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-yellow-400 hover:border-yellow-300"
                    >
                        <div className="text-center">
                            <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Rapid Response
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                ¡Duelo de 2 jugadores! Responde rápido y gana puntos con rachas
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-yellow-400 text-red-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    2 Jugadores
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    25+ Preguntas
                                </span>

                            </div>
                        </div>
                    </NavLink>

                    {/* Buzzer Battle Card - NEW */}
                    <NavLink
                        to={AllRoutes.BUZZER_BATTLE}
                        className="group bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-red-400 hover:border-red-300"
                    >
                        <div className="text-center">
                            <div className="bg-red-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaBell className="text-red-700 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Buzzer Battle
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                ¡Presiona el buzzer primero! Compite en tiempo real con tu equipo
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-red-400 text-red-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Multijugador
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    40+ Preguntas
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Jeopardy Card */}
                    <NavLink
                        to={AllRoutes.JEOPARDY}
                        className="group bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-yellow-400 hover:border-yellow-300"
                    >
                        <div className="text-center">
                            <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <IoGameController className="text-purple-700 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Jeopardy Médico
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Compite por equipos respondiendo preguntas de medicina prehospitalaria
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-yellow-400 text-purple-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Multijugador
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    30 Preguntas
                                </span>
                                <span className="bg-blue-400 text-blue-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    6 Categorías
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Trivia Card */}
                    <NavLink
                        to={AllRoutes.TRIVIA}
                        className="group bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-blue-400 hover:border-blue-300"
                    >
                        <div className="text-center">
                            <div className="bg-blue-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaQuestionCircle className="text-indigo-700 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Trivia Rápida
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Responde preguntas contra el reloj y mejora tu tiempo de respuesta
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-blue-400 text-indigo-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Individual
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Contrarreloj
                                </span>
                                <span className="bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    4 Niveles
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Memory Match Card */}
                    <NavLink
                        to={AllRoutes.MEMORY_MATCH}
                        className="group bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-pink-400 hover:border-pink-300"
                    >
                        <div className="text-center">
                            <div className="bg-pink-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <GiBrain className="text-purple-700 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Memory Match
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Encuentra las parejas de términos médicos y sus definiciones
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-pink-400 text-purple-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Individual
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    30 Parejas
                                </span>
                                <span className="bg-blue-400 text-blue-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    3 Niveles
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Protocol Order Card - NEW */}
                    <NavLink
                        to={AllRoutes.PROTOCOL_ORDER}
                        className="group bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-indigo-400 hover:border-violet-300"
                    >
                        <div className="text-center">
                            <div className="bg-indigo-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaClipboardList className="text-violet-700 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Completar Protocolo
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Ordena los pasos de protocolos médicos prehospitalarios en la secuencia correcta
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-indigo-400 text-indigo-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Individual
                                </span>
                                <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    13 Protocolos
                                </span>
                                <span className="bg-violet-300 text-violet-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Drag & Drop
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Flashcards Card */}
                    <NavLink
                        to={AllRoutes.FLASHCARDS}
                        className="group bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-teal-400 hover:border-cyan-300"
                    >
                        <div className="text-center">
                            <div className="bg-teal-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaLayerGroup className="text-cyan-800 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Flashcards
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Tarjetas interactivas de estudio y memorización
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-teal-400 text-teal-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Individual
                                </span>
                                <span className="bg-cyan-300 text-cyan-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    60 Tarjetas
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Anatomia Visual Card */}
                    <NavLink
                        to={AllRoutes.ANATOMIA_VISUAL}
                        className="group bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-emerald-400 hover:border-green-300"
                    >
                        <div className="text-center">
                            <div className="bg-emerald-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaUserMd className="text-green-800 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Anatomía Visual
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Explora el cuerpo humano y sus sistemas con gráficos interactivos
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-emerald-400 text-emerald-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Interactivo
                                </span>
                                <span className="bg-green-300 text-green-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Sistemas
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Contrarreloj Dosis Card */}
                    <NavLink
                        to={AllRoutes.CONTRARRELOJ_DOSIS}
                        className="group bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-rose-400 hover:border-pink-300"
                    >
                        <div className="text-center">
                            <div className="bg-rose-400 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaSyringe className="text-pink-800 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Contrarreloj Dosis
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Calcula dosis de medicamentos contra el reloj
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-rose-400 text-rose-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Velocidad
                                </span>
                                <span className="bg-pink-300 text-pink-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Farmacología
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Ahorcado Médico Card */}
                    <NavLink
                        to={AllRoutes.AHORCADO}
                        className="group bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-red-400 hover:border-rose-300"
                    >
                        <div className="text-center">
                            <div className="bg-red-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaStethoscope className="text-rose-800 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Salva al Paciente
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Adivina la terminología médica antes de que el paciente entre en asistolia
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-red-400 text-red-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Terminología
                                </span>
                                <span className="bg-rose-300 text-rose-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Clásico
                                </span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Triage Master Card */}
                    <NavLink
                        to={AllRoutes.TRIAGE_MASTER}
                        className="group bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl shadow-2xl p-4 hover:scale-105 transform transition duration-300 border-4 border-orange-400 hover:border-yellow-300"
                    >
                        <div className="text-center">
                            <div className="bg-orange-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform">
                                <FaAmbulance className="text-yellow-900 w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                Triage Master
                            </h2>
                            <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                                Aplica el algoritmo START en incidentes con múltiples víctimas
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <span className="bg-orange-400 text-orange-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Simulación
                                </span>
                                <span className="bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                                    Toma de Decisiones
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
                <div className="mt-16 max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4">
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

