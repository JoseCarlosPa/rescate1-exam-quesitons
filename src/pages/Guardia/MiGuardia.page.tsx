import {useMemo, useState} from "react";
import {NavLink} from "react-router";
import {FiActivity, FiAlertTriangle, FiAward, FiCalendar, FiChevronRight, FiClock, FiEdit2, FiPhone, FiPlus, FiSearch, FiShield, FiToggleLeft, FiToggleRight, FiUser, FiUserCheck, FiUsers} from "react-icons/fi";
import {ImSpinner2} from "react-icons/im";
import useMiGuardia from "./MiGuardia.hook";
import {Elemento} from "../Admin/Dashboard/AdminDashboard.types";
import ElementoModal, {ElementoFormData} from "../Admin/Dashboard/components/ElementoModal.component.tsx";
import MemberDetailModal from "./MemberDetailModal.component.tsx";
import AttendancePanel from "./AttendancePanel.component.tsx";
import {AllRoutes} from "../../components/Router/Router.constants";
import {GUARD_ROLES, GuardRole} from "../../constants/guardia.constants";
import {certsSummary, certStatus, normalizeCerts} from "../../utils/certifications";
import {nextGuardiaLabel} from "../../utils/guardiaSchedule";

type RoleFilter = 'all' | GuardRole;
type RankFilter = 'all' | 'Básico' | 'Avanzado';

