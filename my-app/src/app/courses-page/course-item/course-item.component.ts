import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  public isOpen = false;

  @Input() course: Course;

  @Output() delete = new EventEmitter<Course>();

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onCancel(): void {
    this.isOpen = false;
  }
}
