import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models';

import { Course } from '../models/course.model';
import { ContextStoreFacadeService } from '../store/context-store/services/store-facade.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  public foundCourses: Course[];
  public searchPhrase: string;
  public courses$: Observable<Course[]> = this.contextStoreFacadeService.selectCoursesList();
  public userData$: Observable<UserInfo> = this.contextStoreFacadeService.selectUserData();
  public isOnline$: Observable<boolean> = this.contextStoreFacadeService.selectIsOnline();
  private unsubscribe: Subject<void> = new Subject();

  constructor( private contextStoreFacadeService: ContextStoreFacadeService) {}


  ngOnInit(): void {
    
  }

  onDeleteCourse(course: Course): void {
    if (Boolean(course.id)) {
      this.contextStoreFacadeService.dispatchDeleteCourse({ ...course });
    }
    this.contextStoreFacadeService.dispatchFetchCoursesList();
  }

  onLoadMoreCourses(): void {
    this.contextStoreFacadeService.dispatchLoadMoreCourses();
  }

  onCourseSearch(searchPhrase: string): void {
    this.contextStoreFacadeService.dispatchSearchCourses(searchPhrase);

    if (searchPhrase === '') {
      this.contextStoreFacadeService.dispatchFetchCoursesList();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
