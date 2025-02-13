import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.sass'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [SvgIconComponent],
})
export class ModalCardComponent {
  @Input() header = '';
  @Input() description = '';

  constructor(public modal: ActiveModal) {}
}
