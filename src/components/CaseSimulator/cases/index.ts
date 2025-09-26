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

// Casos existentes actualizados
export { paroCardiacoCase } from './paroCardiaco.case';
export { traumaCaderaCase } from './traumaCadera.case';
export { dolorToracicoCase } from './dolorToracico.case';
export { convulsionFebrilCase } from './convulsionFebril.case';
export { pediatriaCrupCase } from './pediatriaCrup.case';
export { politraumatismoCase } from './politraumatismo.case';
export { intoxicacionComplexCase } from './intoxicacionComplex.case';

// Casos nuevos con evaluación de Glasgow
export { laseracionMenorCase } from './laseracionMenor.case';
export { diabeticoHipoglicemicoCase } from './diabeticoHipoglicemico.case';
export { politraumatismoComplexCase } from './politraumatismoComplex.case';
