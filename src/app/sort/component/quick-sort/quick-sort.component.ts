import { Component } from '@angular/core';
import { MetaArray } from 'src/app/generic/array/model/meta-array';
import { SectionComponent } from '../../../core/components/section/section.component';
import { ArrayComponent } from '../../../generic/array/array.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.sass'],
  standalone: true,
  imports: [SectionComponent, ArrayComponent, SvgIconComponent],
})
export class QuickSortComponent {
  input = new MetaArray<number>([15, 22, 13, 27, 12, 10, 20, 25]);

  sort() {}
}
