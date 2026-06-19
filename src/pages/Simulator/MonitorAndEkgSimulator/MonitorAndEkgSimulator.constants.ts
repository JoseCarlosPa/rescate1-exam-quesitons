import type { EcgScenario, LeadType, MonitorType, ProtocolProfile, RhythmType, TwelveLeadReport } from './MonitorAndEkgSimulator.types';

// ──────────────────────────────────────────────
// Energy levels per monitor type
// ──────────────────────────────────────────────
export const ZOLL_ENERGY_LEVELS = [1, 2, 3, 5, 7, 10, 20, 30, 50, 70, 100, 120, 150, 200];
export const LIFEPAK_ENERGY_LEVELS = [1, 2, 3, 5, 7, 10, 20, 30, 50, 70, 100, 120, 150, 200, 300, 360];

export const LEAD_OPTIONS: LeadType[] = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];

const LEAD_PROFILE: Record<LeadType, { gain: number; invert: boolean; baseline: number; morph: number }> = {
    I: { gain: 0.92, invert: false, baseline: 0.0, morph: 0.010 },
    II: { gain: 1.0, invert: false, baseline: 0.0, morph: 0.012 },
    III: { gain: 0.78, invert: false, baseline: 0.0, morph: 0.010 },
    aVR: { gain: 0.72, invert: true, baseline: 0.0, morph: 0.008 },
    aVL: { gain: 0.64, invert: false, baseline: 0.0, morph: 0.008 },
    aVF: { gain: 0.88, invert: false, baseline: 0.0, morph: 0.010 },
    V1: { gain: 0.72, invert: true, baseline: -0.005, morph: 0.012 },
    V2: { gain: 0.84, invert: true, baseline: -0.004, morph: 0.012 },
    V3: { gain: 0.96, invert: false, baseline: -0.002, morph: 0.011 },
    V4: { gain: 1.06, invert: false, baseline: 0.0, morph: 0.010 },
    V5: { gain: 1.0, invert: false, baseline: 0.001, morph: 0.009 },
    V6: { gain: 0.92, invert: false, baseline: 0.002, morph: 0.009 },
};

function applyLeadMorphology(base: number, time: number, hr: number, lead: LeadType): number {
    const profile = LEAD_PROFILE[lead];
    const beatHz = Math.max(0.6, hr / 60);
    const morphShift = Math.sin(time * 2 * Math.PI * beatHz) * profile.morph;
    const transformed = (profile.invert ? -base : base) * profile.gain;
    return transformed + morphShift + profile.baseline;
}

export const ALARM_THRESHOLDS = {
    hrHigh: 150,
    hrLow: 40,
    spo2Low: 90,
};

export const PACER_RATE_MIN = 30;
export const PACER_RATE_MAX = 180;
export const PACER_RATE_STEP = 5;
export const PACER_CURRENT_MIN = 0;
export const PACER_CURRENT_MAX = 200;
export const PACER_CURRENT_STEP = 5;

export const DISPLAY_SECONDS = 6;

export const HYBRID_PROTOCOL_PROFILE: ProtocolProfile = {
    id: 'hybrid_acl_local',
    name: 'Hibrido ACLS (AHA + protocolo local)',
    sources: ['AHA', 'LOCAL'],
    syncRequiredForCardioversion: true,
    energyToleranceJ: 30,
    criticalTimeToFirstShockSec: 120,
};

export const EVALUATION_START_SCORE = 100;
export const EVALUATION_MIN_SCORE = 0;

export function clampScore(score: number): number {
    return Math.max(EVALUATION_MIN_SCORE, Math.round(score));
}

export function isScenarioCardioversionCandidate(scenario: EcgScenario): boolean {
    return ['atrial', 'ventricular'].includes(scenario.category)
        && !scenario.isShockable
        && scenario.recommendedEnergy !== null;
}

// ──────────────────────────────────────────────
// Waveform generation helpers
// ──────────────────────────────────────────────
function gauss(x: number, c: number, w: number, a: number): number {
    return a * Math.exp(-((x - c) * (x - c)) / (2 * w * w));
}

