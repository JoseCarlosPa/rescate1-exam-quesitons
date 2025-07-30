import {useState} from "react";
import {ImSpinner2} from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import logo from "../../../assets/logo.png";
import {toast} from "sonner";
import * as React from "react";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {useNavigate} from "react-router";
import {IoIosReturnLeft} from "react-icons/io";
import {useAuth} from "../../../Providers/AuthProvider";

export default function Register() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [authing, setAuthing] = useState<boolean>(false);
    const navigate = useNavigate();
    const { register, loginWithGoogle, isAuthenticated } = useAuth();

    // Redirigir si ya está autenticado
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate(AllRoutes.STUDENT_DASHBOARD);
        }
    }, [isAuthenticated, navigate]);

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            toast.error('Por favor completa todos los campos');
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
            toast.error("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setAuthing(true);
        try {
            await register(email, password, fullName);
            navigate(AllRoutes.STUDENT_DASHBOARD);
        } catch (error) {
            // El error ya se maneja en el AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    const handleGoogleSignup = async () => {
        setAuthing(true);
        try {
            await loginWithGoogle();
            navigate(AllRoutes.STUDENT_DASHBOARD);
        } catch (error) {
            // El error ya se maneja en el AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg">
            <div className="">
                <div className="flex justify-center w-full h-full min-h-screen xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <NavLink to="/">
                        <IoIosReturnLeft className="h-32 w-32 p-8 absolute cursor-pointer"/>
                    </NavLink>
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center xl:p-10">
                            <form onSubmit={handleRegister}
                                  className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                                <NavLink
                                    to={AllRoutes.MAIN}
                                    className="flex justify-center w-full">
                                    <img src={logo}
                                         alt="Logo" className="h-20 w-20 mb-2"/>
                                </NavLink>
                                <h3 className="mb-3 text-4xl font-extrabold text-orange-500">Crear Cuenta</h3>
                                <p className="mb-4 text-gray-700">Únete a Rescate 1</p>

                                <button
                                    type="button"
                                    disabled={authing}
                                    onClick={handleGoogleSignup}
                                    className="cursor-pointer shadow-lg flex items-center justify-center w-full py-4 mb-6 font-medium transition duration-300 rounded-2xl text-gray-900 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300">
                                    {authing ? <ImSpinner2 className="animate-spin w-6 h-6 text-orange-700"/> : <>
                                        <FcGoogle className="mr-2 my-auto"/>
                                        Registrarse con Google</>}
                                </button>

                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                    <p className="mx-4 text-gray-600">o</p>
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                </div>

                                <label className="mb-2 text-sm text-start text-gray-900">Nombre completo*</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="Tu nombre completo"
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
                                    required
                                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-4 placeholder:text-gray-700 bg-white text-dark-gray-900 rounded-2xl"
                                />

                                <label className="mb-2 text-sm text-start text-gray-900">Correo*</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tu-email@rescate.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-4 placeholder:text-gray-700 bg-white text-dark-gray-900 rounded-2xl"
                                />

                                <label className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Tu contraseña (mínimo 6 caracteres)"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    className="flex items-center w-full px-5 py-4 mb-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-white text-dark-gray-900 rounded-2xl"
                                />

                                <label className="mb-2 text-sm text-start text-gray-900">Confirmar contraseña*</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    required
                                    className="flex items-center w-full px-5 py-4 mb-6 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-white text-dark-gray-900 rounded-2xl"
                                />

                                <button
                                    type="submit"
                                    disabled={authing}
                                    className="w-full text-center flex justify-center cursor-pointer px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-orange-400 focus:ring-4 focus:ring-purple-blue-100 bg-orange-500 disabled:opacity-50">
                                    {authing ? <ImSpinner2 className="animate-spin w-6 h-6 text-white"/> : 'Crear cuenta'}
                                </button>

                                <div className="text-center">
                                    <span className="text-gray-600">¿Ya tienes cuenta? </span>
                                    <NavLink to={AllRoutes.LOGIN} className="text-orange-500 hover:text-orange-600 font-medium">
                                        Inicia sesión
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
