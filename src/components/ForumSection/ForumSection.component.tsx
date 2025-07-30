import React, { useState, useEffect } from 'react';
import { useForum } from '../../hooks/useForum.hook';
import { useAuth } from '../../Providers/AuthProvider';
import { ForumFormData } from '../../types/forum.types';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, ChatBubbleLeftEllipsisIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

interface ForumSectionProps {
  pagina: string;
  titulo?: string;
}

export default function ForumSection({ pagina, titulo = "Foro de Discusión" }: ForumSectionProps) {
  const { user, isAuthenticated } = useAuth();
  const { threads, loading, error, enviarThread, enviarRespuesta } = useForum(pagina);
  const [formData, setFormData] = useState<ForumFormData>({
    nombre: '',
    correo: '',
    contenido: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [expandedThreads, setExpandedThreads] = useState<Set<string>>(new Set());
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyFormData, setReplyFormData] = useState<ForumFormData>({
    nombre: '',
    correo: '',
    contenido: ''
  });
  const [enviandoRespuesta, setEnviandoRespuesta] = useState(false);

  // Llenar automáticamente los datos del usuario si está logeado
  useEffect(() => {
    if (isAuthenticated && user) {
      const userName = user.name || user.email?.split('@')[0] || '';
      const userEmail = user.email || '';

      setFormData(prev => ({
        ...prev,
        nombre: userName,
        correo: userEmail
      }));

      setReplyFormData(prev => ({
        ...prev,
        nombre: userName,
        correo: userEmail
      }));
    }
  }, [user, isAuthenticated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReplyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (data: ForumFormData) => {
    if (!data.nombre.trim() || !data.correo.trim() || !data.contenido.trim()) {
      toast.error('Por favor completa todos los campos');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.correo)) {
      toast.error('Por favor ingresa un correo válido');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) return;

    setEnviando(true);
    const success = await enviarThread(formData);

    if (success) {
      setFormData({ nombre: '', correo: '', contenido: '' });
      toast.success('Pregunta publicada correctamente');
    } else {
      toast.error('Error al publicar la pregunta');
    }

    setEnviando(false);
  };

  const handleReplySubmit = async (e: React.FormEvent, threadId: string) => {
    e.preventDefault();

    if (!validateForm(replyFormData)) return;

    setEnviandoRespuesta(true);
    const success = await enviarRespuesta(replyFormData, threadId);

    if (success) {
      setReplyFormData({ nombre: '', correo: '', contenido: '' });
      setReplyingTo(null);
      toast.success('Respuesta enviada correctamente');
      // Expandir el hilo para mostrar la nueva respuesta
      setExpandedThreads(prev => new Set(prev).add(threadId));
    } else {
      toast.error('Error al enviar la respuesta');
    }

    setEnviandoRespuesta(false);
  };

  const toggleThreadExpansion = (threadId: string) => {
    setExpandedThreads(prev => {
      const newSet = new Set(prev);
      if (newSet.has(threadId)) {
        newSet.delete(threadId);
      } else {
        newSet.add(threadId);
      }
      return newSet;
    });
  };

  const startReply = (threadId: string) => {
    setReplyingTo(threadId);
    // Expandir el hilo si no está expandido
    setExpandedThreads(prev => new Set(prev).add(threadId));
  };

  const cancelReply = () => {
    setReplyingTo(null);
    setReplyFormData({ nombre: '', correo: '', contenido: '' });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getTotalMessages = () => {
    return threads.reduce((total, thread) => total + 1 + thread.replies.length, 0);
  };

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
      <div className="flex items-center gap-3 mb-6">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-500" />
        <h2 className="text-3xl font-bold">{titulo}</h2>
      </div>

      {/* Formulario para nueva pregunta */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Comparte tu pregunta o inicia una discusión</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="tu@correo.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-1">
              Pregunta o comentario *
            </label>
            <textarea
              id="contenido"
              name="contenido"
              value={formData.contenido}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Escribe tu pregunta o inicia una nueva discusión sobre este tema..."
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={enviando}
              className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              {enviando ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Publicando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-4 h-4" />
                  Publicar pregunta
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Lista de hilos de discusión */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Discusiones ({threads.length} hilos, {getTotalMessages()} mensajes)
        </h3>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">
            {error}
          </div>
        ) : threads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>¡Sé el primero en iniciar una discusión!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {threads.map((thread) => {
              const isExpanded = expandedThreads.has(thread.message.id);
              const isReplying = replyingTo === thread.message.id;

              return (
                <div key={thread.message.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Mensaje principal del hilo */}
                  <div className="p-4 bg-white hover:bg-gray-50 transition duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{thread.message.nombre}</h4>
                        <p className="text-sm text-gray-500">{formatDate(thread.message.timestamp)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {thread.replies.length > 0 && (
                          <button
                            onClick={() => toggleThreadExpansion(thread.message.id)}
                            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition duration-200"
                          >
                            {isExpanded ? (
                              <ChevronDownIcon className="w-4 h-4" />
                            ) : (
                              <ChevronRightIcon className="w-4 h-4" />
                            )}
                            {thread.replies.length} respuesta{thread.replies.length !== 1 ? 's' : ''}
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-3">{thread.message.contenido}</p>

                    {/* Botones de acción */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => startReply(thread.message.id)}
                        className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 transition duration-200"
                      >
                        <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                        Responder
                      </button>
                      {thread.replies.length > 0 && !isExpanded && (
                        <button
                          onClick={() => toggleThreadExpansion(thread.message.id)}
                          className="text-sm text-gray-500 hover:text-gray-700 transition duration-200"
                        >
                          Ver respuestas ({thread.replies.length})
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Respuestas */}
                  {isExpanded && thread.replies.length > 0 && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      {thread.replies.map((reply) => (
                        <div key={reply.id} className="p-4 ml-8 border-l-2 border-orange-200">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h5 className="font-medium text-gray-800">{reply.nombre}</h5>
                              <p className="text-xs text-gray-500">{formatDate(reply.timestamp)}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{reply.contenido}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formulario de respuesta */}
                  {isReplying && (
                    <div className="bg-blue-50 border-t border-gray-200 p-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Responder a {thread.message.nombre}</h4>
                      <form onSubmit={(e) => handleReplySubmit(e, thread.message.id)} className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            name="nombre"
                            value={replyFormData.nombre}
                            onChange={handleReplyInputChange}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                            placeholder="Tu nombre"
                            required
                          />
                          <input
                            type="email"
                            name="correo"
                            value={replyFormData.correo}
                            onChange={handleReplyInputChange}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                            placeholder="tu@correo.com"
                            required
                          />
                        </div>
                        <textarea
                          name="contenido"
                          value={replyFormData.contenido}
                          onChange={handleReplyInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm"
                          placeholder="Escribe tu respuesta..."
                          required
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={cancelReply}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition duration-200"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            disabled={enviandoRespuesta}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 text-sm"
                          >
                            {enviandoRespuesta ? (
                              <>
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                                Enviando...
                              </>
                            ) : (
                              <>
                                <PaperAirplaneIcon className="w-3 h-3" />
                                Enviar respuesta
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
