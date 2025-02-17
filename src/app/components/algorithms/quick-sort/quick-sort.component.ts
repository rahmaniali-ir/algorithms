import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArrayComponent } from '@components/common/array/array.component';
import { SectionComponent } from '@core/components/section/section.component';
import { MetaArray } from '@models/meta-array';

@Component({
  selector: 'quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.sass'],
  standalone: true,
  imports: [SectionComponent, ArrayComponent, MatIconModule],
})
export class QuickSortComponent {
  input = new MetaArray<number>([15, 22, 13, 27, 12, 10, 20, 25]);

  sort() {}
}
