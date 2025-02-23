import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <section class="text-white">
      <div class="border-t border-white border-b">
        <h3>{{ number }}</h3>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </section>
  `,
})
export class ProductCardComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
}
