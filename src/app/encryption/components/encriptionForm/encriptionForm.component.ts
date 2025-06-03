import { Component, inject, signal, computed } from '@angular/core';
import { EncriptService } from '../../../services/encript.services';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MicrophoneComponent } from 'src/app/components/microphone/microphone.component';

@Component({
  selector: 'encription-form',
  standalone: true,
  imports: [FormsModule, NgIf, MicrophoneComponent],
  templateUrl: './encriptionForm.component.html',
})
export class EncriptionFormComponent {
  textTyped: string = '';
  private encriptService = inject(EncriptService);
  encryptedResponse = computed(() => this.encriptService.encryptedSignal());

  onTextTyped(): void {
    const trimmed = this.textTyped.trim();
    if (trimmed.length > 0) {
      this.encriptService.encryptText(trimmed);
    }
  }

  onSpeechRecognized(text: string): void {
    this.textTyped = text;
  }
}
