import React, {useState} from 'react';
import {NavLink} from 'react-router';
import {AllRoutes} from '../../components/Router/Router.constants';
import {ImSpinner2} from 'react-icons/im';
import {
    FiAlertCircle,
    FiArrowLeft,
    FiArrowUpRight,
    FiCheck,
    FiCheckCircle,
    FiClock,
    FiExternalLink,
    FiFileText,
    FiLink,
    FiStar,
    FiX,
} from 'react-icons/fi';
import useStudentTasks, {Task, TaskSubmission} from '../../hooks/useStudentTasks.hook';

// ── Helpers ────────────────────────────────────────────────────────────────────
function scoreStyle(score: number, max: number) {
    const pct = max > 0 ? (score / max) * 100 : 0;
    if (pct >= 90) return {color: '#16a34a', bg: '#dcfce7', label: 'Excelente'};
    if (pct >= 80) return {color: '#2563eb', bg: '#dbeafe', label: 'Muy Bien'};
    if (pct >= 70) return {color: '#d97706', bg: '#fef3c7', label: 'Aprobado'};
    return {color: '#dc2626', bg: '#fee2e2', label: 'Repaso'};
}

export default function StudentTasks() {
    const {tasks, mySubmissions, loading, submitTask, isTaskOpen, getTaskStatus, hasSubmitted, getSubmission} = useStudentTasks();

    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [submissionLink, setSubmissionLink] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => { setMounted(true); }, []);

    const handleSubmitTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTask || !submissionLink.trim()) return;
        setSubmitting(true);
        try {
            await submitTask(selectedTask.id, submissionLink.trim());
            setShowModal(false);
            setSelectedTask(null);
            setSubmissionLink('');
        } finally {
            setSubmitting(false);
        }
    };

    const pending   = tasks.filter((t: Task) => isTaskOpen(t) && !hasSubmitted(t.id)).length;
    const graded    = mySubmissions.filter((s: TaskSubmission) => s.isGraded).length;

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
                 background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 36%,#f1f5f9 36%)',
                 opacity: mounted ? 1 : 0,
                 transition: 'opacity 0.4s ease',
             }}>

            {/* ── Hero ── */}
            <div className="px-4 md:px-8 lg:px-12 pt-6 pb-28">
                <NavLink to={AllRoutes.STUDENT_DASHBOARD}
                         className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group">
                    <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"/>
                    Volver al panel
                </NavLink>
                <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-1">Académico</p>
                <h1 className="text-3xl md:text-4xl font-black text-white">Mis Tareas</h1>
                <p className="text-slate-400 mt-1 text-sm">Gestiona tus entregas y revisa tus calificaciones</p>
            </div>

            {/* ── Content ── */}
            <div className="px-4 md:px-8 lg:px-12 -mt-16 pb-12">

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                        {icon: FiFileText, label: 'Total', value: tasks.length, iconBg: '#fff7ed', iconColor: '#f97316'},
                        {icon: FiCheckCircle, label: 'Entregadas', value: mySubmissions.length, iconBg: '#f0fdf4', iconColor: '#16a34a'},
                        {icon: FiClock, label: 'Pendientes', value: pending, iconBg: '#fef3c7', iconColor: '#d97706'},
                        {icon: FiStar, label: 'Calificadas', value: graded, iconBg: '#fdf4ff', iconColor: '#a855f7'},
                    ].map(s => (
                        <div key={s.label} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                 style={{background: s.iconBg}}>
                                <s.icon className="w-5 h-5" style={{color: s.iconColor}}/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{s.label}</p>
                                <p className="text-2xl font-black text-slate-900">{s.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Task list */}
                {tasks.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-20 flex flex-col items-center">
                        <FiFileText className="w-14 h-14 text-slate-200 mb-4"/>
                        <p className="text-slate-500 font-semibold text-lg">No hay tareas disponibles</p>
                        <p className="text-slate-400 text-sm mt-1">Las tareas aparecerán aquí cuando sean publicadas</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {tasks.map((task: Task) => {
                            const taskStatus  = getTaskStatus(task);
                            const submission  = getSubmission(task.id);
                            const isSubmitted = hasSubmitted(task.id);
                            const open        = isTaskOpen(task);

                            const statusStyle = taskStatus.color === 'green'
                                ? {bg: '#dcfce7', color: '#16a34a', icon: FiCheckCircle}
                                : taskStatus.color === 'yellow'
                                    ? {bg: '#fef3c7', color: '#d97706', icon: FiClock}
                                    : {bg: '#fee2e2', color: '#dc2626', icon: FiAlertCircle};

                            const ss = submission?.isGraded
                                ? scoreStyle(submission.score ?? 0, task.maxScore)
                                : null;

                            return (
                                <div key={task.id}
                                     className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                    {/* Top accent */}
                                    <div className="h-1" style={{
                                        background: open && !isSubmitted
                                            ? 'linear-gradient(90deg,#f97316,#ea580c)'
                                            : isSubmitted
                                                ? 'linear-gradient(90deg,#22c55e,#16a34a)'
                                                : '#e2e8f0'
                                    }}/>

                                    <div className="p-6">
                                        {/* Header row */}
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-black text-slate-900">{task.title}</h3>
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                                                          style={{background: statusStyle.bg, color: statusStyle.color}}>
                                                        <statusStyle.icon className="w-3 h-3"/>
                                                        {taskStatus.label}
                                                    </span>
                                                    {isSubmitted && (
                                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600">
                                                            <FiCheck className="w-3 h-3"/> Entregada
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-slate-500 text-sm">{task.description}</p>
                                            </div>
                                            {/* Max score pill */}
                                            <div className="flex-shrink-0 text-right">
                                                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                                                    <FiStar className="w-3.5 h-3.5 text-orange-400"/>
                                                    <span className="text-sm font-black text-slate-700">{task.maxScore} pts</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dates */}
                                        <div className="flex flex-wrap gap-4 mb-4">
                                            {[
                                                {icon: FiCheck, label: 'Apertura', date: task.openDate.toDate()},
                                                {icon: FiClock, label: 'Cierre', date: task.closeDate.toDate()},
                                            ].map(d => (
                                                <div key={d.label} className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                                                        <d.icon className="w-3.5 h-3.5 text-slate-500"/>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-slate-400 font-semibold">{d.label}</p>
                                                        <p className="text-sm font-bold text-slate-700">
                                                            {d.date.toLocaleDateString('es-MX', {day: 'numeric', month: 'short', year: 'numeric'})}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Submission section */}
                                        {isSubmitted && submission ? (
                                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <p className="text-xs font-black text-slate-600 uppercase tracking-wide">Mi entrega</p>
                                                    <span className="text-xs text-slate-400">
                                                        {submission.submittedAt.toDate().toLocaleDateString('es-MX')}
                                                    </span>
                                                </div>
                                                <a href={submission.submissionLink} target="_blank" rel="noopener noreferrer"
                                                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold mb-3 break-all transition-colors">
                                                    <FiLink className="w-4 h-4 flex-shrink-0"/>
                                                    {submission.submissionLink}
                                                    <FiExternalLink className="w-3.5 h-3.5 flex-shrink-0"/>
                                                </a>

                                                {submission.isGraded && ss ? (
                                                    <div className="mt-3 p-4 rounded-xl bg-white border border-slate-200">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-sm font-black text-slate-800">Calificación</span>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-2xl font-black" style={{color: ss.color}}>
                                                                    {submission.score}
                                                                </span>
                                                                <span className="text-slate-400 font-semibold">/{task.maxScore}</span>
                                                                <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                                                                      style={{background: ss.bg, color: ss.color}}>
                                                                    {ss.label}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {submission.feedback && (
                                                            <div className="mt-2 pt-2 border-t border-slate-100">
                                                                <p className="text-xs font-semibold text-slate-500 mb-1">Retroalimentación</p>
                                                                <p className="text-sm text-slate-700">{submission.feedback}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-yellow-50 border border-yellow-200">
                                                        <FiClock className="w-4 h-4 text-yellow-600 flex-shrink-0"/>
                                                        <span className="text-sm font-semibold text-yellow-800">Pendiente de calificación</span>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="flex justify-end">
                                                {open ? (
                                                    <button onClick={() => { setSelectedTask(task); setShowModal(true); }}
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                                                            style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 12px rgba(249,115,22,0.35)'}}>
                                                        <FiArrowUpRight className="w-4 h-4"/> Entregar tarea
                                                    </button>
                                                ) : taskStatus.status === 'pending' ? (
                                                    <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                                                        <FiClock className="w-4 h-4"/> Aún no disponible
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-1.5 text-red-400 text-sm font-medium">
                                                        <FiX className="w-4 h-4"/> Tiempo agotado
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── Submit modal ── */}
            {showModal && selectedTask && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                     style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                        <div className="p-5 border-b border-slate-100">
                            <h3 className="text-lg font-black text-slate-900">Entregar tarea</h3>
                            <p className="text-sm text-slate-500 mt-0.5 truncate">{selectedTask.title}</p>
                        </div>
                        <form onSubmit={handleSubmitTask} className="p-5 space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                                    Enlace de tu entrega
                                </label>
                                <div className="relative">
                                    <FiLink className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                    <input
                                        type="url" value={submissionLink} required
                                        onChange={e => setSubmissionLink(e.target.value)}
                                        placeholder="https://drive.google.com/..."
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm font-medium outline-none transition-all focus:border-orange-400"
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-1.5 ml-1">
                                    Asegúrate que el enlace sea público o con permisos de visualización
                                </p>
                            </div>
                            <div className="flex gap-3 pt-1">
                                <button type="button"
                                        onClick={() => {setShowModal(false); setSelectedTask(null); setSubmissionLink('');}}
                                        className="flex-1 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" disabled={submitting}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm transition-all disabled:opacity-60"
                                        style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                    {submitting
                                        ? <><ImSpinner2 className="animate-spin w-4 h-4"/> Entregando...</>
                                        : <><FiCheckCircle className="w-4 h-4"/> Entregar</>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
