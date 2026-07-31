/**
 * Horario de las guardias recurrentes. Cada guardia ocurre semanalmente en un
 * día de la semana fijo con un turno (diurno/nocturno). A partir de eso podemos
 * calcular la próxima fecha sin almacenar un calendario aparte.
 */
import {Guardia} from "../constants/guardia.constants";

export type Turno = 'Diurna' | 'Nocturna';

interface GuardiaSchedule {
    /** Día de la semana según Date.getDay(): 0=domingo … 6=sábado. */
    weekday: number;
    turno: Turno;
    /** Hora de inicio aproximada (24h) usada para desempatar el mismo día. */
    startHour: number;
}

export const GUARDIA_SCHEDULE: Record<Guardia, GuardiaSchedule> = {
    'Viernes Nocturna': {weekday: 5, turno: 'Nocturna', startHour: 20},
    'Sábado Diurna':    {weekday: 6, turno: 'Diurna',   startHour: 8},
    'Sábado Nocturna':  {weekday: 6, turno: 'Nocturna', startHour: 20},
    'Domingo Diurna':   {weekday: 0, turno: 'Diurna',   startHour: 8},
};

/**
 * Devuelve la próxima fecha (a las startHour) en que ocurre la guardia,
 * contando desde `from`. Si hoy es el día de la guardia pero ya pasó su hora
 * de inicio, salta a la siguiente semana. `from` es inyectable para pruebas.
 */
export function nextGuardiaDate(guardia: Guardia, from: Date = new Date()): Date {
    const schedule = GUARDIA_SCHEDULE[guardia];
    const result = new Date(from.getFullYear(), from.getMonth(), from.getDate(), schedule.startHour, 0, 0, 0);

    let dayDiff = (schedule.weekday - from.getDay() + 7) % 7;
    // Si es hoy pero ya inició, mover a la próxima semana.
    if (dayDiff === 0 && from.getHours() >= schedule.startHour) {
        dayDiff = 7;
    }
    result.setDate(result.getDate() + dayDiff);
    return result;
}

/** Días completos hasta la próxima ocurrencia de la guardia. */
export function daysUntilGuardia(guardia: Guardia, from: Date = new Date()): number {
    const next = nextGuardiaDate(guardia, from);
    const startOfToday = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const startOfNext = new Date(next.getFullYear(), next.getMonth(), next.getDate());
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    return Math.round((startOfNext.getTime() - startOfToday.getTime()) / MS_PER_DAY);
}

/** Texto amigable para "cuándo es la próxima guardia". */
export function nextGuardiaLabel(guardia: Guardia, from: Date = new Date()): string {
    const days = daysUntilGuardia(guardia, from);
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Mañana';
    return `En ${days} días`;
}
