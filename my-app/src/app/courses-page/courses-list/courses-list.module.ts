import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemModule } from '../course-item/course-item.module';
import { CourseCreationDirective } from '../../shared/directives';
import { CoursesListComponent } from './courses-list.component';

@NgModule({
  imports: [CommonModule, CourseItemModule],
  declarations: [CoursesListComponent, CourseCreationDirective],
  exports: [CoursesListComponent],
  providers: []
})

export class CoursesListModule {}
