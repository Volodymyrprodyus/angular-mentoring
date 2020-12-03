import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css']
})
export class LogInButtonComponent {

  constructor(private auth: AuthenticationService) {}

  onLogin(): void {
    const userName = this.auth.getUserInfo()?.email;
    const userPassword = this.auth.getUserInfo()?.password;
    console.log('User is Logged In');
    this.auth.login('User_authKey', {email: userName, password: userPassword});
  }

  onLogout(): void {
    const userName = this.auth.getUserInfo()?.email;
    this.auth.logout();
    console.log(`Logout ${userName}`);
  }
}
