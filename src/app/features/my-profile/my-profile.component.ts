import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  currentStep: number = 1;
  isSubmitted: boolean = false; // New flag to track final submission

  profile = {
    // Step 1 Details
    advisorName: 'vijay deshpande',
    firmName: '',
    officeAddress: '',
    city: 'Nagpur',
    state: 'Maharashtra',
    phone: '',
    mobile: '9822367691',
    email: 'vijayk21deshpande@gmail.com',
    residentialAddress: '',
    websiteUrl: '',

    // Step 2 Details
    arnNumber: '86714',
    arnHolderName: 'vijay deshpande',
    dob: '1965-06-17',
    arnExpiry: '2027-10-01',
    euin: '',
    camsMailId: 'vijayk21deshpande@gmail.com',
    karvyMailId: 'vijayk21deshpande@gmail.com',
    camsFundsnetId: '',
    camsFundsnetPassword: '',
    arnPan: '',
    arnAddress: '',
    gstNo: '',
    qPlaceOfBirth: '',
    qMobileHandset: '',
    qVehicle: '',
    qColor: '',
    qWatch: '',
    qBankAccount: '',
    qCartoon: '',
    qBirthdayMonth: '',

    // Step 3 Details
    billingName: 'Vijay Deshpande',
    billingAddress: '112A Saroj Appartment, pande layout, khamla.',
    billingGst: '',
    billingCity: 'Nagpur',
    billingPincode: '440025',
    billingState: 'Maharashtra',

    // Step 4 Details (Other Settings)
    clientDefaultPassword: 'Vijay@123',
    smsSuffix: 'Thankyou - vijay deshpande',
    playStoreLink: '',
    emailSignature: 'Thanks & Regards\nvijay deshpande',
    emailDisclaimer: 'This is an auto generated report. Hence, if any discrepancy found, kindly report it to us as soon as possible.',
    pdfDisclaimer: '',
    firmTitle: 'Arhamantha',
    firmSubTitle: '',
    preferredColumns: '17',
    whatsappLanguage: 'English',
    
    // Step 4 Checkboxes
    showKeyFigures: true,
    clientLoginNotification: false,
    enableTrxnMovementPopup: true,
    enableSmsToClients: true,
    alwaysBccValuation: false,
    enableDivP: true,
    enableLogoPdfReporting: false,
    rtProfileDataDefault: true,
    enableWatermarkPdf: false,
    enableMailerBday: true,
    senderAdvisorDefault: false
  };

  continueProfile(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
    console.log('Continuing to step:', this.currentStep, 'Current Data:', this.profile);
  }

  backProfile(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.isSubmitted = false; // Reset the submit flag if they go back
    }
  }

  saveProfile(): void {
    console.log('Profile saved temporarily!', this.profile);
  }

  submitProfile(): void {
    this.isSubmitted = true; // Mark as submitted to trigger the checkmark
    console.log('Final Form Submitted!', this.profile);
    alert('Settings Submitted Successfully!');
  }
}