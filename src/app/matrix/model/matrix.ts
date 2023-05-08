const INVALID_INDEX_ERROR = 'Invalid index!';

export type PlainMatrix<T = number> = T[][];

export class Matrix<T = number> {
  readonly y: number;
  readonly x: number;
  private matrix: PlainMatrix<T | undefined>;
  name?: string;

  constructor(y: number, x: number, matrix?: PlainMatrix<T>, name?: string) {
    this.y = y;
    this.x = x;

    this.matrix = Matrix.getEmptyPlainMatrix(y, x);

    if (matrix) this.setAll(matrix);

    this.name = name || '';
  }

  get plainMatrix() {
    return this.matrix;
  }

  get(y: number, x: number) {
    return this.matrix[y][x];
  }

  set(y: number, x: number, v: T) {
    this.matrix[y][x] = v;
  }

  setAll(matrix: PlainMatrix<T>) {
    const plainMatrix: PlainMatrix<T> = Matrix.getEmptyPlainMatrix(
      this.y,
      this.x
    );

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

  fill(v: T) {
    for (let y = 0; y < this.y; y++) {
      for (let x = 0; x < this.x; x++) {
        this.set(y, x, v);
      }
    }
  }

  fillDiagonal(d: number, v: T) {
    const x = this.x - d;

    for (let y = 0; y < x; y++) {
      this.set(y, y + d, v);
    }
  }

  clone() {
    return new Matrix(this.y, this.x, this.plainMatrix, this.name);
  }

  map<V = T>(callback: (c: T | undefined) => V) {
    const newPlainMatrix: PlainMatrix<V> = this.matrix.map((row) =>
      row?.map(callback)
    );

    return new Matrix(this.y, this.x, newPlainMatrix, this.name);
  }

  static getEmptyPlainMatrix<T = undefined>(
    y: number,
    x: number,
    v: T | undefined = undefined
  ): PlainMatrix<T> {
    const plainMatrix: PlainMatrix<T> = [];

    for (let i = 0; i < y; i++) plainMatrix.push(Array(x).fill(v));

    return plainMatrix;
  }

  static multiply(a: Matrix, b: Matrix) {
    const result: PlainMatrix = [];

    // C(m, n) = A(m, k) * B(k, n)
    for (let i = 0; i < a.y; i++) {
      result[i] = [];

      for (let j = 0; j < b.x; j++) {
        result[i].push(0);

        for (let p = 0; p < a.x; p++) {
          result[i][j] += a.get(i, p)! * b.get(p, j)!;
        }
      }
    }

    return new Matrix(a.y, b.x, result);
  }

  static chainMultiply(...matrices: Matrix<number>[]) {
    // Check if the array is empty or has only one matrix
    if (matrices.length === 0 || matrices.length === 1) {
      return { cost: 0, matrix: null };
    }

    // Initialize a 2D array to store the minimum costs of subproblems
    const n = matrices.length;
    const cost = new Matrix<number>(n, n);

    // Fill the diagonal entries with zero
    cost.fillDiagonal(0, 0);

    // Loop over the chain length from 2 to n
    for (let l = 2; l <= n; l++) {
      // Loop over the starting index of the chain
      for (let i = 0; i < n - l + 1; i++) {
        // Get the ending index of the chain
        const j = i + l - 1;

        // Set the cost to a large value
        cost.set(i, j, Number.MAX_VALUE);

        // Loop over the possible split points
        for (let k = i; k < j; k++) {
          // Get the cost of the left and right subproblems
          const leftCost = cost.get(i, k)!;
          const rightCost = cost.get(k + 1, j)!;
          // Get the number of multiplications for the current split
          const currCost =
            leftCost +
            rightCost +
            matrices[i].y * matrices[k].x * matrices[j].x;

          // Update the minimum cost if needed
          if (currCost < cost.get(i, j)!) {
            cost.set(i, j, currCost);
          }
        }
      }
    }

    // Return the minimum cost for the whole chain
    return { cost: cost.get(0, n - 1), matrix: cost };
  }
}
