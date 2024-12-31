import { Component } from '@angular/core';
import { algorithmsArray } from '@const/algorithms';
import { AlgorithmCardComponent } from '@core/components/algorithm-card/algorithm-card.component';

@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [AlgorithmCardComponent],
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.sass',
})
export class AlgorithmsComponent {
  readonly algorithms = algorithmsArray;
}
