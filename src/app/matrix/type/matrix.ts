import { Position } from 'src/app/core/type/position';

export type MatrixInputType = 'number' | 'text';

export interface MatrixCellView {
  position: Position;
  value?: number | string;
  title?: string;
  type?: MatrixInputType;
  disabled?: boolean;
  className?: string;
}

export interface MatrixRowView {
  index: number;
  cells: MatrixCellView[];
  className?: string;
}

export type MatrixView = MatrixRowView[];
