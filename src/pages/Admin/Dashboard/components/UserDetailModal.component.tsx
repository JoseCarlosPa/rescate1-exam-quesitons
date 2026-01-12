import {
    FaCalendar,
    FaChartLine,
    FaCheck,
    FaClipboardList,
    FaComments,
    FaEdit,
    FaEnvelope,
    FaGraduationCap,
    FaStar,
    FaTasks,
    FaTimes,
    FaTimes as FaCancel,
    FaTrophy,
    FaUser
} from "react-icons/fa";
import {UserDetail} from "../AdminDashboard.types";
import {useState} from "react";
import {examNamesExported} from "../../../../constants/exam.constants.ts";

interface UserDetailModalProps {
    user: UserDetail | null;
    onClose: () => void;
    isOpen: boolean;
    onUpdateAttendance?: (userId: string, attendance: number) => Promise<void>;
}

export default function UserDetailModal({user, onClose, isOpen, onUpdateAttendance}: UserDetailModalProps) {
    const [isEditingAttendance, setIsEditingAttendance] = useState(false);
    const [newAttendance, setNewAttendance] = useState(user?.attendance || 0);

    if (!isOpen || !user) return null;

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600";
        if (score >= 80) return "text-blue-600";
        if (score >= 70) return "text-yellow-600";
        return "text-red-600";
    };

    const getScoreBackground = (score: number) => {
        if (score >= 90) return "bg-green-100";
        if (score >= 80) return "bg-blue-100";
        if (score >= 70) return "bg-yellow-100";
        return "bg-red-100";
    };

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'Admin':
                return 'bg-red-100 text-red-800';
            case 'Moderador':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    const handleAttendanceChange = () => {
        // Aquí puedes agregar la lógica para guardar el nuevo porcentaje de asistencia
        console.log("Nuevo porcentaje de asistencia:", newAttendance);
        if (onUpdateAttendance) {
            onUpdateAttendance(user.id, newAttendance)
                .then(() => {
                    setIsEditingAttendance(false);
                })
                .catch((error) => {
                    console.error("Error al actualizar la asistencia:", error);
                });
        } else {
            setIsEditingAttendance(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600/50 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div
                    className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
                    <h2 className="text-2xl font-bold text-gray-900">Ficha del Usuario</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <FaTimes size={20}/>
                    </button>
                </div>

                <div className="p-6">
                    {/* User Info Card */}
                    <div
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-200">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-500 rounded-full p-3 mr-4">
                                <FaUser className="text-white text-xl"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900">{user.name || 'Sin nombre'}</h3>
                                <div className="flex items-center mt-1">
                                    <FaEnvelope className="text-gray-500 mr-2"/>
                                    <span className="text-gray-600">{user.email}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user.role)}`}>
                                    {user.role}
                                </span>
                                <div className="text-sm text-gray-500 mt-2 flex items-center justify-end">
                                    <FaCalendar className="mr-1"/>
                                    Registro: {user.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <FaClipboardList className="text-blue-600"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Exámenes Totales</p>
                                    <p className="text-xl font-bold text-gray-900">{user.totalExams}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <FaTrophy className="text-green-600"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Completados</p>
                                    <p className="text-xl font-bold text-gray-900">{user.completedExams}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${getScoreBackground(user.averageScore)}`}>
                            <div className="flex items-center">
                                <div className={`p-2 rounded-full ${getScoreBackground(user.averageScore)}`}>
                                    <FaGraduationCap className={getScoreColor(user.averageScore)}/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Promedio</p>
                                    <p className={`text-xl font-bold ${getScoreColor(user.averageScore)}`}>
                                        {user.averageScore}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center">
                                <div className="p-2 bg-purple-100 rounded-full">
                                    <FaComments className="text-purple-600"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Mensajes Foro</p>
                                    <p className="text-xl font-bold text-gray-900">{user.forumMessages?.length || 0}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center">
                                <div className="p-2 bg-orange-100 rounded-full">
                                    <FaTasks className="text-orange-600"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Tareas Entregadas</p>
                                    <p className="text-xl font-bold text-gray-900">{user.taskSubmissions?.length || 0}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${user.finalGrade ? getScoreBackground(user.finalGrade) : ''}`}>
                            <div className="flex items-center">
                                <div
                                    className={`p-2 rounded-full ${user.finalGrade ? getScoreBackground(user.finalGrade) : 'bg-gray-100'}`}>
                                    <FaStar
                                        className={user.finalGrade ? getScoreColor(user.finalGrade) : 'text-gray-400'}/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Promedio Final</p>
                                    <p className={`text-xl font-bold ${user.finalGrade ? getScoreColor(user.finalGrade) : 'text-gray-400'}`}>
                                        {user.finalGrade || 'Sin calcular'}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Exams Section */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <FaChartLine className="mr-2 text-blue-500"/>
                                    Historial de Exámenes
                                </h4>
                            </div>
                            <div className="p-6">
                                {user.exams && Object.keys(user.exams).length > 0 ? (
                                    <div className="space-y-3 max-h-96 overflow-y-auto">
                                        {Object.entries(user.exams).map(([examId, examData], index) => {
                                            // Obtener el nombre del examen: primero desde examData.name, luego desde el mapeo
                                            const displayName = examData.name || examNamesExported[parseInt(examId)] || `Examen #${examId}`;

                                            return (
                                                <div key={index}
                                                     className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="flex-1">
                                                        <p className="font-medium text-gray-900 text-sm">{displayName}</p>
                                                        <p className="text-xs text-gray-500">
                                                            Estado: {examData.completed ? 'Completado' : 'Pendiente'}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        {examData.completed ? (
                                                            <span
                                                                className={`text-sm font-bold ${getScoreColor(examData.score)}`}>
                                                                {examData.score}%
                                                            </span>
                                                        ) : (
                                                            <span className="text-gray-400 text-sm">-</span>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <FaClipboardList className="mx-auto text-gray-300 text-3xl mb-3"/>
                                        <p className="text-gray-500 text-sm">No hay exámenes registrados</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tasks Section */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <FaTasks className="mr-2 text-orange-500"/>
                                    Entregas de Tareas
                                </h4>
                            </div>
                            <div className="p-6">
                                {user.taskSubmissions && user.taskSubmissions.length > 0 ? (
                                    <div className="space-y-3 max-h-96 overflow-y-auto">
                                        {user.taskSubmissions.map((submission, index) => (
                                            <div key={index}
                                                 className="p-3 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex-1">
                                                        <p className="font-medium text-gray-900 text-sm">Tarea
                                                            #{submission.taskId.slice(-6)}</p>
                                                        <p className="text-xs text-gray-500">
                                                            Entregado: {submission.submittedAt?.toDate?.()?.toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        {submission.isGraded ? (
                                                            <span
                                                                className={`text-sm font-bold ${getScoreColor(submission.score || 0)}`}>
                                                                {submission.score}/100
                                                            </span>
                                                        ) : (
                                                            <span
                                                                className="text-yellow-600 text-xs bg-yellow-100 px-2 py-1 rounded-full">
                                                                Pendiente
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                {submission.isGraded && submission.feedback && (
                                                    <div className="mt-2">
                                                        <p className="text-xs text-gray-600 italic">"{submission.feedback}"</p>
                                                    </div>
                                                )}
                                                <div className="mt-2">
                                                    <a
                                                        href={submission.submissionLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 text-xs break-all"
                                                    >
                                                        Ver entrega →
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <FaTasks className="mx-auto text-gray-300 text-3xl mb-3"/>
                                        <p className="text-gray-500 text-sm">No hay tareas entregadas</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Forum Activity Section */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <FaComments className="mr-2 text-green-500"/>
                                    Actividad en Foro
                                </h4>
                            </div>
                            <div className="p-6">
                                {user.forumMessages && user.forumMessages.length > 0 ? (
                                    <div className="space-y-3 max-h-96 overflow-y-auto">
                                        {user.forumMessages.slice(0, 5).map((message, index) => (
                                            <div key={index}
                                                 className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">
                                                <div className="flex items-start justify-between mb-2">
                                                    <p className="font-medium text-gray-900 text-sm">{message.pagina}</p>
                                                    <span className="text-xs text-gray-500">
                                                        {message.timestamp?.toDate?.()?.toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 text-sm line-clamp-2">
                                                    {message.contenido}
                                                </p>
                                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                                    <span
                                                        className={`px-2 py-1 rounded-full ${message.isThread ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                        {message.isThread ? 'Hilo principal' : 'Respuesta'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        {user.forumMessages.length > 5 && (
                                            <div className="text-center text-xs text-gray-500 py-2">
                                                Y {user.forumMessages.length - 5} mensajes más...
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <FaComments className="mx-auto text-gray-300 text-3xl mb-3"/>
                                        <p className="text-gray-500 text-sm">No hay actividad en el foro</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Performance Analysis */}
                    {user.completedExams > 0 && (
                        <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-900">Análisis de Rendimiento</h4>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBackground(user.averageScore)} mb-3`}>
                                            <span className={`text-xl font-bold ${getScoreColor(user.averageScore)}`}>
                                                {user.averageScore}%
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600">Promedio Exámenes</p>
                                        <p className="text-xs text-gray-500">
                                            {user.averageScore >= 85 ? 'Excelente rendimiento' :
                                                user.averageScore >= 70 ? 'Buen rendimiento' :
                                                    'Necesita mejorar'}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-3">
                                            <span className="text-xl font-bold text-orange-600">
                                                {user.taskSubmissions && user.taskSubmissions.length > 0
                                                    ? Math.round(user.taskSubmissions.filter(t => t.isGraded).reduce((sum, t) => sum + (t.score || 0), 0) / user.taskSubmissions.filter(t => t.isGraded).length) || 0
                                                    : 0}%
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600">Promedio Tareas</p>
                                        <p className="text-xs text-gray-500">
                                            {user.taskSubmissions?.filter(t => t.isGraded).length || 0} calificadas
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                                            <span className="text-xl font-bold text-green-600">
                                                {user.attendance || 0}%
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600">Asistencia {user.attendance}</p>
                                        <div className="flex items-center justify-center mt-1">
                                            {!isEditingAttendance ? (
                                                <div className="flex items-center">
                                                    <p className="text-xs text-gray-500 mr-2">
                                                        {(user.attendance || 0) >= 90 ? 'Excelente' :
                                                            (user.attendance || 0) >= 80 ? 'Buena' :
                                                                (user.attendance || 0) >= 70 ? 'Regular' : 'Baja'}
                                                    </p>
                                                    <button
                                                        onClick={() => {
                                                            setIsEditingAttendance(true);
                                                            setNewAttendance(user.attendance || 0);
                                                        }}
                                                        className="text-gray-400 hover:text-blue-600 transition-colors"
                                                        title="Editar asistencia"
                                                    >
                                                        <FaEdit size={12}/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1">
                                                    <input
                                                        type="number"
                                                        value={newAttendance}
                                                        onChange={(e) => setNewAttendance(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                                                        className="w-12 h-6 text-xs border border-gray-300 rounded px-1 text-center"
                                                        min="0"
                                                        max="100"
                                                        autoFocus
                                                    />
                                                    <span className="text-xs text-gray-500">%</span>
                                                    <button
                                                        onClick={handleAttendanceChange}
                                                        className="text-green-600 hover:text-green-700 transition-colors ml-1"
                                                        title="Guardar"
                                                    >
                                                        <FaCheck size={10}/>
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setIsEditingAttendance(false);
                                                            setNewAttendance(user.attendance || 0);
                                                        }}
                                                        className="text-red-600 hover:text-red-700 transition-colors"
                                                        title="Cancelar"
                                                    >
                                                        <FaCancel size={10}/>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${user.finalGrade ? getScoreBackground(user.finalGrade) : 'bg-gray-100'} mb-3`}>
                                            <span
                                                className={`text-xl font-bold ${user.finalGrade ? getScoreColor(user.finalGrade) : 'text-gray-400'}`}>
                                                {user.finalGrade || 0}%
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600">Calificación Final</p>
                                        <p className="text-xs text-gray-500">Ponderada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Grade Breakdown */}
                    {user.finalGrade && (
                        <div
                            className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg shadow-sm">
                            <div className="px-6 py-4 border-b border-indigo-200">
                                <h4 className="text-lg font-semibold text-gray-900">Desglose de Calificación Final</h4>
                                <p className="text-sm text-gray-600">Cálculo basado en pesos ponderados</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">Exámenes (70%)</span>
                                            <span
                                                className="text-lg font-bold text-blue-600">{user.averageScore}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{width: `${user.averageScore}%`}}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Contribución: {Math.round((user.averageScore * 70) / 100)} puntos
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">Tareas (20%)</span>
                                            <span className="text-lg font-bold text-orange-600">
                                                {user.taskSubmissions && user.taskSubmissions.length > 0
                                                    ? Math.round(user.taskSubmissions.filter(t => t.isGraded).reduce((sum, t) => sum + (t.score || 0), 0) / user.taskSubmissions.filter(t => t.isGraded).length) || 0
                                                    : 0}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-orange-600 h-2 rounded-full"
                                                style={{
                                                    width: `${user.taskSubmissions && user.taskSubmissions.length > 0
                                                        ? Math.round(user.taskSubmissions.filter(t => t.isGraded).reduce((sum, t) => sum + (t.score || 0), 0) / user.taskSubmissions.filter(t => t.isGraded).length) || 0
                                                        : 0}%`
                                                }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Contribución: {Math.round(((user.taskSubmissions && user.taskSubmissions.length > 0
                                            ? Math.round(user.taskSubmissions.filter(t => t.isGraded).reduce((sum, t) => sum + (t.score || 0), 0) / user.taskSubmissions.filter(t => t.isGraded).length) || 0
                                            : 0) * 20) / 100)} puntos
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 border border-green-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">Asistencia (10%)</span>
                                            <span
                                                className="text-lg font-bold text-green-600">{user.attendance || 0}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full"
                                                style={{width: `${user.attendance || 0}%`}}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Contribución: {Math.round(((user.attendance || 0) * 10) / 100)} puntos
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-indigo-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-gray-900">Calificación Final:</span>
                                        <span
                                            className={`text-3xl font-bold ${user.finalGrade ? getScoreColor(user.finalGrade) : 'text-gray-400'}`}>
                                            {user.finalGrade}%
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Fórmula: (Exámenes × 70%) + (Tareas × 20%) + (Asistencia × 10%)
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
