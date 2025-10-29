import {FaExclamationTriangle, FaHeartbeat, FaTachometerAlt} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {GiBlood, GiHeartOrgan} from "react-icons/gi";
import {BiPulse} from "react-icons/bi";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {BsLightbulb, BsShield} from "react-icons/bs";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Definición crítica del shock */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Estado Crítico!</h2>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Definición de
                        Shock</h3>
                    <p className="text-gray-800 leading-relaxed text-lg">
                        El shock es un <strong>estado de hipoperfusión tisular
                        generalizada</strong> que resulta en
                        un suministro inadecuado de oxígeno y nutrientes a nivel celular. Sin
                        tratamiento oportuno,
                        conduce a <span className="text-red-600 font-bold">falla orgánica múltiple y muerte</span>.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Compensado</p>
                        <p className="text-sm">Mecanismos compensatorios activos</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Descompensado</p>
                        <p className="text-sm">Falla de compensación</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">Irreversible</p>
                        <p className="text-sm">Daño celular irreversible</p>
                    </div>
                </div>
            </div>

            {/* Fisiopatología básica */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiHeartOrgan className="w-6 h-6 mr-2 text-orange-500"/>
                    Fisiopatología del Shock
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <FaHeartbeat className="w-5 h-5 mr-2"/>
                            Ecuación del Gasto Cardíaco
                        </h3>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <p className="text-center text-lg font-mono font-bold text-blue-800">
                                GC = FC × VS
                            </p>
                            <p className="text-sm text-gray-600 text-center mt-2">
                                Gasto Cardíaco = Frecuencia Cardíaca × Volumen Sistólico
                            </p>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <BiPulse className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>FC:</strong> 60-100 lpm (adultos)</span>
                            </li>
                            <li className="flex items-start">
                                <GiBlood className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>VS:</strong> 70 ml/latido promedio</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>GC Normal:</strong> 4-8 L/min</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                            <FaTachometerAlt className="w-5 h-5 mr-2"/>
                            Presión Arterial
                        </h3>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <p className="text-center text-lg font-mono font-bold text-green-800">
                                PA = GC × RVP
                            </p>
                            <p className="text-sm text-gray-600 text-center mt-2">
                                Presión Arterial = Gasto Cardíaco × Resistencia Vascular
                                Periférica
                            </p>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>PAS:</strong> {'>'} 90 mmHg</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>PAD:</strong> 60-90 mmHg</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>PAM:</strong> {'>'} 65 mmHg para perfusión</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma mejorados */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Reconocimiento Temprano
                        del Shock</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FiEye className="w-4 h-4 mr-2"/>
                            Signos Precoces
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Ansiedad, inquietud</li>
                            <li>Taquicardia (FC {'>'} 100)</li>
                            <li>Piel fría, pálida</li>
                            <li>Sed intensa</li>
                            <li>Debilidad</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                            <MdWarning className="w-4 h-4 mr-2"/>
                            Signos Tardíos
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Hipotensión (PAS {'<'} 90)</li>
                            <li>Confusión, letargo</li>
                            <li>Oliguria ({'<'} 0.5 ml/kg/h)</li>
                            <li>Llenado capilar {'>'} 2 seg</li>
                            <li>Cianosis periférica</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Signos Críticos
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Alteración severa consciencia</li>
                            <li>Pulso filiforme o ausente</li>
                            <li>Respiración irregular</li>
                            <li>Paro cardiorrespiratorio</li>
                            <li>Cianosis central</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Protocolo ABC para shock */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo ABC en Shock
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A -
                            AIRWAY</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Evaluar permeabilidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Aspirar si es necesario</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Mantener alineación cervical</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                            BREATHING</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Oxígeno alto flujo (15 L/min)</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Evaluar frecuencia y calidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Asistir ventilación si necesario</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C -
                            CIRCULATION</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Control de hemorragias</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Evaluar pulso y perfusión</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Posición y temperatura</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Recordatorios clave */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                        Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Reconocer signos tempranos</li>
                            <li>Actuar rápidamente (tiempo = vida)</li>
                            <li>Mantener vía aérea permeable</li>
                            <li>Oxígeno de alto flujo</li>
                            <li>Controlar hemorragias visibles</li>
                            <li>Traslado urgente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dar líquidos por vía oral</li>
                            <li>Administrar medicamentos sin indicación</li>
                            <li>Dejar al paciente solo</li>
                            <li>Retrasar el transporte</li>
                            <li>Ignorar signos de deterioro</li>
                            <li>Olvidar la protección cervical</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}