import { MetaArray } from '@models/meta-array';

export interface MergeSortStep {
  index: number;
  description: string;
  data?: MetaArray[];
  icon?: string;
}
