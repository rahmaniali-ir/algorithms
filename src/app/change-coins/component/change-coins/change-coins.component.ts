import { Component } from '@angular/core';
import { Coin } from '../../type/coin';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { AddCoinModalComponent } from '../add-coin-modal/add-coin-modal.component';
import { GreedyStep } from 'src/type/greedy';
import { ChangeCoinsModalComponent } from '../change-coins-modal/change-coins-modal.component';
import { SectionComponent } from '../../../core/component/section/section.component';
import { NgIf, NgFor } from '@angular/common';
import { SvgIconModule } from '@rahmaniali.ir/angular-svg-icon';
import { CoinComponent } from '../coin/coin.component';
import { StepComponent } from '../../../core/component/step/step.component';

@Component({
    selector: 'change-coins',
    templateUrl: './change-coins.component.html',
    styleUrls: ['./change-coins.component.sass'],
    standalone: true,
    imports: [
        SectionComponent,
        NgIf,
        SvgIconModule,
        NgFor,
        CoinComponent,
        StepComponent,
    ],
})
export class ChangeCoinsComponent {
  coins: Coin[] = [
    { amount: 1, size: 1 },
    { amount: 5, size: 2 },
    { amount: 10, size: 2 },
    { amount: 12, size: 2 },
    { amount: 25, size: 2 },
  ];
  target = 0;

  constructor(private modal: ModalService) {}

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
    this.modal.open(AddCoinModalComponent).result.subscribe({
      next: (coins: Coin[]) => {
        this.coins.push(...coins);
      },
      error: () => {},
    });
  }

  change() {
    this.modal
      .open(ChangeCoinsModalComponent, {
        input: { target: this.target },
      })
      .result.subscribe({
        next: (target: number) => {
          this.target = target;
        },
        error: () => {},
      });
  }

  clear() {
    this.coins = [];
    this.target = 0;
  }
}
