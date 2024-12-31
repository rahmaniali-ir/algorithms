import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectComponent } from './component/project/project.component';
import { projectsArray } from './constants/projects';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
    children: projectsArray.map((project) => ({
      path: project.id,
      component: project.component,
      data: { project },
    })),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
