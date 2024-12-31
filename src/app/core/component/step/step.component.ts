import { Component, Input } from '@angular/core';
import { SvgIconModule } from '@rahmaniali.ir/angular-svg-icon';

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.sass'],
    standalone: true,
    imports: [SvgIconModule],
})
export class StepComponent {
  @Input() header = '';
  @Input() icon = '';
}
