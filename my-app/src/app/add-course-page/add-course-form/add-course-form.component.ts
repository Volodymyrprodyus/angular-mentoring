import { AfterContentChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Course } from 'src/app/models';
import { ListOption } from 'src/app/models/list-options.model';
import { GlobalConstants } from 'src/app/shared/constans/global-constants';

const DATE_PATTERN: RegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseFormComponent implements OnInit, OnChanges {
  @Input() course: Course;
  @Input() authorsList: ListOption[];

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();

  public value: Partial<Course> = {};
  public coursePageTitle = 'Add New course';
  public form: FormGroup;
  public isStart = true;
  public isValidForm = false;

  public messages = {
    title: '',
    description: '',
    date: '',
    duration: '',
    authors: ''
  };

  get title(): AbstractControl {
    return this.form.get('title');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get date(): AbstractControl {
    return this.form.get('date');
  }

  get duration(): AbstractControl {
    return this.form.get('duration');
  }

  get authors(): FormArray {
    return this.form.get('authors') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  public messagesMapped = GlobalConstants.messages;

  public ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', {validators: [Validators.required, Validators.maxLength(50)], updateOn: 'blur'}],
      description: ['', {validators: [Validators.required, Validators.maxLength(500)], updateOn: 'blur'}],
      date: new FormControl(),
      duration: new FormControl(),
      authors: new FormControl(),
    });
  }

  ngOnChanges(): void {
    if (this.course && this.isStart) {
      this.title.setValue(this.course.name);
      this.description.setValue(this.course.description);
      this.date.setValue(this.course.date);
      this.duration.setValue(this.course.length);
      this.authors.setValue(this.course.authors);
      this.coursePageTitle = 'Edit course';
      this.isStart = false;
    }
  }

  public onClick(controlName: string): void {
    switch (controlName) {
      case 'date':
        this.setMessage(this.date, 'date');
        break;
      case 'duration':
        this.setMessage(this.duration, 'duration');
        break;
      case 'authors':
        this.setMessage(this.authors, 'authors');
        break;
  }
  }

  public onBlur(event: FocusEvent): void {
    if ((event.target as Element).id === 'title') {
      this.setMessage(this.title, 'title');
    }
    if ((event.target as Element).id === 'description') {
      this.setMessage(this.description, 'description');
    }
  }

  public setMessage(control: AbstractControl, controlName: string): void {
    for (const field in this.messages) {
      if (!this[field].errors) {
        this.messages[field] = '';
      }
    }

    if (control.errors) {
      this.messages[controlName] = Object.keys(control.errors)
        .map((key) => this.messagesMapped[controlName][key])
        // tslint:disable-next-line:no-string-literal
        .join(' ') || this.messagesMapped[controlName]['required'];
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onFormSubmit(): void {
    this.isValidForm = true;
  }

  public onValidAuthorsTaken(authors: ListOption[]): void {
    if (this.form.valid && authors) {
      this.authors.setValue([]);
      this.newCourse.emit(
        this.course
          ? { ...this.form.value, id: this.course.id, authors }
          : { ...this.form.value, authors }
        );
    }
  }
}
