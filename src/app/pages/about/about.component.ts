import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-about',
  imports: [ButtonComponent],
  template: `
    <section class="text-white p-4">
      <h1 class="mt-12 mb-12 text-3xl font-bold">About us</h1>
      <p class="py-2">
        Clearly was founded in 2021 with a mission to accelerate the
        transportation industry to net zero emissions.
      </p>

      <p class="py-2">
        Road transportation accounts for 25% of the world's energy consumption
        and carbon emissions, and requires $1.75tn annually to reach set net
        zero goalsThis sector is complex and its decarbonisation requires a
        collaborative effort across multiple domains.
      </p>

      <p class="py-2">
        At Clearly, we understand the critical needs of fleet owners and
        operators managing millions of shipments or trips daily. They face
        immense challenges in accurately measuring emissions and transitioning
        their operations in a cost-effective manner. Using Big Data and
        Artificial Intelligence, Clearly delivers granular emissions insights
        across Scopes 1, 2, and 3. This enables companies to accurately simulate
        emissions, optimise operations, and plan profitable transitions.
      </p>

      <p class="py-2">
        Our software integrates data from a variety of sources (vehicles,
        telematics, operations, and energy use) to provide a comprehensive view.
        Supported by regulatory frameworks, Clearly ensures fleet managers can
        meet emissions targets while reducing costs and improving operational
        efficiency.
      </p>

      <a
        class="underline font-semibold"
        href="https://medium.com/pace-ventures/why-we-invested-in-clearly-4f07db5dc388"
        >Pace Ventures: Why we invested in Clearly</a
      >
      <a
        class="underline font-semibold"
        href="https://smart-freight-centre-media.s3.amazonaws.com/documents/GLEC_FRAMEWORK_v3_UPDATED_02_04_24.pdf"
        >Read GLEC Framework</a
      >
      <app-button label="Request a demo" class="mt-4"></app-button>

      <h3 class="mt-12 mb-12 text-xl font-bold">Active in 9 countries</h3>
      <img src="countries.svg" alt="countries" />
      <img src="branching-mobile.png" alt="branch" class="w-full" />
      <div class="lg:flex">
        <div>
          <p class="font-bold px-8 py-4">
            Clearly creates a rich data ecosystem collected from each actor that
            has an impact on road transportation and the emissions it creates.
          </p>

          <p class="font-bold px-8">
            By blending this data and enriching it, we enable and empower all
            stakeholders in the industry to work individually and together to
            optimally reach net zero emissions.
          </p>
        </div>

        <img src="about-us.webp" alt="about us" />
      </div>
    </section>
  `,
})
export class AboutComponent {}
