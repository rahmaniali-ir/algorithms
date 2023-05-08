import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defaultCategory } from 'src/app/config/categories';
import { defaultProject } from 'src/app/config/projects';
import { Project } from 'src/app/type/gallery';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent {
  constructor(private route: ActivatedRoute) {}

  get project(): Project {
    return this.route.snapshot.children[0].data['project'] || defaultProject;
  }

  get category() {
    return this.project.category || defaultCategory;
  }
}
