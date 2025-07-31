import { FaHandPointRight } from "react-icons/fa";
import { BsLightbulb, BsDiagram3 } from "react-icons/bs";
import { GiStomach, GiKidneys, GiLiver } from "react-icons/gi";
import { RiHeartPulseLine } from "react-icons/ri";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Introducción anatómica */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-700">Anatomía y Fisiología Aplicada</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Conocer la anatomía es fundamental para localizar el origen del dolor y anticipar complicaciones.
                    Los sistemas gastrointestinal, urinario y reproductor comparten espacios anatómicos y pueden presentar dolor referido.
                </p>
            </div>

            {/* Sistema Gastrointestinal */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiStomach className="w-6 h-6 mr-2 text-orange-500" />
                    Sistema Gastrointestinal
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <GiStomach className="w-6 h-6 text-orange-600 mr-2" />
                            <h3 className="font-bold text-orange-700">Tracto Digestivo Superior</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Boca:</strong> Inicio de la digestión</li>
                            <li>• <strong>Esófago:</strong> Transporte al estómago</li>
                            <li>• <strong>Estómago:</strong> Digestión ácida</li>
                            <li>• <strong>Duodeno:</strong> Primera porción intestinal</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <h3 className="font-bold text-yellow-700">Tracto Digestivo Inferior</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Intestino delgado:</strong> Absorción principal</li>
                            <li>• <strong>Intestino grueso:</strong> Formación de heces</li>
                            <li>• <strong>Apéndice:</strong> Estructura vestigial</li>
                            <li>• <strong>Recto y ano:</strong> Eliminación</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <GiLiver className="w-6 h-6 text-green-600 mr-2" />
                            <h3 className="font-bold text-green-700">Órganos Accesorios</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Hígado:</strong> Metabolismo y desintoxicación</li>
                            <li>• <strong>Vesícula biliar:</strong> Almacén de bilis</li>
                            <li>• <strong>Páncreas:</strong> Enzimas digestivas e insulina</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sistema Urinario */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiKidneys className="w-6 h-6 mr-2 text-blue-500" />
                    Sistema Urinario
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3">Órganos Principales</h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-blue-600">Riñones</h4>
                                <p className="text-sm text-gray-700">Filtración de sangre, producción de orina, regulación de electrolitos</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600">Uréteres</h4>
                                <p className="text-sm text-gray-700">Conductos que transportan orina de riñones a vejiga</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600">Vejiga</h4>
                                <p className="text-sm text-gray-700">Almacenamiento temporal de orina</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600">Uretra</h4>
                                <p className="text-sm text-gray-700">Conducto de eliminación de orina</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h3 className="font-bold text-purple-700 mb-3">Funciones Clave</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Filtración:</strong> Eliminación de desechos</li>
                            <li>• <strong>Regulación:</strong> Balance hídrico y electrolítico</li>
                            <li>• <strong>Homeostasis:</strong> Control de pH sanguíneo</li>
                            <li>• <strong>Producción hormonal:</strong> Eritropoyetina, renina</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sistema Reproductor */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <RiHeartPulseLine className="w-6 h-6 mr-2 text-purple-500" />
                    Sistema Reproductor - Emergencias Uroginecológicas
                </h2>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="text-gray-800 mb-4">
                        El sistema reproductor puede presentar emergencias que se manifiestan como dolor abdominal o pélvico,
                        especialmente en mujeres en edad reproductiva.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Emergencias Comunes:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Embarazo ectópico</li>
                                <li>• Torsión ovárica</li>
                                <li>• Quistes ováricos rotos</li>
                                <li>• Enfermedad inflamatoria pélvica</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Consideraciones:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Siempre considerar embarazo</li>
                                <li>• Dolor puede ser referido</li>
                                <li>• Sangrado vaginal anormal</li>
                                <li>• Historia menstrual importante</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cuadrantes abdominales */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsDiagram3 className="w-6 h-6 text-gray-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-700">Cuadrantes Abdominales y Órganos</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="bg-orange-100 p-4 rounded-lg border">
                        <h4 className="font-bold text-orange-700 mb-2">Cuadrante Superior Derecho</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Hígado</li>
                            <li>• Vesícula biliar</li>
                            <li>• Cabeza del páncreas</li>
                            <li>• Duodeno</li>
                            <li>• Colon ascendente</li>
                            <li>• Riñón derecho (superior)</li>
                        </ul>
                    </div>

                    <div className="bg-blue-100 p-4 rounded-lg border">
                        <h4 className="font-bold text-blue-700 mb-2">Cuadrante Superior Izquierdo</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Estómago</li>
                            <li>• Bazo</li>
                            <li>• Cola del páncreas</li>
                            <li>• Colon descendente</li>
                            <li>• Riñón izquierdo (superior)</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg border">
                        <h4 className="font-bold text-yellow-700 mb-2">Cuadrante Inferior Derecho</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Apéndice</li>
                            <li>• Ciego</li>
                            <li>• Intestino delgado</li>
                            <li>• Ovario derecho (♀)</li>
                            <li>• Uréter derecho</li>
                        </ul>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg border">
                        <h4 className="font-bold text-green-700 mb-2">Cuadrante Inferior Izquierdo</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Colon sigmoide</li>
                            <li>• Intestino delgado</li>
                            <li>• Ovario izquierdo (♀)</li>
                            <li>• Uréter izquierdo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-red-800 mb-2">Nonantes Abdominales (9 Regiones):</h4>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="grid grid-cols-3 gap-1 text-xs">
                            <div className="bg-orange-100 p-2 rounded text-center border">
                                <strong>HCD</strong><br/>
                                Hígado<br/>
                                Vesícula<br/>
                                Colon ascendente
                            </div>
                            <div className="bg-purple-100 p-2 rounded text-center border">
                                <strong>EPIGASTRIO</strong><br/>
                                Estómago<br/>
                                Páncreas<br/>
                                Duodeno
                            </div>
                            <div className="bg-blue-100 p-2 rounded text-center border">
                                <strong>HCI</strong><br/>
                                Bazo<br/>
                                Cola páncreas<br/>
                                Colon descendente
                            </div>
                            <div className="bg-yellow-100 p-2 rounded text-center border">
                                <strong>FLANCO D</strong><br/>
                                Riñón derecho<br/>
                                Colon ascendente<br/>
                                Intestino delgado
                            </div>
                            <div className="bg-pink-100 p-2 rounded text-center border">
                                <strong>MESOGASTRIO</strong><br/>
                                Ombligo<br/>
                                Intestino delgado<br/>
                                Aorta abdominal
                            </div>
                            <div className="bg-green-100 p-2 rounded text-center border">
                                <strong>FLANCO I</strong><br/>
                                Riñón izquierdo<br/>
                                Colon descendente<br/>
                                Intestino delgado
                            </div>
                            <div className="bg-red-100 p-2 rounded text-center border">
                                <strong>FID</strong><br/>
                                Apéndice<br/>
                                Ciego<br/>
                                Ovario D, útero
                            </div>
                            <div className="bg-indigo-100 p-2 rounded text-center border">
                                <strong>HIPOGASTRIO</strong><br/>
                                Vejiga<br/>
                                Útero<br/>
                                Recto-sigma
                            </div>
                            <div className="bg-teal-100 p-2 rounded text-center border">
                                <strong>FII</strong><br/>
                                Colon sigmoide<br/>
                                Ovario I<br/>
                                Uréter distal I
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-600 text-center">
                            <strong>Abreviaturas:</strong> HCD/HCI = Hipocondrio D/I, FID/FII = Fosa Iliaca D/I
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-red-800 mb-2">Dolor por Localización:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Epigastrio:</strong> Estómago, páncreas, IAM</li>
                        <li><strong>Hipocondrios:</strong> Hígado/vesícula (D), bazo (I)</li>
                        <li><strong>Mesogastrio:</strong> Intestino delgado, apendicitis inicial</li>
                        <li><strong>Flancos:</strong> Riñones, cólico ureteral</li>
                        <li><strong>Hipogastrio:</strong> Vejiga, útero, recto</li>
                        <li><strong>Fosas iliacas:</strong> Apéndice (D), sigma (I)</li>
                        <li><strong>McBurney:</strong> Punto específico apendicitis</li>
                    </ul>
                </div>
            </div>

            {/* Dolor referido */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaHandPointRight className="w-6 h-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold text-red-700">Patrones de Dolor Referido</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Órganos → Sitios de Referencia:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Vesícula biliar</strong> → Hombro derecho, escápula</li>
                            <li>• <strong>Páncreas</strong> → Espalda, región interescapular</li>
                            <li>• <strong>Riñones</strong> → Flanco, ingle, genitales</li>
                            <li>• <strong>Diafragma</strong> → Hombro, cuello</li>
                            <li>• <strong>Corazón</strong> → Epigastrio (en algunos casos)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Importancia Clínica:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• El dolor puede sentirse lejos del órgano afectado</li>
                            <li>• Siempre evaluar síntomas asociados</li>
                            <li>• No descartar patología por localización atípica</li>
                            <li>• Considerar múltiples diagnósticos diferenciales</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para PAP */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-8 h-8 text-orange-500 mr-3" />
                    <h2 className="text-2xl font-bold text-orange-700">Puntos Clave para el PAP</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Enfoque Anatómico:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Localizar dolor por cuadrantes</li>
                            <li>• Considerar órganos en cada región</li>
                            <li>• Evaluar patrones de irradiación</li>
                            <li>• Correlacionar con síntomas sistémicos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Aplicación Práctica:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• No hacer diagnósticos específicos</li>
                            <li>• Reconocer patrones de emergencia</li>
                            <li>• Documentar hallazgos objetivos</li>
                            <li>• Comunicar claramente al hospital</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}