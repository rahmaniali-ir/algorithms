import { Customizable } from './customizable';

export interface ArrayMetaLabel extends Customizable {
  label: string;
  icon?: string;
}

export interface ArrayMeta<D = any> extends Customizable<D> {
  labels?: ArrayMetaLabel[];
}

export interface MetaArrayItem<T = any, M = any> {
  value: T;
  meta?: ArrayMeta<M>;
}
