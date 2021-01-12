import { ElementRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../core/service/authentication.service';
import { UserInfo } from '../models';

import { Course } from '../models/course.model';
import { ContextStoreFacadeService } from '../store/context-store/services/store-facade.service';
import { CoursesService } from './services';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  public foundCourses: Course[];
  public searchPhrase: string;
  public courses$: Observable<Course[]> = this.contextStoreFacadeService.selectCoursesList();
  public userData$: Observable<UserInfo>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private coursesService: CoursesService, private authService: AuthenticationService, private contextStoreFacadeService: ContextStoreFacadeService) {}


  ngOnInit(): void {
    // this.courses$ = this.coursesService.getCoursesList();

    this.userData$ = this.authService.getUserData();
  }

  onDeleteCourse(course: Course): void {
    // this.coursesService.removeCourseItem(course).pipe(
    //   takeUntil(this.unsubscribe)
    // ).subscribe(
    //   () => {
    //     this.courses$ = this.searchPhrase 
    //       ? this.coursesService.getSearchedCourses(this.searchPhrase) 
    //       : this.coursesService.getCoursesList();
    //   },
    //   (err) => console.error(err),
    // )
    if (Boolean(course.id)) {
      this.contextStoreFacadeService.dispatchDeleteCourse({ ...course });
    }
    this.contextStoreFacadeService.dispatchFetchCoursesList();
  }

  onLoadMoreCourses(): void {
    // console.log('Load more courses');
    // this.courses$ = this.coursesService.loadMoreCourses();
    this.contextStoreFacadeService.dispatchLoadMoreCourses();
  }

  onCourseSearch(searchPhrase: string): void {
    // this.searchPhrase = searchPhrase;
    // this.courses$ = this.coursesService.getSearchedCourses(searchPhrase);
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
