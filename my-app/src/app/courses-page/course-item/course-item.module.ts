import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DurationPipe } from '../../shared/pipes';
import { CourseItemComponent } from './course-item.component';
import { CourseDeleteDialogComponent } from '../course-delete-dialog';

@NgModule({
  imports: [CommonModule, FormsModule, OverlayModule],
  declarations: [CourseItemComponent, DurationPipe, CourseDeleteDialogComponent],
  exports: [CourseItemComponent, CourseDeleteDialogComponent],
})

export class CourseItemModule {}
