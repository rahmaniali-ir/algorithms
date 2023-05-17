import { Component, Input } from '@angular/core';
import { defaultProject } from 'src/app/config/projects';
import { Position } from 'src/app/core/type/position';
import { getRandom } from 'src/app/core/util/random';
import { Project } from 'src/app/type/gallery';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent {
  @Input() project: Project = defaultProject;
  mouse?: Position;
  colors: string[] = [];

  constructor() {
    const color = getRandom(0, 261);

    this.colors.push(`hsl(${Math.floor(color * 0.8)}deg 100% 50%)`);
    this.colors.push(`hsl(${color}deg 100% 50%)`);
    this.colors.push(`hsl(${Math.floor(color * 1.2)}deg 100% 50%)`);
  }

  get category() {
    return this.project.category;
  }

  get hovered() {
    return !!this.mouse;
  }

  onMouseMove(e: MouseEvent) {
    this.mouse = {
      x: e.offsetX,
      y: e.offsetY,
    };
  }

  onMouseLeave() {
    this.mouse = undefined;
  }
}
