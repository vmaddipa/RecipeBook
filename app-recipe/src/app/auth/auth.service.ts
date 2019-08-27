import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<any> {
    console.log('url from service', `${environment.apiBase}/api/signup`);
    return this.http.post(`${environment.apiBase}/api/signup`, user);
  }

  login(user: User) {
    return this.http.post(`${environment.apiBase}/api/login`, user);
  }
}
