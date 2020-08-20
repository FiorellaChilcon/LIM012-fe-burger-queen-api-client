import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ordersProduct } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  token: string = localStorage.getItem('token');
  httpHeader = { headers: { Authorization: `Bearer ${this.token}` } };
  products = new BehaviorSubject([]);
  sharedProducts = this.products.asObservable();
  total = new BehaviorSubject(0);
  sharedTotal = this.total.asObservable();
  // total: number = this.products.map((e) => e.price * e.qty).reduce((e, a) => e + a);
  getProducts() {
    return this.http.get<any>(`${this.url}/products`, this.httpHeader);
  }
  addItem(item: ordersProduct) {
    const productsValue = this.products.getValue();
    if (productsValue.some((e) => String(e.productId) === String(item.productId))) {
      const itemIndex = productsValue.findIndex((e) => String(e.productId) === String(item.productId));
      productsValue[itemIndex].qty++;
    } else {
      productsValue.push(item);
      this.products.next(productsValue);
    }
    const newTotal = productsValue.map((e) => e.price * e.qty).reduce((e, a) => e + a);
    this.total.next(newTotal);
  }
}
