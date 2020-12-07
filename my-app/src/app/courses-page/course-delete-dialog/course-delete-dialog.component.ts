import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-course-delete-dialog',
  templateUrl: './course-delete-dialog.component.html',
  styleUrls: ['./course-delete-dialog.component.scss']
})
export class CourseDeleteDialogComponent {
  @Input() course: Course;
  
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
