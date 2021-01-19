import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ContextStoreFacadeService } from './store/context-store/services/store-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'my-app';

  private subscriptions: Subscription = new Subscription();

  constructor(private contextStoreFacadeService: ContextStoreFacadeService) {}

  public ngOnInit(): void {
    this.contextStoreFacadeService.dispatchFetchCoursesList();

    this.subscriptions.add(
      fromEvent(window, 'online').subscribe(() => {
          this.contextStoreFacadeService.dispatchGetIsOnlineStatus(true);
      })
  );

  this.subscriptions.add(
      fromEvent(window, 'offline').subscribe(() => {
          this.contextStoreFacadeService.dispatchGetIsOnlineStatus(false);
      })
  );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}
}
