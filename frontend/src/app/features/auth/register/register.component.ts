import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  isPasswordVisible = false;

  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister() {

    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill all fields.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({

      next: (res) => {

        this.successMessage = "Registration Successful!";
        this.errorMessage = "";

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);

      },

      error: (err) => {

        this.successMessage = "";
        this.errorMessage =
          err.error.message || "Registration Failed";

      }

    });

  }

}