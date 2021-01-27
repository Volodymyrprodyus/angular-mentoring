import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DurationPipe } from '../../shared/pipes';
import { CourseItemComponent } from './course-item.component';
import { CourseDeleteDialogComponent } from '../course-delete-dialog';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, OverlayModule, RouterModule, SharedModule],
  declarations: [CourseItemComponent, CourseDeleteDialogComponent],
  exports: [CourseItemComponent, CourseDeleteDialogComponent],
})

export class CourseItemModule {}
