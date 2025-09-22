import { FaTasks, FaCalendar, FaClock, FaLink, FaCheckCircle, FaStar, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import useStudentTasks, { Task, TaskSubmission } from "../../hooks/useStudentTasks.hook";

export default function StudentTasks() {
    const {
        tasks,
        mySubmissions,
        loading,
        submitTask,
        isTaskOpen,
        getTaskStatus,
        hasSubmitted,
        getSubmission
    } = useStudentTasks();

    const [showSubmissionModal, setShowSubmissionModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [submissionLink, setSubmissionLink] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmitTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTask || !submissionLink.trim()) return;

        setSubmitting(true);
        try {
            await submitTask(selectedTask.id, submissionLink.trim());
            setShowSubmissionModal(false);
            setSelectedTask(null);
            setSubmissionLink("");
        } finally {
            setSubmitting(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600";
        if (score >= 80) return "text-blue-600";
        if (score >= 70) return "text-yellow-600";
        return "text-red-600";
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <FaSpinner className="animate-spin w-8 h-8 text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-100 rounded-full mr-4">
                            <FaTasks className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Mis Tareas</h1>
                            <p className="text-gray-600 mt-1">Administra tus entregas y revisa tus calificaciones</p>
                        </div>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <FaTasks className="text-blue-600" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Total Tareas</p>
                                    <p className="text-xl font-bold text-gray-900">{tasks.length}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <FaCheckCircle className="text-green-600" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Entregadas</p>
                                    <p className="text-xl font-bold text-gray-900">{mySubmissions.length}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className="p-2 bg-yellow-100 rounded-full">
                                    <FaClock className="text-yellow-600" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Pendientes</p>
                                    <p className="text-xl font-bold text-gray-900">
                                        {tasks.filter((task: Task) => isTaskOpen(task) && !hasSubmitted(task.id)).length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className="p-2 bg-purple-100 rounded-full">
                                    <FaStar className="text-purple-600" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Calificadas</p>
                                    <p className="text-xl font-bold text-gray-900">
                                        {mySubmissions.filter((s: TaskSubmission) => s.isGraded).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks List */}
                <div className="space-y-6">
                    {tasks.length > 0 ? (
                        tasks.map((task: Task) => {
                            const taskStatus = getTaskStatus(task);
                            const submission = getSubmission(task.id);
                            const isSubmitted = hasSubmitted(task.id);

                            return (
                                <div key={task.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        taskStatus.color === 'green' ? 'bg-green-100 text-green-800' :
                                                        taskStatus.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {taskStatus.label}
                                                    </span>
                                                    {isSubmitted && (
                                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                            Entregada
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-gray-600 mb-4">{task.description}</p>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
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
                                                        <FaStar className="mr-2" />
                                                        <div>
                                                            <div className="font-medium">Puntaje Máximo</div>
                                                            <div>{task.maxScore} puntos</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submission Status */}
                                        {isSubmitted && submission ? (
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-semibold text-gray-900 mb-3">Mi Entrega</h4>
                                                <div className="space-y-2">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <FaLink className="mr-2" />
                                                        <a
                                                            href={submission.submissionLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800 break-all"
                                                        >
                                                            {submission.submissionLink}
                                                        </a>
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        <span className="font-medium">Entregado:</span> {submission.submittedAt.toDate().toLocaleString()}
                                                    </div>

                                                    {submission.isGraded ? (
                                                        <div className="mt-3 p-3 rounded-lg bg-white border">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="font-medium text-gray-900">Calificación</span>
                                                                <span className={`text-xl font-bold ${getScoreColor(submission.score || 0)}`}>
                                                                    {submission.score}/{task.maxScore}
                                                                </span>
                                                            </div>
                                                            {submission.feedback && (
                                                                <div className="mt-2">
                                                                    <span className="font-medium text-gray-700">Retroalimentación:</span>
                                                                    <p className="text-gray-600 mt-1">{submission.feedback}</p>
                                                                </div>
                                                            )}
                                                            <div className="text-xs text-gray-500 mt-2">
                                                                Calificado: {submission.gradedAt?.toDate().toLocaleString()}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="mt-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                                                            <div className="flex items-center text-yellow-800">
                                                                <FaClock className="mr-2" />
                                                                <span className="font-medium">Pendiente de calificación</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-end">
                                                {isTaskOpen(task) ? (
                                                    <button
                                                        onClick={() => {
                                                            setSelectedTask(task);
                                                            setShowSubmissionModal(true);
                                                        }}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                                                    >
                                                        <FaLink />
                                                        Entregar Tarea
                                                    </button>
                                                ) : taskStatus.status === 'pending' ? (
                                                    <div className="text-gray-500 text-sm flex items-center gap-2">
                                                        <FaClock />
                                                        Aún no disponible
                                                    </div>
                                                ) : (
                                                    <div className="text-red-500 text-sm flex items-center gap-2">
                                                        <FaExclamationTriangle />
                                                        Tiempo agotado
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <FaTasks className="mx-auto text-gray-300 text-4xl mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay tareas disponibles</h3>
                            <p className="text-gray-600">Las tareas aparecerán aquí cuando estén disponibles</p>
                        </div>
                    )}
                </div>

                {/* Submission Modal */}
                {showSubmissionModal && selectedTask && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
                        <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">Entregar Tarea</h3>
                                <p className="text-sm text-gray-600 mt-1">{selectedTask.title}</p>
                            </div>
                            <form onSubmit={handleSubmitTask} className="p-6">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Link de tu tarea (Google Drive, OneDrive, etc.)
                                    </label>
                                    <input
                                        type="url"
                                        value={submissionLink}
                                        onChange={(e) => setSubmissionLink(e.target.value)}
                                        placeholder="https://drive.google.com/..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Asegúrate de que el link sea público o compartido con permisos de visualización
                                    </p>
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowSubmissionModal(false);
                                            setSelectedTask(null);
                                            setSubmissionLink("");
                                        }}
                                        className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                                        disabled={submitting}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <>
                                                <FaSpinner className="animate-spin" />
                                                Entregando...
                                            </>
                                        ) : (
                                            <>
                                                <FaCheckCircle />
                                                Entregar
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
