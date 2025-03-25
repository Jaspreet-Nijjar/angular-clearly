import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
}
