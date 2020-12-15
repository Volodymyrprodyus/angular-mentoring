import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses-page';
import { Course } from '../models';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {
  public course: Course;
  public courseId: string;

  constructor(private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.courseId = this.route.snapshot.paramMap.get('id');
      const courseIdToNumber = Number(this.courseId);
  
      if (this.courseId !== 'addNew') {
        this.course = {...this.coursesService.getCourseById(courseIdToNumber)};
      }
    }

  onCreateNewCourse(course: Partial<Course>): void {
    this.course ? this.coursesService.updateCourseItem(course) : this.coursesService.createCourseItem(course);
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    console.log("Cancell editing");
    this.router.navigate(['courses']);
  }
}
