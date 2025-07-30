import React, { useState } from 'react';
import { useForum } from '../../hooks/useForum.hook';
import { ForumFormData } from '../../types/forum.types';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

interface ForumSectionProps {
  pagina: string;
  titulo?: string;
}

export default function ForumSection({ pagina, titulo = "Foro de Discusión" }: ForumSectionProps) {
  const { messages, loading, error, enviarMensaje } = useForum(pagina);
  const [formData, setFormData] = useState<ForumFormData>({
    nombre: '',
    correo: '',
    contenido: ''
  });
  const [enviando, setEnviando] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.contenido.trim()) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      toast.error('Por favor ingresa un correo válido');
      return;
    }

    setEnviando(true);
    const success = await enviarMensaje(formData);

    if (success) {
      setFormData({ nombre: '', correo: '', contenido: '' });
      toast.success('Mensaje enviado correctamente');
    } else {
      toast.error('Error al enviar el mensaje');
    }

    setEnviando(false);
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

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
      <div className="flex items-center gap-3 mb-6">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-500" />
        <h2 className="text-3xl font-bold">{titulo}</h2>
      </div>

      {/* Formulario para nuevo mensaje */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Comparte tu opinión o pregunta</h3>
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
              Mensaje *
            </label>
            <textarea
              id="contenido"
              name="contenido"
              value={formData.contenido}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Escribe tu pregunta, comentario o experiencia relacionada con este tema..."
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
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Lista de mensajes */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Discusiones ({messages.length})
        </h3>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">
            {error}
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>¡Sé el primero en participar en la discusión!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{message.nombre}</h4>
                    <p className="text-sm text-gray-500">{formatDate(message.timestamp)}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{message.contenido}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
