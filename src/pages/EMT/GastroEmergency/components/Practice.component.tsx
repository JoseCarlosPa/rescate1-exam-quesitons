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
        title: "Caso 1: Apendicitis Aguda",
        scenario: "Mujer de 22 años, estudiante universitaria, presenta dolor abdominal que inició como molestia periumbilical hace 12 horas y ahora está localizado en fosa ilíaca derecha. Refiere náuseas, un episodio de vómito y fiebre. El dolor empeora con el movimiento y la tos.",
        vitals: {
            age: "22 años",
            gender: "Femenino",
            consciousness: "Alerta y orientada",
            bp: "120/75 mmHg",
            hr: "105 lpm",
            rr: "22 rpm",
            sao2: "98%",
            temp: "38.1°C",
            glucose: "95 mg/dL"
        },
        findings: [
            "Dolor intenso en punto de McBurney",
            "Rebote positivo en FID",
            "Defensa muscular localizada",
            "Signo de Rovsing positivo",
            "Posición antálgica (flexión de cadera derecha)"
        ],
        questions: [
            {
                question: "¿Cuál es la prioridad en el manejo prehospitalario de este caso?",
                options: [
                    "Administrar analgésicos para el dolor",
                    "Dar líquidos por vía oral",
                    "Transporte inmediato sin demora",
                    "Aplicar calor local en el abdomen"
                ],
                correct: 2,
                explanation: "En sospecha de apendicitis, el transporte inmediato es prioritario ya que existe riesgo de perforación. NO se deben dar líquidos orales ni analgésicos que puedan enmascarar síntomas."
            },
            {
                question: "¿Qué NO debe hacer el PAP en este caso?",
                options: [
                    "Monitorizar signos vitales",
                    "Permitir nada por vía oral",
                    "Palpar repetidamente el abdomen",
                    "Mantener posición de confort"
                ],
                correct: 2,
                explanation: "La palpación excesiva puede causar ruptura del apéndice. Se debe limitar el examen físico a lo esencial y evitar manipulación innecesaria."
            }
        ]
    },
    {
        id: 2,
        title: "Caso 2: Hemorragia Digestiva Alta",
        scenario: "Hombre de 55 años con antecedente de úlcera péptica y alcoholismo. Presenta hematemesis abundante (vómito con sangre roja) y episodios de melena. Se encuentra pálido, diaforético y refiere mareo al ponerse de pie.",
        vitals: {
            age: "55 años",
            gender: "Masculino",
            consciousness: "Alerta pero ansioso",
            bp: "90/55 mmHg",
            hr: "125 lpm",
            rr: "24 rpm",
            sao2: "92%",
            temp: "36.2°C",
            glucose: "110 mg/dL"
        },
        findings: [
            "Hematemesis con coágulos",
            "Palidez marcada de mucosas",
            "Piel fría y pegajosa",
            "Hipotensión ortostática",
            "Dolor epigástrico moderado"
        ],
        questions: [
            {
                question: "¿Cuál es la principal preocupación en este paciente?",
                options: [
                    "El dolor abdominal",
                    "La deshidratación leve",
                    "El shock hipovolémico",
                    "La náusea y vómito"
                ],
                correct: 2,
                explanation: "Los signos vitales (hipotensión, taquicardia, piel fría) indican shock hipovolémico por pérdida sanguínea significativa, una emergencia que requiere manejo inmediato."
            },
            {
                question: "¿Cuál es la prioridad en el manejo de este paciente?",
                options: [
                    "Control del dolor",
                    "Oxígeno de alto flujo y transporte urgente",
                    "Administrar antieméticos",
                    "Posición de Trendelenburg"
                ],
                correct: 1,
                explanation: "En shock hipovolémico por hemorragia digestiva, la prioridad es oxígeno de alto flujo para compensar la hipoxia y transporte urgente para intervención médica definitiva."
            }
        ]
    },
    {
        id: 3,
        title: "Caso 3: Cólico Renal",
        scenario: "Hombre de 35 años, ejecutivo, presenta súbitamente dolor lumbar izquierdo severo que irradia hacia la ingle. El dolor es tipo cólico, llega a 10/10 en intensidad. Se encuentra inquieto, no puede encontrar posición cómoda y refiere náuseas.",
        vitals: {
            age: "35 años",
            gender: "Masculino",
            consciousness: "Alerta, muy ansioso por dolor",
            bp: "140/90 mmHg",
            hr: "110 lpm",
            rr: "20 rpm",
            sao2: "98%",
            temp: "36.8°C",
            glucose: "105 mg/dL"
        },
        findings: [
            "Dolor lumbar izquierdo severo",
            "Irradiación hacia ingle y genitales",
            "Hematuria microscópica",
            "Inquietud marcada",
            "Náuseas sin vómito"
        ],
        questions: [
            {
                question: "¿Qué característica del dolor es más sugestiva de cálculo renal?",
                options: [
                    "Dolor que mejora con el reposo",
                    "Dolor cólico que no mejora con posición",
                    "Dolor continuo y sordo",
                    "Dolor que empeora al palpar"
                ],
                correct: 1,
                explanation: "El dolor cólico por cálculo renal es característicamente intenso, intermitente y NO mejora con cambios de posición, a diferencia de otros tipos de dolor abdominal."
            },
            {
                question: "¿Cuál es el manejo más apropiado para este paciente?",
                options: [
                    "Forzar posición supina para examen",
                    "Permitir posición de confort y tranquilizar",
                    "Aplicar presión en zona dolorosa",
                    "Administrar grandes cantidades de agua"
                ],
                correct: 1,
                explanation: "En cólico renal, se debe permitir que el paciente adopte la posición más cómoda posible y tranquilizarlo, ya que la ansiedad puede empeorar la percepción del dolor."
            }
        ]
    },
    {
        id: 4,
        title: "Caso 4: Aneurisma Aórtico Abdominal Roto",
        scenario: "Hombre de 68 años con antecedente de hipertensión presenta súbitamente dolor abdominal y lumbar intenso mientras realizaba jardinería. Al examen se palpa masa pulsátil en abdomen. Paciente pálido, diaforético y con signos de shock.",
        vitals: {
            age: "68 años",
            gender: "Masculino",
            consciousness: "Alerta pero confuso",
            bp: "80/50 mmHg",
            hr: "130 lpm",
            rr: "28 rpm",
            sao2: "90%",
            temp: "36.0°C",
            glucose: "140 mg/dL"
        },
        findings: [
            "Masa pulsátil abdominal",
            "Dolor severo abdominal y lumbar",
            "Shock hipovolémico",
            "Palidez y diaforesis",
            "Pulsos femorales débiles"
        ],
        questions: [
            {
                question: "¿Qué debe evitar el PAP en este caso crítico?",
                options: [
                    "Administrar oxígeno",
                    "Palpar excesivamente la masa abdominal",
                    "Monitorizar signos vitales",
                    "Transporte inmediato"
                ],
                correct: 1,
                explanation: "En sospecha de AAA roto, la palpación excesiva puede precipitar ruptura completa. Se debe limitar la manipulación y proceder inmediatamente al transporte."
            },
            {
                question: "¿Cuál es la prioridad absoluta en este caso?",
                options: [
                    "Control del dolor",
                    "Administrar líquidos IV",
                    "Transporte código rojo a centro quirúrgico",
                    "Obtener historia médica detallada"
                ],
                correct: 2,
                explanation: "AAA roto es una emergencia quirúrgica inmediata. Cada minuto cuenta y el transporte urgente a un centro con capacidad quirúrgica vascular es la única intervención que puede salvar la vida."
            }
        ]
    },
    {
        id: 5,
        title: "Caso 5: Paciente en Diálisis con Complicaciones",
        scenario: "Mujer de 45 años en programa de hemodiálisis. Acude por dificultad respiratoria y edema generalizado. Refiere que no pudo asistir a su sesión de diálisis programada hace 2 días por problemas de transporte. Presenta disnea de reposo y edema en extremidades.",
        vitals: {
            age: "45 años",
            gender: "Femenino",
            consciousness: "Alerta, ansiosa",
            bp: "180/110 mmHg",
            hr: "95 lpm",
            rr: "26 rpm",
            sao2: "88%",
            temp: "37.1°C",
            glucose: "160 mg/dL"
        },
        findings: [
            "Edema generalizado (+3)",
            "Disnea de reposo",
            "Estertores pulmonares bilaterales",
            "Fístula arteriovenosa en brazo izquierdo",
            "Hipertensión severa"
        ],
        questions: [
            {
                question: "¿Qué complicación presenta esta paciente?",
                options: [
                    "Hipotensión por diálisis",
                    "Sobrecarga de líquidos",
                    "Infección de fístula",
                    "Hipoglucemia"
                ],
                correct: 1,
                explanation: "La paciente presenta sobrecarga de líquidos por pérdida de sesión de diálisis, evidenciada por edema, disnea, estertores e hipertensión."
            },
            {
                question: "¿Qué precaución específica debe tomar el PAP?",
                options: [
                    "Usar la fístula para acceso venoso",
                    "Administrar grandes volúmenes de líquido",
                    "No usar la fístula para procedimientos",
                    "Colocar paciente en posición supina"
                ],
                correct: 2,
                explanation: "NUNCA se debe usar la fístula arteriovenosa para acceso venoso, toma de presión arterial o inyecciones, ya que puede dañarse y comprometer el acceso para diálisis."
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
                    Practica con casos reales de emergencias gastrointestinales y urológicas y pon a prueba tus
                    conocimientos
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
                            <div className="mb-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaAmbulance className="w-5 h-5 text-orange-600"/>
                                    <h4 className="font-semibold text-orange-800">Escenario</h4>
                                </div>
                                <p className="text-orange-700 text-sm leading-relaxed">{clinicalCase.scenario}</p>
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
                                                                    ? 'bg-orange-100 border-orange-400 text-orange-800'
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
                        <h4 className="font-medium text-orange-700 mb-2">En Emergencias Gastrointestinales:</h4>
                        <ul className="text-sm text-orange-600 space-y-1">
                            <li>• NPO estricto (nada por vía oral)</li>
                            <li>• Evitar palpación excesiva</li>
                            <li>• Reconocer signos de shock</li>
                            <li>• Transporte urgente si abdomen agudo</li>
                            <li>• Proteger vía aérea si vómito</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-orange-700 mb-2">En Emergencias Urológicas:</h4>
                        <ul className="text-sm text-orange-600 space-y-1">
                            <li>• Posición de confort en cólico renal</li>
                            <li>• No usar fístula en pacientes diálisis</li>
                            <li>• Evaluar sobrecarga de líquidos</li>
                            <li>• Considerar retención urinaria</li>
                            <li>• Signos de sepsis en pielonefritis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
