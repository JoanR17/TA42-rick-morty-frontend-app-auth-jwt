import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://jmm-spring-api-h2-angular.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>
  {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any>
  {
    return this.http.post(AUTH_API + 'users', {
      username,
      email,
      password
    }, httpOptions);
  }

  usuario(username: string): Observable<any>
  {
    console.log(AUTH_API + `users/${username}`);
    return this.http.get(AUTH_API + `users/${username}`);
  }
}
