import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/models';


@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseFormComponent {
  value: Partial<Course> = {};

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();

  onSave(): void {
    this.newCourse.emit(this.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
