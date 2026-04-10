import {lsmAlphabet, lsmQuiz, temasLSM} from "./Lms.constants.ts";
import {NavLink} from "react-router";
import {
    FaArrowLeft,
    FaBook,
    FaCheckCircle,
    FaGraduationCap,
    FaHandScissors,
    FaLightbulb,
    FaPlay,
    FaQuestionCircle,
    FaSearch,
    FaTh,
    FaTimesCircle,
    FaUsers
} from "react-icons/fa";
import {useState} from "react";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component.tsx";

type View = 'temas' | 'alfabeto' | 'quiz' | 'recursos';

export default function Lms() {
    const [activeView, setActiveView] = useState<View>('temas');
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [spellingWord, setSpellingWord] = useState("");

    // Quiz state
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    // Extraer categorías únicas de los temas
    const categories = Array.from(new Set(temasLSM.map(tema => tema.titulo.split(':')[0])));

    // Filtrar los temas basados en búsqueda y categoría
    const filteredTemas = temasLSM.filter(tema => {
        const matchesSearch = tema.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tema.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? tema.titulo.includes(selectedCategory) : true;
        return matchesSearch && matchesCategory;
    });

    // Función para obtener el icono según el tipo de referencia
    const getTypeIcon = (tipo: string) => {
        switch (tipo) {
            case 'video':
                return <FaPlay className="text-red-500"/>;
            case 'artículo':
                return <FaBook className="text-blue-500"/>;
            case 'curso':
                return <FaGraduationCap className="text-green-500"/>;
            default:
                return <FaBook className="text-gray-500"/>;
        }
    };

    const handleAnswerSubmit = (answer: string) => {
        if (showExplanation) return;
        setSelectedAnswer(answer);
        setShowExplanation(true);
        if (answer === lsmQuiz[currentQuestionIndex].correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex + 1 < lsmQuiz.length) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setQuizFinished(false);
    };

    return (
        <SEOWrapper
            title="Lengua de Señas Mexicana (LSM) - Aprende LSM | EMT EXAM"
            description="Curso básico de Lengua de Señas Mexicana (LSM) para personal de emergencias médicas. Aprende comunicación básica con pacientes sordos."
            keywords="lengua de señas mexicana, lsm, comunicación sorda, emergencias médicas, atención pacientes sordos"
            section="lms"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pb-12">
                {/* Hero Section mejorado */}
                <div
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-4 md:px-8 shadow-2xl relative overflow-hidden">
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div
                            className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                        <div
                            className="absolute top-32 right-20 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl"></div>
                        <div
                            className="absolute bottom-10 left-1/3 w-24 h-24 bg-white bg-opacity-5 rounded-full blur-lg"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-60"></div>
                                <FaHandScissors className="relative text-yellow-400 w-20 h-20 drop-shadow-lg"/>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                            Aprende Lengua de Señas Mexicana
                        </h1>
                        <p className="text-center text-blue-100 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                            Descubre el fascinante mundo de la LSM y conecta con la comunidad sorda de México.
                            Una herramienta esencial para profesionales de la salud y emergencias médicas.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <NavLink to="/"
                                     className="flex items-center gap-3 bg-white text-blue-700 shadow-lg rounded-full px-6 py-3 hover:bg-yellow-50 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold">
                                <FaArrowLeft className="text-lg"/>
                                <span>Regresar al inicio</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-100 mb-8">
                    <div className="container mx-auto px-4">
                        <div className="flex overflow-x-auto no-scrollbar py-1 gap-2 md:gap-8 justify-center">
                            {[
                                {id: 'temas', label: 'Temas', icon: <FaBook/>},
                                {id: 'alfabeto', label: 'Alfabeto', icon: <FaTh/>},
                                {id: 'quiz', label: 'Quiz', icon: <FaQuestionCircle/>},
                                {id: 'recursos', label: 'Recursos', icon: <FaGraduationCap/>}
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveView(tab.id as View)}
                                    className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all duration-300 border-b-4 ${
                                        activeView === tab.id
                                            ? 'border-blue-600 text-blue-600 bg-blue-50'
                                            : 'border-transparent text-gray-500 hover:text-blue-500 hover:bg-gray-50'
                                    }`}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="container mx-auto px-4 md:px-8">
                    {activeView === 'temas' && (
                        <div className="animate-fade-in">
                            {/* Búsqueda y filtros mejorados */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
                                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                                    <div className="w-full md:w-1/2 relative">
                                        <div className="absolute left-4 top-4 text-gray-400">
                                            <FaSearch className="w-5 h-5"/>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Buscar temas de LSM..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-12 w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-wrap gap-3 justify-end">
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                                selectedCategory === null
                                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                            }`}
                                        >
                                            Todos
                                        </button>
                                        {categories.map(category => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                                    selectedCategory === category
                                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                                }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resultados mejorados */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredTemas.length > 0 ? (
                                    filteredTemas.map((tema, index) => (
                                        <div
                                            key={tema.id}
                                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col group border border-gray-100"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                                animation: 'fadeInUp 0.6s ease-out forwards'
                                            }}
                                        >
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white relative overflow-hidden">
                                                <div
                                                    className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -mr-12 -mt-12"></div>
                                                <h3 className="text-xl font-bold mb-2 relative z-10">
                                                    {tema.titulo}
                                                </h3>
                                                <div className="flex items-center text-blue-100 text-sm">
                                                    <FaUsers className="mr-2"/>
                                                    <span>{tema.referencias.length} recursos disponibles</span>
                                                </div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-grow">
                                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                                    {tema.descripcion}
                                                </p>

                                                <div className="border-t pt-4">
                                                    <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                                                        <span
                                                            className="inline-block w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                                                        Recursos de aprendizaje
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {tema.referencias.map((ref, index) => (
                                                            <div key={index}
                                                                 className="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors duration-300 group">
                                                                <div className="mr-3">
                                                                    {getTypeIcon(ref.tipo)}
                                                                </div>
                                                                <a
                                                                    href={ref.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex-grow group-hover:underline"
                                                                >
                                                                    {ref.nombre}
                                                                </a>
                                                                <span
                                                                    className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                                                                    {ref.tipo}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-16">
                                        <div className="max-w-md mx-auto">
                                            <div className="mb-6">
                                                <FaSearch className="mx-auto text-gray-400 w-16 h-16 mb-4"/>
                                            </div>
                                            <p className="text-gray-500 text-xl mb-2">No se encontraron resultados</p>
                                            <p className="text-gray-400 mb-6">Intenta con otros términos de búsqueda</p>
                                            <button
                                                onClick={() => {
                                                    setSearchTerm("");
                                                    setSelectedCategory(null);
                                                }}
                                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                                            >
                                                Mostrar todos los temas
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeView === 'alfabeto' && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-blue-900 mb-4">Alfabeto Dactilológico</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Haz clic en cada letra para ver su descripción detallada de cómo realizar la seña
                                    correctamente.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {lsmAlphabet.map((item, index) => (
                                    <div
                                        key={item.letter}
                                        className="group bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                                        style={{animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`}}
                                    >
                                        <div
                                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                        
                                        {item.image ? (
                                            <div className="mb-4 w-full aspect-[3/4] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                                                <img 
                                                    src={new URL(item.image, import.meta.url).href} 
                                                    alt={`Seña de la letra ${item.letter}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <span className="text-5xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {item.letter}
                                            </span>
                                        )}
                                        
                                        <div className="text-center w-full">
                                            <p className="text-lg font-bold text-blue-800 uppercase tracking-wider">{item.letter}</p>
                                            <div
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-blue-600 bg-opacity-95 p-4 flex items-center justify-center text-white text-sm leading-tight text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-3xl font-black mb-2">{item.letter}</span>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                                    <FaLightbulb className="text-yellow-500"/>
                                    Práctica de Deletreo (Dactilología)
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Escribe una palabra para ver cómo se deletrea en LSM. Esto es fundamental para
                                    nombres propios y palabras que no tienen una seña específica.
                                </p>
                                <div className="max-w-xl mb-10">
                                    <input
                                        type="text"
                                        placeholder="Escribe tu nombre o una palabra..."
                                        className="w-full p-4 border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-xl font-bold uppercase tracking-widest"
                                        value={spellingWord}
                                        onChange={(e) => setSpellingWord(e.target.value.toUpperCase().replace(/[^A-ZÑ\s]/g, ''))}
                                    />
                                </div>
                                <div id="spelling-result" className="flex flex-wrap gap-3 min-h-[64px] items-center">
                                    {spellingWord ? (
                                        [...spellingWord].map((char, i) => (
                                            char === ' ' ? (
                                                <div key={i} className="w-8"></div>
                                            ) : (
                                                <div
                                                    key={i}
                                                    title={lsmAlphabet.find(l => l.letter === char)?.description || ''}
                                                    className="bg-blue-600 text-white w-12 h-16 rounded-xl flex items-center justify-center text-2xl font-black shadow-lg transform hover:scale-110 transition-transform cursor-help"
                                                >
                                                    {char}
                                                </div>
                                            )
                                        ))
                                    ) : (
                                        <p className="text-gray-400 italic">El resultado del deletreo aparecerá aquí...</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-4">Guía Rápida de Referencia</h3>
                                        <p className="text-blue-100 mb-6">
                                            Esta es la imagen oficial del alfabeto dactilológico de la LSM. Úsala como
                                            referencia visual rápida mientras practicas.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0"/>
                                                <p className="text-sm">Recuerda usar tu mano dominante para todas las
                                                    señas.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0"/>
                                                <p className="text-sm">Mantén la mano a la altura de tu hombro para
                                                    mayor visibilidad.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 bg-white p-4 rounded-xl">
                                        <img
                                            src="https://educacionbasica.sep.gob.mx/wp-content/uploads/2021/05/LSM-ALFABETO.jpg"
                                            alt="Alfabeto LSM"
                                            className="w-full h-auto rounded-lg shadow-inner"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeView === 'quiz' && (
                        <div className="animate-fade-in max-w-4xl mx-auto">
                            {!quizFinished ? (
                                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                                            Pregunta {currentQuestionIndex + 1} de {lsmQuiz.length}
                                        </span>
                                        <span className="text-sm font-bold text-gray-500">
                                            Puntos: {score}
                                        </span>
                                    </div>

                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                            {lsmQuiz[currentQuestionIndex].question}
                                        </h2>
                                    </div>

                                    <div className="grid gap-4 mb-8">
                                        {lsmQuiz[currentQuestionIndex].options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                disabled={showExplanation}
                                                onClick={() => handleAnswerSubmit(option)}
                                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex justify-between items-center ${
                                                    selectedAnswer === option
                                                        ? option === lsmQuiz[currentQuestionIndex].correctAnswer
                                                            ? 'border-green-500 bg-green-50'
                                                            : 'border-red-500 bg-red-50'
                                                        : showExplanation && option === lsmQuiz[currentQuestionIndex].correctAnswer
                                                            ? 'border-green-500 bg-green-50'
                                                            : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                                                }`}
                                            >
                                                <span className="font-medium text-lg text-gray-700">{option}</span>
                                                {showExplanation && option === lsmQuiz[currentQuestionIndex].correctAnswer && (
                                                    <FaCheckCircle className="text-green-500 w-6 h-6"/>
                                                )}
                                                {showExplanation && selectedAnswer === option && option !== lsmQuiz[currentQuestionIndex].correctAnswer && (
                                                    <FaTimesCircle className="text-red-500 w-6 h-6"/>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {showExplanation && (
                                        <div
                                            className={`p-6 rounded-2xl mb-8 animate-fade-in ${
                                                selectedAnswer === lsmQuiz[currentQuestionIndex].correctAnswer
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            <div className="flex gap-4">
                                                <div className="text-2xl mt-1">
                                                    {selectedAnswer === lsmQuiz[currentQuestionIndex].correctAnswer ? '🎉' : '💡'}
                                                </div>
                                                <div>
                                                    <p className="font-bold mb-1">
                                                        {selectedAnswer === lsmQuiz[currentQuestionIndex].correctAnswer ? '¡Correcto!' : 'Incorrecto'}
                                                    </p>
                                                    <p className="text-sm opacity-90 leading-relaxed">
                                                        {lsmQuiz[currentQuestionIndex].explanation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {showExplanation && (
                                        <button
                                            onClick={nextQuestion}
                                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            {currentQuestionIndex + 1 === lsmQuiz.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
                                    <div className="mb-8">
                                        <div
                                            className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <FaGraduationCap className="text-white text-5xl"/>
                                        </div>
                                        <h2 className="text-4xl font-bold text-gray-800 mb-2">¡Quiz Terminado!</h2>
                                        <p className="text-gray-500 text-xl">Has completado el desafío básico de LSM</p>
                                    </div>

                                    <div className="bg-blue-50 rounded-2xl p-8 mb-10 max-w-sm mx-auto">
                                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Tu
                                            Puntuación</p>
                                        <div className="text-6xl font-black text-blue-900">
                                            {score} <span className="text-2xl text-blue-400">/ {lsmQuiz.length}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={resetQuiz}
                                            className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                                        >
                                            Intentar de nuevo
                                        </button>
                                        <button
                                            onClick={() => setActiveView('temas')}
                                            className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                                        >
                                            Volver a los temas
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeView === 'recursos' && (
                        <div className="animate-fade-in max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-blue-900 mb-4">Recursos de Aprendizaje</h2>
                                <p className="text-gray-600">
                                    Una selección de herramientas externas para profundizar en tu conocimiento de la
                                    LSM.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaPlay className="text-red-500"/>
                                        Canales de YouTube Recomendados
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: 'Aprendiendo Lengua de Señas Mexicana',
                                                desc: 'Tutoriales paso a paso por niveles.',
                                                url: 'https://www.youtube.com/@AprendiendoLSM'
                                            },
                                            {
                                                name: 'Manos en Voz',
                                                desc: 'Cultura sorda y vocabulario cotidiano.',
                                                url: 'https://www.youtube.com/@ManosEnVoz'
                                            },
                                            {
                                                name: 'LSM México',
                                                desc: 'Contenido educativo y noticias en LSM.',
                                                url: 'https://www.youtube.com/@LSMMexico'
                                            }
                                        ].map((canal, i) => (
                                            <a key={i} href={canal.url} target="_blank" rel="noopener noreferrer"
                                               className="block p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors border border-transparent hover:border-red-200 group">
                                                <h4 className="font-bold text-blue-700 group-hover:text-red-600">{canal.name}</h4>
                                                <p className="text-sm text-gray-500">{canal.desc}</p>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaBook className="text-blue-500"/>
                                        Diccionarios y Guías
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: 'Diccionario de LSM (CONADIS)',
                                                desc: 'Recurso oficial del Gobierno de México.',
                                                url: 'https://www.gob.mx/conadis/articulos/diccionario-de-lengua-de-senas-mexicana-lsm'
                                            },
                                            {
                                                name: 'App: LSM para todos',
                                                desc: 'Disponible en Play Store y App Store.',
                                                url: '#'
                                            },
                                            {
                                                name: 'Cultura Sorda México',
                                                desc: 'Artículos sobre historia e identidad.',
                                                url: 'https://cultura-sorda.org/'
                                            }
                                        ].map((rec, i) => (
                                            <a key={i} href={rec.url} target="_blank" rel="noopener noreferrer"
                                               className="block p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200 group">
                                                <h4 className="font-bold text-blue-700 group-hover:text-blue-600">{rec.name}</h4>
                                                <p className="text-sm text-gray-500">{rec.desc}</p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                                <div className="relative z-10 text-center">
                                    <h3 className="text-2xl font-bold mb-4">¿Quieres una certificación formal?</h3>
                                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                        Para profesionales de la salud y emergencias, existen diplomados y cursos
                                        especializados que te brindarán las herramientas legales y técnicas necesarias.
                                    </p>
                                    <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg transform hover:scale-105">
                                        Buscar Institutos Certificados
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Sección informativa mejorada (siempre visible al final) */}
                <div
                    className="container mx-auto px-4 md:px-8 mt-16">
                    <div
                        className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-4">
                                    <FaHandScissors className="text-white w-8 h-8"/>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Sabías que?</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                La Lengua de Señas Mexicana (LSM) es una lengua natural de expresión gesto-espacial
                                y percepción visual, gracias a la cual, las personas sordas pueden establecer un
                                canal de comunicación con su entorno.
                            </p>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <p className="text-gray-600 font-medium text-lg">
                                    💡 <strong>Consejo:</strong> La mejor forma de aprender LSM es practicando con
                                    hablantes nativos y tomando cursos formales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

// Agregar estilos CSS para la animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
    
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
document.head.appendChild(style);
