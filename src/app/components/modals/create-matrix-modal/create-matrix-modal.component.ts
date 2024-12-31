import { Component, OnInit, Input } from '@angular/core';
import { Matrix, PlainMatrix } from '@models/matrix';
import { getRandom } from 'src/app/core/util/random';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { getAlphabetLetter } from 'src/app/core/util/alphabet';
import { ModalCardComponent } from '@core/components/modal-card/modal-card.component';
import { FormGroupComponent } from '@core/components/form-group/form-group.component';
import { FormLabelComponent } from '@core/components/form-label/form-label.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckBoxComponent } from '@core/components/check-box/check-box.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { MatrixComponent } from '@common/matrix/matrix.component';

@Component({
  selector: 'create-matrix-modal',
  templateUrl: './create-matrix-modal.component.html',
  styleUrls: ['./create-matrix-modal.component.sass'],
  standalone: true,
  imports: [
    ModalCardComponent,
    FormGroupComponent,
    FormLabelComponent,
    NgIf,
    FormsModule,
    CheckBoxComponent,
    SvgIconComponent,
    MatrixComponent,
  ],
})
export class CreateMatrixModalComponent implements OnInit {
  @Input() name = getAlphabetLetter(0);
  @Input() set fixRows(rows: number | undefined) {
    if (rows === undefined) return;

    this.rows = rows;
    this.isRowFixed = true;
  }

  matrix: Matrix = new Matrix(3, 3);
  isRowFixed = false;
  rows = 3;
  columns = 3;

  // randomize
  randomMatrix: Matrix = new Matrix(3, 3);
  randomize = true;
  randomMin = 0;
  randomMax = 10;

  constructor(public modal: ActiveModal) {}

  ngOnInit(): void {
    this.changeInputMatrixSize();
  }

  get header() {
    return `Add Matrix '${this.name}'`;
  }

  get maxSize() {
    return this.randomize ? 4 : Number.MAX_VALUE;
  }

  changeInputMatrixSize() {
    if (this.randomize) {
      this.randomMatrix = new Matrix(this.rows, this.columns);
      this.updateRandomMatrix();
    } else {
      this.matrix = new Matrix(this.rows, this.columns);
    }
  }

  updateRandomMatrix() {
    const matrix = new Matrix(this.rows, this.columns);
    const plainMatrix: PlainMatrix<number | undefined> = matrix.plainMatrix;

    for (let r = 0; r < this.rows; r++) {
      plainMatrix[r] = [];

      for (let c = 0; c < this.columns; c++) {
        plainMatrix[r].push(getRandom(this.randomMin, this.randomMax));
      }
    }

    this.randomMatrix = matrix;
  }

  useRandomMatrix() {
    this.matrix = this.randomMatrix;
    this.randomize = false;
  }

  createMatrix() {
    this.modal.close(this.randomize ? this.randomMatrix : this.matrix);
  }
}
