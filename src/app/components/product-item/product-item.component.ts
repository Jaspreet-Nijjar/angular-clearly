import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [ButtonComponent, RouterModule],
  template: `<section class="text-white p-6">
    <div class="flex flex-col md:flex-row md:gap-20">
      <div>
        <div class="flex gap-8">
          <h2 class="text-2xl">{{ number }}</h2>
          <h1 class="text-4xl font-semibold mb-4">{{ title }}</h1>
        </div>

        <p [innerHTML]="description" class="px-8 font-light">
          {{ description }}
        </p>

        <a routerLink="/contact">
          <app-button
            label="Request a demo"
            class="text-left px-8"
            customClass="mt-4"
          ></app-button>
        </a>
      </div>

      <img [src]="image" alt="product image" class="md:w-[600px]" />
    </div>
  </section>`,
})
export class ProductItemComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
