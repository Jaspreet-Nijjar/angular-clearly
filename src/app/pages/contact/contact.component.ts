import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private router = inject(Router);

  contactForm = new FormGroup({
    dropdown: new FormControl('', Validators.required),
    query: new FormControl('', { validators: [Validators.required] }),
    message: new FormControl('', { validators: [Validators.required] }),
    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    company: new FormControl('', { validators: [Validators.required] }),
  });

  onSubmit() {
    console.log('submitted');

    if (this.contactForm.valid) {
      this.router.navigate(['/success']);
    } else {
      return;
    }
  }
}
