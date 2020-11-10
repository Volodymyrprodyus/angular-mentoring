import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    console.log('onEdit');
    this.edit.emit(this.course);
  }

  onDelete(): void {
    console.log('onDelete');
    this.delete.emit(this.course);
  }

}
