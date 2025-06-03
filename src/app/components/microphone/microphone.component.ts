import { Component, EventEmitter, Output } from '@angular/core';
import {
  SpeechRecognition,
  SpeechRecognitionEvent,
} from '../../interfaces/microphone.interface';

@Component({
  selector: 'app-microphone',
  standalone: true,
  templateUrl: './microphone.component.html',
})
export class MicrophoneComponent {
  @Output() textRecognized = new EventEmitter<string>();
  isListening: boolean = false;
  private recognition: SpeechRecognition | null = null;

  constructor() {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition!.lang = 'es-ES';
      this.recognition!.interimResults = false;
      this.recognition!.maxAlternatives = 1;

      this.recognition!.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript;
        this.textRecognized.emit(result);
        this.isListening = false;
      };

      this.recognition!.onerror = (event: any) => {
        console.error('Error de reconocimiento de voz:', event.error);
        this.isListening = false;
      };

      this.recognition!.onend = () => {
        this.isListening = false;
      };
    } else {
      console.warn('Este navegador no soporta reconocimiento de voz.');
    }
  }

  startListening(): void {
    if (this.recognition && !this.isListening) {
      this.recognition.start();
      this.isListening = true;
    }
  }

  stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }
}
