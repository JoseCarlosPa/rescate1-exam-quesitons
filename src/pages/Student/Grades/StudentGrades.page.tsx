import {useCallback, useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {doc, getDoc, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebase/firebaseConfig';
import {FaArrowLeft, FaChartLine, FaCheck, FaGraduationCap, FaTimes, FaTrophy,} from 'react-icons/fa';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useAuth} from "../../../Providers/AuthProvider";

interface ExamResult {
    id: number;
    name: string;
    score: number;
    completed: boolean;
    completedAt?: Date;
    totalQuestions: number;
    correctAnswers: number;
}

export interface ExamData {
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
    exams: Record<string, ExamData>;
}

type FilterType = 'all' | 'completed' | 'pending';
type SortType = 'name' | 'score' | 'date';

export const examNames: Record<number, string> = {
    1: "Examen General",
    2: "Aspectos Legales",
    3: "Comunicaciones y documentación",
    4: "Sistema SEM",
    5: "Seguridad y bienestar del personal",
    6: "Términos Médicos",
    7: "El Cuerpo Humano",
    8: "Desarrollo y esperanza de vida",
    9: "Evaluación del paciente",
    10: "Mnemotecnias",
    11: "Manejo de la Vía Aérea",
    12: "Principios de la Farmacología",
    13: "Administración de Medicamentos",
    14: "Shock",
    15: "Reanimación: Soporte Vital Básico (SVB)",
    16: "Código Mega",
    17: "Visión médica general",
    18: "Emergencias respiratorias",
    19: "Emergencias Cardiovasculares",
    20: "Emergencias Neurológicas",
    21: "Emergencias gastrointestinales y urológicas",
    22: "Emergencias endocrinas y hematológicas",
    23: "Conceptos generales de trauma",
    24: "Inmovilización",
    25: "Hemorragias",
    27: "Lesiones de cara y cuello",
    28: "Lesiones del tejido blando",
    29: "Lesiones de cabeza y columna vertebral",
    30: "Lesiones del tórax",
    31: "Lesiones Ortopédicas",
    32: "Lesiones Abdominales y genitourinarias",
    33: "Emergencias inmunológicas",
    34: "Toxicología",
    35: "Emergencias Ambientales",
    36: "Emergencias Psiquiátricas",
    37: "Emergencias Ginecológicas",
    38: "Cuidados obstétricos y neonatales",
    39: "Emergencias pediátricas",
    40: "Emergencias Geriátricas",
    41: "Pacientes con necesidades especiales",
    42: "Operaciones de transporte",
    43: "Manejo de incidentes",
    44: "Respuesta al terrorismo y manejo de desastres"
};

export default function StudentGrades() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [examResults, setExamResults] = useState<ExamResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<FilterType>('all');
    const [sortBy, setSortBy] = useState<SortType>('name');

    const fetchStudentGrades = useCallback(async () => {
        if (!user?.id) return;

        try {
            const userDoc = await getDoc(doc(db, 'users', user.id));
            if (userDoc.exists()) {
                const data = userDoc.data() as StudentData;
                processExamResults(data.exams || {});
            }
        } catch (error) {
            console.error('Error fetching student grades:', error);
            toast.error('Error al cargar las calificaciones');
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        if (!user) {
            navigate(AllRoutes.LOGIN);
            return;
        }

        fetchStudentGrades();
    }, [user, navigate, fetchStudentGrades]);

    const processExamResults = (exams: Record<string, ExamData>) => {
        const results: ExamResult[] = [];

        Object.entries(examNames).forEach(([id, name]) => {
            const examId = parseInt(id);
            const examData = exams[examId] || {};

            results.push({
                id: examId,
                name,
                score: examData.score || 0,
                completed: examData.completed || false,
                completedAt: examData.completedAt?.toDate?.() || undefined,
                totalQuestions: examData.totalQuestions || 0,
                correctAnswers: examData.correctAnswers || 0
            });
        });

        setExamResults(results);
    };

    const getFilteredAndSortedResults = () => {
        let filtered: ExamResult[];

        // Aplicar filtro
        switch (filter) {
            case 'completed':
                filtered = examResults.filter(exam => exam.completed);
                break;
            case 'pending':
                filtered = examResults.filter(exam => !exam.completed);
                break;
            default:
                filtered = examResults;
        }

        // Aplicar ordenamiento
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'score':
                    return b.score - a.score;
                case 'date':
                    if (!a.completedAt && !b.completedAt) return 0;
                    if (!a.completedAt) return 1;
                    if (!b.completedAt) return -1;
                    return b.completedAt.getTime() - a.completedAt.getTime();
                default:
                    return a.name.localeCompare(b.name);
            }
        });
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600 bg-green-100';
        if (score >= 80) return 'text-blue-600 bg-blue-100';
        if (score >= 70) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    const getOverallStats = () => {
        const completed = examResults.filter(exam => exam.completed);
        const total = examResults.length;
        const averageScore = completed.length > 0
            ? completed.reduce((sum, exam) => sum + exam.score, 0) / completed.length
            : 0;

        return {
            completed: completed.length,
            total,
            averageScore: Math.round(averageScore),
            completionRate: Math.round((completed.length / total) * 100)
        };
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500"/>
            </div>
        );
    }

    const stats = getOverallStats();
    const filteredResults = getFilteredAndSortedResults();

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
                            <h1 className="text-xl font-semibold text-gray-900">Mis Calificaciones</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100">
                                <FaGraduationCap className="text-blue-600 text-xl"/>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Completados</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.completed}/{stats.total}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100">
                                <FaChartLine className="text-green-600 text-xl"/>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Promedio</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.averageScore}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-orange-100">
                                <FaTrophy className="text-orange-600 text-xl"/>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Progreso</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-100">
                                <FaCheck className="text-purple-600 text-xl"/>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Aprobados</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {examResults.filter(exam => exam.completed && exam.score >= 80).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Controls */}
                <div className="bg-white rounded-lg shadow mb-6">
                    <div className="p-6 border-b">
                        <div
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                            <div className="flex space-x-4">
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value as FilterType)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                >
                                    <option value="all">Todos los exámenes</option>
                                    <option value="completed">Completados</option>
                                    <option value="pending">Pendientes</option>
                                </select>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortType)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                >
                                    <option value="name">Ordenar por nombre</option>
                                    <option value="score">Ordenar por calificación</option>
                                    <option value="date">Ordenar por fecha</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Examen
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Calificación
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Resultado
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Fecha
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {filteredResults.map((exam) => (
                                <tr key={exam.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          exam.completed
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}>
                        {exam.completed ? (
                            <>
                                <FaCheck className="mr-1"/>
                                Completado
                            </>
                        ) : (
                            <>
                                <FaTimes className="mr-1"/>
                                Pendiente
                            </>
                        )}
                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {exam.completed ? (
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getScoreColor(exam.score)}`}>
                          {exam.score}%
                        </span>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {exam.completed && exam.totalQuestions > 0 ? (
                                            `${exam.correctAnswers}/${exam.totalQuestions}`
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {exam.completedAt ? (
                                            exam.completedAt.toLocaleDateString()
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredResults.length === 0 && (
                        <div className="text-center py-12">
                            <FaGraduationCap className="mx-auto text-4xl text-gray-300 mb-4"/>
                            <p className="text-gray-500">No se encontraron exámenes con los filtros seleccionados</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
