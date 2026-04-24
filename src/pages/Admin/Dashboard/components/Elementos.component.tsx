import {useState} from "react";
import {FiActivity, FiAward, FiCalendar, FiEdit2, FiMail, FiPhone, FiPlus, FiSearch, FiToggleLeft, FiToggleRight, FiTrash2, FiUser, FiX} from "react-icons/fi";
import {CERTIFICATIONS_LIST, Elemento, ElementRank, ElementStatus} from "../AdminDashboard.types.ts";
import useAdminDashboard from "../AdminDashboard.hook.ts";

// ── Modal ──────────────────────────────────────────────────────────────────────
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Elemento | null;
    onSave: (data: Omit<Elemento, 'id' | 'createdAt'>) => void;
}

function ElementoModal({isOpen, onClose, initialData, onSave}: ModalProps) {
    const [name, setName] = useState(initialData?.name ?? "");
    const [email, setEmail] = useState(initialData?.email ?? "");
    const [phone, setPhone] = useState(initialData?.phone ?? "");
    const [photoURL, setPhotoURL] = useState(initialData?.photoURL ?? "");
    const [bio, setBio] = useState(initialData?.bio ?? "");
    const [rank, setRank] = useState<ElementRank>(initialData?.rank ?? "Básico");
    const [status, setStatus] = useState<ElementStatus>(initialData?.status ?? "activo");
    const [graduationYear, setGraduationYear] = useState(initialData?.graduationYear ?? new Date().getFullYear());
    const [certifications, setCertifications] = useState<string[]>(initialData?.certifications ?? []);
    const [customCert, setCustomCert] = useState("");

    if (!isOpen) return null;

    const toggleCert = (cert: string) => {
        setCertifications(prev =>
            prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
        );
    };

    const addCustomCert = () => {
        const trimmed = customCert.trim();
        if (trimmed && !certifications.includes(trimmed)) {
            setCertifications(prev => [...prev, trimmed]);
            setCustomCert("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;
        onSave({name, email, phone, photoURL, bio, rank, status, graduationYear, certifications});
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
                                       placeholder="correo@rescate.com"
                                       className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
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
                        <div className="grid grid-cols-2 gap-1.5 mb-3 max-h-40 overflow-y-auto pr-1">
                            {CERTIFICATIONS_LIST.map(cert => (
                                <label key={cert}
                                       className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border cursor-pointer text-xs transition-all ${
                                           certifications.includes(cert)
                                               ? 'border-orange-400 bg-orange-50 text-orange-700 font-semibold'
                                               : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                       }`}>
                                    <input type="checkbox" className="hidden" checked={certifications.includes(cert)}
                                           onChange={() => toggleCert(cert)}/>
                                    <span className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${certifications.includes(cert) ? 'bg-orange-500 border-orange-500' : 'border-slate-300'}`}>
                                        {certifications.includes(cert) && <span className="text-white text-[9px]">✓</span>}
                                    </span>
                                    {cert}
                                </label>
                            ))}
                        </div>
                        {/* Custom cert */}
                        <div className="flex gap-2">
                            <input value={customCert} onChange={e => setCustomCert(e.target.value)}
                                   placeholder="Otra certificación..."
                                   onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomCert())}
                                   className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400"/>
                            <button type="button" onClick={addCustomCert}
                                    className="px-3 py-2 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200 text-sm font-semibold transition-colors">
                                <FiPlus className="w-4 h-4"/>
                            </button>
                        </div>
                        {/* Extra certs pills */}
                        {certifications.filter(c => !(CERTIFICATIONS_LIST as readonly string[]).includes(c)).length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {certifications.filter(c => !(CERTIFICATIONS_LIST as readonly string[]).includes(c)).map(c => (
                                    <span key={c} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                                        {c}
                                        <button type="button" onClick={() => setCertifications(prev => prev.filter(x => x !== c))}>
                                            <FiX className="w-3 h-3"/>
                                        </button>
                                    </span>
                                ))}
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

// ── Main component ─────────────────────────────────────────────────────────────
import React from "react";

export default function Elementos() {
    const {elementos, handleCreateElemento, handleUpdateElemento, handleToggleElementoStatus, handleDeleteElemento} = useAdminDashboard();
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<'all' | 'activo' | 'inactivo'>('all');
    const [rankFilter, setRankFilter] = useState<'all' | 'Básico' | 'Avanzado'>('all');
    const [showModal, setShowModal] = useState(false);
    const [editingElemento, setEditingElemento] = useState<Elemento | null>(null);

    const filtered = elementos.filter(e => {
        const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.email.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === 'all' || e.status === statusFilter;
        const matchRank = rankFilter === 'all' || e.rank === rankFilter;
        return matchSearch && matchStatus && matchRank;
    });

    const activeCount = elementos.filter(e => e.status === 'activo').length;
    const inactiveCount = elementos.filter(e => e.status === 'inactivo').length;

    const openCreate = () => { setEditingElemento(null); setShowModal(true); };
    const openEdit = (e: Elemento) => { setEditingElemento(e); setShowModal(true); };

    const handleSave = async (data: Omit<Elemento, 'id' | 'createdAt'>) => {
        if (editingElemento) {
            await handleUpdateElemento(editingElemento.id, data);
        } else {
            await handleCreateElemento(data);
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Personal Operativo</h2>
                    <p className="text-slate-500 mt-1">Gestiona los elementos activos e inactivos de la asociación</p>
                </div>
                <button onClick={openCreate}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-bold text-sm transition-all flex-shrink-0"
                        style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 16px rgba(249,115,22,0.35)'}}>
                    <FiPlus className="w-5 h-5"/> Agregar Elemento
                </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    {label: 'Total', value: elementos.length, color: '#f97316', bg: '#fff7ed'},
                    {label: 'Activos', value: activeCount, color: '#16a34a', bg: '#f0fdf4'},
                    {label: 'Inactivos', value: inactiveCount, color: '#64748b', bg: '#f8fafc'},
                ].map(s => (
                    <div key={s.label} className="p-4 rounded-2xl border" style={{background: s.bg, borderColor: s.color + '33'}}>
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{color: s.color}}>{s.label}</p>
                        <p className="text-3xl font-black mt-1" style={{color: s.color}}>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                    <input value={search} onChange={e => setSearch(e.target.value)}
                           placeholder="Buscar por nombre o correo..."
                           className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400"/>
                </div>
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400">
                    <option value="all">Todos los estados</option>
                    <option value="activo">Activos</option>
                    <option value="inactivo">Inactivos</option>
                </select>
                <select value={rankFilter} onChange={e => setRankFilter(e.target.value as any)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400">
                    <option value="all">Todos los rangos</option>
                    <option value="Básico">Básico</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </div>

            {/* Cards grid */}
            {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <FiUser className="w-16 h-16 mb-4 opacity-30"/>
                    <p className="text-lg font-semibold">No se encontraron elementos</p>
                    <p className="text-sm mt-1">Agrega el primer elemento al equipo</p>
                    <button onClick={openCreate}
                            className="mt-4 px-5 py-2.5 rounded-xl text-white font-semibold text-sm"
                            style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                        <FiPlus className="inline w-4 h-4 mr-1"/>Agregar Elemento
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map(el => (
                        <div key={el.id}
                             className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                            {/* Top color stripe */}
                            <div className="h-1.5" style={{
                                background: el.status === 'activo'
                                    ? 'linear-gradient(90deg,#22c55e,#16a34a)'
                                    : 'linear-gradient(90deg,#94a3b8,#64748b)'
                            }}/>

                            <div className="p-5">
                                {/* Avatar + badges */}
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl flex-shrink-0 overflow-hidden"
                                         style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                                        {el.photoURL
                                            ? <img src={el.photoURL} alt={el.name} className="w-full h-full object-cover"/>
                                            : <div className="w-full h-full flex items-center justify-center text-white text-xl font-black">
                                                {el.name.charAt(0)}
                                            </div>
                                        }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-black text-slate-900 truncate">{el.name}</h3>
                                        <p className="text-xs text-slate-500 truncate">{el.email}</p>
                                    </div>
                                </div>

                                {/* Info chips */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                                        el.status === 'activo' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                        <FiActivity className="w-3 h-3"/>
                                        {el.status === 'activo' ? 'Activo' : 'Inactivo'}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                                        {el.rank === 'Avanzado' ? '⭐' : '🔰'} {el.rank}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                                        <FiCalendar className="w-3 h-3"/> {el.graduationYear}
                                    </span>
                                </div>

                                {/* Certifications */}
                                {el.certifications.length > 0 && (
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-slate-500 mb-1.5">
                                            <FiAward className="inline w-3 h-3 mr-1"/>
                                            {el.certifications.length} certificación{el.certifications.length !== 1 ? 'es' : ''}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {el.certifications.slice(0, 3).map(c => (
                                                <span key={c} className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs">
                                                    {c.split('(')[0].trim()}
                                                </span>
                                            ))}
                                            {el.certifications.length > 3 && (
                                                <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-600 text-xs font-semibold">
                                                    +{el.certifications.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Phone */}
                                {el.phone && (
                                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                                        <FiPhone className="w-3 h-3"/> {el.phone}
                                    </p>
                                )}

                                {/* Actions */}
                                <div className="flex gap-2 pt-3 border-t border-slate-100">
                                    <button onClick={() => handleToggleElementoStatus(el.id)}
                                            className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                                el.status === 'activo'
                                                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                            }`}>
                                        {el.status === 'activo' ? <><FiToggleLeft className="inline w-3.5 h-3.5 mr-1"/>Desactivar</> : <><FiToggleRight className="inline w-3.5 h-3.5 mr-1"/>Activar</>}
                                    </button>
                                    <button onClick={() => openEdit(el)}
                                            className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-semibold transition-colors">
                                        <FiEdit2 className="w-3.5 h-3.5"/>
                                    </button>
                                    <button onClick={() => handleDeleteElemento(el.id)}
                                            className="px-3 py-1.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 text-xs font-semibold transition-colors">
                                        <FiTrash2 className="w-3.5 h-3.5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <ElementoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                initialData={editingElemento}
                onSave={handleSave}
            />
        </div>
    );
}
