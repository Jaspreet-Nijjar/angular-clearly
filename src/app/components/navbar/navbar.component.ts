import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <!-- //Logo -->
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
    </nav>
  `,
})
export class NavbarComponent {}
