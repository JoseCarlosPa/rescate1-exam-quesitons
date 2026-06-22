import { describe, expect, it } from 'vitest';
import {
    calculateIbwKg,
    calculateMinuteVentilation,
    calculatePip,
    calculatePlateauPressure,
    generateWaveformPoint,
} from './MechanicalVentilatorSimulator.constants';

describe('calculateIbwKg', () => {
    it('calcula IBW para hombre de 175 cm correctamente', () => {
        const ibw = calculateIbwKg(175, 'male');
        expect(ibw).toBeCloseTo(71.6, 0);
    });

    it('calcula IBW para mujer de 160 cm correctamente', () => {
        const ibw = calculateIbwKg(160, 'female');
        expect(ibw).toBeCloseTo(52.7, 0);
    });
});

describe('calculatePip', () => {
    it('calcula PIP normal con pulmón sano', () => {
        // Vt=500, RR=12, I:E=1:2, compliance=50, resistance=5, PEEP=5
        const pip = calculatePip(500, 12, '1:2', 50, 5, 5);
        // Elastic: 500/50 = 10; Ti = 60/12 / 3 = 1.67s; flow = 0.5/(1.67*1000) ~ 0.000299 L/s
        // Resistive: 0.000299 * 5 ~ 0.0015; PIP = 10 + ~0.002 + 5 = ~15
        expect(pip).toBeGreaterThan(12);
        expect(pip).toBeLessThan(30);
    });

    it('calcula PIP elevado con ARDS severo (compliance=18)', () => {
        const pip = calculatePip(400, 20, '1:2', 18, 8, 12);
        // Elastic: 400/18 = 22.2; + resistive + PEEP 12 → > 35 cmH2O
        expect(pip).toBeGreaterThan(35);
    });

    it('retorna PEEP cuando Vt es 0', () => {
        const pip = calculatePip(0, 12, '1:2', 50, 5, 5);
        expect(pip).toBe(5);
    });
});

describe('calculatePlateauPressure', () => {
    it('calcula plateau en ventilación protectora', () => {
        // Vt=390, compliance=35, PEEP=12
        const plateau = calculatePlateauPressure(390, 35, 12);
        // 390/35 + 12 = 11.14 + 12 = 23.14
        expect(plateau).toBeCloseTo(23.1, 0);
    });

    it('plateau > 30 en ARDS severo sin protección pulmonar', () => {
        const plateau = calculatePlateauPressure(600, 18, 12);
        // 600/18 + 12 = 33.3 + 12 = 45.3
        expect(plateau).toBeGreaterThan(30);
    });
});

describe('calculateMinuteVentilation', () => {
    it('calcula volumen minuto correctamente', () => {
        const mv = calculateMinuteVentilation(500, 12);
        expect(mv).toBeCloseTo(6.0, 1);
    });

    it('calcula volumen minuto en taquipnea', () => {
        const mv = calculateMinuteVentilation(400, 20);
        expect(mv).toBeCloseTo(8.0, 1);
    });
});

describe('generateWaveformPoint', () => {
    it('flujo es positivo en fase inspiratoria (VC-AC)', () => {
        // t=0.3, RR=12, I:E=1:2 → Ti=1.67s → fase inspiratoria
        const point = generateWaveformPoint(0.3, 500, 12, '1:2', 5, 0, 'vc-ac', 50, 5);
        expect(point.flow).toBeGreaterThan(0);
    });

    it('flujo es negativo en fase espiratoria (VC-AC)', () => {
        // t=2.5, RR=12, I:E=1:2 → Ti=1.67s, periodo=5s → fase espiratoria
        const point = generateWaveformPoint(2.5, 500, 12, '1:2', 5, 0, 'vc-ac', 50, 5);
        expect(point.flow).toBeLessThan(0);
    });

    it('presión en inspiración PC-AC es peep + driving', () => {
        const point = generateWaveformPoint(0.3, 500, 12, '1:2', 5, 15, 'pc-ac', 50, 5);
        expect(point.pressure).toBeCloseTo(20, 0);
    });
});
