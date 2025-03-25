import { Component } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  expandedIndex: number = 0;

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

    {
      number: 3,
      title: 'Transition',
      description: `Know when, where, and how to transition your fleet.<br><br>
      Make smarter decisions by comparing all options, from plug-in hybrids to full electrification.<br><br>
Gain a clear understanding of your total cost of ownership, grid capacity in your area and available incentives such as carbon credits, grants, and tax rebates.<br><br>
Confidently choose the path to net zero that maximises ROI and minimises risk.
`,
      image: '/optimise.png',
    },
  ];

  toggleAccordion(index: number) {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
}
