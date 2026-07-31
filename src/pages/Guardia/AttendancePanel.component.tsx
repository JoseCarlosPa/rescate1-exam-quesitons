import {useMemo, useState} from "react";
import {FiCalendar, FiCheck, FiCheckCircle, FiClock, FiSave, FiUserCheck, FiX} from "react-icons/fi";
import {Elemento} from "../Admin/Dashboard/AdminDashboard.types";
import {Guardia} from "../../constants/guardia.constants";
import {attendanceCount, attendanceRate} from "../../utils/attendance";
import useAttendance from "./useAttendance.hook";

interface AttendancePanelProps {
    guardia: Guardia;
    canManage: boolean;
    currentUserId?: string;
    elementos: Elemento[];
    recordedBy?: string;
    onClose: () => void;
}

/** Fecha de hoy en ISO `YYYY-MM-DD` en hora local. */
function todayISO(): string {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
}

export default function AttendancePanel({guardia, canManage, currentUserId, elementos, recordedBy, onClose}: AttendancePanelProps) {
    const {sessions, loading, saveSession, totalSessions} = useAttendance(guardia, canManage, recordedBy);

    const [date, setDate] = useState(todayISO());
    const [present, setPresent] = useState<Set<string>>(new Set());
    const [taking, setTaking] = useState(false);

    // Al abrir "pasar lista" en una fecha, precargar lo ya registrado (si existe).
    const startTaking = () => {
        const existing = sessions.find(s => s.date === date);
        setPresent(new Set(existing?.present ?? elementos.filter(e => e.status === 'activo').map(e => e.id)));
        setTaking(true);
    };

    const togglePresent = (id: string) => {
        setPresent(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    const handleSave = async () => {
        await saveSession(date, [...present]);
        setTaking(false);
    };

    const myRate = useMemo(
        () => currentUserId ? attendanceRate(sessions, currentUserId) : 0,
        [sessions, currentUserId]
    );
    const myCount = useMemo(
        () => currentUserId ? attendanceCount(sessions, currentUserId) : {attended: 0, total: 0},
        [sessions, currentUserId]
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}
             onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                 onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                            <FiUserCheck className="w-5 h-5 text-orange-500"/> Asistencia
                        </h3>
                        <p className="text-sm text-slate-500 mt-0.5">{guardia} — {totalSessions} sesión{totalSessions !== 1 ? 'es' : ''} registradas</p>
                    </div>
                    <button onClick={onClose}
                            className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                        <FiX className="w-5 h-5"/>
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    {/* Mi asistencia */}
                    <div className="flex items-center gap-4 p-4 rounded-2xl"
                         style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                             style={{background: myRate >= 80 ? '#16a34a' : myRate >= 50 ? '#d97706' : '#dc2626'}}>
                            <span className="text-white text-lg font-black">{myRate}%</span>
                        </div>
                        <div>
                            <p className="text-white font-black">Mi asistencia</p>
                            <p className="text-slate-400 text-sm">{myCount.attended} de {myCount.total} sesiones</p>
                        </div>
                    </div>

                    {/* Registrar (solo líderes) */}
                    {canManage && (
                        !taking ? (
                            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
                                <div className="flex-1">
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Fecha de la sesión</label>
                                    <div className="relative">
                                        <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                                               className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                                    </div>
                                </div>
                                <button onClick={startTaking}
                                        className="px-5 py-2.5 rounded-xl text-white font-bold text-sm"
                                        style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                    <FiUserCheck className="inline w-4 h-4 mr-1"/> Pasar lista
                                </button>
                            </div>
                        ) : (
                            <div className="border border-orange-200 rounded-2xl p-4 bg-orange-50/40">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm font-bold text-slate-700">
                                        Presentes: {present.size} / {elementos.length}
                                    </p>
                                    <button onClick={() => setTaking(false)} className="text-slate-400 hover:text-slate-600">
                                        <FiX className="w-4 h-4"/>
                                    </button>
                                </div>
                                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                                    {elementos.map(el => {
                                        const checked = present.has(el.id);
                                        return (
                                            <button key={el.id} onClick={() => togglePresent(el.id)}
                                                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                                                        checked ? 'border-green-400 bg-green-50' : 'border-slate-200 bg-white'
                                                    }`}>
                                                <span className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                                                    checked ? 'bg-green-500' : 'border-2 border-slate-300'
                                                }`}>
                                                    {checked && <FiCheck className="w-3.5 h-3.5 text-white"/>}
                                                </span>
                                                <span className="text-sm font-semibold text-slate-700 flex-1 truncate">{el.name}</span>
                                                {el.status !== 'activo' && (
                                                    <span className="text-[10px] text-slate-400 font-semibold">inactivo</span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                                <button onClick={handleSave}
                                        className="w-full mt-3 py-2.5 rounded-xl text-white font-bold text-sm"
                                        style={{background: 'linear-gradient(135deg,#16a34a,#15803d)'}}>
                                    <FiSave className="inline w-4 h-4 mr-1"/> Guardar asistencia del {date}
                                </button>
                            </div>
                        )
                    )}

                    {/* Historial de sesiones */}
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <FiClock className="w-3.5 h-3.5"/> Historial
                        </p>
                        {loading ? (
                            <p className="text-sm text-slate-400 py-4 text-center">Cargando...</p>
                        ) : sessions.length === 0 ? (
                            <p className="text-sm text-slate-400 py-4 text-center">Aún no hay sesiones registradas.</p>
                        ) : (
                            <div className="space-y-1.5">
                                {sessions.map(s => {
                                    const iWasPresent = currentUserId ? s.present.includes(currentUserId) : false;
                                    return (
                                        <div key={s.id} className="flex items-center justify-between gap-2 p-3 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="w-4 h-4 text-slate-400"/>
                                                <span className="text-sm font-semibold text-slate-700">
                                                    {new Date(s.date + 'T00:00:00').toLocaleDateString('es-MX', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'})}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-slate-500">{s.present.length} presentes</span>
                                                {currentUserId && (
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                                                        iWasPresent ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'
                                                    }`}>
                                                        <FiCheckCircle className="w-3 h-3"/>
                                                        {iWasPresent ? 'Asististe' : 'Faltaste'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
