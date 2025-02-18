import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FooterComponent],
  template: `
    <main>
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-footer></app-footer>
    </main>
  `,

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-clearly';
}
