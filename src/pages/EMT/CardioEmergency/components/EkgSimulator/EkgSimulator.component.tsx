import {AnimatePresence, motion} from 'framer-motion';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import {RhythmType} from "./EkgSimulator.types.ts";
import useEkgSimulator from "./EkgSimulator.hook.ts";
import {ekgExplanations, pqrstInfo} from "./EkgSimultaro.constants.ts";
import {useState} from "react";

export default function EkgSimulator() {

    const {
        ekgData,
        selectedRhythm,
        setSelectedRhythm,
        isPlaying,
        setIsPlaying,
        showLabels,
        setShowLabels,
        currentInfo,
        rhythmData,
        customParams,
        setCustomParams,
    } = useEkgSimulator();

    const [showCustomControls, setShowCustomControls] = useState(false);
    const [expandedPQRST, setExpandedPQRST] = useState<string | null>(null);

    return (
        <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                🫀 Simulador de Electrocardiograma (EKG/ECG)
            </h2>

            {/* Monitor EKG */}
            <div className="bg-black rounded-lg p-4 mb-6 relative border-4 border-gray-700">
                <div className="absolute top-2 right-2 text-green-400 font-mono text-sm">
                    {currentInfo.bpm > 0 ? `${currentInfo.bpm} lpm` : 'Sin pulso'}
                </div>

                <div className="h-64 bg-black">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={ekgData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1a3a1a"/>
                            <XAxis
                                dataKey="time"
                                stroke="#00ff00"
                                tick={false}
                                domain={[0, 500]}
                            />
                            <YAxis
                                stroke="#00ff00"
                                domain={[-1, 3]}
                                tick={{fill: '#00ff00', fontSize: 12}}
                            />
                            <Line
                                type="monotone"
                                dataKey="voltage"
                                stroke="#00ff00"
                                strokeWidth={2}
                                dot={false}
                                isAnimationActive={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Línea de pulso */}
                {currentInfo.bpm > 0 && (
                    <motion.div
                        className="absolute bottom-6 right-6 w-12 h-12 bg-green-500 rounded-full"
                        animate={{scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7]}}
                        transition={{
                            duration: 60 / currentInfo.bpm,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )}
            </div>

            {/* Controles */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                        isPlaying
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                >
                    {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
                </button>
                <button
                    onClick={() => setShowLabels(!showLabels)}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
                >
                    {showLabels ? '🏷 Ocultar Etiquetas' : '🏷 Mostrar Etiquetas'}
                </button>
                <button
                    onClick={() => setShowCustomControls(!showCustomControls)}
                    className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold transition"
                >
                    {showCustomControls ? '🎛 Ocultar Controles' : '🎛 Personalizar EKG'}
                </button>
            </div>

            {/* Controles Personalizados */}
            {showCustomControls && (
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    exit={{opacity: 0, height: 0}}
                    className="bg-indigo-50 p-6 rounded-lg mb-6 border-2 border-indigo-300"
                >
                    <h3 className="text-xl font-bold mb-4 text-indigo-800">
                        🎛️ Controles Personalizados - Modo Educativo
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                        Experimenta modificando los parámetros del EKG para entender cómo afectan el trazado.
                        Primero selecciona "Ritmo Personalizado" abajo.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Frecuencia Cardíaca */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                ❤️ Frecuencia Cardíaca: {customParams.bpm} lpm
                            </label>
                            <input
                                type="range"
                                min="30"
                                max="200"
                                value={customParams.bpm}
                                onChange={(e) => setCustomParams({...customParams, bpm: parseInt(e.target.value)})}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                disabled={selectedRhythm !== 'custom'}
                            />
                            <p className="text-xs text-gray-600 mt-1">
                                {customParams.bpm < 60 ? 'Bradicardia' : customParams.bpm > 100 ? 'Taquicardia' : 'Normal'}
                            </p>
                        </div>

                        {/* Amplitud Onda P */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🔵 Amplitud Onda P: {customParams.pWaveAmplitude.toFixed(2)} mV
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="0.5"
                                step="0.05"
                                value={customParams.pWaveAmplitude}
                                onChange={(e) => setCustomParams({
                                    ...customParams,
                                    pWaveAmplitude: parseFloat(e.target.value)
                                })}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                disabled={selectedRhythm !== 'custom'}
                            />
                            <p className="text-xs text-gray-600 mt-1">Despolarización auricular</p>
                        </div>

                        {/* Amplitud QRS */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🟢 Amplitud QRS: {customParams.qrsAmplitude.toFixed(1)} mV
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="4"
                                step="0.1"
                                value={customParams.qrsAmplitude}
                                onChange={(e) => setCustomParams({
                                    ...customParams,
                                    qrsAmplitude: parseFloat(e.target.value)
                                })}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                disabled={selectedRhythm !== 'custom'}
                            />
                            <p className="text-xs text-gray-600 mt-1">Despolarización ventricular</p>
                        </div>

                        {/* Amplitud Onda T */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🔴 Amplitud Onda T: {customParams.tWaveAmplitude.toFixed(2)} mV
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="0.8"
                                step="0.05"
                                value={customParams.tWaveAmplitude}
                                onChange={(e) => setCustomParams({
                                    ...customParams,
                                    tWaveAmplitude: parseFloat(e.target.value)
                                })}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                disabled={selectedRhythm !== 'custom'}
                            />
                            <p className="text-xs text-gray-600 mt-1">Repolarización ventricular</p>
                        </div>

                        {/* Elevación ST */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🟡 Elevación ST: {customParams.stElevation.toFixed(2)} mV
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={customParams.stElevation}
                                onChange={(e) => setCustomParams({
                                    ...customParams,
                                    stElevation: parseFloat(e.target.value)
                                })}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                disabled={selectedRhythm !== 'custom'}
                            />
                            <p className="text-xs text-gray-600 mt-1">
                                {customParams.stElevation > 0.3 ? '⚠️ Indica lesión miocárdica' : 'Normal'}
                            </p>
                        </div>

                        {/* Botón Reset */}
                        <div className="flex items-end">
                            <button
                                onClick={() => setCustomParams({
                                    bpm: 75,
                                    pWaveAmplitude: 0.25,
                                    qrsAmplitude: 2.0,
                                    tWaveAmplitude: 0.3,
                                    prInterval: 0.15,
                                    qrsWidth: 0.1,
                                    stElevation: 0
                                })}
                                className="w-full px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition"
                            >
                                🔄 Restaurar Valores
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Selector de Ritmos */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Selecciona un Ritmo Cardíaco:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {(Object.keys(rhythmData) as RhythmType[]).map((rhythm) => (
                        <button
                            key={rhythm}
                            onClick={() => setSelectedRhythm(rhythm)}
                            className={`p-4 rounded-lg border-2 transition font-semibold ${
                                selectedRhythm === rhythm
                                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                                    : 'border-gray-300 bg-white hover:border-gray-400'
                            }`}
                        >
                            <div className={`text-sm ${rhythmData[rhythm].color}`}>
                                {rhythmData[rhythm].name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                                {rhythmData[rhythm].bpm > 0 ? `${rhythmData[rhythm].bpm} lpm` : 'Sin actividad'}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Información del Ritmo Seleccionado */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedRhythm}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500"
                >
                    <h3 className={`text-2xl font-bold mb-3 ${currentInfo.color}`}>
                        {currentInfo.name}
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-gray-700">📊 Descripción:</span>
                            <p className="text-gray-800 ml-6">{currentInfo.description}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">🏥 Presentación Clínica:</span>
                            <p className="text-gray-800 ml-6">{currentInfo.clinical}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">💊 Tratamiento:</span>
                            <p className="text-gray-800 ml-6">{currentInfo.treatment}</p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-400">
                            <span className="font-semibold text-gray-700">🧠 ¿Por qué ocurre este ritmo?</span>
                            <p className="text-gray-800 ml-6 mt-2">{currentInfo.explanation}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Componentes PQRST Expandibles */}
            {showLabels && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                        📚 Componentes del Electrocardiograma (PQRST) - Explicación Detallada
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pqrstInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: index * 0.1}}
                                className="bg-white rounded-lg shadow border-l-4 overflow-hidden"
                                style={{borderColor: item.color.replace('bg-', '#')}}
                            >
                                <button
                                    onClick={() => setExpandedPQRST(expandedPQRST === item.label ? null : item.label)}
                                    className="w-full p-4 text-left hover:bg-gray-50 transition"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-4 h-4 ${item.color} rounded`}></div>
                                        <h4 className="font-bold text-gray-800">{item.label}</h4>
                                        <span className="ml-auto text-gray-400">
                                            {expandedPQRST === item.label ? '▼' : '▶'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </button>

                                <AnimatePresence>
                                    {expandedPQRST === item.label && (
                                        <motion.div
                                            initial={{height: 0, opacity: 0}}
                                            animate={{height: 'auto', opacity: 1}}
                                            exit={{height: 0, opacity: 0}}
                                            className="px-4 pb-4 bg-gray-50"
                                        >
                                            <div className="pt-2 border-t border-gray-200">
                                                <p className="text-sm text-gray-700 mb-3">
                                                    {item.detailedExplanation}
                                                </p>
                                                <div className="bg-white p-2 rounded mb-2">
                                                    <p className="text-xs font-semibold text-green-700">
                                                        ✅ Valores Normales:
                                                    </p>
                                                    <p className="text-xs text-gray-600">{item.normalValues}</p>
                                                </div>
                                                <div className="bg-red-50 p-2 rounded">
                                                    <p className="text-xs font-semibold text-red-700">
                                                        ⚠️ Anormalidades:
                                                    </p>
                                                    <p className="text-xs text-gray-600">{item.abnormalities}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Sistema de Conducción */}
            <div
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold mb-3 text-purple-800">
                    {ekgExplanations.conductionSystem.title}
                </h3>
                <div className="prose prose-sm text-gray-700">
                    {ekgExplanations.conductionSystem.content.split('\n').map((line, i) => {
                        if (line.trim()) {
                            return <p key={i} className="mb-2">{line.trim()}</p>;
                        }
                        return null;
                    })}
                </div>
            </div>

            {/* Información Educativa Adicional */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-lg mb-3 text-green-800">✅ Ritmos NO Desfibrilables</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>Asistolia:</strong> RCP + Epinefrina</li>
                        <li>• <strong>Actividad Eléctrica sin Pulso (AESP):</strong> RCP + tratar causa</li>
                        <li>• <strong>Bradicardia sintomática:</strong> Atropina, marcapasos</li>
                    </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-lg mb-3 text-red-800">⚡ Ritmos Desfibrilables</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>Fibrilación Ventricular (FV):</strong> Desfibrilación inmediata</li>
                        <li>• <strong>Taquicardia Ventricular sin pulso (TV):</strong> Desfibrilación</li>
                        <li>• <strong>Protocolo:</strong> RCP → Descargar → RCP → Evaluar</li>
                    </ul>
                </div>
            </div>

            {/* Identificación de Isquemia/Lesión */}
            <div className="mt-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-lg mb-3 text-purple-800">🔍 Identificación de Isquemia y Lesión</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Isquemia</h5>
                        <p className="text-gray-700">• Inversión de onda T</p>
                        <p className="text-gray-700">• Ondas T picudas o aplanadas</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Lesión</h5>
                        <p className="text-gray-700">• Elevación del segmento ST (STEMI)</p>
                        <p className="text-gray-700">• Depresión del segmento ST</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Necrosis</h5>
                        <p className="text-gray-700">• Ondas Q patológicas</p>
                        <p className="text-gray-700">• Pérdida de ondas R</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

