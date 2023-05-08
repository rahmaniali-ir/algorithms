import { Component, Input } from '@angular/core';
import { defaultCategory } from 'src/app/config/categories';
import { Category } from 'src/app/type/gallery';

@Component({
  selector: 'category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.sass'],
})
export class CategoryTagComponent {
  @Input() category: Category = defaultCategory;
}
