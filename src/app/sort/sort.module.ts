import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './component/merge-sort/merge-sort.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [MergeSortComponent],
  imports: [CommonModule, CoreModule, IconModule, SearchModule],
})
export class SortModule {}
