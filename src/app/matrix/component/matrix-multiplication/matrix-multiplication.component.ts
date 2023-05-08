import { Component } from '@angular/core';
import { Matrix } from '../../model/matrix';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { CreateMatrixModalComponent } from '../create-matrix-modal/create-matrix-modal.component';

@Component({
  selector: 'matrix-multiplication',
  templateUrl: './matrix-multiplication.component.html',
  styleUrls: ['./matrix-multiplication.component.sass'],
})
export class MatrixMultiplicationComponent {
  matrices: Matrix<number>[] = [];
  m?: Matrix<string | undefined>;
  result?: Matrix;
  showDetails = false;
  showAxis = false;

  constructor(private modal: ModalService) {}

  get lastMatrixColumns() {
    return this.matrices.at(-1)?.x;
  }

  get diagonals() {
    return this.matrices.length
      ? [this.matrices[0].y, ...this.matrices.map((m) => m.x)]
      : [];
  }

  get nextMatrixName() {
    return `A${this.matrices.length + 1}`;
  }

  createMatrix() {
    const input: { [key in string]: any } = {
      name: this.nextMatrixName,
    };

    if (this.matrices.length > 0) {
      input['fixRows'] = this.lastMatrixColumns;
    }

    this.modal
      .open<Matrix>(CreateMatrixModalComponent, {
        input,
      })
      .result.subscribe({
        next: (matrix) => {
          if (!matrix) return;

          matrix.name = this.nextMatrixName;
          this.matrices.push(matrix);
          this.result = undefined;
        },
        error: () => {},
      });
  }

  multiply() {
    // const matrix = Matrix.multiply(this.matrices[0], this.matrices[1]);
    // matrix.name = 'Result';
    // this.result = matrix;

    const result = Matrix.chainMultiply(...this.matrices);

    if (result.matrix) {
      this.m = result.matrix.map((c) => {
        if (c === undefined) return undefined;

        if (c >= 1000) {
          c /= 1000;
          return c + 'K';
        }

        return String(c);
      });
    }
  }

  clear() {
    this.matrices = [];
    this.result = undefined;
  }
}