/** Normal P-QRS-T complex template. phase: 0→1 = one cardiac cycle */
function normalPQRST(phase: number): number {
    return gauss(phase, 0.10, 0.022, 0.13)
        + gauss(phase, 0.195, 0.006, -0.09)
        + gauss(phase, 0.21, 0.011, 0.92)
        + gauss(phase, 0.225, 0.007, -0.18)
        + gauss(phase, 0.36, 0.032, 0.22);
}

/** QRS-T without P wave (for AFib, SVT) */
function qrstOnly(phase: number): number {
    return gauss(phase, 0.195, 0.006, -0.09)
        + gauss(phase, 0.21, 0.011, 0.92)
        + gauss(phase, 0.225, 0.007, -0.18)
        + gauss(phase, 0.36, 0.032, 0.20);
}

/** Wide QRS complex (for VTach, escape beats) */
function wideQRS(phase: number): number {
    return gauss(phase, 0.14, 0.045, -0.30)
        + gauss(phase, 0.22, 0.038, 0.78)
        + gauss(phase, 0.30, 0.045, -0.22)
        + gauss(phase, 0.50, 0.055, 0.18);
}

/** P wave only */
function pWaveOnly(phase: number, center: number = 0.10): number {
    return gauss(phase, center, 0.022, 0.13);
}

/** PlethysmograPhy (SpO2) waveform. phase: 0→1 */
export function generatePlethValue(phase: number): number {
    if (phase < 0.12) return Math.pow(Math.sin((phase / 0.12) * Math.PI * 0.5), 1.8);
    if (phase < 0.22) {
        const t = (phase - 0.12) / 0.10;
        return 1.0 - t * 0.35 + Math.sin(t * Math.PI) * 0.04;
    }
    if (phase < 0.55) {
        const t = (phase - 0.22) / 0.33;
        return 0.65 * Math.exp(-t * 2.5);
    }
    return 0.02;
}

