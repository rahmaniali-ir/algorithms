import { Component, inject, Input } from '@angular/core';
import { ModalCardComponent } from '../../../core/components/modal-card/modal-card.component';
import { FormGroupComponent } from '../../../core/components/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/components/form-label/form-label.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'change-coins-modal',
  templateUrl: './change-coins-modal.component.html',
  styleUrls: ['./change-coins-modal.component.sass'],
  standalone: true,
  imports: [
    ModalCardComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormsModule,
  ],
})
export class ChangeCoinsModalComponent {
  readonly modal = inject(MatDialogRef);

  @Input()
  target = 0;

  changeCoins() {
    this.modal.close(this.target);
  }
}
