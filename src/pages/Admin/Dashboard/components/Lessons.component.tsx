import {FaToggleOff, FaToggleOn} from "react-icons/fa";
import useAdminDashboard from "../AdminDashboard.hook.ts";

export default function Lessons() {
    const {lessons, handleToggleLesson} = useAdminDashboard()
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Lecciones</h2>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <p className="text-gray-600 mb-6">
                        Activa o desactiva las lecciones disponibles para los estudiantes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lessons.map((lesson) => (
                            <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium text-gray-900">{lesson.name}</h3>
                                        <p className="text-sm text-gray-500">ID: {lesson.id}</p>
                                    </div>
                                    <button
                                        onClick={() => handleToggleLesson(lesson.id)}
                                        className={`text-2xl ${
                                            lesson.enabled ? 'text-green-500' : 'text-gray-400'
                                        }`}
                                    >
                                        {lesson.enabled ? <FaToggleOn/> : <FaToggleOff/>}
                                    </button>
                                </div>
                                <div className="mt-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lesson.enabled
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                          {lesson.enabled ? 'Activa' : 'Inactiva'}
                        </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}