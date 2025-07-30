export interface ForumMessage {
  id: string;
  nombre: string;
  correo: string;
  contenido: string;
  timestamp: Date;
  pagina: string; // Para identificar de qué página EMT proviene
  parentId?: string; // ID del mensaje padre si es una respuesta
  isThread: boolean; // Indica si es un mensaje principal (thread) o respuesta
  replyCount?: number; // Número de respuestas (solo para threads principales)
}

export interface ForumFormData {
  nombre: string;
  correo: string;
  contenido: string;
}

export interface ForumThread {
  message: ForumMessage;
  replies: ForumMessage[];
}
