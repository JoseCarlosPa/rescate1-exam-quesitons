import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../../firebase/firebaseConfig';
import { updatePassword, updateProfile } from 'firebase/auth';
import { NavLink } from 'react-router';
import {
  FaUser,
  FaCamera,
  FaSave,
  FaArrowLeft,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { Timestamp } from 'firebase/firestore';
import {useAuth} from "../../../Providers/AuthProvider";

interface StudentData {
  id: string;
  name: string;
  email: string;
  role: string;
  photoURL?: string;
  createdAt: Timestamp;
}

export default function StudentProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fetchStudentData = useCallback(async () => {
    if (!user?.id) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', user.id));
      if (userDoc.exists()) {
        const data = userDoc.data() as StudentData;
        setStudentData(data);
        setName(data.name || '');
        setPhotoURL(data.photoURL || '');
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
      toast.error('Error al cargar los datos del estudiante');
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    if (!user) {
      navigate(AllRoutes.LOGIN);
      return;
    }

    fetchStudentData();
  }, [user, navigate, fetchStudentData]);

  const handleSaveProfile = async () => {
    if (!user?.id) return;

    if (name.trim().length < 2) {
      toast.error('El nombre debe tener al menos 2 caracteres');
      return;
    }

    if (showPasswordFields) {
      if (newPassword.length < 6) {
        toast.error('La nueva contraseña debe tener al menos 6 caracteres');
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        return;
      }
    }

    setSaving(true);

    try {
      // Actualizar datos en Firestore
      await updateDoc(doc(db, 'users', user.id), {
        name: name.trim(),
        photoURL: photoURL.trim() || null
      });

      // Actualizar perfil de Firebase Auth si es necesario
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name.trim(),
          photoURL: photoURL.trim() || null
        });

        // Actualizar contraseña si se proporcionó
        if (showPasswordFields && newPassword) {
          await updatePassword(auth.currentUser, newPassword);
        }
      }


      // Actualizar estado local
      setStudentData(prev => prev ? {
        ...prev,
        name: name.trim(),
        photoURL: photoURL.trim() || undefined
      } : null);

      // Limpiar campos de contraseña
      setNewPassword('');
      setConfirmPassword('');
      setShowPasswordFields(false);

      toast.success('Perfil actualizado exitosamente');
    } catch (error) {
      console.error('Error updating profile:', error);
      const firebaseError = error as { code?: string; message?: string };
      if (firebaseError.code === 'auth/requires-recent-login') {
        toast.error('Para cambiar la contraseña, necesitas iniciar sesión nuevamente');
      } else {
        toast.error('Error al actualizar el perfil: ' + (firebaseError.message || 'Error desconocido'));
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <NavLink
                to={AllRoutes.STUDENT_DASHBOARD}
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <FaArrowLeft className="text-xl" />
              </NavLink>
              <h1 className="text-xl font-semibold text-gray-900">Mi Perfil</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            {/* Profile Picture Section */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                {photoURL ? (
                  <img
                    src={photoURL}
                    alt="Foto de perfil"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.classList.remove('hidden');
                      }
                    }}
                  />
                ) : null}
                <div className={`w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center border-4 border-gray-200 ${photoURL ? 'hidden' : ''}`}>
                  <FaUser className="text-white text-2xl" />
                </div>
                <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-2 cursor-pointer hover:bg-orange-600 transition-colors">
                  <FaCamera className="text-white text-sm" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{studentData?.name || 'Sin nombre'}</h2>
                <p className="text-gray-600">{studentData?.email}</p>
                <p className="text-sm text-gray-500">Estudiante desde {studentData?.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={studentData?.email || ''}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">El correo electrónico no se puede modificar</p>
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL de foto de perfil
                </label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="https://ejemplo.com/mi-foto.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">Proporciona una URL válida de tu foto de perfil</p>
              </div>

              {/* Password Section */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Cambiar contraseña</h3>
                  <button
                    type="button"
                    onClick={() => setShowPasswordFields(!showPasswordFields)}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                  >
                    {showPasswordFields ? 'Cancelar' : 'Cambiar contraseña'}
                  </button>
                </div>

                {showPasswordFields && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nueva contraseña
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="Mínimo 6 caracteres"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmar nueva contraseña
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="Repite la nueva contraseña"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6 border-t">
                <button
                  onClick={handleSaveProfile}
                  disabled={saving}
                  className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {saving ? (
                    <ImSpinner2 className="animate-spin" />
                  ) : (
                    <FaSave />
                  )}
                  <span>{saving ? 'Guardando...' : 'Guardar cambios'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
