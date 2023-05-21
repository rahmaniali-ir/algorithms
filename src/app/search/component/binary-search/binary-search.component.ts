import { Component } from '@angular/core';
import { MetaArray } from '../../model/meta-array';
import { BinarySearchStep } from '../../type/binary-search';
import { getClassList } from 'src/app/core/util/customizable';

@Component({
  selector: 'binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.sass'],
})
export class BinarySearchComponent {
  input = new MetaArray<number>();
  steps: BinarySearchStep[] = [];
  target?: number = 15;

  constructor() {
    this.input.append(14, {
      labels: [
        {
          label: 'left',
        },
      ],
    });
    this.input.append(8, {
      labels: [{ label: 'hight' }, { label: 'current' }],
      className: 'current',
    });
    this.input.append(12, {});
    this.input.append(7, {});
    this.input.append(15, {});
    this.input.append(24, {
      labels: [
        {
          label: 'right',
        },
      ],
    });
  }

  binarySearch(target: number) {
    const metaArray = this.input.clone();
    metaArray.sort((a, b) => a - b);
    let stepIndex = 1;

    // sort array step
    this.steps.push({
      index: stepIndex,
      description: 'Sort the input before performing binary search',
      data: {
        name: 'Sorted array',
        value: metaArray.clone(),
      },
      icon: 'sort',
    });

    let left = 0;
    let right = metaArray.length - 1;

    while (left <= right) {
      stepIndex += 1;
      let mid = Math.floor((left + right) / 2);

      const stepArray = metaArray.clone();

      const leftMeta = stepArray.metaArray[left].meta;
      const midMeta = stepArray.metaArray[mid].meta;
      const rightMeta = stepArray.metaArray[right].meta;

      const leftLabels = leftMeta?.labels || [];
      const midLabels = midMeta?.labels || [];
      const rightLabels = rightMeta?.labels || [];

      stepArray.addMeta(left, {
        ...leftMeta,
        labels: [
          ...leftLabels,
          {
            label: 'Left',
          },
        ],
      });
      stepArray.addMeta(mid, {
        ...midMeta,
        labels: [
          ...midLabels,
          {
            label: 'Mid',
          },
        ],
      });
      stepArray.addMeta(right, {
        ...rightMeta,
        labels: [
          ...rightLabels,
          {
            label: 'Right',
          },
        ],
      });

      for (let i = 0; i < left; i++) {
        if (!stepArray.metaArray[i].meta) stepArray.metaArray[i].meta = {};

        getClassList(stepArray.metaArray[i].meta!).add('disabled');
      }

      for (let i = right + 1; i < stepArray.length; i++) {
        if (!stepArray.metaArray[i].meta) stepArray.metaArray[i].meta = {};

        getClassList(stepArray.metaArray[i].meta || {}).add('disabled');
      }

      // Check if the middle element is the target
      if (stepArray.array[mid] === target) {
        stepArray.addMeta(mid, {
          ...midMeta,
          labels: [
            ...midLabels,
            {
              label: 'Mid',
              icon: '',
              className: 'color-success',
            },
          ],
          className: 'hovered success',
        });

        this.steps.push({
          index: stepIndex,
          description: 'Found the answer',
          data: {
            name: 'Result',
            value: stepArray,
          },
          icon: 'out',
        });
        return;
      }

      if (target < stepArray.array[mid]) {
        right = mid - 1;
      } else if (target > stepArray.array[mid]) {
        left = mid + 1;
      }

      this.steps.push({
        index: stepIndex,
        description: 'Divided the array',
        data: {
          name: 'Narrowed array',
          value: stepArray,
        },
        icon: 'infoCircle',
      });
    }

    this.steps.push({
      index: stepIndex,
      description: 'Divided the array',
      icon: 'times',
    });
  }

  search() {
    if (this.target === undefined) return;

    this.steps = [];
    this.binarySearch(this.target);
  }
}
