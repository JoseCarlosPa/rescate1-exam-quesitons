import React, {ReactNode, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    User
} from 'firebase/auth';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {auth, db} from '../../firebase/firebaseConfig';
import {AuthContext, AuthContextType} from './Auth.context';
import {toast} from 'sonner';
import {tUser} from "./Auth.types.ts";
import {ExamData, examNames} from "../../pages/Student/Grades/StudentGrades.page.tsx";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<tUser | null>(null);
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Escuchar cambios de estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setFirebaseUser(firebaseUser);
                // Obtener datos adicionales del usuario desde Firestore
                try {
                    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser({
                            id: firebaseUser.uid,
                            email: firebaseUser.email,
                            name: userData.name || firebaseUser.displayName,
                            photoURL: userData.photoURL || firebaseUser.photoURL,
                            role: userData.role || 'Alumno',
                            createdAt: new Date(),
                        });
                    } else {
                        // Si no existe el documento, crear uno básico con exámenes
                        const initialExams = await createInitialExams();

                        const basicUserData = {
                            id: firebaseUser.uid,
                            email: firebaseUser.email,
                            name: firebaseUser.displayName || firebaseUser.email?.split('@')[0],
                            role: 'Alumno',
                            createdAt: new Date(),
                            photoURL: firebaseUser.photoURL,
                            exams: initialExams
                        };

                        await setDoc(doc(db, 'users', firebaseUser.uid), basicUserData);

                        setUser({
                            id: firebaseUser.uid,
                            email: firebaseUser.email,
                            name: firebaseUser.displayName,
                            photoURL: firebaseUser.photoURL,
                            role: 'Alumno',
                            createdAt: new Date(),
                        });
                    }
                } catch (error) {
                    console.error('Error loading user data:', error);
                    setUser({
                        id: firebaseUser.uid,
                        email: firebaseUser.email,
                        name: firebaseUser.displayName,
                        photoURL: firebaseUser.photoURL,
                        role: 'Alumno',
                        createdAt: new Date(),
                    });
                }
            } else {
                setFirebaseUser(null);
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Inicio de sesión exitoso');
        } catch (error) {
            console.error('Login error:', error);
            handleAuthError(error);
            throw error;
        }
    };

    const loginWithGoogle = async (): Promise<void> => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Verificar si es un usuario nuevo (sin documento en Firestore)
            const userDoc = await getDoc(doc(db, 'users', user.uid));

            if (!userDoc.exists()) {
                // Es un usuario nuevo, crear documento con exámenes
                const initialExams = await createInitialExams();

                await setDoc(doc(db, 'users', user.uid), {
                    id: user.uid,
                    email: user.email,
                    name: user.displayName || user.email?.split('@')[0],
                    role: 'Alumno',
                    createdAt: new Date(),
                    photoURL: user.photoURL,
                    exams: initialExams
                });
            } else {
                // Usuario existente, verificar si tiene exámenes
                const userData = userDoc.data();
                if (!userData.exams) {
                    // Agregar exámenes a usuario existente que no los tiene
                    const initialExams = await createInitialExams();
                    await updateDoc(doc(db, 'users', user.uid), {
                        exams: initialExams
                    });
                }
            }

            toast.success('Inicio de sesión con Google exitoso');
        } catch (error) {
            console.error('Google login error:', error);
            handleAuthError(error);
            throw error;
        }
    };

    // Función para crear la colección inicial de exámenes
    const createInitialExams = async (): Promise<Record<string, ExamData>> => {
        const initialExams: Record<string, ExamData> = {};

        // Crear un examen inicial para cada uno de los 44 exámenes
        Object.keys(examNames).forEach((examId) => {
            initialExams[examId] = {
                completed: false,
                score: 0,
                totalQuestions: 0,
                correctAnswers: 0
            };
        });

        return initialExams;
    };

    const register = async (email: string, password: string, fullName: string): Promise<void> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Actualizar el perfil de Firebase Auth
            await updateProfile(user, {
                displayName: fullName
            });

            // Crear la colección inicial de exámenes
            const initialExams = await createInitialExams();

            // Crear documento del usuario en Firestore con la colección de exámenes
            await setDoc(doc(db, 'users', user.uid), {
                id: user.uid,
                email: user.email,
                name: fullName,
                role: 'Alumno',
                createdAt: new Date(),
                photoURL: null,
                exams: initialExams
            });

            toast.success('Cuenta creada exitosamente');
        } catch (error) {
            console.error('Register error:', error);
            handleAuthError(error);
            throw error;
        }
    };

    const logout = async (): Promise<void> => {
        try {
            await signOut(auth);
            toast.success('Sesión cerrada exitosamente');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Error al cerrar sesión');
            throw error;
        }
    };

    const updateUserProfile = async (data: Partial<tUser>): Promise<void> => {
        if (!user?.id) throw new Error('No user logged in');

        try {
            // Actualizar en Firestore
            await updateDoc(doc(db, 'users', user.id), data);

            // Actualizar en Firebase Auth si es necesario
            if (firebaseUser && (data.name || data.photoURL)) {
                await updateProfile(firebaseUser, {
                    displayName: data.name || firebaseUser.displayName,
                    photoURL: data.photoURL || firebaseUser.photoURL
                });
            }

            // Actualizar estado local
            setUser(prev => prev ? {...prev, ...data} : null);

            toast.success('Perfil actualizado exitosamente');
        } catch (error) {
            console.error('Update profile error:', error);
            toast.error('Error al actualizar el perfil');
            throw error;
        }
    };

    const handleAuthError = (error: any) => {
        switch (error.code) {
            case 'auth/user-not-found':
                toast.error('Usuario no encontrado');
                break;
            case 'auth/wrong-password':
                toast.error('Contraseña incorrecta');
                break;
            case 'auth/email-already-in-use':
                toast.error('Este correo ya está registrado');
                break;
            case 'auth/weak-password':
                toast.error('La contraseña es muy débil');
                break;
            case 'auth/invalid-email':
                toast.error('Correo electrónico inválido');
                break;
            case 'auth/too-many-requests':
                toast.error('Demasiados intentos. Intenta más tarde');
                break;
            case 'auth/requires-recent-login':
                toast.error('Para esta acción necesitas iniciar sesión nuevamente');
                break;
            default:
                toast.error('Error de autenticación: ' + (error.message || 'Error desconocido'));
        }
    };

    const value: AuthContextType = {
        user,
        firebaseUser,
        loading,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        register,
        logout,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
