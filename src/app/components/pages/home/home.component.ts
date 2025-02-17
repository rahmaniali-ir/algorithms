import { Component } from '@angular/core';
import { categories } from '@const/categories';
import { algorithmsArray } from '@const/algorithms';
import { AlgorithmsComponent } from '../algorithms/algorithms.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  standalone: true,
  imports: [AlgorithmsComponent, MatIconModule],
})
export class HomeComponent {
  readonly categories = categories;
  readonly algorithms = algorithmsArray;
}
