import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { FormStatusService } from './form-status.service';

import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FormSubmissionGuard implements CanActivate {
  private formStatusService = inject(FormStatusService);
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const formSubmitted = this.formStatusService.getFormSubmitted();

    if (formSubmitted) {
      this.router.navigate(['/success']);
      return true;
    } else {
      return false;
    }
  }
}
