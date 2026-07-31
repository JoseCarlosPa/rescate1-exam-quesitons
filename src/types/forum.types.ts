export type ForumUserRole = 'Alumno' | 'Moderador' | 'Admin' | 'Elemento' | 'Sin asignar';
export type ForumGuardRole = 'Jefe de Guardia' | 'Sub-jefe de Guardia' | 'Naranja' | 'Cadete';

export interface ForumMessage {
    id: string;
    nombre: string;
    correo: string;
    titulo?: string; // Título del thread (opcional para retrocompatibilidad)
    contenido: string;
    timestamp: Date;
    pagina: string; // Para identificar de qué página EMT proviene
    parentId?: string; // ID del mensaje padre si es una respuesta
    isThread: boolean; // Indica si es un mensaje principal (thread) o respuesta
    replyCount?: number; // Número de respuestas (solo para threads principales)
    role?: ForumUserRole; // Rol del autor al momento de publicar
    guardRole?: ForumGuardRole; // Rango de guardia (solo si role === 'Elemento')
    deleted?: boolean; // Soft-delete
    deletedAt?: Date;
    editedAt?: Date; // Última edición
}

export interface ForumFormData {
    nombre: string;
    correo: string;
    titulo?: string;
    contenido: string;
    role?: ForumUserRole;
    guardRole?: ForumGuardRole;
}

export interface ForumThread {
    message: ForumMessage;
    replies: ForumMessage[];
}
