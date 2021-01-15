import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfo, UserLogin } from 'src/app/models';
import { ContextStoreFacadeService } from 'src/app/store/context-store/services/store-facade.service';
import { GlobalConstants } from '../../constans/global-constants';

@Component({
  selector: 'app-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.css'],
})
export class LogInButtonComponent implements OnInit, OnDestroy {
  @Input() public userData: UserInfo;
  private userAuthKey = GlobalConstants.userAuthKey;
  public userNameFirst: string;
  public userNameLast: string;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private contextStoreFacadeService: ContextStoreFacadeService) {}

  public ngOnInit(): void {
    this.subscriptions.add(
        this.contextStoreFacadeService.selectUserData().subscribe((userData: UserInfo) => {
          if (userData) {
            this.userNameFirst = userData.name.first;
            this.userNameLast = userData.name.last;
          } else {
            this.userNameFirst = this.getLocalStorageData().login;
            this.userNameLast = this.getLocalStorageData().login;
          }
        })
    );
}

  onLogout(): void {
    this.contextStoreFacadeService.dispatchLogOut();
    this.router.navigate(['login']);
  }

  getLocalStorageData(): UserLogin {
    return JSON.parse(window.localStorage.getItem(this.userAuthKey));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}
}
