import {useEffect, useState} from 'react';
import {
    addDoc,
    collection,
    doc,
    increment,
    onSnapshot,
    orderBy,
    query,
    Timestamp,
    updateDoc,
    where
} from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig';
import {ForumFormData, ForumMessage, ForumThread} from '../types/forum.types';

export const useForum = (pagina: string) => {
    const [threads, setThreads] = useState<ForumThread[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Cargar todos los mensajes del foro para la página específica
    useEffect(() => {
        const q = query(
            collection(db, 'forum'),
            where('pagina', '==', pagina),
            orderBy('timestamp', 'desc')
        );

        const unsubscribe = onSnapshot(q,
            (querySnapshot) => {
                const allMessages: ForumMessage[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    allMessages.push({
                        id: doc.id,
                        nombre: data.nombre,
                        correo: data.correo,
                        contenido: data.contenido,
                        timestamp: data.timestamp.toDate(),
                        pagina: data.pagina,
                        parentId: data.parentId || null,
                        isThread: data.isThread ?? true, // Por defecto es thread si no está definido
                        replyCount: data.replyCount || 0
                    });
                });

                // Organizar mensajes en estructura de hilos
                const threadsMap = new Map<string, ForumThread>();

                // Primero, procesar todos los mensajes principales (threads)
                allMessages
                    .filter(msg => msg.isThread && !msg.parentId)
                    .forEach(threadMsg => {
                        threadsMap.set(threadMsg.id, {
                            message: threadMsg,
                            replies: []
                        });
                    });

                // Luego, agregar las respuestas a sus threads correspondientes
                allMessages
                    .filter(msg => !msg.isThread && msg.parentId)
                    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime()) // Respuestas ordenadas cronológicamente
                    .forEach(reply => {
                        if (reply.parentId && threadsMap.has(reply.parentId)) {
                            threadsMap.get(reply.parentId)!.replies.push(reply);
                        }
                    });

                // Convertir a array y ordenar por timestamp del mensaje principal
                const threadsArray = Array.from(threadsMap.values())
                    .sort((a, b) => b.message.timestamp.getTime() - a.message.timestamp.getTime());

                setThreads(threadsArray);
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

    // Enviar nuevo thread (mensaje principal)
    const enviarThread = async (formData: ForumFormData): Promise<boolean> => {
        try {
            setError(null);
            await addDoc(collection(db, 'forum'), {
                nombre: formData.nombre.trim(),
                correo: formData.correo.trim(),
                contenido: formData.contenido.trim(),
                pagina,
                timestamp: Timestamp.now(),
                isThread: true,
                replyCount: 0
            });
            return true;
        } catch (err) {
            console.error('Error sending thread:', err);
            setError('Error al enviar el mensaje');
            return false;
        }
    };

    // Enviar respuesta a un thread
    const enviarRespuesta = async (formData: ForumFormData, parentId: string): Promise<boolean> => {
        try {
            setError(null);

            // Agregar la respuesta
            await addDoc(collection(db, 'forum'), {
                nombre: formData.nombre.trim(),
                correo: formData.correo.trim(),
                contenido: formData.contenido.trim(),
                pagina,
                timestamp: Timestamp.now(),
                parentId,
                isThread: false
            });

            // Incrementar el contador de respuestas del thread padre
            const parentDocRef = doc(db, 'forum', parentId);
            await updateDoc(parentDocRef, {
                replyCount: increment(1)
            });

            return true;
        } catch (err) {
            console.error('Error sending reply:', err);
            setError('Error al enviar la respuesta');
            return false;
        }
    };

    // Exponer función para obtener solo los hilos del usuario con respuestas de otros
    function getUserThreadsWithOtherReplies(userEmail: string): ForumThread[] {
        return threads
            .filter(thread => thread.message.correo === userEmail)
            .map(thread => ({
                message: thread.message,
                replies: thread.replies
            }));
    }

    return {
        threads,
        loading,
        error,
        enviarThread,
        enviarRespuesta,
        getUserThreadsWithOtherReplies
    };
};
