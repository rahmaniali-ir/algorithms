import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FormGroupComponent {
  @Input() name = '';
}
