import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  template: `
    <footer class="text-white p-6">
      <div class="grid grid-cols-2">
        <div>
          <ul>
            <li>
              <a routerLink="/" class="hover:text-red-300 transition-all"
                >Home</a
              >
            </li>
            <li>
              <a href="/" class="hover:text-red-300 transition-all">Product</a>
            </li>
            <li>
              <a routerLink="about" class="hover:text-red-300 transition-all"
                >About us</a
              >
            </li>
            <li>
              <a href="/" class="hover:text-red-300 transition-all">Blog</a>
            </li>
            <li>
              <a routerLink="/contact" class="hover:text-red-300 transition-all"
                >Contact us</a
              >
            </li>
          </ul>
        </div>

        <div class="flex-col">
          <ul>
            <li>
              <a
                href="/"
                class="underline hover:text-red-300 transition-all cursor-pointer"
                >Privacy Policy</a
              >
            </li>
          </ul>

          <div class="flex gap-4 mt-4">
            <i
              class="fa-regular fa-envelope text-2xl hover:text-red-300 transition-all cursor-pointer"
            ></i>
            <i
              class="fa-brands fa-linkedin-in text-2xl hover:text-red-300 transition-all cursor-pointer"
            ></i>
          </div>
        </div>
      </div>

      <div class="md:flex md:items-center md:justify-between">
        <div>
          <p class="pt-6 font-light">
            &copy; Clearly 2025, Together Global Ltd. trading as "Clearly"
          </p>
          <p class="font-light text-gray-300 pb-4">
            EIT Urban Mobility is supported by the European Institute of
            Innovation and Technology (EIT), a body of the European Union
          </p>
        </div>

        <span
          >Website:
          <a
            class="text-zinc-500 underline"
            href="https://togethercreative.co.uk/"
            >Together</a
          ></span
        >
      </div>
    </footer>
  `,
})
export class FooterComponent {}
