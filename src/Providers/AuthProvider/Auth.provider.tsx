import React, { useState, useEffect, ReactNode } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig';
import { AuthContext, AuthContextType } from './Auth.context';
import { tUser } from '../UserProvider/User.types';
import { toast } from 'sonner';
import { examsInitialvalues } from '../../pages/Auth/Login/Login.constants';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
              role: userData.role || 'Alumno'
            });
          } else {
            // Si no existe el documento, crear uno básico
            const basicUserData = {
              id: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || firebaseUser.email?.split('@')[0],
              role: 'Alumno',
              exams: examsInitialvalues,
              createdAt: new Date(),
              photoURL: firebaseUser.photoURL
            };

            await setDoc(doc(db, 'users', firebaseUser.uid), basicUserData);

            setUser({
              id: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              role: 'Alumno'
            });
          }
        } catch (error) {
          console.error('Error loading user data:', error);
          setUser({
            id: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            role: 'Alumno'
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
      await signInWithPopup(auth, provider);
      toast.success('Inicio de sesión con Google exitoso');
    } catch (error) {
      console.error('Google login error:', error);
      handleAuthError(error);
      throw error;
    }
  };

  const register = async (email: string, password: string, fullName: string): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el perfil de Firebase Auth
      await updateProfile(user, {
        displayName: fullName
      });

      // Crear documento del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        email: user.email,
        name: fullName,
        role: 'Alumno',
        exams: examsInitialvalues,
        createdAt: new Date(),
        photoURL: null
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
      setUser(prev => prev ? { ...prev, ...data } : null);

      toast.success('Perfil actualizado exitosamente');
    } catch (error) {
      console.error('Update profile error:', error);
      toast.error('Error al actualizar el perfil');
      throw error;
    }
  };

  const handleAuthError = (error:any) => {
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
