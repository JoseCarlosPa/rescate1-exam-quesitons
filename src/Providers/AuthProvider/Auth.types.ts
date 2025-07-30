export type tUser = {
    id: string;
    email?: string | null;
    name?: string | null;
    photoURL?: string | null;
    role: 'Alumno' | 'Mod' | 'Admin';
    createdAt: Date;
    updatedAt?: Date;
}