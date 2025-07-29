import {FiActivity} from "react-icons/fi";

export default function Pathophysiology(){
    return(
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiActivity className="w-6 h-6 mr-2 text-orange-500"/>
                    Fisiopatología de las Emergencias Cardiovasculares
                </h2>

                {/* Síndrome Coronario Agudo */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Síndrome Coronario Agudo (SCA)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Fisiopatología:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>Aterosclerosis coronaria:</strong> Acumulación de placas de colesterol</li>
                                <li><strong>Ruptura de placa:</strong> Exposición del núcleo lipídico</li>
                                <li><strong>Activación plaquetaria:</strong> Formación de trombo</li>
                                <li><strong>Oclusión coronaria:</strong> Parcial o completa</li>
                                <li><strong>Isquemia/Necrosis:</strong> Daño miocárdico</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Tipos de SCA:</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-red-700">STEMI</h5>
                                    <p className="text-sm text-gray-600">Oclusión coronaria completa. Elevación del ST en ECG. Necrosis transmural.</p>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-orange-700">NSTEMI</h5>
                                    <p className="text-sm text-gray-600">Oclusión parcial. Sin elevación del ST. Necrosis subendocárdica.</p>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-yellow-700">Angina Inestable</h5>
                                    <p className="text-sm text-gray-600">Isquemia sin necrosis. Trombo no oclusivo. Sin elevación de troponinas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insuficiencia Cardíaca */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Insuficiencia Cardíaca Aguda</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Mecanismos Compensatorios:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Activación simpática:</strong> ↑ FC, ↑ contractilidad</li>
                                <li><strong>Sistema RAA:</strong> Retención de Na+ y agua</li>
                                <li><strong>Liberación de BNP:</strong> Vasodilatación, diuresis</li>
                                <li><strong>Remodelado cardíaco:</strong> Hipertrofia, dilatación</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Clasificación Killip:</h4>
                            <div className="space-y-2">
                                <div className="bg-green-100 p-2 rounded text-sm">
                                    <strong>Clase I:</strong> Sin signos de ICC (mortalidad 6%)
                                </div>
                                <div className="bg-yellow-100 p-2 rounded text-sm">
                                    <strong>Clase II:</strong> Estertores, S3 (mortalidad 17%)
                                </div>
                                <div className="bg-orange-100 p-2 rounded text-sm">
                                    <strong>Clase III:</strong> Edema pulmonar (mortalidad 38%)
                                </div>
                                <div className="bg-red-100 p-2 rounded text-sm">
                                    <strong>Clase IV:</strong> Shock cardiogénico (mortalidad 81%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Arritmias */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Fisiopatología de Arritmias</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Mecanismos de Arritmias:</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li><strong>Automatismo anormal:</strong> Focos ectópicos</li>
                                <li><strong>Reentrada:</strong> Circuitos de conducción</li>
                                <li><strong>Actividad desencadenada:</strong> Post-despolarizaciones</li>
                                <li><strong>Bloqueos de conducción:</strong> Retraso o interrupción</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Factores Precipitantes:</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Isquemia miocárdica</li>
                                <li>• Desequilibrios electrolíticos</li>
                                <li>• Fármacos proarrítmicos</li>
                                <li>• Estimulación simpática</li>
                                <li>• Acidosis/Hipoxia</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Consecuencias Hemodinámicas:</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• ↓ Gasto cardíaco</li>
                                <li>• ↓ Presión arterial</li>
                                <li>• ↓ Perfusión coronaria</li>
                                <li>• ↑ Consumo de O₂</li>
                                <li>• Riesgo de muerte súbita</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Shock Cardiogénico */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Shock Cardiogénico</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Fisiopatología:</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-red-600">Falla de Bomba</h5>
                                    <p className="text-sm text-gray-600">↓ Contractilidad → ↓ GC → ↓ PA → ↓ Perfusión coronaria</p>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-orange-600">Círculo Vicioso</h5>
                                    <p className="text-sm text-gray-600">↓ Perfusión → ↑ Isquemia → ↓ Contractilidad → ↓ GC</p>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-yellow-600">Respuesta Sistémica</h5>
                                    <p className="text-sm text-gray-600">Vasoconstricción, retención de líquidos, inflamación</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Criterios Diagnósticos:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>• PA sistólica &lt; 90 mmHg</li>
                                <li>• Índice cardíaco &lt; 2.2 L/min/m²</li>
                                <li>• PCWP &gt; 18 mmHg</li>
                                <li>• Signos de hipoperfusión tisular</li>
                                <li>• Oliguria (&lt; 0.5 mL/kg/h)</li>
                                <li>• Alteración del estado mental</li>
                                <li>• Extremidades frías</li>
                                <li>• Acidosis láctica</li>
                            </ul>
                            <div className="mt-3 p-2 bg-red-100 rounded">
                                <p className="text-sm text-red-700"><strong>Mortalidad:</strong> 50-80% a pesar del tratamiento óptimo</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conceptos clave */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Conceptos Fisiopatológicos Clave para EMT</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Cascada Isquémica:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                                <li>Alteración de la perfusión diastólica</li>
                                <li>Cambios metabólicos (anaerobiosis)</li>
                                <li>Disfunción diastólica</li>
                                <li>Alteraciones en la contractilidad</li>
                                <li>Cambios electrocardiográficos</li>
                                <li>Dolor torácico</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Tiempo es Músculo:</h4>
                            <div className="space-y-2 text-gray-700 text-sm">
                                <p><strong>0-20 min:</strong> Isquemia reversible</p>
                                <p><strong>20-40 min:</strong> Necrosis subendocárdica</p>
                                <p><strong>40-60 min:</strong> Necrosis transmural parcial</p>
                                <p><strong>&gt;60 min:</strong> Necrosis transmural completa</p>
                                <p className="text-green-700 font-medium mt-2">La reperfusión precoz salva miocardio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}