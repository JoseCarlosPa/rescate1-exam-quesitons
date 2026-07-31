import {describe, expect, it} from 'vitest';
import {calculateScore, getPerformanceLevel} from './CaseSimulator.logic';
import {simulatorCases} from './CaseSimulator.constants';
import {SimulatorProgress} from './CaseSimulator.types';

const baseProgress = (overrides: Partial<SimulatorProgress> = {}): SimulatorProgress => ({
    currentStep: 0,
    userAnswers: [],
    score: 0,
    startTime: 0,
    mistakes: 0,
    criticalErrors: 0,
    failedCriticalStep: false,
    ...overrides
});

const answers = (count: number, correct: boolean) =>
    Array.from({length: count}, (_, i) => ({
        stepId: `step-${i}`,
        selectedOptionId: `opt-${i}`,
        isCorrect: correct,
        timeSpent: 1000
    }));

describe('calculateScore', () => {
    it('returns 100 for all-correct answers within the time limit', () => {
        const progress = baseProgress({userAnswers: answers(6, true)});
        expect(calculateScore(progress, 6, 5 * 60000)).toBe(100);
    });

    it('returns 0 when there are no steps', () => {
        expect(calculateScore(baseProgress(), 0, 0)).toBe(0);
    });

    it('applies mistake and critical-error penalties', () => {
        // 4/5 correctas = 80 base; 1 error = -2; 1 crítico = -10 → 68
        const progress = baseProgress({
            userAnswers: [...answers(4, true), ...answers(1, false)],
            mistakes: 1,
            criticalErrors: 1
        });
        expect(calculateScore(progress, 5, 60000)).toBe(68);
    });

    it('applies a time penalty beyond 20 minutes', () => {
        const progress = baseProgress({userAnswers: answers(5, true)});
        // 100 base menos ~5 min por encima de los 20 → 95
        expect(calculateScore(progress, 5, 25 * 60000)).toBe(95);
    });

    it('never returns a negative score', () => {
        const progress = baseProgress({
            userAnswers: answers(1, false),
            mistakes: 50,
            criticalErrors: 10
        });
        expect(calculateScore(progress, 5, 60000)).toBe(0);
    });
});

describe('getPerformanceLevel', () => {
    it.each([
        [100, 'excellent'],
        [90, 'excellent'],
        [89, 'good'],
        [75, 'good'],
        [74, 'needs_improvement'],
        [60, 'needs_improvement'],
        [59, 'poor'],
        [0, 'poor']
    ] as const)('maps score %i to %s', (score, expected) => {
        expect(getPerformanceLevel(score)).toBe(expected);
    });
});

describe('simulator case data integrity', () => {
    it.each(simulatorCases.map(c => [c.id, c] as const))('case %s is internally consistent', (_id, simCase) => {
        expect(simCase.steps.length).toBeGreaterThan(0);

        const stepIds = new Set<string>();
        for (const step of simCase.steps) {
            // IDs de paso únicos.
            expect(stepIds.has(step.id)).toBe(false);
            stepIds.add(step.id);

            // Exactamente una opción correcta por paso.
            const correctOptions = step.options.filter(opt => opt.isCorrect);
            expect(correctOptions.length).toBe(1);

            // IDs de opción únicos dentro del paso.
            const optionIds = step.options.map(opt => opt.id);
            expect(new Set(optionIds).size).toBe(optionIds.length);

            // Si existe el campo legado correctOptionId, debe coincidir con isCorrect.
            if (step.correctOptionId !== undefined) {
                expect(step.correctOptionId).toBe(correctOptions[0].id);
            }
        }
    });

    it.each(simulatorCases.filter(c => c.glasgowScore).map(c => [c.id, c] as const))(
        'case %s has a Glasgow score within 3-15',
        (_id, simCase) => {
            const expected = simCase.glasgowScore!.expected;
            expect(expected).toBeGreaterThanOrEqual(3);
            expect(expected).toBeLessThanOrEqual(15);
        }
    );

    it('has unique case ids across the catalog', () => {
        const ids = simulatorCases.map(c => c.id);
        expect(new Set(ids).size).toBe(ids.length);
    });
});
