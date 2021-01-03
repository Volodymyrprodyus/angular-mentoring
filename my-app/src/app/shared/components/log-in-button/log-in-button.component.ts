import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css'],
})
export class LogInButtonComponent implements OnInit {
  public userName: string;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserInfo()?.name?.first + " " + this.auth.getUserInfo()?.name?.last;
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
