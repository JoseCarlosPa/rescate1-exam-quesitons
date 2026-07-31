import {useCallback, useEffect, useMemo, useState} from "react";
import {collection, doc, getDocs, query, setDoc, Timestamp, updateDoc, where} from "firebase/firestore";
import {toast} from "sonner";
import {useAuth} from "../../Providers/AuthProvider";
import {createManagedUser, db} from "../../firebase/firebaseConfig";
import {Elemento} from "../Admin/Dashboard/AdminDashboard.types";
import {ElementoFormData} from "../Admin/Dashboard/components/ElementoModal.component.tsx";
import {isGuardLeader} from "../../constants/guardia.constants";

export default function useMiGuardia() {
    const {user} = useAuth();
    const [elementos, setElementos] = useState<Elemento[]>([]);
    const [loading, setLoading] = useState(true);

    const canManage = isGuardLeader(user?.guardRole);
    const guardia = user?.guardia;

    const fetchGuardia = useCallback(async () => {
        if (!guardia) { setLoading(false); return; }
        try {
            const snap = await getDocs(
                query(collection(db, 'users'), where('role', '==', 'Elemento'), where('guardia', '==', guardia))
            );
            const data = snap.docs.map(d => {
                const u = {id: d.id, ...d.data()} as Elemento;
                return {
                    ...u,
                    rank: u.rank ?? 'Básico',
                    status: u.status ?? 'activo',
                    graduationYear: u.graduationYear ?? new Date().getFullYear(),
                    certifications: u.certifications ?? [],
                };
            });
            setElementos(data);
        } catch (error) {
            console.error('Error fetching guardia:', error);
            toast.error('Error al cargar la guardia');
        } finally {
            setLoading(false);
        }
    }, [guardia]);

    useEffect(() => { fetchGuardia(); }, [fetchGuardia]);

    /**
     * Crea la cuenta de Firebase Auth + su documento en `users` con role='Elemento',
     * fijado a la guardia del Jefe/Sub-jefe que lo está dando de alta.
     */
    const handleCreateElemento = async (data: ElementoFormData) => {
        if (!canManage || !guardia) return;
        try {
            const uid = await createManagedUser(data.email);
            const newUser = {
                name: data.name,
                email: data.email,
                phone: data.phone ?? '',
                photoURL: data.photoURL ?? '',
                bio: data.bio ?? '',
                role: 'Elemento',
                rank: data.rank,
                status: data.status,
                graduationYear: data.graduationYear,
                certifications: data.certifications,
                guardia,
                guardRole: data.guardRole,
                attendance: 0,
                createdAt: Timestamp.now(),
            };
            await setDoc(doc(db, 'users', uid), newUser);
            setElementos(prev => [...prev, {id: uid, ...newUser} as Elemento]);
            toast.success('Elemento creado. Se envió un correo para que defina su contraseña.');
        } catch (error: any) {
            console.error('Error creating elemento:', error);
            if (error?.code === 'auth/email-already-in-use') {
                toast.error('Ya existe una cuenta con ese correo');
            } else {
                toast.error('Error al crear el elemento');
            }
        }
    };

    const handleUpdateElemento = async (id: string, data: Partial<Elemento>) => {
        if (!canManage) return;
        try {
            const {guardia: _ignoredGuardia, ...safeData} = data;
            await updateDoc(doc(db, 'users', id), safeData);
            setElementos(prev => prev.map(e => e.id === id ? {...e, ...safeData} : e));
            toast.success('Elemento actualizado exitosamente');
        } catch (error) {
            console.error('Error updating elemento:', error);
            toast.error('Error al actualizar el elemento');
        }
    };

    const handleToggleElementoStatus = async (id: string) => {
        if (!canManage) return;
        const elemento = elementos.find(e => e.id === id);
        if (!elemento) return;
        const newStatus = elemento.status === 'activo' ? 'inactivo' : 'activo';
        await handleUpdateElemento(id, {status: newStatus});
    };

    const stats = useMemo(() => ({
        total: elementos.length,
        activos: elementos.filter(e => e.status === 'activo').length,
        inactivos: elementos.filter(e => e.status === 'inactivo').length,
    }), [elementos]);

    return {
        guardia,
        canManage,
        currentUserId: user?.id,
        elementos,
        loading,
        stats,
        handleCreateElemento,
        handleUpdateElemento,
        handleToggleElementoStatus,
    };
}
