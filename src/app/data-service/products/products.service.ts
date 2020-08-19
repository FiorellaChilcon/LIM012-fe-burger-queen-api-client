import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  token: string = localStorage.getItem('token');
  httpHeader = { headers: { Authorization: `Bearer ${this.token}` } };
  getProducts() {
    return this.http.get<any>(`${this.url}/products`, this.httpHeader);
  }
}
