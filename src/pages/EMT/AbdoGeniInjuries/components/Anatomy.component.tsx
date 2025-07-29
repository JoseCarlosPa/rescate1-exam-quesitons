import {FiTarget, FiUser} from "react-icons/fi";
import {GiKidneys, GiLiver, GiStomach} from "react-icons/gi";
import {BsShield} from "react-icons/bs";
import {TbStethoscope} from "react-icons/tb";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía básica */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FiUser className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Anatomía Abdominal y Genitourinaria</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Comprender la anatomía es <strong>fundamental</strong> para identificar lesiones según la ubicación
                    del trauma y predecir complicaciones.
                </p>
            </div>

            {/* Regiones abdominales (9 cuadrantes) */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiTarget className="w-6 h-6 mr-2 text-orange-500"/>
                    Regiones Abdominales (9 Cuadrantes) - Mapa Anatómico Detallado
                </h2>
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                        <strong>División anatómica:</strong> El abdomen se divide en 9 regiones usando dos líneas
                        verticales (líneas medioclaviculares)
                        y dos líneas horizontales (plano subcostal y plano intertubercular) para una localización más
                        precisa.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Fila Superior */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-200">
                        <h3 className="text-lg font-bold text-red-700 mb-2 text-center">Hipocondrio Derecho</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-red-600 mr-2"/>
                                <span className="font-medium">Hígado (lóbulo derecho)</span>
                            </div>
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-red-600 mr-2"/>
                                <span className="font-medium">Glandula Suprarrenal derecha</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-red-600 mr-2"/>
                                <span className="font-medium">Vesícula biliar</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-red-600 mr-2"/>
                                <span className="font-medium">Riñón derecho (polo superior)</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-red-600 mr-2"/>
                                <span className="font-medium">Flexura hepática del colon</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Hemorragia hepática
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-200">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">Epigastrio</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Curvatura menos del Estómago</span>
                            </div>
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Hígado (lóbulo izquierdo)</span>
                            </div>
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Duodeno</span>
                            </div>
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Aorta abdominal</span>
                            </div>
                            <div className="flex items-center">
                                <GiLiver className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Vena cava inferior</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-yellow-600 mr-2"/>
                                <span className="font-medium">Páncreas</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Perforación gástrica
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-200">
                        <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">Hipocondrio Izquierdo</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-blue-600 mr-2"/>
                                <span className="font-medium">Cola del páncreas</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-blue-600 mr-2"/>
                                <span className="font-medium">Bazo</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-blue-600 mr-2"/>
                                <span className="font-medium">Ángulo esplénico del colon</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-blue-600 mr-2"/>
                                <span className="font-medium">Glandula Suprarrenal izquierda</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-blue-600 mr-2"/>
                                <span className="font-medium">Riñón izquierdo (polo superior)</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Ruptura esplénica (Signo de Kehr)
                            </p>
                        </div>
                    </div>

                    {/* Fila Media */}
                    <div
                        className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-200">
                        <h3 className="text-lg font-bold text-orange-700 mb-2 text-center">Flanco Derecho</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-orange-600 mr-2"/>
                                <span className="font-medium">Colon ascendente</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-orange-600 mr-2"/>
                                <span className="font-medium">Riñón derecho (polo inferior)</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-orange-600 mr-2"/>
                                <span className="font-medium">Intestino delgado (asas)</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Lesión renal
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border-2 border-teal-200">
                        <h3 className="text-lg font-bold text-teal-700 mb-2 text-center">Mesogastro</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Intestino delgado (yuyeno e ileon)</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Porcion inferior duodenal</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Aorta</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Vena cava inferior</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Mesenterio</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-teal-600 mr-2"/>
                                <span className="font-medium">Epiplon mayor</span>
                            </div>

                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Perforación intestinal
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border-2 border-indigo-200">
                        <h3 className="text-lg font-bold text-indigo-700 mb-2 text-center">Flanco Izquierdo</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-indigo-600 mr-2"/>
                                <span className="font-medium">Colon descendente</span>
                            </div>
                            <div className="flex items-center">
                                <GiKidneys className="w-4 h-4 text-indigo-600 mr-2"/>
                                <span className="font-medium">Riñón izquierdo (polo inferior)</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-indigo-600 mr-2"/>
                                <span className="font-medium">Intestino delgado (asas)</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Lesión renal
                            </p>
                        </div>
                    </div>

                    {/* Fila Inferior */}
                    <div
                        className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-200">
                        <h3 className="text-lg font-bold text-green-700 mb-2 text-center">Fosa Ilíaca Derecha</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Apéndice cecal</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Ciego</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Ovario derecho ♀</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Trompa uterina</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Ileon terminal</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Cordon espermatico</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-green-600 mr-2"/>
                                <span className="font-medium">Desembocadura del urétere</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Apendicitis/Perforación
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-200">
                        <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">Hipogastrio
                            (Suprapúbico)</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-purple-600 mr-2"/>
                                <span className="font-medium">Vejiga urinaria</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-purple-600 mr-2"/>
                                <span className="font-medium">Útero ♀</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-purple-600 mr-2"/>
                                <span className="font-medium">Colon sigmoideo</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-purple-600 mr-2"/>
                                <span className="font-medium">Prostata</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Ruptura vesical
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border-2 border-pink-200">
                        <h3 className="text-lg font-bold text-pink-700 mb-2 text-center">Fosa Ilíaca Izquierda</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-pink-600 mr-2"/>
                                <span className="font-medium">Colon sigmoide</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-pink-600 mr-2"/>
                                <span className="font-medium">Ovario izquierdo ♀</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-pink-600 mr-2"/>
                                <span className="font-medium">Trompa uterina</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-pink-600 mr-2"/>
                                <span className="font-medium">Cordon espermatico izquierdo</span>
                            </div>
                            <div className="flex items-center">
                                <GiStomach className="w-4 h-4 text-pink-600 mr-2"/>
                                <span className="font-medium">Desembocadura del urétere</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                <strong>Riesgo:</strong> Diverticulitis/Perforación
                            </p>
                        </div>
                    </div>
                </div>

                {/* Nota clínica importante */}
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                        <FiTarget className="w-5 h-5 mr-2"/>
                        Importancia Clínica de las 9 Regiones:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Localización precisa:</strong> Permite identificar órganos específicos afectados
                        </li>
                        <li>• <strong>Comunicación médica:</strong> Facilita la comunicación con el hospital receptor
                        </li>
                        <li>• <strong>Priorización:</strong> Ayuda a determinar la urgencia del transporte según la
                            región afectada
                        </li>
                        <li>• <strong>Seguimiento:</strong> Permite monitorizar la progresión de signos y síntomas</li>
                    </ul>
                </div>
            </div>

            {/* Diferencias órganos sólidos vs huecos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Órganos Sólidos vs. Órganos Huecos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                            <GiLiver className="w-6 h-6 mr-2"/>
                            Órganos Sólidos
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-red-700">Características:</p>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Muy vascularizados</li>
                                    <li>• Sangran profusamente</li>
                                    <li>• Causan shock rápidamente</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-red-700">Ejemplos:</p>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Hígado, bazo, riñones</li>
                                    <li>• Páncreas, ovarios</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-red-700">Complicación principal:</p>
                                <p className="text-sm text-gray-700">Hemorragia interna masiva</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center flex items-center justify-center">
                            <GiStomach className="w-6 h-6 mr-2"/>
                            Órganos Huecos
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-blue-700">Características:</p>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Contienen líquidos/gases</li>
                                    <li>• Al romperse derraman contenido</li>
                                    <li>• Causan inflamación severa</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-blue-700">Ejemplos:</p>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Estómago, intestinos</li>
                                    <li>• Vejiga, vesícula biliar</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-medium text-blue-700">Complicación principal:</p>
                                <p className="text-sm text-gray-700">Peritonitis y sepsis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sistema genitourinario */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiKidneys className="w-6 h-6 mr-2 text-orange-500"/>
                    Sistema Genitourinario
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-teal-700 mb-2 text-center">Riñones</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Filtran 180L de sangre/día</li>
                            <li>• Ubicados en retroperitoneo</li>
                            <li>• Protegidos por costillas</li>
                            <li>• Lesión → hematuria</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-cyan-50 to-cyan-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-cyan-700 mb-2 text-center">Vejiga</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Almacena hasta 500ml orina</li>
                            <li>• Protegida por pelvis</li>
                            <li>• Más vulnerable cuando llena</li>
                            <li>• Lesión → hematuria, dolor</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-indigo-700 mb-2 text-center">Genitales</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Muy vascularizados</li>
                            <li>• Lesiones muy dolorosas</li>
                            <li>• Sangrado abundante</li>
                            <li>• Riesgo de infección</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos específicos */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <TbStethoscope className="w-6 h-6 text-amber-600 mr-2"/>
                    <h3 className="text-xl font-bold text-amber-800">Signos Específicos de Localización</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-amber-800 mb-3">Signos Abdominales:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Signo de Kehr:</strong> Dolor referido al hombro izquierdo (lesión esplénica)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Signo de Cullen:</strong> Hematoma periumbilical (hemorragia retroperitoneal)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Signo de Grey-Turner:</strong> Hematoma en flancos (hemorragia retroperitoneal)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-amber-800 mb-3">Signos Genitourinarios:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Hematuria:</strong> Sangre en orina (lesión renal/vesical)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Sangre en meato:</strong> Lesión uretral</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-amber-700 mr-2">•</span>
                                <span><strong>Dolor costovertebral:</strong> Lesión renal</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}