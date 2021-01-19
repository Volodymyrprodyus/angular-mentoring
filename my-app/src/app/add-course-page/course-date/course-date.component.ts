import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseDateComponent),
    multi: true
   }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDateComponent implements ControlValueAccessor {
  private _courseDate: string;
  // public date: string;

  get courseDate(): string { return this._courseDate; }

  @Input()
  // get courseDate(): string { return this.date; }
  set courseDate(date: string) {
    if (date) {
      this._courseDate = date.substring(0, 10);
      this.onChange(this._courseDate);
    }
  }

  @Output() courseDateChange = new EventEmitter<string>();

  onChange(_: any) {};

  writeValue(value: any): void {
    this.courseDate = value;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}

  onDateChange(model: string): void {
    this.courseDateChange.emit(model);
  }
}
