import {useCallback, useEffect, useMemo, useState} from "react";
import {collection, doc, getDocs, query, setDoc, Timestamp, where} from "firebase/firestore";
import {toast} from "sonner";
import {db} from "../../firebase/firebaseConfig";
import {Guardia} from "../../constants/guardia.constants";
import {AttendanceSession, sessionId, sortSessionsDesc} from "../../utils/attendance";

/**
 * Carga y administra las sesiones de asistencia de una guardia.
 *
 * - `canManage` (Jefe/Sub-jefe) puede registrar/actualizar una sesión.
 * - Los elementos de la guardia pueden leerlas (ver firestore.rules).
 */
export default function useAttendance(guardia: Guardia | undefined, canManage: boolean, recordedBy: string | undefined) {
    const [sessions, setSessions] = useState<AttendanceSession[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSessions = useCallback(async () => {
        if (!guardia) { setLoading(false); return; }
        try {
            const snap = await getDocs(
                query(collection(db, 'attendance'), where('guardia', '==', guardia))
            );
            const data = snap.docs.map(d => {
                const raw = d.data();
                return {
                    id: d.id,
                    guardia: raw.guardia,
                    date: raw.date,
                    present: raw.present ?? [],
                    recordedBy: raw.recordedBy ?? '',
                    recordedAt: raw.recordedAt?.toDate?.()?.toISOString?.(),
                } as AttendanceSession;
            });
            setSessions(sortSessionsDesc(data));
        } catch (error) {
            console.error('Error fetching attendance:', error);
            toast.error('Error al cargar la asistencia');
        } finally {
            setLoading(false);
        }
    }, [guardia]);

    useEffect(() => { fetchSessions(); }, [fetchSessions]);

    /**
     * Registra (o actualiza) la asistencia de una fecha. Usa un id determinista
     * para que volver a pasar lista el mismo día sobreescriba en vez de duplicar.
     */
    const saveSession = useCallback(async (date: string, present: string[]) => {
        if (!canManage || !guardia) return;
        const id = sessionId(guardia, date);
        const payload = {
            guardia,
            date,
            present,
            recordedBy: recordedBy ?? '',
            recordedAt: Timestamp.now(),
        };
        try {
            await setDoc(doc(db, 'attendance', id), payload);
            setSessions(prev => {
                const others = prev.filter(s => s.id !== id);
                return sortSessionsDesc([...others, {id, ...payload, recordedAt: new Date().toISOString()} as AttendanceSession]);
            });
            toast.success('Asistencia registrada');
        } catch (error) {
            console.error('Error saving attendance:', error);
            toast.error('Error al registrar la asistencia');
        }
    }, [canManage, guardia, recordedBy]);

    const totalSessions = useMemo(() => sessions.length, [sessions]);

    return {sessions, loading, saveSession, totalSessions, refetch: fetchSessions};
}
