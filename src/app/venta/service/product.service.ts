import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  email: string;
  // Otros campos de cliente según la respuesta de la API
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://apitest.pruebasgt.com/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.post<Client[]>(this.apiUrl, {});
  }
}
