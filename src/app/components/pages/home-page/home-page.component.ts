import { Component } from '@angular/core';
import { categories } from '@const/categories';
import { projectsArray } from '@const/projects';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '@core/components/project-card/project-card.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  standalone: true,
  imports: [NgFor, ProjectCardComponent, SvgIconComponent],
})
export class HomePageComponent {
  readonly categories = categories;
  readonly projects = projectsArray;
}
