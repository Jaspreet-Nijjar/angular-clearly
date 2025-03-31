import { Component, inject } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormStatusService } from './form-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private formStatusService = inject(FormStatusService);
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
      this.formStatusService.setFormSubmitted(true);
      this.router.navigate(['/success']);
    } else {
      this.formStatusService.setFormSubmitted(false);
    }
  }
}
