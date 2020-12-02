import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css']
})
export class LogInButtonComponent {

  constructor(private auth: AuthenticationService) {}

  onLogout(): void {
    const userName = this.auth.getUserInfo()?.email;
    this.auth.logout();
    userName ? console.log(`Logout ${userName}`) : console.error('User wasn\'n Logged In');
  }
}
