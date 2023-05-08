import { Project } from '../type/gallery';
import { categories, defaultCategory } from './categories';

export type ProjectKey =
  | 'chainedMatrixMultiplication'
  | 'minimumPathFinding'
  | 'quickSearch'
  | 'mergeSort'
  | 'splitCoins';

export const projects: Record<ProjectKey, Project> = {
  chainedMatrixMultiplication: {
    id: 'chainedMatrixMultiplication',
    name: 'Chained Matrix Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.divideAndConquer,
  },
  minimumPathFinding: {
    id: 'minimumPathFinding',
    name: 'Minimum Path Finding',
    icon: 'channel',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.dynamicProgramming,
  },
  quickSearch: {
    id: 'quickSearch',
    name: 'Quick Search',
    icon: 'search',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.greedyApproach,
  },
  mergeSort: {
    id: 'mergeSort',
    name: 'Merge Sort',
    icon: 'sort',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.backtracing,
  },
  splitCoins: {
    id: 'splitCoins',
    name: 'Split Coins',
    icon: 'coin',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.greedyApproach,
  },
};

export const projectsArray = Object.keys(projects).map(
  (k) => projects[k as ProjectKey]
);

export const defaultProject: Project = {
  id: '',
  name: '',
  icon: '',
  description: '',
  category: defaultCategory,
};
