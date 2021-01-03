import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';

import { v4 as uuidv4 } from 'uuid';
import { HttpService } from 'src/app/core/service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private paginationSize: number = 3;

  constructor(private httpService: HttpService) { }

  getCoursesList(): Observable<Course[]> {
    const requestBody = {
      count: this.paginationSize,
      sort: 'date'
    }
    return this.httpService.getCourses(requestBody);
  }

  createCourseItem(course: Partial<Course>): Observable<Course> {
    const createdCourse = this.changeCourse(course)
    return this.httpService.addCourse(createdCourse);
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpService.getCourse(id);
  }

  getSearchedCourses(searchPhrase: string) {
    const requestBody = {
      textFragment: searchPhrase,
      sort: 'date'
    }
    return this.httpService.getCourses(requestBody);
  }

  updateCourseItem(course: Partial<Course>): Observable<Course> {
    const updatedCourse = this.changeCourse(course);
    return this.httpService.updateCourse(updatedCourse);
  }

  removeCourseItem(course: Course): Observable<Course> {
    return this.httpService.deleteCourse(course.id);
  }

  loadMoreCourses(): Observable<Course[]> {
    this.paginationSize += 3;

    const requestBody = {
      count: this.paginationSize,
      sort: 'date'
    }

    return this.httpService.getCourses(requestBody);
  }

  private changeCourse(course : Partial<Course>): Course {
    return {
      id: course.id || uuidv4(),
      name: course.name || null,
      date: course.date || null,
      length: course.length || null,
      description: course.description || null,
      authors: {
        id: course?.authors?.id || null,
        name: course?.authors?.name || null,
      },
      isTopRated: course.isTopRated
    }
  }
}
