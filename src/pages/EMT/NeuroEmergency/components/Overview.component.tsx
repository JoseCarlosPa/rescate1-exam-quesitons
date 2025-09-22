import {RiBrain2Fill} from "react-icons/ri";
import {FaClock, FaExclamationTriangle, FaHeartbeat} from "react-icons/fa";
import {MdLocalHospital} from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Introducción */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <RiBrain2Fill className="w-8 h-8 text-orange-500"/>
                    <h2 className="text-2xl font-bold text-gray-900">Introducción</h2>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                        Las emergencias neurológicas son afecciones que alteran el funcionamiento normal del cerebro,
                        médula espinal o nervios periféricos. Estas pueden comprometer el estado mental, el control
                        motor,
                        el habla, la respiración y otros procesos vitales.
                    </p>
                </div>
                <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="w-5 h-5 text-red-500"/>
                        <p className="font-semibold text-red-800">Importancia Crítica</p>
                    </div>
                    <p className="text-red-700">
                        La atención rápida y precisa es crítica para reducir la discapacidad o muerte del paciente.
                    </p>
                </div>
            </section>

            {/* Fisiopatología Común */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fisiopatología Común</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                            <FaHeartbeat className="w-5 h-5"/>
                            Sensibilidad Cerebral
                        </h3>
                        <p className="text-yellow-700 text-sm">
                            El cerebro es extremadamente sensible a alteraciones en:
                        </p>
                        <ul className="list-disc list-inside text-yellow-700 text-sm mt-2 space-y-1">
                            <li>Oxígeno</li>
                            <li>Glucosa</li>
                            <li>Temperatura</li>
                        </ul>
                        <p className="text-yellow-700 text-sm mt-2">
                            Alteraciones pueden causar desde confusión hasta coma.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <h4 className="font-medium text-orange-800 mb-2">Problemas Cardiopulmonares</h4>
                            <p className="text-orange-700 text-sm">
                                Afectan al cerebro en su totalidad
                            </p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <h4 className="font-medium text-purple-800 mb-2">Problemas Localizados</h4>
                            <p className="text-purple-700 text-sm">
                                Como un EVC, afectan funciones de una región específica
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principios de Manejo */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Principios de Manejo Prehospitalario</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <FaClock className="w-5 h-5"/>
                            Prioridades Inmediatas
                        </h3>
                        <ol className="list-decimal list-inside text-green-700 text-sm space-y-2">
                            <li>Priorizar vía aérea, respiración y circulación</li>
                            <li>Oxígeno si hay hipoxia</li>
                            <li>Monitoreo de signos vitales, ECG y glucosa</li>
                            <li>Evaluar necesidad de ventilación asistida</li>
                        </ol>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <MdLocalHospital className="w-5 h-5"/>
                            Documentación y Transporte
                        </h3>
                        <ul className="list-disc list-inside text-blue-700 text-sm space-y-2">
                            <li>Documentar hora de inicio de síntomas neurológicos</li>
                            <li>Transporte inmediato a centro adecuado según protocolo</li>
                            <li>Especialmente crítico en casos de EVC</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Factores de Tiempo */}
            <section>
                <div className="bg-red-100 border border-red-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                        <FaClock className="w-6 h-6"/>
                        El Factor Tiempo es Crítico
                    </h3>
                    <p className="text-red-700 mb-3">
                        En emergencias neurológicas, especialmente en EVC, cada minuto cuenta:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-50 rounded p-3">
                            <p className="font-medium text-red-800">Ventana Terapéutica</p>
                            <p className="text-red-700 text-sm">
                                Tratamientos como trombólisis son efectivos solo dentro de
                                <strong> 3-4.5 horas</strong> del inicio
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-50 rounded p-3">
                            <p className="font-medium text-red-800">Importancia del EMT</p>
                            <p className="text-red-700 text-sm">
                                Reconocimiento temprano y transporte rápido pueden marcar
                                la diferencia entre recuperación completa y discapacidad permanente
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}