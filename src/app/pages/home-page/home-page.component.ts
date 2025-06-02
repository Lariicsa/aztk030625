import { Component, inject, signal } from '@angular/core';
import { AppFormComponent } from 'src/app/encription/components/form/form.component';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-home-page',
  imports: [AppFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  imageUrl: string = environment.imageGif;
}
