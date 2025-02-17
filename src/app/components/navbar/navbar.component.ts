import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  template: `
    <nav class="bg-black p-6">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="clearly logo" class="object-fit" />

        <ul class="text-white flex gap-6">
          <li>
            <a href="#" class="hover:text-red-300 transition-all">Product</a>
          </li>
          <li>
            <a href="#" class="hover:text-red-300 transition-all">About Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-red-300 transition-all">Blog</a>
          </li>
          <li>
            <a href="#" class="hover:text-red-300 transition-all">Contact Us</a>
          </li>
        </ul>
      </div>
      <app-button label="Request a Demo"></app-button>
    </nav>
  `,
})
export class NavbarComponent {}
