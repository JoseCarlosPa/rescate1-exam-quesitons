import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {FaMaskVentilator} from "react-icons/fa6";
import {MdLocalHospital, MdWarning} from "react-icons/md";
import {GiLungs} from "react-icons/gi";

export default function Treatment(){
    return(
        <div className="space-y-8">
            {/* Algoritmo de evaluación inicial */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-green-800 flex items-center">
                    <FaFirstAid className="w-6 h-6 mr-2"/>
                    Algoritmo de Evaluación y Manejo Inicial
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-bold text-blue-700 mb-2">1. EVALUACIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• ABC primario</li>
                            <li>• Estado mental</li>
                            <li>• Signos vitales</li>
                            <li>• SpO₂</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                        <h3 className="font-bold text-orange-700 mb-2">2. OXIGENACIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• SpO₂ &lt; 94% = O₂</li>
                            <li>• Posición cómoda</li>
                            <li>• Monitoreo continuo</li>
                            <li>• Vía aérea permeable</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-bold text-purple-700 mb-2">3. TRATAMIENTO</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Broncodilatadores</li>
                            <li>• Aspiración si necesario</li>
                            <li>• Soporte ventilatorio</li>
                            <li>• Medicación específica</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                        <h3 className="font-bold text-red-700 mb-2">4. TRASLADO</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Reevaluación</li>
                            <li>• Monitoreo</li>
                            <li>• Centro apropiado</li>
                            <li>• Comunicación</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Dispositivos de oxigenoterapia */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaMaskVentilator className="w-6 h-6 mr-2 text-orange-500"/>
                    Dispositivos de Oxigenoterapia
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                        <tr className="bg-gradient-to-r from-orange-100 to-red-100">
                            <th className="py-3 px-4 border text-left font-semibold">Dispositivo</th>
                            <th className="py-3 px-4 border text-center font-semibold">FiO₂</th>
                            <th className="py-3 px-4 border text-center font-semibold">Flujo (L/min)</th>
                            <th className="py-3 px-4 border text-left font-semibold">Indicaciones</th>
                            <th className="py-3 px-4 border text-left font-semibold">Consideraciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Cánula nasal</td>
                            <td className="py-3 px-4 border text-center">24-44%</td>
                            <td className="py-3 px-4 border text-center">1-6</td>
                            <td className="py-3 px-4 border">Hipoxia leve, EPOC estable</td>
                            <td className="py-3 px-4 border">Cómoda, permite hablar y comer</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Mascarilla simple</td>
                            <td className="py-3 px-4 border text-center">35-50%</td>
                            <td className="py-3 px-4 border text-center">5-10</td>
                            <td className="py-3 px-4 border">Hipoxia moderada</td>
                            <td className="py-3 px-4 border">Flujo mínimo 5 L/min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Mascarilla con reservorio</td>
                            <td className="py-3 px-4 border text-center">60-95%</td>
                            <td className="py-3 px-4 border text-center">10-15</td>
                            <td className="py-3 px-4 border">Hipoxia severa, trauma, shock</td>
                            <td className="py-3 px-4 border">Reservorio siempre inflado</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Venturi</td>
                            <td className="py-3 px-4 border text-center">24-60%</td>
                            <td className="py-3 px-4 border text-center">Variable</td>
                            <td className="py-3 px-4 border">EPOC, necesidad de FiO₂ precisa</td>
                            <td className="py-3 px-4 border">Concentración exacta</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">BVM con reservorio</td>
                            <td className="py-3 px-4 border text-center">90-100%</td>
                            <td className="py-3 px-4 border text-center">15</td>
                            <td className="py-3 px-4 border">Ventilación asistida, paro respiratorio</td>
                            <td className="py-3 px-4 border">10-12 vent/min en adultos</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Protocolos específicos por patología */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdLocalHospital className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolos de Tratamiento por Patología
                </h2>
                <div className="space-y-6">
                    {/* Obstrucción de vía aérea */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-red-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Obstrucción de Vía Aérea
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-red-600 mb-2">Obstrucción Parcial</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Evaluar efectividad de la tos</li>
                                    <li>Si tos efectiva: animar a toser</li>
                                    <li>Posición cómoda, oxígeno</li>
                                    <li>Monitoreo continuo</li>
                                    <li>Preparar para obstrucción completa</li>
                                </ol>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-red-600 mb-2">Obstrucción Completa</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li><strong>Adulto consciente:</strong> Heimlich</li>
                                    <li><strong>Lactante:</strong> 5 golpes espalda + 5 compresiones torácicas</li>
                                    <li><strong>Inconsciente:</strong> RCP inmediato</li>
                                    <li>Revisar boca antes de ventilar</li>
                                    <li>Continuar hasta desobstrucción</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Crisis asmática */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-blue-700 flex items-center">
                            <GiLungs className="w-5 h-5 mr-2"/>
                            Crisis Asmática
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-green-600 mb-2">Leve a Moderada</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>SpO₂ &gt; 92%</li>
                                    <li>Puede hablar frases</li>
                                    <li>FC &lt; 100/min</li>
                                    <li>FR &lt; 25/min</li>
                                </ul>
                                <p className="text-xs text-green-600 font-semibold mt-2">Tratamiento: O₂ + Broncodilatador</p>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-orange-600 mb-2">Severa</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>SpO₂ 88-92%</li>
                                    <li>Habla palabras sueltas</li>
                                    <li>FC 100-120/min</li>
                                    <li>FR 25-30/min</li>
                                </ul>
                                <p className="text-xs text-orange-600 font-semibold mt-2">Tratamiento: O₂ alto flujo + Broncodilatador continuo</p>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-red-600 mb-2">Crítica</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>SpO₂ &lt; 88%</li>
                                    <li>No puede hablar</li>
                                    <li>FC &gt; 120/min</li>
                                    <li>FR &gt; 30/min o &lt; 10/min</li>
                                </ul>
                                <p className="text-xs text-red-600 font-semibold mt-2">Tratamiento: BVM + Traslado inmediato</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-blue-100 rounded">
                            <p className="text-sm"><strong>Protocolo:</strong> Salbutamol 2.5-5mg nebulizado, puede repetirse cada 20 min. Considerar esteroides según protocolos locales.</p>
                        </div>
                    </div>

                    {/* EPOC exacerbado */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-green-700 flex items-center">
                            <FaLungsVirus className="w-5 h-5 mr-2"/>
                            EPOC Exacerbado
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-green-600 mb-2">Fisiopatología</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                    Engloba enfisema y bronquitis crónica. Obstrucción crónica al flujo de aire,
                                    típicamente causada por tabaquismo.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Destrucción alveolar progresiva</li>
                                    <li>Inflamación bronquial crónica</li>
                                    <li>Retención de CO₂ crónica</li>
                                    <li>Dependencia del estímulo hipóxico</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-green-600 mb-2">Tratamiento</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li><strong>Oxígeno con precaución:</strong> nunca suspenderlo si necesario</li>
                                    <li><strong>Asistencia con inhalador</strong> del paciente (IDM prescrito)</li>
                                    <li><strong>Permitir sentarse erguido</strong></li>
                                    <li><strong>Monitorización continua</strong> y traslado rápido</li>
                                    <li><strong>Objetivo SpO₂:</strong> 88-92%</li>
                                </ol>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-100 rounded flex items-start">
                            <MdWarning className="w-5 h-5 text-yellow-600 mr-2 mt-0.5"/>
                            <p className="text-sm"><strong>¡CUIDADO!</strong> El oxígeno alto flujo puede suprimir el estímulo respiratorio en pacientes con EPOC. Monitorear CO₂ si está disponible.</p>
                        </div>
                    </div>

                    {/* Edema pulmonar */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-purple-700 flex items-center">
                            <FaHeartbeat className="w-5 h-5 mr-2"/>
                            Edema Pulmonar Agudo
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-purple-600 mb-2">Fisiopatología</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                    Acumulación de líquido en los alvéolos, frecuentemente por insuficiencia cardíaca congestiva.
                                    Se caracteriza por esputo espumoso rosado y disnea intensa.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Falla del ventrículo izquierdo</li>
                                    <li>↑ Presión capilar pulmonar</li>
                                    <li>Extravasación de líquido</li>
                                    <li>Deterioro del intercambio gaseoso</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-purple-600 mb-2">Tratamiento</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li><strong>Posición en Fowler alta</strong> para mejorar intercambio gaseoso</li>
                                    <li><strong>Oxígeno alto flujo (15 L/min)</strong> con mascarilla de no reinhalación</li>
                                    <li><strong>CPAP</strong> si disponible (presión positiva continua)</li>
                                    <li><strong>Rápido traslado</strong> al hospital</li>
                                    <li>Considerar nitroglicerina si PA sistólica mayor 100 mmHg</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Neumotórax y Derrame pleural */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-orange-700 flex items-center">
                            <GiLungs className="w-5 h-5 mr-2"/>
                            Neumotórax Espontáneo y Derrame Pleural
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-orange-600 mb-2">Neumotórax Espontáneo</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>Fisiopatología:</strong> Entrada de aire en el espacio pleural, colapsando el pulmón.
                                </p>
                                <p className="text-sm text-gray-700 mb-2"><strong>Tratamiento:</strong></p>
                                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                    <li>Oxígeno de alto flujo</li>
                                    <li>Monitorización del empeoramiento clínico</li>
                                    <li>Rápido traslado sin presión positiva</li>
                                    <li>Evitar BVM si no es necesario</li>
                                    <li>Posición cómoda para el paciente</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-orange-600 mb-2">Derrame Pleural</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>Fisiopatología:</strong> Acumulación de líquido en el espacio pleural.
                                </p>
                                <p className="text-sm text-gray-700 mb-2"><strong>Tratamiento:</strong></p>
                                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                    <li>Oxígeno suplementario</li>
                                    <li>Posicionamiento para facilitar respiración</li>
                                    <li>Traslado a hospital para diagnóstico y drenaje</li>
                                    <li>Monitoreo de signos vitales</li>
                                    <li>Posición de semi-Fowler</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Embolia pulmonar */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-red-700 flex items-center">
                            <FaHeartbeat className="w-5 h-5 mr-2"/>
                            Embolia Pulmonar
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-red-600 mb-2">Fisiopatología</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                    Obstrucción de una arteria pulmonar por un coágulo.
                                    Puede causar disnea súbita y dolor torácico.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Obstrucción vascular pulmonar</li>
                                    <li>Alteración V/Q severa</li>
                                    <li>Sobrecarga cardíaca derecha</li>
                                    <li>Hipoxemia aguda</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-red-600 mb-2">Tratamiento</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li><strong>Oxígeno de alto flujo</strong></li>
                                    <li><strong>Evaluación y traslado urgente</strong></li>
                                    <li><strong>Monitoreo de signos vitales</strong>, evitar esfuerzo físico</li>
                                    <li>Posición de comodidad</li>
                                    <li>Acceso venoso para medicación</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Hiperventilación y exposición tóxica */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-yellow-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Hiperventilación y Exposición Tóxica
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-yellow-600 mb-2">Hiperventilación</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>Fisiopatología:</strong> Respiración rápida y profunda, normalmente por ansiedad o estrés.
                                </p>
                                <p className="text-sm text-gray-700 mb-2"><strong>Tratamiento:</strong></p>
                                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                    <li>Calmar al paciente y controlar el entorno</li>
                                    <li>Administrar oxígeno si hay signos de hipoxia</li>
                                    <li><strong>NO usar bolsas</strong> para rebreathing en prehospitalario</li>
                                    <li>Técnicas de respiración controlada</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold text-yellow-600 mb-2">Exposición a Gases Tóxicos/CO</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>Fisiopatología:</strong> Interferencia en la oxigenación por gases inhalados.
                                </p>
                                <p className="text-sm text-gray-700 mb-2"><strong>Tratamiento:</strong></p>
                                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                    <li>Oxígeno a flujo alto inmediatamente</li>
                                    <li>Traslado urgente</li>
                                    <li>Posible cámara hiperbárica si intoxicación por CO</li>
                                    <li>Evaluación neurológica continua</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cuerpo extraño y disfunción de traqueostomía */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-medium text-xl mb-3 text-blue-700 flex items-center">
                            <FaLungsVirus className="w-5 h-5 mr-2"/>
                            Cuerpo Extraño Aspirado / Disfunción de Traqueostomía
                        </h3>
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-blue-600 mb-2">Tratamiento</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li><strong>Succión inmediata</strong></li>
                                <li><strong>Ventilación asistida con BVM</strong> si hay apnea</li>
                                <li><strong>Considerar intubación</strong> si se entrena para ello o contactar SVA</li>
                                <li>Maniobras de desobstrucción según la edad</li>
                                <li>Cambio de cánula si hay disfunción de traqueostomía</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Técnicas de soporte ventilatorio */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaFirstAid className="w-5 h-5 mr-2 text-orange-500"/>
                    Técnicas de Soporte Ventilatorio
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Ventilación con BVM</h4>
                        <div className="bg-white p-4 rounded space-y-2">
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">1</span>
                                <span className="text-sm">Sellado hermético de la mascarilla</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">2</span>
                                <span className="text-sm">Volumen 6-8 ml/kg (evitar hiperventilación)</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">3</span>
                                <span className="text-sm">Frecuencia: 10-12/min adultos, 12-20/min niños</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">4</span>
                                <span className="text-sm">Observar elevación del tórax</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Dispositivos Supraglóticos</h4>
                        <div className="bg-white p-4 rounded space-y-2">
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>i-gel:</strong> Fácil inserción, no requiere inflado</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>Mascarilla laríngea:</strong> Balón inflable</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>King LT:</strong> Doble balón</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-2"><strong>Indicación:</strong> Ventilación difícil con BVM, paciente inconsciente</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}