import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDateComponent {
  @Input() courseDate: Date;

  @Output() courseDateChange = new EventEmitter<Date>();

  onDateChange(model: Date): void {
    this.courseDate = model;
    this.courseDateChange.emit(model);
  }
}
