import {Navigate, useLocation} from "react-router";
import {useAuth} from "../../Providers/AuthProvider";
import {canAccessMainContent, canAccessResources} from "../../utils/permissions";
import {AllRoutes} from "./Router.constants";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

interface ProtectedRouteProps {
    children: React.ReactNode;
    /** Requiere un rol con acceso completo (Alumno, Elemento, Moderador, Admin) */
    requireMainAccess?: boolean;
    /** Requiere que el usuario tenga resourcesAccess=true en Firestore */
    requireResourcesAccess?: boolean;
    /** Requiere que el usuario tenga role === 'Admin' */
    requireAdmin?: boolean;
    /** Requiere que el usuario tenga role === 'Elemento' */
    requireElemento?: boolean;
}

/**
 * Componente guardia de rutas que verifica permisos antes de renderizar.
 *
 * - requireMainAccess: bloquea a usuarios "Sin asignar" y no autenticados.
 * - requireResourcesAccess: bloquea a cualquiera sin el flag resourcesAccess=true.
 *
 * En ambos casos, redirige a la página principal (/).
 */
export default function ProtectedRoute({
    children,
    requireMainAccess = false,
    requireResourcesAccess = false,
    requireAdmin = false,
    requireElemento = false,
}: ProtectedRouteProps) {
    const {user, loading} = useAuth();
    const location = useLocation();

    // Mientras se carga el estado de autenticación, mostrar spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <AiOutlineLoading3Quarters className="animate-spin h-12 w-12 text-orange-500"/>
            </div>
        );
    }

    // Verificar acceso a Recursos (más restrictivo — requiere flag explícito)
    if (requireResourcesAccess && !canAccessResources(user)) {
        return (
            <Navigate
                to={AllRoutes.MAIN}
                replace
                state={{from: location, reason: 'resources'}}
            />
        );
    }

    // Verificar acceso al contenido principal (bloquea Sin asignar y no logueados)
    if (requireMainAccess && !canAccessMainContent(user?.role ?? null)) {
        return (
            <Navigate
                to={AllRoutes.MAIN}
                replace
                state={{from: location, reason: 'role'}}
            />
        );
    }

    // Verificar rol de administrador (paneles administrativos)
    if (requireAdmin && user?.role !== 'Admin') {
        return (
            <Navigate
                to={AllRoutes.MAIN}
                replace
                state={{from: location, reason: 'admin'}}
            />
        );
    }

    // Verificar rol de Elemento (secciones de guardia)
    if (requireElemento && user?.role !== 'Elemento') {
        return (
            <Navigate
                to={AllRoutes.MAIN}
                replace
                state={{from: location, reason: 'elemento'}}
            />
        );
    }

    return <>{children}</>;
}
