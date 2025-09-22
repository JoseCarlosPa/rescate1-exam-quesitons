import {useState} from "react";
import {FaAmbulance, FaClock, FaStethoscope, FaUser} from "react-icons/fa";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import {BiAnalyse} from "react-icons/bi";

interface ClinicalCase {
    id: number;
    title: string;
    scenario: string;
    vitals: {
        age: string;
        gender: string;
        consciousness: string;
        bp: string;
        hr: string;
        rr: string;
        sao2: string;
        temp: string;
        glucose: string;
    };
    findings: string[];
    questions: {
        question: string;
        options: string[];
        correct: number;
        explanation: string;
    }[];
}

const clinicalCases: ClinicalCase[] = [
    {
        id: 1,
        title: "Caso 1: Sospecha de EVC",
        scenario: "Paciente masculino de 68 años encontrado por su esposa en el suelo del baño a las 7:30 AM. La esposa refiere que lo vio normal a las 6:00 AM cuando desayunaron juntos. Presenta debilidad del lado derecho, no puede hablar claramente y tiene desviación de la comisura labial.",
        vitals: {
            age: "68 años",
            gender: "Masculino",
            consciousness: "Consciente, desorientado",
            bp: "160/95 mmHg",
            hr: "88 lpm",
            rr: "16 rpm",
            sao2: "97%",
            temp: "36.8°C",
            glucose: "145 mg/dL"
        },
        findings: [
            "Hemiparesia derecha",
            "Afasia mixta",
            "Desviación de comisura labial izquierda",
            "Pupilas isocóricas y reactivas",
            "No rigidez de nuca"
        ],
        questions: [
            {
                question: "¿Cuál es la ventana terapéutica crítica para el tratamiento de EVC isquémico?",
                options: [
                    "1-2 horas",
                    "3-4.5 horas",
                    "6-8 horas",
                    "12-24 horas"
                ],
                correct: 1,
                explanation: "La trombólisis es más efectiva cuando se administra dentro de las primeras 3-4.5 horas del inicio de síntomas."
            },
            {
                question: "¿Qué escala es más apropiada para evaluar este paciente?",
                options: [
                    "Escala de Glasgow",
                    "Escala Cincinnati",
                    "Escala de Trauma",
                    "Escala de Sedación"
                ],
                correct: 1,
                explanation: "La escala Cincinnati evalúa específicamente signos de EVC: parálisis facial, debilidad de brazos y alteración del habla."
            }
        ]
    },
    {
        id: 2,
        title: "Caso 2: Crisis Convulsiva",
        scenario: "Mujer de 25 años en centro comercial presenta súbitamente movimientos tónico-clónicos generalizados. Testigos refieren que gritó antes de caer. La crisis duró aproximadamente 2 minutos. Ahora está confusa y somnolienta.",
        vitals: {
            age: "25 años",
            gender: "Femenino",
            consciousness: "Confusa, somnolienta",
            bp: "110/70 mmHg",
            hr: "105 lpm",
            rr: "20 rpm",
            sao2: "94%",
            temp: "37.2°C",
            glucose: "95 mg/dL"
        },
        findings: [
            "Estado post-ictal",
            "Mordedura lateral de lengua",
            "Incontinencia urinaria",
            "Confusión y desorientación",
            "Salivación aumentada"
        ],
        questions: [
            {
                question: "¿Qué NO debe hacer durante una convulsión activa?",
                options: [
                    "Proteger la cabeza del paciente",
                    "Introducir objeto en la boca",
                    "Cronometrar la duración",
                    "Mantener vía aérea permeable"
                ],
                correct: 1,
                explanation: "Nunca se debe introducir objetos en la boca durante una convulsión, ya que puede causar lesiones dentales o obstrucción de vía aérea."
            },
            {
                question: "En el período post-ictal, la prioridad es:",
                options: [
                    "Administrar medicamentos",
                    "Obtener historia clínica detallada",
                    "Mantener vía aérea y oxigenación",
                    "Realizar examen neurológico completo"
                ],
                correct: 2,
                explanation: "En el período post-ictal, la prioridad es mantener la vía aérea permeable y asegurar adecuada oxigenación."
            }
        ]
    }
];

