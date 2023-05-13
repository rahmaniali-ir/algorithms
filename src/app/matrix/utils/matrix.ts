import { Position } from 'src/app/core/type/position';
import { PlainMatrix } from '../model/matrix';
import {
  MatrixCellView,
  MatrixInputType,
  MatrixRowView,
  MatrixView,
} from '../type/matrix';

export function getCellView(
  position: Position,
  value?: any,
  title: string = `${position.y + 1}⨉${position.x + 1}`,
  className?: string
): MatrixCellView {
  const type: MatrixInputType = Number.isInteger(value) ? 'number' : 'text';

  return {
    position,
    value,
    title,
    type,
    className,
  };
}

export function getFilledRowView(
  y: number,
  x: number,
  v: any,
  className?: string,
  cellClassName?: string
): MatrixRowView {
  return {
    index: y,
    cells: Array(x)
      .fill(v)
      .map((value, x) => getCellView({ y, x }, value, '', cellClassName)),
    className,
  };
}

export function matrixRowToRowView(
  y: number,
  cells: any[] = []
): MatrixRowView {
  return {
    index: y,
    cells: cells.map((value, x) => getCellView({ y, x }, value)),
  };
}

export function plainMatrixToMatrixView(rows: PlainMatrix): MatrixView {
  return rows.map((cells, y) => matrixRowToRowView(y, cells));
}

export function getPossibleSequenceParenthesis(items: string[]) {
  // base case: if the string is empty or has only one character, return an empty array
  if (items.length <= 1) {
    return [];
  }

  // recursive case: for each position in the string, split it into two parts and add parentheses around them
  // then concatenate the results of calling the function recursively on both parts
  let result: string[] = [];

  for (let i = 0; i < items.length - 1; i++) {
    let left = items.slice(0, i + 1);
    let right = items.slice(i + 1);

    let leftResult = getPossibleSequenceParenthesis(left);
    let rightResult = getPossibleSequenceParenthesis(right);

    // if the left part has only one character, add it to the result without parentheses
    if (left.length === 1) {
      result.push(left + '(' + right.join('x') + ')');
    } else if (right.length === 1) {
      result.push('(' + left.join('x') + ')' + right);
    } else {
      // for each combination of parentheses locations in the left and right parts, add them to the result with parentheses around them
      for (let j = 0; j < leftResult.length; j++) {
        for (let k = 0; k < rightResult.length; k++) {
          result.push('(' + leftResult[j] + ')' + '(' + rightResult[k] + ')');
        }
      }
    }
  }

  return result;
}
