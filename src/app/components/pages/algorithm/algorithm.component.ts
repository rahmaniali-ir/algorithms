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
  imports: [RouterOutlet],
  templateUrl: './algorithm.component.html',
  styleUrl: './algorithm.component.sass',
})
export class AlgorithmComponent {}
