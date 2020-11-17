import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CourseItemComponent],
  exports: [CourseItemComponent],
})

export class CourseItemModule {}
