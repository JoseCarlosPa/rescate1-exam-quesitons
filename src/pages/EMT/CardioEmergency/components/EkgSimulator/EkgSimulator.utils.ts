import { CustomParameters, EKGPoint, RhythmType } from './EkgSimulator.types.ts';
import { rhythmData } from './EkgSimultaro.constants.ts';

export const BUFFER_SIZE = 2000;  // 20 s at 100 pts/s
export const DISPLAY_WINDOW = 500; // 5 s visible

/** Deterministic pseudo-random based on a numeric seed — no re-randomisation on re-render */
export const seededRandom = (seed: number): number => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
};

export const generatePWave = (t: number, amplitude: number): number =>
    amplitude * Math.sin(t * Math.PI);

export const generateQRS = (t: number, amplitude: number): number => {
    if (t < 0.3) return -0.15 * amplitude * Math.sin(t * Math.PI * 3.33);
    if (t < 0.6) return amplitude * Math.sin((t - 0.3) * Math.PI * 3.33);
    return -0.2 * amplitude * Math.sin((t - 0.6) * Math.PI * 2.5);
};

export const generateWideQRS = (t: number, amplitude: number): number => {
    if (t < 0.4) return -0.2 * amplitude * Math.sin(t * Math.PI * 2.5);
    if (t < 0.7) return 1.1 * amplitude * Math.sin((t - 0.4) * Math.PI * 3.33);
    return -0.25 * amplitude * Math.sin((t - 0.7) * Math.PI * 3.33);
};

export const generateTWave = (t: number, amplitude: number): number =>
    amplitude * Math.sin(t * Math.PI);

/**
 * Generates a deterministic waveform buffer for a given rhythm.
 * All randomness is seeded so re-renders don't cause flickering.
 */
