import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/Product';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.url, { responseType: "json" })
      .pipe(tap((_) => console.log('fetched products')))
  }

  getById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + "/details/" + id, { responseType: "json" })
      .pipe(map((res) => {
        //console.log(res);
        return <Product[]>res
      }))
  }

  search(query: string): Observable<Product[]> {
    const data = { query: query };
    return this.http.post<Product[]>(this.url + "/search", data)
  }

  paginateProduct(page: number, pageSize: number): Observable<Product[]> {
    const params = new HttpParams().set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Product[]>(this.url + '/paginate', { params })
  }
  /* getProducts(page: number, pageSize: number): Observable<any> {
    const url = `${this.url + '/paginate'}?page=${page}&pageSize=${pageSize}`
    return this.http.get<Product[]>(url);
  } */
}
