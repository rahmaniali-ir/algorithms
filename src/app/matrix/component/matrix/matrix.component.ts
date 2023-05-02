import { Component, HostBinding, Input } from '@angular/core';
import { Matrix } from '../../model/matrix';
import { Position } from 'src/app/core/type/position';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.sass'],
})
export class MatrixComponent {
  @Input() matrix: Matrix = new Matrix(0, 0);
  @Input() readOnly = false;
  @Input() showDetails = false;
  @Input()
  @HostBinding('class.show-axis')
  showAxis = false;

  hoveredCell?: Position;
  focusedCell?: Position;

  get rows() {
    return this.matrix.plainMatrix;
  }

  get xIndexes() {
    return Array(this.matrix.x)
      .fill(0)
      .map((_, i) => i);
  }

  get yIndexes() {
    return Array(this.matrix.y)
      .fill(0)
      .map((_, i) => i);
  }

  trackByRow(index: number) {
    return index;
  }

  trackByColumn(index: number) {
    return index;
  }

  updateValue(y: number, x: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const num = Number(target.value) || 0;

    this.matrix.set(y, x, num);
  }

  onCellHover(y: number, x: number) {
    this.hoveredCell = { x, y };
  }

  resetHoveredCell() {
    this.hoveredCell = undefined;
  }

  onCellFocus(y: number, x: number) {
    this.focusedCell = { x, y };
  }

  resetFocusedCell() {
    this.focusedCell = undefined;
  }
}
