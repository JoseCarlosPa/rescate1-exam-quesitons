import {NavLink, useLocation} from "react-router";
import {tProvidersProps} from "./Layout.types.ts";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import { LayoutContext } from "./Layout.context.tsx";
import { useAuth } from "../AuthProvider";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function LayoutProvider(props: tProvidersProps) {
    const { children } = props;
    const location = useLocation();
    const { user, isAuthenticated, logout } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // No mostrar header en páginas de autenticación
    if (location.pathname === "/login" || location.pathname === "/register") {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        try {
            await logout();
            setShowUserMenu(false);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <LayoutContext.Provider value={{}}>
            <div className="flex flex-col min-h-screen">
                <header className="h-16 flex items-center justify-between px-4 bg-orange-500 text-white shadow-md">
                    <div className="flex items-center">
                        <NavLink to={AllRoutes.MAIN} className="text-xl font-bold hover:text-orange-200 transition-colors">
                            Rescate 1
                        </NavLink>
                    </div>

                    <div className="flex items-center">
                        {isAuthenticated && user ? (
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-lg transition-colors"
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="Perfil"
                                            className="w-6 h-6 rounded-full"
                                        />
                                    ) : (
                                        <FaUser className="w-4 h-4" />
                                    )}
                                    <div className="hidden md:flex flex-col items-start">
                                        <span className="text-sm font-medium">
                                            {user.name || user.email?.split('@')[0] || 'Usuario'}
                                        </span>
                                        <span className="text-xs text-orange-200">
                                            {user.email}
                                        </span>
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                        <NavLink
                                            to={AllRoutes.STUDENT_DASHBOARD}
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <FaUser className="w-4 h-4" />
                                            <span>Mi Panel</span>
                                        </NavLink>
                                        <NavLink
                                            to={AllRoutes.STUDENT_PROFILE}
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <FaCog className="w-4 h-4" />
                                            <span>Configuración</span>
                                        </NavLink>
                                        <hr className="my-1" />
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors text-left"
                                        >
                                            <FaSignOutAlt className="w-4 h-4" />
                                            <span>Cerrar sesión</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <NavLink
                                    to={AllRoutes.LOGIN}
                                    className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors"
                                >
                                    Iniciar sesión
                                </NavLink>
                                <NavLink
                                    to={AllRoutes.REGISTER}
                                    className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                                >
                                    Registrarse
                                </NavLink>
                            </div>
                        )}
                    </div>
                </header>

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </LayoutContext.Provider>
    );
}