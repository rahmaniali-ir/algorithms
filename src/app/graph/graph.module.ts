import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './component/graph/graph.component';
import { KruskalComponent } from './component/kruskal/kruskal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [GraphComponent, KruskalComponent],
  imports: [CommonModule, CoreModule],
})
export class GraphModule {}
