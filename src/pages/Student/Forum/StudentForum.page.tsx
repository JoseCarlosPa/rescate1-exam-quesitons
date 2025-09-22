import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {FaArrowLeft, FaCalendarAlt, FaComments, FaFilter, FaPaperPlane, FaPlus, FaReply, FaUser} from 'react-icons/fa';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useForum} from '../../../hooks/useForum.hook';
import {useForumStats} from '../../../hooks/useForumStats.hook';
import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebase/firebaseConfig';
import {useAuth} from "../../../Providers/AuthProvider";
import {lections} from "../../../App.constants.tsx";

type ForumFilter = 'all' | 'mine';

export default function StudentForum() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState('general-exam');
    const [showNewThreadModal, setShowNewThreadModal] = useState(false);
    const [showReplyModal, setShowReplyModal] = useState<string | null>(null);
    const [newThreadContent, setNewThreadContent] = useState('');
    const [replyContent, setReplyContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [forumFilter, setForumFilter] = useState<ForumFilter>('all');

    const {threads, loading, getUserThreadsWithOtherReplies} = useForum(selectedPage);
    const {stats: forumStats, loading: statsLoading} = useForumStats();

    useEffect(() => {
        if (!user) {
            navigate(AllRoutes.LOGIN);
            return;
        }
    }, [user, navigate]);

    const handleSubmitThread = async () => {
        if (!user || !newThreadContent.trim()) {
            toast.error('Por favor escribe tu pregunta');
            return;
        }

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
                replyCount: 0
            });

            setNewThreadContent('');
            setShowNewThreadModal(false);
            toast.success('Pregunta publicada exitosamente');
        } catch (error) {
            console.error('Error posting thread:', error);
            toast.error('Error al publicar la pregunta');
        } finally {
            setSubmitting(false);
        }
    };

    const handleSubmitReply = async (parentId: string) => {
        if (!user || !replyContent.trim()) {
            toast.error('Por favor escribe tu respuesta');
            return;
        }

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'forum'), {
                nombre: user.name || user.email?.split('@')[0] || 'Usuario',
                correo: user.email,
                contenido: replyContent.trim(),
                timestamp: Timestamp.now(),
                pagina: selectedPage,
                parentId: parentId,
                isThread: false,
                replyCount: 0
            });

            setReplyContent('');
            setShowReplyModal(null);
            toast.success('Respuesta publicada exitosamente');
        } catch (error) {
            console.error('Error posting reply:', error);
            toast.error('Error al publicar la respuesta');
        } finally {
            setSubmitting(false);
        }
    };

    // Función para obtener los hilos filtrados según la selección
    const getFilteredThreads = () => {
        if (!user) return [];

        if (forumFilter === 'mine') {
            return getUserThreadsWithOtherReplies(user.email ?? '');
        }

        return threads; // Todas las preguntas
    };

    const filteredThreads = getFilteredThreads();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500"/>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to={AllRoutes.STUDENT_DASHBOARD}
                                className="text-gray-500 hover:text-orange-500 transition-colors"
                            >
                                <FaArrowLeft className="text-xl"/>
                            </NavLink>
                            <h1 className="text-xl font-semibold text-gray-900">Foro de Discusión</h1>
                        </div>
                        <button
                            onClick={() => setShowNewThreadModal(true)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                        >
                            <FaPlus/>
                            <span>Nueva Pregunta</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-4 border-b">
                                <h2 className="font-semibold text-gray-900">Temas</h2>
                            </div>
                            <div className="p-2">
                                {lections.map((page) => {
                                    const threadCount = forumStats[page.key] || 0;
                                    return (
                                        <button
                                            key={page.key}
                                            onClick={() => setSelectedPage(page.key)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                selectedPage === page.key
                                                    ? 'bg-orange-100 text-orange-700 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="truncate">{page.title}</span>
                                                {!statsLoading && (
                                                    <span
                                                        className={`ml-2 px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                                                            threadCount > 0
                                                                ? selectedPage === page.key
                                                                    ? 'bg-orange-200 text-orange-800'
                                                                    : 'bg-gray-200 text-gray-600'
                                                                : 'bg-gray-100 text-gray-400'
                                                        }`}
                                                    >
                            {threadCount}
                          </span>
                                                )}
                                                {statsLoading && (
                                                    <div className="ml-2 w-5 h-5 flex items-center justify-center">
                                                        <ImSpinner2 className="animate-spin text-xs text-gray-400"/>
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            {lections.find(p => p.key === selectedPage)?.title || 'General'}
                                        </h2>
                                        <p className="text-gray-600 mt-1">
                                            Participa en discusiones sobre este tema
                                        </p>
                                    </div>
                                    {/* Filter Button */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setForumFilter(forumFilter === 'all' ? 'mine' : 'all')}
                                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer bg-gray-300 rounded px-3 py-2 transition-colors"
                                        >
                                            <FaFilter/>
                                            <span className="text-sm">
                        {forumFilter === 'all' ? 'Mis Preguntas' : 'Todas las Preguntas'}
                      </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Threads */}
                            <div className="divide-y">
                                {filteredThreads.length === 0 ? (
                                    <div className="p-12 text-center">
                                        <FaComments className="mx-auto text-4xl text-gray-300 mb-4"/>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            No hay discusiones aún
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Sé el primero en hacer una pregunta sobre este tema
                                        </p>
                                        <button
                                            onClick={() => setShowNewThreadModal(true)}
                                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                                        >
                                            Hacer primera pregunta
                                        </button>
                                    </div>
                                ) : (
                                    filteredThreads.map((thread) => (
                                        <div key={thread.message.id} className="p-6">
                                            {/* Thread Message */}
                                            <div className="flex space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div
                                                        className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                                        <FaUser className="text-white text-sm"/>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <h3 className="font-medium text-gray-900">
                                                            {thread.message.correo === user?.email ? 'Tú' : thread.message.nombre}
                                                        </h3>
                                                        <span className="text-gray-500 text-sm flex items-center">
                              <FaCalendarAlt className="mr-1"/>
                                                            {thread.message.timestamp.toLocaleDateString()}
                            </span>
                                                    </div>
                                                    <p className="text-gray-700 mb-4">{thread.message.contenido}</p>
                                                    <button
                                                        onClick={() => setShowReplyModal(thread.message.id)}
                                                        className="text-orange-600 hover:text-orange-700 text-sm flex items-center space-x-1"
                                                    >
                                                        <FaReply/>
                                                        <span>Responder</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Replies */}
                                            {thread.replies.length > 0 && (
                                                <div className="ml-14 mt-4 space-y-4">
                                                    {thread.replies.map((reply) => (
                                                        <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                                                            <div className="flex items-center space-x-2 mb-2">
                                                                <div
                                                                    className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                                                                    <FaUser className="text-white text-xs"/>
                                                                </div>
                                                                <span className="font-medium text-gray-900 text-sm">
                                  {reply.correo === user?.email ? 'Tú' : reply.nombre}
                                </span>
                                                                <span className="text-gray-500 text-xs">
                                  {reply.timestamp.toLocaleDateString()}
                                </span>
                                                            </div>
                                                            <p className="text-gray-700 text-sm">{reply.contenido}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Reply Form */}
                                            {showReplyModal === thread.message.id && (
                                                <div className="ml-14 mt-4">
                                                    <div className="bg-gray-50 rounded-lg p-4">
                            <textarea
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                placeholder="Escribe tu respuesta..."
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                                rows={3}
                            />
                                                        <div className="flex justify-end space-x-3 mt-3">
                                                            <button
                                                                onClick={() => setShowReplyModal(null)}
                                                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <button
                                                                onClick={() => handleSubmitReply(thread.message.id)}
                                                                disabled={submitting}
                                                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 flex items-center space-x-2"
                                                            >
                                                                {submitting ? (
                                                                    <ImSpinner2 className="animate-spin"/>
                                                                ) : (
                                                                    <FaPaperPlane/>
                                                                )}
                                                                <span>Responder</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Thread Modal */}
            {showNewThreadModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-2xl w-full">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-900">Nueva Pregunta</h2>
                        </div>
                        <div className="p-6">
              <textarea
                  value={newThreadContent}
                  onChange={(e) => setNewThreadContent(e.target.value)}
                  placeholder="Escribe tu pregunta aquí..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  rows={6}
              />
                        </div>
                        <div className="p-6 border-t flex justify-end space-x-3">
                            <button
                                onClick={() => {
                                    setShowNewThreadModal(false);
                                    setNewThreadContent('');
                                }}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSubmitThread}
                                disabled={submitting}
                                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 flex items-center space-x-2"
                            >
                                {submitting ? (
                                    <ImSpinner2 className="animate-spin"/>
                                ) : (
                                    <FaPaperPlane/>
                                )}
                                <span>Publicar</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
