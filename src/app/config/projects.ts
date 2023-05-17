import { Project } from '../type/gallery';
import { categories, defaultCategory } from './categories';

export type ProjectKey =
  | 'matrixChainMultiplication'
  | 'changeCoins'
  | 'kruskal'
  | 'prim'
  | 'minimumPathFinding'
  | 'quickSearch'
  | 'mergeSort';

export const projects: Record<ProjectKey, Project> = {
  matrixChainMultiplication: {
    id: 'matrixChainMultiplication',
    name: 'Matrix Chain Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.divideAndConquer,
  },

  changeCoins: {
    id: 'changeCoins',
    name: 'Change Coins',
    icon: 'coin',
    description:
      'The change-making problem addresses the question of finding the minimum number of coins that add up to a given amount of money.',
    category: categories.greedyApproach,
  },

  kruskal: {
    id: 'kruskal',
    name: 'Kruskal',
    icon: 'channel',
    description:
      "Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph.",
    category: categories.greedyApproach,
  },

  prim: {
    id: 'prim',
    name: 'Prim',
    icon: 'channel',
    description:
      "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
    category: categories.greedyApproach,
  },

  minimumPathFinding: {
    id: 'minimumPathFinding',
    name: 'Minimum Path Finding (Soon)',
    icon: 'channel',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
  },
  quickSearch: {
    id: 'quickSearch',
    name: 'Quick Search (Soon)',
    icon: 'search',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
  },
  mergeSort: {
    id: 'mergeSort',
    name: 'Merge Sort (Soon)',
    icon: 'sort',
    description: 'Lorem Ipsum!',
    category: categories.backtracing,
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
