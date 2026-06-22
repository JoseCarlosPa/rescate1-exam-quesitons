import type {
    IERatio,
    LungModel,
    SafetyChecklistItem,
    VentAlarmState,
    VentilatorProfile,
    VentSimulatorCase,
} from './MechanicalVentilatorSimulator.types';

export const VENTILATOR_PROFILES: VentilatorProfile[] = [
    {
        id: 'zoll-eagle-ii',
        name: 'Zoll Eagle II (transporte crítico)',
        maxPipCmH2O: 80,
        maxPeepCmH2O: 20,
        maxFio2: 100,
        minVtMl: 100,
        maxVtMl: 2000,
    },
    {
        id: 'ltv-1200',
        name: 'CareFusion LTV 1200 (transporte)',
        maxPipCmH2O: 90,
        maxPeepCmH2O: 20,
        maxFio2: 100,
        minVtMl: 50,
        maxVtMl: 2500,
    },
];

export const LUNG_MODELS: LungModel[] = [
    {
        id: 'normal',
        label: 'Pulmón normal',
        complianceMlCmH2O: 50,
        resistanceCmH2OLSec: 5,
        description: 'Mecánica pulmonar normal. Compliance 50 mL/cmH2O, resistencia 5 cmH2O/L/s.',
    },
    {
        id: 'ards-mild',
        label: 'ARDS leve',
        complianceMlCmH2O: 35,
        resistanceCmH2OLSec: 7,
        description: 'ARDS leve-moderado. Compliance reducida, requiere PEEP moderado.',
    },
    {
        id: 'ards-severe',
        label: 'ARDS severo',
        complianceMlCmH2O: 18,
        resistanceCmH2OLSec: 8,
        description: 'ARDS severo. Muy baja compliance. Ventilación protectora crítica (Vt ≤ 6 mL/kg IBW).',
    },
    {
        id: 'bronchospasm',
        label: 'Broncoespasmo / Asma',
        complianceMlCmH2O: 48,
        resistanceCmH2OLSec: 22,
        description: 'Alta resistencia de la vía aérea. Riesgo de auto-PEEP. Espiración prolongada.',
    },
    {
        id: 'pneumothorax',
        label: 'Neumotórax en desarrollo',
        complianceMlCmH2O: 12,
        resistanceCmH2OLSec: 15,
        description: 'Compliance muy reducida unilateralmente. Alta presión pico. Alarma de PIP inminente.',
    },
];

export const PREHOSPITAL_VENT_CASES: VentSimulatorCase[] = [
    {
        id: 'rosc-post-pcr',
        title: 'ROSC post-PCR',
        objective: 'Ventilar protectoramente paciente post-paro. Evitar hiperventilación (PaCO2 35-45 mmHg).',
        lungModelId: 'normal',
        suggestedMode: 'vc-ac',
        suggestedVtMl: 500,
        suggestedRrPerMin: 12,
        suggestedPeepCmH2O: 5,
        suggestedFio2Percent: 100,
        suggestedDrivingPressureCmH2O: 0,
        suggestedIeRatio: '1:2',
        patientHeightCm: 170,
        patientWeightKg: 75,
        patientSex: 'male',
        clinicalNotes: 'Post-ROSC: FiO2 al 100% inicial, luego titular a SpO2 94-99%. RR 10-12 para normoventilación.',
    },
    {
        id: 'ards-pneumonia',
        title: 'ARDS por neumonía severa',
        objective: 'Aplicar ventilación protectora: Vt ≤ 6 mL/kg IBW, Plateau < 30 cmH2O.',
        lungModelId: 'ards-severe',
        suggestedMode: 'vc-ac',
        suggestedVtMl: 360,
        suggestedRrPerMin: 20,
        suggestedPeepCmH2O: 12,
        suggestedFio2Percent: 60,
        suggestedDrivingPressureCmH2O: 0,
        suggestedIeRatio: '1:2',
        patientHeightCm: 165,
        patientWeightKg: 60,
        patientSex: 'female',
        clinicalNotes: 'ARDS severo: IBW ~55 kg, Vt objetivo ~330 mL (6 mL/kg). PEEP alto para reclutamiento alveolar.',
    },
    {
        id: 'status-asthmaticus',
        title: 'Status asmático intubado',
        objective: 'Ventilación permisiva: RR bajo, Ti corto, PEEP mínimo para evitar auto-PEEP.',
        lungModelId: 'bronchospasm',
        suggestedMode: 'vc-ac',
        suggestedVtMl: 400,
        suggestedRrPerMin: 8,
        suggestedPeepCmH2O: 0,
        suggestedFio2Percent: 40,
        suggestedDrivingPressureCmH2O: 0,
        suggestedIeRatio: '1:4',
        patientHeightCm: 175,
        patientWeightKg: 80,
        patientSex: 'male',
        clinicalNotes: 'Alta resistencia: usar I:E 1:4 o mayor. PEEP 0 para evitar auto-PEEP. Tolerar hipercapnia permisiva.',
    },
    {
        id: 'tbi-icp',
        title: 'TCE con hipertensión intracraneana',
        objective: 'Normoventilación estricta: pCO2 35-40 mmHg. Evitar hipoxia e hipercapnia.',
        lungModelId: 'normal',
        suggestedMode: 'vc-ac',
        suggestedVtMl: 500,
        suggestedRrPerMin: 14,
        suggestedPeepCmH2O: 5,
        suggestedFio2Percent: 50,
        suggestedDrivingPressureCmH2O: 0,
        suggestedIeRatio: '1:2',
        patientHeightCm: 180,
        patientWeightKg: 85,
        patientSex: 'male',
        clinicalNotes: 'No hiperventilar profilácticamente. Solo para hernación inminente: RR 20, I:E 1:1 transitorio.',
    },
    {
        id: 'copd-exacerbation',
        title: 'EPOC descompensado intubado',
        objective: 'PC-AC con PEEP mínimo para prevenir auto-PEEP. Expiracion prolongada.',
        lungModelId: 'bronchospasm',
        suggestedMode: 'pc-ac',
        suggestedVtMl: 0,
        suggestedRrPerMin: 12,
        suggestedPeepCmH2O: 4,
        suggestedFio2Percent: 35,
        suggestedDrivingPressureCmH2O: 12,
        suggestedIeRatio: '1:3',
        patientHeightCm: 168,
        patientWeightKg: 65,
        patientSex: 'male',
        clinicalNotes: 'Driving pressure 12 cmH2O. Monitorizar Vt entregado. PEEP bajo para respetar PEEP intrínseco.',
    },
    {
        id: 'pneumothorax-development',
        title: 'Neumotórax en desarrollo',
        objective: 'Detectar aumento de PIP y alarma de presión pico alta. Responder antes de 10 segundos.',
        lungModelId: 'pneumothorax',
        suggestedMode: 'vc-ac',
        suggestedVtMl: 500,
        suggestedRrPerMin: 12,
        suggestedPeepCmH2O: 5,
        suggestedFio2Percent: 100,
        suggestedDrivingPressureCmH2O: 0,
        suggestedIeRatio: '1:2',
        patientHeightCm: 175,
        patientWeightKg: 75,
        patientSex: 'male',
        clinicalNotes: 'El modelo pulmonar simula neumotórax con compliance 12 mL/cmH2O. PIP superará el límite de alarma rápidamente.',
    },
];

