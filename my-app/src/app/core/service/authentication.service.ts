import { Injectable } from '@angular/core';

import { UserLogin } from '../../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn: boolean = false; 
  private UserAuthKey: string = 'User_authKey';

  constructor() {}

  login(key: string, value: UserLogin): void {
    window.localStorage.setItem(key, JSON.stringify(value));
    this.isLoggedIn = true;
  }

  logout(key: string = this.UserAuthKey): void {
    window.localStorage.removeItem(key);
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(key: string = this.authKey): UserLogin {
    return JSON.parse(window.localStorage.getItem(key));
  }
}
