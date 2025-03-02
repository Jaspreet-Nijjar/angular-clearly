import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [ProductCardComponent, ButtonComponent, RouterModule],
  template: `
    <section class="text-white p-6 grid grid-cols-1 md:grid-cols-2">
      <div>
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
      </div>

      <div>
        <div class="hidden md:flex md:justify-end">
          <div class="border-zinc-800 border-l border-r"></div>
          <img src="Truck.png" alt="truck" class="px-8 mt-150" />

          <div class="border-zinc-800 border-r border-l">
            <img src="Van.png" alt="van" class="px-8 mt-120" />
          </div>

          <div class="border-zinc-800 border-r">
            <img src="Car.png" alt="car" class="px-8 mt-40" />
          </div>
        </div>
      </div>

      <div class="text-xl font-light">
        <p class="mb-4">
          Managing emissions is currently difficult, costly and inaccurate.
        </p>

        <p class="mt-4 mb-4">
          The reason: vast amounts of scattered, siloed and missing data.
        </p>

        <p class="mt-4 mb-24 text-red-400 font-bold">Until now.</p>

        <p class="mt-4 mb-4">
          Clearly gathers, enhances and fuses data at the trip and parcel level.
        </p>

        <p class="mt-4 mb-4">Let's take a look.</p>
      </div>
    </section>

    <div class="p-6 flex flex-col md:flex-row md:gap-6">
      <div>
        <h3 class="text-blue-400 text-3xl font-semibold">Mobility</h3>
        <p class="hidden text-white font-light text-lg md:block md:mb-6">
          Sensors, apps, satellites for GPS, route patterns, driver behaviour,
          tyre pressure...
        </p>
        <h3 class="text-yellow-400 text-3xl font-semibold">Operations</h3>
        <p class="hidden text-white md:block text-lg  md:mb-6">
          Sensors and databases for metrics and context of people and package
          movement...
        </p>

        <h3 class="text-green-300 text-3xl font-semibold">Energy</h3>
        <p class="hidden text-white md:block text-lg md:mb-6">
          Sensors and statements for the current usage and future demand of
          energy supplies...
        </p>

        <a routerLink="/contact">
          <app-button
            label="Request a demo"
            customClass="w-full text-left mt-10 md:w-fit"
          ></app-button>
        </a>
      </div>

      <img
        src="/services.png"
        alt="services"
        class="md:h-[300px] lg:h-[500px]"
      />
    </div>

    <div class="text-white flex flex-col p-6 md:flex-row md:gap-50 md:text-lg">
      <div>
        <h3 class="text-red-300 text-2xl font-semibold mt-4">Data fusion</h3>
        <p class="mt-2 mb-2">
          Clearly is data-format and hardware agnostic. It seamlessly integrates
          with your existing data sources, apps and sensors. Plug and play with
          no heavy lifting and overhead for your teams.
        </p>
        <p class="mt-2 mb-2">
          Data is cleansed, blended, and enriched with third party and
          proprietary data to generate actionable insights.
        </p>
        <p class="mt-2 mb-2">But wait there’s more to it...</p>
      </div>

      <img
        src="/data-fusion.png"
        alt="data fusion"
        class="md:h-[300px] lg:h-[500px]"
      />
    </div>
  `,
})
export class ServicesComponent {}
