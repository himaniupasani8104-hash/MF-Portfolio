// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [CommonModule, RouterModule], 
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   // Level 1: Main Sidebar to Flyout
//   hoveredMenu: string | null = null;
//   flyoutTop: number = 0;

//   // Level 2: Flyout to Nested Sub-Flyout
//   hoveredSubMenu: string | null = null;
//   subFlyoutTop: number = 0;

//   // --- Main Flyout Logic ---
//   openFlyout(menu: string, event: MouseEvent) {
//     this.hoveredMenu = menu;
//     const element = event.currentTarget as HTMLElement;
//     this.flyoutTop = element.getBoundingClientRect().top; 
//   }

//   closeFlyout() {
//     this.hoveredMenu = null;
//     this.hoveredSubMenu = null; // Close nested menus if the main one closes
//   }

//   // --- Nested Sub-Flyout Logic ---
//   openSubFlyout(subMenu: string, event: MouseEvent) {
//     this.hoveredSubMenu = subMenu;
//     const element = event.currentTarget as HTMLElement;
//     this.subFlyoutTop = element.getBoundingClientRect().top;
//   }

//   closeSubFlyout() {
//     this.hoveredSubMenu = null;
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Level 1: Main Sidebar to Flyout
  hoveredMenu: string | null = null;
  flyoutTop: number = 0;

  // Level 2: Flyout to Nested Sub-Flyout
  hoveredSubMenu: string | null = null;
  subFlyoutTop: number = 0;

  // --- Modal Logic ---
  isInviteModalOpen: boolean = false;

  // --- Main Flyout Logic ---
  openFlyout(menu: string, event: MouseEvent) {
    this.hoveredMenu = menu;
    const element = event.currentTarget as HTMLElement;
    this.flyoutTop = element.getBoundingClientRect().top; 
  }

  closeFlyout() {
    this.hoveredMenu = null;
    this.hoveredSubMenu = null; 
  }

  // --- Nested Sub-Flyout Logic ---
  openSubFlyout(subMenu: string, event: MouseEvent) {
    this.hoveredSubMenu = subMenu;
    const element = event.currentTarget as HTMLElement;
    this.subFlyoutTop = element.getBoundingClientRect().top;
  }

  closeSubFlyout() {
    this.hoveredSubMenu = null;
  }

  // --- Modal Open/Close Methods ---
  openInviteModal(event: Event) {
    event.preventDefault(); // Prevents standard link navigation
    this.isInviteModalOpen = true;
    this.closeFlyout(); // Hide the sidebar flyout when modal opens
  }

  closeInviteModal() {
    this.isInviteModalOpen = false;
  }
}