import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AuthGuard } from './core/guards/auth.guard';

import { CoursesPageComponent } from './courses-page/courses-page.component';

import { LoginPageComponent } from './login-page';
import { NotFoundPageComponent } from './no-found-page';

const appRoutes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CoursesPageComponent },
      { path: ':id', component: AddCoursePageComponent },
      { path: 'addNew', component: AddCoursePageComponent },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
