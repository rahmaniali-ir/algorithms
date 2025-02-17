import { Component, ViewEncapsulation, Input, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.sass'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule],
})
export class ModalCardComponent {
  readonly modal = inject(MatDialogRef);

  @Input() header = '';
  @Input() description = '';
}
