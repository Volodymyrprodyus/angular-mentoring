import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInButtonComponent } from './log-in-button.component';



@NgModule({
  declarations: [LogInButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogInButtonComponent
  ]
})
export class LogInButtonModule { }
