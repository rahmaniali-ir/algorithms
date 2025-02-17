import { Component, inject } from '@angular/core';
import { Coin } from '../../../types/coin';
import { ModalCardComponent } from '../../../core/components/modal-card/modal-card.component';
import { CoinComponent } from '../../common/coin/coin.component';
import { FormGroupComponent } from '../../../core/components/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/components/form-label/form-label.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.sass'],
  standalone: true,
  imports: [
    ModalCardComponent,
    CoinComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormsModule,
  ],
})
export class AddCoinModalComponent {
  readonly modal = inject(MatDialogRef);

  amount = 1;
  size = 1;
  count = 1;

  get coins(): Coin[] {
    return Array(this.count).fill({ amount: this.amount, size: this.size });
  }

  addCoin() {
    this.modal.close(this.coins);
  }
}
