import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-gray-800 bg-green-300 font-bold py-2 px-4 rounded-sm hover:bg-green-200 duration-300 ease-in-out cursor-pointer"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string = '';
}
