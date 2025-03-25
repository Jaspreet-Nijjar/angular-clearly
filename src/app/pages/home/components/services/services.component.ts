import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { RouterModule } from '@angular/router';
import {
  SERVICE_CARDS,
  SERVICE_FEATURES,
} from '../../../../constants/services.data';

@Component({
  selector: 'app-services',
  imports: [ProductCardComponent, ButtonComponent, RouterModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  serviceCards = SERVICE_CARDS;
  serviceFeatures = SERVICE_FEATURES;

  @Input() color!: string;
}
