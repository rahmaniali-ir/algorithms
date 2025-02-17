import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly dialog = inject(MatDialog);

  open<T>(component: any, config?: MatDialogConfig) {
    return this.dialog.open<any, any, T>(component, config);
  }
}
