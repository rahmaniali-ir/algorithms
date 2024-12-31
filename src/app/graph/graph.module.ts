import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from '../generic/graph/graph.component';
import { KruskalComponent } from './component/kruskal/kruskal.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { FormsModule } from '@angular/forms';
import { PrimComponent } from './component/prim/prim.component';
import { VertexComponent } from '../generic/vertex/vertex.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        IconModule,
        FormsModule,
        GraphComponent,
        VertexComponent,
        KruskalComponent, PrimComponent,
    ],
})
export class GraphModule {}
