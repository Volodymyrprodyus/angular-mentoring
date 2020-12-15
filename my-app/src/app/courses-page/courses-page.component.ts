import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course.model';
import { FilterPipe } from '../shared/pipes';
import { CoursesService } from './services';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  foundCourses: Course[];

  get filteredCourses() {
    return this.foundCourses ? this.foundCourses : this.courses;
  }

  get courses() {
    return this.coursesService.getCoursesList();
  }

  get isCoursesAvailable() {
    return !!this.filteredCourses.length;
  }

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) {}

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourseItem(course);
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
  }

  onCourseSearch(searchPhrase: string): void {
    this.foundCourses = this.filterPipe.transform(this.courses, searchPhrase);
  }
}
