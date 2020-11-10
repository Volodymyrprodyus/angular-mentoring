import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo.component';



@NgModule({
  declarations: [FakeLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FakeLogoComponent
  ]
})
export class FakeLogoModule { }
