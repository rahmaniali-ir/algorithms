import { Component, Input } from '@angular/core';
import { defaultCategory } from 'src/app/config/categories';
import { Category } from 'src/app/type/gallery';
import { RouterLink } from '@angular/router';
import { SvgIconModule } from '@rahmaniali.ir/angular-svg-icon';

@Component({
    selector: 'category-tag',
    templateUrl: './category-tag.component.html',
    styleUrls: ['./category-tag.component.sass'],
    standalone: true,
    imports: [RouterLink, SvgIconModule],
})
export class CategoryTagComponent {
  @Input() category: Category = defaultCategory;
}
