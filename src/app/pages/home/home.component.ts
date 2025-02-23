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

      <app-feature-section
        customClass="bg-zinc-500"
        label="Awards"
        [items]="awards"
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

  awards = [
    { icon: 'awards/europas_2022.png' },
    { icon: 'awards/QueenOfGreen_white_250px.png' },
    { icon: 'awards/UKRI.png' },
    { icon: 'awards/UKIL@2x.png' },
    { icon: 'awards/LOGO_EUSP_WHITE.png' },
    { icon: 'awards/PRODUCTS_AWARD.jpg' },
    { icon: 'awards/MiUK_Awards.png' },
  ];
}
