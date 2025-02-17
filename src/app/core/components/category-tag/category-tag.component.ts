import { Component, Input } from '@angular/core';
import { defaultCategory } from 'src/app/constants/categories';
import { RouterLink } from '@angular/router';
import { Category } from '@type/category';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.sass'],
  standalone: true,
  imports: [RouterLink, MatIconModule],
})
export class CategoryTagComponent {
  @Input() category: Category = defaultCategory;
}
