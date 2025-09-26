import { SimulatorCase } from "./CaseSimulator.types";
import { allSimulatorCases } from "./cases";

export const simulatorCases: SimulatorCase[] = allSimulatorCases;

export const getSimulatorCaseById = (id: string): SimulatorCase | undefined => {
  return simulatorCases.find(case_ => case_.id === id);
};

export const getSimulatorCasesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): SimulatorCase[] => {
  return simulatorCases.filter(case_ => case_.difficulty === difficulty);
};
