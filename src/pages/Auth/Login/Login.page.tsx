import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {ImSpinner2} from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import {FiEye, FiEyeOff, FiLock, FiMail} from "react-icons/fi";
import {HiArrowLeft, HiShieldCheck} from "react-icons/hi2";
import logo from "../../../assets/logo.png";
import {toast} from "sonner";
import {NavLink, useNavigate} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {useAuth} from "../../../Providers/AuthProvider";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);
    const [authing, setAuthing] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate();
    const {login, loginWithGoogle, isAuthenticated} = useAuth();
    const emailRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
        setTimeout(() => emailRef.current?.focus(), 400);
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate(AllRoutes.STUDENT_DASHBOARD);
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email.trim() || !password.trim()) {
            toast.error('Por favor completa todos los campos');
            return;
        }
        setAuthing(true);
        try {
            await login(email, password);
            navigate(AllRoutes.STUDENT_DASHBOARD);
        } catch (_) {
            // handled in AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    const handleGoogleLogin = async () => {
        setAuthing(true);
        try {
            await loginWithGoogle();
            navigate(AllRoutes.STUDENT_DASHBOARD);
        } catch (_) {
            // handled in AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    return (
        <div
            className="min-h-screen flex"
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
        >
            {/* ── Left panel — branding ── */}
            <div
                className="hidden lg:flex lg:w-1/2 xl:w-3/5 flex-col justify-between relative overflow-hidden"
                style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1a2e 100%)'}}
            >
                {/* Background texture */}
                <div className="absolute inset-0 opacity-5"
                     style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}/>

                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
                     style={{background: 'radial-gradient(circle, #f97316 0%, transparent 70%)'}}/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8"
                     style={{background: 'radial-gradient(circle, #fb923c 0%, transparent 70%)'}}/>

                {/* Nav back */}
                <div className="relative z-10 p-8">
                    <NavLink
                        to={AllRoutes.MAIN}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group"
                    >
                        <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"/>
                        <span className="text-sm">Volver al inicio</span>
                    </NavLink>
                </div>

                {/* Center content */}
                <div className="relative z-10 flex flex-col items-center px-12 py-8">
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 rounded-full opacity-30"
                             style={{background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', transform: 'scale(1.8)'}}/>
                        <img src={logo} alt="Rescate 1" className="w-28 h-28 rounded-full object-cover relative z-10 shadow-2xl ring-4 ring-orange-500/30"/>
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Rescate 1</h1>
                    <p className="text-orange-400 text-lg font-semibold mb-6">Plataforma Educativa TAMP-B</p>
                    <p className="text-slate-400 text-center text-sm leading-relaxed max-w-sm">
                        Plataforma de estudio para Técnicos en Atención Médica Prehospitalaria. Accede a tus lecciones, exámenes y recursos.
                    </p>

                    {/* Feature pills */}
                    <div className="mt-10 flex flex-col gap-3 w-full max-w-xs">
                        {[
                            {icon: '📚', label: 'Más de 44 módulos de estudio'},
                            {icon: '📊', label: 'Seguimiento de tu progreso'},
                            {icon: '🚑', label: 'Contenido AAOS actualizado'},
                        ].map((f, i) => (
                            <div key={i}
                                 className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                <span className="text-lg">{f.icon}</span>
                                <span className="text-slate-300 text-sm">{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 p-8 text-center">
                    <p className="text-slate-600 text-xs">© 2025 Rescate 1 — Todos los derechos reservados</p>
                </div>
            </div>

            {/* ── Right panel — form ── */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12"
                 style={{background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)'}}>
                <div className="w-full max-w-md">

                    {/* Mobile logo */}
                    <div className="flex lg:hidden flex-col items-center mb-8">
                        <img src={logo} alt="Rescate 1" className="w-16 h-16 rounded-full shadow-lg mb-3"/>
                        <h1 className="text-2xl font-black text-slate-800">Rescate 1</h1>
                        <p className="text-orange-500 text-sm font-semibold">TAMP-B</p>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-slate-900">Bienvenido</h2>
                        <p className="text-slate-500 mt-1">Ingresa a tu cuenta para continuar</p>
                    </div>

                    {/* Google button */}
                    <button
                        type="button"
                        id="google-login-btn"
                        disabled={authing}
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:border-orange-300 hover:bg-orange-50 hover:shadow-md transition-all duration-200 mb-6 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{cursor: authing ? 'not-allowed' : 'pointer'}}
                    >
                        {authing
                            ? <ImSpinner2 className="animate-spin w-5 h-5 text-orange-500"/>
                            : <><FcGoogle className="w-5 h-5"/> Continuar con Google</>
                        }
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-slate-200"/>
                        <span className="text-slate-400 text-xs font-medium">O ingresa con email</span>
                        <div className="flex-1 h-px bg-slate-200"/>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                                Correo electrónico
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                <input
                                    ref={emailRef}
                                    id="email"
                                    type="email"
                                    placeholder="tu@rescate.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                    style={{
                                        boxShadow: email ? '0 0 0 2px rgba(249,115,22,0.25)' : undefined,
                                        borderColor: email ? '#f97316' : undefined
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                                    Contraseña
                                </label>
                                <button
                                    type="button"
                                    className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors"
                                    onClick={() => toast.info('Contacta a tu administrador para restablecer tu contraseña')}
                                >
                                    ¿Olvidaste tu contraseña?
                                </button>
                            </div>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                    style={{
                                        boxShadow: password ? '0 0 0 2px rgba(249,115,22,0.25)' : undefined,
                                        borderColor: password ? '#f97316' : undefined
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <FiEyeOff className="w-4 h-4"/> : <FiEye className="w-4 h-4"/>}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            id="login-submit-btn"
                            type="submit"
                            disabled={authing}
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{
                                background: authing ? '#fdba74' : 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                boxShadow: authing ? 'none' : '0 4px 20px rgba(249,115,22,0.4)',
                                cursor: authing ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {authing
                                ? <><ImSpinner2 className="animate-spin w-4 h-4"/> Iniciando sesión...</>
                                : <><HiShieldCheck className="w-5 h-5"/> Iniciar sesión</>
                            }
                        </button>
                    </form>

                    {/* Register link */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        ¿No tienes cuenta?{' '}
                        <NavLink
                            to={AllRoutes.REGISTER}
                            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                        >
                            Regístrate gratis
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}