export interface GreedyStep<T = any> {
  selection: T;
  feasibilityCheck: boolean;
  solutionCheck: boolean;
}
