import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserAuthenticated() ? true : this.router.parseUrl('/login');
  }
}
