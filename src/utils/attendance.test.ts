import {describe, expect, it} from 'vitest';
import {AttendanceSession, attendanceCount, attendanceRate, guardiaSlug, sessionId, sortSessionsDesc} from './attendance';

const session = (date: string, present: string[]): AttendanceSession => ({
    id: sessionId('Sábado Nocturna', date),
    guardia: 'Sábado Nocturna',
    date,
    present,
    recordedBy: 'jefe1',
});

describe('guardiaSlug', () => {
    it('quita acentos y espacios', () => {
        expect(guardiaSlug('Sábado Nocturna')).toBe('sabado-nocturna');
        expect(guardiaSlug('Viernes Nocturna')).toBe('viernes-nocturna');
        expect(guardiaSlug('Domingo Diurna')).toBe('domingo-diurna');
    });
});

describe('sessionId', () => {
    it('arma id determinista guardia__fecha', () => {
        expect(sessionId('Sábado Diurna', '2026-01-03')).toBe('sabado-diurna__2026-01-03');
    });
});

describe('attendanceRate', () => {
    const sessions = [
        session('2026-01-03', ['a', 'b']),
        session('2026-01-10', ['a']),
        session('2026-01-17', ['a', 'b']),
        session('2026-01-24', ['c']),
    ];

    it('calcula el porcentaje de asistencia por uid', () => {
        expect(attendanceRate(sessions, 'a')).toBe(75);  // 3/4
        expect(attendanceRate(sessions, 'b')).toBe(50);  // 2/4
        expect(attendanceRate(sessions, 'c')).toBe(25);  // 1/4
    });

    it('devuelve 0 sin sesiones', () => {
        expect(attendanceRate([], 'a')).toBe(0);
    });

    it('devuelve 0 para quien nunca asistió', () => {
        expect(attendanceRate(sessions, 'zzz')).toBe(0);
    });
});

describe('attendanceCount', () => {
    it('devuelve asistidas y total', () => {
        const sessions = [session('2026-01-03', ['a']), session('2026-01-10', [])];
        expect(attendanceCount(sessions, 'a')).toEqual({attended: 1, total: 2});
    });
});

describe('sortSessionsDesc', () => {
    it('ordena de más reciente a más antigua sin mutar el original', () => {
        const original = [session('2026-01-03', []), session('2026-01-17', []), session('2026-01-10', [])];
        const sorted = sortSessionsDesc(original);
        expect(sorted.map(s => s.date)).toEqual(['2026-01-17', '2026-01-10', '2026-01-03']);
        expect(original[0].date).toBe('2026-01-03'); // no mutado
    });
});
