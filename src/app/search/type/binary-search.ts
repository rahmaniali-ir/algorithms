import { MetaArray } from '../model/meta-array';

export interface BinarySearchStepData {
  name: string;
  value: MetaArray;
}

export interface BinarySearchStep {
  index: number;
  description: string;
  data?: BinarySearchStepData;
  icon?: string;
}
