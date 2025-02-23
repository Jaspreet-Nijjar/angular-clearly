import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeatureSectionComponent } from '../../components/feature-section/feature-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeatureSectionComponent],
  template: `
    <main>
      <app-hero></app-hero>
      <app-feature-section
        customClass="bg-zinc-400"
        label="Investors & Partners"
      ></app-feature-section>
    </main>
  `,
})
export class HomeComponent {}
