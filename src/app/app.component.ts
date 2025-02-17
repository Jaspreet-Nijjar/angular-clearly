import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <main>
      <app-navbar></app-navbar>
    </main>
  `,

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-clearly';
}
