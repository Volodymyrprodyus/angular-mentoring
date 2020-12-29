import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { CoursesPageModule } from './courses-page';
import { LoginPageModule } from './login-page';
import { CoreModule } from './core';
import { AddCoursePageModule } from './add-course-page';
import { NotFoundPageModule } from './no-found-page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    CoursesPageModule,
    FooterModule,
    AppRoutingModule,
    AddCoursePageModule,
    NotFoundPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
