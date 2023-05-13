import { Component } from '@angular/core';
import { Coin } from '../../type/coin';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { AddCoinModalComponent } from '../add-coin-modal/add-coin-modal.component';

@Component({
  selector: 'change-coins',
  templateUrl: './change-coins.component.html',
  styleUrls: ['./change-coins.component.sass'],
})
export class ChangeCoinsComponent {
  coins: Coin[] = [
    { amount: 1, size: 1 },
    { amount: 5, size: 2 },
    { amount: 10, size: 2 },
    { amount: 25, size: 2 },
    { amount: 50, size: 3 },
    { amount: 100, size: 3 },
  ];

  constructor(private modal: ModalService) {}

  get sortedCoins() {
    return this.coins.sort((a, b) => b.amount - a.amount);
  }

  addCoin() {
    this.modal.open(AddCoinModalComponent).result.subscribe({
      next: (coins: Coin[]) => {
        this.coins.push(...coins);
      },
      error: () => {},
    });
  }

  clear() {
    this.coins = [];
  }
}
