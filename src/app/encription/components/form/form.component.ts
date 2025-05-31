import { Component, input } from '@angular/core';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
})
export class AppFormComponent {
  textTyped = input<string>();
  imageUrl: string =environment.imageGif
}
