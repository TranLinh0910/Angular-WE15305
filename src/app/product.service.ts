import { Injectable } from '@angular/core';
import { MockData } from './MockData';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'https://60f4d47a2208920017f39e13.mockapi.io/product';
  products: Product[] = MockData;
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }
  getInfo(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  addProduct(item: any): Observable<Product>{
    return this.http.post<Product>(this.API, item);
  }
  removeProduct(id: Number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  updateProduct(item: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${item.id}`, item);
  }
}
