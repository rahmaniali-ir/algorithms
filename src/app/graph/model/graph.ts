import { Edge, Vertex, Vertices } from '../type/graph';

export class Graph<T = any> {
  name: string;
  private _vertices: Vertices<T> = [];
  private _edges: Edge<T>[] = [];

  constructor(name: string, vertices: Vertices<T> = [], edges: Edge<T>[] = []) {
    this.name = name;

    this._vertices = vertices.map((v) => ({ ...v }));
    this._edges = edges.map((e) => ({ ...e }));
  }

  get vertices() {
    return this._vertices;
  }

  get vertexMap() {
    const map = new Map<number, Vertex>();

    this.vertices.forEach((v) => map.set(v.index, v));

    return map;
  }

  get edges() {
    return this._edges;
  }

  getVertexByIndex(index: number) {
    return this.vertices.find((v) => v.index === index);
  }

  addVertex(vertex: Vertex<T>) {
    const v = { ...vertex };
    this._vertices.push(v);

    return v;
  }

  deleteVertex(vertex: Vertex<T>) {
    this._vertices = this._vertices.filter((v) => v !== vertex);
    this._edges = this._edges.filter((e) => e.v1 !== vertex && e.v2 !== vertex);
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

  addEdge(edge: Edge<T>): Edge<T> | undefined {
    const v1 = this.vertexMap.get(edge.v1.index);
    const v2 = this.vertexMap.get(edge.v2.index);

    if (!v1 || !v2) return;

    const e = { ...edge, v1, v2 };
    this._edges.push(e);

    return e;
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
      const { index, name, position } = vertex;

      graph.addVertex({ ...vertex, index, name, position: { ...position } });
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
