import {
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';

@Component({
    selector: 'form-label',
    templateUrl: './form-label.component.html',
    styleUrls: ['./form-label.component.sass'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
})
export class FormLabelComponent implements OnInit {
  @Input() label = '';
  @Input() target = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const autofocusElement = this.el.nativeElement.querySelector(
      '[autofocus]'
    ) as HTMLInputElement;
    if (autofocusElement && 'focus' in autofocusElement)
      autofocusElement.focus();
  }
}
