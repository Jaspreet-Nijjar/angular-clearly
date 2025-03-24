import { Component, Input } from '@angular/core';
import { BlogCard } from './blog-card.model';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card-component.html',
})
export class BlogCardComponent {
  @Input() blogCard!: BlogCard;
}
