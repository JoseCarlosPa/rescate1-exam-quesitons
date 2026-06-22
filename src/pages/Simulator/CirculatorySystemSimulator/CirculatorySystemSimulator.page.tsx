import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import {
  AreaChart, Area, ResponsiveContainer, YAxis, XAxis, ReferenceLine, Tooltip,
} from 'recharts'
import { MdBloodtype } from 'react-icons/md'
import { AllRoutes } from '../../../components/Router/Router.constants'
import { useCirculatorySystemSimulator } from './CirculatorySystemSimulator.hook'
import {
  COMPENSATION_LABELS,
  INTERVENTION_EFFECTS,
  SHOCK_DEFINITIONS,
} from './CirculatorySystemSimulator.constants'
import type {
  CompensationState,
  Intervention,
  ShockType,
} from './CirculatorySystemSimulator.types'

// ─── Diagrama SVG del sistema circulatorio ────────────────────────────────────

interface CirculationSVGProps {
  shockType: ShockType
  svo2: number
  map: number
  co: number
  compensationState: CompensationState
  isRunning: boolean
}

function CirculationSVG({ shockType, map, co, compensationState, isRunning }: CirculationSVGProps) {
  const def = SHOCK_DEFINITIONS[shockType]
  const isCritical = compensationState === 'decompensated' || compensationState === 'irreversible'
  const isLowFlow = co < 3.0
  const heartColor = isCritical ? '#ef4444' : isRunning ? def.color : '#475569'
  const vesselColor = shockType === 'distributive_septic' || shockType === 'distributive_anaphylactic' || shockType === 'neurogenic'
    ? '#60a5fa'  // vasodilatación → azul
    : shockType === 'hypovolemic' || shockType === 'cardiogenic' || shockType === 'obstructive'
      ? '#f87171'  // vasoconstricción → rojo
      : '#94a3b8'  // normal → gris

  const flowOpacity = isRunning ? Math.min(1, co / 5) : 0.2
  const heartScale = isRunning ? 1 + Math.sin(Date.now() / 200) * 0.02 : 1
  void heartScale

  return (
    <svg viewBox="0 0 300 340" className="w-full" style={{ maxHeight: '300px' }}>
      <defs>
        <filter id="glow-heart" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="arrow-right" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill={vesselColor} opacity={flowOpacity} />
        </marker>
        <marker id="arrow-left" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#60a5fa" opacity={flowOpacity} />
        </marker>
      </defs>

      {/* ── Corazón central ─────────────────────────────────── */}
      <g filter={isRunning ? 'url(#glow-heart)' : undefined}>
        {/* Silueta del corazón */}
        <path
          d="M 150 90 C 150 70, 130 55, 115 60 C 95 65, 88 88, 100 105 L 150 155 L 200 105 C 212 88, 205 65, 185 60 C 170 55, 150 70, 150 90 Z"
          fill={heartColor + '33'}
          stroke={heartColor}
          strokeWidth="2"
        />
        <text x="150" y="115" fontSize="9" fill={heartColor} textAnchor="middle" fontWeight="bold">
          {isRunning ? `${Math.round(co * 10) / 10} L/min` : 'Corazón'}
        </text>
        <text x="150" y="127" fontSize="8" fill={heartColor + 'bb'} textAnchor="middle">GC</text>
      </g>

      {/* ── Aorta y circulación sistémica ───────────────────── */}
      {/* Aorta ascendente */}
      <line x1="150" y1="155" x2="150" y2="190" stroke={vesselColor} strokeWidth="5" strokeLinecap="round" opacity={flowOpacity + 0.2} />
      {/* Arco aórtico → izquierda */}
      <path d="M 150 190 C 150 210, 80 210, 60 200" stroke={vesselColor} strokeWidth="4" fill="none"
        strokeLinecap="round" opacity={flowOpacity + 0.2} markerEnd="url(#arrow-right)" />
      {/* Aorta descendente → derecha */}
      <path d="M 150 190 C 150 210, 220 210, 240 200" stroke={vesselColor} strokeWidth="4" fill="none"
        strokeLinecap="round" opacity={flowOpacity + 0.2} markerEnd="url(#arrow-right)" />

      {/* ── Capilares / lecho periférico ─────────────────────── */}
      {/* Izquierda */}
      <rect x="30" y="185" width="36" height="30" rx="8"
        fill={vesselColor + '22'} stroke={vesselColor} strokeWidth="1.5" opacity={flowOpacity + 0.3} />
      <text x="48" y="203" fontSize="7" fill={vesselColor} textAnchor="middle">Tejidos</text>
      {/* Derecha */}
      <rect x="234" y="185" width="36" height="30" rx="8"
        fill={vesselColor + '22'} stroke={vesselColor} strokeWidth="1.5" opacity={flowOpacity + 0.3} />
      <text x="252" y="203" fontSize="7" fill={vesselColor} textAnchor="middle">Tejidos</text>

      {/* Retorno venoso → corazón */}
      <path d="M 48 215 C 48 240, 110 252, 130 240" stroke="#60a5fa" strokeWidth="3.5" fill="none"
        strokeLinecap="round" opacity={flowOpacity + 0.2} markerEnd="url(#arrow-left)" />
      <path d="M 252 215 C 252 240, 190 252, 170 240" stroke="#60a5fa" strokeWidth="3.5" fill="none"
        strokeLinecap="round" opacity={flowOpacity + 0.2} markerEnd="url(#arrow-left)" />

      {/* Venas cavas */}
      <path d="M 130 240 C 130 255, 140 262, 150 262" stroke="#60a5fa" strokeWidth="4" fill="none" strokeLinecap="round" opacity={flowOpacity + 0.2} />
      <path d="M 170 240 C 170 255, 160 262, 150 262" stroke="#60a5fa" strokeWidth="4" fill="none" strokeLinecap="round" opacity={flowOpacity + 0.2} />
      <line x1="150" y1="262" x2="150" y2="280" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round" opacity={flowOpacity + 0.2} />
      <text x="110" y="276" fontSize="7" fill="#60a5fa" textAnchor="middle" opacity={0.7}>Retorno venoso</text>

      {/* ── Circulación pulmonar ─────────────────────────────── */}
      {/* Arteria pulmonar */}
      <path d="M 145 82 C 130 65, 100 55, 80 60" stroke="#94a3b8" strokeWidth="3" fill="none"
        strokeLinecap="round" opacity={0.5} markerEnd="url(#arrow-right)" />
      {/* Pulmones */}
      <ellipse cx="65" cy="52" rx="18" ry="14"
        fill={isLowFlow ? '#374151' : '#1d4ed8' + '44'} stroke={isLowFlow ? '#475569' : '#60a5fa'} strokeWidth="1.5" />
      <text x="65" y="55" fontSize="7" fill={isLowFlow ? '#64748b' : '#93c5fd'} textAnchor="middle">Pulmones</text>
      {/* Venas pulmonares */}
      <path d="M 80 45 C 100 35, 130 42, 145 58" stroke="#60a5fa" strokeWidth="3" fill="none"
        strokeLinecap="round" opacity={0.6} markerEnd="url(#arrow-right)" />

      {/* ── PAM display ─────────────────────────────────────── */}
      <rect x="178" y="55" width="68" height="38" rx="8" fill="#0f172a" stroke={isCritical ? '#ef4444' : '#334155'} strokeWidth="1.5" />
      <text x="212" y="70" fontSize="7" fill="#94a3b8" textAnchor="middle" fontWeight="500">PAM</text>
      <text x="212" y="85" fontSize="14" fill={isCritical ? '#ef4444' : '#e2e8f0'} textAnchor="middle" fontWeight="bold">{map}</text>
      <text x="212" y="91" fontSize="6" fill="#64748b" textAnchor="middle">mmHg</text>

      {/* ── Etiqueta SVR ────────────────────────────────────── */}
      <text x="150" y="322" fontSize="7" fill="#64748b" textAnchor="middle">
        Circulación sistémica · {SHOCK_DEFINITIONS[shockType].label}
      </text>
    </svg>
  )
}

