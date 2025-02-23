import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-services',
  imports: [ProductCardComponent],
  template: `
    <section class="text-white p-6">
      <p class="text-2xl font-light mb-4">Clearly lets you:</p>

      <app-product-card
        [number]="1"
        title="Understand"
        description="The power of accurate and actionable trip-level insights. Take a data approach to managing net-zero goals to save emissions and costs.
"
      ></app-product-card>

      <app-product-card
        [number]="2"
        title="Optimise"
        description="Unlock opportunities to optimise your operations. Reduce emissions and costs across your supply chain."
      ></app-product-card>

      <app-product-card
        [number]="3"
        title="Transition"
        description="Known when, where and how to upgrade your fleet. Maximise your project's ROI and deliver quantifiable impact.
"
      ></app-product-card>
    </section>
  `,
})
export class ServicesComponent {}
