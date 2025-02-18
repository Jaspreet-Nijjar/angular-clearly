import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  template: `
    <div class="text-white">
      <img [src]="image" alt="blog image" />
      <div>
        <p>{{ label }}</p>
        <p>{{ date }}</p>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  `,
})
export class BlogCardComponent {
  @Input() image: string = '';
  @Input() label: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
