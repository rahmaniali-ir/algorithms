import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { defaultCategory } from '@const/categories';
import { defaultAlgorithm } from '@const/algorithms';
import { CategoryTagComponent } from '@core/components/category-tag/category-tag.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { Algorithm } from '@type/algorithm';

@Component({
  selector: 'app-algorithm',
  standalone: true,
  imports: [SvgIconComponent, CategoryTagComponent, RouterLink, RouterOutlet],
  templateUrl: './algorithm.component.html',
  styleUrl: './algorithm.component.sass',
})
export class AlgorithmComponent {
  private readonly route = inject(ActivatedRoute);

  get algorithm(): Algorithm {
    return (
      this.route.snapshot.children[0].data['algorithm'] || defaultAlgorithm
    );
  }

  get category() {
    return this.algorithm.category || defaultCategory;
  }

  print() {
    window.print();
  }
}
