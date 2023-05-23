import { Component } from '@angular/core';
import { MetaArray } from 'src/app/search/model/meta-array';
import { MergeSortStep } from '../../type/merge-sort';
import { Tree } from 'src/app/graph/model/tree';
import { TreeNodeAddress } from 'src/app/graph/type/tree';

const t = new Tree();
// t.addLeaf(0, 0, 'A');
// t.addLeaf(0, 0, 'B');
// console.log(t.getLevel(1));
// t.addLeaf(1, 1, 'C');
// console.log(t.getLeaf(1, 1));

@Component({
  selector: 'merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.sass'],
})
export class MergeSortComponent {
  input = new MetaArray<number>([27, 10, 12, 20, 25, 13, 15, 22]);
  steps: MergeSortStep[] = [];
  result?: MetaArray<number>;
  callTree?: Tree<MetaArray<number>>;

  merge(a: MetaArray<number>, b: MetaArray<number>): MetaArray<number> {
    const merged = new MetaArray<number>();

    const u = a.array;
    const v = b.array;
    const h = a.length;
    const m = b.length;

    let i = 0,
      j = 0,
      k = 0;

    while (i < h && j < m) {
      // Compare the current elements of U and V and copy the smaller one to S
      if (u[i] < v[j]) {
        merged.append(u[i]);
        i++;
      } else {
        merged.append(v[j]);
        j++;
      }
      // Increment the pointer for S
      k++;
    }

    while (i < h) {
      merged.append(u[i]);
      i++;
      k++;
    }

    while (j < m) {
      merged.append(v[j]);
      j++;
      k++;
    }

    return merged;
  }

  mergeSort(
    array: MetaArray<number>,
    nodeAddress: TreeNodeAddress
  ): MetaArray<number> {
    if (array.length <= 1) {
      this.callTree?.addNode(nodeAddress, nodeAddress.toString(), array);

      return array;
    }

    const h = Math.floor(array.length / 2);

    const left = new MetaArray(array.array.slice(0, h));
    this.callTree?.addNode(nodeAddress, nodeAddress.toString(), left);

    const right = new MetaArray(array.array.slice(h));
    this.callTree?.addNode(nodeAddress, nodeAddress.toString(), right);

    const sortedLeft = this.mergeSort(left, [...nodeAddress, 0]);
    const sortedRight = this.mergeSort(right, [...nodeAddress, 1]);

    return this.merge(sortedLeft, sortedRight);
  }

  sort() {
    this.steps = [];
    this.callTree = new Tree<MetaArray<number>>(this.input.clone());
    this.result = undefined;

    this.result = this.mergeSort(this.input.clone(), []);

    for (let i = 0; i <= this.callTree.levels; i++) {
      const level = this.callTree.getLevel(i);
      if (!level) break;

      this.steps.push({
        index: i,
        description: '',
        data: level.map((leaf) => leaf.data),
      });
    }
  }
}
