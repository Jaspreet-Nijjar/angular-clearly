import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './customers.component.html',
})
export class CustomersComponent {}
