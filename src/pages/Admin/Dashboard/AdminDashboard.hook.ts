import {useAuth} from "../../../Providers/AuthProvider";
import {useNavigate} from "react-router";
import {useCallback, useEffect, useMemo, useState} from "react";
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
    setDoc,
    Timestamp,
    updateDoc
} from "firebase/firestore";
import {toast} from "sonner";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {createManagedUser, db} from "../../../firebase/firebaseConfig.ts";

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

    // ── Elementos (Personal Operativo) ────────────────────────────────────────
    // Un "Elemento" es un usuario con role === 'Elemento'; no existe colección
    // separada, se deriva directamente de `users` y sus campos extra viven en
    // el mismo documento.

    const elementos = useMemo<Elemento[]>(() =>
        users
            .filter((u): u is Elemento => u.role === 'Elemento')
            .map(u => ({
                ...u,
                rank: u.rank ?? 'Básico',
                status: u.status ?? 'activo',
                graduationYear: u.graduationYear ?? new Date().getFullYear(),
                certifications: u.certifications ?? [],
            })),
        [users]
    );

    /**
     * Crea la cuenta de Firebase Auth + su documento en `users` con role='Elemento'
     * y le envía un correo de restablecimiento de contraseña para que la defina.
     */
    const handleCreateElemento = async (data: Omit<Elemento, 'id' | 'createdAt' | 'attendance' | 'role'>) => {
        try {
            const uid = await createManagedUser(data.email);
            const newUser = {
                name: data.name,
                email: data.email,
                phone: data.phone ?? '',
                photoURL: data.photoURL ?? '',
                bio: data.bio ?? '',
                role: 'Elemento',
                rank: data.rank,
                status: data.status,
                graduationYear: data.graduationYear,
                certifications: data.certifications,
                guardia: data.guardia,
                guardRole: data.guardRole,
                attendance: 0,
                createdAt: Timestamp.now(),
            };
            await setDoc(doc(db, 'users', uid), newUser);
            setUsers(prev => [...prev, {id: uid, ...newUser}]);
            toast.success('Elemento creado. Se envió un correo para que defina su contraseña.');
        } catch (error: any) {
            console.error('Error creating elemento:', error);
            if (error?.code === 'auth/email-already-in-use') {
                toast.error('Ya existe una cuenta con ese correo');
            } else {
                toast.error('Error al crear el elemento');
            }
        }
    };

    const handleUpdateElemento = async (id: string, data: Partial<Elemento>) => {
        try {
            await updateDoc(doc(db, 'users', id), data);
            setUsers(prev => prev.map(u => u.id === id ? {...u, ...data} : u));
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

    /**
     * "Eliminar" un elemento no borra su cuenta (no es posible desde el
     * cliente) ni su historial de exámenes: solo le quita el rol y los
     * campos de Personal Operativo, devolviéndolo a 'Sin asignar'.
     */
    const handleDeleteElemento = async (id: string) => {
        if (!confirm('¿Quitar a este elemento del personal operativo? Su cuenta y su historial de exámenes se conservarán, pero perderá el rol de Elemento.')) return;
        try {
            await updateDoc(doc(db, 'users', id), {
                role: 'Sin asignar',
                rank: null,
                status: null,
                graduationYear: null,
                certifications: null,
                phone: null,
                bio: null,
                guardia: null,
                guardRole: null,
            });
            setUsers(prev => prev.map(u => u.id === id
                ? {...u, role: 'Sin asignar', rank: undefined, status: undefined, graduationYear: undefined, certifications: undefined, phone: undefined, bio: undefined, guardia: undefined, guardRole: undefined}
                : u
            ));
            toast.success('Elemento removido del personal operativo');
        } catch (error) {
            console.error('Error removing elemento:', error);
            toast.error('Error al remover el elemento');
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
    }, [tasks]);

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

    const handleToggleResourcesAccess = async (userId: string, currentValue: boolean) => {
        try {
            await updateDoc(doc(db, 'users', userId), {resourcesAccess: !currentValue});
            setUsers(prev => prev.map(user =>
                user.id === userId ? {...user, resourcesAccess: !currentValue} : user
            ));
            toast.success(!currentValue ? 'Acceso a Recursos activado' : 'Acceso a Recursos revocado');
        } catch (error) {
            console.error('Error updating resources access:', error);
            toast.error('Error al actualizar el acceso a Recursos');
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
        handleToggleResourcesAccess,
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
        handleCreateElemento,
        handleUpdateElemento,
        handleToggleElementoStatus,
        handleDeleteElemento,
    };
}