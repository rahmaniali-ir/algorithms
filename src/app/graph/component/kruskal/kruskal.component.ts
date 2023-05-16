import { Component } from '@angular/core';
import { Graph } from '../../model/graph';
import { GreedyStep } from 'src/type/greedy';
import { Edge } from '../../type/graph';

@Component({
  selector: 'app-kruskal',
  templateUrl: './kruskal.component.html',
  styleUrls: ['./kruskal.component.sass'],
})
export class KruskalComponent {
  graph = new Graph('Input');
  spanningTree?: Graph;
  changeGraph?: Graph;
  steps: GreedyStep<{ tree: Graph; edge: Edge }>[] = [];
  calculated = false;

  constructor() {
    this.graph.addVertex({ index: 0, name: 'A', position: { x: 75, y: 60 } });
    this.graph.addVertex({ index: 1, name: 'B', position: { x: 225, y: 60 } });
    this.graph.addVertex({ index: 2, name: 'D', position: { x: 75, y: 200 } });
    this.graph.addVertex({ index: 3, name: 'C', position: { x: 225, y: 200 } });
    this.graph.addVertex({ index: 4, name: 'E', position: { x: 146, y: 270 } });

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

  // calculate Kruskal's minimum spanning tree
  calculateKruskalTree() {
    const spanningTree = new Graph(
      'minimum spanning tree',
      this.graph.vertices
    );
    const sortedEdges = this.graph.edges.sort((a, b) => a.weight - b.weight);

    this.steps = [];
    sortedEdges.forEach((edge, i) => {
      if (spanningTree.vertices.length == this.graph.vertices.length - 1)
        return;

      const e = { ...edge };

      const tree = spanningTree.clone();
      const addedEdge = tree.addEdge(e)!;

      const feasibilityCheck = !tree.hasCycle();

      if (feasibilityCheck) {
        spanningTree.addEdge(e);

        addedEdge.className += ' success';
      } else {
        addedEdge.className += ' danger';
      }

      const v1Name = edge.v1.name || `V${edge.v1.index + 1}`;
      const v2Name = edge.v2.name || `V${edge.v2.index + 1}`;

      this.steps.push({
        step: i,
        selection: {
          tree,
          edge: addedEdge,
        },
        feasibility: `Step ${i + 1} - Select ${v1Name},${v2Name}`,
        feasibilityCheck,
        solution: '',
        solutionCheck: false,
      });
    });

    this.changeGraph = this.graph.clone();
    this.changeGraph.name = 'Change graph';
    this.changeGraph.edges.forEach((e) => {
      e.className = spanningTree.edgeExists(e.v1.index, e.v2.index)
        ? ' success'
        : ' danger';
    });

    this.spanningTree = spanningTree;
    this.calculated = true;
  }

  clear() {
    this.graph = new Graph('Input');
  }
}
