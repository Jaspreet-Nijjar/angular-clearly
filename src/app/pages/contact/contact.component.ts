import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  template: `
    <h1 class="text-4xl font-bold text-white p-6">Contact us</h1>
    <section class="p-6 flex flex-col text-white md:flex-row md:gap-4">
      <form class="flex flex-col md:flex-row md:gap-54 lg:gap-60">
        <div class="flex flex-col space-y-6">
          <div>
            <label
              >Select your interest <span class="text-red-500">*</span></label
            >

            <select
              class="text-white bg-black border mb-2 border-white px-4 py-2 rounded block w-[300px] lg:w-[500px]"
            >
              <option value="" disabled selected>
                Select from dropdown items
              </option>

              <option value="demo" class="text-white bg-black">
                Request a Demo
              </option>
              <option value="enquiries" class="text-white bg-black">
                General enquiries
              </option>
              <option value="investment" class="text-white bg-black">
                Prospective investment
              </option>
              <option value="partnership" class="text-white bg-black">
                Partnership
              </option>
              <option value="support" class="text-white bg-black">
                Customer Support
              </option>
              <option value="join" class="text-white bg-black">
                Joining our team
              </option>
            </select>
          </div>

          <div>
            <label>Subject of query<span class="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Type..."
              class="block text-white bg-black border border-white mb-2 px-4 py-2 rounded w-[300px] lg:w-[500px]"
            />
          </div>

          <div>
            <label>Your message<span class="text-red-500">*</span></label>
            <textarea
              rows="5"
              placeholder="Type..."
              class="block text-white bg-black border border-white px-4 py-2 mb-2 rounded w-[300px] lg:w-[500px]"
            ></textarea>
          </div>
        </div>

        <div class="flex flex-col gap-2 space-y-4">
          <label>First name<span class="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Type..."
            class="block text-white bg-black border border-white mb-2 px-4 py-2 rounded w-[300px] lg:w-[500px]"
          />

          <label>Last name<span class="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Type..."
            class="block text-white bg-black border border-white mb-2 px-4 py-2 rounded w-[300px] lg:w-[500px]"
          />

          <label>Email<span class="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Type..."
            class="block text-white bg-black border border-white mb-2 px-4 py-2 rounded w-[300px] lg:w-[500px]"
          />

          <label>Company<span class="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Type..."
            class="block text-white bg-black border border-white mb-2 px-4 py-2 rounded w-[300px] lg:w-[500px]"
          />
          <app-button
            label="Submit"
            customClass="bg-red-400 text-white w-full mt-6 hover:bg-red-300 transition-all"
          ></app-button>
        </div>
      </form>
    </section>
  `,
})
export class ContactComponent {}
