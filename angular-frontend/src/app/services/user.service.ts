import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/auth";

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
    const body = { email, password }
    return this.http.post<User[]>(this.url + "/login", { responseType: "json" })
      .pipe(tap((_) => console.log('login successfull')))
  }

  checklogin() {
    let status = false;
    if (localStorage.getItem('idLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status
  }

}


