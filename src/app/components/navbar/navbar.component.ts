import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NAV_LINKS } from '../../constants/nav-links';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;
  navLinks = NAV_LINKS;

  @Input() url!: string;
  @Input() label!: string;

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };
}
