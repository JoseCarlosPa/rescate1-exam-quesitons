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
      id: 'step-a-airway-rcp',
      stepNumber: 2,
      title: 'A - Vía Aérea durante RCP',
      description: 'Después de iniciar compresiones, ¿cómo manejas la vía aérea?',
      options: [
        {
          id: 'a-1',
          text: 'Apertura básica (elevación de mentón), continuar con ventilaciones 30:2',
          isCorrect: true,
          consequence: 'Correcto. Manejo básico efectivo de vía aérea durante RCP inicial.'
        },
        {
          id: 'a-2',
          text: 'Intubación endotraqueal inmediata',
          isCorrect: false,
          consequence: 'Incorrecto. No debe interrumpir compresiones para vía aérea avanzada inicialmente.'
        },
        {
          id: 'a-3',
          text: 'Solo compresiones, omitir ventilaciones',
          isCorrect: false,
          consequence: 'Subóptimo. Las ventilaciones son importantes especialmente en paro prolongado.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Perfecto. La vía aérea básica es suficiente inicialmente sin interrumpir compresiones.',
        incorrect: 'La vía aérea avanzada no debe retrasar o interrumpir compresiones de alta calidad.',
        explanation: 'Durante RCP, minimizar interrupciones de compresiones es más importante que vía aérea avanzada.'
      }
    },
    {
      id: 'step-b-breathing-rcp',
      stepNumber: 3,
      title: 'B - Respiración durante RCP',
      description: 'Durante las ventilaciones de rescate, ¿cuál es la técnica correcta?',
      options: [
        {
          id: 'b-1',
          text: 'Ventilaciones de 1 segundo cada una, volumen suficiente para elevar tórax',
          isCorrect: true,
          consequence: 'Correcto. Ventilaciones efectivas sin hiperventilación.'
        },
        {
          id: 'b-2',
          text: 'Ventilaciones rápidas y profundas para maximizar oxigenación',
          isCorrect: false,
          consequence: 'Incorrecto. La hiperventilación reduce el retorno venoso y eficacia de RCP.'
        },
        {
          id: 'b-3',
          text: 'Ventilaciones mínimas, concentrarse solo en compresiones',
          isCorrect: false,
          consequence: 'Insuficiente. Las ventilaciones son necesarias para oxigenación.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Excelente. Has aplicado la técnica correcta de ventilación durante RCP.',
        incorrect: 'Las ventilaciones deben ser controladas para evitar efectos adversos hemodinámicos.',
        explanation: 'Ventilaciones excesivas aumentan la presión intratorácica y reducen la eficacia de las compresiones.'
      }
    },
    {
      id: 'step-d-defibrillation',
      stepNumber: 4,
      title: 'D - Desfibrilación',
      description: 'Llega el desfibrilador. Al analizar el ritmo encuentras fibrilación ventricular.',
      options: [
        {
          id: 'd-1',
          text: 'Desfibrilar inmediatamente con energía apropiada, reanudar RCP',
          isCorrect: true,
          consequence: 'Correcto. La desfibrilación precoz es crítica en ritmos desfibrilables.'
        },
        {
          id: 'd-2',
          text: 'Continuar RCP 2 minutos más antes de desfibrilar',
          isCorrect: false,
          consequence: 'Incorrecto. En FV/TV sin pulso, la desfibrilación debe ser inmediata.'
        },
        {
          id: 'd-3',
          text: 'Administrar epinefrina antes de desfibrilar',
          isCorrect: false,
          consequence: 'Incorrecto. La desfibrilación tiene prioridad sobre medicamentos en ritmos desfibrilables.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Perfecto. Has priorizado correctamente la desfibrilación en ritmo desfibrilable.',
        incorrect: 'En fibrilación ventricular, la desfibrilación inmediata ofrece la mejor oportunidad de supervivencia.',
        explanation: 'Cada minuto de retraso en desfibrilación reduce las posibilidades de supervivencia en 7-10%.'
      },
      criticalStep: true
    },
    {
      id: 'step-post-shock',
      stepNumber: 5,
      title: 'Manejo Post-Desfibrilación',
      description: 'Después del shock, ¿cuál es tu acción inmediata?',
      options: [
        {
          id: 'ps-1',
          text: 'Reanudar RCP inmediatamente por 2 minutos antes de verificar pulso',
          isCorrect: true,
          consequence: 'Correcto. RCP inmediato post-shock maximiza las posibilidades de ROSC.'
        },
        {
          id: 'ps-2',
          text: 'Verificar pulso inmediatamente después del shock',
          isCorrect: false,
          consequence: 'Incorrecto. Verificar pulso retrasa reinicio de compresiones críticas.'
        },
        {
          id: 'ps-3',
          text: 'Administrar epinefrina antes de reanudar compresiones',
          isCorrect: false,
          consequence: 'Incorrecto. Las compresiones son más urgentes que la medicación.'
        }
      ],
      correctOptionId: 'ps-1',
      feedback: {
        correct: 'Excelente. El RCP inmediato post-desfibrilación es crucial para mantener perfusión.',
        incorrect: 'Incluso después de desfibrilación exitosa, el corazón necesita soporte circulatorio inmediato.',
        explanation: 'El miocardio post-desfibrilación está aturdido y necesita soporte con compresiones hasta recuperarse.'
      }
    },
    {
      id: 'step-medications',
      stepNumber: 6,
      title: 'Farmacología en RCP',
      description: 'Después de 2 ciclos de RCP, ¿cuál es el manejo farmacológico apropiado?',
      options: [
        {
          id: 'm-1',
          text: 'Epinefrina 1mg IV cada 3-5 minutos durante RCP',
          isCorrect: true,
          consequence: 'Correcto. Epinefrina mejora la perfusión coronaria durante compresiones.'
        },
        {
          id: 'm-2',
          text: 'Atropina para aumentar frecuencia cardiaca',
          isCorrect: false,
          consequence: 'Incorrecto. Atropina no está indicada en paro cardiorrespiratorio.'
        },
        {
          id: 'm-3',
          text: 'Amiodarona como primera línea antes que epinefrina',
          isCorrect: false,
          consequence: 'Incorrecto. Epinefrina tiene prioridad sobre antiarrítmicos.'
        }
      ],
      correctOptionId: 'm-1',
      feedback: {
        correct: 'Perfecto. Has aplicado correctamente las guías farmacológicas de RCP avanzado.',
        incorrect: 'La epinefrina es el medicamento de primera línea en paro cardiorrespiratorio.',
        explanation: 'La epinefrina aumenta la presión de perfusión coronaria, mejorando las posibilidades de ROSC.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar correctamente el protocolo CABD en paro cardiorrespiratorio',
    'Priorizar compresiones torácicas de alta calidad',
    'Reconocer ritmos desfibrilables y actuar apropiadamente',
    'Integrar manejo de vía aérea sin comprometer compresiones',
    'Aplicar farmacología apropiada durante RCP avanzado'
  ],
  difficulty: 'advanced',
  estimatedTime: '15-20 minutos'
};
