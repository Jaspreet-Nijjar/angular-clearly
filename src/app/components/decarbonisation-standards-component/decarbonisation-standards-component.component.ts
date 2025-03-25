import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DECARBONISATION_STANDARDS_TEXT } from '../../constants/decarbonisation-standards-text';

@Component({
  selector: 'app-decarbonisation-standards-component',
  imports: [RouterModule],
  templateUrl: './decarbonisation-standards-component.component.html',
})
export class DecarbonisationStandardsComponentComponent {
  text = DECARBONISATION_STANDARDS_TEXT;
}
