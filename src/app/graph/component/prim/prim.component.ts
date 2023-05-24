import { Component } from '@angular/core';
import { Graph } from '../../model/graph';
import { GreedyStep } from 'src/type/greedy';
import { Edge, Vertex, Vertices } from '../../type/graph';
import { getVertexName } from '../../utils/graph';
import { getClassList } from 'src/app/core/util/customizable';
import { Position } from 'src/app/core/type/position';

@Component({
  selector: 'app-prim',
  templateUrl: './prim.component.html',
  styleUrls: ['./prim.component.sass'],
})
export class PrimComponent {
  graph = new Graph<{ position: Position }>('Input');
  spanningTree?: Graph<{ position: Position }>;
  changeGraph?: Graph<{ position: Position }>;
  steps: GreedyStep<{
    tree: Graph;
    edge?: Edge;
    edges: Edge[];
    vertices: Vertices;
  }>[] = [];
  calculated = false;

  constructor() {
    this.graph.addVertex({
      index: 0,
      name: 'A',
      data: { position: { x: 75, y: 60 } },
    });
    this.graph.addVertex({
      index: 1,
      name: 'B',
      data: { position: { x: 225, y: 60 } },
    });
    this.graph.addVertex({
      index: 2,
      name: 'D',
      data: { position: { x: 75, y: 200 } },
    });
    this.graph.addVertex({
      index: 3,
      name: 'C',
      data: { position: { x: 225, y: 200 } },
    });
    this.graph.addVertex({
      index: 4,
      name: 'E',
      data: { position: { x: 146, y: 270 } },
    });

    const [a, b, c, d, e] = this.graph.vertices;

    this.graph.addEdge({ v1: a, v2: b, weight: 1 });
    this.graph.addEdge({ v1: a, v2: c, weight: 3 });
    this.graph.addEdge({ v1: b, v2: c, weight: 3 });
    this.graph.addEdge({ v1: b, v2: d, weight: 6 });
    this.graph.addEdge({ v1: c, v2: d, weight: 4 });
    this.graph.addEdge({ v1: c, v2: e, weight: 2 });
    this.graph.addEdge({ v1: d, v2: e, weight: 5 });
  }

  get canCalculate() {
    return (
      this.graph.isFullyConnected &&
      this.graph.edges.length > 1 &&
      !this.calculated
    );
  }

  onInputEdit() {
    this.calculated = false;
  }

  // calculate Prim's minimum spanning tree
  calculatePrimTree() {
    this.steps = [];
    const graphVertices = [...this.graph.vertices].map((v) => ({
      ...v,
      name: getVertexName(v),
      className: 'inactive',
    }));

    graphVertices[0].className = '';

    const spanningTree = new Graph('minimum spanning tree', [graphVertices[0]]);

    this.steps.push({
      step: 1,
      selection: {
        tree: new Graph(`Minimum spanning tree`, graphVertices),
        edges: [],
        vertices: [graphVertices[0]],
      },
      feasibility: '',
      feasibilityCheck: false,
      solution: '',
      solutionCheck: false,
    });

    for (let i = 1; i < this.graph.vertices.length; i++) {
      const stepTree = new Graph(`Minimum spanning tree`, graphVertices);

      const vertices = spanningTree.vertices.map((v) => v.index);
      vertices.forEach((v) => {
        stepTree.getVertexByIndex(v)!.className = '';
      });

      let edges = this.graph.getVertexGroupEdges(vertices);
      edges
        .filter((e) => spanningTree.edgeExists(e.v1.index, e.v2.index))
        .forEach((edge) => stepTree.addEdge(edge));

      edges = edges.filter((e) => {
        return (
          !spanningTree.edgeExists(e.v1.index, e.v2.index) &&
          (!vertices.includes(e.v1.index) || !vertices.includes(e.v2.index))
        );
      });
      edges.forEach((edge) => {
        const { v1, v2 } = edge;
        const exists = spanningTree.edgeExists(v1.index, v2.index);

        let e = stepTree.getEdge(v1.index, v2.index) || stepTree.addEdge(edge)!;
        e.className = exists ? '' : 'danger';
      });

      const selectedEdge = edges.sort((a, b) => a.weight - b.weight)[0];
      stepTree.getEdge(
        selectedEdge.v1.index,
        selectedEdge.v2.index
      )!.className = 'success';

      if (!spanningTree.vertexExists(selectedEdge.v1.index)) {
        spanningTree.addVertex(selectedEdge.v1);
        stepTree.getVertexByIndex(selectedEdge.v1.index)!.className = '';
      }

      if (!spanningTree.vertexExists(selectedEdge.v2.index)) {
        spanningTree.addVertex(selectedEdge.v2);
        stepTree.getVertexByIndex(selectedEdge.v2.index)!.className = '';
      }
      spanningTree.addEdge(selectedEdge);

      this.steps.push({
        step: i + 1,
        selection: {
          tree: stepTree,
          edges,
          edge: selectedEdge,
          vertices: spanningTree.vertices.map((v) => ({
            ...v,
            name: getVertexName(v),
          })),
        },
        feasibility: '',
        feasibilityCheck: false,
        solution: '',
        solutionCheck: false,
      });
    }

    this.changeGraph = this.graph.clone();
    this.changeGraph.name = 'Change graph';
    this.changeGraph.edges.forEach((edge) => {
      getClassList(edge).add(
        spanningTree.edgeExists(edge.v1.index, edge.v2.index)
          ? 'success'
          : 'danger'
      );
    });

    this.spanningTree = spanningTree;
    this.calculated = true;
  }

  clear() {
    this.calculated = false;
    this.graph = new Graph('Input');
    this.spanningTree = undefined;
    this.changeGraph = undefined;
    this.steps = [];
  }

  onVertexMouseEnter(graph: Graph, vertex: Vertex) {
    getClassList(graph.getVertexByIndex(vertex.index)!).add('hovered');
  }

  onVertexMouseLeave(graph: Graph, vertex: Vertex) {
    getClassList(graph.getVertexByIndex(vertex.index)!).remove('hovered');
  }

  onEdgeMouseEnter(graph: Graph, { v1, v2 }: Edge) {
    this.onVertexMouseEnter(graph, v1);
    this.onVertexMouseEnter(graph, v2);

    getClassList(graph.getEdge(v1.index, v2.index)!).add('hovered', 'primary');
  }

  onEdgeMouseLeave(graph: Graph, { v1, v2 }: Edge) {
    this.onVertexMouseLeave(graph, v1);
    this.onVertexMouseLeave(graph, v2);

    getClassList(graph.getEdge(v1.index, v2.index)!).remove(
      'hovered',
      'primary'
    );
  }
}
