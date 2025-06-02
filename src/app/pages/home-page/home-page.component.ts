import { Component, inject, signal } from '@angular/core';
import { AppFormComponent } from 'src/app/encription/components/form/form.component';

@Component({
  selector: 'app-home-page',
  imports: [AppFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
