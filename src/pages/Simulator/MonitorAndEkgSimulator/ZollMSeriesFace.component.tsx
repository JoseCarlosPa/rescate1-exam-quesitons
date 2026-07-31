import { useCallback, useRef, useState } from 'react';
import type useMonitorSimulator from './MonitorAndEkgSimulator.hook';
import { LEAD_OPTIONS, ALARM_THRESHOLDS } from './MonitorAndEkgSimulator.constants';
import type { LeadType } from './MonitorAndEkgSimulator.types';

type SimApi = ReturnType<typeof useMonitorSimulator>;

interface ZollMSeriesFaceProps {
    sim: SimApi;
    /** Abre el reporte de 12 derivaciones (controlado por la página). */
    onGenerateTwelveLead?: () => void;
    /** ID de paciente mostrado en la ventana ID#. */
    patientId?: string;
}

// ──────────────────────────────────────────────
// Perilla rotatoria funcional (arrastre + rueda)
// ──────────────────────────────────────────────
interface RotaryKnobProps {
    label: string;
    unit: string;
    value: number;
    min: number;
    max: number;
    step: number;
    color: string;
    onIncrease: () => void;
    onDecrease: () => void;
    disabled?: boolean;
}

// Rango angular útil de la perilla: -135° (min) a +135° (max)
const KNOB_MIN_ANGLE = -135;
const KNOB_MAX_ANGLE = 135;

function RotaryKnob({ label, unit, value, min, max, step, color, onIncrease, onDecrease, disabled }: RotaryKnobProps) {
    const knobRef = useRef<HTMLDivElement | null>(null);
    const lastAngleRef = useRef<number | null>(null);
    const moveHandlerRef = useRef<((e: PointerEvent) => void) | null>(null);
    const upHandlerRef = useRef<(() => void) | null>(null);
    const [dragging, setDragging] = useState(false);

    const ratio = max > min ? (value - min) / (max - min) : 0;
    const angle = KNOB_MIN_ANGLE + ratio * (KNOB_MAX_ANGLE - KNOB_MIN_ANGLE);

    const angleFromEvent = useCallback((clientX: number, clientY: number): number => {
        const el = knobRef.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // 0° = arriba, positivo horario
        return Math.atan2(clientX - cx, cy - clientY) * (180 / Math.PI);
    }, []);

    const applyDelta = useCallback((deltaAngle: number) => {
        // Convertir el movimiento angular en pasos discretos
        const degPerStep = (KNOB_MAX_ANGLE - KNOB_MIN_ANGLE) / Math.max(1, (max - min) / step);
        let acc = deltaAngle;
        while (acc >= degPerStep) { onIncrease(); acc -= degPerStep; }
        while (acc <= -degPerStep) { onDecrease(); acc += degPerStep; }
        return acc;
    }, [max, min, step, onIncrease, onDecrease]);

    const handlePointerMove = useCallback((e: PointerEvent) => {
        if (lastAngleRef.current === null) return;
        const current = angleFromEvent(e.clientX, e.clientY);
        let delta = current - lastAngleRef.current;
        // Normalizar saltos por el borde ±180°
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        const remainder = applyDelta(delta);
        lastAngleRef.current = current - remainder;
    }, [angleFromEvent, applyDelta]);

    const handlePointerUp = useCallback(() => {
        lastAngleRef.current = null;
        setDragging(false);
        if (moveHandlerRef.current) window.removeEventListener('pointermove', moveHandlerRef.current);
        if (upHandlerRef.current) window.removeEventListener('pointerup', upHandlerRef.current);
        moveHandlerRef.current = null;
        upHandlerRef.current = null;
    }, []);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        if (disabled) return;
        e.preventDefault();
        lastAngleRef.current = angleFromEvent(e.clientX, e.clientY);
        setDragging(true);
        moveHandlerRef.current = handlePointerMove;
        upHandlerRef.current = handlePointerUp;
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
    }, [disabled, angleFromEvent, handlePointerMove, handlePointerUp]);

    const handleWheel = useCallback((e: React.WheelEvent) => {
        if (disabled) return;
        if (e.deltaY < 0) onIncrease();
        else onDecrease();
    }, [disabled, onIncrease, onDecrease]);

    return (
        <div className="flex flex-col items-center select-none">
            <div
                ref={knobRef}
                onPointerDown={handlePointerDown}
                onWheel={handleWheel}
                role="slider"
                tabIndex={disabled ? -1 : 0}
                aria-label={`${label} ${value} ${unit}`}
                aria-valuenow={value}
                aria-valuemin={min}
                aria-valuemax={max}
                onKeyDown={(e) => {
                    if (disabled) return;
                    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { e.preventDefault(); onIncrease(); }
                    if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { e.preventDefault(); onDecrease(); }
                }}
                className={`relative w-16 h-16 rounded-full shadow-lg transition-transform ${disabled ? 'cursor-not-allowed opacity-60' : dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                    background: `radial-gradient(circle at 35% 30%, ${color}, #0a3d24 80%)`,
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.5), 0 3px 5px rgba(0,0,0,0.4)',
                }}
            >
                {/* Indicador de posición */}
                <div
                    className="absolute left-1/2 top-1/2 origin-bottom"
                    style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)`, height: '46%' }}
                >
                    <div className="w-1 h-full rounded-full bg-white/90 mx-auto" style={{ boxShadow: '0 0 3px rgba(0,0,0,0.6)' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-black/30" />
                </div>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mt-1 text-center leading-tight">{label}</p>
            <p className="text-xs font-black text-gray-900 leading-none">{value}<span className="text-[9px] text-gray-600 ml-0.5">{unit}</span></p>
        </div>
    );
}

// ──────────────────────────────────────────────
// Softkey física (botón gris de membrana)
// ──────────────────────────────────────────────
function SoftKey({ label, onClick, active, disabled }: { label: string; onClick?: () => void; active?: boolean; disabled?: boolean }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-2 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide border transition-all leading-tight ${
                disabled ? 'bg-gray-300 text-gray-400 border-gray-300 cursor-not-allowed'
                : active ? 'bg-slate-700 text-white border-slate-800 shadow-inner'
                : 'bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 border-gray-400 hover:from-white hover:to-gray-200 active:shadow-inner'
            }`}
        >
            {label}
        </button>
    );
}

