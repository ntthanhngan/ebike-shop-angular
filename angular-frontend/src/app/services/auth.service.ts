import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000'; // the URL where the server is running

  constructor(private http: HttpClient) { }

  // send a POST request to the server with the user's username and password
  // as the request body and return an observable that emits the server's response
  login(username: string, password: string) {
    return this.http.post<any>(`${this.BASE_URL}/login`, {
      username,
      password,
    });
  }

  // send a GET request to the server to retrieve the authenticated user's details
  getUserDetails() {
    return this.http.get<any>(`${this.BASE_URL}/user-details`);
  }

  // send a POST request to the server to log the user out
  logout() {
    return this.http.post<any>(`${this.BASE_URL}/logout`, {});
  }

  // check if the user is currently logged in by retrieving the JWT token from a database store
  isLoggedIn() {
    const token = this.getAccessToken();
    if (!token) {
      // no token found, so the user is not logged in
      return false;
    }
    const decodedToken: any = jwt_decode(token); // decode the JWT token
    if (decodedToken.exp < Date.now() / 1000) {
      // token has expired, so remove it from the store and return false
      this.removeAccessToken();
      return false;
    }
    // token is valid and has not expired, so the user is logged in
    return true;
  }

  // store the JWT token in the database store
  setAccessToken(token: string) {
    // Make an API call to the server to store the token in the database
    return this.http.post<any>(`${this.BASE_URL}/access-tokens`, { token });
  }

  // retrieve the JWT token from the database store
  getAccessToken() {
    // Make an API call to the server to retrieve the token from the database
    // and return it as a string
    // You may need to add some error handling here in case the token is not found
    return 'MY_ACCESS_TOKEN';
  }

  // remove the JWT token from the database store
  removeAccessToken() {
    // Make an API call to the server to remove the token from the database
    return this.http.delete<any>(`${this.BASE_URL}/access-tokens`);
  }
}
