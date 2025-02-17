import { Component, inject } from '@angular/core';
import { Coin } from '../../../types/coin';
import { AddCoinModalComponent } from '../../modals/add-coin-modal/add-coin-modal.component';
import { GreedyStep } from '@type/greedy';
import { ChangeCoinsModalComponent } from '../../modals/change-coins-modal/change-coins-modal.component';
import { SectionComponent } from '../../../core/components/section/section.component';
import { CoinComponent } from '../../common/coin/coin.component';
import { StepComponent } from '../../../core/components/step/step.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '@core/services/modal.service';

@Component({
  selector: 'change-coins',
  templateUrl: './change-coins.component.html',
  styleUrls: ['./change-coins.component.sass'],
  standalone: true,
  imports: [SectionComponent, MatIconModule, CoinComponent, StepComponent],
})
export class ChangeCoinsComponent {
  private readonly modal = inject(ModalService);

  coins: Coin[] = [
    { amount: 1, size: 1 },
    { amount: 5, size: 2 },
    { amount: 10, size: 2 },
    { amount: 12, size: 2 },
    { amount: 25, size: 2 },
  ];
  target = 0;

  get sortedCoins() {
    return this.coins.sort((a, b) => b.amount - a.amount);
  }

  get changedCoins() {
    if (!this.sortedCoins.length || !this.target) return [];

    const steps: GreedyStep<Coin[]>[] = [];
    const selectedCoins: Coin[] = [];
    let selectedAmount = 0;

    for (let i = 0; i < this.sortedCoins.length; i++) {
      const coin = this.sortedCoins[i];

      let feasibility = `${selectedAmount} + ${coin.amount} <= ${this.target}`;
      let solution = `${selectedAmount} ?= ${this.target}`;

      if (selectedAmount + coin.amount > this.target) {
        steps.push({
          step: i,
          selection: [...selectedCoins, coin],
          feasibility,
          feasibilityCheck: false,
          solution,
          solutionCheck: false,
        });
        continue;
      }

      selectedCoins.push(coin);
      selectedAmount += coin.amount;

      feasibility = `${selectedAmount} + ${coin.amount} <= ${this.target}`;
      solution = `${selectedAmount} ?= ${this.target}`;

      if (selectedAmount === this.target) {
        steps.push({
          step: i,
          selection: [...selectedCoins],
          feasibility,
          feasibilityCheck: true,
          solution,
          solutionCheck: true,
        });

        return steps;
      }

      steps.push({
        step: i,
        selection: [...selectedCoins],
        feasibility,
        feasibilityCheck: true,
        solution,
        solutionCheck: false,
      });
    }

    return steps;
  }

  get solution() {
    return this.changedCoins.length
      ? this.changedCoins[this.changedCoins.length - 1]
      : undefined;
  }

  get problemSolved() {
    return !!this.solution?.solutionCheck;
  }

  trackBySortedCoin(index: number) {
    return this.sortedCoins?.[index] || {};
  }

  trackByChangedCoin(index: number) {
    return this.changedCoins?.[index] || {};
  }

  trackByStepSelection(step: GreedyStep<Coin[]>) {
    return (index: number) => step.selection?.[index] || {};
  }

  addCoin() {
    this.modal
      .open<Coin[]>(AddCoinModalComponent)
      .afterClosed()
      .subscribe({
        next: (coins) => {
          if (coins) this.coins.push(...coins);
        },
        error: () => {},
      });
  }

  change() {
    this.modal
      .open<number>(ChangeCoinsModalComponent, {
        data: { target: this.target },
      })
      .afterClosed()
      .subscribe({
        next: (target) => {
          if (target) this.target = target;
        },
        error: () => {},
      });
  }

  clear() {
    this.coins = [];
    this.target = 0;
  }
}
