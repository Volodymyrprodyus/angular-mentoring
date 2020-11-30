import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {
  inputValue: string;

  @Output() searchPhrase = new EventEmitter<string>();

  onClick(): void {
    this.searchPhrase.emit(this.inputValue);
  }

}
