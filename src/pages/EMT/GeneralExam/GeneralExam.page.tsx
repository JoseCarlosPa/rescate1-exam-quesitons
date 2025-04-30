import {useState} from "react";
import {generalExamQuestions} from "./GeneralExam.questions.ts";
import {Option, Question} from "../../../question";
import logo from "../../../assets/logo.png";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function GeneralExam(){
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
        if (generalExamQuestions[index].correctAnswer === answers[index]) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const getOptionText = (q: Question, letter: string) => {
        return q.options.find((opt:Option) => opt.letter === letter)?.text || "";
    };
    return (
        <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12  px-4   p-4">

            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic">Generacion 2025 Rescate 1: Este examen fue hecho por los alumnos de la clase sabados R1 2025</p>
            <div className="flex justify-center ">
                <p className="text-5xl font-bold mb-4 flex text-center">Examen Prueba: General</p>
            </div>
            <NavLink
                to={AllRoutes.EMT}
                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                <IoReturnDownBack className="w-5 h-5 my-auto"  />
                <p className="text-lg">Regresar</p>
            </NavLink>
            {!submitted ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    {generalExamQuestions.map((q, index) => (
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
                        Respondiste correctamente {score} de {generalExamQuestions.length} preguntas.
                        Sacaste un {((score / generalExamQuestions.length) * 100).toFixed(2)}%
                    </p>
                    <div className="mt-8 space-y-6">
                        {generalExamQuestions.map((q, index) => (
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