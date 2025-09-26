import { SimulatorCase, SimulatorResult } from './CaseSimulator.types';
import { useCaseSimulator } from './CaseSimulator.hook';
import { FaClock, FaHeart, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';
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
    submitAnswer,
    nextStep,
    resetSimulator,
    getResults
  } = useCaseSimulator(simulatorCase);

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
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(simulatorCase.initialVitalSigns).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-medium">{key}:</span> {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progreso */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Paso {progress.currentStep + 1} de {simulatorCase.steps.length}
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FaClock className="w-4 h-4 mr-1" />
              {formatTime(Date.now() - progress.startTime)}
            </div>
            <div className={`flex items-center ${getScoreColor(progress.score)}`}>
              <span className="font-semibold">{progress.score}%</span>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((progress.currentStep + (showFeedback ? 1 : 0)) / simulatorCase.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Paso actual */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mr-3">
            {currentStep.stepNumber}
          </span>
          <h2 className="text-xl font-semibold text-gray-900">{currentStep.title}</h2>
          {currentStep.criticalStep && (
            <FaExclamationTriangle className="w-5 h-5 ml-2 text-orange-500" title="Paso crítico" />
          )}
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">{currentStep.description}</p>

        {/* Opciones */}
        <div className="space-y-3">
          {currentStep.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.isCorrect;

            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';

            if (!showFeedback) {
              buttonClass += isSelected
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
            } else {
              if (isSelected) {
                buttonClass += isCorrect
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-red-500 bg-red-50 text-red-800';
              } else if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50 text-green-800';
              } else {
                buttonClass += 'border-gray-200 bg-gray-50 opacity-50';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => !showFeedback && submitAnswer(option.id)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <div className="flex items-center">
                  {showFeedback && (
                    <div className="mr-3">
                      {isCorrect ? (
                        <FaCheckCircle className="w-5 h-5 text-green-600" />
                      ) : isSelected ? (
                        <FaTimesCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                  <span className="flex-1">{option.text}</span>
                </div>
                {showFeedback && isSelected && option.consequence && (
                  <div className="mt-2 text-sm opacity-75">
                    <strong>Consecuencia:</strong> {option.consequence}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="mt-6 p-4 rounded-lg bg-blue-50 border-l-4 border-blue-400">
            <div className="mb-2">
              <span className="font-semibold text-blue-900">
                {currentStep.options.find(opt => opt.id === selectedOption)?.isCorrect
                  ? currentStep.feedback.correct
                  : currentStep.feedback.incorrect}
              </span>
            </div>
            <p className="text-blue-800 text-sm">{currentStep.feedback.explanation}</p>

            <div className="mt-4 flex justify-between items-center">
              {progress.criticalErrors > 0 && selectedOption &&
               !currentStep.options.find(opt => opt.id === selectedOption)?.isCorrect &&
               currentStep.criticalStep ? (
                <div className="text-red-600 font-semibold">
                  ⚠️ Error crítico - Simulación terminada
                </div>
              ) : (
                <div></div>
              )}

              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isLastStep ? 'Ver Resultados' : 'Continuar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
