import {Timestamp} from "firebase/firestore";

export type ActiveTab = 'overview' | 'users' | 'elementos' | 'forum' | 'lessons' | 'tasks' | 'checklists';

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

// ─── Elementos (Personal Operativo) ───────────────────────────────────────────

export type ElementStatus = 'activo' | 'inactivo';
export type ElementRank = 'Básico' | 'Avanzado';

export const CERTIFICATIONS_LIST = [
    'BLS (Soporte Vital Básico)',
    'ACLS (Soporte Vital Cardiovascular Avanzado)',
    'PHTLS (Soporte Vital Prehospitalario en Trauma)',
    'PALS (Soporte Vital Pediátrico Avanzado)',
    'ITLS (Soporte Vital en Trauma Internacional)',
    'NRP (Reanimación Neonatal)',
    'AMLS (Soporte Vital Médico Avanzado)',
    'EPC (Cuidados del Paciente de Emergencia)',
    'Stop the Bleed',
    'Rescate Vehicular',
    'Rescate en Altura',
    'Manejo de Materiales Peligrosos (HazMat)',
    'Paramédico',
    'Técnico en Urgencias Médicas',
    'Instructor BLS',
    'Instructor ACLS',
] as const;

export interface Elemento {
    id: string;
    name: string;
    email: string;
    phone?: string;
    status: ElementStatus;
    rank: ElementRank;
    graduationYear: number;
    certifications: string[];
    photoURL?: string;
    bio?: string;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
}
