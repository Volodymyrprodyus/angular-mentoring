import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models';
import { CourseCreationDirective } from './course-creation.directive';

@Component({
  template: `
    <div [appCourseCreation]="mockCourses[0].date">Upcomming course - blue border</div>
    <div [appCourseCreation]="mockCourses[1].date">Fresh course - green border</div>
    <div [appCourseCreation]="mockCourses[2].date">Other course - no Border</div>
  `
})
class TestComponent {
  mockCourses: Course[] = [
    {
      id: 1,
      name: 'Video Course 1. Name tag',
      date: '2020-12-22T12:05:41+00:00',
      length: 150,
      description: 'test description',
      isTopRated: true
    },
    {
      id: 2,
      name: 'Video Course 2. Name tag',
      date: '2020-11-24T12:05:41+00:00',
      length: 320,
      description: 'test description',
      isTopRated: false
    },
    {
      id: 3,
      name: 'Video Course 3. Name tag',
      date: '2020-05-20T12:05:41+00:00',
      length: 0,
      description: 'test description',
      isTopRated: false
    }
  ];
}

describe('CourseCreationDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let templ: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseCreationDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();
    templ = fixture.debugElement.queryAll(By.directive(CourseCreationDirective));
  });

  it('1st temlate element should have class "is-upcomming"', () => {
    const elem = templ[0].nativeElement;
    expect(elem).toHaveClass('is-upcomming');
  });

  it('2nd temlate element hould have class "is-fresh"', () => {
    const elem = templ[1].nativeElement;
    expect(elem).toHaveClass('is-fresh');
  });
});
