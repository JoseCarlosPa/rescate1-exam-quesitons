import {FaClipboardList, FaExclamationTriangle} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante será capaz de comprender los principios de seguridad durante las operaciones
                    de rescate con cuerdas. Todo rescate que requiera cuerdas y sistemas de cuerdas siempre
                    tendrá un elemento de riesgo — pero puede ser la forma más segura, o la única forma, de
                    resolver el problema.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaClipboardList className="w-6 h-6 mr-2 text-red-500"/>
                    Objetivos de Aprendizaje
                </h2>
                <ul className="space-y-3">
                    {[
                        'Realizar un análisis de riesgo de un sistema de rescate con cuerdas.',
                        'Describir cuándo usar sistemas de aseguramiento (belay) frente a técnicas de cuerda simple (SRT).',
                        'Describir el concepto de redundancia.',
                        'Realizar una verificación de seguridad de un sistema de rescate con cuerdas.',
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                            <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-red-300 mb-2">NFPA® Requisitos de Desempeño Laboral</p>
                <p className="text-slate-200 leading-relaxed">
                    Este capítulo aborda los requisitos de la norma NFPA® 1006 (2021) — Estándar para Calificaciones
                    Profesionales del Personal de Rescate Técnico: <strong className="text-white">5.1.3</strong> y{' '}
                    <strong className="text-white">5.2.7</strong>.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                    El objetivo siempre es retirar a la víctima lo más rápido posible de su situación, mientras se
                    minimiza el riesgo tanto para los rescatistas como para la víctima. Con el entrenamiento
                    adecuado, comunicación efectiva y buenos hábitos de seguridad, los riesgos pueden reducirse
                    considerablemente.
                </p>
            </div>
        </div>
    );
}
