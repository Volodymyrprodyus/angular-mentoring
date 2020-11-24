import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemModule } from '../course-item/course-item.module';
import { CourseCreationDirective } from '../directives';
import { CoursesListComponent } from './courses-list.component';

@NgModule({
  imports: [CommonModule, CourseItemModule],
  declarations: [CoursesListComponent, CourseCreationDirective],
  exports: [CoursesListComponent],
})

export class CoursesListModule {}
