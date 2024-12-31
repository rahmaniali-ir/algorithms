import { Category } from '../types/category';

export const categories = {
  divideAndConquer: {
    id: 'divideAndConquer',
    name: 'Divide and Conquer',
    icon: 'columns',
  },
  dynamicProgramming: {
    id: 'dynamicProgramming',
    name: 'Dynamic Programming',
    icon: 'abacus',
  },
  greedyApproach: {
    id: 'greedyApproach',
    name: 'Greedy Approach',
    icon: 'circleLayer',
  },
  backtracing: {
    id: 'backtracing',
    name: 'Backtracing',
    icon: 'branch',
  },
} satisfies Record<string, Category>;

export const defaultCategory: Category = {
  id: '',
  name: 'Category',
  icon: '',
};
