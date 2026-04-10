import { CustomParameters, EKGPoint, RhythmType } from './EkgSimulator.types.ts';
import { rhythmData } from './EkgSimultaro.constants.ts';
import { useEffect, useMemo, useState } from 'react';
import { BUFFER_SIZE, DISPLAY_WINDOW, generateBuffer } from './EkgSimulator.utils.ts';

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
        prInterval: 0.16,
        qrsWidth: 0.08,
        stElevation: 0,
    });

    // Pre-generate deterministic buffer — only recalculates when rhythm or params change
    const waveformBuffer = useMemo(
        () => generateBuffer(selectedRhythm, customParams),
        [selectedRhythm, customParams],
    );

    // Slice the visible window from the buffer on each animation tick
    useEffect(() => {
        const startIdx = timeOffset % BUFFER_SIZE;
        const visible: EKGPoint[] = [];
        for (let i = 0; i < DISPLAY_WINDOW; i++) {
            const bufIdx = (startIdx + i) % BUFFER_SIZE;
            visible.push({ time: i, voltage: waveformBuffer[bufIdx]?.voltage ?? 0 });
        }
        setEkgData(visible);
    }, [timeOffset, waveformBuffer]);

    // Animation loop
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setTimeOffset(prev => (prev + 2) % BUFFER_SIZE);
        }, 20);
        return () => clearInterval(interval);
    }, [isPlaying]);


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