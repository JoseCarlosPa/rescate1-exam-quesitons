import * as React from "react";
import {useEffect, useState} from "react";
import {ImSpinner2} from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import {FiCheck, FiEye, FiEyeOff, FiLock, FiMail, FiUser, FiX} from "react-icons/fi";
import {HiArrowLeft, HiArrowRight, HiShieldCheck} from "react-icons/hi2";
import logo from "../../../assets/logo.png";
import {toast} from "sonner";
import {NavLink, useNavigate} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {useAuth} from "../../../Providers/AuthProvider";

// ── Password strength logic ──────────────────────────────────────────────────
function getStrength(pw: string) {
    let score = 0;
    const checks = {
        length: pw.length >= 8,
        upper: /[A-Z]/.test(pw),
        number: /[0-9]/.test(pw),
        symbol: /[^A-Za-z0-9]/.test(pw),
    };
    score = Object.values(checks).filter(Boolean).length;
    return {score, checks};
}

const strengthMeta = [
    {label: 'Muy débil', color: '#ef4444', bg: '#fecaca'},
    {label: 'Débil', color: '#f97316', bg: '#fed7aa'},
    {label: 'Regular', color: '#eab308', bg: '#fef08a'},
    {label: 'Buena', color: '#22c55e', bg: '#bbf7d0'},
    {label: 'Fuerte', color: '#16a34a', bg: '#86efac'},
];

