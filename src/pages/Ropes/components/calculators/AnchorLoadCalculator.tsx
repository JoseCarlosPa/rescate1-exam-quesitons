import { useState, useMemo } from 'react';

function AnchorSVG({ angleDeg, tensionRatio }: { angleDeg: number; tensionRatio: number }) {
    const halfAngle = (angleDeg / 2) * (Math.PI / 180);
    const cx = 130, cy = 60;
    const len = 110;

    const lx = cx - Math.sin(halfAngle) * len;
    const ly = cy + Math.cos(halfAngle) * len;
    const rx = cx + Math.sin(halfAngle) * len;

    // color based on tension ratio
    const color = tensionRatio <= 0.6 ? '#22c55e' : tensionRatio <= 0.85 ? '#f59e0b' : tensionRatio <= 1.1 ? '#f97316' : '#ef4444';

    return (
        <svg viewBox="0 0 260 260" className="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Anchor bar */}
            <rect x="90" y="30" width="80" height="14" rx="4" fill="#78716c" />
            <text x="130" y="42" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">ANCLAJE</text>

            {/* Anchor lines */}
            <line x1={cx} y1={44} x2={lx} y2={ly} stroke={color} strokeWidth="4" strokeLinecap="round" />
            <line x1={cx} y1={44} x2={rx} y2={ly} stroke={color} strokeWidth="4" strokeLinecap="round" />

            {/* Angle arc */}
            <path
                d={`M ${cx - 24 * Math.sin(halfAngle)} ${cy + 10 + 24 * Math.cos(halfAngle)} A 24 24 0 0 1 ${cx + 24 * Math.sin(halfAngle)} ${cy + 10 + 24 * Math.cos(halfAngle)}`}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="3 2"
            />
            <text x={cx} y={cy + 40} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="bold">
                {angleDeg}°
            </text>

            {/* Tension labels on legs */}
            <text
                x={cx - Math.sin(halfAngle) * 55 - 14}
                y={cy + Math.cos(halfAngle) * 55}
                fontSize="9"
                fill={color}
                fontWeight="bold"
                textAnchor="middle"
            >
                T
            </text>
            <text
                x={cx + Math.sin(halfAngle) * 55 + 14}
                y={cy + Math.cos(halfAngle) * 55}
                fontSize="9"
                fill={color}
                fontWeight="bold"
                textAnchor="middle"
            >
                T
            </text>

            {/* Load arrow down */}
            <line x1={cx} y1={ly - 10} x2={cx} y2={ly + 30} stroke={color} strokeWidth="3" strokeDasharray="5 3" />
            <polygon points={`${cx},${ly + 40} ${cx - 7},${ly + 26} ${cx + 7},${ly + 26}`} fill={color} />
            <text x={cx} y={ly + 55} textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">
                W (Carga)
            </text>

            {/* Danger zone annotation */}
            {angleDeg > 120 && (
                <text x={cx} y={240} textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="bold">
                    ⚠️ Ángulo crítico — Cargas extremas
                </text>
            )}
        </svg>
    );
}

