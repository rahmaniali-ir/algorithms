import { Edge, Vertex, Vertices } from '../type/graph';

export class Graph<T = any> {
  name: string;
  private _vertices: Vertices<T> = [];
  private _edges: Edge<T>[] = [];

  constructor(name: string, vertices: Vertices<T> = [], edges: Edge<T>[] = []) {
    this.name = name;
    this._vertices = vertices;
    this._edges = edges;
  }

  get vertices() {
    return this._vertices;
  }

  get edges() {
    return this._edges;
  }

  getVertexByIndex(index: number) {
    return this.vertices.find((v) => v.index === index);
  }

  addVertex(vertex: Vertex<T>) {
    this.vertices.push(vertex);
  }

  deleteVertex(vertex: Vertex<T>) {
    this._vertices = this._vertices.filter((v) => v !== vertex);
    this._edges = this._edges.filter((e) => e.v1 !== vertex && e.v2 !== vertex);
  }

  edgeExists(edge: Pick<Edge, 'v1' | 'v2'>, ignoreDirection = false) {
    if (ignoreDirection)
      return this.edges.some(
        (e) =>
          (e.v1 === edge.v1 && e.v2 === edge.v2) ||
          (e.v1 === edge.v2 && e.v2 === edge.v1)
      );

    return this.edges.some((e) => e.v1 === edge.v1 && e.v2 === edge.v2);
  }

  addEdge(edge: Edge<T>) {
    this.edges.push(edge);
  }
}
