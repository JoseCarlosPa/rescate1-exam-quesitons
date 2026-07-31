/**
 * Lógica de asistencia de guardias. Cada sesión es un documento en la colección
 * `attendance` con un id determinista `slug(guardia)__YYYY-MM-DD` para evitar
 * registrar dos veces la misma fecha. `present` es la lista de UIDs presentes.
 */
import {Guardia} from "../constants/guardia.constants";

export interface AttendanceSession {
    id: string;
    guardia: Guardia;
    /** Fecha de la sesión en ISO `YYYY-MM-DD`. */
    date: string;
    /** UIDs de los elementos presentes. */
    present: string[];
    recordedBy: string;
    /** ISO date-time de cuándo se registró (string para serializar fácil). */
    recordedAt?: string;
}

/** Convierte "Sábado Nocturna" → "sabado-nocturna" para armar ids seguros. */
export function guardiaSlug(guardia: Guardia): string {
    return guardia
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '') // quitar acentos (diacríticos combinantes)
        .replace(/\s+/g, '-');
}

/** Id determinista de una sesión de asistencia. */
export function sessionId(guardia: Guardia, date: string): string {
    return `${guardiaSlug(guardia)}__${date}`;
}

/**
 * Porcentaje de asistencia de un UID sobre un conjunto de sesiones (0-100).
 * Devuelve 0 si no hay sesiones registradas.
 */
export function attendanceRate(sessions: AttendanceSession[], uid: string): number {
    if (sessions.length === 0) return 0;
    const attended = sessions.filter(s => s.present.includes(uid)).length;
    return Math.round((attended / sessions.length) * 100);
}

/** Cuenta de sesiones asistidas / total para un UID. */
export function attendanceCount(sessions: AttendanceSession[], uid: string): {attended: number; total: number} {
    return {
        attended: sessions.filter(s => s.present.includes(uid)).length,
        total: sessions.length,
    };
}

/** Sesiones ordenadas de más reciente a más antigua. */
export function sortSessionsDesc(sessions: AttendanceSession[]): AttendanceSession[] {
    return [...sessions].sort((a, b) => b.date.localeCompare(a.date));
}
