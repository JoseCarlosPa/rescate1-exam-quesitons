import {describe, expect, it} from 'vitest';
import {daysUntilGuardia, nextGuardiaDate, nextGuardiaLabel} from './guardiaSchedule';

// 2026-01-01 es JUEVES.
const THURSDAY = new Date(2026, 0, 1, 10, 0, 0);

describe('nextGuardiaDate', () => {
    it('calcula el próximo viernes para Viernes Nocturna', () => {
        const next = nextGuardiaDate('Viernes Nocturna', THURSDAY);
        expect(next.getDay()).toBe(5);       // viernes
        expect(next.getDate()).toBe(2);      // 2026-01-02
        expect(next.getHours()).toBe(20);
    });

    it('salta a la próxima semana si hoy es el día pero ya pasó la hora', () => {
        // Viernes 2026-01-02 a las 22:00, después del inicio nocturno (20:00)
        const friNight = new Date(2026, 0, 2, 22, 0, 0);
        const next = nextGuardiaDate('Viernes Nocturna', friNight);
        expect(next.getDate()).toBe(9);      // el siguiente viernes
    });

    it('devuelve hoy mismo si aún no llega la hora de inicio', () => {
        // Sábado 2026-01-03 a las 06:00, antes del inicio diurno (08:00)
        const satMorning = new Date(2026, 0, 3, 6, 0, 0);
        const next = nextGuardiaDate('Sábado Diurna', satMorning);
        expect(next.getDate()).toBe(3);
    });
});

describe('daysUntilGuardia', () => {
    it('cuenta los días desde jueves hasta el domingo', () => {
        expect(daysUntilGuardia('Domingo Diurna', THURSDAY)).toBe(3);
    });

    it('es 1 día del jueves al viernes', () => {
        expect(daysUntilGuardia('Viernes Nocturna', THURSDAY)).toBe(1);
    });
});

describe('nextGuardiaLabel', () => {
    it('dice "Mañana" cuando falta 1 día', () => {
        expect(nextGuardiaLabel('Viernes Nocturna', THURSDAY)).toBe('Mañana');
    });

    it('dice "Hoy" cuando es el mismo día y no ha iniciado', () => {
        const satMorning = new Date(2026, 0, 3, 6, 0, 0);
        expect(nextGuardiaLabel('Sábado Diurna', satMorning)).toBe('Hoy');
    });

    it('dice "En N días" para fechas más lejanas', () => {
        expect(nextGuardiaLabel('Domingo Diurna', THURSDAY)).toBe('En 3 días');
    });
});
