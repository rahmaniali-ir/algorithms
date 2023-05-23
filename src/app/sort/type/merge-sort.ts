import { MetaArray } from 'src/app/search/model/meta-array';

export interface MergeSortStep {
  index: number;
  description: string;
  data?: MetaArray[];
  icon?: string;
}