// ──────────────────────────────────────────────
// Carátula física del ZOLL M Series
// ──────────────────────────────────────────────
export default function ZollMSeriesFace({ sim, onGenerateTwelveLead, patientId = 'SIM-001' }: ZollMSeriesFaceProps) {
    const {
        isOn, displayVitals, currentScenario, leadSelection, setLeadSelection, sweepSpeed, toggleSweepSpeed,
        energy, isCharging, isCharged, shockDelivered, defiMessage,
        increaseEnergy, decreaseEnergy, handleCharge, handleShock,
        pacer, increasePacerRate, decreasePacerRate, increasePacerCurrent, decreasePacerCurrent,
        alarms, toggleAlarmMute, nibp, performNibpMeasurement,
        mDialMode, setDialMode, analyzeState, handleAnalyze,
        ecgCanvasRef, plethCanvasRef,
    } = sim;

    // Menú de softkeys inferiores: Param | Wave 2 | ID# | Alarms | 12 Lead
    type ScreenMenu = 'none' | 'param' | 'id' | 'alarms' | 'summary';
    const [screenMenu, setScreenMenu] = useState<ScreenMenu>('none');
    // Segunda forma de onda mostrada bajo el ECG
    const [wave2, setWave2] = useState<'pleth' | 'co2'>('pleth');
    // Grabadora de tira (Recorder)
    const [isRecording, setIsRecording] = useState(false);
    // Registro de eventos en pantalla (Summary + Code Marker)
    interface LogEntry { id: number; time: string; label: string; }
    const [eventLog, setEventLog] = useState<LogEntry[]>([]);
    const logSeqRef = useRef(0);
    // Anotaciones ACLS típicas que cicla el Code Marker
    const CODE_MARKERS = ['RCP', 'Adrenalina', 'Amiodarona', 'Vía aérea', 'Acceso IV', 'Ritmo verificado'];
    const codeMarkerIdxRef = useRef(0);

    const nowLabel = () => {
        const d = new Date();
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
    };
    const pushLog = (label: string) => {
        logSeqRef.current += 1;
        setEventLog(prev => [{ id: logSeqRef.current, time: nowLabel(), label }, ...prev].slice(0, 30));
    };

    const handleRecorder = () => {
        if (!isOn) return;
        setIsRecording(prev => {
            const next = !prev;
            pushLog(next ? 'Grabación iniciada' : 'Grabación detenida');
            return next;
        });
    };
    const handleSummary = () => {
        if (!isOn) return;
        toggleScreenMenu('summary');
    };
    const handleCodeMarker = () => {
        if (!isOn) return;
        const marker = CODE_MARKERS[codeMarkerIdxRef.current % CODE_MARKERS.length];
        codeMarkerIdxRef.current += 1;
        pushLog(`Marca: ${marker}`);
    };

    const cycleLead = () => {
        const idx = LEAD_OPTIONS.indexOf(leadSelection);
        const next = LEAD_OPTIONS[(idx + 1) % LEAD_OPTIONS.length];
        setLeadSelection(next as LeadType);
    };

    const toggleScreenMenu = (menu: ScreenMenu) =>
        setScreenMenu(prev => (prev === menu ? 'none' : menu));

    // Ángulo del dial selector según su posición
    const DIAL_POSITIONS: Record<typeof mDialMode, number> = {
        off: -90,
        monitor: -30,
        defib: 40,
        pacer: 110,
    };
    const dialAngle = DIAL_POSITIONS[mDialMode];
    const inDefib = mDialMode === 'defib';
    const inPacer = mDialMode === 'pacer';

    return (
        <div className="flex-1 flex items-center justify-center p-3 lg:p-6 bg-gradient-to-br from-slate-200 to-slate-400 overflow-auto">
            {/* Carcasa del equipo */}
            <div className="w-full max-w-5xl rounded-[28px] bg-gradient-to-b from-[#e8e6e0] to-[#cfccc4] p-4 lg:p-6 shadow-2xl border border-white/60"
                 style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 2px 3px rgba(255,255,255,0.7)' }}>

                {/* Marca */}
                <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-[#0a4d8c] font-black text-xl italic tracking-tight">ZOLL</span>
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">M Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">

                    {/* ── Columna izquierda: pantalla + softkeys ── */}
                    <div>
                        {/* Pantalla embebida */}
                        <div className="relative rounded-lg overflow-hidden border-[6px] border-[#3a3a3a] bg-[#05121f]" style={{ boxShadow: 'inset 0 0 12px rgba(0,0,0,0.8)' }}>
                            {shockDelivered && <div className="absolute inset-0 bg-white/70 z-20 pointer-events-none animate-pulse" />}
                            {!isOn && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                                    <span className="text-gray-700 text-lg font-black tracking-[0.3em]">— OFF —</span>
                                </div>
                            )}
                            <div className={`transition-opacity ${isOn ? 'opacity-100' : 'opacity-0'}`}>
                                {/* Cabecera de parámetros — layout fiel al M Series */}
                                <div className="border-b border-[#c0a050]/30 px-2 pt-1 pb-1">
                                    {/* Fila superior: NIBP | SpO2% | ECG x1 · PADS · FC + corazón */}
                                    <div className="grid grid-cols-[1.1fr_0.9fr_1.4fr] gap-1 text-[10px] font-bold">
                                        {/* NIBP */}
                                        <div className="border-r border-[#c0a050]/25 pr-1">
                                            <span className="text-[#8fd3ff] text-[9px]">NIBP <span className="text-[7px] text-[#5a9bd4]">mmHg</span></span>
                                            <div className="text-[#8fd3ff] leading-tight">{nibp.reading ? `${nibp.reading.systolic}/${nibp.reading.diastolic}` : '---'}</div>
                                            <div className="text-[#8fd3ff] text-[8px] leading-tight">({nibp.reading ? Math.round((nibp.reading.systolic + 2 * nibp.reading.diastolic) / 3) : '--'})</div>
                                        </div>
                                        {/* SpO2 */}
                                        <div className="border-r border-[#c0a050]/25 pr-1">
                                            <span className="text-[#7fffb0] text-[9px]">SpO2 %</span>
                                            <div className="text-[#7fffb0] text-base leading-tight">{displayVitals.spo2 > 0 ? displayVitals.spo2 : '---'}</div>
                                        </div>
                                        {/* ECG / FC */}
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className="text-[#ffe08a] text-[9px]">ECG</span>
                                                <div className="text-[#ffe08a] text-[9px] leading-tight">x1</div>
                                                <div className="text-[#ffe08a] text-[9px] leading-tight tracking-wider">PADS</div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[#ffe08a] text-2xl font-black leading-none">{displayVitals.hr > 0 ? displayVitals.hr : '--'}</span>
                                                <span className={`text-[#ff6b6b] text-sm ${displayVitals.hr > 0 ? 'animate-pulse' : 'opacity-40'}`}>♥</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fila inferior: CO2 mmHg · RR */}
                                    <div className="grid grid-cols-[1.1fr_0.9fr_1.4fr] gap-1 text-[9px] font-bold mt-0.5 pt-0.5 border-t border-[#c0a050]/20">
                                        <div className="text-[#ff9d9d]">CO2 <span className="text-[#ffb0b0]">{displayVitals.etco2 > 0 ? displayVitals.etco2 : '---'}</span> <span className="text-[7px] text-[#c07070]">mmHg</span></div>
                                        <div className="text-[#ff9d9d]">RR <span className="text-[#ffb0b0]">{displayVitals.rr > 0 ? displayVitals.rr : '---'}</span></div>
                                        <div className="text-right">
                                            {isRecording && <span className="text-red-400 animate-pulse">● REC</span>}
                                        </div>
                                    </div>
                                </div>

                                {/* Etiqueta de derivación */}
                                <div className="flex items-center justify-between px-2 mt-1">
                                    <span className="text-[#ffe08a] text-[10px] font-bold tracking-wider">ECG · {leadSelection} · {sweepSpeed}mm/s</span>
                                    <span className={`text-[10px] font-bold ${currentScenario.isShockable ? 'text-red-400' : 'text-green-400'}`}>
                                        {currentScenario.isShockable ? '⚡ DESFIB.' : '✓ NO DESFIB.'}
                                    </span>
                                </div>

                                {/* Canvas ECG */}
                                <div className="h-40 lg:h-48 mx-1.5 mt-0.5 rounded overflow-hidden border border-green-900/40">
                                    <canvas ref={ecgCanvasRef} className="w-full h-full block" aria-label={`ECG derivación ${leadSelection}`} />
                                </div>

                                {/* Segunda forma de onda (Wave 2): Pleth o CO2 */}
                                <div className="flex items-center justify-between px-2 mt-1">
                                    <span className="text-[#7fd0ff] text-[9px] font-bold tracking-wider">
                                        {wave2 === 'pleth' ? 'SpO2 PLETH' : 'CO2 CAPNO'}
                                    </span>
                                </div>
                                <div className="h-14 lg:h-16 mx-1.5 mt-0.5 mb-1.5 rounded overflow-hidden border border-cyan-900/30">
                                    <canvas ref={plethCanvasRef} className="w-full h-full block" aria-label={wave2 === 'pleth' ? 'Pletismografía SpO2' : 'Capnografía CO2'} />
                                </div>

                                {/* Mensaje del desfibrilador dentro de la pantalla */}
                                <div className="px-2 min-h-[16px]">
                                    {defiMessage && (
                                        <span className={`text-[11px] font-black tracking-wide ${
                                            analyzeState === 'analyzing' ? 'text-yellow-300 animate-pulse'
                                            : analyzeState === 'shock_advised' || isCharged ? 'text-orange-300'
                                            : analyzeState === 'no_shock' ? 'text-green-300'
                                            : 'text-white'
                                        }`}>{defiMessage}</span>
                                    )}
                                </div>

                                {/* Paneles emergentes de las softkeys */}
                                {screenMenu === 'param' && (
                                    <div className="mx-1.5 mb-1 rounded bg-black/70 border border-[#c0a050]/40 p-2 grid grid-cols-3 gap-1 text-[9px] text-[#ffe08a]">
                                        <div><span className="text-[#5a9bd4]">FC</span> {displayVitals.hr > 0 ? displayVitals.hr : '--'} lpm</div>
                                        <div><span className="text-[#4a9d6a]">SpO2</span> {displayVitals.spo2 > 0 ? displayVitals.spo2 : '--'} %</div>
                                        <div><span className="text-[#c07070]">FR</span> {displayVitals.rr > 0 ? displayVitals.rr : '--'} /min</div>
                                        <div><span className="text-[#c0a050]">EtCO2</span> {displayVitals.etco2 > 0 ? displayVitals.etco2 : '--'}</div>
                                        <div><span className="text-[#5a9bd4]">NIBP</span> {nibp.reading ? `${nibp.reading.systolic}/${nibp.reading.diastolic}` : '--/--'}</div>
                                        <div><span className="text-[#8a8a8a]">Temp</span> {displayVitals.temp > 0 ? displayVitals.temp.toFixed(1) : '--'}°</div>
                                    </div>
                                )}
                                {screenMenu === 'id' && (
                                    <div className="mx-1.5 mb-1 rounded bg-black/70 border border-[#c0a050]/40 p-2 text-[9px] text-[#ffe08a] space-y-0.5">
                                        <div><span className="text-[#5a9bd4]">ID#</span> {patientId}</div>
                                        <div><span className="text-[#5a9bd4]">Ritmo</span> {currentScenario.shortName}</div>
                                        <div><span className="text-[#5a9bd4]">Derivación</span> {leadSelection} · {sweepSpeed} mm/s</div>
                                    </div>
                                )}
                                {screenMenu === 'alarms' && (
                                    <div className="mx-1.5 mb-1 rounded bg-black/70 border border-[#c0a050]/40 p-2 text-[9px] space-y-0.5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#ffe08a]">Estado alarmas</span>
                                            <span className={alarms.muted ? 'text-red-400 font-bold' : 'text-green-400 font-bold'}>
                                                {alarms.muted ? 'SILENCIADAS' : 'ACTIVAS'}
                                            </span>
                                        </div>
                                        <div className={alarms.hrHigh ? 'text-red-400' : 'text-[#8a8a8a]'}>FC alta &gt; {ALARM_THRESHOLDS.hrHigh}</div>
                                        <div className={alarms.hrLow ? 'text-red-400' : 'text-[#8a8a8a]'}>FC baja &lt; {ALARM_THRESHOLDS.hrLow}</div>
                                        <div className={alarms.spo2Low ? 'text-red-400' : 'text-[#8a8a8a]'}>SpO2 baja &lt; {ALARM_THRESHOLDS.spo2Low}</div>
                                    </div>
                                )}
                                {screenMenu === 'summary' && (
                                    <div className="mx-1.5 mb-1 rounded bg-black/70 border border-[#c0a050]/40 p-2 text-[9px] text-[#ffe08a]">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold uppercase tracking-wider">Summary — Registro</span>
                                            {eventLog.length > 0 && (
                                                <button onClick={() => setEventLog([])} className="text-[8px] text-[#c0a050] hover:text-[#ffe08a] underline">Limpiar</button>
                                            )}
                                        </div>
                                        {eventLog.length === 0 ? (
                                            <p className="text-[#8a8a8a]">Sin eventos registrados.</p>
                                        ) : (
                                            <div className="max-h-24 overflow-y-auto space-y-0.5">
                                                {eventLog.map((e) => (
                                                    <div key={e.id} className="flex gap-2">
                                                        <span className="text-[#c0a050] tabular-nums">{e.time}</span>
                                                        <span>{e.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Barra de softkeys inferiores: Param | Wave 2 | ID# | Alarms | 12 Lead */}
                                <div className="grid grid-cols-5 gap-0.5 px-1.5 pt-0.5 border-t border-[#c0a050]/25">
                                    {[
                                        { key: 'param', label: 'Param' },
                                        { key: 'wave2', label: `Wave 2` },
                                        { key: 'id', label: 'ID#' },
                                        { key: 'alarms', label: 'Alarms' },
                                        { key: '12lead', label: '12 Lead' },
                                    ].map((item) => {
                                        const active = screenMenu === item.key;
                                        return (
                                            <button
                                                key={item.key}
                                                onClick={() => {
                                                    if (item.key === 'wave2') { setWave2(w => (w === 'pleth' ? 'co2' : 'pleth')); return; }
                                                    if (item.key === '12lead') { onGenerateTwelveLead?.(); return; }
                                                    toggleScreenMenu(item.key as ScreenMenu);
                                                }}
                                                className={`text-[9px] font-bold tracking-tight py-0.5 rounded-t transition-colors ${active ? 'text-black bg-[#ffe08a]' : 'text-[#ffe08a] hover:bg-[#c0a050]/25'}`}
                                            >
                                                {item.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Botones físicos redondos bajo el bisel (alineados con las softkeys) */}
                        <div className="grid grid-cols-5 gap-2 mt-2 px-1">
                            {[
                                { key: 'param', label: 'Param' },
                                { key: 'wave2', label: 'Wave 2' },
                                { key: 'id', label: 'ID#' },
                                { key: 'alarms', label: 'Alarms' },
                                { key: '12lead', label: '12 Lead' },
                            ].map((item) => (
                                <div key={item.key} className="flex flex-col items-center gap-0.5">
                                    <button
                                        onClick={() => {
                                            if (!isOn) return;
                                            if (item.key === 'wave2') { setWave2(w => (w === 'pleth' ? 'co2' : 'pleth')); return; }
                                            if (item.key === '12lead') { onGenerateTwelveLead?.(); return; }
                                            toggleScreenMenu(item.key as ScreenMenu);
                                        }}
                                        disabled={!isOn}
                                        aria-label={item.label}
                                        className={`w-9 h-9 rounded-full border transition-all ${
                                            !isOn ? 'bg-gray-300 border-gray-300 cursor-not-allowed'
                                            : screenMenu === item.key ? 'bg-slate-500 border-slate-600 shadow-inner'
                                            : 'bg-gradient-to-b from-gray-100 to-gray-300 border-gray-400 hover:from-white active:shadow-inner'
                                        }`}
                                    />
                                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tight text-center leading-none">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Botones físicos de la base: Recorder · Charger · Summary · Code Marker · NBP */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            <SoftKey label={isRecording ? '● Rec' : 'Recorder'} onClick={handleRecorder} active={isRecording} disabled={!isOn} />
                            <span className="text-[8px] text-gray-500 font-bold self-center px-1">
                                <span className={isCharging || isCharged ? 'text-green-600' : 'text-gray-400'}>●●</span> Charger {isCharging || isCharged ? 'ON' : 'OFF'}
                            </span>
                            <SoftKey label="Summary" onClick={handleSummary} active={screenMenu === 'summary'} disabled={!isOn} />
                            <SoftKey label="Code Marker" onClick={handleCodeMarker} disabled={!isOn} />
                            <SoftKey label="NBP" onClick={performNibpMeasurement} disabled={!isOn || nibp.measuring} active={nibp.measuring} />
                            <span className="text-[9px] text-gray-500 font-bold self-center ml-1">
                                {alarms.muted ? '🔇 ALARMA SILENCIADA' : '🔔 ALARMAS ON'}
                            </span>
                        </div>
                    </div>

                    {/* ── Columna derecha: panel de control físico ── */}
                    <div className="flex flex-col gap-3">

                        {/* Softkeys de pantalla (izquierda del original) */}
                        <div className="grid grid-cols-2 gap-1.5">
                            <SoftKey label="Lead" onClick={cycleLead} disabled={!isOn} />
                            <SoftKey label="Size" onClick={toggleSweepSpeed} disabled={!isOn} />
                            <SoftKey label="Alarm Suspend" onClick={toggleAlarmMute} active={alarms.muted} disabled={!isOn} />
                            <SoftKey label="Recorder" disabled={!isOn} />
                        </div>

                        {/* Cluster desfibrilador 1-2-3 */}
                        <div className="rounded-xl bg-[#d8d5cd] border border-gray-400 p-2.5">
                            <div className="flex items-stretch gap-2">
                                {/* Energy select ▲▼ */}
                                <div className="flex flex-col items-center justify-center bg-white/60 rounded-lg px-1.5 py-1 border border-gray-300">
                                    <button onClick={increaseEnergy} disabled={!inDefib} aria-label="Aumentar energía"
                                        className={`text-red-600 text-lg leading-none ${!inDefib ? 'opacity-30 cursor-not-allowed' : 'hover:text-red-500'}`}>▲</button>
                                    <span className="text-[7px] font-bold text-gray-600 uppercase my-0.5">Energy<br/>Select</span>
                                    <button onClick={decreaseEnergy} disabled={!inDefib} aria-label="Reducir energía"
                                        className={`text-red-600 text-lg leading-none ${!inDefib ? 'opacity-30 cursor-not-allowed' : 'hover:text-red-500'}`}>▼</button>
                                </div>

                                {/* Botones numerados */}
                                <div className="flex-1 flex flex-col gap-1.5">
                                    {/* 1 DEFIB - indicador energía */}
                                    <div className="flex items-center gap-1.5 bg-[#c23b2e] rounded-md px-2 py-1">
                                        <span className="w-4 h-4 rounded-full bg-white text-[#c23b2e] text-[10px] font-black flex items-center justify-center">1</span>
                                        <span className="text-white text-[9px] font-bold uppercase">Defib</span>
                                        <span className="ml-auto text-white font-black text-sm">{energy}J</span>
                                    </div>
                                    {/* 2 CHARGE + ANALYZE */}
                                    <div className="flex gap-1.5">
                                        <button onClick={handleCharge} disabled={!inDefib || isCharging || isCharged}
                                            className={`flex-1 flex items-center gap-1 rounded-md px-2 py-1 transition-all ${
                                                !inDefib ? 'bg-gray-400 cursor-not-allowed'
                                                : isCharging ? 'bg-yellow-500 animate-pulse'
                                                : isCharged ? 'bg-orange-500'
                                                : 'bg-[#c23b2e] hover:bg-[#d04638]'}`}>
                                            <span className="w-4 h-4 rounded-full bg-white text-[#c23b2e] text-[10px] font-black flex items-center justify-center">2</span>
                                            <span className="text-white text-[9px] font-bold uppercase">{isCharging ? 'Cargando' : isCharged ? 'Cargado' : 'Charge'}</span>
                                        </button>
                                        <button onClick={handleAnalyze} disabled={!isOn || analyzeState === 'analyzing'}
                                            className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase transition-all ${
                                                !isOn ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                : analyzeState === 'analyzing' ? 'bg-yellow-500 text-black animate-pulse'
                                                : 'bg-[#2b6cb0] text-white hover:bg-[#3178be]'}`}>
                                            Analyze
                                        </button>
                                    </div>
                                    {/* 3 SHOCK */}
                                    <button onClick={handleShock}
                                        className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-all ${
                                            isCharged ? 'bg-orange-500 hover:bg-orange-400 ring-2 ring-orange-300 animate-pulse' : 'bg-[#8a2a20] cursor-not-allowed opacity-70'}`}>
                                        <span className="w-4 h-4 rounded-full bg-white text-[#8a2a20] text-[10px] font-black flex items-center justify-center">3</span>
                                        <span className="text-white text-[10px] font-black uppercase tracking-wider">Shock</span>
                                        <span className="ml-auto w-6 h-6 rounded-full bg-orange-300 border-2 border-white/60"
                                              style={{ background: 'radial-gradient(circle at 40% 35%, #ffcb8a, #e07a2b)' }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dial selector rotatorio */}
                        <div className="flex items-center gap-3 bg-[#d8d5cd] border border-gray-400 rounded-xl p-2.5">
                            <div className="relative w-20 h-20 flex-shrink-0">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#3a3a3a] to-[#111]"
                                     style={{ boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2), 0 3px 6px rgba(0,0,0,0.5)' }}>
                                    <div className="absolute left-1/2 top-1/2 origin-bottom transition-transform duration-200"
                                         style={{ transform: `translate(-50%, -100%) rotate(${dialAngle}deg)`, height: '42%' }}>
                                        <div className="w-1.5 h-full rounded-full bg-white mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 flex-1">
                                <button onClick={() => setDialMode('off')}
                                    className={`px-1.5 py-1 rounded text-[9px] font-black uppercase transition-all ${mDialMode === 'off' ? 'bg-gray-800 text-white' : 'bg-white/70 text-gray-700 hover:bg-white'}`}>Off</button>
                                <button onClick={() => setDialMode('monitor')}
                                    className={`px-1.5 py-1 rounded text-[9px] font-black uppercase transition-all ${mDialMode === 'monitor' ? 'bg-slate-700 text-white' : 'bg-white/70 text-gray-700 hover:bg-white'}`}>Monitor</button>
                                <button onClick={() => setDialMode('defib')}
                                    className={`px-1.5 py-1 rounded text-[9px] font-black uppercase transition-all ${mDialMode === 'defib' ? 'bg-[#c23b2e] text-white' : 'bg-white/70 text-gray-700 hover:bg-white'}`}>Defib</button>
                                <button onClick={() => setDialMode('pacer')}
                                    className={`px-1.5 py-1 rounded text-[9px] font-black uppercase transition-all ${mDialMode === 'pacer' ? 'bg-[#1f8a4c] text-white' : 'bg-white/70 text-gray-700 hover:bg-white'}`}>Pacer</button>
                            </div>
                        </div>

                        {/* Perillas verdes de marcapasos */}
                        <div className="flex items-center justify-around bg-[#c9d6c9] border border-gray-400 rounded-xl p-2.5">
                            <RotaryKnob
                                label="Pacer Output"
                                unit="mA"
                                value={pacer.current}
                                min={0}
                                max={200}
                                step={5}
                                color="#3fbf6f"
                                onIncrease={increasePacerCurrent}
                                onDecrease={decreasePacerCurrent}
                                disabled={!inPacer}
                            />
                            <div className="flex flex-col items-center">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${inPacer ? 'bg-green-700 text-white' : 'bg-gray-400 text-gray-200'}`}>
                                    {inPacer ? 'PACER ON' : '4:1'}
                                </span>
                            </div>
                            <RotaryKnob
                                label="Pacer Rate"
                                unit="ppm"
                                value={pacer.rate}
                                min={30}
                                max={180}
                                step={5}
                                color="#3fbf6f"
                                onIncrease={increasePacerRate}
                                onDecrease={decreasePacerRate}
                                disabled={!inPacer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
