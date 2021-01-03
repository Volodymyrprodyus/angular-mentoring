import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/service/authentication.service';
import { UserInfo } from 'src/app/models';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css'],
})
export class LogInButtonComponent {
  @Input() public userData: UserInfo;
  public userName: string;
  constructor(private auth: AuthenticationService, private router: Router) {}

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