export const BASE_VENT_ALARMS: VentAlarmState[] = [
    { id: 'high-pip', label: 'Presion pico alta (PIP)', severity: 'critical', active: false, acknowledged: false },
    { id: 'low-pressure', label: 'Presion baja / Desconexion', severity: 'critical', active: false, acknowledged: false },
    { id: 'apnea', label: 'Apnea detectada', severity: 'critical', active: false, acknowledged: false },
    { id: 'high-minute-vol', label: 'Volumen minuto alto', severity: 'warning', active: false, acknowledged: false },
    { id: 'low-minute-vol', label: 'Volumen minuto bajo', severity: 'warning', active: false, acknowledged: false },
    { id: 'low-battery', label: 'Bateria baja', severity: 'warning', active: false, acknowledged: false },
    { id: 'fio2-alarm', label: 'FiO2 fuera de rango', severity: 'info', active: false, acknowledged: false },
    { id: 'vent-complete', label: 'Ventilacion completada', severity: 'info', active: false, acknowledged: false },
];

export const DEFAULT_SAFETY_CHECKLIST: SafetyChecklistItem[] = [
    { id: 'circuit-checked', label: 'Circuito montado, conectado y sin fugas', checked: false },
    { id: 'etco2-connected', label: 'EtCO2 conectado y calibrado (capnografia)', checked: false },
    { id: 'cuff-checked', label: 'Manguito del TET inflado y sellado correctamente', checked: false },
    { id: 'position-confirmed', label: 'Posicion del TET confirmada (capnografia/auscultacion)', checked: false },
];

export const IE_RATIO_OPTIONS: IERatio[] = ['1:1', '1:1.5', '1:2', '1:3', '1:4'];

// --- Funciones helper ---

export function calculateIbwKg(heightCm: number, sex: 'male' | 'female'): number {
    const heightInches = heightCm / 2.54;
    if (sex === 'male') {
        return Math.max(0, 50 + 2.3 * (heightInches - 60));
    }
    return Math.max(0, 45.5 + 2.3 * (heightInches - 60));
}

export function parseIERatio(ieRatio: IERatio): number {
    const parts = ieRatio.split(':');
    return parseFloat(parts[1]);
}

export function calculateTiSec(rrPerMin: number, ieRatio: IERatio): number {
    const breathPeriodSec = 60 / rrPerMin;
    const ieNum = parseIERatio(ieRatio);
    return breathPeriodSec / (1 + ieNum);
}

