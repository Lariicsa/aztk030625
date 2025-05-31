import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormComponent } from 'src/app/encription/components/form/form.component';

@Component({
  selector: 'app-home-page',
  imports: [FormComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
