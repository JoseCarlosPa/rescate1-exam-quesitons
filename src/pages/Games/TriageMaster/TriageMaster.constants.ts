import { TriageScenario } from './TriageMaster.types';

export const SCENARIOS: TriageScenario[] = [
  {
    id: 's1',
    title: 'Accidente de Autobús Escolar',
    description: 'Un autobús escolar volcó en la carretera. Tienes múltiples víctimas con diferentes niveles de lesiones. Utiliza el método START para clasificarlos.',
    timeLimit: 120, // 2 minutes
    patients: [
      {
        id: 'p1',
        description: 'Paciente caminando deambulando por la escena, llorando.',
        condition: { canWalk: true, respiratoryRate: 20, pulsePresent: true, followsCommands: true },
        correctTag: 'GREEN',
        explanation: 'Todo paciente que puede caminar se clasifica como VERDE inicialmente.',
      },
      {
        id: 'p2',
        description: 'Paciente en el suelo, inconsciente. No respira.',
        condition: { canWalk: false, respiratoryRate: 0, pulsePresent: false, followsCommands: false, airwayRepositioned: true },
        correctTag: 'BLACK',
        explanation: 'Si no respira incluso después de abrir la vía aérea, es NEGRO.',
      },
      {
        id: 'p3',
        description: 'Paciente atrapado bajo un asiento. Respira muy rápido.',
        condition: { canWalk: false, respiratoryRate: 35, pulsePresent: true, followsCommands: false },
        correctTag: 'RED',
        explanation: 'Frecuencia respiratoria > 30 = Inmediato (ROJO).',
      },
      {
        id: 'p4',
        description: 'Paciente con fractura abierta en pierna. Consciente.',
        condition: { canWalk: false, respiratoryRate: 24, pulsePresent: true, followsCommands: true },
        correctTag: 'YELLOW',
        explanation: 'No puede caminar, pero RPM < 30, tiene pulso y obedece comandos = Demorado (AMARILLO).',
      },
      {
        id: 'p5',
        description: 'Paciente confundido, sangrado activo, no acata órdenes.',
        condition: { canWalk: false, respiratoryRate: 22, pulsePresent: true, followsCommands: false },
        correctTag: 'RED',
        explanation: 'No sigue comandos (alteración del estado mental) = Inmediato (ROJO).',
      }
    ]
  },
  {
    id: 's2',
    title: 'Explosión en Centro Comercial',
    description: 'Reporte de explosión con múltiples víctimas. Llegan como primera unidad de respuesta.',
    timeLimit: 180, // 3 minutes
    patients: [
      {
        id: 'p1',
        description: 'Mujer con quemaduras leves deambulando fuera del edificio.',
        condition: { canWalk: true, respiratoryRate: 22, pulsePresent: true, followsCommands: true },
        correctTag: 'GREEN',
        explanation: 'Puede caminar = VERDE.',
      },
      {
        id: 'p2',
        description: 'Hombre con amputación traumática de brazo, palidez extrema, obnubilado.',
        condition: { canWalk: false, respiratoryRate: 28, pulsePresent: false, followsCommands: false },
        correctTag: 'RED',
        explanation: 'Falta de pulso radial / llenado capilar retardado = ROJO.',
      },
      {
        id: 'p3',
        description: 'Adulto mayor sin respuesta, no respira. Abres vía aérea y comienza a respirar.',
        condition: { canWalk: false, respiratoryRate: 0, pulsePresent: true, followsCommands: false, airwayRepositioned: true },
        correctTag: 'RED',
        explanation: 'Si respira SOLO al abrir la vía aérea = ROJO.',
      },
      {
        id: 'p4',
        description: 'Niño llorando desconsoladamente con fractura de brazo.',
        condition: { canWalk: false, respiratoryRate: 26, pulsePresent: true, followsCommands: true },
        correctTag: 'YELLOW',
        explanation: 'No camina, RPM normal, pulso presente, obedece comandos = AMARILLO.',
      },
      {
        id: 'p5',
        description: 'Víctima cerca del foco de explosión. Sin signos vitales.',
        condition: { canWalk: false, respiratoryRate: 0, pulsePresent: false, followsCommands: false, airwayRepositioned: true },
        correctTag: 'BLACK',
        explanation: 'No respira tras reposicionar vía aérea = NEGRO.',
      },
      {
        id: 'p6',
        description: 'Hombre con respiración rápida y superficial, ansioso.',
        condition: { canWalk: false, respiratoryRate: 32, pulsePresent: true, followsCommands: true },
        correctTag: 'RED',
        explanation: 'Frecuencia respiratoria > 30 = ROJO.',
      }
    ]
  }
];
