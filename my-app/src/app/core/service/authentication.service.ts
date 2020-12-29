import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UserInfo } from 'src/app/models/user-info.model';
import { HttpService } from '.';

import { UserLogin } from '../../models/user-login.model';
import{ GlobalConstants } from '../../shared/constans/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userAuthKey = GlobalConstants.userAuthKey;

  constructor(private httpService: HttpService) {}

  login(value: UserLogin): Observable<UserInfo> {
    return this.httpService.getAuthToken(value).pipe(
      switchMap(token => this.httpService.getUserInfo(token)),
      tap(value => console.log(window.localStorage.setItem(this.userAuthKey, JSON.stringify(value))))
    );
  }

  logout(): void {
    window.localStorage.removeItem(this.userAuthKey);
  }

  isUserAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  getUserInfo(): UserInfo {
    return JSON.parse(window.localStorage.getItem(this.userAuthKey));
  }
}
