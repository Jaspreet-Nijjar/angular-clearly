import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [ButtonComponent, RouterModule, CommonModule],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() isExpanded: boolean = false;
}
