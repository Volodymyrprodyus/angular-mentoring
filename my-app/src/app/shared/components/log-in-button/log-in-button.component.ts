import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css'],
})
export class LogInButtonComponent {
  constructor(public auth: AuthenticationService, private router: Router) {}

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
