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
  | 'mergeSort'
  | 'quickSearch'
  | 'largeIntegerMultiplication'
  | 'binomialCoefficient'
  | 'floydShortestPath'
  | 'matrixChainMultiplication'
  | 'bottleneckTravelingSalesman'
  | 'changeCoins'
  | 'prim'
  | 'kruskal'
  | 'dijkstraMinimumSpanningTree'
  | 'schedule'
  | 'huffmanCoding'
  | 'rucksack';

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

  quickSearch: {
    id: 'quickSearch',
    name: 'Quick Search (Soon)',
    icon: 'search',
    description: 'Lorem Ipsum!',
    category: categories.divideAndConquer,
    component: SoonComponent,
  },

  largeIntegerMultiplication: {
    id: 'largeIntegerMultiplication',
    name: 'Large integer multiplication',
    icon: 'abacus',
    description: 'Lorem Ipsum!',
    category: categories.divideAndConquer,
    component: SoonComponent,
  },

  binomialCoefficient: {
    id: 'binomialCoefficient',
    name: 'Binomial coefficient',
    icon: 'flipV',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
  },

  floydShortestPath: {
    id: 'floydShortestPath',
    name: 'Floyd shortest path',
    icon: 'channel',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
  },

  matrixChainMultiplication: {
    id: 'matrixChainMultiplication',
    name: 'Matrix Chain Multiplication',
    icon: 'link',
    description:
      'Matrix multiplication is a binary operation that produces a matrix from two matrices.',
    category: categories.dynamicProgramming,
    component: MatrixMultiplicationComponent,
  },

  bottleneckTravelingSalesman: {
    id: 'bottleneckTravelingSalesman',
    name: 'Bottleneck traveling salesman',
    icon: 'store',
    description: 'Lorem Ipsum!',
    category: categories.dynamicProgramming,
    component: SoonComponent,
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

  dijkstraMinimumSpanningTree: {
    id: 'dijkstraMinimumSpanningTree',
    name: 'Dijkstra minimum spanning tree',
    icon: 'channel',
    description:
      "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
    category: categories.greedyApproach,
    component: PrimComponent,
  },

  schedule: {
    id: 'schedule',
    name: 'Schedule',
    icon: 'history',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
  },

  huffmanCoding: {
    id: 'huffmanCoding',
    name: 'Huffman coding',
    icon: 'compress',
    description: 'Lorem Ipsum!',
    category: categories.greedyApproach,
    component: SoonComponent,
  },

  rucksack: {
    id: 'rucksack',
    name: 'Rucksack',
    icon: 'bag',
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
