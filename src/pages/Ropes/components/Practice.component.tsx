import { useState } from 'react';
import { useRopeExam } from '../Ropes.hook';
import { ROPE_RESCUE_FAQ } from '../Ropes.constants';
import { MdQuiz, MdCheckCircle, MdArrowBack, MdArrowForward, MdRefresh } from 'react-icons/md';
import { FaChartBar, FaTrophy, FaExclamationCircle, FaQuestionCircle, FaCheck, FaTimes, FaLightbulb } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/16/solid';

export default function Practice() {
    const [mode, setMode] = useState<'select' | 'exam' | 'results'>('select');
    const exam = useRopeExam();

    const startExam = () => {
        exam.resetExam();
        setMode('exam');
    };

    const finishExam = () => {
        exam.submitExam();
        setMode('results');
    };

    const retryExam = () => {
        exam.resetExam();
        setMode('exam');
    };

    const backToSelect = () => {
        setMode('select');
    };

    return (
        <div className="space-y-6">
            {mode === 'select' && (
                <>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                        <div className="flex items-center mb-4">
                            <MdQuiz className="w-8 h-8 text-indigo-600 mr-3"/>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Práctica y Evaluación</h2>
                                <p className="text-gray-600">Pon a prueba tus conocimientos de rescate con cuerdas</p>
                            </div>
                        </div>
                    </div>

                    {/* Opciones de práctica */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div
                            onClick={startExam}
                            className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-indigo-500 cursor-pointer transition-all group"
                        >
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <BsListCheck className="w-8 h-8 text-indigo-600 group-hover:text-white"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Examen de Práctica</h3>
                            <p className="text-gray-600 mb-4">
                                Responde preguntas sobre nudos, equipo, técnicas y seguridad.
                                Recibe retroalimentación instantánea.
                            </p>
                            <div className="flex items-center text-indigo-600 font-medium">
                                <span>Iniciar examen</span>
                                <MdArrowForward className="ml-2"/>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg p-6 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <FaTrophy className="w-8 h-8"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Tip para el Éxito</h3>
                            <p className="text-white/90 mb-4">
                                El dominio del rescate con cuerdas requiere práctica constante.
                                Revisa las preguntas frecuentes y practica los nudos regularmente.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                    Practica nudos hasta hacerlos con los ojos cerrados
                                </li>
                                <li className="flex items-center">
                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                    Revisa el equipo antes de cada uso
                                </li>
                                <li className="flex items-center">
                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                    Nunca dejes de aprender y actualizar conocimientos
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <FaQuestionCircle className="w-6 h-6 text-blue-500 mr-2"/>
                            Preguntas Frecuentes
                        </h3>
                        <div className="space-y-3">
                            {ROPE_RESCUE_FAQ.map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-50 px-4 py-3 text-left font-medium hover:bg-indigo-50 transition">
                                                <span className="text-gray-800">{faq.question}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''} h-5 w-5 text-gray-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-600 bg-white">
                                                {faq.answer}
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {mode === 'exam' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Header del examen */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <MdQuiz className="w-6 h-6 mr-2"/>
                                <span className="font-bold">Examen de Rescate con Cuerdas</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                    Pregunta {exam.currentQuestion + 1} de {exam.questions.length}
                                </span>
                            </div>
                        </div>
                        {/* Barra de progreso */}
                        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-300"
                                style={{ width: `${((exam.currentQuestion + 1) / exam.questions.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Contenido de la pregunta */}
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">
                            {exam.questions[exam.currentQuestion]?.question}
                        </h3>

                        <div className="space-y-3">
                            {exam.questions[exam.currentQuestion]?.options.map((option) => (
                                <button
                                    key={option.letter}
                                    onClick={() => exam.selectAnswer(exam.currentQuestion, option.letter)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                        exam.selectedAnswers[exam.currentQuestion] === option.letter
                                            ? 'border-indigo-500 bg-indigo-50'
                                            : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
                                            exam.selectedAnswers[exam.currentQuestion] === option.letter
                                                ? 'bg-indigo-500 text-white'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}>
                                            {option.letter.toUpperCase()}
                                        </span>
                                        <span className="text-gray-700">{option.text}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
                        <button
                            onClick={exam.prevQuestion}
                            disabled={exam.currentQuestion === 0}
                            className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <MdArrowBack className="mr-1"/> Anterior
                        </button>

                        <div className="flex space-x-2">
                            {exam.questions.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => exam.setCurrentQuestion(idx)}
                                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                                        exam.currentQuestion === idx
                                            ? 'bg-indigo-500 text-white'
                                            : exam.selectedAnswers[idx]
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>

                        {exam.currentQuestion === exam.questions.length - 1 ? (
                            <button
                                onClick={finishExam}
                                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Finalizar <MdCheckCircle className="ml-1"/>
                            </button>
                        ) : (
                            <button
                                onClick={exam.nextQuestion}
                                className="flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700"
                            >
                                Siguiente <MdArrowForward className="ml-1"/>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {mode === 'results' && (
                <div className="space-y-6">
                    {/* Resultado */}
                    <div className={`rounded-xl shadow-lg p-8 text-center ${
                        exam.percentage >= 80 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                            : exam.percentage >= 60
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                : 'bg-gradient-to-r from-red-500 to-rose-500'
                    } text-white`}>
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            {exam.percentage >= 80 ? (
                                <FaTrophy className="w-12 h-12"/>
                            ) : exam.percentage >= 60 ? (
                                <FaChartBar className="w-12 h-12"/>
                            ) : (
                                <FaExclamationCircle className="w-12 h-12"/>
                            )}
                        </div>
                        <h2 className="text-3xl font-bold mb-2">
                            {exam.percentage >= 80 ? '¡Excelente!' : exam.percentage >= 60 ? '¡Buen trabajo!' : 'Sigue practicando'}
                        </h2>
                        <p className="text-5xl font-bold mb-2">{exam.percentage}%</p>
                        <p className="text-xl opacity-90">
                            {exam.score} de {exam.questions.length} respuestas correctas
                        </p>
                    </div>

                    {/* Revisión de respuestas */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <BsListCheck className="w-6 h-6 text-indigo-500 mr-2"/>
                            Revisión de Respuestas
                        </h3>
                        <div className="space-y-4">
                            {exam.questions.map((q, idx) => {
                                const isCorrect = exam.selectedAnswers[idx] === q.correctAnswer;
                                const userAnswer = q.options.find(o => o.letter === exam.selectedAnswers[idx]);
                                const correctAnswer = q.options.find(o => o.letter === q.correctAnswer);

                                return (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-lg border-2 ${
                                            isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-500">
                                                Pregunta {idx + 1}
                                            </span>
                                            {isCorrect ? (
                                                <span className="flex items-center text-green-600 text-sm">
                                                    <FaCheck className="mr-1"/> Correcta
                                                </span>
                                            ) : (
                                                <span className="flex items-center text-red-600 text-sm">
                                                    <FaTimes className="mr-1"/> Incorrecta
                                                </span>
                                            )}
                                        </div>
                                        <p className="font-medium text-gray-800 mb-3">{q.question}</p>

                                        {!isCorrect && (
                                            <div className="space-y-2 text-sm">
                                                <p className="text-red-600">
                                                    <strong>Tu respuesta:</strong> {userAnswer?.text || 'Sin responder'}
                                                </p>
                                                <p className="text-green-600">
                                                    <strong>Respuesta correcta:</strong> {correctAnswer?.text}
                                                </p>
                                            </div>
                                        )}

                                        {q.explanation && (
                                            <div className="mt-3 p-3 bg-white rounded-lg border">
                                                <p className="text-sm text-gray-600 flex items-start">
                                                    <FaLightbulb className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0"/>
                                                    {q.explanation}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={backToSelect}
                            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                        >
                            <MdArrowBack className="mr-2"/> Volver
                        </button>
                        <button
                            onClick={retryExam}
                            className="flex items-center px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                        >
                            <MdRefresh className="mr-2"/> Intentar de nuevo
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

