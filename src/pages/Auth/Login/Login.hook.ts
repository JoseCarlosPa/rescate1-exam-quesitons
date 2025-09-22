import {toast} from "sonner";

interface FirebaseError {
    code: string;
    message: string;
}

export function useLogin() {
    function handleFirebaseError(error: FirebaseError) {
        switch (error.code) {
            case 'auth/user-not-found':
                toast.error("Usuario no encontrado");
                break;
            case 'auth/wrong-password':
                toast.error("Contraseña incorrecta");
                break;
            case 'auth/invalid-email':
                toast.error("Email inválido");
                break;
            case 'auth/too-many-requests':
                toast.error("Demasiados intentos, intenta más tarde");
                break;
            case 'auth/operation-not-allowed':
                toast.error("El inicio de sesión con email y contraseña no está habilitado");
                break;
            case 'auth/invalid-credential':
                toast.error("Credenciales inválidas");
                break;
            case 'auth/invalid-api-key':
                toast.error("API key inválida");
                break;
            default:
                toast.error(error.message || "Ocurrió un error inesperado");
        }
    }

    return {
        handleFirebaseError
    }
}