export function calculatePip(
    vtMl: number,
    rrPerMin: number,
    ieRatio: IERatio,
    compliance: number,
    resistance: number,
    peep: number,
): number {
    if (vtMl <= 0 || rrPerMin <= 0 || compliance <= 0) return peep;
    const tiSec = calculateTiSec(rrPerMin, ieRatio);
    if (tiSec <= 0) return peep;
    // Flow in L/s (tidal volume delivered over Ti)
    const flowLSec = vtMl / (tiSec * 1000);
    const elasticPressure = vtMl / compliance;
    const resistivePressure = flowLSec * resistance;
    return Math.round((elasticPressure + resistivePressure + peep) * 10) / 10;
}

export function calculatePlateauPressure(vtMl: number, compliance: number, peep: number): number {
    if (compliance <= 0) return peep;
    return Math.round((vtMl / compliance + peep) * 10) / 10;
}

export function calculateMinuteVentilation(vtMl: number, rrPerMin: number): number {
    return Math.round(((vtMl * rrPerMin) / 1000) * 100) / 100;
}

export function estimatePcVtMl(
    drivingPressureCmH2O: number,
    compliance: number,
    resistance: number,
    tiSec: number,
): number {
    // Simplified: Vt ≈ drivingPressure × compliance × (1 - e^(-Ti / RC))
    // RC = compliance × resistance / 1000 (time constant in seconds, compliance in mL/cmH2O, resistance in cmH2O/(L/s))
    const rc = (compliance * resistance) / 1000;
    if (rc <= 0 || tiSec <= 0) return 0;
    const vt = drivingPressureCmH2O * compliance * (1 - Math.exp(-tiSec / rc));
    return Math.max(0, Math.round(vt));
}

export function generateWaveformPoint(
    tSec: number,
    vtMl: number,
    rrPerMin: number,
    ieRatio: IERatio,
    peep: number,
    drivingPressureCmH2O: number,
    mode: 'vc-ac' | 'pc-ac' | 'simv-vc' | 'cpap-ps',
    compliance: number,
    resistance: number,
): { pressure: number; flow: number; volume: number } {
    if (rrPerMin <= 0) return { pressure: peep, flow: 0, volume: 0 };

    const breathPeriodSec = 60 / rrPerMin;
    const ieNum = parseIERatio(ieRatio);
    const tiSec = breathPeriodSec / (1 + ieNum);
    const teSec = breathPeriodSec - tiSec;
    const phase = tSec % breathPeriodSec;

    const pip = calculatePip(vtMl, rrPerMin, ieRatio, compliance, resistance, peep);
    const flowLSec = vtMl > 0 ? vtMl / (tiSec * 1000) : 0; // L/s
    const flowLMin = flowLSec * 60; // L/min

    if (mode === 'vc-ac' || mode === 'simv-vc') {
        if (phase < tiSec) {
            // Inspiración: presión sube linealmente hasta PIP, flujo constante, volumen lineal
            const inspFrac = phase / tiSec;
            const pressure = peep + (pip - peep) * inspFrac;
            const flow = flowLMin;
            const volume = vtMl * inspFrac;
            return { pressure, flow, volume };
        } else {
            // Espiración: decaimiento exponencial
            const expPhase = phase - tiSec;
            const tau = (compliance * resistance) / 1000;
            const expFrac = tau > 0 ? Math.exp(-expPhase / tau) : 0;
            const pressure = peep + (pip - peep) * expFrac * 0.15;
            const flow = -flowLMin * expFrac;
            const volume = vtMl * expFrac;
            return { pressure, flow, volume };
        }
    } else if (mode === 'pc-ac') {
        // Presión control: presión cuadrada, flujo decelerado, volumen calculado por compliance
        const targetPressure = peep + drivingPressureCmH2O;
        const rc = (compliance * resistance) / 1000;

        if (phase < tiSec) {
            const pressure = targetPressure;
            const expFrac = rc > 0 ? Math.exp(-phase / rc) : 0;
            const pcFlow = rc > 0 ? (drivingPressureCmH2O / (resistance / 1000)) * expFrac : 0;
            const volume = drivingPressureCmH2O * compliance * (1 - Math.exp(-phase / rc));
            return {
                pressure,
                flow: Math.max(0, pcFlow * 60),
                volume: Math.max(0, volume),
            };
        } else {
            const expPhase = phase - tiSec;
            const maxVt = estimatePcVtMl(drivingPressureCmH2O, compliance, resistance, tiSec);
            const tau = rc > 0 ? rc : 0.5;
            const expFrac = Math.exp(-expPhase / tau);
            const pressure = peep + drivingPressureCmH2O * expFrac * 0.1;
            const expFlow = maxVt > 0 ? -(maxVt / (tau * 1000)) * expFrac * 60 : 0;
            const volume = maxVt * expFrac;
            return { pressure, flow: expFlow, volume: Math.max(0, volume) };
        }
    } else {
        // CPAP/PS: presión constante en PEEP
        const cpapFrac = teSec > 0 ? Math.sin((phase / breathPeriodSec) * Math.PI) * 0.5 : 0;
        return { pressure: peep + drivingPressureCmH2O * cpapFrac, flow: cpapFrac * 5, volume: cpapFrac * vtMl * 0.3 };
    }
}
