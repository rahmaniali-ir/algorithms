import { Component } from '@angular/core';
import { categories } from '@const/categories';
import { algorithmsArray } from '@const/algorithms';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { AlgorithmsComponent } from '../algorithms/algorithms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  standalone: true,
  imports: [AlgorithmsComponent, SvgIconComponent],
})
export class HomeComponent {
  readonly categories = categories;
  readonly algorithms = algorithmsArray;
}
