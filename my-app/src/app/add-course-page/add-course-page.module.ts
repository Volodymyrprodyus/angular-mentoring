import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCoursePageComponent } from './add-course-page.component';
import { BreadcrumbsModule } from '../shared/components/breadcrumbs';
import { HeaderModule } from '../shared/components/header';
import { LogInButtonModule } from '../shared/components/log-in-button';
import { CoursesPageModule } from '../courses-page';
import { FakeLogoModule } from '../shared/components/fake-logo';
import { AddCourseFormComponent } from './add-course-form';
import { CourseAuthorsComponent } from './course-authors';
import { CourseDateComponent } from './course-date';
import { CourseDurationComponent } from './course-duration';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    AddCourseFormComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    HeaderModule,
    LogInButtonModule,
    CoursesPageModule,
    FakeLogoModule,
    RouterModule,
  ],
  exports: [AddCoursePageComponent],
})
export class AddCoursePageModule {}
