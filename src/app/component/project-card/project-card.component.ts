import { Component, HostBinding, Input } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, throttleTime } from 'rxjs';
import { defaultProject } from 'src/app/config/projects';
import { Position } from 'src/app/core/type/position';
import { getRandom } from 'src/app/core/util/random';
import { Project } from 'src/app/type/gallery';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { SvgIconModule } from '@rahmaniali.ir/angular-svg-icon';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.sass'],
    standalone: true,
    imports: [
        RouterLink,
        NgFor,
        SvgIconModule,
    ],
})
export class ProjectCardComponent {
  @Input() project: Project = defaultProject;

  private mouse$ = new Subject<Position>();
  mouse: Position;
  hovered = false;
  pristine = true;
  colors: string[] = [];

  constructor() {
    this.mouse = {
      x: Math.random(),
      y: Math.random(),
    };

    const color = getRandom(0, 261);

    this.colors.push(`hsl(${Math.floor(color * 0.8)}deg 100% 50%)`);
    this.colors.push(`hsl(${color}deg 100% 50%)`);
    this.colors.push(`hsl(${Math.floor(color * 1.2)}deg 100% 50%)`);

    this.mouse$.pipe(throttleTime(50)).subscribe((position) => {
      this.mouse = position;
    });
  }

  get category() {
    return this.project.category;
  }

  get position() {
    if (this.pristine) {
      let { x, y } = this.mouse;

      x = 50 - Math.cos(x * Math.PI * 2) * 50;
      y = 50 - Math.sin(y * Math.PI * 2) * 50;

      return {
        x: x + '%',
        y: y + '%',
      };
    }

    if (this.mouse)
      return {
        x: this.mouse.x + 'px',
        y: this.mouse.y + 'px',
      };

    return {
      x: 0,
      y: 0,
    };
  }

  @HostBinding('class')
  get className() {
    return this.project.className || '';
  }

  onMouseMove(e: MouseEvent) {
    this.hovered = true;
    this.pristine = false;

    this.mouse$.next({
      x: e.offsetX,
      y: e.offsetY,
    });
  }

  onMouseLeave() {
    this.hovered = false;
  }
}
