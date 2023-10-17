import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginSuccessDialogComponent } from '../login-success-dialog/login-success-dialog.component';
import { LoginFailureDialogComponent } from '../login-failure-dialog/login-failure-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private dialog: MatDialog,private authService: AuthService, private router: Router) {}

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      const dialogRef = this.dialog.open(LoginSuccessDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.dialog.open(LoginFailureDialogComponent);
    }
  }
}