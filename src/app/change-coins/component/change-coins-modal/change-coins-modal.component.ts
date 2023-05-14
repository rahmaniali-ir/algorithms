import { Component, Input } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';

@Component({
  selector: 'change-coins-modal',
  templateUrl: './change-coins-modal.component.html',
  styleUrls: ['./change-coins-modal.component.sass'],
})
export class ChangeCoinsModalComponent {
  @Input()
  target = 0;

  constructor(public modal: ActiveModal) {}

  changeCoins() {
    this.modal.close(this.target);
  }
}
