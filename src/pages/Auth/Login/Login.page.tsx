import * as React from "react";
import {useEffect, useState} from "react";
import {ImSpinner2} from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import logo from "../../../assets/logo.png";
import {toast} from "sonner";
import {NavLink, useNavigate} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoIosReturnLeft} from "react-icons/io";
import {useAuth} from "../../../Providers/AuthProvider";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [authing, setAuthing] = useState<boolean>(false);
    const navigate = useNavigate();
    const {login, loginWithGoogle, isAuthenticated} = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(AllRoutes.STUDENT_DASHBOARD);
            console.log('Ya estás autenticado, redirigiendo al dashboard');
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
        } catch (error) {
            // El error ya se maneja en el AuthProvider
        } finally {
            setAuthing(false);
        }
    };

    const handleGoogleLogin = async () => {
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
        <div className="bg-gray-100   rounded-lg">
            <div className="">
                <div
                    className="flex justify-center w-full h-full min-h-screen  xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <NavLink to="/">
                        <IoIosReturnLeft className="h-32 w-32 p-8 absolute cursor-pointer"/>
                    </NavLink>
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center xl:p-10">
                            <form onSubmit={handleLogin}
                                  className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
                                <NavLink
                                    to={AllRoutes.MAIN}
                                    className="flex justify-center w-full">
                                    <img src={logo}
                                         alt="Logo" className="h-20 w-20 mb-2"/>
                                </NavLink>
                                <h3 className="mb-3 text-4xl font-extrabold text-orange-500">Alumnos Rescate 1</h3>

                                <p className="mb-4 text-gray-700 ">Ingresa tu correo y contraseña</p>
                                <button
                                    type={"button"}
                                    disabled={authing}
                                    onClick={handleGoogleLogin}
                                    className="cursor-pointer shadow-lg flex items-center justify-center w-full py-4 mb-6  font-medium transition duration-300 rounded-2xl text-gray-900 bg-white   hover:bg-gray-200 focus:ring-4 focus:ring-gray-300">
                                    {authing ? <ImSpinner2 className="animate-spin w-6 h-6 text-orange-700"/> : <>
                                        <FcGoogle className="mr-2 my-auto"/>
                                        Iniciar con Google</>}

                                </button>
                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                    <p className="mx-4 text-gray-600">o</p>
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                </div>
                                <label className="mb-2 text-sm text-start text-gray-900">Correo*</label>
                                <input id="email" type="email" placeholder="tu-email@rescate.com"
                                       onChange={(event) => setEmail(event.target.value)}
                                       className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700   bg-white text-dark-gray-900 rounded-2xl"/>
                                <label className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                                <input id="password" type="password" placeholder="Tu constraseña"
                                       onChange={(event) => setPassword(event.target.value)}
                                       className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200  placeholder:text-gray-700    bg-white text-dark-gray-900 rounded-2xl"/>
                                <div className="flex flex-row justify-end mb-8">
                                    <a href="#" className="mr-4 text-sm font-medium text-orange-300">Olvidaste la
                                        contraseña?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-center flex justify-center cursor-pointer px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-orange-400 focus:ring-4 focus:ring-purple-blue-100 bg-orange-500">
                                    {authing ? <ImSpinner2
                                        className="animate-spin w-6 h-6 text-orange-700 "/> : 'Iniciar sesion'}
                                </button>

                                <div className="text-center">
                                    <span className="text-gray-600">¿No tienes cuenta? </span>
                                    <NavLink to={AllRoutes.REGISTER}
                                             className="text-orange-500 hover:text-orange-600 font-medium">
                                        Regístrate
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