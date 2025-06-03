import { Component} from '@angular/core';
import { EncriptionFormComponent } from 'src/app/encryption/components/encriptionForm/encriptionForm.component';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-home-page',
  imports: [EncriptionFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  imageUrl: string = environment.imageGif;
}
