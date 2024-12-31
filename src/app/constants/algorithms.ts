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

export type AlgorithmName =
  | 'binary-search'
  | 'merge-sort'
  | 'quick-sort'
  | 'large-integer-multiplication'
  | 'binomial-coefficient'
  | 'floyd-shortest-path'
  | 'matrix-chain-multiplication'
  | 'bottleneck-traveling-salesman'
  | 'change-coins'
  | 'prim'
  | 'kruskal'
  | 'dijkstra'
  | 'schedule'
  | 'huffman-coding'
  | 'rucksack';

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

  'quick-sort': {
    id: 'quick-sort',
    name: 'Quick Sort',
    icon: 'sort',
    description:
      'Quick Sort picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.',
    category: categories.divideAndConquer,
    component: QuickSortComponent,
    className: 'soon',
  },

  'large-integer-multiplication': {
    id: 'large-integer-multiplication',
    name: 'Large integer multiplication',
    icon: 'abacus',
    description: 'Lorem Ipsum!',
    category: categories.divideAndConquer,
    component: SoonComponent,
    className: 'soon',
  },

  'binomial-coefficient': {
    id: 'binomial-coefficient',
    name: 'Binomial coefficient',
    icon: 'flipV',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
    className: 'soon',
  },

  'floyd-shortest-path': {
    id: 'floyd-shortest-path',
    name: 'Floyd shortest path',
    icon: 'channel',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
    className: 'soon',
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

  'bottleneck-traveling-salesman': {
    id: 'bottleneck-traveling-salesman',
    name: 'Bottleneck traveling salesman',
    icon: 'store',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
    className: 'soon',
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

  dijkstra: {
    id: 'dijkstra-minimum-spanning-tree',
    name: 'Dijkstra minimum spanning tree',
    icon: 'channel',
    description:
      "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
    category: categories.greedyApproach,
    component: SoonComponent,
    className: 'soon',
  },

  schedule: {
    id: 'schedule',
    name: 'Schedule',
    icon: 'history',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
    className: 'soon',
  },

  'huffman-coding': {
    id: 'huffman-coding',
    name: 'Huffman coding',
    icon: 'compress',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
    className: 'soon',
  },

  rucksack: {
    id: 'rucksack',
    name: 'Rucksack',
    icon: 'bag',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
    className: 'soon',
  },
};

export const algorithmsArray = Object.keys(algorithms).map(
  (k) => algorithms[k as AlgorithmName]
);

export const defaultAlgorithm: Algorithm = {
  id: '',
  name: '',
  icon: '',
  description: '',
  category: defaultCategory,
  component: null,
};
