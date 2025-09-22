import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import { NavLink } from 'react-router';
import {
  FaUser,
  FaGraduationCap,
  FaComments,
  FaChartLine,
  FaBook,
  FaBell,
  FaTasks
} from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { Timestamp } from 'firebase/firestore';
import {useAuth} from "../../../Providers/AuthProvider";

interface ExamData {
  completed: boolean;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  completedAt?: Timestamp;
}

interface StudentData {
  id: string;
  name: string;
  email: string;
  role: string;
  exams: Record<string, ExamData>;
  createdAt: Timestamp;
  photoURL?: string;
}

export default function StudentDashboard() {
  const {user} = useAuth()
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [examStats, setExamStats] = useState({
    completed: 0,
    total: 44, // Total de exámenes EMT
    averageScore: 0
  });

  const fetchStudentData = useCallback(async () => {
    if (!user?.id) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', user.id));
      if (userDoc.exists()) {
        const data = userDoc.data() as StudentData;
        setStudentData(data);
        calculateExamStats(data.exams || {});
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
      toast.error('Error al cargar los datos del estudiante');
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    console.log('StudentDashboard mounted',user);
    if (!user) {
      //navigate(AllRoutes.LOGIN);
      return;
    }

    fetchStudentData();
  }, [user, navigate, fetchStudentData]);

  const calculateExamStats = (exams: Record<string, ExamData>) => {
    const examEntries = Object.entries(exams);
    const completed = examEntries.filter(([, exam]) => exam.completed).length;
    const totalScore = examEntries.reduce((sum, [, exam]) => {
      return sum + (exam.score || 0);
    }, 0);
    const averageScore = completed > 0 ? totalScore / completed : 0;

    setExamStats({
      completed,
      total: 44,
      averageScore: Math.round(averageScore)
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Bienvenido, {studentData?.name || 'Estudiante'}!
          </h1>
          <p className="text-gray-600">
            Aquí puedes acceder a tu perfil, calificaciones y participar en el foro.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <FaGraduationCap className="text-blue-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Exámenes Completados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {examStats.completed}/{examStats.total}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Promedio General</p>
                <p className="text-2xl font-bold text-gray-900">
                  {examStats.averageScore}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100">
                <FaBook className="text-orange-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Progreso</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round((examStats.completed / examStats.total) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <NavLink
            to={AllRoutes.STUDENT_PROFILE}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
              <FaUser className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mi Perfil</h3>
            <p className="text-gray-600 text-sm">
              Edita tu información personal, foto de perfil y configuración
            </p>
          </NavLink>

          <NavLink
            to={AllRoutes.STUDENT_GRADES}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 group-hover:bg-green-200 transition-colors">
              <FaGraduationCap className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mis Calificaciones</h3>
            <p className="text-gray-600 text-sm">
              Revisa tus resultados de exámenes y progreso de aprendizaje
            </p>
          </NavLink>

          <NavLink
            to={AllRoutes.STUDENT_TASKS}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4 group-hover:bg-indigo-200 transition-colors">
              <FaTasks className="text-indigo-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mis Tareas</h3>
            <p className="text-gray-600 text-sm">
              Entrega tus trabajos y revisa las calificaciones recibidas
            </p>
          </NavLink>

          <NavLink
            to={AllRoutes.STUDENT_FORUM}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
              <FaComments className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Foro</h3>
            <p className="text-gray-600 text-sm">
              Participa en discusiones y haz preguntas sobre los temas
            </p>
          </NavLink>

          <NavLink
            to={AllRoutes.EMT}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 group-hover:bg-orange-200 transition-colors">
              <FaBook className="text-orange-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Estudiar</h3>
            <p className="text-gray-600 text-sm">
              Continúa con tus lecciones y exámenes de EMT
            </p>
          </NavLink>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Actividad Reciente</h2>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-500 py-8">
              <FaBell className="mx-auto text-4xl mb-4 text-gray-300" />
              <p>No hay actividad reciente</p>
              <p className="text-sm">Completa algunos exámenes para ver tu progreso aquí</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
