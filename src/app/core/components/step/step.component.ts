import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass'],
  standalone: true,
  imports: [MatIconModule],
})
export class StepComponent {
  @Input() header = '';
  @Input() icon = '';
}
