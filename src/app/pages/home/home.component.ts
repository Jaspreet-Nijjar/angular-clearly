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
        [items]="investors"
      ></app-feature-section>
    </main>
  `,
})
export class HomeComponent {
  investors = [
    { icon: '/investors/pace-centures.png' },
    { icon: '/investors/EU_Logo.png' },
    { icon: '/investors/mobilion.png' },
    { icon: '/investors/NextGear-WHITE.png' },
    { icon: '/investors/nine_realms-greyscale.png' },
    { icon: '/investors/m1720-greyscale.png' },
  ];
}
