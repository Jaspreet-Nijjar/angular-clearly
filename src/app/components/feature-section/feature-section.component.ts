import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule],
  template: `
    <section [ngClass]="customClass" class="text-white p-4 relative ">
      <div class="bg-white w-8 h-2"></div>
      <h3
        class="absolute w-44 top-8 left-[-40px] p-6 rotate-270 font-semibold text-xl"
      >
        {{ label }}
      </h3>
      <div class="px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let item of items">
          <img [src]="item.icon" alt="company icon" class="w-45 mt-4 mb-4" />
        </div>
      </div>
    </section>
  `,
})
export class FeatureSectionComponent {
  @Input() label: string = '';
  @Input() customClass: string = '';
  @Input() items: { icon: string }[] = [];
}
