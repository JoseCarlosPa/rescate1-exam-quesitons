import { FaEye, FaUsers, FaSearch, FaFilter} from "react-icons/fa";
import useAdminDashboard from "../AdminDashboard.hook.ts";
import UserDetailModal from "./UserDetailModal.component.tsx";
import { useState } from "react";

export default function Users(){
    const { users, handleChangeUserRole, handleViewUser, selectedUser, showUserDetail, handleCloseUserDetail, handleUpdateAttendance } = useAdminDashboard();
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'Admin':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'Moderador':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-blue-100 text-blue-800 border-blue-200';
        }
    };

    const getUserStats = (user: any) => {
        if (!user.exams) return { completed: 0, total: 0, average: 0 };

        const exams = Object.values(user.exams);
        const completed = exams.filter((exam: any) => exam.completed);
        const total = exams.length;
        const average = completed.length > 0
            ? Math.round(completed.reduce((sum: number, exam: any) => sum + exam.score, 0) / completed.length)
            : 0;

        return { completed: completed.length, total, average };
    };

    return(
        <div>
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full mr-4">
                            <FaUsers className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Gestión de Usuarios</h2>
                            <p className="text-gray-600 mt-1">Administra y monitorea el progreso de los estudiantes</p>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                        <span className="text-2xl font-bold text-blue-600">{users.length}</span>
                        <span className="text-gray-600 ml-1">usuarios</span>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por nombre o email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFilter className="text-gray-400" />
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="all">Todos los roles</option>
                                <option value="Alumno">Alumno</option>
                                <option value="Admin">Admin</option>
                                <option value="Moderador">Moderador</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Usuario
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rendimiento
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Fecha de Registro
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => {
                                    const stats = getUserStats(user);
                                    return (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                                                            <span className="text-white font-medium">
                                                                {(user.name || user.email).charAt(0).toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {user.name || 'Sin nombre'}
                                                        </div>
                                                        <div className="text-sm text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleChangeUserRole(user.id, e.target.value)}
                                                    className={`text-sm border rounded-lg px-3 py-1 font-medium ${getRoleColor(user.role)} focus:ring-2 focus:ring-blue-500`}
                                                >
                                                    <option value="Alumno">Alumno</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Moderador">Moderador</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-center">
                                                            <div className="text-lg font-bold text-blue-600">{stats.completed}</div>
                                                            <div className="text-xs text-gray-500">Completados</div>
                                                        </div>
                                                        {stats.average > 0 && (
                                                            <div className="text-center">
                                                                <div className={`text-lg font-bold ${
                                                                    stats.average >= 90 ? 'text-green-600' :
                                                                    stats.average >= 80 ? 'text-blue-600' :
                                                                    stats.average >= 70 ? 'text-yellow-600' :
                                                                    'text-red-600'
                                                                }`}>
                                                                    {stats.average}%
                                                                </div>
                                                                <div className="text-xs text-gray-500">Promedio</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <span>{user.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleViewUser(user.id)}
                                                        className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg transition-colors"
                                                        title="Ver detalles del usuario"
                                                    >
                                                        <FaEye />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center">
                                        <FaUsers className="mx-auto text-gray-300 text-4xl mb-4" />
                                        <p className="text-gray-500">No se encontraron usuarios</p>
                                        {searchTerm && (
                                            <button
                                                onClick={() => setSearchTerm("")}
                                                className="text-blue-600 hover:text-blue-800 mt-2"
                                            >
                                                Limpiar búsqueda
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Statistics Footer */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-blue-800">Total de Usuarios</p>
                            <p className="text-2xl font-bold text-blue-900">{users.length}</p>
                        </div>
                        <FaUsers className="text-blue-500 text-2xl" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-green-800">Usuarios Activos</p>
                            <p className="text-2xl font-bold text-green-900">
                                {users.filter(user => user.exams && Object.values(user.exams).some((exam: any) => exam.completed)).length}
                            </p>
                        </div>
                        <FaUsers className="text-green-500 text-2xl" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-purple-800">Administradores</p>
                            <p className="text-2xl font-bold text-purple-900">
                                {users.filter(user => user.role === 'Admin').length}
                            </p>
                        </div>
                        <FaUsers className="text-purple-500 text-2xl" />
                    </div>
                </div>
            </div>

            {/* User Detail Modal */}
            <UserDetailModal
                user={selectedUser}
                isOpen={showUserDetail}
                onClose={handleCloseUserDetail}
                onUpdateAttendance={handleUpdateAttendance}
            />
        </div>
    );
}