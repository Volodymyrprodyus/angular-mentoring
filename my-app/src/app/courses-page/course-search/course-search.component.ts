import { Component } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {
  inputValue: string;

  onClick(): void {
    console.log(`You try to find: ${this.inputValue}`);
  }

}
