import { Project } from '../type/gallery';
import { categories, defaultCategory } from './categories';

export type ProjectKey =
  | 'MatrixChainMultiplication'
  | 'minimumPathFinding'
  | 'quickSearch'
  | 'mergeSort'
  | 'changeCoins';

export const projects: Record<ProjectKey, Project> = {
  MatrixChainMultiplication: {
    id: 'MatrixChainMultiplication',
    name: 'Matrix Chain Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.divideAndConquer,
  },
  minimumPathFinding: {
    id: 'minimumPathFinding',
    name: 'Minimum Path Finding (Soon)',
    icon: 'channel',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.dynamicProgramming,
  },
  quickSearch: {
    id: 'quickSearch',
    name: 'Quick Search (Soon)',
    icon: 'search',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.greedyApproach,
  },
  mergeSort: {
    id: 'mergeSort',
    name: 'Merge Sort (Soon)',
    icon: 'sort',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.backtracing,
  },
  changeCoins: {
    id: 'changeCoins',
    name: 'Change Coins',
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
