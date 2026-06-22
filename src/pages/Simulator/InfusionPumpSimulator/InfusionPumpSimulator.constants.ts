import type { DrugLibraryEntry, PumpProfile, SafetyChecklistItem, SimulatorCase } from './InfusionPumpSimulator.types';

export const PUMP_PROFILES: PumpProfile[] = [
    {
        id: 'alaris-gw',
        name: 'Alaris GW (perfil prehospitalario)',
        minRateMlHr: 0.1,
        maxRateMlHr: 999,
        maxVtbiMl: 999,
    },
    {
        id: 'baxter-spectrum',
        name: 'Baxter Spectrum (perfil prehospitalario)',
        minRateMlHr: 0.1,
        maxRateMlHr: 1200,
        maxVtbiMl: 1000,
    },
];

export const INFUSION_DRUG_LIBRARY: DrugLibraryEntry[] = [
    {
        id: 'norepinephrine',
        name: 'Norepinefrina',
        className: 'Vasopresor',
        indication: 'Shock distributivo con hipotension refractaria a fluidos',
        standardBagMg: 8,
        standardVolumeMl: 250,
        ahaDoseMinMcgKgMin: 0.05,
        ahaDoseMaxMcgKgMin: 1,
        notes: 'Ajustar a perfusion objetivo, monitorizar PAM y perfusion periferica.',
    },
    {
        id: 'epinephrine',
        name: 'Epinefrina',
        className: 'Vasopresor/Inotropico',
        indication: 'Bradicardia refractaria o shock con componente inotropico',
        standardBagMg: 4,
        standardVolumeMl: 250,
        ahaDoseMinMcgKgMin: 0.02,
        ahaDoseMaxMcgKgMin: 0.5,
        notes: 'Titulacion progresiva. Vigilar taquiarritmias y extravasacion.',
    },
    {
        id: 'dopamine',
        name: 'Dopamina',
        className: 'Inotropico/Vasopresor',
        indication: 'Bradicardia sintomatica o shock con bajo gasto',
        standardBagMg: 400,
        standardVolumeMl: 250,
        ahaDoseMinMcgKgMin: 5,
        ahaDoseMaxMcgKgMin: 20,
        notes: 'AHA: 5-20 mcg/kg/min. Evitar retrasos en control hemodinamico.',
    },
    {
        id: 'amiodarone',
        name: 'Amiodarona',
        className: 'Antiarritmico',
        indication: 'TV monomorfica estable (infusion de mantenimiento)',
        standardBagMg: 150,
        standardVolumeMl: 100,
        ahaDoseMinMcgKgMin: 0.5,
        ahaDoseMaxMcgKgMin: 2,
        notes: 'No sustituye bolo inicial ACLS. Vigilar hipotension y QT.',
    },
    {
        id: 'fentanyl',
        name: 'Fentanilo',
        className: 'Analgesico opioide',
        indication: 'Analgesia en paciente traumatico o ventilado',
        standardBagMg: 0.5,
        standardVolumeMl: 100,
        ahaDoseMinMcgKgMin: 0.01,
        ahaDoseMaxMcgKgMin: 0.05,
        notes: 'Usar segun protocolo local y monitorizar ventilacion continuamente.',
    },
    {
        id: 'lidocaine',
        name: 'Lidocaina',
        className: 'Antiarritmico clase Ib',
        indication: 'Mantenimiento post-cardioversion de arritmias ventriculares',
        standardBagMg: 2000,
        standardVolumeMl: 500,
        ahaDoseMinMcgKgMin: 0,
        ahaDoseMaxMcgKgMin: 0,
        dosingUnit: 'mg/min',
        preferredMode: 'mlh',
        notes: 'Dosis mantenimiento: 1-4 mg/min IV. Concentracion estandar 4 mg/mL (2 g/500 mL). Equivale a 15-60 mL/h.',
    },
    {
        id: 'vasopressin',
        name: 'Vasopresina',
        className: 'Vasopresor no adrenergico',
        indication: 'Adjunto a norepinefrina en shock distributivo refractario',
        standardBagMg: 40,
        standardVolumeMl: 100,
        ahaDoseMinMcgKgMin: 0,
        ahaDoseMaxMcgKgMin: 0,
        dosingUnit: 'UI/min',
        preferredMode: 'mlh',
        notes: 'Dosis fija: 0.03-0.04 UI/min. Concentracion estandar 0.4 UI/mL (40 UI/100 mL). No titular mas alla de 0.04 UI/min.',
    },
    {
        id: 'midazolam',
        name: 'Midazolam',
        className: 'Benzodiacepina / Sedante',
        indication: 'Sedacion en convulsiones refractarias o intubacion prehospitalaria',
        standardBagMg: 50,
        standardVolumeMl: 50,
        ahaDoseMinMcgKgMin: 0,
        ahaDoseMaxMcgKgMin: 0,
        dosingUnit: 'mg/kg/h',
        preferredMode: 'weight-based',
        notes: 'Sedacion: 0.02-0.1 mg/kg/h. A 1 mg/mL en paciente de 70 kg: 1.4-7 mL/h. Monitorizar FR y SpO2 continuamente.',
    },
    {
        id: 'ketamine',
        name: 'Ketamina',
        className: 'Disociativo / Analgesico',
        indication: 'Analgesia en trauma penetrante o sedacion procedimental',
        standardBagMg: 500,
        standardVolumeMl: 500,
        ahaDoseMinMcgKgMin: 0,
        ahaDoseMaxMcgKgMin: 0,
        dosingUnit: 'mg/kg/h',
        preferredMode: 'weight-based',
        notes: 'Analgesia: 0.1-0.5 mg/kg/h. A 1 mg/mL en 70 kg: 7-35 mL/h. Sedacion disociativa: 1-2 mg/kg bolus (no en infusion).',
    },
];

