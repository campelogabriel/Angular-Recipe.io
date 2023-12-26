import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      const authReq = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });

      return next.handle(authReq).pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
    }
    return next.handle(req);
  }
}
