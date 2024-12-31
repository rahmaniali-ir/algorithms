import { NgModule } from '@angular/core';
import { ModalCardComponent } from './component/modal-card/modal-card.component';
import { IconModule } from '../icon-pack';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { FormLabelComponent } from './component/form-label/form-label.component';
import { FormGroupComponent } from './component/form-group/form-group.component';
import { RouterModule } from '@angular/router';
import { StepComponent } from './component/step/step.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './component/section/section.component';

@NgModule({
    imports: [CommonModule, IconModule, RouterModule, ModalCardComponent,
        CheckBoxComponent,
        FormLabelComponent,
        FormGroupComponent,
        StepComponent,
        SectionComponent],
    exports: [
        ModalCardComponent,
        CheckBoxComponent,
        FormLabelComponent,
        FormGroupComponent,
        StepComponent,
        SectionComponent,
    ],
})
export class CoreModule {}
