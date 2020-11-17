import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})

export class CoursesListComponent {
  @Input() courses: Course[];

  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();
  @Output() loadmoreCourse = new EventEmitter<void>();

  constructor() { }

  onCourseDelete(course: Course): void {
    this.deleteCourse.emit(course);
  }

  onCourseEdit(course: Course): void {
    this.editCourse.emit(course);
  }

  onLoadMoreCourses(value?: any): void {
    this.loadmoreCourse.emit(value);
  }
}
