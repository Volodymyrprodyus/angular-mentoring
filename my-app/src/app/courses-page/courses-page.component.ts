import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: Course[];

  get isCoursesAvailable() {
    return !!this.courses.length;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
    this.courses = [
      new Course(1,
        'Video Course 1. Name tag',
        new Date('2020/11/22'),
        {
          hours: 1,
          minutes: 28
        },
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        true),
      new Course(1,
        'Video Course 1. Name tag',
        new Date('2020/10/28'),
        {
          hours: 1,
          minutes: 28
        },
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        false),
      new Course(1,
        'Video Course 1. Name tag',
        new Date('2020/11/24'),
        {
          hours: 1,
          minutes: 28
        },
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        false),
    ];
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

}
