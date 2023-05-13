import { Component } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { Coin } from '../../type/coin';

@Component({
  selector: 'add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.sass'],
})
export class AddCoinModalComponent {
  amount = 1;
  size = 1;
  count = 1;

  constructor(public modal: ActiveModal) {}

  get coins(): Coin[] {
    return Array(this.count).fill({ amount: this.amount, size: this.size });
  }

  addCoin() {
    this.modal.close(this.coins);
  }
}
