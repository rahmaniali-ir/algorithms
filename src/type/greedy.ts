export interface GreedyStep<T = any> {
  step: number;
  selection: T;
  feasibility: string;
  feasibilityCheck: boolean;
  solution: string;
  solutionCheck: boolean;
}
