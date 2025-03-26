import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanoService {


  private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  // Agora com tipagem explícita
  public getPlanos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/plano`);
  }


}
