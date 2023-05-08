import { Component, Input } from '@angular/core';
import { defaultProject } from 'src/app/config/projects';
import { Project } from 'src/app/type/gallery';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent {
  @Input() project: Project = defaultProject;

  get category() {
    return this.project.category;
  }
}
