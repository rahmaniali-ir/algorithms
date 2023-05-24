import { Edge, EdgeLine, Vertex } from '../type/graph';

export function getEdgeLine(edge: Edge): EdgeLine {
  const {
    v1: {
      data: { position: p1 },
    },
    v2: {
      data: { position: p2 },
    },
  } = edge;

  const height = Math.max(3, Math.abs(p2.y - p1.y));
  const width = Math.max(3, Math.abs(p2.x - p1.x));
  const viewBox = `0 0 ${width} ${height}`;

  const top = Math.min(p2.y, p1.y);
  const left = Math.min(p2.x, p1.x);

  let x1, y1, x2, y2;
  if (p1.x < p2.x) {
    if (p1.y < p2.y) {
      x1 = y1 = 0;
      x2 = width;
      y2 = height;
    } else {
      x1 = y2 = 0;
      y1 = height;
      x2 = width;
    }
  } else {
    if (p1.y < p2.y) {
      y1 = x2 = 0;
      x1 = width;
      y2 = height;
    } else {
      x1 = width;
      y1 = height;
      x2 = y2 = 0;
    }
  }

  return { edge, viewBox, top, left, height, width, x1, y1, x2, y2 };
}

export function getVertexName(vertex: Vertex) {
  return vertex.name || `V${vertex.index + 1}`;
}
