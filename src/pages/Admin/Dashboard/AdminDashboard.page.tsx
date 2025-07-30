import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import {
  FaUsers,
  FaComments,
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaEdit,
  FaEye,
  FaChartBar,
  FaBook,
} from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { Timestamp } from 'firebase/firestore';
import {useAuth} from "../../../Providers/AuthProvider";

interface ExamData {
  completed: boolean;
  score: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Timestamp;
  exams?: Record<string, ExamData>;
}

interface ForumMessage {
  id: string;
  nombre: string;
  correo: string;
  contenido: string;
  timestamp: Timestamp;
  pagina: string;
  parentId?: string | null;
  isThread: boolean;
  replyCount: number;
}

interface LessonConfig {
  id: number;
  name: string;
  enabled: boolean;
  route: string;
}

type ActiveTab = 'overview' | 'users' | 'forum' | 'lessons';

// Configuración de lecciones
const initialLessons: LessonConfig[] = [
  { id: 1, name: "Examen General", enabled: true, route: AllRoutes.GENERAL },
  { id: 2, name: "Aspectos Legales", enabled: true, route: AllRoutes.LEGAL },
  { id: 3, name: "Comunicaciones", enabled: true, route: AllRoutes.COMMUNICATIONS },
  { id: 4, name: "Sistema SEM", enabled: true, route: AllRoutes.SEM },
  { id: 5, name: "Seguridad del Personal", enabled: true, route: AllRoutes.SECURITY_OF_PERSONAL },
  { id: 6, name: "Términos Médicos", enabled: true, route: AllRoutes.MEDIC_TERMS },
  { id: 7, name: "Cuerpo Humano", enabled: true, route: AllRoutes.HUMAN_BODY },
  { id: 8, name: "Desarrollo y Esperanza de Vida", enabled: true, route: AllRoutes.LIFE_SPEC },
  { id: 9, name: "Evaluación del Paciente", enabled: true, route: AllRoutes.EVALUATION },
  { id: 10, name: "Mnemotecnias", enabled: true, route: AllRoutes.MNEMOTECNIAS },
  { id: 11, name: "Manejo de Vía Aérea", enabled: true, route: AllRoutes.AIRWAY_MANAGE },
  { id: 12, name: "Farmacología", enabled: true, route: AllRoutes.PHARMACOLOGY },
  { id: 13, name: "Administración de Medicamentos", enabled: true, route: AllRoutes.MED_ADMIN },
  { id: 14, name: "Shock", enabled: true, route: AllRoutes.SHOCK },
  { id: 15, name: "Reanimación SVB", enabled: true, route: AllRoutes.REANIMATE_SVB },
  { id: 16, name: "Código Mega", enabled: true, route: AllRoutes.MEGA },
  { id: 17, name: "Visión Médica General", enabled: true, route: AllRoutes.MEDIC_VISION },
  { id: 18, name: "Emergencias Respiratorias", enabled: true, route: AllRoutes.AIRWAY_EMERGENCY },
  { id: 19, name: "Emergencias Cardiovasculares", enabled: true, route: AllRoutes.CARDIO_EMERGENCY },
  { id: 20, name: "Emergencias Neurológicas", enabled: true, route: AllRoutes.NEURO_EMERGENCY }
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [forumMessages, setForumMessages] = useState<ForumMessage[]>([]);
  const [lessons, setLessons] = useState<LessonConfig[]>(initialLessons);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalMessages: 0,
    activeUsers: 0,
    completedExams: 0
  });

  const fetchAdminData = useCallback(async () => {
    try {
      // Obtener usuarios
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as User[];
      setUsers(usersData);

      // Obtener mensajes del foro
      const forumSnapshot = await getDocs(
        query(collection(db, 'forum'), orderBy('timestamp', 'desc'))
      );
      const forumData = forumSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ForumMessage[];
      setForumMessages(forumData);

      // Calcular estadísticas
      const totalUsers = usersData.length;
      const totalMessages = forumData.length;
      const activeUsers = usersData.filter(user =>
        user.exams && Object.values(user.exams).some((exam: ExamData) => exam.completed)
      ).length;
      const completedExams = usersData.reduce((total, user) => {
        if (user.exams) {
          return total + Object.values(user.exams).filter((exam: ExamData) => exam.completed).length;
        }
        return total;
      }, 0);

      setStats({
        totalUsers,
        totalMessages,
        activeUsers,
        completedExams
      });

    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast.error('Error al cargar los datos administrativos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate(AllRoutes.LOGIN);
      return;
    }

    // Verificar si el usuario es administrador
    if (user.role !== "Admin") {
      toast.error('No tienes permisos para acceder al panel administrativo');
      navigate(AllRoutes.STUDENT_DASHBOARD);
      return;
    }

    fetchAdminData();
  }, [user, navigate, fetchAdminData]);

  const handleDeleteForumMessage = async (messageId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este mensaje?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'forum', messageId));
      setForumMessages(prev => prev.filter(msg => msg.id !== messageId));
      toast.success('Mensaje eliminado exitosamente');
    } catch (error) {
      console.error('Error deleting forum message:', error);
      toast.error('Error al eliminar el mensaje');
    }
  };

  const handleToggleLesson = (lessonId: number) => {
    setLessons(prev => prev.map(lesson =>
      lesson.id === lessonId
        ? { ...lesson, enabled: !lesson.enabled }
        : lesson
    ));
    toast.success('Configuración de lección actualizada');
  };

  const handleChangeUserRole = async (userId: string, newRole: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), { role: newRole });
      setUsers(prev => prev.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      ));
      toast.success('Rol de usuario actualizado');
    } catch (error) {
      console.error('Error updating user role:', error);
      toast.error('Error al actualizar el rol del usuario');
    }
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
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { key: 'overview', label: 'Resumen', icon: FaChartBar },
              { key: 'users', label: 'Usuarios', icon: FaUsers },
              { key: 'forum', label: 'Foro', icon: FaComments },
              { key: 'lessons', label: 'Lecciones', icon: FaBook }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as ActiveTab)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === key
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Sistema</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100">
                    <FaUsers className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100">
                    <FaComments className="text-green-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Mensajes en Foro</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-orange-100">
                    <FaChartBar className="text-orange-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100">
                    <FaBook className="text-purple-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Exámenes Completados</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedExams}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Usuarios</h2>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuario
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rol
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha de Registro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name || 'Sin nombre'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={user.role}
                          onChange={(e) => handleChangeUserRole(user.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="Alumno">Alumno</option>
                          <option value="Admin">Admin</option>
                          <option value="Moderador">Moderador</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-orange-600 hover:text-orange-900 mr-3">
                          <FaEye />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Forum Tab */}
        {activeTab === 'forum' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Moderación del Foro</h2>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuario
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contenido
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Página
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {forumMessages.slice(0, 50).map((message) => (
                    <tr key={message.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{message.nombre}</div>
                        <div className="text-sm text-gray-500">{message.correo}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {message.contenido}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {message.pagina}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {message.timestamp?.toDate?.()?.toLocaleDateString() || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDeleteForumMessage(message.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Lecciones</h2>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Activa o desactiva las lecciones disponibles para los estudiantes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {lessons.map((lesson) => (
                    <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{lesson.name}</h3>
                          <p className="text-sm text-gray-500">ID: {lesson.id}</p>
                        </div>
                        <button
                          onClick={() => handleToggleLesson(lesson.id)}
                          className={`text-2xl ${
                            lesson.enabled ? 'text-green-500' : 'text-gray-400'
                          }`}
                        >
                          {lesson.enabled ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lesson.enabled
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {lesson.enabled ? 'Activa' : 'Inactiva'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
