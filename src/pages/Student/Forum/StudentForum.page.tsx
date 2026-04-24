import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useForum} from '../../../hooks/useForum.hook';
import {useForumStats} from '../../../hooks/useForumStats.hook';
import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebase/firebaseConfig';
import {useAuth} from '../../../Providers/AuthProvider';
import {lections} from '../../../App.constants.tsx';
import {
    FiArrowLeft,
    FiChevronRight,
    FiMessageCircle,
    FiMessageSquare,
    FiPlus,
    FiSend,
    FiUser,
    FiX,
} from 'react-icons/fi';

type ForumFilter = 'all' | 'mine';

function getInitials(name?: string | null) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function timeAgo(date: Date): string {
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1)  return 'Ahora';
    if (mins < 60) return `Hace ${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)  return `Hace ${hrs}h`;
    const days = Math.floor(hrs / 24);
    if (days < 7)  return `Hace ${days}d`;
    return date.toLocaleDateString('es-MX', {day: 'numeric', month: 'short'});
}

export default function StudentForum() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState('general-exam');
    const [showNewThreadModal, setShowNewThreadModal] = useState(false);
    const [showReplyFor, setShowReplyFor] = useState<string | null>(null);
    const [newThreadContent, setNewThreadContent] = useState('');
    const [replyContent, setReplyContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [forumFilter, setForumFilter] = useState<ForumFilter>('all');
    const [mounted, setMounted] = useState(false);

    const {threads, loading, getUserThreadsWithOtherReplies} = useForum(selectedPage);
    const {stats: forumStats, loading: statsLoading} = useForumStats();

    useEffect(() => { setMounted(true); }, []);
    useEffect(() => {
        if (!user) navigate(AllRoutes.LOGIN);
    }, [user, navigate]);

    const handleSubmitThread = async () => {
        if (!user || !newThreadContent.trim()) { toast.error('Por favor escribe tu pregunta'); return; }
        setSubmitting(true);
        try {
            await addDoc(collection(db, 'forum'), {
                nombre: user.name || user.email?.split('@')[0] || 'Usuario',
                correo: user.id,
                contenido: newThreadContent.trim(),
                timestamp: Timestamp.now(),
                pagina: selectedPage,
                parentId: null,
                isThread: true,
                replyCount: 0,
            });
            setNewThreadContent('');
            setShowNewThreadModal(false);
            toast.success('Pregunta publicada');
        } catch (_) {
            toast.error('Error al publicar la pregunta');
        } finally {
            setSubmitting(false);
        }
    };

    const handleSubmitReply = async (parentId: string) => {
        if (!user || !replyContent.trim()) { toast.error('Por favor escribe tu respuesta'); return; }
        setSubmitting(true);
        try {
            await addDoc(collection(db, 'forum'), {
                nombre: user.name || user.email?.split('@')[0] || 'Usuario',
                correo: user.email,
                contenido: replyContent.trim(),
                timestamp: Timestamp.now(),
                pagina: selectedPage,
                parentId,
                isThread: false,
                replyCount: 0,
            });
            setReplyContent('');
            setShowReplyFor(null);
            toast.success('Respuesta publicada');
        } catch (_) {
            toast.error('Error al publicar la respuesta');
        } finally {
            setSubmitting(false);
        }
    };

    const filteredThreads = forumFilter === 'mine' && user
        ? getUserThreadsWithOtherReplies(user.email ?? '')
        : threads;

    const selectedLection = lections.find(p => p.key === selectedPage);
    const totalThreads    = Object.values(forumStats).reduce((a: number, b: number) => a + b, 0);

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
                 background: '#f1f5f9',
                 opacity: mounted ? 1 : 0,
                 transition: 'opacity 0.4s ease',
             }}>

            {/* ── Top bar ── */}
            <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center gap-4">
                <NavLink to={AllRoutes.STUDENT_DASHBOARD}
                         className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all">
                    <FiArrowLeft className="w-5 h-5"/>
                </NavLink>
                <div className="flex-1">
                    <h1 className="text-base font-black text-slate-900">Foro de Discusión</h1>
                    <p className="text-xs text-slate-400">{totalThreads} conversaciones en total</p>
                </div>
                <button onClick={() => setShowNewThreadModal(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                        style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 12px rgba(249,115,22,0.35)'}}>
                    <FiPlus className="w-4 h-4"/> Nueva pregunta
                </button>
            </header>

            <div className="flex max-w-7xl mx-auto px-4 md:px-8 py-6 gap-6">

                {/* ── Sidebar ── */}
                <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 gap-3">
                    {/* Filter pills */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1 flex gap-1">
                        {(['all', 'mine'] as ForumFilter[]).map(f => (
                            <button key={f} onClick={() => setForumFilter(f)}
                                    className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                        forumFilter === f ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                    style={forumFilter === f ? {background: 'linear-gradient(135deg,#f97316,#ea580c)'} : {}}>
                                {f === 'all' ? 'Todas' : 'Mis preguntas'}
                            </button>
                        ))}
                    </div>

                    {/* Topics list */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="px-4 py-3 border-b border-slate-100">
                            <p className="text-xs font-black text-slate-600 uppercase tracking-wide">Temas</p>
                        </div>
                        <div className="divide-y divide-slate-50 max-h-[calc(100vh-240px)] overflow-y-auto">
                            {lections.map(page => {
                                const count   = forumStats[page.key] || 0;
                                const isActive = selectedPage === page.key;
                                return (
                                    <button key={page.key} onClick={() => setSelectedPage(page.key)}
                                            className={`w-full text-left px-4 py-2.5 flex items-center justify-between gap-2 transition-colors ${
                                                isActive ? 'bg-orange-50' : 'hover:bg-slate-50'
                                            }`}>
                                        <span className={`text-sm truncate flex-1 ${isActive ? 'font-bold text-orange-600' : 'text-slate-600 font-medium'}`}>
                                            {page.title}
                                        </span>
                                        <span className={`flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                                            isActive ? 'bg-orange-200 text-orange-800' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                            {statsLoading ? '·' : count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* ── Main content ── */}
                <div className="flex-1 min-w-0">
                    {/* Mobile topic selector */}
                    <div className="lg:hidden mb-4">
                        <select value={selectedPage} onChange={e => setSelectedPage(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 outline-none focus:border-orange-400">
                            {lections.map(p => (
                                <option key={p.key} value={p.key}>{p.title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Section header */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-black text-slate-900">{selectedLection?.title || 'General'}</h2>
                            <p className="text-sm text-slate-400">{filteredThreads.length} conversación{filteredThreads.length !== 1 ? 'es' : ''}</p>
                        </div>
                        {/* Mobile filter */}
                        <div className="lg:hidden flex gap-1 bg-white rounded-xl border border-slate-200 p-1">
                            {(['all', 'mine'] as ForumFilter[]).map(f => (
                                <button key={f} onClick={() => setForumFilter(f)}
                                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                            forumFilter === f ? 'text-white' : 'text-slate-500'
                                        }`}
                                        style={forumFilter === f ? {background: 'linear-gradient(135deg,#f97316,#ea580c)'} : {}}>
                                    {f === 'all' ? 'Todas' : 'Mías'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Threads */}
                    {filteredThreads.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm py-20 flex flex-col items-center">
                            <FiMessageSquare className="w-14 h-14 text-slate-200 mb-4"/>
                            <p className="text-slate-500 font-semibold text-lg">No hay discusiones aún</p>
                            <p className="text-slate-400 text-sm mt-1 mb-4">Sé el primero en preguntar sobre este tema</p>
                            <button onClick={() => setShowNewThreadModal(true)}
                                    className="px-5 py-2.5 rounded-xl text-white text-sm font-bold"
                                    style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                Hacer una pregunta
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredThreads.map(thread => {
                                const isOwn   = thread.message.correo === user?.email || thread.message.correo === user?.id;
                                const dateStr = timeAgo(thread.message.timestamp.toDate());

                                return (
                                    <div key={thread.message.id}
                                         className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                        {/* Thread */}
                                        <div className="p-5">
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-black text-white"
                                                     style={{background: isOwn ? 'linear-gradient(135deg,#f97316,#ea580c)' : 'linear-gradient(135deg,#64748b,#475569)'}}>
                                                    {isOwn ? getInitials(user?.name) : <FiUser className="w-4 h-4"/>}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-sm font-bold text-slate-800">
                                                            {isOwn ? 'Tú' : thread.message.nombre}
                                                        </span>
                                                        {isOwn && (
                                                            <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-600 text-xs font-bold">Yo</span>
                                                        )}
                                                        <span className="text-xs text-slate-400 ml-auto">{dateStr}</span>
                                                    </div>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{thread.message.contenido}</p>
                                                    <div className="flex items-center gap-3 mt-3">
                                                        <button onClick={() => setShowReplyFor(showReplyFor === thread.message.id ? null : thread.message.id)}
                                                                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-orange-500 transition-colors">
                                                            <FiMessageCircle className="w-3.5 h-3.5"/>
                                                            Responder
                                                        </button>
                                                        {thread.replies.length > 0 && (
                                                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                                                <FiChevronRight className="w-3 h-3"/>
                                                                {thread.replies.length} respuesta{thread.replies.length !== 1 ? 's' : ''}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Replies */}
                                        {thread.replies.length > 0 && (
                                            <div className="border-t border-slate-50 bg-slate-50/50 divide-y divide-slate-100">
                                                {thread.replies.map(reply => {
                                                    const replyOwn = reply.correo === user?.email;
                                                    return (
                                                        <div key={reply.id} className="px-5 py-3.5 flex items-start gap-3 ml-6">
                                                            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-black text-white"
                                                                 style={{background: replyOwn ? 'linear-gradient(135deg,#f97316,#ea580c)' : '#94a3b8'}}>
                                                                {replyOwn ? getInitials(user?.name) : <FiUser className="w-3 h-3"/>}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className="text-xs font-bold text-slate-700">
                                                                        {replyOwn ? 'Tú' : reply.nombre}
                                                                    </span>
                                                                    <span className="text-xs text-slate-400 ml-auto">
                                                                        {timeAgo(reply.timestamp.toDate())}
                                                                    </span>
                                                                </div>
                                                                <p className="text-sm text-slate-600 leading-relaxed">{reply.contenido}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* Reply input */}
                                        {showReplyFor === thread.message.id && (
                                            <div className="border-t border-slate-100 px-5 py-4 bg-orange-50/30">
                                                <div className="flex gap-3">
                                                    <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-black text-white"
                                                         style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                                        {getInitials(user?.name)}
                                                    </div>
                                                    <div className="flex-1">
                                                        <textarea
                                                            value={replyContent}
                                                            onChange={e => setReplyContent(e.target.value)}
                                                            placeholder="Escribe tu respuesta..."
                                                            rows={2}
                                                            className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                                                        />
                                                        <div className="flex justify-end gap-2 mt-2">
                                                            <button onClick={() => setShowReplyFor(null)}
                                                                    className="px-3 py-1.5 rounded-lg text-slate-500 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                                                Cancelar
                                                            </button>
                                                            <button onClick={() => handleSubmitReply(thread.message.id)}
                                                                    disabled={submitting || !replyContent.trim()}
                                                                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-bold disabled:opacity-50 transition-all"
                                                                    style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                                                {submitting ? <ImSpinner2 className="animate-spin w-3 h-3"/> : <FiSend className="w-3 h-3"/>}
                                                                Responder
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* ── New thread modal ── */}
            {showNewThreadModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                     style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <div>
                                <h3 className="text-lg font-black text-slate-900">Nueva pregunta</h3>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    Tema: {selectedLection?.title || 'General'}
                                </p>
                            </div>
                            <button onClick={() => {setShowNewThreadModal(false); setNewThreadContent('');}}
                                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors">
                                <FiX className="w-5 h-5"/>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <textarea
                                value={newThreadContent}
                                onChange={e => setNewThreadContent(e.target.value)}
                                placeholder="¿Qué quieres preguntar sobre este tema?"
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                            />
                            <div className="flex gap-3">
                                <button onClick={() => {setShowNewThreadModal(false); setNewThreadContent('');}}
                                        className="flex-1 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
                                    Cancelar
                                </button>
                                <button onClick={handleSubmitThread}
                                        disabled={submitting || !newThreadContent.trim()}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm transition-all disabled:opacity-50"
                                        style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                    {submitting ? <ImSpinner2 className="animate-spin w-4 h-4"/> : <FiSend className="w-4 h-4"/>}
                                    Publicar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
