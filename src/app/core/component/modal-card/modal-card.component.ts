import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';

@Component({
  selector: 'modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalCardComponent {
  @Input() header = '';
  @Input() description = '';

  constructor(public modal: ActiveModal) {}
}
