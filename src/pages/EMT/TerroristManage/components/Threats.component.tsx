export default function Threats(){
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Armas de
                    Destrucción Masiva (CBRNE)</h2>
                <p className="text-gray-700 leading-relaxed">
                    CBRNE son las siglas que representan los cinco tipos principales de armas de
                    destrucción masiva:
                    <strong> Químicas, Biológicas, Radiológicas, Nucleares y Explosivas</strong>.
                    Cada tipo presenta
                    desafíos únicos para el personal prehospitalario y requiere protocolos
                    específicos de respuesta.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Agentes
                    Químicos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos
                            principales</h3>
                        <div className="space-y-3">
                            <div className="bg-red-50 p-3 rounded">
                                <h4 className="font-medium text-red-700">Agentes Nerviosos</h4>
                                <p className="text-sm text-gray-700">Sarín, VX, Tabún - Inhiben la
                                    colinesterasa</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded">
                                <h4 className="font-medium text-orange-700">Agentes Vesicantes</h4>
                                <p className="text-sm text-gray-700">Gas mostaza - Causan quemaduras
                                    severas</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                                <h4 className="font-medium text-blue-700">Agentes Asfixiantes</h4>
                                <p className="text-sm text-gray-700">Cloro, Fosgeno - Afectan la
                                    respiración</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Signos y síntomas de
                            agentes nerviosos</h3>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <p className="font-medium text-yellow-700 mb-2">Nemotecnia: SLUDGEM</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li><strong>S</strong>alivación excesiva</li>
                                <li><strong>L</strong>agrimeo (lágrimas)</li>
                                <li><strong>U</strong>rinación involuntaria</li>
                                <li><strong>D</strong>efecación involuntaria</li>
                                <li><strong>G</strong>astrointestinal (vómito, diarrea)</li>
                                <li><strong>E</strong>mesis (vómito)</li>
                                <li><strong>M</strong>iosis (pupilas puntiformes)</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-2">También: Fasciculaciones
                                musculares, broncoespasmo, convulsiones</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Agentes
                    Biológicos</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-purple-700">Bacterias</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Ántrax (Bacillus anthracis)</li>
                            <li>Peste (Yersinia pestis)</li>
                            <li>Tularemia</li>
                            <li>Brucelosis</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-green-700">Virus</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Viruela</li>
                            <li>Fiebres hemorrágicas virales</li>
                            <li>Encefalitis viral</li>
                            <li>Influenza modificada</li>
                        </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-pink-700">Toxinas</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Ricina</li>
                            <li>Toxina botulínica</li>
                            <li>Enterotoxina B</li>
                            <li>Toxina T-2</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <h4 className="font-medium text-yellow-700 mb-2">Características
                        importantes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Período de incubación: Los síntomas pueden aparecer horas o días
                            después
                        </li>
                        <li>Transmisión: Pueden ser contagiosos de persona a persona</li>
                        <li>Detección: Difíciles de detectar inicialmente</li>
                        <li>Tratamiento: Requieren antibióticos específicos o antivirales</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Amenazas
                    Radiológicas y Nucleares</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos de eventos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Bomba sucia (RDD):</strong> Explosivo convencional con
                                material radiactivo
                            </li>
                            <li><strong>Dispositivo nuclear improvisado (IND):</strong> Arma nuclear
                                casera
                            </li>
                            <li><strong>Ataque a instalación nuclear:</strong> Sabotaje a planta
                                nuclear
                            </li>
                            <li><strong>Fuente radiológica dispersa:</strong> Contaminación
                                intencional
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Síndrome de radiación
                            aguda</h3>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                <li><strong>Fase prodrómica:</strong> Náusea, vómito, diarrea
                                    (minutos-horas)
                                </li>
                                <li><strong>Fase latente:</strong> Síntomas mejoran (días-semanas)
                                </li>
                                <li><strong>Fase manifiesta:</strong> Síntomas severos reaparecen
                                </li>
                                <li><strong>Recuperación o muerte:</strong> Depende de la dosis</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Explosivos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos de
                            explosivos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Dispositivos explosivos improvisados (IED):</strong> Bombas
                                caseras
                            </li>
                            <li><strong>Explosivos comerciales:</strong> Dinamita, TNT</li>
                            <li><strong>Explosivos militares:</strong> C4, Semtex</li>
                            <li><strong>Vehículos bomba:</strong> Coche bomba, camión bomba</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Patrones de
                            lesiones</h3>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li><strong>Primarias:</strong> Onda expansiva (pulmón, oído,
                                    intestino)
                                </li>
                                <li><strong>Secundarias:</strong> Fragmentos proyectados</li>
                                <li><strong>Terciarias:</strong> Víctima proyectada contra objetos
                                </li>
                                <li><strong>Cuaternarias:</strong> Quemaduras, inhalación,
                                    aplastamiento
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}