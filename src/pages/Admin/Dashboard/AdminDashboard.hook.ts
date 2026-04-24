import {useAuth} from "../../../Providers/AuthProvider";
import {useNavigate} from "react-router";
import {useCallback, useEffect, useState} from "react";
import {
    ActiveTab,
    Elemento,
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
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    Timestamp,
    updateDoc
} from "firebase/firestore";
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
    const [elementos, setElementos] = useState<Elemento[]>([]);
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

    // ── Fetch Elementos ────────────────────────────────────────────────────────

    const fetchElementos = useCallback(async () => {
        try {
            const snap = await getDocs(
                query(collection(db, 'elementos'), orderBy('createdAt', 'desc'))
            );
            const data = snap.docs.map(d => ({id: d.id, ...d.data()})) as Elemento[];
            setElementos(data);
        } catch (error) {
            console.error('Error fetching elementos:', error);
            toast.error('Error al cargar los elementos');
        }
    }, []);

    const handleCreateElemento = async (data: Omit<Elemento, 'id' | 'createdAt'>) => {
        try {
            const newElemento = {
                ...data,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
            };
            await addDoc(collection(db, 'elementos'), newElemento);
            await fetchElementos();
            toast.success('Elemento creado exitosamente');
        } catch (error) {
            console.error('Error creating elemento:', error);
            toast.error('Error al crear el elemento');
        }
    };

    const handleUpdateElemento = async (id: string, data: Partial<Elemento>) => {
        try {
            await updateDoc(doc(db, 'elementos', id), {
                ...data,
                updatedAt: Timestamp.now(),
            });
            setElementos(prev => prev.map(e => e.id === id ? {...e, ...data} : e));
            toast.success('Elemento actualizado exitosamente');
        } catch (error) {
            console.error('Error updating elemento:', error);
            toast.error('Error al actualizar el elemento');
        }
    };

    const handleToggleElementoStatus = async (id: string) => {
        const elemento = elementos.find(e => e.id === id);
        if (!elemento) return;
        const newStatus = elemento.status === 'activo' ? 'inactivo' : 'activo';
        await handleUpdateElemento(id, {status: newStatus});
    };

    const handleDeleteElemento = async (id: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar este elemento?')) return;
        try {
            await deleteDoc(doc(db, 'elementos', id));
            setElementos(prev => prev.filter(e => e.id !== id));
            toast.success('Elemento eliminado');
        } catch (error) {
            console.error('Error deleting elemento:', error);
            toast.error('Error al eliminar el elemento');
        }
    };

    // ── Fetch admin data ───────────────────────────────────────────────────────

    const fetchAdminData = useCallback(async () => {
        try {
            const usersSnapshot = await getDocs(collection(db, 'users'));
            const usersData = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as User[];
            setUsers(usersData);

            const forumSnapshot = await getDocs(
                query(collection(db, 'forum'), orderBy('timestamp', 'desc'))
            );
            const forumData = forumSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as ForumMessage[];
            setForumMessages(forumData);

            await fetchTasks();
            await fetchElementos();

            try {
                const weightsDoc = await getDocs(query(collection(db, 'settings')));
                const weightsData = weightsDoc.docs.find(doc => doc.id === 'gradeWeights');
                if (weightsData) {
                    setGradeWeights(weightsData.data() as GradeWeights);
                }
            } catch (_) {
                console.log('Using default grade weights');
            }

            const totalUsers = usersData.length;
            const totalMessages = forumData.length;
            const activeUsers = usersData.filter(user =>
                user.exams && Object.values(user.exams).some((exam: ExamData) => exam.completed)
            ).length;

            let totalScore = 0;
            let totalExamsTaken = 0;
            let topPerformers = 0;

            const completedExams = usersData.reduce((total, user) => {
                if (user.exams) {
                    const userCompletedExams = Object.values(user.exams).filter((exam: ExamData) => exam.completed);
                    userCompletedExams.forEach((exam: ExamData) => {
                        totalScore += exam.score;
                        totalExamsTaken++;
                    });
                    if (userCompletedExams.length > 0) {
                        const userAverage = userCompletedExams.reduce((sum, exam) => sum + exam.score, 0) / userCompletedExams.length;
                        if (userAverage >= 85) topPerformers++;
                    }
                    return total + userCompletedExams.length;
                }
                return total;
            }, 0);

            const averageScore = totalExamsTaken > 0 ? Math.round(totalScore / totalExamsTaken) : 0;

            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const recentActivity = forumData.filter(message =>
                message.timestamp.toDate() >= sevenDaysAgo
            ).length;

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
    }, [tasks, fetchElementos]);

    useEffect(() => {
        if (!user) {
            navigate(AllRoutes.LOGIN);
            return;
        }
        if (user.role !== "Admin") {
            toast.error('No tienes permisos para acceder al panel administrativo');
            navigate(AllRoutes.STUDENT_DASHBOARD);
            return;
        }
        fetchAdminData();
    }, [user, navigate, fetchAdminData]);

    // ── Forum ──────────────────────────────────────────────────────────────────

    const handleDeleteForumMessage = async (messageId: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar este mensaje?')) return;
        try {
            await deleteDoc(doc(db, 'forum', messageId));
            setForumMessages(prev => prev.filter(msg => msg.id !== messageId));
            toast.success('Mensaje eliminado exitosamente');
        } catch (error) {
            console.error('Error deleting forum message:', error);
            toast.error('Error al eliminar el mensaje');
        }
    };

    // ── Lessons ────────────────────────────────────────────────────────────────

    const handleToggleLesson = (lessonId: number) => {
        setLessons(prev => prev.map(lesson =>
            lesson.id === lessonId ? {...lesson, enabled: !lesson.enabled} : lesson
        ));
        toast.success('Configuración de lección actualizada');
    };

    // ── Users ──────────────────────────────────────────────────────────────────

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
            const user = users.find(u => u.id === userId);
            if (!user) { toast.error('Usuario no encontrado'); return; }

            const userForumMessages = forumMessages.filter(message => message.correo === user.email);
            const userTaskSubmissions = taskSubmissions.filter(submission => submission.studentId === userId);
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

    // ── Tasks ──────────────────────────────────────────────────────────────────

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
            const total = weights.exams + weights.tasks + weights.attendance;
            if (total !== 100) { toast.error('Los porcentajes deben sumar 100%'); return; }
            setGradeWeights(weights);
            await recalculateFinalGrades();
            toast.success('Configuración de pesos actualizada');
        } catch (error) {
            console.error('Error updating grade weights:', error);
            toast.error('Error al actualizar la configuración');
        }
    };

    const calculateFinalGrade = (
        userExams: Record<string, ExamData>,
        userTasks: TaskSubmission[],
        attendance: number = 0
    ) => {
        const completedExams = Object.values(userExams || {}).filter(exam => exam.completed);
        const examAverage = completedExams.length > 0
            ? completedExams.reduce((sum, exam) => sum + exam.score, 0) / completedExams.length
            : 0;

        const gradedTasks = userTasks?.filter(task => task.isGraded) || [];
        const taskAverage = gradedTasks.length > 0
            ? gradedTasks.reduce((sum, task) => sum + (task.score || 0), 0) / gradedTasks.length
            : 0;

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
                    const finalGrade = calculateFinalGrade(user.exams || {}, userTasks, 0);
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
        calculateFinalGrade,
        // Elementos
        elementos,
        fetchElementos,
        handleCreateElemento,
        handleUpdateElemento,
        handleToggleElementoStatus,
        handleDeleteElemento,
    };
}