// ─── Gauge de presión ────────────────────────────────────────────────────────

function MapGauge({ map, systolic, diastolic }: { map: number; systolic: number; diastolic: number }) {
  const angle = Math.min(180, Math.max(0, (map / 130) * 180))
  const color = map < 50 ? '#dc2626' : map < 65 ? '#f97316' : map > 105 ? '#f59e0b' : '#22c55e'
  const r = 54
  const cx = 70, cy = 72
  const rad = (a: number) => (a - 180) * (Math.PI / 180)
  const x = cx + r * Math.cos(rad(angle))
  const y = cy + r * Math.sin(rad(angle))

  return (
    <svg viewBox="0 0 140 85" className="w-full" style={{ maxHeight: '80px' }}>
      {/* Arco de fondo */}
      <path d="M 16 72 A 54 54 0 0 1 124 72" stroke="#1e293b" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Zonas de color */}
      <path d="M 16 72 A 54 54 0 0 1 40 28" stroke="#ef4444" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M 40 28 A 54 54 0 0 1 70 18" stroke="#f97316" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M 70 18 A 54 54 0 0 1 108 30" stroke="#22c55e" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M 108 30 A 54 54 0 0 1 124 72" stroke="#f59e0b" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Aguja */}
      <line x1={cx} y1={cy} x2={x} y2={y} stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4" fill={color} />
      {/* Valores */}
      <text x={cx} y={cy - 10} fontSize="14" fill={color} textAnchor="middle" fontWeight="bold">{map}</text>
      <text x={cx} y={cy - 2} fontSize="6" fill="#64748b" textAnchor="middle">PAM mmHg</text>
      <text x={cx} y={cy + 12} fontSize="7" fill="#94a3b8" textAnchor="middle">{systolic}/{diastolic}</text>
    </svg>
  )
}

