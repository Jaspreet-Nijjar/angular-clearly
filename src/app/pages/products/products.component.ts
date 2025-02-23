import { Component } from '@angular/core';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule],
  template: `
    <section>
      <app-product-item
        *ngFor="let item of items"
        [number]="item.number"
        [title]="item.title"
        [description]="item.description"
        [image]="item.image"
      >
      </app-product-item>
    </section>
  `,
})
export class ProductsComponent {
  items = [
    {
      number: 1,
      title: 'Understand',
      description: `You can't reduce what you can't understand.<br><br>
      Take a data-driven approach to achieving net-zero goals. Understand your emission baselines and key drivers across Scope 1, 2, and 3. Understand your reduction potential and set realistic targets to drive measurable progress.<br><br>
      Effortlessly export trusted, compliant data in line with global and local standards. Whether you're contributing to group-level reports or strengthening a bid for customers, showcase your environmental progress alongside the real savings and strong returns your projects deliver.`,
      image: '/understand.png',
    },

    {
      number: 2,
      title: 'Optimise',
      description: `Turn insights into action, unlock opportunities to reduce emissions and cut costs without requiring large investments.<br><br>
      Optimise daily operations and address inefficiencies across your supply chain (idling, driver behaviour, and load management, etc).<br><br>
Upgrade and retrofit existing vehicles in your fleet to extend their useful lifetime whilst increasing fuel efficiency and reducing running costs.<br><br>
Take small, targeted actions that deliver a big impact.



`,
      image: '/optimise.png',
    },
  ];
}
