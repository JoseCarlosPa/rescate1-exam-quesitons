import {FaGraduationCap, FaClipboardList} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaGraduationCap className="w-8 h-8 text-amber-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-amber-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Este capítulo sirve como introducción al manual y le brinda al estudiante una visión general
                    de las consideraciones para aprender rescate con cuerdas. La mayoría de las sugerencias son
                    valiosas tanto para el individuo como para el equipo de rescate.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaClipboardList className="w-6 h-6 mr-2 text-amber-500"/>
                    Objetivos de Aprendizaje
                </h2>
                <ul className="space-y-3">
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700">Evaluar a los posibles instructores o escuelas de rescate con cuerdas.</span>
                    </li>
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700">Describir el valor de los sistemas estandarizados dentro de un equipo de rescate.</span>
                    </li>
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700">Describir el valor de contar con un manual de equipo (procedimientos operativos estándar).</span>
                    </li>
                </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                    Al leer este capítulo, considera cómo se relaciona con tu entrenamiento como técnico en
                    rescate con cuerdas y con tu equipo, mientras aprendes a realizar operaciones de rescate
                    técnico. No existe una certificación reconocida a nivel nacional para instructores de rescate
                    con cuerdas, por lo que cualquier persona puede presentarse como instructor — esto pone la
                    responsabilidad de investigar en cada organización o rescatista individual.
                </p>
            </div>
        </div>
    );
}
