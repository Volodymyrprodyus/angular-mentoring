import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogOutButtonComponent } from './log-out-button.component';



@NgModule({
  declarations: [LogOutButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogOutButtonComponent
  ]
})
export class LogOutButtonModule { }
