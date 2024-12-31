import { Component, Input } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { ModalCardComponent } from '../../../core/component/modal-card/modal-card.component';
import { FormGroupComponent } from '../../../core/component/form-group/form-group.component';
import { FormLabelComponent } from '../../../core/component/form-label/form-label.component';
import { FormsModule } from '@angular/forms';

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
  @Input()
  target = 0;

  constructor(public modal: ActiveModal) {}

  changeCoins() {
    this.modal.close(this.target);
  }
}
