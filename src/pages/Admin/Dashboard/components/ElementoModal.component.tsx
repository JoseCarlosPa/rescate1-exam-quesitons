import React, {useEffect, useState} from "react";
import {FiAward, FiCalendar, FiMail, FiPhone, FiPlus, FiShield, FiToggleLeft, FiToggleRight, FiUser, FiUsers, FiX} from "react-icons/fi";
import {CERTIFICATIONS_LIST, Elemento, ElementRank, ElementStatus} from "../AdminDashboard.types.ts";
import {Guardia, GUARD_ROLES, GuardRole, GUARDIAS} from "../../../../constants/guardia.constants";
import {CertRecord, certStatus, certStatusMeta, normalizeCerts, serializeCerts} from "../../../../utils/certifications";

export type ElementoFormData = Omit<Elemento, 'id' | 'createdAt' | 'attendance' | 'role'>;

interface ElementoModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Elemento | null;
    onSave: (data: ElementoFormData) => void;
    /**
     * Cuando se define, la guardia queda fija a este valor y no es editable
     * (caso de un Jefe/Sub-jefe de guardia, que solo administra la suya).
     */
    fixedGuardia?: Guardia;
}

export default function ElementoModal({isOpen, onClose, initialData, onSave, fixedGuardia}: ElementoModalProps) {
    const [name, setName] = useState(initialData?.name ?? "");
    const [email, setEmail] = useState(initialData?.email ?? "");
    const [phone, setPhone] = useState(initialData?.phone ?? "");
    const [photoURL, setPhotoURL] = useState(initialData?.photoURL ?? "");
    const [bio, setBio] = useState(initialData?.bio ?? "");
    const [rank, setRank] = useState<ElementRank>(initialData?.rank ?? "Básico");
    const [status, setStatus] = useState<ElementStatus>(initialData?.status ?? "activo");
    const [graduationYear, setGraduationYear] = useState(initialData?.graduationYear ?? new Date().getFullYear());
    const [certifications, setCertifications] = useState<CertRecord[]>(normalizeCerts(initialData?.certifications));
    const [customCert, setCustomCert] = useState("");
    const [guardia, setGuardia] = useState<Guardia>(initialData?.guardia ?? fixedGuardia ?? GUARDIAS[0]);
    const [guardRole, setGuardRole] = useState<GuardRole>(initialData?.guardRole ?? "Cadete");

    // Sincronizar el formulario cuando el modal se abre o cambia el elemento a editar.
    // DEBE estar antes del return condicional para cumplir las Reglas de Hooks de React.
    useEffect(() => {
        if (isOpen) {
            setName(initialData?.name ?? "");
            setEmail(initialData?.email ?? "");
            setPhone(initialData?.phone ?? "");
            setPhotoURL(initialData?.photoURL ?? "");
            setBio(initialData?.bio ?? "");
            setRank(initialData?.rank ?? "Básico");
            setStatus(initialData?.status ?? "activo");
            setGraduationYear(initialData?.graduationYear ?? new Date().getFullYear());
            setCertifications(normalizeCerts(initialData?.certifications));
            setCustomCert("");
            setGuardia(initialData?.guardia ?? fixedGuardia ?? GUARDIAS[0]);
            setGuardRole(initialData?.guardRole ?? "Cadete");
        }
        // Usar initialData?.email como dependency permite detectar cambios de elemento
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, initialData?.email]);

    if (!isOpen) return null;

    const hasCert = (certName: string) => certifications.some(c => c.name === certName);

    const toggleCert = (certName: string) => {
        setCertifications(prev =>
            prev.some(c => c.name === certName)
                ? prev.filter(c => c.name !== certName)
                : [...prev, {name: certName}]
        );
    };

    const addCustomCert = () => {
        const trimmed = customCert.trim();
        if (trimmed && !hasCert(trimmed)) {
            setCertifications(prev => [...prev, {name: trimmed}]);
            setCustomCert("");
        }
    };

    const updateCertDate = (certName: string, field: 'issuedAt' | 'expiresAt', value: string) => {
        setCertifications(prev => prev.map(c =>
            c.name === certName ? {...c, [field]: value || undefined} : c
        ));
    };

    const removeCert = (certName: string) => {
        setCertifications(prev => prev.filter(c => c.name !== certName));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;
        onSave({
            name, email, phone, photoURL, bio, rank, status, graduationYear,
            certifications: serializeCerts(certifications), guardia, guardRole,
        });
        onClose();
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <h3 className="text-xl font-black text-slate-900">
                            {initialData ? 'Editar Elemento' : 'Nuevo Elemento'}
                        </h3>
                        <p className="text-sm text-slate-500 mt-0.5">Completa el perfil del personal operativo</p>
                    </div>
                    <button onClick={onClose}
                            className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                        <FiX className="w-5 h-5"/>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Photo + Status */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-black shadow-lg flex-shrink-0">
                            {photoURL ? <img src={photoURL} alt="" className="w-full h-full rounded-2xl object-cover"/> : (name.charAt(0) || '?')}
                        </div>
                        <div className="flex-1">
                            <label className="block text-xs font-semibold text-slate-600 mb-1">URL de foto</label>
                            <input value={photoURL} onChange={e => setPhotoURL(e.target.value)}
                                   placeholder="https://..." className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xs font-semibold text-slate-600">Estado</span>
                            <button type="button" onClick={() => setStatus(s => s === 'activo' ? 'inactivo' : 'activo')}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${status === 'activo' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                {status === 'activo' ? <FiToggleRight className="w-4 h-4"/> : <FiToggleLeft className="w-4 h-4"/>}
                                {status === 'activo' ? 'Activo' : 'Inactivo'}
                            </button>
                        </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre completo *</label>
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <input required value={name} onChange={e => setName(e.target.value)}
                                       placeholder="Nombre del elemento"
                                       className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Correo *</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                                       disabled={!!initialData}
                                       placeholder="correo@rescate.com"
                                       className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 disabled:bg-slate-50 disabled:text-slate-400"/>
                            </div>
                        </div>
                    </div>

                    {/* Guardia + Papel de Guardia */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Guardia</label>
                            <div className="relative">
                                <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <select value={guardia} onChange={e => setGuardia(e.target.value as Guardia)}
                                        disabled={!!fixedGuardia}
                                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 disabled:bg-slate-50 disabled:text-slate-400">
                                    {GUARDIAS.map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Papel en la guardia</label>
                            <div className="relative">
                                <FiShield className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <select value={guardRole} onChange={e => setGuardRole(e.target.value as GuardRole)}
                                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400">
                                    {GUARD_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Phone + Rank + Year */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Teléfono</label>
                            <div className="relative">
                                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="55 0000 0000"
                                       className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Rango</label>
                            <select value={rank} onChange={e => setRank(e.target.value as ElementRank)}
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400">
                                <option value="Básico">Básico</option>
                                <option value="Avanzado">Avanzado</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Año de graduación</label>
                            <div className="relative">
                                <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"/>
                                <input type="number" min={1990} max={currentYear} value={graduationYear}
                                       onChange={e => setGraduationYear(parseInt(e.target.value))}
                                       className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Notas / Bio</label>
                        <textarea value={bio} onChange={e => setBio(e.target.value)} rows={2}
                                  placeholder="Notas adicionales sobre el elemento..."
                                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 resize-none"/>
                    </div>

                    {/* Certifications */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                            <FiAward className="inline w-3.5 h-3.5 mr-1"/>
                            Certificaciones / Capacitaciones ({certifications.length})
                        </label>
                        {/* Catálogo para agregar/quitar rápidamente */}
                        <div className="grid grid-cols-2 gap-1.5 mb-3 max-h-40 overflow-y-auto pr-1">
                            {CERTIFICATIONS_LIST.map(cert => (
                                <label key={cert}
                                       className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border cursor-pointer text-xs transition-all ${
                                           hasCert(cert)
                                               ? 'border-orange-400 bg-orange-50 text-orange-700 font-semibold'
                                               : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                       }`}>
                                    <input type="checkbox" className="hidden" checked={hasCert(cert)}
                                           onChange={() => toggleCert(cert)}/>
                                    <span className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${hasCert(cert) ? 'bg-orange-500 border-orange-500' : 'border-slate-300'}`}>
                                        {hasCert(cert) && <span className="text-white text-[9px]">✓</span>}
                                    </span>
                                    {cert}
                                </label>
                            ))}
                        </div>
                        {/* Cert personalizada */}
                        <div className="flex gap-2 mb-3">
                            <input value={customCert} onChange={e => setCustomCert(e.target.value)}
                                   placeholder="Otra certificación..."
                                   onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomCert())}
                                   className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                            <button type="button" onClick={addCustomCert}
                                    className="px-3 py-2 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200 text-sm font-semibold transition-colors">
                                <FiPlus className="w-4 h-4"/>
                            </button>
                        </div>
                        {/* Certs seleccionadas con fechas de emisión/vencimiento */}
                        {certifications.length > 0 && (
                            <div className="space-y-2">
                                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                    Vigencias (opcional)
                                </p>
                                {certifications.map(cert => {
                                    const meta = certStatusMeta(certStatus(cert));
                                    return (
                                        <div key={cert.name}
                                             className="flex flex-col sm:flex-row sm:items-center gap-2 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <button type="button" onClick={() => removeCert(cert.name)}
                                                        className="text-slate-300 hover:text-red-500 transition-colors flex-shrink-0">
                                                    <FiX className="w-4 h-4"/>
                                                </button>
                                                <span className="text-xs font-semibold text-slate-700 truncate flex-1">{cert.name}</span>
                                                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0"
                                                      style={{background: meta.bg, color: meta.color}}>
                                                    {meta.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] text-slate-400 ml-1">Emisión</span>
                                                    <input type="date" value={cert.issuedAt ?? ''}
                                                           onChange={e => updateCertDate(cert.name, 'issuedAt', e.target.value)}
                                                           className="px-2 py-1 rounded-lg border border-slate-200 text-[11px] outline-none focus:border-orange-400"/>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] text-slate-400 ml-1">Vence</span>
                                                    <input type="date" value={cert.expiresAt ?? ''}
                                                           onChange={e => updateCertDate(cert.name, 'expiresAt', e.target.value)}
                                                           className="px-2 py-1 rounded-lg border border-slate-200 text-[11px] outline-none focus:border-orange-400"/>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose}
                                className="flex-1 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
                            Cancelar
                        </button>
                        <button type="submit"
                                className="flex-1 py-3 rounded-xl text-white font-bold text-sm transition-all"
                                style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 16px rgba(249,115,22,0.35)'}}>
                            {initialData ? 'Guardar cambios' : 'Crear elemento'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
