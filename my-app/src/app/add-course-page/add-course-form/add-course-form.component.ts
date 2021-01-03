import { AfterContentChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models';


@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseFormComponent implements AfterContentChecked {
  @Input() course: Course;

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();

  public value: Partial<Course> = {};
  public coursePageTitle: string = "Add New course";

  ngAfterContentChecked(): void {
    if (this.course) {
      this.value = this.course;
      this.coursePageTitle = "Edit course";
    };
  }

  onSave(): void {
    this.newCourse.emit(this.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
