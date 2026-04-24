import {useCallback, useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {doc, getDoc, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebase/firebaseConfig';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useAuth} from '../../../Providers/AuthProvider';
import {
    FiAward,
    FiBarChart2,
    FiBook,
    FiCheckCircle,
    FiLogOut,
    FiMessageSquare,
    FiTarget,
    FiTrendingUp,
    FiUser,
    FiFileText,
} from 'react-icons/fi';
import logo from '../../../assets/logo.png';

interface ExamData {
    completed: boolean;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    completedAt?: Timestamp;
}

interface StudentData {
    id: string;
    name: string;
    email: string;
    role: string;
    exams: Record<string, ExamData>;
    createdAt: Timestamp;
    photoURL?: string;
    attendance?: number;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function getScoreGrade(score: number) {
    if (score >= 90) return {label: 'Excelente', color: '#16a34a', bg: '#dcfce7'};
    if (score >= 80) return {label: 'Muy Bien', color: '#2563eb', bg: '#dbeafe'};
    if (score >= 70) return {label: 'Bien', color: '#d97706', bg: '#fef3c7'};
    if (score > 0)   return {label: 'Necesita mejorar', color: '#dc2626', bg: '#fee2e2'};
    return {label: 'Sin datos', color: '#64748b', bg: '#f1f5f9'};
}

function getInitials(name?: string | null) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function RadialProgress({value, size = 96}: {value: number; size?: number}) {
    const r = 36;
    const circ = 2 * Math.PI * r;
    const dash = (value / 100) * circ;

    return (
        <svg width={size} height={size} viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={r} fill="none" stroke="#e2e8f0" strokeWidth="7"/>
            <circle cx="40" cy="40" r={r} fill="none" stroke="url(#prog)" strokeWidth="7"
                    strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
                    transform="rotate(-90 40 40)" style={{transition: 'stroke-dasharray 0.8s ease'}}/>
            <defs>
                <linearGradient id="prog" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="100%" stopColor="#ea580c"/>
                </linearGradient>
            </defs>
            <text x="40" y="44" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f172a">
                {value}%
            </text>
        </svg>
    );
}

// ── Quick nav cards ────────────────────────────────────────────────────────────
const NAV_CARDS = [
    {
        to: AllRoutes.EMT,
        icon: FiBook,
        label: 'Estudiar',
        desc: 'Lecciones y exámenes',
        gradient: 'linear-gradient(135deg,#f97316,#ea580c)',
        shadow: 'rgba(249,115,22,0.35)',
    },
    {
        to: AllRoutes.STUDENT_GRADES,
        icon: FiBarChart2,
        label: 'Calificaciones',
        desc: 'Mis resultados',
        gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
        shadow: 'rgba(59,130,246,0.35)',
    },
    {
        to: AllRoutes.STUDENT_TASKS,
        icon: FiFileText,
        label: 'Tareas',
        desc: 'Entregas pendientes',
        gradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
        shadow: 'rgba(139,92,246,0.35)',
    },
    {
        to: AllRoutes.STUDENT_FORUM,
        icon: FiMessageSquare,
        label: 'Foro',
        desc: 'Preguntas y debate',
        gradient: 'linear-gradient(135deg,#10b981,#059669)',
        shadow: 'rgba(16,185,129,0.35)',
    },
    {
        to: AllRoutes.STUDENT_PROFILE,
        icon: FiUser,
        label: 'Mi Perfil',
        desc: 'Editar información',
        gradient: 'linear-gradient(135deg,#f43f5e,#e11d48)',
        shadow: 'rgba(244,63,94,0.35)',
    },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function StudentDashboard() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    const [examStats, setExamStats] = useState({
        completed: 0,
        total: 44,
        averageScore: 0,
        passed: 0,           // >= 80
        recentExams: [] as {name: string; score: number; completedAt?: Date}[],
    });

    useEffect(() => { setMounted(true); }, []);

    const fetchStudentData = useCallback(async () => {
        if (!user?.id) return;
        try {
            const userDoc = await getDoc(doc(db, 'users', user.id));
            if (userDoc.exists()) {
                const data = userDoc.data() as StudentData;
                setStudentData(data);
                calculateStats(data.exams || {});
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
            toast.error('Error al cargar los datos del estudiante');
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        if (!user) return;
        fetchStudentData();
    }, [user, navigate, fetchStudentData]);

    const calculateStats = (exams: Record<string, ExamData>) => {
        const entries = Object.entries(exams);
        const completedEntries = entries.filter(([, e]) => e.completed);
        const completed = completedEntries.length;
        const totalScore = completedEntries.reduce((s, [, e]) => s + (e.score || 0), 0);
        const averageScore = completed > 0 ? Math.round(totalScore / completed) : 0;
        const passed = completedEntries.filter(([, e]) => e.score >= 80).length;

        // Last 4 completed sorted by date desc
        const recentExams = completedEntries
            .map(([id, e]) => ({
                name: `Examen ${id}`,
                score: e.score,
                completedAt: e.completedAt?.toDate?.(),
            }))
            .sort((a, b) => (b.completedAt?.getTime() ?? 0) - (a.completedAt?.getTime() ?? 0))
            .slice(0, 4);

        setExamStats({completed, total: 44, averageScore, passed, recentExams});
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate(AllRoutes.LOGIN);
        } catch (_) {}
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                 style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                <div className="flex flex-col items-center gap-3">
                    <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500"/>
                    <p className="text-slate-400 text-sm">Cargando tu espacio...</p>
                </div>
            </div>
        );
    }

    const progressPct = Math.round((examStats.completed / examStats.total) * 100);
    const grade = getScoreGrade(examStats.averageScore);
    const displayName = studentData?.name || user?.name || 'Estudiante';

    return (
        <div
            className="min-h-screen"
            style={{
                background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 40%,#f1f5f9 40%)',
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.4s ease',
            }}
        >
            {/* ── Top bar ── */}
            <header className="px-4 md:px-8 lg:px-12 pt-6 pb-0 flex items-center justify-between">
                <NavLink to={AllRoutes.MAIN} className="flex items-center gap-2.5">
                    <img src={logo} alt="Rescate 1"
                         className="w-9 h-9 rounded-full ring-2 ring-orange-500/40"/>
                    <div>
                        <p className="text-white font-black text-sm leading-tight">Rescate 1</p>
                        <p className="text-orange-400 text-xs font-semibold">TAMP-B</p>
                    </div>
                </NavLink>

                <div className="flex items-center gap-3">
                    <NavLink to={AllRoutes.STUDENT_PROFILE}
                             className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full pl-1 pr-3 py-1 transition-all group">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                             style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                            {studentData?.photoURL
                                ? <img src={studentData.photoURL} alt="" className="w-7 h-7 rounded-full object-cover"/>
                                : getInitials(displayName)}
                        </div>
                        <span className="text-white text-xs font-semibold hidden sm:block">
                            {displayName.split(' ')[0]}
                        </span>
                    </NavLink>
                    <button onClick={handleLogout}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
                            title="Cerrar sesión">
                        <FiLogOut className="w-4 h-4"/>
                    </button>
                </div>
            </header>

            {/* ── Hero greeting ── */}
            <div className="px-4 md:px-8 lg:px-12 pt-8 pb-20">
                <p className="text-orange-400 text-sm font-semibold mb-1">
                    {new Date().toLocaleDateString('es-MX', {weekday: 'long', day: 'numeric', month: 'long'})}
                </p>
                <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    Hola, {displayName.split(' ')[0]} 👋
                </h1>
                <p className="text-slate-400 mt-1 text-sm">
                    {examStats.completed === 0
                        ? 'Comienza tu primer examen hoy'
                        : `Llevas ${examStats.completed} de ${examStats.total} exámenes completados`}
                </p>
            </div>

            {/* ── Main content (overlaps hero) ── */}
            <div className="px-4 md:px-8 lg:px-12 -mt-12 pb-12">

                {/* ── Stats row ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Progress card — wider */}
                    <div className="col-span-2 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-5 border border-slate-100">
                        <RadialProgress value={progressPct}/>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Progreso del curso</p>
                            <p className="text-2xl font-black text-slate-900">{examStats.completed}
                                <span className="text-slate-400 text-lg font-semibold">/{examStats.total}</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">exámenes completados</p>
                            {/* Progress bar */}
                            <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full transition-all duration-700"
                                     style={{
                                         width: `${progressPct}%`,
                                         background: 'linear-gradient(90deg,#f97316,#ea580c)'
                                     }}/>
                            </div>
                        </div>
                    </div>

                    {/* Average */}
                    <div className="bg-white rounded-2xl shadow-lg p-5 border border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Promedio</p>
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                                 style={{background: grade.bg}}>
                                <FiTrendingUp className="w-4 h-4" style={{color: grade.color}}/>
                            </div>
                        </div>
                        <p className="text-3xl font-black text-slate-900">{examStats.averageScore}
                            <span className="text-slate-400 text-lg font-semibold">%</span>
                        </p>
                        <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-bold"
                              style={{background: grade.bg, color: grade.color}}>
                            {grade.label}
                        </span>
                    </div>

                    {/* Passed */}
                    <div className="bg-white rounded-2xl shadow-lg p-5 border border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Aprobados</p>
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-50">
                                <FiCheckCircle className="w-4 h-4 text-emerald-600"/>
                            </div>
                        </div>
                        <p className="text-3xl font-black text-slate-900">{examStats.passed}</p>
                        <p className="text-xs text-slate-400 mt-2">≥ 80% de calificación</p>
                    </div>
                </div>

                {/* ── Nav cards ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                    {NAV_CARDS.map(({to, icon: Icon, label, desc, gradient, shadow}) => (
                        <NavLink key={to} to={to}
                                 className="group flex flex-col items-center justify-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                                 style={{background: gradient, boxShadow: `0 4px 12px ${shadow}`}}>
                                <Icon className="w-5 h-5 text-white"/>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-black text-slate-800">{label}</p>
                                <p className="text-xs text-slate-400 hidden sm:block">{desc}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>

                {/* ── Bottom section ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Recent exams */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <FiAward className="w-4 h-4 text-orange-500"/>
                                <h2 className="font-black text-slate-900 text-sm">Exámenes Recientes</h2>
                            </div>
                            <NavLink to={AllRoutes.STUDENT_GRADES}
                                     className="text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                                Ver todos →
                            </NavLink>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {examStats.recentExams.length === 0 ? (
                                <div className="py-12 text-center">
                                    <FiTarget className="w-10 h-10 mx-auto text-slate-200 mb-3"/>
                                    <p className="text-slate-400 text-sm font-medium">Aún no has completado exámenes</p>
                                    <NavLink to={AllRoutes.EMT}
                                             className="inline-block mt-3 px-4 py-2 rounded-xl text-white text-xs font-bold"
                                             style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                        Comenzar ahora
                                    </NavLink>
                                </div>
                            ) : (
                                examStats.recentExams.map((ex, i) => {
                                    const g = getScoreGrade(ex.score);
                                    return (
                                        <div key={i} className="flex items-center gap-4 px-6 py-3.5">
                                            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                                 style={{background: g.bg}}>
                                                <span className="text-xs font-black" style={{color: g.color}}>
                                                    {ex.score}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-slate-800 truncate">{ex.name}</p>
                                                <p className="text-xs text-slate-400">
                                                    {ex.completedAt?.toLocaleDateString('es-MX') ?? 'Sin fecha'}
                                                </p>
                                            </div>
                                            <span className="text-xs font-bold px-2 py-1 rounded-lg"
                                                  style={{background: g.bg, color: g.color}}>
                                                {g.label}
                                            </span>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* Quick tips / motivational card */}
                    <div className="rounded-2xl overflow-hidden relative flex flex-col justify-between"
                         style={{background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', minHeight: 240}}>
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                             style={{background: 'radial-gradient(circle,#f97316,transparent)', transform: 'translate(30%,-30%)'}}/>
                        <div className="p-6 relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                                  style={{background: 'rgba(249,115,22,0.15)', color: '#f97316'}}>
                                💡 Consejo del día
                            </span>
                            <h3 className="text-white font-black text-lg leading-snug mb-2">
                                La constancia supera al talento
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Estudia al menos un tema por día. Pequeños avances consistentes te llevarán a dominar todo el contenido TAMP-B.
                            </p>
                        </div>
                        <div className="p-6 pt-0 relative z-10">
                            <NavLink to={AllRoutes.EMT}
                                     className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                                     style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 16px rgba(249,115,22,0.4)'}}>
                                <FiBook className="w-4 h-4"/> Continuar estudiando
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
