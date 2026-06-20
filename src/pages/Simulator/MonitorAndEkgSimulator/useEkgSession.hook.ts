import { useEffect, useState, useCallback } from 'react';
import { doc, setDoc, onSnapshot, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import type { MonitorType, RhythmType, VitalSigns } from './MonitorAndEkgSimulator.types';

export interface PendingShock {
    energy: number;
    sync: boolean;
    deliveredAt: number;
}

export interface SessionScenario {
    rhythmType: RhythmType;
    vitals: VitalSigns;
}

export interface EkgSessionData {
    status: 'waiting' | 'active' | 'ended';
    monitorType: MonitorType;
    scenario: SessionScenario;
    pendingShock: PendingShock | null;
}

const SESSION_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function makeSessionId(): string {
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += SESSION_CHARS[Math.floor(Math.random() * SESSION_CHARS.length)];
    }
    return id;
}

export function useEkgSession() {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [sessionData, setSessionData] = useState<EkgSessionData | null>(null);
    const [sessionLoading, setSessionLoading] = useState(false);
    const [sessionError, setSessionError] = useState<string | null>(null);

    useEffect(() => {
        if (!sessionId) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSessionLoading(true);
        const ref = doc(db, 'ekgSessions', sessionId);
        const unsub = onSnapshot(
            ref,
            (snap) => {
                setSessionLoading(false);
                if (snap.exists()) {
                    setSessionData(snap.data() as EkgSessionData);
                } else {
                    setSessionError('Sesión no encontrada');
                }
            },
            () => {
                setSessionLoading(false);
                setSessionError('Error al conectar con la sesión');
            },
        );
        return () => unsub();
    }, [sessionId]);

    const createSession = useCallback(async (
        monitorType: MonitorType,
        initial: SessionScenario,
    ): Promise<string> => {
        const id = makeSessionId();
        await setDoc(doc(db, 'ekgSessions', id), {
            status: 'active',
            createdAt: serverTimestamp(),
            monitorType,
            scenario: initial,
            pendingShock: null,
        });
        setSessionId(id);
        return id;
    }, []);

    const attachSession = useCallback((id: string) => {
        setSessionId(id);
    }, []);

    const updateScenario = useCallback(async (id: string, scenario: SessionScenario) => {
        await updateDoc(doc(db, 'ekgSessions', id), { scenario });
    }, []);

    const deliverShock = useCallback(async (id: string, energy: number, sync: boolean) => {
        await updateDoc(doc(db, 'ekgSessions', id), {
            pendingShock: { energy, sync, deliveredAt: Date.now() },
        });
    }, []);

    const acknowledgeShock = useCallback(async (id: string, newRhythm: RhythmType | null) => {
        const update: Record<string, unknown> = { pendingShock: null };
        if (newRhythm) update['scenario.rhythmType'] = newRhythm;
        await updateDoc(doc(db, 'ekgSessions', id), update);
    }, []);

    const endSession = useCallback(async (id: string) => {
        await updateDoc(doc(db, 'ekgSessions', id), { status: 'ended' });
        setSessionId(null);
        setSessionData(null);
    }, []);

    return {
        sessionId,
        sessionData,
        sessionLoading,
        sessionError,
        createSession,
        attachSession,
        updateScenario,
        deliverShock,
        acknowledgeShock,
        endSession,
    };
}
