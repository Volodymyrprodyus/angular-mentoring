import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FakeLogoModule } from '../shared/components/fake-logo/fake-logo.module';
import { LogInButtonModule } from '../shared/components/log-in-button/log-in-button.module';
import { LogOutButtonModule } from '../shared/components/log-out-button/log-out-button.module';
import { BreadcrumbsModule } from '../shared/components/breadcrumbs/breadcrumbs.module';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseSearchComponent,
    CoursesListComponent,
    CourseItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    BreadcrumbsModule,
    FakeLogoModule,
    LogInButtonModule,
    LogOutButtonModule,
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
