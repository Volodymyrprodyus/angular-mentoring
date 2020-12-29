import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDateComponent {
  public date: string;

  @Input()
  get courseDate(): string { return this.date; }
  set courseDate(date: string) {
    if (date) {
      this.date = date.substring(0, 10);
    }
  }

  @Output() courseDateChange = new EventEmitter<string>();

  onDateChange(model: string): void {
    this.courseDateChange.emit(model);
  }
}
