import { Component, OnInit } from '@angular/core';
import { ContextStoreFacadeService } from './store/context-store/services/store-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'my-app';

  constructor(private contextStoreFacadeService: ContextStoreFacadeService) {}

  public ngOnInit(): void {
    this.contextStoreFacadeService.dispatchFetchCoursesList();

  }
}
