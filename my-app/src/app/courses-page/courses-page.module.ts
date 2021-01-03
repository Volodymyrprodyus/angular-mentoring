import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { CoursesPageComponent } from './courses-page.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FakeLogoModule } from '../shared/components/fake-logo/fake-logo.module';
import { LogInButtonModule } from '../shared/components/log-in-button/log-in-button.module';
import { BreadcrumbsModule } from '../shared/components/breadcrumbs/breadcrumbs.module';
import { CourseSearchModule } from './course-search';
import { CoursesListModule } from './courses-list/courses-list.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';



@NgModule({
  declarations: [
    CoursesPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    HeaderModule,
    BreadcrumbsModule,
    FakeLogoModule,
    LogInButtonModule,
    CourseSearchModule,
    CoursesListModule,
    CoursesPageRoutingModule,
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
