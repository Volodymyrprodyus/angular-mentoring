import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FakeLogoModule } from '../fake-logo/fake-logo.module';
import { LogInButtonModule } from '../log-in-button/log-in-button.module';
import { LogOutButtonModule } from '../log-out-button/log-out-button.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FakeLogoModule,
    LogInButtonModule,
    LogOutButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