export function generateBuffer(rhythm: RhythmType, params: CustomParameters): EKGPoint[] {
    const data: EKGPoint[] = [];
    const pointsPerSecond = 100;
    const totalPoints = BUFFER_SIZE;

    // ── Asistolia ──────────────────────────────────────────────────────────────
    if (rhythm === 'asystole') {
        for (let i = 0; i < totalPoints; i++) {
            data.push({ time: i, voltage: (seededRandom(i * 7.3) - 0.5) * 0.05 });
        }
        return data;
    }

    // ── Fibrilación Ventricular ────────────────────────────────────────────────
    if (rhythm === 'vfib') {
        for (let i = 0; i < totalPoints; i++) {
            const chaos = Math.sin(i * 0.47) * (seededRandom(i * 3.7) * 2 + 0.5);
            const noise = (seededRandom(i * 5.1) - 0.5) * 1.5;
            data.push({ time: i, voltage: chaos + noise });
        }
        return data;
    }

    const bpm = rhythm === 'custom' ? params.bpm : rhythmData[rhythm].bpm;
    const beatInterval = (60 / bpm) * pointsPerSecond;

    // ── Fibrilación Auricular ──────────────────────────────────────────────────
    if (rhythm === 'afib') {
        // Pre-compute irregular RR intervals for the whole buffer
        const beatStarts: number[] = [];
        const beatLengths: number[] = [];
        let pos = 0;
        let beatIdx = 0;
        while (pos < totalPoints) {
            beatStarts.push(pos);
            const len = beatInterval * (0.75 + seededRandom(beatIdx * 17.3) * 0.5);
            beatLengths.push(len);
            pos += len;
            beatIdx++;
        }
        let currentBeat = 0;
        for (let i = 0; i < totalPoints; i++) {
            while (currentBeat + 1 < beatStarts.length && beatStarts[currentBeat + 1] <= i) {
                currentBeat++;
            }
            const beatStart = beatStarts[currentBeat];
            const beatLen = beatLengths[currentBeat];
            const normPos = (i - beatStart) / beatLen;
            // Fibrillatory baseline (ondas f)
            let voltage = (seededRandom((i + 13) * 2.3) - 0.5) * 0.15;
            if (normPos > 0.15 && normPos < 0.25) {
                voltage += generateQRS((normPos - 0.15) / 0.1, 1.5);
            } else if (normPos > 0.35 && normPos < 0.55) {
                voltage += generateTWave((normPos - 0.35) / 0.2, 0.7);
            }
            data.push({ time: i, voltage });
        }
        return data;
    }

    // ── Flutter Auricular ──────────────────────────────────────────────────────
    if (rhythm === 'flutter_auricular') {
        const flutterInterval = (60 / 300) * pointsPerSecond; // ~20 pts
        const vInterval = (60 / 150) * pointsPerSecond;       // ~40 pts (2:1 block)
        for (let i = 0; i < totalPoints; i++) {
            // Sawtooth flutter baseline
            const normFlutter = (i % flutterInterval) / flutterInterval;
            let voltage = normFlutter < 0.7
                ? 0.3 * (normFlutter / 0.7)
                : -0.3 * ((normFlutter - 0.7) / 0.3);
            // QRS and T override flutter wave
            const normV = (i % vInterval) / vInterval;
            if (normV > 0.1 && normV < 0.2) {
                voltage = generateQRS((normV - 0.1) / 0.1, 1.8);
            } else if (normV > 0.3 && normV < 0.5) {
                voltage = generateTWave((normV - 0.3) / 0.2, 0.5);
            }
            data.push({ time: i, voltage });
        }
        return data;
    }

    // ── TSV ────────────────────────────────────────────────────────────────────
    if (rhythm === 'tsv') {
        const tsvInterval = (60 / 165) * pointsPerSecond;
        for (let i = 0; i < totalPoints; i++) {
            const normPos = (i % tsvInterval) / tsvInterval;
            let voltage = 0;
            if (normPos > 0.1 && normPos < 0.2) {
                voltage = generateQRS((normPos - 0.1) / 0.1, 1.8);
            } else if (normPos > 0.3 && normPos < 0.5) {
                // TSV inverts T wave
                voltage = -generateTWave((normPos - 0.3) / 0.2, 0.35);
            }
            data.push({ time: i, voltage });
        }
        return data;
    }

    // ── Bloqueo AV 3er Grado ──────────────────────────────────────────────────
    if (rhythm === 'av_block_3') {
        const pInterval = (60 / 75) * pointsPerSecond;   // auricular: 75 bpm
        const qrsInterval = (60 / 35) * pointsPerSecond; // escape: 35 bpm
        for (let i = 0; i < totalPoints; i++) {
            let voltage = 0;
            // Independent P waves at 75 bpm
            const normP = (i % pInterval) / pInterval;
            if (normP > 0.05 && normP < 0.15) {
                voltage += generatePWave((normP - 0.05) / 0.1, 0.25);
            }
            // Wide escape QRS at 35 bpm (completely independent)
            const normQRS = (i % qrsInterval) / qrsInterval;
            if (normQRS > 0.1 && normQRS < 0.25) {
                voltage += generateWideQRS((normQRS - 0.1) / 0.15, 2.0);
            } else if (normQRS > 0.35 && normQRS < 0.6) {
                voltage += generateTWave((normQRS - 0.35) / 0.25, 0.6);
            }
            data.push({ time: i, voltage });
        }
        return data;
    }

    // ── Taquicardia Ventricular ────────────────────────────────────────────────
    if (rhythm === 'vtach') {
        for (let i = 0; i < totalPoints; i++) {
            const normPos = (i % beatInterval) / beatInterval;
            let voltage = 0;
            if (normPos < 0.4) {
                voltage = generateWideQRS(normPos / 0.4, 2);
            } else if (normPos > 0.5 && normPos < 0.8) {
                voltage = generateTWave((normPos - 0.5) / 0.3, 0.8);
            }
            data.push({ time: i, voltage });
        }
        return data;
    }

    // ── Ritmos Sinusales: normal, tachycardia, bradycardia, stemi, nstemi, custom ──
    const pAmp = rhythm === 'custom' ? params.pWaveAmplitude : 0.25;
    const qrsAmp = rhythm === 'custom' ? params.qrsAmplitude : 2.0;
    const tAmp = rhythm === 'custom' ? params.tWaveAmplitude : 0.3;
    const stElev =
        rhythm === 'custom' ? params.stElevation
        : rhythm === 'stemi' ? 0.5
        : rhythm === 'nstemi' ? -0.3
        : 0;

    const beatDuration = 60 / bpm; // seconds
    const prFraction =
        rhythm === 'custom'
            ? Math.min(Math.max(params.prInterval / beatDuration, 0.12), 0.25)
            : 0.16;
    const qrsWidthFraction =
        rhythm === 'custom'
            ? Math.min(Math.max(params.qrsWidth / beatDuration, 0.04), 0.14)
            : 0.09;

    // Derived positions (all as fraction of beat period)
    const pStart = 0.05;
    const pEnd = pStart + 0.09;
    const qrsStart = prFraction;
    const qrsEnd = qrsStart + qrsWidthFraction;
    const stStart = qrsEnd;
    const stEnd = stStart + 0.07;
    const tStart = stEnd;
    const tEnd = tStart + 0.20;

    for (let i = 0; i < totalPoints; i++) {
        const normPos = (i % beatInterval) / beatInterval;
        let voltage = 0;

        if (normPos > pStart && normPos < pEnd) {
            voltage = generatePWave((normPos - pStart) / (pEnd - pStart), pAmp);
        } else if (normPos > qrsStart && normPos < qrsEnd) {
            voltage = generateQRS((normPos - qrsStart) / (qrsEnd - qrsStart), qrsAmp);
        } else if (normPos > stStart && normPos < stEnd) {
            voltage = stElev;
        } else if (normPos > tStart && normPos < tEnd) {
            voltage = generateTWave((normPos - tStart) / (tEnd - tStart), tAmp);
            if (stElev !== 0) voltage += stElev * 0.4;
        }

        data.push({ time: i, voltage });
    }

    return data;
}

