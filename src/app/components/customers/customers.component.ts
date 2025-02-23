import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [ButtonComponent, RouterModule],
  template: `
    <section class="p-6 text-white">
      <h2 class="font-bold text-3xl pt-4 mb-16">
        Customers are using Clearly to
      </h2>

      <div class="md:flex md:gap-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div class="md:w-96">
            <img
              src="/customers/customer-1.jpeg"
              alt="customer"
              class="w-full h-60 object-cover object-center"
            />
            <p class="font-light mb-4">
              Uncover emission baselines, understand their drivers and identify
              their real reduction potential to set achievable targets
            </p>
            <div class="border-white border-b"></div>
          </div>

          <div class="md:w-96">
            <img
              src="/customers/customer-2.jpeg"
              alt="customer"
              class="w-full h-60 object-cover object-center mt-10"
            />
            <p class="font-light mb-4">
              Gain actionable insights to pinpoint the best opportunities for
              cost and emission reductions across their supply chain operations
            </p>
            <div class="border-white border-b"></div>
          </div>

          <div class="mt-10 md:w-96">
            <img
              src="/customers/customer-3.jpg"
              alt="customer"
              class="w-full h-60 object-cover object-center mt-10"
            />
            <p class="font-light mb-4">
              Decarbonise and optimise their existing fleet without major
              investments, keeping their existing vehicles on the road
            </p>
            <div class="border-white border-b"></div>
          </div>

          <div class=" border-white border-b md:mt-16 md:w-96">
            <img
              src="/customers/customer-4.jpeg"
              alt="customer"
              class="w-full h-60 object-cover object-center mt-10"
            />
            <p class="font-light">
              Make smarter vehicle choices by comparing electrification,
              hybrids, and ICE to maximise ROI and minimise risk
            </p>
          </div>

          <a routerLink="/contact">
            <app-button
              label="Request a demo"
              customClass="w-full text-left md:w-fit"
            ></app-button>
          </a>
        </div>

        <div class="hidden md:block bg-black">
          <img src="/customers/Back-of-tollbooth.svg" alt="back of tollbooth" />
          <img
            src="/customers/Van_with_tick.png"
            alt="van with a tick"
            class="pt-20 ml-70"
          />

          <img
            src="/customers/Car_with_tick.png"
            alt="car with a tick"
            class="pt-72 ml-70"
          />
        </div>
      </div>

      <div class="w-96">
        <h3 class="font-light mt-20 text-2xl mb-20">
          Why guess, when you can be certain?
          <span class="font-bold"
            >Turn your net-zero goals into action today.</span
          >
        </h3>
        <div class="border-t-4 border-white mb-32">
          <div class="flex justify-between items-center pt-4">
            <h2 class="text-4xl font-semibold">Contact Us</h2>
            <a routerLink="/contact">
              <i
                class="fa-solid fa-arrow-up-right-from-square text-4xl hover:text-red-300 transition-all"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CustomersComponent {}
