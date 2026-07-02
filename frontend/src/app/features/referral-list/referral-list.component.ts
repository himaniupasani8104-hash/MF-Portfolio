import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referral-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.css']
})
export class ReferralListComponent {
  // Dummy data matching your screenshot
  referrals = [
    {
      sr: 1,
      name: 'Vivek Bajaj',
      arn: '64801',
      mobile: '9890834353',
      email: '',
      invitationDate: '23-03-2023',
      expireDate: '25-03-2023',
      status: 'Pending'
    }
  ];
}