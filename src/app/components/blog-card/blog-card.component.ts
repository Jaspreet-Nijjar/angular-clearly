import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card-component.html',
})
export class BlogCardComponent {
  @Input() image: string = '';
  @Input() label: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
