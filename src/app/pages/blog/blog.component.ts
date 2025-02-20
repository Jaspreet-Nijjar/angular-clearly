import { Component } from '@angular/core';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent, CommonModule],
  template: `<section class="flex flex-col">
    <h1 class="text-white text-4xl font-bold py-6 pb-8 text-center">
      Clearly Blog
    </h1>

    <div
      class="mx-auto flex flex-col gap-16 md:flex-row md:justify-center pb-6"
    >
      <app-blog-card
        *ngFor="let post of blogPosts"
        [image]="post.image"
        [label]="post.label"
        [date]="post.date"
        [title]="post.title"
        [description]="post.description"
      >
      </app-blog-card>
    </div>
    <div class="border border-zinc-700 border-b"></div>
  </section>`,
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
