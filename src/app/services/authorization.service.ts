import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Login } from '../models/account/login';
import { Signup } from '../models/account/signup';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  readonly url: string = 'http://localhost:8000/api/v1/users';

  private subUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private subIsLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  constructor(private http: HttpClient) {}

  logIn(userLogIn: Login): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, userLogIn).pipe(
      tap((u) => {
        this.subIsLogged$.next(true);
        this.subUser$.next(u);
      })
    );
  }

  signUp(userSignUp: Signup): Observable<any> {
    return this.http.post<any>(`${this.url}/signup`, userSignUp).pipe(
      tap((u) => {
        console.log(u);
        this.subIsLogged$.next(true);
        this.subUser$.next(u);
      })
    );
  }

  logOut(): Observable<any> {
    localStorage.clear();
    this.subIsLogged$.next(false);
    this.subUser$.next(null);
    return this.subIsLogged$.asObservable();
  }
  isAuthorizated(): Observable<any> {
    return this.subIsLogged$.asObservable();
  }
}
