import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FormGroupComponent {
  @Input() name = '';
  @Output() enter = new EventEmitter();

  @HostListener('keyup.enter')
  onEnter() {
    this.enter.emit();
  }
}
