import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule],
  template: `
    <section [ngClass]="customClass" class="text-white">
      <div class="w-96 bg-white"></div>
      <h3>{{ label }}</h3>
      <p>Test</p>
    </section>
  `,
})
export class FeatureSectionComponent {
  @Input() label: string = '';
  @Input() customClass: string = '';
}
