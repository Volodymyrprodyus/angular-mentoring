import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAuthorsComponent {}
