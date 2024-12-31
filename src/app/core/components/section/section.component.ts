import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class SectionComponent {
  @Input() icon = '';
  @Input() header = '';
}