export default function AnchorLoadCalculator() {
    const [weight, setWeight] = useState(100);
    const [angle, setAngle] = useState(60);

    const results = useMemo(() => {
        const rad = (angle / 2) * (Math.PI / 180);
        const tensionPerLeg = weight / (2 * Math.cos(rad));
        const tensionRatio = tensionPerLeg / weight; // relative to total load
        const totalOnAnchor = tensionPerLeg * 2;

        let status: 'safe' | 'caution' | 'warning' | 'danger';
        let statusLabel: string;
        let statusColor: string;

        if (angle <= 60) {
            status = 'safe'; statusLabel = 'Seguro'; statusColor = '#22c55e';
        } else if (angle <= 90) {
            status = 'caution'; statusLabel = 'Aceptable'; statusColor = '#f59e0b';
        } else if (angle <= 120) {
            status = 'warning'; statusLabel = 'Precaución'; statusColor = '#f97316';
        } else {
            status = 'danger'; statusLabel = 'PELIGROSO'; statusColor = '#ef4444';
        }

        return { tensionPerLeg, tensionRatio, totalOnAnchor, status, statusLabel, statusColor };
    }, [weight, angle]);

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
                            type="range" min={10} max={300} step={5}
                            value={weight} onChange={e => setWeight(Number(e.target.value))}
                            className="w-full accent-amber-500 h-2 rounded-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>10 kg</span><span>300 kg</span>
                        </div>
                    </div>

                    {/* Angle */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Ángulo entre ramas del anclaje
                            <span
                                className="ml-2 text-2xl font-bold"
                                style={{ color: results.statusColor }}
                            >
                                {angle}°
                            </span>
                        </label>
                        <input
                            type="range" min={0} max={170} step={5}
                            value={angle} onChange={e => setAngle(Number(e.target.value))}
                            className="w-full h-2 rounded-full"
                            style={{ accentColor: results.statusColor }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>0°</span><span>120° crítico</span><span>170°</span>
                        </div>
                    </div>

                    {/* Status badge */}
                    <div
                        className="flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-300"
                        style={{ borderColor: results.statusColor, backgroundColor: results.statusColor + '18' }}
                    >
                        <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: results.statusColor }} />
                        <div>
                            <p className="font-bold text-gray-800">{results.statusLabel}</p>
                            <p className="text-xs text-gray-500">
                                {results.status === 'safe' && 'Ángulo recomendado para sistemas de rescate'}
                                {results.status === 'caution' && 'Aceptable pero monitorear la carga en el anclaje'}
                                {results.status === 'warning' && 'Cercano al límite — use anclajes reforzados'}
                                {results.status === 'danger' && '¡La tensión supera la carga total! Rediseñar sistema'}
                            </p>
                        </div>
                    </div>

                    {/* Result cards */}
                    <div className="space-y-3">
                        <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                            <p className="text-xs text-gray-500">Tensión en cada rama</p>
                            <p className="text-2xl font-bold text-gray-800">{results.tensionPerLeg.toFixed(1)} kg</p>
                            <p className="text-xs text-gray-400">
                                = {(results.tensionRatio * 100).toFixed(0)}% de la carga total
                            </p>
                        </div>
                        <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                            <p className="text-xs text-gray-500">Suma de tensiones sobre el anclaje</p>
                            <p className="text-2xl font-bold text-gray-800">{results.totalOnAnchor.toFixed(1)} kg</p>
                        </div>
                    </div>
                </div>

                {/* SVG */}
                <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Visualización del anclaje</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full">
                        <AnchorSVG angleDeg={angle} tensionRatio={results.tensionRatio} />
                    </div>
                </div>
            </div>

            {/* Angle reference table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left rounded-tl-lg">Ángulo</th>
                            <th className="p-2 text-right">Tensión / rama</th>
                            <th className="p-2 text-right rounded-tr-lg">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[0, 30, 60, 90, 120, 150].map(a => {
                            const t = weight / (2 * Math.cos((a / 2) * (Math.PI / 180)));
                            const ratio = t / weight;
                            const c = ratio <= 0.6 ? '#22c55e' : ratio <= 0.85 ? '#f59e0b' : ratio <= 1.1 ? '#f97316' : '#ef4444';
                            const lbl = ratio <= 0.6 ? '✅ Seguro' : ratio <= 0.85 ? '⚠️ Aceptable' : ratio <= 1.1 ? '🔶 Precaución' : '🚨 Peligroso';
                            return (
                                <tr
                                    key={a}
                                    className={`border-t border-gray-100 transition-colors ${a === angle ? 'bg-amber-50' : ''}`}
                                >
                                    <td className="p-2 font-mono font-semibold" style={{ color: c }}>{a}°</td>
                                    <td className="p-2 text-right font-bold">{t.toFixed(1)} kg</td>
                                    <td className="p-2 text-right text-xs">{lbl}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <p className="font-semibold mb-1">📐 Fórmula</p>
                <p>Tensión por rama = Peso ÷ (2 × cos(θ/2)) &nbsp;|&nbsp; Ángulo máximo recomendado: <strong>≤ 60°</strong></p>
            </div>
        </div>
    );
}
