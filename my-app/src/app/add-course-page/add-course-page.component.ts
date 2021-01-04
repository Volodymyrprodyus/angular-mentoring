import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../core/service/authentication.service';
import { CoursesService } from '../courses-page/services';
import { Course, UserInfo } from '../models';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  public course$: Observable<Course>;
  public userData$: Observable<UserInfo>;
  public courseId: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private coursesService: CoursesService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    const courseIdToNumber = Number(this.courseId);

    if (this.courseId !== 'addNew') {
      this.course$ = this.coursesService.getCourseById(courseIdToNumber);
    }

    this.userData$ = this.authService.getUserData();
  }

  onCreateNewCourse(course: Partial<Course>): void {
    if (this.course$) {
      this.coursesService.updateCourseItem(course).pipe(
        takeUntil(this.unsubscribe)
      ).subscribe(
        () => this.coursesService.getCoursesList(),
        (err) => console.error(err),
      )
    } else {
      this.coursesService.createCourseItem(course).pipe(
        takeUntil(this.unsubscribe)
      ).subscribe(
        () => this.coursesService.getCoursesList(),
        (err) => console.error(err),
      );
    }
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    console.log("Cancell editing");
    this.router.navigate(['courses']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
