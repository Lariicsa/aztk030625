import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import type { EncriptResponse } from '../encription/interfaces/encript.interface';

@Injectable({ providedIn: 'root' })
export class EncriptService {
  private http = inject(HttpClient);
  encryptedSignal = signal<string | null>(null);

  constructor() {}

  encryptText(query: string) {
    this.http
      .post<EncriptResponse>(`${environment.apiUrl}`, {
        text: query,
      })
      .subscribe({
        next: (response) => {
          console.log(response);

          this.encryptedSignal.set(response.encrypted);
        },
        error: (err) => {
          console.error('Error al encriptar:', err);
          this.encryptedSignal.set(null);
        },
      });
  }
}
