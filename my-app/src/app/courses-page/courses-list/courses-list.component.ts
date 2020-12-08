import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListComponent {
  @Input() courses: Course[];

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();
  @Output() loadmoreCourse = new EventEmitter<void>();

  constructor() { }

  onCourseDelete(course: Course): void {
    this.delete.emit(course);
  }

  onCourseEdit(course: Course): void {
    this.edit.emit(course);
  }

  onLoadMoreCourses(): void {
    this.loadmoreCourse.emit();
  }
}
