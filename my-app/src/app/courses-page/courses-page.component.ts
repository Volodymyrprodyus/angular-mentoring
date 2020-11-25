import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course.model';
import { FilterPipe } from './pipes';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: Course[];
  filteredCourses: Course[];

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit(): void {
    this.courses = [
      new Course(1,
        'Video Course 1. Name tag',
        new Date('2020/12/01'),
        150,
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        true),
      new Course(1,
        'Video Course 2. Name tag',
        new Date('2020/10/28'),
        320,
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        false),
      new Course(1,
        'Video Course 3. Name tag',
        new Date('2020/11/24'),
        0,
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        false),
    ];

    this.filteredCourses = this.courses;

    this.isCoursesAvailable();
  }

  isCoursesAvailable() {
    return !!this.filteredCourses.length;
  }

  onAddNewCourse(): void {
    console.log('Add new course!');
  }


  onDeleteCourse(course: Course): void {
    console.log(`Delete course ${course.title} with id ${course.id}`);
  }

  onEditCourse(course: Course): void {
    console.log(`Edit course ${course.title} with id ${course.id}`);
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
  }

  onCourseSearch(searchPhrase: string): void {
    this.filteredCourses = this.filterPipe.transform(this.courses, searchPhrase);
  }

}
