import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core';
import { HttpService } from 'src/app/core/service/http.service';
import { CoursesService } from 'src/app/courses-page/services';
import { Course } from 'src/app/models/course.model';
import * as coursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  public fetchCoursesFromApi$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.fetchCoursesFromApi),
      switchMap(() => this.coursesService.getCoursesList()),
      map((data: Course[]) =>
        coursesActions.fetchCoursesSuccess({ courses: data })
      ),
      catchError(() => of(coursesActions.fetchCoursesError()))
    )
  );

  public loadMoreCourses$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.loadMoreCourses),
      switchMap(() => this.coursesService.loadMoreCourses()),
      map((data: Course[]) =>
        coursesActions.loadMoreCoursesSuccess({ courses: data })
      ),
      catchError(() => of(coursesActions.loadMoreCoursesError()))
    )
  );

  public searchCourses$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.searchCoursesSuccess),
      switchMap(({ searchPhrase }: { searchPhrase: string }) =>
        this.coursesService.getSearchedCourses(searchPhrase)
      ),
      map((data: Course[]) =>
        coursesActions.fetchCoursesSuccess({ courses: data })
      ),
      catchError(() => of(coursesActions.fetchCoursesError()))
    )
  );

  public deleteCourse$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.deleteCourse),
      switchMap(({ course }: { course: Course }) =>
        this.coursesService.removeCourseItem(course)
      ),
      map(() => coursesActions.deleteCourseSuccess()),
      catchError(() => of(coursesActions.deleteCourseError()))
    )
  );

  public addCourse$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.addCourse),
      switchMap(({ course }) => this.coursesService.createCourseItem(course)),
      map(() =>
        coursesActions.addCourseSuccess()
      ),
      catchError(() => of(coursesActions.addCourseError()))
    )
  );

  public updateCourse$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(coursesActions.updateCourse),
      switchMap(({ course }) => this.coursesService.updateCourseItem(course)),
      map(() =>
        coursesActions.updateCourseSuccess()
      ),
      catchError(() => of(coursesActions.updateCourseError()))
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
