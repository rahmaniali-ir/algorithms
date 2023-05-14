import { Customizable } from 'src/app/core/type/customizable';
import { Position } from 'src/app/core/type/position';

export interface Vertex<T = any> extends Customizable<T> {
  name: string;
  index: number;
  position: Position;
}

export type Vertices<T = any> = Vertex<T>[];

export interface Edge<T = any> extends Customizable<T> {
  v1: Vertex;
  v2: Vertex;
  weight: number;
  name?: string;
}

export interface EdgeLine<T = any> extends Customizable<T> {
  edge: Edge<T>;
  viewBox: string;
  top: number;
  left: number;
  height: number;
  width: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
