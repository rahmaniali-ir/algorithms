import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixModule } from './matrix/matrix.module';
import { GalleryComponent } from './component/gallery/gallery.component';
import { IconModule } from './icon-pack';
import { ProjectComponent } from './component/project/project.component';
import { SearchModule } from './search/search.module';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { CategoryTagComponent } from './component/category-tag/category-tag.component';
import { SoonComponent } from './component/soon/soon.component';

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
    MatrixModule,
    IconModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