// ─── Panel de métricas ───────────────────────────────────────────────────────

function MetricCard({ label, value, unit, color = '#94a3b8', critical = false }: {
  label: string; value: string | number; unit: string; color?: string; critical?: boolean
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 rounded-lg border ${critical ? 'border-red-600 bg-red-900/20' : 'border-slate-700 bg-slate-800/60'}`}>
      <span className="text-[9px] uppercase tracking-widest text-slate-500 leading-none mb-0.5">{label}</span>
      <span className={`text-lg font-bold font-mono leading-none ${critical ? 'text-red-400 animate-pulse' : ''}`} style={{ color: critical ? undefined : color }}>{value}</span>
      <span className="text-[9px] text-slate-600 leading-none mt-0.5">{unit}</span>
    </div>
  )
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function CirculatorySystemSimulator() {
  const navigate = useNavigate()
  const sim = useCirculatorySystemSimulator()
  const compInfo = COMPENSATION_LABELS[sim.compensationState]
  const shockDef = SHOCK_DEFINITIONS[sim.shockType]

  const SHOCK_TYPES: ShockType[] = ['none', 'hypovolemic', 'cardiogenic', 'distributive_septic', 'distributive_anaphylactic', 'neurogenic', 'obstructive']
  const INTERVENTIONS: Exclude<Intervention, 'none'>[] = ['fluid_bolus', 'vasopressor', 'inotrope', 'oxygen', 'epinephrine', 'tourniquet']

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => navigate(AllRoutes.SIMULATOR)}
          className="text-sm text-slate-400 hover:text-white flex items-center gap-1 mr-2 transition-colors"
        >
          ← Simuladores
        </button>
        <MdBloodtype className="text-amber-400 text-3xl flex-shrink-0" />
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white leading-tight">Sistema Circulatorio y Hemodinámica</h1>
          <p className="text-xs text-slate-400">Gasto cardíaco · Presión arterial · Estados de shock</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={sim.compensationState}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs font-bold px-3 py-1 rounded-full border hidden sm:block"
            style={{ color: compInfo.color, borderColor: compInfo.color + '55', backgroundColor: compInfo.color + '22' }}
          >
            {compInfo.label}
          </motion.span>
        </AnimatePresence>
        <button
          onClick={() => sim.setIsRunning(!sim.isRunning)}
          className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-colors ${sim.isRunning ? 'bg-amber-700 text-white hover:bg-amber-600' : 'bg-emerald-700 text-white hover:bg-emerald-600'}`}
        >
          {sim.isRunning ? '⏸ Pausar' : '▶ Iniciar'}
        </button>
        <button
          onClick={sim.reset}
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
        >
          ↺ Reset
        </button>
      </header>

      <main className="flex-1 grid xl:grid-cols-[320px_1fr_300px] gap-4 p-4 overflow-auto">

        {/* ── Columna izquierda: Diagrama SVG + PAM gauge ── */}
        <section className="flex flex-col gap-4">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-3">
            <CirculationSVG
              shockType={sim.shockType}
              svo2={sim.params.spo2}
              map={sim.derived.meanArterialPressureMmhg}
              co={sim.derived.cardiacOutputLpm}
              compensationState={sim.compensationState}
              isRunning={sim.isRunning}
            />
          </div>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 text-center">Presión Arterial Media</p>
            <MapGauge
              map={sim.derived.meanArterialPressureMmhg}
              systolic={sim.derived.systolicBpMmhg}
              diastolic={sim.derived.diastolicBpMmhg}
            />
          </div>
        </section>

        {/* ── Columna central: métricas + gráfico + info ── */}
        <section className="flex flex-col gap-4">
          {/* Métricas principales */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            <MetricCard label="FC" value={sim.params.heartRateBpm} unit="lpm"
              color={sim.params.heartRateBpm > 100 ? '#fbbf24' : '#34d399'}
              critical={sim.params.heartRateBpm > 140 || sim.params.heartRateBpm < 40} />
            <MetricCard label="GC" value={sim.derived.cardiacOutputLpm} unit="L/min"
              color={sim.derived.cardiacOutputLpm < 3 ? '#f87171' : '#34d399'}
              critical={sim.derived.cardiacOutputLpm < 2} />
            <MetricCard label="VS" value={sim.derived.strokeVolumeMl} unit="mL"
              color={sim.derived.strokeVolumeMl < 40 ? '#f87171' : '#94a3b8'} />
            <MetricCard label="SVR" value={sim.params.svr} unit="dyn"
              color={sim.params.svr < 600 ? '#60a5fa' : sim.params.svr > 1500 ? '#f97316' : '#94a3b8'} />
            <MetricCard label="SpO2" value={sim.params.spo2} unit="%"
              color={sim.params.spo2 < 90 ? '#f87171' : '#34d399'}
              critical={sim.params.spo2 < 85} />
            <MetricCard label="PVC" value={sim.params.centralVenousPressureMmhg} unit="mmHg"
              color={sim.params.centralVenousPressureMmhg < 3 ? '#60a5fa' : sim.params.centralVenousPressureMmhg > 14 ? '#f87171' : '#94a3b8'} />
          </div>

          {/* Gráfico de presión aórtica en tiempo real */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Presión Aórtica</span>
              <span className="text-xs font-bold" style={{ color: shockDef.color }}>
                {shockDef.icon} {shockDef.label}
              </span>
            </div>
            <ResponsiveContainer width="100%" height={110}>
              <AreaChart data={sim.pressureBuffer} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="pressureGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={shockDef.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={shockDef.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis domain={[30, 180]} hide />
                <XAxis dataKey="t" hide />
                <ReferenceLine y={65} stroke="#f87171" strokeDasharray="3 3" strokeWidth={1} />
                <ReferenceLine y={90} stroke="#34d399" strokeDasharray="3 3" strokeWidth={1} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', fontSize: '11px' }}
                  formatter={(value) => [`${Math.round(Number(value ?? 0))} mmHg`, 'Presión']}
                  labelFormatter={() => ''}
                />
                <Area
                  type="monotone"
                  dataKey="pressure"
                  stroke={shockDef.color}
                  strokeWidth={1.5}
                  fill="url(#pressureGrad)"
                  dot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-1">
              <span className="text-[9px] text-red-400 flex items-center gap-1"><span className="w-4 border-b border-dashed border-red-400" /> PAM mín 65</span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-1"><span className="w-4 border-b border-dashed border-emerald-400" /> PAM óptima 90</span>
            </div>
          </div>

          {/* Reflejos compensatorios */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-3">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Reflejos Compensatorios</p>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'tachycardiaActive', label: 'Taquicardia refleja', icon: '❤️' },
                { key: 'vasoconstrictionActive', label: 'Vasoconstricción periférica', icon: '🩸' },
                { key: 'renalRetentionActive', label: 'Retención renal (RAA)', icon: '🫘' },
                { key: 'respiratoryCompensationActive', label: 'Compensación resp.', icon: '🫁' },
              ].map(r => (
                <span key={r.key} className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all ${
                  sim.reflexes[r.key as keyof typeof sim.reflexes]
                    ? 'border-amber-500 bg-amber-900/30 text-amber-300'
                    : 'border-slate-700 bg-slate-800 text-slate-600'
                }`}>
                  {r.icon} {r.label}
                </span>
              ))}
            </div>
          </div>

          {/* Info del tipo de shock */}
          <AnimatePresence mode="wait">
            {sim.shockType !== 'none' && (
              <motion.div
                key={sim.shockType}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-slate-800 rounded-xl border p-4"
                style={{ borderColor: shockDef.color + '44' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{shockDef.icon}</span>
                  <h3 className="font-bold text-white">{shockDef.label}</h3>
                  <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: shockDef.color + '33', color: shockDef.color }}>
                    Índice de shock: {sim.derived.shockIndex}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-2">{shockDef.description}</p>
                <div className="bg-amber-900/20 border border-amber-700/40 rounded-lg p-2.5">
                  <p className="text-xs text-amber-400 font-semibold mb-1">Notas clínicas</p>
                  <p className="text-xs text-amber-200 leading-relaxed">{shockDef.clinicalNotes}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── Columna derecha: controles ── */}
        <section className="flex flex-col gap-4">
          {/* Selector de estado clínico */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Estado Clínico</p>
            <div className="flex flex-col gap-1.5">
              {SHOCK_TYPES.map(type => {
                const d = SHOCK_DEFINITIONS[type]
                return (
                  <button
                    key={type}
                    onClick={() => sim.setShockType(type)}
                    className={`flex items-center gap-2 w-full py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      sim.shockType === type
                        ? 'ring-2 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                    }`}
                    style={sim.shockType === type ? { backgroundColor: d.color + '33', boxShadow: `0 0 0 2px ${d.color}`, color: d.color } : undefined}
                  >
                    <span>{d.icon}</span>
                    <span className="flex-1 text-left">{d.label}</span>
                    {sim.shockType === type && <span className="text-[10px] opacity-70">Activo</span>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Intervenciones */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Intervenciones</p>
            <div className="flex flex-col gap-1.5">
              {INTERVENTIONS.map(key => {
                const fx = INTERVENTION_EFFECTS[key]
                return (
                  <button
                    key={key}
                    onClick={() => sim.applyIntervention(key)}
                    className="flex items-center gap-2 w-full py-2 px-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-medium text-slate-300 hover:text-white transition-colors text-left"
                  >
                    <span className="flex-1">{fx.label}</span>
                    <span className="text-[9px] text-slate-500 truncate max-w-[80px]">{fx.description.split('.')[0]}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controles manuales de parámetros */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Ajuste Manual</p>
            <div className="flex flex-col gap-3">
              {[
                { key: 'heartRateBpm' as const, label: 'FC (lpm)', min: 20, max: 220, step: 5 },
                { key: 'svr' as const, label: 'SVR (dyn)', min: 100, max: 2500, step: 50 },
                { key: 'ejectionFraction' as const, label: 'FE (fracción)', min: 0.08, max: 0.85, step: 0.01 },
                { key: 'totalBloodVolumeMl' as const, label: 'Volemia (mL)', min: 500, max: 7000, step: 100 },
              ].map(f => (
                <div key={f.key}>
                  <div className="flex justify-between mb-1">
                    <label className="text-[10px] text-slate-500">{f.label}</label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {f.key === 'ejectionFraction' ? (sim.params[f.key] * 100).toFixed(0) + '%' : sim.params[f.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    value={sim.params[f.key]}
                    onChange={e => sim.updateParam(f.key, Number(e.target.value))}
                    className="w-full accent-amber-500 h-1.5 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Log de intervenciones */}
          {sim.interventionLog.length > 0 && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-3">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Historial</p>
              <div className="flex flex-col gap-1">
                {sim.interventionLog.slice(0, 5).map((entry, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {entry.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
