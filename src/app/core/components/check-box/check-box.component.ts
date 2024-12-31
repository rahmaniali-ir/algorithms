import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { SvgIconComponent } from '@rahmaniali.ir/angular-svg-icon';

@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.sass'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class CheckBoxComponent {
  @Input()
  @HostBinding('attr.checked')
  value = false;
  @Output() valueChange = new EventEmitter<boolean>();
  @Input() label = '';
  @Input() description = '';
  @Input() uncheckedIcon = 'circle';
  @Input() checkedIcon = 'checkedCircle';

  get icon() {
    return this.value ? this.checkedIcon : this.uncheckedIcon;
  }

  @HostListener('click')
  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}