import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { CoursesService } from '../courses-page/services';
import { Course, UserInfo } from '../models';
import { ListOption } from '../models/list-options.model';
import { ContextStoreFacadeService } from '../store/context-store/services/store-facade.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  public isCourseInList = false;
  public course$: Observable<Course>;
  public courses$: Observable<Course[]> = this.contextStoreFacadeService.selectCoursesList();
  public authors$: Observable<ListOption[]> = this.contextStoreFacadeService.selectAuthorsList();
  public userData$: Observable<UserInfo> = this.contextStoreFacadeService.selectUserData();
  public courseId: string;
  private unsubscribe: Subject<void> = new Subject();
  private subscriptions: Subscription = new Subscription();

  constructor(private coursesService: CoursesService,
              private contextStoreFacadeService: ContextStoreFacadeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.contextStoreFacadeService.selectCoursesList().subscribe((courses: Course[]) => {
      this.isCourseInList = Boolean(courses.find((courseItem) => courseItem.id === Number(this.route.snapshot.paramMap.get('id'))));
      })
  );
    this.courseId = this.route.snapshot.paramMap.get('id');
    const courseIdToNumber = Number(this.courseId);

    if (this.courseId !== 'addNew') {
      this.course$ = this.coursesService.getCourseById(courseIdToNumber);
    }

    this.contextStoreFacadeService.dispatchFetchAuthorsList();

  }

  onCreateNewCourse(course: Partial<Course>): void {
    if (this.isCourseInList) {
      this.contextStoreFacadeService.dispatchUpdateCourse({ course });
      console.log('this.isCourseInList true');

    } else {
      console.log('this.isCourseInList false');
      this.contextStoreFacadeService.dispatchAddCourse({ course });

    }
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.subscriptions.unsubscribe();
  }
}
