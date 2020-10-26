import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CourseItemComponent } from './components/courses-page/courses-list/course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    FakeLogoComponent,
    CoursesListComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
