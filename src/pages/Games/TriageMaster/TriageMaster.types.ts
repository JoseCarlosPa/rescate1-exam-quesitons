export type TriageColor = 'GREEN' | 'YELLOW' | 'RED' | 'BLACK';

export interface PatientCondition {
  canWalk: boolean;
  respiratoryRate: number; // 0 for apnea
  pulsePresent: boolean;
  followsCommands: boolean;
  airwayRepositioned?: boolean; // For patients with RR=0
}

export interface TriagePatient {
  id: string;
  description: string;
  condition: PatientCondition;
  correctTag: TriageColor;
  explanation: string;
}

export interface TriageScenario {
  id: string;
  title: string;
  description: string;
  patients: TriagePatient[];
  timeLimit: number; // seconds to triage everyone
}

export interface GameState {
  phase: 'setup' | 'playing' | 'result';
  scenario: TriageScenario | null;
  currentPatientIndex: number;
  taggedPatients: Record<string, { selected: TriageColor; correct: TriageColor; timeUsed: number }>;
  timeRemaining: number;
  score: number;
}
