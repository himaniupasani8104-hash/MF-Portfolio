import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  primaryStats = [
    { title: 'Click to Transact', value: '₹12.5 Cr', trend: '▲ 8.2% this month', isPositive: true, icon: '🖱️', color: 'blue' },
    { title: "Today's AUM", value: '₹45.8 Cr', trend: '▲ 12.5% vs last month', isPositive: true, icon: '💼', color: 'green' },
    { title: 'Active SIPs', value: '2,847', trend: '▲ 156 this month', isPositive: true, icon: '🔁', color: 'purple' },
    { title: 'Active Clients', value: '1,234', trend: '▲ 42 this week', isPositive: true, icon: '👥', color: 'orange' }
  ];

  secondaryStats = [
    { title: 'Total Families', value: '892', subtext: 'Stable', icon: '🏠', color: 'blue' },
    { title: 'SIP Input', value: '₹8.2 Cr', subtext: '▲ 15.3% MoM', isPositive: true, icon: '📈', color: 'green' },
    { title: 'SMS Left', value: '4,567', subtext: 'Out of 10,000', icon: '📱', color: 'purple' },
    { title: 'Client Logins', value: '567', subtext: 'Today', icon: '👤', color: 'teal' },
    { title: 'BO/SubBroker Logins', value: '127', subtext: 'Today', icon: '🏛️', color: 'blue' }
  ];

  performanceList = [
    { label: 'Lumpsum Performance', value: '▲ 9.42%' },
    { label: 'SIP Performance', value: '▲ 12.36%' },
    { label: 'SWP Performance', value: '▲ 6.31%' },
    { label: 'STP Performance', value: '▲ 5.84%' },
    { label: 'Lumpsum Comparison', value: '▲ 7.18%' },
    { label: 'SIP Comparison', value: '▲ 12.36%' }
  ];
}