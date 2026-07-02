import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  // Starting empty so you actually have to type it!
  emailModel: string = ''; 
  passwordModel: string = '';
  rememberMe: boolean = false;
  isPasswordVisible: boolean = false;
  
  // New variable to hold our error message
  errorMessage: string = ''; 

  // Hardcoded credentials for testing
  private readonly VALID_EMAIL = 'admin@example.com';
  private readonly VALID_PASS = 'Admin123';

  constructor(private router: Router) {}

  onSignIn() {
    // Check if the inputs match our hardcoded values
    if (this.emailModel === this.VALID_EMAIL && this.passwordModel === this.VALID_PASS) {
      // Success! Clear any errors and navigate
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      // Fail! Show an error message on the screen
      this.errorMessage = 'Incorrect email or password. Please try again.';
    }
  }
}