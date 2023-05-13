import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass'],
})
export class CoinComponent {
  @Input() amount = 0;
  @Input() size = 1;

  @HostBinding('style.--scale-up')
  get scaleUp() {
    return Math.max(0, this.size - 1) * 0.2;
  }
}
