import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeCoinsComponent } from './component/change-coins/change-coins.component';
import { CoinComponent } from './component/coin/coin.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { AddCoinModalComponent } from './component/add-coin-modal/add-coin-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChangeCoinsComponent, CoinComponent, AddCoinModalComponent],
  imports: [CommonModule, CoreModule, IconModule, FormsModule],
})
export class ChangeCoinsModule {}
