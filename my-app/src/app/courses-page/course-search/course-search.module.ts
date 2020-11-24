import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CourseSearchComponent],
  exports: [CourseSearchComponent],
})

export class CourseSearchModule {}
