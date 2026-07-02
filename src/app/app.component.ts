import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 1. Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 2. Add it to the imports array here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MF Admin';
}