import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Graph } from '../../model/graph';
import { Edge, EdgeLine, Vertex } from '../../type/graph';
import { getEdgeLine } from '../../utils/graph';
import { Position } from 'src/app/core/type/position';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.sass'],
})
export class GraphComponent implements OnInit {
  @Input() graph: Graph = new Graph('default');

  @Input()
  @HostBinding('class.preview')
  editable = false;

  @Input() size = 200;
  @Input() vertexSize = 24;
  @Input() padding = 32;

  @HostBinding('class.drawing-edge')
  drawingEdge = false;

  @HostBinding('class.ready-to-draw-edge')
  ctrlDown = false; // if false, dragging vertex moves it; if true, draws line from vertex
  hoveringVertex?: Vertex;
  draggingVertex?: Vertex;

  @HostBinding('class.dragging-vertex')
  isDraggingVertex = false;
  mousePosition?: Position;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostBinding('style.height')
  @HostBinding('style.width')
  get graphSizeStyle() {
    return this.size + 'px';
  }

  @HostBinding('style.--vertex-size')
  get vertexSizeStyle() {
    return this.vertexSize + 'px';
  }

  @HostBinding('class.can-drag-vertex')
  get canMoveVertex() {
    return !this.ctrlDown && this.draggingVertex;
  }

  get vertices() {
    return this.graph.vertices;
  }

  get edges() {
    return this.graph.edges;
  }

  get edgeLines(): EdgeLine[] {
    return this.edges.map((edge) => getEdgeLine(edge));
  }

  get nextVertexIndex() {
    const largestIndex = Math.max(...this.vertices.map((v) => v.index), 0);
    return largestIndex + 1;
  }

  get drawingEdgePreview(): EdgeLine | undefined {
    if (!this.drawingEdge || !this.draggingVertex || !this.mousePosition)
      return undefined;

    return getEdgeLine({
      v1: this.draggingVertex,
      v2: { index: -1, name: '', position: this.mousePosition },
      weight: 0,
    });
  }

  ngOnInit(): void {
    this.updateGraphSize();
  }

  updateGraphSize() {
    const x = this.vertices.map((v) => v.position.x);
    const y = this.vertices.map((v) => v.position.y);

    const padding = this.vertexSize / 2 + this.padding;

    const minX = Math.min(...x);
    const minY = Math.min(...y);
    const min = Math.min(minX, minY);
    if (min < padding) {
      const offset = padding - min;

      this.vertices.forEach((vertex) => {
        vertex.position.x += offset;
        vertex.position.y += offset;
      });
    }

    const maxX = Math.max(...x) + padding;
    const maxY = Math.max(...y) + padding;

    this.size = Math.max(maxX, maxY, this.size);
  }

  trackByEdgeLine(index: number) {
    const edge = this.edgeLines?.[index];
    if (!edge) return '';

    return edge.left + ',' + edge.top;
  }

  trackByVertex(index: number) {
    return this.vertices?.[index].index || 0;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.editable) return;

    let { offsetX: x, offsetY: y } = e;

    if (e.target !== this.el.nativeElement) {
      const target = e.target as HTMLElement;
      const vertexIndex = target.getAttribute('vertex-index');

      if (vertexIndex !== null) {
        const vertex = this.graph.getVertexByIndex(Number(vertexIndex));

        if (vertex) {
          x = vertex.position.x;
          y = vertex.position.y;
        }
      }
    }

    this.mousePosition = { x, y };

    if (this.canMoveVertex) {
      this.draggingVertex!.position = this.mousePosition;
      this.isDraggingVertex = true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: MouseEvent) {
    this.discardDrawingAndDragging();
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    this.discardDrawingAndDragging();
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(e: MouseEvent) {
    if (!this.editable) return;

    const { offsetX: x, offsetY: y } = e;

    this.graph.addVertex({
      index: this.nextVertexIndex,
      position: { x, y },
    });

    this.updateGraphSize();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: MouseEvent) {
    if (!this.editable) return;

    this.ctrlDown = e.ctrlKey;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e: MouseEvent) {
    if (!this.editable) return;

    this.ctrlDown = false;
  }

  onVertexDblClick(vertex: Vertex, e: MouseEvent) {
    if (!this.editable) return;
    e.stopPropagation();

    this.graph.deleteVertex(vertex);
  }

  onVertexMouseEnter(vertex: Vertex) {
    this.hoveringVertex = vertex;
  }

  onVertexMouseLeave() {
    this.hoveringVertex = undefined;
  }

  onVertexMouseDown() {
    if (!this.editable) return;

    this.draggingVertex = this.hoveringVertex;
    this.drawingEdge = this.ctrlDown;
  }

  onVertexMouseUp() {
    this.drawingEdge = false;

    if (this.draggingVertex && this.hoveringVertex) {
      const v1 = this.draggingVertex;
      const v2 = this.hoveringVertex;

      if (!this.graph.edgeExists({ v1, v2 }))
        this.graph.addEdge({ v1, v2, weight: 1 });
    }
  }

  discardDrawingAndDragging() {
    this.mousePosition = undefined;

    this.isDraggingVertex = false;
    this.draggingVertex = undefined;

    this.drawingEdge = false;
  }
}
