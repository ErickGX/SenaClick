import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  public loginAdmin(dados: any): Observable<any> {
    console.log('Service porra:', JSON.stringify(dados, null, 2));

    return this.http.post(`${this.apiUrl}/admin/login`, dados);
  }

  public deleteUser(dados: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cliente/${dados}`);
  }

  public getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cliente`);
  }

  public getAssinaturas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/assinaturas`);
  }
}
