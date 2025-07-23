import {useMemo, useState} from "react";
import {terminosData, CLAVES} from "./Glosary.constants.ts";
import {AllRoutes} from "../Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";
import {CLAVES_EXERCISES_IMPROVED, ClaveExercise} from "./Glosary.exercises.improved";


const typeOrder = {
    'mnemotecnia': 1,
    'termino': 2,
    'prefijo': 3,
    'sufijo': 4
};

type Tipo = 'mnemotecnia' | 'termino' | 'prefijo' | 'sufijo';

const sortedData = [...terminosData].sort((a, b) => {
    const orderA = typeOrder[a.tipo] ?? 99;
    const orderB = typeOrder[b.tipo] ?? 99;
    if (orderA !== orderB) {
        return orderA - orderB;
    }
    return a.termino.localeCompare(b.termino);
});


export default function Glosary() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('todos');
    const [showClavesSection, setShowClavesSection] = useState(false);
    const [exerciseAnswers, setExerciseAnswers] = useState<{[key:number]: string | string[]}>({});
    const [exerciseFeedback, setExerciseFeedback] = useState<{[key:number]: string}>({});

    const filteredTerminos = useMemo(() => {
        const result = sortedData.filter(item => {
            const searchMatch = (
                item.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.ejemplo && item.ejemplo.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            const typeMatch = filterType === 'todos' || item.tipo === filterType;

            return searchMatch && typeMatch;
        });

        return result;
    }, [searchTerm, filterType]);

    const filterOptions = [
        {label: 'Todos', value: 'todos'},
        {label: 'Mnemotecnias', value: 'mnemotecnia'},
        {label: 'Términos', value: 'termino'},
        {label: 'Prefijos', value: 'prefijo'},
        {label: 'Sufijos', value: 'sufijo'},
    ];

    const getCardStyle = (tipo: Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return 'bg-blue-50 border-blue-200 hover:border-blue-300';
            case 'sufijo':
                return 'bg-green-50 border-green-200 hover:border-green-300';
            case 'mnemotecnia':
                return 'bg-purple-50 border-purple-200 hover:border-purple-300';
            default:
                return 'bg-white border-gray-200 hover:border-gray-300';
        }
    };

    const getTypeLabel = (tipo: Tipo) => {
        switch (tipo) {
            case 'prefijo':
                return <span className="text-xs font-semibold uppercase text-blue-600">[Prefijo]</span>;
            case 'sufijo':
                return <span className="text-xs font-semibold uppercase text-green-600">[Sufijo]</span>;
            case 'mnemotecnia':
                return <span className="text-xs font-semibold uppercase text-purple-600">[Mnemotecnia]</span>;
            default:
                return null;
        }
    }

    const handleAnswerChange = (idx: number, value: string | string[]) => {
        setExerciseAnswers(prev => ({...prev, [idx]: value}));
    };

    const validateAnswer = (exercise: ClaveExercise, idx: number) => {
        const userAnswer = exerciseAnswers[idx];
        let correct = false;
        if (exercise.tipo === 'open') {
            if (Array.isArray(exercise.respuesta)) {
                correct = Array.isArray(userAnswer) ?
                    exercise.respuesta.every(r => userAnswer.includes(r)) :
                    exercise.respuesta.every(r => (userAnswer as string).toUpperCase().includes(r));
            } else {
                correct = (userAnswer as string).toUpperCase().includes((exercise.respuesta as string).toUpperCase());
            }
        } else if (exercise.tipo === 'test') {
            correct = userAnswer === exercise.respuesta;
        } else if (exercise.tipo === 'fill') {
            if (Array.isArray(exercise.respuesta)) {
                correct = Array.isArray(userAnswer) ?
                    exercise.respuesta.every((r, i) => userAnswer[i]?.toUpperCase() === r.toUpperCase()) :
                    false;
            } else {
                correct = false;
            }
        } else if (exercise.tipo === 'simulacion') {
            correct = (userAnswer as string).toLowerCase().includes((exercise.respuesta as string).toLowerCase());
        }
        setExerciseFeedback(prev => ({
            ...prev,
            [idx]: correct ? '¡Correcto! ' + exercise.retroalimentacion : 'Incorrecto. ' + exercise.retroalimentacion
        }));
    };

    return (
        <div className="p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
                Glosario de Términos Médicos Prehospitalarios
            </h1>

            {/* Navigation and main controls */}
            <div className="flex justify-center gap-2 mb-6">
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                    <p className="text-lg">Regresar</p>
                </NavLink>

            </div>

            {/* Claves Section - Moved to top and improved */}
            {showClavesSection && (
                <div className="mb-8">
                    <ClavesSection />
                </div>
            )}

            {/* Toggle between Glosary and Claves view */}
            <div className="flex justify-center mb-6">
                <div className="bg-white rounded-lg p-1 shadow-md">
                    <button
                        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                            !showClavesSection 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'text-blue-600 hover:bg-blue-50'
                        }`}
                        onClick={() => setShowClavesSection(false)}
                    >
                        📚 Glosario
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                            showClavesSection 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'text-blue-600 hover:bg-blue-50'
                        }`}
                        onClick={() => setShowClavesSection(true)}
                    >
                        📻 Claves Radio
                    </button>
                </div>
            </div>

            {/* Only show glosary content when not showing claves */}
            {!showClavesSection && (
                <>
                    <div className="mb-6 max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar término, definición o ejemplo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                            aria-label="Buscar en el glosario"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {filterOptions.map(option => (
                            <button
                                key={option.value}
                                onClick={() => setFilterType(option.value)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out
                          ${filterType === option.value
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50'
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {filteredTerminos.length > 0 ? (
                            filteredTerminos.map((item, index) => (
                                <div
                                    key={`${item.termino}-${index}`}
                                    className={`p-5 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 ${getCardStyle(item.tipo)}`}
                                >
                                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-x-2">
                                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                            {item.termino}
                                        </h2>
                                        {getTypeLabel(item.tipo)}
                                    </div>

                                    <p className="text-gray-700 mb-2 text-base md:text-lg whitespace-pre-line">
                                        <strong className="font-medium text-gray-900">Definición:</strong> {item.definicion}
                                    </p>
                                    {item.ejemplo && (
                                        <p className="text-gray-600 italic text-sm md:text-base whitespace-pre-line">
                                            <strong
                                                className="font-medium text-gray-700 not-italic">Ejemplo/Desglose:</strong> {item.ejemplo}
                                        </p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-lg mt-10">
                                No se encontraron resultados para
                                "{searchTerm}" {filterType !== 'todos' ? `en la categoría "${filterType}"` : ''}.
                            </p>
                        )}
                    </div>

                    {/* Nota al final - only show in glosary mode */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Nota: Este glosario es una guía general y no sustituye la formación profesional. Siempre consulta a un experto o profesional de la salud para obtener información precisa y actualizada.
                    </p>

                    {/* Ejercicios extra de práctica - only show in glosary mode */}
                    <div className="bg-orange-50 rounded p-4 border border-orange-200 mt-6">
                        <h3 className="font-semibold text-orange-700 mb-2">Ejercicios de Práctica</h3>
                        {['open','test','fill','simulacion'].map(tipo => (
                            <div key={tipo} className="mb-4">
                                <h4 className="text-orange-600 font-bold mb-2 text-sm uppercase">{tipo === 'open' ? 'Respuesta Abierta' : tipo === 'test' ? 'Opción Múltiple' : tipo === 'fill' ? 'Completa el reporte' : 'Simulación de reporte'}</h4>
                                <ul className="list-decimal ml-6 text-gray-800 space-y-2">
                                {CLAVES_EXERCISES_IMPROVED.filter(e => e.tipo === tipo).map((exercise, idx) => (
                                    <li key={exercise.pregunta} className="mb-2">
                                        <strong>{exercise.pregunta}</strong>
                                        <div className="mt-1">
                                            {tipo === 'test' && exercise.opciones ? (
                                                <select
                                                    className="border rounded px-2 py-1 text-sm"
                                                    value={exerciseAnswers[idx] || ''}
                                                    onChange={e => handleAnswerChange(idx, e.target.value)}
                                                >
                                                    <option value="">Selecciona una clave</option>
                                                    {exercise.opciones.map(op => (
                                                        <option key={op} value={op}>{op}</option>
                                                    ))}
                                                </select>
                                            ) : tipo === 'fill' && Array.isArray(exercise.respuesta) ? (
                                                <div className="flex gap-2">
                                                    {exercise.respuesta.map((_, i) => (
                                                        <input
                                                            key={i}
                                                            type="text"
                                                            className="border rounded px-2 py-1 text-sm w-20"
                                                            value={Array.isArray(exerciseAnswers[idx]) ? exerciseAnswers[idx][i] || '' : ''}
                                                            onChange={e => {
                                                                const arr = Array.isArray(exerciseAnswers[idx]) ? [...exerciseAnswers[idx]] : Array(exercise.respuesta.length).fill('');
                                                                arr[i] = e.target.value;
                                                                handleAnswerChange(idx, arr);
                                                            }}
                                                            placeholder={`Clave ${i+1}`}
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="border rounded px-2 py-1 text-sm w-full"
                                                    value={exerciseAnswers[idx] || ''}
                                                    onChange={e => handleAnswerChange(idx, e.target.value)}
                                                    placeholder="Escribe tu respuesta"
                                                />
                                            )}
                                            <button
                                                className="ml-2 px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 text-xs"
                                                onClick={() => validateAnswer(exercise, idx)}
                                            >Validar</button>
                                            {exerciseFeedback[idx] && (
                                                <div className={`mt-2 text-sm ${exerciseFeedback[idx].startsWith('¡Correcto!') ? 'text-green-700' : 'text-red-700'}`}>{exerciseFeedback[idx]}</div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export function ClavesSection() {
    const [showTable, setShowTable] = useState(false);
    const [studyMode, setStudyMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [searchClaves, setSearchClaves] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todas');

    // Nuevos estados para la sección interactiva
    const [interactiveMode, setInteractiveMode] = useState(false);
    const [selectedScenario, setSelectedScenario] = useState(0);
    const [userReport, setUserReport] = useState('');
    const [reportFeedback, setReportFeedback] = useState('');
    const [showTooltips, setShowTooltips] = useState(false);
    const [practiceMode, setPracticeMode] = useState(false);
    const [generatedScenario, setGeneratedScenario] = useState<any>(null);

    const claves = CLAVES;
    const total = claves.length;
    const currentClave = claves[currentIndex];

    // Escenarios de práctica interactivos
    const practiceScenarios = [
        {
            id: 1,
            title: "Accidente de Tráfico",
            situation: "Accidente vehicular con múltiples heridos en la Av. Principal",
            details: {
                location: "Av. Principal esquina con 5ta calle",
                patients: 2,
                conditions: ["Fractura en pierna", "Hemorragia en cabeza"],
                resources: ["Médico", "Soporte vital"],
                priority: "Alta"
            },
            expectedClaves: ["2", "3", "12", "29F", "29H", "29G", "40L"],
            sampleReport: "Base, aquí unidad Alfa-1, clave 2 y clave 3 en Av. Principal, accidente vehicular con 2 pacientes, uno con clave 29F en extremidades y otro con clave 29H y clave 29G, solicitamos clave 12 para evaluación, preparamos clave 40L"
        },
        {
            id: 2,
            title: "Emergencia Cardiaca",
            situation: "Paciente con paro cardíaco en domicilio",
            details: {
                location: "Domicilio en calle Las Flores #123",
                patients: 1,
                conditions: ["Paro cardiorrespiratorio"],
                resources: ["RCP", "Traslado urgente"],
                priority: "Crítica"
            },
            expectedClaves: ["20", "29CPC", "29G", "40E"],
            sampleReport: "Base, aquí unidad Beta-2, en clave 20 calle Las Flores, paciente masculino con clave 29CPC, iniciando maniobras, clave 29G, requiere clave 40E inmediato"
        },
        {
            id: 3,
            title: "Riña Callejera",
            situation: "Pelea con arma blanca, múltiples heridos",
            details: {
                location: "Parque Central",
                patients: 3,
                conditions: ["Heridas por arma blanca", "Ebriedad", "Trauma facial"],
                resources: ["Seguridad", "Médico", "Traslado múltiple"],
                priority: "Alta"
            },
            expectedClaves: ["32", "36B", "29A", "17", "12", "40L"],
            sampleReport: "Base, aquí unidad Gamma-3, clave 32 en Parque Central con clave 36B, 3 pacientes, uno con clave 29A, otro con clave 17, solicitamos clave 12 y preparamos clave 40L múltiple"
        }
    ];

    // Generador de escenarios aleatorios
    const generateRandomScenario = () => {
        const locations = ["Av. Central", "Calle Principal", "Centro Comercial", "Parque Municipal", "Zona Residencial"];
        const emergencyTypes = [
            { type: "Accidente", claves: ["29F", "29H", "29G"], resources: ["2", "3", "12"] },
            { type: "Emergencia Médica", claves: ["29CPC", "25", "29G"], resources: ["12", "40E"] },
            { type: "Violencia", claves: ["29A", "32", "36B"], resources: ["15", "12"] },
            { type: "Caída", claves: ["29C", "29F", "29L"], resources: ["12", "40L"] }
        ];

        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomEmergency = emergencyTypes[Math.floor(Math.random() * emergencyTypes.length)];
        const patientCount = Math.floor(Math.random() * 3) + 1;

        return {
            location: randomLocation,
            type: randomEmergency.type,
            patients: patientCount,
            expectedClaves: [...randomEmergency.claves, ...randomEmergency.resources],
            description: `${randomEmergency.type} en ${randomLocation} con ${patientCount} paciente${patientCount > 1 ? 's' : ''}`
        };
    };

    // Verificar reporte del usuario
    const validateUserReport = () => {
        const scenario = practiceScenarios[selectedScenario];
        const reportUpper = userReport.toUpperCase();
        const foundClaves = scenario.expectedClaves.filter(clave =>
            reportUpper.includes(`CLAVE ${clave}`) || reportUpper.includes(clave)
        );

        const missingClaves = scenario.expectedClaves.filter(clave => !foundClaves.includes(clave));

        if (foundClaves.length === scenario.expectedClaves.length) {
            setReportFeedback(`¡Excelente! ✅ Has incluido todas las claves necesarias: ${foundClaves.join(', ')}`);
        } else if (foundClaves.length > scenario.expectedClaves.length * 0.7) {
            setReportFeedback(`¡Muy bien! ✅ Has incluido ${foundClaves.length}/${scenario.expectedClaves.length} claves. Te faltan: ${missingClaves.join(', ')}`);
        } else {
            setReportFeedback(`Necesitas mejorar ⚠️ Solo has incluido ${foundClaves.length}/${scenario.expectedClaves.length} claves. Claves faltantes: ${missingClaves.join(', ')}`);
        }
    };

    // Obtener información de clave para tooltip
    const getClaveInfo = (claveNum: string) => {
        const clave = claves.find(c => c.numero === claveNum);
        return clave ? clave.descripcion : 'Clave no encontrada';
    };

    // Filtrar claves por búsqueda y categoría
    const filteredClaves = useMemo(() => {
        return claves.filter(clave => {
            const searchMatch = clave.numero.toLowerCase().includes(searchClaves.toLowerCase()) ||
                              clave.descripcion.toLowerCase().includes(searchClaves.toLowerCase());

            const categoryMatch = selectedCategory === 'todas' ||
                                (selectedCategory === 'emergencia' && clave.numero.startsWith('29')) ||
                                (selectedCategory === 'recursos' && (clave.numero.startsWith('2') || clave.numero.startsWith('3')) && !clave.numero.startsWith('29')) ||
                                (selectedCategory === 'codigo' && clave.numero.includes('CPC'));

            return searchMatch && categoryMatch;
        });
    }, [searchClaves, selectedCategory]);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-blue-200">
            {/* Header mejorado */}
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">📻</span>
                    </div>
                    <h2 className="text-3xl font-bold text-blue-800">Claves de Radio</h2>
                </div>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Sistema de comunicación prehospitalaria para reportar situaciones, recursos y estados de pacientes
                </p>
            </div>

            {/* Controles principales con diseño moderno */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <button
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                        showTable 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                            : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
                    }`}
                    onClick={() => setShowTable(!showTable)}
                >
                    <span className="text-xl">📋</span>
                    <span className="font-medium">{showTable ? "Ocultar Tabla" : "Ver Todas las Claves"}</span>
                </button>

                <button
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                        studyMode 
                            ? 'bg-purple-600 text-white border-purple-600 shadow-lg' 
                            : 'bg-white text-purple-600 border-purple-300 hover:bg-purple-50'
                    }`}
                    onClick={() => setStudyMode(!studyMode)}
                >
                    <span className="text-xl">🎯</span>
                    <span className="font-medium">{studyMode ? "Salir del Estudio" : "Modo Estudio"}</span>
                </button>

                <button
                    className="p-4 rounded-lg border-2 bg-white text-green-600 border-green-300 hover:bg-green-50 transition-all duration-200 flex items-center justify-center gap-2"
                    onClick={() => {
                        setCurrentIndex(Math.floor(Math.random() * total));
                        setShowAnswer(false);
                        setStudyMode(true);
                    }}
                >
                    <span className="text-xl">🎲</span>
                    <span className="font-medium">Clave Aleatoria</span>
                </button>

                <button
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                        interactiveMode 
                            ? 'bg-orange-600 text-white border-orange-600 shadow-lg' 
                            : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'
                    }`}
                    onClick={() => setInteractiveMode(!interactiveMode)}
                >
                    <span className="text-xl">🎮</span>
                    <span className="font-medium">{interactiveMode ? "Salir Simulador" : "Simulador"}</span>
                </button>
            </div>

            {/* Barra de búsqueda y filtros mejorados */}
            {showTable && (
                <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="🔍 Buscar clave o descripción..."
                                value={searchClaves}
                                onChange={(e) => setSearchClaves(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="todas">Todas las categorías</option>
                            <option value="emergencia">🚨 Emergencias (29)</option>
                            <option value="recursos">🚑 Recursos y Estado</option>
                            <option value="codigo">⚠️ Códigos Especiales</option>
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                    <th className="px-4 py-3 text-left rounded-tl-lg">Clave</th>
                                    <th className="px-4 py-3 text-left rounded-tr-lg">Descripción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredClaves.map((clave, index) => (
                                    <tr key={clave.numero} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-blue-100 transition-colors duration-150`}>
                                        <td className="px-4 py-3">
                                            <span className="font-mono text-blue-800 font-bold bg-blue-100 px-2 py-1 rounded">
                                                {clave.numero}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">{clave.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredClaves.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                No se encontraron claves que coincidan con tu búsqueda
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Modo estudio mejorado */}
            {studyMode && (
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500 mb-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center justify-center gap-2">
                            <span>🎯</span> Modo Estudio de Claves
                        </h3>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-4">
                            <div className="text-3xl font-mono text-purple-700 font-bold mb-2">
                                {currentClave.numero}
                            </div>
                            <div className="text-lg text-gray-600 mb-4">
                                {!showAnswer ? "¿Qué significa esta clave?" : (
                                    <div className="text-green-700 font-medium">
                                        {currentClave.descripcion}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 mb-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
                                onClick={() => setShowAnswer(true)}
                                disabled={showAnswer}
                            >
                                <span>👁️</span> Mostrar Respuesta
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                                onClick={() => setShowAnswer(false)}
                                disabled={!showAnswer}
                            >
                                <span>🙈</span> Ocultar Respuesta
                            </button>
                        </div>

                        <div className="flex justify-center gap-3 mb-4">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
                                disabled={currentIndex === 0}
                                onClick={() => {
                                    setCurrentIndex(i => Math.max(0, i-1));
                                    setShowAnswer(false);
                                }}
                            >
                                <span>⬅️</span> Anterior
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
                                disabled={currentIndex === total-1}
                                onClick={() => {
                                    setCurrentIndex(i => Math.min(total-1, i+1));
                                    setShowAnswer(false);
                                }}
                            >
                                Siguiente <span>➡️</span>
                            </button>
                        </div>

                        <div className="text-sm text-gray-500 bg-gray-100 rounded-lg px-3 py-2 inline-block">
                            Clave {currentIndex + 1} de {total}
                        </div>
                    </div>
                </div>
            )}

            {/* NUEVA SECCIÓN INTERACTIVA DE EJEMPLOS */}
            {interactiveMode ? (
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                        <span>🎮</span> Simulador de Comunicación Interactivo
                    </h3>

                    {/* Controles del simulador */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <button
                            className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                !practiceMode 
                                    ? 'bg-orange-600 text-white border-orange-600' 
                                    : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'
                            }`}
                            onClick={() => setPracticeMode(false)}
                        >
                            📚 Escenarios Predefinidos
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                practiceMode 
                                    ? 'bg-orange-600 text-white border-orange-600' 
                                    : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'
                            }`}
                            onClick={() => setPracticeMode(true)}
                        >
                            🎲 Escenario Aleatorio
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            onClick={() => setShowTooltips(!showTooltips)}
                        >
                            {showTooltips ? '🙈 Ocultar Ayuda' : '💡 Mostrar Ayuda'}
                        </button>
                        {practiceMode && (
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                                onClick={() => setGeneratedScenario(generateRandomScenario())}
                            >
                                🔄 Nuevo Escenario
                            </button>
                        )}
                    </div>

                    {/* Selección de escenario predefinido */}
                    {!practiceMode && (
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-700 mb-3">Selecciona un escenario:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {practiceScenarios.map((scenario, index) => (
                                    <button
                                        key={scenario.id}
                                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                                            selectedScenario === index
                                                ? 'bg-orange-100 border-orange-500 text-orange-800'
                                                : 'bg-white border-gray-300 hover:border-orange-300 text-gray-700'
                                        }`}
                                        onClick={() => {
                                            setSelectedScenario(index);
                                            setUserReport('');
                                            setReportFeedback('');
                                        }}
                                    >
                                        <h5 className="font-bold mb-1">{scenario.title}</h5>
                                        <p className="text-sm">{scenario.situation}</p>
                                        <div className="mt-2 text-xs">
                                            <span className={`px-2 py-1 rounded ${
                                                scenario.details.priority === 'Crítica' ? 'bg-red-100 text-red-700' :
                                                scenario.details.priority === 'Alta' ? 'bg-orange-100 text-orange-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                                {scenario.details.priority}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mostrar escenario activo */}
                    {((!practiceMode && practiceScenarios[selectedScenario]) || (practiceMode && generatedScenario)) && (
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-6 border-l-4 border-orange-500">
                            <h4 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                                <span>🚨</span>
                                {practiceMode ? "Escenario Aleatorio" : practiceScenarios[selectedScenario].title}
                            </h4>

                            {!practiceMode ? (
                                <div className="space-y-3">
                                    <p className="text-gray-700"><strong>Situación:</strong> {practiceScenarios[selectedScenario].situation}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-700"><strong>📍 Ubicación:</strong> {practiceScenarios[selectedScenario].details.location}</p>
                                            <p className="text-gray-700"><strong>👥 Pacientes:</strong> {practiceScenarios[selectedScenario].details.patients}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700"><strong>🏥 Condiciones:</strong> {practiceScenarios[selectedScenario].details.conditions.join(', ')}</p>
                                            <p className="text-gray-700"><strong>⚠️ Prioridad:</strong> {practiceScenarios[selectedScenario].details.priority}</p>
                                        </div>
                                    </div>

                                    {showTooltips && (
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                                            <h5 className="font-semibold text-blue-700 mb-2">💡 Claves sugeridas para este escenario:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {practiceScenarios[selectedScenario].expectedClaves.map(clave => (
                                                    <span
                                                        key={clave}
                                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-mono cursor-help"
                                                        title={getClaveInfo(clave)}
                                                    >
                                                        {clave}: {getClaveInfo(clave)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : generatedScenario && (
                                <div className="space-y-3">
                                    <p className="text-gray-700"><strong>Situación:</strong> {generatedScenario.description}</p>
                                    <p className="text-gray-700"><strong>📍 Ubicación:</strong> {generatedScenario.location}</p>
                                    <p className="text-gray-700"><strong>👥 Pacientes:</strong> {generatedScenario.patients}</p>

                                    {showTooltips && (
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                                            <h5 className="font-semibold text-blue-700 mb-2">💡 Claves sugeridas:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {generatedScenario.expectedClaves.map((clave: string) => (
                                                    <span
                                                        key={clave}
                                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-mono cursor-help"
                                                        title={getClaveInfo(clave)}
                                                    >
                                                        {clave}: {getClaveInfo(clave)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Área de escritura del reporte */}
                    {((!practiceMode) || (practiceMode && generatedScenario)) && (
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                                <span>📝</span> Escribe tu reporte de radio:
                            </h4>
                            <textarea
                                value={userReport}
                                onChange={(e) => setUserReport(e.target.value)}
                                placeholder='Ejemplo: "Base, aquí unidad Alfa-1, solicitamos clave 2 y clave 3 en domicilio..."'
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
                                rows={4}
                            />

                            <div className="flex gap-3">
                                <button
                                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center gap-2"
                                    onClick={validateUserReport}
                                    disabled={!userReport.trim()}
                                >
                                    <span>✅</span> Validar Reporte
                                </button>
                                <button
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                                    onClick={() => {
                                        if (!practiceMode) {
                                            setUserReport(practiceScenarios[selectedScenario].sampleReport);
                                        }
                                    }}
                                    disabled={practiceMode}
                                >
                                    <span>💡</span> Ver Ejemplo
                                </button>
                                <button
                                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
                                    onClick={() => {
                                        setUserReport('');
                                        setReportFeedback('');
                                    }}
                                >
                                    <span>🗑️</span> Limpiar
                                </button>
                            </div>

                            {/* Feedback del reporte */}
                            {reportFeedback && (
                                <div className={`p-4 rounded-lg border-l-4 ${
                                    reportFeedback.includes('Excelente') ? 'bg-green-50 border-green-500 text-green-800' :
                                    reportFeedback.includes('Muy bien') ? 'bg-blue-50 border-blue-500 text-blue-800' :
                                    'bg-orange-50 border-orange-500 text-orange-800'
                                }`}>
                                    <p>{reportFeedback}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                // Ejemplos estáticos mejorados con tooltips
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <span>💬</span> Ejemplos de Comunicación
                        <button
                            className="ml-auto text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                            onClick={() => setShowTooltips(!showTooltips)}
                        >
                            {showTooltips ? '🙈 Ocultar Info' : '💡 Mostrar Info'}
                        </button>
                    </h3>

                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-700 mb-2">Ejemplo 1: Solicitud de Recursos</h4>
                            <div className="font-mono text-sm text-blue-800 bg-white p-3 rounded border">
                                "Base, aquí unidad Alfa-1, solicitamos{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('2') : ''}
                                >
                                    clave 2
                                </span>{' '}y{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('3') : ''}
                                >
                                    clave 3
                                </span>{' '}en domicilio, tenemos paciente con{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('29G') : ''}
                                >
                                    clave 29G
                                </span>, posible{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('29CPC') : ''}
                                >
                                    clave 29CPC
                                </span>, iniciando maniobras."
                            </div>
                            {showTooltips && (
                                <div className="mt-3 text-xs text-blue-600 bg-blue-100 p-2 rounded">
                                    💡 Claves: 2 (Ayuda), 3 (Urgente), 29G (Lesionado Grave), 29CPC (Paro Cardiaco)
                                </div>
                            )}
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                            <h4 className="font-semibold text-green-700 mb-2">Ejemplo 2: Reporte de Traslado</h4>
                            <div className="font-mono text-sm text-green-800 bg-white p-3 rounded border">
                                "Recibido, Alfa-1,{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('40') : ''}
                                >
                                    clave 40
                                </span>{' '}al hospital local, paciente con{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('29F') : ''}
                                >
                                    clave 29F
                                </span>{' '}y{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('29H') : ''}
                                >
                                    clave 29H
                                </span>, estable, traslado inmediato."
                            </div>
                            {showTooltips && (
                                <div className="mt-3 text-xs text-green-600 bg-green-100 p-2 rounded">
                                    💡 Claves: 40 (Traslado), 29F (Fracturado), 29H (Hemorragia)
                                </div>
                            )}
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                            <h4 className="font-semibold text-orange-700 mb-2">Ejemplo 3: Evaluación en Escena</h4>
                            <div className="font-mono text-sm text-orange-800 bg-white p-3 rounded border">
                                "Solicito{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('12') : ''}
                                >
                                    clave 12
                                </span>{' '}en la escena, paciente con{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('17') : ''}
                                >
                                    clave 17
                                </span>{' '}y{' '}
                                <span
                                    className={`bg-yellow-200 cursor-help ${showTooltips ? 'relative' : ''}`}
                                    title={showTooltips ? getClaveInfo('16') : ''}
                                >
                                    clave 16
                                </span>, requiere valoración médica."
                            </div>
                            {showTooltips && (
                                <div className="mt-3 text-xs text-orange-600 bg-orange-100 p-2 rounded">
                                    💡 Claves: 12 (Médico), 17 (Ebrio), 16 (Deficiencia Mental)
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Estadísticas de estudio */}
            {studyMode && (
                <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <span>📊</span> Progreso de Estudio
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                            style={{width: `${((currentIndex + 1) / total) * 100}%`}}
                        ></div>
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                        Has revisado {currentIndex + 1} de {total} claves ({Math.round(((currentIndex + 1) / total) * 100)}%)
                    </div>
                </div>
            )}
        </div>
    );
}
