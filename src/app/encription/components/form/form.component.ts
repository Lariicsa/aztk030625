import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
})
export class FormComponent {
  textTyped = input.required<string>();
}
