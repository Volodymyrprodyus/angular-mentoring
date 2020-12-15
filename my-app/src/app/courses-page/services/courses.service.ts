import { Injectable } from '@angular/core';

import { Course } from '../../models/course.model';

import { v4 as uuidv4 } from 'uuid';

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

  createCourseItem(course: Partial<Course>): Course[] {
    const createdCourse = this.changeCourse(course)
    return [...this.courses, createdCourse];
  }

  getCourseById(id: number): Course {
    return this.courses.find(courseItem => courseItem.id === id);
  }

  updateCourseItem(course: Partial<Course>): void {
    const updatedCourseId = this.changeCourse(course).id;
    this.courses = this.courses.map(course => course.id === updatedCourseId ? this.changeCourse(course) : course);
  }

  removeCourseItem(course: Course): void {
    this.courses = this.courses.filter(courseItem => courseItem !== course);
  }

  private changeCourse(course : Partial<Course>): Course {
    return {
      id: course.id,
      title: course.title || null,
      creationDate: new Date(course.creationDate) || null,
      duration: course.duration || null,
      description: course.description || null
    }
  }
}
