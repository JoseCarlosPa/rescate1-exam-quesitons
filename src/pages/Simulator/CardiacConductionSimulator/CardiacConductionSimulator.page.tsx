import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis } from 'recharts'
import { GiHeartOrgan } from 'react-icons/gi'
import { AllRoutes } from '../../../components/Router/Router.constants'
import { useCardiacConductionSimulator } from './CardiacConductionSimulator.hook'
import {
  ECG_SEGMENT_INFO,
  ZONE_INFO,
} from './CardiacConductionSimulator.constants'
import type {
  AnatomicalZone,
  AutonomicMode,
  ConductionPhase,
  HeartRatePreset,
  SpeedMultiplier,
} from './CardiacConductionSimulator.types'

// ─── Heart SVG ────────────────────────────────────────────────────────────────

interface HeartSVGProps {
  activeZones: AnatomicalZone[]
  phaseRatio: number
  atrialScale: number
  ventricularScale: number
  onZoneHover: (zone: AnatomicalZone | null) => void
  hoveredZone: AnatomicalZone | null
}

function HeartAnatomySVG({ activeZones, atrialScale, ventricularScale, onZoneHover, hoveredZone }: HeartSVGProps) {
  const isActive = (zone: AnatomicalZone) => activeZones.includes(zone) || hoveredZone === zone
  const zoneColor = (zone: AnatomicalZone): string => {
    if (!isActive(zone)) return '#334155'
    const phaseMap: Record<string, string> = {
      sa_node: '#60a5fa',
      right_atrium: '#60a5fa',
      left_atrium: '#60a5fa',
      av_node: '#a78bfa',
      his_bundle: '#34d399',
      right_bundle: '#34d399',
      left_bundle: '#34d399',
      purkinje: '#34d399',
      right_ventricle: '#f59e0b',
      left_ventricle: '#f59e0b',
    }
    return phaseMap[zone] ?? '#60a5fa'
  }
  const strokeColor = (zone: AnatomicalZone) => isActive(zone) ? zoneColor(zone) : '#475569'
  const fillColor = (zone: AnatomicalZone, base: string) => isActive(zone) ? zoneColor(zone) + '55' : base
  const glow = (zone: AnatomicalZone) => isActive(zone) ? `url(#glow-${zone})` : undefined

  return (
    <svg viewBox="0 0 320 380" className="w-full h-full" style={{ maxHeight: '340px' }}>
      <defs>
        {(Object.keys(ZONE_INFO) as AnatomicalZone[]).map(zone => (
          <filter key={zone} id={`glow-${zone}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {/* ── Aurículas ─────────────────────────────────────────────── */}
      {/* Aurícula derecha */}
      <g
        style={{
          transform: `translate(88px, 100px) scale(${atrialScale}) translate(-88px, -100px)`,
          transformOrigin: '88px 100px',
          cursor: 'pointer',
          transition: 'transform 0.08s ease-out',
        }}
        filter={glow('right_atrium')}
        onMouseEnter={() => onZoneHover('right_atrium')}
        onMouseLeave={() => onZoneHover(null)}
      >
        <path
          d="M 60 70 C 52 62, 46 72, 48 90 C 50 108, 60 122, 78 126 C 88 128, 96 122, 100 110 L 100 70 Z"
          fill={fillColor('right_atrium', '#1e293b')}
          stroke={strokeColor('right_atrium')}
          strokeWidth="1.5"
        />
        <text x="63" y="98" fontSize="7" fill={isActive('right_atrium') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">AD</text>
      </g>

      {/* Aurícula izquierda */}
      <g
        style={{
          transform: `translate(228px, 100px) scale(${atrialScale}) translate(-228px, -100px)`,
          cursor: 'pointer',
          transition: 'transform 0.08s ease-out',
        }}
        filter={glow('left_atrium')}
        onMouseEnter={() => onZoneHover('left_atrium')}
        onMouseLeave={() => onZoneHover(null)}
      >
        <path
          d="M 200 70 L 200 110 C 204 122, 212 128, 222 126 C 240 122, 250 108, 252 90 C 254 72, 248 62, 240 70 Z"
          fill={fillColor('left_atrium', '#1e293b')}
          stroke={strokeColor('left_atrium')}
          strokeWidth="1.5"
        />
        <text x="227" y="98" fontSize="7" fill={isActive('left_atrium') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">AI</text>
      </g>

      {/* Septo interauricular */}
      <rect x="98" y="72" width="104" height="56" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Válvulas (decorativas) */}
      <path d="M 100 125 L 160 130 L 220 125" stroke="#334155" strokeWidth="1" fill="none" />

      {/* ── Nodo SA ───────────────────────────────────────────────── */}
      <g
        filter={glow('sa_node')}
        onMouseEnter={() => onZoneHover('sa_node')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <circle cx="230" cy="60" r="9" fill={fillColor('sa_node', '#0f172a')} stroke={strokeColor('sa_node')} strokeWidth="2" />
        <text x="230" y="64" fontSize="6" fill={isActive('sa_node') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">SA</text>
      </g>
      {/* Línea SA → Atrio derecho */}
      <line x1="230" y1="69" x2="190" y2="72" stroke={isActive('sa_node') ? '#60a5fa44' : '#1e293b'} strokeWidth="1.5" strokeDasharray="3,2" />

      {/* ── Nodo AV ───────────────────────────────────────────────── */}
      <g
        filter={glow('av_node')}
        onMouseEnter={() => onZoneHover('av_node')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <circle cx="160" cy="152" r="10" fill={fillColor('av_node', '#0f172a')} stroke={strokeColor('av_node')} strokeWidth="2" />
        <text x="160" y="156" fontSize="6" fill={isActive('av_node') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">AV</text>
      </g>

      {/* ── Haz de His ────────────────────────────────────────────── */}
      <g
        filter={glow('his_bundle')}
        onMouseEnter={() => onZoneHover('his_bundle')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <line x1="160" y1="162" x2="160" y2="192" stroke={strokeColor('his_bundle')} strokeWidth="3" strokeLinecap="round" />
        <circle cx="160" cy="180" r="5" fill={fillColor('his_bundle', '#0f172a')} stroke={strokeColor('his_bundle')} strokeWidth="1.5" />
        <text x="170" y="183" fontSize="6" fill={isActive('his_bundle') ? '#e2e8f0' : '#64748b'} className="hidden sm:block">His</text>
      </g>

      {/* ── Rama Derecha ──────────────────────────────────────────── */}
      <g
        filter={glow('right_bundle')}
        onMouseEnter={() => onZoneHover('right_bundle')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <path d="M 158 192 C 140 200, 118 210, 108 240" stroke={strokeColor('right_bundle')} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="118" y="222" fontSize="6" fill={isActive('right_bundle') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">RD</text>
      </g>

      {/* ── Rama Izquierda ────────────────────────────────────────── */}
      <g
        filter={glow('left_bundle')}
        onMouseEnter={() => onZoneHover('left_bundle')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <path d="M 162 192 C 180 200, 202 210, 212 240" stroke={strokeColor('left_bundle')} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="202" y="222" fontSize="6" fill={isActive('left_bundle') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">RI</text>
      </g>

      {/* ── Fibras de Purkinje ────────────────────────────────────── */}
      <g
        filter={glow('purkinje')}
        onMouseEnter={() => onZoneHover('purkinje')}
        onMouseLeave={() => onZoneHover(null)}
        style={{ cursor: 'pointer' }}
      >
        {/* Red de Purkinje derecha */}
        <path d="M 108 240 C 96 252, 86 268, 90 284" stroke={strokeColor('purkinje')} strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
        <path d="M 108 240 C 104 256, 100 272, 106 286" stroke={strokeColor('purkinje')} strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
        {/* Red de Purkinje izquierda */}
        <path d="M 212 240 C 220 252, 228 268, 224 284" stroke={strokeColor('purkinje')} strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
        <path d="M 212 240 C 216 256, 220 272, 214 286" stroke={strokeColor('purkinje')} strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
        <text x="160" y="268" fontSize="6" fill={isActive('purkinje') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">Purkinje</text>
      </g>

      {/* ── Ventrículo Derecho ────────────────────────────────────── */}
      <g
        style={{
          transform: `translate(100px, 300px) scale(${ventricularScale}) translate(-100px, -300px)`,
          cursor: 'pointer',
          transition: 'transform 0.06s ease-out',
        }}
        filter={glow('right_ventricle')}
        onMouseEnter={() => onZoneHover('right_ventricle')}
        onMouseLeave={() => onZoneHover(null)}
      >
        <path
          d="M 66 220 C 54 230, 48 252, 52 276 C 56 298, 76 320, 100 330 L 140 290 L 140 220 Z"
          fill={fillColor('right_ventricle', '#1e293b')}
          stroke={strokeColor('right_ventricle')}
          strokeWidth="1.5"
        />
        <text x="84" y="278" fontSize="7" fill={isActive('right_ventricle') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">VD</text>
      </g>

      {/* ── Ventrículo Izquierdo ──────────────────────────────────── */}
      <g
        style={{
          transform: `translate(220px, 300px) scale(${ventricularScale}) translate(-220px, -300px)`,
          cursor: 'pointer',
          transition: 'transform 0.06s ease-out',
        }}
        filter={glow('left_ventricle')}
        onMouseEnter={() => onZoneHover('left_ventricle')}
        onMouseLeave={() => onZoneHover(null)}
      >
        <path
          d="M 180 220 L 180 290 L 220 330 C 244 320, 264 298, 268 276 C 272 252, 266 230, 254 220 Z"
          fill={fillColor('left_ventricle', '#1e293b')}
          stroke={strokeColor('left_ventricle')}
          strokeWidth="1.5"
        />
        <text x="224" y="278" fontSize="7" fill={isActive('left_ventricle') ? '#e2e8f0' : '#64748b'} textAnchor="middle" className="hidden sm:block">VI</text>
      </g>

      {/* Septo interventricular */}
      <rect x="138" y="220" width="44" height="112" rx="2" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Apex */}
      <path d="M 100 330 C 118 348, 142 358, 160 360 C 178 358, 202 348, 220 330" stroke="#334155" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="358" r="3" fill="#334155" />

      {/* Leyenda etiquetas laterales — solo desktop */}
      <text x="14" y="62" fontSize="7" fill="#64748b" className="hidden sm:block">Nodo SA →</text>
      <text x="14" y="156" fontSize="7" fill="#64748b" className="hidden sm:block">Nodo AV →</text>
      <text x="14" y="182" fontSize="7" fill="#64748b" className="hidden sm:block">Haz His →</text>
    </svg>
  )
}

// ─── ECG Strip ────────────────────────────────────────────────────────────────

function EcgStrip({ ecgBuffer, activeSegment }: { ecgBuffer: { t: number; v: number }[]; activeSegment: string | null }) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">ECG en tiempo real</span>
        <span className="text-xs text-slate-500">{activeSegment ? `Segmento: ${activeSegment}` : 'Pausado'}</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={ecgBuffer} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <YAxis domain={[-0.3, 1.2]} hide />
          <XAxis dataKey="t" hide />
          <Line
            type="monotone"
            dataKey="v"
            stroke="#22c55e"
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* Leyenda PQRST */}
      <div className="flex gap-1 mt-2 flex-wrap">
        {Object.values(ECG_SEGMENT_INFO).map(seg => (
          <span
            key={seg.label}
            className={`px-2 py-0.5 rounded text-xs font-bold transition-all duration-150 ${
              activeSegment === seg.label ? 'ring-2 ring-white scale-110' : 'opacity-50'
            }`}
            style={{ backgroundColor: seg.color + '33', color: seg.color, borderColor: seg.color }}
          >
            {seg.label}
          </span>
        ))}
      </div>
      {/* Correlación del segmento activo */}
      <AnimatePresence mode="wait">
        {activeSegment && ECG_SEGMENT_INFO[activeSegment as keyof typeof ECG_SEGMENT_INFO] && (
          <motion.p
            key={activeSegment}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-slate-400 mt-1.5 italic"
          >
            {ECG_SEGMENT_INFO[activeSegment as keyof typeof ECG_SEGMENT_INFO].anatomicalEvent}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Controls Panel ───────────────────────────────────────────────────────────

interface ControlsPanelProps {
  playback: string
  onPlay: () => void
  onPause: () => void
  onStep: () => void
  onReset: () => void
  speed: SpeedMultiplier
  onSpeedChange: (s: SpeedMultiplier) => void
  heartRatePreset: HeartRatePreset
  onHeartRatePreset: (p: HeartRatePreset) => void
  autonomicMode: AutonomicMode
  onAutonomicMode: (m: AutonomicMode) => void
  params: { heartRateBpm: number; prIntervalMs: number; qrsDurationMs: number; qtIntervalMs: number; rrIntervalMs: number }
  onUpdateParam: (key: 'heartRateBpm' | 'prIntervalMs' | 'qrsDurationMs' | 'qtIntervalMs' | 'rrIntervalMs', value: number) => void
  cycleCount: number
  currentPhase: ConductionPhase
}

const SPEED_OPTIONS: SpeedMultiplier[] = [0.25, 0.5, 1, 2]
const HR_PRESETS: { key: HeartRatePreset; label: string; bpm: string }[] = [
  { key: 'bradycardia', label: 'Bradicardia', bpm: '40 lpm' },
  { key: 'normal', label: 'Normal', bpm: '75 lpm' },
  { key: 'tachycardia', label: 'Taquicardia', bpm: '130 lpm' },
]

const PHASE_LABELS: Partial<Record<ConductionPhase, string>> = {
  IDLE: 'Reposo',
  SA_FIRE: 'Nodo SA',
  ATRIAL_DEPOL: 'Desp. Auricular',
  AV_DELAY: 'Retardo AV',
  HIS_BUNDLE: 'Haz de His',
  BUNDLE_BRANCHES: 'Ramas del Haz',
  PURKINJE: 'Purkinje',
  VENTRICULAR_DEPOL: 'Desp. Ventricular',
  PLATEAU: 'Meseta (ST)',
  VENTRICULAR_REPOL: 'Repol. Ventricular',
  DIASTOLE: 'Diástole',
}

function ControlsPanel({
  playback, onPlay, onPause, onStep, onReset, speed, onSpeedChange,
  heartRatePreset, onHeartRatePreset, autonomicMode, onAutonomicMode,
  params, onUpdateParam, cycleCount, currentPhase,
}: ControlsPanelProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 h-full">
      {/* Fase actual */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Fase:</span>
        <span className="text-sm font-semibold text-emerald-400">{PHASE_LABELS[currentPhase] ?? currentPhase}</span>
        <span className="ml-auto text-xs text-slate-600">Ciclo #{cycleCount}</span>
      </div>

      {/* Transporte */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Reproducción</p>
        <div className="flex gap-2">
          <button
            onClick={playback === 'playing' ? onPause : onPlay}
            className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
          >
            {playback === 'playing' ? '⏸ Pausar' : '▶ Play'}
          </button>
          <button
            onClick={onStep}
            disabled={playback === 'playing'}
            className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-white text-sm transition-colors"
            title="Avanzar una fase"
          >
            →
          </button>
          <button
            onClick={onReset}
            className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
            title="Reiniciar"
          >
            ↺
          </button>
        </div>
      </div>

      {/* Velocidad */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Velocidad</p>
        <div className="flex gap-1">
          {SPEED_OPTIONS.map(s => (
            <button
              key={s}
              onClick={() => onSpeedChange(s)}
              className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
                speed === s ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
              }`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {/* Frecuencia cardíaca */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Frecuencia Cardíaca</p>
        <div className="flex flex-col gap-1">
          {HR_PRESETS.map(p => (
            <button
              key={p.key}
              onClick={() => onHeartRatePreset(p.key)}
              className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex justify-between transition-colors ${
                heartRatePreset === p.key
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
              }`}
            >
              <span>{p.label}</span>
              <span className="opacity-70">{p.bpm}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sistema autónomo */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Sistema Autónomo</p>
        <div className="flex gap-2">
          <button
            onClick={() => onAutonomicMode(autonomicMode === 'sympathetic' ? 'none' : 'sympathetic')}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-colors ${
              autonomicMode === 'sympathetic'
                ? 'bg-red-700 text-white ring-2 ring-red-400'
                : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
            }`}
          >
            ↑ Simpático
          </button>
          <button
            onClick={() => onAutonomicMode(autonomicMode === 'parasympathetic' ? 'none' : 'parasympathetic')}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-colors ${
              autonomicMode === 'parasympathetic'
                ? 'bg-blue-700 text-white ring-2 ring-blue-400'
                : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
            }`}
          >
            ↓ Parasimpático
          </button>
        </div>
      </div>

      {/* Parámetros editables */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Parámetros</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'heartRateBpm' as const, label: 'FC (lpm)', min: 20, max: 200 },
            { key: 'prIntervalMs' as const, label: 'PR (ms)', min: 80, max: 320 },
            { key: 'qrsDurationMs' as const, label: 'QRS (ms)', min: 40, max: 200 },
            { key: 'rrIntervalMs' as const, label: 'RR (ms)', min: 300, max: 2500 },
          ].map(field => (
            <div key={field.key} className="flex flex-col gap-0.5">
              <label className="text-[10px] text-slate-500">{field.label}</label>
              <input
                type="number"
                value={params[field.key]}
                min={field.min}
                max={field.max}
                onChange={e => onUpdateParam(field.key, Number(e.target.value))}
                className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-white w-full focus:outline-none focus:border-emerald-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Página principal ──────────────────────────────────────────────────────────

export default function CardiacConductionSimulator() {
  const navigate = useNavigate()
  const sim = useCardiacConductionSimulator()

  const resolvedPhaseRatio = (() => {
    let acc = 0
    for (const def of ([] as { phase: string; baseDurationMs: number }[])) {
      void def; void acc
    }
    return 0.5
  })()
  void resolvedPhaseRatio

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
        <GiHeartOrgan className="text-emerald-400 text-3xl flex-shrink-0" />
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white leading-tight">Fisiología y Conducción Cardíaca</h1>
          <p className="text-xs text-slate-400">Sistema de conducción eléctrica · Acoplamiento electromecánico</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={sim.currentPhase}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700 hidden sm:block"
          >
            {PHASE_LABELS[sim.currentPhase] ?? sim.currentPhase}
          </motion.span>
        </AnimatePresence>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-700 text-slate-300">
          {sim.params.heartRateBpm} lpm
        </span>
      </header>

      <main className="flex-1 flex flex-col xl:grid xl:grid-cols-[340px_1fr_300px] gap-4 p-4 min-h-0 overflow-auto">
        {/* Columna izquierda: SVG anatómico */}
        <section className="flex flex-col gap-4">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-3 flex-1 flex items-center justify-center">
            <HeartAnatomySVG
              activeZones={sim.activeZones}
              phaseRatio={0.5}
              atrialScale={sim.contractility.atrial}
              ventricularScale={sim.contractility.ventricular}
              onZoneHover={sim.setHoveredZone}
              hoveredZone={sim.hoveredZone}
            />
          </div>
        </section>

        {/* Columna central: ECG + Info panel */}
        <section className="flex flex-col gap-4">
          <EcgStrip ecgBuffer={sim.ecgBuffer} activeSegment={sim.activeSegment} />

          {/* Info panel de zona */}
          <AnimatePresence mode="wait">
            {sim.infoZoneData && (
              <motion.div
                key={sim.infoZone}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                  <h3 className="text-base font-bold text-white">{sim.infoZoneData.label}</h3>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-semibold ${
                    sim.infoZoneData.actionPotentialType === 'fast'
                      ? 'bg-emerald-900/50 text-emerald-300'
                      : sim.infoZoneData.actionPotentialType === 'slow'
                        ? 'bg-violet-900/50 text-violet-300'
                        : 'bg-slate-700 text-slate-400'
                  }`}>
                    PA {sim.infoZoneData.actionPotentialType === 'fast' ? 'rápido' : sim.infoZoneData.actionPotentialType === 'slow' ? 'lento' : 'n/a'}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{sim.infoZoneData.description}</p>
                <div className="bg-amber-900/20 border border-amber-700/40 rounded-lg p-3">
                  <p className="text-xs text-amber-400 font-semibold mb-1">Relevancia clínica</p>
                  <p className="text-xs text-amber-200 leading-relaxed">{sim.infoZoneData.clinicalRelevance}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Leyenda de correlación ECG */}
          {!sim.infoZoneData && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Correlación ECG — Anatomía</p>
              <div className="flex flex-col gap-2">
                {Object.values(ECG_SEGMENT_INFO).map(seg => (
                  <div key={seg.label} className="flex items-center gap-3">
                    <span className="w-8 text-xs font-bold text-center py-0.5 rounded" style={{ backgroundColor: seg.color + '33', color: seg.color }}>
                      {seg.label}
                    </span>
                    <span className="text-xs text-slate-400">{seg.anatomicalEvent}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-3 italic">Pasa el cursor sobre las estructuras cardíacas para ver más información.</p>
            </div>
          )}
        </section>

        {/* Columna derecha: Controles */}
        <section>
          <ControlsPanel
            playback={sim.playback}
            onPlay={sim.play}
            onPause={sim.pause}
            onStep={sim.stepForward}
            onReset={sim.reset}
            speed={sim.speed}
            onSpeedChange={sim.setSpeed}
            heartRatePreset={sim.heartRatePreset}
            onHeartRatePreset={sim.setHeartRatePreset}
            autonomicMode={sim.autonomicMode}
            onAutonomicMode={sim.setAutonomicMode}
            params={sim.params}
            onUpdateParam={sim.updateParam}
            cycleCount={sim.cycleCount}
            currentPhase={sim.currentPhase}
          />
        </section>
      </main>
    </div>
  )
}
