import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpService } from './http.service';

import { UserLogin } from '../../models/user-login.model';
import{ GlobalConstants } from '../../shared/constans/global-constants';
import { Token, UserInfo } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userAuthKey = GlobalConstants.userAuthKey;

  constructor(private httpService: HttpService) {}

  public login(value: UserLogin): Observable<UserInfo> {
    return this.httpService.getAuthToken(value)
    .pipe(
      tap(token => window.localStorage.setItem(this.userAuthKey, JSON.stringify({...token, ...value}))),
      switchMap(token => this.getUserInfo(token)),
    );
  }

  public getUserInfo(token): Observable<UserInfo> {
    return this.httpService.getUserInfo(token);
  }

  public isAuthenticated(): Observable<boolean> {
    const isAuthDone = this.getLocalStorageData() !== null;
    return of(isAuthDone);
  }

  getLocalStorageData(): UserLogin {
    return JSON.parse(window.localStorage.getItem(this.userAuthKey));
  }
}
