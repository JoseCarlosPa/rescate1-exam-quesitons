import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { useForum } from '../../../hooks/useForum.hook';
import { useForumStats } from '../../../hooks/useForumStats.hook';
import { useAuth } from '../../../Providers/AuthProvider';
import { lections } from '../../../App.constants.tsx';
import {
    FiArrowLeft,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiChevronUp,
    FiEdit2,
    FiMessageCircle,
    FiMessageSquare,
    FiPlus,
    FiSearch,
    FiSend,
    FiTrash2,
    FiUser,
    FiX,
    FiZap,
} from 'react-icons/fi';
import { ForumMessage } from '../../../types/forum.types';

type ForumFilter = 'all' | 'mine';

/* ─────────────── Helpers ─────────────── */

function getInitials(name?: string | null) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function avatarColorFromName(name: string): string {
    const colors = [
        'linear-gradient(135deg,#6366f1,#4f46e5)',
        'linear-gradient(135deg,#8b5cf6,#7c3aed)',
        'linear-gradient(135deg,#ec4899,#db2777)',
        'linear-gradient(135deg,#14b8a6,#0d9488)',
        'linear-gradient(135deg,#f59e0b,#d97706)',
        'linear-gradient(135deg,#10b981,#059669)',
        'linear-gradient(135deg,#3b82f6,#2563eb)',
        'linear-gradient(135deg,#ef4444,#dc2626)',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

function getRoleBadge(role?: string, guardRole?: string): { label: string; bg: string; color: string } | null {
    if (!role || role === 'Sin asignar') return null;
    if (role === 'Admin') return { label: 'Admin', bg: '#fef2f2', color: '#dc2626' };
    if (role === 'Moderador') return { label: 'Moderador', bg: '#eff6ff', color: '#2563eb' };
    if (role === 'Elemento') {
        if (!guardRole) return { label: 'Elemento', bg: '#fff7ed', color: '#ea580c' };
        const guardColors: Record<string, { bg: string; color: string }> = {
            'Jefe de Guardia':     { bg: '#ede9fe', color: '#5b21b6' },
            'Sub-jefe de Guardia': { bg: '#fef3c7', color: '#92400e' },
            'Naranja':             { bg: '#fff7ed', color: '#c2410c' },
            'Cadete':              { bg: '#f5f0eb', color: '#78350f' },
        };
        const style = guardColors[guardRole] ?? { bg: '#fff7ed', color: '#ea580c' };
        return { label: guardRole, ...style };
    }
    if (role === 'Alumno') return { label: 'Alumno', bg: '#fefce8', color: '#a16207' };
    return null;
}

function timeAgo(date: Date): string {
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Ahora';
    if (mins < 60) return `Hace ${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `Hace ${hrs}h`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `Hace ${days}d`;
    return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
}

function isRecent(date: Date): boolean {
    return Date.now() - date.getTime() < 24 * 60 * 60 * 1000;
}

/* ─────────────── Sub-componentes ─────────────── */

const REPLIES_PREVIEW = 2;
const THREADS_PER_PAGE = 10;

/** Placeholder cuando un mensaje fue eliminado */
function DeletedMessage({ isThread }: { isThread: boolean }) {
    return (
        <p className={`italic ${isThread ? 'text-sm' : 'text-xs'} text-slate-400 flex items-center gap-1.5`}>
            <FiTrash2 className="w-3 h-3 flex-shrink-0" />
            Este mensaje fue eliminado
        </p>
    );
}

/** Badge de "Editado" */
function EditedBadge({ date }: { date: Date }) {
    return (
        <span className="text-xs text-slate-400 italic ml-1" title={`Editado: ${date.toLocaleString('es-MX')}`}>
            · editado
        </span>
    );
}

/* ─────────────── Modal de confirmación de eliminación ─────────────── */
function ConfirmDeleteModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={e => { if (e.target === e.currentTarget) onCancel(); }}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" style={{ animation: 'modalIn 0.18s ease' }}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FiTrash2 className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                        <h3 className="text-base font-black text-slate-900">¿Eliminar mensaje?</h3>
                        <p className="text-xs text-slate-500">Se mostrará una marca de que fue eliminado.</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-5">
                    <button onClick={onCancel}
                        className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
                        Cancelar
                    </button>
                    <button onClick={onConfirm}
                        className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ background: 'linear-gradient(135deg,#ef4444,#dc2626)' }}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────── Paginación ─────────────── */
function Pagination({ page, total, perPage, onChange }: { page: number; total: number; perPage: number; onChange: (p: number) => void }) {
    const totalPages = Math.ceil(total / perPage);
    if (totalPages <= 1) return null;
    return (
        <div className="flex items-center justify-center gap-2 pt-2">
            <button
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
                <FiChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                    key={p}
                    onClick={() => onChange(p)}
                    className={`w-8 h-8 rounded-xl text-sm font-bold transition-all ${p === page
                        ? 'text-white shadow-sm'
                        : 'text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                    style={p === page ? { background: 'linear-gradient(135deg,#f97316,#ea580c)' } : {}}
                >
                    {p}
                </button>
            ))}
            <button
                onClick={() => onChange(page + 1)}
                disabled={page === totalPages}
                className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
                <FiChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
}

/* ─────────────── Componente principal ─────────────── */

export default function StudentForum() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [selectedPage, setSelectedPage] = useState('general-exam');
    const [showNewThreadModal, setShowNewThreadModal] = useState(false);
    const [showReplyFor, setShowReplyFor] = useState<string | null>(null);
    const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());
    const [expandedThreads, setExpandedThreads] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);

    // New thread
    const [newThreadTitle, setNewThreadTitle] = useState('');
    const [newThreadContent, setNewThreadContent] = useState('');

    // Reply
    const [replyContent, setReplyContent] = useState('');

    // Edit state
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');
    const [editTitle, setEditTitle] = useState('');

    // Delete confirm
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [forumFilter, setForumFilter] = useState<ForumFilter>('all');
    const [mounted, setMounted] = useState(false);

    const replyTextareaRef = useRef<HTMLTextAreaElement>(null);
    const titleInputRef = useRef<HTMLInputElement>(null);
    const editTextareaRef = useRef<HTMLTextAreaElement>(null);

    const { threads, loading, enviarThread, enviarRespuesta, getUserThreadsWithOtherReplies, editarMensaje, eliminarMensaje } = useForum(selectedPage);
    const { stats: forumStats, loading: statsLoading } = useForumStats();

    useEffect(() => { setMounted(true); }, []);
    useEffect(() => {
        if (!user) navigate(AllRoutes.LOGIN);
    }, [user, navigate]);

    useEffect(() => {
        if (showNewThreadModal) setTimeout(() => titleInputRef.current?.focus(), 50);
    }, [showNewThreadModal]);

    useEffect(() => {
        if (showReplyFor) setTimeout(() => replyTextareaRef.current?.focus(), 50);
    }, [showReplyFor]);

    useEffect(() => {
        if (editingId) setTimeout(() => editTextareaRef.current?.focus(), 50);
    }, [editingId]);

    // Reset paginación y estado al cambiar topic/filtro/búsqueda
    useEffect(() => {
        setExpandedThreads(new Set());
        setExpandedReplies(new Set());
        setShowReplyFor(null);
        setCurrentPage(1);
        setEditingId(null);
    }, [selectedPage, forumFilter, searchQuery]);

    /* ── Handlers ── */

    const handleSubmitThread = async () => {
        if (!newThreadTitle.trim()) { toast.error('Por favor escribe un título'); return; }
        if (!newThreadContent.trim()) { toast.error('Por favor escribe tu pregunta'); return; }
        setSubmitting(true);
        const ok = await enviarThread({
            nombre: user!.name || user!.email?.split('@')[0] || 'Usuario',
            correo: user!.id,
            titulo: newThreadTitle.trim(),
            contenido: newThreadContent.trim(),
            role: user!.role as any,
            guardRole: user!.guardRole as any,
        });
        setSubmitting(false);
        if (ok) {
            setNewThreadTitle(''); setNewThreadContent('');
            setShowNewThreadModal(false);
            toast.success('Pregunta publicada');
        } else {
            toast.error('Error al publicar la pregunta');
        }
    };

    const handleSubmitReply = async (parentId: string) => {
        if (!replyContent.trim()) { toast.error('Por favor escribe tu respuesta'); return; }
        setSubmitting(true);
        const ok = await enviarRespuesta({
            nombre: user!.name || user!.email?.split('@')[0] || 'Usuario',
            correo: user!.email ?? user!.id,
            contenido: replyContent.trim(),
            role: user!.role as any,
            guardRole: user!.guardRole as any,
        }, parentId);
        setSubmitting(false);
        if (ok) { setReplyContent(''); setShowReplyFor(null); toast.success('Respuesta publicada'); }
        else toast.error('Error al publicar la respuesta');
    };

    const startEdit = (msg: ForumMessage) => {
        setEditingId(msg.id);
        setEditContent(msg.contenido);
        setEditTitle(msg.titulo ?? '');
    };

    const handleSaveEdit = async (isThread: boolean) => {
        if (!editContent.trim()) { toast.error('El contenido no puede estar vacío'); return; }
        setSubmitting(true);
        const ok = await editarMensaje(
            editingId!,
            editContent,
            isThread ? editTitle : undefined,
        );
        setSubmitting(false);
        if (ok) { setEditingId(null); toast.success('Mensaje editado'); }
        else toast.error('Error al editar el mensaje');
    };

    const handleConfirmDelete = async () => {
        if (!deletingId) return;
        const ok = await eliminarMensaje(deletingId);
        setDeletingId(null);
        if (ok) toast.success('Mensaje eliminado');
        else toast.error('Error al eliminar el mensaje');
    };

    const toggleExpandReplies = (threadId: string) => {
        setExpandedReplies(prev => {
            const next = new Set(prev);
            next.has(threadId) ? next.delete(threadId) : next.add(threadId);
            return next;
        });
    };

    const toggleThread = (threadId: string) => {
        setExpandedThreads(prev => {
            const next = new Set(prev);
            if (next.has(threadId)) {
                next.delete(threadId);
                setShowReplyFor(r => r === threadId ? null : r);
                setEditingId(e => e === threadId ? null : e);
            } else {
                next.add(threadId);
            }
            return next;
        });
    };

    /* ── Filtered & paginated data ── */
    const baseThreads = forumFilter === 'mine' && user
        ? getUserThreadsWithOtherReplies(user.email ?? '')
        : threads;

    const filteredThreads = searchQuery.trim()
        ? baseThreads.filter(t => {
            const q = searchQuery.toLowerCase();
            return (
                t.message.contenido.toLowerCase().includes(q) ||
                (t.message.titulo ?? '').toLowerCase().includes(q) ||
                t.message.nombre.toLowerCase().includes(q) ||
                t.replies.some(r => r.contenido.toLowerCase().includes(q))
            );
        })
        : baseThreads;

    // const totalPages = Math.ceil(filteredThreads.length / THREADS_PER_PAGE);
    const paginatedThreads = filteredThreads.slice(
        (currentPage - 1) * THREADS_PER_PAGE,
        currentPage * THREADS_PER_PAGE
    );

    const selectedLection = lections.find(p => p.key === selectedPage);
    const totalThreads = Object.values(forumStats).reduce((a: number, b: number) => a + b, 0);

    /* ── Helpers de permisos ── */
    const isOwnerOf = (msg: ForumMessage) =>
        msg.correo === user?.email || msg.correo === user?.id;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)' }}>
                <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ background: '#f1f5f9', opacity: mounted ? 1 : 0, transition: 'opacity 0.4s ease' }}>

            {/* ── Top bar ── */}
            <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 md:px-8 py-3">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <NavLink to={AllRoutes.STUDENT_DASHBOARD}
                        className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all">
                        <FiArrowLeft className="w-5 h-5" />
                    </NavLink>
                    <div className="flex-1">
                        <h1 className="text-base font-black text-slate-900">Foro de Discusión</h1>
                        <p className="text-xs text-slate-400">{totalThreads} conversaciones en total</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 w-64 border border-transparent focus-within:border-orange-400 focus-within:bg-white transition-all">
                        <FiSearch className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Buscar en el foro..."
                            className="bg-transparent text-sm text-slate-700 outline-none flex-1 placeholder:text-slate-400" />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <FiX className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>
                    <button onClick={() => setShowNewThreadModal(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                        style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 12px rgba(249,115,22,0.35)' }}>
                        <FiPlus className="w-4 h-4" /> Nueva pregunta
                    </button>
                </div>
            </header>

            <div className="flex max-w-7xl mx-auto px-4 md:px-8 py-6 gap-6">

                {/* ── Sidebar ── */}
                <aside className="hidden lg:flex flex-col flex-shrink-0 gap-3" style={{ width: '17rem' }}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1 flex gap-1">
                        {(['all', 'mine'] as ForumFilter[]).map(f => (
                            <button key={f} onClick={() => setForumFilter(f)}
                                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${forumFilter === f ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                style={forumFilter === f ? { background: 'linear-gradient(135deg,#f97316,#ea580c)' } : {}}>
                                {f === 'all' ? 'Todas' : 'Mis preguntas'}
                            </button>
                        ))}
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                            <p className="text-xs font-black text-slate-600 uppercase tracking-wide flex-1">Temas</p>
                            {!statsLoading && <span className="text-xs text-slate-400">{totalThreads} total</span>}
                        </div>
                        <div className="divide-y divide-slate-50 max-h-[calc(100vh-260px)] overflow-y-auto">
                            {lections.map(page => {
                                const count = forumStats[page.key] || 0;
                                const isActive = selectedPage === page.key;
                                return (
                                    <button key={page.key} onClick={() => setSelectedPage(page.key)}
                                        className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${isActive ? 'bg-orange-50' : 'hover:bg-slate-50'}`}>
                                        <span className={`flex-1 text-sm truncate ${isActive ? 'font-bold text-orange-600' : 'text-slate-600 font-medium'}`}>
                                            {page.title}
                                        </span>
                                        {count > 0 && !statsLoading && (
                                            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-orange-200 text-orange-800' : 'bg-slate-100 text-slate-500'}`}>
                                                {count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* ── Main content ── */}
                <div className="flex-1 min-w-0">
                    {/* Mobile search */}
                    <div className="md:hidden mb-3">
                        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-slate-200 focus-within:border-orange-400 transition-all shadow-sm">
                            <FiSearch className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Buscar en el foro..."
                                className="bg-transparent text-sm text-slate-700 outline-none flex-1 placeholder:text-slate-400" />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-slate-400"><FiX className="w-3.5 h-3.5" /></button>
                            )}
                        </div>
                    </div>

                    {/* Mobile topic selector */}
                    <div className="lg:hidden mb-4">
                        <select value={selectedPage} onChange={e => setSelectedPage(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 outline-none focus:border-orange-400">
                            {lections.map(p => <option key={p.key} value={p.key}>{p.title}</option>)}
                        </select>
                    </div>

                    {/* Section header */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-black text-slate-900">{selectedLection?.title || 'General'}</h2>
                            <p className="text-sm text-slate-400">
                                {searchQuery
                                    ? `${filteredThreads.length} resultado${filteredThreads.length !== 1 ? 's' : ''} para "${searchQuery}"`
                                    : `${filteredThreads.length} conversación${filteredThreads.length !== 1 ? 'es' : ''}`}
                            </p>
                        </div>
                        <div className="lg:hidden flex gap-1 bg-white rounded-xl border border-slate-200 p-1">
                            {(['all', 'mine'] as ForumFilter[]).map(f => (
                                <button key={f} onClick={() => setForumFilter(f)}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${forumFilter === f ? 'text-white' : 'text-slate-500'}`}
                                    style={forumFilter === f ? { background: 'linear-gradient(135deg,#f97316,#ea580c)' } : {}}>
                                    {f === 'all' ? 'Todas' : 'Mías'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Threads */}
                    {filteredThreads.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm py-20 flex flex-col items-center">
                            <FiMessageSquare className="w-14 h-14 text-slate-200 mb-4" />
                            <p className="text-slate-500 font-semibold text-lg">
                                {searchQuery ? 'Sin resultados' : 'No hay discusiones aún'}
                            </p>
                            <p className="text-slate-400 text-sm mt-1 mb-4">
                                {searchQuery ? `No se encontraron hilos para "${searchQuery}"` : 'Sé el primero en preguntar sobre este tema'}
                            </p>
                            {!searchQuery && (
                                <button onClick={() => setShowNewThreadModal(true)}
                                    className="px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                                    style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                    Hacer una pregunta
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {paginatedThreads.map(thread => {
                                const own = isOwnerOf(thread.message);
                                const dateStr = timeAgo(thread.message.timestamp);
                                const avatarBg = own ? 'linear-gradient(135deg,#f97316,#ea580c)' : avatarColorFromName(thread.message.nombre);
                                const isThreadExpanded = expandedThreads.has(thread.message.id);
                                const isRepliesExpanded = expandedReplies.has(thread.message.id);
                                const hasMoreReplies = thread.replies.length > REPLIES_PREVIEW;
                                const visibleReplies = isRepliesExpanded ? thread.replies : thread.replies.slice(0, REPLIES_PREVIEW);
                                const recent = isRecent(thread.message.timestamp) || thread.replies.some(r => isRecent(r.timestamp));
                                const roleBadge = getRoleBadge(thread.message.role, thread.message.guardRole);
                                const isEditingThread = editingId === thread.message.id;

                                return (
                                    <div key={thread.message.id}
                                        className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                        style={{ borderLeft: recent ? '3px solid #f97316' : undefined }}>

                                        {/* ── Header siempre visible ── */}
                                        <button
                                            onClick={() => toggleThread(thread.message.id)}
                                            className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-slate-50/70 transition-colors">
                                            <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-black text-white"
                                                style={{ background: avatarBg }}>
                                                {own ? getInitials(user?.name) : (thread.message.nombre ? getInitials(thread.message.nombre) : <FiUser className="w-4 h-4" />)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                                                    <span className="text-sm font-bold text-slate-800 truncate">
                                                        {own ? 'Tú' : thread.message.nombre}
                                                    </span>
                                                    {own && <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-600 text-xs font-bold">Yo</span>}
                                                    {roleBadge && (
                                                        <span className="px-1.5 py-0.5 rounded-md text-xs font-bold"
                                                            style={{ background: roleBadge.bg, color: roleBadge.color }}>
                                                            {roleBadge.label}
                                                        </span>
                                                    )}
                                                    {recent && (
                                                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-600 text-xs font-bold">
                                                            <FiZap className="w-2.5 h-2.5" /> Nuevo
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm font-semibold text-slate-700 truncate">
                                                    {thread.message.deleted
                                                        ? <span className="italic text-slate-400 font-normal">Mensaje eliminado</span>
                                                        : (thread.message.titulo || thread.message.contenido)}
                                                </p>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-xs text-slate-400">{dateStr}</span>
                                                    {thread.replies.length > 0 && (
                                                        <span className="flex items-center gap-1 text-xs text-slate-400">
                                                            <FiMessageCircle className="w-3 h-3" />
                                                            {thread.replies.length} respuesta{thread.replies.length !== 1 ? 's' : ''}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${isThreadExpanded ? 'rotate-180' : ''}`}>
                                                <FiChevronDown className="w-4 h-4" />
                                            </div>
                                        </button>

                                        {/* ── Cuerpo colapsable ── */}
                                        {isThreadExpanded && (
                                            <>
                                                <div className="px-5 pb-4 border-t border-slate-100 pt-4">
                                                    <div className="flex gap-3">
                                                        <div className="w-9 flex-shrink-0" />
                                                        <div className="flex-1 min-w-0">
                                                            {/* Contenido del thread o editor */}
                                                            {thread.message.deleted ? (
                                                                <DeletedMessage isThread />
                                                            ) : isEditingThread ? (
                                                                <div className="space-y-2">
                                                                    {thread.message.titulo !== undefined && (
                                                                        <input
                                                                            type="text"
                                                                            value={editTitle}
                                                                            onChange={e => setEditTitle(e.target.value)}
                                                                            placeholder="Título..."
                                                                            className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-800 text-sm outline-none focus:border-orange-400 transition-all font-semibold"
                                                                        />
                                                                    )}
                                                                    <textarea
                                                                        ref={editTextareaRef}
                                                                        value={editContent}
                                                                        onChange={e => setEditContent(e.target.value)}
                                                                        rows={3}
                                                                        className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                                                                    />
                                                                    <div className="flex justify-end gap-2">
                                                                        <button onClick={() => setEditingId(null)}
                                                                            className="px-3 py-1.5 rounded-lg text-slate-500 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                                                            Cancelar
                                                                        </button>
                                                                        <button onClick={() => handleSaveEdit(true)}
                                                                            disabled={submitting || !editContent.trim()}
                                                                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-bold disabled:opacity-50 transition-all hover:opacity-90"
                                                                            style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                                                            {submitting ? <ImSpinner2 className="animate-spin w-3 h-3" /> : <FiSend className="w-3 h-3" />}
                                                                            Guardar
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    {thread.message.titulo && (
                                                                        <p className="text-base font-bold text-slate-900 mb-2 leading-snug">
                                                                            {thread.message.titulo}
                                                                        </p>
                                                                    )}
                                                                    <p className="text-slate-600 text-sm leading-relaxed">
                                                                        {thread.message.contenido}
                                                                        {thread.message.editedAt && <EditedBadge date={thread.message.editedAt} />}
                                                                    </p>
                                                                </>
                                                            )}

                                                            {/* Actions */}
                                                            {!thread.message.deleted && !isEditingThread && (
                                                                <div className="flex items-center gap-3 mt-3">
                                                                    <button
                                                                        onClick={() => { setShowReplyFor(showReplyFor === thread.message.id ? null : thread.message.id); setReplyContent(''); }}
                                                                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-orange-500 transition-colors">
                                                                        <FiMessageCircle className="w-3.5 h-3.5" /> Responder
                                                                    </button>
                                                                    {own && (
                                                                        <>
                                                                            <button onClick={() => startEdit(thread.message)}
                                                                                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-blue-500 transition-colors">
                                                                                <FiEdit2 className="w-3.5 h-3.5" /> Editar
                                                                            </button>
                                                                            <button onClick={() => setDeletingId(thread.message.id)}
                                                                                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors">
                                                                                <FiTrash2 className="w-3.5 h-3.5" /> Eliminar
                                                                            </button>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* ── Replies ── */}
                                                {thread.replies.length > 0 && (
                                                    <div className="border-t border-slate-100 bg-slate-50/60">
                                                        <div className="divide-y divide-slate-100">
                                                            {visibleReplies.map(reply => {
                                                                const replyOwn = isOwnerOf(reply);
                                                                const replyAvatarBg = replyOwn ? 'linear-gradient(135deg,#f97316,#ea580c)' : avatarColorFromName(reply.nombre);
                                                                const isEditingReply = editingId === reply.id;
                                                                const replyBadge = getRoleBadge(reply.role, reply.guardRole);

                                                                return (
                                                                    <div key={reply.id} className="px-5 py-3.5 flex items-start gap-3 pl-8">
                                                                        <div className="flex flex-col items-center self-stretch mr-1">
                                                                            <div className="w-px flex-1 bg-slate-200" />
                                                                        </div>
                                                                        <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-black text-white"
                                                                            style={{ background: replyAvatarBg }}>
                                                                            {replyOwn ? getInitials(user?.name) : (reply.nombre ? getInitials(reply.nombre) : <FiUser className="w-3 h-3" />)}
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                                                                <span className="text-xs font-bold text-slate-700">
                                                                                    {replyOwn ? 'Tú' : reply.nombre}
                                                                                </span>
                                                                                {replyBadge && (
                                                                                    <span className="px-1.5 py-0.5 rounded-md text-xs font-bold"
                                                                                        style={{ background: replyBadge.bg, color: replyBadge.color }}>
                                                                                        {replyBadge.label}
                                                                                    </span>
                                                                                )}
                                                                                <span className="text-xs text-slate-400 ml-auto">
                                                                                    {timeAgo(new Date(reply.timestamp))}
                                                                                </span>
                                                                            </div>

                                                                            {/* Reply content o editor */}
                                                                            {reply.deleted ? (
                                                                                <DeletedMessage isThread={false} />
                                                                            ) : isEditingReply ? (
                                                                                <div className="space-y-2 mt-1">
                                                                                    <textarea
                                                                                        ref={editTextareaRef}
                                                                                        value={editContent}
                                                                                        onChange={e => setEditContent(e.target.value)}
                                                                                        rows={2}
                                                                                        className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                                                                                    />
                                                                                    <div className="flex justify-end gap-2">
                                                                                        <button onClick={() => setEditingId(null)}
                                                                                            className="px-3 py-1.5 rounded-lg text-slate-500 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                                                                            Cancelar
                                                                                        </button>
                                                                                        <button onClick={() => handleSaveEdit(false)}
                                                                                            disabled={submitting || !editContent.trim()}
                                                                                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-bold disabled:opacity-50 transition-all hover:opacity-90"
                                                                                            style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                                                                            {submitting ? <ImSpinner2 className="animate-spin w-3 h-3" /> : <FiSend className="w-3 h-3" />}
                                                                                            Guardar
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <div>
                                                                                    <p className="text-sm text-slate-600 leading-relaxed">
                                                                                        {reply.contenido}
                                                                                        {reply.editedAt && <EditedBadge date={reply.editedAt} />}
                                                                                    </p>
                                                                                    {replyOwn && (
                                                                                        <div className="flex items-center gap-3 mt-2">
                                                                                            <button onClick={() => startEdit(reply)}
                                                                                                className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-blue-500 transition-colors">
                                                                                                <FiEdit2 className="w-3 h-3" /> Editar
                                                                                            </button>
                                                                                            <button onClick={() => setDeletingId(reply.id)}
                                                                                                className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors">
                                                                                                <FiTrash2 className="w-3 h-3" /> Eliminar
                                                                                            </button>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        {hasMoreReplies && (
                                                            <button onClick={() => toggleExpandReplies(thread.message.id)}
                                                                className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-orange-500 hover:bg-orange-50 transition-colors border-t border-slate-100">
                                                                {isRepliesExpanded
                                                                    ? <><FiChevronUp className="w-3.5 h-3.5" /> Ocultar respuestas</>
                                                                    : <><FiChevronDown className="w-3.5 h-3.5" /> Ver {thread.replies.length - REPLIES_PREVIEW} respuesta{thread.replies.length - REPLIES_PREVIEW !== 1 ? 's' : ''} más</>}
                                                            </button>
                                                        )}
                                                    </div>
                                                )}

                                                {/* ── Reply input ── */}
                                                {showReplyFor === thread.message.id && (
                                                    <div className="border-t border-slate-100 px-5 py-4 bg-orange-50/40">
                                                        <div className="flex gap-3">
                                                            <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-black text-white"
                                                                style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                                                {getInitials(user?.name)}
                                                            </div>
                                                            <div className="flex-1">
                                                                <textarea ref={replyTextareaRef} value={replyContent}
                                                                    onChange={e => setReplyContent(e.target.value)}
                                                                    placeholder="Escribe tu respuesta..." rows={2}
                                                                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                                                                    onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmitReply(thread.message.id); }} />
                                                                <div className="flex items-center justify-between mt-2">
                                                                    <span className="text-xs text-slate-400">Ctrl+Enter para enviar</span>
                                                                    <div className="flex gap-2">
                                                                        <button onClick={() => { setShowReplyFor(null); setReplyContent(''); }}
                                                                            className="px-3 py-1.5 rounded-lg text-slate-500 text-xs font-semibold hover:bg-slate-200 transition-colors">
                                                                            Cancelar
                                                                        </button>
                                                                        <button onClick={() => handleSubmitReply(thread.message.id)}
                                                                            disabled={submitting || !replyContent.trim()}
                                                                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-bold disabled:opacity-50 transition-all hover:opacity-90 active:scale-95"
                                                                            style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                                                            {submitting ? <ImSpinner2 className="animate-spin w-3 h-3" /> : <FiSend className="w-3 h-3" />}
                                                                            Responder
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}

                            {/* ── Paginación ── */}
                            <Pagination
                                page={currentPage}
                                total={filteredThreads.length}
                                perPage={THREADS_PER_PAGE}
                                onChange={p => { setCurrentPage(p); setExpandedThreads(new Set()); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* ── Modal nueva pregunta ── */}
            {showNewThreadModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
                    onClick={e => { if (e.target === e.currentTarget) { setShowNewThreadModal(false); setNewThreadTitle(''); setNewThreadContent(''); } }}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" style={{ animation: 'modalIn 0.2s ease' }}>
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <div>
                                <h3 className="text-lg font-black text-slate-900">Nueva pregunta</h3>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    Tema: <span className="font-semibold text-orange-500">{selectedLection?.title || 'General'}</span>
                                </p>
                            </div>
                            <button onClick={() => { setShowNewThreadModal(false); setNewThreadTitle(''); setNewThreadContent(''); }}
                                className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors">
                                <FiX className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                                    Título <span className="text-red-400">*</span>
                                </label>
                                <input ref={titleInputRef} type="text" value={newThreadTitle}
                                    onChange={e => setNewThreadTitle(e.target.value)}
                                    placeholder="Escribe un título claro y conciso..." maxLength={120}
                                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-800 text-sm outline-none focus:border-orange-400 transition-all" />
                                <p className="text-right text-xs text-slate-400 mt-1">{newThreadTitle.length}/120</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                                    Descripción <span className="text-red-400">*</span>
                                </label>
                                <textarea value={newThreadContent} onChange={e => setNewThreadContent(e.target.value)}
                                    placeholder="Describe tu duda con más detalle..." rows={4}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm resize-none outline-none focus:border-orange-400 transition-all"
                                    onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmitThread(); }} />
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => { setShowNewThreadModal(false); setNewThreadTitle(''); setNewThreadContent(''); }}
                                    className="flex-1 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
                                    Cancelar
                                </button>
                                <button onClick={handleSubmitThread}
                                    disabled={submitting || !newThreadContent.trim() || !newThreadTitle.trim()}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm transition-all disabled:opacity-50 hover:opacity-90 active:scale-95"
                                    style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                                    {submitting ? <ImSpinner2 className="animate-spin w-4 h-4" /> : <FiSend className="w-4 h-4" />}
                                    Publicar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Modal confirmar eliminación ── */}
            {deletingId && (
                <ConfirmDeleteModal
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setDeletingId(null)}
                />
            )}

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.95) translateY(8px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </div>
    );
}
