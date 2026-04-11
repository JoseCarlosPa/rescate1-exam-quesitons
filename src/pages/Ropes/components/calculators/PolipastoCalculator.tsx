import { useState, useMemo } from 'react';

type SystemType = '2:1' | '3:1' | '4:1' | '5:1' | '6:1';

interface SystemConfig {
    ratio: number;
    name: string;
    description: string;
    color: string;
}

const SYSTEMS: Record<SystemType, SystemConfig> = {
    '2:1': { ratio: 2, name: 'Z simple / 2:1', description: 'Dos ramales de cuerda soportan la carga', color: '#22c55e' },
    '3:1': { ratio: 3, name: 'Z-rig (Tres por uno)', description: 'Sistema más común en rescate prehospitalario', color: '#f59e0b' },
    '4:1': { ratio: 4, name: 'Cuatro por uno', description: 'Mayor ventaja mecánica con más fricción', color: '#f97316' },
    '5:1': { ratio: 5, name: 'Cinco por uno', description: 'Alta ventaja mecánica, requiere más cuerda', color: '#ef4444' },
    '6:1': { ratio: 6, name: 'Seis por uno', description: 'Máxima ventaja en rescate de campo', color: '#8b5cf6' },
};

// SVG Pulley Diagrams per system
function PolipastoSVG({ system, animated }: { system: SystemType; animated: boolean }) {
    const color = SYSTEMS[system].color;
    const ratio = SYSTEMS[system].ratio;

    // Dynamic spring-like dashed animation stroke
    const ropeDash = animated ? 'rope-animated' : '';

    return (
        <svg viewBox="0 0 260 300" className="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
            <style>{`
                @keyframes ropeFlow {
                    from { stroke-dashoffset: 24; }
                    to   { stroke-dashoffset: 0; }
                }
                .rope-animated { animation: ropeFlow 0.7s linear infinite; }
            `}</style>

            {/* Anchor */}
            <rect x="90" y="6" width="80" height="16" rx="5" fill="#78716c" />
            <text x="130" y="18" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">ANCLAJE</text>

            {/* Render per ratio */}
            {ratio === 2 && <TwoToOne color={color} ropeDash={ropeDash} />}
            {ratio === 3 && <ThreeToOne color={color} ropeDash={ropeDash} />}
            {ratio === 4 && <FourToOne color={color} ropeDash={ropeDash} />}
            {ratio === 5 && <FiveToOne color={color} ropeDash={ropeDash} />}
            {ratio === 6 && <SixToOne color={color} ropeDash={ropeDash} />}

            {/* Load box */}
            <rect x="90" y="248" width="80" height="40" rx="8" fill={color} opacity="0.9" />
            <text x="130" y="263" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">CARGA</text>
            <text x="130" y="278" textAnchor="middle" fontSize="8" fill="white">W</text>
        </svg>
    );
}

function Pulley({ cx, cy, fill }: { cx: number; cy: number; fill: string }) {
    return (
        <g>
            <circle cx={cx} cy={cy} r={10} fill={fill} stroke="#78716c" strokeWidth="2" />
            <circle cx={cx} cy={cy} r={4} fill="#78716c" />
        </g>
    );
}

function TwoToOne({ color, ropeDash }: { color: string; ropeDash: string }) {
    return (
        <>
            <Pulley cx={130} cy={80} fill={color} />
            {/* rope down to load */}
            <line x1="130" y1="22" x2="130" y2="70" stroke="#78350f" strokeWidth="3" />
            <line x1="130" y1="90" x2="130" y2="248" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            {/* haul rope going up-right */}
            <line x1="120" y1="80" x2="70" y2="40" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <text x="52" y="36" fontSize="9" fill="#78350f" fontWeight="bold">HALE</text>
        </>
    );
}

