import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, RouterModule],
  template: `
    <section class="text-white mb-10">
      <div class="border-t border-white">
        <h3 class="text-2xl">{{ number }}</h3>
        <div class="p-6">
          <h1 class="text-4xl font-semibold mb-12">{{ title }}</h1>
          <p class="font-light">{{ description }}</p>
        </div>
        <a routerLink="/products">
          <app-button
            customClass="bg-red-400 w-full text-left text-white hover:bg-red-300 "
            label="Find out more"
          ></app-button>
        </a>
      </div>
    </section>
  `,
})
export class ProductCardComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
}
