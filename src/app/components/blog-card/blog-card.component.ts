import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  template: `
    <div class="text-white border border-white max-w-[400px] h-[420px]">
      <img
        [src]="image"
        alt="blog image"
        class="w-full object-cover h-[200px]"
      />
      <div class="px-4">
        <div class="flex justify-between py-4">
          <p class="bg-red-400 rounded-md w-fit px-4 font-light">{{ label }}</p>
          <p class="font-light">{{ date }}</p>
        </div>
        <h3 class="text-2xl font-semibold">{{ title }}</h3>
        <p class="font-light">{{ description }}</p>
      </div>
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
