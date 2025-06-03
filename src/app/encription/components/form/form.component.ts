import { Component, input, inject, signal, computed } from '@angular/core';
import { EncriptService } from '../../../services/encript.services';
import { FormsModule } from '@angular/forms';
import { EncriptResponse } from '../../interfaces/encript.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './form.component.html',
})
export class AppFormComponent {
  textTyped: string = '';
  private encriptService = inject(EncriptService);
  encryptedResponse = computed(() => this.encriptService.encryptedSignal());

  onTextTyped(): void {
    const trimmed = this.textTyped.trim();
    if (trimmed.length > 0) {
      this.encriptService.encryptText(trimmed);
    }
  }
}
