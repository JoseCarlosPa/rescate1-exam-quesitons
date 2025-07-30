import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { useAuth } from './Providers/AuthProvider';
import { ExamData } from './pages/Student/Grades/StudentGrades.page';

const useApp = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const getUserExams = async (): Promise<number[]> => {
    if (!user?.id) return [];

    try {
      const userDoc = await getDoc(doc(db, 'users', user.id));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const exams: Record<string, ExamData> = userData.exams || {};

        // Crear array de 44 elementos con las calificaciones
        const grades: number[] = [];

        // Iterar del 1 al 44 para obtener las calificaciones en orden
        for (let i = 1; i <= 44; i++) {
          const examData = exams[i.toString()];
          grades.push(examData?.score || 0);
        }

        return grades;
      }

      return new Array(44).fill(0);
    } catch (error) {
      console.error('Error fetching user exams:', error);
      return new Array(44).fill(0);
    }
  };

  return {
    getUserExams,
    loading,
    setLoading
  };
};

export default useApp;
