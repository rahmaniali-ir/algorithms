import { Component } from '@angular/core';
import { Graph } from '../../model/graph';

@Component({
  selector: 'app-kruskal',
  templateUrl: './kruskal.component.html',
  styleUrls: ['./kruskal.component.sass'],
})
export class KruskalComponent {
  graph = new Graph('default');

  constructor() {
    // this.graph.addVertex({ name: 'A', index: 0, position: { x: 0, y: 0 } });
    // this.graph.addVertex({ name: 'B', index: 1, position: { x: 30, y: 0 } });
    // const [v1, v2] = this.graph.vertices;
    // this.graph.addEdge({ v1, v2, weight: 1 });
  }
}
