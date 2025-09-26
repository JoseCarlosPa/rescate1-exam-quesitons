import { SimulatorCase } from '../CaseSimulator.types';
import { traumaCaderaCase } from './traumaCadera.case';
import { pediatriaCrupCase } from './pediatriaCrup.case';
import { paroCardiacoCase } from './paroCardiaco.case';
import { dolotToracicoCase } from './dolorToracico.case';
import { convulsionFebrilCase } from './convulsionFebril.case';
import { politraumatismoCase } from './politraumatismo.case';
import { intoxicacionComplexCase } from './intoxicacionComplex.case';

export const allSimulatorCases: SimulatorCase[] = [
  // Casos principiantes/sencillos
  convulsionFebrilCase,     // Protocolo ABCDE - Pediatría básica
  dolotToracicoCase,        // Protocolo ABCDE - Medicina

  // Casos intermedios
  traumaCaderaCase,         // Protocolo XABCDE - Trauma
  pediatriaCrupCase,        // Protocolo ABCDE - Pediatría
  politraumatismoCase,      // Protocolo XABCDE - Trauma complejo

  // Casos avanzados/difíciles
  paroCardiacoCase,         // Protocolo CABD - Reanimación
  intoxicacionComplexCase   // Protocolo ABCDE - Toxicología avanzada
];

// Exportar casos individuales para uso específico
export {
  traumaCaderaCase,
  pediatriaCrupCase,
  paroCardiacoCase,
  dolotToracicoCase,
  convulsionFebrilCase,
  politraumatismoCase,
  intoxicacionComplexCase
};
