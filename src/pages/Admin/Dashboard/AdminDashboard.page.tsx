import {useState} from 'react';
import {FaAmbulance, FaBook, FaChartBar, FaComments, FaTasks, FaUsers} from 'react-icons/fa';
import {FiMenu, FiShield, FiX} from 'react-icons/fi';
import {ImSpinner2} from 'react-icons/im';
import logo from '../../../assets/logo.png';
import {NavLink} from 'react-router';
import {AllRoutes} from '../../../components/Router/Router.constants.ts';
import {HiArrowLeft} from 'react-icons/hi2';
import useAdminDashboard from "./AdminDashboard.hook.ts";
import {ActiveTab} from "./AdminDashboard.types.ts";
import Overview from "./components/Overview.component.tsx";
import Users from "./components/Users.component.tsx";
import Forum from "./components/Forum.component.tsx";
import Lessons from "./components/Lessons.component.tsx";
import Tasks from "./components/Tasks.component.tsx";
import Checklists from "./components/Checklists.component.tsx";
import Elementos from "./components/Elementos.component.tsx";

const NAV_ITEMS = [
    {key: 'overview', label: 'Resumen', icon: FaChartBar},
    {key: 'users', label: 'Usuarios', icon: FaUsers},
    {key: 'elementos', label: 'Elementos', icon: FiShield},
    {key: 'forum', label: 'Foro', icon: FaComments},
    {key: 'lessons', label: 'Lecciones', icon: FaBook},
    {key: 'tasks', label: 'Tareas', icon: FaTasks},
    {key: 'checklists', label: 'Checklists', icon: FaAmbulance},
] as const;

export default function AdminDashboard() {
    const {activeTab, setActiveTab, loading} = useAdminDashboard();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                 style={{background: '#0f172a'}}>
                <div className="flex flex-col items-center gap-4">
                    <ImSpinner2 className="animate-spin w-10 h-10 text-orange-500"/>
                    <p className="text-slate-400 text-sm">Cargando panel...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen overflow-hidden flex" style={{background: '#f1f5f9'}}>

            {/* ── Sidebar overlay (mobile) ── */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                     onClick={() => setSidebarOpen(false)}/>
            )}

            {/* ── Sidebar ── */}
            <aside className={`fixed inset-y-0 left-0 h-screen z-50 flex flex-col transition-transform duration-300 w-64
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
                   style={{background: 'linear-gradient(180deg,#0f172a 0%,#1e293b 100%)'}}>

                {/* Logo */}
                <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
                    <img src={logo} alt="Rescate 1" className="w-9 h-9 rounded-full ring-2 ring-orange-500/40"/>
                    <div>
                        <p className="text-white font-black text-sm leading-tight">Rescate 1</p>
                        <p className="text-orange-400 text-xs font-semibold">Panel Admin</p>
                    </div>
                    <button onClick={() => setSidebarOpen(false)}
                            className="ml-auto text-slate-500 hover:text-white lg:hidden transition-colors">
                        <FiX className="w-5 h-5"/>
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                    {NAV_ITEMS.map(({key, label, icon: Icon}) => {
                        const isActive = activeTab === key;
                        return (
                            <button key={key}
                                    onClick={() => {setActiveTab(key as ActiveTab); setSidebarOpen(false);}}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                    }`}
                                    style={isActive ? {
                                        background: 'linear-gradient(135deg,#f97316,#ea580c)',
                                        boxShadow: '0 4px 12px rgba(249,115,22,0.3)'
                                    } : {}}>
                                <Icon className="w-4 h-4 flex-shrink-0"/>
                                {label}
                            </button>
                        );
                    })}
                </nav>

                {/* Back to app */}
                <div className="p-4 border-t border-white/10">
                    <NavLink to={AllRoutes.MAIN}
                             className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors group px-2 py-2">
                        <HiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"/>
                        Volver a la plataforma
                    </NavLink>
                </div>
            </aside>

            {/* ── Main content ── */}
            <div className="flex-1 flex flex-col min-w-0 lg:ml-64 overflow-y-auto">
                {/* Top bar */}
                <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4 flex items-center gap-4 sticky top-0 z-20">
                    <button onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
                        <FiMenu className="w-5 h-5"/>
                    </button>
                    <div className="flex-1">
                        <h1 className="text-lg font-black text-slate-900">
                            {NAV_ITEMS.find(n => n.key === activeTab)?.label ?? 'Dashboard'}
                        </h1>
                        <p className="text-xs text-slate-400 hidden md:block">Panel de Administración — Rescate 1</p>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 lg:p-8 min-h-0">
                    {activeTab === 'overview'   && <Overview/>}
                    {activeTab === 'users'      && <Users/>}
                    {activeTab === 'elementos'  && <Elementos/>}
                    {activeTab === 'forum'      && <Forum/>}
                    {activeTab === 'lessons'    && <Lessons/>}
                    {activeTab === 'tasks'      && <Tasks/>}
                    {activeTab === 'checklists' && <Checklists/>}
                </main>
            </div>
        </div>
    );
}
