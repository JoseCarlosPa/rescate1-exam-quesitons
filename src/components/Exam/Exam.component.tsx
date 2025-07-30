import {useState, useEffect, useRef} from "react";
import {Option, Question} from "../../question";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router";
import { ExamProps } from "./Exam.types";
import {AllRoutes} from "../Router/Router.constants.ts";
import {auth, db} from "../../firebase/firebaseConfig.ts";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {FaHome, FaArrowLeft, FaCheck, FaTimes, FaClock, FaPrint} from "react-icons/fa";
import { ExamData } from "../../pages/Student/Grades/StudentGrades.page.tsx";
import { Timestamp } from "firebase/firestore";

export default function Exam(props: ExamProps){
    const [answers, setAnswers] = useState<{ [index: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [showAllQuestions, setShowAllQuestions] = useState<boolean>(false);
    const timerIntervalRef = useRef<number | null>(null);

    // Iniciar el temporizador cuando se monta el componente
    useEffect(() => {
        timerIntervalRef.current = window.setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
            }
        };
    }, []);

    // Formatear el tiempo en hh:mm:ss
    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSelect = (qIndex: number, letter: string) => {
        setAnswers({ ...answers, [qIndex]: letter });
    };

    const navigateToQuestion = (index: number) => {
        if (index >= 0 && index < props.questions.length) {
            setCurrentQuestionIndex(index);
        }
    };

    const handleSubmit = async () => {
        // Detener el temporizador cuando se califica el examen
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }

        setSubmitted(true);
        const correctAnswers = Object.keys(answers).reduce((acc, key) => {
            const index = parseInt(key);
            if (props.questions[index].correctAnswer === answers[index]) {
                return acc + 1;
            }
            return acc;
        }, 0);

        const finalScore = Math.round((correctAnswers / props.questions.length) * 100);
        setLoading(true);

        const user = auth.currentUser;

        if (user) {
            try {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const currentExams = userData.exams || {};

                    // Crear el objeto ExamData para este examen
                    const examData: ExamData = {
                        completed: true,
                        score: finalScore,
                        totalQuestions: props.questions.length,
                        correctAnswers: correctAnswers,
                        completedAt: Timestamp.now()
                    };

                    // Actualizar el examen específico usando el ID del examen
                    const updatedExams = {
                        ...currentExams,
                        [props.id.toString()]: examData
                    };

                    // Guardar en Firestore
                    await updateDoc(userDocRef, {
                        exams: updatedExams
                    });

                    console.log(`Examen ${props.id} completado con ${finalScore}% de calificación`);
                } else {
                    console.error("El documento del usuario no existe.");
                }
            } catch (error) {
                console.error("Error al guardar los resultados del examen:", error);
            }
        } else {
            console.error("No hay un usuario autenticado.");
        }

        setLoading(false);
        window.scrollTo(0, 0);
    };

    const score = Object.keys(answers).reduce((acc, key) => {
        const index = parseInt(key);
        if (props.questions[index].correctAnswer === answers[index]) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const getOptionText = (q: Question, letter: string) => {
        return q.options.find((opt: Option) => opt.letter === letter)?.text || "";
    };

    // Función para imprimir los resultados
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen w-full pb-12 px-4 md:px-8">
            {/* Cabecera */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-8 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src={logo} alt="Logo" className="h-16 w-16 mr-4" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{props.name}</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavLink
                            to={AllRoutes.EMT}
                            className="flex items-center gap-2 bg-gray-100 hover:bg-orange-100 text-gray-700 px-4 py-2 rounded-md shadow-sm transition duration-300 ease-in-out"
                        >
                            <FaHome className="text-orange-500" />
                            <span>Inicio</span>
                        </NavLink>
                        <NavLink
                            to={props.returnRoute}
                            className="flex items-center gap-2 bg-gray-100 hover:bg-orange-100 text-gray-700 px-4 py-2 rounded-md shadow-sm transition duration-300 ease-in-out"
                        >
                            <FaArrowLeft className="text-orange-500" />
                            <span>Regresar</span>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Spinner de carga */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <AiOutlineLoading3Quarters className="animate-spin h-12 w-12 text-orange-500 mb-4" />
                        <p className="text-lg font-medium">Procesando resultados...</p>
                    </div>
                </div>
            )}

            {/* Contenido principal */}
            <div className="w-full max-w-4xl">
                {!submitted ? (
                    <form
                        className="w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        {/* Barra de estado y tiempo */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <FaClock className="text-orange-500 mr-2" />
                                    <span className="text-lg font-semibold">
                                        Tiempo: {formatTime(timer)}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg font-semibold mr-2">
                                        Progreso: {Object.keys(answers).length} / {props.questions.length}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setShowAllQuestions(!showAllQuestions)}
                                        className="ml-4 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md shadow-sm transition duration-300"
                                    >
                                        {showAllQuestions ? "Ver una pregunta" : "Ver todas las preguntas"}
                                    </button>
                                </div>
                            </div>

                            {/* Barra de progreso */}
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                <div
                                    className="bg-orange-500 h-4"
                                    style={{ width: `${(Object.keys(answers).length / props.questions.length) * 100}%` }}
                                ></div>
                            </div>

                            {/* Indicadores numéricos */}
                            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                {props.questions.map((_, idx) => (
                                    <button
                                        type="button"
                                        key={idx}
                                        onClick={() => !showAllQuestions && navigateToQuestion(idx)}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all
                                            ${!showAllQuestions && currentQuestionIndex === idx 
                                                ? 'bg-blue-500 text-white' 
                                                : answers[idx] 
                                                    ? 'bg-green-500 text-white' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Preguntas */}
                        {showAllQuestions ? (
                            <div className="space-y-6">
                                {props.questions.map((q, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-orange-500 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray-800">{q.question}</h3>
                                        </div>
                                        <div className="space-y-3 ml-11">
                                            {q.options.map((opt) => (
                                                <label key={opt.letter} className="flex items-start p-3 rounded-md border border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name={`question-${index}`}
                                                        value={opt.letter}
                                                        checked={answers[index] === opt.letter}
                                                        onChange={() => handleSelect(index, opt.letter)}
                                                        className="mt-1 mr-3"
                                                    />
                                                    <div>
                                                        <span className="font-medium text-gray-700">{opt.letter.toUpperCase()}) </span>
                                                        <span className="text-gray-800">{opt.text}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                                <div className="flex items-center mb-4">
                                    <span className="bg-orange-500 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                        {currentQuestionIndex + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-800">{props.questions[currentQuestionIndex].question}</h3>
                                </div>
                                <div className="space-y-3 ml-11">
                                    {props.questions[currentQuestionIndex].options.map((opt) => (
                                        <label key={opt.letter} className="flex items-start p-3 rounded-md border border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">
                                            <input
                                                type="radio"
                                                name={`question-${currentQuestionIndex}`}
                                                value={opt.letter}
                                                checked={answers[currentQuestionIndex] === opt.letter}
                                                onChange={() => handleSelect(currentQuestionIndex, opt.letter)}
                                                className="mt-1 mr-3"
                                            />
                                            <div>
                                                <span className="font-medium text-gray-700">{opt.letter.toUpperCase()}) </span>
                                                <span className="text-gray-800">{opt.text}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                {/* Navegación entre preguntas */}
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
                                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
                                        disabled={currentQuestionIndex === 0}
                                    >
                                        <FaArrowLeft />
                                        <span>Anterior</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigateToQuestion(currentQuestionIndex + 1)}
                                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
                                        disabled={currentQuestionIndex === props.questions.length - 1}
                                    >
                                        <span>Siguiente</span>
                                        <FaArrowLeft className="rotate-180" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Botón de enviar */}
                        <div className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={Object.keys(answers).length < props.questions.length}
                            >
                                {loading ? (
                                    <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                ) : (
                                    <>
                                        <FaCheck /> Calificar examen
                                    </>
                                )}
                            </button>
                        </div>
                        {Object.keys(answers).length < props.questions.length && (
                            <p className="text-center text-red-500 mt-2">
                                Debes responder todas las preguntas para enviar el examen
                            </p>
                        )}
                    </form>
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Resultados del Examen</h2>

                            <div className="bg-gray-100 rounded-lg p-6 inline-block">
                                <div className="text-5xl font-bold mb-2" style={{
                                    color: score / props.questions.length >= 0.7 ? '#059669' : score / props.questions.length >= 0.6 ? '#D97706' : '#DC2626'
                                }}>
                                    {((score / props.questions.length) * 100).toFixed(0)}%
                                </div>
                                <p className="text-xl text-gray-700">
                                    {score} de {props.questions.length} respuestas correctas
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Tiempo total: {formatTime(timer)}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {props.questions.map((q, index) => {
                                const isCorrect = answers[index] === q.correctAnswer;
                                return (
                                    <div key={index} className={`border-l-4 ${
                                        isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                                    } rounded-lg p-6`}>
                                        <div className="flex items-start">
                                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-3 ${
                                                isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                            }`}>
                                                {isCorrect ? <FaCheck /> : <FaTimes />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                                    {index + 1}. {q.question}
                                                </h3>

                                                <div className="mb-2">
                                                    <span className="font-medium">Tu respuesta: </span>
                                                    <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                                        {answers[index]?.toUpperCase()}) {getOptionText(q, answers[index])}
                                                    </span>
                                                </div>

                                                {!isCorrect && (
                                                    <div>
                                                        <span className="font-medium">Respuesta correcta: </span>
                                                        <span className="text-green-700">
                                                            {q.correctAnswer.toUpperCase()}) {getOptionText(q, q.correctAnswer)}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Explicación de la pregunta */}
                                                {q?.explanation && (
                                                    <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                                                        <span className="font-medium text-blue-700">Explicación: </span>
                                                        <span className="text-blue-800">{q.explanation}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex justify-center gap-4">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex items-center gap-2 bg-gray-100 hover:bg-orange-100 text-gray-700 px-6 py-3 rounded-md shadow-sm transition duration-300"
                            >
                                <FaHome className="text-orange-500" />
                                <span>Volver al inicio</span>
                            </NavLink>
                            <button
                                type="button"
                                onClick={handlePrint}
                                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-sm transition duration-300"
                            >
                                <FaPrint className="text-white" />
                                <span>Imprimir resultados</span>
                            </button>
                            <NavLink
                                to={props.returnRoute}
                                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-sm transition duration-300"
                            >
                                <FaArrowLeft className="text-white" />
                                <span>Regresar</span>
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
