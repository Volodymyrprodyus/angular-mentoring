import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpService } from './http.service';

import { UserLogin } from '../../models/user-login.model';
import{ GlobalConstants } from '../../shared/constans/global-constants';
import { UserInfo } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userAuthKey = GlobalConstants.userAuthKey;

  constructor(private httpService: HttpService) {}

  public login(value: UserLogin): Observable<UserInfo> {
    return this.httpService.getAuthToken(value)
    .pipe(
      switchMap((token) => this.httpService.getUserInfo(token)),
      tap((value)=> {
        return window.localStorage.setItem(this.userAuthKey, JSON.stringify(value))
      })
    );
  }

  public logout(): void {
    window.localStorage.removeItem(this.userAuthKey);
  }

  public isUserAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  public getUserInfo(): UserInfo {
    return JSON.parse(window.localStorage.getItem(this.userAuthKey));
  }

  public getUserData(): Observable<UserInfo> {
    return of(this.getUserInfo());
  }

  public isAuthenticated(): Observable<boolean> {
    return of(this.isUserAuthenticated());
  }
}
