import { ArrayMeta, MetaArrayItem } from '../type/meta-array';

export class MetaArray<T = any, M = Record<string, any>> {
  private _metaArray: MetaArrayItem<T, M>[] = [];

  constructor(array: T[] = []) {
    this._metaArray = [
      ...array.map((value) => ({
        value,
      })),
    ];
  }

  get array() {
    return this._metaArray.map((m) => m.value);
  }

  get metaArray(): MetaArrayItem<T, M>[] {
    return this._metaArray;
  }

  get length() {
    return this._metaArray.length;
  }

  getMeta(index: number) {
    return this._metaArray[index].meta;
  }

  addMeta(index: number, meta: ArrayMeta<M>) {
    const item = this._metaArray[index];
    item.meta = meta;
  }

  append(item: T, meta?: ArrayMeta<M>) {
    this._metaArray.push({
      value: item,
      meta,
    });
  }

  push(...item: MetaArrayItem<T, M>[]) {
    this._metaArray.push(...item);
  }

  pop() {
    this._metaArray.pop();
  }

  remove(index: number) {
    return this._metaArray.splice(index, 1);
  }

  sort(compareFn: (a: T, b: T) => number) {
    this._metaArray.sort((a, b) => compareFn(a.value, b.value));
  }

  clone() {
    const newArray = new MetaArray<T, M>(this.array);
    this._metaArray.forEach((item, i) => {
      if (item.meta?.data) newArray.addMeta(i, item.meta.data);
    });

    return newArray;
  }
}
