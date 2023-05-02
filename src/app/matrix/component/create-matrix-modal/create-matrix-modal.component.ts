import { Component, OnInit, Input } from '@angular/core';
import { Matrix, PlainMatrix } from '../../model/matrix';
import { getRandom } from 'src/app/core/util/random';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { getAlphabetLetter } from 'src/app/core/util/alphabet';

@Component({
  selector: 'create-matrix-modal',
  templateUrl: './create-matrix-modal.component.html',
  styleUrls: ['./create-matrix-modal.component.sass'],
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
    const plainMatrix: PlainMatrix = matrix.plainMatrix;

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
