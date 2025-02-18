import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  template: `
    <main>
      <app-hero></app-hero>
    </main>
  `,
})
export class HomeComponent {}
