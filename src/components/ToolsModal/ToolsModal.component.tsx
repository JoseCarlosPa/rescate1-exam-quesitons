import React, { useState } from 'react';
import { FaTimes, FaCalculator, FaHeartbeat, FaWeight, FaBrain } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';

interface ToolsModalProps {
    onClose: () => void;
}

type Tool = 'shock-index' | 'bmi' | 'drug-calculator' | 'map-calculator' | 'glasgow-scale';

const ToolsModal: React.FC<ToolsModalProps> = ({ onClose }) => {
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    // Calculadora de Índice de Shock
    const [shockCalc, setShockCalc] = useState({
        heartRate: '',
        systolicBP: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de IMC
    const [bmiCalc, setBmiCalc] = useState({
        weight: '',
        height: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de PAM (Presión Arterial Media)
    const [mapCalc, setMapCalc] = useState({
        systolic: '',
        diastolic: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de Escala de Glasgow
    const [glasgowCalc, setGlasgowCalc] = useState({
        eyeOpening: '',
        verbalResponse: '',
        motorResponse: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de Dosis de Medicamentos
    const [dosageCalc, setDosageCalc] = useState({
        weight: '',
        medication: '',
        result: null as number | null,
        unit: '',
        route: '',
        instructions: ''
    });

    const calculateShockIndex = () => {
        const hr = parseFloat(shockCalc.heartRate);
        const sbp = parseFloat(shockCalc.systolicBP);

        if (hr && sbp) {
            const index = hr / sbp;
            let interpretation = '';

            if (index < 0.5) {
                interpretation = 'Bajo - Posible bradicardia o hipertensión';
            } else if (index >= 0.5 && index <= 1.0) {
                interpretation = 'Normal - Rango fisiológico';
            } else if (index > 1.0 && index <= 1.5) {
                interpretation = 'Elevado - Posible shock compensado';
            } else {
                interpretation = 'Muy elevado - Shock descompensado, requiere intervención inmediata';
            }

            setShockCalc({
                ...shockCalc,
                result: parseFloat(index.toFixed(2)),
                interpretation
            });
        }
    };

    const calculateBMI = () => {
        const weight = parseFloat(bmiCalc.weight);
        const height = parseFloat(bmiCalc.height) / 100; // convertir cm a m

        if (weight && height) {
            const bmi = weight / (height * height);
            let interpretation = '';

            if (bmi < 18.5) {
                interpretation = 'Bajo peso';
            } else if (bmi >= 18.5 && bmi < 25) {
                interpretation = 'Peso normal';
            } else if (bmi >= 25 && bmi < 30) {
                interpretation = 'Sobrepeso';
            } else {
                interpretation = 'Obesidad';
            }

            setBmiCalc({
                ...bmiCalc,
                result: parseFloat(bmi.toFixed(1)),
                interpretation
            });
        }
    };

    const calculateMAP = () => {
        const sys = parseFloat(mapCalc.systolic);
        const dia = parseFloat(mapCalc.diastolic);

        if (sys && dia) {
            const map = dia + ((sys - dia) / 3);
            let interpretation = '';

            if (map < 60) {
                interpretation = 'Baja - Riesgo de hipoperfusión';
            } else if (map >= 60 && map <= 100) {
                interpretation = 'Normal - Perfusión adecuada';
            } else {
                interpretation = 'Alta - Posible hipertensión';
            }

            setMapCalc({
                ...mapCalc,
                result: parseFloat(map.toFixed(1)),
                interpretation
            });
        }
    };

    const calculateGlasgow = () => {
        const eye = parseFloat(glasgowCalc.eyeOpening);
        const verbal = parseFloat(glasgowCalc.verbalResponse);
        const motor = parseFloat(glasgowCalc.motorResponse);

        if (eye && verbal && motor) {
            const total = eye + verbal + motor;
            let interpretation = '';

            if (total < 8) {
                interpretation = 'Severo - Coma o estado de no respuesta';
            } else if (total >= 8 && total <= 12) {
                interpretation = 'Moderado - Respuesta parcial o confusa';
            } else {
                interpretation = 'Leve - Respuesta normal';
            }

            setGlasgowCalc({
                ...glasgowCalc,
                result: total,
                interpretation
            });
        }
    };

    const tools = [
        {
            id: 'shock-index' as Tool,
            name: 'Índice de Shock',
            icon: <FaHeartbeat className="w-6 h-6" />,
            description: 'Calcula el índice de shock (FC/PAS)'
        },
        {
            id: 'bmi' as Tool,
            name: 'Calculadora IMC',
            icon: <FaWeight className="w-6 h-6" />,
            description: 'Índice de masa corporal'
        },
        {
            id: 'map-calculator' as Tool,
            name: 'PAM Calculator',
            icon: <MdBloodtype className="w-6 h-6" />,
            description: 'Presión arterial media'
        },
        {
            id: 'drug-calculator' as Tool,
            name: 'Calculadora de Dosis',
            icon: <FaCalculator className="w-6 h-6" />,
            description: 'Cálculos de medicamentos'
        },
        {
            id: 'glasgow-scale' as Tool,
            name: 'Escala de Glasgow',
            icon: <FaBrain className="w-6 h-6" />,
            description: 'Evalúa el nivel de conciencia'
        }
    ];

    const renderToolContent = () => {
        switch (selectedTool) {
            case 'shock-index':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600">Calculadora de Índice de Shock</h3>
                        <p className="text-sm text-gray-600">
                            El índice de shock se calcula dividiendo la frecuencia cardíaca entre la presión arterial sistólica.
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
                            La Presión Arterial Media indica la perfusión de órganos vitales.
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
                                    <input
                                        type="text"
                                        value={dosageCalc.medication}
                                        onChange={(e) => setDosageCalc({...dosageCalc, medication: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Epinefrina"
                                    />
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
                                        onChange={(e) => setDosageCalc({...dosageCalc, result: parseFloat(e.target.value)})}
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
                                            <p><strong>INTUBACIÓN INMEDIATA:</strong> El paciente no puede proteger su vía aérea</p>
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
                                        <p className="text-yellow-800 font-bold text-sm">⚠️ PRECAUCIÓN - Glasgow 9-12</p>
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
                                        <p><strong>• Intoxicación/Drogas:</strong> Glasgow puede estar alterado sin TEC</p>
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

            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">🛠️ Herramientas</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-orange-600 rounded-full transition-colors"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex md:flex-row flex-col h-[calc(90vh-80px)]">
                    {/* Lista de herramientas */}
                    <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto">
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
                                <FaCalculator className="w-16 h-16 mb-4 text-gray-300" />
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
