import { NgModule } from '@angular/core';
import { ModalCardComponent } from './component/modal-card/modal-card.component';
import { IconModule } from '../icon-pack';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { FormLabelComponent } from './component/form-label/form-label.component';
import { FormGroupComponent } from './component/form-group/form-group.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { StepComponent } from './component/step/step.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ModalCardComponent,
    CheckBoxComponent,
    FormLabelComponent,
    FormGroupComponent,
    PageHeaderComponent,
    StepComponent,
  ],
  imports: [CommonModule, IconModule, RouterModule],
  exports: [
    ModalCardComponent,
    CheckBoxComponent,
    FormLabelComponent,
    FormGroupComponent,
    PageHeaderComponent,
    StepComponent,
  ],
})
export class CoreModule {}
