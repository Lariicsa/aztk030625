import { Component, inject, signal } from '@angular/core';
import { AppFormComponent } from 'src/app/encription/components/form/form.component';
import { EncriptService } from '../../services/encript.services';

@Component({
  selector: 'app-home-page',
  imports: [AppFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
 // imageUrl = signal(textTyped)
  encriptService = inject( EncriptService)
}
