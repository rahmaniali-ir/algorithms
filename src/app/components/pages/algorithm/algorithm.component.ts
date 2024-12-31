import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { defaultCategory } from '@const/categories';
import { defaultProject } from '@const/projects';
import { CategoryTagComponent } from '@core/components/category-tag/category-tag.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { Project } from '@type/gallery';

@Component({
  selector: 'app-algorithm',
  standalone: true,
  imports: [SvgIconComponent, CategoryTagComponent, RouterLink, RouterOutlet],
  templateUrl: './algorithm.component.html',
  styleUrl: './algorithm.component.sass',
})
export class AlgorithmComponent {
  private readonly route = inject(ActivatedRoute);

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
