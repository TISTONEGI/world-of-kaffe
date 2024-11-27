import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private baseUrl = 'https://api.example.com/coffees'; // Substitua pela URL correta da API

  constructor(private http: HttpClient) {}

  // Implementação do método getCoffeesByType
  getCoffeesByType(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?type=${type}`);
  }
}
