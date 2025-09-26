import { SimulatorCase } from './CaseSimulator.types';
import {
  // Casos existentes actualizados
  paroCardiacoCase,
  traumaCaderaCase,
  dolorToracicoCase,
  convulsionFebrilCase,
  pediatriaCrupCase,
  politraumatismoCase,
  intoxicacionComplexCase,
  // Casos nuevos
  laseracionMenorCase,
  diabeticoHipoglicemicoCase,
  politraumatismoComplexCase
} from './cases';

export const simulatorCases: SimulatorCase[] = [
  // Casos principiantes/sencillos
  laseracionMenorCase,      // Nuevo - Trauma menor con ABCDE
  convulsionFebrilCase,     // Protocolo ABCDE - Pediatría básica
  dolorToracicoCase,        // Protocolo ABCDE - Medicina

  // Casos intermedios
  diabeticoHipoglicemicoCase, // Nuevo - Emergencia metabólica
  traumaCaderaCase,         // Protocolo XABCDE - Trauma
  pediatriaCrupCase,        // Protocolo ABCDE - Pediatría
  politraumatismoCase,      // Protocolo XABCDE - Trauma complejo

  // Casos avanzados/difíciles
  politraumatismoComplexCase, // Nuevo - Trauma complejo severo
  paroCardiacoCase,         // Protocolo CABD - Reanimación
  intoxicacionComplexCase   // Protocolo ABCDE - Toxicología avanzada
];

export const getSimulatorCasesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): SimulatorCase[] => {
  return simulatorCases.filter(case_ => case_.difficulty === difficulty);
};

export const getCaseById = (id: string): SimulatorCase | undefined => {
  return simulatorCases.find(case_ => case_.id === id);
};

// Constantes para estadísticas
export const DIFFICULTY_LABELS = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado'
} as const;

export const DIFFICULTY_COLORS = {
  beginner: 'bg-green-100 text-green-800 border-green-200',
  intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  advanced: 'bg-red-100 text-red-800 border-red-200'
} as const;
