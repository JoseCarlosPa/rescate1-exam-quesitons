import React, {useState} from 'react';
import {FaCalculator, FaTimes} from 'react-icons/fa';
import useToolsModal from "./ToolsModal.hook.tsx";
import {Tool} from "./ToolsModal.types.ts";

interface ToolsModalProps {
    onClose: () => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({onClose}) => {
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
    const {
        shockCalc, setShockCalc, calculateShockIndex,
        bmiCalc, setBmiCalc, calculateBMI,
        mapCalc, setMapCalc, calculateMAP,
        glasgowCalc, setGlasgowCalc, calculateGlasgow,
        cincinnati, setCincinnati,
        dosageCalc, setDosageCalc,
        calculateCincinnati, parkland, setParkland, apgarScore, setApgarScore,
        calculateParkland, calculateApgar, rtsScore, setRtsScore, oxygenCalc, setOxygenCalc,
        broslowCalc, setBroslowCalc, calculateRTS, calculateOxygen, calculateBroselow, tools,
        nihssScore, setNihssScore, calculateNIHSS
    } = useToolsModal()

    const renderToolContent = () => {
        switch (selectedTool) {
            case 'shock-index':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de Índice de Shock</h3>
                        <p className="text-sm text-gray-600">
                            El índice de shock se calcula dividiendo la frecuencia cardíaca entre la presión arterial
                            sistólica.
                            se calcula dividiendo la frecuencia cardíaca entre la presión arterial sistólica. Un índice mayor a 0.9 puede indicar shock.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Frecuencia Cardíaca (lpm)
                                </label>
                                <input
                                    type="number"
                                    value={shockCalc.heartRate}
                                    onChange={(e) => setShockCalc({...shockCalc, heartRate: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="80"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Presión Sistólica (mmHg)
                                </label>
                                <input
                                    type="number"
                                    value={shockCalc.systolicBP}
                                    onChange={(e) => setShockCalc({...shockCalc, systolicBP: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="120"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateShockIndex}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular Índice
                        </button>

                        {shockCalc.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    Índice de Shock: {shockCalc.result}
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    {shockCalc.interpretation}
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 'bmi':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de IMC</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Peso (kg)
                                </label>
                                <input
                                    type="number"
                                    value={bmiCalc.weight}
                                    onChange={(e) => setBmiCalc({...bmiCalc, weight: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="70"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Altura (cm)
                                </label>
                                <input
                                    type="number"
                                    value={bmiCalc.height}
                                    onChange={(e) => setBmiCalc({...bmiCalc, height: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="170"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateBMI}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular IMC
                        </button>

                        {bmiCalc.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    IMC: {bmiCalc.result} kg/m²
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    {bmiCalc.interpretation}
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 'map-calculator':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de PAM</h3>
                        <p className="text-sm text-gray-600">
                            La Presión Arterial Media indica la perfusión de órganos vitales. Se calcula como:
                            PAM = (Presión Sistólica + 2 x Presión Diastólica) / 3
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Presión Sistólica (mmHg)
                                </label>
                                <input
                                    type="number"
                                    value={mapCalc.systolic}
                                    onChange={(e) => setMapCalc({...mapCalc, systolic: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="120"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Presión Diastólica (mmHg)
                                </label>
                                <input
                                    type="number"
                                    value={mapCalc.diastolic}
                                    onChange={(e) => setMapCalc({...mapCalc, diastolic: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="80"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateMAP}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular PAM
                        </button>

                        {mapCalc.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    PAM: {mapCalc.result} mmHg
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    {mapCalc.interpretation}
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 'drug-calculator':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de Dosis</h3>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-sm text-yellow-800">
                                <strong>Nota:</strong> Esta herramienta está en desarrollo.
                                Siempre verifique las dosis con protocolos locales y supervisión médica.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-700">Fórmulas Comunes:</h4>
                            <div className="bg-gray-50 p-3 rounded text-sm">
                                <p><strong>Epinefrina:</strong> 0.01 mg/kg IV/IO (máx 0.5mg)</p>
                                <p><strong>Atropina:</strong> 0.02 mg/kg IV/IO (mín 0.1mg, máx 0.5mg)</p>
                                <p><strong>Amiodarona:</strong> 5 mg/kg IV/IO</p>
                                <p><strong>Dextrosa:</strong> 0.5-1 g/kg IV</p>
                            </div>
                        </div>

                        {/* Nueva sección para cálculo de dosis */}
                        <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-gray-700 mb-3">Cálculo de Dosis Personalizado:</h4>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Peso del Paciente (kg)
                                    </label>
                                    <input
                                        type="number"
                                        value={dosageCalc.weight}
                                        onChange={(e) => setDosageCalc({...dosageCalc, weight: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="70"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Medicamento
                                    </label>
                                    <select
                                        value={dosageCalc.medication}
                                        onChange={(e) => setDosageCalc({...dosageCalc, medication: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    >
                                        <option value="">Selecciona un medicamento</option>
                                        <option value="epinefrina">Epinefrina</option>
                                        <option value="atropina">Atropina</option>
                                        <option value="amiodarona">Amiodarona</option>
                                        <option value="dextrosa">Dextrosa</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Dosis Recomendada (mg/kg)
                                    </label>
                                    <input
                                        type="number"
                                        value={dosageCalc.result !== null ? dosageCalc.result : ''}
                                        onChange={(e) => setDosageCalc({
                                            ...dosageCalc,
                                            result: parseFloat(e.target.value)
                                        })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="0.01"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Vía de Administración
                                    </label>
                                    <select
                                        value={dosageCalc.route}
                                        onChange={(e) => setDosageCalc({...dosageCalc, route: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="IV">IV - Intravenosa</option>
                                        <option value="IO">IO - Intraósea</option>
                                        <option value="IM">IM - Intramuscular</option>
                                        <option value="SC">SC - Subcutánea</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={() => {
                                        // Lógica para calcular la dosis basada en el medicamento y peso
                                        const weightInKg = dosageCalc.weight ? parseFloat(dosageCalc.weight) : 0;
                                        let calculatedDose = 0;

                                        // Ejemplo de cálculo simple (esto debe ser reemplazado con lógica real)
                                        if (dosageCalc.medication.toLowerCase() === 'epinefrina') {
                                            calculatedDose = weightInKg * 0.01;
                                        } else if (dosageCalc.medication.toLowerCase() === 'atropina') {
                                            calculatedDose = weightInKg * 0.02;
                                        } else if (dosageCalc.medication.toLowerCase() === 'amiodarona') {
                                            calculatedDose = weightInKg * 5;
                                        } else if (dosageCalc.medication.toLowerCase() === 'dextrosa') {
                                            calculatedDose = weightInKg * 0.5;
                                        }

                                        setDosageCalc({
                                            ...dosageCalc,
                                            result: calculatedDose,
                                            unit: 'mg',
                                            instructions: `Administrar ${calculatedDose} mg de ${dosageCalc.medication} ${dosageCalc.route === 'IV' ? 'por vía intravenosa' : dosageCalc.route === 'IO' ? 'por vía intraósea' : dosageCalc.route === 'IM' ? 'por vía intramuscular' : 'por vía subcutánea'}.`
                                        });
                                    }}
                                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                    Calcular Dosis
                                </button>
                            </div>

                            {dosageCalc.result !== null && (
                                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200 text-sm">
                                    <p className="text-orange-800 font-semibold">
                                        Dosis Recomendada: {dosageCalc.result} mg
                                    </p>
                                    <p className="text-orange-700">
                                        {dosageCalc.instructions}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                );

            case 'glasgow-scale':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Escala de Glasgow</h3>
                        <p className="text-sm text-gray-600">
                            La Escala de Glasgow evalúa el nivel de conciencia y respuesta neurológica.
                        </p>

                        <div className="grid grid-cols-3  gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Apertura Ocular (1-4)
                                </label>
                                <select
                                    value={glasgowCalc.eyeOpening}
                                    onChange={(e) => setGlasgowCalc({...glasgowCalc, eyeOpening: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="4">4 - Espontánea</option>
                                    <option value="3">3 - Al hablar</option>
                                    <option value="2">2 - Al dolor</option>
                                    <option value="1">1 - No abre</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Respuesta Verbal (1-5)
                                </label>
                                <select
                                    value={glasgowCalc.verbalResponse}
                                    onChange={(e) => setGlasgowCalc({...glasgowCalc, verbalResponse: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="5">5 - Orientado</option>
                                    <option value="4">4 - Confuso</option>
                                    <option value="3">3 - Palabras</option>
                                    <option value="2">2 - Sonidos</option>
                                    <option value="1">1 - No responde</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Respuesta Motora (1-6)
                                </label>
                                <select
                                    value={glasgowCalc.motorResponse}
                                    onChange={(e) => setGlasgowCalc({...glasgowCalc, motorResponse: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="6">6 - Obedece órdenes</option>
                                    <option value="5">5 - Localiza dolor</option>
                                    <option value="4">4 - Retira al dolor</option>
                                    <option value="3">3 - Flexión anormal</option>
                                    <option value="2">2 - Extensión</option>
                                    <option value="1">1 - No responde</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={calculateGlasgow}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular Glasgow
                        </button>

                        {glasgowCalc.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    Puntaje Total: {glasgowCalc.result}/15
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    <strong>Interpretación:</strong> {glasgowCalc.interpretation}
                                </p>
                                <div className="mt-3 text-xs text-orange-600">
                                    <p><strong>Rangos:</strong></p>
                                    <p>• 13-15: Traumatismo leve</p>
                                    <p>• 9-12: Traumatismo moderado</p>
                                    <p>• 3-8: Traumatismo severo (coma)</p>
                                </div>

                                {/* Alertas y recomendaciones clínicas */}
                                {glasgowCalc.result <= 8 && (
                                    <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                                        <p className="text-red-800 font-bold text-sm">🚨 ALERTA CRÍTICA - Glasgow ≤ 8</p>
                                        <div className="text-red-700 text-xs mt-2 space-y-1">
                                            <p><strong>INTUBACIÓN INMEDIATA:</strong> El paciente no puede proteger su
                                                vía aérea</p>
                                            <p><strong>• Preparar intubación endotraqueal</strong></p>
                                            <p><strong>• Considerar secuencia rápida de intubación (RSI)</strong></p>
                                            <p><strong>• Monitoreo continuo de signos vitales</strong></p>
                                            <p><strong>• Traslado código rojo a centro trauma</strong></p>
                                            <p><strong>• Notificar al hospital receptor</strong></p>
                                        </div>
                                    </div>
                                )}

                                {glasgowCalc.result >= 9 && glasgowCalc.result <= 12 && (
                                    <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                                        <p className="text-yellow-800 font-bold text-sm">⚠️ PRECAUCIÓN - Glasgow
                                            9-12</p>
                                        <div className="text-yellow-700 text-xs mt-2 space-y-1">
                                            <p><strong>MONITOREO ESTRECHO:</strong></p>
                                            <p><strong>• Evaluar vía aérea constantemente</strong></p>
                                            <p><strong>• Preparar equipo de intubación (por si deteriora)</strong></p>
                                            <p><strong>• Oxígeno suplementario</strong></p>
                                            <p><strong>• Re-evaluar Glasgow cada 5-10 minutos</strong></p>
                                            <p><strong>• Si disminuye a ≤8: intubar inmediatamente</strong></p>
                                        </div>
                                    </div>
                                )}

                                {glasgowCalc.result >= 13 && (
                                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                                        <p className="text-green-800 font-bold text-sm">✅ ESTABLE - Glasgow 13-15</p>
                                        <div className="text-green-700 text-xs mt-2 space-y-1">
                                            <p><strong>MANEJO ESTÁNDAR:</strong></p>
                                            <p><strong>• Continuar monitoreo neurológico</strong></p>
                                            <p><strong>• Re-evaluar Glasgow cada 15 minutos</strong></p>
                                            <p><strong>• Oxígeno según necesidad</strong></p>
                                            <p><strong>• Vigilar por deterioro neurológico</strong></p>
                                        </div>
                                    </div>
                                )}

                                {/* Consideraciones especiales */}
                                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-blue-800 font-bold text-xs">💡 CONSIDERACIONES ESPECIALES:</p>
                                    <div className="text-blue-700 text-xs mt-1 space-y-1">
                                        <p><strong>• Intoxicación/Drogas:</strong> Glasgow puede estar alterado sin TEC
                                        </p>
                                        <p><strong>• Hipoglucemia:</strong> Verificar glucosa capilar</p>
                                        <p><strong>• Hipoxia:</strong> Corregir antes de evaluar Glasgow</p>
                                        <p><strong>• Sedación:</strong> Considerar efectos de medicamentos</p>
                                        <p><strong>• Paciente intubado:</strong> No evaluar respuesta verbal</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Guía de referencia */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-700 mb-2">Guía de Referencia Rápida:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                <div>
                                    <p className="font-medium text-orange-600">Apertura Ocular:</p>
                                    <p>4 - Espontánea</p>
                                    <p>3 - Al comando verbal</p>
                                    <p>2 - Al estímulo doloroso</p>
                                    <p>1 - Sin respuesta</p>
                                </div>
                                <div>
                                    <p className="font-medium text-orange-600">Respuesta Verbal:</p>
                                    <p>5 - Orientado y conversa</p>
                                    <p>4 - Desorientado/confuso</p>
                                    <p>3 - Palabras inapropiadas</p>
                                    <p>2 - Sonidos incomprensibles</p>
                                    <p>1 - Sin respuesta</p>
                                </div>
                                <div>
                                    <p className="font-medium text-orange-600">Respuesta Motora:</p>
                                    <p>6 - Obedece comandos</p>
                                    <p>5 - Localiza dolor</p>
                                    <p>4 - Flexión normal</p>
                                    <p>3 - Flexión anormal</p>
                                    <p>2 - Extensión anormal</p>
                                    <p>1 - Sin respuesta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'cincinnati-scale':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Escala de Cincinnati</h3>
                        <p className="text-sm text-gray-600 mb-2">Evalúa signos de ACV prehospitalario.</p>
                        <div className="space-y-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Parálisis facial
                                    <span className="block text-xs text-gray-500">(Pida al paciente sonreír o mostrar los dientes)</span>
                                </label>
                                <select value={cincinnati.facial}
                                        onChange={e => setCincinnati({...cincinnati, facial: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg">
                                    <option value="">Seleccionar</option>
                                    <option value="yes">Presente</option>
                                    <option value="no">Ausente</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Debilidad de brazo
                                    <span className="block text-xs text-gray-500">(Pida al paciente levantar ambos brazos por 10 segundos)</span>
                                </label>
                                <select value={cincinnati.arm}
                                        onChange={e => setCincinnati({...cincinnati, arm: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg">
                                    <option value="">Seleccionar</option>
                                    <option value="yes">Presente</option>
                                    <option value="no">Ausente</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Alteración del habla
                                    <span className="block text-xs text-gray-500">(Pida repetir: "El cielo es azul en Cincinnati")</span>
                                </label>
                                <select value={cincinnati.speech}
                                        onChange={e => setCincinnati({...cincinnati, speech: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg">
                                    <option value="">Seleccionar</option>
                                    <option value="yes">Presente</option>
                                    <option value="no">Ausente</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={calculateCincinnati}
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                            Evaluar
                        </button>
                        {cincinnati.result && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-2">
                                <p className="text-orange-800 font-semibold">{cincinnati.result}</p>
                                {cincinnati.result.includes('posible ACV') && (
                                    <div className="mt-2 text-xs text-yellow-700">
                                        <p><strong>¿Qué hacer?</strong></p>
                                        <ul className="list-disc ml-5">
                                            <li>Repetir la evaluación y buscar otros signos neurológicos.</li>
                                            <li>Consultar con un médico o activar protocolo de ACV si hay duda.</li>
                                            <li>Monitorear signos vitales y nivel de conciencia.</li>
                                            <li>Valorar glucosa capilar (descartar hipoglucemia).</li>
                                        </ul>
                                    </div>
                                )}
                                {cincinnati.result.includes('alta sospecha') && (
                                    <div className="mt-2 text-xs text-orange-700">
                                        <p><strong>Recomendaciones:</strong></p>
                                        <ul className="list-disc ml-5">
                                            <li>Activar código ictus y trasladar de inmediato a centro especializado.
                                            </li>
                                            <li>Notificar al hospital receptor.</li>
                                            <li>Oxígeno suplementario si está indicado.</li>
                                            <li>No administrar alimentos, líquidos ni medicamentos por vía oral.</li>
                                            <li>Monitorear y documentar evolución.</li>
                                        </ul>
                                    </div>
                                )}
                                {cincinnati.result.includes('muy probable') && (
                                    <div className="mt-2 text-xs text-red-700">
                                        <p><strong>¡Emergencia!</strong> Traslado urgente a centro con unidad de ACV.
                                        </p>
                                        <ul className="list-disc ml-5">
                                            <li>Activar código ictus.</li>
                                            <li>Notificar y preparar traslado inmediato.</li>
                                            <li>Monitorear vía aérea, ventilación y circulación.</li>
                                            <li>Oxígeno si está indicado.</li>
                                            <li>Evitar retrasos en la atención.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            case 'parkland-rule':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Regla de Parkland</h3>
                        <p className="text-sm text-gray-600 mb-2">Calcula la reposición de líquidos en quemaduras
                            graves.
                            se calcula como: 4 mL x kg de peso x %SCQ (Superficie Corporal Quemada)
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                                <input type="number" value={parkland.weight}
                                       onChange={e => setParkland({...parkland, weight: e.target.value})}
                                       className="w-full p-2 border border-gray-300 rounded-lg" placeholder="70"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">% SCQ (Superficie
                                    Corporal Quemada)</label>
                                <input type="number" value={parkland.tbsa}
                                       onChange={e => setParkland({...parkland, tbsa: e.target.value})}
                                       className="w-full p-2 border border-gray-300 rounded-lg" placeholder="30"/>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-xs mt-2">
                            <p className="font-semibold text-orange-700 mb-1">Guía rápida para estimar %SCQ (Regla de
                                los 9):</p>
                            <ul className="list-disc ml-5">
                                <li>Cabeza y cuello: 9%</li>
                                <li>Tronco anterior: 18%</li>
                                <li>Tronco posterior: 18%</li>
                                <li>Cada brazo: 9%</li>
                                <li>Cada pierna: 18%</li>
                                <li>Área genital: 1%</li>
                            </ul>
                            <p className="mt-2">En niños, la cabeza representa más porcentaje y las piernas menos. Usa
                                tablas específicas si es posible.</p>
                        </div>
                        <button onClick={calculateParkland}
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 mt-2">
                            Calcular
                        </button>
                        {parkland.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-2">
                                <p className="text-orange-800 font-semibold">Total: {parkland.result} mL</p>
                                <p className="text-orange-700">{parkland.instructions}</p>
                            </div>
                        )}
                    </div>
                );

            case 'apgar-score':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Puntaje APGAR</h3>
                        <p className="text-sm text-gray-600">
                            Evaluación del recién nacido al minuto 1 y 5 después del nacimiento.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Apariencia (Color de piel) (0-2)
                                </label>
                                <select
                                    value={apgarScore.appearance}
                                    onChange={(e) => setApgarScore({...apgarScore, appearance: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="2">2 - Rosado en todo el cuerpo</option>
                                    <option value="1">1 - Cuerpo rosado, extremidades azules</option>
                                    <option value="0">0 - Azul o pálido en todo el cuerpo</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pulso (Frecuencia cardíaca) (0-2)
                                </label>
                                <select
                                    value={apgarScore.pulse}
                                    onChange={(e) => setApgarScore({...apgarScore, pulse: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="2">2 - Mayor a 100 lpm</option>
                                    <option value="1">1 - Menor a 100 lpm</option>
                                    <option value="0">0 - Ausente</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Gesticulación (Irritabilidad refleja) (0-2)
                                </label>
                                <select
                                    value={apgarScore.grimace}
                                    onChange={(e) => setApgarScore({...apgarScore, grimace: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="2">2 - Llora vigorosamente, tose o estornuda</option>
                                    <option value="1">1 - Mueca facial, movimiento leve</option>
                                    <option value="0">0 - Sin respuesta</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Actividad (Tono muscular) (0-2)
                                </label>
                                <select
                                    value={apgarScore.activity}
                                    onChange={(e) => setApgarScore({...apgarScore, activity: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="2">2 - Movimientos activos</option>
                                    <option value="1">1 - Cierta flexión de extremidades</option>
                                    <option value="0">0 - Flácido</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Respiración (Esfuerzo respiratorio) (0-2)
                                </label>
                                <select
                                    value={apgarScore.respiration}
                                    onChange={(e) => setApgarScore({...apgarScore, respiration: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="2">2 - Respiración regular, llanto fuerte</option>
                                    <option value="1">1 - Respiración lenta o irregular</option>
                                    <option value="0">0 - Ausente</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={calculateApgar}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular APGAR
                        </button>

                        {apgarScore.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    Puntaje APGAR: {apgarScore.result}/10
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    {apgarScore.interpretation}
                                </p>

                                {apgarScore.result >= 7 && (
                                    <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded-lg">
                                        <p className="text-green-800 font-bold text-sm">✅ NORMAL</p>
                                        <p className="text-green-700 text-xs mt-1">
                                            El bebé está en buenas condiciones. Continuar cuidados rutinarios.
                                        </p>
                                    </div>
                                )}

                                {apgarScore.result >= 4 && apgarScore.result < 7 && (
                                    <div className="mt-3 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                                        <p className="text-yellow-800 font-bold text-sm">⚠️ DEPRESIÓN MODERADA</p>
                                        <div className="text-yellow-700 text-xs mt-1 space-y-1">
                                            <p><strong>Acciones inmediatas:</strong></p>
                                            <p>• Estimulación táctil suave</p>
                                            <p>• Oxígeno suplementario</p>
                                            <p>• Aspiración de secreciones si es necesario</p>
                                            <p>• Re-evaluar en 1 minuto</p>
                                        </div>
                                    </div>
                                )}

                                {apgarScore.result < 4 && (
                                    <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded-lg">
                                        <p className="text-red-800 font-bold text-sm">🚨 DEPRESIÓN SEVERA</p>
                                        <div className="text-red-700 text-xs mt-1 space-y-1">
                                            <p><strong>REANIMACIÓN INMEDIATA:</strong></p>
                                            <p>• Aspirar vía aérea</p>
                                            <p>• Ventilación con presión positiva</p>
                                            <p>• Compresiones torácicas si FC menor 60</p>
                                            <p>• Considerar intubación</p>
                                            <p>• Activar equipo de reanimación neonatal</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );

            case 'rts-score':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Revised Trauma Score (RTS)</h3>
                        <p className="text-sm text-gray-600">
                            Predictor de supervivencia en pacientes traumatizados.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Escala de Glasgow
                                </label>
                                <input
                                    type="number"
                                    min="3"
                                    max="15"
                                    value={rtsScore.glasgow}
                                    onChange={(e) => setRtsScore({...rtsScore, glasgow: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="15"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    PAS (mmHg)
                                </label>
                                <input
                                    type="number"
                                    value={rtsScore.systolicBP}
                                    onChange={(e) => setRtsScore({...rtsScore, systolicBP: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="120"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    FR (rpm)
                                </label>
                                <input
                                    type="number"
                                    value={rtsScore.respiratoryRate}
                                    onChange={(e) => setRtsScore({...rtsScore, respiratoryRate: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="16"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateRTS}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular RTS
                        </button>

                        {rtsScore.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    RTS: {rtsScore.result}
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    <strong>Pronóstico:</strong> {rtsScore.interpretation}
                                </p>
                                <p className="text-sm text-orange-700">
                                    <strong>Probabilidad de supervivencia:</strong> {rtsScore.survivalProbability}
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 'oxygen-calculator':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de Oxigenoterapia</h3>
                        <p className="text-sm text-gray-600">
                            Estima la FiO2 según el dispositivo y flujo de oxígeno.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Dispositivo
                                </label>
                                <select
                                    value={oxygenCalc.device}
                                    onChange={(e) => setOxygenCalc({...oxygenCalc, device: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="cannula">Cánula nasal</option>
                                    <option value="simple-mask">Mascarilla simple</option>
                                    <option value="reservoir-mask">Mascarilla con reservorio</option>
                                    <option value="venturi">Mascarilla Venturi</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Flujo (L/min) o FiO2 (%)
                                </label>
                                <input
                                    type="number"
                                    value={oxygenCalc.flowRate}
                                    onChange={(e) => setOxygenCalc({...oxygenCalc, flowRate: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="4"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateOxygen}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular FiO2
                        </button>

                        {oxygenCalc.fio2 !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    FiO2 estimada: {oxygenCalc.fio2}%
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    {oxygenCalc.instructions}
                                </p>
                            </div>
                        )}

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-700 mb-2">Guía de Referencia:</h4>
                            <div className="text-xs space-y-1">
                                <p><strong>Cánula nasal:</strong> 1-6 L/min = 25-45% FiO2</p>
                                <p><strong>Mascarilla simple:</strong> 5-10 L/min = 40-65% FiO2</p>
                                <p><strong>Mascarilla con reservorio:</strong> 10-15 L/min = 80-95% FiO2</p>
                                <p><strong>Mascarilla Venturi:</strong> 24%, 28%, 35%, 40%, 50% FiO2</p>
                            </div>
                        </div>
                    </div>
                );

            case 'broselow-tape':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Cinta de Broselow</h3>
                        <p className="text-sm text-gray-600">
                            Estimación de peso y dosis pediátricas basada en la longitud del niño.
                        </p>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Longitud del niño (cm)
                            </label>
                            <input
                                type="number"
                                value={broslowCalc.length}
                                onChange={(e) => setBroslowCalc({...broslowCalc, length: e.target.value})}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                placeholder="75"
                            />
                        </div>

                        <button
                            onClick={calculateBroselow}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular Parámetros
                        </button>

                        {broslowCalc.weight !== null && (
                            <div className="space-y-4">
                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                    <p className="text-lg font-bold text-orange-800">
                                        Peso estimado: {broslowCalc.weight} kg
                                    </p>
                                    <p className="text-sm text-orange-700">
                                        Zona de color: <span className="font-bold">{broslowCalc.color}</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <h4 className="font-bold text-blue-800 mb-2">Medicamentos de Emergencia</h4>
                                        <div className="text-sm text-blue-700 space-y-1">
                                            {Object.entries(broslowCalc.medications).map(([med, dose]) => (
                                                <p key={med}>
                                                    <strong>{med.charAt(0).toUpperCase() + med.slice(1)}:</strong> {String(dose)}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-800 mb-2">Equipamiento</h4>
                                        <div className="text-sm text-green-700 space-y-1">
                                            {Object.entries(broslowCalc.equipment).map(([equip, size]) => (
                                                <p key={equip}>
                                                    <strong>{equip === 'tuboET' ? 'Tubo ET' : equip === 'aspiracion' ? 'Sonda aspiración' : 'Catéter IV'}:</strong> {String(size)}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-2">Códigos de Color Broselow:</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><strong>Gris:</strong> 46-53 cm (3 kg)</div>
                                <div><strong>Rosa:</strong> 53-61 cm (5 kg)</div>
                                <div><strong>Rojo:</strong> 61-69 cm (7 kg)</div>
                                <div><strong>Morado:</strong> 69-79 cm (10 kg)</div>
                                <div><strong>Amarillo:</strong> 79-89 cm (14 kg)</div>
                                <div><strong>Blanco:</strong> 89-102 cm (18 kg)</div>
                                <div><strong>Azul:</strong> 102-115 cm (23 kg)</div>
                                <div><strong>Verde:</strong> mayor 115 cm (30 kg)</div>
                            </div>
                        </div>
                    </div>
                );

            case 'nihss-scale':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Escala de NIHSS</h3>
                        <p className="text-sm text-gray-600">
                            Evaluación neurológica estandarizada de 15 ítems para cuantificar la gravedad de un ACV.
                        </p>

                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {/* 1. Nivel de conciencia */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    1a. Nivel de conciencia (0-3)
                                </label>
                                <select
                                    value={nihssScore.consciousness}
                                    onChange={(e) => setNihssScore({...nihssScore, consciousness: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Alerta, responde normalmente</option>
                                    <option value="1">1 - No alerta, pero despierta con estímulo mínimo</option>
                                    <option value="2">2 - No alerta, requiere estímulo repetido para mantener atención
                                    </option>
                                    <option value="3">3 - Responde solo con estimulación refleja o no responde</option>
                                </select>
                            </div>

                            {/* 2. Preguntas de orientación */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    1b. Preguntas de orientación (0-2)
                                    <span className="block text-xs text-gray-500">Edad y mes actual</span>
                                </label>
                                <select
                                    value={nihssScore.questions}
                                    onChange={(e) => setNihssScore({...nihssScore, questions: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Responde ambas preguntas correctamente</option>
                                    <option value="1">1 - Responde una pregunta correctamente</option>
                                    <option value="2">2 - Responde incorrectamente ambas preguntas</option>
                                </select>
                            </div>

                            {/* 3. Comandos */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    1c. Comandos (0-2)
                                    <span
                                        className="block text-xs text-gray-500">Cerrar/abrir ojos, cerrar/abrir mano</span>
                                </label>
                                <select
                                    value={nihssScore.commands}
                                    onChange={(e) => setNihssScore({...nihssScore, commands: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Realiza ambas tareas correctamente</option>
                                    <option value="1">1 - Realiza una tarea correctamente</option>
                                    <option value="2">2 - Realiza incorrectamente ambas tareas</option>
                                </select>
                            </div>

                            {/* 4. Mejor mirada conjugada */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    2. Mejor mirada conjugada (0-2)
                                </label>
                                <select
                                    value={nihssScore.eyeMovement}
                                    onChange={(e) => setNihssScore({...nihssScore, eyeMovement: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Normal</option>
                                    <option value="1">1 - Parálisis parcial de la mirada</option>
                                    <option value="2">2 - Desviación forzada de la mirada</option>
                                </select>
                            </div>

                            {/* 5. Campos visuales */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    3. Campos visuales (0-3)
                                </label>
                                <select
                                    value={nihssScore.visualField}
                                    onChange={(e) => setNihssScore({...nihssScore, visualField: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin pérdida del campo visual</option>
                                    <option value="1">1 - Hemianopsia parcial</option>
                                    <option value="2">2 - Hemianopsia completa</option>
                                    <option value="3">3 - Hemianopsia bilateral</option>
                                </select>
                            </div>

                            {/* 6. Parálisis facial */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    4. Parálisis facial (0-3)
                                </label>
                                <select
                                    value={nihssScore.facialPalsy}
                                    onChange={(e) => setNihssScore({...nihssScore, facialPalsy: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Movimientos normales y simétricos</option>
                                    <option value="1">1 - Parálisis menor (asimetría leve)</option>
                                    <option value="2">2 - Parálisis parcial (parálisis facial central)</option>
                                    <option value="3">3 - Parálisis completa</option>
                                </select>
                            </div>

                            {/* 7. Motor brazo izquierdo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    5a. Motor brazo izquierdo (0-4)
                                </label>
                                <select
                                    value={nihssScore.leftArmMotor}
                                    onChange={(e) => setNihssScore({...nihssScore, leftArmMotor: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin caída; mantiene brazo 90° por 10 segundos</option>
                                    <option value="1">1 - Caída; no mantiene posición, pero hay esfuerzo contra
                                        gravedad
                                    </option>
                                    <option value="2">2 - Algún esfuerzo contra gravedad, pero no puede elevar brazo
                                    </option>
                                    <option value="3">3 - Sin esfuerzo contra gravedad; brazo cae</option>
                                    <option value="4">4 - Sin movimiento</option>
                                </select>
                            </div>

                            {/* 8. Motor brazo derecho */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    5b. Motor brazo derecho (0-4)
                                </label>
                                <select
                                    value={nihssScore.rightArmMotor}
                                    onChange={(e) => setNihssScore({...nihssScore, rightArmMotor: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin caída; mantiene brazo 90° por 10 segundos</option>
                                    <option value="1">1 - Caída; no mantiene posición, pero hay esfuerzo contra
                                        gravedad
                                    </option>
                                    <option value="2">2 - Algún esfuerzo contra gravedad, pero no puede elevar brazo
                                    </option>
                                    <option value="3">3 - Sin esfuerzo contra gravedad; brazo cae</option>
                                    <option value="4">4 - Sin movimiento</option>
                                </select>
                            </div>

                            {/* 9. Motor pierna izquierda */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    6a. Motor pierna izquierda (0-4)
                                </label>
                                <select
                                    value={nihssScore.leftLegMotor}
                                    onChange={(e) => setNihssScore({...nihssScore, leftLegMotor: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin caída; mantiene pierna 30° por 5 segundos</option>
                                    <option value="1">1 - Caída; no mantiene posición, pero hay esfuerzo contra
                                        gravedad
                                    </option>
                                    <option value="2">2 - Algún esfuerzo contra gravedad, pero no puede elevar pierna
                                    </option>
                                    <option value="3">3 - Sin esfuerzo contra gravedad; pierna cae inmediatamente
                                    </option>
                                    <option value="4">4 - Sin movimiento</option>
                                </select>
                            </div>

                            {/* 10. Motor pierna derecha */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    6b. Motor pierna derecha (0-4)
                                </label>
                                <select
                                    value={nihssScore.rightLegMotor}
                                    onChange={(e) => setNihssScore({...nihssScore, rightLegMotor: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin caída; mantiene pierna 30° por 5 segundos</option>
                                    <option value="1">1 - Caída; no mantiene posición, pero hay esfuerzo contra
                                        gravedad
                                    </option>
                                    <option value="2">2 - Algún esfuerzo contra gravedad, pero no puede elevar pierna
                                    </option>
                                    <option value="3">3 - Sin esfuerzo contra gravedad; pierna cae inmediatamente
                                    </option>
                                    <option value="4">4 - Sin movimiento</option>
                                </select>
                            </div>

                            {/* 11. Ataxia de extremidades */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    7. Ataxia de extremidades (0-2)
                                </label>
                                <select
                                    value={nihssScore.limbAtaxia}
                                    onChange={(e) => setNihssScore({...nihssScore, limbAtaxia: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Ausente</option>
                                    <option value="1">1 - Presente en una extremidad</option>
                                    <option value="2">2 - Presente en dos extremidades</option>
                                </select>
                            </div>

                            {/* 12. Sensibilidad */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    8. Sensibilidad (0-2)
                                </label>
                                <select
                                    value={nihssScore.sensation}
                                    onChange={(e) => setNihssScore({...nihssScore, sensation: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Normal; sin pérdida sensorial</option>
                                    <option value="1">1 - Pérdida sensorial leve a moderada</option>
                                    <option value="2">2 - Pérdida sensorial severa o total</option>
                                </select>
                            </div>

                            {/* 13. Mejor lenguaje */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    9. Mejor lenguaje (0-3)
                                </label>
                                <select
                                    value={nihssScore.language}
                                    onChange={(e) => setNihssScore({...nihssScore, language: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin afasia; normal</option>
                                    <option value="1">1 - Afasia leve a moderada</option>
                                    <option value="2">2 - Afasia severa</option>
                                    <option value="3">3 - Mudo, afasia global; sin lenguaje utilizable</option>
                                </select>
                            </div>

                            {/* 14. Disartria */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    10. Disartria (0-2)
                                </label>
                                <select
                                    value={nihssScore.dysarthria}
                                    onChange={(e) => setNihssScore({...nihssScore, dysarthria: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Normal</option>
                                    <option value="1">1 - Leve a moderada; paciente arrastra algunas palabras</option>
                                    <option value="2">2 - Severa; lenguaje del paciente es muy difícil de entender
                                    </option>
                                </select>
                            </div>

                            {/* 15. Extinción e inatención */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    11. Extinción e inatención (0-2)
                                </label>
                                <select
                                    value={nihssScore.neglect}
                                    onChange={(e) => setNihssScore({...nihssScore, neglect: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="0">0 - Sin evidencia anormal</option>
                                    <option value="1">1 - Inatención visual, táctil, auditiva o personal en una
                                        modalidad
                                    </option>
                                    <option value="2">2 - Hemi-inatención severa en más de una modalidad</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={calculateNIHSS}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Calcular Puntaje NIHSS
                        </button>

                        {nihssScore.result !== null && (
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <p className="text-lg font-bold text-orange-800">
                                    Puntaje NIHSS: {nihssScore.result}/42
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    <strong>Interpretación:</strong> {nihssScore.interpretation}
                                </p>

                                {/* Alertas y recomendaciones clínicas basadas en el puntaje */}
                                {nihssScore.result === 0 && (
                                    <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded-lg">
                                        <p className="text-green-800 font-bold text-sm">✅ SIN DÉFICIT NEUROLÓGICO</p>
                                        <div className="text-green-700 text-xs mt-1 space-y-1">
                                            <p><strong>• Continuar monitoreo neurológico</strong></p>
                                            <p><strong>• Considerar otras causas si hay síntomas</strong></p>
                                            <p><strong>• Re-evaluar periódicamente</strong></p>
                                        </div>
                                    </div>
                                )}

                                {nihssScore.result >= 1 && nihssScore.result <= 4 && (
                                    <div className="mt-3 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                                        <p className="text-yellow-800 font-bold text-sm">⚠️ ACV MENOR</p>
                                        <div className="text-yellow-700 text-xs mt-1 space-y-1">
                                            <p><strong>• Activar protocolo de ACV</strong></p>
                                            <p><strong>• Evaluación urgente por neurólogo</strong></p>
                                            <p><strong>• Considerar trombolisis si está en ventana terapéutica</strong>
                                            </p>
                                            <p><strong>• TC craneal urgente</strong></p>
                                        </div>
                                    </div>
                                )}

                                {nihssScore.result >= 5 && nihssScore.result <= 15 && (
                                    <div className="mt-3 p-3 bg-orange-100 border border-orange-300 rounded-lg">
                                        <p className="text-orange-800 font-bold text-sm">🚨 ACV MODERADO</p>
                                        <div className="text-orange-700 text-xs mt-1 space-y-1">
                                            <p><strong>• CÓDIGO ICTUS - Activación inmediata</strong></p>
                                            <p><strong>• TC craneal STAT</strong></p>
                                            <p><strong>• Evaluación para trombolisis/trombectomía</strong></p>
                                            <p><strong>• Monitoreo neurológico continuo</strong></p>
                                            <p><strong>• Traslado a unidad de ictus</strong></p>
                                        </div>
                                    </div>
                                )}

                                {nihssScore.result >= 16 && nihssScore.result <= 20 && (
                                    <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded-lg">
                                        <p className="text-red-800 font-bold text-sm">🚨 ACV MODERADO-SEVERO</p>
                                        <div className="text-red-700 text-xs mt-1 space-y-1">
                                            <p><strong>• CÓDIGO ICTUS CRÍTICO</strong></p>
                                            <p><strong>• Evaluación inmediata para trombectomía</strong></p>
                                            <p><strong>• Protección de vía aérea</strong></p>
                                            <p><strong>• Monitoreo en UCI neurológica</strong></p>
                                            <p><strong>• Control de PIC si es necesario</strong></p>
                                        </div>
                                    </div>
                                )}

                                {nihssScore.result >= 21 && (
                                    <div className="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg">
                                        <p className="text-red-800 font-bold text-sm">🆘 ACV SEVERO - CRÍTICO</p>
                                        <div className="text-red-700 text-xs mt-1 space-y-1">
                                            <p><strong>• EMERGENCIA NEUROLÓGICA MÁXIMA</strong></p>
                                            <p><strong>• Intubación y ventilación mecánica probable</strong></p>
                                            <p><strong>• Trombectomía urgente si es candidato</strong></p>
                                            <p><strong>• UCI neurológica inmediatamente</strong></p>
                                            <p><strong>• Monitoreo de PIC</strong></p>
                                            <p><strong>• Considerar craniectomía descompresiva</strong></p>
                                        </div>
                                    </div>
                                )}

                                {/* Consideraciones especiales */}
                                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-blue-800 font-bold text-xs">💡 CONSIDERACIONES IMPORTANTES:</p>
                                    <div className="text-blue-700 text-xs mt-1 space-y-1">
                                        <p><strong>• Ventana terapéutica:</strong> tPA &lt;4.5h, trombectomía &lt;6-24h
                                        </p>
                                        <p><strong>• Contraindicaciones:</strong> verificar antes de trombolisis</p>
                                        <p><strong>• Monitoreo:</strong> re-evaluar NIHSS cada 1-2 horas</p>
                                        <p><strong>• Deterioro:</strong> aumento ≥4 puntos = preocupante</p>
                                        <p><strong>• Mejoría:</strong> disminución ≥8 puntos = significativa</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Guía de referencia */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-700 mb-2">Rangos de Interpretación NIHSS:</h4>
                            <div className="text-xs space-y-1">
                                <p><strong>0:</strong> Sin déficit neurológico</p>
                                <p><strong>1-4:</strong> ACV menor (déficit leve)</p>
                                <p><strong>5-15:</strong> ACV moderado</p>
                                <p><strong>16-20:</strong> ACV moderado-severo</p>
                                <p><strong>21-42:</strong> ACV severo</p>
                                <p className="mt-2 font-semibold text-orange-600">
                                    La escala NIHSS debe ser administrada por personal entrenado para obtener resultados
                                    precisos.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">🛠️ Herramientas</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-orange-600 rounded-full transition-colors"
                    >
                        <FaTimes className="w-5 h-5"/>
                    </button>
                </div>

                <div className="flex md:flex-row flex-col h-[calc(90vh-80px)]">
                    {/* Lista de herramientas */}
                    <div
                        className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto max-h-52 md:max-h-full">
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-700 mb-3">Selecciona una herramienta:</h3>
                            <div className="space-y-2">
                                {tools.map((tool) => (
                                    <button
                                        key={tool.id}
                                        onClick={() => setSelectedTool(tool.id)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                                            selectedTool === tool.id
                                                ? 'bg-orange-100 border-2 border-orange-300 text-orange-700'
                                                : 'bg-white hover:bg-gray-100 border border-gray-200'
                                        }`}
                                    >
                                        <div className="text-orange-500">{tool.icon}</div>
                                        <div>
                                            <div className="font-medium">{tool.name}</div>
                                            <div className="text-xs text-gray-500">{tool.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contenido de la herramienta */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        {selectedTool ? (
                            renderToolContent()
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <FaCalculator className="w-16 h-16 mb-4 text-gray-300"/>
                                <p className="text-lg">Selecciona una herramienta para comenzar</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsModal;
