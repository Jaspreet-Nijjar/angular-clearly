import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root-layout',
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.css',
})
export class RootLayoutComponent {}
