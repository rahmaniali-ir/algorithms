import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectComponent } from './component/project/project.component';
import { projectsArray } from './constants/projects';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
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
