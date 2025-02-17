import { Component, HostBinding, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { getRandom } from '@core/util/random';
import { Position } from '@type/position';
import { Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'glass-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.sass',
  host: {
    button: 'true',
  },
})
export class GlassCardComponent {
  private readonly mouse$ = new Subject<Position>();
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

  @HostBinding('class.hovered')
  get isHovering() {
    return this.hovered;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.hovered = true;
    this.pristine = false;

    this.mouse$.next({
      x: e.offsetX,
      y: e.offsetY,
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
  }
}
