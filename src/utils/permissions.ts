import {tUser} from "../Providers/AuthProvider/Auth.types";

export type UserRole = tUser['role'] | null; // null = no logueado

// Roles con acceso completo al contenido principal
const FULL_ACCESS_ROLES: UserRole[] = ['Alumno', 'Elemento', 'Moderador', 'Admin'];

/**
 * Verifica si el usuario puede acceder a las secciones principales
 * (TAMP B, TAMP A, Rescate con cuerdas, BLS, Glosario, etc.)
 * Los roles "Sin asignar" y no autenticados (null) NO tienen acceso.
 */
export function canAccessMainContent(role: UserRole): boolean {
    return FULL_ACCESS_ROLES.includes(role);
}

/**
 * Verifica si el usuario puede acceder a la sección de Recursos.
 * Requiere el campo resourcesAccess=true en Firestore, sin importar el rol.
 */
export function canAccessResources(user: tUser | null): boolean {
    return !!user?.resourcesAccess;
}
