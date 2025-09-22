import {useEffect, useState} from 'react';
import {addDoc, collection, getDocs, orderBy, query, Timestamp, where} from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig';
import {useAuth} from '../Providers/AuthProvider';
import {toast} from 'sonner';

export interface Task {
    id: string;
    title: string;
    description: string;
    openDate: Timestamp;
    closeDate: Timestamp;
    maxScore: number;
    createdAt: Timestamp;
    createdBy: string;
    isActive: boolean;
}

export interface TaskSubmission {
    id: string;
    taskId: string;
    studentId: string;
    studentEmail: string;
    studentName: string;
    submissionLink: string;
    submittedAt: Timestamp;
    score?: number;
    feedback?: string;
    gradedAt?: Timestamp;
    gradedBy?: string;
    isGraded: boolean;
}

export default function useStudentTasks() {
    const {user} = useAuth();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [mySubmissions, setMySubmissions] = useState<TaskSubmission[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        try {
            // Obtener todas las tareas activas
            const tasksSnapshot = await getDocs(
                query(collection(db, 'tasks'), orderBy('createdAt', 'desc'))
            );

            const tasksData = tasksSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Task[];

            // Filtrar solo tareas activas
            const activeTasks = tasksData.filter(task => task.isActive);
            setTasks(activeTasks);

            if (user?.id) {
                const submissionsSnapshot = await getDocs(
                    query(
                        collection(db, 'taskSubmissions'),
                        where('studentId', '==', user.id),
                        orderBy('submittedAt', 'desc')
                    )
                );
                const submissionsData = submissionsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as TaskSubmission[];

                setMySubmissions(submissionsData);

            }

        } catch (error) {
            console.error('Error fetching tasks:', error);
            toast.error('Error al cargar las tareas');
        } finally {
            setLoading(false);
        }
    };

    const submitTask = async (taskId: string, submissionLink: string) => {
        if (!user?.id || !user?.email || !user?.name) {
            toast.error('Información de usuario no disponible');
            return;
        }

        try {
            const submission = {
                taskId,
                studentId: user.id,
                studentEmail: user.email,
                studentName: user.name || user.email,
                submissionLink,
                submittedAt: Timestamp.now(),
                isGraded: false
            };

            await addDoc(collection(db, 'taskSubmissions'), submission);
            await fetchTasks(); // Refrescar datos
            toast.success('Tarea entregada exitosamente');
        } catch (error) {
            console.error('Error submitting task:', error);
            toast.error('Error al entregar la tarea');
        }
    };

    const isTaskOpen = (task: Task) => {
        const now = new Date();
        const openDate = task.openDate.toDate();
        const closeDate = task.closeDate.toDate();
        return now >= openDate && now <= closeDate;
    };

    const getTaskStatus = (task: Task) => {
        const now = new Date();
        const openDate = task.openDate.toDate();
        const closeDate = task.closeDate.toDate();

        if (now < openDate) return {status: 'pending', label: 'Próxima', color: 'yellow'};
        if (now > closeDate) return {status: 'closed', label: 'Cerrada', color: 'gray'};
        return {status: 'active', label: 'Activa', color: 'green'};
    };

    const hasSubmitted = (taskId: string) => {
        return mySubmissions.some(submission => submission.taskId === taskId);
    };

    const getSubmission = (taskId: string) => {
        return mySubmissions.find(submission => submission.taskId === taskId);
    };

    useEffect(() => {
        if (user) {
            fetchTasks();
        }
    }, [user]);

    return {
        tasks,
        mySubmissions,
        loading,
        submitTask,
        isTaskOpen,
        getTaskStatus,
        hasSubmitted,
        getSubmission,
        fetchTasks
    };
}