// ──────────────────────────────────────────────
// Main ECG value generator
// ──────────────────────────────────────────────
export function generateEcgValue(time: number, rhythmType: RhythmType, hr: number): number {
    const interval = 60 / Math.max(hr, 1);

    switch (rhythmType) {
        // ── Normal variants ─────────────────────
        case 'normal_sinus':
        case 'sinus_tachycardia':
        case 'sinus_bradycardia':
        case 'pea': {
            const phase = (time % interval) / interval;
            return normalPQRST(phase);
        }

        // ── First-degree AV block ───────────────
        case 'av_block_1': {
            const phase = (time % interval) / interval;
            // Shift P wave earlier → longer PR interval
            return gauss(phase, 0.06, 0.022, 0.13) // P wave early
                + gauss(phase, 0.195, 0.006, -0.09)
                + gauss(phase, 0.21, 0.011, 0.92)
                + gauss(phase, 0.225, 0.007, -0.18)
                + gauss(phase, 0.36, 0.032, 0.22);
        }

        // ── Atrial fibrillation ─────────────────
        case 'atrial_fibrillation': {
            const pattern = [0.72, 1.28, 0.58, 1.18, 0.88, 0.62, 1.32, 0.95, 1.1, 0.78];
            const baseInt = interval;
            let totalPattern = 0;
            for (const m of pattern) totalPattern += m * baseInt;
            const tInPat = ((time % totalPattern) + totalPattern) % totalPattern;

            let acc = 0;
            let phase = 0;
            for (const m of pattern) {
                const beatLen = m * baseInt;
                if (tInPat < acc + beatLen) {
                    phase = (tInPat - acc) / beatLen;
                    break;
                }
                acc += beatLen;
            }

            const qrs = qrstOnly(phase);
            const fib = Math.sin(time * 2 * Math.PI * 6.2) * 0.028
                + Math.sin(time * 2 * Math.PI * 8.8) * 0.018
                + Math.sin(time * 2 * Math.PI * 4.1) * 0.012;
            return qrs + fib;
        }

        // ── Atrial flutter ──────────────────────
        case 'atrial_flutter': {
            const atrialRate = 300;
            const ventRate = hr || 75;
            const atrialInt = 60 / atrialRate;
            const ventInt = 60 / ventRate;

            const aPhase = (time % atrialInt) / atrialInt;
            const fWave = (1 - aPhase * 2) * 0.12; // sawtooth

            const vPhase = (time % ventInt) / ventInt;
            const qrs = gauss(vPhase, 0.12, 0.010, 0.85)
                + gauss(vPhase, 0.11, 0.006, -0.07)
                + gauss(vPhase, 0.135, 0.007, -0.15);
            return fWave + qrs;
        }

        // ── Supraventricular tachycardia ────────
        case 'svt': {
            const phase = (time % interval) / interval;
            return gauss(phase, 0.20, 0.008, -0.06)
                + gauss(phase, 0.21, 0.009, 0.82)
                + gauss(phase, 0.22, 0.007, -0.12)
                + gauss(phase, 0.42, 0.035, 0.14);
        }

        // ── Ventricular tachycardia ─────────────
        case 'ventricular_tachycardia': {
            const phase = (time % interval) / interval;
            return wideQRS(phase);
        }

        // ── VFib coarse ─────────────────────────
        case 'vfib_coarse': {
            return Math.sin(time * 2 * Math.PI * 4.2) * 0.42
                + Math.sin(time * 2 * Math.PI * 6.8) * 0.24
                + Math.sin(time * 2 * Math.PI * 2.3) * 0.18
                + Math.sin(time * 2 * Math.PI * 9.1) * 0.08
                + Math.sin(time * 2 * Math.PI * 1.4 + 0.7) * 0.12;
        }

        // ── VFib fine ───────────────────────────
        case 'vfib_fine': {
            return Math.sin(time * 2 * Math.PI * 5.5) * 0.10
                + Math.sin(time * 2 * Math.PI * 8.3) * 0.07
                + Math.sin(time * 2 * Math.PI * 3.1) * 0.05
                + Math.sin(time * 2 * Math.PI * 11.7) * 0.03;
        }

        // ── Asystole ────────────────────────────
        case 'asystole': {
            return Math.sin(time * 127.1) * 0.008
                + Math.sin(time * 311.7) * 0.006;
        }

        // ── Second-degree Mobitz I (Wenckebach) ─
        case 'av_block_2_mobitz1': {
            const pInt = 60 / 75;
            const groupLen = pInt * 4; // 4 P waves, 3 conducted
            const tInGroup = ((time % groupLen) + groupLen) % groupLen;
            const pNum = Math.floor(tInGroup / pInt);
            const pPhase = (tInGroup % pInt) / pInt;

            const p = pWaveOnly(pPhase, 0.08);

            let qrs = 0;
            if (pNum < 3) {
                const prDelays = [0.20, 0.28, 0.36];
                const qrsC = prDelays[pNum] / pInt;
                if (qrsC < 0.8) {
                    qrs = gauss(pPhase, qrsC, 0.010, 0.88)
                        + gauss(pPhase, qrsC - 0.012, 0.006, -0.08)
                        + gauss(pPhase, qrsC + 0.015, 0.007, -0.16)
                        + gauss(pPhase, qrsC + 0.12, 0.028, 0.18);
                }
            }
            return p + qrs;
        }

        // ── Second-degree Mobitz II ─────────────
        case 'av_block_2_mobitz2': {
            const pInt = 60 / 75;
            const groupLen = pInt * 3; // 3 P, 2 conducted
            const tInGroup = ((time % groupLen) + groupLen) % groupLen;
            const pNum = Math.floor(tInGroup / pInt);
            const pPhase = (tInGroup % pInt) / pInt;

            const p = pWaveOnly(pPhase, 0.08);

            let qrs = 0;
            if (pNum < 2) {
                qrs = gauss(pPhase, 0.20, 0.010, 0.88)
                    + gauss(pPhase, 0.188, 0.006, -0.08)
                    + gauss(pPhase, 0.215, 0.007, -0.16)
                    + gauss(pPhase, 0.34, 0.028, 0.18);
            }
            return p + qrs;
        }

        // ── Third-degree (complete) AV block ────
        case 'av_block_3': {
            const pInt = 60 / 75;
            const qrsInt = 60 / 38;

            const pPhase = (time % pInt) / pInt;
            const p = pWaveOnly(pPhase, 0.15);

            const qrsPhase = (time % qrsInt) / qrsInt;
            const qrs = gauss(qrsPhase, 0.12, 0.018, -0.15)
                + gauss(qrsPhase, 0.15, 0.022, 0.78)
                + gauss(qrsPhase, 0.18, 0.018, -0.20)
                + gauss(qrsPhase, 0.32, 0.040, 0.20);

            return p + qrs;
        }

        default:
            return 0;
    }
}

