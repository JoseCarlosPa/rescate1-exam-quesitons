import {Guardia, GuardRole} from "../../constants/guardia.constants";

export type tUser = {
    id: string;
    email?: string | null;
    name?: string | null;
    photoURL?: string | null;
    role: 'Alumno' | 'Moderador' | 'Admin' | 'Elemento' | 'Sin asignar';
    createdAt: Date;
    updatedAt?: Date;
    resourcesAccess?: boolean;
    // Solo tienen sentido cuando role === 'Elemento'
    guardia?: Guardia;
    guardRole?: GuardRole;
}