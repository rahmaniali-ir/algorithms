import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchComponent } from './component/quick-search/quick-search.component';
import { BinarySearchComponent } from './component/binary-search/binary-search.component';
import { CoreModule } from '../core/core.module';
import { IconModule } from '../icon-pack';
import { ArrayComponent } from './component/array/array.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuickSearchComponent, BinarySearchComponent, ArrayComponent],
  imports: [CommonModule, CoreModule, IconModule, FormsModule],
})
export class SearchModule {}
