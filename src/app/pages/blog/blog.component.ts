import { Component } from '@angular/core';
import { BLOG_POSTS } from '../../constants/blogPosts';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogPosts = BLOG_POSTS;
}
