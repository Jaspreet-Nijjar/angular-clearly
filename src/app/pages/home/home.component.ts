import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DecarbonisationStandardsComponentComponent } from './components/decarbonisation-standards-component/decarbonisation-standards-component.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FeatureSectionComponent,
    CustomersComponent,
    DecarbonisationStandardsComponentComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
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

  standards = [
    { icon: '/standards/IC.png' },
    { icon: '/standards/GHG.png' },
    { icon: '/standards/ISO.png' },
    { icon: '/standards/Gold.png' },
    { icon: '/standards/GRI.png' },
    { icon: '/standards/VCS.png' },
    { icon: '/standards/SBTI.png' },
    { icon: '/standards/smartway.png' },
    { icon: '/standards/ISO_certified.png' },
  ];
}
