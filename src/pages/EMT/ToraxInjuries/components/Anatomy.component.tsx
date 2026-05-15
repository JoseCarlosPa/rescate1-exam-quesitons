import {FaLungsVirus} from "react-icons/fa";

export default function Anatomy(){
    return (
        <div className="space-y-8">
            {/* Anatomía visual interactiva */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaLungsVirus className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía Torácica y Espacios
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Estructura de
                                la Caja Torácica</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold">Pared Torácica</h4>
                                        <p className="text-sm text-gray-600">12 pares de
                                            costillas, esternón, músculos intercostales</p>
                                        <p className="text-sm text-blue-600 font-medium">Función:
                                            Protección y mecánica respiratoria</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold">Espacio Pleural</h4>
                                        <p className="text-sm text-gray-600">Cavidad virtual
                                            entre pleura parietal y visceral</p>
                                        <p className="text-sm text-green-600 font-medium">Presión:
                                            -5 mmHg (negativa)</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold">Mediastino</h4>
                                        <p className="text-sm text-gray-600">Compartimento
                                            central: corazón, grandes vasos, esófago</p>
                                        <p className="text-sm text-purple-600 font-medium">Crucial
                                            para función cardiopulmonar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-bold text-red-700 mb-4">Puntos
                                Anatómicos Críticos</h3>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded shadow-sm">
                                    <h4 className="font-semibold text-red-600">Línea
                                        Medio-Clavicular</h4>
                                    <p className="text-sm">2º espacio intercostal -
                                        Descompresión de neumotórax</p>
                                </div>
                                <div className="bg-white p-3 rounded shadow-sm">
                                    <h4 className="font-semibold text-red-600">Línea Axilar
                                        Anterior</h4>
                                    <p className="text-sm">5º espacio intercostal - Toracostomía
                                        alternativa</p>
                                </div>
                                <div className="bg-white p-3 rounded shadow-sm">
                                    <h4 className="font-semibold text-red-600">Ángulo de
                                        Louis</h4>
                                    <p className="text-sm">Referencia anatómica para 2º
                                        cartílago costal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start">
                        <div className="text-center">
                            <img
                                src="/src/assets/netter.webp"
                                alt="Anatomía del tórax"
                                className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                            />
                            <p className="text-sm text-gray-600 italic">Anatomía detallada del
                                tórax</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fisiopatología de lesiones */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiopatología
                    de Lesiones Críticas</h2>
                <div className="space-y-6">
                    <div
                        className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-4">Neumotórax a
                            Tensión</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Mecanismo:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Lesión pleural actúa como válvula unidireccional</li>
                                    <li>Aire entra durante inspiración</li>
                                    <li>No puede salir durante espiración</li>
                                    <li>Presión intratorácica aumenta progresivamente</li>
                                    <li>Colapso pulmonar y desviación mediastínica</li>
                                    <li>Compresión de vena cava → ↓ retorno venoso</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Consecuencias:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Hipoxemia severa</li>
                                    <li>Shock obstructivo</li>
                                    <li>Paro cardiorrespiratorio</li>
                                    <li>Muerte en minutos si no se trata</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-4">Hemotórax
                            Masivo</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Fuentes de sangrado:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Vasos intercostales (más común)</li>
                                    <li>Arteria mamaria interna</li>
                                    <li>Grandes vasos (aorta, vena cava)</li>
                                    <li>Corazón</li>
                                    <li>Vasos pulmonares</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Criterios de masividad:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>&gt;1500 ml inicial</li>
                                    <li>&gt;200 ml/hora durante 4 horas</li>
                                    <li>Signos de shock hipovolémico</li>
                                    <li>Compromiso respiratorio</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-yellow-700 mb-4">Taponamiento
                            Cardíaco</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Fisiopatología:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Acumulación de sangre en saco pericárdico</li>
                                    <li>Pericardio no distensible</li>
                                    <li>↑ Presión pericárdica</li>
                                    <li>Compresión ventrículos</li>
                                    <li>↓ Llenado diastólico</li>
                                    <li>↓ Gasto cardíaco</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Tríada de Beck (tardía):</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Ingurgitación yugular</li>
                                    <li>Ruidos cardíacos apagados</li>
                                    <li>Hipotensión</li>
                                </ul>
                                <p className="text-sm text-yellow-700 font-medium mt-2">
                                    *Solo presente en 10% de casos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}