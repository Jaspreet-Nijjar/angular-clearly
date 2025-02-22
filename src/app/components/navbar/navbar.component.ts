import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterModule],
  template: `
    <nav class="bg-black p-6 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <a routerLink="/">
          <img src="/logo.png" alt="clearly logo" class="object-fit" />
        </a>

        <ul class="hidden text-white md:flex gap-6">
          <li>
            <a href="#" class="hover:text-red-300 transition-all">Product</a>
          </li>

          <li>
            <a
              routerLink="/about"
              routerLinkActive="text-red-300"
              class="hover:text-red-300 transition-all"
              >About Us</a
            >
          </li>

          <li>
            <a
              routerLink="/blog"
              routerLinkActive="text-red-300"
              class="hover:text-red-300 transition-all"
              >Blog</a
            >
          </li>
          <li>
            <a
              routerLink="/contact"
              routerLinkActive="text-red-300"
              class="hover:text-red-300 transition-all"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>

      <app-button label="Menu" class="md:hidden"></app-button>
    </nav>

    <!-- Mobile Navbar -->

    <div class="p-6">
      <ul class=" text-white font-bold text-xl flex flex-col gap-6">
        <li>
          <a href="#" class="hover:text-red-300 transition-all">Product</a>
        </li>

        <li>
          <a
            routerLink="/about"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >About Us</a
          >
        </li>

        <li>
          <a
            routerLink="/blog"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >Blog</a
          >
        </li>
        <li>
          <a
            routerLink="/contact"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >Contact Us</a
          >
        </li>
      </ul>
      <a routerLink="/contact">
        <app-button label="Request a Demo" customClass="mt-24"></app-button>
      </a>
    </div>
  `,
})
export class NavbarComponent {}
