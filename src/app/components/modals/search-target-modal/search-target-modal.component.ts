import { Component, inject } from '@angular/core';
import { ModalCardComponent } from '../../../core/components/modal-card/modal-card.component';
import { FormGroupComponent } from '../../../core/components/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/components/form-label/form-label.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'search-target-modal',
  templateUrl: './search-target-modal.component.html',
  styleUrls: ['./search-target-modal.component.sass'],
  standalone: true,
  imports: [
    ModalCardComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormsModule,
  ],
})
export class SearchTargetModalComponent {
  readonly modal = inject(MatDialogRef);

  target = 0;

  submitTarget() {
    this.modal.close(this.target);
  }
}
