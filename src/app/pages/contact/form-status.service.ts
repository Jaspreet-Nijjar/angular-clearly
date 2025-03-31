import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormStatusService {
  private formSubmitted = false;

  getFormSubmitted(): boolean {
    return this.formSubmitted;
  }

  setFormSubmitted(status: boolean) {
    this.formSubmitted = status;
  }
}
