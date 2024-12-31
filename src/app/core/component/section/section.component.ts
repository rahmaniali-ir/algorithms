import { Component, Input } from '@angular/core';
import { SvgIconModule } from '@rahmaniali.ir/angular-svg-icon';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.sass'],
    standalone: true,
    imports: [SvgIconModule],
})
export class SectionComponent {
  @Input() icon = '';
  @Input() header = '';
}
