import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private baseUrl = 'https://coffee.alexflipnote.dev'; // URL base da API

  constructor(private http: HttpClient) {}

  getCoffeesByType(type: string): Observable<any[]> {
    // Simula um filtro por tipo
    const url = `${this.baseUrl}/filter?coffeeType=${type}`;
    return this.http.get<any[]>(url);
  }
}
