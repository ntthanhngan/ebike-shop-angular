import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "http://localhost:3000/category";

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.url, { responseType: "json" })
      .pipe(tap((_) => console.log('fetched cat')))
  }
}
