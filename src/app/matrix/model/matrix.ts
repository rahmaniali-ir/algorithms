const INVALID_INDEX_ERROR = 'Invalid index!';

export type PlainMatrix = number[][];

export class Matrix {
  readonly y: number;
  readonly x: number;
  private matrix: PlainMatrix;
  name?: string;

  constructor(y: number, x: number, matrix?: PlainMatrix, letter?: string) {
    this.y = y;
    this.x = x;

    this.matrix = Matrix.getEmptyPlainMatrix(y, x);

    if (matrix) this.setAll(matrix);

    this.name = letter || '';
  }

  get plainMatrix() {
    return this.matrix;
  }

  get(y: number, x: number) {
    return this.matrix[y][x];
  }

  set(y: number, x: number, v: number) {
    this.matrix[y][x] = v;
  }

  setAll(matrix: PlainMatrix) {
    const plainMatrix: PlainMatrix = Matrix.getEmptyPlainMatrix(this.y, this.x);

    try {
      matrix.forEach((row, y) => {
        row.forEach((v, x) => {
          plainMatrix[y][x] = v;
        });
      });
    } catch {
      throw new Error(INVALID_INDEX_ERROR);
    }

    this.matrix = plainMatrix;
  }

  static getEmptyPlainMatrix(y: number, x: number): PlainMatrix {
    const plainMatrix: PlainMatrix = [];

    for (let i = 0; i < y; i++) plainMatrix.push(Array(x));

    return plainMatrix;
  }

  static Multiply(a: Matrix, b: Matrix) {
    const result: PlainMatrix = [];

    // C(m, n) = A(m, k) * B(k, n)
    for (let i = 0; i < a.y; i++) {
      result[i] = [];

      for (let j = 0; j < b.x; j++) {
        result[i].push(0);

        for (let p = 0; p < a.x; p++) {
          result[i][j] += a.get(i, p) * b.get(p, j);
        }
      }
    }

    return new Matrix(a.y, b.x, result);
  }
}
