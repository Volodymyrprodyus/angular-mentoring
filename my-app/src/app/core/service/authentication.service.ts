import { Injectable } from '@angular/core';

import { UserLogin } from '../../models/user-login.model';
import{ GlobalConstants } from '../../shared/constans/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn: boolean = false; 
  userAuthKey = GlobalConstants.userAuthKey;

  constructor() {}

  login(key: string, value: UserLogin): void {
    window.localStorage.setItem(key, JSON.stringify(value));
    this.isLoggedIn = true;
  }

  logout(key: string = this.userAuthKey): void {
    window.localStorage.removeItem(key);
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(key: string = this.userAuthKey): UserLogin {
    return JSON.parse(window.localStorage.getItem(key));
  }
}
