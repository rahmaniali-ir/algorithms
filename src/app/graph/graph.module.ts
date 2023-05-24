import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './component/graph/graph.component';
import { KruskalComponent } from './component/kruskal/kruskal.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { FormsModule } from '@angular/forms';
import { PrimComponent } from './component/prim/prim.component';
import { VertexComponent } from './component/vertex/vertex.component';

@NgModule({
  declarations: [GraphComponent, KruskalComponent, PrimComponent, VertexComponent],
  imports: [CommonModule, CoreModule, IconModule, FormsModule],
})
export class GraphModule {}