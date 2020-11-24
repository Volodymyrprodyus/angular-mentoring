import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  onEdit(): void {
    console.log('onEdit');
    this.edit.emit(this.course);
  }

  onDelete(): void {
    console.log('onDelete');
    this.delete.emit(this.course);
  }

}