function ThreeToOne({ color, ropeDash }: { color: string; ropeDash: string }) {
    return (
        <>
            {/* Fixed pulley at anchor */}
            <Pulley cx={155} cy={75} fill="#d1d5db" />
            {/* Moving pulley attached to load */}
            <Pulley cx={105} cy={175} fill={color} />
            {/* Anchor rope */}
            <line x1="130" y1="22" x2="155" y2="65" stroke="#78350f" strokeWidth="3" />
            {/* Load rope up */}
            <line x1="105" y1="165" x2="105" y2="60" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="105" y1="60" x2="155" y2="65" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            {/* Through fixed pulley and to load */}
            <line x1="155" y1="85" x2="155" y2="175" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="115" y1="175" x2="155" y2="175" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            {/* load attachment */}
            <line x1="105" y1="185" x2="130" y2="248" stroke={color} strokeWidth="3" />
            {/* Haul direction */}
            <line x1="105" y1="60" x2="60" y2="30" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <text x="40" y="26" fontSize="9" fill="#78350f" fontWeight="bold">HALE</text>
        </>
    );
}

function FourToOne({ color, ropeDash }: { color: string; ropeDash: string }) {
    return (
        <>
            <Pulley cx={160} cy={65} fill="#d1d5db" />
            <Pulley cx={100} cy={140} fill={color} />
            <Pulley cx={160} cy={155} fill="#d1d5db" />
            <line x1="130" y1="22" x2="160" y2="55" stroke="#78350f" strokeWidth="3" />
            {/* rope path */}
            <line x1="100" y1="130" x2="100" y2="65" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="100" y1="65" x2="160" y2="65" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="160" y1="75" x2="160" y2="145" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="110" y1="155" x2="160" y2="155" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            {/* load */}
            <line x1="100" y1="150" x2="130" y2="248" stroke={color} strokeWidth="3" />
            {/* haul */}
            <line x1="100" y1="65" x2="55" y2="38" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <text x="35" y="34" fontSize="9" fill="#78350f" fontWeight="bold">HALE</text>
        </>
    );
}

function FiveToOne({ color, ropeDash }: { color: string; ropeDash: string }) {
    return (
        <>
            <Pulley cx={160} cy={60} fill="#d1d5db" />
            <Pulley cx={95} cy={120} fill={color} />
            <Pulley cx={160} cy={140} fill="#d1d5db" />
            <Pulley cx={95} cy={200} fill={color} />
            <line x1="130" y1="22" x2="160" y2="50" stroke="#78350f" strokeWidth="3" />
            <line x1="95" y1="110" x2="95" y2="60" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="95" y1="60" x2="160" y2="60" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="160" y1="70" x2="160" y2="130" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="105" y1="140" x2="160" y2="140" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="95" y1="130" x2="95" y2="190" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="95" y1="210" x2="130" y2="248" stroke={color} strokeWidth="3" />
            <line x1="95" y1="60" x2="50" y2="34" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <text x="30" y="30" fontSize="9" fill="#78350f" fontWeight="bold">HALE</text>
        </>
    );
}

function SixToOne({ color, ropeDash }: { color: string; ropeDash: string }) {
    return (
        <>
            <Pulley cx={162} cy={55} fill="#d1d5db" />
            <Pulley cx={92} cy={108} fill={color} />
            <Pulley cx={162} cy={128} fill="#d1d5db" />
            <Pulley cx={92} cy={180} fill={color} />
            <Pulley cx={162} cy={200} fill="#d1d5db" />
            <line x1="130" y1="22" x2="162" y2="45" stroke="#78350f" strokeWidth="3" />
            <line x1="92" y1="98" x2="92" y2="55" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="92" y1="55" x2="162" y2="55" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="162" y1="65" x2="162" y2="118" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="102" y1="128" x2="162" y2="128" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="92" y1="118" x2="92" y2="170" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="102" y1="200" x2="162" y2="200" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="162" y1="138" x2="162" y2="190" stroke={color} strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <line x1="92" y1="190" x2="130" y2="248" stroke={color} strokeWidth="3" />
            <line x1="92" y1="55" x2="47" y2="30" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" className={ropeDash} />
            <text x="27" y="26" fontSize="9" fill="#78350f" fontWeight="bold">HALE</text>
        </>
    );
}

