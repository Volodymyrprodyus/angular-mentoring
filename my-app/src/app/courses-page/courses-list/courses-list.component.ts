import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})

export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];

  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();
  @Output() loadmoreCourse = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseDelete(course: Course): void {
    this.deleteCourse.emit(course);
  }

  onCourseEdit(course: Course): void {
    this.editCourse.emit(course);
  }

}
