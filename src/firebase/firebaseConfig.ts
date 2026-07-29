import {deleteApp, getApps, initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
getAnalytics(app);

/**
 * Crea una cuenta de Firebase Auth sin afectar la sesión activa (p. ej. la del
 * admin que la está creando desde el panel). Usa una app secundaria efímera
 * porque el SDK de cliente de Firebase Auth solo soporta una sesión a la vez
 * en la instancia principal. Envía un correo de restablecimiento de contraseña
 * para que el nuevo usuario defina la suya.
 */
export async function createManagedUser(email: string): Promise<string> {
    const secondaryAppName = `secondary-${getApps().length}-${email}`;
    const secondaryApp = initializeApp(firebaseConfig, secondaryAppName);
    try {
        const secondaryAuth = getAuth(secondaryApp);
        const tempPassword = crypto.randomUUID();
        const credential = await createUserWithEmailAndPassword(secondaryAuth, email, tempPassword);
        await sendPasswordResetEmail(secondaryAuth, email);
        await secondaryAuth.signOut();
        return credential.user.uid;
    } finally {
        await deleteApp(secondaryApp);
    }
}