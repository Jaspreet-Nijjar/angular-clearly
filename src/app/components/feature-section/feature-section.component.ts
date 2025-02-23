import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule],
  template: `
    <section [ngClass]="customClass" class="text-white p-4 relative h-60">
      <div class="bg-white w-8 h-2"></div>
      <h3
        class="absolute w-44 top-8 left-[-40px] p-6 rotate-270 font-semibold text-xl"
      >
        {{ label }}
      </h3>
    </section>
  `,
})
export class FeatureSectionComponent {
  @Input() label: string = '';
  @Input() customClass: string = '';
}
