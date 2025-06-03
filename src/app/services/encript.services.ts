import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import type { EncriptResponse } from '../encryption/interfaces/encript.interface';

@Injectable({ providedIn: 'root' })
export class EncriptService {
  private http = inject(HttpClient);

  encryptedSignal = signal<string | null>(null);
  errorSignal = signal<string | null>(null);

  constructor() {}

  encryptText(data: string) {
    this.http
      .post<EncriptResponse>(`${environment.apiUrl}`, {
        text: data,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.encryptedSignal.set(response.encrypted);
          this.errorSignal.set(null);
        },
        error: (err: any) => {
          console.error('Error al encriptar:', err);
          this.encryptedSignal.set(null);
          this.errorSignal.set('No se pudo encriptar el texto');
        },
      });
  }
}