export const PREHOSPITAL_CASES: SimulatorCase[] = [
    {
        id: 'septic-shock',
        title: 'Shock septico refractario',
        objective: 'Iniciar norepinefrina y titular para PAM >= 65 mmHg.',
        drugId: 'norepinephrine',
        suggestedWeightKg: 75,
        suggestedDoseMcgKgMin: 0.1,
        suggestedVtbiMl: 120,
    },
    {
        id: 'symptomatic-bradycardia',
        title: 'Bradicardia sintomatica refractaria',
        objective: 'Programar infusion de dopamina mientras se traslada.',
        drugId: 'dopamine',
        suggestedWeightKg: 80,
        suggestedDoseMcgKgMin: 7,
        suggestedVtbiMl: 100,
    },
    {
        id: 'stable-vt',
        title: 'TV estable post-bolo',
        objective: 'Configurar mantenimiento de amiodarona.',
        drugId: 'amiodarone',
        suggestedWeightKg: 70,
        suggestedDoseMcgKgMin: 1,
        suggestedVtbiMl: 100,
        preferredMode: 'weight-based',
    },
    {
        id: 'penetrating-trauma-analgesia',
        title: 'Analgesia en trauma penetrante',
        objective: 'Titular ketamina para analgesia en paciente consciente con trauma penetrante.',
        drugId: 'ketamine',
        suggestedWeightKg: 80,
        suggestedDoseMcgKgMin: 0,
        suggestedVtbiMl: 100,
        preferredMode: 'weight-based',
    },
    {
        id: 'refractory-seizures',
        title: 'Convulsiones refractarias en campo',
        objective: 'Iniciar midazolam IV en infusion y monitorizar ventilacion continuamente.',
        drugId: 'midazolam',
        suggestedWeightKg: 70,
        suggestedDoseMcgKgMin: 0,
        suggestedVtbiMl: 50,
        preferredMode: 'weight-based',
    },
    {
        id: 'afib-post-cardioversion',
        title: 'FA post-cardioversion: mantenimiento',
        objective: 'Configurar lidocaina de mantenimiento post-cardioversion de FA con respuesta ventricular rapida.',
        drugId: 'lidocaine',
        suggestedWeightKg: 75,
        suggestedDoseMcgKgMin: 0,
        suggestedVtbiMl: 100,
        preferredMode: 'mlh',
    },
];

export function concentrationMcgMl(drug: DrugLibraryEntry): number {
    return (drug.standardBagMg * 1000) / drug.standardVolumeMl;
}

export function calculateRateMlHrFromDose(
    doseMcgKgMin: number,
    weightKg: number,
    concentration: number,
): number {
    if (doseMcgKgMin <= 0 || weightKg <= 0 || concentration <= 0) return 0;
    return (doseMcgKgMin * weightKg * 60) / concentration;
}

export function calculateDoseMcgKgMinFromRate(
    rateMlHr: number,
    weightKg: number,
    concentration: number,
): number {
    if (rateMlHr <= 0 || weightKg <= 0 || concentration <= 0) return 0;
    return (rateMlHr * concentration) / (weightKg * 60);
}

export function validateDoseWithinAhaRange(drug: DrugLibraryEntry, doseMcgKgMin: number): boolean {
    return doseMcgKgMin >= drug.ahaDoseMinMcgKgMin && doseMcgKgMin <= drug.ahaDoseMaxMcgKgMin;
}

export function isDoseValidationApplicable(drug: DrugLibraryEntry): boolean {
    return !drug.dosingUnit || drug.dosingUnit === 'mcg/kg/min';
}

export function validateMlhRateForDrug(drug: DrugLibraryEntry, rateMlHr: number): boolean {
    if (drug.id === 'lidocaine') return rateMlHr >= 15 && rateMlHr <= 60;
    if (drug.id === 'vasopressin') return rateMlHr >= 4 && rateMlHr <= 7;
    return true;
}

export function isWithinPercentage(value: number, expected: number, percentage: number): boolean {
    if (expected <= 0) return false;
    const tolerance = expected * (percentage / 100);
    return Math.abs(value - expected) <= tolerance;
}

export const BASE_ALARMS = [
    { id: 'occlusion', label: 'Oclusion en linea', severity: 'critical' as const, active: false },
    { id: 'air-line', label: 'Aire en linea', severity: 'critical' as const, active: false },
    { id: 'door-open', label: 'Puerta abierta', severity: 'critical' as const, active: false },
    { id: 'low-battery', label: 'Bateria baja', severity: 'warning' as const, active: false },
    { id: 'near-end', label: 'VTBI por terminar', severity: 'warning' as const, active: false },
    { id: 'dose-range', label: 'Dosis fuera de rango AHA', severity: 'warning' as const, active: false },
    { id: 'program-error', label: 'Error de programacion', severity: 'info' as const, active: false },
    { id: 'infusion-complete', label: 'Infusion completada', severity: 'info' as const, active: false },
];

export const DEFAULT_SAFETY_CHECKLIST: SafetyChecklistItem[] = [
    { id: 'line-primed', label: 'Linea cebada y purgada sin burbujas', checked: false },
    { id: 'correct-drug', label: 'Farmaco/concentracion verificados por doble chequeo', checked: false },
    { id: 'iv-patency', label: 'Permeabilidad de acceso IV confirmada', checked: false },
    { id: 'pump-locked', label: 'Programacion revisada y bomba bloqueada', checked: false },
];

