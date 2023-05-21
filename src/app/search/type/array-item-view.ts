import { ArrayMetaLabel, MetaArrayItem } from './meta-array';

export interface ArrayItemView<T = any, M = Record<string, any>> {
  item: MetaArrayItem<T, M>;
  size: number;
  title: string;
  topLabels: ArrayMetaLabel[];
}
