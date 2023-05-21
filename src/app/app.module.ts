import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixModule } from './matrix/matrix.module';
import { GalleryComponent } from './component/gallery/gallery.component';
import { IconModule } from './icon-pack';
import { ProjectComponent } from './component/project/project.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { CategoryTagComponent } from './component/category-tag/category-tag.component';
import { SoonComponent } from './component/soon/soon.component';
import { ChangeCoinsModule } from './change-coins/change-coins.module';
import { GraphModule } from './graph/graph.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ProjectComponent,
    ProjectCardComponent,
    CategoryTagComponent,
    SoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    MatrixModule,
    ChangeCoinsModule,
    GraphModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
