import { Component } from '@angular/core';
import { MetaArray } from 'src/app/generic/array/model/meta-array';
import { MergeSortStep } from '../../type/merge-sort';
import { Tree } from 'src/app/graph/model/tree';
import { TreeNodeAddress } from 'src/app/graph/type/tree';
import { Graph } from 'src/app/generic/graph/model/graph';
import { Position } from 'src/app/core/type/position';
import { SectionComponent } from '@core/components/section/section.component';
import { ArrayComponent } from '../../../generic/array/array.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { NgIf, NgFor } from '@angular/common';
import { StepComponent } from '@core/components/step/step.component';

@Component({
  selector: 'merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.sass'],
  standalone: true,
  imports: [
    SectionComponent,
    ArrayComponent,
    SvgIconComponent,
    NgIf,
    NgFor,
    StepComponent,
  ],
})
export class MergeSortComponent {
  input = new MetaArray<number>([27, 10, 12, 20, 25, 13, 15, 22]);
  steps: MergeSortStep[] = [];
  result?: MetaArray<number>;
  callTree?: Tree<MetaArray<number>>;
  callGraph?: Graph<{ array: MetaArray<number>; position: Position }>;
  sorted = false;

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

    const merged = this.merge(sortedLeft, sortedRight);

    return merged;
  }

  sort() {
    this.steps = [];
    this.result = undefined;

    this.callTree = new Tree<MetaArray<number>>(this.input.clone());
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

    for (let i = this.callTree.levels - 1; i >= 0; i--) {
      const level = this.callTree.getLevel(i);
      if (!level) break;

      const sorted = level.map((leaf) => {
        const array: MetaArray<number> = leaf.data.clone();
        array.sort((a, b) => a - b);

        return array;
      });

      this.steps.push({
        index: i,
        description: '',
        data: sorted,
      });
    }

    this.sorted = true;
  }
}
