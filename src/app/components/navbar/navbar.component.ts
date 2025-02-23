import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterModule, CommonModule],
  template: `
    <nav class="bg-black p-6 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <a routerLink="/">
          <img
            src="/logo.png"
            alt="clearly logo"
            class="object-fit"
            (click)="toggleMenu()"
          />
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

      <app-button
        (click)="toggleMenu()"
        [label]="isMenuOpen ? 'Close' : 'Menu'"
        class="md:hidden"
      ></app-button>
    </nav>

    <!-- Mobile Navbar -->
    <div
      *ngIf="isMenuOpen"
      class="bg-black text-white p-6 absolute top-24 left-0 w-full h-full md:hidden"
    >
      <ul class=" text-white font-bold text-xl flex flex-col gap-6">
        <li>
          <a
            (click)="toggleMenu()"
            href="#"
            class="hover:text-red-300 transition-all"
            >Product</a
          >
        </li>

        <li>
          <a
            (click)="toggleMenu()"
            routerLink="/about"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >About Us</a
          >
        </li>

        <li>
          <a
            (click)="toggleMenu()"
            routerLink="/blog"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >Blog</a
          >
        </li>
        <li>
          <a
            (click)="toggleMenu()"
            routerLink="/contact"
            routerLinkActive="text-red-300"
            class="hover:text-red-300 transition-all"
            >Contact Us</a
          >
        </li>
      </ul>
      <a routerLink="/contact">
        <app-button
          (click)="toggleMenu()"
          label="Request a Demo"
          customClass="mt-24"
        ></app-button>
      </a>
    </div>
  `,
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };
}
