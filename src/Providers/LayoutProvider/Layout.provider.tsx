import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.ts";
import {NavLink, useLocation, useNavigate} from "react-router";
import {tProvidersProps} from "./Layout.types.ts";
import {useUserContext} from "../UserProvider/User.context.tsx";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import { LayoutContext } from "./Layout.context.tsx";

export default function LayoutProvider(props: tProvidersProps) {
    const { children } = props;

    const location = useLocation();
    const { user, setUser } = useUserContext();
    const navigate = useNavigate();

    if (location.pathname === "/login") {
        return <>{children}</>;
    }

    async function closeSession() {
        try {
            await signOut(auth);
            setUser(null);
            navigate(AllRoutes.LOGIN);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }

    return (
        <LayoutContext.Provider value={{}}>
            <div className="flex flex-col min-h-screen">
                <header className="md:h-12 h-24 flex md:flex-row flex-col items-center justify-between px-4 bg-orange-400 text-white shadow-md">
                    <div className="flex items-center">
                        <span className="text-lg font-bold">Alumnos R1</span>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        {user?.id !== null && user?.id !== undefined ? (
                            <div className="flex gap-4">
                                <p className="text-center flex items-center">{user?.email}</p>
                                <button
                                    className="bg-white text-orange-400 px-4 py-2 rounded cursor-pointer hover:bg-orange-200 transition-colors"
                                    onClick={closeSession}>Cerrar sesión</button>
                            </div>
                        ) : (
                            <NavLink
                                to={AllRoutes.LOGIN}
                                className="bg-white text-orange-400 px-4 py-2 rounded"
                            >
                                Iniciar sesión
                            </NavLink>
                        )}
                    </div>
                </header>
                <main className="flex-grow">
                    {children}
                </main>
                <footer className="bg-orange-300 text-white text-center p-4">
                    <p>&copy; {new Date().getFullYear()} Página Informativa creada por los alumnos de R1. Contenido solo para fines educativos.</p>
                    <p className="text-sm mt-1">Esta información no reemplaza la formación profesional de ningun tipo.</p>
                    <div className="flex gap-2 justify-center">
                        <NavLink className="underline" target="_blank" to={AllRoutes.DISCLAMER}>Descargo de responsabilidad</NavLink>
                        <NavLink className="underline" target="_blank" to={AllRoutes.PRIVACYANDTERMS}>Aviso de privacidad</NavLink>
                    </div>
                </footer>
            </div>
        </LayoutContext.Provider>
    );
}