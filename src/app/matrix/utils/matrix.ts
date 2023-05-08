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
  type: MatrixInputType = 'number',
  className?: string
): MatrixCellView {
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
  type: MatrixInputType,
  className?: string,
  cellClassName?: string
): MatrixRowView {
  return {
    index: y,
    cells: Array(x)
      .fill(v)
      .map((value, x) => getCellView({ y, x }, value, '', type, cellClassName)),
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
