import { useState } from 'react';
import { CaseSimulatorComponent } from './CaseSimulator.component';
import { simulatorCases, getSimulatorCasesByDifficulty } from './CaseSimulator.constants';
import { SimulatorCase, SimulatorResult } from './CaseSimulator.types';
import { FaClock, FaGraduationCap, FaPlay, FaArrowLeft, FaFilter, FaTrophy } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

export default function CaseSimulatorPage() {
  const [selectedCase, setSelectedCase] = useState<SimulatorCase | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [completedCases, setCompletedCases] = useState<Set<string>>(new Set());

  const filteredCases = difficultyFilter === 'all'
    ? simulatorCases
    : getSimulatorCasesByDifficulty(difficultyFilter);

  const handleCaseComplete = (results: SimulatorResult) => {
    // Aquí podrías procesar los resultados si es necesario
    console.log('Caso completado con resultados:', results);
    if (selectedCase) {
      setCompletedCases(prev => new Set(prev).add(selectedCase.id));
    }
  };

  const handleBackToSelection = () => {
    setSelectedCase(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Principiante';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
      default: return '';
    }
  };

  // Si hay un caso seleccionado, mostrar el simulador
  if (selectedCase) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Botón de regreso */}
          <div className="mb-6">
            <button
              onClick={handleBackToSelection}
              className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Volver a selección de casos
            </button>
          </div>

          <CaseSimulatorComponent
            simulatorCase={selectedCase}
            onComplete={handleCaseComplete}
            onExit={handleBackToSelection}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <MdLocalHospital className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simulador de Casos Clínicos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practica casos reales paso a paso. Desarrolla tus habilidades de toma de decisiones
            en emergencias médicas con retroalimentación inmediata y evaluación detallada.
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
            <FaTrophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{completedCases.size}</div>
            <div className="text-sm text-gray-600">Casos Completados</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
            <FaGraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{simulatorCases.length}</div>
            <div className="text-sm text-gray-600">Casos Disponibles</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
            <FaClock className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">15-20</div>
            <div className="text-sm text-gray-600">Minutos por Caso</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center">
            <FaFilter className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700 mr-3">Filtrar por dificultad:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(level as 'all' | 'beginner' | 'intermediate' | 'advanced')}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  difficultyFilter === level
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {level === 'all' ? 'Todos' : getDifficultyLabel(level)}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de casos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((simulatorCase) => {
            const isCompleted = completedCases.has(simulatorCase.id);

            return (
              <div
                key={simulatorCase.id}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Header del caso */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 mr-3">
                          {simulatorCase.title.replace('Simulación: ', '')}
                        </h3>
                        {isCompleted && (
                          <FaTrophy className="w-5 h-5 text-yellow-500" title="Caso completado" />
                        )}
                      </div>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(simulatorCase.difficulty)}`}>
                        {getDifficultyLabel(simulatorCase.difficulty)}
                      </span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {simulatorCase.description}
                  </p>

                  {/* Información del paciente resumida */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Información del Paciente</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Edad:</span> {simulatorCase.patientInfo.age} años
                      </div>
                      <div>
                        <span className="font-medium">Sexo:</span> {simulatorCase.patientInfo.gender}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Motivo:</span> {simulatorCase.patientInfo.chiefComplaint}
                    </div>
                  </div>

                  {/* Objetivos de aprendizaje */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Objetivos de Aprendizaje</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {simulatorCase.learningObjectives.slice(0, 3).map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{objective}</span>
                        </li>
                      ))}
                      {simulatorCase.learningObjectives.length > 3 && (
                        <li className="text-blue-600 text-xs">
                          +{simulatorCase.learningObjectives.length - 3} objetivos más...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Información adicional */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <FaClock className="w-4 h-4 mr-1" />
                      {simulatorCase.estimatedTime}
                    </div>
                    <div className="flex items-center">
                      <FaGraduationCap className="w-4 h-4 mr-1" />
                      {simulatorCase.steps.length} pasos
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <button
                    onClick={() => setSelectedCase(simulatorCase)}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaPlay className="w-4 h-4 mr-2" />
                    {isCompleted ? 'Repetir Simulación' : 'Iniciar Simulación'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mensaje si no hay casos */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <FaGraduationCap className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No hay casos disponibles
            </h3>
            <p className="text-gray-600">
              No se encontraron casos para el nivel de dificultad seleccionado.
            </p>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            ¿Cómo funciona el simulador?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>
              <div className="font-semibold mb-1">1. Evaluación Paso a Paso</div>
              <div>Sigue el protocolo médico correcto en cada decisión crítica del caso.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">2. Retroalimentación Inmediata</div>
              <div>Recibe explicaciones detalladas de cada decisión y sus consecuencias.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">3. Evaluación Final</div>
              <div>Obtén un análisis completo de tu desempeño con recomendaciones de mejora.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
