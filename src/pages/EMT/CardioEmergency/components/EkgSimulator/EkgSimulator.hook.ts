import {CustomParameters, EKGPoint, RhythmType} from "./EkgSimulator.types.ts";
import {rhythmData} from "./EkgSimultaro.constants.ts";
import {useEffect, useState, useCallback} from "react";

export default function useEkgSimulator() {
    const [selectedRhythm, setSelectedRhythm] = useState<RhythmType>('normal');
    const [ekgData, setEkgData] = useState<EKGPoint[]>([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [timeOffset, setTimeOffset] = useState(0);
    const [customParams, setCustomParams] = useState<CustomParameters>({
        bpm: 75,
        pWaveAmplitude: 0.25,
        qrsAmplitude: 2.0,
        tWaveAmplitude: 0.3,
        prInterval: 0.15,
        qrsWidth: 0.1,
        stElevation: 0
    });

    // Funciones para generar ondas individuales
    const generatePWave = (t: number, amplitude: number): number => {
        return amplitude * Math.sin(t * Math.PI);
    };

    const generateQRS = (t: number, amplitude: number): number => {
        if (t < 0.3) return -0.15 * amplitude * Math.sin(t * Math.PI * 3.33); // Q
        if (t < 0.6) return amplitude * Math.sin((t - 0.3) * Math.PI * 3.33); // R
        return -0.2 * amplitude * Math.sin((t - 0.6) * Math.PI * 2.5); // S
    };

    const generateWideQRS = (t: number, amplitude: number): number => {
        // QRS más ancho para taquicardia ventricular
        if (t < 0.4) return -0.2 * amplitude * Math.sin(t * Math.PI * 2.5);
        if (t < 0.7) return 1.1 * amplitude * Math.sin((t - 0.4) * Math.PI * 3.33);
        return -0.25 * amplitude * Math.sin((t - 0.7) * Math.PI * 3.33);
    };

    const generateTWave = (t: number, amplitude: number): number => {
        return amplitude * Math.sin(t * Math.PI);
    };

    // Generar datos del EKG según el ritmo seleccionado
    const generateEKGData = useCallback((rhythm: RhythmType, offset: number, params: CustomParameters): EKGPoint[] => {
        const data: EKGPoint[] = [];
        const pointsPerSecond = 100;
        const duration = 5; // 5 segundos
        const totalPoints = pointsPerSecond * duration;

        if (rhythm === 'asystole') {
            // Línea plana con mínimo ruido
            for (let i = 0; i < totalPoints; i++) {
                data.push({ time: i, voltage: (Math.random() - 0.5) * 0.05 });
            }
            return data;
        }

        if (rhythm === 'vfib') {
            // Fibrilación ventricular - ondas caóticas
            for (let i = 0; i < totalPoints; i++) {
                const chaos = Math.sin(i * 0.5) * Math.random() * 2;
                const noise = (Math.random() - 0.5) * 1.5;
                data.push({ time: i, voltage: chaos + noise });
            }
            return data;
        }

        // Usar parámetros personalizados si está en modo custom
        const bpm = rhythm === 'custom' ? params.bpm : rhythmData[rhythm].bpm;
        const pAmp = rhythm === 'custom' ? params.pWaveAmplitude : 0.25;
        const qrsAmp = rhythm === 'custom' ? params.qrsAmplitude : 2.0;
        const tAmp = rhythm === 'custom' ? params.tWaveAmplitude : 0.3;
        const stElev = rhythm === 'custom' ? params.stElevation : (rhythm === 'stemi' ? 0.5 : 0);

        const beatInterval = (60 / bpm) * pointsPerSecond; // puntos entre latidos

        for (let i = 0; i < totalPoints; i++) {
            const adjustedTime = i + offset;
            let voltage = 0;

            // Calcular posición en el ciclo cardíaco
            const positionInBeat = adjustedTime % beatInterval;
            const normalizedPosition = positionInBeat / beatInterval;

            if (rhythm === 'afib') {
                // Fibrilación auricular - ondas P irregulares
                const irregularInterval = beatInterval * (0.8 + Math.random() * 0.4);
                const posInIrregularBeat = adjustedTime % irregularInterval;
                const normPos = posInIrregularBeat / irregularInterval;

                // Sin onda P definida, QRS irregular
                if (normPos > 0.15 && normPos < 0.25) {
                    voltage = generateQRS((normPos - 0.15) / 0.1, 1.5);
                } else if (normPos > 0.35 && normPos < 0.55) {
                    voltage = generateTWave((normPos - 0.35) / 0.2, 0.7);
                } else {
                    voltage = (Math.random() - 0.5) * 0.3; // Ondas f (fibrilación)
                }
            } else if (rhythm === 'vtach') {
                // Taquicardia ventricular - QRS anchos
                if (normalizedPosition < 0.4) {
                    voltage = generateWideQRS(normalizedPosition / 0.4, 2);
                } else if (normalizedPosition > 0.5 && normalizedPosition < 0.8) {
                    voltage = generateTWave((normalizedPosition - 0.5) / 0.3, 0.8);
                }
            } else {
                // Ritmos sinusales normales o personalizados
                // Onda P
                if (normalizedPosition > 0.05 && normalizedPosition < 0.15) {
                    voltage = generatePWave((normalizedPosition - 0.05) / 0.1, pAmp);
                }
                // Complejo QRS
                else if (normalizedPosition > 0.2 && normalizedPosition < 0.3) {
                    voltage = generateQRS((normalizedPosition - 0.2) / 0.1, qrsAmp);
                }
                // Onda T
                else if (normalizedPosition > 0.4 && normalizedPosition < 0.6) {
                    voltage = generateTWave((normalizedPosition - 0.4) / 0.2, tAmp);

                    // Elevación ST
                    if (stElev > 0) {
                        voltage += stElev * 0.8;
                    }
                }
                // Segmento ST (entre QRS y T)
                else if (normalizedPosition > 0.3 && normalizedPosition < 0.4) {
                    voltage = stElev;
                }
            }

            data.push({ time: i, voltage });
        }

        return data;
    }, []);

    // Actualizar datos del EKG
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setTimeOffset(prev => prev + 2);
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    useEffect(() => {
        const newData = generateEKGData(selectedRhythm, timeOffset, customParams);
        setEkgData(newData);
    }, [selectedRhythm, timeOffset, customParams, generateEKGData]);

    const currentInfo = rhythmData[selectedRhythm];

    return {
        selectedRhythm,
        setSelectedRhythm,
        ekgData,
        isPlaying,
        setIsPlaying,
        showLabels,
        setShowLabels,
        currentInfo,
        rhythmData,
        customParams,
        setCustomParams,
    };
}