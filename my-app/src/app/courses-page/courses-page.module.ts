import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseButtonModule } from './add-course-button/add-course-button.module';
import { CourseItemModule } from './course-item/course-item.module';
import { CourseSearchModule } from './course-search/course-search.module';
import { CoursesListModule } from './courses-list/courses-list.module';
import { LoadMoreModule } from './load-more/load-more.module';

import { CoursesPageComponent } from './courses-page.component';




@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    AddCourseButtonModule,
    CourseItemModule,
    CourseSearchModule,
    CoursesListModule,
    LoadMoreModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
