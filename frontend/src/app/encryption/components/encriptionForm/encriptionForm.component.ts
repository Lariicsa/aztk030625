import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { EncriptService } from '../../../services/encript.services';
import { MicrophoneComponent } from 'src/app/components/microphone/microphone.component';

@Component({
  selector: 'encription-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass, MicrophoneComponent],
  templateUrl: './encriptionForm.component.html',
})
export class EncriptionFormComponent {
  textTyped = signal('');  // texto ingresado

  private encriptService = inject(EncriptService);
  encryptedResponse = computed(() => this.encriptService.encryptedSignal());

  // Computed: contar caracteres
  charCount = computed(() => this.textTyped().length);

  // Computed: verificar si supera 15 caracteres
  isDisabled = computed(() => this.textTyped().trim().length > 15);

  // Computed: verificar si hay texto (sin exceder límite)
  hasText = computed(() => this.textTyped().trim().length > 0);

  onTextTyped(): void {
    const trimmed = this.textTyped().trim();
    if (trimmed.length > 0 && trimmed.length <= 15) {
      this.encriptService.encryptText(trimmed);
    }
  }

  onSpeechRecognized(text: string): void {
    this.textTyped.set(text);
  }
}
