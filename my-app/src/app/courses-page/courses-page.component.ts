import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Course } from '../models/course.model';
import { CoursesService } from './services';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  public foundCourses: Course[];
  public searchPhrase: string;
  public courses$: Observable<Course[]>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCoursesList();
  }

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourseItem(course).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      () => {
        this.courses$ = this.searchPhrase 
          ? this.coursesService.getSearchedCourses(this.searchPhrase) 
          : this.coursesService.getCoursesList();
      },
      (err) => console.error(err),
    )
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
    this.courses$ = this.coursesService.loadMoreCourses();
  }

  onCourseSearch(searchPhrase: string): void {
    this.searchPhrase = searchPhrase;
    this.courses$ = this.coursesService.getSearchedCourses(searchPhrase);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
