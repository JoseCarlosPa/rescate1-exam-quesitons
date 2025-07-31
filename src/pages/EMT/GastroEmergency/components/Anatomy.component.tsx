import {FaExclamationTriangle} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";

export default function Anatomy(){
    return(
        <div className="space-y-8">
            {/* Datos Críticos para Paramédicos */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                    Anatomía Aplicada para Emergencias
                </h3>
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
            </div>

            {/* Sistema Gastrointestinal */}
            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Gastrointestinal</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h3 className="font-bold text-orange-700 mb-2">Tracto Alto</h3>
                            <ul className="text-sm space-y-1">
                                <li>• <strong>Esófago:</strong> Varices, ruptura</li>
                                <li>• <strong>Estómago:</strong> Úlceras, gastritis</li>
                                <li>• <strong>Duodeno:</strong> Úlceras duodenales</li>
                            </ul>
                            <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                <strong>Sangrado:</strong> Hematemesis "café molido"
                            </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-bold text-blue-700 mb-2">Tracto Bajo</h3>
                            <ul className="text-sm space-y-1">
                                <li>• <strong>Intestino delgado:</strong> Obstrucción</li>
                                <li>• <strong>Colon:</strong> Diverticulitis</li>
                                <li>• <strong>Recto:</strong> Hemorroides, fisuras</li>
                            </ul>
                            <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                <strong>Sangrado:</strong> Melena o hematoquecia
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-2">Órganos Accesorios</h3>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <div>
                                <strong>Hígado:</strong><br/>
                                - Hepatitis<br/>
                                - Trauma hepático
                            </div>
                            <div>
                                <strong>Vesícula:</strong><br/>
                                - Colecistitis<br/>
                                - Colelitiasis
                            </div>
                            <div>
                                <strong>Páncreas:</strong><br/>
                                - Pancreatitis<br/>
                                - Diabetes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                        <h4 className="font-bold mb-2">Fisiología Digestiva</h4>
                        <div className="text-sm space-y-2 text-left">
                            <div><strong>pH gástrico:</strong> 1.5-2.0</div>
                            <div><strong>Vaciado gástrico:</strong> 2-4 hrs</div>
                            <div><strong>Tránsito intestinal:</strong> 3-5 días</div>
                            <div><strong>Bilis/día:</strong> 500-1000 ml</div>
                            <div><strong>Jugo pancreático:</strong> 1-2 L/día</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sistema Urinario */}
            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Urinario</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-bold text-blue-700 mb-2">Riñones</h3>
                            <ul className="text-sm space-y-1">
                                <li>• <strong>Localización:</strong> T12-L3</li>
                                <li>• <strong>Función:</strong> Filtrar 180L/día</li>
                                <li>• <strong>Producen:</strong> 1-2L orina/día</li>
                                <li>• <strong>Patología:</strong> Cálculos, infección</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-bold text-green-700 mb-2">Vías Urinarias</h3>
                            <ul className="text-sm space-y-1">
                                <li>• <strong>Uréteres:</strong> 25-30 cm longitud</li>
                                <li>• <strong>Vejiga:</strong> Capacidad 400-600ml</li>
                                <li>• <strong>Uretra:</strong> ♂ 20cm, ♀ 4cm</li>
                                <li>• <strong>Patología:</strong> Obstrucción, ITU</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Puntos de Obstrucción Ureteral</h4>
                        <ol className="list-decimal list-inside text-sm space-y-1">
                            <li>Unión ureteropélvica</li>
                            <li>Cruce con vasos ilíacos</li>
                            <li>Unión ureterovesical</li>
                        </ol>
                    </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                        <h4 className="font-bold mb-2">Valores Normales</h4>
                        <div className="text-sm space-y-2 text-left">
                            <div><strong>Diuresis:</strong> 0.5-1 ml/kg/h</div>
                            <div><strong>Creatinina:</strong> 0.6-1.2 mg/dl</div>
                            <div><strong>BUN:</strong> 10-20 mg/dl</div>
                            <div><strong>Glucosa orina:</strong> Negativa</div>
                            <div><strong>Proteínas:</strong> &lt; 150 mg/día</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Correlación Clínica */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Correlación Anatómica - Clínica</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2">Dolor Referido</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Vesícula → Escápula derecha</li>
                            <li>• Riñón → Flanco y testículo</li>
                            <li>• Apéndice → Periumbilical → CID</li>
                            <li>• Diafragma → Hombro</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2">Irrigación Vascular</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Mesentérica superior → Intestino delgado</li>
                            <li>• Mesentérica inferior → Colon</li>
                            <li>• Renal → Riñones</li>
                            <li>• Hepática → Hígado</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2">Inervación</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Simpática → T5-L2</li>
                            <li>• Parasimpática → Vago, S2-S4</li>
                            <li>• Dolor visceral → Poco localizado</li>
                            <li>• Dolor parietal → Bien localizado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}