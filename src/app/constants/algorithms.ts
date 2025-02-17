import { ChangeCoinsComponent } from '../components/algorithms/change-coins/change-coins.component';
import { Algorithm } from '@type/algorithm';
import { categories, defaultCategory } from './categories';
import { SoonComponent } from '@components/algorithms/soon/soon.component';
import { BinarySearchComponent } from '@components/algorithms/binary-search/binary-search.component';
import { MergeSortComponent } from '@components/algorithms/merge-sort/merge-sort.component';
import { QuickSortComponent } from '@components/algorithms/quick-sort/quick-sort.component';
import { MatrixMultiplicationComponent } from '@components/algorithms/matrix-multiplication/matrix-multiplication.component';
import { PrimComponent } from '@components/algorithms/prim/prim.component';
import { KruskalComponent } from '@components/algorithms/kruskal/kruskal.component';
import { objectToArray } from '@utils/array';

export type AlgorithmName =
  | 'binary-search'
  | 'merge-sort'
  | 'matrix-chain-multiplication'
  | 'change-coins'
  | 'prim'
  | 'kruskal';

export const algorithms: Record<AlgorithmName, Algorithm> = {
  'binary-search': {
    id: 'binary-search',
    name: 'Binary Search',
    icon: 'search',
    description:
      'Binary search is an efficient algorithm for finding an item from a sorted list of items.',
    category: categories.divideAndConquer,
    component: BinarySearchComponent,
  },

  'merge-sort': {
    id: 'merge-sort',
    name: 'Merge Sort',
    icon: 'sort',
    description:
      'Merge sort continuously cuts down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list.',
    category: categories.divideAndConquer,
    component: MergeSortComponent,
  },

  'matrix-chain-multiplication': {
    id: 'matrix-chain-multiplication',
    name: 'Matrix Chain Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.dynamicProgramming,
    component: MatrixMultiplicationComponent,
  },

  'change-coins': {
    id: 'change-coins',
    name: 'Change Coins',
    icon: 'coin',
    description:
      'The change-making problem addresses the question of finding the minimum number of coins that add up to a given amount of money.',
    category: categories.greedyApproach,
    component: ChangeCoinsComponent,
  },

  prim: {
    id: 'prim',
    name: 'Prim’s minimum spanning tree',
    icon: 'channel',
    description:
      "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
    category: categories.greedyApproach,
    component: PrimComponent,
  },

  kruskal: {
    id: 'kruskal',
    name: 'Kruskal’s minimum spanning tree',
    icon: 'channel',
    description:
      "Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph.",
    category: categories.greedyApproach,
    component: KruskalComponent,
  },
};

export const algorithmsArray = objectToArray(algorithms);

export const defaultAlgorithm: Algorithm = {
  id: '',
  name: '',
  icon: '',
  description: '',
  category: defaultCategory,
  component: null,
};
