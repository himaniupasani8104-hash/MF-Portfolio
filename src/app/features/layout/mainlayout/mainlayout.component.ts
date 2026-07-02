import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component'; 
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent], 
  templateUrl: './mainlayout.component.html', // Fixed template name
  styleUrls: ['./mainlayout.component.css']   // Fixed to .css
})
export class MainlayoutComponent {} // Fixed class name to match file