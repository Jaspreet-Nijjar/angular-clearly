import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class=" bg-green-300 font-semibold py-2 px-4 rounded-md">
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string = '';
}
