import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixModule } from './matrix/matrix.module';
import { GalleryComponent } from './component/gallery/gallery.component';
import { IconModule } from './icon-pack';
import { ProjectComponent } from './component/project/project.component';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent, GalleryComponent, ProjectComponent],
  imports: [BrowserModule, AppRoutingModule, MatrixModule, IconModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
