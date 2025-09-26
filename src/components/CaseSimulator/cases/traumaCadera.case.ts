import { SimulatorCase } from '../CaseSimulator.types';

export const traumaCaderaCase: SimulatorCase = {
  id: 'trauma-cadera-001',
  title: 'Trauma de Cadera por Caída',
  description: 'Paciente anciana con trauma de cadera tras caída en el hogar. Evaluación usando protocolo XABCDE.',
  scenario: 'Mujer de 78 años que sufrió una caída en su domicilio. Se encuentra consciente pero con dolor intenso en cadera derecha y imposibilidad para ponerse de pie.',
  patientInfo: {
    age: 78,
    gender: 'Femenino',
    chiefComplaint: 'Dolor intenso en cadera derecha tras caída',
    history: 'Hipertensión arterial controlada con medicamentos. Vive sola en casa de dos pisos.'
  },
  initialVitalSigns: {
    'FC': '98 lpm',
    'PA': '140/85 mmHg',
    'FR': '22 rpm',
    'SatO2': '96%',
    'Temp': '36.5°C',
    'Glasgow': '15/15'
  },
  steps: [
    {
      id: 'step-x',
      stepNumber: 1,
      title: 'X - Control de Hemorragia Exanguinante',
      description: 'Evalúa si existe hemorragia masiva que comprometa la vida del paciente inmediatamente.',
      options: [
        {
          id: 'x-1',
          text: 'No se observa hemorragia externa masiva, continuar con evaluación',
          isCorrect: true,
          consequence: 'Correcto. No hay evidencia de hemorragia exanguinante visible.'
        },
        {
          id: 'x-2',
          text: 'Aplicar torniquete en extremidad inferior derecha',
          isCorrect: false,
          consequence: 'Incorrecto. No hay indicación para torniquete en este caso.'
        },
        {
          id: 'x-3',
          text: 'Aplicar presión directa en área pélvica',
          isCorrect: false,
          consequence: 'Incorrecto. No hay hemorragia externa evidente que requiera presión directa.'
        }
      ],
      correctOptionId: 'x-1',
      feedback: {
        correct: 'Excelente. Has identificado correctamente que no existe hemorragia exanguinante.',
        incorrect: 'La X del protocolo XABCDE se enfoca únicamente en hemorragias masivas que pongan en peligro inmediato la vida.',
        explanation: 'El control de hemorragia exanguinante es la primera prioridad en trauma. Solo se actúa si hay sangrado masivo visible.'
      }
    },
    {
      id: 'step-a',
      stepNumber: 2,
      title: 'A - Vía Aérea',
      description: 'Evalúa la permeabilidad de la vía aérea y la capacidad de comunicación del paciente.',
      options: [
        {
          id: 'a-1',
          text: 'Vía aérea permeable, paciente habla claramente',
          isCorrect: true,
          consequence: 'Correcto. La paciente mantiene vía aérea permeable y puede comunicarse.'
        },
        {
          id: 'a-2',
          text: 'Realizar maniobra de elevación de mentón',
          isCorrect: false,
          consequence: 'Innecesario. La paciente está consciente y habla normalmente.'
        },
        {
          id: 'a-3',
          text: 'Colocar cánula orofaríngea',
          isCorrect: false,
          consequence: 'Contraindicado en paciente consciente. Puede provocar vómito.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Perfecto. Has evaluado correctamente que la vía aérea está permeable.',
        incorrect: 'En un paciente consciente que habla claramente, la vía aérea está permeable por definición.',
        explanation: 'Si el paciente puede hablar, significa que la vía aérea está permeable y no requiere intervención inmediata.'
      }
    },
    {
      id: 'step-b',
      stepNumber: 3,
      title: 'B - Respiración',
      description: 'Evalúa la ventilación y oxigenación del paciente.',
      options: [
        {
          id: 'b-1',
          text: 'Respiración simétrica, SatO2 96%, administrar O2 suplementario',
          isCorrect: true,
          consequence: 'Correcto. La respiración es adecuada pero el O2 suplementario es beneficioso.'
        },
        {
          id: 'b-2',
          text: 'Respiración normal, no requiere oxígeno',
          isCorrect: false,
          consequence: 'Incorrecto. Todo paciente traumatizado debe recibir oxígeno suplementario inicialmente.'
        },
        {
          id: 'b-3',
          text: 'Signos de dificultad respiratoria, asistir ventilación',
          isCorrect: false,
          consequence: 'Incorrecto. La paciente no muestra signos de dificultad respiratoria.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Excelente. Has identificado una respiración adecuada y la necesidad de O2 suplementario.',
        incorrect: 'Todo paciente traumatizado debe recibir oxígeno suplementario como medida inicial.',
        explanation: 'Aunque la SatO2 sea aceptable, el oxígeno suplementario ayuda a optimizar la oxigenación tisular en trauma.'
      }
    },
    {
      id: 'step-c',
      stepNumber: 4,
      title: 'C - Circulación',
      description: 'Evalúa el estado circulatorio y busca signos de shock.',
      options: [
        {
          id: 'c-1',
          text: 'Pulso presente, TA estable, establecer acceso vascular',
          isCorrect: true,
          consequence: 'Correcto. Estado hemodinámico estable pero necesario acceso vascular.'
        },
        {
          id: 'c-2',
          text: 'Signos de shock, iniciar reanimación con cristaloides masivos',
          isCorrect: false,
          consequence: 'Incorrecto. No hay signos evidentes de shock hipovolémico.'
        },
        {
          id: 'c-3',
          text: 'Circulación normal, no requiere acceso vascular',
          isCorrect: false,
          consequence: 'Incorrecto. Todo paciente traumatizado requiere acceso vascular profiláctico.'
        }
      ],
      correctOptionId: 'c-1',
      feedback: {
        correct: 'Perfecto. Has evaluado correctamente el estado circulatorio y la necesidad de acceso vascular.',
        incorrect: 'Es esencial establecer acceso vascular en todo paciente traumatizado, incluso si está estable.',
        explanation: 'El acceso vascular temprano permite administrar medicamentos y fluidos si la condición se deteriora.'
      }
    },
    {
      id: 'step-d',
      stepNumber: 5,
      title: 'D - Déficit Neurológico',
      description: 'Evalúa el estado neurológico del paciente.',
      options: [
        {
          id: 'd-1',
          text: 'Glasgow 15/15, pupilas normales, sin déficit focal',
          isCorrect: true,
          consequence: 'Correcto. Estado neurológico normal sin signos de trauma craneoencefálico.'
        },
        {
          id: 'd-2',
          text: 'Posible trauma craneal, inmovilizar columna cervical',
          isCorrect: false,
          consequence: 'Incorrecto. No hay indicación de trauma cervical en este mecanismo.'
        },
        {
          id: 'd-3',
          text: 'Alteración del estado de consciencia, evaluar hipoglicemia',
          isCorrect: false,
          consequence: 'Incorrecto. La paciente está completamente consciente y orientada.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Excelente. Has evaluado correctamente que no hay compromiso neurológico.',
        incorrect: 'La paciente mantiene un estado neurológico completamente normal.',
        explanation: 'El Glasgow 15/15 y la capacidad de comunicación indican función neurológica intacta.'
      }
    },
    {
      id: 'step-e',
      stepNumber: 6,
      title: 'E - Exposición/Examen',
      description: 'Exponer completamente al paciente para evaluación secundaria manteniendo la temperatura.',
      options: [
        {
          id: 'e-1',
          text: 'Exponer extremidad afectada, evaluar deformidad y pulsos distales',
          isCorrect: true,
          consequence: 'Correcto. Se observa deformidad en cadera derecha, pulsos distales presentes.'
        },
        {
          id: 'e-2',
          text: 'Exposición completa no necesaria por ser trauma menor',
          isCorrect: false,
          consequence: 'Incorrecto. Es esencial evaluar completamente para descartar otras lesiones.'
        },
        {
          id: 'e-3',
          text: 'Enfocar solo en la queja principal sin exposición adicional',
          isCorrect: false,
          consequence: 'Incorrecto. Puede haber lesiones asociadas no evidentes inicialmente.'
        }
      ],
      correctOptionId: 'e-1',
      feedback: {
        correct: 'Perfecto. La exposición controlada permite identificar la lesión específica y descartar otras.',
        incorrect: 'La exposición completa es fundamental para no pasar por alto lesiones asociadas.',
        explanation: 'En trauma, la evaluación sistemática completa previene el diagnóstico tardío de lesiones.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar correctamente el protocolo XABCDE en trauma ortopédico',
    'Identificar cuándo cada paso requiere intervención',
    'Priorizar correctamente las acciones según la gravedad',
    'Evaluar sistemáticamente sin omitir pasos críticos',
    'Reconocer la importancia de cada letra del protocolo'
  ],
  difficulty: 'intermediate',
  estimatedTime: '15-20 minutos'
};
