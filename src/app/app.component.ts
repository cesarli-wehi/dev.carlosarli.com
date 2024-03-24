import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainComponent } from "./layouts/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` 
  <app-main></app-main>
  `,
  styles: [
    `
      
    `,
  ],
  imports: [RouterOutlet, NavbarComponent, MainComponent]
})
export class AppComponent { }
