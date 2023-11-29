import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  logIn() {}

  signUp() {}

  logOut() {
    localStorage.clear();
    window.location.href = '/';
  }
  isAuthorizated = () => !!localStorage.getItem('token');
}