export function generateLeadEcgValue(time: number, rhythmType: RhythmType, hr: number, lead: LeadType): number {
    const base = generateEcgValue(time, rhythmType, hr);
    return applyLeadMorphology(base, time, hr, lead);
}

// ──────────────────────────────────────────────
// Pacer spike generator
// ──────────────────────────────────────────────
export function generatePacerSpike(time: number, paceRate: number): number {
    const interval = 60 / paceRate;
    const phase = (time % interval) / interval;
    // Very thin tall spike
    if (phase < 0.005) return 0.95;
    if (phase < 0.008) return -0.2;
    return 0;
}

export function generateTwelveLeadReport(
    rhythm: RhythmType,
    heartRate: number,
    monitor: MonitorType,
): TwelveLeadReport {
    const seconds = 2.5;
    const samplesPerLead = 240;
    const strips = LEAD_OPTIONS.map((lead) => {
        const samples: number[] = [];
        for (let i = 0; i < samplesPerLead; i++) {
            const t = (i / samplesPerLead) * seconds;
            samples.push(generateLeadEcgValue(t, rhythm, heartRate, lead));
        }
        return { lead, samples };
    });

    return {
        generatedAt: Date.now(),
        rhythm,
        heartRate,
        monitor,
        strips,
    };
}

// ──────────────────────────────────────────────
// ECG Scenarios
// ──────────────────────────────────────────────
export const ECG_SCENARIOS: EcgScenario[] = [
    {
        id: 'nsr',
        name: 'Ritmo Sinusal Normal',
        shortName: 'RSN',
        description: 'Ritmo cardíaco normal originado en el nodo sinusal con conducción AV intacta.',
        clinicalNotes: 'Frecuencia 60-100 lpm. Onda P positiva en DII seguida de QRS estrecho. Intervalos PR y QT normales. Cada P va seguida de un QRS.',
        aclsManagement: 'No requiere intervención eléctrica. Monitorización continua. Evaluación clínica del paciente.',
        rhythmType: 'normal_sinus',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 75, spo2: 98, systolic: 120, diastolic: 80, rr: 16, etco2: 38, temp: 36.5 },
        category: 'normal',
    },
    {
        id: 'st',
        name: 'Taquicardia Sinusal',
        shortName: 'TS',
        description: 'Ritmo sinusal con frecuencia mayor a 100 lpm. Respuesta fisiológica o patológica.',
        clinicalNotes: 'Morfología normal de P-QRS-T pero a mayor velocidad. Causas: fiebre, dolor, hipovolemia, ansiedad, ejercicio, sepsis, TEP.',
        aclsManagement: 'Tratar la causa subyacente (H y T). No cardiovertir. Líquidos IV si hipovolemia. Analgesia si dolor.',
        rhythmType: 'sinus_tachycardia',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 125, spo2: 96, systolic: 110, diastolic: 70, rr: 22, etco2: 32, temp: 38.2 },
        category: 'normal',
    },
    {
        id: 'sb',
        name: 'Bradicardia Sinusal',
        shortName: 'BS',
        description: 'Ritmo sinusal con frecuencia menor a 60 lpm. Puede ser fisiológica o patológica.',
        clinicalNotes: 'Morfología P-QRS-T normal pero lenta. Normal en atletas. Patológica si síntomas: hipotensión, alteración del estado mental, dolor torácico.',
        aclsManagement: 'Si sintomática: Atropina 0.5mg IV (max 3mg). Si no responde: marcapasos transcutáneo. Dopamina o Epinefrina en infusión.',
        rhythmType: 'sinus_bradycardia',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 42, spo2: 94, systolic: 90, diastolic: 55, rr: 12, etco2: 42, temp: 36.0 },
        category: 'normal',
    },
    {
        id: 'afib',
        name: 'Fibrilación Auricular',
        shortName: 'FA',
        description: 'Actividad eléctrica auricular caótica y desorganizada. Ritmo irregularmente irregular.',
        clinicalNotes: 'Sin ondas P definidas, línea base fibrilatoria. Intervalos R-R irregulares. QRS estrecho. Riesgo de formación de trombos y ACV.',
        aclsManagement: 'Control de frecuencia: Diltiazem, Metoprolol o Amiodarona. Si inestable hemodinámicamente: cardioversión sincronizada 120-200J bifásico. Anticoagulación.',
        rhythmType: 'atrial_fibrillation',
        isShockable: false,
        recommendedEnergy: 120,
        defaultVitals: { hr: 138, spo2: 93, systolic: 100, diastolic: 65, rr: 20, etco2: 35, temp: 36.8 },
        category: 'atrial',
    },
    {
        id: 'aflutter',
        name: 'Flutter Auricular',
        shortName: 'FlA',
        description: 'Circuito de macro-reentrada auricular con patrón en dientes de sierra a ~300 lpm.',
        clinicalNotes: 'Ondas F en patrón de sierra a ~300/min. Conducción AV típica 2:1, 3:1 o 4:1. QRS estrecho. Frecuencia ventricular regular si bloqueo fijo.',
        aclsManagement: 'Control de frecuencia similar a FA. Cardioversión sincronizada con energías bajas (50-100J). Ablación por radiofrecuencia es el tratamiento definitivo.',
        rhythmType: 'atrial_flutter',
        isShockable: false,
        recommendedEnergy: 50,
        defaultVitals: { hr: 150, spo2: 94, systolic: 105, diastolic: 68, rr: 18, etco2: 36, temp: 36.6 },
        category: 'atrial',
    },
    {
        id: 'svt',
        name: 'Taquicardia Supraventricular (TSV)',
        shortName: 'TSV',
        description: 'Taquicardia de QRS estrecho con frecuencia de 150-250 lpm. Inicio y terminación súbita.',
        clinicalNotes: 'QRS estrecho (<0.12s), regular. P no visible (ocultas en QRS o T). Frecuencia fija. Mecanismo de reentrada por nodo AV o vía accesoria.',
        aclsManagement: 'Maniobras vagales (Valsalva, masaje carotídeo). Adenosina 6mg IV rápido, repetir 12mg. Si inestable: cardioversión sincronizada 50-100J.',
        rhythmType: 'svt',
        isShockable: false,
        recommendedEnergy: 50,
        defaultVitals: { hr: 188, spo2: 95, systolic: 95, diastolic: 60, rr: 24, etco2: 30, temp: 36.7 },
        category: 'atrial',
    },
    {
        id: 'vtach',
        name: 'Taquicardia Ventricular (TV)',
        shortName: 'TV',
        description: 'Taquicardia de QRS ancho originada en los ventrículos. Potencialmente letal.',
        clinicalNotes: 'QRS ancho (>0.12s), regular, ≥3 latidos a >100 lpm. Sin ondas P o disociación AV. Monomórfica (mismo QRS) vs polimórfica. Con o sin pulso.',
        aclsManagement: 'CON PULSO estable: Amiodarona 150mg IV en 10min. CON PULSO inestable: cardioversión sincronizada 100J. SIN PULSO: desfibrilación inmediata 120-200J bifásico + RCP.',
        rhythmType: 'ventricular_tachycardia',
        isShockable: true,
        recommendedEnergy: 120,
        defaultVitals: { hr: 180, spo2: 82, systolic: 70, diastolic: 40, rr: 8, etco2: 22, temp: 36.0 },
        category: 'ventricular',
    },
    {
        id: 'vfib_coarse',
        name: 'Fibrilación Ventricular Gruesa',
        shortName: 'FV-G',
        description: 'Actividad eléctrica ventricular caótica con ondulaciones amplias. Ritmo de paro cardíaco.',
        clinicalNotes: 'Ondulaciones irregulares de gran amplitud sin complejos QRS identificables. No hay gasto cardíaco efectivo. Paciente en paro sin pulso.',
        aclsManagement: 'DESFIBRILACIÓN INMEDIATA 120-200J bifásico. RCP de alta calidad. Epinefrina 1mg IV cada 3-5 min. Amiodarona 300mg IV en bolo. Ciclo: RCP→Descarga→RCP.',
        rhythmType: 'vfib_coarse',
        isShockable: true,
        recommendedEnergy: 200,
        defaultVitals: { hr: 0, spo2: 0, systolic: 0, diastolic: 0, rr: 0, etco2: 12, temp: 35.5 },
        category: 'arrest',
    },
    {
        id: 'vfib_fine',
        name: 'Fibrilación Ventricular Fina',
        shortName: 'FV-F',
        description: 'FV con ondulaciones de baja amplitud. Puede confundirse con asistolia.',
        clinicalNotes: 'Ondulaciones irregulares de baja amplitud. Confirmar en 2 derivaciones. Puede ser FV gruesa deteriorada. Mismo manejo que FV gruesa.',
        aclsManagement: 'DESFIBRILACIÓN INMEDIATA. Confirmar en 2 derivaciones que no es asistolia. RCP + Epinefrina 1mg IV. Puede intentarse Epinefrina antes de descarga para aumentar amplitud.',
        rhythmType: 'vfib_fine',
        isShockable: true,
        recommendedEnergy: 200,
        defaultVitals: { hr: 0, spo2: 0, systolic: 0, diastolic: 0, rr: 0, etco2: 10, temp: 35.0 },
        category: 'arrest',
    },
    {
        id: 'asystole',
        name: 'Asistolia',
        shortName: 'ASIST',
        description: 'Ausencia de actividad eléctrica cardíaca. Línea plana en el monitor.',
        clinicalNotes: 'Línea isoeléctrica plana. Confirmar: verificar conexiones, derivaciones, ganancia. Verificar en al menos 2 derivaciones. NO desfibrilar.',
        aclsManagement: 'RCP de alta calidad inmediata. Epinefrina 1mg IV cada 3-5 min. Buscar y tratar causas reversibles (H y T). NO desfibrilar. Considerar cese de esfuerzos según protocolo.',
        rhythmType: 'asystole',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 0, spo2: 0, systolic: 0, diastolic: 0, rr: 0, etco2: 8, temp: 34.5 },
        category: 'arrest',
    },
    {
        id: 'pea',
        name: 'Actividad Eléctrica Sin Pulso (AESP)',
        shortName: 'AESP',
        description: 'Actividad eléctrica organizada en el monitor pero sin pulso palpable.',
        clinicalNotes: 'El ECG muestra un ritmo organizado (puede parecer sinusal) pero NO hay pulso. Siempre verificar pulso central. Causas reversibles: 5H y 5T.',
        aclsManagement: 'RCP de alta calidad. Epinefrina 1mg IV cada 3-5 min. NO desfibrilar. Buscar causas reversibles: Hipovolemia (líquidos), Hipoxia (vía aérea), H+ acidosis, Hipo/Hiperpotasemia, Hipotermia, Neumotórax a Tensión, Taponamiento, Toxinas, TEP, Trombosis coronaria.',
        rhythmType: 'pea',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 65, spo2: 0, systolic: 0, diastolic: 0, rr: 0, etco2: 15, temp: 35.8 },
        category: 'arrest',
    },
    {
        id: 'avb1',
        name: 'Bloqueo AV de 1° Grado',
        shortName: 'BAV-1',
        description: 'Retraso en la conducción AV con PR prolongado (>0.20s). Todas las P conducen.',
        clinicalNotes: 'Intervalo PR >200ms (>5 cuadros pequeños) pero constante. Cada P va seguida de QRS. Generalmente benigno. Puede ser secundario a medicamentos (digital, betabloqueadores).',
        aclsManagement: 'Generalmente no requiere tratamiento. Observación. Si sintomático y bradicárdico: protocolo de bradicardia. Revisar medicamentos que prolonguen PR.',
        rhythmType: 'av_block_1',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 62, spo2: 97, systolic: 118, diastolic: 76, rr: 14, etco2: 39, temp: 36.4 },
        category: 'block',
    },
    {
        id: 'avb2m1',
        name: 'Bloqueo AV 2° Mobitz I (Wenckebach)',
        shortName: 'BAV-2 MI',
        description: 'Prolongación progresiva del PR hasta que un QRS no se conduce. Patrón cíclico.',
        clinicalNotes: 'PR se alarga progresivamente en cada latido hasta que una P no conduce (QRS ausente). El ciclo se repite. Generalmente benigno, nivel del bloqueo en nodo AV.',
        aclsManagement: 'Si asintomático: observación. Si sintomático con bradicardia: Atropina 0.5mg IV. Considerar marcapasos transcutáneo si no responde a Atropina.',
        rhythmType: 'av_block_2_mobitz1',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 55, spo2: 95, systolic: 105, diastolic: 68, rr: 14, etco2: 40, temp: 36.3 },
        category: 'block',
    },
    {
        id: 'avb2m2',
        name: 'Bloqueo AV 2° Mobitz II',
        shortName: 'BAV-2 MII',
        description: 'PR constante con QRS periódicamente no conducidos. Nivel infranodal. Riesgo de progresión.',
        clinicalNotes: 'Intervalo PR constante en los latidos conducidos. Faltan QRS de forma periódica (2:1, 3:1). Nivel infranodal (Haz de His o ramas). Alto riesgo de progresión a bloqueo completo.',
        aclsManagement: 'Considerar marcapasos transcutáneo de forma temprana. Atropina generalmente NO efectiva (bloqueo infranodal). Preparar marcapasos transvenoso. NO dar Atropina en QRS ancho.',
        rhythmType: 'av_block_2_mobitz2',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 48, spo2: 93, systolic: 95, diastolic: 58, rr: 15, etco2: 38, temp: 36.2 },
        category: 'block',
    },
    {
        id: 'avb3',
        name: 'Bloqueo AV de 3° Grado (Completo)',
        shortName: 'BAV-3',
        description: 'Disociación completa entre aurículas y ventrículos. Ningún impulso supraventricular se conduce.',
        clinicalNotes: 'Ondas P y QRS con frecuencias independientes (disociación AV completa). P marcha a ritmo sinusal (~75 lpm). QRS a ritmo de escape (~35 lpm). QRS puede ser ancho (escape ventricular) o estrecho (escape nodal).',
        aclsManagement: 'MARCAPASOS TRANSCUTÁNEO INMEDIATO. Atropina puede intentarse pero generalmente inefectiva. Dopamina 5-20 mcg/kg/min o Epinefrina 2-10 mcg/min en infusión. Marcapasos transvenoso definitivo.',
        rhythmType: 'av_block_3',
        isShockable: false,
        recommendedEnergy: null,
        defaultVitals: { hr: 35, spo2: 88, systolic: 78, diastolic: 45, rr: 10, etco2: 44, temp: 35.8 },
        category: 'block',
    },
];
