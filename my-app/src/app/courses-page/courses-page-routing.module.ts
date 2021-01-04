import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CoursesPageComponent },
      { path: 'new', component: AddCoursePageComponent },
      { path: ':id', component: AddCoursePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {}
