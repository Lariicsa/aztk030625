import { Component, inject, computed, signal } from '@angular/core';
import { EncriptService } from '../../../services/encript.services';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { MicrophoneComponent } from 'src/app/components/microphone/microphone.component';

@Component({
  selector: 'encription-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass, MicrophoneComponent],
  templateUrl: './encriptionForm.component.html',
})
export class EncriptionFormComponent {
  textTyped = signal('');

  private encriptService = inject(EncriptService);

  isInputValid = computed(() => this.textTyped().trim().length > 0);
  isTooLong = computed(() => this.textTyped().length > 15);
  charCount = computed(() => this.textTyped().length);

  encryptedResponse = computed(() => this.encriptService.encryptedSignal());

  onTextTyped(): void {
    const trimmed = this.textTyped().trim();
    if (trimmed.length > 0) {
      this.encriptService.encryptText(trimmed);
    }
  }

  onSpeechRecognized(text: string): void {
    this.textTyped.set(text);
  }
}
