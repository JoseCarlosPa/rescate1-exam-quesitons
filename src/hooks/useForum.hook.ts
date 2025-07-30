import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { ForumMessage, ForumFormData } from '../types/forum.types';

export const useForum = (pagina: string) => {
  const [messages, setMessages] = useState<ForumMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar mensajes del foro para la página específica
  useEffect(() => {
    const q = query(
      collection(db, 'forum'),
      where('pagina', '==', pagina),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q,
      (querySnapshot) => {
        const messagesData: ForumMessage[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          messagesData.push({
            id: doc.id,
            nombre: data.nombre,
            correo: data.correo,
            contenido: data.contenido,
            timestamp: data.timestamp.toDate(),
            pagina: data.pagina
          });
        });
        setMessages(messagesData);
        setLoading(false);
      },
      (err) => {
        console.error('Error loading forum messages:', err);
        setError('Error al cargar los mensajes del foro');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [pagina]);

  // Enviar nuevo mensaje
  const enviarMensaje = async (formData: ForumFormData): Promise<boolean> => {
    try {
      setError(null);
      await addDoc(collection(db, 'forum'), {
        nombre: formData.nombre.trim(),
        correo: formData.correo.trim(),
        contenido: formData.contenido.trim(),
        pagina,
        timestamp: Timestamp.now()
      });
      return true;
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Error al enviar el mensaje');
      return false;
    }
  };

  return {
    messages,
    loading,
    error,
    enviarMensaje
  };
};
