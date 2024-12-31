import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class StepComponent {
  @Input() header = '';
  @Input() icon = '';
}
