import { Component, HostBinding, Input } from '@angular/core';
import { Matrix } from '../../model/matrix';
import { Position } from 'src/app/core/type/position';
import { MatrixView } from '../../type/matrix';
import { getRange } from 'src/app/core/util/array';
import {
  getCellView,
  getFilledRowView,
  matrixRowToRowView,
  plainMatrixToMatrixView,
} from '../../utils/matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.sass'],
})
export class MatrixComponent {
  @Input() matrix: Matrix<any> = new Matrix(0, 0);
  @Input() maxSize = Number.MAX_VALUE;
  @Input() readOnly = false;
  @Input() showDetails = false;
  @Input()
  @HostBinding('class.show-axis')
  showAxis = false;

  hoveredCell?: Position;
  focusedCell?: Position;

  get shouldTrimX() {
    return this.matrix.x > this.maxSize;
  }

  get shouldTrimY() {
    return this.matrix.y > this.maxSize;
  }

  get xSize() {
    return this.shouldTrimX ? this.maxSize - 1 : this.matrix.x;
  }

  get ySize() {
    return this.shouldTrimY ? this.maxSize - 1 : this.matrix.y;
  }

  get xIndexes() {
    const xIndexes = getRange(this.xSize);

    if (this.shouldTrimX) return [...xIndexes, undefined, this.matrix.x - 1];

    return xIndexes;
  }

  get yIndexes() {
    const yIndexes = getRange(this.ySize);

    if (this.shouldTrimY) return [...yIndexes, undefined, this.matrix.y - 1];

    return yIndexes;
  }

  get rows() {
    return this.matrix.plainMatrix;
  }

  get viewRows(): MatrixView {
    const rows = this.shouldTrimY
      ? this.rows.slice(0, this.maxSize - 1)
      : this.rows;

    let rowViews = [...plainMatrixToMatrixView(rows)];

    if (this.shouldTrimY) {
      rowViews.push(
        getFilledRowView(this.maxSize - 1, this.matrix.x, '⋮', '', 'trim-line'),
        matrixRowToRowView(this.matrix.y - 1, this.rows[this.matrix.y - 1])
      );
    }

    if (this.shouldTrimX) {
      rowViews = rowViews.map((row, y) => {
        row.cells = [
          ...row.cells.slice(0, this.maxSize - 1),
          getCellView({ y, x: this.maxSize - 1 }, '⋯', '', 'trim-line'),
          row.cells[this.matrix.x - 1],
        ];

        return row;
      });
    }

    if (this.shouldTrimY && this.shouldTrimX) {
      rowViews[this.maxSize - 1].cells[this.maxSize - 1].value = '⋱';
    }

    return rowViews;
  }

  trackByRow(index: number) {
    return index;
  }

  trackByColumn(index: number) {
    return index;
  }

  updateValue(position: Position, event: Event) {
    const target = event.target as HTMLInputElement;
    const num = Number(target.value) || 0;

    this.matrix.set(position.y, position.x, num);
  }

  onCellHover(position: Position) {
    this.hoveredCell = position;
  }

  resetHoveredCell() {
    this.hoveredCell = undefined;
  }

  onCellFocus(position: Position) {
    this.focusedCell = position;
  }

  resetFocusedCell() {
    this.focusedCell = undefined;
  }
}
