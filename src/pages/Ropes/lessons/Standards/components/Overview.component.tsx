import {FaClipboardList, FaGavel} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaGavel className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante identificará las regulaciones y estándares que aplican al equipo y las
                    operaciones de rescate con cuerdas. Una de las áreas de desarrollo más importantes en el
                    rescate con cuerdas en los últimos años ha sido precisamente esta: las normativas y
                    regulaciones.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaClipboardList className="w-6 h-6 mr-2 text-blue-500"/>
                    Objetivos de Aprendizaje
                </h2>
                <ul className="space-y-3">
                    {[
                        'Identificar las agencias y organizaciones que crean estándares y regulaciones para el rescate con cuerdas.',
                        'Describir los estándares significativos que rigen el equipo y el entrenamiento en rescate con cuerdas.',
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                            <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-blue-300 mb-2">NFPA® Requisitos de Desempeño Laboral</p>
                <p className="text-slate-200 leading-relaxed">
                    Este capítulo aborda el requisito <strong className="text-white">5.2.3</strong> de la norma
                    NFPA® 1006 (2021) — Estándar para Calificaciones Profesionales del Personal de Rescate Técnico.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">¿Por qué importan los estándares?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Aprender a entender los estándares carece de la emoción de rapelear por un acantilado o
                    armar un sistema de rescate, pero hay razones importantes para conocerlos:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        El estándar puede tener respaldo legal con penalidades que afecten a tu organización o a ti mismo. Las regulaciones estatales y federales entran en la categoría de "obligatorio".
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        La persona que cita el estándar puede estar equivocada o aplicándolo mal a la situación.
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        El estándar puede usarse para determinar el nivel de cuidado o deber hacia terceros en una demanda por negligencia.
                    </li>
                </ul>
            </div>
        </div>
    );
}
