import { Component } from '@angular/core';
import { MetaArray } from 'src/app/generic/array/model/meta-array';

@Component({
  selector: 'quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.sass'],
})
export class QuickSortComponent {
  input = new MetaArray<number>([15, 22, 13, 27, 12, 10, 20, 25]);

  sort() {}
}
