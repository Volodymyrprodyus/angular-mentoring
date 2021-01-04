import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AuthGuard } from './core/guards/auth.guard';

import { CoursesPageComponent } from './courses-page/courses-page.component';

import { LoginPageComponent } from './login-page';
import { NotFoundPageComponent } from './no-found-page';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () => import('./courses-page').then(m => m.CoursesPageModule),
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
