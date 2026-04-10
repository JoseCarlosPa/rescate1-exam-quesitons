import {AnimatePresence, motion} from 'framer-motion';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import {RhythmType} from "./EkgSimulator.types.ts";
import useEkgSimulator from "./EkgSimulator.hook.ts";
import {ekgExplanations, pqrstInfo} from "./EkgSimultaro.constants.ts";
import {useState} from "react";
import EkgQuiz from "./EkgQuiz.component.tsx";

// Tailwind bg class → CSS hex (only the ones used in pqrstInfo)
const TAILWIND_COLOR_MAP: Record<string, string> = {
    'bg-blue-500': '#3B82F6',
    'bg-cyan-500': '#06B6D4',
    'bg-green-500': '#22C55E',
    'bg-yellow-500': '#EAB308',
    'bg-red-500': '#EF4444',
    'bg-purple-500': '#A855F7',
    'bg-pink-400': '#F472B6',
};

type SimulatorTab = 'simulator' | 'quiz';

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
    const [activeTab, setActiveTab] = useState<SimulatorTab>('simulator');

    return (
        <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                🫀 Simulador de Electrocardiograma (EKG/ECG)
            </h2>

            {/* Internal tab nav */}
            <div className="flex gap-3 mb-6 border-b border-gray-200 pb-2">
                <button
                    onClick={() => setActiveTab('simulator')}
                    className={`px-4 py-2 rounded-t-lg font-semibold text-sm border-b-2 transition ${activeTab === 'simulator' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    📡 Simulador
                </button>
                <button
                    onClick={() => setActiveTab('quiz')}
                    className={`px-4 py-2 rounded-t-lg font-semibold text-sm border-b-2 transition ${activeTab === 'quiz' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    🧠 Quiz
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'quiz' ? (
                    <motion.div key="quiz" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}}>
                        <EkgQuiz/>
                    </motion.div>
                ) : (
                    <motion.div key="simulator" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}}
                        className="space-y-6">

                        {/* Monitor EKG */}
                        <div className="bg-black rounded-lg p-4 relative border-4 border-gray-700">
                            <div className="absolute top-2 right-2 text-green-400 font-mono text-sm">
                                {currentInfo.bpm > 0 ? `${currentInfo.bpm} lpm` : 'Sin pulso'}
                            </div>
                            <div className="h-64 bg-black">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={ekgData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1a3a1a"/>
                                        <XAxis dataKey="time" stroke="#00ff00" tick={false} domain={[0, 500]}/>
                                        <YAxis stroke="#00ff00" domain={[-1.5, 3]} tick={{fill: '#00ff00', fontSize: 12}}/>
                                        <Line type="monotone" dataKey="voltage" stroke="#00ff00" strokeWidth={2}
                                              dot={false} isAnimationActive={false}/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            {currentInfo.bpm > 0 && (
                                <motion.div
                                    className="absolute bottom-6 right-6 w-12 h-12 bg-green-500 rounded-full"
                                    animate={{scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7]}}
                                    transition={{duration: 60 / currentInfo.bpm, repeat: Infinity, ease: "easeInOut"}}
                                />
                            )}
                        </div>

                        {/* Controles */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button onClick={() => setIsPlaying(!isPlaying)}
                                className={`px-6 py-2 rounded-lg font-semibold transition ${isPlaying ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
                                {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
                            </button>
                            <button onClick={() => setShowLabels(!showLabels)}
                                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
                                {showLabels ? '🏷 Ocultar Etiquetas' : '🏷 Mostrar Etiquetas'}
                            </button>
                            <button onClick={() => setShowCustomControls(!showCustomControls)}
                                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold transition">
                                {showCustomControls ? '🎛 Ocultar Controles' : '🎛 Personalizar EKG'}
                            </button>
                        </div>

                        {/* Controles Personalizados */}
                        {showCustomControls && (
                            <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
                                <h3 className="text-xl font-bold mb-4 text-indigo-800">🎛️ Controles Personalizados - Modo Educativo</h3>
                                <p className="text-sm text-gray-700 mb-4">
                                    Experimenta modificando los parámetros del EKG. Primero selecciona <strong>"Ritmo Personalizado"</strong>.
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Frecuencia Cardíaca */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            ❤️ Frecuencia Cardíaca: {customParams.bpm} lpm
                                        </label>
                                        <input type="range" min="30" max="200" value={customParams.bpm}
                                            onChange={e => setCustomParams({...customParams, bpm: parseInt(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {customParams.bpm < 60 ? '⬇ Bradicardia' : customParams.bpm > 100 ? '⬆ Taquicardia' : '✅ Normal'}
                                        </p>
                                    </div>
                                    {/* Amplitud Onda P */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🔵 Amplitud Onda P: {customParams.pWaveAmplitude.toFixed(2)} mV
                                        </label>
                                        <input type="range" min="0" max="0.5" step="0.05" value={customParams.pWaveAmplitude}
                                            onChange={e => setCustomParams({...customParams, pWaveAmplitude: parseFloat(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">Despolarización auricular</p>
                                    </div>
                                    {/* Amplitud QRS */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🟢 Amplitud QRS: {customParams.qrsAmplitude.toFixed(1)} mV
                                        </label>
                                        <input type="range" min="0.5" max="4" step="0.1" value={customParams.qrsAmplitude}
                                            onChange={e => setCustomParams({...customParams, qrsAmplitude: parseFloat(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">Despolarización ventricular</p>
                                    </div>
                                    {/* Amplitud Onda T */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🔴 Amplitud Onda T: {customParams.tWaveAmplitude.toFixed(2)} mV
                                        </label>
                                        <input type="range" min="0" max="0.8" step="0.05" value={customParams.tWaveAmplitude}
                                            onChange={e => setCustomParams({...customParams, tWaveAmplitude: parseFloat(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">Repolarización ventricular</p>
                                    </div>
                                    {/* Intervalo PR */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🔷 Intervalo PR: {customParams.prInterval.toFixed(2)} s
                                        </label>
                                        <input type="range" min="0.08" max="0.40" step="0.01" value={customParams.prInterval}
                                            onChange={e => setCustomParams({...customParams, prInterval: parseFloat(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {customParams.prInterval < 0.12 ? '⚠ Corto (WPW?)' : customParams.prInterval > 0.20 ? '⚠ Largo (Bloqueo AV 1°)' : '✅ Normal (0.12-0.20s)'}
                                        </p>
                                    </div>
                                    {/* Elevación ST */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🟡 Elevación/Depresión ST: {customParams.stElevation.toFixed(2)} mV
                                        </label>
                                        <input type="range" min="-0.5" max="1" step="0.1" value={customParams.stElevation}
                                            onChange={e => setCustomParams({...customParams, stElevation: parseFloat(e.target.value)})}
                                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                            disabled={selectedRhythm !== 'custom'}/>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {customParams.stElevation > 0.2 ? '⚠️ Elevación → lesión miocárdica' : customParams.stElevation < -0.1 ? '⚠️ Depresión → isquemia subendocárdica' : '✅ Normal'}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setCustomParams({bpm: 75, pWaveAmplitude: 0.25, qrsAmplitude: 2.0, tWaveAmplitude: 0.3, prInterval: 0.16, qrsWidth: 0.08, stElevation: 0})}
                                    className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition">
                                    🔄 Restaurar Valores
                                </button>
                            </motion.div>
                        )}

                        {/* Selector de Ritmos */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Selecciona un Ritmo Cardíaco:</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {(Object.keys(rhythmData) as RhythmType[]).map(rhythm => (
                                    <button key={rhythm} onClick={() => setSelectedRhythm(rhythm)}
                                        className={`p-4 rounded-lg border-2 transition font-semibold ${selectedRhythm === rhythm ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-300 bg-white hover:border-gray-400'}`}>
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
                            <motion.div key={selectedRhythm} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                className="bg-linear-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
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
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">
                                    📚 Componentes del Electrocardiograma (PQRST/U) — Explicación Detallada
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {pqrstInfo.map((item, index) => {
                                        const borderHex = TAILWIND_COLOR_MAP[item.color] ?? '#6B7280';
                                        return (
                                            <motion.div key={item.label} initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}} transition={{delay: index * 0.07}}
                                                className="bg-white rounded-lg shadow border-l-4 overflow-hidden"
                                                style={{borderColor: borderHex}}>
                                                <button
                                                    onClick={() => setExpandedPQRST(expandedPQRST === item.label ? null : item.label)}
                                                    className="w-full p-4 text-left hover:bg-gray-50 transition">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className={`w-4 h-4 ${item.color} rounded`}/>
                                                        <h4 className="font-bold text-gray-800">{item.label}</h4>
                                                        <span className="ml-auto text-gray-400">
                                                            {expandedPQRST === item.label ? '▼' : '▶'}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                </button>
                                                <AnimatePresence>
                                                    {expandedPQRST === item.label && (
                                                        <motion.div initial={{height: 0, opacity: 0}}
                                                            animate={{height: 'auto', opacity: 1}}
                                                            exit={{height: 0, opacity: 0}}
                                                            className="px-4 pb-4 bg-gray-50">
                                                            <div className="pt-2 border-t border-gray-200">
                                                                <p className="text-sm text-gray-700 mb-3">{item.detailedExplanation}</p>
                                                                <div className="bg-white p-2 rounded mb-2">
                                                                    <p className="text-xs font-semibold text-green-700">✅ Valores Normales:</p>
                                                                    <p className="text-xs text-gray-600">{item.normalValues}</p>
                                                                </div>
                                                                <div className="bg-red-50 p-2 rounded">
                                                                    <p className="text-xs font-semibold text-red-700">⚠️ Anormalidades:</p>
                                                                    <p className="text-xs text-gray-600">{item.abnormalities}</p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Sistema de Conducción — JSX estructurado (no markdown) */}
                        <div className="bg-linear-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold mb-4 text-purple-800">
                                {ekgExplanations.conductionSystem.title}
                            </h3>
                            <ol className="space-y-2">
                                {ekgExplanations.conductionSystem.steps.map(step => (
                                    <li key={step.number} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            {step.number}
                                        </span>
                                        <span>
                                            <strong>{step.label}:</strong> {step.detail}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Ritmos desfibrilables / no desfibrilables */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-lg mb-3 text-green-800">✅ Ritmos NO Desfibrilables</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• <strong>Asistolia:</strong> RCP + Epinefrina (no desfibrilar)</li>
                                    <li>• <strong>AESP:</strong> RCP + tratar causa reversible (5H/5T)</li>
                                    <li>• <strong>Bradicardia sintomática:</strong> Atropina, marcapasos</li>
                                    <li>• <strong>Bloqueo AV 3°:</strong> Marcapasos transcutáneo urgente</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="font-bold text-lg mb-3 text-red-800">⚡ Ritmos Desfibrilables</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• <strong>Fibrilación Ventricular (FV):</strong> Desfibrilación inmediata</li>
                                    <li>• <strong>TV sin pulso (TVSP):</strong> Desfibrilación</li>
                                    <li>• <strong>Energía:</strong> 120-200 J bifásico</li>
                                    <li>• <strong>Protocolo:</strong> RCP → Descarga → RCP 2 min → Reevaluar</li>
                                </ul>
                            </div>
                        </div>

                        {/* Identificación de Isquemia/Lesión/Necrosis */}
                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h4 className="font-bold text-lg mb-3 text-purple-800">🔍 Identificación de Isquemia, Lesión y Necrosis</h4>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Isquemia</h5>
                                    <p className="text-gray-700">• Inversión de onda T</p>
                                    <p className="text-gray-700">• Ondas T picudas o aplanadas</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Lesión (STEMI/NSTEMI)</h5>
                                    <p className="text-gray-700">• ↑ ST ≥ 1 mm: STEMI (transmural)</p>
                                    <p className="text-gray-700">• ↓ ST: NSTEMI / isquemia subendocárdica</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Necrosis</h5>
                                    <p className="text-gray-700">• Ondas Q patológicas (&gt; 1 cuadro)</p>
                                    <p className="text-gray-700">• Pérdida de progresión de onda R</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

