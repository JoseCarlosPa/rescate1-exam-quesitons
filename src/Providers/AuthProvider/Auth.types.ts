export type tUser = {
    id: string;
    email?: string | null;
    name?: string | null;
    photoURL?: string | null;
    role: 'Alumno' | 'Moderador' | 'Admin' | 'Elemento';
    createdAt: Date;
    updatedAt?: Date;
}