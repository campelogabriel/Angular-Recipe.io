import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url: string = 'http://localhost:8000/api/v1/users';

  constructor(private http: HttpClient) {}

  setToFavorite(obj: any, type?: string): Observable<any> {
    if (type == 'delete') {
      console.log(obj);
      return this.http.delete<any>(`${this.url}/recipeFavorite`, obj);
    } else {
      console.log(obj);
      return this.http.post<any>(`${this.url}/recipeFavorite`, obj);
    }
  }
}
