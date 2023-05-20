import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchComponent } from './component/quick-search/quick-search.component';
import { BinarySearchComponent } from './component/binary-search/binary-search.component';



@NgModule({
  declarations: [
    QuickSearchComponent,
    BinarySearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
