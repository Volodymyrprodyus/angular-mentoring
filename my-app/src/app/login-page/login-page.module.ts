import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '../shared/components/header';
import { FakeLogoModule } from '../shared/components/fake-logo';
import { LogInButtonModule } from '../shared/components/log-in-button';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, HeaderModule, ReactiveFormsModule, FakeLogoModule, LogInButtonModule,],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
