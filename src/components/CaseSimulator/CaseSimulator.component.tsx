import { useState } from 'react';
import { SimulatorCase, SimulatorResult } from './CaseSimulator.types';
import { useCaseSimulator } from './CaseSimulator.hook';
import { FaClock, FaHeart, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaRedo, FaBrain } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

interface CaseSimulatorComponentProps {
  simulatorCase: SimulatorCase;
  onComplete?: (results: SimulatorResult) => void;
  onExit?: () => void;
}

export const CaseSimulatorComponent: React.FC<CaseSimulatorComponentProps> = ({
  simulatorCase,
  onComplete,
  onExit
}) => {
  const {
    progress,
    currentStep,
    isCompleted,
    showFeedback,
    selectedOption,
    isLastStep,
    showGlasgowEvaluation,
    glasgowAnswer,
    submitAnswer,
    nextStep,
    resetSimulator,
    getResults,
    submitGlasgowScore
  } = useCaseSimulator(simulatorCase);

  const [tempGlasgowScore, setTempGlasgowScore] = useState<number>(15);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Componente para evaluación de Glasgow
  if (showGlasgowEvaluation) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <FaBrain className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Evaluación Neurológica</h2>
          <p className="text-gray-600">Completa la evaluación indicando la Escala de Glasgow del paciente</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">
            Contexto para la Evaluación
          </h3>
          <p className="text-orange-800 leading-relaxed mb-4">
            {simulatorCase.glasgowScore?.contextInfo}
          </p>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-3">Recordatorio - Escala de Glasgow:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-700 mb-2">Apertura Ocular (1-4)</div>
                <ul className="space-y-1 text-gray-600">
                  <li>4 - Espontánea</li>
                  <li>3 - Al habla</li>
                  <li>2 - Al dolor</li>
                  <li>1 - No abre</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-green-700 mb-2">Respuesta Verbal (1-5)</div>
                <ul className="space-y-1 text-gray-600">
                  <li>5 - Orientado</li>
                  <li>4 - Confuso</li>
                  <li>3 - Palabras inapropiadas</li>
                  <li>2 - Sonidos incomprensibles</li>
                  <li>1 - No responde</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-red-700 mb-2">Respuesta Motora (1-6)</div>
                <ul className="space-y-1 text-gray-600">
                  <li>6 - Obedece órdenes</li>
                  <li>5 - Localiza dolor</li>
                  <li>4 - Retira al dolor</li>
                  <li>3 - Flexión anormal</li>
                  <li>2 - Extensión anormal</li>
                  <li>1 - No responde</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            ¿Cuál es la Escala de Glasgow de este paciente?
          </h3>

          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <label className="text-lg font-medium text-gray-700">Puntuación Glasgow:</label>
              <select
                value={tempGlasgowScore}
                onChange={(e) => setTempGlasgowScore(Number(e.target.value))}
                className="text-2xl font-bold text-center px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map(score => (
                  <option key={score} value={score}>{score}</option>
                ))}
              </select>
              <span className="text-lg text-gray-600">/ 15</span>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${
                tempGlasgowScore >= 13 ? 'bg-green-100 text-green-800' :
                tempGlasgowScore >= 9 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {tempGlasgowScore >= 13 ? 'Leve' : tempGlasgowScore >= 9 ? 'Moderado' : 'Severo'}
              </span>
            </div>

            <button
              onClick={() => submitGlasgowScore(tempGlasgowScore)}
              className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors text-lg"
            >
              <FaCheckCircle className="w-5 h-5 mr-2" />
              Confirmar Evaluación
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    const results = getResults();

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaCheckCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Simulación Completada!</h2>
          <p className="text-gray-600">Has terminado el caso: {simulatorCase.title}</p>
        </div>

        {/* Resultados principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
            <div className={`text-3xl font-bold ${getScoreColor(results.finalScore)} mb-2`}>
              {results.finalScore}%
            </div>
            <p className="text-sm text-gray-600">Puntuación Final</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {results.correctAnswers}/{results.totalQuestions}
            </div>
            <p className="text-sm text-gray-600">Respuestas Correctas</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {formatTime(results.totalTime)}
            </div>
            <p className="text-sm text-gray-600">Tiempo Total</p>
          </div>
        </div>

        {/* Evaluación de Glasgow si existe */}
        {results.glasgowEvaluation && (
          <div className={`border-l-4 p-6 mb-8 ${
            results.glasgowEvaluation.isCorrect 
              ? 'bg-green-50 border-green-400' 
              : 'bg-red-50 border-red-400'
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${
              results.glasgowEvaluation.isCorrect ? 'text-green-900' : 'text-red-900'
            }`}>
              <FaBrain className="inline w-5 h-5 mr-2" />
              Evaluación de Glasgow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <span className="font-medium">Tu respuesta:</span> {results.glasgowEvaluation.userAnswer}/15
              </div>
              <div>
                <span className="font-medium">Respuesta correcta:</span> {results.glasgowEvaluation.correctAnswer}/15
              </div>
            </div>
            <p className={results.glasgowEvaluation.isCorrect ? 'text-green-800' : 'text-red-800'}>
              {results.glasgowEvaluation.feedback}
            </p>
          </div>
        )}

        {/* Estadísticas detalladas */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Estadísticas Detalladas</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaTimesCircle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-gray-700">Errores totales: <span className="font-semibold">{results.mistakes}</span></span>
            </div>
            <div className="flex items-center">
              <FaExclamationTriangle className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-gray-700">Errores críticos: <span className="font-semibold text-red-600">{results.criticalErrors}</span></span>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Evaluación de tu desempeño</h3>
          <p className="text-blue-800 leading-relaxed">{results.feedback}</p>
        </div>

        {/* Recomendaciones */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">Recomendaciones para mejorar</h3>
          <ul className="space-y-2">
            {results.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-yellow-800">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetSimulator}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaRedo className="w-5 h-5 mr-2" />
            Repetir Simulación
          </button>

          {onComplete && (
            <button
              onClick={() => onComplete(results)}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaCheckCircle className="w-5 h-5 mr-2" />
              Continuar
            </button>
          )}

          {onExit && (
            <button
              onClick={onExit}
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              Salir
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!currentStep) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-600">Cargando simulación...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header con información del caso */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{simulatorCase.title}</h1>
            <p className="opacity-90">{simulatorCase.scenario}</p>
          </div>
          <div className="mt-4 lg:mt-0 lg:text-right">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(simulatorCase.difficulty)}`}>
              {simulatorCase.difficulty === 'beginner' ? 'Principiante' :
               simulatorCase.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
            </span>
          </div>
        </div>
      </div>

      {/* Información del paciente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <MdLocalHospital className="w-5 h-5 mr-2 text-blue-600" />
            Información del Paciente
          </h3>
          <div className="space-y-2">
            <p><span className="font-medium">Edad:</span> {simulatorCase.patientInfo.age} años</p>
            <p><span className="font-medium">Sexo:</span> {simulatorCase.patientInfo.gender}</p>
            <p><span className="font-medium">Motivo de consulta:</span> {simulatorCase.patientInfo.chiefComplaint}</p>
            <p><span className="font-medium">Antecedentes:</span> {simulatorCase.patientInfo.history}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <FaHeart className="w-5 h-5 mr-2 text-red-600" />
            Signos Vitales
          </h3>
          <div className="space-y-2">
            {Object.entries(simulatorCase.initialVitalSigns).map(([key, value]) => (
              <p key={key}><span className="font-medium">{key}:</span> {value}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Progreso */}
      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Paso {progress.currentStep + 1} de {simulatorCase.steps.length}
          </span>
          <span className="text-sm text-gray-600">
            <FaClock className="inline w-4 h-4 mr-1" />
            {formatTime(Date.now() - progress.startTime)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((progress.currentStep + 1) / simulatorCase.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Paso actual */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {currentStep.title}
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {currentStep.description}
        </p>

        {/* Opciones */}
        <div className="space-y-3">
          {currentStep.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.isCorrect;
            const showResult = showFeedback && isSelected;

            return (
              <button
                key={option.id}
                onClick={() => !showFeedback && submitAnswer(option.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-start">
                  {showResult && (
                    <div className="mr-3 mt-1">
                      {isCorrect ? (
                        <FaCheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <FaTimesCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  )}
                  <span className="text-gray-900">{option.text}</span>
                </div>
                {showResult && option.consequence && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{option.consequence}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback del paso */}
        {showFeedback && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              {selectedOption && currentStep.options.find(opt => opt.id === selectedOption)?.isCorrect
                ? currentStep.feedback.correct
                : currentStep.feedback.incorrect}
            </h4>
            <p className="text-blue-800 text-sm">{currentStep.feedback.explanation}</p>
          </div>
        )}

        {/* Botón siguiente */}
        {showFeedback && (
          <div className="mt-6 text-center">
            <button
              onClick={nextStep}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isLastStep ? (
                simulatorCase.glasgowScore ? (
                  <>
                    <FaBrain className="w-5 h-5 mr-2" />
                    Evaluación Neurológica
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="w-5 h-5 mr-2" />
                    Finalizar Caso
                  </>
                )
              ) : (
                <>
                  Siguiente Paso
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Información adicional */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center text-blue-800">
          <FaExclamationTriangle className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {currentStep.criticalStep ?
              'Este es un paso crítico. Un error aquí puede comprometer significativamente el resultado.' :
              'Tómate tu tiempo para analizar cada opción antes de responder.'
            }
          </span>
        </div>
      </div>
    </div>
  );
};
