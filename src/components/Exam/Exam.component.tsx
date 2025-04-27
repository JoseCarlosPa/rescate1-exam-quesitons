import {useState} from "react";
import {Option, Question} from "../../question";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router";
import { ExamProps } from "./Exam.types";

export default function Exam(props: ExamProps){
    const [answers, setAnswers] = useState<{ [index: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (qIndex: number, letter: string) => {
        setAnswers({ ...answers, [qIndex]: letter });
    };

    const handleSubmit = () => {
        setSubmitted(true);
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
    return (
        <div className="flex flex-col items-center w-screen justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic ">Generacion 2025 Rescate 1: Este examen fue hecho por los alumnos de la clase sabados R1 2025</p>
            <div className="flex justify-center ">
                <p className="text-2xl font-bold mb-4 flex text-center">Examen Prueba: {props.name}</p>
            </div>
            <div className="flex gap-4">
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Inicio</p>
                </NavLink>
                <NavLink
                    to={props.returnRoute}
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>

            {!submitted ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    {props.questions.map((q, index) => (
                        <div key={index} className="mb-6">
                            <p className="font-semibold mb-2">
                                {index + 1}. {q.question}
                            </p>
                            <div className="space-y-2">
                                {q.options.map((opt) => (
                                    <label key={opt.letter} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={opt.letter}
                                            checked={answers[index] === opt.letter}
                                            onChange={() => handleSelect(index, opt.letter)}

                                        />
                                        {opt.letter}) {opt.text}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold py-2 px-4 rounded shadow"
                    >
                        Calificar respuestas
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Resultado</h2>
                    <p className="mt-4 text-xl">
                        Respondiste correctamente {score} de {props.questions.length} preguntas.
                        Sacaste un {((score / props.questions.length) * 100).toFixed(2)}%
                    </p>
                    <div className="mt-8 space-y-6">
                        {props.questions.map((q, index) => (
                            <div key={index} className="text-left">
                                <p className="font-semibold">
                                    {index + 1}. {q.question}
                                </p>
                                <p>
                                    Tu respuesta: <strong>{answers[index]?.toUpperCase()}) {getOptionText(q, answers[index])}</strong>
                                </p>
                                {answers[index] === q.correctAnswer ? (
                                    <p className="text-green-600 font-semibold">✅ Correcto</p>
                                ) : (
                                    <p className="text-red-600 font-semibold">
                                        ❌ Incorrecto (Respuesta correcta: {q.correctAnswer.toUpperCase()}) {getOptionText(q, q.correctAnswer)}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}