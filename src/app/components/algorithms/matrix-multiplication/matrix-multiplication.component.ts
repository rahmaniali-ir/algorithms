import { Component } from '@angular/core';
import { Matrix } from '@models/matrix';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { CreateMatrixModalComponent } from '@modals/create-matrix-modal/create-matrix-modal.component';
import { getPossibleSequenceParenthesis } from '@utils/matrix';
import { CheckBoxComponent } from '@core/components/check-box/check-box.component';
import { SectionComponent } from '@core/components/section/section.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { MatrixComponent } from '@common/matrix/matrix.component';
import { StepComponent } from '@core/components/step/step.component';

@Component({
  selector: 'matrix-multiplication',
  templateUrl: './matrix-multiplication.component.html',
  styleUrls: ['./matrix-multiplication.component.sass'],
  standalone: true,
  imports: [
    CheckBoxComponent,
    SectionComponent,
    SvgIconComponent,
    MatrixComponent,
    StepComponent,
  ],
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

  get matrixNames() {
    return this.matrices.map((m) => m.name!);
  }

  get dimensions() {
    return this.matrices.length
      ? [this.matrices[0].y, ...this.matrices.map((m) => m.x)]
      : [];
  }

  get nextMatrixName() {
    return `A${this.matrices.length + 1}`;
  }

  get possibleSequences() {
    return getPossibleSequenceParenthesis(this.matrixNames);
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
