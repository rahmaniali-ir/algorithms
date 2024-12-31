import { Component, Input } from '@angular/core';
import { Vertex } from '@type/graph';
import { getVertexName } from '@utils/graph';

@Component({
  selector: 'app-vertex',
  templateUrl: './vertex.component.html',
  styleUrls: ['./vertex.component.sass'],
  standalone: true,
})
export class VertexComponent {
  @Input() vertex?: Vertex;

  get name() {
    return this.vertex ? getVertexName(this.vertex) : '×';
  }
}
