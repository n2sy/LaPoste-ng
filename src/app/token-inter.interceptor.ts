import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('access_token');
    if (token) {
      let cloneReq = request.clone({
        headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const login_interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterInterceptor,
  multi: true,
};
