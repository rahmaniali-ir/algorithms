import { MetaArray } from 'src/app/generic/array/model/meta-array';

export interface MergeSortStep {
  index: number;
  description: string;
  data?: MetaArray[];
  icon?: string;
}
