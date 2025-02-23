import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-decarbonisation-standards-component',
  imports: [RouterModule],
  template: `
    <section class="bg-white text-black px-6 md:flex md:justify-between">
      <div class="max-w-96 pt-24">
        <h1 class="text-5xl font-bold mb-20">
          Decarbonisation Aligned with Global Standards
        </h1>

        <p class="font-light mt-2 mb-2">
          Powered by proprietary technology, Clearly's platform ensures that
          emissions data and reduction insights align with leading global
          standards (GLEC, GHG Protocol, ISO 14083 and more).
        </p>
        <p class="font-light mt-2 mb-2">
          Seamlessly export your data and provide all your stakeholders with
          trusted, compliant reports in no time.
        </p>
        <p class="font-light mt-2 mb-2">
          Reduce emissions and costs while remaining compliant.
        </p>

        <a routerLink="/about" class="underline text-red-400 font-semibold"
          >Read more about Clearly</a
        >
      </div>

      <img
        src="decarbonisation.png"
        alt="decarbonisation"
        class="mt-4 md:mt-0"
      />
    </section>
  `,
})
export class DecarbonisationStandardsComponentComponent {}
