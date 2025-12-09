import { NavLink } from "react-router";
import { AllRoutes } from "../../components/Router/Router.constants";
import { IoReturnDownBack } from "react-icons/io5";
import { MdQuiz, MdMenuBook, MdSecurity } from "react-icons/md";
import { GiRolledCloth, GiKnot, GiMountainClimbing } from "react-icons/gi";
import { BsGear } from "react-icons/bs";
import { FaYoutube, FaBook, FaShieldAlt } from "react-icons/fa";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../components/ForumSection";
import { useRopesPage } from "./Ropes.hook";
import Overview from "./components/Overview.component";
import Knots from "./components/Knots.component";
import Equipment from "./components/Equipment.component";
import Techniques from "./components/Techniques.component";
import Safety from "./components/Safety.component";
import Practice from "./components/Practice.component";

export default function RopesPage() {
    const {
        activeTab,
        searchQuery,
        selectedKnot,
        selectedEquipment,
        selectedTechnique,
        difficultyFilter,
        filteredKnots,
        filteredEquipment,
        filteredTechniques,
        stats,
        setActiveTab,
        setSearchQuery,
        setDifficultyFilter,
        handleKnotSelect,
        handleKnotClose,
        handleEquipmentSelect,
        handleEquipmentClose,
        handleTechniqueSelect,
        handleTechniqueClose,
    } = useRopesPage();

    const tabs = [
        { id: 'overview', label: 'Generalidades', icon: <MdMenuBook className="w-4 h-4" /> },
        { id: 'knots', label: 'Nudos', icon: <GiKnot className="w-4 h-4" /> },
        { id: 'equipment', label: 'Equipo', icon: <BsGear className="w-4 h-4" /> },
        { id: 'techniques', label: 'Técnicas', icon: <GiMountainClimbing className="w-4 h-4" /> },
        { id: 'safety', label: 'Seguridad', icon: <FaShieldAlt className="w-4 h-4" /> },
        { id: 'practice', label: 'Práctica', icon: <MdQuiz className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Rescate con Cuerdas | Curso Completo para Paramédicos"
            description="Curso completo de rescate técnico con cuerdas: nudos esenciales, equipo de rescate, técnicas de rapel, sistemas de izado y protocolos de seguridad. Material educativo para técnicos en emergencias."
            keywords="rescate con cuerdas, rescue técnico, nudos de rescate, rapel, ascenso por cuerda, polipastos, arnés de rescate, mosquetones, paramédicos, técnicos en emergencias, NFPA 1006, rescate vertical"
            section="ropes"
            difficulty="Intermediate"
            timeRequired="PT8H"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <GiRolledCloth className="w-14 h-14 text-white"/>
                                </div>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Rescate con Cuerdas
                            </h1>
                            <p className="text-lg text-gray-600 mb-2">Curso Técnico Completo</p>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.MAIN}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-amber-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar al inicio</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/rope-rescue/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-amber-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a
                                href="https://www.youtube.com/results?search_query=rope+rescue+training"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-300 hover:shadow-md"
                            >
                                <FaYoutube className="w-10 h-10 text-red-500 mb-2"/>
                                <p className="text-center font-medium">Videos</p>
                            </a>
                            <a
                                href="https://www.petzl.com/INT/en/Sport/Resources"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-300 hover:shadow-md"
                            >
                                <FaBook className="w-10 h-10 text-amber-500 mb-2"/>
                                <p className="text-center font-medium">Recursos Petzl</p>
                            </a>
                            <a
                                href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=1006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-300 hover:shadow-md"
                            >
                                <MdSecurity className="w-10 h-10 text-blue-500 mb-2"/>
                                <p className="text-center font-medium">NFPA 1006</p>
                            </a>
                        </div>

                        {/* Navegación por pestañas */}
                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-1 overflow-x-auto pb-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? 'border-amber-500 text-amber-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <Overview stats={stats} />
                            )}
                            {activeTab === 'knots' && (
                                <Knots
                                    knots={filteredKnots}
                                    searchQuery={searchQuery}
                                    onSearchChange={setSearchQuery}
                                    difficultyFilter={difficultyFilter}
                                    onDifficultyChange={setDifficultyFilter}
                                    selectedKnot={selectedKnot}
                                    onSelectKnot={handleKnotSelect}
                                    onCloseKnot={handleKnotClose}
                                />
                            )}
                            {activeTab === 'equipment' && (
                                <Equipment
                                    equipment={filteredEquipment}
                                    searchQuery={searchQuery}
                                    onSearchChange={setSearchQuery}
                                    selectedEquipment={selectedEquipment}
                                    onSelectEquipment={handleEquipmentSelect}
                                    onCloseEquipment={handleEquipmentClose}
                                />
                            )}
                            {activeTab === 'techniques' && (
                                <Techniques
                                    techniques={filteredTechniques}
                                    searchQuery={searchQuery}
                                    onSearchChange={setSearchQuery}
                                    difficultyFilter={difficultyFilter}
                                    onDifficultyChange={setDifficultyFilter}
                                    selectedTechnique={selectedTechnique}
                                    onSelectTechnique={handleTechniqueSelect}
                                    onCloseTechnique={handleTechniqueClose}
                                />
                            )}
                            {activeTab === 'safety' && (
                                <Safety />
                            )}
                            {activeTab === 'practice' && (
                                <Practice />
                            )}
                        </div>

                        {/* Foro de Discusión */}
                        <ForumSection
                            pagina="rope-rescue"
                            titulo="Foro de Discusión - Rescate con Cuerdas"
                        />

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            CMC Rescue. (2020). <em>Rope Rescue Field Guide</em>. CMC Rescue, Inc.
                                        </li>
                                        <li>
                                            Petzl. <em>Technical Manual - Rope Access</em>. Petzl America.
                                        </li>
                                        <li>
                                            NFPA. (2021). <em>NFPA 1006: Standard for Technical Rescue Personnel Professional Qualifications</em>.
                                        </li>
                                        <li>
                                            Frank, J. (2010). <em>CMC Rope Rescue Manual</em>. CMC Rescue, Inc.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            <a
                                                href="https://www.petzl.com/INT/en/Sport/Resources"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Petzl - Recursos técnicos y guías
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cmcrescue.com/resources/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                CMC Rescue - Material educativo
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.animatedknots.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Animated Knots - Tutoriales de nudos animados
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.rfrp.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Rigging for Rescue - Entrenamiento profesional
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

