import {useCallback, useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants';
import {doc, getDoc, Timestamp, updateDoc} from 'firebase/firestore';
import {auth, db} from '../../../firebase/firebaseConfig';
import {updatePassword, updateProfile} from 'firebase/auth';
import {ImSpinner2} from 'react-icons/im';
import {toast} from 'sonner';
import {useAuth} from '../../../Providers/AuthProvider';
import {
    FiArrowLeft,
    FiCamera,
    FiCheck,
    FiEye,
    FiEyeOff,
    FiLock,
    FiMail,
    FiSave,
    FiShield,
    FiUser,
    FiX,
} from 'react-icons/fi';

interface StudentData {
    id: string;
    name: string;
    email: string;
    role: string;
    photoURL?: string;
    createdAt: Timestamp;
}

function getInitials(name?: string | null) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function getRoleLabel(role: string) {
    switch (role) {
        case 'Admin': return {label: 'Administrador', color: '#dc2626', bg: '#fee2e2'};
        case 'Moderador': return {label: 'Moderador', color: '#7c3aed', bg: '#ede9fe'};
        case 'Elemento': return {label: 'Elemento', color: '#059669', bg: '#d1fae5'};
        default: return {label: 'Alumno', color: '#2563eb', bg: '#dbeafe'};
    }
}

export default function StudentProfile() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showPasswordSection, setShowPasswordSection] = useState(false);

    const [name, setName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const fetchStudentData = useCallback(async () => {
        if (!user?.id) return;
        try {
            const userDoc = await getDoc(doc(db, 'users', user.id));
            if (userDoc.exists()) {
                const data = userDoc.data() as StudentData;
                setStudentData(data);
                setName(data.name || '');
                setPhotoURL(data.photoURL || '');
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
            toast.error('Error al cargar los datos del estudiante');
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        if (!user) { navigate(AllRoutes.LOGIN); return; }
        fetchStudentData();
    }, [user, navigate, fetchStudentData]);

    const handleSaveProfile = async () => {
        if (!user?.id) return;
        if (name.trim().length < 2) { toast.error('El nombre debe tener al menos 2 caracteres'); return; }
        if (showPasswordSection) {
            if (newPassword.length < 6) { toast.error('La contraseña debe tener al menos 6 caracteres'); return; }
            if (newPassword !== confirmPassword) { toast.error('Las contraseñas no coinciden'); return; }
        }

        setSaving(true);
        try {
            await updateDoc(doc(db, 'users', user.id), {name: name.trim(), photoURL: photoURL.trim() || null});
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {displayName: name.trim(), photoURL: photoURL.trim() || null});
                if (showPasswordSection && newPassword) {
                    await updatePassword(auth.currentUser, newPassword);
                }
            }
            setStudentData(prev => prev ? {...prev, name: name.trim(), photoURL: photoURL.trim() || undefined} : null);
            setNewPassword('');
            setConfirmPassword('');
            setShowPasswordSection(false);
            toast.success('Perfil actualizado exitosamente');
        } catch (error) {
            const fe = error as {code?: string; message?: string};
            if (fe.code === 'auth/requires-recent-login') {
                toast.error('Para cambiar la contraseña, necesitas iniciar sesión nuevamente');
            } else {
                toast.error('Error al actualizar: ' + (fe.message || 'Error desconocido'));
            }
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                 style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500"/>
            </div>
        );
    }

    const roleInfo = getRoleLabel(studentData?.role || 'Alumno');
    const passwordsMatch = newPassword === confirmPassword && confirmPassword.length > 0;

    return (
        <div className="min-h-screen"
             style={{
                 background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 36%,#f1f5f9 36%)',
                 opacity: mounted ? 1 : 0,
                 transition: 'opacity 0.4s ease',
             }}>

            {/* ── Hero ── */}
            <div className="px-4 md:px-8 lg:px-12 pt-6 pb-28">
                <NavLink to={AllRoutes.STUDENT_DASHBOARD}
                         className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group">
                    <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"/>
                    Volver al panel
                </NavLink>
                <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-1">Cuenta</p>
                <h1 className="text-3xl md:text-4xl font-black text-white">Mi Perfil</h1>
                <p className="text-slate-400 mt-1 text-sm">Administra tu información personal y credenciales</p>
            </div>

            {/* ── Content ── */}
            <div className="px-4 md:px-8 lg:px-12 -mt-16 pb-12">
                <div className="max-w-2xl mx-auto space-y-5">

                    {/* Avatar card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <div className="flex items-center gap-5">
                            <div className="relative flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg"
                                     style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                    {photoURL ? (
                                        <img src={photoURL} alt="Avatar"
                                             className="w-full h-full object-cover"
                                             onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-black">
                                            {getInitials(name || studentData?.name)}
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl flex items-center justify-center shadow-sm cursor-pointer"
                                     style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                    <FiCamera className="w-3.5 h-3.5 text-white"/>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-xl font-black text-slate-900 truncate">{studentData?.name || 'Sin nombre'}</h2>
                                <p className="text-slate-500 text-sm truncate">{studentData?.email}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold"
                                          style={{background: roleInfo.bg, color: roleInfo.color}}>
                                        <FiShield className="w-3 h-3"/>
                                        {roleInfo.label}
                                    </span>
                                    {studentData?.createdAt && (
                                        <span className="text-xs text-slate-400">
                                            Desde {studentData.createdAt.toDate?.()?.toLocaleDateString('es-MX', {month: 'short', year: 'numeric'})}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info form card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
                        <h3 className="text-sm font-black text-slate-700 uppercase tracking-wide flex items-center gap-2">
                            <FiUser className="w-4 h-4 text-orange-500"/> Información personal
                        </h3>

                        {/* Name */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nombre completo</label>
                            <div className="relative">
                                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                <input
                                    type="text" value={name} onChange={e => setName(e.target.value)}
                                    placeholder="Tu nombre completo"
                                    className="w-full pl-10 pr-10 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm font-medium outline-none transition-all"
                                    style={{
                                        borderColor: name.trim().length >= 2 ? '#22c55e' : name ? '#f97316' : undefined,
                                        boxShadow: name.trim().length >= 2 ? '0 0 0 2px rgba(34,197,94,0.15)' : undefined,
                                    }}
                                />
                                {name.trim().length >= 2 &&
                                    <FiCheck className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4"/>}
                            </div>
                        </div>

                        {/* Email (read-only) */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Correo electrónico</label>
                            <div className="relative">
                                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                <input
                                    type="email" value={studentData?.email || ''} readOnly
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-400 text-sm font-medium cursor-not-allowed"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1 ml-1">El correo no puede modificarse</p>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">URL de foto de perfil</label>
                            <div className="relative">
                                <FiCamera className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                <input
                                    type="url" value={photoURL} onChange={e => setPhotoURL(e.target.value)}
                                    placeholder="https://..."
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm font-medium outline-none transition-all focus:border-orange-400"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Password card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-black text-slate-700 uppercase tracking-wide flex items-center gap-2">
                                <FiLock className="w-4 h-4 text-orange-500"/> Seguridad
                            </h3>
                            <button onClick={() => {setShowPasswordSection(v => !v); setNewPassword(''); setConfirmPassword('');}}
                                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                                        showPasswordSection
                                            ? 'bg-red-50 text-red-500 hover:bg-red-100'
                                            : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                                    }`}>
                                {showPasswordSection ? <><FiX className="inline w-3 h-3 mr-1"/>Cancelar</> : 'Cambiar contraseña'}
                            </button>
                        </div>

                        {!showPasswordSection ? (
                            <p className="text-sm text-slate-400">Tu contraseña está segura. Cámbiala solo si es necesario.</p>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nueva contraseña</label>
                                    <div className="relative">
                                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                        <input
                                            type={showPassword ? 'text' : 'password'} value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)} placeholder="Mínimo 6 caracteres"
                                            className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-slate-200 text-slate-800 text-sm font-medium outline-none transition-all focus:border-orange-400"
                                        />
                                        <button type="button" onClick={() => setShowPassword(v => !v)}
                                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                            {showPassword ? <FiEyeOff className="w-4 h-4"/> : <FiEye className="w-4 h-4"/>}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Confirmar contraseña</label>
                                    <div className="relative">
                                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                        <input
                                            type={showConfirm ? 'text' : 'password'} value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)} placeholder="Repite la contraseña"
                                            className="w-full pl-10 pr-12 py-3 rounded-xl border-2 text-slate-800 text-sm font-medium outline-none transition-all"
                                            style={{
                                                borderColor: confirmPassword ? (passwordsMatch ? '#22c55e' : '#ef4444') : '#e2e8f0',
                                                boxShadow: confirmPassword ? (passwordsMatch ? '0 0 0 2px rgba(34,197,94,0.15)' : '0 0 0 2px rgba(239,68,68,0.15)') : undefined,
                                            }}
                                        />
                                        <button type="button" onClick={() => setShowConfirm(v => !v)}
                                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                            {showConfirm ? <FiEyeOff className="w-4 h-4"/> : <FiEye className="w-4 h-4"/>}
                                        </button>
                                    </div>
                                    {confirmPassword && (
                                        <p className={`text-xs mt-1 ml-1 flex items-center gap-1 ${passwordsMatch ? 'text-green-600' : 'text-red-500'}`}>
                                            {passwordsMatch ? <FiCheck className="w-3 h-3"/> : <FiX className="w-3 h-3"/>}
                                            {passwordsMatch ? 'Las contraseñas coinciden' : 'No coinciden'}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Save button */}
                    <button onClick={handleSaveProfile} disabled={saving}
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{
                                background: 'linear-gradient(135deg,#f97316,#ea580c)',
                                boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
                            }}>
                        {saving
                            ? <><ImSpinner2 className="animate-spin w-4 h-4"/> Guardando...</>
                            : <><FiSave className="w-4 h-4"/> Guardar cambios</>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
