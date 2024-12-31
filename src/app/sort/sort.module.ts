import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './component/merge-sort/merge-sort.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { ArrayComponent } from '../generic/array/array.component';
import { QuickSortComponent } from './component/quick-sort/quick-sort.component';

@NgModule({
    imports: [CommonModule, CoreModule, IconModule, ArrayComponent, MergeSortComponent, QuickSortComponent],
})
export class SortModule {}
