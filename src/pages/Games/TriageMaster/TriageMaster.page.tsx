import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { TriageColor, TriageScenario, GameState } from './TriageMaster.types';
import { SCENARIOS } from './TriageMaster.constants';
import { FaTag, FaAmbulance, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function TriageMaster() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    scenario: null,
    currentPatientIndex: 0,
    taggedPatients: {},
    timeRemaining: 0,
    score: 0,
  });

  const handleStart = (scenario: TriageScenario) => {
    setGameState({
      phase: 'playing',
      scenario,
      currentPatientIndex: 0,
      taggedPatients: {},
      timeRemaining: scenario.timeLimit,
      score: 0,
    });
  };

  const handleTag = (color: TriageColor) => {
    if (gameState.phase !== 'playing' || !gameState.scenario) return;

    const patient = gameState.scenario.patients[gameState.currentPatientIndex];
    const isCorrect = color === patient.correctTag;
    
    setGameState((prev) => {
      const newTagged = {
        ...prev.taggedPatients,
        [patient.id]: { selected: color, correct: patient.correctTag, timeUsed: 0 },
      };
      
      const newScore = prev.score + (isCorrect ? 100 : 0);
      const isFinished = prev.currentPatientIndex >= prev.scenario!.patients.length - 1;

      return {
        ...prev,
        taggedPatients: newTagged,
        score: newScore,
        currentPatientIndex: isFinished ? prev.currentPatientIndex : prev.currentPatientIndex + 1,
        phase: isFinished ? 'result' : 'playing',
      };
    });
  };

  useEffect(() => {
    if (gameState.phase === 'playing' && gameState.timeRemaining > 0) {
      const timer = setInterval(() => {
        setGameState((prev) => {
          if (prev.timeRemaining <= 1) {
            clearInterval(timer);
            return { ...prev, timeRemaining: 0, phase: 'result' };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState.phase, gameState.timeRemaining]);

  if (gameState.phase === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
              🚨 Triage Master
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Aplica el algoritmo START en incidentes con múltiples víctimas. Actúa rápido, cada segundo cuenta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleStart(scenario)}
                className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 rounded-2xl p-6 text-left transition-all group"
              >
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400">{scenario.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{scenario.description}</p>
                <div className="flex gap-4 text-sm font-semibold">
                  <span className="flex items-center gap-1 text-blue-400">
                    <FaAmbulance /> {scenario.patients.length} Pacientes
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <FaClock /> {scenario.timeLimit}s Límite
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink to={AllRoutes.GAMES} className="text-gray-500 hover:text-white transition-colors">
              ← Volver a Juegos
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result' && gameState.scenario) {
    const total = gameState.scenario.patients.length;
    const answered = Object.keys(gameState.taggedPatients).length;
    const correctCount = Object.values(gameState.taggedPatients).filter(t => t.selected === t.correct).length;
    
    return (
      <div className="min-h-screen bg-slate-900 py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-2">Reporte de Incidente</h2>
            <p className="text-xl text-gray-400">Puntaje Final: {gameState.score}</p>
            <p className="text-md text-gray-400">
              Clasificaste a {answered} de {total} pacientes, con {correctCount} correctos.
            </p>
          </div>

          <div className="space-y-4">
            {gameState.scenario.patients.map((p, i) => {
              const tagInfo = gameState.taggedPatients[p.id];
              const isCorrect = tagInfo?.selected === p.correctTag;
              const notAnswered = !tagInfo;

              return (
                <div key={p.id} className={`p-4 rounded-xl border ${notAnswered ? 'bg-gray-800 border-gray-700' : isCorrect ? 'bg-green-900/30 border-green-700' : 'bg-red-900/30 border-red-700'}`}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold">Paciente {i + 1}</h4>
                    {!notAnswered && (isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />)}
                  </div>
                  <p className="text-gray-300 mb-2">{p.description}</p>
                  <p className="text-sm text-gray-400 mb-3 italic">Razón: {p.explanation}</p>
                  
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">Correcta: {p.correctTag}</span>
                    {!notAnswered && <span className={`text-xs px-2 py-1 rounded ${isCorrect ? 'bg-green-700' : 'bg-red-700'}`}>Tú elegiste: {tagInfo.selected}</span>}
                    {notAnswered && <span className="text-xs bg-gray-600 px-2 py-1 rounded">Sin responder</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 flex gap-4 justify-center">
            <button onClick={() => setGameState(prev => ({...prev, phase: 'setup'}))} className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-bold transition">
              Elegir Otro Escenario
            </button>
            <NavLink to={AllRoutes.GAMES} className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-bold transition">
              Salir
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  const patient = gameState.scenario!.patients[gameState.currentPatientIndex];

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 flex flex-col text-white">
      <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col">
        
        {/* Header HUD */}
        <div className="flex justify-between items-center bg-gray-800 rounded-2xl p-4 mb-6 shadow-lg border border-gray-700">
          <div>
            <h2 className="font-bold text-lg text-yellow-500">{gameState.scenario?.title}</h2>
            <span className="text-sm text-gray-400">Paciente {gameState.currentPatientIndex + 1} de {gameState.scenario?.patients.length}</span>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-mono font-bold flex items-center gap-2 justify-end ${gameState.timeRemaining < 30 ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
              <FaClock /> {gameState.timeRemaining}s
            </div>
            <span className="text-sm text-gray-400">Score: {gameState.score}</span>
          </div>
        </div>

        {/* Patient Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={patient.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex-grow flex flex-col justify-center"
          >
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl mb-8">
              <div className="mb-6 pb-6 border-b border-gray-700">
                <h3 className="text-2xl font-bold mb-2">Evaluación Rápida</h3>
                <p className="text-xl text-gray-300 italic">"{patient.description}"</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-1">Caminando</span>
                  <span className={`font-bold text-lg ${patient.condition.canWalk ? 'text-green-400' : 'text-red-400'}`}>
                    {patient.condition.canWalk ? 'Sí' : 'No'}
                  </span>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-1">Respiración (RPM)</span>
                  <span className={`font-bold text-lg ${(patient.condition.respiratoryRate === 0 || patient.condition.respiratoryRate > 30) ? 'text-red-400' : 'text-green-400'}`}>
                    {patient.condition.respiratoryRate} / min
                  </span>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-1">Pulso / Llenado Capilar</span>
                  <span className={`font-bold text-lg ${patient.condition.pulsePresent ? 'text-green-400' : 'text-red-400'}`}>
                    {patient.condition.pulsePresent ? 'Presente / < 2s' : 'Ausente / > 2s'}
                  </span>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-1">Obedece Comandos</span>
                  <span className={`font-bold text-lg ${patient.condition.followsCommands ? 'text-green-400' : 'text-red-400'}`}>
                    {patient.condition.followsCommands ? 'Sí' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Triage Tags / Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => handleTag('GREEN')} className="bg-green-600 hover:bg-green-500 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg border-2 border-green-400">
            <FaTag className="text-3xl text-green-100" />
            <span className="font-bold text-white text-lg">VERDE</span>
            <span className="text-xs text-green-100 uppercase font-semibold">Menor</span>
          </button>
          
          <button onClick={() => handleTag('YELLOW')} className="bg-yellow-500 hover:bg-yellow-400 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg border-2 border-yellow-300">
            <FaTag className="text-3xl text-yellow-100" />
            <span className="font-bold text-white text-lg">AMARILLO</span>
            <span className="text-xs text-yellow-100 uppercase font-semibold">Demorado</span>
          </button>
          
          <button onClick={() => handleTag('RED')} className="bg-red-600 hover:bg-red-500 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg border-2 border-red-400">
            <FaTag className="text-3xl text-red-100" />
            <span className="font-bold text-white text-lg">ROJO</span>
            <span className="text-xs text-red-100 uppercase font-semibold">Inmediato</span>
          </button>
          
          <button onClick={() => handleTag('BLACK')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg border-2 border-gray-500">
            <FaTag className="text-3xl text-gray-300" />
            <span className="font-bold text-white text-lg">NEGRO</span>
            <span className="text-xs text-gray-400 uppercase font-semibold">Fallecido</span>
          </button>
        </div>

      </div>
    </div>
  );
}
