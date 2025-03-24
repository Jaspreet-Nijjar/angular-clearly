import { Component } from '@angular/core';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogPosts = [
    {
      image: 'blog1.webp',
      label: 'Fundraising',
      date: '13 Aug 2024',
      title:
        'Clearly secures $4.3m seed round to drive Net Zero targets in global transportation',
      description: 'Seed round press release',
    },
    {
      image: 'blog2.webp',
      label: 'Product',
      date: '13 Aug 2024',
      title:
        'Do we really need granular trip-level insights to get to Net-Zero?',
      description:
        'Default calculations will only get you so far. If you want to make a real difference, trip-level granularity is essential.',
    },
  ];
}
