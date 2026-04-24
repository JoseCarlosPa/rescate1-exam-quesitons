import { useState, useMemo } from 'react';

// Fall factor gauge — arc meter 0 to 2
function FallFactorGauge({ factor }: { factor: number }) {
    const pct = Math.min(factor / 2, 1);
    const color = factor < 0.3 ? '#22c55e' : factor < 1.0 ? '#f59e0b' : '#ef4444';
    const cx = 100, cy = 100, r = 70;

    function arc(startDeg: number, endDeg: number, stroke: string) {
        const toRad = (d: number) => (d * Math.PI) / 180;
        const x1 = cx + Math.cos(toRad(startDeg)) * r;
        const y1 = cy + Math.sin(toRad(startDeg)) * r;
        const x2 = cx + Math.cos(toRad(endDeg)) * r;
        const y2 = cy + Math.sin(toRad(endDeg)) * r;
        const large = endDeg - startDeg > 180 ? 1 : 0;
        return (
            <path
                d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
                fill="none" stroke={stroke} strokeWidth="14" strokeLinecap="round"
            />
        );
    }

    // Needle
    const needleAngle = -150 + pct * 300;
    const rad = (needleAngle * Math.PI) / 180;
    const nx = cx + Math.cos(rad) * (r - 14);
    const ny = cy + Math.sin(rad) * (r - 14);

    // Zone boundaries (0-2 mapped to -150 to +150 deg)
    const zone1End = -150 + (0.3 / 2) * 300; // 0.3
    const zone2End = -150 + (1.0 / 2) * 300; // 1.0

    return (
        <svg viewBox="0 0 200 160" className="w-full max-w-[220px] mx-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            {arc(-150, 150, '#e5e7eb')}
            {/* Green zone 0–0.3 */}
            {arc(-150, zone1End, '#22c55e')}
            {/* Yellow zone 0.3–1.0 */}
            {arc(zone1End, zone2End, '#f59e0b')}
            {/* Red zone 1.0–2.0 */}
            {arc(zone2End, 150, '#ef4444')}
            {/* Needle */}
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#374151" strokeWidth="3" strokeLinecap="round" />
            <circle cx={cx} cy={cy} r={6} fill="#374151" />
            {/* Labels */}
            <text x={cx - 68} y={cy + 30} fontSize="9" fill="#22c55e" fontWeight="bold">0</text>
            <text x={cx} y={cy - 78} textAnchor="middle" fontSize="9" fill="#f59e0b" fontWeight="bold">1.0</text>
            <text x={cx + 57} y={cy + 30} fontSize="9" fill="#ef4444" fontWeight="bold">2</text>
            {/* Value display */}
            <text x={cx} y={cy + 26} textAnchor="middle" fontSize="20" fontWeight="bold" fill={color}>
                {factor.toFixed(2)}
            </text>
            <text x={cx} y={cy + 42} textAnchor="middle" fontSize="9" fill="#6b7280">Factor de Caída</text>
        </svg>
    );
}

const SCENARIOS = [
    { name: 'Repel controlado', ropePaidOut: 15, fallDist: 0.5, desc: 'Caída mínima en descenso controlado' },
    { name: 'Caída corta (primer clip)', ropePaidOut: 3, fallDist: 2, desc: 'Posición sobre el último punto de seguridad' },
    { name: 'Caída factor 1', ropePaidOut: 10, fallDist: 10, desc: 'Caída de longitud igual a la cuerda pagada' },
    { name: 'Caída factor 2 (peor caso)', ropePaidOut: 5, fallDist: 10, desc: 'Caída por encima del punto de anclaje' },
];

