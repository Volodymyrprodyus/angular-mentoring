import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadMoreComponent } from './load-more.component';



@NgModule({
  declarations: [LoadMoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadMoreComponent
  ]
})
export class LoadMoreModule { }
