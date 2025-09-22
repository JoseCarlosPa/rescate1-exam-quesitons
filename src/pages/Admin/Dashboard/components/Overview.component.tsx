import { FaChartBar, FaComments, FaUsers, FaGraduationCap, FaTrophy, FaFire, FaClipboardList} from "react-icons/fa";
import useAdminDashboard from "../AdminDashboard.hook.ts";

export default function Overview(){

    const {stats} = useAdminDashboard()

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

    return(
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard del Sistema</h2>

            {/* Stats Cards - Main Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100">
                            <FaUsers className="text-blue-600 text-xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                            <p className="text-xs text-blue-600 mt-1">{stats.activeUsers} activos</p>
                        </div>
                    </div>
                </div>

                <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow ${getScoreBackground(stats.averageScore)}`}>
                    <div className="flex items-center">
                        <div className={`p-3 rounded-full ${getScoreBackground(stats.averageScore)}`}>
                            <FaGraduationCap className={`${getScoreColor(stats.averageScore)} text-xl`} />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Promedio General</p>
                            <p className={`text-2xl font-bold ${getScoreColor(stats.averageScore)}`}>{stats.averageScore}%</p>
                            <p className="text-xs text-gray-500 mt-1">{stats.totalExamsTaken} exámenes tomados</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100">
                            <FaComments className="text-green-600 text-xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Mensajes en Foro</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
                            <p className="text-xs text-green-600 mt-1">{stats.recentActivity} esta semana</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-orange-100">
                            <FaTrophy className="text-orange-600 text-xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Estudiantes Destacados</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.topPerformers}</p>
                            <p className="text-xs text-orange-600 mt-1">≥85% promedio</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-indigo-100">
                            <FaClipboardList className="text-indigo-600 text-xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Tareas Activas</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalTasks}</p>
                            <p className="text-xs text-indigo-600 mt-1">{stats.pendingTasks} pendientes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border border-blue-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-blue-800">Exámenes Completados</p>
                            <p className="text-3xl font-bold text-blue-900">{stats.completedExams}</p>
                        </div>
                        <FaClipboardList className="text-blue-500 text-2xl" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-md border border-green-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-green-800">Participación Activa</p>
                            <p className="text-3xl font-bold text-green-900">{Math.round((stats.activeUsers / stats.totalUsers) * 100) || 0}%</p>
                        </div>
                        <FaChartBar className="text-green-500 text-2xl" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-md border border-purple-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-purple-800">Actividad Reciente</p>
                            <p className="text-3xl font-bold text-purple-900">{stats.recentActivity}</p>
                        </div>
                        <FaFire className="text-purple-500 text-2xl" />
                    </div>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen de Rendimiento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBackground(stats.averageScore)} mb-3`}>
                            <span className={`text-2xl font-bold ${getScoreColor(stats.averageScore)}`}>
                                {stats.averageScore}%
                            </span>
                        </div>
                        <p className="text-sm font-medium text-gray-600">Promedio General</p>
                        <p className="text-xs text-gray-500">de {stats.totalExamsTaken} exámenes</p>
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                            <span className="text-2xl font-bold text-green-600">
                                {Math.round((stats.topPerformers / stats.totalUsers) * 100) || 0}%
                            </span>
                        </div>
                        <p className="text-sm font-medium text-gray-600">Estudiantes Destacados</p>
                        <p className="text-xs text-gray-500">{stats.topPerformers} de {stats.totalUsers}</p>
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-3">
                            <span className="text-2xl font-bold text-blue-600">
                                {Math.round((stats.activeUsers / stats.totalUsers) * 100) || 0}%
                            </span>
                        </div>
                        <p className="text-sm font-medium text-gray-600">Participación</p>
                        <p className="text-xs text-gray-500">{stats.activeUsers} usuarios activos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}