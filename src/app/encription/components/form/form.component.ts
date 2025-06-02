import { Component, input, inject, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { EncriptService } from '../../../services/encript.services';
import {EncriptResponse} from '../../interfaces/encript.interface'
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form',
  imports: [NgIf],
  templateUrl: './form.component.html',
})
export class AppFormComponent {
  textTyped = input<string>();
  imageUrl: string = environment.imageGif;
  EncriptService = inject(EncriptService);
  encriptedResponse = signal<EncriptResponse | null>(null);

  onTextTyped(query: string) {
    this.EncriptService.encryptText(query);

  }
}
