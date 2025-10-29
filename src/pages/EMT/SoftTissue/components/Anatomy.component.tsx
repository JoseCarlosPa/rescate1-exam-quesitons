import {FaBandAid, FaFirstAid} from "react-icons/fa";

export default function Anatomy(){
    return(
        <div className="space-y-8">
            {/* Anatomía de la piel */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaBandAid className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía de la Piel y Tejidos Blandos
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Capas de la
                                Piel</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Epidermis</h4>
                                        <p className="text-sm text-gray-600">Capa externa,
                                            protectora. Contiene melanocitos y células de
                                            Langerhans</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Dermis</h4>
                                        <p className="text-sm text-gray-600">Contiene folículos
                                            pilosos, glándulas sebáceas, vasos sanguíneos y
                                            nervios</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Hipodermis</h4>
                                        <p className="text-sm text-gray-600">Tejido subcutáneo
                                            con grasa, aislamiento térmico y almacén
                                            energético</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-xl font-bold text-green-700 mb-4">Estructuras
                                Asociadas</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Vasos Sanguíneos</h4>
                                        <p className="text-sm text-gray-600">Red capilar,
                                            arterias y venas que nutren los tejidos</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Nervios</h4>
                                        <p className="text-sm text-gray-600">Terminaciones
                                            sensitivas para dolor, tacto, temperatura</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Músculos</h4>
                                        <p className="text-sm text-gray-600">Fibras musculares
                                            estriadas y lisas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start">
                        <div className="text-center">
                            <img
                                src="/src/assets/aaos.jpg"
                                alt="Anatomía de la piel y tejidos blandos"
                                className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                            />
                            <p className="text-sm text-gray-600 italic">Estructura anatómica de
                                los tejidos blandos</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Funciones vitales */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <FaFirstAid className="w-5 h-5 mr-2"/>
                    Funciones Vitales de la Piel
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-orange-600 mb-2">Protección</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Barrera contra patógenos</li>
                            <li>• Protección UV</li>
                            <li>• Prevención de pérdida de fluidos</li>
                            <li>• Resistencia mecánica</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-orange-600 mb-2">Regulación</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Termorregulación</li>
                            <li>• Control de sudoración</li>
                            <li>• Vasodilatación/constricción</li>
                            <li>• Balance hídrico</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-orange-600 mb-2">Sensación</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Tacto y presión</li>
                            <li>• Dolor y temperatura</li>
                            <li>• Vibración</li>
                            <li>• Propioceptión</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Proceso de cicatrización */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiología
                    de la Cicatrización</h2>
                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="font-bold text-red-700 mb-3 text-center">HEMOSTASIA</h3>
                        <p className="text-sm text-gray-600 mb-3">0-30 minutos</p>
                        <ul className="text-sm space-y-1">
                            <li>• Vasoconstricción</li>
                            <li>• Agregación plaquetaria</li>
                            <li>• Formación de coágulo</li>
                            <li>• Fibrina y fibrinógeno</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-3 text-center">INFLAMACIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">1-5 días</p>
                        <ul className="text-sm space-y-1">
                            <li>• Vasodilatación</li>
                            <li>• Migración de neutrófilos</li>
                            <li>• Llegada de macrófagos</li>
                            <li>• Limpieza de detritos</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-3 text-center">PROLIFERACIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">5-21 días</p>
                        <ul className="text-sm space-y-1">
                            <li>• Angiogénesis</li>
                            <li>• Formación de colágeno</li>
                            <li>• Granulación</li>
                            <li>• Epitelización</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3 text-center">REMODELACIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">21 días - 2 años</p>
                        <ul className="text-sm space-y-1">
                            <li>• Reorganización del colágeno</li>
                            <li>• Aumento de resistencia</li>
                            <li>• Reducción del tamaño</li>
                            <li>• Maduración cicatriz</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Factores que afectan la cicatrización */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Factores que Afectan la
                    Cicatrización</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Factores
                            Intrínsecos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Edad:</strong> Cicatrización más lenta en ancianos</li>
                            <li><strong>Nutrición:</strong> Proteínas, vitamina C, zinc</li>
                            <li><strong>Circulación:</strong> Perfusión tisular adecuada</li>
                            <li><strong>Diabetes:</strong> Compromete la cicatrización</li>
                            <li><strong>Medicamentos:</strong> Esteroides, anticoagulantes</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Factores
                            Extrínsecos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Infección:</strong> Prolonga la fase inflamatoria</li>
                            <li><strong>Cuerpos extraños:</strong> Impiden la curación</li>
                            <li><strong>Tensión:</strong> Movimiento excesivo de bordes</li>
                            <li><strong>Hipoxia:</strong> Falta de oxígeno tisular</li>
                            <li><strong>Temperatura:</strong> Frío ralentiza el proceso</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación neurovascular */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Evaluación
                    Neurovascular Crítica</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Las 5 P del Compromiso
                        Neurovascular</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                            <h4 className="font-bold text-red-600 mb-2">PAIN</h4>
                            <p className="text-sm">Dolor desproporcionado</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <h4 className="font-bold text-red-600 mb-2">PALLOR</h4>
                            <p className="text-sm">Palidez distal</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <h4 className="font-bold text-red-600 mb-2">PARESTHESIAS</h4>
                            <p className="text-sm">Hormigueo o entumecimiento</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <h4 className="font-bold text-red-600 mb-2">PARALYSIS</h4>
                            <p className="text-sm">Pérdida de función motora</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <h4 className="font-bold text-red-600 mb-2">PULSELESSNESS</h4>
                            <p className="text-sm">Ausencia de pulsos distales</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-red-100 rounded">
                        <p className="text-sm text-red-800"><strong>¡ALERTA!</strong> La
                            presencia de cualquiera de estas 5 P indica compromiso neurovascular
                            grave que requiere atención inmediata.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}