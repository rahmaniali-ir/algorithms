import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './component/merge-sort/merge-sort.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { ArrayComponent } from '../generic/array/array.component';
import { QuickSortComponent } from './component/quick-sort/quick-sort.component';

@NgModule({
  declarations: [MergeSortComponent, QuickSortComponent],
  imports: [CommonModule, CoreModule, IconModule, ArrayComponent],
})
export class SortModule {}
