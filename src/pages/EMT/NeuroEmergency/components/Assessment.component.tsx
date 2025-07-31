import { FaHeadSideMask, FaBolt, FaThermometerHalf, FaEye } from "react-icons/fa";
import { MdEmergency, MdAccessTime, MdBloodtype } from "react-icons/md";
import { GiMedicines, GiBrain } from "react-icons/gi";
import { BiFirstAid } from "react-icons/bi";

export default function Assessment() {
    return (
        <div className="space-y-8">
            {/* Emergencias Neurológicas Principales */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergencias Neurológicas Principales</h2>

                {/* Cefalea */}
                <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaHeadSideMask className="w-6 h-6 text-yellow-600" />
                        <h3 className="text-xl font-bold text-yellow-800">Cefalea</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-yellow-700 mb-2">Características</h4>
                            <ul className="text-sm text-yellow-700 space-y-1">
                                <li>• Común y a menudo benigna</li>
                                <li>• Puede ser signo de EVC hemorrágico</li>
                                <li>• Posible meningitis o tumor</li>
                                <li>• <strong>Alerta:</strong> cefalea súbita e intensa</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-700 mb-2">Manejo</h4>
                            <ul className="text-sm text-yellow-700 space-y-1">
                                <li>• Mantener ambiente tranquilo</li>
                                <li>• Administrar oxígeno si es necesario</li>
                                <li>• Evaluación neurológica completa</li>
                                <li>• Transporte para evaluación</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Evento Vascular Cerebral */}
                <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <GiBrain className="w-6 h-6 text-red-600" />
                        <h3 className="text-xl font-bold text-red-800">Evento Vascular Cerebral (EVC)</h3>
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">CRÍTICO</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white bg-opacity-50 rounded p-3">
                            <h4 className="font-semibold text-red-700 mb-2">Tipos</h4>
                            <ul className="text-sm text-red-700 space-y-1">
                                <li>• <strong>Isquémico:</strong> coágulo que obstruye</li>
                                <li>• <strong>Hemorrágico:</strong> vaso roto</li>
                            </ul>
                        </div>
                        <div className="bg-white bg-opacity-50 rounded p-3">
                            <h4 className="font-semibold text-red-700 mb-2">Síntomas</h4>
                            <ul className="text-sm text-red-700 space-y-1">
                                <li>• Parálisis facial/extremidades</li>
                                <li>• Dificultad para hablar</li>
                                <li>• Visión borrosa</li>
                                <li>• Confusión</li>
                            </ul>
                        </div>
                        <div className="bg-white bg-opacity-50 rounded p-3">
                            <h4 className="font-semibold text-red-700 mb-2">Tiempo Crítico</h4>
                            <p className="text-sm text-red-700">
                                <strong>Ventana terapéutica:</strong><br/>
                                Trombólisis efectiva solo en <strong>&lt;3-4.5 horas</strong>
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-100 border border-red-300 rounded p-4">
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                            <BiFirstAid className="w-5 h-5" />
                            Tratamiento Prehospitalario
                        </h4>
                        <ul className="text-sm text-red-700 space-y-1">
                            <li>• Oxígeno si hipoxémico</li>
                            <li>• Monitoreo continuo</li>
                            <li>• <strong>Documentar hora exacta de inicio</strong></li>
                            <li>• Alerta de EVC al hospital</li>
                            <li>• Evaluación con escalas: Cincinnati, FAST, LAG</li>
                        </ul>
                    </div>
                </div>

                {/* Convulsiones */}
                <div className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaBolt className="w-6 h-6 text-purple-600" />
                        <h3 className="text-xl font-bold text-purple-800">Convulsiones</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Tipos</h4>
                            <ul className="text-sm text-purple-700 space-y-1">
                                <li>• <strong>Epiléptica:</strong> trastorno crónico</li>
                                <li>• <strong>Estructural:</strong> lesión cerebral</li>
                                <li>• <strong>Metabólica:</strong> alteraciones químicas</li>
                                <li>• <strong>Febril:</strong> fiebre en niños</li>
                                <li>• <strong>Tóxica:</strong> drogas/alcohol</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Fisiopatología</h4>
                            <p className="text-sm text-purple-700">
                                Actividad eléctrica anormal en el cerebro que puede afectar
                                conciencia, movimiento y funciones corporales.
                            </p>
                        </div>
                    </div>

                    <div className="bg-purple-100 border border-purple-300 rounded p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">Manejo Prehospitalario</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium text-purple-700 mb-1">Durante la convulsión:</p>
                                <ul className="text-sm text-purple-700 space-y-1">
                                    <li>• Proteger al paciente de lesiones</li>
                                    <li>• NO restringir movimientos</li>
                                    <li>• NO introducir objetos en la boca</li>
                                    <li>• Cronometrar duración</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-purple-700 mb-1">Post-ictal:</p>
                                <ul className="text-sm text-purple-700 space-y-1">
                                    <li>• Succionar secreciones</li>
                                    <li>• Administrar oxígeno</li>
                                    <li>• Verificar glucosa</li>
                                    <li>• Tranquilizar al paciente</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estado Mental Alterado */}
                <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaEye className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-800">Estado Mental Alterado</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Causas Comunes</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Hipoglucemia</li>
                                <li>• Hipoxia</li>
                                <li>• Trauma craneal</li>
                                <li>• Infecciones</li>
                                <li>• Drogas/alcohol</li>
                                <li>• Lesiones cerebrales</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Manejo</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Mantener vía aérea</li>
                                <li>• Asegurar oxigenación</li>
                                <li>• Verificar glucosa, ECG</li>
                                <li>• Evaluación neurológica completa</li>
                                <li>• Identificar causas reversibles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Escalas de Evaluación */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Escalas de Evaluación</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Escala de Glasgow */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <MdEmergency className="w-5 h-5" />
                            Escala de Coma de Glasgow (ECG)
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <p className="font-medium text-green-700 text-sm">Apertura Ocular (1-4)</p>
                                <ul className="text-xs text-green-600 ml-4">
                                    <li>4: Espontánea</li>
                                    <li>3: Al hablarle</li>
                                    <li>2: Al dolor</li>
                                    <li>1: No abre</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-green-700 text-sm">Respuesta Verbal (1-5)</p>
                                <ul className="text-xs text-green-600 ml-4">
                                    <li>5: Orientado</li>
                                    <li>4: Confuso</li>
                                    <li>3: Palabras</li>
                                    <li>2: Sonidos</li>
                                    <li>1: No responde</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-green-700 text-sm">Respuesta Motora (1-6)</p>
                                <ul className="text-xs text-green-600 ml-4">
                                    <li>6: Obedece</li>
                                    <li>5: Localiza</li>
                                    <li>4: Flexión normal</li>
                                    <li>3: Flexión anormal</li>
                                    <li>2: Extensión</li>
                                    <li>1: No responde</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Escalas de EVC */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h3 className="font-semibold text-orange-800 mb-3">Escalas de EVC</h3>

                        <div className="space-y-3">
                            <div className="bg-white bg-opacity-50 rounded p-2">
                                <p className="font-medium text-orange-700 text-sm">Escala Cincinnati</p>
                                <ul className="text-xs text-orange-600 space-y-1">
                                    <li>• Parálisis facial</li>
                                    <li>• Debilidad de brazos</li>
                                    <li>• Alteración del habla</li>
                                </ul>
                            </div>

                            <div className="bg-white bg-opacity-50 rounded p-2">
                                <p className="font-medium text-orange-700 text-sm">FAST</p>
                                <ul className="text-xs text-orange-600 space-y-1">
                                    <li>• <strong>F</strong>ace (cara)</li>
                                    <li>• <strong>A</strong>rms (brazos)</li>
                                    <li>• <strong>S</strong>peech (habla)</li>
                                    <li>• <strong>T</strong>ime (tiempo)</li>
                                </ul>
                            </div>

                            <div className="bg-white bg-opacity-50 rounded p-2">
                                <p className="font-medium text-orange-700 text-sm">LAG</p>
                                <p className="text-xs text-orange-600">
                                    Evaluación específica de accidente cerebrovascular
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoreo Continuo */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Monitoreo Continuo</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                        <MdBloodtype className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <h4 className="font-medium text-red-800 text-sm">Signos Vitales</h4>
                        <p className="text-xs text-red-600">PA, FC, FR, Temp</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <FaEye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <h4 className="font-medium text-blue-800 text-sm">Nivel de Conciencia</h4>
                        <p className="text-xs text-blue-600">Glasgow, AVDI</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <GiMedicines className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h4 className="font-medium text-green-800 text-sm">Pupilas</h4>
                        <p className="text-xs text-green-600">Tamaño, reactividad</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                        <FaThermometerHalf className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <h4 className="font-medium text-purple-800 text-sm">Estado Respiratorio</h4>
                        <p className="text-xs text-purple-600">Patrón, saturación</p>
                    </div>
                </div>
            </section>

            {/* Algoritmo de Manejo */}
            <section>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <MdAccessTime className="w-6 h-6" />
                        Algoritmo de Manejo General
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded p-4">
                            <h4 className="font-semibold text-gray-700 mb-2">1. Evaluación Inicial</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• ABC (Vía aérea, respiración, circulación)</li>
                                <li>• Nivel de conciencia</li>
                                <li>• Signos vitales</li>
                                <li>• Historia clínica rápida</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded p-4">
                            <h4 className="font-semibold text-gray-700 mb-2">2. Intervenciones</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Oxígeno según necesidad</li>
                                <li>• Monitoreo ECG</li>
                                <li>• Verificar glucosa</li>
                                <li>• Evaluación neurológica</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded p-4">
                            <h4 className="font-semibold text-gray-700 mb-2">3. Transporte</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Documentar hora de inicio</li>
                                <li>• Centro apropiado</li>
                                <li>• Monitoreo continuo</li>
                                <li>• Comunicación hospitalaria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
