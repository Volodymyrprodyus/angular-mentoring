import { Component } from '@angular/core';
import { CoursesService } from '../courses-page';
import { Course } from '../models';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {
  
  constructor(private coursesService: CoursesService) {}

  onCreateNewCourse(course: Partial<Course>): void {
    this.coursesService.createCourseItem(course);
  }

  onCancel(): void {
    console.log("Cancell editing");
  }
}
