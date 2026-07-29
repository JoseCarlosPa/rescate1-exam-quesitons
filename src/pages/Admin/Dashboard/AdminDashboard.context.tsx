import {createContext, ReactNode, useContext} from "react";
import useAdminDashboard from "./AdminDashboard.hook";

// Derivamos el tipo directamente del hook para que siempre esté sincronizado
type AdminDashboardContextType = ReturnType<typeof useAdminDashboard>;

const AdminDashboardContext = createContext<AdminDashboardContextType | null>(null);

/**
 * Proveedor que instancia el hook UNA SOLA VEZ y comparte su estado
 * con todos los sub-componentes del panel admin.
 *
 * Sin este provider, cada sub-componente que llama a `useAdminDashboard()`
 * crea una instancia completamente separada con estado vacío propio,
 * lo que causa que los datos (elementos, usuarios, etc.) nunca se propaguen.
 */
export function AdminDashboardProvider({children}: { children: ReactNode }) {
    const value = useAdminDashboard();
    return (
        <AdminDashboardContext.Provider value={value}>
            {children}
        </AdminDashboardContext.Provider>
    );
}

/**
 * Hook para consumir el contexto del panel admin.
 * Debe usarse dentro de un componente envuelto por AdminDashboardProvider.
 */
export function useAdminDashboardContext(): AdminDashboardContextType {
    const ctx = useContext(AdminDashboardContext);
    if (!ctx) {
        throw new Error("useAdminDashboardContext debe usarse dentro de AdminDashboardProvider");
    }
    return ctx;
}
