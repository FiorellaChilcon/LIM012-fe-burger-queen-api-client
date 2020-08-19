import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginData {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})

export class BurgerQueenDataService {
  url: string = 'http://ec2-13-58-43-131.us-east-2.compute.amazonaws.com';

  constructor(private http: HttpClient) { }
  getAuthToken(data: LoginData) {
    return this.http.post<any>(`${this.url}/auth`, data);
  }
}
