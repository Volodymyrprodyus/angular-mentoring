import { Injectable } from '@angular/core';

import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
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

  constructor() { }

  getCoursesList(): Course[] {
    return this.courses;
  }

  createCourseItem(course: Course): void {
    this.courses.push(course);
  }

  getCourseById(id: number): Course {
    return this.courses.find(courseItem => courseItem.id === id);
  }

  updateCourseItem(course: Course): Course[] {
    return [...this.courses, course];
  }

  removeCourseItem(course: Course): void {
    this.courses = this.courses.filter(courseItem => courseItem !== course);
  }
}
