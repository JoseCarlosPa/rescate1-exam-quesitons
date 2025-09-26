import { SimulatorCase } from '../CaseSimulator.types';

export const paroCardiacoCase: SimulatorCase = {
  id: 'paro-cardiaco-001',
  title: 'Paro Cardiorrespiratorio en Adulto',
  description: 'Paciente adulto en paro cardiorrespiratorio. Evaluación y manejo usando protocolo CABD.',
  scenario: 'Hombre de 55 años que colapsa súbitamente en la vía pública. Testigos refieren que estaba caminando normalmente cuando cayó al suelo sin respuesta.',
  patientInfo: {
    age: 55,
    gender: 'Masculino',
    chiefComplaint: 'Colapso súbito, sin respuesta',
    history: 'Desconocidos antecedentes médicos. Testigos niegan convulsiones.'
  },
  initialVitalSigns: {
    'Consciencia': 'Inconsciente',
    'Respiración': 'Ausente',
    'Pulso': 'No palpable',
    'Color': 'Cianótico',
    'Pupilas': 'Dilatadas'
  },
  glasgowScore: {
    expected: 3,
    timing: 'final_assessment',
    contextInfo: 'Tras 20 minutos de RCP avanzado, el paciente recupera circulación espontánea pero permanece inconsciente. No abre los ojos, no emite sonidos y presenta postura de decorticación al estímulo doloroso. Requiere intubación y ventilación mecánica.'
  },
  steps: [
    {
      id: 'step-c-compressions',
      stepNumber: 1,
      title: 'C - Compresiones Torácicas',
      description: 'Paciente inconsciente sin pulso palpable. ¿Cuál es tu primera acción?',
      options: [
        {
          id: 'c-1',
          text: 'Iniciar compresiones torácicas inmediatamente, 30:2',
          isCorrect: true,
          consequence: 'Correcto. Compresiones de alta calidad son la prioridad en paro cardiaco.'
        },
        {
          id: 'c-2',
          text: 'Verificar pulso carotídeo por 10 segundos antes de comprimir',
          isCorrect: false,
          consequence: 'Tiempo perdido crítico. En paro evidente se debe iniciar RCP inmediatamente.'
        },
        {
          id: 'c-3',
          text: 'Buscar desfibrilador antes de iniciar compresiones',
          isCorrect: false,
          consequence: 'Incorrecto. Las compresiones no deben retrasarse por buscar equipo.'
        }
      ],
      correctOptionId: 'c-1',
      feedback: {
        correct: 'Excelente. Las compresiones torácicas inmediatas son críticas para la supervivencia.',
        incorrect: 'En paro cardiorrespiratorio evidente, cada segundo cuenta. Las compresiones son prioritarias.',
        explanation: 'Las compresiones torácicas mantienen perfusión cerebral y coronaria hasta que llegue la desfibrilación.'
      },
      criticalStep: true
    },
    {
      id: 'step-a-airway',
      stepNumber: 2,
      title: 'A - Vía Aérea',
      description: 'Durante las compresiones, ¿cómo manejas la vía aérea?',
      options: [
        {
          id: 'a-1',
          text: 'Continuar RCP, abrir vía aérea con maniobra frente-mentón',
          isCorrect: true,
          consequence: 'Correcto. Apertura básica de vía aérea sin interrumpir compresiones.'
        },
        {
          id: 'a-2',
          text: 'Detener compresiones para intubar inmediatamente',
          isCorrect: false,
          consequence: 'Incorrecto. No interrumpir compresiones para procedimientos avanzados inicialmente.'
        },
        {
          id: 'a-3',
          text: 'Ignorar vía aérea hasta después de desfibrilación',
          isCorrect: false,
          consequence: 'Incorrecto. La vía aérea debe asegurarse para ventilación efectiva.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Perfecto. Mantienes las prioridades correctas sin interrumpir compresiones.',
        incorrect: 'En RCP, las compresiones continuas son más importantes que procedimientos avanzados de vía aérea.',
        explanation: 'La apertura básica de vía aérea permite ventilación efectiva sin comprometer las compresiones.'
      }
    },
    {
      id: 'step-b-breathing',
      stepNumber: 3,
      title: 'B - Respiración',
      description: 'Relación compresión-ventilación apropiada en RCP básico:',
      options: [
        {
          id: 'b-1',
          text: '30 compresiones : 2 ventilaciones',
          isCorrect: true,
          consequence: 'Correcto. Relación estándar para RCP básico en adultos.'
        },
        {
          id: 'b-2',
          text: '15 compresiones : 2 ventilaciones',
          isCorrect: false,
          consequence: 'Incorrecto. Esta relación es para RCP pediátrico con 2 reanimadores.'
        },
        {
          id: 'b-3',
          text: 'Solo compresiones, sin ventilaciones',
          isCorrect: false,
          consequence: 'Incorrecto. Las ventilaciones son necesarias en RCP básico.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Excelente. Conoces la relación correcta para RCP básico.',
        incorrect: 'La relación 30:2 es el estándar internacional para RCP básico en adultos.',
        explanation: 'Esta relación optimiza la perfusión manteniendo oxigenación adecuada.'
      }
    },
    {
      id: 'step-d-defibrillation',
      stepNumber: 4,
      title: 'D - Desfibrilación',
      description: 'Llega el desfibrilador. Al conectarlo, el ritmo muestra fibrilación ventricular:',
      options: [
        {
          id: 'd-1',
          text: 'Detener RCP, cargar desfibrilador, descargar inmediatamente',
          isCorrect: true,
          consequence: 'Correcto. FV es ritmo desfibrilable, requiere choque inmediato.'
        },
        {
          id: 'd-2',
          text: 'Continuar RCP 2 minutos más antes de desfibrilar',
          isCorrect: false,
          consequence: 'Incorrecto. FV requiere desfibrilación inmediata cuando se detecta.'
        },
        {
          id: 'd-3',
          text: 'Administrar epinefrina antes de desfibrilar',
          isCorrect: false,
          consequence: 'Incorrecto. La desfibrilación tiene prioridad sobre medicamentos en FV.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Perfecto. Has priorizado correctamente la desfibrilación en ritmo desfibrilable.',
        incorrect: 'La fibrilación ventricular requiere desfibrilación inmediata para ser efectiva.',
        explanation: 'Cada minuto de retraso en desfibrilación reduce las posibilidades de supervivencia en 10%.'
      },
      criticalStep: true
    },
    {
      id: 'step-post-shock',
      stepNumber: 5,
      title: 'Post-Desfibrilación',
      description: 'Inmediatamente después del choque eléctrico, ¿cuál es tu acción?',
      options: [
        {
          id: 'post-1',
          text: 'Reanudar RCP inmediatamente por 2 minutos',
          isCorrect: true,
          consequence: 'Correcto. RCP inmediato post-desfibrilación es esencial.'
        },
        {
          id: 'post-2',
          text: 'Verificar pulso inmediatamente',
          isCorrect: false,
          consequence: 'Incorrecto. No verificar pulso inmediatamente post-desfibrilación.'
        },
        {
          id: 'post-3',
          text: 'Esperar a ver si recupera consciencia',
          isCorrect: false,
          consequence: 'Incorrecto. No esperar, continuar RCP inmediatamente.'
        }
      ],
      correctOptionId: 'post-1',
      feedback: {
        correct: 'Excelente. Conoces el protocolo post-desfibrilación correctamente.',
        incorrect: 'Después de cualquier desfibrilación, se debe reanudar RCP inmediatamente.',
        explanation: 'El RCP post-desfibrilación ayuda a mantener cualquier ritmo organizado que pueda haberse generado.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar correctamente el protocolo CABD en paro cardiorrespiratorio',
    'Identificar ritmos desfibrilables vs no desfibrilables',
    'Ejecutar RCP de alta calidad con mínimas interrupciones',
    'Priorizar correctamente desfibrilación vs medicamentos',
    'Comprender la importancia del RCP post-desfibrilación'
  ],
  difficulty: 'advanced',
  estimatedTime: '20-25 minutos'
};
