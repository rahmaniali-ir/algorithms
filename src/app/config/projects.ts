import { ChangeCoinsComponent } from '../change-coins/component/change-coins/change-coins.component';
import { SoonComponent } from '../component/soon/soon.component';
import { KruskalComponent } from '../graph/component/kruskal/kruskal.component';
import { PrimComponent } from '../graph/component/prim/prim.component';
import { MatrixMultiplicationComponent } from '../matrix/component/matrix-multiplication/matrix-multiplication.component';
import { BinarySearchComponent } from '../search/component/binary-search/binary-search.component';
import { MergeSortComponent } from '../sort/component/merge-sort/merge-sort.component';
import { Project } from '../type/gallery';
import { categories, defaultCategory } from './categories';

export type ProjectKey =
  | 'binarySearch'
  | 'matrixChainMultiplication'
  | 'changeCoins'
  | 'kruskal'
  | 'prim'
  | 'minimumPathFinding'
  | 'quickSearch'
  | 'mergeSort';

export const projects: Record<ProjectKey, Project> = {
  binarySearch: {
    id: 'binarySearch',
    name: 'Binary Search',
    icon: 'search',
    description:
      'Binary search is an efficient algorithm for finding an item from a sorted list of items.',
    category: categories.divideAndConquer,
    component: BinarySearchComponent,
  },

  mergeSort: {
    id: 'mergeSort',
    name: 'Merge Sort',
    icon: 'sort',
    description:
      'Merge sort continuously cuts down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list.',
    category: categories.divideAndConquer,
    component: MergeSortComponent,
  },

  matrixChainMultiplication: {
    id: 'matrixChainMultiplication',
    name: 'Matrix Chain Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.divideAndConquer,
    component: MatrixMultiplicationComponent,
  },

  changeCoins: {
    id: 'changeCoins',
    name: 'Change Coins',
    icon: 'coin',
    description:
      'The change-making problem addresses the question of finding the minimum number of coins that add up to a given amount of money.',
    category: categories.greedyApproach,
    component: ChangeCoinsComponent,
  },

  kruskal: {
    id: 'kruskal',
    name: 'Kruskal',
    icon: 'channel',
    description:
      "Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph.",
    category: categories.greedyApproach,
    component: KruskalComponent,
  },

  prim: {
    id: 'prim',
    name: 'Prim',
    icon: 'channel',
    description:
      "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
    category: categories.greedyApproach,
    component: PrimComponent,
  },

  minimumPathFinding: {
    id: 'minimumPathFinding',
    name: 'Minimum Path Finding (Soon)',
    icon: 'channel',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
  },
  quickSearch: {
    id: 'quickSearch',
    name: 'Quick Search (Soon)',
    icon: 'search',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
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
  component: null,
};
