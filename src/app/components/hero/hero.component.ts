import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  template: `
    <section class="text-white py-20 md:grid md:grid-cols-2">
      <div class="px-6">
        <h1 class="text-5xl font-semibold lg:text-6xl">
          Driving global transportation to net-zero
        </h1>
        <h3 class="text-4xl font-light mt-2 lg:text-5xl mb-4">
          Turn your emission targets into action
        </h3>
        <app-button label="Request a demo"></app-button>
      </div>

      <div class="hidden md:flex md:justify-end">
        <img
          src="Truck.png"
          alt="truck"
          class="border-zinc-800 border-l border-r px-8"
        />

        <div class="border-zinc-800 border-r">
          <img src="Van.png" alt="van" class="px-8 mt-42 mb-10" />
        </div>

        <div class="border-zinc-800 border-r">
          <img src="Car.png" alt="car" class="px-8 mb-72 mt-10" />
        </div>
      </div>
    </section>

    <img
      src="Clearly-mobile-car-lanes-v3.gif"
      alt="moving cars"
      class="mt-8 w-full md:hidden"
    />
  `,
})
export class HeroComponent {}
