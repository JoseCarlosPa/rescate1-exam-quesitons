import {useState} from "react";
import {FiActivity, FiAward, FiCalendar, FiEdit2, FiPhone, FiPlus, FiSearch, FiShield, FiToggleLeft, FiToggleRight, FiTrash2, FiUser, FiUsers} from "react-icons/fi";
import {Elemento} from "../AdminDashboard.types.ts";
import {useAdminDashboardContext} from "../AdminDashboard.context";
import ElementoModal, {ElementoFormData} from "./ElementoModal.component.tsx";
import {GUARDIAS} from "../../../../constants/guardia.constants";
import {normalizeCerts} from "../../../../utils/certifications";

export default function Elementos() {
    const {elementos, handleCreateElemento, handleUpdateElemento, handleToggleElementoStatus, handleDeleteElemento} = useAdminDashboardContext();
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<'all' | 'activo' | 'inactivo'>('all');
    const [rankFilter, setRankFilter] = useState<'all' | 'Básico' | 'Avanzado'>('all');
    const [guardiaFilter, setGuardiaFilter] = useState<'all' | typeof GUARDIAS[number]>('all');
    const [showModal, setShowModal] = useState(false);
    const [editingElemento, setEditingElemento] = useState<Elemento | null>(null);

    const filtered = elementos.filter(e => {
        const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.email.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === 'all' || e.status === statusFilter;
        const matchRank = rankFilter === 'all' || e.rank === rankFilter;
        const matchGuardia = guardiaFilter === 'all' || e.guardia === guardiaFilter;
        return matchSearch && matchStatus && matchRank && matchGuardia;
    });

    const activeCount = elementos.filter(e => e.status === 'activo').length;
    const inactiveCount = elementos.filter(e => e.status === 'inactivo').length;

    const openCreate = () => { setEditingElemento(null); setShowModal(true); };
    const openEdit = (e: Elemento) => { setEditingElemento(e); setShowModal(true); };

    const handleSave = async (data: ElementoFormData) => {
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
                <select value={guardiaFilter} onChange={e => setGuardiaFilter(e.target.value as any)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400">
                    <option value="all">Todas las guardias</option>
                    {GUARDIAS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
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

                                {/* Guardia + papel */}
                                {(el.guardia || el.guardRole) && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {el.guardia && (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600">
                                                <FiUsers className="w-3 h-3"/> {el.guardia}
                                            </span>
                                        )}
                                        {el.guardRole && (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-600">
                                                <FiShield className="w-3 h-3"/> {el.guardRole}
                                            </span>
                                        )}
                                    </div>
                                )}

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
                                {(() => {
                                    const certs = normalizeCerts(el.certifications);
                                    if (certs.length === 0) return null;
                                    return (
                                        <div className="mb-3">
                                            <p className="text-xs font-semibold text-slate-500 mb-1.5">
                                                <FiAward className="inline w-3 h-3 mr-1"/>
                                                {certs.length} certificación{certs.length !== 1 ? 'es' : ''}
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {certs.slice(0, 3).map(c => (
                                                    <span key={c.name} className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs">
                                                        {c.name.split('(')[0].trim()}
                                                    </span>
                                                ))}
                                                {certs.length > 3 && (
                                                    <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-600 text-xs font-semibold">
                                                        +{certs.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })()}

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
