import { FaTasks, FaPlus, FaCalendar, FaEdit, FaEye, FaClock, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";
import useAdminDashboard from "../AdminDashboard.hook.ts";
import { Task, TaskSubmission } from "../AdminDashboard.types";

export default function Tasks() {
    const {
        tasks,
        taskSubmissions,
        gradeWeights,
        handleCreateTask,
        handleGradeTask,
        handleUpdateGradeWeights,
        fetchTasks
    } = useAdminDashboard();

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showGradeModal, setShowGradeModal] = useState(false);
    const [showWeightsModal, setShowWeightsModal] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState<TaskSubmission | null>(null);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        openDate: '',
        closeDate: '',
        maxScore: 100
    });
    const [gradeForm, setGradeForm] = useState({
        score: 0,
        feedback: ''
    });
    const [weights, setWeights] = useState(gradeWeights);

    const isTaskActive = (task: Task) => {
        const now = new Date();
        const openDate = task.openDate.toDate();
        const closeDate = task.closeDate.toDate();
        return now >= openDate && now <= closeDate;
    };

    const getTaskStatus = (task: Task) => {
        const now = new Date();
        const openDate = task.openDate.toDate();
        const closeDate = task.closeDate.toDate();

        if (now < openDate) return { status: 'pending', label: 'Próxima', color: 'text-yellow-600 bg-yellow-100' };
        if (now > closeDate) return { status: 'closed', label: 'Cerrada', color: 'text-gray-600 bg-gray-100' };
        return { status: 'active', label: 'Activa', color: 'text-green-600 bg-green-100' };
    };

    const handleCreateTaskSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.title || !newTask.description || !newTask.openDate || !newTask.closeDate) {
            return;
        }

        await handleCreateTask({
            title: newTask.title,
            description: newTask.description,
            openDate: new Date(newTask.openDate) as any,
            closeDate: new Date(newTask.closeDate) as any,
            maxScore: newTask.maxScore
        });

        setShowCreateModal(false);
        setNewTask({
            title: '',
            description: '',
            openDate: '',
            closeDate: '',
            maxScore: 100
        });
    };

    const handleGradeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSubmission) return;

        await handleGradeTask(selectedSubmission.id, gradeForm.score, gradeForm.feedback);
        setShowGradeModal(false);
        setSelectedSubmission(null);
        setGradeForm({ score: 0, feedback: '' });
    };

    const handleWeightsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleUpdateGradeWeights(weights);
        setShowWeightsModal(false);
    };

    const getSubmissionsForTask = (taskId: string) => {
        return taskSubmissions.filter(submission => submission.taskId === taskId);
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 rounded-full mr-4">
                            <FaTasks className="text-purple-600 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Gestión de Tareas</h2>
                            <p className="text-gray-600 mt-1">Administra tareas y calificaciones del curso</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowWeightsModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <FaEdit />
                            Configurar Pesos
                        </button>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            Nueva Tarea
                        </button>
                    </div>
                </div>

                {/* Grade Weights Display */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración de Calificaciones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{gradeWeights.exams}%</div>
                            <div className="text-sm text-gray-600">Exámenes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{gradeWeights.tasks}%</div>
                            <div className="text-sm text-gray-600">Tareas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{gradeWeights.attendance}%</div>
                            <div className="text-sm text-gray-600">Asistencia</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks List */}
            <div className="grid grid-cols-1 gap-6">
                {tasks.length > 0 ? (
                    tasks.map((task) => {
                        const taskStatus = getTaskStatus(task);
                        const submissions = getSubmissionsForTask(task.id);
                        const gradedSubmissions = submissions.filter(s => s.isGraded);

                        return (
                            <div key={task.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${taskStatus.color}`}>
                                                    {taskStatus.label}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4">{task.description}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <FaCalendar className="mr-2" />
                                                    <div>
                                                        <div className="font-medium">Apertura</div>
                                                        <div>{task.openDate.toDate().toLocaleDateString()}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <FaClock className="mr-2" />
                                                    <div>
                                                        <div className="font-medium">Cierre</div>
                                                        <div>{task.closeDate.toDate().toLocaleDateString()}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <FaCheckCircle className="mr-2" />
                                                    <div>
                                                        <div className="font-medium">Puntaje Máximo</div>
                                                        <div>{task.maxScore} puntos</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submissions Summary */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="font-semibold text-gray-900">Entregas</h4>
                                            <div className="text-sm text-gray-600">
                                                {submissions.length} entregas • {gradedSubmissions.length} calificadas
                                            </div>
                                        </div>

                                        {submissions.length > 0 ? (
                                            <div className="space-y-2">
                                                {submissions.slice(0, 3).map((submission) => (
                                                    <div key={submission.id} className="flex items-center justify-between py-2 px-3 bg-white rounded border">
                                                        <div className="flex items-center">
                                                            <div className="font-medium text-gray-900">{submission.studentName}</div>
                                                            <div className="ml-2 text-sm text-gray-500">
                                                                {submission.submittedAt.toDate().toLocaleDateString()}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {submission.isGraded ? (
                                                                <span className="text-green-600 font-medium">
                                                                    {submission.score}/{task.maxScore}
                                                                </span>
                                                            ) : (
                                                                <span className="text-yellow-600 text-sm">Pendiente</span>
                                                            )}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedSubmission(submission);
                                                                    setGradeForm({
                                                                        score: submission.score || 0,
                                                                        feedback: submission.feedback || ''
                                                                    });
                                                                    setShowGradeModal(true);
                                                                }}
                                                                className="text-blue-600 hover:text-blue-800 p-1"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                                {submissions.length > 3 && (
                                                    <div className="text-center text-sm text-gray-500 py-2">
                                                        Y {submissions.length - 3} entregas más...
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-4 text-gray-500">
                                                <FaExclamationTriangle className="mx-auto text-2xl mb-2" />
                                                <p>No hay entregas para esta tarea</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <FaTasks className="mx-auto text-gray-300 text-4xl mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No hay tareas creadas</h3>
                        <p className="text-gray-600 mb-4">Crea tu primera tarea para comenzar a asignar trabajos a los estudiantes</p>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            Crear Primera Tarea
                        </button>
                    </div>
                )}
            </div>

            {/* Create Task Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Crear Nueva Tarea</h3>
                        </div>
                        <form onSubmit={handleCreateTaskSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                                    <input
                                        type="text"
                                        value={newTask.title}
                                        onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                                    <textarea
                                        value={newTask.description}
                                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Apertura</label>
                                        <input
                                            type="datetime-local"
                                            value={newTask.openDate}
                                            onChange={(e) => setNewTask({...newTask, openDate: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Cierre</label>
                                        <input
                                            type="datetime-local"
                                            value={newTask.closeDate}
                                            onChange={(e) => setNewTask({...newTask, closeDate: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Puntaje Máximo</label>
                                    <input
                                        type="number"
                                        value={newTask.maxScore}
                                        onChange={(e) => setNewTask({...newTask, maxScore: parseInt(e.target.value)})}
                                        min="1"
                                        max="100"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowCreateModal(false)}
                                    className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    Crear Tarea
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Grade Task Modal */}
            {showGradeModal && selectedSubmission && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Calificar Entrega</h3>
                        </div>
                        <div className="p-6">
                            {/* Student Info */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-700">Estudiante:</span>
                                        <div className="text-gray-900">{selectedSubmission.studentName}</div>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Fecha de Entrega:</span>
                                        <div className="text-gray-900">{selectedSubmission.submittedAt.toDate().toLocaleString()}</div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-medium text-gray-700">Link de Entrega:</span>
                                        <div>
                                            <a
                                                href={selectedSubmission.submissionLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 break-all"
                                            >
                                                {selectedSubmission.submissionLink}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleGradeSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Calificación</label>
                                        <input
                                            type="number"
                                            value={gradeForm.score}
                                            onChange={(e) => setGradeForm({...gradeForm, score: parseInt(e.target.value)})}
                                            min="0"
                                            max="100"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Retroalimentación</label>
                                        <textarea
                                            value={gradeForm.feedback}
                                            onChange={(e) => setGradeForm({...gradeForm, feedback: e.target.value})}
                                            rows={4}
                                            placeholder="Escribe comentarios sobre la entrega..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowGradeModal(false);
                                            setSelectedSubmission(null);
                                        }}
                                        className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        Calificar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Grade Weights Modal */}
            {showWeightsModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Configurar Pesos de Calificación</h3>
                        </div>
                        <form onSubmit={handleWeightsSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Exámenes (%)</label>
                                    <input
                                        type="number"
                                        value={weights.exams}
                                        onChange={(e) => setWeights({...weights, exams: parseInt(e.target.value)})}
                                        min="0"
                                        max="100"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tareas (%)</label>
                                    <input
                                        type="number"
                                        value={weights.tasks}
                                        onChange={(e) => setWeights({...weights, tasks: parseInt(e.target.value)})}
                                        min="0"
                                        max="100"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Asistencia (%)</label>
                                    <input
                                        type="number"
                                        value={weights.attendance}
                                        onChange={(e) => setWeights({...weights, attendance: parseInt(e.target.value)})}
                                        min="0"
                                        max="100"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-sm">
                                        <span className="font-medium">Total: </span>
                                        <span className={`${weights.exams + weights.tasks + weights.attendance === 100 ? 'text-green-600' : 'text-red-600'}`}>
                                            {weights.exams + weights.tasks + weights.attendance}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowWeightsModal(false)}
                                    className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
