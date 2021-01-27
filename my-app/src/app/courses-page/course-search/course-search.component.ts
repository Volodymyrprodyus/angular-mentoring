import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent {
  @Output() searchPhrase = new EventEmitter<string>();

  public formControlText: FormControl = new FormControl('');

  public onTextType(): void {
    this.searchPhrase.emit(this.formControlText.value);
  }
}
