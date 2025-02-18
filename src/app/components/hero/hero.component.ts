import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="text-white py-20 p-6">
      <h1 class="text-5xl font-semibold">
        Driving global transportation to net-zero
      </h1>
      <h3 class="text-4xl font-light mt-2 w-96">
        Turn your emission targets into action
      </h3>
      <img
        src="Clearly-mobile-car-lanes-v3.gif"
        alt="moving cars"
        class="mt-8  md:hidden"
      />
    </section>
  `,
})
export class HeroComponent {}