export default function Practice() {
    const [selectedCase, setSelectedCase] = useState<number | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: number }>({});
    const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});

    const handleAnswerSelect = (caseId: number, questionIndex: number, answerIndex: number) => {
        const key = `${caseId}-${questionIndex}`;
        setAnswers(prev => ({
            ...prev,
            [key]: answerIndex
        }));
    };

    const showAnswer = (caseId: number, questionIndex: number) => {
        const key = `${caseId}-${questionIndex}`;
        setShowResults(prev => ({
            ...prev,
            [key]: true
        }));
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Casos Clínicos Interactivos</h2>
                <p className="text-gray-600">
                    Practica con casos reales de emergencias neurológicas y pon a prueba tus conocimientos
                </p>
            </div>

            {clinicalCases.map((clinicalCase) => (
                <div key={clinicalCase.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div
                        className="p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedCase(selectedCase === clinicalCase.id ? null : clinicalCase.id)}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">{clinicalCase.title}</h3>
                            {selectedCase === clinicalCase.id ? (
                                <MdExpandLess className="w-6 h-6 text-gray-500"/>
                            ) : (
                                <MdExpandMore className="w-6 h-6 text-gray-500"/>
                            )}
                        </div>
                    </div>

                    {selectedCase === clinicalCase.id && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                            {/* Escenario */}
                            <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaAmbulance className="w-5 h-5 text-blue-600"/>
                                    <h4 className="font-semibold text-blue-800">Escenario</h4>
                                </div>
                                <p className="text-blue-700 text-sm leading-relaxed">{clinicalCase.scenario}</p>
                            </div>

                            {/* Signos Vitales */}
                            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaStethoscope className="w-5 h-5 text-green-600"/>
                                    <h4 className="font-semibold text-green-800">Signos Vitales y Datos</h4>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <FaUser className="w-4 h-4 text-green-600"/>
                                            <span className="text-sm">
                                                <strong>Edad:</strong> {clinicalCase.vitals.age}
                                            </span>
                                        </div>
                                        <div className="text-sm">
                                            <strong>Sexo:</strong> {clinicalCase.vitals.gender}
                                        </div>
                                        <div className="text-sm">
                                            <strong>Conciencia:</strong> {clinicalCase.vitals.consciousness}
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>PA:</strong> {clinicalCase.vitals.bp}</div>
                                        <div><strong>FC:</strong> {clinicalCase.vitals.hr}</div>
                                        <div><strong>FR:</strong> {clinicalCase.vitals.rr}</div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>SaO₂:</strong> {clinicalCase.vitals.sao2}</div>
                                        <div><strong>Temp:</strong> {clinicalCase.vitals.temp}</div>
                                        <div><strong>Glucosa:</strong> {clinicalCase.vitals.glucose}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Hallazgos */}
                            <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <BiAnalyse className="w-5 h-5 text-yellow-600"/>
                                    <h4 className="font-semibold text-yellow-800">Hallazgos al Examen</h4>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-2">
                                    {clinicalCase.findings.map((finding, index) => (
                                        <li key={index} className="text-sm text-yellow-700 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                            {finding}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Preguntas */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                                    <FaClock className="w-5 h-5 text-orange-500"/>
                                    Preguntas de Evaluación
                                </h4>

                                {clinicalCase.questions.map((question, qIndex) => (
                                    <div key={qIndex} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-medium text-gray-800 mb-3">
                                            {qIndex + 1}. {question.question}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            {question.options.map((option, oIndex) => {
                                                const key = `${clinicalCase.id}-${qIndex}`;
                                                const isSelected = answers[key] === oIndex;
                                                const isCorrect = oIndex === question.correct;
                                                const showingResults = showResults[key];

                                                return (
                                                    <button
                                                        key={oIndex}
                                                        onClick={() => handleAnswerSelect(clinicalCase.id, qIndex, oIndex)}
                                                        disabled={showingResults}
                                                        className={`w-full text-left p-3 rounded border text-sm transition ${
                                                            showingResults
                                                                ? isCorrect
                                                                    ? 'bg-green-100 border-green-400 text-green-800'
                                                                    : isSelected
                                                                        ? 'bg-red-100 border-red-400 text-red-800'
                                                                        : 'bg-gray-100 border-gray-300 text-gray-600'
                                                                : isSelected
                                                                    ? 'bg-blue-100 border-blue-400 text-blue-800'
                                                                    : 'bg-white border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {String.fromCharCode(65 + oIndex)}. {option}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => showAnswer(clinicalCase.id, qIndex)}
                                                disabled={showResults[`${clinicalCase.id}-${qIndex}`]}
                                                className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            >
                                                Ver Respuesta
                                            </button>
                                        </div>

                                        {showResults[`${clinicalCase.id}-${qIndex}`] && (
                                            <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
                                                <p className="font-medium text-blue-800 mb-1">
                                                    Respuesta correcta: {String.fromCharCode(65 + question.correct)}
                                                </p>
                                                <p className="text-blue-700 text-sm">{question.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Resumen de aprendizaje */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-3">Puntos Clave para Recordar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium text-orange-700 mb-2">En EVC:</h4>
                        <ul className="text-sm text-orange-600 space-y-1">
                            <li>• Tiempo = cerebro</li>
                            <li>• Documentar hora exacta de inicio</li>
                            <li>• Usar escalas de evaluación</li>
                            <li>• Transporte inmediato</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-orange-700 mb-2">En Convulsiones:</h4>
                        <ul className="text-sm text-orange-600 space-y-1">
                            <li>• No restringir movimientos</li>
                            <li>• Proteger de lesiones</li>
                            <li>• Vía aérea en post-ictal</li>
                            <li>• Verificar glucosa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
