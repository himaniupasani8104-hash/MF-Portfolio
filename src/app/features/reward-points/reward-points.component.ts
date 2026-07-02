import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.css']
})
export class RewardPointsComponent {
  // Empty array to match your screenshot. 
  // You can push data into this array later to populate the table.
  rewards: any[] = []; 

  // Helper getters to calculate totals automatically when data is added
  get totalCredited(): number {
    return this.rewards.reduce((sum, item) => sum + (item.credited || 0), 0);
  }

  get totalDebited(): number {
    return this.rewards.reduce((sum, item) => sum + (item.debited || 0), 0);
  }

  get totalBalance(): number {
    return this.rewards.reduce((sum, item) => sum + (item.balance || 0), 0);
  }
}