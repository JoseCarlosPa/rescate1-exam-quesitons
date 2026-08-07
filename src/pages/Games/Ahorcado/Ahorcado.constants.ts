import { AhorcadoWord } from './Ahorcado.types';

export const MAX_MISTAKES = 6;

export const AHORCADO_WORDS: AhorcadoWord[] = [
  // EASY
  { id: 'a1', word: 'SHOCK', hint: 'Estado de hipoperfusión tisular grave', difficulty: 'easy', category: 'Condiciones' },
  { id: 'a2', word: 'APNEA', hint: 'Ausencia o cese de la respiración', difficulty: 'easy', category: 'Respiratorio' },
  { id: 'a3', word: 'PULSO', hint: 'Expansión palpable de una arteria', difficulty: 'easy', category: 'Signos Vitales' },
  { id: 'a4', word: 'EDEMA', hint: 'Acumulación de líquido en los tejidos', difficulty: 'easy', category: 'Condiciones' },
  { id: 'a5', word: 'VENA', hint: 'Vaso sanguíneo que lleva sangre de vuelta al corazón', difficulty: 'easy', category: 'Anatomía' },
  
  // MEDIUM
  { id: 'm1', word: 'DISNEA', hint: 'Dificultad o esfuerzo para respirar', difficulty: 'medium', category: 'Respiratorio' },
  { id: 'm2', word: 'HIPOXIA', hint: 'Deficiencia de oxígeno en los tejidos', difficulty: 'medium', category: 'Condiciones' },
  { id: 'm3', word: 'SISTOLE', hint: 'Fase de contracción del músculo cardíaco', difficulty: 'medium', category: 'Fisiología' },
  { id: 'm4', word: 'ISQUEMIA', hint: 'Flujo sanguíneo inadecuado a una parte del cuerpo', difficulty: 'medium', category: 'Cardiovascular' },
  { id: 'm5', word: 'BRADIPNEA', hint: 'Frecuencia respiratoria anormalmente baja', difficulty: 'medium', category: 'Signos Vitales' },
  { id: 'm6', word: 'DIAFRAGMA', hint: 'Músculo principal de la respiración', difficulty: 'medium', category: 'Anatomía' },
  { id: 'm7', word: 'CIANOSIS', hint: 'Coloración azulada de la piel por falta de oxígeno', difficulty: 'medium', category: 'Signos Vitales' },
  
  // HARD
  { id: 'h1', word: 'ANAFILAXIA', hint: 'Reacción alérgica severa y sistémica que amenaza la vida', difficulty: 'hard', category: 'Emergencias' },
  { id: 'h2', word: 'NEUMOTORAX', hint: 'Acumulación de aire en el espacio pleural', difficulty: 'hard', category: 'Trauma' },
  { id: 'h3', word: 'TAQUICARDIA', hint: 'Frecuencia cardíaca mayor a 100 latidos por minuto', difficulty: 'hard', category: 'Cardiovascular' },
  { id: 'h4', word: 'EPINEFRINA', hint: 'Medicamento de primera línea para paro cardíaco y anafilaxia', difficulty: 'hard', category: 'Farmacología' },
  { id: 'h5', word: 'FIBRILACION', hint: 'Contracción temblorosa e ineficaz de las fibras musculares cardíacas', difficulty: 'hard', category: 'Cardiovascular' },
  { id: 'h6', word: 'HEMOTORAX', hint: 'Acumulación de sangre en la cavidad pleural', difficulty: 'hard', category: 'Trauma' },
  { id: 'h7', word: 'PERICARDIO', hint: 'Saco membranoso que envuelve el corazón', difficulty: 'hard', category: 'Anatomía' },
  { id: 'h8', word: 'MEDIASTINO', hint: 'Espacio torácico entre los pulmones que contiene el corazón', difficulty: 'hard', category: 'Anatomía' },
];
