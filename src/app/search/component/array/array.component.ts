import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MetaArray } from '../../model/meta-array';
import { ArrayItemView } from '../../type/array-item-view';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.sass'],
})
export class ArrayComponent {
  @Input() name = '';
  @Input() input = new MetaArray<number>();
  @Input() editable = false;

  @ViewChildren('input') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  get viewItems(): ArrayItemView<number>[] {
    return this.input.metaArray.map((item, index) => {
      const sizeString = String(item.value ?? 0);

      const size = Math.max(2, sizeString.length);

      const labels = item.meta?.labels || [];
      const topLabels = labels;

      return {
        item,
        size,
        title: `${index + 1}th item`,
        topLabels,
      };
    });
  }

  private focusItem(index: number) {
    const element = this.inputs.get(index);
    if (element) element.nativeElement.focus();
  }

  trackByItem(index: number) {
    return this.viewItems?.[index] || 0;
  }

  addItem() {
    this.input.append(0);

    setTimeout(() => {
      this.focusItem(this.input.length - 1);
    });
  }

  removeItem(index: number) {
    this.input.remove(index);
  }

  onInputMouseUp(index: number, e: MouseEvent) {
    if (!this.editable) return;

    if (e.button === 1) this.removeItem(index);
  }
}
