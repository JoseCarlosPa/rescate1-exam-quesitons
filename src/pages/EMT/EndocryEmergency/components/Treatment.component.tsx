import {FaBrain, FaExclamationTriangle, FaHeartbeat, FaThermometerHalf} from "react-icons/fa";
import {BsDropletHalf} from "react-icons/bs";
import {GiMedicines} from "react-icons/gi";
import {MdOutlineTimer, MdWarning} from "react-icons/md";

export default function Treatment() {
    return (
        <div className="space-y-8">
            {/* Protocolos de evaluación inicial */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                    <h2 className="text-2xl font-bold text-red-700">Protocolos de Emergencia - Algoritmos AAOS</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg">
                        <h3 className="font-bold text-red-600 mb-3 flex items-center">
                            <FaBrain className="w-5 h-5 mr-2"/>
                            Paciente con Alteración Mental
                        </h3>
                        <ol className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span
                                    className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                <span>Asegurar vía aérea y ventilación</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                <span>Glucosa capilar INMEDIATA</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                <span>Si &lt;70 mg/dL y consciente → glucosa oral</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                <span>Si inconsciente → NO dar nada por boca</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                <span>Reevaluar cada 5 minutos</span>
                            </li>
                        </ol>
                    </div>
                    <div className="bg-white p-5 rounded-lg">
                        <h3 className="font-bold text-blue-600 mb-3 flex items-center">
                            <BsDropletHalf className="w-5 h-5 mr-2"/>
                            Paciente con Sangrado/Palidez
                        </h3>
                        <ol className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                <span>Control inmediato de hemorragia externa</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                <span>Evaluar signos de shock</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                <span>Oxígeno si SpO₂ &lt;94%</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                <span>Posición de shock si no hay trauma</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                <span>Traslado URGENTE</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Tratamientos específicos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiMedicines className="w-6 h-6 mr-2 text-green-500"/>
                    Tratamientos Específicos por Condición
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Emergencias endocrinas */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-green-700 mb-3">Emergencias Endocrinas</h3>

                        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                            <h4 className="font-bold text-green-600 mb-3 flex items-center">
                                <MdOutlineTimer className="w-4 h-4 mr-2"/>
                                Hipoglucemia (&lt;70 mg/dL)
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-green-700 mb-1">Si consciente y puede tragar:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>15g glucosa oral (3-4 tabletas)</li>
                                        <li>120ml jugo de naranja</li>
                                        <li>1 tubo gel de glucosa</li>
                                        <li>Reevaluar en 15 minutos</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                    <p className="font-semibold text-yellow-700 mb-1">Si inconsciente:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>NO administrar nada por boca</li>
                                        <li>Posición lateral de seguridad</li>
                                        <li>Glucagón IM si autorizado</li>
                                        <li>Traslado inmediato</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                            <h4 className="font-bold text-red-600 mb-3 flex items-center">
                                <FaThermometerHalf className="w-4 h-4 mr-2"/>
                                Cetoacidosis Diabética (CAD)
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-red-700 mb-1">Signos clave:</p>
                                    <p className="text-gray-700">Respiración Kussmaul, aliento afrutado,
                                        deshidratación</p>
                                </div>
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-red-700 mb-1">Manejo prehospitalario:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>NO administrar insulina</li>
                                        <li>Oxígeno si hipoxia</li>
                                        <li>Monitoreo continuo</li>
                                        <li>Traslado urgente para fluidos IV</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                            <h4 className="font-bold text-yellow-600 mb-3">Crisis Tiroidea</h4>
                            <div className="bg-white p-3 rounded text-sm">
                                <p className="font-semibold text-yellow-700 mb-1">Manejo de soporte:</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Control de hipertermia (métodos físicos)</li>
                                    <li>Oxígeno suplementario</li>
                                    <li>Monitoreo cardiaco</li>
                                    <li>Traslado inmediato</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Emergencias hematológicas */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-red-700 mb-3">Emergencias Hematológicas</h3>

                        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                            <h4 className="font-bold text-red-600 mb-3 flex items-center">
                                <BsDropletHalf className="w-4 h-4 mr-2"/>
                                Hemofilia - Sangrado
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-red-700 mb-1">Precauciones especiales:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>EVITAR inyecciones IM</li>
                                        <li>Manipulación suave</li>
                                        <li>NO aspirina o anticoagulantes</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-red-700 mb-1">Manejo del sangrado:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Presión directa firme y prolongada</li>
                                        <li>Aplicar hielo en articulaciones</li>
                                        <li>Inmovilización si hay hemartrosis</li>
                                        <li>Traslado urgente para factor VIII/IX</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-600 mb-3 flex items-center">
                                <FaHeartbeat className="w-4 h-4 mr-2"/>
                                Crisis Células Falciformes
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-blue-700 mb-1">Manejo del dolor:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Analgesia según protocolo</li>
                                        <li>Aplicación de calor local</li>
                                        <li>Posición de confort</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-3 rounded">
                                    <p className="font-semibold text-blue-700 mb-1">Soporte general:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Oxígeno suplementario</li>
                                        <li>Hidratación oral si puede</li>
                                        <li>Evitar frío y deshidratación</li>
                                        <li>Traslado para manejo hospitalario</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                            <h4 className="font-bold text-purple-600 mb-3">Anemia Severa</h4>
                            <div className="bg-white p-3 rounded text-sm">
                                <p className="font-semibold text-purple-700 mb-1">Soporte hemodinámico:</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Oxígeno de alto flujo</li>
                                    <li>Posición semi-Fowler</li>
                                    <li>Monitoreo cardiaco</li>
                                    <li>Minimizar actividad física</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medicamentos y dosis */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <GiMedicines className="w-5 h-5 mr-2"/>
                    Medicamentos y Dosis - Nivel TAMP
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-3">Hipoglucemia</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b pb-1">
                                <span className="font-medium">Glucosa oral 15g</span>
                                <span className="text-gray-600">1 dosis, repetir PRN</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span className="font-medium">Glucagón IM</span>
                                <span className="text-gray-600">1mg (si autorizado)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Jugo naranja</span>
                                <span className="text-gray-600">120ml (4 oz)</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-3">Oxigenoterapia</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b pb-1">
                                <span className="font-medium">Cánula nasal</span>
                                <span className="text-gray-600">2-6 L/min</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span className="font-medium">Mascarilla simple</span>
                                <span className="text-gray-600">6-10 L/min</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Mascarilla reservorio</span>
                                <span className="text-gray-600">10-15 L/min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contraindicaciones y precauciones */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <MdWarning className="w-5 h-5 mr-2"/>
                    Contraindicaciones y Precauciones Críticas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-700 mb-3">NUNCA hacer:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Dar glucosa oral a paciente inconsciente</li>
                            <li>Administrar insulina en campo</li>
                            <li>Inyecciones IM en hemofílicos</li>
                            <li>Aspirina en trastornos hemorrágicos</li>
                            <li>Subestimar dolor en crisis falciforme</li>
                            <li>Forzar fluidos orales si vómito</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">SIEMPRE recordar:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Reevaluar glucosa después de tratamiento</li>
                            <li>Monitorear vía aérea en alteración mental</li>
                            <li>Buscar identificación médica del paciente</li>
                            <li>Preguntar por medicamentos actuales</li>
                            <li>Documentar todos los signos vitales</li>
                            <li>Comunicar hallazgos al hospital receptor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}