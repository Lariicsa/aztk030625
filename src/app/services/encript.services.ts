import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import type { EncriptResponse } from '../encription/interfaces/encript.interface';

@Injectable({ providedIn: 'root' })
export class EncriptService {
  private http = inject(HttpClient);

  constructor() {
    this.getTextEncription();
  }

  getTextEncription() {
    this.http.get<EncriptResponse>(`${environment.apiUrl}/pikachu`).subscribe((res)=>{
      console.log([res])
    });
  }
}
