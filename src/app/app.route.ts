import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AlgorithmComponent } from '@components/pages/algorithm/algorithm.component';
import { projectsArray } from '@const/projects';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'algorithm',
    component: AlgorithmComponent,
    children: projectsArray.map((project) => ({
      path: project.id,
      component: project.component,
      data: { project },
    })),
  },
  { path: '**', redirectTo: '' },
];
