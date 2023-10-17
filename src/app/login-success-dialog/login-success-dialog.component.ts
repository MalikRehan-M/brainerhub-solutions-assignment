import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-success-dialog',
  templateUrl: './login-success-dialog.component.html',
  styleUrls: ['./login-success-dialog.component.css']
})
export class LoginSuccessDialogComponent {
  constructor(private dialogRef: MatDialogRef<LoginSuccessDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
