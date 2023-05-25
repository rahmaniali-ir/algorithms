import { Matrix } from 'src/app/matrix/model/matrix';
import { Edge, Vertex, Vertices } from '../type/graph';

export class Graph<T = any> {
  name: string;
  private _vertices: Vertices<T> = [];
  private _edges: Edge<T>[] = [];
  readonly directed;

  constructor(
    name: string,
    vertices: Vertices<T> = [],
    edges: Edge<T>[] = [],
    directed = false
  ) {
    this.name = name;
    this._vertices = vertices.map((v) => ({ ...v }));
    this._edges = edges.map((e) => ({ ...e }));
    this.directed = directed;
  }

  get vertices() {
    return this._vertices;
  }

  get vertexMap() {
    const map = new Map<number, Vertex>();

    this.vertices.forEach((v) => map.set(v.index, v));

    return map;
  }

  get adjacencyMatrix() {
    const { length } = this.vertices;
    const m = new Matrix(length, length);

    const set = (v1: number, v2: number, weight: number) => {
      m.set(v1, v2, weight);

      if (!this.directed) m.set(v2, v1, weight);
    };

    for (let v1 = 0; v1 < length; v1++) {
      for (let v2 = this.directed ? 0 : v1; v2 < length; v2++) {
        if (v1 === v2) {
          set(v1, v2, 0);
          continue;
        }

        const connected = this.edgeExists(v1, v2);

        if (connected) {
          const edge = this.getEdge(v1, v2);

          if (edge) set(v1, v2, edge.weight);
          else set(v1, v2, -1);
        } else {
          set(v1, v2, -1);
        }
      }
    }

    return m;
  }

  get edges() {
    return this._edges;
  }

  get isFullyConnected() {
    return this.vertices.every((v) =>
      this.edges.some((e) => e.v1 === v || e.v2 === v)
    );
  }

  get totalWeight() {
    let total = 0;

    for (let edge of this.edges) total += edge.weight;

    return total;
  }

  vertexExists(index: number) {
    return this.vertices.some((v) => v.index === index);
  }

  getVertexByIndex(index: number) {
    return this.vertices.find((v) => v.index === index);
  }

  getConnectedVertices(index: number) {
    const vertex = this.vertexMap.get(index);
    if (!vertex) return [];

    return this.getVertexEdges(index).map((edge) => ({
      vertex: edge.v1.index === index ? edge.v2 : edge.v1,
      edge,
    }));
  }

  getConnectedVerticesToVertexGroup(indices: number[]) {
    const vertices: Vertices = [];

    this.getVertexGroupEdges(indices).forEach((edge) => {
      if (!indices.includes(edge.v1.index)) vertices.push(edge.v1);
      if (!indices.includes(edge.v2.index)) vertices.push(edge.v2);
    });

    return vertices;
  }

  addVertex(vertex: Vertex<T>) {
    const v = { ...vertex };
    this._vertices.push(v);

    return v;
  }

  addVertexFrom(origin: Vertex<T>, vertex: Vertex<T>, weight: number = 1) {
    const v = this.addVertex(vertex);

    const e = this.addEdge({
      v1: origin,
      v2: vertex,
      weight,
    });

    return { vertex: v, edge: e };
  }

  deleteVertex(vertex: Vertex<T>) {
    this._vertices = this._vertices.filter((v) => v !== vertex);
    this._edges = this._edges.filter((e) => e.v1 !== vertex && e.v2 !== vertex);
  }

  getVertexEdges(index: number) {
    if (this.directed) {
      return this.edges.filter((e) => e.v1.index === index);
    } else {
      return this.edges.filter(
        (e) => e.v1.index === index || e.v2.index === index
      );
    }
  }

  getVertexGroupEdges(indices: number[]) {
    const edges: Edge[] = [];

    for (let i of indices) {
      const vertexEdges = this.getVertexEdges(i);

      for (let e of vertexEdges) if (!edges.includes(e)) edges.push(e);
    }

    return edges;
  }

  edgeExists(v1Index: number, v2Index: number, ignoreDirection = false) {
    if (ignoreDirection)
      return this.edges.some(
        (e) =>
          (e.v1.index === v1Index && e.v2.index === v2Index) ||
          (e.v1.index === v2Index && e.v2.index === v1Index)
      );

    return this.edges.some(
      (e) => e.v1.index === v1Index && e.v2.index === v2Index
    );
  }

  getEdge(v1: number, v2: number) {
    return this.edges.find((e) => e.v1.index === v1 && e.v2.index === v2);
  }

  addEdge(edge: Edge<T>): Edge<T> | undefined {
    const v1 = this.vertexMap.get(edge.v1.index);
    const v2 = this.vertexMap.get(edge.v2.index);

    if (!v1 || !v2 || v1 === v2 || this.edgeExists(v1.index, v2.index)) return;

    const e = { ...edge, v1, v2 };
    this._edges.push(e);

    return e;
  }

  deleteEdge(edge: Edge<T>) {
    this._edges = this._edges.filter((e) => e !== edge);
  }

  hasCycle() {
    const sets = this.vertices.map((v) => [v.index]);

    for (let edge of this.edges) {
      const v1Set = sets.findIndex((set) => set.includes(edge.v1.index));
      const v2Set = sets.findIndex((set) => set.includes(edge.v2.index));

      if (v1Set === v2Set) return true;

      sets[v1Set].push(...sets[v2Set]);
      sets[v2Set] = [];
    }

    return false;
  }

  clone() {
    const graph = new Graph(this.name);

    this.vertices.forEach((vertex) => {
      const { index, name } = vertex;

      graph.addVertex({ ...vertex, index, name });
    });

    this.edges.forEach((edge) => {
      const { weight, name } = edge;
      const v1 = this.vertexMap.get(edge.v1.index)!;
      const v2 = this.vertexMap.get(edge.v2.index)!;

      graph.addEdge({ ...edge, weight, name, v1, v2 });
    });

    return graph;
  }
}
