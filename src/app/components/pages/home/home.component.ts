import { Component } from '@angular/core';
import { categories } from '@const/categories';
import { projectsArray } from '@const/projects';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '@core/components/project-card/project-card.component';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  standalone: true,
  imports: [NgFor, ProjectCardComponent, SvgIconComponent],
})
export class HomeComponent {
  readonly categories = categories;
  readonly projects = projectsArray;
}
