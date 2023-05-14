import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixMultiplicationComponent } from './matrix/component/matrix-multiplication/matrix-multiplication.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ProjectComponent } from './component/project/project.component';
import { projects } from './config/projects';
import { QuickSearchComponent } from './search/component/quick-search/quick-search.component';
import { SoonComponent } from './component/soon/soon.component';
import { ChangeCoinsComponent } from './change-coins/component/change-coins/change-coins.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GalleryComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      {
        path: projects.chainedMatrixMultiplication.id,
        component: MatrixMultiplicationComponent,
        data: { project: projects.chainedMatrixMultiplication },
      },
      {
        path: projects.quickSearch.id,
        component: SoonComponent,
        data: { project: projects.quickSearch },
      },
      {
        path: projects.minimumPathFinding.id,
        component: SoonComponent,
        data: { project: projects.minimumPathFinding },
      },
      {
        path: projects.mergeSort.id,
        component: SoonComponent,
        data: { project: projects.mergeSort },
      },
      {
        path: projects.changeCoins.id,
        component: ChangeCoinsComponent,
        data: { project: projects.changeCoins },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}