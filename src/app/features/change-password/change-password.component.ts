import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Added for *ngIf
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'; // <-- Added ReactiveFormsModule for [formGroup]

@Component({
  selector: 'app-change-password',
  standalone: true, // <-- Ensures Angular knows this is a standalone component
  imports: [CommonModule, ReactiveFormsModule], // <-- Tells the HTML it can use *ngIf and formGroup
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Regex for: at least 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 special char
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/;

    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword && confirmPassword !== '') {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  // Convenience getter for easy access to form fields in template
  get f() { return this.changePasswordForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }

    // Connect this to your Node.js backend authentication service here
    const formData = this.changePasswordForm.value;
    console.log('Password change request submitted:', formData);
    
    // Example: this.authService.changePassword(formData).subscribe(...)
  }
}