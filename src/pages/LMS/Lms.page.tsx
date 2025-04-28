import {temasLSM} from "./Lms.constants.ts";
import {NavLink} from "react-router";

export default function Lms(){
    return(
        <div className="flex flex-col min-h-screen  bg-gray-100 pb-12 md:p-12 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
            <section className="bg-gradient-to-b from-blue-50 to-white dark:bg-gray-900 dark:text-gray-100 py-12 md:py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-16">
                        Aprende Lengua de Señas Mexicana (LSM)
                    </h2>
                    <NavLink to="/"
                                className="flex gap-2 mb-4">
                            <p className="text-lg">Regresar</p>
                    </NavLink>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temasLSM.map((tema) => (
                            <div
                                key={tema.id}
                                className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col"
                            >
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                                        {tema.titulo}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        {tema.descripcion}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                            Recursos para aprender más:
                                        </h4>
                                        <ul className="list-none space-y-2">
                                            {tema.referencias.map((ref, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">&#10148;</span> {/* Icono simple */}
                                                    <a
                                                        href={ref.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors duration-200"
                                                    >
                                                        {ref.nombre} ({ref.tipo})
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
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-600">
                            Recuerda que la mejor forma de aprender LSM es practicando con hablantes nativos y tomando cursos formales.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}