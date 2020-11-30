import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemModule } from '../course-item/course-item.module';
import { CourseCreationDirective } from '../../shared/directives';
import { FilterPipe, OrderByPipe } from '../../shared/pipes';
import { CoursesListComponent } from './courses-list.component';

@NgModule({
  imports: [CommonModule, CourseItemModule],
  declarations: [CoursesListComponent, CourseCreationDirective, OrderByPipe, FilterPipe],
  exports: [CoursesListComponent],
  providers: [FilterPipe]
})

export class CoursesListModule {}
