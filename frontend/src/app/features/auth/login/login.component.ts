import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailModel = '';
  passwordModel = '';
  rememberMe = false;
  isPasswordVisible = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSignIn() {

    const loginData = {
      email: this.emailModel,
      password: this.passwordModel
    };

    this.authService.login(loginData).subscribe({

      next: (res: any) => {

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        this.errorMessage = '';

        this.router.navigate(['/dashboard']);

      },

      error: (err: any) => {

        this.errorMessage =
          err.error.message || 'Incorrect email or password.';

      }

    });

  }

}