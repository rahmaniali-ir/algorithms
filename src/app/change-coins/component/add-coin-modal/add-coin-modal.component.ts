import { Component } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { Coin } from '../../type/coin';
import { ModalCardComponent } from '../../../core/component/modal-card/modal-card.component';
import { NgFor } from '@angular/common';
import { CoinComponent } from '../coin/coin.component';
import { FormGroupComponent } from '../../../core/component/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/component/form-label/form-label.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'add-coin-modal',
    templateUrl: './add-coin-modal.component.html',
    styleUrls: ['./add-coin-modal.component.sass'],
    standalone: true,
    imports: [
        ModalCardComponent,
        NgFor,
        CoinComponent,
        FormGroupComponent,
        FormLabelComponent,
        FormsModule,
    ],
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
