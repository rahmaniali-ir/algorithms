import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
  standalone: true,
  imports: [MatIconModule],
})
export class SectionComponent {
  @Input() icon = '';
  @Input() header = '';
}
