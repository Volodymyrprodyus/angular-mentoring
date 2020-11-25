import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models/course.model';
import { DurationPipe } from '../pipes/duration.pipe';
import { CourseItemComponent } from './course-item.component';

@Component({
  template: `
    <app-course-item
      [course]="course"
      (edit)="onCourseEdit($event)"
      (delete)="onCourseDelete($event)"
    ></app-course-item>
  `,
})
class CourseItemHostTestComponent {
  course: Course = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: new Date('2020/10/10'),
    duration: 28,
    description: 'test description',
  };

  mockDate = {
    day: this.course.creationDate.getDate(),
    month: this.course.creationDate.getMonth() + 1,
    year: this.course.creationDate.getFullYear().toString().substr(-2),
  };

  editedCourse: Course;
  deletedCourse: Course;

  onCourseEdit(course: Course): void {
    this.editedCourse = course;
  }

  onCourseDelete(course: Course): void {
    this.deletedCourse = course;
  }
}

describe('CourseItemComponent', () => {
  let testingHost: CourseItemHostTestComponent;
  let fixture: ComponentFixture<CourseItemHostTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, CourseItemHostTestComponent, DurationPipe],
    });
    fixture = TestBed.createComponent(CourseItemHostTestComponent);
    testingHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show correct title, date & time', () => {
    const courseTitle = fixture.debugElement.query(By.css('.item-title'));
    const courseDate = fixture.debugElement.query(By.css('.date'));
    const courseTime = fixture.debugElement.query(By.css('.time'));
    const courseDescription = fixture.debugElement.query(
      By.css('.item-description')
    );

    const courseTitleElem = courseTitle.nativeElement;
    const courseDateElem = courseDate.nativeElement;
    const courseTimeElem = courseTime.nativeElement;
    const courseDescriptionElem = courseDescription.nativeElement;

    const hours = Math.floor(testingHost.course.duration / 60);
    const minutes = Math.floor(testingHost.course.duration % 60);
    const mockCourseDuration = (hours) ? `${hours} h ${minutes} min` : `${minutes} min`;

    expect(courseTitleElem.textContent).toContain(testingHost.course.title.toUpperCase());
    expect(courseDateElem.textContent).toContain(
      `${testingHost.mockDate.month}/${testingHost.mockDate.day}/${testingHost.mockDate.year}`
    );

    expect(courseTimeElem.textContent).toContain(mockCourseDuration);

    expect(courseDescriptionElem.textContent).toContain(
      testingHost.course.description
    );
  });

  it('should edit course-item', () => {
    const editButton = fixture.debugElement.query(By.css('.edit-button'));
    editButton.triggerEventHandler('click', null);
    expect(testingHost.editedCourse).toBe(testingHost.course);
  });

  it('should delete course-item', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.triggerEventHandler('click', null);
    expect(testingHost.deletedCourse).toBe(testingHost.course);
  });
});