export default function Register() {
    const [step, setStep] = useState<1 | 2>(1);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [authing, setAuthing] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate();
    const {register, loginWithGoogle, isAuthenticated} = useAuth();

    useEffect(() => {setMounted(true);}, []);
    useEffect(() => {
        if (isAuthenticated) navigate(AllRoutes.STUDENT_DASHBOARD);
    }, [isAuthenticated, navigate]);

    const {score, checks} = getStrength(password);
    const meta = strengthMeta[score] ?? strengthMeta[0];

    const step1Valid = fullName.trim().length >= 2 && /\S+@\S+\.\S+/.test(email);
    const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (!step1Valid) {
            toast.error('Completa correctamente nombre y correo');
            return;
        }
        setStep(2);
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password.length < 6) { toast.error("La contraseña debe tener al menos 6 caracteres"); return; }
        if (!passwordsMatch) { toast.error("Las contraseñas no coinciden"); return; }
        setAuthing(true);
        try {
            await register(email, password, fullName);
            navigate(AllRoutes.STUDENT_DASHBOARD);
        } catch (_) {
            // handled in AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    const handleGoogleSignup = async () => {
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
                className="hidden lg:flex lg:w-1/2 xl:w-2/5 flex-col justify-between relative overflow-hidden"
                style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1a2e 100%)'}}
            >
                <div className="absolute inset-0 opacity-5"
                     style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}/>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
                     style={{background: 'radial-gradient(circle, #f97316 0%, transparent 70%)'}}/>

                <div className="relative z-10 p-8">
                    <NavLink to={AllRoutes.MAIN}
                             className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"/>
                        <span className="text-sm">Volver al inicio</span>
                    </NavLink>
                </div>

                <div className="relative z-10 flex flex-col items-center px-12 py-8">
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 rounded-full opacity-30"
                             style={{background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', transform: 'scale(1.8)'}}/>
                        <img src={logo} alt="Rescate 1"
                             className="w-28 h-28 rounded-full object-cover relative z-10 shadow-2xl ring-4 ring-orange-500/30"/>
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2">Únete a Rescate 1</h1>
                    <p className="text-orange-400 text-lg font-semibold mb-6">Plataforma Educativa TAMP-B</p>
                    <p className="text-slate-400 text-center text-sm leading-relaxed max-w-sm">
                        Crea tu cuenta y accede a todo el contenido de preparación para técnicos en urgencias médicas prehospitalarias.
                    </p>

                    {/* Steps indicator */}
                    <div className="mt-10 w-full max-w-xs">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4 text-center">Proceso de registro</p>
                        <div className="flex items-center gap-2">
                            {(['Datos personales', 'Credenciales'] as const).map((label, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                            step > i + 1 ? 'bg-orange-500 text-white' :
                                                step === i + 1 ? 'bg-orange-500 text-white' : 'bg-white/10 text-slate-500'
                                        }`}>
                                            {step > i + 1 ? <FiCheck className="w-3 h-3"/> : i + 1}
                                        </div>
                                        <span className={`text-xs font-medium ${step === i + 1 ? 'text-orange-400' : 'text-slate-500'}`}>
                                            {label}
                                        </span>
                                    </div>
                                    {i < 1 && <div className="flex-1 h-px bg-white/10"/>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

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

                    {/* Stepper pills (mobile only) */}
                    <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
                        {[1, 2].map(s => (
                            <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${
                                step >= s ? 'bg-orange-500 w-8' : 'bg-slate-300 w-4'
                            }`}/>
                        ))}
                        <span className="text-xs text-slate-500 ml-1">Paso {step} de 2</span>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-slate-900">
                            {step === 1 ? 'Crear cuenta' : 'Elige tu contraseña'}
                        </h2>
                        <p className="text-slate-500 mt-1">
                            {step === 1 ? 'Ingresa tus datos personales' : 'Asegura tu cuenta con una contraseña fuerte'}
                        </p>
                    </div>

                    {/* ── STEP 1 ── */}
                    {step === 1 && (
                        <>
                            {/* Google */}
                            <button
                                type="button"
                                id="google-register-btn"
                                disabled={authing}
                                onClick={handleGoogleSignup}
                                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:border-orange-300 hover:bg-orange-50 hover:shadow-md transition-all duration-200 mb-6 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {authing
                                    ? <ImSpinner2 className="animate-spin w-5 h-5 text-orange-500"/>
                                    : <><FcGoogle className="w-5 h-5"/> Registrarse con Google</>
                                }
                            </button>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex-1 h-px bg-slate-200"/>
                                <span className="text-slate-400 text-xs font-medium">O con email</span>
                                <div className="flex-1 h-px bg-slate-200"/>
                            </div>

                            <form onSubmit={handleNextStep} className="space-y-4">
                                {/* Full name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="fullName">
                                        Nombre completo
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="Tu nombre completo"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full pl-11 pr-10 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                            style={{
                                                borderColor: fullName.trim().length >= 2 ? '#22c55e' : fullName ? '#ef4444' : undefined,
                                                boxShadow: fullName.trim().length >= 2 ? '0 0 0 2px rgba(34,197,94,0.2)' : undefined
                                            }}
                                        />
                                        {fullName.trim().length >= 2 &&
                                            <FiCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4"/>}
                                    </div>
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                                        Correo electrónico
                                    </label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="tu@rescate.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-11 pr-10 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                            style={{
                                                borderColor: /\S+@\S+\.\S+/.test(email) ? '#22c55e' : email ? '#ef4444' : undefined,
                                                boxShadow: /\S+@\S+\.\S+/.test(email) ? '0 0 0 2px rgba(34,197,94,0.2)' : undefined
                                            }}
                                        />
                                        {/\S+@\S+\.\S+/.test(email)
                                            ? <FiCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4"/>
                                            : email && <FiX className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 w-4 h-4"/>
                                        }
                                    </div>
                                </div>

                                <button
                                    id="step1-next-btn"
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-200 mt-2"
                                    style={{
                                        background: step1Valid ? 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' : '#cbd5e1',
                                        boxShadow: step1Valid ? '0 4px 20px rgba(249,115,22,0.4)' : 'none',
                                        cursor: step1Valid ? 'pointer' : 'not-allowed',
                                    }}
                                >
                                    Continuar <HiArrowRight className="w-4 h-4"/>
                                </button>
                            </form>
                        </>
                    )}

                    {/* ── STEP 2 ── */}
                    {step === 2 && (
                        <form onSubmit={handleRegister} className="space-y-4">
                            {/* Back */}
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 text-sm font-medium mb-2 transition-colors group"
                            >
                                <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"/>
                                Volver
                            </button>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="password">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Mínimo 6 caracteres"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-11 pr-12 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                        style={{
                                            borderColor: password ? meta.color : undefined,
                                            boxShadow: password ? `0 0 0 2px ${meta.color}33` : undefined
                                        }}
                                    />
                                    <button type="button" onClick={() => setShowPassword(v => !v)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                        {showPassword ? <FiEyeOff className="w-4 h-4"/> : <FiEye className="w-4 h-4"/>}
                                    </button>
                                </div>

                                {/* Strength bar */}
                                {password && (
                                    <div className="mt-2">
                                        <div className="flex gap-1 mb-1">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="flex-1 h-1.5 rounded-full transition-all duration-300"
                                                     style={{background: score >= i ? meta.color : '#e2e8f0'}}/>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold" style={{color: meta.color}}>{meta.label}</span>
                                            <div className="flex gap-3">
                                                {Object.entries(checks).map(([key, ok]) => (
                                                    <span key={key} className={`text-xs flex items-center gap-0.5 ${ok ? 'text-green-600' : 'text-slate-400'}`}>
                                                        {ok ? <FiCheck className="w-3 h-3"/> : <FiX className="w-3 h-3"/>}
                                                        {key === 'length' ? '8+' : key === 'upper' ? 'A-Z' : key === 'number' ? '0-9' : '#'}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Confirm password */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="confirmPassword">
                                    Confirmar contraseña
                                </label>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"/>
                                    <input
                                        id="confirmPassword"
                                        type={showConfirm ? "text" : "password"}
                                        placeholder="Repite tu contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full pl-11 pr-12 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200"
                                        style={{
                                            borderColor: confirmPassword ? (passwordsMatch ? '#22c55e' : '#ef4444') : undefined,
                                            boxShadow: confirmPassword ? (passwordsMatch ? '0 0 0 2px rgba(34,197,94,0.2)' : '0 0 0 2px rgba(239,68,68,0.2)') : undefined
                                        }}
                                    />
                                    <button type="button" onClick={() => setShowConfirm(v => !v)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                        {showConfirm ? <FiEyeOff className="w-4 h-4"/> : <FiEye className="w-4 h-4"/>}
                                    </button>
                                </div>
                                {confirmPassword && !passwordsMatch && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <FiX className="w-3 h-3"/> Las contraseñas no coinciden
                                    </p>
                                )}
                                {passwordsMatch && (
                                    <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                                        <FiCheck className="w-3 h-3"/> Las contraseñas coinciden
                                    </p>
                                )}
                            </div>

                            <button
                                id="register-submit-btn"
                                type="submit"
                                disabled={authing || !passwordsMatch || password.length < 6}
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                    boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
                                }}
                            >
                                {authing
                                    ? <><ImSpinner2 className="animate-spin w-4 h-4"/> Creando cuenta...</>
                                    : <><HiShieldCheck className="w-5 h-5"/> Crear cuenta</>
                                }
                            </button>
                        </form>
                    )}

                    {/* Login link */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        ¿Ya tienes cuenta?{' '}
                        <NavLink to={AllRoutes.LOGIN}
                                 className="text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                            Inicia sesión
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}
