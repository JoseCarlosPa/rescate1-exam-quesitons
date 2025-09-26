import { SimulatorCase } from '../CaseSimulator.types';

export const laseracionMenorCase: SimulatorCase = {
  id: 'laseracin-menor-001',
  title: 'Laceración Menor en Mano',
  description: 'Paciente con herida cortante superficial en mano derecha. Caso sencillo para practicar protocolo ABCDE.',
  scenario: 'Joven de 22 años que se cortó accidentalmente con un cuchillo mientras cocinaba. Presenta herida de 4 cm en palma de mano derecha con sangrado moderado.',
  patientInfo: {
    age: 22,
    gender: 'Masculino',
    chiefComplaint: 'Herida cortante en palma de mano derecha',
    history: 'Sin antecedentes médicos relevantes. No alergias conocidas. Vacuna antitetánica hace 2 años.'
  },
  initialVitalSigns: {
    'FC': '88 lpm',
    'PA': '120/75 mmHg',
    'FR': '16 rpm',
    'SatO2': '99%',
    'Temp': '36.8°C'
  },
  glasgowScore: {
    expected: 15,
    timing: 'during_neurological',
    contextInfo: 'El paciente está completamente alerta y orientado. Responde preguntas de manera coherente, está preocupado por su herida pero colabora en todo momento. Obedece todas las instrucciones sin dificultad y mantiene conversación normal.'
  },
  steps: [
    {
      id: 'step-a-airway',
      stepNumber: 1,
      title: 'A - Vía Aérea',
      description: 'Paciente consciente y hablando. ¿Cómo evalúas la vía aérea?',
      options: [
        {
          id: 'a-1',
          text: 'Vía aérea permeable, paciente habla sin dificultad',
          isCorrect: true,
          consequence: 'Correcto. El paciente puede hablar normalmente, indicando vía aérea permeable.'
        },
        {
          id: 'a-2',
          text: 'Realizar maniobra de apertura de vía aérea como precaución',
          isCorrect: false,
          consequence: 'Innecesario. El paciente consciente que habla tiene vía aérea permeable.'
        },
        {
          id: 'a-3',
          text: 'Colocar cánula orofaríngea por protocolo',
          isCorrect: false,
          consequence: 'Contraindicado en paciente consciente. Puede provocar náuseas y vómito.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Excelente. Si el paciente puede hablar, la vía aérea está definitivamente permeable.',
        incorrect: 'En un paciente consciente que habla claramente, no se requieren intervenciones en la vía aérea.',
        explanation: 'La capacidad de hablar es el mejor indicador de permeabilidad de vía aérea en pacientes conscientes.'
      }
    },
    {
      id: 'step-b-breathing',
      stepNumber: 2,
      title: 'B - Respiración',
      description: 'Evalúa el patrón respiratorio y la necesidad de oxígeno suplementario.',
      options: [
        {
          id: 'b-1',
          text: 'Respiración normal, SatO2 99%, no requiere oxígeno suplementario',
          isCorrect: true,
          consequence: 'Correcto. Respiración y oxigenación normales en trauma menor.'
        },
        {
          id: 'b-2',
          text: 'Administrar oxígeno por cánula nasal como protocolo',
          isCorrect: false,
          consequence: 'Innecesario. La oxigenación es normal y no es trauma mayor.'
        },
        {
          id: 'b-3',
          text: 'Colocar mascarilla con reservorio por precaución',
          isCorrect: false,
          consequence: 'Excesivo para este caso. No hay indicación para oxígeno en alto flujo.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Perfecto. En trauma menor sin compromiso respiratorio, no se requiere oxígeno.',
        incorrect: 'El oxígeno suplementario está indicado solo cuando hay compromiso respiratorio o trauma mayor.',
        explanation: 'Una SatO2 de 99% con respiración normal no requiere intervención respiratoria.'
      }
    },
    {
      id: 'step-c-circulation',
      stepNumber: 3,
      title: 'C - Circulación',
      description: 'Hay sangrado moderado de la herida. ¿Cuál es tu prioridad circulatoria?',
      options: [
        {
          id: 'c-1',
          text: 'Aplicar presión directa sobre la herida y elevar la extremidad',
          isCorrect: true,
          consequence: 'Correcto. Control de sangrado con presión directa y elevación.'
        },
        {
          id: 'c-2',
          text: 'Establecer acceso IV de gran calibre inmediatamente',
          isCorrect: false,
          consequence: 'Innecesario para sangrado menor. La presión directa es suficiente.'
        },
        {
          id: 'c-3',
          text: 'Aplicar torniquete en antebrazo',
          isCorrect: false,
          consequence: 'Excesivo e inapropiado. Los torniquetes son para hemorragias masivas.'
        }
      ],
      correctOptionId: 'c-1',
      feedback: {
        correct: 'Excelente. Has aplicado la técnica correcta para control de sangrado menor.',
        incorrect: 'Para sangrado moderado de extremidades, la presión directa y elevación son la primera línea.',
        explanation: 'La presión directa controla la mayoría de sangrados, y la elevación reduce el flujo por gravedad.'
      }
    },
    {
      id: 'step-d-disability',
      stepNumber: 4,
      title: 'D - Déficit Neurológico',
      description: 'Evalúa el estado neurológico del paciente.',
      options: [
        {
          id: 'd-1',
          text: 'Paciente alerta, orientado, sin déficit neurológico',
          isCorrect: true,
          consequence: 'Correcto. Estado neurológico completamente normal.'
        },
        {
          id: 'd-2',
          text: 'Evaluar reflejo pupilar y glasgow por protocolo',
          isCorrect: false,
          consequence: 'Innecesario en trauma menor sin mecanismo neurológico.'
        },
        {
          id: 'd-3',
          text: 'Buscar signos de trauma craneal asociado',
          isCorrect: false,
          consequence: 'No hay mecanismo de trauma que sugiera compromiso neurológico.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Perfecto. En trauma menor localizado, la evaluación neurológica básica es suficiente.',
        incorrect: 'No todo caso requiere evaluación neurológica exhaustiva, especialmente en trauma menor.',
        explanation: 'Un paciente alerta y orientado con trauma menor no requiere evaluación neurológica extensa.'
      }
    },
    {
      id: 'step-e-exposure',
      stepNumber: 5,
      title: 'E - Exposición/Examen',
      description: 'Examina completamente la herida para planificar el tratamiento.',
      options: [
        {
          id: 'e-1',
          text: 'Limpiar y examinar herida: 4cm lineal, bordes regulares, sin cuerpos extraños',
          isCorrect: true,
          consequence: 'Correcto. Herida limpia que requiere sutura y cuidados locales.'
        },
        {
          id: 'e-2',
          text: 'Exposición corporal completa para descartar otras lesiones',
          isCorrect: false,
          consequence: 'Innecesario en trauma menor localizado sin mecanismo complejo.'
        },
        {
          id: 'e-3',
          text: 'Solo observar herida sin manipulación para evitar más sangrado',
          isCorrect: false,
          consequence: 'Incorrecto. Es necesario examinar para evaluar profundidad y planificar tratamiento.'
        }
      ],
      correctOptionId: 'e-1',
      feedback: {
        correct: 'Excelente. Has evaluado apropiadamente la herida para determinar el tratamiento.',
        incorrect: 'Es esencial examinar completamente las heridas para determinar el tratamiento apropiado.',
        explanation: 'El examen de la herida determina si requiere sutura, antibióticos, o cuidados especiales.'
      }
    },
    {
      id: 'step-treatment',
      stepNumber: 6,
      title: 'Tratamiento Definitivo',
      description: 'Con el sangrado controlado y herida limpia, ¿cuál es el tratamiento apropiado?',
      options: [
        {
          id: 't-1',
          text: 'Anestesia local, irrigación, sutura y vendaje estéril',
          isCorrect: true,
          consequence: 'Correcto. Tratamiento estándar para laceración limpia de mano.'
        },
        {
          id: 't-2',
          text: 'Solo limpiar y vendar, derivar para sutura especializada',
          isCorrect: false,
          consequence: 'Innecesario. Herida simple que puede suturarse en servicio de urgencia.'
        },
        {
          id: 't-3',
          text: 'Antibióticos IV y derivación quirúrgica urgente',
          isCorrect: false,
          consequence: 'Excesivo para herida limpia menor. No requiere cirugía.'
        }
      ],
      correctOptionId: 't-1',
      feedback: {
        correct: 'Perfecto. Has elegido el tratamiento apropiado para este tipo de herida.',
        incorrect: 'Las laceraciones limpias menores se pueden manejar con sutura primaria.',
        explanation: 'Heridas limpias menores de 6 horas de evolución se pueden suturar directamente tras limpieza.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar protocolo ABCDE en trauma menor',
    'Reconocer cuándo las intervenciones son innecesarias',
    'Priorizar correctamente en casos de baja complejidad',
    'Evaluar apropiadamente heridas menores',
    'Determinar tratamiento definitivo apropiado'
  ],
  difficulty: 'beginner',
  estimatedTime: '10-15 minutos'
};
