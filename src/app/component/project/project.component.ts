import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { defaultCategory } from 'src/app/config/categories';
import { defaultProject } from 'src/app/config/projects';
import { Project } from 'src/app/type/gallery';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { CategoryTagComponent } from '../category-tag/category-tag.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  standalone: true,
  imports: [SvgIconComponent, CategoryTagComponent, RouterLink, RouterOutlet],
})
export class ProjectComponent {
  constructor(private route: ActivatedRoute) {}

  get project(): Project {
    return this.route.snapshot.children[0].data['project'] || defaultProject;
  }

  get category() {
    return this.project.category || defaultCategory;
  }

  print() {
    window.print();
  }
}
