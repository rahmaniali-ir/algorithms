import { Component, Input } from '@angular/core';
import { defaultCategory } from 'src/app/constants/categories';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';
import { Category } from '@type/category';

@Component({
  selector: 'category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.sass'],
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
})
export class CategoryTagComponent {
  @Input() category: Category = defaultCategory;
}
