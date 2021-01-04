import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { CoursesPageModule } from './courses-page';
import { LoginPageModule } from './login-page';
import { CoreModule } from './core';
import { AddCoursePageModule } from './add-course-page';
import { NotFoundPageModule } from './no-found-page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { LoadingBlockComponent } from './shared/components/loading-block/loading-block.component';
import { LoaderInterceptor } from './core/interceptors/loading.interceptor';



@NgModule({
  declarations: [	
    AppComponent,
    LoadingBlockComponent,
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
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
      },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
