import { describe, expect, it } from 'vitest';
import {
    INFUSION_DRUG_LIBRARY,
    calculateDoseMcgKgMinFromRate,
    calculateRateMlHrFromDose,
    concentrationMcgMl,
    isWithinPercentage,
    validateDoseWithinAhaRange,
} from './InfusionPumpSimulator.constants';

describe('Infusion pump calculation engine', () => {
    it('calculates rate from dose for norepinephrine', () => {
        const drug = INFUSION_DRUG_LIBRARY.find((item) => item.id === 'norepinephrine');
        if (!drug) throw new Error('Missing norepinephrine in library.');
        const concentration = concentrationMcgMl(drug);
        const rate = calculateRateMlHrFromDose(0.1, 75, concentration);
        expect(rate).toBeCloseTo(14.06, 2);
    });

    it('calculates dose from manual rate', () => {
        const drug = INFUSION_DRUG_LIBRARY.find((item) => item.id === 'dopamine');
        if (!drug) throw new Error('Missing dopamine in library.');
        const concentration = concentrationMcgMl(drug);
        const dose = calculateDoseMcgKgMinFromRate(30, 80, concentration);
        expect(dose).toBeCloseTo(10, 1);
    });

    it('validates ACLS/AHA dose ranges', () => {
        const drug = INFUSION_DRUG_LIBRARY.find((item) => item.id === 'epinephrine');
        if (!drug) throw new Error('Missing epinephrine in library.');
        expect(validateDoseWithinAhaRange(drug, 0.15)).toBe(true);
        expect(validateDoseWithinAhaRange(drug, 0.8)).toBe(false);
    });

    it('matches values within percentage tolerance', () => {
        expect(isWithinPercentage(0.12, 0.1, 20)).toBe(true);
        expect(isWithinPercentage(0.14, 0.1, 20)).toBe(false);
    });
});

