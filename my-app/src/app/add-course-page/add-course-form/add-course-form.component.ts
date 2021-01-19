import { AfterContentChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  get titleName() {
    return this.form.get("titleName");
  }

  get description() {
    return this.form.get("description");
  }

  get date() {
    return this.form.get("date");
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      titleName: [this.value.name, [Validators.required, Validators.maxLength(5)]],
      description: [this.value.description, [Validators.required, Validators.maxLength(500)]],
      date: ["", [Validators.required, Validators.minLength(9)]]
    })
    
  }

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

  onFormSubmit() {
    console.log('onFormSubmit()');
  }
}
