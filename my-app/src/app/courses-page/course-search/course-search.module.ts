import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CourseSearchComponent],
  exports: [CourseSearchComponent],
})

export class CourseSearchModule {}
