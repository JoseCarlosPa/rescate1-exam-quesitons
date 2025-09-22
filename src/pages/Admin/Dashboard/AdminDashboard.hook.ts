import {useAuth} from "../../../Providers/AuthProvider";
import {useNavigate} from "react-router";
import {useCallback, useEffect, useState} from "react";
import {
    ActiveTab,
    ExamData,
    ForumMessage,
    GradeWeights,
    LessonConfig,
    Stats,
    Task,
    TaskSubmission,
    User,
    UserDetail
} from "./AdminDashboard.types";
import {initialLessons} from "./AdminDashboard.constants";
import {addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, Timestamp, updateDoc} from "firebase/firestore";
import {toast} from "sonner";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {db} from "../../../firebase/firebaseConfig.ts";

export default function useAdminDashboard() {

    const {user} = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [forumMessages, setForumMessages] = useState<ForumMessage[]>([]);
    const [lessons, setLessons] = useState<LessonConfig[]>(initialLessons);
    const [selectedUser, setSelectedUser] = useState<UserDetail | null>(null);
    const [showUserDetail, setShowUserDetail] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskSubmissions, setTaskSubmissions] = useState<TaskSubmission[]>([]);
    const [gradeWeights, setGradeWeights] = useState<GradeWeights>({
        exams: 70,
        tasks: 20,
        attendance: 10
    });
    const [stats, setStats] = useState<Stats>({
        totalUsers: 0,
        totalMessages: 0,
        activeUsers: 0,
        completedExams: 0,
        averageScore: 0,
        totalExamsTaken: 0,
        topPerformers: 0,
        recentActivity: 0,
        totalTasks: 0,
        pendingTasks: 0
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

            // Obtener tareas
            await fetchTasks();

            // Obtener configuración de pesos de calificación
            try {
                const weightsDoc = await getDocs(query(collection(db, 'settings')));
                const weightsData = weightsDoc.docs.find(doc => doc.id === 'gradeWeights');
                if (weightsData) {
                    setGradeWeights(weightsData.data() as GradeWeights);
                }
            } catch (error) {
                console.log('Using default grade weights');
            }

            // Calcular estadísticas avanzadas
            const totalUsers = usersData.length;
            const totalMessages = forumData.length;
            const activeUsers = usersData.filter(user =>
                user.exams && Object.values(user.exams).some((exam: ExamData) => exam.completed)
            ).length;

            // Calcular estadísticas de exámenes
            let totalScore = 0;
            let totalExamsTaken = 0;
            let topPerformers = 0;

            const completedExams = usersData.reduce((total, user) => {
                if (user.exams) {
                    const userCompletedExams = Object.values(user.exams).filter((exam: ExamData) => exam.completed);

                    // Sumar puntuaciones para promedio general
                    userCompletedExams.forEach((exam: ExamData) => {
                        totalScore += exam.score;
                        totalExamsTaken++;
                    });

                    // Contar usuarios con promedio alto (>= 85%)
                    if (userCompletedExams.length > 0) {
                        const userAverage = userCompletedExams.reduce((sum, exam) => sum + exam.score, 0) / userCompletedExams.length;
                        if (userAverage >= 85) {
                            topPerformers++;
                        }
                    }

                    return total + userCompletedExams.length;
                }
                return total;
            }, 0);

            // Calcular promedio general
            const averageScore = totalExamsTaken > 0 ? Math.round(totalScore / totalExamsTaken) : 0;

            // Calcular actividad reciente (mensajes en los últimos 7 días)
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const recentActivity = forumData.filter(message =>
                message.timestamp.toDate() >= sevenDaysAgo
            ).length;

            // Calcular estadísticas de tareas
            const totalTasks = tasks.length;
            const now = new Date();
            const pendingTasks = tasks.filter(task => {
                const openDate = task.openDate.toDate();
                const closeDate = task.closeDate.toDate();
                return now >= openDate && now <= closeDate;
            }).length;

            setStats({
                totalUsers,
                totalMessages,
                activeUsers,
                completedExams,
                averageScore,
                totalExamsTaken,
                topPerformers,
                recentActivity,
                totalTasks,
                pendingTasks
            });

        } catch (error) {
            console.error('Error fetching admin data:', error);
            toast.error('Error al cargar los datos administrativos');
        } finally {
            setLoading(false);
        }
    }, [tasks]);

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
                ? {...lesson, enabled: !lesson.enabled}
                : lesson
        ));
        toast.success('Configuración de lección actualizada');
    };

    const handleChangeUserRole = async (userId: string, newRole: string) => {
        try {
            await updateDoc(doc(db, 'users', userId), {role: newRole});
            setUsers(prev => prev.map(user =>
                user.id === userId ? {...user, role: newRole} : user
            ));
            toast.success('Rol de usuario actualizado');
        } catch (error) {
            console.error('Error updating user role:', error);
            toast.error('Error al actualizar el rol del usuario');
        }
    };

    const handleViewUser = async (userId: string) => {
        try {
            // Encontrar el usuario
            const user = users.find(u => u.id === userId);
            if (!user) {
                toast.error('Usuario no encontrado');
                return;
            }

            // Obtener mensajes del foro del usuario
            const userForumMessages = forumMessages.filter(message =>
                message.correo === user.email
            );

            // Obtener entregas de tareas del usuario
            const userTaskSubmissions = taskSubmissions.filter(submission =>
                submission.studentId === userId
            );

            // Calcular estadísticas del usuario
            const userExams = user.exams ? Object.entries(user.exams) : [];
            const completedUserExams = userExams.filter(([_, exam]) => exam.completed);
            const totalExams = userExams.length;
            const completedExams = completedUserExams.length;

            let averageScore = 0;
            if (completedUserExams.length > 0) {
                const totalScore = completedUserExams.reduce((sum, [_, exam]) => sum + exam.score, 0);
                averageScore = Math.round(totalScore / completedUserExams.length);
            }

            const userAttendance = user?.attendance || 0;
            const finalGrade = calculateFinalGrade(user.exams || {}, userTaskSubmissions, userAttendance);

            const userDetail: UserDetail = {
                ...user,
                forumMessages: userForumMessages,
                taskSubmissions: userTaskSubmissions,
                averageScore,
                totalExams,
                completedExams,
                attendance: userAttendance,
                finalGrade
            };

            setSelectedUser(userDetail);
            setShowUserDetail(true);
        } catch (error) {
            console.error('Error fetching user details:', error);
            toast.error('Error al cargar los detalles del usuario');
        }
    };

    const handleCloseUserDetail = () => {
        setShowUserDetail(false);
        setSelectedUser(null);
    };

    // Funciones para manejo de tareas
    const fetchTasks = async () => {
        try {
            const tasksSnapshot = await getDocs(
                query(collection(db, 'tasks'), orderBy('createdAt', 'desc'))
            );
            const tasksData = tasksSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Task[];
            setTasks(tasksData);

            // Obtener entregas de tareas
            const submissionsSnapshot = await getDocs(
                query(collection(db, 'taskSubmissions'), orderBy('submittedAt', 'desc'))
            );
            const submissionsData = submissionsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as TaskSubmission[];
            setTaskSubmissions(submissionsData);

        } catch (error) {
            console.error('Error fetching tasks:', error);
            toast.error('Error al cargar las tareas');
        }
    };

    const handleCreateTask = async (taskData: Partial<Task>) => {
        try {
            const newTask = {
                ...taskData,
                createdAt: Timestamp.now(),
                createdBy: user?.id || '',
                isActive: true
            };

            await addDoc(collection(db, 'tasks'), newTask);
            await fetchTasks();
            toast.success('Tarea creada exitosamente');
        } catch (error) {
            console.error('Error creating task:', error);
            toast.error('Error al crear la tarea');
        }
    };

    const handleGradeTask = async (submissionId: string, score: number, feedback: string) => {
        try {
            await updateDoc(doc(db, 'taskSubmissions', submissionId), {
                score,
                feedback,
                gradedAt: Timestamp.now(),
                gradedBy: user?.id || '',
                isGraded: true
            });

            setTaskSubmissions(prev => prev.map(submission =>
                submission.id === submissionId
                    ? {...submission, score, feedback, isGraded: true, gradedAt: Timestamp.now()}
                    : submission
            ));

            toast.success('Tarea calificada exitosamente');
        } catch (error) {
            console.error('Error grading task:', error);
            toast.error('Error al calificar la tarea');
        }
    };

    const handleUpdateGradeWeights = async (weights: GradeWeights) => {
        try {
            // Validar que sumen 100%
            const total = weights.exams + weights.tasks + weights.attendance;
            if (total !== 100) {
                toast.error('Los porcentajes deben sumar 100%');
                return;
            }
            setGradeWeights(weights);
            await recalculateFinalGrades();

            toast.success('Configuración de pesos actualizada');
        } catch (error) {
            console.error('Error updating grade weights:', error);
            toast.error('Error al actualizar la configuración');
        }
    };

    const calculateFinalGrade = (userExams: Record<string, ExamData>, userTasks: TaskSubmission[], attendance: number = 0) => {
        // Calcular promedio de exámenes
        const completedExams = Object.values(userExams || {}).filter(exam => exam.completed);
        const examAverage = completedExams.length > 0
            ? completedExams.reduce((sum, exam) => sum + exam.score, 0) / completedExams.length
            : 0;

        // Calcular promedio de tareas
        const gradedTasks = userTasks?.filter(task => task.isGraded) || [];
        const taskAverage = gradedTasks.length > 0
            ? gradedTasks.reduce((sum, task) => sum + (task.score || 0), 0) / gradedTasks.length
            : 0;

        // Calcular promedio final
        const finalGrade = (
            (examAverage * gradeWeights.exams / 100) +
            (taskAverage * gradeWeights.tasks / 100) +
            (attendance * gradeWeights.attendance / 100)
        );

        return Math.round(finalGrade);
    };

    const recalculateFinalGrades = async () => {
        try {
            for (const user of users) {
                if (user.role === 'Alumno') {
                    const userTasks = taskSubmissions.filter(submission => submission.studentId === user.id);
                    const userAttendance = 0;
                    const finalGrade = calculateFinalGrade(user.exams || {}, userTasks, userAttendance);

                    await updateDoc(doc(db, 'users', user.id), {finalGrade});
                }
            }
        } catch (error) {
            console.error('Error recalculating final grades:', error);
        }
    };

    const handleUpdateAttendance = async (userId: string, attendance: number) => {
        try {
            await updateDoc(doc(db, 'users', userId), {attendance});
            setUsers(prev => prev.map(user =>
                user.id === userId ? {...user, attendance} : user
            ));

            // Recalcular promedio final del usuario
            const user = users.find(u => u.id === userId);
            if (user) {
                const userTasks = taskSubmissions.filter(submission => submission.studentId === userId);
                const finalGrade = calculateFinalGrade(user.exams || {}, userTasks, attendance);
                await updateDoc(doc(db, 'users', userId), {finalGrade});
            }

            toast.success('Asistencia actualizada');
        } catch (error) {
            console.error('Error updating attendance:', error);
            toast.error('Error al actualizar la asistencia');
        }
    };

    return {
        activeTab,
        setActiveTab,
        loading,
        users,
        forumMessages,
        lessons,
        stats,
        tasks,
        taskSubmissions,
        gradeWeights,
        selectedUser,
        setSelectedUser,
        showUserDetail,
        setShowUserDetail,
        handleDeleteForumMessage,
        handleToggleLesson,
        handleChangeUserRole,
        handleViewUser,
        handleCloseUserDetail,
        fetchTasks,
        handleCreateTask,
        handleGradeTask,
        handleUpdateGradeWeights,
        handleUpdateAttendance,
        calculateFinalGrade
    };
}