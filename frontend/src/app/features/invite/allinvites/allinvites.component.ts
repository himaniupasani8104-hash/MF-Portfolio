import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this if you plan to use *ngIf or *ngFor

@Component({
  selector: 'app-allinvites', // Angular generated this selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allinvites.component.html',
  styleUrls: ['./allinvites.component.css']
})
export class AllinvitesComponent {} // Notice the new class name