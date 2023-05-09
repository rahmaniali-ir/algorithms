import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass'],
})
export class StepComponent {
  @Input() header = '';
  @Input() icon = '';
}