export default function FallFactorCalculator() {
    const [ropePaidOut, setRopePaidOut] = useState(10);
    const [fallDist, setFallDist] = useState(3);

    const results = useMemo(() => {
        const factor = Math.min(fallDist / Math.max(ropePaidOut, 0.1), 2);
        let label: string;
        let color: string;
        let description: string;
        let recommendation: string;

        if (factor < 0.3) {
            label = 'Bajo'; color = '#22c55e';
            description = 'Factor de caída mínimo. Sistema de cuerdas absorberá la energía con facilidad.';
            recommendation = 'Situación estándar de trabajo en cuerda.';
        } else if (factor < 1.0) {
            label = 'Moderado'; color = '#f59e0b';
            description = 'Factor de caída moderado. Se genera carga considerable en equipos y anclajes.';
            recommendation = 'Verificar integridad de anclajes tras el evento.';
        } else if (factor < 1.5) {
            label = 'Alto'; color = '#f97316';
            description = 'Factor de caída alto. Fuerzas de impacto significativas en todo el sistema.';
            recommendation = 'Inspeccionar todo el equipo y la cuerda antes de reusar.';
        } else {
            label = 'Crítico'; color = '#ef4444';
            description = 'Factor de caída crítico (cercano al máximo teórico de 2). Riesgo severo de fallo de equipos.';
            recommendation = '⚠️ Retirar TODA la cuerda y equipo de servicio para inspección certificada.';
        }

        const impactForce = Math.round(70 * 9.81 * (1 + Math.sqrt(1 + 2 * factor))); // approx kN
        return { factor, label, color, description, recommendation, impactForce };
    }, [ropePaidOut, fallDist]);

    const loadScenario = (s: typeof SCENARIOS[0]) => {
        setRopePaidOut(s.ropePaidOut);
        setFallDist(s.fallDist);
    };

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Controls */}
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cuerda pagada (longitud libre)
                            <span className="ml-2 text-2xl font-bold text-amber-600">{ropePaidOut} m</span>
                        </label>
                        <input type="range" min={1} max={100} step={1} value={ropePaidOut}
                            onChange={e => setRopePaidOut(Number(e.target.value))}
                            className="w-full accent-amber-500 h-2 rounded-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>1 m</span><span>100 m</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Distancia de caída
                            <span className="ml-2 text-2xl font-bold" style={{ color: results.color }}>
                                {fallDist} m
                            </span>
                        </label>
                        <input type="range" min={0} max={100} step={1} value={fallDist}
                            onChange={e => setFallDist(Number(e.target.value))}
                            className="w-full h-2 rounded-full"
                            style={{ accentColor: results.color }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>0 m</span><span>100 m</span>
                        </div>
                    </div>

                    {/* Status */}
                    <div
                        className="p-4 rounded-xl border-2 transition-all duration-300"
                        style={{ borderColor: results.color, backgroundColor: results.color + '14' }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: results.color }} />
                            <p className="font-bold text-gray-800">Factor {results.label}</p>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{results.description}</p>
                        <p className="text-xs font-semibold text-gray-700">{results.recommendation}</p>
                    </div>

                    <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <p className="text-xs text-gray-500">Fuerza de impacto estimada (persona 70 kg)</p>
                        <p className="text-xl font-bold text-gray-800">{(results.impactForce / 1000).toFixed(2)} kN</p>
                        <p className="text-xs text-gray-400">≈ {(results.impactForce / 9.81).toFixed(0)} kg equivalentes</p>
                    </div>
                </div>

                {/* Gauge */}
                <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Medidor de factor de caída</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full flex justify-center">
                        <FallFactorGauge factor={results.factor} />
                    </div>
                    <div className="flex gap-3 mt-3 text-xs">
                        {[['#22c55e', '0–0.3 Bajo'], ['#f59e0b', '0.3–1.0 Moderado'], ['#ef4444', '1.0–2.0 Crítico']].map(([c, l]) => (
                            <div key={l} className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                                <span className="text-gray-500">{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick scenarios */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Escenarios rápidos</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {SCENARIOS.map(s => (
                        <button
                            key={s.name}
                            onClick={() => loadScenario(s)}
                            className="text-left p-3 rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50 transition-all text-xs group"
                        >
                            <p className="font-semibold text-gray-700 group-hover:text-amber-700 mb-0.5">{s.name}</p>
                            <p className="text-gray-400">{s.desc}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                <p className="font-semibold mb-1">📐 Fórmula</p>
                <p>
                    Factor de Caída = Distancia de caída ÷ Longitud de cuerda pagada &nbsp;|&nbsp;
                    Rango: <strong>0</strong> (ideal) a <strong>2</strong> (máximo teórico)
                </p>
            </div>
        </div>
    );
}
