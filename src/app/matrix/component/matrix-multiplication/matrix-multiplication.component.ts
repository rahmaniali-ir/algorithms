import { Component } from '@angular/core';
import { Matrix } from '../../model/matrix';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { CreateMatrixModalComponent } from '../create-matrix-modal/create-matrix-modal.component';
import { getAlphabetLetter } from 'src/app/core/util/alphabet';

@Component({
  selector: 'matrix-multiplication',
  templateUrl: './matrix-multiplication.component.html',
  styleUrls: ['./matrix-multiplication.component.sass'],
})
export class MatrixMultiplicationComponent {
  matrices: Matrix[] = [];
  result?: Matrix;
  showDetails = false;
  showAxis = false;

  constructor(private modal: ModalService) {}

  get lastMatrixColumns() {
    return this.matrices.at(-1)?.x;
  }

  createMatrix() {
    const input: { [key in string]: any } = {
      letter: getAlphabetLetter(this.matrices.length),
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

          matrix.name = getAlphabetLetter(this.matrices.length);
          this.matrices.push(matrix);
          this.result = undefined;
        },
        error: () => {},
      });
  }

  multiply() {
    const matrix = Matrix.Multiply(this.matrices[0], this.matrices[1]);
    matrix.name = 'Result';
    this.result = matrix;
  }

  clear() {
    this.matrices = [];
    this.result = undefined;
  }
}
