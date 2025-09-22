import {FaBook, FaChartBar, FaComments, FaTasks, FaUsers,} from 'react-icons/fa';
import {ImSpinner2} from 'react-icons/im';
import useAdminDashboard from "./AdminDashboard.hook.ts";
import {ActiveTab} from "./AdminDashboard.types.ts";
import Overview from "./components/Overview.component.tsx";
import Users from "./components/Users.component.tsx";
import Forum from "./components/Forum.component.tsx";
import Lessons from "./components/Lessons.component.tsx";
import Tasks from "./components/Tasks.component.tsx";

export default function AdminDashboard() {

    const {
        activeTab,
        setActiveTab,
        loading,
    } = useAdminDashboard()


    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500"/>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        {[
                            {key: 'overview', label: 'Resumen', icon: FaChartBar},
                            {key: 'users', label: 'Usuarios', icon: FaUsers},
                            {key: 'forum', label: 'Foro', icon: FaComments},
                            {key: 'lessons', label: 'Lecciones', icon: FaBook},
                            {key: 'tasks', label: 'Tareas', icon: FaTasks}
                        ].map(({key, label, icon: Icon}) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key as ActiveTab)}
                                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === key
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <Icon/>
                                <span>{label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {activeTab === 'overview' && (<Overview/>)}
                {activeTab === 'users' && (<Users/>)}
                {activeTab === 'forum' && (<Forum/>)}
                {activeTab === 'lessons' && (<Lessons/>)}
                {activeTab === 'tasks' && (<Tasks/>)}
            </div>
        </div>
    );
}
