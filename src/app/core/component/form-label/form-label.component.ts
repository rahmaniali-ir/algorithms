import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FormLabelComponent {
  @Input() label = '';
  @Input() target = '';
}
