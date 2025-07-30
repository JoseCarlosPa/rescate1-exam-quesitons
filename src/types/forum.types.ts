export interface ForumMessage {
  id: string;
  nombre: string;
  correo: string;
  contenido: string;
  timestamp: Date;
  pagina: string; // Para identificar de qué página EMT proviene
}

export interface ForumFormData {
  nombre: string;
  correo: string;
  contenido: string;
}
