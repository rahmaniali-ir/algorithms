import { Component } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { ModalCardComponent } from '../../../core/component/modal-card/modal-card.component';
import { FormGroupComponent } from '../../../core/component/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/component/form-label/form-label.component';
import { FormsModule } from '@angular/forms';

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
  target = 0;

  constructor(public modal: ActiveModal) {}

  submitTarget() {
    this.modal.close(this.target);
  }
}
