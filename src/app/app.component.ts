import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    AboutComponent,
  ],
  template: `
    <main>
      <app-navbar></app-navbar>
      <app-about></app-about>

      <router-outlet></router-outlet>

      <app-footer></app-footer>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
