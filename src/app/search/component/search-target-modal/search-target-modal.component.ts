import { Component } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';

@Component({
  selector: 'search-target-modal',
  templateUrl: './search-target-modal.component.html',
  styleUrls: ['./search-target-modal.component.sass'],
})
export class SearchTargetModalComponent {
  target = 0;

  constructor(public modal: ActiveModal) {}

  submitTarget() {
    this.modal.close(this.target);
  }
}
