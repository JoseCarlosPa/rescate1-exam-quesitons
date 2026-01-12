import {Timestamp} from "firebase/firestore";

export type ActiveTab = 'overview' | 'users' | 'forum' | 'lessons' | 'tasks' | 'checklists';

export interface ExamData {
    completed: boolean;
    score: number;
    name?: string;
}

export interface User {
    attendance: number;
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Timestamp;
    exams?: Record<string, ExamData>;
}

export interface ForumMessage {
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

export interface LessonConfig {
    id: number;
    name: string;
    enabled: boolean;
    route: string;
}

export interface Stats {
    totalUsers: number,
    totalMessages: number,
    activeUsers: number,
    completedExams: number,
    averageScore: number,
    totalExamsTaken: number,
    topPerformers: number,
    recentActivity: number,
    totalTasks: number,
    pendingTasks: number
}

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

export interface GradeWeights {
    exams: number;
    tasks: number;
    attendance: number;
}

export interface StudentGrades {
    userId: string;
    exams: Record<string, ExamData>;
    tasks: Record<string, TaskSubmission>;
    attendance: number;
    finalGrade: number;
}

export interface UserDetail {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Timestamp;
    exams?: Record<string, ExamData>;
    forumMessages?: ForumMessage[];
    averageScore: number;
    totalExams: number;
    completedExams: number;
    taskSubmissions?: TaskSubmission[];
    attendance?: number;
    finalGrade?: number;
}
