import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

interface ForumStats {
  [topicKey: string]: number;
}

export const useForumStats = () => {
  const [stats, setStats] = useState<ForumStats>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Query para obtener todos los threads (mensajes principales) del foro
    const q = query(
      collection(db, 'forum'),
      where('isThread', '==', true),
      where('parentId', '==', null)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const threadCounts: ForumStats = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const pagina = data.pagina;

        if (pagina) {
          threadCounts[pagina] = (threadCounts[pagina] || 0) + 1;
        }
      });

      setStats(threadCounts);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { stats, loading };
};
