import { Component, Input } from '@angular/core';
import { defaultAlgorithm } from '@const/algorithms';
import { Algorithm } from '@type/algorithm';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { GlassCardComponent } from '../glass-card/glass-card.component';

@Component({
  selector: 'algorithm-card',
  templateUrl: './algorithm-card.component.html',
  styleUrls: ['./algorithm-card.component.sass'],
  standalone: true,
  imports: [RouterLink, GlassCardComponent, SvgIconComponent],
})
export class AlgorithmCardComponent {
  @Input() algorithm: Algorithm = defaultAlgorithm;

  get category() {
    return this.algorithm.category;
  }
}
