import {FiAward, FiCalendar, FiMail, FiMessageCircle, FiPhone, FiShield, FiUser, FiX} from "react-icons/fi";
import {Elemento} from "../Admin/Dashboard/AdminDashboard.types";
import {certStatus, certStatusMeta, normalizeCerts} from "../../utils/certifications";
import {mailtoHref, telHref, whatsAppHref} from "../../utils/contact";

interface MemberDetailModalProps {
    elemento: Elemento | null;
    onClose: () => void;
    /** Marca visualmente que es el propio usuario. */
    isSelf?: boolean;
}

export default function MemberDetailModal({elemento, onClose, isSelf}: MemberDetailModalProps) {
    if (!elemento) return null;

    const certs = normalizeCerts(elemento.certifications);
    const tel = telHref(elemento.phone);
    const wa = whatsAppHref(elemento.phone, `Hola ${elemento.name.split(' ')[0]}, te contacto desde la guardia.`);
    const mail = mailtoHref(elemento.email);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}
             onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                 onClick={e => e.stopPropagation()}>
                {/* Header con foto */}
                <div className="relative p-6 pb-4"
                     style={{background: 'linear-gradient(135deg,#0f172a,#1e293b)'}}>
                    <button onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                        <FiX className="w-5 h-5"/>
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
                             style={{background: 'linear-gradient(135deg,#f97316,#ea580c)'}}>
                            {elemento.photoURL
                                ? <img src={elemento.photoURL} alt={elemento.name} className="w-full h-full object-cover"/>
                                : <div className="w-full h-full flex items-center justify-center text-white text-3xl font-black">
                                    {elemento.name.charAt(0)}
                                </div>}
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-black text-white truncate">{elemento.name}</h3>
                                {isSelf && (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500 text-white flex-shrink-0">
                                        Tú
                                    </span>
                                )}
                            </div>
                            {elemento.guardRole && (
                                <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-200">
                                    <FiShield className="w-3 h-3"/> {elemento.guardRole}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-5">
                    {/* Contacto rápido */}
                    <div className="grid grid-cols-3 gap-2">
                        <a href={tel ?? undefined}
                           aria-disabled={!tel}
                           className={`flex flex-col items-center gap-1 py-3 rounded-xl text-xs font-semibold transition-all ${
                               tel ? 'bg-green-50 text-green-700 hover:bg-green-100' : 'bg-slate-50 text-slate-300 pointer-events-none'
                           }`}>
                            <FiPhone className="w-5 h-5"/> Llamar
                        </a>
                        <a href={wa ?? undefined} target="_blank" rel="noopener noreferrer"
                           aria-disabled={!wa}
                           className={`flex flex-col items-center gap-1 py-3 rounded-xl text-xs font-semibold transition-all ${
                               wa ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-50 text-slate-300 pointer-events-none'
                           }`}>
                            <FiMessageCircle className="w-5 h-5"/> WhatsApp
                        </a>
                        <a href={mail ?? undefined}
                           aria-disabled={!mail}
                           className={`flex flex-col items-center gap-1 py-3 rounded-xl text-xs font-semibold transition-all ${
                               mail ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-slate-50 text-slate-300 pointer-events-none'
                           }`}>
                            <FiMail className="w-5 h-5"/> Correo
                        </a>
                    </div>

                    {/* Datos */}
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="p-3 rounded-xl bg-slate-50">
                            <p className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1">
                                <FiUser className="w-3 h-3"/> Rango
                            </p>
                            <p className="font-bold text-slate-800 mt-0.5">
                                {elemento.rank === 'Avanzado' ? '⭐ Avanzado' : '🔰 Básico'}
                            </p>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50">
                            <p className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1">
                                <FiCalendar className="w-3 h-3"/> Graduación
                            </p>
                            <p className="font-bold text-slate-800 mt-0.5">{elemento.graduationYear || '—'}</p>
                        </div>
                        {elemento.phone && (
                            <div className="p-3 rounded-xl bg-slate-50 col-span-2">
                                <p className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1">
                                    <FiPhone className="w-3 h-3"/> Teléfono
                                </p>
                                <p className="font-bold text-slate-800 mt-0.5">{elemento.phone}</p>
                            </div>
                        )}
                    </div>

                    {/* Bio */}
                    {elemento.bio && (
                        <div>
                            <p className="text-xs font-semibold text-slate-500 mb-1">Acerca de</p>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{elemento.bio}</p>
                        </div>
                    )}

                    {/* Certificaciones */}
                    <div>
                        <p className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1">
                            <FiAward className="w-3.5 h-3.5"/> Certificaciones ({certs.length})
                        </p>
                        {certs.length === 0 ? (
                            <p className="text-sm text-slate-400">Sin certificaciones registradas.</p>
                        ) : (
                            <div className="space-y-1.5">
                                {certs.map(cert => {
                                    const meta = certStatusMeta(certStatus(cert));
                                    return (
                                        <div key={cert.name}
                                             className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-100">
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-slate-700 truncate">{cert.name}</p>
                                                {cert.expiresAt && (
                                                    <p className="text-xs text-slate-400">
                                                        Vence: {new Date(cert.expiresAt + 'T00:00:00').toLocaleDateString('es-MX', {day: 'numeric', month: 'short', year: 'numeric'})}
                                                    </p>
                                                )}
                                            </div>
                                            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold flex-shrink-0"
                                                  style={{background: meta.bg, color: meta.color}}>
                                                {meta.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
