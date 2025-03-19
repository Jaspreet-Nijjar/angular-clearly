import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
})
export class FeatureSectionComponent {
  @Input() label: string = '';
  @Input() customClass: string = '';
  @Input() items: { icon: string }[] = [];
}
