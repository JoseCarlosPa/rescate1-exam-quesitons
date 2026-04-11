import { useState, useMemo } from 'react';

// Gauge SVG component
function GaugeSVG({ value, min, max, label, color }: {
    value: number; min: number; max: number; label: string; color: string;
}) {
    const pct = Math.min(Math.max((value - min) / (max - min), 0), 1);
    const angle = -135 + pct * 270; // -135° to +135°
    const rad = angle * (Math.PI / 180);
    const cx = 80, cy = 80, r = 55;
    const needleX = cx + Math.cos(rad) * r;
    const needleY = cy + Math.sin(rad) * r;

    return (
        <svg viewBox="0 0 160 120" className="w-full max-w-[180px]" xmlns="http://www.w3.org/2000/svg">
            {/* Background arc - gray */}
            <path d={describeArc(cx, cy, r, -135, 135)} fill="none" stroke="#e5e7eb" strokeWidth="12" strokeLinecap="round" />
            {/* Filled arc */}
            <path d={describeArc(cx, cy, r, -135, -135 + pct * 270)} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            {/* Needle */}
            <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx={cx} cy={cy} r={5} fill="#374151" />
            {/* Value */}
            <text x={cx} y={cy + 22} textAnchor="middle" fontSize="14" fontWeight="bold" fill={color}>{label}</text>
        </svg>
    );
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
    const start = polarToXY(cx, cy, r, startDeg);
    const end = polarToXY(cx, cy, r, endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function polarToXY(cx: number, cy: number, r: number, deg: number) {
    const rad = deg * (Math.PI / 180);
    return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
}

export default function DescentCalculator() {
    const [totalWeight, setTotalWeight] = useState(120); // rescuer + patient
    const [height, setHeight] = useState(20);
    const [descentRate, setDescentRate] = useState(10); // m/min

    const results = useMemo(() => {
        // Braking force needed = weight of load (simplified, assumes friction device)
        // At rest: F_brake = W (must exceed to hold)
        // Controlled descent: brake force ~= W * 0.8 (20% slip)
        const brakingForce = totalWeight * 0.85;

        // Time to descend
        const timeSec = (height / descentRate) * 60;
        const timeMin = timeSec / 60;

        // Rope needed (with 10% margin)
        const ropeNeeded = height * 1.1;

        // Kinetic energy at bottom if brake fails (mgh), in kJ
        const kineticEnergy = (totalWeight * 9.81 * height) / 1000;

        // Safety rating of descent rate
        let rateColor: string;
        let rateLabel: string;
        if (descentRate <= 8) { rateColor = '#22c55e'; rateLabel = 'Óptima'; }
        else if (descentRate <= 15) { rateColor = '#f59e0b'; rateLabel = 'Aceptable'; }
        else { rateColor = '#ef4444'; rateLabel = 'Rápida'; }

        return { brakingForce, timeSec, timeMin, ropeNeeded, kineticEnergy, rateColor, rateLabel };
    }, [totalWeight, height, descentRate]);

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Controls */}
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Peso total (rescatador + paciente)
                            <span className="ml-2 text-2xl font-bold text-amber-600">{totalWeight} kg</span>
                        </label>
                        <input type="range" min={40} max={280} step={5} value={totalWeight}
                            onChange={e => setTotalWeight(Number(e.target.value))}
                            className="w-full accent-amber-500 h-2 rounded-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>40 kg</span><span>280 kg</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Altura de descenso
                            <span className="ml-2 text-2xl font-bold text-amber-600">{height} m</span>
                        </label>
                        <input type="range" min={2} max={200} step={2} value={height}
                            onChange={e => setHeight(Number(e.target.value))}
                            className="w-full accent-amber-500 h-2 rounded-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>2 m</span><span>200 m</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Velocidad de descenso
                            <span className="ml-2 text-2xl font-bold" style={{ color: results.rateColor }}>
                                {descentRate} m/min
                            </span>
                            <span className="ml-1 text-sm font-normal" style={{ color: results.rateColor }}>
                                ({results.rateLabel})
                            </span>
                        </label>
                        <input type="range" min={1} max={30} step={1} value={descentRate}
                            onChange={e => setDescentRate(Number(e.target.value))}
                            className="w-full h-2 rounded-full"
                            style={{ accentColor: results.rateColor }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>1 m/min</span><span>15 m/min óptimo</span><span>30 m/min</span>
                        </div>
                    </div>
                </div>

                {/* Gauges */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 mb-1">Vel. descenso</p>
                        <GaugeSVG value={descentRate} min={1} max={30} label={`${descentRate} m/m`} color={results.rateColor} />
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 mb-1">Fuerza freno</p>
                        <GaugeSVG value={results.brakingForce} min={30} max={250} label={`${results.brakingForce.toFixed(0)} kg`} color="#f59e0b" />
                    </div>
                </div>
            </div>

            {/* Result grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { label: 'Fuerza de freno', value: `${results.brakingForce.toFixed(0)} kg`, icon: '🛑' },
                    { label: 'Tiempo estimado', value: results.timeSec < 60 ? `${results.timeSec.toFixed(0)}s` : `${results.timeMin.toFixed(1)} min`, icon: '⏱️' },
                    { label: 'Cuerda necesaria', value: `${results.ropeNeeded.toFixed(1)} m`, icon: '🔗' },
                    { label: 'Energía potencial', value: `${results.kineticEnergy.toFixed(2)} kJ`, icon: '⚡' },
                ].map(r => (
                    <div key={r.label} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-center">
                        <p className="text-xl mb-1">{r.icon}</p>
                        <p className="text-lg font-bold text-gray-800">{r.value}</p>
                        <p className="text-xs text-gray-500">{r.label}</p>
                    </div>
                ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800">
                <p className="font-semibold mb-1">💡 Velocidades recomendadas NFPA 1006</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Bajada corta (&lt;15m):</strong> 5–8 m/min</li>
                    <li><strong>Bajada larga (&gt;15m):</strong> 8–15 m/min</li>
                    <li><strong>Evacuación de emergencia:</strong> hasta 20 m/min con dispositivo asegurado</li>
                </ul>
            </div>
        </div>
    );
}
