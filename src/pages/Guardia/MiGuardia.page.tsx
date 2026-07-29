import {useState} from "react";
import {NavLink} from "react-router";
import {FiActivity, FiAward, FiCalendar, FiEdit2, FiPhone, FiPlus, FiShield, FiToggleLeft, FiToggleRight, FiUser, FiUsers} from "react-icons/fi";
import {ImSpinner2} from "react-icons/im";
import useMiGuardia from "./MiGuardia.hook";
import {Elemento} from "../Admin/Dashboard/AdminDashboard.types";
import ElementoModal, {ElementoFormData} from "../Admin/Dashboard/components/ElementoModal.component.tsx";
import {AllRoutes} from "../../components/Router/Router.constants";

export default function MiGuardia() {
    const {guardia, canManage, elementos, loading, stats, handleCreateElemento, handleUpdateElemento, handleToggleElementoStatus} = useMiGuardia();
    const [showModal, setShowModal] = useState(false);
    const [editingElemento, setEditingElemento] = useState<Elemento | null>(null);

    const openCreate = () => { setEditingElemento(null); setShowModal(true); };
    const openEdit = (e: Elemento) => { setEditingElemento(e); setShowModal(true); };

    const handleSave = async (data: ElementoFormData) => {
        if (editingElemento) {
            await handleUpdateElemento(editingElemento.id, data);
        } else {
            await handleCreateElemento(data);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{background: '#0f172a'}}>
                <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500"/>
            </div>
        );
    }

    if (!guardia) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center" style={{background: '#0f172a'}}>
                <FiUsers className="w-16 h-16 text-slate-600"/>
                <p className="text-slate-300 font-semibold">Todavía no tienes una guardia asignada.</p>
                <p className="text-slate-500 text-sm">Pide a un Admin o al Jefe de tu guardia que te asigne una.</p>
                <NavLink to={AllRoutes.STUDENT_DASHBOARD} className="text-orange-400 text-sm font-semibold">Volver a Mi Panel</NavLink>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-4 md:p-8" style={{background: '#f1f5f9'}}>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Mi Guardia</h2>
                    <p className="text-slate-500 mt-1">{guardia} — {stats.total} elemento{stats.total !== 1 ? 's' : ''}</p>
                </div>
                {canManage && (
                    <button onClick={openCreate}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-bold text-sm transition-all flex-shrink-0"
                            style={{background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 16px rgba(249,115,22,0.35)'}}>
                        <FiPlus className="w-5 h-5"/> Agregar Elemento
                    </button>
                )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    {label: 'Total', value: stats.total, color: '#f97316', bg: '#fff7ed'},
                    {label: 'Activos', value: stats.activos, color: '#16a34a', bg: '#f0fdf4'},
                    {label: 'Inactivos', value: stats.inactivos, color: '#64748b', bg: '#f8fafc'},
                ].map(s => (
                    <div key={s.label} className="p-4 rounded-2xl border" style={{background: s.bg, borderColor: s.color + '33'}}>
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{color: s.color}}>{s.label}</p>
                        <p className="text-3xl font-black mt-1" style={{color: s.color}}>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Cards grid */}
            {elementos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <FiUser className="w-16 h-16 mb-4 opacity-30"/>
                    <p className="text-lg font-semibold">Aún no hay elementos en esta guardia</p>
                    {canManage && (
                        <button onClick={openCreate}
                                className="mt-4 px-5 py-2.5 rounded-xl text-white font-semibold text-sm"
                                style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                            <FiPlus className="inline w-4 h-4 mr-1"/>Agregar Elemento
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {elementos.map(el => (
                        <div key={el.id}
                             className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                            <div className="h-1.5" style={{
                                background: el.status === 'activo'
                                    ? 'linear-gradient(90deg,#22c55e,#16a34a)'
                                    : 'linear-gradient(90deg,#94a3b8,#64748b)'
                            }}/>

                            <div className="p-5">
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

                                {el.guardRole && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-600">
                                            <FiShield className="w-3 h-3"/> {el.guardRole}
                                        </span>
                                    </div>
                                )}

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

                                {el.phone && (
                                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                                        <FiPhone className="w-3 h-3"/> {el.phone}
                                    </p>
                                )}

                                {canManage && (
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
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {canManage && (
                <ElementoModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    initialData={editingElemento}
                    onSave={handleSave}
                    fixedGuardia={guardia}
                />
            )}
        </div>
    );
}
