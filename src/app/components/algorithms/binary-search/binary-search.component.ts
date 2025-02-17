import { Component, inject } from '@angular/core';
import { MetaArray } from '@models/meta-array';
import { BinarySearchStep } from '@type/binary-search';
import { getClassList } from 'src/app/core/util/customizable';
import { SectionComponent } from '@core/components/section/section.component';
import { ArrayComponent } from '@common/array/array.component';
import { StepComponent } from '@core/components/step/step.component';
import { SearchTargetModalComponent } from '@components/modals/search-target-modal/search-target-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '@core/services/modal.service';

@Component({
  selector: 'binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.sass'],
  standalone: true,
  imports: [SectionComponent, ArrayComponent, StepComponent, MatIconModule],
})
export class BinarySearchComponent {
  private readonly modal = inject(ModalService);

  input = new MetaArray<number>([
    10, 12, 13, 14, 18, 20, 25, 27, 30, 35, 40, 45, 47,
  ]);
  steps: BinarySearchStep[] = [];
  target?: number = 15;

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
      const leftLabels = leftMeta?.labels || [];
      stepArray.addMeta(left, {
        ...leftMeta,
        labels: [
          ...leftLabels,
          {
            label: 'Left',
          },
        ],
      });

      const midMeta = stepArray.metaArray[mid].meta;
      const midLabels = midMeta?.labels || [];
      stepArray.addMeta(mid, {
        ...midMeta,
        labels: [
          ...midLabels,
          {
            label: 'Mid',
          },
        ],
      });

      const rightMeta = stepArray.metaArray[right].meta;
      const rightLabels = rightMeta?.labels || [];
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
        stepArray.updateMeta(mid, (meta) => {
          getClassList(meta).add('hovered', 'success');

          let oldMidLabel = meta.labels?.find((label) => label.label === 'Mid');
          if (!oldMidLabel) {
            oldMidLabel = {
              label: 'Mid',
            };
            meta.labels?.push(oldMidLabel);
          }

          getClassList(oldMidLabel).add('color-success', 'bold');

          return meta;
        });

        this.steps.push({
          index: stepIndex,
          description: `Found the answer at ${mid + 1}th position.`,
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
      description: `The searched item was not found after ${
        stepIndex + 1
      } steps!`,
      icon: 'times',
    });
  }

  search() {
    if (this.target === undefined) return;

    this.modal
      .open<number>(SearchTargetModalComponent)
      .afterClosed()
      .subscribe({
        next: (target) => {
          console.log('Search target', target);

          if (!target) return;

          this.steps = [];
          this.target = target;
          this.binarySearch(target);
        },
        error: () => {},
      });
  }
}
