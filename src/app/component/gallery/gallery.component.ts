import { Component } from '@angular/core';
import { categories } from 'src/app/config/categories';
import { projectsArray } from 'src/app/config/projects';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent {
  categories = categories;
  projects = projectsArray;
}