export default function MiGuardia() {
    const {guardia, canManage, currentUserId, elementos, loading, stats, handleCreateElemento, handleUpdateElemento, handleToggleElementoStatus} = useMiGuardia();
    const [showModal, setShowModal] = useState(false);
    const [editingElemento, setEditingElemento] = useState<Elemento | null>(null);
    const [detailElemento, setDetailElemento] = useState<Elemento | null>(null);
    const [showAttendance, setShowAttendance] = useState(false);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState<RoleFilter>('all');
    const [rankFilter, setRankFilter] = useState<RankFilter>('all');

    const openCreate = () => { setEditingElemento(null); setShowModal(true); };
    const openEdit = (e: Elemento) => { setEditingElemento(e); setShowModal(true); };

    const handleSave = async (data: ElementoFormData) => {
        if (editingElemento) {
            await handleUpdateElemento(editingElemento.id, data);
        } else {
            await handleCreateElemento(data);
        }
    };

    // Filtrado por búsqueda + papel + rango
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return elementos.filter(el => {
            const matchSearch = !q || el.name.toLowerCase().includes(q) || (el.email ?? '').toLowerCase().includes(q);
            const matchRole = roleFilter === 'all' || el.guardRole === roleFilter;
            const matchRank = rankFilter === 'all' || el.rank === rankFilter;
            return matchSearch && matchRole && matchRank;
        });
    }, [elementos, search, roleFilter, rankFilter]);

    // Alertas agregadas de certificaciones de toda la guardia
    const certAlerts = useMemo(() => {
        let vencidas = 0, porVencer = 0;
        for (const el of elementos) {
            const s = certsSummary(normalizeCerts(el.certifications));
            vencidas += s.vencidas;
            porVencer += s.porVencer;
        }
        return {vencidas, porVencer};
    }, [elementos]);

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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <NavLink to={AllRoutes.STUDENT_DASHBOARD} className="text-slate-400 hover:text-slate-600 text-xs font-semibold">← Mi Panel</NavLink>
                    <h2 className="text-3xl font-black text-slate-900 mt-1">Mi Guardia</h2>
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

            {/* Próxima guardia + Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <button onClick={() => setShowAttendance(true)}
                        className="p-4 rounded-2xl text-white flex flex-col justify-between text-left transition-all hover:opacity-95"
                        style={{background: 'linear-gradient(135deg,#6366f1,#4f46e5)'}}>
                    <p className="text-xs font-semibold uppercase tracking-wide opacity-80 flex items-center gap-1">
                        <FiClock className="w-3 h-3"/> Próxima guardia
                    </p>
                    <p className="text-2xl font-black mt-1">{nextGuardiaLabel(guardia)}</p>
                    <p className="text-[11px] font-semibold opacity-80 mt-1 flex items-center gap-1">
                        <FiUserCheck className="w-3 h-3"/> Ver asistencia
                    </p>
                </button>
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

            {/* Alertas de certificaciones (visible para líderes) */}
            {canManage && (certAlerts.vencidas > 0 || certAlerts.porVencer > 0) && (
                <div className="flex items-center gap-2 p-3 rounded-2xl mb-4"
                     style={{background: certAlerts.vencidas > 0 ? '#fee2e2' : '#fef3c7'}}>
                    <FiAlertTriangle className="w-4 h-4 flex-shrink-0"
                                     style={{color: certAlerts.vencidas > 0 ? '#dc2626' : '#d97706'}}/>
                    <p className="text-xs font-semibold" style={{color: certAlerts.vencidas > 0 ? '#991b1b' : '#92400e'}}>
                        {certAlerts.vencidas > 0 && `${certAlerts.vencidas} certificación(es) vencida(s) en la guardia. `}
                        {certAlerts.porVencer > 0 && `${certAlerts.porVencer} por vencer pronto.`}
                    </p>
                </div>
            )}

            {/* Búsqueda + filtros */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                    <input value={search} onChange={e => setSearch(e.target.value)}
                           placeholder="Buscar por nombre o correo..."
                           className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400"/>
                </div>
                <select value={roleFilter} onChange={e => setRoleFilter(e.target.value as RoleFilter)}
                        className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400">
                    <option value="all">Todos los papeles</option>
                    {GUARD_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <select value={rankFilter} onChange={e => setRankFilter(e.target.value as RankFilter)}
                        className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-orange-400">
                    <option value="all">Todos los rangos</option>
                    <option value="Básico">Básico</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
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
            ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <FiSearch className="w-12 h-12 mb-3 opacity-30"/>
                    <p className="font-semibold">Sin resultados para los filtros aplicados</p>
                    <button onClick={() => {setSearch(''); setRoleFilter('all'); setRankFilter('all');}}
                            className="mt-3 text-orange-500 text-sm font-semibold">Limpiar filtros</button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map(el => {
                        const isSelf = el.id === currentUserId;
                        const certs = normalizeCerts(el.certifications);
                        const certSummary = certsSummary(certs);
                        const hasAlerts = certSummary.vencidas > 0 || certSummary.porVencer > 0;
                        return (
                        <div key={el.id}
                             onClick={() => setDetailElemento(el)}
                             className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer ${
                                 isSelf ? 'border-orange-300 ring-2 ring-orange-200' : 'border-slate-100'
                             }`}>
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
                                        <div className="flex items-center gap-1.5">
                                            <h3 className="font-black text-slate-900 truncate">{el.name}</h3>
                                            {isSelf && <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-orange-500 text-white flex-shrink-0">Tú</span>}
                                        </div>
                                        <p className="text-xs text-slate-500 truncate">{el.email}</p>
                                    </div>
                                    <FiChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0"/>
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

                                {certs.length > 0 && (
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
                                            <FiAward className="w-3 h-3"/>
                                            {certs.length} certificación{certs.length !== 1 ? 'es' : ''}
                                            {hasAlerts && (
                                                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                                                      style={{
                                                          background: certSummary.vencidas > 0 ? '#fee2e2' : '#fef3c7',
                                                          color: certSummary.vencidas > 0 ? '#dc2626' : '#d97706',
                                                      }}>
                                                    <FiAlertTriangle className="w-2.5 h-2.5"/>
                                                    {certSummary.vencidas > 0 ? `${certSummary.vencidas} vencida(s)` : `${certSummary.porVencer} por vencer`}
                                                </span>
                                            )}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {certs.slice(0, 3).map(c => {
                                                const s = certStatus(c);
                                                return (
                                                    <span key={c.name} className={`px-1.5 py-0.5 rounded-md text-xs ${
                                                        s === 'vencida' ? 'bg-red-50 text-red-600'
                                                            : s === 'por-vencer' ? 'bg-amber-50 text-amber-700'
                                                            : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                        {c.name.split('(')[0].trim()}
                                                    </span>
                                                );
                                            })}
                                            {certs.length > 3 && (
                                                <span className="px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-600 text-xs font-semibold">
                                                    +{certs.length - 3}
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
                                    <div className="flex gap-2 pt-3 border-t border-slate-100"
                                         onClick={e => e.stopPropagation()}>
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
                        );
                    })}
                </div>
            )}

            {/* Modal de detalle de compañero */}
            <MemberDetailModal
                elemento={detailElemento}
                onClose={() => setDetailElemento(null)}
                isSelf={detailElemento?.id === currentUserId}
            />

            {/* Panel de asistencia */}
            {showAttendance && (
                <AttendancePanel
                    guardia={guardia}
                    canManage={canManage}
                    currentUserId={currentUserId}
                    elementos={elementos}
                    recordedBy={currentUserId}
                    onClose={() => setShowAttendance(false)}
                />
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
