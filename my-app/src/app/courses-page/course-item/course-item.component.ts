import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  public isOpen = false;

  @Input() course: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  onEdit(): void {
    this.edit.emit(this.course);
  }

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onCancel(): void {
    this.isOpen = false;
  }

  onDetached(): void {
    this.isOpen = false;
  }
}