export default function PolipastoCalculator() {
    const [weight, setWeight] = useState(100);
    const [system, setSystem] = useState<SystemType>('3:1');
    const [animated, setAnimated] = useState(true);

    const results = useMemo(() => {
        const ratio = SYSTEMS[system].ratio;
        // Theoretical (frictionless): Pull = W / ratio
        const theoreticalPull = weight / ratio;
        // ~10% friction loss per pulley interaction
        const frictionFactor = 1 + (ratio - 1) * 0.05;
        const actualPull = theoreticalPull * frictionFactor;
        // Anchor load = weight + pull force (reaction at anchor)
        const anchorLoad = weight + actualPull;
        // Rescuers needed (avg 40kg effective pull per person)
        const rescuers = Math.ceil(actualPull / 40);
        // Safety check
        const safe = actualPull < 80; // one rescuer can easily manage

        return {
            ratio,
            theoreticalPull: theoreticalPull.toFixed(1),
            actualPull: actualPull.toFixed(1),
            anchorLoad: anchorLoad.toFixed(1),
            rescuers,
            safe,
        };
    }, [weight, system]);

    const cfg = SYSTEMS[system];

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Controls */}
                <div className="space-y-5">
                    {/* Weight */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Peso de la carga
                            <span className="ml-2 text-2xl font-bold text-amber-600">{weight} kg</span>
                        </label>
                        <input
                            type="range"
                            min={10} max={300} step={5}
                            value={weight}
                            onChange={e => setWeight(Number(e.target.value))}
                            className="w-full accent-amber-500 h-2 rounded-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>10 kg</span><span>300 kg</span>
                        </div>
                    </div>

                    {/* System selector */}
                    <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Sistema de polipasto</p>
                        <div className="grid grid-cols-3 gap-2">
                            {(Object.keys(SYSTEMS) as SystemType[]).map(s => (
                                <button
                                    key={s}
                                    onClick={() => setSystem(s)}
                                    className={`py-2 px-3 rounded-lg text-sm font-bold border-2 transition-all duration-200 ${
                                        system === s
                                            ? 'text-white border-transparent shadow-md scale-105'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300'
                                    }`}
                                    style={system === s ? { backgroundColor: SYSTEMS[s].color, borderColor: SYSTEMS[s].color } : {}}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2 italic">{cfg.description}</p>
                    </div>

                    {/* Animate toggle */}
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <div
                            onClick={() => setAnimated(a => !a)}
                            className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${animated ? 'bg-amber-500' : 'bg-gray-300'}`}
                        >
                            <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${animated ? 'translate-x-5' : ''}`} />
                        </div>
                        <span className="text-sm text-gray-600">Animación de cuerda</span>
                    </label>

                    {/* Results */}
                    <div className="space-y-3">
                        <ResultCard
                            label="Fuerza de hale necesaria"
                            value={`${results.actualPull} kg`}
                            sub={`Teórico ideal: ${results.theoreticalPull} kg`}
                            color={cfg.color}
                        />
                        <ResultCard
                            label="Carga sobre el anclaje"
                            value={`${results.anchorLoad} kg`}
                            sub="Carga + reacción de la polea fija"
                            color={Number(results.anchorLoad) > 250 ? '#ef4444' : '#f59e0b'}
                        />
                        <ResultCard
                            label="Rescatistas necesarios"
                            value={`${results.rescuers} persona${results.rescuers > 1 ? 's' : ''}`}
                            sub="Estimado en 40 kg de esfuerzo efectivo c/u"
                            color={results.safe ? '#22c55e' : '#f59e0b'}
                        />
                    </div>
                </div>

                {/* SVG diagram */}
                <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Diagrama del sistema {system}</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full">
                        <PolipastoSVG system={system} animated={animated} />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        ⚠️ Valores teóricos. Considere siempre un factor de seguridad ≥ 10:1 para el equipo.
                    </p>
                </div>
            </div>

            {/* Info strip */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <p className="font-semibold mb-1">📐 Fórmula aplicada</p>
                <p>
                    Fuerza de hale = Peso ÷ Ventaja Mecánica × Factor de fricción &nbsp;|&nbsp;
                    Carga en anclaje = Peso + Fuerza de hale
                </p>
            </div>
        </div>
    );
}

function ResultCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-3 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-xl font-bold text-gray-800">{value}</p>
                <p className="text-xs text-gray-400">{sub}</p>
            </div>
        </div>
    );
}
