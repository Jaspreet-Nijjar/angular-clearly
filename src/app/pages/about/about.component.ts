import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
