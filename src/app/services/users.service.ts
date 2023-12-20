import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url: string = 'http://localhost:8000/api/v1/users';

  constructor(private http: HttpClient) {}

  setToFavorite(obj: any): Observable<any> {
    return this.http.post<any>(`${this.url}/updateRecipeFav`, obj);
  }
}
