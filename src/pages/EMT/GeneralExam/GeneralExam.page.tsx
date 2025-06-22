import {useState, useRef} from "react";
import {Option, Question} from "../../../question";
import logo from "../../../assets/logo.png";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {lections} from "../../../App.constants.tsx";
import {FaClock, FaPrint, FaPlus, FaMinus} from "react-icons/fa";
import {getQuestionsFromSelectedTopics} from "../allQuestionts.ts";
import "./GeneralExam.css";

export default function GeneralExam() {
    // Setup states
    const [answers, setAnswers] = useState<{ [index: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [showTopicSelection, setShowTopicSelection] = useState(true);
    const [selectedTopics, setSelectedTopics] = useState<{ id: string, count: number }[]>([]);
    const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
    const [timer, setTimer] = useState<number>(0);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [showAllQuestions, setShowAllQuestions] = useState<boolean>(false);
    const timerIntervalRef = useRef<number | null>(null);
    const printRef = useRef<HTMLDivElement>(null);

    // Format time for display
    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Start the timer when user begins the exam
    const startTimer = () => {
        if (!timerStarted) {
            setTimerStarted(true);
            timerIntervalRef.current = window.setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }
    };

    // Stop the timer
    const stopTimer = () => {
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
    };

    // Handle topic selection changes
    const handleTopicChange = (topicId: string, isSelected: boolean) => {
        if (isSelected) {
            // Add topic with default count of 1
            setSelectedTopics([...selectedTopics, { id: topicId, count: 1 }]);
        } else {
            // Remove topic
            setSelectedTopics(selectedTopics.filter(topic => topic.id !== topicId));
        }
    };

    // Change the number of questions for a topic
    const handleCountChange = (topicId: string, increment: boolean) => {
        setSelectedTopics(
            selectedTopics.map(topic => {
                if (topic.id === topicId) {
                    const newCount = increment ? topic.count + 1 : Math.max(1, topic.count - 1);
                    return { ...topic, count: newCount };
                }
                return topic;
            })
        );
    };

    // Generate the exam with selected topics
    const generateExam = () => {
        if (selectedTopics.length === 0) {
            alert("Por favor selecciona al menos un tema.");
            return;
        }

        const questions = getQuestionsFromSelectedTopics(selectedTopics);
        if (questions.length === 0) {
            alert("No hay suficientes preguntas disponibles. Por favor selecciona otros temas.");
            return;
        }
        
        setGeneratedQuestions(questions);
        setShowTopicSelection(false);
        setAnswers({});
        startTimer();
    };

    // Handle option selection for a question
    const handleSelect = (qIndex: number, letter: string) => {
        setAnswers({ ...answers, [qIndex]: letter });
    };

    // Navigate to a specific question
    const navigateToQuestion = (index: number) => {
        if (index >= 0 && index < generatedQuestions.length) {
            setCurrentQuestionIndex(index);
        }
    };

    // Submit the exam for grading
    const handleSubmit = () => {
        stopTimer();
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    // Reset the exam
    const resetExam = () => {
        setShowTopicSelection(true);
        setSubmitted(false);
        setAnswers({});
        setTimer(0);
        setTimerStarted(false);
        stopTimer();
    };

    // Calculate the score
    const score = Object.keys(answers).reduce((acc, key) => {
        const index = parseInt(key);
        if (generatedQuestions[index].correctAnswer === answers[index]) {
            return acc + 1;
        }
        return acc;
    }, 0);

    // Get the text of an option by its letter
    const getOptionText = (q: Question, letter: string) => {
        return q.options.find((opt: Option) => opt.letter === letter)?.text || "";
    };

    // Print the exam or results
    const handlePrint = () => {
        window.print();
    };

    // Calculate total questions
    const totalQuestions = selectedTopics.reduce((total, topic) => total + topic.count, 0);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 pb-12 px-4 p-4">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic">Generacion 2025 Rescate 1: Este examen fue hecho por los alumnos de la clase sabados R1 2025</p>
            <div className="flex justify-center">
                <p className="text-5xl font-bold mb-4 flex text-center">Examen Personalizado</p>
            </div>
            <NavLink
                to={AllRoutes.EMT}
                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out4">
                <IoReturnDownBack className="w-5 h-5 my-auto" />
                <p className="text-lg">Regresar</p>
            </NavLink>

            {showTopicSelection ? (
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mt-4">
                    <h2 className="text-2xl font-bold text-center mb-4">Selecciona los temas y el número de preguntas</h2>
                    <p className="text-gray-600 mb-6 text-center">
                        Escoge los temas que deseas incluir en tu examen y la cantidad de preguntas por cada tema.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lections.filter(lection => lection.id !== '1' && lection.active).map((lection) => {
                            const isSelected = selectedTopics.some(topic => topic.id === lection.id);
                            const topicCount = selectedTopics.find(topic => topic.id === lection.id)?.count || 1;

                            return (
                                <div 
                                    key={lection.id} 
                                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                        isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`topic-${lection.id}`}
                                                checked={isSelected}
                                                onChange={(e) => handleTopicChange(lection.id, e.target.checked)}
                                                className="mr-3 h-5 w-5 text-orange-500"
                                            />
                                            <label htmlFor={`topic-${lection.id}`} className="font-medium text-gray-800">
                                                {lection.title}
                                            </label>
                                        </div>
                                        {lection.icon}
                                    </div>

                                    {isSelected && (
                                        <div className="mt-3 flex items-center justify-end">
                                            <button
                                                type="button"
                                                onClick={() => handleCountChange(lection.id, false)}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-l-md px-2 py-1"
                                            >
                                                <FaMinus className="h-3 w-3" />
                                            </button>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-800 font-medium">
                                                {topicCount} {topicCount === 1 ? 'pregunta' : 'preguntas'}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => handleCountChange(lection.id, true)}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-r-md px-2 py-1"
                                            >
                                                <FaPlus className="h-3 w-3" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <p className="text-lg font-semibold mb-4">
                            Total: {totalQuestions} {totalQuestions === 1 ? 'pregunta' : 'preguntas'} seleccionadas
                        </p>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={generateExam}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300"
                                disabled={selectedTopics.length === 0}
                            >
                                Generar Examen
                            </button>
                        </div>
                    </div>
                </div>
            ) : !submitted ? (
                <div ref={printRef} className="w-full max-w-4xl print:w-full">
                    {/* Timer and control bar */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6 print:hidden exam-controls">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                            <div className="flex items-center mb-4 md:mb-0">
                                <FaClock className="text-orange-500 mr-2" />
                                <span className="text-lg font-semibold">
                                    Tiempo: {formatTime(timer)}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold mr-2">
                                    Progreso: {Object.keys(answers).length} / {generatedQuestions.length}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setShowAllQuestions(!showAllQuestions)}
                                    className="ml-4 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300"
                                >
                                    {showAllQuestions ? "Ver una pregunta" : "Ver todas las preguntas"}
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePrint}
                                    className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300 flex items-center"
                                >
                                    <FaPrint className="mr-2" /> Imprimir Examen
                                </button>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-orange-500 h-4"
                                style={{ width: `${(Object.keys(answers).length / generatedQuestions.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Question indicators */}
                        <div className="mt-3 flex flex-wrap gap-2 justify-center">
                            {generatedQuestions.map((_, idx) => (
                                <button
                                    type="button"
                                    key={idx}
                                    onClick={() => !showAllQuestions && navigateToQuestion(idx)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all
                                        ${!showAllQuestions && currentQuestionIndex === idx 
                                            ? 'bg-orange-500 text-white' 
                                            : answers[idx] 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Exam form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        className="bg-white rounded-lg shadow-md p-6 print-full-width"
                    >
                        {showAllQuestions ? (
                            // Show all questions
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-center print:text-center exam-header">Examen Personalizado</h2>
                                {generatedQuestions.map((q, index) => (
                                    <div key={index} className="mb-8 pb-6 border-b border-gray-200 last:border-0 print-break-inside-avoid question-item">
                                        <p className="font-semibold mb-3 text-lg">
                                            {index + 1}. {q.question}
                                        </p>
                                        <div className="space-y-3 ml-5">
                                            {q.options.map((opt) => (
                                                <label key={opt.letter} className="flex items-start gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name={`question-${index}`}
                                                        value={opt.letter}
                                                        checked={answers[index] === opt.letter}
                                                        onChange={() => handleSelect(index, opt.letter)}
                                                        className="mt-1"
                                                    />
                                                    <div>
                                                        <span className="font-medium">{opt.letter.toUpperCase()})</span> {opt.text}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Show single question
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-center">Pregunta {currentQuestionIndex + 1} de {generatedQuestions.length}</h2>
                                <div className="my-6">
                                    <p className="font-semibold mb-4 text-lg">
                                        {generatedQuestions[currentQuestionIndex].question}
                                    </p>
                                    <div className="space-y-3 ml-5">
                                        {generatedQuestions[currentQuestionIndex].options.map((opt) => (
                                            <label key={opt.letter} className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestionIndex}`}
                                                    value={opt.letter}
                                                    checked={answers[currentQuestionIndex] === opt.letter}
                                                    onChange={() => handleSelect(currentQuestionIndex, opt.letter)}
                                                    className="mt-1"
                                                />
                                                <div>
                                                    <span className="font-medium">{opt.letter.toUpperCase()})</span> {opt.text}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex justify-between mt-8">
                                    <button
                                        type="button"
                                        onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
                                        disabled={currentQuestionIndex === 0}
                                        className={`bg-gray-100 px-4 py-2 rounded-md shadow-sm ${
                                            currentQuestionIndex === 0 
                                            ? 'opacity-50 cursor-not-allowed' 
                                            : 'hover:bg-gray-200 transition-colors'
                                        }`}
                                    >
                                        Pregunta Anterior
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigateToQuestion(currentQuestionIndex + 1)}
                                        disabled={currentQuestionIndex === generatedQuestions.length - 1}
                                        className={`bg-gray-100 px-4 py-2 rounded-md shadow-sm ${
                                            currentQuestionIndex === generatedQuestions.length - 1 
                                            ? 'opacity-50 cursor-not-allowed' 
                                            : 'hover:bg-gray-200 transition-colors'
                                        }`}
                                    >
                                        Siguiente Pregunta
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex justify-center print:hidden">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-md shadow-md transition duration-300"
                            >
                                Calificar Examen
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                // Results view
                <div ref={printRef} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mt-4 print-full-width">
                    <div className="print:hidden flex justify-between items-center mb-6 print-hidden">
                        <h2 className="text-2xl font-bold">Resultados del Examen</h2>
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrint}
                                className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300"
                            >
                                <FaPrint className="mr-2" /> Imprimir Resultados
                            </button>
                            <button
                                onClick={resetExam}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300"
                            >
                                Crear Nuevo Examen
                            </button>
                        </div>
                    </div>

                    <div className="print:mb-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                            <h3 className="text-xl font-bold text-blue-800 mb-2 exam-header">Resumen</h3>
                            <p className="text-lg">
                                Respondiste correctamente <span className="font-bold">{score}</span> de <span className="font-bold">{generatedQuestions.length}</span> preguntas.
                            </p>
                            <p className="text-lg">
                                Calificación: <span className="font-bold">{((score / generatedQuestions.length) * 100).toFixed(2)}%</span>
                            </p>
                            <p className="text-lg">
                                Tiempo total: <span className="font-bold">{formatTime(timer)}</span>
                            </p>
                        </div>

                        <h3 className="text-xl font-bold mb-4 exam-header">Revisión de Respuestas</h3>
                        <div className="space-y-8">
                            {generatedQuestions.map((q, index) => (
                                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 print-break-inside-avoid question-item">
                                    <p className="font-semibold mb-2">
                                        {index + 1}. {q.question}
                                    </p>
                                    <p className="mb-1">
                                        Tu respuesta: {answers[index] ? (
                                            <span className={answers[index] === q.correctAnswer ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                                {answers[index].toUpperCase()}) {getOptionText(q, answers[index])}
                                            </span>
                                        ) : <span className="text-yellow-600 font-medium">Sin respuesta</span>}
                                    </p>
                                    
                                    {answers[index] !== q.correctAnswer && (
                                        <p className="text-green-600 font-medium">
                                            Respuesta correcta: {q.correctAnswer.toUpperCase()}) {getOptionText(q, q.correctAnswer)}
                                        </p>
                                    )}
                                    
                                    <div className="mt-2">
                                        {answers[index] === q.correctAnswer ? (
                                            <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                                                ✓ Correcto
                                            </div>
                                        ) : answers[index] ? (
                                            <div className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                                                ✗ Incorrecto
                                            </div>
                                        ) : (
                                            <div className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-medium">
                                                ! Sin respuesta
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}