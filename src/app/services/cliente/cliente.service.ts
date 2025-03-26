import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

    public cadastrarClientes(dados: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/cliente`, dados);
  }

}
