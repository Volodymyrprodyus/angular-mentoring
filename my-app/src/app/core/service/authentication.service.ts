import { Injectable } from '@angular/core';

import { UserLogin } from '../../models/user-login.model';
import{ GlobalConstants } from '../../shared/constans/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userAuthKey = GlobalConstants.userAuthKey;

  login(value: UserLogin): void {
    window.localStorage.setItem(this.userAuthKey, JSON.stringify(value));
  }

  logout(): void {
    window.localStorage.removeItem(this.userAuthKey);
  }

  isAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  getUserInfo(): UserLogin {
    return JSON.parse(window.localStorage.getItem(this.userAuthKey));
  }
}
