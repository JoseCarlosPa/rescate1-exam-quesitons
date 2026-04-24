import {useCallback, useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {doc, getDoc, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebase/firebaseConfig';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useAuth} from '../../../Providers/AuthProvider';
import {examNamesExported} from '../../../constants/exam.constants.ts';
import {
    FiArrowLeft,
    FiAward,
    FiBarChart2,
    FiBook,
    FiCheckCircle,
    FiClock,
    FiFilter,
    FiSearch,
    FiTarget,
    FiTrendingUp,
    FiZap,
} from 'react-icons/fi';

// ── Types ─────────────────────────────────────────────────────────────────────
export interface ExamData {
    completed: boolean;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    completedAt?: Timestamp;
    name?: string;
}

interface ExamResult {
    id: number;
    name: string;
    score: number;
    completed: boolean;
    completedAt?: Date;
    totalQuestions: number;
    correctAnswers: number;
}

interface StudentData {
    id: string;
    name: string;
    email: string;
    exams: Record<string, ExamData>;
}

type FilterType = 'all' | 'completed' | 'pending';
type SortType   = 'name' | 'score' | 'date';

// ── Helpers ───────────────────────────────────────────────────────────────────
function scoreStyle(score: number, completed: boolean) {
    if (!completed) return {color: '#94a3b8', bg: '#f1f5f9', label: 'Pendiente'};
    if (score >= 90) return {color: '#16a34a', bg: '#dcfce7', label: 'Excelente'};
    if (score >= 80) return {color: '#2563eb', bg: '#dbeafe', label: 'Muy Bien'};
    if (score >= 70) return {color: '#d97706', bg: '#fef3c7', label: 'Bien'};
    return {color: '#dc2626', bg: '#fee2e2', label: 'Repaso'};
}

function ScoreRing({score, completed, size = 48}: {score: number; completed: boolean; size?: number}) {
    const r = 18;
    const circ = 2 * Math.PI * r;
    const pct = completed ? score / 100 : 0;
    const dash = pct * circ;
    const s = scoreStyle(score, completed);

    return (
        <svg width={size} height={size} viewBox="0 0 44 44" className="flex-shrink-0">
            <circle cx="22" cy="22" r={r} fill="none" stroke="#e2e8f0" strokeWidth="4"/>
            {completed && (
                <circle cx="22" cy="22" r={r} fill="none" stroke={s.color} strokeWidth="4"
                        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
                        transform="rotate(-90 22 22)"
                        style={{transition: 'stroke-dasharray 0.6s ease'}}/>
            )}
            <text x="22" y="26" textAnchor="middle" fontSize="9" fontWeight="800"
                  fill={completed ? s.color : '#cbd5e1'}>
                {completed ? `${score}` : '–'}
            </text>
        </svg>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function StudentGrades() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [examResults, setExamResults] = useState<ExamResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [filter, setFilter] = useState<FilterType>('all');
    const [sortBy, setSortBy]  = useState<SortType>('name');
    const [search, setSearch]  = useState('');

    useEffect(() => { setMounted(true); }, []);

    const fetchStudentGrades = useCallback(async () => {
        if (!user?.id) return;
        try {
            const userDoc = await getDoc(doc(db, 'users', user.id));
            if (userDoc.exists()) {
                const data = userDoc.data() as StudentData;
                processExamResults(data.exams || {});
            }
        } catch (error) {
            console.error('Error fetching student grades:', error);
            toast.error('Error al cargar las calificaciones');
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        if (!user) { navigate(AllRoutes.LOGIN); return; }
        fetchStudentGrades();
    }, [user, navigate, fetchStudentGrades]);

    const processExamResults = (exams: Record<string, ExamData>) => {
        const results: ExamResult[] = [];
        Object.entries(examNamesExported).forEach(([id, name]) => {
            const examId   = parseInt(id);
            const examData = exams[examId] || {};
            results.push({
                id:             examId,
                name,
                score:          examData.score || 0,
                completed:      examData.completed || false,
                completedAt:    examData.completedAt?.toDate?.() || undefined,
                totalQuestions: examData.totalQuestions || 0,
                correctAnswers: examData.correctAnswers || 0,
            });
        });
        setExamResults(results);
    };

    // Stats
    const completed    = examResults.filter(e => e.completed);
    const total        = examResults.length || 44;
    const avgScore     = completed.length > 0
        ? Math.round(completed.reduce((s, e) => s + e.score, 0) / completed.length)
        : 0;
    const passed       = completed.filter(e => e.score >= 80).length;
    const progressPct  = Math.round((completed.length / total) * 100);

    // Filtered + sorted
    const displayed = examResults
        .filter(e => {
            const matchF = filter === 'all' || (filter === 'completed' ? e.completed : !e.completed);
            const matchS = e.name.toLowerCase().includes(search.toLowerCase());
            return matchF && matchS;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'score': return b.score - a.score;
                case 'date':
                    if (!a.completedAt && !b.completedAt) return 0;
                    if (!a.completedAt) return 1;
                    if (!b.completedAt) return -1;
                    return b.completedAt.getTime() - a.completedAt.getTime();
                default: return a.name.localeCompare(b.name);
            }
        });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                 style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500"/>
            </div>
        );
    }

    return (
        <div className="min-h-screen"
             style={{
                 background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 38%,#f1f5f9 38%)',
                 opacity: mounted ? 1 : 0,
                 transition: 'opacity 0.4s ease',
             }}>

            {/* ── Hero header ── */}
            <div className="px-4 md:px-8 lg:px-12 pt-6 pb-24">
                <NavLink to={AllRoutes.STUDENT_DASHBOARD}
                         className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors group">
                    <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"/>
                    Volver al panel
                </NavLink>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-1">
                            Historial académico
                        </p>
                        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            Mis Calificaciones
                        </h1>
                        <p className="text-slate-400 mt-1 text-sm">
                            Seguimiento completo de tu progreso en TAMP-B
                        </p>
                    </div>

                    {/* Mini progress pill */}
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 self-start md:self-auto">
                        <div>
                            <p className="text-xs text-slate-400 font-semibold">Progreso</p>
                            <p className="text-xl font-black text-white">{progressPct}%</p>
                        </div>
                        <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full rounded-full"
                                 style={{width: `${progressPct}%`, background: 'linear-gradient(90deg,#f97316,#ea580c)'}}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Content (overlaps hero) ── */}
            <div className="px-4 md:px-8 lg:px-12 -mt-14 pb-12">

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                        {
                            icon: FiBook,
                            label: 'Completados',
                            value: `${completed.length}/${total}`,
                            sub: 'exámenes',
                            iconBg: '#fff7ed',
                            iconColor: '#f97316',
                        },
                        {
                            icon: FiTrendingUp,
                            label: 'Promedio',
                            value: `${avgScore}%`,
                            sub: avgScore >= 80 ? 'Aprobado ✓' : avgScore > 0 ? 'En progreso' : 'Sin datos',
                            iconBg: '#eff6ff',
                            iconColor: '#3b82f6',
                        },
                        {
                            icon: FiCheckCircle,
                            label: 'Aprobados',
                            value: passed,
                            sub: '≥ 80% de calif.',
                            iconBg: '#f0fdf4',
                            iconColor: '#16a34a',
                        },
                        {
                            icon: FiZap,
                            label: 'Pendientes',
                            value: total - completed.length,
                            sub: 'por completar',
                            iconBg: '#fdf4ff',
                            iconColor: '#a855f7',
                        },
                    ].map(s => (
                        <div key={s.label}
                             className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                 style={{background: s.iconBg}}>
                                <s.icon className="w-5 h-5" style={{color: s.iconColor}}/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{s.label}</p>
                                <p className="text-xl font-black text-slate-900 leading-tight">{s.value}</p>
                                <p className="text-xs text-slate-400">{s.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overall progress bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <FiBarChart2 className="w-4 h-4 text-orange-500"/>
                            <span className="text-sm font-black text-slate-800">Avance del curso</span>
                        </div>
                        <span className="text-sm font-black text-slate-600">{completed.length} de {total} exámenes</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700"
                             style={{
                                 width: `${progressPct}%`,
                                 background: 'linear-gradient(90deg,#f97316,#ea580c)',
                             }}/>
                    </div>
                    {/* Score distribution */}
                    {completed.length > 0 && (
                        <div className="flex gap-3 mt-3">
                            {[
                                {label: '≥90', count: completed.filter(e => e.score >= 90).length, color: '#16a34a'},
                                {label: '80–89', count: completed.filter(e => e.score >= 80 && e.score < 90).length, color: '#2563eb'},
                                {label: '70–79', count: completed.filter(e => e.score >= 70 && e.score < 80).length, color: '#d97706'},
                                {label: '<70', count: completed.filter(e => e.score < 70).length, color: '#dc2626'},
                            ].map(d => (
                                <div key={d.label} className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background: d.color}}/>
                                    <span className="text-xs text-slate-500 font-medium">{d.label}: <b className="text-slate-700">{d.count}</b></span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Filters & search */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                    {/* Search */}
                    <div className="relative flex-1">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Buscar examen..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>

                    {/* Filter pills */}
                    <div className="flex gap-2 bg-white rounded-xl border border-slate-200 p-1">
                        {(['all', 'completed', 'pending'] as FilterType[]).map(f => {
                            const labels = {all: 'Todos', completed: 'Completados', pending: 'Pendientes'};
                            return (
                                <button key={f} onClick={() => setFilter(f)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                            filter === f
                                                ? 'text-white shadow-sm'
                                                : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                        style={filter === f ? {background: 'linear-gradient(135deg,#f97316,#ea580c)'} : {}}>
                                    {labels[f]}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3">
                        <FiFilter className="w-4 h-4 text-slate-400 flex-shrink-0"/>
                        <select value={sortBy} onChange={e => setSortBy(e.target.value as SortType)}
                                className="text-sm py-2.5 outline-none bg-transparent text-slate-700 font-medium cursor-pointer">
                            <option value="name">Por nombre</option>
                            <option value="score">Por calificación</option>
                            <option value="date">Por fecha</option>
                        </select>
                    </div>
                </div>

                {/* Results count */}
                <p className="text-xs text-slate-400 font-semibold mb-4">
                    Mostrando {displayed.length} examen{displayed.length !== 1 ? 'es' : ''}
                    {search && ` para "${search}"`}
                </p>

                {/* Exam list */}
                {displayed.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-16 flex flex-col items-center">
                        <FiTarget className="w-14 h-14 text-slate-200 mb-4"/>
                        <p className="text-slate-500 font-semibold">No se encontraron exámenes</p>
                        <p className="text-slate-400 text-sm mt-1">Intenta cambiar los filtros</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {displayed.map(exam => {
                            const s = scoreStyle(exam.score, exam.completed);
                            return (
                                <div key={exam.id}
                                     className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-all duration-150 group">

                                    {/* Score ring */}
                                    <ScoreRing score={exam.score} completed={exam.completed} size={48}/>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-black text-slate-900 leading-tight truncate pr-2">
                                            {exam.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            {exam.completed ? (
                                                <>
                                                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                          style={{background: s.bg, color: s.color}}>
                                                        {s.label}
                                                    </span>
                                                    {exam.totalQuestions > 0 && (
                                                        <span className="text-xs text-slate-400">
                                                            {exam.correctAnswers}/{exam.totalQuestions} respuestas
                                                        </span>
                                                    )}
                                                </>
                                            ) : (
                                                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                                    <FiClock className="w-3 h-3"/> Pendiente
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className="text-right flex-shrink-0">
                                        {exam.completed ? (
                                            <>
                                                <p className="text-lg font-black" style={{color: s.color}}>
                                                    {exam.score}%
                                                </p>
                                                {exam.completedAt && (
                                                    <p className="text-xs text-slate-400">
                                                        {exam.completedAt.toLocaleDateString('es-MX', {day: 'numeric', month: 'short'})}
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg">
                                                <FiAward className="w-3 h-3"/> Estudiar
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* CTA if nothing done yet */}
                {completed.length === 0 && (
                    <div className="mt-6 rounded-2xl overflow-hidden"
                         style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <p className="text-white font-black text-lg">¿Listo para comenzar?</p>
                                <p className="text-slate-400 text-sm mt-1">Completa tu primer examen y ve tu progreso aquí.</p>
                            </div>
                            <NavLink to={AllRoutes.EMT}
                                     className="flex-shrink-0 px-5 py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                                     style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 14px rgba(249,115,22,0.4)'}}>
                                Ir a estudiar →
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
