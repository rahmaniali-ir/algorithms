import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './component/matrix/matrix.component';
import { MatrixMultiplicationComponent } from './component/matrix-multiplication/matrix-multiplication.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CreateMatrixModalComponent } from './component/create-matrix-modal/create-matrix-modal.component';
import { IconModule } from '../icon-pack';

@NgModule({
  declarations: [
    MatrixComponent,
    MatrixMultiplicationComponent,
    CreateMatrixModalComponent,
  ],
  imports: [CommonModule, FormsModule, CoreModule, IconModule],
  exports: [MatrixComponent],
})
export class MatrixModule {}
