import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixMultiplicationComponent } from './component/matrix-multiplication/matrix-multiplication.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CreateMatrixModalComponent } from './component/create-matrix-modal/create-matrix-modal.component';
import { IconModule } from '../icon-pack';
import { MatrixComponent } from '../generic/matrix/matrix.component';

@NgModule({
    imports: [CommonModule, FormsModule, CoreModule, IconModule, MatrixComponent, MatrixMultiplicationComponent, CreateMatrixModalComponent],
})
export class MatrixModule {}
