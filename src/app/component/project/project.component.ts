import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defaultCategory } from 'src/app/config/categories';
import { Project } from 'src/app/type/gallery';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent {
  constructor(private route: ActivatedRoute) {}

  get project(): Project {
    return this.route.snapshot.children[0].data['project'];
  }

  get category() {
    return this.project.category || defaultCategory;
  }

  get projectName() {
    return this.project.name || 'Project';
  }

  get projectIcon() {
    return this.project.icon || '';
  }

  get categoryId() {
    return this.category.id;
  }

  get categoryName() {
    return this.category.name;
  }

  get categoryIcon() {
    return this.category.icon;
  }

  get categoryLink() {
    return `/?category=${this.category.id}`;
  }
}
