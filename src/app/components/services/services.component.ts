import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [ProductCardComponent, ButtonComponent, RouterModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
