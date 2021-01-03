import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const excludedUrls: string[] = [
      'http://localhost:3004/auth/login',
      'http://localhost:3004/auth/userinfo',
    ];

    if (excludedUrls.some((url: string) => request.url.includes(url))) {
      return next.handle(request);
    }

    const newRequest: HttpRequest<any> = request.clone({
      setHeaders: {
        'Authorization': `${this.authService.getUserInfo().fakeToken}`,
      },
    });
    return next.handle(newRequest);
  }
}
