import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };
}
