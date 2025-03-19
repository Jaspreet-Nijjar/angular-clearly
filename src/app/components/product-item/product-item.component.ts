import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [ButtonComponent, RouterModule, CommonModule],
  template: `
    <section class="text-white p-6">
      <div class="flex flex-col md:flex-row md:gap-20 md:justify-between">
        <div>
          <div class="flex gap-8">
            <h2 class="text-2xl">{{ number }}</h2>
            <h1 class="text-4xl font-semibold mb-4">{{ title }}</h1>
          </div>

          <p
            *ngIf="isExpanded"
            [innerHTML]="description"
            class="px-8 font-light"
          ></p>

          <a routerLink="/contact" *ngIf="isExpanded">
            <app-button
              label="Request a demo"
              class="text-left px-8"
              customClass="mt-4"
            ></app-button>
          </a>
        </div>

        <img
          [src]="image"
          alt="product image"
          *ngIf="isExpanded"
          class="md:w-[600px]"
        />
      </div>
    </section>
  `,
})
export class ProductItemComponent {
  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() isExpanded: boolean = false;
}
