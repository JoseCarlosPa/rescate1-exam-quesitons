import {describe, expect, it} from 'vitest';
import {
    certsSummary,
    certStatus,
    daysUntilExpiry,
    normalizeCert,
    normalizeCerts,
    serializeCerts,
} from './certifications';

const NOW = new Date(2026, 0, 1); // 2026-01-01

describe('normalizeCert', () => {
    it('convierte un string heredado en CertRecord', () => {
        expect(normalizeCert('BLS')).toEqual({name: 'BLS'});
    });

    it('normaliza un objeto y descarta cadenas vacías a undefined', () => {
        expect(normalizeCert({name: 'ACLS', issuedAt: '', expiresAt: '2027-01-01'}))
            .toEqual({name: 'ACLS', issuedAt: undefined, expiresAt: '2027-01-01'});
    });
});

describe('normalizeCerts', () => {
    it('acepta arreglo mixto de strings y objetos', () => {
        const result = normalizeCerts(['BLS', {name: 'ACLS', expiresAt: '2027-01-01'}]);
        expect(result).toEqual([{name: 'BLS'}, {name: 'ACLS', expiresAt: '2027-01-01'}]);
    });

    it('descarta entradas sin nombre y maneja null/undefined', () => {
        expect(normalizeCerts(null)).toEqual([]);
        expect(normalizeCerts(['', {name: '  '}])).toEqual([]);
    });
});

describe('serializeCerts', () => {
    it('guarda como string las certs sin fechas', () => {
        expect(serializeCerts([{name: 'BLS'}])).toEqual(['BLS']);
    });

    it('guarda como objeto sin campos undefined las certs con fecha', () => {
        expect(serializeCerts([{name: 'ACLS', expiresAt: '2027-01-01'}]))
            .toEqual([{name: 'ACLS', expiresAt: '2027-01-01'}]);
    });

    it('es idempotente con normalizeCerts (round-trip)', () => {
        const stored = ['BLS', {name: 'ACLS', issuedAt: '2025-01-01', expiresAt: '2027-01-01'}];
        expect(serializeCerts(normalizeCerts(stored))).toEqual(stored);
    });
});

describe('daysUntilExpiry', () => {
    it('devuelve positivo para fechas futuras', () => {
        expect(daysUntilExpiry('2026-01-31', NOW)).toBe(30);
    });

    it('devuelve negativo para fechas pasadas', () => {
        expect(daysUntilExpiry('2025-12-02', NOW)).toBe(-30);
    });
});

describe('certStatus', () => {
    it('sin-fecha cuando no hay expiresAt', () => {
        expect(certStatus({name: 'BLS'}, NOW)).toBe('sin-fecha');
    });

    it('vencida cuando la fecha ya pasó', () => {
        expect(certStatus({name: 'BLS', expiresAt: '2025-12-31'}, NOW)).toBe('vencida');
    });

    it('por-vencer dentro de la ventana de 60 días', () => {
        expect(certStatus({name: 'BLS', expiresAt: '2026-02-15'}, NOW)).toBe('por-vencer');
    });

    it('vigente más allá de la ventana', () => {
        expect(certStatus({name: 'BLS', expiresAt: '2026-06-01'}, NOW)).toBe('vigente');
    });
});

describe('certsSummary', () => {
    it('agrega conteos por estado', () => {
        const summary = certsSummary([
            {name: 'A', expiresAt: '2025-12-31'}, // vencida
            {name: 'B', expiresAt: '2026-02-15'}, // por vencer
            {name: 'C', expiresAt: '2026-06-01'}, // vigente
            {name: 'D'},                           // sin fecha
        ], NOW);
        expect(summary).toEqual({total: 4, vencidas: 1, porVencer: 1, vigentes: 1});
    });
});
