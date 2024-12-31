import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AlgorithmComponent } from '@components/pages/algorithm/algorithm.component';
import { algorithmsArray } from '@const/algorithms';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'algorithm',
    component: AlgorithmComponent,
    children: algorithmsArray.map((algorithm) => ({
      path: algorithm.id,
      component: algorithm.component,
      data: { algorithm },
    })),
  },
  { path: '**', redirectTo: '' },
];
