import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'success', component: SuccessComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
