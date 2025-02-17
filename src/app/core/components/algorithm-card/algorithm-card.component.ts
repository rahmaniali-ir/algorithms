import { Component, Input } from '@angular/core';
import { defaultAlgorithm } from '@const/algorithms';
import { Algorithm } from '@type/algorithm';
import { RouterLink } from '@angular/router';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'algorithm-card',
  templateUrl: './algorithm-card.component.html',
  styleUrls: ['./algorithm-card.component.sass'],
  standalone: true,
  imports: [RouterLink, GlassCardComponent, MatIconModule],
})
export class AlgorithmCardComponent {
  @Input() algorithm: Algorithm = defaultAlgorithm;

  get category() {
    return this.algorithm.category;
  }
}
