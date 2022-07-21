import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// injectable de cac componen choc vao
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:8081/api/products';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Product[]> {
    // @ts-ignore
    return this.httpClient.get(this.API);
  }
  save(product: Product): Observable<any> {
    return this.httpClient.post(this.API, product);
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(this.API + `/${id}`);
  }

  edit(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.API}/${id}`, product);
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API + `/${id}`);
  }
  getByProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + `/category/${id}`);
  }
  searchname(name: any): Observable<Product> {
    return this.httpClient.get<Product>(this.API + `/searchname?name=${name}`);
  }
}
