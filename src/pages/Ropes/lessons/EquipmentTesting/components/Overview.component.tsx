import { FaClipboardCheck, FaFlask } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo principal */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaClipboardCheck className="w-8 h-8 text-emerald-500 mr-3" />
                    <h2 className="text-2xl font-bold text-emerald-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante será capaz de <strong>describir las limitaciones de desempeño</strong> del
                    equipo de rescate con cuerdas basándose en cómo ese equipo es probado y certificado.
                    Conocer los métodos de prueba es fundamental para interpretar correctamente los
                    valores marcados en el equipo y entender qué representan — y qué no.
                </p>
            </div>

            {/* Objetivos habilitadores */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaFlask className="w-6 h-6 mr-2 text-emerald-500" />
                    Objetivos de Aprendizaje
                </h2>
                <ul className="space-y-3">
                    {[
                        'Definir los elementos clave de NFPA 1983 en cuanto a pruebas de equipo.',
                        'Explicar el estándar de reporte "tres sigma" (3σ) y su significado estadístico.',
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                            <MdCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* NFPA requisito */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-emerald-300 mb-2">NFPA® Requisitos de Desempeño Laboral</p>
                <p className="text-slate-200 leading-relaxed">
                    Este capítulo apoya los requisitos de la norma <strong className="text-white">NFPA® 1006 (2021)</strong> — Estándar para
                    Calificaciones Profesionales del Personal de Rescate Técnico — mediante la comprensión de
                    NFPA 1983 como estándar para fabricantes de equipo de seguridad de vida.
                </p>
            </div>

            {/* Contexto del capítulo */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <GiChemicalDrop className="w-5 h-5 mr-2 text-emerald-500" />
                    ¿Por qué importa saber cómo se prueba el equipo?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    El capítulo 3 trató sobre los estándares; este capítulo trata sobre cómo los productos
                    son probados contra esos estándares. Los requisitos de desempeño intentan reflejar
                    cómo se usa el producto en el campo de manera que pueda medirse con consistencia y
                    repetibilidad en el laboratorio.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                    {[
                        {
                            title: 'Variación entre muestras',
                            desc: 'Incluso el mismo producto con el mismo método tendrá resultados distintos entre muestras. La magnitud varía: pequeña en productos metálicos, mayor en sistemas ensamblados.',
                            color: 'bg-amber-50 border-amber-200',
                            icon: '📊',
                        },
                        {
                            title: 'Estadística 3 sigma',
                            desc: 'NFPA 1983 usa un cálculo estadístico de tres desviaciones estándar para convertir 5 resultados variables en un solo número representativo y confiable.',
                            color: 'bg-emerald-50 border-emerald-200',
                            icon: '🔬',
                        },
                        {
                            title: 'Valores marcados',
                            desc: 'El número en la etiqueta del equipo no es el promedio de las pruebas — es un valor estadísticamente conservador con 99.87% de predictibilidad.',
                            color: 'bg-blue-50 border-blue-200',
                            icon: '🏷️',
                        },
                    ].map((card, idx) => (
                        <div key={idx} className={`rounded-lg p-4 border ${card.color}`}>
                            <div className="text-2xl mb-2">{card.icon}</div>
                            <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
