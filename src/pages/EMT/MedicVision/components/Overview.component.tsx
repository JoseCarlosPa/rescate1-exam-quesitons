import {FaFirstAid, FaThermometerHalf, FaUserMd} from "react-icons/fa";
import {BsHeart, BsLightbulb, BsShield} from "react-icons/bs";
import {MdCheckCircle, MdHealthAndSafety, MdOutlineTimer, MdWarning} from "react-icons/md";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {PiStethoscope} from "react-icons/pi";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaUserMd className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">¿Qué es la Visión Médica
                        General?</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Es la capacidad del <strong>Técnico en Atención Médica Prehospitalaria
                    (TAMP)</strong> para realizar una
                    valoración completa, rápida y estructurada del estado general de un paciente
                    médico (no traumático).
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">
                        <strong>Objetivo:</strong> Identificar condiciones que requieren
                        intervención urgente como IAM, EVC,
                        crisis hipertensivas, disnea severa y alteraciones metabólicas siguiendo
                        el enfoque ABCDE.
                    </p>
                </div>
            </div>

            {/* Proceso de evaluación sistemática */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Evaluación Sistemática del Paciente Médico
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <div className="text-center mb-4">
                            <MdOutlineTimer className="w-12 h-12 text-red-500 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-red-700">1. Evaluación de
                                Escena</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Seguridad del entorno</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Número de pacientes</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Recursos necesarios</span>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <div className="text-center mb-4">
                            <FaFirstAid className="w-12 h-12 text-blue-500 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-blue-700">2. Evaluación
                                Primaria</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>ABCDE sistemático</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Estado de conciencia</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Signos evidentes</span>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <div className="text-center mb-4">
                            <PiStethoscope className="w-12 h-12 text-green-500 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-green-700">3. Signos
                                Vitales</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <BsHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>FC, FR, PA</span>
                            </li>
                            <li className="flex items-start">
                                <FaThermometerHalf
                                    className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Temperatura</span>
                            </li>
                            <li className="flex items-start">
                                <MdHealthAndSafety
                                    className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Oximetría de pulso</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Importancia clínica */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Importancia Clínica</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Identificación Temprana</p>
                        <p className="text-sm">Detecta emergencias que requieren intervención
                            urgente</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Priorización</p>
                        <p className="text-sm">Establece prioridades de traslado y
                            tratamiento</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Reducción de Errores</p>
                        <p className="text-sm">Mejora el pronóstico del paciente</p>
                    </div>
                </div>
            </div>

            {/* Componentes clave */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Componentes Clave de la
                        Evaluación</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Evaluación Objetiva:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Escena segura y recursos disponibles</li>
                            <li>Nivel de conciencia (AVDI/Glasgow)</li>
                            <li>Posición y apariencia del paciente</li>
                            <li>Signos vitales completos</li>
                            <li>Examen físico dirigido por sistema</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <FiUser className="w-4 h-4 mr-2"/>
                            Información del Paciente:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Historia clínica relevante (SAMPLE)</li>
                            <li>Síntomas actuales (OPQRST)</li>
                            <li>Medicamentos y alergias</li>
                            <li>Antecedentes médicos importantes</li>
                            <li>Eventos relacionados al episodio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}