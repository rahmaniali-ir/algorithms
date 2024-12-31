import { Component } from '@angular/core';
import { categories } from 'src/app/config/categories';
import { projectsArray } from 'src/app/config/projects';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
  standalone: true,
  imports: [NgFor, ProjectCardComponent, SvgIconComponent],
})
export class GalleryComponent {
  categories = categories;
  projects = projectsArray;
}
