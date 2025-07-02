import React, { useState } from 'react';
import { FaTimes, FaCalculator, FaHeartbeat, FaWeight, FaBrain } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';

interface ToolsModalProps {
    onClose: () => void;
}

type Tool =
  | 'shock-index'
  | 'bmi'
  | 'drug-calculator'
  | 'map-calculator'
  | 'glasgow-scale'
  | 'cincinnati-scale'
  | 'parkland-rule';

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

    // Escala de Cincinnati
    const [cincinnati, setCincinnati] = useState({
      facial: '',
      arm: '',
      speech: '',
      result: '',
    });

    // Regla de Parkland
    const [parkland, setParkland] = useState({
      weight: '',
      tbsa: '',
      result: null as number | null,
      instructions: '',
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

    const calculateCincinnati = () => {
      const { facial, arm, speech } = cincinnati;
      let positives = 0;
      if (facial === 'yes') positives++;
      if (arm === 'yes') positives++;
      if (speech === 'yes') positives++;
      let result = '';
      if (positives === 0) result = 'No hay signos de ACV.';
      else if (positives === 1) result = 'Un signo: posible ACV, evaluar más.';
      else if (positives === 2) result = 'Dos signos: alta sospecha de ACV.';
      else result = 'Tres signos: ACV muy probable, activar código ictus.';
      setCincinnati({ ...cincinnati, result });
    };

    const calculateParkland = () => {
      const weight = parseFloat(parkland.weight);
      const tbsa = parseFloat(parkland.tbsa);
      if (weight && tbsa) {
        const total = weight * tbsa * 4;
        setParkland({
          ...parkland,
          result: total,
          instructions: `Administrar ${total / 2} mL en las primeras 8 horas y ${total / 2} mL en las siguientes 16 horas.`,
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
        },
        {
            id: 'cincinnati-scale' as Tool,
            name: 'Escala de Cincinnati',
            icon: <FaBrain className="w-6 h-6" />,
            description: 'Evaluación rápida de ACV',
        },
        {
            id: 'parkland-rule' as Tool,
            name: 'Regla de Parkland',
            icon: <FaCalculator className="w-6 h-6" />,
            description: 'Cálculo de líquidos en quemaduras',
        },
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
                        <select value={cincinnati.facial} onChange={e => setCincinnati({ ...cincinnati, facial: e.target.value })} className="w-full p-2 border border-gray-300 rounded-lg">
                          <option value="">Seleccionar</option>
                          <option value="yes">Presente</option>
                          <option value="no">Ausente</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Debilidad de brazo
                          <span className="block text-xs text-gray-500">(Pida al paciente levantar ambos brazos por 10 segundos)</span>
                        </label>
                        <select value={cincinnati.arm} onChange={e => setCincinnati({ ...cincinnati, arm: e.target.value })} className="w-full p-2 border border-gray-300 rounded-lg">
                          <option value="">Seleccionar</option>
                          <option value="yes">Presente</option>
                          <option value="no">Ausente</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alteración del habla
                          <span className="block text-xs text-gray-500">(Pida repetir: "El cielo es azul en Cincinnati")</span>
                        </label>
                        <select value={cincinnati.speech} onChange={e => setCincinnati({ ...cincinnati, speech: e.target.value })} className="w-full p-2 border border-gray-300 rounded-lg">
                          <option value="">Seleccionar</option>
                          <option value="yes">Presente</option>
                          <option value="no">Ausente</option>
                        </select>
                      </div>
                    </div>
                    <button onClick={calculateCincinnati} className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
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
                              <li>Activar código ictus y trasladar de inmediato a centro especializado.</li>
                              <li>Notificar al hospital receptor.</li>
                              <li>Oxígeno suplementario si está indicado.</li>
                              <li>No administrar alimentos, líquidos ni medicamentos por vía oral.</li>
                              <li>Monitorear y documentar evolución.</li>
                            </ul>
                          </div>
                        )}
                        {cincinnati.result.includes('muy probable') && (
                          <div className="mt-2 text-xs text-red-700">
                            <p><strong>¡Emergencia!</strong> Traslado urgente a centro con unidad de ACV.</p>
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
                    <p className="text-sm text-gray-600 mb-2">Calcula la reposición de líquidos en quemaduras graves.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                        <input type="number" value={parkland.weight} onChange={e => setParkland({ ...parkland, weight: e.target.value })} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="70" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">% SCQ (Superficie Corporal Quemada)</label>
                        <input type="number" value={parkland.tbsa} onChange={e => setParkland({ ...parkland, tbsa: e.target.value })} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="30" />
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-xs mt-2">
                      <p className="font-semibold text-orange-700 mb-1">Guía rápida para estimar %SCQ (Regla de los 9):</p>
                      <ul className="list-disc ml-5">
                        <li>Cabeza y cuello: 9%</li>
                        <li>Tronco anterior: 18%</li>
                        <li>Tronco posterior: 18%</li>
                        <li>Cada brazo: 9%</li>
                        <li>Cada pierna: 18%</li>
                        <li>Área genital: 1%</li>
                      </ul>
                      <p className="mt-2">En niños, la cabeza representa más porcentaje y las piernas menos. Usa tablas específicas si es posible.</p>
                    </div>
                    <button onClick={calculateParkland} className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 mt-2">
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
