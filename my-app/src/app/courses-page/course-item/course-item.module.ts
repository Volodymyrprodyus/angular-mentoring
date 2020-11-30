import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from '../../shared/pipes';
import { CourseItemComponent } from './course-item.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CourseItemComponent, DurationPipe],
  exports: [CourseItemComponent],
})

export class CourseItemModule {}
