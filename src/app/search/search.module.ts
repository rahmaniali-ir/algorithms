import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinarySearchComponent } from './component/binary-search/binary-search.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { ArrayComponent } from '../generic/array/array.component';
import { FormsModule } from '@angular/forms';
import { SearchTargetModalComponent } from './component/search-target-modal/search-target-modal.component';

@NgModule({
  declarations: [BinarySearchComponent, SearchTargetModalComponent],
  imports: [CommonModule, CoreModule, IconModule, FormsModule, ArrayComponent],
})
export class SearchModule {}
